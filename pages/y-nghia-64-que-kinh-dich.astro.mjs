import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import { $ as $$SpaLayout } from '../sfYYkhPc/B91WHJta.js';
import { s as ICHING } from '../sfYYkhPc/uVTmO8k8.js';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const titleAll = "Tinh M\u1EC7nh \u0110\u1ED3 - \xDD Ngh\u0129a 64 Qu\u1EBB D\u1ECBch: Kh\xE1m Ph\xE1 S\xE2u S\u1EAFc V\u1EC1 V\u1EADn M\u1EC7nh v\xE0 Cu\u1ED9c S\u1ED1ng";
  const destAll = "Kh\xE1m ph\xE1 \xFD ngh\u0129a chi ti\u1EBFt c\u1EE7a 64 qu\u1EBB d\u1ECBch \u0111\u1EC3 hi\u1EC3u r\xF5 h\u01A1n v\u1EC1 v\u1EADn m\u1EC7nh, t\xE2m tr\u1EA1ng v\xE0 h\u01B0\u1EDBng d\u1EABn cho cu\u1ED9c s\u1ED1ng h\xE0ng ng\xE0y c\u1EE7a b\u1EA1n. Trang n\xE0y cung c\u1EA5p m\u1ED9t t\xE0i nguy\xEAn \u0111\u1EA7y \u0111\u1EE7 v\xE0 chi ti\u1EBFt v\u1EC1 m\u1ED7i qu\u1EBB, gi\xFAp b\u1EA1n th\u1EF1c hi\u1EC7n vi\u1EC7c gieo qu\u1EBB v\xE0 gi\u1EA3i \u0111\xE1p c\xE1c c\xE2u h\u1ECFi v\u1EDBi s\u1EF1 t\u1EF1 tin v\xE0 hi\u1EC3u bi\u1EBFt. B\u1EAFt \u0111\u1EA7u h\xE0nh tr\xECnh kh\xE1m ph\xE1 b\u1EA3n th\xE2n v\xE0 d\u1EABn d\u1EAFt cu\u1ED9c \u0111\u1EDDi c\u1EE7a m\xECnh theo h\u01B0\u1EDBng \u0111\xFAng v\u1EDBi 64 qu\u1EBB d\u1ECBch ngay h\xF4m nay";
  const metadata = {
    title: titleAll,
    description: destAll,
    keywords: "qu\u1EBB,b\xF3i qu\u1EBB,qu\u1EBB d\u1ECBch,qu\u1EBB kinh d\u1ECBch,xem qu\u1EBB,qu\u1EBB b\xF3i,qu\u1EBB t\u1EED vi,qu\u1EBB b\xE1t qu\xE1i,qu\u1EBB phong th\u1EE7y,qu\u1EBB s\u1ED1 m\u1EC7nh,kinh d\u1ECBch,h\u1ECDc kinh d\u1ECBch,d\u1ECBch h\u1ECDc,b\xF3i kinh d\u1ECBch,gi\u1EA3i m\xE3 kinh d\u1ECBch,l\xFD thuy\u1EBFt kinh d\u1ECBch,qu\u1EBB kinh d\u1ECBch,t\u01B0\u1EE3ng kinh d\u1ECBch,\u1EE9ng d\u1EE5ng kinh d\u1ECBch,nghi\xEAn c\u1EE9u kinh d\u1ECBch",
    robots: {
      index: true,
      follow: true
    },
    canonical: `/y-nghia-64-que-kinh-dich`,
    openGraph: {
      title: titleAll,
      description: destAll,
      url: `/y-nghia-64-que-kinh-dich`,
      images: [
        {
          url: "~/assets/images/yinyang2.webp"
        }
      ]
    }
  };
  const dataKinhDich = ICHING;
  return renderTemplate`${renderComponent($$result, "Layout", $$SpaLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative z-10 my-8 mb-96 text-[22px] px-5"> <h1 class="mb-5 mt-10 text-center text-xl font-bold">
Ý Nghĩa 64 Quẻ Kinh Dịch ${(/* @__PURE__ */ new Date()).getFullYear()} </h1> <div class="mb-5 mt-10  leading-normal"> <p>
Khám phá ý nghĩa chi tiết của 64 quẻ dịch để hiểu rõ hơn về vận mệnh, tâm trạng và hướng dẫn cho cuộc sống hàng ngày của bạn. Trang này cung cấp một tài
        nguyên đầy đủ và chi tiết về mỗi quẻ, giúp bạn thực hiện việc gieo quẻ và giải đáp các câu hỏi với sự tự tin và hiểu biết. Bắt đầu hành trình khám phá bản
        thân và dẫn dắt cuộc đời của mình theo hướng đúng với 64 quẻ dịch ngay hôm nay
</p> </div> <ul class="grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-5"> ${dataKinhDich.map((item, index) => {
    let str = item[2];
    let [firstWord, ...rest] = str.split(".");
    let twoWords = `${firstWord}`.replace(".", "");
    let remainingStr = rest.join(".");
    return renderTemplate`<li class="aspect-[7/9] rounded-xl bg-white p-4 shadow-md hover:cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:text-amber-800 flex flex-col"> <div class="text-center text-[250px] md:text-[170px] leading-[1] group-hover:text-amber-800 transition-colors flex items-center justify-center h-auto mb-3 md:mb-5">${item[0]}</div> <div class="flex flex-col justify-between"> <h3 class="text-center text-[25px] md:text-[22px] lg:text-[24px] font-semibold leading-tight mb-3 md:mb-5">${`Qu\u1EBB ${index + 1} - ${item[1]}`}</h3> <p class="text-gray-700 group-hover:text-amber-800 transition-colors text-[25px] md:text-[17px] lg:text-[18px] leading-normal"> <b>${twoWords}</b>. ${remainingStr} </p> </div> </li>`;
  })} </ul> </div> ` })}`;
}, "/root/code/tmd_astro/src/pages/y-nghia-64-que-kinh-dich/index.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/y-nghia-64-que-kinh-dich/index.astro";
const $$url = "/y-nghia-64-que-kinh-dich";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
