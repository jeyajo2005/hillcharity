import os
import re
import subprocess
import shutil

print("=== Applying Bright Blue (#2563EB) + Background (#EFF6FF) + Accent Gold (#FBBF24) Theme ===")

# 1. Update index-DQ1mV4_X.css from original
if not os.path.exists("assets/index-DQ1mV4_X.original.css"):
    shutil.copyfile("assets/index-DQ1mV4_X.css", "assets/index-DQ1mV4_X.original.css")

with open("assets/index-DQ1mV4_X.original.css", "r", encoding="utf-8") as f:
    css = f.read()

color_replacements = [
    # Light backgrounds -> Soft sky-tinted background #EFF6FF
    ("rgb(240 249 240", "rgb(239 246 255"),
    ("rgb(253 250 245", "rgb(239 246 255"),
    ("rgb(249 243 232", "rgb(239 246 255"),
    ("rgb(246 247 249", "rgb(239 246 255"),
    ("rgb(220 240 220", "rgb(219 234 254"),
    ("#dcf0dc", "#eff6ff"),
    
    # Light borders -> Light Blue border (#BFDBFE / #DBEAFE)
    ("rgb(184 224 184", "rgb(191 219 254"),
    ("#b8e0b8", "#bfdbfe"),
    ("rgb(134 201 134", "rgb(147 197 253"),
    ("#86c986", "#93c5fd"),
    
    # Mid-tone primary -> Bright Blue light (#60A5FA)
    ("rgb(82 170 82", "rgb(96 165 250"),
    ("#52aa52", "#60a5fa"),
    
    # Vibrant primary -> Bright Blue Primary (#2563EB)
    ("rgb(45 140 45", "rgb(37 99 235"),
    ("#2d8c2d", "#2563eb"),
    
    # Dark primary (buttons, badges) -> Bright Blue Primary (#2563EB)
    ("rgb(30 110 30", "rgb(37 99 235"),
    ("#1e6e1e", "#2563eb"),
    
    # Deeper primary -> Dark Blue (#1D4ED8)
    ("rgb(24 85 24", "rgb(29 78 216"),
    ("#185518", "#1d4ed8"),
    
    # Very dark primary / text -> Deep Blue / Navy (#1E40AF / #1E3A8A / #172554)
    ("rgb(21 68 21", "rgb(30 64 175"),
    ("rgb(14 48 14", "rgb(30 58 138"),
    ("rgb(14 45 14", "rgb(30 58 138"),
    ("#0e300e", "#1e3a8a"),
    ("rgb(7 24 7", "rgb(23 37 84"),
    
    # Emerald & other greens
    ("#166534", "#2563eb"),
    ("#15803d", "#1d4ed8"),
    ("#4ade80", "#fbbf24"),
    ("#22c55e", "#2563eb"),
    
    # Amber / Orange -> Gold Accent (#FBBF24 / #F59E0B / #FEF3C7)
    ("rgb(255 248 237", "rgb(254 243 199"),
    ("rgb(255 192 101", "rgb(253 230 138"),
    ("rgb(255 159 46", "rgb(251 191 36"),
    ("rgb(255 129 8", "rgb(245 158 11"),
    ("rgb(240 98 0", "rgb(245 158 11"),
    ("rgb(199 73 0", "rgb(217 119 6"),
    ("rgb(158 58 0", "rgb(180 83 9"),
    ("#ff8108", "#fbbf24"),
    ("#ff9f2e", "#fbbf24"),
    
    # RGBA values
    ("rgba(52, 211, 153", "rgba(251, 191, 36"),
    ("rgba(34, 197, 94", "rgba(37, 99, 235"),
    ("rgba(74, 222, 128", "rgba(251, 191, 36"),
    ("rgba(22, 101, 52", "rgba(37, 99, 235"),
    ("rgba(5, 17, 12", "rgba(23, 37, 84"),
    ("#020704", "#0f172a"),
]

for old_val, new_val in color_replacements:
    css = css.replace(old_val, new_val)

custom_styles = """
/* --- Bright Blue (#2563EB) + Background (#EFF6FF) + Accent Gold (#FBBF24) Enhancements --- */
:root {
  --primary: #2563EB;
  --bg-primary: #EFF6FF;
  --accent-gold: #FBBF24;
}

body {
  background-color: #EFF6FF !important;
  color: #1E293B;
}

/* Floating pill navbar */
.spotlight-nav-pill {
  background: rgba(255, 255, 255, 0.96) !important;
  border: 1px solid rgba(37, 99, 235, 0.18) !important;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.08) !important;
}

/* Energetic Gold Donate Button */
.btn-gold-donate {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%) !important;
  color: #1E3A8A !important;
  font-weight: 800 !important;
  border: 1px solid rgba(251, 191, 36, 0.8) !important;
  box-shadow: 0 4px 18px rgba(251, 191, 36, 0.45) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.btn-gold-donate:hover {
  background: linear-gradient(135deg, #FCD34D 0%, #FBBF24 100%) !important;
  color: #172554 !important;
  box-shadow: 0 6px 24px rgba(251, 191, 36, 0.65) !important;
  transform: translateY(-2px) scale(1.03) !important;
}

/* Radiant Deep Blue Ambient Footer */
.footer-ambient {
  background: radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.4) 0%, #1E3A8A 55%, #172554 100%) !important;
  position: relative !important;
  border-top: 1px solid rgba(251, 191, 36, 0.3) !important;
  box-shadow: 0 -20px 50px rgba(23, 37, 84, 0.35) !important;
}
.footer-ambient::before {
  content: "" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  height: 2px !important;
  background: linear-gradient(90deg, transparent 0%, #FBBF24 50%, transparent 100%) !important;
  box-shadow: 0 0 15px rgba(251, 191, 36, 0.6) !important;
}
.footer-social-btn:hover {
  background: #2563EB !important;
  border-color: #FBBF24 !important;
  color: #FFFFFF !important;
  box-shadow: 0 0 16px rgba(251, 191, 36, 0.5) !important;
}
.footer-pill:hover {
  background: rgba(37, 99, 235, 0.25) !important;
  border-color: #FBBF24 !important;
  color: #ffffff !important;
}
"""

css += custom_styles

with open("assets/index-DQ1mV4_X.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Updated assets/index-DQ1mV4_X.css successfully!")

# Run test_bundle.py to update assets/vendor.js and assets/bundle.js
res = subprocess.run(["python", "scripts/test_bundle.py"], capture_output=True, text=True, shell=True)
print(res.stdout)
if res.stderr:
    print(res.stderr)
print("=== All updates complete! ===")
