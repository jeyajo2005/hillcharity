import{c as h,j as n,H as r,r as p,m as l,L as g,A as b}from"./vendor.js";import{S as t}from"./ScrollReveal-CC7-yOZu.js";import{c,S as u,a as f,G as j,b as w,I as N}from"./ImpactStats-0WLLq7gL.js";import{U as v,C as y}from"./CTASection-DsUdwk3m.js";import{u as S}from"./use-in-view-DfQYWAaa.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=h("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),x={Soup:w,GraduationCap:j,Heart:r,Stethoscope:f,ShieldAlert:u,Users:v},I=({service:e,index:s})=>{const i=p.useRef(null),o=S(i,{once:!0,margin:"-80px"}),a=s%2===0,m=x[e.icon]??r;return n.jsx("section",{ref:i,id:e.id,className:`py-20 lg:py-28 ${a?"bg-white":"bg-cream-50"}`,"aria-labelledby":`service-${e.id}-heading`,children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:n.jsxs("div",{className:`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${a?"":"lg:flex-row-reverse"}`,children:[n.jsxs(l.div,{initial:{opacity:0,x:a?-24:24},animate:o?{opacity:1,x:0}:{},transition:{duration:.8,ease:[.25,.46,.45,.94]},className:`relative ${a?"":"lg:order-2"}`,children:[n.jsx("div",{className:`
                absolute
                -inset-5
                rounded-[3rem]
                bg-forest-100/40
                blur-3xl
                pointer-events-none
              `}),n.jsxs("div",{className:`
                relative
                aspect-[4/3]
                min-h-[300px]
                sm:min-h-[360px]
                lg:min-h-[420px]
                overflow-hidden
                rounded-[2rem]
                bg-white
                ring-1
                ring-forest-100/70
                shadow-[0_0_35px_rgba(34,197,94,0.12)]
                transition-all
                duration-500
                hover:shadow-[0_0_45px_rgba(34,197,94,0.18)]
              `,children:[n.jsx("img",{src:e.image,alt:e.title,className:`
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                `,loading:"lazy"}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent pointer-events-none"}),n.jsx("div",{className:`
                  absolute
                  top-5
                  left-5
                  w-12
                  h-12
                  bg-white/95
                  backdrop-blur-sm
                  rounded-2xl
                  shadow-md
                  flex
                  items-center
                  justify-center
                  text-forest-600
                `,children:n.jsx(m,{className:"w-6 h-6"})})]})]}),n.jsxs(l.div,{initial:{opacity:0,x:a?24:-24},animate:o?{opacity:1,x:0}:{},transition:{duration:.8,delay:.1,ease:[.25,.46,.45,.94]},className:a?"":"lg:order-1",children:[n.jsx("div",{className:"label-tag mb-5",children:"Service Program"}),n.jsx("h2",{id:`service-${e.id}-heading`,className:`
                font-display
                font-bold
                text-3xl
                sm:text-4xl
                text-charcoal-900
                leading-tight
                mb-4
              `,children:e.title}),n.jsx("p",{className:"text-charcoal-500 leading-relaxed mb-8",children:e.description}),n.jsxs("div",{className:"mb-6",children:[n.jsx("h3",{className:`
                  text-sm
                  font-bold
                  text-charcoal-700
                  tracking-wide
                  uppercase
                  mb-4
                `,children:"What We Provide"}),n.jsx("ul",{className:"space-y-2.5","aria-label":`What ${e.title} provides`,children:e.provides.map(d=>n.jsxs("li",{className:"flex items-start gap-2.5",children:[n.jsx("div",{className:`
                        w-5
                        h-5
                        rounded-full
                        bg-forest-100
                        flex
                        items-center
                        justify-center
                        shrink-0
                        mt-0.5
                      `,children:n.jsx(k,{className:"w-3 h-3 text-forest-600"})}),n.jsx("span",{className:"text-charcoal-600 text-sm",children:d})]},d))})]}),n.jsxs("div",{className:`
                bg-amber-50
                border
                border-amber-100
                rounded-2xl
                p-5
                mb-8
              `,children:[n.jsx("h3",{className:`
                  text-sm
                  font-bold
                  text-amber-800
                  tracking-wide
                  uppercase
                  mb-2
                `,children:"How You Can Help"}),n.jsx("p",{className:"text-amber-700 text-sm leading-relaxed",children:e.howToHelp})]}),n.jsx(g,{to:"/contact",children:n.jsxs(l.button,{whileHover:{scale:1.02},whileTap:{scale:.97},className:`
                  flex
                  items-center
                  gap-2
                  px-7
                  py-4
                  bg-forest-600
                  hover:bg-forest-700
                  text-white
                  font-bold
                  rounded-full
                  transition-all
                  duration-300
                  text-sm
                `,children:["Support This Program",n.jsx(b,{className:"w-4 h-4"})]})})]})]})})})},A=()=>n.jsxs("main",{children:[n.jsxs("section",{className:`
          relative
          pt-24
          pb-20
          lg:pt-36
          lg:pb-28
          bg-forest-950
          overflow-hidden
        `,"aria-labelledby":"services-hero-heading",children:[n.jsx("div",{className:"absolute inset-0 opacity-5 pointer-events-none",children:n.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)",backgroundSize:"40px 40px"}})}),n.jsx("div",{className:`
            absolute
            top-0
            right-0
            w-96
            h-96
            bg-forest-500/10
            rounded-full
            blur-3xl
          `}),n.jsx("div",{className:`
            absolute
            bottom-0
            left-0
            w-64
            h-64
            bg-amber-500/8
            rounded-full
            blur-3xl
          `}),n.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[n.jsx(t,{children:n.jsxs("div",{className:`
                inline-flex
                items-center
                gap-2
                text-amber-400
                text-xs
                font-bold
                tracking-[0.25em]
                uppercase
                mb-6
              `,children:[n.jsx("div",{className:"w-5 h-px bg-amber-400"}),"Our Programs"]})}),n.jsx(t,{delay:.1,children:n.jsxs("h1",{id:"services-hero-heading",className:`
                font-display
                font-bold
                text-5xl
                sm:text-6xl
                lg:text-7xl
                text-white
                leading-tight
                max-w-3xl
                mb-6
              `,children:["Six ways we create"," ",n.jsx("span",{className:"text-amber-400",children:"real change."})]})}),n.jsx(t,{delay:.2,children:n.jsx("p",{className:`
                text-white/70
                text-xl
                leading-relaxed
                max-w-2xl
              `,children:"Each program is designed around actual community need — verified, accountable, and built for lasting impact."})}),n.jsx(t,{delay:.3,children:n.jsx("div",{className:"flex flex-wrap gap-3 mt-10",children:c.map(e=>{const s=x[e.icon]??r;return n.jsxs("a",{href:`#${e.id}`,className:`
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2.5
                      bg-white/10
                      hover:bg-white/20
                      border
                      border-white/15
                      rounded-full
                      text-white/80
                      hover:text-white
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                    `,children:[n.jsx(s,{className:"w-4 h-4"}),e.title]},e.id)})})})]})]}),c.map((e,s)=>n.jsx(I,{service:e,index:s},e.id)),n.jsx(N,{}),n.jsx(y,{})]});export{A as default};
