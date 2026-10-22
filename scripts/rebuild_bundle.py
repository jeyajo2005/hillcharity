import os
import re
import subprocess
import shutil

print("Step 1: Checking and preparing original files...")
if not os.path.exists("assets/index-Cv_3OM3M.original.js"):
    shutil.copyfile("assets/index-Cv_3OM3M.js", "assets/index-Cv_3OM3M.original.js")

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

# Update image paths in all js chunks
for fname in os.listdir("assets"):
    if fname.endswith(".js") and fname not in ["bundle.js", "entry.js", "test_bundle.js", "test_bundle2.js", "index-Cv_3OM3M.original.js"]:
        fpath = os.path.join("assets", fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        
        orig = content
        for img in img_names:
            content = content.replace(f'"/{img}"', f'"./{img}"')
            content = content.replace(f"'/{img}'", f"'./{img}'")
            content = content.replace(f"`/{img}`", f"`./{img}`")
        
        # Also ensure no file imports entry.js
        content = content.replace('"./entry.js"', '"./index-Cv_3OM3M.js"')
        content = content.replace("'./entry.js'", "'./index-Cv_3OM3M.js'")

        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated image paths in {fname}")

# Prepare index-Cv_3OM3M.js
with open("assets/index-Cv_3OM3M.original.js", "r", encoding="utf-8") as f:
    js = f.read()

# Add direct imports at top
imports = (
    'import HomeRoute from "./Home-B5Mf3Si2.js";\n'
    'import AboutRoute from "./About-DoJ-XgS1.js";\n'
    'import ServicesRoute from "./Services-eg4BCXTo.js";\n'
    'import ContactRoute from "./Contact-pTe4Lhbh.js";\n'
)

old_lazy = (
    'oC=w.lazy(()=>qs(()=>import("./Home-B5Mf3Si2.js"),__vite__mapDeps([0,1,2,3,4]))),'
    'lC=w.lazy(()=>qs(()=>import("./About-DoJ-XgS1.js"),__vite__mapDeps([5,6,2,3,1]))),'
    'aC=w.lazy(()=>qs(()=>import("./Services-eg4BCXTo.js"),__vite__mapDeps([7,6,2,4,3]))),'
    'uC=w.lazy(()=>qs(()=>import("./Contact-pTe4Lhbh.js"),__vite__mapDeps([8,6,2])))'
)
new_routes = 'oC=HomeRoute,lC=AboutRoute,aC=ServicesRoute,uC=ContactRoute'

if old_lazy in js:
    js = imports + js.replace(old_lazy, new_routes)
    print("Replaced lazy routes!")
else:
    js = imports + re.sub(
        r'oC=w\.lazy\(.*?\),\s*lC=w\.lazy\(.*?\),\s*aC=w\.lazy\(.*?\),\s*uC=w\.lazy\(.*?\)',
        new_routes,
        js
    )
    print("Replaced lazy routes via regex!")

# Fix vn() function to support file:// protocol and hash navigation
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
    print("Warning: old_vn not found exactly!")

# Hash change listener for file:// protocol
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

# Fallback on file:// protocol for root
old_fallback = 'v.jsx(wn,{path:"*",element:v.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-6 bg-white pt-20"'
new_fallback = 'v.jsx(wn,{path:"*",element:(window.location.protocol==="file:"&&(!window.location.hash||window.location.hash==="#"||window.location.hash==="#/"))?v.jsx(oC,{}):v.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center gap-6 bg-white pt-20"'

if old_fallback in js:
    js = js.replace(old_fallback, new_fallback)
    print("Added fallback for root on file:// protocol!")

# Replace all image paths in js
for img in img_names:
    js = js.replace(f'"/{img}"', f'"./{img}"')
    js = js.replace(f"'/{img}'", f"'./{img}'")

# Write modified index-Cv_3OM3M.js
with open("assets/index-Cv_3OM3M.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Step 2: Bundling assets/index-Cv_3OM3M.js with esbuild...")
res = subprocess.run(
    ["npx", "esbuild", "assets/index-Cv_3OM3M.js", "--bundle", "--format=iife", "--outfile=assets/bundle.js"],
    capture_output=True,
    text=True,
    shell=True
)
print("esbuild stderr:", res.stderr)
print("esbuild stdout:", res.stdout)

# Check bundle.js
with open("assets/bundle.js", "r", encoding="utf-8") as f:
    bundle_text = f.read()

count = bundle_text.count("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")
print(f"Success! Final bundle.js size: {len(bundle_text):,} bytes")
print(f"React instances check: count of secret internals = {count} (should be 4)")

# Cleanup temp test files
for temp_file in ["assets/entry.js", "assets/test_index.js", "assets/test_bundle.js", "assets/test_bundle2.js", "build_test.py", "build_test2.py"]:
    if os.path.exists(temp_file):
        os.remove(temp_file)
        print(f"Removed temp file: {temp_file}")
