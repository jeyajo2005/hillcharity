import re

html_files = {
    'index.html': './assets/whatsapp-logo.svg',
    'about/index.html': '../assets/whatsapp-logo.svg',
    'contact/index.html': '../assets/whatsapp-logo.svg',
    'gallery/index.html': '../assets/whatsapp-logo.svg',
    'services/index.html': '../assets/whatsapp-logo.svg'
}

style_addition = '''
      #floating-whatsapp {
        background-color: #25D366 !important;
        color: #ffffff !important;
        box-shadow: 0 8px 25px rgba(37,211,102,0.55) !important;
        text-decoration: none !important;
      }
      #floating-whatsapp:hover {
        background-color: #20bd5a !important;
        box-shadow: 0 12px 35px rgba(37,211,102,0.75) !important;
      }
      #floating-whatsapp span {
        color: #ffffff !important;
        font-weight: 800 !important;
      }
'''

for file_path, logo_rel in html_files.items():
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add CSS rules if not present
    if '#floating-whatsapp {' not in content:
        content = content.replace('</style>', style_addition + '\n</style>')

    # 2. Update floating-whatsapp link tag
    whatsapp_html = f'''<a href="https://wa.me/919944704699?text=Hello%20Hill%20Charity%20Tuticorin,%20I%20would%20like%20to%20support%20your%20mission."
       target="_blank" rel="noopener noreferrer"
       id="floating-whatsapp"
       class="pulse-whatsapp fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-white font-extrabold text-sm shadow-[0_8px_25px_rgba(37,211,102,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 group"
       aria-label="Chat on WhatsApp">
      <img src="{logo_rel}" alt="WhatsApp" class="w-9 h-9 shrink-0" />
      <span class="tracking-wide pr-1 font-extrabold text-sm text-white">WhatsApp Us</span>
    </a>'''

    # Replace old floating-whatsapp
    old_wa_pattern = r'<a href="https://wa\.me[^"]*".*?id="floating-whatsapp".*?</a>'
    content = re.sub(old_wa_pattern, whatsapp_html, content, flags=re.DOTALL)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print('Updated WhatsApp widget in', file_path)
