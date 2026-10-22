import subprocess
import os

with open("assets/index-Cv_3OM3M.js", "r", encoding="utf-8") as f:
    js = f.read()

# Add imports at top
imports = (
    'import HomeRoute from "./Home-B5Mf3Si2.js";\n'
    'import AboutRoute from "./About-DoJ-XgS1.js";\n'
    'import ServicesRoute from "./Services-eg4BCXTo.js";\n'
    'import ContactRoute from "./Contact-pTe4Lhbh.js";\n'
)

# Target lazy loaders
old_lazy = (
    'oC=w.lazy(()=>qs(()=>import("./Home-B5Mf3Si2.js"),__vite__mapDeps([0,1,2,3,4]))),'
    'lC=w.lazy(()=>qs(()=>import("./About-DoJ-XgS1.js"),__vite__mapDeps([5,6,2,3,1]))),'
    'aC=w.lazy(()=>qs(()=>import("./Services-eg4BCXTo.js"),__vite__mapDeps([7,6,2,4,3]))),'
    'uC=w.lazy(()=>qs(()=>import("./Contact-pTe4Lhbh.js"),__vite__mapDeps([8,6,2])))'
)

new_routes = 'oC=HomeRoute,lC=AboutRoute,aC=ServicesRoute,uC=ContactRoute'

if old_lazy in js:
    js = imports + js.replace(old_lazy, new_routes)
    print("Replaced lazy loaders with direct imports!")
else:
    print("Warning: old_lazy string not found exactly, searching via regex...")
    import re
    js = imports + re.sub(
        r'oC=w\.lazy\(.*?\),\s*lC=w\.lazy\(.*?\),\s*aC=w\.lazy\(.*?\),\s*uC=w\.lazy\(.*?\)',
        new_routes,
        js
    )

with open("assets/entry.js", "w", encoding="utf-8") as f:
    f.write(js)

print("Saved assets/entry.js. Now running esbuild...")
result = subprocess.run(
    ["npx", "esbuild", "assets/entry.js", "--bundle", "--format=iife", "--outfile=assets/bundle.js"],
    capture_output=True,
    text=True,
    shell=True
)

print("esbuild stdout:", result.stdout)
print("esbuild stderr:", result.stderr)

if os.path.exists("assets/bundle.js"):
    print("Bundle created! Size:", os.path.getsize("assets/bundle.js"), "bytes")
else:
    print("Failed to create bundle!")
