import os
import glob

base_dir = r"c:\Users\welcome\Downloads\hillcharity"
html_files = [
    os.path.join(base_dir, "index.html"),
    os.path.join(base_dir, "gallery", "index.html"),
    os.path.join(base_dir, "about", "index.html"),
    os.path.join(base_dir, "services", "index.html"),
    os.path.join(base_dir, "contact", "index.html"),
]

for file_path in html_files:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # update bundle.js?v=
        import re
        new_content = re.sub(r'bundle\.js\?v=\d+', 'bundle.js?v=1792734600', content)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Updated cachebuster in", file_path)
