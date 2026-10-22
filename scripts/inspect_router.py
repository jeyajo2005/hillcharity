import os
import re

imgs = ['hero-community.png', 'community-help.png', 'community-story.png', 'community.png', 'image.png', 'j.png', 'k.png', 'medical.png', 'mom.png', 'p.png', 'z.png', 'Logo.png']

for fname in sorted(os.listdir('assets')):
    if fname.endswith('.js'):
        with open(os.path.join('assets', fname), 'r', encoding='utf-8') as f:
            text = f.read()
        for i in imgs:
            m = re.findall(r'[\'\"`][^\'\"`]*?' + re.escape(i) + r'[\'\"`]', text)
            if m:
                print(f'{fname} -> {i}: {set(m)}')


