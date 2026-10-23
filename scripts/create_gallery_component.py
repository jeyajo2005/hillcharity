import json
import os
import subprocess

# 1. Read gallery items
with open("assets/gallery_data.json", "r", encoding="utf-8") as f:
    gallery_items = json.load(f)

# Categories
categories = [
    "All Photos",
    "Hope Children Home",
    "Home for the Aged",
    "Feed the Hungry",
    "Community & Relief",
    "Events & Celebrations"
]

gallery_js = '''import { j as e, r as o, m as t, L as Link, H as HeartIcon } from "./vendor.js";
import { S as ScrollReveal } from "./ScrollReveal-CC7-yOZu.js";
import { C as CTASection } from "./CTASection-DsUdwk3m.js";

const GALLERY_ITEMS = ''' + json.dumps(gallery_items) + ''';

const CATEGORIES = [
  "All Photos",
  "Hope Children Home",
  "Home for the Aged",
  "Feed the Hungry",
  "Community & Relief",
  "Events & Celebrations"
];

const Gallery = () => {
  const [selectedCat, setSelectedCat] = o.useState("All Photos");
  const [modalIndex, setModalIndex] = o.useState(null);
  const [visibleCount, setVisibleCount] = o.useState(24);

  const filtered = o.useMemo(() => {
    if (selectedCat === "All Photos") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => {
      if (selectedCat === "Hope Children Home") return item.category === "Hope Children Home";
      if (selectedCat === "Home for the Aged") return item.category === "Home for the Aged";
      if (selectedCat === "Feed the Hungry") return item.category === "Feed the Hungry";
      if (selectedCat === "Events & Celebrations") return item.category === "Events & Celebrations";
      return item.category === "Community & Relief" || item.category === "Activities & Ashram" || item.category === "General";
    });
  }, [selectedCat]);

  const displayed = filtered.slice(0, visibleCount);

  // Keyboard navigation for lightbox
  o.useEffect(() => {
    const handleKey = (ev) => {
      if (modalIndex === null) return;
      if (ev.key === "Escape") setModalIndex(null);
      if (ev.key === "ArrowRight") {
        setModalIndex((prev) => (prev + 1) % filtered.length);
      }
      if (ev.key === "ArrowLeft") {
        setModalIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalIndex, filtered.length]);

  return e.jsxs("main", {
    className: "bg-slate-50 min-h-screen pt-20",
    children: [
      // Hero Header
      e.jsx("section", {
        className: "relative bg-gradient-to-b from-[#1E3A8A] to-[#172554] text-white py-16 sm:py-24 overflow-hidden",
        children: e.jsxs("div", {
          className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            e.jsx("div", {
              className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6",
              children: "Real Impact in Tuticorin"
            }),
            e.jsxs("h1", {
              className: "font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-6",
              children: [
                "Our Journey in ",
                e.jsx("span", {
                  className: "bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent",
                  children: "Real Photos"
                })
              ]
            }),
            e.jsx("p", {
              className: "max-w-3xl mx-auto text-base sm:text-lg text-blue-100/90 leading-relaxed",
              children: "Explore authentic moments from Hill Charity (Hill Organisation for People\\'s Education). Since 2014, sheltering abandoned girl children, caring for elderly destitute mothers, and feeding hungry souls with love and dignity."
            }),
            e.jsxs("div", {
              className: "flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-blue-200/80",
              children: [
                e.jsxs("span", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-400" }),
                    GALLERY_ITEMS.length + "+ Authentic Photos"
                  ]
                }),
                e.jsxs("span", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-400" }),
                    "7 Core Service Initiatives"
                  ]
                }),
                e.jsxs("span", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-sky-400" }),
                    "Tuticorin, South India"
                  ]
                })
              ]
            })
          ]
        })
      }),

      // Gallery Controls & Grid
      e.jsx("section", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",
        children: e.jsxs("div", {
          children: [
            // Filter Tabs
            e.jsx("div", {
              className: "flex flex-wrap items-center justify-center gap-2.5 mb-10",
              children: CATEGORIES.map((cat) => {
                const isSelected = selectedCat === cat;
                return e.jsx(
                  "button",
                  {
                    key: cat,
                    onClick: () => {
                      setSelectedCat(cat);
                      setVisibleCount(24);
                    },
                    className: "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 " +
                      (isSelected
                        ? "bg-[#2563EB] text-white shadow-[0_4px_16px_rgba(37,99,235,0.35)] scale-105"
                        : "bg-white text-slate-700 hover:bg-blue-50 border border-slate-200 hover:border-blue-200")
                  },
                  cat
                );
              })
            }),

            // Photos Grid
            e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5",
              children: displayed.map((item, idx) => {
                return e.jsxs(
                  "div",
                  {
                    key: item.src + idx,
                    onClick: () => setModalIndex(idx),
                    className: "group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer aspect-[4/3]",
                    children: [
                      e.jsx("img", {
                        src: item.src,
                        alt: item.title,
                        loading: "lazy",
                        className: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      }),
                      e.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4",
                        children: e.jsxs("div", {
                          className: "transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300",
                          children: [
                            e.jsx("span", {
                              className: "inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-900 mb-1.5",
                              children: item.category
                            }),
                            e.jsx("p", {
                              className: "text-white text-xs font-semibold line-clamp-2",
                              children: item.title
                            })
                          ]
                        })
                      })
                    ]
                  }
                );
              })
            }),

            // Load more button
            visibleCount < filtered.length &&
              e.jsx("div", {
                className: "text-center mt-12",
                children: e.jsxs("button", {
                  onClick: () => setVisibleCount((prev) => prev + 24),
                  className: "px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
                  children: [
                    "Load More Photos (" + (filtered.length - visibleCount) + " remaining)"
                  ]
                })
              })
          ]
        })
      }),

      // Lightbox Modal
      modalIndex !== null && filtered[modalIndex] &&
        e.jsxs("div", {
          className: "fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md",
          onClick: () => setModalIndex(null),
          children: [
            // Close Button
            e.jsx("button", {
              onClick: () => setModalIndex(null),
              className: "absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-xl transition-all",
              children: "✕"
            }),

            // Previous Button
            e.jsx("button", {
              onClick: (ev) => {
                ev.stopPropagation();
                setModalIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
              },
              className: "absolute left-3 sm:left-6 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-2xl transition-all",
              children: "‹"
            }),

            // Next Button
            e.jsx("button", {
              onClick: (ev) => {
                ev.stopPropagation();
                setModalIndex((prev) => (prev + 1) % filtered.length);
              },
              className: "absolute right-3 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-2xl transition-all",
              children: "›"
            }),

            // Modal Body
            e.jsxs("div", {
              onClick: (ev) => ev.stopPropagation(),
              className: "relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col",
              children: [
                e.jsx("div", {
                  className: "relative flex-1 flex items-center justify-center bg-black overflow-hidden max-h-[75vh]",
                  children: e.jsx("img", {
                    src: filtered[modalIndex].src,
                    alt: filtered[modalIndex].title,
                    className: "max-h-[75vh] w-auto max-w-full object-contain"
                  })
                }),
                e.jsxs("div", {
                  className: "p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: "inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950 mb-1",
                          children: filtered[modalIndex].category
                        }),
                        e.jsx("h3", {
                          className: "font-semibold text-sm sm:text-base text-slate-100",
                          children: filtered[modalIndex].title
                        })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-3 shrink-0",
                      children: [
                        e.jsxs("span", {
                          className: "text-xs text-slate-400",
                          children: [modalIndex + 1, " of ", filtered.length]
                        }),
                        e.jsx(Link, {
                          to: "/contact",
                          className: "px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:scale-105 transition-all",
                          children: "Donate for this Cause"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),

      e.jsx(CTASection, {})
    ]
  });
};

export default Gallery;
'''

with open("assets/Gallery.js", "w", encoding="utf-8") as f:
    f.write(gallery_js)

print("Created assets/Gallery.js successfully!")
