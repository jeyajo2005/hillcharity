import{c as u,r,j as e,m as o,C as p}from"./vendor.js";import{S as s}from"./ScrollReveal-CC7-yOZu.js";import"./use-in-view-DfQYWAaa.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=u("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),N=()=>{const[c,t]=r.useState(!1),[a,i]=r.useState({fullName:"",email:"",phone:"",subject:"",message:""}),n=l=>{const{name:m,value:x}=l.target;i(h=>({...h,[m]:x}))},d=l=>{l.preventDefault(),t(!0),setTimeout(()=>{t(!1)},4e3)};return e.jsxs("main",{className:"min-h-screen bg-cream-50",children:[e.jsx("section",{className:"pt-32 pb-20 lg:pt-40 lg:pb-28","aria-labelledby":"contact-heading",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx(s,{children:e.jsxs("div",{className:"text-center mb-12",children:[e.jsxs("div",{className:"label-tag justify-center mb-5",children:[e.jsx("span",{className:"w-5 h-px bg-forest-600"}),"Send Us a Message"]}),e.jsxs("h1",{id:"contact-heading",className:"font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal-900 leading-tight",children:["We read every"," ",e.jsx("span",{className:"text-gradient-green",children:"single message."})]}),e.jsx("p",{className:"mt-5 text-charcoal-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto",children:"Get in touch with Hill Organisation for People's Education in Tuticorin. Call +91 9944704699, WhatsApp, or email hillorganization85@gmail.com."})]})}),e.jsx(s,{delay:.1,children:e.jsx(o.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:"bg-white rounded-3xl border border-charcoal-100 shadow-card p-6 sm:p-8 lg:p-10",children:c?e.jsxs("div",{className:"min-h-[400px] flex flex-col items-center justify-center text-center",children:[e.jsx("div",{className:"w-16 h-16 rounded-full bg-forest-50 flex items-center justify-center mb-6",children:e.jsx(p,{className:"w-8 h-8 text-forest-600"})}),e.jsx("h2",{className:"font-display font-bold text-3xl text-charcoal-900 mb-3",children:"Message Sent!"}),e.jsx("p",{className:"text-charcoal-500 max-w-md leading-relaxed",children:"Thank you for reaching out to Hill Charity. Our team will get back to you soon."})]}):e.jsxs("form",{onSubmit:d,className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"fullName",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:["Full Name",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("input",{id:"fullName",name:"fullName",type:"text",value:a.fullName,onChange:n,required:!0,placeholder:"Your full name",className:`
                            w-full
                            h-14
                            px-4
                            rounded-2xl
                            border
                            border-charcoal-200
                            bg-white
                            text-charcoal-800
                            placeholder:text-charcoal-400
                            outline-none
                            transition-all
                            duration-200
                            focus:border-forest-500
                            focus:ring-4
                            focus:ring-forest-100
                          `})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"email",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:["Email",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("input",{id:"email",name:"email",type:"email",value:a.email,onChange:n,required:!0,placeholder:"you@example.com",className:`
                            w-full
                            h-14
                            px-4
                            rounded-2xl
                            border
                            border-charcoal-200
                            bg-white
                            text-charcoal-800
                            placeholder:text-charcoal-400
                            outline-none
                            transition-all
                            duration-200
                            focus:border-forest-500
                            focus:ring-4
                            focus:ring-forest-100
                          `})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:"Phone"}),e.jsx("input",{id:"phone",name:"phone",type:"tel",value:a.phone,onChange:n,placeholder:"+91 XXXXX XXXXX",className:`
                            w-full
                            h-14
                            px-4
                            rounded-2xl
                            border
                            border-charcoal-200
                            bg-white
                            text-charcoal-800
                            placeholder:text-charcoal-400
                            outline-none
                            transition-all
                            duration-200
                            focus:border-forest-500
                            focus:ring-4
                            focus:ring-forest-100
                          `})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"subject",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:"Subject"}),e.jsxs("select",{id:"subject",name:"subject",value:a.subject,onChange:n,className:`
                            w-full
                            h-14
                            px-4
                            rounded-2xl
                            border
                            border-charcoal-200
                            bg-white
                            text-charcoal-700
                            outline-none
                            transition-all
                            duration-200
                            focus:border-forest-500
                            focus:ring-4
                            focus:ring-forest-100
                          `,children:[e.jsx("option",{value:"",children:"Select a subject"}),e.jsx("option",{value:"volunteer",children:"I want to volunteer"}),e.jsx("option",{value:"donation",children:"I want to donate"}),e.jsx("option",{value:"sponsor",children:"Partnership / Sponsorship"}),e.jsx("option",{value:"program",children:"Program enquiry"}),e.jsx("option",{value:"general",children:"General enquiry"})]})]})]}),e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"message",className:"block text-sm font-semibold text-charcoal-700 mb-2",children:["Message",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("textarea",{id:"message",name:"message",value:a.message,onChange:n,required:!0,rows:8,placeholder:"Tell us about yourself and how you'd like to get involved...",className:`
                          w-full
                          px-4
                          py-4
                          rounded-2xl
                          border
                          border-charcoal-200
                          bg-white
                          text-charcoal-800
                          placeholder:text-charcoal-400
                          outline-none
                          resize-none
                          transition-all
                          duration-200
                          focus:border-forest-500
                          focus:ring-4
                          focus:ring-forest-100
                        `})]}),e.jsxs(o.button,{type:"submit",whileHover:{scale:1.01},whileTap:{scale:.98},className:`
                        w-full
                        h-14
                        flex
                        items-center
                        justify-center
                        gap-2
                        bg-forest-600
                        hover:bg-forest-700
                        text-white
                        font-bold
                        rounded-full
                        shadow-md
                        transition-all
                        duration-300
                      `,children:["Send Message",e.jsx(b,{className:"w-4 h-4"})]})]})})})]})})}),e.jsx("section",{className:"py-16 bg-white border-t border-charcoal-100",children:e.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:e.jsxs(s,{children:[e.jsxs("div",{className:"label-tag justify-center mb-4",children:[e.jsx("span",{className:"w-5 h-px bg-forest-600"}),"Hill Charity"]}),e.jsxs("h2",{className:"font-display font-bold text-3xl sm:text-4xl text-charcoal-900",children:["Every conversation can"," ",e.jsx("span",{className:"text-gradient-green",children:"create change."})]}),e.jsx("p",{className:"mt-4 text-charcoal-500 max-w-xl mx-auto leading-relaxed",children:"Reach out to us and let's explore how we can make a meaningful difference together."})]})})})]})};export{N as default};
