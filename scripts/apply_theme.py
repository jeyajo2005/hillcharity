import os
import re
import subprocess
import shutil

print("=== Applying Navy Blue + White + Orange Theme ===")

# 1. Update index-DQ1mV4_X.css
if not os.path.exists("assets/index-DQ1mV4_X.original.css"):
    shutil.copyfile("assets/index-DQ1mV4_X.css", "assets/index-DQ1mV4_X.original.css")

with open("assets/index-DQ1mV4_X.original.css", "r", encoding="utf-8") as f:
    css = f.read()

# Replace green color definitions with Navy Blue, White, and Orange
color_replacements = [
    # Light green backgrounds -> clean white / slate-50
    ("rgb(240 249 240", "rgb(248 250 252"),
    ("rgb(220 240 220", "rgb(241 245 249"),
    ("#dcf0dc", "#f1f5f9"),
    # Light green borders -> clean slate-200 border
    ("rgb(184 224 184", "rgb(226 232 240"),
    ("#b8e0b8", "#e2e8f0"),
    ("rgb(134 201 134", "rgb(203 213 225"),
    ("#86c986", "#cbd5e1"),
    # Mid green -> warm orange
    ("rgb(82 170 82", "rgb(251 146 60"),
    ("#52aa52", "#fb923c"),
    # Vibrant green -> vibrant orange
    ("rgb(45 140 45", "rgb(249 115 22"),
    ("#2d8c2d", "#f97316"),
    # Dark green (buttons, badges) -> rich orange (#ea580c)
    ("rgb(30 110 30", "rgb(234 88 12"),
    ("#1e6e1e", "#ea580c"),
    # Deeper green -> dark orange hover (#c2410c)
    ("rgb(24 85 24", "rgb(194 65 12"),
    ("#185518", "#c2410c"),
    # Very dark green (texts, deep backgrounds) -> Navy Blue (#0b1b3d / #0a192f)
    ("rgb(21 68 21", "rgb(11 27 61"),
    ("rgb(14 48 14", "rgb(11 27 61"),
    ("rgb(14 45 14", "rgb(10 25 47"),
    ("#0e300e", "#0a192f"),
    ("rgb(7 24 7", "rgb(5 14 27"),
    # Emerald & other greens
    ("#166534", "#ea580c"),
    ("#15803d", "#ea580c"),
    ("#4ade80", "#f97316"),
    ("#22c55e", "#f97316"),
    # rgba greens -> rgba orange / navy
    ("rgba(52, 211, 153", "rgba(249, 115, 22"),
    ("rgba(34, 197, 94", "rgba(249, 115, 22"),
    ("rgba(74, 222, 128", "rgba(249, 115, 22"),
    ("rgba(22, 101, 52", "rgba(11, 27, 61"),
    ("rgba(5, 17, 12", "rgba(5, 14, 27"),
    ("#020704", "#050e1b"),
]

for old_val, new_val in color_replacements:
    css = css.replace(old_val, new_val)

# Add custom classes for the new floating pill navbar, donate button, and gold/orange accents
custom_styles = """
/* --- Custom Navy Blue + White + Orange Theme Enhancements --- */
.spotlight-nav-pill {
  background: rgba(255, 255, 255, 0.96) !important;
  border: 1px solid rgba(11, 27, 61, 0.12) !important;
  box-shadow: 0 4px 24px rgba(11, 27, 61, 0.08) !important;
}
.btn-gold-donate {
  background: linear-gradient(135deg, #B8860B 0%, #D4820A 40%, #EA580C 100%) !important;
  color: #ffffff !important;
  box-shadow: 0 4px 18px rgba(212, 130, 10, 0.45) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}
.btn-gold-donate:hover {
  background: linear-gradient(135deg, #C9A020 0%, #EA580C 50%, #F97316 100%) !important;
  box-shadow: 0 6px 24px rgba(234, 88, 12, 0.55) !important;
  transform: translateY(-2px) scale(1.02) !important;
}
"""

css += custom_styles

with open("assets/index-DQ1mV4_X.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Updated assets/index-DQ1mV4_X.css with Navy Blue + White + Orange palette!")

# 2. Update scripts/build_perfect_bundle.py to generate new Navbar qP and Footer eC
with open("scripts/build_perfect_bundle.py", "r", encoding="utf-8") as f:
    bundle_script = f.read()

# We need to replace the old qP component in vendor_code with our new pill navbar and logo
nav_replacement_code = '''
# --- CUSTOM NAVBAR (qP) & FOOTER (eC) REPLACEMENTS ---
# Replace old qP with the new floating pill navbar, prominent logo, and golden-orange donate button
pos_qP = vendor_code.find('qP=')
pos_end_qP = vendor_code.find(',eC=', pos_qP)
assert pos_qP != -1 and pos_end_qP != -1, "Could not find qP bounds in vendor_code"

new_qP = \'\'\'qP=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),[i,s]=w.useState(!1),c=vn();w.useEffect(()=>{const g=()=>t(window.scrollY>40);return window.addEventListener("scroll",g,{passive:!0}),()=>window.removeEventListener("scroll",g)},[]);w.useEffect(()=>{r(!1)},[c.pathname]);w.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]);return v.jsxs(v.Fragment,{children:[v.jsx(Pe.header,{initial:{opacity:0,y:-16},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15,ease:[.25,.46,.45,.94]},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-white/95 backdrop-blur-md shadow-md py-2":"bg-white/90 backdrop-blur-sm py-3 sm:py-4"} border-b border-slate-200/60`,children:v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:v.jsxs("div",{className:"flex items-center justify-between h-16 sm:h-20",children:[v.jsxs(lt,{to:"/",className:"flex items-center gap-3 group focus-visible:outline-none rounded-lg","aria-label":"Hill Trust Ashram Home",children:[v.jsx("img",{src:"./assets/Logo.png",alt:"HILL TRUST ASHRAM",className:"h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"})]}),v.jsx("div",{className:"hidden md:flex items-center justify-center",children:v.jsx("div",{className:"spotlight-nav-pill flex items-center gap-1 px-5 py-2 rounded-full bg-white shadow-[0_4px_24px_rgba(11,27,61,0.08)] border border-slate-200",children:Cd.map(g=>{const y=c.pathname===g.path;return v.jsxs(lt,{to:g.path,className:`relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 ${y?"text-[#D4820A] font-extrabold":"text-[#0B1B3D] hover:text-[#EA580C]"}`,children:[g.label,y&&v.jsx(Pe.span,{layoutId:"nav-active-pill",className:"absolute -bottom-1 left-2 right-2 h-[3px] rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4820A] to-[#EA580C] shadow-[0_2px_8px_rgba(212,130,10,0.5)]",transition:{type:"spring",stiffness:400,damping:30}})]},g.path)})}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"hidden md:block",children:v.jsxs("button",{type:"button",onClick:()=>s(!0),className:"btn-gold-donate flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-white shadow-[0_4px_16px_rgba(212,130,10,0.4)] bg-gradient-to-r from-[#B8860B] via-[#D4820A] to-[#EA580C] hover:from-[#C9A020] hover:to-[#F97316] hover:scale-105 active:scale-95 transition-all duration-300",children:[v.jsx("svg",{viewBox:"0 0 24 24",className:"w-4 h-4 fill-current",children:v.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),"DONATE NOW"]})}),v.jsx("button",{className:"md:hidden p-2 rounded-xl transition-all duration-300 text-[#0B1B3D] hover:bg-slate-100",onClick:()=>r(g=>!g),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:v.jsx(ni,{mode:"wait",initial:!1,children:n?v.jsx(Pe.span,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},style:{display:"block"},children:v.jsx(ai,{className:"w-6 h-6"})},"close"):v.jsx(Pe.span,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.2},style:{display:"block"},children:v.jsx(HP,{className:"w-6 h-6"})},"menu")})})]})]})})}),v.jsx(ZP,{isOpen:i,onClose:()=>s(!1),title:"Donate to Hill Trust Ashram",size:"md",children:v.jsxs("div",{className:"flex flex-col items-center gap-5 text-center",children:[v.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-[#EA580C] to-[#B8860B] text-white flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.35)]",children:v.jsx(Qo,{className:"w-7 h-7"})}),v.jsx("p",{className:"text-sm text-charcoal-600 max-w-sm",children:"Scan the QR code below using any UPI app (GPay, PhonePe, Paytm) or use our bank details to complete your donation."}),v.jsx("div",{className:"rounded-3xl border-2 border-dashed border-amber-300 p-4 bg-orange-50/50",children:v.jsx("img",{src:"https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=9944704699@upi&pn=Hill%20Trust&cu=INR&am=1001",alt:"UPI QR Code",className:"mx-auto w-52 h-52 object-contain"})}),v.jsxs("div",{className:"w-full grid grid-cols-1 gap-3",children:[v.jsx("button",{type:"button",className:"w-full py-3 px-6 rounded-full font-bold text-white bg-gradient-to-r from-[#D4820A] to-[#EA580C] hover:from-[#C9A020] hover:to-[#F97316] shadow-md transition-all",onClick:()=>s(!1),children:"I Have Paid"}),v.jsx("button",{type:"button",className:"w-full py-3 px-6 rounded-full font-bold text-[#0B1B3D] border-2 border-[#0B1B3D]/30 hover:bg-[#0B1B3D]/5 transition-all",onClick:()=>{navigator.clipboard.writeText("9944704699@upi")},children:"Copy UPI ID (9944704699@upi)"})]}),v.jsxs("p",{className:"text-xs text-charcoal-500",children:["UPI ID: ",v.jsx("span",{className:"font-semibold text-orange-600",children:"9944704699@upi"}),v.jsx("br",{}),"Axis Bank A/C: 919010013069384 - IFSC: UTIB0002095"]})]})}),v.jsx(ni,{children:n&&v.jsxs(Pe.div,{initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{duration:.35,ease:[.25,.46,.45,.94]},className:"fixed inset-0 z-40 md:hidden",children:[v.jsx(Pe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 bg-[#0B1B3D]/60 backdrop-blur-sm",onClick:()=>r(!1)}),v.jsxs("div",{className:"absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl flex flex-col overflow-y-auto",children:[v.jsxs("div",{className:"flex items-center justify-between px-6 py-6 border-b border-slate-100",children:[v.jsx(lt,{to:"/",className:"flex items-center gap-2",children:v.jsx("img",{src:"./assets/Logo.png",alt:"HILL TRUST ASHRAM",className:"h-12 w-auto object-contain"})}),v.jsx("button",{onClick:()=>r(!1),className:"p-2 rounded-xl hover:bg-slate-100 text-[#0B1B3D]","aria-label":"Close menu",children:v.jsx(ai,{className:"w-5 h-5"})})]}),v.jsx("nav",{className:"flex-1 px-4 py-6 space-y-1",children:Cd.map((g,y)=>{const x=c.pathname===g.path;return v.jsx(Pe.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.05+y*.06,duration:.3},children:v.jsxs(lt,{to:g.path,className:`flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold text-sm tracking-wider uppercase transition-all duration-200 ${x?"bg-orange-50 text-[#EA580C]":"text-[#0B1B3D] hover:bg-slate-50 hover:text-[#EA580C]"}`,children:[g.label,x&&v.jsx("div",{className:"w-2 h-2 rounded-full bg-[#EA580C]"})]})},g.path)})}),v.jsxs("div",{className:"px-4 pb-8 pt-4 border-t border-slate-100 space-y-3",children:[v.jsx("button",{type:"button",className:"w-full py-3.5 px-6 rounded-full font-bold text-sm tracking-wider uppercase text-white shadow-lg bg-gradient-to-r from-[#B8860B] via-[#D4820A] to-[#EA580C]",onClick:()=>s(!0),children:"DONATE NOW"}),v.jsx(lt,{to:"/contact",className:"block text-center w-full py-3 px-6 rounded-full font-bold text-sm text-[#0B1B3D] border-2 border-[#0B1B3D]/20 hover:bg-slate-50",children:"Get In Touch"})]})]})]})})]})};\'\'\'

vendor_code = vendor_code[:pos_qP] + new_qP + vendor_code[pos_end_qP + 1:]
print("Injected new qP Navbar with floating pill, logo, and golden-orange donate button!")
'''

# Check if nav_replacement_code is already in bundle_script
if "CUSTOM NAVBAR (qP)" not in bundle_script:
    # Insert right before step 2 saving
    target = 'with open("assets/vendor.js", "w", encoding="utf-8") as f:'
    assert target in bundle_script, "Target string not found in build_perfect_bundle.py"
    bundle_script = bundle_script.replace(target, nav_replacement_code + "\n" + target)

    with open("scripts/build_perfect_bundle.py", "w", encoding="utf-8") as f:
        f.write(bundle_script)
    print("Updated scripts/build_perfect_bundle.py with navbar injection!")

# 3. Rebuild the bundle
print("Running scripts/build_perfect_bundle.py to generate bundle.js...")
res = subprocess.run(
    ["python", "scripts/build_perfect_bundle.py"],
    capture_output=True,
    text=True,
    shell=True
)
print("build_perfect_bundle stdout:", res.stdout)
print("build_perfect_bundle stderr:", res.stderr)
print("=== Theme & Navbar Build Complete! ===")
