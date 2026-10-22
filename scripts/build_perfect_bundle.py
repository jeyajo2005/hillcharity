import os
import re
import subprocess
import shutil

print("--- Starting Clean Single-React DAG Bundle Build ---")

# Step 1: Ensure clean source
with open("assets/index-Cv_3OM3M.original.js", "r", encoding="utf-8") as f:
    orig_text = f.read()

# Step 2: Separate vendor.js from index-Cv_3OM3M.original.js
# Cut at pos_oC = orig_text.find(',oC=w.lazy')
pos_oC = orig_text.find(',oC=w.lazy')
assert pos_oC != -1, "Could not find ,oC=w.lazy in index-Cv_3OM3M.original.js"

vendor_code = orig_text[:pos_oC] + ";"

# Fix vn() in vendor_code to support file:// protocol and hash navigation
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
assert old_vn in vendor_code, "old_vn not found in vendor_code"
vendor_code = vendor_code.replace(old_vn, new_vn)

# Hash listener for file:// protocol
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

# Export original exports + entry exports
vendor_exports = (
    '\nexport{DP as A,VP as C,zP as H,lt as L,bP as M,Bt as a,ox as b,fe as c,ww as d,vt as e,'
    'U as f,ae as g,Xp as h,yw as i,v as j,si as k,au as l,Pe as m,Ne as n,wf as o,Zn as p,'
    'w as r,tx as s,lu as u,km as v,pC as w, '
    'Pe, ni, G0, wn, da, e1, sC, qP, eC, Yo, vn};\n'
)
vendor_code += vendor_exports

# Image names to make relative
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
# Helper to replace image paths cleanly
def update_images(text):
    for img in img_names:
        # replace ./assets/ first to not double prefix, or match variations
        text = text.replace(f'"./assets/{img}"', f'"__ASSET_IMG_{img}__"')
        text = text.replace(f"'./assets/{img}'", f"'__ASSET_IMG_{img}__'")
        text = text.replace(f"`./assets/{img}`", f"`__ASSET_IMG_{img}__`")

        text = text.replace(f'"./{img}"', f'"./assets/{img}"')
        text = text.replace(f"'./{img}'", f"'./assets/{img}'")
        text = text.replace(f"`./{img}`", f"`./assets/{img}`")

        text = text.replace(f'"/{img}"', f'"./assets/{img}"')
        text = text.replace(f"'/{img}'", f"'./assets/{img}'")
        text = text.replace(f"`/{img}`", f"`./assets/{img}`")

        text = text.replace(f'"__ASSET_IMG_{img}__"', f'"./assets/{img}"')
        text = text.replace(f"'__ASSET_IMG_{img}__'", f"'./assets/{img}'")
        text = text.replace(f"`__ASSET_IMG_{img}__`", f"`./assets/{img}`")
    return text

vendor_code = update_images(vendor_code)

with open("assets/vendor.js", "w", encoding="utf-8") as f:
    f.write(vendor_code)
print("Created assets/vendor.js (size: " + str(len(vendor_code)) + " bytes)")

# Step 3: Update all chunk files to import from ./vendor.js instead of ./index-Cv_3OM3M.js
for fname in os.listdir("assets"):
    if fname.endswith(".js") and fname not in ["bundle.js", "entry.js", "vendor.js", "index-Cv_3OM3M.original.js", "index-Cv_3OM3M.js"]:
        fpath = os.path.join("assets", fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        
        orig = content
        content = content.replace('"./index-Cv_3OM3M.js"', '"./vendor.js"')
        content = content.replace("'./index-Cv_3OM3M.js'", "'./vendor.js'")
        content = update_images(content)
        
        if content != orig:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated imports and image paths in {fname}")

# Step 4: Create clean assets/entry.js
entry_code = '''import { j as v, r as w, Pe, ni, G0, wn, da, e1, sC, qP, eC, Yo, vn } from "./vendor.js";
import HomeRoute from "./Home-B5Mf3Si2.js";
import AboutRoute from "./About-DoJ-XgS1.js";
import ServicesRoute from "./Services-eg4BCXTo.js";
import ContactRoute from "./Contact-pTe4Lhbh.js";

const oC = HomeRoute;
const lC = AboutRoute;
const aC = ServicesRoute;
const uC = ContactRoute;

const cC = () => v.jsx("div", {
  className: "min-h-screen flex items-center justify-center bg-white",
  children: v.jsxs(Pe.div, {
    animate: { opacity: [.4, 1, .4] },
    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
    className: "flex flex-col items-center gap-4",
    children: [
      v.jsx("div", {
        className: "w-10 h-10 bg-forest-600 rounded-xl flex items-center justify-center",
        children: v.jsx("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          className: "w-6 h-6",
          children: v.jsx("path", {
            d: "M12 2C8.686 2 6 4.686 6 8c0 2.122 1.065 3.99 2.693 5.115C5.435 14.374 3 17.463 3 21a1 1 0 001 1h16a1 1 0 001-1c0-3.537-2.435-6.626-5.693-7.885C16.935 11.99 18 10.122 18 8c0-3.314-2.686-6-6-6z",
            fill: "white"
          })
        })
      }),
      v.jsx("span", {
        className: "text-charcoal-400 text-sm font-medium",
        children: "Loading..."
      })
    ]
  })
});

const fC = () => {
  const e = vn();
  return v.jsx(ni, {
    mode: "wait",
    initial: false,
    children: v.jsx(Pe.div, {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -12 },
      transition: { duration: .45, ease: [.25, .46, .45, .94] },
      style: { willChange: "opacity, transform" },
      children: v.jsx(w.Suspense, {
        fallback: v.jsx(cC, {}),
        children: v.jsxs(G0, {
          location: e,
          children: [
            v.jsx(wn, { path: "/", element: v.jsx(oC, {}) }),
            v.jsx(wn, { path: "/about", element: v.jsx(lC, {}) }),
            v.jsx(wn, { path: "/services", element: v.jsx(aC, {}) }),
            v.jsx(wn, { path: "/contact", element: v.jsx(uC, {}) }),
            v.jsx(wn, {
              path: "*",
              element: (window.location.protocol === "file:" && (!window.location.hash || window.location.hash === "#" || window.location.hash === "#/"))
                ? v.jsx(oC, {})
                : v.jsxs("div", {
                    className: "min-h-screen flex flex-col items-center justify-center gap-6 bg-white pt-20",
                    children: [
                      v.jsx("div", { className: "text-8xl font-display font-bold text-charcoal-100", children: "404" }),
                      v.jsx("h1", { className: "text-2xl font-display font-bold text-charcoal-900", children: "Page not found" }),
                      v.jsx("p", { className: "text-charcoal-500 max-w-sm text-center", children: "The page you're looking for doesn't exist. Let's get you back on track." }),
                      v.jsx("a", { href: "/", className: "px-7 py-3.5 bg-forest-600 text-white font-bold rounded-full hover:bg-forest-700 transition-colors text-sm", children: "Back to Home" })
                    ]
                  })
            })
          ]
        })
      })
    }, e.pathname)
  });
};

const dC = () => {
  const e = vn();
  return da.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [e.pathname]), null;
};

const hC = () => v.jsx(e1, {
  children: v.jsxs(sC, {
    children: [
      v.jsx(dC, {}),
      v.jsxs("div", {
        className: "flex flex-col min-h-screen",
        children: [
          v.jsx(qP, {}),
          v.jsx("div", { className: "flex-1", children: v.jsx(fC, {}) }),
          v.jsx(eC, {})
        ]
      })
    ]
  })
});

Yo.createRoot(document.getElementById("root")).render(
  v.jsx(da.StrictMode, { children: v.jsx(hC, {}) })
);
'''

with open("assets/entry.js", "w", encoding="utf-8") as f:
    f.write(entry_code)
print("Created assets/entry.js")

# Step 5: Bundle with esbuild
print("Step 5: Running esbuild...")
res = subprocess.run(
    ["npx", "esbuild", "assets/entry.js", "--bundle", "--format=iife", "--outfile=assets/bundle.js"],
    capture_output=True,
    text=True,
    shell=True
)
print("esbuild stderr:", res.stderr)
print("esbuild stdout:", res.stdout)

with open("assets/bundle.js", "r", encoding="utf-8") as f:
    b = f.read()

print(f"Bundle size: {len(b):,} bytes")
count = b.count("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")
print(f"React secret internals count: {count} (must be 4)")
'''
'''
