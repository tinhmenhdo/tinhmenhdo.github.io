import{d as createAstro,c as createComponent,r as renderTemplate,a as renderComponent,m as maybeRenderHead,F as Fragment,u as unescapeHTML}from"./UJWqr72G.js";import"kleur/colors";import{$ as $$Headline}from"./BcME6DUs.js";import{$ as $$WidgetWrapper}from"./CQcQf9_6.js";import{$ as $$Button}from"./bkZSHDvE.js";import{$ as $$Image}from"./CvrM3ues.js";const $$Astro=createAstro("https://tinhmenhdo.github.io"),$$Testimonials=createComponent((async(e,t,r)=>{const a=e.createAstro($$Astro,t,r);a.self=$$Testimonials;const{title:s="",subtitle:o="",tagline:d="",testimonials:l=[],callToAction:n,id:i,isDark:m=!1,classes:p={},bg:$=await a.slots.render("bg")}=a.props;return renderTemplate`${renderComponent(e,"WidgetWrapper",$$WidgetWrapper,{id:i,isDark:m,containerClass:`max-w-6xl mx-auto ${p?.container??""}`,bg:$},{default:e=>renderTemplate` ${renderComponent(e,"Headline",$$Headline,{title:s,subtitle:o,tagline:d})} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${l&&l.map((({title:t,testimonial:r,name:a,job:s,image:o})=>renderTemplate`<div class="flex h-auto"> <div class="flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${t&&renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${t}</h2>`} ${r&&renderTemplate`<blockquote class="flex-auto"> <p class="text-muted">" ${r} "</p> </blockquote>`} <hr class="border-slate-200 dark:border-slate-600 my-4"> <div class="flex items-center"> ${o&&renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600"> ${"string"==typeof o?renderTemplate`${renderComponent(e,"Fragment",Fragment,{},{default:e=>renderTemplate`${unescapeHTML(o)}`})}`:renderTemplate`${renderComponent(e,"Image",$$Image,{class:"h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full",width:40,height:40,widths:[400,768],layout:"fixed",...o})}`} </div>`} <div class="grow ml-3 rtl:ml-0 rtl:mr-3"> ${a&&renderTemplate`<p class="text-base font-semibold">${a}</p>`} ${s&&renderTemplate`<p class="text-xs text-muted">${s}</p>`} </div> </div> </div> </div>`))} </div> ${n&&renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent(e,"Button",$$Button,{...n})} </div>`}`})}`}),"/root/code/tmd_astro/src/components/widgets/Testimonials.astro",void 0);export{$$Testimonials as $};