import os
import subprocess

print("=== Starting Complete Transformation for Hill Charity Website ===")

# -------------------------------------------------------------
# 1. Update index.html: Floating WhatsApp + Crisp Styles
# -------------------------------------------------------------
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

custom_head_styles = '''    <style>
      /* Crisp image rendering for maximum photo clarity */
      img {
        image-rendering: -webkit-optimize-contrast;
      }
      html {
        scroll-behavior: smooth;
      }
      @keyframes floatPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 8px 30px rgba(37,211,102,0.45); }
        50% { transform: scale(1.05); box-shadow: 0 14px 40px rgba(37,211,102,0.7); }
      }
      .pulse-whatsapp {
        animation: floatPulse 2.8s infinite ease-in-out;
      }
    </style>
'''

floating_whatsapp = '''    <!-- Floating WhatsApp Connect Widget -->
    <a href="https://wa.me/919944704699?text=Hello%20Hill%20Charity%20Tuticorin,%20I%20would%20like%20to%20support%20your%20mission."
       target="_blank" rel="noopener noreferrer"
       id="floating-whatsapp"
       class="pulse-whatsapp fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 group"
       aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current shrink-0">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      <span class="tracking-wide">Chat on WhatsApp</span>
    </a>
'''

if "pulse-whatsapp" not in html:
    html = html.replace('</head>', custom_head_styles + '  </head>')
if "floating-whatsapp" not in html:
    html = html.replace('</body>', floating_whatsapp + '  </body>')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Updated index.html successfully.")

# -------------------------------------------------------------
# 2. Update Home-B5Mf3Si2.js
# -------------------------------------------------------------
with open("assets/Home-B5Mf3Si2.js", "r", encoding="utf-8") as f:
    code = f.read()

# Add constants at top before const p=
constants_block = '''
const HERO_SLIDES = [
  "./assets/enhanced/slider_1.jpg",
  "./assets/enhanced/slider_2.jpg",
  "./assets/enhanced/slider_3.jpg",
  "./assets/enhanced/slider_6.jpg",
  "./assets/enhanced/slider_7.jpg",
  "./assets/enhanced/slider_8.jpg",
  "./assets/enhanced/slider_9.jpg"
];

const HOME_FEATURED_PHOTOS = [
  { src: "./assets/enhanced/slider_1.jpg", tag: "Children Home", title: "Hope Children Home Girls & Caregivers" },
  { src: "./assets/enhanced/slider_3.jpg", tag: "Home for Aged", title: "Rescued Elderly Mothers Living in Peace" },
  { src: "./assets/enhanced/slider_6.jpg", tag: "Feed the Hungry", title: "Hot Meal Distribution in Tuticorin" },
  { src: "./assets/enhanced/slider_2.jpg", tag: "Education", title: "Study & Development for Young Minds" },
  { src: "./assets/hill_photos/gallery_g1.jpg", tag: "Ashram Life", title: "Daily Joy & Activities at the Ashram" },
  { src: "./assets/hill_photos/gallery_g5.jpg", tag: "Care & Support", title: "Nutritional & Medical Supervision" },
  { src: "./assets/hill_photos/gallery_g10.jpg", tag: "Celebrations", title: "Festival & Birthday Celebrations" },
  { src: "./assets/hill_photos/gallery_g20.jpg", tag: "Community", title: "Grassroots Community Outreach in Tuticorin" }
];
'''

pos_p = code.find('const p=c("TrendingUp"')
assert pos_p != -1
code = code[:pos_p] + constants_block + "\n" + code[pos_p:]

# Target exact original _ string
target_hero = '_=()=>e.jsxs("section",{className:"relative w-full overflow-hidden bg-slate-950 pt-16 sm:pt-20","aria-label":"Hero section",children:[e.jsxs("div",{className:"relative w-full aspect-[3/2] max-h-[85vh] overflow-hidden mx-auto flex items-center justify-center",children:[e.jsx(t.img,{src:"./assets/hero-community.png",alt:"Hill Charity community support",initial:{opacity:0,scale:1.01},animate:{opacity:1,scale:1},transition:{duration:.8,ease:"easeOut"},className:"w-full h-full object-cover object-top",loading:"eager",fetchPriority:"high"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 pointer-events-none"})]})]})'

# Pure PHOTO-ONLY Hero Slider (NO text, NO dark overlay, crystal clear!)
# Plus Trust, Mission & Quick Donation Bar directly underneath
new_hero = '''_=()=>{
  const [current, setCurrent] = o.useState(0);
  const [isPaused, setIsPaused] = o.useState(false);

  o.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return e.jsxs(e.Fragment, {
    children: [
      // 1. PURE PHOTO-ONLY HERO SLIDER (Zero text overlay, crystal clear, un-dimmed photos)
      e.jsx("section", {
        className: "relative w-full bg-slate-950 pt-16 sm:pt-20 select-none overflow-hidden",
        "aria-label": "Hero Photo Slider",
        onMouseEnter: () => setIsPaused(true),
        onMouseLeave: () => setIsPaused(false),
        children: e.jsx("div", {
          className: "relative w-full max-w-[1440px] mx-auto px-0 sm:px-4 lg:px-6 py-2 sm:py-4",
          children: e.jsxs("div", {
            className: "relative w-full aspect-[1349/520] min-h-[250px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px] max-h-[600px] rounded-none sm:rounded-3xl overflow-hidden shadow-2xl bg-black border-0 sm:border border-slate-800 flex items-center justify-center",
            children: [
              e.jsx(t.img, {
                key: HERO_SLIDES[current],
                src: HERO_SLIDES[current],
                alt: "Hill Charity Tuticorin - Authentic Activity",
                initial: { opacity: 0.3 },
                animate: { opacity: 1 },
                transition: { duration: 0.6, ease: "easeOut" },
                className: "w-full h-full object-cover object-center",
                loading: "eager",
                fetchPriority: "high",
                style: {
                  imageRendering: "-webkit-optimize-contrast"
                }
              }),

              // Left navigation arrow button
              e.jsx("button", {
                type: "button",
                onClick: () => setCurrent(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
                className: "absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-950/60 hover:bg-slate-950/90 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-xl transition-all hover:scale-110 active:scale-95",
                "aria-label": "Previous slide",
                children: "‹"
              }),

              // Right navigation arrow button
              e.jsx("button", {
                type: "button",
                onClick: () => setCurrent(prev => (prev + 1) % HERO_SLIDES.length),
                className: "absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-slate-950/60 hover:bg-slate-950/90 backdrop-blur-md border border-white/30 text-white flex items-center justify-center text-2xl sm:text-3xl shadow-xl transition-all hover:scale-110 active:scale-95",
                "aria-label": "Next slide",
                children: "›"
              }),

              // Indicator Dots
              e.jsx("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10",
                children: HERO_SLIDES.map((s, idx) => e.jsx("button", {
                  key: idx,
                  onClick: () => setCurrent(idx),
                  className: "h-2 sm:h-2.5 rounded-full transition-all duration-300 " + (current === idx ? "w-8 sm:w-10 bg-[#FBBF24] shadow-[0_0_12px_rgba(251,191,36,0.8)]" : "w-2 sm:w-2.5 bg-white/40 hover:bg-white/80"),
                  "aria-label": "Go to slide " + (idx + 1)
                }))
              })
            ]
          })
        })
      }),

      // 2. ULTRA-ATTRACTIVE TRUST & ACTION BAR (Directly Below Photo-Only Hero)
      e.jsx("section", {
        className: "bg-gradient-to-r from-[#172554] via-[#1E40AF] to-[#2563EB] text-white py-6 sm:py-8 border-b border-blue-400/20 shadow-xl",
        children: e.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: e.jsxs("div", {
            className: "flex flex-col lg:flex-row items-center justify-between gap-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-4 text-center lg:text-left",
                children: [
                  e.jsx("div", {
                    className: "hidden md:flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] text-[#1E3A8A] items-center justify-center shrink-0 shadow-[0_0_24px_rgba(251,191,36,0.45)] font-display font-black text-2xl border-2 border-white/30",
                    children: "HC"
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("div", {
                        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#FDE68A] text-xs font-bold tracking-widest uppercase mb-1.5",
                        children: [
                          e.jsx("span", { className: "w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" }),
                          "Regd. Charitable Trust • Tuticorin, Tamil Nadu • Since 2014"
                        ]
                      }),
                      e.jsx("h2", {
                        className: "font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-snug",
                        children: "Hill Organisation for People’s Education"
                      }),
                      e.jsx("p", {
                        className: "text-blue-100 text-xs sm:text-sm max-w-2xl mt-1 leading-relaxed",
                        children: "Sheltering abandoned girl children at Hope Children Home, caring for destitute elderly mothers, and feeding the hungry daily with love and complete transparency."
                      })
                    ]
                  })
                ]
              }),

              // Quick Actions Buttons
              e.jsxs("div", {
                className: "flex flex-wrap items-center justify-center gap-3 shrink-0",
                children: [
                  e.jsx(x, {
                    to: "/gallery",
                    className: "px-5 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-white bg-white/15 hover:bg-white/25 border border-white/25 hover:border-white/50 backdrop-blur-md transition-all shadow-sm hover:scale-105 active:scale-95",
                    children: "📷 135+ Photos"
                  }),
                  e.jsx(x, {
                    to: "/services",
                    className: "px-5 py-3 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-white bg-white/15 hover:bg-white/25 border border-white/25 hover:border-white/50 backdrop-blur-md transition-all shadow-sm hover:scale-105 active:scale-95",
                    children: "Our 7 Programs"
                  }),
                  e.jsx(x, {
                    to: "/contact",
                    className: "px-7 py-3 rounded-full font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#1E3A8A] bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:from-[#FCD34D] hover:to-[#FBBF24] shadow-[0_4px_24px_rgba(251,191,36,0.55)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2",
                    children: "DONATE NOW"
                  })
                ]
              })
            ]
          })
        })
      })
    ]
  });
}'''

assert target_hero in code
code = code.replace(target_hero, new_hero)
print("Replaced Hero section with pure photo slider and action strip!")

# Add HomeGallery component and update ne
target_ne = ',ne=()=>e.jsxs("main",{className:"m-0 p-0",children:[e.jsx(_,{}),e.jsx(U,{}),e.jsx($,{}),e.jsx(B,{}),e.jsx(Y,{}),e.jsx(H,{}),e.jsx(Q,{}),e.jsx(K,{}),e.jsx(k,{})]});'

new_ne_with_gallery = ''',HomeGallery=()=>e.jsxs("section", {
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
                  className: "w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500",
                  style: { imageRendering: "-webkit-optimize-contrast" }
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
}),ne=()=>e.jsxs("main",{className:"m-0 p-0",children:[e.jsx(_,{}),e.jsx(U,{}),e.jsx($,{}),e.jsx(B,{}),e.jsx(Y,{}),e.jsx(H,{}),e.jsx(Q,{}),e.jsx(K,{}),e.jsx(HomeGallery,{}),e.jsx(k,{})]});'''

assert target_ne in code
code = code.replace(target_ne, new_ne_with_gallery)
print("Added HomeGallery section before CTA section!")

with open("assets/Home-B5Mf3Si2.js", "w", encoding="utf-8") as f:
    f.write(code)

print("Saved assets/Home-B5Mf3Si2.js.")

# -------------------------------------------------------------
# 3. Rebuild bundle with esbuild
# -------------------------------------------------------------
print("\nRebuilding bundle.js with esbuild...")
res = subprocess.run(
    ["npx", "esbuild", "assets/entry.js", "--bundle", "--format=iife", "--outfile=assets/bundle.js"],
    capture_output=True,
    text=True,
    shell=True
)
print("esbuild stdout:", res.stdout)
print("esbuild stderr:", res.stderr)
assert res.returncode == 0, "esbuild bundle failed!"
print(f"SUCCESS! Bundle successfully created. Final size: {os.path.getsize('assets/bundle.js'):,} bytes")
