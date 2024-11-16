import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import { $ as $$SpaLayout } from '../sfYYkhPc/B91WHJta.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const prerender = true;
const $$Crawl = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Crawl;
  const metadata = {
    title: "Crawl",
    description: "C\xF4ng c\u1EE5 crawl",
    keywords: "Crawl",
    robots: {
      index: true,
      follow: true
    },
    canonical: `/crawl`,
    openGraph: {
      title: "Crawl",
      description: "C\xF4ng c\u1EE5 crawl",
      url: `/crawl`
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$SpaLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto p-4"> <h1 class="text-2xl font-bold mb-4">Công cụ Crawl Astro-Databank</h1> <form id="crawlForm" class="mb-4"> <input type="url" id="urlInput" placeholder="Nhập URL Astro-Databank" class="w-full p-2 border rounded" required> <button type="submit" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
Crawl Dữ Liệu
</button> </form> <div id="results" class="mt-4 space-y-2"> <!-- Kết quả sẽ được hiển thị ở đây --> </div> </div>  ` })}`;
}, "/root/code/tmd_astro/src/pages/crawl.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/crawl.astro";
const $$url = "/crawl";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Crawl,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
