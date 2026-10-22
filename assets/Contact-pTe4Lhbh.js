import{c as u,r,j as e,m as o,C as p}from"./vendor.js";import{S as s}from"./ScrollReveal-CC7-yOZu.js";import"./use-in-view-DfQYWAaa.js";

const b=u("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);

const N=()=>{
  const[c,t]=r.useState(!1),
       [a,i]=r.useState({fullName:"",email:"",phone:"",subject:"",message:""}),
       n=l=>{const{name:m,value:x}=l.target;i(h=>({...h,[m]:x}))},
       d=l=>{l.preventDefault(),t(!0),setTimeout(()=>{t(!1)},4e3)};

  return e.jsxs("main",{className:"min-h-screen bg-cream-50 pt-20",children:[
    e.jsx("section",{className:"pt-16 pb-12 lg:pt-20 lg:pb-16","aria-labelledby":"contact-heading",children:
      e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[
        e.jsx(s,{children:e.jsxs("div",{className:"text-center mb-12",children:[
          e.jsxs("div",{className:"label-tag justify-center mb-4",children:[e.jsx("span",{className:"w-5 h-px bg-forest-600"}),"Hill Charity — Tuticorin"]}),
          e.jsxs("h1",{id:"contact-heading",className:"font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-tight",children:["Get in Touch with"," ",e.jsx("span",{className:"text-gradient-green",children:"Hill Charity."})]}),
          e.jsx("p",{className:"mt-4 text-charcoal-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto",children:"Hill Organisation for People's Education is based in Tuticorin, Tamil Nadu. Reach out to us for donations, volunteering, or sponsorships."})
        ]})}),

        e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[
          e.jsxs("div",{className:"bg-white rounded-3xl p-7 border border-blue-100 shadow-card flex flex-col items-center text-center",children:[
            e.jsx("div",{className:"w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 font-bold text-xl",children:"📍"}),
            e.jsx("h3",{className:"font-display font-bold text-lg text-charcoal-900 mb-2",children:"Our Address"}),
            e.jsx("p",{className:"text-charcoal-600 text-sm leading-relaxed",children:"42N, Bryant Nagar 1st Street (East), Tuticorin - 628008, Tamil Nadu, South India."})
          ]}),
          e.jsxs("div",{className:"bg-white rounded-3xl p-7 border border-blue-100 shadow-card flex flex-col items-center text-center",children:[
            e.jsx("div",{className:"w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 font-bold text-xl",children:"📞"}),
            e.jsx("h3",{className:"font-display font-bold text-lg text-charcoal-900 mb-2",children:"Phone & WhatsApp"}),
            e.jsxs("p",{className:"text-charcoal-600 text-sm leading-relaxed",children:[
              e.jsx("a",{href:"tel:+919944704699",className:"hover:text-blue-600 block font-semibold",children:"+91 9944704699"}),
              e.jsx("a",{href:"tel:+919952020878",className:"hover:text-blue-600 block",children:"+91 9952020878"}),
              e.jsx("a",{href:"https://wa.me/919944704699",target:"_blank",rel:"noreferrer",className:"inline-block mt-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full",children:"Chat on WhatsApp"})
            ]})
          ]}),
          e.jsxs("div",{className:"bg-white rounded-3xl p-7 border border-blue-100 shadow-card flex flex-col items-center text-center",children:[
            e.jsx("div",{className:"w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 font-bold text-xl",children:"✉️"}),
            e.jsx("h3",{className:"font-display font-bold text-lg text-charcoal-900 mb-2",children:"Email & Trust Info"}),
            e.jsx("a",{href:"mailto:hillorganization85@gmail.com",className:"text-blue-600 font-semibold text-sm hover:underline block mb-2",children:"hillorganization85@gmail.com"}),
            e.jsx("p",{className:"text-charcoal-500 text-xs",children:"Reg. Charitable Trust (Est. 2014, Tuticorin)"})
          ]})
        ]}),

        e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[
          e.jsx("div",{className:"lg:col-span-7",children:
            e.jsx(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:"bg-white rounded-3xl border border-charcoal-100 shadow-card p-6 sm:p-8 lg:p-10",children:
              c?e.jsxs("div",{className:"min-h-[400px] flex flex-col items-center justify-center text-center",children:[
                e.jsx("div",{className:"w-16 h-16 rounded-full bg-forest-50 flex items-center justify-center mb-6",children:e.jsx(p,{className:"w-8 h-8 text-forest-600"})}),
                e.jsx("h2",{className:"font-display font-bold text-3xl text-charcoal-900 mb-3",children:"Message Sent!"}),
                e.jsx("p",{className:"text-charcoal-500 max-w-md leading-relaxed",children:"Thank you for reaching out to Hill Charity. Our team will get back to you shortly."})
              ]}):
              e.jsxs("form",{onSubmit:d,className:"space-y-6",children:[
                e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[
                  e.jsxs("div",{children:[
                    e.jsxs("label",{htmlFor:"fullName",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:["Full Name",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),
                    e.jsx("input",{id:"fullName",name:"fullName",type:"text",value:a.fullName,onChange:n,required:!0,placeholder:"Your full name",className:"w-full h-14 px-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"})
                  ]}),
                  e.jsxs("div",{children:[
                    e.jsxs("label",{htmlFor:"email",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:["Email",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),
                    e.jsx("input",{id:"email",name:"email",type:"email",value:a.email,onChange:n,required:!0,placeholder:"you@example.com",className:"w-full h-14 px-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"})
                  ]})
                ]}),
                e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[
                  e.jsxs("div",{children:[
                    e.jsx("label",{htmlFor:"phone",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:"Phone / WhatsApp"}),
                    e.jsx("input",{id:"phone",name:"phone",type:"tel",value:a.phone,onChange:n,placeholder:"+91 XXXXX XXXXX",className:"w-full h-14 px-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"})
                  ]}),
                  e.jsxs("div",{children:[
                    e.jsx("label",{htmlFor:"subject",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:"Subject"}),
                    e.jsxs("select",{id:"subject",name:"subject",value:a.subject,onChange:n,className:"w-full h-14 px-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-700 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100",children:[
                      e.jsx("option",{value:"",children:"Select a subject"}),
                      e.jsx("option",{value:"food",children:"Sponsor Food (100 People)"}),
                      e.jsx("option",{value:"girl-child",children:"Sponsor a Girl Child (Rs.1000/mo)"}),
                      e.jsx("option",{value:"elderly",children:"Sponsor an Elderly Mother (Rs.2500/mo)"}),
                      e.jsx("option",{value:"donation",children:"General Donation"}),
                      e.jsx("option",{value:"volunteer",children:"Volunteer with Us"}),
                      e.jsx("option",{value:"general",children:"General Enquiry"})
                    ]})
                  ]})
                ]}),
                e.jsxs("div",{children:[
                  e.jsxs("label",{htmlFor:"message",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:["Message",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),
                  e.jsx("textarea",{id:"message",name:"message",value:a.message,onChange:n,required:!0,rows:5,placeholder:"How can we help or how would you like to partner with Hill Charity?",className:"w-full px-4 py-4 rounded-2xl border border-charcoal-200 bg-white text-charcoal-800 placeholder:text-charcoal-400 outline-none resize-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"})
                ]}),
                e.jsxs(o.button,{type:"submit",whileHover:{scale:1.01},whileTap:{scale:.98},className:"w-full h-14 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md transition-all duration-300",children:["Send Message",e.jsx(b,{className:"w-4 h-4"})]})
              ]})
            })
          }),

          e.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[
            e.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-card bg-gradient-to-br from-white to-amber-50/40",children:[
              e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[
                e.jsx("span",{className:"px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider",children:"Sponsorship Tiers"}),
                e.jsx("span",{className:"text-xs text-charcoal-400 font-medium",children:"Direct Impact"})
              ]}),
              e.jsx("h3",{className:"font-display font-bold text-xl text-charcoal-900 mb-4",children:"Sponsor Food & Care"}),
              e.jsxs("ul",{className:"space-y-2.5 text-sm text-charcoal-700 mb-4",children:[
                e.jsxs("li",{className:"flex justify-between py-1.5 border-b border-amber-100",children:[e.jsx("span",{children:"Sponsor Breakfast (100 people)"}),e.jsx("span",{className:"font-bold text-amber-600",children:"Rs. 3,500/-"})]}),
                e.jsxs("li",{className:"flex justify-between py-1.5 border-b border-amber-100",children:[e.jsx("span",{children:"Sponsor Lunch (100 people)"}),e.jsx("span",{className:"font-bold text-amber-600",children:"Rs. 4,500/-"})]}),
                e.jsxs("li",{className:"flex justify-between py-1.5 border-b border-amber-100",children:[e.jsx("span",{children:"Sponsor Dinner (100 people)"}),e.jsx("span",{className:"font-bold text-amber-600",children:"Rs. 3,500/-"})]}),
                e.jsxs("li",{className:"flex justify-between py-1.5 border-b border-amber-100",children:[e.jsx("span",{children:"Full Day Food (100 people)"}),e.jsx("span",{className:"font-bold text-amber-600",children:"Rs. 11,500/-"})]}),
                e.jsxs("li",{className:"flex justify-between py-1.5 border-b border-amber-100",children:[e.jsx("span",{children:"Sponsor a Girl Child"}),e.jsx("span",{className:"font-bold text-blue-600",children:"Rs. 1,000 / mo"})]}),
                e.jsxs("li",{className:"flex justify-between py-1.5",children:[e.jsx("span",{children:"Sponsor an Elderly Mother"}),e.jsx("span",{className:"font-bold text-blue-600",children:"Rs. 2,500 / mo"})]})
              ]})
            ]}),

            e.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-card",children:[
              e.jsx("h3",{className:"font-display font-bold text-xl text-charcoal-900 mb-4",children:"Bank Details for Donations"}),
              e.jsxs("div",{className:"mb-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-200/60 text-xs sm:text-sm space-y-1.5",children:[
                e.jsx("p",{className:"font-bold text-blue-800 uppercase tracking-wider text-xs",children:"Indian Donors (Axis Bank):"}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"Account Name: "}),e.jsx("b",{children:"Hill Organisation for Peoples Education"})]}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"Account No: "}),e.jsx("b",{className:"font-mono text-blue-700 font-bold",children:"919010013069384"})]}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"IFSC Code: "}),e.jsx("b",{className:"font-mono",children:"UTIB0002095"})]}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"Branch: "}),"KTC Nagar"]}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"UPI ID: "}),e.jsx("b",{className:"text-blue-700",children:"9944704699@upi"})]})
              ]}),
              e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm space-y-1.5",children:[
                e.jsx("p",{className:"font-bold text-slate-800 uppercase tracking-wider text-xs",children:"Foreign Donors (State Bank of India):"}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"Account Name: "}),e.jsx("b",{children:"Hill Organization for peoples education"})]}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"Account No: "}),e.jsx("b",{className:"font-mono font-bold",children:"40088305059"})]}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"IFSC Code: "}),e.jsx("b",{className:"font-mono",children:"SBIN0000691"})]}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"Swift Code: "}),e.jsx("b",{className:"font-mono",children:"SBININBB104"})]}),
                e.jsxs("p",{children:[e.jsx("span",{className:"text-charcoal-500",children:"Branch Code: "}),"00691"]})
              ]})
            ]})
          ]})
        ]})
      ]})
    }),

    e.jsx("section",{className:"py-16 bg-white border-t border-charcoal-100",children:
      e.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:
        e.jsxs(s,{children:[
          e.jsxs("div",{className:"label-tag justify-center mb-4",children:[e.jsx("span",{className:"w-5 h-px bg-forest-600"}),"Hill Charity Trust"]}),
          e.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl text-charcoal-900",children:["Give a little &"," ",e.jsx("span",{className:"text-gradient-green",children:"change a lot."})]}),
          e.jsx("p",{className:"mt-4 text-charcoal-500 max-w-xl mx-auto leading-relaxed",children:"Visit our ashram in Tuticorin, meet the children and mothers, and see the impact of your compassion first-hand."})
        ]})
      })
    })
  ]})
};

export{N as default};
