vendor_file = 'assets/vendor.js'

with open(vendor_file, 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Target the newsletter block in vendor.js
newsletter_target = 'v.jsx("div",{className:"mt-14",children:v.jsxs("div",{className:"footer-card p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[v.jsxs("div",{children:[v.jsx("h4",{className:"font-display font-bold text-xl text-white",children:"Stay connected with our impact."}),v.jsx("p",{className:"text-charcoal-400 text-sm mt-1",children:"Monthly updates on community transformations. No spam, ever."})]}),v.jsxs("form",{onSubmit:e=>e.preventDefault(),className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto","aria-label":"Newsletter signup",children:[v.jsx("input",{type:"email",placeholder:"Enter your email address",className:"w-full sm:w-72 px-5 py-3.5 rounded-full bg-black/40 border border-white/15 text-white placeholder-charcoal-400 text-sm focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-400/20 transition-all","aria-label":"Email address for newsletter"}),v.jsxs(Pe.button,{type:"submit",whileHover:{scale:1.02},whileTap:{scale:.97},className:"w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-forest-600 to-forest-500 hover:from-forest-500 hover:to-forest-400 text-white rounded-full font-semibold text-sm transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-2",children:["Subscribe",v.jsx(DP,{className:"w-3.5 h-3.5"})]})]})]})}),'

if newsletter_target in text:
    text = text.replace(newsletter_target, '')
    print('Newsletter block removed from vendor.js!')
else:
    print('Newsletter block not found!')

# 2. Reduce footer padding from pt-20 pb-12 to pt-8 pb-5
old_pad = 'pt-20 pb-12'
new_pad = 'pt-8 sm:pt-10 pb-5 sm:pb-6'
if old_pad in text:
    text = text.replace(old_pad, new_pad)
    print('Padding updated!')

# 3. Reduce gap-12 to gap-6
old_grid = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12'
new_grid = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'
if old_grid in text:
    text = text.replace(old_grid, new_grid)
    print('Grid updated!')

# 4. Reduce copyright bar margin from mt-12 pt-6 to mt-6 pt-3
old_cop = 'className:"mt-12 pt-6 border-t border-white/10'
new_cop = 'className:"mt-6 pt-3 border-t border-white/10'
if old_cop in text:
    text = text.replace(old_cop, new_cop)
    print('Copyright bar updated!')

with open(vendor_file, 'w', encoding='utf-8') as f:
    f.write(text)

print('Done updating assets/vendor.js!')
