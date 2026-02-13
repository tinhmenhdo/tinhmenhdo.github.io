import { d as createAstro, c as createComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './3oDUBBJB.js';
import 'piccolore';
import 'clsx';
import { g as getCanonical } from './CS4DDvGF.js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items } = Astro2.props;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.text,
      item: item.href ? getCanonical(item.href) : void 0
    }))
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script> ", '<nav aria-label="breadcrumb" class="mb-4 text-lg"> <ol class="mx-auto flex justify-center space-x-2 rounded-full border px-7 py-2 text-gray-500 max-md:justify-start"> ', " </ol> </nav>"])), unescapeHTML(JSON.stringify(structuredData)), maybeRenderHead(), items.map((item, index) => renderTemplate`<li class="flex items-center"> ${item.href ? renderTemplate`<a${addAttribute(getCanonical(item.href), "href")} class="text-amber-400 hover:underline"> ${item.text} </a>` : renderTemplate`<span class="text-gray-700">${item.text}</span>`} ${index < items.length - 1 && renderTemplate`<svg class="mx-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg>`} </li>`));
}, "/root/code/tmd_astro/src/components/common/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
