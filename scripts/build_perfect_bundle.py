import os
import subprocess

# Read original
with open("assets/index-Cv_3OM3M.original.js", "r", encoding="utf-8") as f:
    orig_text = f.read()

pos_oC = orig_text.find(',oC=w.lazy')
assert pos_oC != -1

vendor_code = orig_text[:pos_oC] + ";"

# Fix vn() for file://
old_vn = 'function vn(){return pi()||J(!1),w.useContext(Js).location}'
new_vn = (
    'function vn(){'
    'pi()||J(!1);'
    'let l=w.useContext(Js).location;'
    'if(l&&(window.location.protocol==="file:"||l.pathname.endsWith(".html")||l.pathname.includes(".html"))){'
    'let p=window.location.hash?window.location.hash.replace(/^#/,""):"/";'
    'if(!p.startsWith("/"))p="/"+p;'
    'return{...l,pathname:p}'
    '}'
    'return l'
    '}'
)
assert old_vn in vendor_code
vendor_code = vendor_code.replace(old_vn, new_vn)

# Hash listener
hash_listener = (
    '\nif(typeof window!=="undefined"&&window.location.protocol==="file:"){\n'
    '  window.addEventListener("hashchange",function(){window.location.reload()});\n'
    '  document.addEventListener("click",function(e){\n'
    '    var a=e.target.closest("a");\n'
    '    if(a&&a.getAttribute("href")&&a.getAttribute("href").startsWith("/")&&!a.getAttribute("href").startsWith("//")){\n'
    '      e.preventDefault();\n'
    '      window.location.hash=a.getAttribute("href");\n'
    '    }\n'
    '  },true);\n'
    '}\n'
)
vendor_code += hash_listener

vendor_exports = (
    '\nexport{DP as A,VP as C,zP as H,lt as L,bP as M,Bt as a,ox as b,fe as c,ww as d,vt as e,'
    'U as f,ae as g,Xp as h,yw as i,v as j,si as k,au as l,Pe as m,Ne as n,wf as o,Zn as p,'
    'w as r,tx as s,lu as u,km as v,pC as w, '
    'Pe, ni, G0, wn, da, e1, sC, qP, eC, Yo, vn};\n'
)
vendor_code += vendor_exports

# Relative images
img_names = [
    "hero-community.png", "community-help.png", "community-story.png", "community.png",
    "image.png", "j.png", "k.png", "medical.png", "mom.png", "p.png", "z.png", "Logo.png"
]
for img in img_names:
    vendor_code = vendor_code.replace(f'"./assets/{img}"', f'"./assets/{img}"')
    vendor_code = vendor_code.replace(f'"/{img}"', f'"./assets/{img}"')
    vendor_code = vendor_code.replace(f"'/{img}'", f"'./assets/{img}'")
    vendor_code = vendor_code.replace(f"`/{img}`", f"`./assets/{img}`")

# Replace qP (Navbar) with Bright Blue (#2563EB) & Gold (#FBBF24)
pos_qP = vendor_code.find('qP=')
pos_end_qP = vendor_code.find(',Xo=', pos_qP)
assert pos_qP != -1 and pos_end_qP != -1

new_qP = (
    'qP=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),[i,s]=w.useState(!1),c=vn();'
    'w.useEffect(()=>{const g=()=>t(window.scrollY>40);return window.addEventListener("scroll",g,{passive:!0}),()=>window.removeEventListener("scroll",g)},[]);'
    'w.useEffect(()=>{r(!1)},[c.pathname]);'
    'w.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]);'
    'return v.jsxs(v.Fragment,{children:['
    'v.jsx(Pe.header,{initial:{opacity:0,y:-16},animate:{opacity:1,y:0},transition:{duration:.5,delay:.15,ease:[.25,.46,.45,.94]},className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-white/95 backdrop-blur-md shadow-md py-2":"bg-white/90 backdrop-blur-sm py-3 sm:py-4"} border-b border-blue-100`,children:'
    'v.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:'
    'v.jsxs("div",{className:"flex items-center justify-between h-16 sm:h-20",children:['
    'v.jsxs(lt,{to:"/",className:"flex items-center gap-3 group focus-visible:outline-none rounded-lg","aria-label":"Hill Trust Ashram Home",children:['
    'v.jsx("img",{src:"./assets/Logo.png",alt:"HILL TRUST ASHRAM",className:"h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"})'
    ']}),'
    'v.jsx("nav",{className:"hidden md:flex items-center justify-center",children:'
    'v.jsx("div",{className:"spotlight-nav-pill flex items-center gap-1 px-5 py-2 rounded-full bg-white shadow-[0_4px_24px_rgba(37,99,235,0.08)] border border-blue-100",children:'
    'Cd.map(g=>{const y=c.pathname===g.path;return v.jsxs(lt,{to:g.path,className:`relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 ${y?"text-[#2563EB] font-extrabold":"text-[#1E3A8A] hover:text-[#2563EB]"}`,children:[g.label,y&&v.jsx(Pe.span,{layoutId:"nav-active-pill",className:"absolute -bottom-1 left-2 right-2 h-[3px] rounded-full bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#FBBF24] shadow-[0_2px_8px_rgba(37,99,235,0.5)]",transition:{type:"spring",stiffness:400,damping:30}})]},g.path)})'
    '})}),'
    'v.jsxs("div",{className:"flex items-center gap-3",children:['
    'v.jsx("div",{className:"hidden md:block",children:'
    'v.jsxs("button",{type:"button",onClick:()=>s(!0),className:"btn-gold-donate flex items-center gap-2 px-6 py-2.5 rounded-full font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#1E3A8A] shadow-[0_4px_16px_rgba(251,191,36,0.45)] bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:from-[#FCD34D] hover:to-[#FBBF24] hover:scale-105 active:scale-95 transition-all duration-300",children:['
    'v.jsx("svg",{viewBox:"0 0 24 24",className:"w-4 h-4 fill-current",children:v.jsx("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})}),'
    '"DONATE NOW"]})'
    '}),'
    'v.jsx("button",{className:"md:hidden p-2 rounded-xl transition-all duration-300 text-[#1E3A8A] hover:bg-blue-50",onClick:()=>r(g=>!g),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:v.jsx(ni,{mode:"wait",initial:!1,children:n?v.jsx(Pe.span,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},style:{display:"block"},children:v.jsx(ai,{className:"w-6 h-6"})},"close"):v.jsx(Pe.span,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.2},style:{display:"block"},children:v.jsx(HP,{className:"w-6 h-6"})},"menu")})})'
    ']})'
    ']})})}),'
    'v.jsx(ZP,{isOpen:i,onClose:()=>s(!1),title:"Donate to Hill Trust Ashram",size:"md",children:v.jsxs("div",{className:"flex flex-col items-center gap-5 text-center",children:['
    'v.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#FBBF24] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.35)]",children:v.jsx(Qo,{className:"w-7 h-7 text-white"})}),'
    'v.jsx("p",{className:"text-sm text-slate-600 max-w-sm",children:"Scan the QR code below using any UPI app (GPay, PhonePe, Paytm) or use our bank details to complete your donation."}),'
    'v.jsx("div",{className:"rounded-3xl border-2 border-dashed border-[#FBBF24] p-4 bg-blue-50/60",children:v.jsx("img",{src:"https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=9944704699@upi&pn=Hill%20Trust&cu=INR&am=1001",alt:"UPI QR Code",className:"mx-auto w-52 h-52 object-contain"})}),'
    'v.jsxs("div",{className:"w-full grid grid-cols-1 gap-3",children:['
    'v.jsx("button",{type:"button",className:"w-full py-3 px-6 rounded-full font-bold text-[#1E3A8A] bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:from-[#FCD34D] hover:to-[#FBBF24] shadow-md transition-all",onClick:()=>s(!1),children:"I Have Paid"}),'
    'v.jsx("button",{type:"button",className:"w-full py-3 px-6 rounded-full font-bold text-[#2563EB] border-2 border-[#2563EB] hover:bg-blue-50 transition-all",onClick:()=>{navigator.clipboard.writeText("9944704699@upi")},children:"Copy UPI ID (9944704699@upi)"})'
    ']}),'
    'v.jsxs("p",{className:"text-xs text-slate-500",children:["UPI ID: ",v.jsx("span",{className:"font-bold text-[#2563EB]",children:"9944704699@upi"}),v.jsx("br",{}),"Axis Bank A/C: 919010013069384 - IFSC: UTIB0002095"]})'
    ']})}),'
    'v.jsx(ni,{children:n&&v.jsxs(Pe.div,{initial:{opacity:0,x:"100%"},animate:{opacity:1,x:0},exit:{opacity:0,x:"100%"},transition:{duration:.35,ease:[.25,.46,.45,.94]},className:"fixed inset-0 z-40 md:hidden",children:['
    'v.jsx(Pe.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 bg-[#172554]/60 backdrop-blur-sm",onClick:()=>r(!1)}),'
    'v.jsxs("div",{className:"absolute top-0 right-0 h-full w-[300px] bg-[#EFF6FF] shadow-2xl flex flex-col overflow-y-auto",children:['
    'v.jsxs("div",{className:"flex items-center justify-between px-6 py-6 border-b border-blue-200/60 bg-white",children:['
    'v.jsx(lt,{to:"/",className:"flex items-center gap-2",children:v.jsx("img",{src:"./assets/Logo.png",alt:"HILL TRUST ASHRAM",className:"h-12 w-auto object-contain"})}),'
    'v.jsx("button",{onClick:()=>r(!1),className:"p-2 rounded-xl hover:bg-blue-100 text-[#1E3A8A]","aria-label":"Close menu",children:v.jsx(ai,{className:"w-5 h-5"})})'
    ']}),'
    'v.jsx("nav",{className:"flex-1 px-4 py-6 space-y-1",children:Cd.map((g,y)=>{const x=c.pathname===g.path;return v.jsx(Pe.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.05+y*.06,duration:.3},children:v.jsxs(lt,{to:g.path,className:`flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold text-sm tracking-wider uppercase transition-all duration-200 ${x?"bg-white text-[#2563EB] shadow-sm":"text-[#1E3A8A] hover:bg-white/80 hover:text-[#2563EB]"}`,children:[g.label,x&&v.jsx("div",{className:"w-2 h-2 rounded-full bg-[#FBBF24]"})]})},g.path)})}),'
    'v.jsxs("div",{className:"px-4 pb-8 pt-4 border-t border-blue-200/60 space-y-3 bg-white",children:['
    'v.jsx("button",{type:"button",className:"w-full py-3.5 px-6 rounded-full font-bold text-sm tracking-wider uppercase text-[#1E3A8A] shadow-lg bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]",onClick:()=>s(!0),children:"DONATE NOW"}),'
    'v.jsx(lt,{to:"/contact",className:"block text-center w-full py-3 px-6 rounded-full font-bold text-sm text-[#2563EB] border-2 border-[#2563EB]/30 hover:bg-blue-50",children:"Get In Touch"})'
    ']})'
    ']})'
    ']})})]})}'
)

vendor_code = vendor_code[:pos_qP] + new_qP + vendor_code[pos_end_qP:]

with open("assets/vendor.js", "w", encoding="utf-8") as f:
    f.write(vendor_code)
print("Updated assets/vendor.js (size: " + str(len(vendor_code)) + " bytes)")

# Run esbuild
print("Running esbuild...")
res = subprocess.run(
    ["npx", "esbuild", "assets/entry.js", "--bundle", "--format=iife", "--outfile=assets/bundle.js"],
    capture_output=True,
    text=True,
    shell=True
)
print("esbuild stderr:", res.stderr)
print("esbuild stdout:", res.stdout)
assert res.returncode == 0, "esbuild failed!"
print("=== SUCCESS: Bundle successfully compiled with esbuild! ===")
