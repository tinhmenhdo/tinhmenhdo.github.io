import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useMemo } from 'react';
import { I as ICHING } from './Dn_1HrqL.js';
import { _ as AREA_NAME_FULL, A as AREA_NAME, $ as PHIHOA_SYMBOL1 } from './DHWZEsDM.js';

const QueItem = React.memo(({ que, areaNames }) => {
  const [queIndex, tuHoaBuild] = que;
  const aQue = ICHING[queIndex];
  const title = useMemo(
    () => `Ý nghĩa quẻ: ${aQue[2]} - [${PHIHOA_SYMBOL1[tuHoaBuild[0]]}${PHIHOA_SYMBOL1[tuHoaBuild[1]]}${PHIHOA_SYMBOL1[tuHoaBuild[2]]}] - [${areaNames[0]} ${areaNames[1]} ${areaNames[2]}]`,
    [aQue, tuHoaBuild, areaNames]
  );
  return /* @__PURE__ */ jsxs("li", { className: "queItem group", title, children: [
    /* @__PURE__ */ jsx("h4", { className: "queName", children: aQue[0] }),
    /* @__PURE__ */ jsxs("div", { className: "queMean", children: [
      queIndex + 1,
      " ",
      /* @__PURE__ */ jsx("h4", { className: "block w-full font-normal", children: aQue[1] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "queExpl group-hover:opacity-95", children: [
      /* @__PURE__ */ jsx("div", { className: `colorHoa${tuHoaBuild[0]} queTuhoa`, children: PHIHOA_SYMBOL1[tuHoaBuild[0]] }),
      /* @__PURE__ */ jsx("div", { className: `colorHoa${tuHoaBuild[1]} queTuhoa`, children: PHIHOA_SYMBOL1[tuHoaBuild[1]] }),
      /* @__PURE__ */ jsx("div", { className: `colorHoa${tuHoaBuild[2]} queTuhoa`, children: PHIHOA_SYMBOL1[tuHoaBuild[2]] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "queExpl2 group-hover:opacity-95", children: [
      /* @__PURE__ */ jsx("div", { className: "queBuild", children: areaNames[0].toLowerCase() }),
      /* @__PURE__ */ jsx("div", { className: "queBuild", children: areaNames[1].toLowerCase() }),
      /* @__PURE__ */ jsx("div", { className: "queBuild", children: areaNames[2].toLowerCase() })
    ] })
  ] });
});
QueItem.displayName = "QueItem";
const BatQuaiMenhTungBo = ({ ls }) => {
  const queExplanationContent = useMemo(
    () => /* @__PURE__ */ jsx("div", { className: "flex flex-wrap", children: ls.ars.map((cung, index) => /* @__PURE__ */ jsx("div", { children: cung.que.length > 0 && /* @__PURE__ */ jsxs("div", { className: "que", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-2 font-bold", children: AREA_NAME_FULL[cung.ai] }),
      /* @__PURE__ */ jsx("ul", { className: "flex flex-wrap", children: cung.que.map((arrQue, queIndex) => {
        const wayRun = arrQue[2];
        const areaNames = wayRun.map((idx) => AREA_NAME[ls.ars[idx].ai]);
        return /* @__PURE__ */ jsx(QueItem, { que: arrQue, areaNames, index: queIndex }, `qu${queIndex}`);
      }) })
    ] }) }, `ars${index}`)) }),
    [ls.ars]
  );
  return /* @__PURE__ */ jsxs("section", { className: "mb-4 px-2 sm:px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-4 border-b border-dashed border-gray-300 pb-1 text-2xl font-bold", children: "Bát quái mê tung bộ" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 text-sm", children: [
      "(Tham khảo:",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://alexalpha.sapopage.com/?utm_source=tinhmenhdo.com",
          className: "hover:text-orange-500",
          title: "Khâm Thiên Tứ Hóa Dễ Hiểu",
          children: "Khâm Thiên Tứ Hóa Dễ Hiểu)"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-10", children: queExplanationContent })
  ] });
};
const BatQuaiMenhTungBo_default = React.memo(BatQuaiMenhTungBo);

export { BatQuaiMenhTungBo_default as default };
