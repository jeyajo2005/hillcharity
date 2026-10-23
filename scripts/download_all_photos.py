import os
import urllib.request
from urllib.parse import urlparse

os.makedirs("assets/hill_photos", exist_ok=True)

with open("scripts/hillcharity_images_map.txt", "r", encoding="utf-8") as f:
    lines = f.readlines()

urls = set()
for line in lines:
    line = line.strip()
    if line.startswith("http") and not line.endswith(".ico") and "logo.png" not in line and "whatsapp.png" not in line:
        urls.add(line)

print(f"Total unique images to download: {len(urls)}")

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

success = 0
failed = 0
for u in sorted(urls):
    parsed = urlparse(u)
    # create unique filename based on path
    # e.g. /img/gallery/g1.jpg -> gallery_g1.jpg
    parts = [p for p in parsed.path.split('/') if p]
    if len(parts) >= 2:
        filename = "_".join(parts[-2:])
    else:
        filename = parts[-1]
    
    filepath = os.path.join("assets/hill_photos", filename)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
        success += 1
        continue
    
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = resp.read()
            with open(filepath, "wb") as out:
                out.write(data)
        success += 1
        print(f"[{success}/{len(urls)}] Downloaded: {filename} ({len(data)} bytes)")
    except Exception as e:
        failed += 1
        print(f"Failed {u}: {e}")

print(f"\nFinished! Successfully downloaded {success} images, failed {failed}.")
