import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import { $ as $$SpaLayout } from '../sfYYkhPc/B91WHJta.js';
/* empty css                   */
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Draw = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "V\u1EBD",
    description: "C\xF4ng c\u1EE5 v\u1EBD",
    keywords: "V\u1EBD",
    robots: {
      index: true,
      follow: true
    },
    canonical: `/draw`,
    openGraph: {
      title: "V\u1EBD",
      description: "C\xF4ng c\u1EE5 v\u1EBD",
      url: `/draw`
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$SpaLayout, { "metadata": metadata, "data-astro-cid-4yl55rih": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="drawing-area" data-astro-cid-4yl55rih></div> <div id="toolbar" class="vw:mt-[100px]" data-astro-cid-4yl55rih> <button id="rect-btn" class="tool-btn" data-astro-cid-4yl55rih>Hình chữ nhật</button> <button id="circle-btn" class="tool-btn" data-astro-cid-4yl55rih>Hình tròn</button> <button id="line-btn" class="tool-btn" data-astro-cid-4yl55rih>Đường thẳng</button> <button id="zoom-in-btn" class="tool-btn" data-astro-cid-4yl55rih>Phóng to</button> <button id="zoom-out-btn" class="tool-btn" data-astro-cid-4yl55rih>Thu nhỏ</button> <input type="file" id="image-input" accept="image/*" style="display: none;" data-astro-cid-4yl55rih> <button id="import-image-btn" class="tool-btn" data-astro-cid-4yl55rih>Thêm ảnh</button> </div>   ` })}`;
}, "/root/code/tmd_astro/src/pages/draw.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/draw.astro";
const $$url = "/draw";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Draw,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
