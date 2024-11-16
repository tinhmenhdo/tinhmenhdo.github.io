import{d as createAstro,c as createComponent,r as renderTemplate,m as maybeRenderHead,u as unescapeHTML,a as renderComponent,F as Fragment}from"./UJWqr72G.js";import"kleur/colors";import{$ as $$Button}from"./bkZSHDvE.js";const $$Astro=createAstro("https://tinhmenhdo.github.io"),$$HeroText=createComponent((async(e,t,r)=>{const a=e.createAstro($$Astro,t,r);a.self=$$HeroText;const{title:n=await a.slots.render("title"),subtitle:s=await a.slots.render("subtitle"),tagline:o,content:l=await a.slots.render("content"),callToAction:d=await a.slots.render("callToAction"),callToAction2:m=await a.slots.render("callToAction2")}=a.props;return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20 pb-8 md:pb-8"> <div class="text-center max-w-5xl mx-auto"> ${o&&renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(o)}</p>`} ${n&&renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(n)}</h1>`} <div class="max-w-3xl mx-auto"> ${s&&renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(s)}</p>`} <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4"> ${d&&renderTemplate`<div class="flex w-full sm:w-auto"> ${"string"==typeof d?renderTemplate`${renderComponent(e,"Fragment",Fragment,{},{default:e=>renderTemplate`${unescapeHTML(d)}`})}`:renderTemplate`${renderComponent(e,"Button",$$Button,{variant:"primary",...d})}`} </div>`} ${m&&renderTemplate`<div class="flex w-full sm:w-auto"> ${"string"==typeof m?renderTemplate`${renderComponent(e,"Fragment",Fragment,{},{default:e=>renderTemplate`${unescapeHTML(m)}`})}`:renderTemplate`${renderComponent(e,"Button",$$Button,{...m})}`} </div>`} </div> </div> ${l&&renderTemplate`${renderComponent(e,"Fragment",Fragment,{},{default:e=>renderTemplate`${unescapeHTML(l)}`})}`} </div> </div> </div> </section>`}),"/root/code/tmd_astro/src/components/widgets/HeroText.astro",void 0);export{$$HeroText as $};