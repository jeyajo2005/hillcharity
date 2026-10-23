import re
import os
import subprocess

print("=== Upgrading Website to be Ultra Attractive & Crystal Clear ===")

# 1. Update index.html to add floating WhatsApp, custom css for crisp images, and smooth scroll
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

custom_head_styles = '''    <style>
      /* Crisp image rendering */
      img {
        image-rendering: -webkit-optimize-contrast;
      }
      /* Smooth transitions */
      html {
        scroll-behavior: smooth;
      }
      /* Custom glowing animations */
      @keyframes softPulse {
        0%, 100% { transform: scale(1); box-shadow: 0 8px 30px rgba(37,211,102,0.45); }
        50% { transform: scale(1.04); box-shadow: 0 12px 35px rgba(37,211,102,0.65); }
      }
      .pulse-whatsapp {
        animation: softPulse 3s infinite ease-in-out;
      }
    </style>
'''

floating_whatsapp_html = '''    <!-- Floating Instant WhatsApp Connect Widget -->
    <a href="https://wa.me/919944704699?text=Hello%20Hill%20Charity%20Tuticorin,%20I%20would%20like%20to%20support%20your%20mission."
       target="_blank" rel="noopener noreferrer"
       id="floating-whatsapp"
       class="pulse-whatsapp fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 group"
       aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current shrink-0">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      <span class="tracking-wide">WhatsApp Us</span>
    </a>
'''

if "pulse-whatsapp" not in html:
    html = html.replace('</head>', custom_head_styles + '  </head>')
    html = html.replace('</body>', floating_whatsapp_html + '  </body>')
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Updated index.html with styles & floating WhatsApp button!")

# 2. Update Home-B5Mf3Si2.js with PHOTO-ONLY Hero section and attractive sections
with open("assets/Home-B5Mf3Si2.js", "r", encoding="utf-8") as f:
    home = f.read()

# Replace HERO_SLIDES definition with enhanced crystal-clear photos
new_hero_slides = '''const HERO_SLIDES = [
  "./assets/enhanced/slider_1.jpg",
  "./assets/enhanced/slider_2.jpg",
  "./assets/enhanced/slider_3.jpg",
  "./assets/enhanced/slider_6.jpg",
  "./assets/enhanced/slider_7.jpg",
  "./assets/enhanced/slider_8.jpg",
  "./assets/enhanced/slider_9.jpg"
];'''

# Find existing HERO_SLIDES = [...]
pos_hs_start = home.find("const HERO_SLIDES = [")
pos_hs_end = home.find("];", pos_hs_start)
if pos_hs_start != -1 and pos_hs_end != -1:
    home = home[:pos_hs_start] + new_hero_slides + home[pos_hs_end + 2:]
    print("Updated HERO_SLIDES with enhanced photos!")

# Redefine _ to be PHOTO ONLY + Trust & Quick Donation Bar directly underneath
pos_hero_func = home.find("_=()=>{")
pos_hero_end = home.find(",L=[", pos_hero_func)
assert pos_hero_func != -1 and pos_hero_end != -1

new_hero_implementation = '''_=()=>{
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
              // Clear photo without any dark tint or text
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

home = home[:pos_hero_func] + new_hero_implementation + home[pos_hero_end:]
print("Updated Hero section to pure photo slider and added Trust & Action bar!")

with open("assets/Home-B5Mf3Si2.js", "w", encoding="utf-8") as f:
    f.write(home)

# 3. Update Gallery.js to also use enhanced photos and crisp rendering
with open("assets/Gallery.js", "r", encoding="utf-8") as f:
    gal = f.read()

# Replace photo paths with enhanced versions where available
gal = gal.replace('"./assets/hill_photos/img_slider1.png"', '"./assets/enhanced/slider_1.jpg"')
gal = gal.replace('"./assets/hill_photos/img_slider2.png"', '"./assets/enhanced/slider_2.jpg"')
gal = gal.replace('"./assets/hill_photos/img_slider3.png"', '"./assets/enhanced/slider_3.jpg"')
gal = gal.replace('"./assets/hill_photos/img_slider6.jpg"', '"./assets/enhanced/slider_6.jpg"')
gal = gal.replace('"./assets/hill_photos/img_slider7.jpg"', '"./assets/enhanced/slider_7.jpg"')
gal = gal.replace('"./assets/hill_photos/img_slider8.jpg"', '"./assets/enhanced/slider_8.jpg"')
gal = gal.replace('"./assets/hill_photos/img_slider9.jpg"', '"./assets/enhanced/slider_9.jpg"')
gal = gal.replace('"./assets/hill_photos/img_cause1.png"', '"./assets/enhanced/cause_1.png"')
gal = gal.replace('"./assets/hill_photos/img_cause2.png"', '"./assets/enhanced/cause_2.png"')
gal = gal.replace('"./assets/hill_photos/img_cause3.png"', '"./assets/enhanced/cause_3.png"')
gal = gal.replace('"./assets/hill_photos/img_cause4.png"', '"./assets/enhanced/cause_4.png"')
gal = gal.replace('"./assets/hill_photos/img_cause5.png"', '"./assets/enhanced/cause_5.png"')
gal = gal.replace('"./assets/hill_photos/img_cause6.png"', '"./assets/enhanced/cause_6.png"')
gal = gal.replace('"./assets/hill_photos/img_cause7.png"', '"./assets/enhanced/cause_7.png"')

with open("assets/Gallery.js", "w", encoding="utf-8") as f:
    f.write(gal)
print("Updated assets/Gallery.js with enhanced photos!")

# 4. Rebuild bundle with esbuild
print("\nRebuilding bundle with esbuild...")
res = subprocess.run(
    ["npx", "esbuild", "assets/entry.js", "--bundle", "--format=iife", "--outfile=assets/bundle.js"],
    capture_output=True,
    text=True,
    shell=True
)
print("esbuild stdout:", res.stdout)
print("esbuild stderr:", res.stderr)
assert res.returncode == 0, "esbuild bundle failed!"
print(f"SUCCESS! Bundle successfully rebuilt: {os.path.getsize('assets/bundle.js'):,} bytes")
