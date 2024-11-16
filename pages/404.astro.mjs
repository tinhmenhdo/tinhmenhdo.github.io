import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import { $ as $$Layout } from '../sfYYkhPc/m5rBg2M8.js';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = `L\u1EA1c \u0110\u01B0\u1EDDng`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": { title } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex items-center h-full p-16"> <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8"> <div class="max-w-md text-center"> <h2 class="mb-8 font-bold text-9xl"> <span class="sr-only">Lỗi</span> <span class="text-primary">404</span> </h2> <p class="text-3xl font-semibold md:text-3xl">Dường như quý nhân đã lạc vào cõi hư không</p> <p class="mt-4 mb-8 text-lg text-muted dark:text-slate-400">
Theo lời dạy của cổ nhân, vạn sự khởi đầu nan. Xin mời quý nhân quay về trang chủ để tìm lại con đường chân
          lý.
</p> <a rel="noopener noreferrer"${addAttribute(`/tu-vi/`, "href")} class="btn ml-4" data-astro-reload>Quay về trang chủ</a> </div> </div> </section> ` })}`;
}, "/root/code/tmd_astro/src/pages/404.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
