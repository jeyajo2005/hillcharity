import { j as v, r as w, Pe, ni, G0, wn, da, e1, sC, qP, eC, Yo, vn } from "./vendor.js";
import HomeRoute from "./Home-B5Mf3Si2.js";
import AboutRoute from "./About-DoJ-XgS1.js";
import ServicesRoute from "./Services-eg4BCXTo.js";
import ContactRoute from "./Contact-pTe4Lhbh.js";
import GalleryRoute from "./Gallery.js";
import CustomFooter from "./Footer.js";

const oC = HomeRoute;
const lC = AboutRoute;
const aC = ServicesRoute;
const uC = ContactRoute;
const gC = GalleryRoute;

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
            v.jsx(wn, { path: "/gallery", element: v.jsx(gC, {}) }),
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
          v.jsx(CustomFooter, {})
        ]
      })
    ]
  })
});

Yo.createRoot(document.getElementById("root")).render(
  v.jsx(da.StrictMode, { children: v.jsx(hC, {}) })
);
