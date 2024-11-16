import{d as createAstro,c as createComponent,r as renderTemplate,m as maybeRenderHead,b as addAttribute,a as renderComponent,u as unescapeHTML}from"./UJWqr72G.js";import"kleur/colors";import{$ as $$WidgetWrapper}from"./CQcQf9_6.js";import{$ as $$Headline}from"./BcME6DUs.js";import{$ as $$Icon}from"./DZvIDL3O.js";import{twMerge}from"tailwind-merge";import{$ as $$Button}from"./bkZSHDvE.js";const $$Astro$1=createAstro("https://tinhmenhdo.github.io"),$$ItemGrid2=createComponent(((e,t,r)=>{const s=e.createAstro($$Astro$1,t,r);s.self=$$ItemGrid2;const{items:a=[],columns:o,defaultIcon:n="",classes:i={}}=s.props,{container:d="",panel:l="",title:m="",description:c="",icon:p="text-primary"}=i;return renderTemplate`${a&&renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("grid gap-8 gap-x-12 sm:gap-y-8 "+(4===o?"lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2":3===o?"lg:grid-cols-3 sm:grid-cols-2":2===o?"sm:grid-cols-2 ":""),d),"class")}>${a.map((({title:t,description:r,icon:s,callToAction:a,classes:o={}})=>renderTemplate`<div${addAttribute(twMerge("relative flex flex-col",l,o?.panel),"class")}>${(s||n)&&renderTemplate`${renderComponent(e,"Icon",$$Icon,{name:s||n,class:twMerge("mb-2 w-10 h-10",p,o?.icon)})}`}<div${addAttribute(twMerge("text-xl font-bold",m,o?.title),"class")}>${t}</div>${r&&renderTemplate`<p${addAttribute(twMerge("text-muted mt-2",c,o?.description),"class")}>${unescapeHTML(r)}</p>`}${a&&renderTemplate`<div class="mt-2">${renderComponent(e,"Button",$$Button,{...a})}</div>`}</div>`))}</div>`}`}),"/root/code/tmd_astro/src/components/ui/ItemGrid2.astro",void 0),$$Astro=createAstro("https://tinhmenhdo.github.io"),$$Features2=createComponent((async(e,t,r)=>{const s=e.createAstro($$Astro,t,r);s.self=$$Features2;const{title:a=await s.slots.render("title"),subtitle:o=await s.slots.render("subtitle"),tagline:n=await s.slots.render("tagline"),items:i=[],columns:d=3,defaultIcon:l,id:m,isDark:c=!1,classes:p={},bg:$=await s.slots.render("bg")}=s.props;return renderTemplate`${renderComponent(e,"WidgetWrapper",$$WidgetWrapper,{id:m,isDark:c,containerClass:`max-w-7xl mx-auto ${p?.container??""}`,bg:$},{default:e=>renderTemplate` ${renderComponent(e,"Headline",$$Headline,{title:a,subtitle:o,tagline:n,classes:p?.headline})} ${renderComponent(e,"ItemGrid2",$$ItemGrid2,{items:i,columns:d,defaultIcon:l,classes:{container:"gap-4 md:gap-6",panel:"rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6",icon:"w-12 h-12 mb-6 text-primary",...p?.items??{}}})} `})}`}),"/root/code/tmd_astro/src/components/widgets/Features2.astro",void 0);export{$$Features2 as $};