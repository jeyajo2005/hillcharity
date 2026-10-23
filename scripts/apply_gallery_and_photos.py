import re
import subprocess
import os

print("--- Step 1: Updating assets/entry.js ---")
with open("assets/entry.js", "r", encoding="utf-8") as f:
    entry = f.read()

if "GalleryRoute" not in entry:
    entry = entry.replace(
        'import ContactRoute from "./Contact-pTe4Lhbh.js";',
        'import ContactRoute from "./Contact-pTe4Lhbh.js";\nimport GalleryRoute from "./Gallery.js";'
    )
    entry = entry.replace(
        'const uC = ContactRoute;',
        'const uC = ContactRoute;\nconst gC = GalleryRoute;'
    )
    entry = entry.replace(
        'v.jsx(wn, { path: "/contact", element: v.jsx(uC, {}) }),',
        'v.jsx(wn, { path: "/gallery", element: v.jsx(gC, {}) }),\n            v.jsx(wn, { path: "/contact", element: v.jsx(uC, {}) }),'
    )
    with open("assets/entry.js", "w", encoding="utf-8") as f:
        f.write(entry)
    print("Updated assets/entry.js with /gallery route!")
else:
    print("assets/entry.js already contains GalleryRoute.")

print("\n--- Step 2: Updating assets/vendor.js ---")
with open("assets/vendor.js", "r", encoding="utf-8") as f:
    vendor = f.read()

# Update Cd
old_cd = 'Cd=[{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Services",path:"/services"},{label:"Contact",path:"/contact"}]'
new_cd = 'Cd=[{label:"Home",path:"/"},{label:"About",path:"/about"},{label:"Services",path:"/services"},{label:"Gallery",path:"/gallery"},{label:"Contact",path:"/contact"}]'

if old_cd in vendor:
    vendor = vendor.replace(old_cd, new_cd)
    print("Replaced Cd in vendor.js!")
else:
    print("Warning: old_cd not found exactly in vendor.js, checking...")

# Update footer links
old_footer = '{label:"About Us",path:"/about"},{label:"Our Mission",path:"/about#mission"}'
new_footer = '{label:"About Us",path:"/about"},{label:"Photo Gallery",path:"/gallery"},{label:"Our Mission",path:"/about#mission"}'
if old_footer in vendor:
    vendor = vendor.replace(old_footer, new_footer)
    print("Replaced footer organization links in vendor.js!")

with open("assets/vendor.js", "w", encoding="utf-8") as f:
    f.write(vendor)

print("\n--- Step 3: Updating assets/Home-B5Mf3Si2.js ---")
with open("assets/Home-B5Mf3Si2.js", "r", encoding="utf-8") as f:
    home = f.read()

# Replace Hero section _ with an authentic rotating multi-slide Hero Carousel
old_hero_pattern = r'const _=\(\)=>e\.jsxs\("section",\{className:"relative w-full overflow-hidden bg-slate-950 pt-16 sm:pt-20".*?pointer-events-none"\}\)\]\}\)\]\}\)'

new_hero_code = '''const HERO_SLIDES = [
  {
    image: "./assets/hill_photos/img_slider1.png",
    tag: "Welcome to Hill Organisation for People\'s Education",
    title: "Nurturing Orphaned & Abandoned Children",
    subtitle: "Safe shelter, English education, 3 nutritious meals, and affectionate care in Tuticorin."
  },
  {
    image: "./assets/hill_photos/img_slider2.png",
    tag: "Hope Children Home",
    title: "A Loving Family for Every Child",
    subtitle: "Over 40+ girl children growing with dignity, happiness, and high aspirations."
  },
  {
    image: "./assets/hill_photos/img_slider3.png",
    tag: "Home for the Aged",
    title: "Lifelong Sanctuary for Destitute Elderly Mothers",
    subtitle: "Rescuing homeless senior women and providing comprehensive geriatric care."
  },
  {
    image: "./assets/hill_photos/img_slider6.jpg",
    tag: "Feed the Hungry Mission",
    title: "Daily Fresh Hot Meals Across Tuticorin",
    subtitle: "Rescuing excess banquet food and feeding hungry, impoverished people every single day."
  },
  {
    image: "./assets/hill_photos/img_slider7.jpg",
    tag: "Over a Decade of Selfless Service",
    title: "Established in 2014 in Tuticorin",
    subtitle: "Founded by Mrs. Brinah Prabhakaran & Mr. Prem Prabhakaran with 100% direct transparency."
  }
];

const _ = () => {
  const [current, setCurrent] = o.useState(0);

  o.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  return e.jsxs("section", {
    className: "relative w-full overflow-hidden bg-slate-950 pt-16 sm:pt-20 text-white select-none",
    "aria-label": "Hero section",
    children: [
      e.jsxs("div", {
        className: "relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[82vh] overflow-hidden mx-auto flex items-center justify-center",
        children: [
          e.jsx(t.img, {
            key: slide.image,
            src: slide.image,
            alt: slide.title,
            initial: { opacity: 0.2, scale: 1.03 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.8, ease: "easeOut" },
            className: "w-full h-full object-cover object-top",
            loading: "eager",
            fetchPriority: "high"
          }),
          // Overlays
          e.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20 pointer-events-none"
          }),
          // Hero Slide Text Content
          e.jsxs("div", {
            className: "absolute inset-0 flex flex-col justify-end p-6 sm:p-12 lg:p-16 max-w-5xl mx-auto",
            children: [
              e.jsx(t.div, {
                key: slide.tag,
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/80 backdrop-blur-md border border-blue-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 w-fit",
                children: slide.tag
              }),
              e.jsx(t.h1, {
                key: slide.title,
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.1 },
                className: "font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl leading-tight text-white mb-2 max-w-3xl drop-shadow-md",
                children: slide.title
              }),
              e.jsx(t.p, {
                key: slide.subtitle,
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                className: "text-slate-200 text-sm sm:text-base max-w-2xl mb-6 line-clamp-2 drop-shadow-sm",
                children: slide.subtitle
              }),
              e.jsxs("div", {
                className: "flex flex-wrap items-center gap-3 sm:gap-4",
                children: [
                  e.jsx(x, {
                    to: "/contact",
                    children: e.jsxs("button", {
                      className: "px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-[#1E3A8A] bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(251,191,36,0.4)] transition-all",
                      children: ["Donate Now", " →"]
                    })
                  }),
                  e.jsx(x, {
                    to: "/gallery",
                    children: e.jsxs("button", {
                      className: "px-6 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-white bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 transition-all",
                      children: ["Explore 135+ Photos", " 📷"]
                    })
                  })
                ]
              })
            ]
          }),

          // Previous / Next Buttons
          e.jsx("button", {
            type: "button",
            onClick: () => setCurrent(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
            className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center text-xl transition-all",
            "aria-label": "Previous slide",
            children: "‹"
          }),
          e.jsx("button", {
            type: "button",
            onClick: () => setCurrent(prev => (prev + 1) % HERO_SLIDES.length),
            className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center text-xl transition-all",
            "aria-label": "Next slide",
            children: "›"
          }),

          // Indicator Dots
          e.jsx("div", {
            className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2",
            children: HERO_SLIDES.map((s, idx) => e.jsx("button", {
              key: idx,
              onClick: () => setCurrent(idx),
              className: "h-2.5 rounded-full transition-all duration-300 " + (current === idx ? "w-8 bg-[#FBBF24]" : "w-2.5 bg-white/50 hover:bg-white/80"),
              "aria-label": "Go to slide " + (idx + 1)
            }))
          })
        ]
      })
    ]
  });
};'''

if re.search(old_hero_pattern, home):
    home = re.sub(old_hero_pattern, new_hero_code, home, count=1)
    print("Replaced Hero section with authentic multi-slide carousel in Home-B5Mf3Si2.js!")
else:
    print("Warning: old_hero_pattern not matched via regex!")

# Add Photo Showcase Section before CTA Section
home_gallery_code = '''
const HOME_FEATURED_PHOTOS = [
  { src: "./assets/hill_photos/img_slider1.png", tag: "Children Home", title: "Hope Children Home Girls & Caregivers" },
  { src: "./assets/hill_photos/img_slider3.png", tag: "Home for Aged", title: "Rescued Elderly Mothers Living in Peace" },
  { src: "./assets/hill_photos/img_slider6.jpg", tag: "Feed the Hungry", title: "Hot Meal Distribution in Tuticorin" },
  { src: "./assets/hill_photos/img_slider2.png", tag: "Education", title: "Study & Development for Young Minds" },
  { src: "./assets/hill_photos/gallery_g1.jpg", tag: "Ashram Life", title: "Daily Joy & Activities at the Ashram" },
  { src: "./assets/hill_photos/gallery_g5.jpg", tag: "Care & Support", title: "Nutritional & Medical Supervision" },
  { src: "./assets/hill_photos/gallery_g10.jpg", tag: "Celebrations", title: "Festival & Birthday Celebrations" },
  { src: "./assets/hill_photos/gallery_g20.jpg", tag: "Community", title: "Grassroots Community Outreach in Tuticorin" }
];

const HomeGallerySection = () => {
  return e.jsxs("section", {
    className: "py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden",
    "aria-labelledby": "home-gallery-heading",
    children: [
      e.jsxs("div", {
        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          e.jsxs("div", {
            className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12",
            children: [
              e.jsxs("div", {
                className: "max-w-2xl",
                children: [
                  e.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4",
                    children: [
                      e.jsx("span", { className: "w-2 h-2 rounded-full bg-amber-400" }),
                      "Authentic Work in Tuticorin"
                    ]
                  }),
                  e.jsxs("h2", {
                    id: "home-gallery-heading",
                    className: "font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight",
                    children: [
                      "Moments of Love & Service: ",
                      e.jsx("span", {
                        className: "bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent",
                        children: "Real Photos"
                      })
                    ]
                  }),
                  e.jsx("p", {
                    className: "text-slate-300 mt-4 text-base leading-relaxed",
                    children: "Every photo represents a real soul touched by Hill Charity — orphaned children receiving education, elderly mothers living in security, and hungry families fed."
                  })
                ]
              }),
              e.jsx(x, {
                to: "/gallery",
                children: e.jsxs("button", {
                  className: "px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(251,191,36,0.35)] transition-all shrink-0",
                  children: ["Explore All 135+ Photos", " →"]
                })
              })
            ]
          }),

          // 8 Photo Grid
          e.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
            children: HOME_FEATURED_PHOTOS.map((item, idx) => {
              return e.jsxs(x, {
                key: idx,
                to: "/gallery",
                className: "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/60 shadow-md block cursor-pointer",
                children: [
                  e.jsx("img", {
                    src: item.src,
                    alt: item.title,
                    loading: "lazy",
                    className: "w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  }),
                  e.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5",
                    children: e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: "inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-400 text-slate-950 mb-1",
                          children: item.tag
                        }),
                        e.jsx("p", {
                          className: "text-white text-xs font-semibold line-clamp-1",
                          children: item.title
                        })
                      ]
                    })
                  })
                ]
              });
            })
          })
        ]
      })
    ]
  });
};
'''

# Insert HomeGallerySection before ne
if "HomeGallerySection" not in home:
    pos_ne = home.find('ne=()=>e.jsxs("main"')
    assert pos_ne != -1
    home = home[:pos_ne] + home_gallery_code + "\n" + home[pos_ne:]

    # Add e.jsx(HomeGallerySection,{}) to children array in ne
    old_ne_children = 'e.jsx(K,{}),e.jsx(k,{})'
    new_ne_children = 'e.jsx(K,{}),e.jsx(HomeGallerySection,{}),e.jsx(k,{})'
    home = home.replace(old_ne_children, new_ne_children)
    print("Added HomeGallerySection to Home-B5Mf3Si2.js!")

with open("assets/Home-B5Mf3Si2.js", "w", encoding="utf-8") as f:
    f.write(home)

print("\n--- Step 4: Rebuilding bundle with esbuild ---")
res = subprocess.run(
    ["npx", "esbuild", "assets/entry.js", "--bundle", "--format=iife", "--outfile=assets/bundle.js"],
    capture_output=True,
    text=True,
    shell=True
)
print("esbuild stdout:", res.stdout)
print("esbuild stderr:", res.stderr)
assert res.returncode == 0, "esbuild failed!"
print(f"SUCCESS! Bundle successfully created. Size: {os.path.getsize('assets/bundle.js'):,} bytes")
