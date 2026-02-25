import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as Fragment, e as addAttribute, u as unescapeHTML, m as maybeRenderHead } from './F_Fel0yb.js';
import 'piccolore';
import { G as GieoQueKinhDich } from './Ivsq61Yk.js';
import { $ as $$PageLayout } from './Dks9rDWI.js';
import { g as getCanonical } from './Du4CJw7g.js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$GieoQueTaiLocKinhDoanh = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GieoQueTaiLocKinhDoanh;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const today = /* @__PURE__ */ new Date();
  today.getDate().toString().padStart(2, "0");
  (today.getMonth() + 1).toString().padStart(2, "0");
  const titleAll = `Gieo Qu\u1EBB Kinh D\u1ECBch T\xE0i L\u1ED9c Kinh Doanh ${currentYear} - Xem V\u1EADn L\xE0m \u0102n`;
  const descAll = `Gieo qu\u1EBB Kinh D\u1ECBch xem t\xE0i l\u1ED9c, kinh doanh, \u0111\u1EA7u t\u01B0 n\u0103m ${currentYear}. Lu\u1EADn gi\u1EA3i chi ti\u1EBFt qu\u1EBB d\u1ECBch v\u1EC1 v\u1EADn ti\u1EC1n b\u1EA1c, h\u1EE3p t\xE1c l\xE0m \u0103n, quy\u1EBFt \u0111\u1ECBnh \u0111\u1EA7u t\u01B0.`;
  const prefixContent = `H\xE3y lu\u1EADn gi\u1EA3i qu\u1EBB Kinh D\u1ECBch n\xE0y trong b\u1ED1i c\u1EA3nh T\xC0I L\u1ED8C & KINH DOANH. 
`;
  const languageUrls = {
    vi: "/gieo-que-tai-loc-kinh-doanh",
    en: "/i-ching-divination-wealth-business",
    zh: "/yijing-zhan-gua-cai-yun"
  };
  const metadata = {
    title: titleAll,
    description: descAll,
    canonical: getCanonical("/gieo-que-tai-loc-kinh-doanh"),
    openGraph: {
      title: titleAll,
      description: descAll,
      url: getCanonical("/gieo-que-tai-loc-kinh-doanh")
    },
    robots: {
      index: true,
      follow: true
    }
  };
  const siteUrl = Astro2.site?.origin || "https://tinhmenhdo.com";
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<main class="relative mx-auto min-h-screen overflow-hidden bg-linear-to-b from-transparent via-amber-50 to-transparent font-serif"> <div class="relative z-10 mx-auto w-full pt-20 pb-10"> <h1 class="mb-6 text-center text-3xl font-bold text-amber-800 md:text-4xl">\nGieo Qu\u1EBB Kinh D\u1ECBch T\xE0i L\u1ED9c ', ' <span class="mt-2 block text-lg font-normal text-amber-600">\n\u262F Xem V\u1EADn Ti\u1EC1n T\xE0i, \u0110\u1EA7u T\u01B0 & L\xE0m \u0102n\n</span> </h1> <div class="mb-10 rounded-xl p-6 text-justify text-lg leading-relaxed text-gray-700 backdrop-blur-sm md:p-8 md:text-center"> <p class="mb-4"> <strong class="text-amber-700">Trong b\u1ED1i c\u1EA3nh kinh t\u1EBF bi\u1EBFn \u0111\u1ED9ng, gieo qu\u1EBB xem t\xE0i l\u1ED9c gi\xFAp b\u1EA1n nh\u1EADn di\u1EC7n xu h\u01B0\u1EDBng t\xE0i ch\xEDnh v\xE0 \u0111\u01B0a ra\n            quy\u1EBFt \u0111\u1ECBnh s\xE1ng su\u1ED1t.</strong> D\xF9 b\u1EA1n \u0111ang c\xE2n nh\u1EAFc \u0111\u1EA7u t\u01B0, h\u1EE3p t\xE1c kinh doanh hay m\u1EDF r\u1ED9ng quy m\xF4 \u2013 Kinh D\u1ECBch s\u1EBD cho b\u1EA1n g\xF3c nh\xECn chi\u1EBFn l\u01B0\u1EE3c.\n</p> <p class="mb-4">\nH\xE3y t\u1EADp trung suy ngh\u0129 v\u1EC1 v\u1EA5n \u0111\u1EC1 t\xE0i ch\xEDnh c\u1EE5 th\u1EC3 \u0111ang tr\u0103n tr\u1EDF: C\xF3 n\xEAn xu\u1ED1ng ti\u1EC1n \u0111\u1EA7u t\u01B0? H\u1EE3p t\xE1c v\u1EDBi \u0111\u1ED1i t\xE1c\n          n\xE0y c\xF3 thu\u1EADn l\u1EE3i? N\u0103m nay l\xE0m \u0103n ra sao? R\u1ED3i tung qu\u1EBB \u0111\u1EC3 nh\u1EADn ch\u1EC9 d\u1EABn.\n</p> <p>\nAI s\u1EBD ph\xE2n t\xEDch qu\u1EBB trong b\u1ED1i c\u1EA3nh t\xE0i l\u1ED9c v\xE0 kinh doanh, gi\xFAp b\u1EA1n hi\u1EC3u r\xF5 th\u1EDDi \u0111i\u1EC3m thu\u1EADn l\u1EE3i, r\u1EE7i ro c\u1EA7n\n          tr\xE1nh v\xE0 chi\u1EBFn l\u01B0\u1EE3c t\u1ED1i \u01B0u.\n</p> </div> </div> ', ' <!-- Decorative elements --> <div class="pointer-events-none absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/30 blur-3xl"></div> <div class="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl"></div> </main> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), currentYear, renderComponent($$result2, "GieoQueKinhDich", GieoQueKinhDich, { "client:load": true, "lang": "vi", "themeColor": "amber", "prefixContent": prefixContent, "languageUrls": languageUrls, "client:component-hydration": "load", "client:component-path": "~/components/horo/tuvi/UI/GieoQueKinhDich", "client:component-export": "default" }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gieo qu\u1EBB Kinh D\u1ECBch xem t\xE0i l\u1ED9c c\xF3 hi\u1EC7u qu\u1EA3 kh\xF4ng?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kinh D\u1ECBch gi\xFAp ph\xE2n t\xEDch xu h\u01B0\u1EDBng n\u0103ng l\u01B0\u1EE3ng li\xEAn quan \u0111\u1EBFn t\xE0i ch\xEDnh. Nhi\u1EC1u nh\xE0 kinh doanh \xC1 \u0110\xF4ng tin r\u1EB1ng qu\u1EBB d\u1ECBch ph\u1EA3n \xE1nh d\xF2ng ch\u1EA3y t\xE0i l\u1ED9c v\xE0 gi\xFAp \u0111\u01B0a ra quy\u1EBFt \u0111\u1ECBnh \u0111\xFAng th\u1EDDi \u0111i\u1EC3m."
        }
      },
      {
        "@type": "Question",
        name: "C\xF3 n\xEAn gieo qu\u1EBB tr\u01B0\u1EDBc khi \u0111\u1EA7u t\u01B0 l\u1EDBn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gieo qu\u1EBB l\xE0 m\u1ED9t g\xF3c nh\xECn tham kh\u1EA3o th\xEAm. B\u1EA1n n\xEAn k\u1EBFt h\u1EE3p v\u1EDBi ph\xE2n t\xEDch th\u1EF1c t\u1EBF, nghi\xEAn c\u1EE9u th\u1ECB tr\u01B0\u1EDDng v\xE0 t\u01B0 v\u1EA5n chuy\xEAn gia. Qu\u1EBB d\u1ECBch gi\xFAp b\u1EA1n nh\u1EADn ra xu h\u01B0\u1EDBng thu\u1EADn hay ngh\u1ECBch \u0111\u1EC3 \u0111i\u1EC1u ch\u1EC9nh chi\u1EBFn l\u01B0\u1EE3c."
        }
      },
      {
        "@type": "Question",
        name: "Qu\u1EBB n\xE0o cho th\u1EA5y t\xE0i l\u1ED9c hanh th\xF4ng?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C\xE1c qu\u1EBB t\u1ED1t cho t\xE0i l\u1ED9c: H\u1ECFa Thi\xEAn \u0110\u1EA1i H\u1EEFu (s\u1EDF h\u1EEFu l\u1EDBn, ph\xE1t \u0111\u1EA1t), \u0110\u1ECBa S\u01A1n Khi\xEAm (khi\xEAm t\u1ED1n m\xE0 gi\xE0u), Phong Th\u1EE7y Ho\xE1n (l\u01B0u th\xF4ng t\xE0i s\u1EA3n). M\u1ED7i qu\u1EBB c\u1EA7n xem th\xEAm h\xE0o \u0111\u1ED9ng \u0111\u1EC3 lu\u1EADn gi\u1EA3i chi ti\u1EBFt."
        }
      }
    ]
  }))), "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <link rel="alternate" hreflang="vi"${addAttribute(`${siteUrl}/gieo-que-tai-loc-kinh-doanh`, "href")}> <link rel="alternate" hreflang="zh-Hans"${addAttribute(`${siteUrl}/yijing-zhan-gua-cai-yun`, "href")}> <link rel="alternate" hreflang="en"${addAttribute(`${siteUrl}/i-ching-divination-wealth-business`, "href")}> <link rel="alternate" hreflang="x-default"${addAttribute(`${siteUrl}/gieo-que-tai-loc-kinh-doanh`, "href")}> ` })}` })}`;
}, "/root/code/tmd_astro/src/pages/gieo-que-tai-loc-kinh-doanh.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/gieo-que-tai-loc-kinh-doanh.astro";
const $$url = "/gieo-que-tai-loc-kinh-doanh";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GieoQueTaiLocKinhDoanh,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$GieoQueTaiLocKinhDoanh as $, _page as _ };
