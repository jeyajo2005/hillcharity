import re
import os
import subprocess
import time

print("--- Step 1: Update Home-B5Mf3Si2.js to use ONLY pure photos (no text in photo, no text overlay) ---")
with open("assets/Home-B5Mf3Si2.js", "r", encoding="utf-8") as f:
    code = f.read()

# Only pure authentic photos of children, elderly mothers and staff
# (Strictly excluding slider3 and slider6 which had graphic text)
pure_slides = '''const HERO_SLIDES = [
  "./assets/enhanced/slider_2.jpg",
  "./assets/enhanced/slider_8.jpg",
  "./assets/enhanced/slider_7.jpg",
  "./assets/enhanced/slider_9.jpg",
  "./assets/enhanced/slider_1.jpg"
];'''

pos_hs_start = code.find("const HERO_SLIDES = [")
pos_hs_end = code.find("];", pos_hs_start)
assert pos_hs_start != -1 and pos_hs_end != -1
code = code[:pos_hs_start] + pure_slides + code[pos_hs_end + 2:]

with open("assets/Home-B5Mf3Si2.js", "w", encoding="utf-8") as f:
    f.write(code)

print("Updated HERO_SLIDES successfully.")

print("\n--- Step 2: Cache-bust bundle.js in index.html ---")
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

v_tag = f"v={int(time.time())}"

# Replace bundle.js script tag
html = re.sub(
    r'<script defer src=["\'].*?bundle\.js.*?["\']></script>',
    f'<script defer src="./assets/bundle.js?{v_tag}"></script>',
    html
)

# Ensure no-cache meta tags are present in <head>
meta_nocache = '''    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
'''

if "Cache-Control" not in html:
    html = html.replace("<head>", "<head>\n" + meta_nocache)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print(f"Updated index.html with cache-buster ?{v_tag} and no-cache meta tags.")

print("\n--- Step 3: Bundle with esbuild ---")
res = subprocess.run(
    ["npx", "esbuild", "assets/entry.js", "--bundle", "--format=iife", "--outfile=assets/bundle.js"],
    capture_output=True,
    text=True,
    shell=True
)
print("esbuild stdout:", res.stdout)
print("esbuild stderr:", res.stderr)
assert res.returncode == 0, "esbuild bundle failed!"
print(f"SUCCESS! Bundle rebuilt: {os.path.getsize('assets/bundle.js'):,} bytes.")
