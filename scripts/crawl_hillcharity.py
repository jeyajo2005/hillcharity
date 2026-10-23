import urllib.request
import re
import os
from urllib.parse import urljoin, urlparse

pages = [
    'https://hillcharity.com/',
    'https://hillcharity.com/charitable-trust-in-tuticorin',
    'https://hillcharity.com/women',
    'https://hillcharity.com/child',
    'https://hillcharity.com/abandoned',
    'https://hillcharity.com/aged',
    'https://hillcharity.com/awareness',
    'https://hillcharity.com/disaster',
    'https://hillcharity.com/feed',
    'https://hillcharity.com/gallery',
    'https://hillcharity.com/events',
    'https://hillcharity.com/contact'
]

page_images = {}
all_images = set()

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for p in pages:
    try:
        req = urllib.request.Request(p, headers=headers)
        html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
        resolved = []
        for img in imgs:
            if img.endswith('.ico') or 'google' in img or 'analytics' in img:
                continue
            full = urljoin(p, img)
            resolved.append(full)
            all_images.add(full)
        page_images[p] = resolved
        print(f"{p}: found {len(resolved)} images")
    except Exception as e:
        print(f"Error {p}: {e}")

print(f"\nTotal unique images across hillcharity.com: {len(all_images)}")

# Save list of all images with page mappings
with open("scripts/hillcharity_images_map.txt", "w", encoding="utf-8") as f:
    for p, imgs in page_images.items():
        f.write(f"\n=== PAGE: {p} ===\n")
        for img in imgs:
            f.write(f"{img}\n")

print("Saved image mapping to scripts/hillcharity_images_map.txt")
