import{d as createAstro,c as createComponent,r as renderTemplate,m as maybeRenderHead,b as addAttribute,e as renderSlot,a as renderComponent,F as Fragment,u as unescapeHTML}from"./UJWqr72G.js";import"kleur/colors";import{twMerge}from"tailwind-merge";import"clsx";const $$Astro$1=createAstro("https://tinhmenhdo.github.io"),$$Background=createComponent(((e,r,t)=>{const a=e.createAstro($$Astro$1,r,t);a.self=$$Background;const{isDark:o=!1}=a.props;return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0",{"bg-dark dark:bg-transparent":o}],"class:list")}> ${renderSlot(e,t.default)} </div>`}),"/root/code/tmd_astro/src/components/ui/Background.astro",void 0),$$Astro=createAstro("https://tinhmenhdo.github.io"),$$WidgetWrapper=createComponent(((e,r,t)=>{const a=e.createAstro($$Astro,r,t);a.self=$$WidgetWrapper;const{id:o,isDark:n=!1,containerClass:s="",bg:d,as:p="section"}=a.props;return renderTemplate`${renderComponent(e,"WrapperTag",p,{class:"relative not-prose scroll-mt-[72px]",...o?{id:o}:{}},{default:e=>renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot(e,t.bg,renderTemplate` ${d?renderTemplate`${renderComponent(e,"Fragment",Fragment,{},{default:e=>renderTemplate`${unescapeHTML(d)}`})}`:renderTemplate`${renderComponent(e,"Background",$$Background,{isDark:n})}`} `)} </div> <div${addAttribute([twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",s),{dark:n}],"class:list")}> ${renderSlot(e,t.default)} </div> `})}`}),"/root/code/tmd_astro/src/components/ui/WidgetWrapper.astro",void 0);export{$$WidgetWrapper as $};