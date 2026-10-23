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
    className: "bg-[#F8FAFC] min-h-screen pt-20",
    children: [
      // Hero Header - Editorial Exhibition Style
      e.jsx("section", {
        style: {
          background: "linear-gradient(180deg, #0284c7 0%, #0369a1 100%)",
          backgroundColor: "#0284c7"
        },
        className: "relative text-white py-12 sm:py-16 overflow-hidden shadow-lg",
        children: e.jsxs("div", {
          className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: [
            e.jsxs("div", {
              className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-[0.2em] uppercase mb-4 text-sky-200",
              children: [
                e.jsx("span", { className: "w-2 h-2 rounded-full bg-amber-400 animate-pulse" }),
                "Visual Archive • Est. 2014 Tuticorin"
              ]
            }),
            e.jsxs("h1", {
              className: "font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight mb-4 text-white uppercase",
              children: [
                "Moments of ",
                e.jsx("span", {
                  className: "text-[#FDE047] drop-shadow-sm",
                  children: "Hope & Dignity"
                })
              ]
            }),
            e.jsx("div", {
              className: "w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4 rounded-full"
            }),
            e.jsx("p", {
              className: "max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-sky-50 font-normal",
              children: "Every picture tells a story of rescued girl children nurtured into scholars, elderly mothers cherished with dignity, and hungry families served daily hot meals."
            }),
            e.jsxs("div", {
              className: "flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-6 pt-6 border-t border-white/15 text-xs sm:text-sm font-semibold text-sky-100",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm",
                  children: [
                    e.jsx("span", { className: "w-2 h-2 rounded-full bg-amber-400" }),
                    GALLERY_ITEMS.length + "+ Verified Photos"
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm",
                  children: [
                    e.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400" }),
                    "7 Active Initiatives"
                  ]
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm",
                  children: [
                    e.jsx("span", { className: "w-2 h-2 rounded-full bg-sky-300" }),
                    "Tuticorin, Tamil Nadu"
                  ]
                })
              ]
            })
          ]
        })
      }),

      // Gallery Controls & Editorial Grid
      e.jsx("section", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",
        children: e.jsxs("div", {
          children: [
            // Filter Tabs - Pinterest Minimal Pill Bar
            e.jsx("div", {
              className: "flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10",
              children: CATEGORIES.map((cat) => {
                const isSelected = selectedCat === cat;
                return e.jsxs(
                  "button",
                  {
                    key: cat,
                    onClick: () => {
                      setSelectedCat(cat);
                      setVisibleCount(24);
                    },
                    style: {
                      backgroundColor: isSelected ? "#0284c7" : "#ffffff",
                      color: isSelected ? "#ffffff" : "#334155",
                      borderColor: isSelected ? "#0284c7" : "#e2e8f0"
                    },
                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 border shadow-sm cursor-pointer " +
                      (isSelected ? "shadow-md scale-105" : "hover:border-sky-300 hover:text-sky-600 hover:bg-sky-50/50")
                  },
                  [
                    e.jsx("span", {
                      key: "dot",
                      className: "w-1.5 h-1.5 rounded-full " + (isSelected ? "bg-amber-300" : "bg-slate-300")
                    }),
                    cat
                  ]
                );
              })
            }),

            // Editorial Collage Cards Grid (Image 3 inspired)
            e.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6",
              children: displayed.map((item, idx) => {
                const isFeatured = idx % 8 === 0;
                return e.jsxs(
                  "div",
                  {
                    key: item.src + idx,
                    onClick: () => setModalIndex(idx),
                    className: "group bg-white p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer " +
                      (isFeatured ? "md:col-span-2" : ""),
                    children: [
                      // Photo Container with floating pill badges
                      e.jsxs("div", {
                        className: "relative rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] w-full",
                        children: [
                          e.jsx("img", {
                            src: item.src,
                            alt: item.title,
                            loading: "lazy",
                            className: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          }),
                          // Floating Category Tag
                          e.jsx("div", {
                            className: "absolute top-3 left-3 z-10",
                            children: e.jsxs("span", {
                              className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-slate-800 shadow-sm border border-white/60",
                              children: [
                                e.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-sky-500" }),
                                item.category
                              ]
                            })
                          }),
                          // Floating Photo Number
                          e.jsx("div", {
                            className: "absolute top-3 right-3 z-10",
                            children: e.jsx("span", {
                              className: "inline-flex px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white/90",
                              children: "#" + String(idx + 1).padStart(2, "0")
                            })
                          }),
                          // Hover Eye Icon Overlay
                          e.jsx("div", {
                            className: "absolute inset-0 bg-sky-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                            children: e.jsxs("div", {
                              className: "w-11 h-11 rounded-full bg-white/95 text-sky-700 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300",
                              children: [
                                e.jsx("svg", {
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2.5",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  className: "w-5 h-5",
                                  children: [
                                    e.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                                    e.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
                                    e.jsx("line", { x1: "11", y1: "8", x2: "11", y2: "14" }),
                                    e.jsx("line", { x1: "8", y1: "11", x2: "14", y2: "11" })
                                  ]
                                })
                              ]
                            })
                          })
                        ]
                      }),
                      // Editorial Card Footer
                      e.jsxs("div", {
                        className: "pt-3 px-1 flex items-center justify-between gap-2",
                        children: [
                          e.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [
                              e.jsx("p", {
                                className: "text-[11px] font-bold text-sky-600 uppercase tracking-wider mb-0.5",
                                children: item.category
                              }),
                              e.jsx("h3", {
                                className: "font-semibold text-xs sm:text-sm text-slate-800 line-clamp-1 group-hover:text-sky-600 transition-colors",
                                children: item.title
                              })
                            ]
                          }),
                          e.jsx("span", {
                            className: "shrink-0 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all text-xs font-bold",
                            children: "→"
                          })
                        ]
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
                  className: "px-9 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7] shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer",
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
              className: "absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-xl transition-all cursor-pointer",
              children: "✕"
            }),

            // Previous Button
            e.jsx("button", {
              onClick: (ev) => {
                ev.stopPropagation();
                setModalIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
              },
              className: "absolute left-3 sm:left-6 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-2xl transition-all cursor-pointer",
              children: "‹"
            }),

            // Next Button
            e.jsx("button", {
              onClick: (ev) => {
                ev.stopPropagation();
                setModalIndex((prev) => (prev + 1) % filtered.length);
              },
              className: "absolute right-3 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center text-2xl transition-all cursor-pointer",
              children: "›"
            }),

            // Modal Body
            e.jsxs("div", {
              onClick: (ev) => ev.stopPropagation(),
              className: "relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/10",
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
        })
    ]
  });
};

export default Gallery;
