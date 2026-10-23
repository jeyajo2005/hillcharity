import re
import os
import subprocess
import time

print("=== Tightening Gallery Gaps & Spacing ===")

# 1. Update assets/Gallery.js
with open("assets/Gallery.js", "r", encoding="utf-8") as f:
    gal = f.read()

# Compact hero header
gal = gal.replace(
    'className: "relative bg-gradient-to-b from-[#1E3A8A] to-[#172554] text-white py-16 sm:py-24 overflow-hidden"',
    'className: "relative bg-gradient-to-b from-[#1E3A8A] to-[#172554] text-white py-8 sm:py-12 overflow-hidden"'
)
gal = gal.replace('mb-6",\n              children: "Real Impact in Tuticorin"', 'mb-3",\n              children: "Real Impact in Tuticorin"')
gal = gal.replace('leading-tight mb-6",', 'leading-tight mb-3",')
gal = gal.replace('gap-6 mt-8 text-sm', 'gap-4 mt-5 text-xs sm:text-sm')

# Compact gallery section
gal = gal.replace(
    'className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"',
    'className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"'
)
gal = gal.replace('gap-2.5 mb-10"', 'gap-2 mb-6"')

# Tight, compact, modern grid (no wide awkward gaps, 5 columns on desktop, 2 on mobile)
gal = gal.replace(
    'className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"',
    'className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3"'
)
gal = gal.replace('rounded-2xl overflow-hidden', 'rounded-xl overflow-hidden')
gal = gal.replace('mt-12",\n                children: e.jsxs("button"', 'mt-8",\n                children: e.jsxs("button"')

# Replace giant CTASection with a sleek, compact bottom donation strip
compact_bottom_strip = '''e.jsx("section", {
        className: "bg-gradient-to-r from-[#1E3A8A] to-[#172554] text-white py-8 sm:py-10 border-t border-blue-400/20 mt-8",
        children: e.jsx("div", {
          className: "max-w-5xl mx-auto px-4 text-center",
          children: e.jsxs("div", {
            className: "flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [
              e.jsxs("div", {
                className: "text-center sm:text-left",
                children: [
                  e.jsx("h3", {
                    className: "font-display font-bold text-lg sm:text-xl text-white",
                    children: "Want to bring smiles to these children and elderly mothers?"
                  }),
                  e.jsx("p", {
                    className: "text-blue-200 text-xs sm:text-sm mt-0.5",
                    children: "Your support provides daily nutrition, healthcare, and education in Tuticorin."
                  })
                ]
              }),
              e.jsxs("div", {
                className: "flex items-center gap-3 shrink-0",
                children: [
                  e.jsx(Link, {
                    to: "/contact",
                    className: "px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:scale-105 transition-all shadow-md",
                    children: "Donate Now"
                  }),
                  e.jsx(Link, {
                    to: "/contact",
                    className: "px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all",
                    children: "Contact Ashram"
                  })
                ]
              })
            ]
          })
        })
      })'''

gal = gal.replace('e.jsx(CTASection, {})', compact_bottom_strip)

with open("assets/Gallery.js", "w", encoding="utf-8") as f:
    f.write(gal)
print("Updated assets/Gallery.js with tight gaps and compact padding!")

# 2. Update HomeGallery in assets/Home-B5Mf3Si2.js
with open("assets/Home-B5Mf3Si2.js", "r", encoding="utf-8") as f:
    home = f.read()

# Reduce section padding from py-20 lg:py-28 to py-10 sm:py-14
home = home.replace(
    'className: "py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden"',
    'className: "py-10 sm:py-14 bg-slate-900 text-white relative overflow-hidden"'
)
# Reduce header margin from mb-12 to mb-6
home = home.replace(
    'className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"',
    'className: "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6"'
)
# Reduce grid gaps from gap-4 sm:gap-6 to gap-2.5 sm:gap-3
home = home.replace(
    'className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"',
    'className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3"'
)
home = home.replace('rounded-2xl overflow-hidden aspect-[4/3]', 'rounded-xl overflow-hidden aspect-[4/3]')

with open("assets/Home-B5Mf3Si2.js", "w", encoding="utf-8") as f:
    f.write(home)
print("Updated HomeGallery in Home-B5Mf3Si2.js with tight gaps!")

# 3. Update index.html with new cache-buster
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

v_tag = f"v={int(time.time())}"
html = re.sub(
    r'<script defer src=["\'].*?bundle\.js.*?["\']></script>',
    f'<script defer src="./assets/bundle.js?{v_tag}"></script>',
    html
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print(f"Updated index.html with cache-buster ?{v_tag}")

# 4. Rebuild bundle
print("\nRebuilding bundle.js with esbuild...")
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
