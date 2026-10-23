import re

home_file = r"c:\Users\welcome\Downloads\hillcharity\assets\Home-B5Mf3Si2.js"

with open(home_file, "r", encoding="utf-8") as f:
    content = f.read()

quick_impact_code = '''
const DONATION_TIERS = [
  {
    amount: 500,
    amountStr: "₹500",
    title: "10 Wholesome Meals",
    subtitle: "Feed Destitute Elders & Hungry",
    desc: "Provides freshly-cooked, nutritious hot meals to 10 abandoned elderly women and street dwellers in Tuticorin.",
    badge: "Basic Need"
  },
  {
    amount: 1000,
    amountStr: "₹1,000",
    title: "1 Girl's Education / Month",
    subtitle: "Hope Children Home",
    desc: "Covers tuition fees, school bag, notebooks, stationery, and evening nutrition for a sheltered orphan girl.",
    badge: "Most Popular",
    isPopular: true
  },
  {
    amount: 2500,
    amountStr: "₹2,500",
    title: "Elder Mother Medical Care",
    subtitle: "Home for the Aged",
    desc: "Provides doctor consultation, regular BP/diabetes medicines, hygiene supplies, and 24/7 loving care for 1 destitute mother.",
    badge: "Lifesaving"
  },
  {
    amount: 5000,
    amountStr: "₹5,000",
    title: "Full Day Ashram Feast",
    subtitle: "Sponsor 100+ Beneficiaries",
    desc: "Sponsor a complete day of special festive breakfast, lunch, and dinner for 40+ children and 30+ elders in honor of your family event.",
    badge: "Celebration"
  }
];

const QuickImpactSection = () => {
  const [selectedIdx, setSelectedIdx] = o.useState(1);
  const [copiedField, setCopiedField] = o.useState(null);
  const [showBankDetails, setShowBankDetails] = o.useState(false);

  const selectedTier = DONATION_TIERS[selectedIdx];

  const copyToClipboard = (text, field) => {
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      }
    } catch(err) {}
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const whatsappUrl = "https://wa.me/919944704699?text=" + encodeURIComponent("Hello Hill Charity Tuticorin, I would like to donate " + selectedTier.amountStr + " to support " + selectedTier.title + ".");

  return e.jsx("section", {
    className: "py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-blue-50/40 relative overflow-hidden border-b border-slate-200/60",
    children: e.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        e.jsxs("div", {
          className: "text-center max-w-3xl mx-auto mb-10 sm:mb-12",
          children: [
            e.jsxs("div", {
              className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-black tracking-widest uppercase mb-3.5 shadow-sm",
              children: [
                e.jsx("span", { className: "text-base", children: "💛" }),
                "100% Direct Impact • 80G Certified Tax Exemption"
              ]
            }),
            e.jsxs("h2", {
              className: "font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight",
              children: [
                "Your Kindness Creates ",
                e.jsx("span", {
                  className: "bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-600 bg-clip-text text-transparent",
                  children: "Immediate Smiles"
                })
              ]
            }),
            e.jsx("p", {
              className: "text-slate-600 text-sm sm:text-base mt-3 leading-relaxed",
              children: "Every rupee goes directly to providing shelter, education, food, and medicine for Tuticorin's most vulnerable children and elderly mothers. Choose an impact tier below:"
            })
          ]
        }),

        e.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8",
          children: DONATION_TIERS.map((tier, idx) => {
            const isSelected = selectedIdx === idx;
            return e.jsxs("div", {
              key: idx,
              onClick: () => setSelectedIdx(idx),
              className: "cursor-pointer relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between " + (
                isSelected
                  ? "bg-gradient-to-b from-[#1E3A8A] to-[#172554] text-white shadow-[0_12px_36px_rgba(30,58,138,0.35)] scale-[1.03] ring-4 ring-[#FBBF24]/80"
                  : "bg-white text-slate-900 border border-slate-200/80 hover:border-blue-400 shadow-md hover:shadow-xl hover:-translate-y-1"
              ),
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between gap-2 mb-4",
                  children: [
                    e.jsx("span", {
                      className: "px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider " + (
                        tier.isPopular
                          ? (isSelected ? "bg-[#FBBF24] text-[#1E3A8A]" : "bg-amber-400 text-slate-950")
                          : (isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700")
                      ),
                      children: tier.badge
                    }),
                    e.jsx("span", {
                      className: "w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold " + (
                        isSelected ? "bg-[#FBBF24] text-[#1E3A8A]" : "border border-slate-300 text-transparent"
                      ),
                      children: isSelected ? "✓" : ""
                    })
                  ]
                }),

                e.jsxs("div", {
                  className: "mb-3",
                  children: [
                    e.jsx("div", {
                      className: "font-display font-extrabold text-3xl sm:text-4xl " + (isSelected ? "text-[#FDE68A]" : "text-[#1E3A8A]"),
                      children: tier.amountStr
                    }),
                    e.jsx("div", {
                      className: "font-bold text-base mt-1 " + (isSelected ? "text-white" : "text-slate-900"),
                      children: tier.title
                    }),
                    e.jsx("div", {
                      className: "text-xs font-medium mt-0.5 " + (isSelected ? "text-blue-200" : "text-slate-500"),
                      children: tier.subtitle
                    })
                  ]
                }),

                e.jsx("p", {
                  className: "text-xs leading-relaxed mt-2 pt-3 border-t " + (
                    isSelected ? "text-blue-100/90 border-white/15" : "text-slate-600 border-slate-100"
                  ),
                  children: tier.desc
                })
              ]
            });
          })
        }),

        e.jsxs("div", {
          className: "bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-xl max-w-4xl mx-auto",
          children: [
            e.jsxs("div", {
              className: "flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100",
              children: [
                e.jsxs("div", {
                  className: "text-center md:text-left",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-amber-600 uppercase tracking-widest mb-1",
                      children: [
                        e.jsx("span", { className: "w-2 h-2 rounded-full bg-amber-500 animate-pulse" }),
                        "Your Selected Contribution"
                      ]
                    }),
                    e.jsxs("div", {
                      className: "text-2xl sm:text-3xl font-display font-black text-slate-900",
                      children: [
                        selectedTier.amountStr,
                        " — ",
                        e.jsx("span", { className: "text-[#1E3A8A]", children: selectedTier.title })
                      ]
                    }),
                    e.jsx("p", {
                      className: "text-slate-500 text-xs sm:text-sm mt-1",
                      children: selectedTier.desc
                    })
                  ]
                }),

                e.jsxs("div", {
                  className: "flex flex-wrap items-center justify-center gap-3 shrink-0",
                  children: [
                    e.jsxs("button", {
                      type: "button",
                      onClick: () => setShowBankDetails(!showBankDetails),
                      className: "px-6 py-3.5 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-[#172554] shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2",
                      children: [
                        showBankDetails ? "Hide Bank / UPI" : "Show Bank & UPI Details",
                        e.jsx("span", { children: showBankDetails ? " ▲" : " ▼" })
                      ]
                    }),
                    e.jsx("a", {
                      href: whatsappUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "px-6 py-3.5 rounded-full font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#1E3A8A] bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] hover:from-[#FCD34D] hover:to-[#FBBF24] shadow-[0_4px_20px_rgba(251,191,36,0.45)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2",
                      children: "WhatsApp Founder"
                    })
                  ]
                })
              ]
            }),

            showBankDetails && e.jsxs("div", {
              className: "mt-6 pt-2",
              children: [
                e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "rounded-2xl p-5 bg-gradient-to-br from-blue-50/70 to-slate-50 border border-blue-200",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-3",
                          children: [
                            e.jsx("span", { className: "text-xs font-black uppercase text-blue-900 tracking-wider", children: "🏦 State Bank of India (SBI)" }),
                            e.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold", children: "Current A/C" })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "space-y-2 text-xs",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsx("span", { className: "text-slate-500", children: "Account Name: " }),
                                e.jsx("strong", { className: "text-slate-900 block font-bold", children: "HILL ORGANISATION FOR PEOPLE EDUCATION" })
                              ]
                            }),
                            e.jsxs("div", {
                              className: "flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-slate-200",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("span", { className: "text-slate-400 text-[10px] block", children: "Account Number" }),
                                    e.jsx("span", { className: "font-mono font-black text-sm text-slate-900 tracking-wider", children: "3426 0992 411" })
                                  ]
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => copyToClipboard("34260992411", "acc"),
                                  className: "px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors",
                                  children: copiedField === "acc" ? "✓ Copied" : "Copy"
                                })
                              ]
                            }),
                            e.jsxs("div", {
                              className: "flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-slate-200",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("span", { className: "text-slate-400 text-[10px] block", children: "IFSC Code (Tuticorin Main)" }),
                                    e.jsx("span", { className: "font-mono font-black text-sm text-slate-900 tracking-wider", children: "SBIN0000940" })
                                  ]
                                }),
                                e.jsx("button", {
                                  type: "button",
                                  onClick: () => copyToClipboard("SBIN0000940", "ifsc"),
                                  className: "px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors",
                                  children: copiedField === "ifsc" ? "✓ Copied" : "Copy"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    e.jsxs("div", {
                      className: "rounded-2xl p-5 bg-gradient-to-br from-amber-50/70 to-orange-50/40 border border-amber-200 flex flex-col justify-between",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-between mb-3",
                              children: [
                                e.jsx("span", { className: "text-xs font-black uppercase text-amber-900 tracking-wider", children: "📱 UPI / GPay / PhonePe / Paytm" }),
                                e.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold", children: "Instant Transfer" })
                              ]
                            }),
                            e.jsxs("div", {
                              className: "space-y-2 text-xs",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center justify-between bg-white px-3 py-2 rounded-xl border border-amber-200",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("span", { className: "text-slate-400 text-[10px] block", children: "Official UPI ID" }),
                                        e.jsx("span", { className: "font-mono font-black text-sm text-amber-900 tracking-wider", children: "9944704699@sbi" })
                                      ]
                                    }),
                                    e.jsx("button", {
                                      type: "button",
                                      onClick: () => copyToClipboard("9944704699@sbi", "upi"),
                                      className: "px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors",
                                      children: copiedField === "upi" ? "✓ Copied" : "Copy"
                                    })
                                  ]
                                }),
                                e.jsxs("div", {
                                  className: "p-3 rounded-xl bg-amber-100/60 text-amber-900 text-xs leading-relaxed",
                                  children: [
                                    e.jsx("strong", { children: "Important Note: " }),
                                    "After transferring, please share a screenshot to founder ",
                                    e.jsx("strong", { children: "+91 99447 04699" }),
                                    " on WhatsApp for your formal 80G tax exemption receipt."
                                  ]
                                })
                              ]
                            })
                          ]
                        }),
                        e.jsx("div", {
                          className: "mt-3 text-center text-[11px] text-slate-500",
                          children: "Registered Trust: BK.IV 123/2018 • Tuticorin, Tamil Nadu"
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            e.jsxs("div", {
              className: "mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs",
              children: [
                e.jsxs("div", {
                  className: "w-full sm:w-2/3",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between font-bold text-slate-700 mb-1.5",
                      children: [
                        e.jsx("span", { children: "🎯 October 2026 Goal: School Books & Elder Medicine" }),
                        e.jsx("span", { className: "text-emerald-600 font-black", children: "78% Reached (₹1.56L / ₹2.0L)" })
                      ]
                    }),
                    e.jsx("div", {
                      className: "w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5",
                      children: e.jsx("div", {
                        className: "h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full",
                        style: { width: "78%" }
                      })
                    })
                  ]
                }),
                e.jsx(x, {
                  to: "/contact",
                  className: "text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 shrink-0 text-xs",
                  children: ["View Full Trust Accounts & 80G Details", " →"]
                })
              ]
            })
          ]
        })
      ]
    })
  });
};
'''

# Insert QuickImpactSection right before L=[
target = "L=[{number:\"01\""
if target in content:
    content = content.replace(target, quick_impact_code + "\n" + target)

# Update ne to include QuickImpactSection
old_ne = 'ne=()=>e.jsxs("main",{className:"m-0 p-0",children:[e.jsx(_,{}),e.jsx(U,{}),e.jsx($,{}),e.jsx(B,{}),e.jsx(Y,{}),e.jsx(H,{}),e.jsx(Q,{}),e.jsx(K,{}),e.jsx(HomeGallery,{}),e.jsx(k,{})]});'
new_ne = 'ne=()=>e.jsxs("main",{className:"m-0 p-0",children:[e.jsx(_,{}),e.jsx(QuickImpactSection,{}),e.jsx(U,{}),e.jsx($,{}),e.jsx(B,{}),e.jsx(Y,{}),e.jsx(H,{}),e.jsx(Q,{}),e.jsx(K,{}),e.jsx(HomeGallery,{}),e.jsx(k,{})]});'

if old_ne in content:
    content = content.replace(old_ne, new_ne)

with open(home_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Home-B5Mf3Si2.js successfully updated with QuickImpactSection!")
