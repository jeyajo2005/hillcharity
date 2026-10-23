import { j as e, r as o, m as t, L as Link, H as HeartIcon } from "./vendor.js";
import { S as ScrollReveal } from "./ScrollReveal-CC7-yOZu.js";
import { C as CTASection } from "./CTASection-DsUdwk3m.js";

const GALLERY_ITEMS = [{"src": "./assets/hill_photos/events_e1.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e10.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e11.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e2.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e3.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e4.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e5.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e6.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e7.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e8.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/events_e9.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/gallery_g1.jpg", "title": "Children Care & Learning Activity #1", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g10.jpg", "title": "Children Care & Learning Activity #10", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g11.jpg", "title": "Children Care & Learning Activity #11", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g12.jpg", "title": "Children Care & Learning Activity #12", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g13.jpg", "title": "Elderly Mothers Ashram Care #13", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/gallery_g14.jpg", "title": "Elderly Mothers Ashram Care #14", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/gallery_g16.jpg", "title": "Elderly Mothers Ashram Care #16", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/gallery_g17.jpg", "title": "Elderly Mothers Ashram Care #17", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/gallery_g18.jpg", "title": "Elderly Mothers Ashram Care #18", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/gallery_g19.jpg", "title": "Elderly Mothers Ashram Care #19", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/gallery_g2.jpg", "title": "Children Care & Learning Activity #2", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g20.jpg", "title": "Elderly Mothers Ashram Care #20", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/gallery_g21.jpg", "title": "Nutritious Meal & Ration Drives #21", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/gallery_g22.jpg", "title": "Nutritious Meal & Ration Drives #22", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/gallery_g23.jpg", "title": "Nutritious Meal & Ration Drives #23", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/gallery_g24.jpg", "title": "Nutritious Meal & Ration Drives #24", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/gallery_g25.jpg", "title": "Nutritious Meal & Ration Drives #25", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/gallery_g26.jpg", "title": "Nutritious Meal & Ration Drives #26", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/gallery_g27.jpg", "title": "Nutritious Meal & Ration Drives #27", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/gallery_g28.jpg", "title": "Nutritious Meal & Ration Drives #28", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/gallery_g29.jpg", "title": "Field Outreach & Community Welfare #29", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g3.jpg", "title": "Children Care & Learning Activity #3", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g30.jpg", "title": "Field Outreach & Community Welfare #30", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g31.jpg", "title": "Field Outreach & Community Welfare #31", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g32.jpg", "title": "Field Outreach & Community Welfare #32", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g33.jpg", "title": "Field Outreach & Community Welfare #33", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g36.jpg", "title": "Field Outreach & Community Welfare #36", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g37.jpg", "title": "Field Outreach & Community Welfare #37", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g38.jpg", "title": "Field Outreach & Community Welfare #38", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g39.jpg", "title": "Field Outreach & Community Welfare #39", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g4.jpg", "title": "Children Care & Learning Activity #4", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g41.jpg", "title": "Field Outreach & Community Welfare #41", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g42.jpg", "title": "Field Outreach & Community Welfare #42", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g43.jpg", "title": "Field Outreach & Community Welfare #43", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g44.jpg", "title": "Field Outreach & Community Welfare #44", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g46.jpg", "title": "Field Outreach & Community Welfare #46", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g47.jpg", "title": "Field Outreach & Community Welfare #47", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g48.jpg", "title": "Field Outreach & Community Welfare #48", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g49.jpg", "title": "Field Outreach & Community Welfare #49", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g5.jpg", "title": "Children Care & Learning Activity #5", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g50.jpg", "title": "Field Outreach & Community Welfare #50", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g51.jpg", "title": "Field Outreach & Community Welfare #51", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g52.jpg", "title": "Field Outreach & Community Welfare #52", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g53.jpg", "title": "Field Outreach & Community Welfare #53", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g54.jpg", "title": "Field Outreach & Community Welfare #54", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g55.jpg", "title": "Field Outreach & Community Welfare #55", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g56.jpg", "title": "Field Outreach & Community Welfare #56", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g57.jpg", "title": "Field Outreach & Community Welfare #57", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g58.jpg", "title": "Field Outreach & Community Welfare #58", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g6.jpg", "title": "Children Care & Learning Activity #6", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g60.jpg", "title": "Field Outreach & Community Welfare #60", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g61.jpg", "title": "Field Outreach & Community Welfare #61", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g62.jpg", "title": "Field Outreach & Community Welfare #62", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g63.jpg", "title": "Field Outreach & Community Welfare #63", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g64.jpg", "title": "Field Outreach & Community Welfare #64", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g65.jpg", "title": "Field Outreach & Community Welfare #65", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g66.jpg", "title": "Field Outreach & Community Welfare #66", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g69.jpg", "title": "Field Outreach & Community Welfare #69", "category": "Community & Relief"}, {"src": "./assets/hill_photos/gallery_g7.jpg", "title": "Children Care & Learning Activity #7", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g8.jpg", "title": "Children Care & Learning Activity #8", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/gallery_g9.jpg", "title": "Children Care & Learning Activity #9", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_about.png", "title": "Community Support & Welfare", "category": "Community & Relief"}, {"src": "./assets/enhanced/cause_1.png", "title": "Women Vocational & Higher Education", "category": "Women Empowerment"}, {"src": "./assets/enhanced/cause_2.png", "title": "Rural Child Development & Evening Centres", "category": "Child Development"}, {"src": "./assets/enhanced/cause_3.png", "title": "Hope Children Home - Loving Care & Education", "category": "Hope Children Home"}, {"src": "./assets/enhanced/cause_4.png", "title": "Home for Destitute Elderly Mothers", "category": "Home for the Aged"}, {"src": "./assets/enhanced/cause_5.png", "title": "Child Rights & Health Awareness Campaigns", "category": "Awareness Programs"}, {"src": "./assets/enhanced/cause_6.png", "title": "Emergency Flood & Cyclone Relief Support", "category": "Disaster Relief"}, {"src": "./assets/enhanced/cause_7.png", "title": "Feed the Hungry - Daily Food Distribution", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/img_event1.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/img_event10.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/img_event2.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/img_event3.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/img_fashion-show.jpg", "title": "Community Celebrations & Events in Tuticorin", "category": "Events & Celebrations"}, {"src": "./assets/hill_photos/img_g1.jpg", "title": "Children Care & Learning Activity #1", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g10.jpg", "title": "Children Care & Learning Activity #10", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g11.jpg", "title": "Children Care & Learning Activity #11", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g12.jpg", "title": "Children Care & Learning Activity #12", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g13.jpg", "title": "Elderly Mothers Ashram Care #13", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_g14.jpg", "title": "Elderly Mothers Ashram Care #14", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_g15.jpg", "title": "Elderly Mothers Ashram Care #15", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_g16.jpg", "title": "Elderly Mothers Ashram Care #16", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_g17.jpg", "title": "Elderly Mothers Ashram Care #17", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_g2.jpg", "title": "Children Care & Learning Activity #2", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g3.jpg", "title": "Children Care & Learning Activity #3", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g4.jpg", "title": "Children Care & Learning Activity #4", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g5.jpg", "title": "Children Care & Learning Activity #5", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g6.jpg", "title": "Children Care & Learning Activity #6", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g7.jpg", "title": "Children Care & Learning Activity #7", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g8.jpg", "title": "Children Care & Learning Activity #8", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_g9.jpg", "title": "Children Care & Learning Activity #9", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal1.png", "title": "Children Care & Learning Activity #1", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal10.jpg", "title": "Children Care & Learning Activity #10", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal11.jpg", "title": "Children Care & Learning Activity #11", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal12.jpg", "title": "Children Care & Learning Activity #12", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal13.jpg", "title": "Elderly Mothers Ashram Care #13", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_gal14.jpg", "title": "Elderly Mothers Ashram Care #14", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_gal15.jpg", "title": "Elderly Mothers Ashram Care #15", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_gal16.jpg", "title": "Elderly Mothers Ashram Care #16", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_gal17.jpg", "title": "Elderly Mothers Ashram Care #17", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_gal18.jpg", "title": "Elderly Mothers Ashram Care #18", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_gal19.jpg", "title": "Elderly Mothers Ashram Care #19", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_gal2.png", "title": "Children Care & Learning Activity #2", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal20.jpg", "title": "Elderly Mothers Ashram Care #20", "category": "Home for the Aged"}, {"src": "./assets/hill_photos/img_gal21.jpg", "title": "Nutritious Meal & Ration Drives #21", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/img_gal22.jpg", "title": "Nutritious Meal & Ration Drives #22", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/img_gal23.jpg", "title": "Nutritious Meal & Ration Drives #23", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/img_gal24.jpg", "title": "Nutritious Meal & Ration Drives #24", "category": "Feed the Hungry"}, {"src": "./assets/hill_photos/img_gal3.png", "title": "Children Care & Learning Activity #3", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal4.png", "title": "Children Care & Learning Activity #4", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal5.jpg", "title": "Children Care & Learning Activity #5", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal6.jpg", "title": "Children Care & Learning Activity #6", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal7.jpg", "title": "Children Care & Learning Activity #7", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal8.jpg", "title": "Children Care & Learning Activity #8", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_gal9.jpg", "title": "Children Care & Learning Activity #9", "category": "Hope Children Home"}, {"src": "./assets/hill_photos/img_home.png", "title": "Community Support & Welfare", "category": "Community & Relief"}, {"src": "./assets/hill_photos/img_nslider.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram"}, {"src": "./assets/enhanced/slider_1.jpg", "title": "Hope Children Home - Loving Care & Education", "category": "Hope Children Home"}, {"src": "./assets/enhanced/slider_2.jpg", "title": "Hope Children Home - Loving Care & Education", "category": "Hope Children Home"}, {"src": "./assets/enhanced/slider_3.jpg", "title": "Hope Children Home - Loving Care & Education", "category": "Hope Children Home"}, {"src": "./assets/enhanced/slider_6.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram"}, {"src": "./assets/enhanced/slider_7.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram"}, {"src": "./assets/enhanced/slider_8.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram"}, {"src": "./assets/enhanced/slider_9.jpg", "title": "Ashram Campus & Daily Life", "category": "Activities & Ashram"}];

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
        style: {
          background: "linear-gradient(180deg, #0369a1 0%, #0284c7 45%, #0ea5e9 100%)",
          backgroundColor: "#0284c7"
        },
        className: "relative text-white py-10 sm:py-14 overflow-hidden shadow-md",
        children: e.jsxs("div", {
          className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            e.jsx("div", {
              style: {
                backgroundColor: "rgba(37,99,235,0.35)",
                color: "#fcd34d",
                borderColor: "rgba(147,197,253,0.4)"
              },
              className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-3",
              children: "Real Impact in Tuticorin"
            }),
            e.jsxs("h1", {
              style: { color: "#ffffff" },
              className: "font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-3 text-white",
              children: [
                "Our Journey in ",
                e.jsx("span", {
                  style: { color: "#fbbf24" },
                  className: "font-extrabold",
                  children: "Real Photos"
                })
              ]
            }),
            e.jsx("p", {
              style: { color: "#f1f5f9" },
              className: "max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-medium",
              children: "Explore authentic moments from Hill Charity (Hill Organisation for People's Education). Since 2014, sheltering abandoned girl children, caring for elderly destitute mothers, and feeding hungry souls with love and dignity."
            }),
            e.jsxs("div", {
              style: { color: "#e2e8f0" },
              className: "flex flex-wrap items-center justify-center gap-6 mt-6 text-xs sm:text-sm font-semibold",
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
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",
        children: e.jsxs("div", {
          children: [
            // Filter Tabs
            e.jsx("div", {
              className: "flex flex-wrap items-center justify-center gap-2.5 mb-8",
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
                    style: {
                      backgroundColor: isSelected ? "#0ea5e9" : "#ffffff",
                      color: isSelected ? "#ffffff" : "#0369a1",
                      borderColor: isSelected ? "#0ea5e9" : "#bae6fd"
                    },
                    className: "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 border shadow-sm " +
                      (isSelected ? "scale-105 shadow-md" : "hover:bg-blue-50")
                  },
                  cat
                );
              })
            }),

            // Photos Grid
            e.jsx("div", {
              className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3",
              children: displayed.map((item, idx) => {
                return e.jsxs(
                  "div",
                  {
                    key: item.src + idx,
                    onClick: () => setModalIndex(idx),
                    className: "group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer aspect-[4/3]",
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
                className: "text-center mt-8",
                children: e.jsxs("button", {
                  onClick: () => setVisibleCount((prev) => prev + 24),
                  className: "px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#1D4ED8] hover:to-[#1E40AF] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
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
              className: "relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-xl overflow-hidden shadow-2xl flex flex-col",
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

      e.jsx("section", {
        style: {
          background: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)",
          backgroundColor: "#0284c7"
        },
        className: "text-white py-8 sm:py-10 border-t border-blue-400/20 mt-8",
        children: e.jsx("div", {
          className: "max-w-5xl mx-auto px-4 text-center",
          children: e.jsxs("div", {
            className: "flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [
              e.jsxs("div", {
                className: "text-center sm:text-left",
                children: [
                  e.jsx("h3", {
                    className: "font-display font-bold text-lg sm:text-xl text-white",
                    children: "Want to bring smiles to these children and elderly mothers?"
                  }),
                  e.jsx("p", {
                    className: "text-blue-200 text-xs sm:text-sm mt-0.5",
                    children: "Your support provides daily nutrition, healthcare, and education in Tuticorin."
                  })
                ]
              }),
              e.jsxs("div", {
                className: "flex items-center gap-3 shrink-0",
                children: [
                  e.jsx(Link, {
                    to: "/contact",
                    style:{backgroundColor:"#c29517",color:"#000000"},className:"btn-gold-donate px-6 py-2.5 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:scale-105 transition-all",
                    children: "Donate Now"
                  }),
                  e.jsx(Link, {
                    to: "/contact",
                    className: "px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all",
                    children: "Contact Ashram"
                  })
                ]
              })
            ]
          })
        })
      })
    ]
  });
};

export default Gallery;
