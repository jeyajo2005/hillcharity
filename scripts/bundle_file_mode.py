import os
import re
import subprocess

# 1. Update image paths in all js chunks in assets/
img_names = [
    "hero-community.png",
    "community-help.png",
    "community-story.png",
    "community.png",
    "image.png",
    "j.png",
    "k.png",
    "medical.png",
    "mom.png",
    "p.png",
    "z.png",
    "Logo.png"
]

for fname in os.listdir("assets"):
    if fname.endswith(".js"):
        fpath = os.path.join("assets", fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        
        orig = content
        for img in img_names:
            content = content.replace(f'"/{img}"', f'"./{img}"')
            content = content.replace(f"'/{img}'", f"'./{img}'")
            content = content.replace(f"`/{img}`", f"`./{img}`")
        
        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated images in {fname}")

# 2. Update assets/entry.js with vn() normalizer for file:// and relative images
with open("assets/index-Cv_3OM3M.js", "r", encoding="utf-8") as f:
    js = f.read()

# Add direct imports at top
imports = (
    'import HomeRoute from "./Home-B5Mf3Si2.js";\n'
    'import AboutRoute from "./About-DoJ-XgS1.js";\n'
    'import ServicesRoute from "./Services-eg4BCXTo.js";\n'
    'import ContactRoute from "./Contact-pTe4Lhbh.js";\n'
)

# Route replacement
old_lazy = (
    'oC=w.lazy(()=>qs(()=>import("./Home-B5Mf3Si2.js"),__vite__mapDeps([0,1,2,3,4]))),'
    'lC=w.lazy(()=>qs(()=>import("./About-DoJ-XgS1.js"),__vite__mapDeps([5,6,2,3,1]))),'
    'aC=w.lazy(()=>qs(()=>import("./Services-eg4BCXTo.js"),__vite__mapDeps([7,6,2,4,3]))),'
    'uC=w.lazy(()=>qs(()=>import("./Contact-pTe4Lhbh.js"),__vite__mapDeps([8,6,2])))'
)
new_routes = 'oC=HomeRoute,lC=AboutRoute,aC=ServicesRoute,uC=ContactRoute'

if old_lazy in js:
    js = imports + js.replace(old_lazy, new_routes)
else:
    js = imports + re.sub(
        r'oC=w\.lazy\(.*?\),\s*lC=w\.lazy\(.*?\),\s*aC=w\.lazy\(.*?\),\s*uC=w\.lazy\(.*?\)',
        new_routes,
        js
    )

# Fix vn() function to support file:// protocol
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
if old_vn in js:
    js = js.replace(old_vn, new_vn)
    print("Injected file:// location normalizer into vn()!")
else:
    print("Warning: old_vn not found exactly")

# If on file:// protocol, update Link clicks or hash change
listen_hash = (
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
js += listen_hash

# Also replace fallback in Routes G0 so "*" shows Home on file://
old_fallback = 'v.jsx(wn,{path:"*",element:v.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-6 bg-white pt-20"'
new_fallback = 'v.jsx(wn,{path:"*",element:(window.location.protocol==="file:"&&(!window.location.hash||window.location.hash==="#"||window.location.hash==="#/"))?v.jsx(oC,{}):v.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-6 bg-white pt-20"'

if old_fallback in js:
    js = js.replace(old_fallback, new_fallback)
    print("Added fallback for root on file:// protocol!")

# Replace all image paths
for img in img_names:
    js = js.replace(f'"/{img}"', f'"./{img}"')
    js = js.replace(f"'/{img}'", f"'./{img}'")

with open("assets/entry.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Running esbuild to create bundle.js...")
result = subprocess.run(
    ["npx", "esbuild", "assets/entry.js", "--bundle", "--format=iife", "--outfile=assets/bundle.js"],
    capture_output=True,
    text=True,
    shell=True
)

print(result.stdout)
print(result.stderr)
print("Finished bundling! Size:", os.path.getsize("assets/bundle.js"))
