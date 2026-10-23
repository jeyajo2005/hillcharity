import { j as v, L as Link } from "./vendor.js";

const CustomFooter = () => {
  return v.jsxs("footer", {
    className: "w-full bg-[#0b1712] text-white relative overflow-hidden select-none",
    role: "contentinfo",
    children: [
      // 1. Mountain & Pine Forest Landscape Top Banner (matches Image 2 style)
      v.jsx("div", {
        className: "w-full overflow-hidden bg-white leading-none pointer-events-none",
        children: v.jsx("img", {
          src: "./assets/footer-mountain-landscape.svg",
          alt: "Hill Landscape",
          className: "w-full h-24 sm:h-32 md:h-40 object-cover object-bottom block",
          loading: "lazy"
        })
      }),

      // 2. Compact Main Footer Content Area
      v.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6",
        children: [
          v.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 items-start pb-6",
            children: [
              // Column 1: Links
              v.jsxs("div", {
                className: "space-y-2",
                children: [
                  v.jsx("h4", {
                    className: "font-bold text-sm tracking-wider text-white border-b border-white/30 pb-1.5 mb-2.5 inline-block min-w-[90px]",
                    children: "Links"
                  }),
                  v.jsxs("ul", {
                    className: "space-y-1.5 text-xs text-slate-300 font-medium",
                    children: [
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/",
                          className: "hover:text-amber-400 hover:translate-x-1 inline-block transition-all",
                          children: "Home"
                        })
                      }),
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/about",
                          className: "hover:text-amber-400 hover:translate-x-1 inline-block transition-all",
                          children: "About Us"
                        })
                      }),
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/gallery",
                          className: "hover:text-amber-400 hover:translate-x-1 inline-block transition-all",
                          children: "Photo Gallery"
                        })
                      }),
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/contact",
                          className: "hover:text-amber-400 hover:translate-x-1 inline-block transition-all",
                          children: "Contact Us"
                        })
                      })
                    ]
                  })
                ]
              }),

              // Column 2: Programs
              v.jsxs("div", {
                className: "space-y-2",
                children: [
                  v.jsx("h4", {
                    className: "font-bold text-sm tracking-wider text-white border-b border-white/30 pb-1.5 mb-2.5 inline-block min-w-[90px]",
                    children: "Programs"
                  }),
                  v.jsxs("ul", {
                    className: "space-y-1.5 text-xs text-slate-300 font-medium",
                    children: [
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/services",
                          className: "hover:text-amber-400 hover:translate-x-1 inline-block transition-all",
                          children: "Hope Children Home"
                        })
                      }),
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/services",
                          className: "hover:text-amber-400 hover:translate-x-1 inline-block transition-all",
                          children: "Home for the Aged"
                        })
                      }),
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/services",
                          className: "hover:text-amber-400 hover:translate-x-1 inline-block transition-all",
                          children: "Feed the Hungry"
                        })
                      }),
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/services",
                          className: "hover:text-amber-400 hover:translate-x-1 inline-block transition-all",
                          children: "Our 7 Core Initiatives"
                        })
                      })
                    ]
                  })
                ]
              }),

              // Column 3: Trust & Legal
              v.jsxs("div", {
                className: "space-y-2",
                children: [
                  v.jsx("h4", {
                    className: "font-bold text-sm tracking-wider text-white border-b border-white/30 pb-1.5 mb-2.5 inline-block min-w-[90px]",
                    children: "Trust & 80G"
                  }),
                  v.jsxs("ul", {
                    className: "space-y-1.5 text-xs text-slate-300 font-medium",
                    children: [
                      v.jsx("li", {
                        className: "text-slate-400",
                        children: "Regd. BK.IV 123/2018"
                      }),
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/contact",
                          className: "text-amber-400 hover:underline",
                          children: "80G Tax Exemption"
                        })
                      }),
                      v.jsx("li", {
                        children: v.jsx(Link, {
                          to: "/contact",
                          className: "hover:text-amber-400 hover:translate-x-1 inline-block transition-all",
                          children: "Bank / UPI Transfer"
                        })
                      }),
                      v.jsx("li", {
                        children: v.jsx("a", {
                          href: "https://wa.me/919944704699",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "hover:text-emerald-400 hover:translate-x-1 inline-block transition-all",
                          children: "WhatsApp Founder"
                        })
                      })
                    ]
                  })
                ]
              }),

              // Column 4: Round Social Icons (Matches 3 circular buttons in Image 2)
              v.jsxs("div", {
                className: "flex flex-col items-start lg:items-center justify-start space-y-3",
                children: [
                  v.jsx("span", {
                    className: "text-xs font-bold tracking-widest uppercase text-slate-400",
                    children: "Connect"
                  }),
                  v.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      // Mail round button
                      v.jsx("a", {
                        href: "mailto:hillorganization85@gmail.com",
                        className: "w-10 h-10 rounded-full border border-white/60 hover:border-amber-400 hover:bg-white/10 flex items-center justify-center text-white hover:text-amber-400 transition-all shadow-sm hover:scale-110",
                        "aria-label": "Email us",
                        children: v.jsx("svg", {
                          viewBox: "0 0 24 24",
                          className: "w-4 h-4 fill-none stroke-current stroke-2",
                          children: v.jsx("path", {
                            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"
                          })
                        })
                      }),
                      // Phone round button
                      v.jsx("a", {
                        href: "tel:+919944704699",
                        className: "w-10 h-10 rounded-full border border-white/60 hover:border-amber-400 hover:bg-white/10 flex items-center justify-center text-white hover:text-amber-400 transition-all shadow-sm hover:scale-110",
                        "aria-label": "Call us",
                        children: v.jsx("svg", {
                          viewBox: "0 0 24 24",
                          className: "w-4 h-4 fill-none stroke-current stroke-2",
                          children: v.jsx("path", {
                            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                          })
                        })
                      }),
                      // WhatsApp round button
                      v.jsx("a", {
                        href: "https://wa.me/919944704699",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "w-10 h-10 rounded-full border border-white/60 hover:border-emerald-400 hover:bg-emerald-500/20 flex items-center justify-center text-white hover:text-emerald-400 transition-all shadow-sm hover:scale-110",
                        "aria-label": "WhatsApp us",
                        children: v.jsx("svg", {
                          viewBox: "0 0 24 24",
                          className: "w-4 h-4 fill-current",
                          children: v.jsx("path", {
                            d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"
                          })
                        })
                      })
                    ]
                  })
                ]
              }),

              // Column 5: Right-Aligned Contact Details (matches Image 2 TrafficBot.uk right side)
              v.jsxs("div", {
                className: "space-y-1.5 text-xs text-slate-300 lg:text-right",
                children: [
                  v.jsx("div", {
                    className: "font-display font-extrabold text-sm text-white tracking-wide mb-1",
                    children: "HillCharity.org"
                  }),
                  v.jsxs("div", {
                    className: "flex items-center lg:justify-end gap-1.5 text-slate-400",
                    children: [
                      v.jsx("span", { children: "42N, Bryant Nagar 1st St (East)" }),
                      v.jsx("span", { className: "text-amber-400 text-[10px]", children: "↗" })
                    ]
                  }),
                  v.jsxs("div", {
                    className: "flex items-center lg:justify-end gap-1.5 text-slate-400",
                    children: [
                      v.jsx("span", { children: "Tuticorin - 628008, Tamil Nadu" }),
                      v.jsx("span", { className: "text-amber-400 text-[10px]", children: "↗" })
                    ]
                  }),
                  v.jsxs("div", {
                    className: "flex items-center lg:justify-end gap-1.5 text-slate-300 font-mono pt-1",
                    children: [
                      v.jsx("span", { className: "text-slate-400 font-sans", children: "tel:" }),
                      v.jsx("a", {
                        href: "tel:+919944704699",
                        className: "hover:text-amber-400",
                        children: "+91 9944704699"
                      })
                    ]
                  }),
                  v.jsxs("div", {
                    className: "flex items-center lg:justify-end gap-1.5 text-slate-300 pt-0.5",
                    children: [
                      v.jsx("span", { className: "text-slate-400", children: "email:" }),
                      v.jsx("a", {
                        href: "mailto:hillorganization85@gmail.com",
                        className: "hover:text-amber-400 underline text-[11px]",
                        children: "hillorganization85@gmail.com"
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          // 3. Compact Bottom Sub-Footer Bar (matches Image 2 bottom bar)
          v.jsxs("div", {
            className: "border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400",
            children: [
              v.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  v.jsx("span", {
                    className: "font-display font-black text-xs text-white tracking-wider uppercase",
                    children: "Hill Charity"
                  }),
                  v.jsx("span", { className: "w-1 h-1 rounded-full bg-emerald-400" }),
                  v.jsx("span", { className: "text-slate-400", children: "Tuticorin, India" })
                ]
              }),
              v.jsxs("div", {
                className: "flex flex-wrap items-center justify-center gap-4 text-slate-400",
                children: [
                  v.jsx(Link, { to: "/about", className: "hover:text-white transition-colors", children: "Mission" }),
                  v.jsx(Link, { to: "/services", className: "hover:text-white transition-colors", children: "Programs" }),
                  v.jsx(Link, { to: "/gallery", className: "hover:text-white transition-colors", children: "Gallery" }),
                  v.jsx(Link, { to: "/contact", className: "hover:text-white transition-colors", children: "80G Exemption" }),
                  v.jsx(Link, { to: "/contact", className: "hover:text-white transition-colors", children: "Contact" })
                ]
              }),
              v.jsxs("div", {
                className: "text-slate-500 text-[10px] text-center sm:text-right",
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " Hill Organisation for People's Education."
                ]
              })
            ]
          })
        ]
      })
    ]
  });
};

export default CustomFooter;
