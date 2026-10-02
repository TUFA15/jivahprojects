import os
import sys
import json
import base64
from io import BytesIO
from PIL import Image

# Disable PIL max pixel limit for large high-res panoramic shots
Image.MAX_IMAGE_PIXELS = None

# Directory paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
PUBLIC_IMAGES_DIR = os.path.join(PROJECT_ROOT, "public", "images")
OUTPUT_OPTIMIZED_DIR = os.path.join(PROJECT_ROOT, "public", "images", "optimized")
MANIFEST_FILE = os.path.join(PROJECT_ROOT, "src", "data", "imageManifest.json")

# Target widths to generate
SIZES = [480, 768, 1200, 1600]

def get_relative_web_path(full_path):
    rel = os.path.relpath(full_path, os.path.join(PROJECT_ROOT, "public"))
    return "/" + rel.replace("\\", "/")

def generate_blur_placeholder(img):
    small = img.copy()
    small.thumbnail((20, 20), Image.Resampling.LANCZOS)
    buffer = BytesIO()
    small.save(buffer, format="WEBP", quality=20)
    b64 = base64.b64encode(buffer.getvalue()).decode("utf-8")
    return f"data:image/webp;base64,{b64}"

def process_images():
    print("Starting Image Performance Optimization Pass...")
    manifest = {}
    total_original_bytes = 0
    total_optimized_bytes = 0

    os.makedirs(OUTPUT_OPTIMIZED_DIR, exist_ok=True)

    for root, dirs, files in os.walk(PUBLIC_IMAGES_DIR):
        if "optimized" in root:
            continue

        for file in files:
            if not file.lower().endswith(('.jpg', '.jpeg', '.png')):
                continue

            orig_path = os.path.join(root, file)
            rel_folder = os.path.relpath(root, PUBLIC_IMAGES_DIR)
            out_folder = os.path.join(OUTPUT_OPTIMIZED_DIR, rel_folder)
            os.makedirs(out_folder, exist_ok=True)

            orig_size = os.path.getsize(orig_path)
            total_original_bytes += orig_size

            web_orig_path = get_relative_web_path(orig_path)
            base_name, _ = os.path.splitext(file)

            try:
                with Image.open(orig_path) as img:
                    if img.mode in ("RGBA", "P"):
                        img_rgb = img.convert("RGBA")
                    else:
                        img_rgb = img.convert("RGB")

                    orig_w, orig_h = img.size
                    aspect_ratio = round(orig_w / orig_h, 4)

                    placeholder_b64 = generate_blur_placeholder(img_rgb)
                    generated_sources = {}

                    # 1. Full-size WebP capped at 2000px max dimension
                    max_dim = 2000
                    if orig_w > max_dim or orig_h > max_dim:
                        full_img = img_rgb.copy()
                        full_img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
                    else:
                        full_img = img_rgb

                    full_out_filename = f"{base_name}-full.webp"
                    full_out_path = os.path.join(out_folder, full_out_filename)
                    full_img.save(full_out_path, format="WEBP", quality=88, optimize=True)
                    
                    full_bytes = os.path.getsize(full_out_path)
                    total_optimized_bytes += full_bytes
                    generated_sources["full"] = get_relative_web_path(full_out_path)

                    # 2. Responsive width variants
                    srcset_parts = []
                    for width in SIZES:
                        if width < orig_w:
                            ratio = width / float(orig_w)
                            height = int(round(orig_h * ratio))
                            resized = img_rgb.resize((width, height), Image.Resampling.LANCZOS)
                        else:
                            resized = img_rgb.copy()
                            width = orig_w

                        out_filename = f"{base_name}-{width}w.webp"
                        out_path = os.path.join(out_folder, out_filename)

                        quality = 82 if width <= 480 else (84 if width <= 768 else 86)
                        resized.save(out_path, format="WEBP", quality=quality, optimize=True)

                        bytes_size = os.path.getsize(out_path)
                        total_optimized_bytes += bytes_size

                        web_src = get_relative_web_path(out_path)
                        generated_sources[f"{width}w"] = web_src
                        srcset_parts.append(f"{web_src} {width}w")

                    srcset_parts.append(f"{generated_sources['full']} {orig_w}w")
                    srcset_str = ", ".join(srcset_parts)

                    manifest[web_orig_path] = {
                        "originalPath": web_orig_path,
                        "fallbackWebp": generated_sources["full"],
                        "sources": generated_sources,
                        "srcset": srcset_str,
                        "width": orig_w,
                        "height": orig_h,
                        "aspectRatio": aspect_ratio,
                        "placeholder": placeholder_b64,
                    }

                    print(f"[OK] Processed [{file}]: {orig_size / (1024*1024):.2f}MB -> Full WebP {full_bytes / (1024*1024):.2f}MB")

            except Exception as e:
                print(f"[ERROR] Error processing {file}: {e}")

    os.makedirs(os.path.dirname(MANIFEST_FILE), exist_ok=True)
    with open(MANIFEST_FILE, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    orig_mb = total_original_bytes / (1024 * 1024)
    opt_mb = total_optimized_bytes / (1024 * 1024)
    print("\n--- OPTIMIZATION SUMMARY ---")
    print(f"Total Original Images Size:   {orig_mb:.2f} MB")
    print(f"Total Generated WebP Size:    {opt_mb:.2f} MB")
    print(f"Manifest written to: {MANIFEST_FILE}")

if __name__ == "__main__":
    process_images()
