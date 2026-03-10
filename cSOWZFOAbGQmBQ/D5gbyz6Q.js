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
const $$GieoQueHangNgay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GieoQueHangNgay;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const today = /* @__PURE__ */ new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const titleAll = `Gieo Qu\u1EBB Kinh D\u1ECBch H\xE0ng Ng\xE0y - Xem V\u1EADn H\u1EA1n H\xF4m Nay ${day}/${month}/${currentYear}`;
  const descAll = `Gieo qu\u1EBB Kinh D\u1ECBch h\xE0ng ng\xE0y ${day}/${month}/${currentYear}. Xem v\u1EADn h\u1EA1n h\xF4m nay, \u0111i\u1EC1u n\xEAn l\xE0m v\xE0 tr\xE1nh, h\u01B0\u1EDBng d\u1EABn h\xE0nh \u0111\u1ED9ng theo qu\u1EBB d\u1ECBch.`;
  const prefixContent = `H\xE3y lu\u1EADn gi\u1EA3i qu\u1EBB Kinh D\u1ECBch n\xE0y trong b\u1ED1i c\u1EA3nh V\u1EACN H\u1EA0N H\xC0NG NG\xC0Y.
`;
  const languageUrls = { vi: "/gieo-que-hang-ngay", en: "/i-ching-divination-daily", zh: "/yijing-zhan-gua-mei-ri" };
  const metadata = {
    title: titleAll,
    description: descAll,
    canonical: getCanonical("/gieo-que-hang-ngay"),
    openGraph: {
      title: titleAll,
      description: descAll,
      url: getCanonical("/gieo-que-hang-ngay")
    },
    robots: {
      index: true,
      follow: true
    }
  };
  const siteUrl = Astro2.site?.origin || "https://tinhmenhdo.com";
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<main class="relative mx-auto min-h-screen overflow-hidden bg-linear-to-b from-transparent via-teal-50 to-transparent font-serif"> <div class="relative z-10 mx-auto w-full pt-20 pb-10"> <h1 class="mb-6 text-center text-3xl font-bold text-teal-800 md:text-4xl">\nGieo Qu\u1EBB Kinh D\u1ECBch H\xE0ng Ng\xE0y\n<span class="mt-2 block text-lg font-normal text-teal-600">\n\u262F Xem V\u1EADn H\u1EA1n H\xF4m Nay $', "/$", "/$", ' </span> </h1> <div class="mb-10 rounded-xl p-6 text-justify text-lg leading-relaxed text-gray-700 backdrop-blur-sm md:p-8 md:text-center"> <p class="mb-4"> <strong class="text-teal-700">M\u1ED7i ng\xE0y mang m\u1ED9t n\u0103ng l\u01B0\u1EE3ng ri\xEAng.</strong> Gieo qu\u1EBB h\xE0ng ng\xE0y\n          gi\xFAp b\u1EA1n n\u1EAFm b\u1EAFt xu h\u01B0\u1EDBng c\u1EE7a ng\xE0y h\xF4m nay, bi\u1EBFt \u0111i\u1EC1u n\xEAn l\xE0m v\xE0 tr\xE1nh.\n</p> <p class="mb-4">\nH\xE3y b\xECnh t\xE2m v\xE0o m\u1ED7i bu\u1ED5i s\xE1ng, d\xE0nh m\u1ED9t ph\xFAt t\u0129nh l\u1EB7ng v\xE0 tung qu\u1EBB. Qu\u1EBB h\xF4m nay l\xE0 ch\u1EC9 d\u1EABn nh\u1ECF nh\u01B0ng \xFD ngh\u0129a,\n          gi\xFAp b\u1EA1n \u0111i \u0111\xFAng nh\u1ECBp v\u1EDBi t\u1EF1 nhi\xEAn.\n</p> <p>\nAI s\u1EBD ph\xE2n t\xEDch qu\u1EBB trong b\u1ED1i c\u1EA3nh v\u1EADn h\u1EA1n ng\xE0y, \u0111\u01B0a ra l\u1EDDi khuy\xEAn ng\u1EAFn g\u1ECDn, th\u1EF1c ti\u1EC5n m\xE0 b\u1EA1n c\xF3 th\u1EC3 \xE1p d\u1EE5ng\n          ngay l\u1EADp t\u1EE9c.\n</p> </div> </div> ', ' <!-- Decorative elements --> <div class="pointer-events-none absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl"></div> <div class="pointer-events-none absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-teal-200/30 blur-3xl"></div> </main> <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), day, month, currentYear, renderComponent($$result2, "GieoQueKinhDich", GieoQueKinhDich, { "client:load": true, "lang": "vi", "themeColor": "teal", "prefixContent": prefixContent, "languageUrls": languageUrls, "client:component-hydration": "load", "client:component-path": "~/components/horo/tuvi/UI/GieoQueKinhDich", "client:component-export": "default" }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "C\xF3 n\xEAn gieo qu\u1EBB Kinh D\u1ECBch h\xE0ng ng\xE0y kh\xF4ng?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C\xF3 th\u1EC3 gieo qu\u1EBB m\u1ED7i ng\xE0y 1 l\u1EA7n v\xE0o bu\u1ED5i s\xE1ng \u0111\u1EC3 xem xu h\u01B0\u1EDBng trong ng\xE0y. Tuy nhi\xEAn, tr\xE1nh gieo qu\xE1 nhi\u1EC1u l\u1EA7n trong c\xF9ng m\u1ED9t ng\xE0y v\u1EC1 c\xF9ng m\u1ED9t v\u1EA5n \u0111\u1EC1 v\xEC s\u1EBD gi\u1EA3m \u0111\u1ED9 linh \u1EE9ng."
        }
      },
      {
        "@type": "Question",
        name: "Th\u1EDDi \u0111i\u1EC3m n\xE0o t\u1ED1t nh\u1EA5t \u0111\u1EC3 gieo qu\u1EBB h\xE0ng ng\xE0y?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Th\u1EDDi \u0111i\u1EC3m t\u1ED1t nh\u1EA5t l\xE0 bu\u1ED5i s\xE1ng s\u1EDBm, khi t\xE2m tr\xED c\xF2n t\u0129nh l\u1EB7ng v\xE0 ch\u01B0a b\u1ECB chi ph\u1ED1i b\u1EDFi c\xE1c s\u1EF1 ki\u1EC7n trong ng\xE0y. Gi\u1EDD D\u1EA7n (3-5h) ho\u1EB7c gi\u1EDD M\xE3o (5-7h) l\xE0 c\xE1c gi\u1EDD truy\u1EC1n th\u1ED1ng \u0111\u01B0\u1EE3c cho l\xE0 linh \u1EE9ng."
        }
      },
      {
        "@type": "Question",
        name: "Qu\u1EBB gieo h\xE0ng ng\xE0y c\xF3 hi\u1EC7u l\u1EF1c bao l\xE2u?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Qu\u1EBB gieo h\xE0ng ng\xE0y th\u01B0\u1EDDng ph\u1EA3n \xE1nh n\u0103ng l\u01B0\u1EE3ng v\xE0 xu h\u01B0\u1EDBng c\u1EE7a ng\xE0y h\xF4m \u0111\xF3. Sau khi qua ng\xE0y, n\xEAn gieo qu\u1EBB m\u1EDBi cho ng\xE0y ti\u1EBFp theo \u0111\u1EC3 c\u1EADp nh\u1EADt ch\u1EC9 d\u1EABn."
        }
      }
    ]
  }))), "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` <link rel="alternate" hreflang="vi"${addAttribute(`${siteUrl}/gieo-que-hang-ngay`, "href")}> <link rel="alternate" hreflang="zh-Hans"${addAttribute(`${siteUrl}/yijing-zhan-gua-mei-ri`, "href")}> <link rel="alternate" hreflang="en"${addAttribute(`${siteUrl}/i-ching-divination-daily`, "href")}> <link rel="alternate" hreflang="x-default"${addAttribute(`${siteUrl}/gieo-que-hang-ngay`, "href")}> ` })}` })}`;
}, "/root/code/tmd_astro/src/pages/gieo-que-hang-ngay.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/gieo-que-hang-ngay.astro";
const $$url = "/gieo-que-hang-ngay";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GieoQueHangNgay,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$GieoQueHangNgay as $, _page as _ };
