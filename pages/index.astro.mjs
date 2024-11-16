import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import { $ as $$PageLayout } from '../sfYYkhPc/DJ33LBXk.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const footerLinks = [
    {
      href: "/kham-thien-tu-hoa",
      title: "Kh\xE2m Thi\xEAn T\u1EE9 H\xF3a",
      text: "Kh\xE2m Thi\xEAn T\u1EE9 H\xF3a"
    },
    {
      href: "/tiet-khi-chinh-xac",
      title: "Ti\u1EBFt Kh\xED Ch\xEDnh X\xE1c",
      text: "Ti\u1EBFt Kh\xED Ch\xEDnh X\xE1c"
    },
    {
      href: "/gieo-que-kinh-dich",
      title: "Gieo Qu\u1EBB Kinh D\u1ECBch",
      text: "Gieo Qu\u1EBB Kinh D\u1ECBch"
    },
    {
      href: "/y-nghia-64-que-kinh-dich",
      title: "\xDD ngh\u0129a 64 qu\u1EBB d\u1ECBch",
      text: "\xDD ngh\u0129a 64 qu\u1EBB d\u1ECBch"
    },
    {
      href: "/phien-ban-cap-nhat",
      title: "Phi\xEAn b\u1EA3n c\u1EADp nh\u1EADt",
      text: "Th\xF4ng tin c\u1EADp nh\u1EADt phi\xEAn b\u1EA3n"
    },
    {
      href: "/license",
      title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
      text: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng mi\u1EC5n ph\xED"
    }
  ];
  const metadata = {
    title: "Tinh M\u1EC7nh \u0110\u1ED3 - L\xE1 s\u1ED1 t\u1EED vi Kh\xE2m Thi\xEAn T\u1EE9 H\xF3a, t\u1EED vi Vi\u1EC7t Nam, xem v\u1EADn h\u1EA1n 2024, l\u1EADp l\xE1 s\u1ED1 t\u1EED vi, K\xEC M\xF4n, Th\xE1i \u1EA4t, Kinh D\u1ECBch, L\u1EE5c H\xE0o tr\u1ECDn b\u1ED9.",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "StarEffectClient", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "~/components/horo/effect/StarEffectClient", "client:component-export": "default" })} ${maybeRenderHead()}<div class="h-[100vh] relative flex flex-wrap content-center items-center justify-center overflow-hidden overflow-y-auto pt-32 text-white"> <header class="text-center relative z-10 mb-20 px-5 max-sm:mb-5"> <div class="text-[84px] font-arizonia relative z-10 opacity-90"> <h1${addAttribute(`text-[0.70em] text-[#ffb657] bg-blend-screen transition-all hover:text-[#ffd641] md:text-[1em]`, "class")}>
Tinh Mệnh Đồ
</h1> </div> <div class="mb-[45px] text-[1.5em] text-white opacity-90 transition-all max-sm:mb-2 md:text-[1.2em]">
Hành trình khám phá bản thân và vũ trụ
</div> <div class="flex flex-wrap font-sans text-[18px] opacity-90 max-sm:block"> <a class="inline-flex rounded-2xl bg-white/10 px-2 transition-all hover:text-[#ffec9a] max-sm:m-1" href="/tu-vi/la-so-tu-vi-viet-nam">
Tử Vi Việt Nam
</a> <span class="inline-flex px-2 max-sm:hidden">-</span> <a class="inline-flex rounded-2xl bg-white/10 px-2 transition-all hover:text-[#e388ff] max-sm:m-1" href="/tu-vi/kham-thien-tu-hoa-nam-phai" title="Khâm Thiên Tứ Hóa">
Khâm Thiên Tứ Hóa
</a> <span class="inline-flex px-2 max-sm:hidden">-</span> <a class="inline-flex rounded-2xl bg-white/10 px-2 transition-all hover:text-orange-400 max-sm:m-1" href="/tu-vi/tu-vi-nam-phai" title="Tử Vi Nam Phái">
Tử vi nam phái
</a> <span class="inline-flex px-2 max-sm:hidden">-</span> <a class="inline-flex rounded-2xl bg-white/10 px-2 transition-all hover:text-[#74f155] max-sm:m-1" href="/tu-vi/tu-vi-phi-tinh-luong-phai" title="Phi Tinh Lương Phái">
Phi Tinh Lương Phái
</a> <span class="inline-flex px-2 max-sm:hidden">-</span> <a class="inline-flex rounded-2xl bg-white/10 px-2 transition-all hover:text-[#ffec9a] max-sm:m-1" href="/tu-vi/tu-vi-trung-chau-phai-kham-thien" title="Trung Châu Phái">
Trung Châu Phái
</a> <span class="inline-flex px-2 max-sm:hidden">-</span> <a class="inline-flex rounded-2xl bg-white/10 px-2 transition-all hover:text-[#ffec9a] max-sm:m-1" href="/tu-vi/" title="xem vận hạn năm 2024">
Xem vận hạn năm 2024
</a> </div> </header> <div class="mb-10 w-full px-5 max-sm:mb-2"> ${renderComponent($$result2, "CalendarHome", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "~/components/horo/home/CalendarHome", "client:component-export": "default" })} </div> <footer${addAttribute(`text-center text-neutral-500  lg:text-left`, "class")}>  <div${addAttribute(`p-6 text-center`, "class")}> <span>© 2023 Copyright</span>${" "} <a class="font-semibold text-neutral-600 dark:text-neutral-400 transition-all hover:text-orange-500 hover:shadow-xl" href="https://tinhmenhdo.com/" title="Tinh Mệnh Đồ">
Tinh Mệnh Đồ
</a> <div> ${footerLinks.map((link, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <a${addAttribute(link.href, "href")}${addAttribute(link.title, "title")} class="transition-all hover:text-orange-500 hover:shadow-xl"> ${link.text} </a> ${index < footerLinks.length - 1 && renderTemplate`<span class="mx-1">-</span>`}` })}`)} </div> </div> </footer> </div>                          `, "footer": ($$result2) => renderTemplate`<div></div>`, "header": ($$result2) => renderTemplate`<div></div>` })}`;
}, "/root/code/tmd_astro/src/pages/index.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
