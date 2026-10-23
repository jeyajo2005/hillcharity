import{r as o,j as e,m as i,H as d}from"./vendor.js";import{S as r}from"./ScrollReveal-CC7-yOZu.js";import{U as c,C as x}from"./CTASection-DsUdwk3m.js";import{u as m}from"./use-in-view-DfQYWAaa.js";import{S as h,E as p}from"./shield-check-D35hyvAM.js";

const g=[
  {title:"Unconditional Love & Care",description:"Providing shelter, wholesome food, quality education, and medical care with maternal love and affection.",icon:p},
  {title:"Dignity for Every Soul",description:"Rescuing abandoned girl children and elderly mothers so they live with honor, safety, and respect.",icon:d},
  {title:"100% Transparent Trust",description:"Every donation directly reaches the children, seniors, and hungry people with complete accountability.",icon:c}
];

const u=[
  {year:"2014",title:"Founded in Tuticorin",text:"Mrs. Brinah Prabhakaran and Mr. Prem Prabhakaran established Hill Organisation for People's Education (Hill Charity), starting an orphanage and a home for aged in Tuticorin."},
  {year:"2017",title:"Child Development Centres",text:"Opened evening study and development centres in rural villages to help underprivileged children excel in education and build strong character."},
  {year:"2020",title:"Disaster Relief & Hunger Program",text:"Launched the 'Feed the Hungry' mission and extensive COVID-19 relief distribution, providing dry rations and hot meals across Tamil Nadu."},
  {year:"Today",title:"10+ Years of Service",text:"Nurturing dozens of abandoned girl children into bright futures, sheltering elderly mothers, and serving daily hot meals with community support."}
];

const N=()=>{
  const n=o.useRef(null),s=m(n,{once:!0,margin:"-80px"});
  return e.jsxs("main",{className:"bg-white pt-16 sm:pt-20",children:[
    e.jsx("section",{id:"who-we-are",className:"who-we-are-section",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"who-we-are-wrap",children:[
      e.jsxs("div",{className:"who-we-are-col-left",children:[
        e.jsxs("div",{className:"who-we-are-left-top",children:[
          e.jsxs("div",{className:"label-tag mb-3",children:[
            e.jsx("span",{className:"w-6 h-0.5 bg-sky-600 rounded-full"}),
            e.jsx("span",{style:{color:"#0284c7"},className:"text-xs font-bold uppercase tracking-wider",children:"Dedicated to Service Since 2014"})
          ]}),
          e.jsx("h1",{className:"font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 tracking-tight uppercase mb-4 leading-tight",children:"WHO WE ARE"}),
          e.jsx("p",{className:"text-charcoal-700 text-base sm:text-lg leading-relaxed font-normal mb-4",children:"Hill organisation for people's education (Hill) charitable trust is created by Mrs.Brinah Prabhakaran and Mr. Prem Prabhakaran with a vision to support poor, orphan, abandoned children and women throughout tamilnadu, south india."}),
          e.jsx("p",{className:"text-charcoal-700 text-base sm:text-lg leading-relaxed font-normal mb-5",children:"In 2014 they started running an orphanage and a home for the aged for abandoned girl children and elderly women in tuticorin, providing food, shelter, education medical care with love and affection."})
        ]}),
        e.jsxs("div",{className:"who-we-are-left-bottom",children:[
          e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5 pt-4 border-t border-slate-100",children:[
            e.jsxs("div",{className:"p-3 rounded-2xl bg-sky-50/70 border border-sky-100 text-center sm:text-left",children:[
              e.jsx("div",{className:"font-display font-bold text-2xl text-sky-700",children:"2014"}),
              e.jsx("div",{className:"text-xs text-charcoal-500 font-medium mt-0.5",children:"Year Founded"})
            ]}),
            e.jsxs("div",{className:"p-3 rounded-2xl bg-sky-50/70 border border-sky-100 text-center sm:text-left",children:[
              e.jsx("div",{className:"font-display font-bold text-2xl text-sky-700",children:"Tuticorin"}),
              e.jsx("div",{className:"text-xs text-charcoal-500 font-medium mt-0.5",children:"Headquarters"})
            ]}),
            e.jsxs("div",{className:"p-3 rounded-2xl bg-sky-50/70 border border-sky-100 text-center sm:text-left",children:[
              e.jsx("div",{className:"font-display font-bold text-2xl text-sky-700",children:"100%"}),
              e.jsx("div",{className:"text-xs text-charcoal-500 font-medium mt-0.5",children:"Direct Care"})
            ]})
          ]}),
          e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[
            e.jsx("a",{
              href:"#about-profile",
              style:{backgroundColor:"#0284c7",color:"#ffffff"},
              onClick:(ev)=>{
                ev.preventDefault();
                const target=document.getElementById("about-profile");
                if(target) target.scrollIntoView({behavior:"smooth"});
              },
              className:"btn-read-story inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer",
              children:"Read Our Full Story"
            }),
            e.jsx("a",{
              href:"#/contact",
              style:{backgroundColor:"#f1f5f9",color:"#0f172a",border:"1px solid #cbd5e1"},
              onClick:(ev)=>{
                ev.preventDefault();
                window.location.hash="#/contact";
              },
              className:"inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer hover:bg-slate-200",
              children:"Contact Us"
            })
          ]})
        ]})
      ]}),
      e.jsx("div",{className:"who-we-are-col-right",children:e.jsxs("div",{className:"founder-photo-box",children:[
        e.jsxs("div",{className:"flex items-center justify-between px-2 pb-2.5",children:[
          e.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 uppercase tracking-wider",children:[
            e.jsx("span",{className:"w-2 h-2 rounded-full bg-sky-500"}),
            "Founders & Managing Trustees"
          ]}),
          e.jsx("span",{className:"text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md",children:"Est. 2014"})
        ]}),
        e.jsxs("div",{className:"founder-photo-img-wrap group",children:[
          e.jsx("img",{
            src:"./assets/founders.jpg",
            onError:(ev)=>{
              if(!ev.target.dataset.fallback){
                ev.target.dataset.fallback="1";
                ev.target.src="../assets/founders.jpg";
              }
            },
            alt:"Founders Mrs. Brinah Prabhakaran & Mr. Prem Prabhakaran",
            className:"founder-photo-img"
          }),
          e.jsxs("div",{className:"founder-photo-caption",children:[
            e.jsx("h3",{className:"font-display font-bold text-lg text-white leading-snug",children:"Mrs. Brinah Prabhakaran & Mr. Prem Prabhakaran"}),
            e.jsx("p",{className:"text-xs text-sky-200 font-medium mt-1 tracking-wide",children:"Founders of Hill Organisation for People's Education"})
          ]})
        ]}),
        e.jsxs("div",{className:"mt-3 px-3 py-2 bg-sky-50/70 rounded-xl border border-sky-100/70 flex items-center justify-center gap-2 text-center",children:[
          e.jsx("svg",{className:"w-4 h-4 text-sky-600 shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),
          e.jsx("span",{className:"text-xs font-semibold text-sky-900",children:"Serving Tuticorin with Love & Affection Since 2014"})
        ]})
      ]})})
    ]})})}),
    e.jsxs("section",{id:"about-profile",ref:n,className:"relative overflow-hidden bg-cream-50 py-12 lg:py-16","aria-labelledby":"journey-heading",children:[
      e.jsx("div",{className:"absolute -top-32 -right-32 w-80 h-80 rounded-full bg-forest-100/40 blur-3xl pointer-events-none"}),
      e.jsx("div",{className:"absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none"}),
      e.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[
        e.jsx(i.div,{initial:{opacity:0,y:15},animate:s?{opacity:1,y:0}:{},transition:{duration:.6},className:"flex justify-center",children:e.jsxs("div",{className:"label-tag mb-4",children:[e.jsx("span",{className:"w-5 h-px bg-forest-600"}),"Our Profile"]})}),
        e.jsxs(i.h1,{id:"journey-heading",initial:{opacity:0,y:25},animate:s?{opacity:1,y:0}:{},transition:{duration:.7,delay:.1},className:"text-center font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-900 leading-tight",children:["Hill Organisation for"," ",e.jsx("span",{className:"text-gradient-green",children:"People’s Education."})]}),
        e.jsx("p",{className:"mt-3 text-center text-charcoal-600 max-w-2xl mx-auto text-base sm:text-lg",children:"A charitable trust based in Tuticorin, Tamil Nadu, dedicated to poor, orphan, abandoned girl children and elderly women."}),
        e.jsxs(i.div,{initial:{opacity:0,y:35},animate:s?{opacity:1,y:0}:{},transition:{duration:.8,delay:.25},className:"relative max-w-5xl mx-auto mt-10",children:[
          e.jsx("div",{className:"absolute -inset-3 rounded-[2rem] border border-forest-200/70 pointer-events-none"}),
          e.jsx("div",{className:"absolute -inset-6 rounded-[2.5rem] border border-charcoal-100/70 pointer-events-none"}),
          e.jsxs("div",{className:"relative bg-white rounded-[1.75rem] border border-charcoal-100 shadow-card overflow-hidden",children:[
            e.jsx("div",{className:"h-1.5 bg-gradient-to-r from-forest-600 via-forest-400 to-amber-400"}),
            e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-[280px_1fr]",children:[
              e.jsxs("div",{style:{background:"linear-gradient(135deg, #0369a1 0%, #0284c7 50%, #0ea5e9 100%)",backgroundColor:"#0284c7"},className:"relative text-white p-8 sm:p-10 flex flex-col justify-center overflow-hidden",children:[
                e.jsx("div",{className:"absolute -top-20 -right-20 w-48 h-48 rounded-full border border-white/10"}),
                e.jsx("div",{className:"absolute -bottom-20 -left-20 w-48 h-48 rounded-full border border-white/10"}),
                e.jsxs("div",{className:"relative z-10 flex items-center gap-2 mb-4",children:[
                  e.jsx("span",{className:"w-8 h-px bg-amber-400"}),
                  e.jsx("span",{className:"text-amber-400 text-xs font-bold tracking-[0.2em] uppercase",children:"Since 2014"})
                ]}),
                e.jsxs("div",{className:"relative z-10",children:[
                  e.jsx("div",{style:{color:"#ffffff"},className:"font-display font-bold text-6xl sm:text-7xl leading-none text-white",children:"10+"}),
                  e.jsx("div",{style:{color:"#86efac"},className:"mt-2 text-forest-300 text-lg font-semibold tracking-wide",children:"YEARS"}),
                  e.jsx("div",{className:"mt-4 h-px w-20 bg-white/20"}),
                  e.jsx("p",{style:{color:"#ffffff"},className:"mt-4 text-white text-sm leading-relaxed",children:"Founded in Tuticorin by Mrs. Brinah Prabhakaran & Mr. Prem Prabhakaran."})
                ]})
              ]}),
              e.jsxs("div",{className:"p-8 sm:p-10",children:[
                e.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[
                  e.jsx("div",{className:"w-12 h-12 shrink-0 rounded-2xl bg-forest-50 text-forest-600 flex items-center justify-center",children:e.jsx(h,{className:"w-6 h-6"})}),
                  e.jsx("div",{children:e.jsxs("h2",{className:"font-display font-bold text-2xl sm:text-3xl text-charcoal-900",children:["Transforming lives with love,",e.jsxs("span",{className:"text-forest-600",children:[" ","food and education."]})]})})
                ]}),
                e.jsx("p",{className:"text-charcoal-600 leading-relaxed text-base mb-4",children:"Hill Organisation for People’s Education (Hill Charity) charitable trust in Tuticorin was created by Mrs. Brinah Prabhakaran and Mr. Prem Prabhakaran with a heartfelt vision to support poor, orphan, abandoned children and women throughout Tamil Nadu, South India."}),
                e.jsx("p",{className:"text-charcoal-600 leading-relaxed text-base mb-4",children:"In 2014, they started running an orphanage (Hope Children Home) and a home for the aged for abandoned girl children and elderly women in Tuticorin, providing wholesome food, shelter, education, and medical care with unconditional love and affection."}),
                e.jsx("p",{className:"text-charcoal-600 leading-relaxed text-base",children:"In many villages, young girls who excel in school are unable to continue higher education due to severe poverty and are forced to work for daily wages. Hill Charity provides educational sponsorships and vocational training to empower these girls and change their life trajectory."}),
                e.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-charcoal-100",children:[
                  e.jsxs("div",{children:[e.jsx("div",{className:"font-display font-bold text-xl text-forest-700",children:"2014"}),e.jsx("div",{className:"text-xs text-charcoal-400 mt-1",children:"Established"})]}),
                  e.jsxs("div",{children:[e.jsx("div",{className:"font-display font-bold text-xl text-forest-700",children:"Tuticorin"}),e.jsx("div",{className:"text-xs text-charcoal-400 mt-1",children:"Headquarters"})]}),
                  e.jsxs("div",{children:[e.jsx("div",{className:"font-display font-bold text-xl text-forest-700",children:"7 Core"}),e.jsx("div",{className:"text-xs text-charcoal-400 mt-1",children:"Programs"})]})
                ]})
              ]})
            ]})
          ]})
        ]})
      ]})
    ]}),
    e.jsx("section",{className:"py-12 lg:py-16 bg-white","aria-labelledby":"values-heading",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[
      e.jsx(r,{children:e.jsxs("div",{className:"text-center",children:[
        e.jsxs("div",{className:"label-tag justify-center mb-3",children:[e.jsx("span",{className:"w-5 h-px bg-forest-600"}),"Our Guiding Principles"]}),
        e.jsxs("h2",{id:"values-heading",className:"font-display font-bold text-3xl sm:text-4xl text-charcoal-900 leading-tight",children:["Why Hill Charity"," ",e.jsx("span",{className:"text-gradient-green",children:"was created."})]}),
        e.jsx("p",{className:"mt-3 text-charcoal-500",children:"Founded with a pure commitment to serve the most vulnerable in our community."})
      ]})}),
      e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mt-10",children:g.map((t,a)=>{
        const l=t.icon;
        return e.jsx(r,{delay:a*.1,children:e.jsxs("div",{className:"group relative h-full bg-white rounded-3xl border border-charcoal-100 p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden",children:[
          e.jsx("div",{className:"w-12 h-12 rounded-2xl bg-forest-50 text-forest-600 flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors",children:e.jsx(l,{className:"w-5 h-5"})}),
          e.jsx("h3",{className:"font-display font-bold text-xl text-charcoal-900 mb-2",children:t.title}),
          e.jsx("p",{className:"text-charcoal-500 text-sm leading-relaxed",children:t.description})
        ]})},t.title)
      })})
    ]})}),
    e.jsx("section",{className:"py-12 lg:py-16 bg-cream-50",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[
      e.jsx(r,{children:e.jsxs("div",{className:"text-center mb-10",children:[
        e.jsxs("div",{className:"label-tag justify-center mb-3",children:[e.jsx("span",{className:"w-5 h-px bg-forest-600"}),"Milestones"]}),
        e.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl text-charcoal-900",children:["Our Journey of"," ",e.jsx("span",{className:"text-gradient-green",children:"Service & Compassion."})]})
      ]})}),
      e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:u.map((t,a)=>{
        return e.jsx(r,{delay:a*.1,children:e.jsxs("div",{className:"bg-white rounded-3xl border border-charcoal-100 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col justify-between",children:[
          e.jsx("div",{children:[
            e.jsx("div",{className:"inline-block px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 font-display font-bold text-sm tracking-wider uppercase mb-3",children:t.year}),
            e.jsx("h3",{className:"font-display font-bold text-xl text-charcoal-900 mb-2",children:t.title}),
            e.jsx("p",{className:"text-charcoal-600 text-sm leading-relaxed",children:t.text})
          ]})
        ]})},t.year)
      })})
    ]})})
  ]})
};

export{N as default};
