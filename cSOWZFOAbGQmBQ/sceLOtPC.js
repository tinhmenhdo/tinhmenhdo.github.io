import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import React, { useMemo } from 'react';
import { k as getLunaBornText, l as getBaseText, m as getSexText, C as CHI, T as TKN, g as LTHG_HH, j as AREA_NAME, S as SMI, n as SM } from './CpcYxhgG.js';

function processStarData(ss) {
  const left = [];
  const right = [];
  let vts = -1;
  ss.forEach((idStar) => {
    if (SM[idStar].typ === 1 && SM[idStar].cir !== "vts") left.push(idStar);
    if (SM[idStar].typ === 2 && SM[idStar].cir !== "vts") right.push(idStar);
    if (SM[idStar].cir === "vts") vts = idStar;
  });
  return {
    ssZoneLeft: left,
    ssZoneRight: right,
    starVTS: vts
  };
}
const PageContentStatic = ({ ls }) => {
  const lunaCCView = ls.dtv.bs;
  const lunaCC = getLunaBornText(ls);
  const baseIf = getBaseText(ls);
  const fagTitle = useMemo(
    () => `Thông tin lá số ${getSexText(ls)} sinh năm ${ls.dtb.sn.y} ${lunaCC.y} tháng ${lunaCC.m} ngày ${lunaCC.d} giờ ${lunaCC.h} dương lịch ${ls.dtb.sn.y}/${ls.dtb.sn.m}/${ls.dtb.sn.d} ${ls.dtb.sn.h}:${ls.dtb.sn.i ?? 30}?`,
    [ls.dtb.sn, lunaCC, getSexText(ls)]
  );
  const tienthien = useMemo(
    () => `Mệnh tại ${CHI[ls.am]}, mệnh ${ls.ars[ls.am].sb.join(", ") || "vô chính diệu"}. Giới tính <b>${baseIf.adage}</b>, <b>${baseIf.ad}</b> bản mệnh là <b>${baseIf.hmenh}</b> cục <strong>${baseIf.cuc}</strong>, ${baseIf.sk}, thân cư ${baseIf.tcu}`,
    [ls.am, ls.ars, baseIf]
  );
  const mchuTChu = useMemo(
    () => `Sao mệnh chủ là <b>${baseIf.mchu}</b>, thân chủ là<b>${baseIf.tchu}</b>`,
    [baseIf.mchu, baseIf.tchu]
  );
  const mTietKhi = useMemo(() => `Tiết khí của thời gian sinh này là ${TKN[ls.dtb.tki[0]]}`, [ls.dtb.tki]);
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQ Page",
      name: fagTitle,
      mainEntity: [
        {
          "@type": "Question",
          name: `Thông tin lá số ${ls.dtb.sn.y} ${lunaCC.y} tháng ${lunaCC.m} ngày ${lunaCC.d} giờ ${lunaCC.h} dương lịch ${ls.dtb.sn.y} ?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: tienthien
          }
        },
        {
          "@type": "Question",
          name: "Sao mệnh chủ, sao thân chủ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: mchuTChu
          }
        },
        {
          "@type": "Question",
          name: "Tiết khí của của lá số?",
          acceptedAnswer: {
            "@type": "Answer",
            text: mTietKhi
          }
        }
      ]
    }),
    [fagTitle, ls.dtb.sn.y, lunaCC, tienthien, mchuTChu, mTietKhi]
  );
  const colorMenh = `color${LTHG_HH[ls.dtb.bs.y[2]]}`;
  const mDaiVan = ls.aIdx.aid0;
  const drawChinhTinh = (sb) => {
    return /* @__PURE__ */ jsx("div", { className: "w-full text-center font-bold uppercase", children: sb.length === 0 ? /* @__PURE__ */ jsx(Fragment, { children: "Vô Chính Diệu" }) : /* @__PURE__ */ jsx("div", { className: "m-1", children: sb.map((idStar) => /* @__PURE__ */ jsx("div", { className: "text-center text-[16px]", children: /* @__PURE__ */ jsx("strong", { className: `color${SM[idStar].hh}`, children: SMI[idStar] }) }, idStar.toString())) }) });
  };
  const drawPhuTinh = (ss) => {
    const { ssZoneLeft, ssZoneRight, starVTS } = processStarData(ss);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "grid w-full grid-cols-2 text-xs max-md:text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "", children: ssZoneLeft.map((idStar) => /* @__PURE__ */ jsx("div", { className: "text-left", children: /* @__PURE__ */ jsx("span", { className: `color${SM[idStar].hh} ${SM[idStar].iptt ?? false ? "font-bold" : "font-normal"}`, children: SMI[idStar] }) }, idStar.toString())) }),
        /* @__PURE__ */ jsx("div", { className: "", children: ssZoneRight.map((idStar) => /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx("span", { className: `color${SM[idStar].hh} ${SM[idStar].iptt ?? false ? "font-bold" : "font-normal"}`, children: SMI[idStar] }) }, idStar.toString())) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-auto w-full text-center", children: SMI[starVTS] })
    ] });
  };
  const drawAreaName = (name, cung, showOrgin = true) => {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap rounded-xl border-2 bg-[#f8f4ee] p-2", children: [
      /* @__PURE__ */ jsxs("h3", { className: "mb-5 w-full text-center font-bold", suppressHydrationWarning: true, children: [
        /* @__PURE__ */ jsx("b", { children: name }),
        " ",
        showOrgin ? /* @__PURE__ */ jsxs(Fragment, { children: [
          "- ",
          /* @__PURE__ */ jsxs("span", { children: [
            AREA_NAME[cung.ai],
            " gốc"
          ] }),
          " "
        ] }) : "",
        " ",
        "- ",
        CHI[cung.ci]
      ] }),
      drawChinhTinh(cung.sb),
      drawPhuTinh(cung.ss)
    ] });
  };
  const showMenhTienThien = () => {
    if (ls.yeo >= ls.cid) return /* @__PURE__ */ jsx(Fragment, { children: drawAreaName("Mệnh", ls.ars[ls.am], false) });
    return /* @__PURE__ */ jsx(Fragment, {});
  };
  const showDaiVan = () => {
    if (ls.yeo >= ls.cid) return /* @__PURE__ */ jsx(Fragment, { children: drawAreaName("Mệnh đại vận", ls.ars[mDaiVan], false) });
    return /* @__PURE__ */ jsx(Fragment, {});
  };
  const menhLuuNien = () => {
    return /* @__PURE__ */ jsx(Fragment, { children: drawAreaName("Mệnh lưu niên", ls.ars[lunaCCView.y[1]], false) });
  };
  const tieuVanCung = () => {
    return /* @__PURE__ */ jsx(Fragment, { children: drawAreaName("Tiểu vận", ls.ars[ls.aIdx.lynpc], false) });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      `Thông tin lá số ${ls.dtb.sn.y} ${lunaCC.y} tháng ${lunaCC.m} ngày ${lunaCC.d} giờ ${lunaCC.h} dương lịch ${ls.dtb.sn.y}`,
      /* @__PURE__ */ jsx("br", {}),
      " Giới tính",
      /* @__PURE__ */ jsx("b", { children: baseIf.adage }),
      ",",
      /* @__PURE__ */ jsx("b", { children: baseIf.ad }),
      " bản mệnh là ",
      /* @__PURE__ */ jsx("strong", { className: colorMenh, children: baseIf.hmenh }),
      " cục",
      /* @__PURE__ */ jsx("strong", { children: baseIf.cuc }),
      ",",
      baseIf.sk,
      ", thân cư ",
      baseIf.tcu
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-10 text-center py-5 font-bold", children: [
      "Đồ hình Tử Vi cư ",
      /* @__PURE__ */ jsx("b", { children: CHI[ls.aIdx.s0] }),
      " - Cung mệnh tại ",
      /* @__PURE__ */ jsx("b", { className: colorMenh, children: CHI[ls.am] })
    ] }),
    /* @__PURE__ */ jsx("h4", { className: "mb-5 hidden text-[18px] font-bold", children: "Mệnh vận" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-10 hidden grid-cols-4 gap-3 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1", children: [
      showMenhTienThien(),
      showDaiVan(),
      menhLuuNien(),
      tieuVanCung()
    ] }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } })
  ] });
};
const PageContentStatic$1 = React.memo(PageContentStatic);

export { PageContentStatic$1 as default };
