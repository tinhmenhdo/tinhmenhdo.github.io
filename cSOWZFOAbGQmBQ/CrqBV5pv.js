import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as Fragment, e as addAttribute, u as unescapeHTML, m as maybeRenderHead } from './F_Fel0yb.js';
import 'piccolore';
import { G as GieoQueKinhDich } from './BjriKvV1.js';
import { $ as $$PageLayout } from './B4isgTGt.js';
import { g as getCanonical } from './Du4CJw7g.js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$GieoQueSucKhoeBinhAn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GieoQueSucKhoeBinhAn;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const today = /* @__PURE__ */ new Date();
  today.getDate().toString().padStart(2, "0");
  (today.getMonth() + 1).toString().padStart(2, "0");
  const titleAll = `Gieo Qu\u1EBB Kinh D\u1ECBch S\u1EE9c Kh\u1ECFe B\xECnh An ${currentYear} - C\u1EA7u An, Xem B\u1EC7nh`;
  const descAll = `Gieo qu\u1EBB Kinh D\u1ECBch xem s\u1EE9c kh\u1ECFe, b\xECnh an n\u0103m ${currentYear}. Lu\u1EADn gi\u1EA3i qu\u1EBB d\u1ECBch v\u1EC1 t\xECnh tr\u1EA1ng s\u1EE9c kh\u1ECFe, c\u1EA7u an, \u0111i xa c\xF3 an to\xE0n kh\xF4ng.`;
  const prefixContent = `H\xE3y lu\u1EADn gi\u1EA3i qu\u1EBB Kinh D\u1ECBch n\xE0y trong b\u1ED1i c\u1EA3nh S\u1EE8C KH\u1ECEE & B\xCCNH AN. 
`;
  const languageUrls = {
    vi: "/gieo-que-suc-khoe-binh-an",
    en: "/i-ching-divination-health-peace",
    zh: "/yijing-zhan-gua-jian-kang"
  };
  const metadata = {
    title: titleAll,
    description: descAll,
    canonical: getCanonical("/gieo-que-suc-khoe-binh-an"),
    openGraph: {
      title: titleAll,
      description: descAll,
      url: getCanonical("/gieo-que-suc-khoe-binh-an")
    },
    robots: {
      index: true,
      follow: true
    }
  };
  const siteUrl = Astro2.site?.origin || "https://tinhmenhdo.com";
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<main class="relative mx-auto min-h-screen overflow-hidden bg-linear-to-b from-transparent via-lime-50 to-transparent font-serif"> <div class="relative z-10 mx-auto w-full pt-20 pb-10"> <h1 class="mb-6 text-center text-3xl font-bold text-green-800 md:text-4xl">\nGieo Qu\u1EBB Kinh D\u1ECBch S\u1EE9c Kh\u1ECFe ', ' <span class="mt-2 block text-lg font-normal text-green-600">\n\u262F C\u1EA7u An, Xem B\u1EC7nh & B\xECnh An Gia \u0110\u1EA1o\n</span> </h1> <div class="mb-10 rounded-xl p-6 text-justify text-lg leading-relaxed text-gray-700 backdrop-blur-sm md:p-8 md:text-center"> <p class="mb-4"> <strong class="text-green-700">S\u1EE9c kh\u1ECFe v\xE0 b\xECnh an l\xE0 \u0111i\u1EC1u qu\xFD gi\xE1 nh\u1EA5t.</strong> Khi b\u1EA3n th\xE2n\n          ho\u1EB7c ng\u01B0\u1EDDi th\xE2n g\u1EB7p v\u1EA5n \u0111\u1EC1 s\u1EE9c kh\u1ECFe, ho\u1EB7c tr\u01B0\u1EDBc chuy\u1EBFn \u0111i xa, gieo qu\u1EBB Kinh D\u1ECBch c\xF3 th\u1EC3 mang l\u1EA1i s\u1EF1 an t\xE2m v\xE0 ch\u1EC9\n          d\u1EABn.\n</p> <p class="mb-4">\nH\xE3y t\u0129nh t\xE2m, c\u1EA7u nguy\u1EC7n b\xECnh an v\xE0 tung qu\u1EBB. Qu\u1EBB d\u1ECBch kh\xF4ng ch\u1EC9 ph\u1EA3n \xE1nh t\xECnh tr\u1EA1ng hi\u1EC7n t\u1EA1i m\xE0 c\xF2n g\u1EE3i \xFD\n          h\u01B0\u1EDBng ch\u0103m s\xF3c, ngh\u1EC9 chuy\xEAn ph\xF9 h\u1EE3p.\n</p> <p>\nAI s\u1EBD lu\u1EADn gi\u1EA3i nh\u1EB9 nh\xE0ng, t\u1EADp trung v\xE0o kh\xEDa c\u1EA1nh s\u1EE9c kh\u1ECFe, \u0111\u01B0a ra l\u1EDDi khuy\xEAn mang t\xEDnh an \u1EE7i v\xE0 \u0111\u1ECBnh h\u01B0\u1EDBng\n          t\xEDch c\u1EF1c.\n</p> </div> </div> ', ' <!-- Decorative elements --> <div class="pointer-events-none absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/30 blur-3xl"></div> <div class="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-lime-200/30 blur-3xl"></div> </main> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), currentYear, renderComponent($$result2, "GieoQueKinhDich", GieoQueKinhDich, { "client:load": true, "lang": "vi", "themeColor": "green", "prefixContent": prefixContent, "languageUrls": languageUrls, "client:component-hydration": "load", "client:component-path": "~/components/horo/tuvi/UI/GieoQueKinhDich", "client:component-export": "default" }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gieo qu\u1EBB Kinh D\u1ECBch c\xF3 th\u1EC3 xem b\u1EC7nh t\xECnh kh\xF4ng?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kinh D\u1ECBch c\xF3 th\u1EC3 ph\u1EA3n \xE1nh xu h\u01B0\u1EDBng s\u1EE9c kh\u1ECFe t\u1ED5ng quan v\xE0 \u0111\u01B0a ra l\u1EDDi khuy\xEAn v\u1EC1 ngh\u1EC9 ng\u01A1i, \u0111i\u1EC1u d\u01B0\u1EE1ng. Tuy nhi\xEAn, qu\u1EBB d\u1ECBch kh\xF4ng thay th\u1EBF kh\xE1m b\u1EC7nh y t\u1EBF. H\xE3y lu\xF4n k\u1EBFt h\u1EE3p v\u1EDBi \xFD ki\u1EBFn b\xE1c s\u0129."
        }
      },
      {
        "@type": "Question",
        name: "C\xF3 n\xEAn gieo qu\u1EBB tr\u01B0\u1EDBc khi \u0111i xa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gieo qu\u1EBB tr\u01B0\u1EDBc chuy\u1EBFn \u0111i xa l\xE0 phong t\u1EE5c truy\u1EC1n th\u1ED1ng nh\u1EB1m xem h\u01B0\u1EDBng xu\u1EA5t h\xE0nh c\xF3 thu\u1EADn l\u1EE3i kh\xF4ng. Qu\u1EBB s\u1EBD cho bi\u1EBFt xu h\u01B0\u1EDBng chung v\xE0 nh\u1EEFng l\u01B0u \xFD c\u1EA7n \u0111\u1EC1 ph\xF2ng tr\xEAn \u0111\u01B0\u1EDDng."
        }
      },
      {
        "@type": "Question",
        name: "Qu\u1EBB n\xE0o cho th\u1EA5y s\u1EE9c kh\u1ECFe t\u1ED1t?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C\xE1c qu\u1EBB t\u1ED1t cho s\u1EE9c kh\u1ECFe: \u0110\u1ECBa Thi\xEAn Th\xE1i (hanh th\xF4ng, kh\u1ECFe m\u1EA1nh), Thu\u1EA7n Kh\xF4n (nhu thu\u1EADn, ngh\u1EC9 ng\u01A1i), Th\u1EE7y Phong T\u1EC9nh (ngu\u1ED3n s\u1ED1ng d\u1ED3i d\xE0o). Qu\u1EBB x\u1EA5u c\u0169ng kh\xF4ng n\xEAn lo l\u1EAFng qu\xE1 m\xE0 h\xE3y xem nh\u01B0 l\u1EDDi nh\u1EAFc nh\u1EDF ch\u0103m s\xF3c b\u1EA3n th\xE2n."
        }
      }
    ]
  }))), "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <link rel="alternate" hreflang="vi"${addAttribute(`${siteUrl}/gieo-que-suc-khoe-binh-an`, "href")}> <link rel="alternate" hreflang="zh-Hans"${addAttribute(`${siteUrl}/yijing-zhan-gua-jian-kang`, "href")}> <link rel="alternate" hreflang="en"${addAttribute(`${siteUrl}/i-ching-divination-health-peace`, "href")}> <link rel="alternate" hreflang="x-default"${addAttribute(`${siteUrl}/gieo-que-suc-khoe-binh-an`, "href")}> ` })}` })}`;
}, "/root/code/tmd_astro/src/pages/gieo-que-suc-khoe-binh-an.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/gieo-que-suc-khoe-binh-an.astro";
const $$url = "/gieo-que-suc-khoe-binh-an";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GieoQueSucKhoeBinhAn,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$GieoQueSucKhoeBinhAn as $, _page as _ };
