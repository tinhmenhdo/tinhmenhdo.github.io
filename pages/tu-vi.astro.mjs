import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import { $ as $$SpaLayout } from '../sfYYkhPc/B91WHJta.js';
import { g as getDefaultInfo, a as getHoroDataServerFromApi, c as configDefault, b as getSexText, d as getLunaBornText, e as getBaseText, C as CfgValue, V as VERSION_HORO } from '../sfYYkhPc/xLi9c1wg.js';
import { S as SM, C as CHI } from '../sfYYkhPc/uVTmO8k8.js';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tinhmenhdo.github.io");
const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const defaultType = 0;
  const urlInfo = getDefaultInfo();
  const now = /* @__PURE__ */ new Date();
  const lsServer = await getHoroDataServerFromApi(now, now, 1, [...configDefault]);
  const fontName = "Roboto Slab";
  const fontClass = "font-[Roboto Slab]";
  const generateTitle = (dLich2, gioiTinh2, lunaCC2, urlInfo2, arrTitle2) => {
    return `L\xE1 s\u1ED1 T\u1EED Vi ${gioiTinh2} tu\u1ED5i ${lunaCC2.y} ${arrTitle2[urlInfo2.cfg[CfgValue.typeLs]]} sinh ${dLich2.d}/${dLich2.m}/${dLich2.y} ${dLich2.h}h${dLich2.i} , t\u1EED vi s\u1ED1 m\u1EC7nh, b\xE1t t\u1EF1 ${lunaCC2.y.toUpperCase()} | ${lunaCC2.m.toUpperCase()} | ${lunaCC2.d.toUpperCase()} | ${lunaCC2.h.toUpperCase()}`;
  };
  const generateTitleOg = (dLich2, gioiTinh2, lunaCC2, urlInfo2, arrTitleOg2) => `${arrTitleOg2[urlInfo2.cfg[CfgValue.typeLs] - 1]} sinh ${dLich2.h} gi\u1EDD ${dLich2.i} ph\xFAt ${dLich2.d}/${dLich2.m}/${dLich2.y}, gi\u1EDBi t\xEDnh ${gioiTinh2} c\xF3 B\xE1t T\u1EF1 ${lunaCC2.y.toUpperCase()} | ${lunaCC2.m.toUpperCase()} | ${lunaCC2.d.toUpperCase()} | ${lunaCC2.h.toUpperCase()}`;
  const generateDest = (dLich2, gioiTinh2, lunaCC2, urlInfo2, arrDesc2, menh12, menh22, menh32, menhTv2, chinhTinhMenhTH2) => `Tu vi ${dLich2.d}/${dLich2.m}/${dLich2.y} t\u1EED vi tr\u1ECDn \u0111\u1EDDi ${arrDesc2[urlInfo2.cfg[CfgValue.typeLs] - 1]} ${gioiTinh2} tu\u1ED5i ${lunaCC2.y} ${dLich2.y} m\u1EC7nh t\u1EA1i ${CHI[menh12.ci]} c\xF3 ${chinhTinhMenhTH2}. \u0110\u1EA1i v\u1EADn ${CHI[menh22.ci]}, l\u01B0u ni\xEAn ${CHI[menh32.ci]}, ti\u1EC3u v\u1EADn ${CHI[menhTv2.ci]}`;
  const generateDestOG = (baseInfo2, menh12, menh22, menh32, menhTv2, chinhTinhMenhTH2) => `${baseInfo2.adage}, m\u1EC7nh ${baseInfo2.hmenh.toUpperCase()}, th\xE2n c\u01B0 ${baseInfo2.tcu} c\u1EE5c ${baseInfo2.cuc.toUpperCase()}  c\xF3 m\u1EC7nh t\u1EA1i ${CHI[menh12.ci]} c\xF3 ${chinhTinhMenhTH2}. \u0110\u1EA1i v\u1EADn t\u1EA1i ${CHI[menh22.ci]}, l\u01B0u ni\xEAn t\u1EA1i ${CHI[menh32.ci]}, ti\u1EC3u v\u1EADn t\u1EA1i ${CHI[menhTv2.ci]}`;
  const generateKeywords = (menhText2, cucText2, lunaCC2) => `Tinh M\u1EC7nh \u0110\u1ED3, TinhMenhDo, TinhMenhDo.com,la so kham thien,luong phai, l\xE1 s\u1ED1, m\u1EC7nh ${menhText2}, ${cucText2}, ${lunaCC2.h}, ${lunaCC2.d}, ${lunaCC2.m}, ${lunaCC2.y} `;
  const dLich = lsServer.dtb.sn;
  const gioiTinh = getSexText(lsServer);
  const lunaCC = getLunaBornText(lsServer);
  const baseInfo = getBaseText(lsServer);
  const menhText = `m\u1EC7nh ${baseInfo.hmenh.toUpperCase()}`;
  const cucText = `c\u1EE5c ${baseInfo.cuc.toUpperCase()}`;
  const arrTitle = [
    "la so tu vi bat tu",
    "la so Phi Tinh Luong Phai va Nam Phai",
    "la so Kham Thien Tu Hoa va Nam Phai",
    "la so tu vi Nam Phai",
    "la so tu vi Phi Tinh Luong Phai",
    "la so tu vi Kham Thien Tu Hoa",
    "la so Trung Chau Phai",
    "la so Trung Chau Phai v\xE0 Kham Thien Tu Hoa"
  ];
  const arrTitleOg = [
    "L\xE1 s\u1ED1 T\u1EED Vi v\xE0 B\xE1t T\u1EF1",
    "L\xE1 s\u1ED1 T\u1EED Vi Phi Tinh L\u01B0\u01A1ng Ph\xE1i & Nam Ph\xE1i",
    "L\xE1 s\u1ED1 T\u1EED Vi Kh\xE2m Thi\xEAn T\u1EE9 H\xF3a & Nam Ph\xE1i",
    "L\xE1 s\u1ED1 T\u1EED Vi Nam Ph\xE1i",
    "L\xE1 s\u1ED1 T\u1EED Vi Phi Tinh L\u01B0\u01A1ng Ph\xE1i",
    "L\xE1 s\u1ED1 T\u1EED Vi Kh\xE2m Thi\xEAn T\u1EE9 H\xF3a",
    "L\xE1 s\u1ED1 Trung Ch\xE2u Ph\xE1i",
    "L\xE1 s\u1ED1 Trung Ch\xE2u Ph\xE1i & Kh\xE2m Thi\xEAn T\u1EE9 H\xF3a",
    "L\xE1 s\u1ED1 Trung Ch\xE2u Ph\xE1i & L\u01B0\u01A1ng Ph\xE1i"
  ];
  const arrDesc = [
    "tu vi bat tu",
    "phi tinh va nam phai",
    "kham thien va nam phai",
    "nam phai",
    "phi tinh luong phai",
    "kham thien tu hoa"
  ];
  const title = generateTitle(dLich, gioiTinh, lunaCC, urlInfo, arrTitle);
  const titleOg = generateTitleOg(dLich, gioiTinh, lunaCC, urlInfo, arrTitleOg);
  const menh1 = lsServer.ars[lsServer.am];
  const menh2 = lsServer.ars[lsServer.aIdx?.aid0];
  const menh3 = lsServer.ars[lsServer.dtv.bs.y[1]];
  const menhTv = lsServer.ars[lsServer.aIdx?.lynpc];
  const chinhTinhMenhTH = menh1.sb.length === 0 ? "V\xF4 Ch\xEDnh Di\u1EC7u" : menh1.sb.length === 1 ? SM[menh1.sb[0]].name : `${SM[menh1.sb[0]].name}, ${SM[menh1.sb[1]].name}`;
  const dest = generateDest(dLich, gioiTinh, lunaCC, urlInfo, arrDesc, menh1, menh2, menh3, menhTv, chinhTinhMenhTH);
  const destOG = generateDestOG(baseInfo, menh1, menh2, menh3, menhTv, chinhTinhMenhTH);
  const keywords = generateKeywords(menhText, cucText, lunaCC);
  if (Astro2.request.url.endsWith("/tuvi")) {
    return Astro2.redirect("/tuvi/la-so-tu-vi-viet-nam", 301);
  }
  const metadata = {
    title,
    description: dest,
    keywords,
    robots: {
      index: true,
      follow: true
    },
    canonical: `/tu-vi`,
    openGraph: {
      title: titleOg,
      description: destOG,
      url: `/tu-vi`
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$SpaLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" <script>\n    (function (l) {\n      if (l.search[1] === '/') {\n        const decoded = l.search\n          .slice(1)\n          .split('&')\n          .map(function (s) {\n            return s.replace(/~and~/g, '&');\n          })\n          .join('?');\n        window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);\n      }\n    })(window.location);\n  <\/script> ", " "])), renderComponent($$result2, "ReactApp", null, { "fontName": fontName, "fontClass": fontClass, "lsServer": JSON.stringify(lsServer), "version": VERSION_HORO, "defaultType": defaultType, "client:only": "react", "client:component-hydration": "only", "client:component-path": "~/components/horo/ReactApp", "client:component-export": "default" })) })}`;
}, "/root/code/tmd_astro/src/pages/tu-vi/index.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/tu-vi/index.astro";
const $$url = "/tu-vi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
