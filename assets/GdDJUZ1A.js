import{d as createAstro,c as createComponent,r as renderTemplate,a as renderComponent,F as Fragment,e as renderSlot}from"./UJWqr72G.js";import"kleur/colors";import{$ as $$PageLayout}from"./CvnzEfEZ.js";import{$ as $$Header,h as headerData}from"./BcTd0vla.js";const $$Astro=createAstro("https://tinhmenhdo.github.io"),$$LandingLayout=createComponent(((e,t,r)=>{const a=e.createAstro($$Astro,t,r);a.self=$$LandingLayout;const{metadata:n}=a.props;return renderTemplate`${renderComponent(e,"PageLayout",$$PageLayout,{metadata:n},{announcement:e=>renderTemplate`${renderComponent(e,"Fragment",Fragment,{slot:"announcement"},{default:e=>renderTemplate` ${renderSlot(e,r.announcement)} `})}`,default:e=>renderTemplate`   ${renderSlot(e,r.default)} `,header:e=>renderTemplate`${renderComponent(e,"Fragment",Fragment,{slot:"header"},{default:e=>renderTemplate` ${renderSlot(e,r.header,renderTemplate` ${renderComponent(e,"Header",$$Header,{links:headerData?.links[2]?[headerData.links[2]]:void 0,actions:[{text:"Download",href:"https://github.com/onwidget/astrowind"}],showToggleTheme:!0,position:"right"})} `)} `})}`})}`}),"/root/code/tmd_astro/src/layouts/LandingLayout.astro",void 0);export{$$LandingLayout as $};