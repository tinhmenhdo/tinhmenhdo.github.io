import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as Fragment, e as addAttribute, u as unescapeHTML, m as maybeRenderHead } from './uu9o3mPN.js';
import 'piccolore';
import { G as GieoQueKinhDich } from './DkkEOErR.js';
import { $ as $$PageLayout } from './C-2XUs_Y.js';
import { g as getCanonical } from './D5X8WKes.js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$GieoQueTinhDuyen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GieoQueTinhDuyen;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const today = /* @__PURE__ */ new Date();
  today.getDate().toString().padStart(2, "0");
  (today.getMonth() + 1).toString().padStart(2, "0");
  const titleAll = `Gieo Qu\u1EBB Kinh D\u1ECBch T\xECnh Duy\xEAn ${currentYear} - Xem V\u1EADn T\xECnh Y\xEAu, H\xF4n Nh\xE2n`;
  const descAll = `Gieo qu\u1EBB Kinh D\u1ECBch xem t\xECnh duy\xEAn, t\xECnh y\xEAu, h\xF4n nh\xE2n n\u0103m ${currentYear}. Lu\u1EADn gi\u1EA3i chi ti\u1EBFt qu\u1EBB d\u1ECBch v\u1EC1 m\u1ED1i quan h\u1EC7 t\xECnh c\u1EA3m, t\xECm hi\u1EC3u v\u1EADn \u0111\xE0o hoa, h\xF2a h\u1EE3p \u0111\xF4i l\u1EE9a b\u1EB1ng tr\xED tu\u1EC7 AI.`;
  const prefixContent = `H\xE3y lu\u1EADn gi\u1EA3i qu\u1EBB Kinh D\u1ECBch n\xE0y trong b\u1ED1i c\u1EA3nh T\xCCNH DUY\xCAN & H\xD4N NH\xC2N. 
`;
  const languageUrls = {
    vi: "/gieo-que-tinh-duyen",
    en: "/i-ching-divination-love-marriage",
    zh: "/yijing-zhan-gua-yin-yuan"
  };
  const metadata = {
    title: titleAll,
    description: descAll,
    canonical: getCanonical("/gieo-que-tinh-duyen"),
    openGraph: {
      title: titleAll,
      description: descAll,
      url: getCanonical("/gieo-que-tinh-duyen")
    },
    robots: {
      index: true,
      follow: true
    }
  };
  const siteUrl = Astro2.site?.origin || "https://tinhmenhdo.com";
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<main class="relative mx-auto min-h-screen overflow-hidden bg-linear-to-b from-transparent via-rose-50 to-transparent font-serif dark:from-transparent dark:via-gray-950 dark:to-transparent"> <div class="relative z-10 mx-auto w-full pt-20 pb-10"> <h1 class="mb-6 text-center text-3xl font-bold text-rose-800 md:text-4xl dark:text-rose-400">\nGieo Qu\u1EBB Kinh D\u1ECBch T\xECnh Duy\xEAn ', ' <span class="mt-2 block text-lg font-normal text-rose-600 dark:text-rose-300">\n\u262F Kh\xE1m Ph\xE1 V\u1EADn M\u1EC7nh T\xECnh Y\xEAu & H\xF4n Nh\xE2n\n</span> </h1> <div class="mb-10 rounded-xl p-6 text-justify text-lg leading-relaxed text-gray-700 backdrop-blur-sm md:p-8 md:text-center"> <p class="mb-4"> <strong class="text-rose-700 dark:text-rose-400">T\xECnh duy\xEAn l\xE0 m\u1ED9t trong nh\u1EEFng ch\u1EE7 \u0111\u1EC1 \u0111\u01B0\u1EE3c quan t\xE2m nh\u1EA5t khi gieo qu\u1EBB Kinh D\u1ECBch.</strong> D\xF9 b\u1EA1n \u0111ang t\xECm ki\u1EBFm n\u1EEDa kia, mu\u1ED1n bi\u1EBFt t\u01B0\u01A1ng lai m\u1ED1i quan h\u1EC7 hi\u1EC7n t\u1EA1i, hay tr\u0103n tr\u1EDF v\u1EC1 h\xF4n nh\xE2n \u2013 64 qu\u1EBB D\u1ECBch\n          s\u1EBD mang \u0111\u1EBFn cho b\u1EA1n nh\u1EEFng ch\u1EC9 d\u1EABn s\xE2u s\u1EAFc.\n</p> <p class="mb-4">\nH\xE3y t\u0129nh t\xE2m, ngh\u0129 v\u1EC1 ng\u01B0\u1EDDi b\u1EA1n quan t\xE2m ho\u1EB7c m\u1ED1i quan h\u1EC7 \u0111ang c\u1EA7n l\u1EDDi gi\u1EA3i \u0111\xE1p, r\u1ED3i tung qu\u1EBB. M\u1ED7i qu\u1EBB l\xE0 m\u1ED9t\n          th\xF4ng \u0111i\u1EC7p ri\xEAng d\xE0nh cho chuy\u1EC7n t\xECnh c\u1EA3m c\u1EE7a b\u1EA1n.\n</p> <p>\nK\u1EBFt qu\u1EA3 s\u1EBD \u0111\u01B0\u1EE3c AI ph\xE2n t\xEDch chuy\xEAn s\xE2u trong b\u1ED1i c\u1EA3nh t\xECnh duy\xEAn, gi\xFAp b\u1EA1n hi\u1EC3u r\xF5 v\u1EADn \u0111\xE0o hoa, m\u1EE9c \u0111\u1ED9 h\xF2a\n          h\u1EE3p v\xE0 h\u01B0\u1EDBng \u0111i ph\xF9 h\u1EE3p cho m\u1ED1i quan h\u1EC7.\n</p> </div> </div> ', ' <!-- Decorative elements --> <div class="pointer-events-none absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/30 blur-3xl dark:bg-rose-900/20"></div> <div class="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl dark:bg-pink-900/20"></div> </main> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), currentYear, renderComponent($$result2, "GieoQueKinhDich", GieoQueKinhDich, { "client:load": true, "lang": "vi", "themeColor": "rose", "prefixContent": prefixContent, "languageUrls": languageUrls, "client:component-hydration": "load", "client:component-path": "~/components/horo/tuvi/UI/GieoQueKinhDich", "client:component-export": "default" }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gieo qu\u1EBB Kinh D\u1ECBch xem t\xECnh duy\xEAn c\xF3 ch\xEDnh x\xE1c kh\xF4ng?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kinh D\u1ECBch l\xE0 h\u1EC7 th\u1ED1ng tri\u1EBFt h\u1ECDc uy\xEAn th\xE2m h\xE0ng ngh\xECn n\u0103m. Qu\u1EBB d\u1ECBch ph\u1EA3n \xE1nh n\u0103ng l\u01B0\u1EE3ng v\xE0 xu h\u01B0\u1EDBng hi\u1EC7n t\u1EA1i, gi\xFAp b\u1EA1n nh\u1EADn ra chi\u1EC1u h\u01B0\u1EDBng c\u1EE7a m\u1ED1i quan h\u1EC7. Tuy nhi\xEAn, k\u1EBFt qu\u1EA3 c\xF2n ph\u1EE5 thu\u1ED9c v\xE0o s\u1EF1 th\xE0nh t\xE2m l\xFAc gieo qu\u1EBB."
        }
      },
      {
        "@type": "Question",
        name: "N\xEAn h\u1ECFi g\xEC khi gieo qu\u1EBB t\xECnh duy\xEAn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "B\u1EA1n c\xF3 th\u1EC3 h\u1ECFi: 'M\u1ED1i quan h\u1EC7 n\xE0y c\xF3 tri\u1EC3n v\u1ECDng kh\xF4ng?', 'Khi n\xE0o t\xF4i g\u1EB7p duy\xEAn m\u1EDBi?', 'Ch\xFAng t\xF4i c\xF3 h\u1EE3p nhau kh\xF4ng?', ho\u1EB7c \u0111\u1EC3 t\xE2m tr\u1ED1ng \u0111\u1EC3 Kinh D\u1ECBch t\u1EF1 ch\u1EC9 d\u1EABn \u0111i\u1EC1u c\u1EA7n bi\u1EBFt."
        }
      },
      {
        "@type": "Question",
        name: "Nh\u1EEFng qu\u1EBB Kinh D\u1ECBch n\xE0o t\u1ED1t cho t\xECnh duy\xEAn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C\xE1c qu\u1EBB t\u1ED1t cho t\xECnh duy\xEAn g\u1ED3m: Tr\u1EA1ch S\u01A1n H\xE0m (c\u1EA3m \u1EE9ng, thu h\xFAt), \u0110\u1ECBa Thi\xEAn Th\xE1i (h\xF2a h\u1EE3p, hanh th\xF4ng), Phong Tr\u1EA1ch Trung Phu (ch\xE2n th\xE0nh, t\xEDn ngh\u0129a). Tuy nhi\xEAn, m\u1ED7i qu\u1EBB \u0111\u1EC1u mang th\xF4ng \u0111i\u1EC7p ri\xEAng t\xF9y ho\xE0n c\u1EA3nh."
        }
      }
    ]
  }))), "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <link rel="alternate" hreflang="vi"${addAttribute(`${siteUrl}/gieo-que-tinh-duyen`, "href")}> <link rel="alternate" hreflang="zh-Hans"${addAttribute(`${siteUrl}/yijing-zhan-gua-yin-yuan`, "href")}> <link rel="alternate" hreflang="en"${addAttribute(`${siteUrl}/i-ching-divination-love-marriage`, "href")}> <link rel="alternate" hreflang="x-default"${addAttribute(`${siteUrl}/gieo-que-tinh-duyen`, "href")}> ` })}` })}`;
}, "/root/code/tmd_astro/src/pages/gieo-que-tinh-duyen.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/gieo-que-tinh-duyen.astro";
const $$url = "/gieo-que-tinh-duyen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GieoQueTinhDuyen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$GieoQueTinhDuyen as $, _page as _ };
