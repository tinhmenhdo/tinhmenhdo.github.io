import{d as createAstro,c as createComponent,r as renderTemplate,m as maybeRenderHead,b as addAttribute,a as renderComponent,u as unescapeHTML}from"./UJWqr72G.js";import"kleur/colors";import{twMerge}from"tailwind-merge";import{$ as $$Button}from"./bkZSHDvE.js";import{$ as $$Icon}from"./DZvIDL3O.js";const $$Astro=createAstro("https://tinhmenhdo.github.io"),$$ItemGrid=createComponent(((e,t,r)=>{const o=e.createAstro($$Astro,t,r);o.self=$$ItemGrid;const{items:s=[],columns:a,defaultIcon:d="",classes:i={}}=o.props,{container:n="",panel:m="",title:l="",description:c="",icon:$="text-primary",action:p=""}=i;return renderTemplate`${s&&renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("grid mx-auto gap-8 md:gap-y-12 "+(4===a?"lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2":3===a?"lg:grid-cols-3 sm:grid-cols-2":2===a?"sm:grid-cols-2 ":""),n),"class")}>${s.map((({title:t,description:r,icon:o,callToAction:s,classes:a={}})=>renderTemplate`<div><div${addAttribute(twMerge("flex flex-row max-w-md",m,a?.panel),"class")}><div class="flex justify-center">${(o||d)&&renderTemplate`${renderComponent(e,"Icon",$$Icon,{name:o||d,class:twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2",$,a?.icon)})}`}</div><div class="mt-0.5">${t&&renderTemplate`<h3${addAttribute(twMerge("text-xl font-bold",l,a?.title),"class")}>${t}</h3>`}${r&&renderTemplate`<p${addAttribute(twMerge((t?"mt-3":"")+" text-muted",c,a?.description),"class")}>${unescapeHTML(r)}</p>`}${s&&renderTemplate`<div${addAttribute(twMerge(""+(t||r?"mt-3":""),p,a?.actionClass),"class")}>${renderComponent(e,"Button",$$Button,{variant:"link",...s})}</div>`}</div></div></div>`))}</div>`}`}),"/root/code/tmd_astro/src/components/ui/ItemGrid.astro",void 0);export{$$ItemGrid as $};