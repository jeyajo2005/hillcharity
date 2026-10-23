import random
random.seed(42)

# Generate an SVG landscape of misty mountains and pine forest silhouette
# matching user's Image 2 (TrafficBot pine forest with mountain watchtower / ridges)
width = 1600
height = 180

svg = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" preserveAspectRatio="none" style="display:block; width:100%; height:auto;">']

# Distant high mountain ridge (Layer 1)
pts1 = [(0, 140)]
for x in range(0, width + 100, 60):
    center_dist = abs(x - 780) / 800.0
    h = 45 + center_dist * 55 + random.randint(-12, 12)
    pts1.append((x, int(h)))
pts1.append((width, height))
pts1.append((0, height))
pts1_str = ' '.join(f'{x},{y}' for x, y in pts1)
svg.append(f'<polygon points="{pts1_str}" fill="#4d685e" opacity="0.45" />')

# Mid-distance mountain ridge (Layer 2)
pts2 = [(0, 160)]
for x in range(0, width + 80, 50):
    center_dist = abs(x - 900) / 900.0
    h = 75 + center_dist * 40 + random.randint(-10, 10)
    pts2.append((x, int(h)))
pts2.append((width, height))
pts2.append((0, height))
pts2_str = ' '.join(f'{x},{y}' for x, y in pts2)
svg.append(f'<polygon points="{pts2_str}" fill="#334d43" opacity="0.75" />')

# Watchtower on the hill ridge around x=780
tower = '''
<g fill="#1a2b25" opacity="0.95">
  <!-- Watchtower roof & cabin -->
  <polygon points="772,62 800,42 828,62" />
  <rect x="776" y="62" width="48" height="20" rx="2" />
  <!-- Railings & window slits -->
  <rect x="780" y="65" width="8" height="12" fill="#334d43" />
  <rect x="792" y="65" width="8" height="12" fill="#334d43" />
  <rect x="804" y="65" width="8" height="12" fill="#334d43" />
  <rect x="816" y="65" width="4" height="12" fill="#334d43" />
  <!-- Tower Legs -->
  <line x1="780" y1="82" x2="770" y2="155" stroke="#1a2b25" stroke-width="3" />
  <line x1="820" y1="82" x2="830" y2="155" stroke="#1a2b25" stroke-width="3" />
  <line x1="795" y1="82" x2="790" y2="155" stroke="#1a2b25" stroke-width="2" />
  <line x1="805" y1="82" x2="810" y2="155" stroke="#1a2b25" stroke-width="2" />
  <!-- Cross struts -->
  <line x1="778" y1="105" x2="822" y2="105" stroke="#1a2b25" stroke-width="2" />
  <line x1="774" y1="130" x2="826" y2="130" stroke="#1a2b25" stroke-width="2" />
  <line x1="778" y1="82" x2="822" y2="105" stroke="#1a2b25" stroke-width="1.5" />
  <line x1="822" y1="82" x2="778" y2="105" stroke="#1a2b25" stroke-width="1.5" />
  <line x1="778" y1="105" x2="826" y2="130" stroke="#1a2b25" stroke-width="1.5" />
  <line x1="822" y1="105" x2="774" y2="130" stroke="#1a2b25" stroke-width="1.5" />
</g>
'''
svg.append(tower)

# Birds in sky
birds = '''
<g stroke="#263b33" stroke-width="1.5" fill="none" opacity="0.6">
  <path d="M840,48 Q844,44 848,48 Q852,44 856,48" />
  <path d="M860,54 Q863,51 866,54 Q869,51 872,54" />
  <path d="M852,60 Q855,57 858,60 Q861,57 864,60" />
</g>
'''
svg.append(birds)

# Layer 3: Mid-distance Pine Trees
svg.append('<g fill="#1d3027" opacity="0.9">')
for x in range(-10, width + 30, 16):
    th = random.randint(45, 75)
    tw = random.randint(14, 20)
    base = 160 + random.randint(-5, 10)
    # Layered pine tree shape
    t_top = base - th
    svg.append(f'<polygon points="{x},{t_top} {x - tw//2},{base} {x + tw//2},{base}" />')
    # lower skirt
    svg.append(f'<polygon points="{x},{t_top + th//3} {x - tw*3//4},{base+5} {x + tw*3//4},{base+5}" />')
svg.append('</g>')

# Layer 4: Dense Foreground Pine Trees Silhouette leading into solid footer
svg.append('<g fill="#0b1712">')
for x in range(-20, width + 40, 12):
    th = random.randint(60, 95)
    tw = random.randint(18, 26)
    base = 175
    t_top = base - th
    svg.append(f'<polygon points="{x},{t_top} {x - tw//2},{base + 10} {x + tw//2},{base + 10}" />')
    svg.append(f'<polygon points="{x},{t_top + th//3} {x - tw*4//5},{base + 10} {x + tw*4//5},{base + 10}" />')

# Solid bottom rectangle blending with main footer background
svg.append(f'<rect x="0" y="170" width="{width}" height="15" fill="#0b1712" />')
svg.append('</g>')

svg.append('</svg>')

with open('assets/footer-mountain-landscape.svg', 'w', encoding='utf-8') as f:
    f.write('\n'.join(svg))
print("Successfully generated assets/footer-mountain-landscape.svg!")
