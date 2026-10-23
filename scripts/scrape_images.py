import urllib.request
import re
from urllib.parse import urljoin

urls = [
    'https://hillcharity.com/',
    'https://hillcharity.com/about',
    'https://hillcharity.com/awareness',
    'https://hillcharity.com/women-empowerment',
    'https://hillcharity.com/child-development-centre',
    'https://hillcharity.com/abandoned-children-home',
    'https://hillcharity.com/home-for-the-aged',
    'https://hillcharity.com/disaster-relief-program',
    'https://hillcharity.com/feed-the-hungry',
    'https://hillcharity.com/gallery',
    'https://hillcharity.com/contact'
]

img_urls = set()
for u in urls:
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        # find img src
        found = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.IGNORECASE)
        for img in found:
            full_url = urljoin(u, img)
            img_urls.add(full_url)
    except Exception as e:
        print(f"Error fetching {u}: {e}")

print(f"Total found images: {len(img_urls)}")
for img in sorted(img_urls):
    print(img)
