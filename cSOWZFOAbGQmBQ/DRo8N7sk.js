import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useMemo } from 'react';
import { a as ICHING } from './CCSl11Jl.js';
import { P as PHIHOA_SYMBOL1, A as AREA_NAME_FULL, j as AREA_NAME } from './CpcYxhgG.js';

const QueItem = React.memo(({ que, areaNames }) => {
  const [queIndex, tuHoaBuild] = que;
  const aQue = ICHING[queIndex];
  const title = useMemo(
    () => `Ý nghĩa quẻ: ${aQue[2]} - [${PHIHOA_SYMBOL1[tuHoaBuild[0]]}${PHIHOA_SYMBOL1[tuHoaBuild[1]]}${PHIHOA_SYMBOL1[tuHoaBuild[2]]}] - [${areaNames[0]} ${areaNames[1]} ${areaNames[2]}]`,
    [aQue, tuHoaBuild, areaNames]
  );
  return /* @__PURE__ */ jsxs(
    "li",
    {
      className: "group relative flex w-[76px] flex-col items-center justify-center rounded-xl border border-amber-900/10 bg-orange-50/50 p-2 pb-1 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-orange-100 hover:shadow-md",
      title,
      children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-1 flex items-center justify-center font-serif text-3xl leading-none text-amber-800", children: aQue[0] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center text-[11px] font-medium text-stone-700", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] text-amber-900/70", children: queIndex + 1 }),
          /* @__PURE__ */ jsx("h4", { className: "block w-full leading-tight font-normal", children: aQue[1] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-1 left-1.5 flex flex-col text-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: [
          /* @__PURE__ */ jsx("div", { className: `colorHoa${tuHoaBuild[0]} leading-none`, children: PHIHOA_SYMBOL1[tuHoaBuild[0]] }),
          /* @__PURE__ */ jsx("div", { className: `colorHoa${tuHoaBuild[1]} mt-0.5 leading-none`, children: PHIHOA_SYMBOL1[tuHoaBuild[1]] }),
          /* @__PURE__ */ jsx("div", { className: `colorHoa${tuHoaBuild[2]} mt-0.5 leading-none`, children: PHIHOA_SYMBOL1[tuHoaBuild[2]] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-1 right-1.5 flex flex-col text-right text-[9px] text-stone-500 capitalize opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: [
          /* @__PURE__ */ jsx("div", { className: "leading-none", children: areaNames[0].toLowerCase() }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 leading-none", children: areaNames[1].toLowerCase() }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 leading-none", children: areaNames[2].toLowerCase() })
        ] })
      ]
    }
  );
});
QueItem.displayName = "QueItem";
const BatQuaiMenhTungBo = ({ ls }) => {
  const queExplanationContent = useMemo(
    () => /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", children: ls.ars.map((cung, index) => /* @__PURE__ */ jsx(React.Fragment, { children: cung.que.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col rounded-xl border border-amber-900/10 bg-white p-4 shadow-sm transition-all hover:shadow-md", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 border-b border-amber-900/10 pb-2 font-serif text-lg font-bold text-amber-900", children: AREA_NAME_FULL[cung.ai] }),
      /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap gap-2", children: cung.que.map((arrQue, queIndex) => {
        const wayRun = arrQue[2];
        const areaNames = wayRun.map((idx) => AREA_NAME[ls.ars[idx].ai]);
        return /* @__PURE__ */ jsx(QueItem, { que: arrQue, areaNames, index: queIndex }, `qu${queIndex}`);
      }) })
    ] }) }, `ars${index}`)) }),
    [ls.ars]
  );
  return /* @__PURE__ */ jsx("section", { className: "mx-auto mb-8 w-full px-2 sm:px-6", children: /* @__PURE__ */ jsxs("details", { className: "group relative overflow-hidden rounded-xl border-4 border-double border-amber-900/20 bg-[#FCFBF8] shadow-sm transition-all duration-300 hover:shadow-md [&_summary::-webkit-details-marker]:hidden", children: [
    /* @__PURE__ */ jsxs("summary", { className: "flex cursor-pointer flex-col p-4 pb-3 transition-colors outline-none select-none hover:bg-amber-50/50 sm:p-6 sm:pb-4 lg:p-8 lg:pb-5", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-amber-700/30 bg-white text-amber-900 shadow-sm", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1.5,
              d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            }
          ) }) }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-xl font-bold text-amber-900 md:text-2xl", children: "Bát Quái Mê Tung Bộ" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-amber-900 transition-transform duration-300 group-open:rotate-180", children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 pl-[52px] font-serif text-[13px] text-stone-600 italic sm:text-[14px]", children: [
        "(Tham khảo từ sách:",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://alexalpha.sapopage.com/?utm_source=tinhmenhdo.com",
            className: "font-medium text-amber-700 underline decoration-amber-700/30 underline-offset-4 transition-colors hover:text-amber-600",
            title: "Khâm Thiên Tứ Hóa Dễ Hiểu",
            onClick: (e) => e.stopPropagation(),
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Khâm Thiên Tứ Hóa Dễ Hiểu"
          }
        ),
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-dashed border-amber-900/20 bg-[#FCFBF8] p-4 pt-4 sm:p-6 sm:pt-6 lg:p-8 lg:pt-8", children: /* @__PURE__ */ jsx("div", { className: "", children: queExplanationContent }) })
  ] }) });
};
const BatQuaiMenhTungBo$1 = React.memo(BatQuaiMenhTungBo);

export { BatQuaiMenhTungBo$1 as default };
