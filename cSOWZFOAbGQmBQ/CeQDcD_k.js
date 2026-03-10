import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React, { useRef, useEffect } from 'react';
import { Z as ZolkName, G as GETHOA, c as CAN_HH, e as CHI_HH, a as CAN, C as CHI, K as THAP, H as HH, g as LTHG_HH, j as AREA_NAME, n as SM, O as containsNumber, J as CHI_3HH } from './CpcYxhgG.js';
import html2canvas from 'html2canvas';
import Swal from './D3UtOy0X.js';
import withReactContent from './Sonx4fQL.js';

const TRANSFORMATION_COLORS$2 = {
  0: { stroke: "rgb(3 140 0)", fill: "rgba(114,250,112,0.9)" },
  // Lộc - Green
  1: { stroke: "rgb(110 8 136)", fill: "rgba(227,100,255,0.9)" },
  // Quyền - Purple
  2: { stroke: "rgb(14 124 202)", fill: "rgba(77,182,255,0.9)" },
  // Khoa - Blue
  3: { stroke: "rgb(217 4 4)", fill: "rgba(246,66,66,0.9)" }
  // Kị - Red
};
const ZONE_POSITIONS$2 = [
  { col: 3, row: 4 },
  // Zone 0 - Bottom Right Center
  { col: 2, row: 4 },
  // Zone 1 - Bottom Center Left
  { col: 1, row: 4 },
  // Zone 2 - Bottom Left
  { col: 1, row: 3 },
  // Zone 3 - Middle Left Bottom
  { col: 1, row: 2 },
  // Zone 4 - Middle Left Top
  { col: 1, row: 1 },
  // Zone 5 - Top Left
  { col: 2, row: 1 },
  // Zone 6 - Top Center Left
  { col: 3, row: 1 },
  // Zone 7 - Top Center Right
  { col: 4, row: 1 },
  // Zone 8 - Top Right
  { col: 4, row: 2 },
  // Zone 9 - Middle Right Top
  { col: 4, row: 3 },
  // Zone 10 - Middle Right Bottom
  { col: 4, row: 4 }
  // Zone 11 - Bottom Right
];
function getOppositeZone$1(zoneIdx) {
  return (zoneIdx + 6) % 12;
}
function isCornerChi$1(chiIdx) {
  return chiIdx === 2 || chiIdx === 8 || chiIdx === 5 || chiIdx === 11;
}
function getZoneEdgePoint$1(zoneIdx, chiIdx, wSquare, hSquare, offset = 0) {
  const pos = ZONE_POSITIONS$2[zoneIdx];
  const zoneX = (pos.col - 1) * wSquare;
  const zoneY = (pos.row - 1) * hSquare;
  const isCorner = isCornerChi$1(chiIdx);
  let x = zoneX + wSquare / 2;
  let y = zoneY + hSquare / 2;
  let usedCornerVertex = false;
  if (isCorner) {
    if (chiIdx === 2) {
      x = zoneX + wSquare;
      y = zoneY + offset;
      usedCornerVertex = true;
    } else if (chiIdx === 5) {
      x = zoneX + wSquare;
      y = zoneY + hSquare + offset;
      usedCornerVertex = true;
    } else if (chiIdx === 8) {
      x = zoneX + offset;
      y = zoneY + hSquare;
      usedCornerVertex = true;
    } else if (chiIdx === 11) {
      x = zoneX + offset;
      y = zoneY;
      usedCornerVertex = true;
    }
  }
  if (!usedCornerVertex) {
    if (pos.col === 1) {
      x = zoneX + wSquare;
      y = zoneY + hSquare / 2 + offset;
    } else if (pos.col === 4) {
      x = zoneX;
      y = zoneY + hSquare / 2 + offset;
    } else if (pos.row === 1) {
      x = zoneX + wSquare / 2 + offset;
      y = zoneY + hSquare;
    } else if (pos.row === 4) {
      x = zoneX + wSquare / 2 + offset;
      y = zoneY;
    }
  }
  return { x, y };
}
function createArrowMarker$1(transformType, id) {
  const color = TRANSFORMATION_COLORS$2[transformType];
  return /* @__PURE__ */ jsx("marker", { id, markerWidth: "10", markerHeight: "10", refX: "9", refY: "3", orient: "auto", markerUnits: "strokeWidth", children: /* @__PURE__ */ jsx("path", { d: "M0,0 L0,6 L9,3 z", fill: color.stroke }) });
}
function FlyingStarsHtml({ ls, wSquare, hSquare }) {
  if (!ls || !ls.ars || !ls.cfg) {
    return null;
  }
  const typeLs = ls.cfg[1] || 0;
  const connections = [];
  const zoneLevels = Array(12).fill(0);
  ls.ars.forEach((zone, idx) => {
    if (!zone.cno || zone.cno.length < 4) return;
    const oppositeIdx = getOppositeZone$1(idx);
    if (idx === 0) {
      console.log("[FlyingStars] Zone 0:");
      console.log("  zone.cno:", zone.cno);
      console.log("  oppositeIdx:", oppositeIdx);
    }
    for (let transformType = 0; transformType <= 3; transformType++) {
      const targetIdx = zone.cno[transformType];
      const isDraw = targetIdx === oppositeIdx;
      if (isDraw) {
        const isChuyenKi = transformType === 3 && zone.zolk?.[3]?.[ZolkName.isMoveKi] === 1;
        const isChuyenLoc = transformType === 0 && zone.zolk?.[0]?.[ZolkName.isMoveLoc] === 1;
        const isDashed = (isChuyenKi || isChuyenLoc && transformType === 3) && (typeLs === 0 || typeLs === 1 || typeLs === 4 || typeLs === 8);
        const levelDoiCung = zoneLevels[oppositeIdx];
        const levelCurrentCung = zoneLevels[idx];
        let levelUse = levelCurrentCung;
        if (levelDoiCung > levelCurrentCung) {
          zoneLevels[idx] = levelDoiCung;
          levelUse = levelDoiCung;
        }
        connections.push({
          from: idx,
          to: targetIdx,
          type: transformType,
          isDashed,
          level: levelUse
        });
        zoneLevels[idx] = levelUse + 1;
        zoneLevels[oppositeIdx] = zoneLevels[idx];
        if (idx === 0) {
          console.log(`  ✓ Found hướng tâm: type=${transformType}, to=${targetIdx}, level=${levelUse}`);
        }
      }
    }
  });
  console.log("[FlyingStars] Total connections:", connections.length);
  const svgWidth = wSquare * 4;
  const svgHeight = hSquare * 4;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: svgWidth,
        height: svgHeight,
        pointerEvents: "none",
        zIndex: 3
        // Highest - flying stars should be visible on top
      },
      children: [
        /* @__PURE__ */ jsx("defs", { children: [0, 1, 2, 3].map((type) => createArrowMarker$1(type, `arrow-${type}`)) }),
        connections.map((conn, i) => {
          const sourceZone = ls.ars[conn.from];
          const targetZone = ls.ars[conn.to];
          const sourceChiIdx = sourceZone?.ci || 0;
          const targetChiIdx = targetZone?.ci || 0;
          const padArrow = 17;
          const offset = conn.level * padArrow;
          const fromPoint = getZoneEdgePoint$1(conn.from, sourceChiIdx, wSquare, hSquare, offset);
          const toPoint = getZoneEdgePoint$1(conn.to, targetChiIdx, wSquare, hSquare, offset);
          const color = TRANSFORMATION_COLORS$2[conn.type];
          const pathData = `M ${fromPoint.x},${fromPoint.y} L ${centerX},${centerY} L ${toPoint.x},${toPoint.y}`;
          let strokeWidth = 2.5;
          if (typeLs === 4) {
            strokeWidth = 3;
          }
          return /* @__PURE__ */ jsx(
            "path",
            {
              d: pathData,
              stroke: color.stroke,
              strokeWidth,
              fill: "none",
              opacity: "0.8",
              markerEnd: `url(#arrow-${conn.type})`,
              strokeDasharray: conn.isDashed ? "12,3" : void 0
            },
            `${conn.from}-${conn.to}-${conn.type}-${i}`
          );
        })
      ]
    }
  );
}

const TRANSFORM_BADGES = {
  [0 /* Loc */]: "A",
  [1 /* Quyen */]: "B",
  [2 /* Khoa */]: "C",
  [3 /* Ki */]: "D"
};
function extractCanHoa(ls) {
  const typeLs = ls.cfg[1] || 0;
  const canHoaArray = GETHOA(typeLs);
  console.log("[extractCanHoa] typeLs:", typeLs);
  console.log("[extractCanHoa] canHoaArray from GETHOA:", canHoaArray);
  const zoneMap = {};
  const starMap = {};
  for (let i = 0; i < 12; i++) {
    zoneMap[i] = [];
  }
  ls.ars.forEach((zone, idx) => {
    const sourceCan = zone.cn;
    const canStars = canHoaArray[sourceCan];
    if (idx === 0) {
      console.log("[extractCanHoa] Zone 0:");
      console.log("  zone.cn:", sourceCan);
      console.log("  canStars:", canStars);
    }
    if (!canStars) {
      console.warn(`No canHoa data for Can ${sourceCan} in zone ${idx}`);
      return;
    }
    for (let transformType = 0; transformType <= 3; transformType++) {
      const starId = canStars[transformType];
      const targetZoneIdx = zone.cno?.[transformType];
      if (typeof targetZoneIdx !== "number") {
        continue;
      }
      const transformInfo = {
        type: transformType,
        starId,
        sourceZoneIdx: idx,
        targetZoneIdx,
        sourceCan,
        isSelfTransform: targetZoneIdx === idx,
        badge: TRANSFORM_BADGES[transformType]
      };
      zoneMap[idx].push(transformInfo);
      if (!starMap[starId]) {
        starMap[starId] = [];
      }
      starMap[starId].push(transformInfo);
    }
  });
  return {
    zoneMap,
    starMap,
    canHoaArray
  };
}

const TRANSFORMATION_COLORS$1 = {
  0: { stroke: "rgb(3 140 0)", fill: "rgba(114,250,112,0.9)" },
  // Lộc - Green
  1: { stroke: "rgb(110 8 136)", fill: "rgba(227,100,255,0.9)" },
  // Quyền - Purple
  2: { stroke: "rgb(14 124 202)", fill: "rgba(77,182,255,0.9)" },
  // Khoa - Blue
  3: { stroke: "rgb(217 4 4)", fill: "rgba(246,66,66,0.9)" }
  // Kị - Red
};
const ZONE_POSITIONS$1 = [
  { col: 3, row: 4 },
  // Zone 0
  { col: 2, row: 4 },
  // Zone 1
  { col: 1, row: 4 },
  // Zone 2
  { col: 1, row: 3 },
  // Zone 3
  { col: 1, row: 2 },
  // Zone 4
  { col: 1, row: 1 },
  // Zone 5
  { col: 2, row: 1 },
  // Zone 6
  { col: 3, row: 1 },
  // Zone 7
  { col: 4, row: 1 },
  // Zone 8
  { col: 4, row: 2 },
  // Zone 9
  { col: 4, row: 3 },
  // Zone 10
  { col: 4, row: 4 }
  // Zone 11
];
function isCornerChi(chiIdx) {
  return chiIdx === 2 || chiIdx === 8 || chiIdx === 5 || chiIdx === 11;
}
function getZoneEdgePoint(zoneIdx, chiIdx, wSquare, hSquare, offset = 0) {
  const pos = ZONE_POSITIONS$1[zoneIdx];
  const zoneX = (pos.col - 1) * wSquare;
  const zoneY = (pos.row - 1) * hSquare;
  const isCorner = isCornerChi(chiIdx);
  let x = zoneX + wSquare / 2;
  let y = zoneY + hSquare / 2;
  let usedCornerVertex = false;
  if (isCorner) {
    if (chiIdx === 2) {
      x = zoneX + wSquare;
      y = zoneY + offset;
      usedCornerVertex = true;
    } else if (chiIdx === 5) {
      x = zoneX + wSquare;
      y = zoneY + hSquare + offset;
      usedCornerVertex = true;
    } else if (chiIdx === 8) {
      x = zoneX + offset;
      y = zoneY + hSquare;
      usedCornerVertex = true;
    } else if (chiIdx === 11) {
      x = zoneX + offset;
      y = zoneY;
      usedCornerVertex = true;
    }
  }
  if (!usedCornerVertex) {
    if (pos.col === 1) {
      x = zoneX + wSquare;
      y = zoneY + hSquare / 2 + offset;
    } else if (pos.col === 4) {
      x = zoneX;
      y = zoneY + hSquare / 2 + offset;
    } else if (pos.row === 1) {
      x = zoneX + wSquare / 2 + offset;
      y = zoneY + hSquare;
    } else if (pos.row === 4) {
      x = zoneX + wSquare / 2 + offset;
      y = zoneY;
    }
  }
  return { x, y };
}
function getOppositeZone(zoneIdx) {
  return (zoneIdx + 6) % 12;
}
function createCurvedPath(startX, startY, endX, endY, centerX, centerY, isSelfTransform) {
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  const toCenterX = centerX - midX;
  const toCenterY = centerY - midY;
  const toCenterLength = Math.sqrt(toCenterX * toCenterX + toCenterY * toCenterY);
  const dx = endX - startX;
  const dy = endY - startY;
  const lineLength = Math.sqrt(dx * dx + dy * dy);
  const offsetFactor = lineLength * 0.2;
  const controlX = midX + toCenterX / toCenterLength * offsetFactor;
  const controlY = midY + toCenterY / toCenterLength * offsetFactor;
  return `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
}
function createArrowMarker(transformType, id) {
  const color = TRANSFORMATION_COLORS$1[transformType];
  return /* @__PURE__ */ jsx("marker", { id, markerWidth: "10", markerHeight: "10", refX: "9", refY: "3", orient: "auto", markerUnits: "strokeWidth", children: /* @__PURE__ */ jsx("path", { d: "M0,0 L0,6 L9,3 z", fill: color.stroke }) });
}
function PhiHoaArrowsHtml({ ls, wSquare, hSquare }) {
  if (!ls || !ls.ars || !ls.cfg) {
    return null;
  }
  const typeLs = ls.cfg[1] || 0;
  const typePhiHoa = ls.cfg[2] || 3;
  if (typeLs === 3 || ![0, 1, 4, 6, 8].includes(typeLs)) {
    return null;
  }
  extractCanHoa(ls);
  const arrows = [];
  const svgWidth = wSquare * 4;
  const svgHeight = hSquare * 4;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const arrowsFromZone = /* @__PURE__ */ new Map();
  const arrowsToZone = /* @__PURE__ */ new Map();
  ls.ars.forEach((zone, idx) => {
    if (!zone.cno || zone.cno.length < 4) return;
    for (let dr = 0; dr <= 3; dr++) {
      const targetZoneIdx = zone.cno[dr];
      if (targetZoneIdx < 0 || targetZoneIdx === zone.ci) continue;
      const isLocChuyenKi = dr === 0 && zone.zolk?.[0]?.[ZolkName.isMoveLoc] === 1;
      const isKiChuyenKi = dr === 3 && zone.zolk?.[3]?.[ZolkName.isMoveKi] === 1;
      const isDraw = targetZoneIdx >= 0;
      const shouldConsiderDrawing = isDraw && typeLs !== 4 || typeLs === 4 && typePhiHoa === dr && isDraw || typeLs === 1 && typePhiHoa === dr && isDraw || typeLs === 8 && typePhiHoa === dr && isDraw || isDraw && isLocChuyenKi && dr === 3 && typePhiHoa !== 1 && typePhiHoa !== 2;
      if (!shouldConsiderDrawing) continue;
      const shouldRender = typePhiHoa === dr || isLocChuyenKi && dr === 3;
      if (!shouldRender) continue;
      const oppositeIdx = getOppositeZone(idx);
      if (targetZoneIdx === oppositeIdx) continue;
      if (isLocChuyenKi && dr === 0 || isKiChuyenKi && dr === 3) continue;
      arrowsFromZone.set(idx, (arrowsFromZone.get(idx) || 0) + 1);
      arrowsToZone.set(targetZoneIdx, (arrowsToZone.get(targetZoneIdx) || 0) + 1);
    }
  });
  const currentArrowFromZone = /* @__PURE__ */ new Map();
  const currentArrowToZone = /* @__PURE__ */ new Map();
  console.log("[PhiHoaArrows] typePhiHoa:", typePhiHoa);
  console.log("[PhiHoaArrows] typeLs:", typeLs);
  ls.ars.forEach((zone, idx) => {
    if (!zone.cno || zone.cno.length < 4) return;
    if (idx === 0) {
      console.log("[PhiHoaArrows] Zone 0:");
      console.log("  zone.cno:", zone.cno);
      console.log("  typePhiHoa:", typePhiHoa);
      console.log("  typeLs:", typeLs);
    }
    for (let dr = 0; dr <= 3; dr++) {
      const targetZoneIdx = zone.cno[dr];
      if (targetZoneIdx < 0 || targetZoneIdx === zone.ci) {
        continue;
      }
      const isLocChuyenKi = dr === 0 && zone.zolk?.[0]?.[ZolkName.isMoveLoc] === 1;
      const isKiChuyenKi = dr === 3 && zone.zolk?.[3]?.[ZolkName.isMoveKi] === 1;
      const isDraw = targetZoneIdx >= 0;
      const shouldConsiderDrawing = isDraw && typeLs !== 4 || typeLs === 4 && typePhiHoa === dr && isDraw || typeLs === 1 && typePhiHoa === dr && isDraw || typeLs === 8 && typePhiHoa === dr && isDraw || isDraw && isLocChuyenKi && dr === 3 && typePhiHoa !== 1 && typePhiHoa !== 2;
      if (!shouldConsiderDrawing) {
        continue;
      }
      const shouldRender = typePhiHoa === dr || isLocChuyenKi && dr === 3;
      if (!shouldRender) {
        continue;
      }
      if (idx === 0) {
        console.log(`  ✓ Drawing phi hóa: dr=${dr}, to=${targetZoneIdx}`);
      }
      const oppositeIdx = getOppositeZone(idx);
      const isOpposite = targetZoneIdx === oppositeIdx;
      if (isLocChuyenKi && dr === 0 || isKiChuyenKi && dr === 3) {
        continue;
      }
      const sourceChiIdx = zone.ci;
      const targetZone = ls.ars[targetZoneIdx];
      const targetChiIdx = targetZone?.ci || 0;
      const totalFromSource = arrowsFromZone.get(idx) || 1;
      const currentFromIdx = currentArrowFromZone.get(idx) || 0;
      currentArrowFromZone.set(idx, currentFromIdx + 1);
      const totalToTarget = arrowsToZone.get(targetZoneIdx) || 1;
      const currentToIdx = currentArrowToZone.get(targetZoneIdx) || 0;
      currentArrowToZone.set(targetZoneIdx, currentToIdx + 1);
      const offsetSpacing = 15;
      const sourceOffset = totalFromSource > 1 ? (currentFromIdx - (totalFromSource - 1) / 2) * offsetSpacing : 0;
      const targetOffset = totalToTarget > 1 ? (currentToIdx - (totalToTarget - 1) / 2) * offsetSpacing : 0;
      const startPoint = getZoneEdgePoint(idx, sourceChiIdx, wSquare, hSquare, sourceOffset);
      const endPoint = getZoneEdgePoint(targetZoneIdx, targetChiIdx, wSquare, hSquare, targetOffset);
      const color = TRANSFORMATION_COLORS$1[dr];
      let pathData;
      if (isOpposite) {
        pathData = `M ${startPoint.x},${startPoint.y} L ${centerX},${centerY} L ${endPoint.x},${endPoint.y}`;
      } else {
        pathData = createCurvedPath(startPoint.x, startPoint.y, endPoint.x, endPoint.y, centerX, centerY);
      }
      let strokeWidth = 0.4;
      let opacity = 0.6;
      let dashArray = void 0;
      if (typeLs === 4 || typeLs === 5) {
        strokeWidth = 1.7;
        opacity = 0.8;
      }
      if (isKiChuyenKi) {
        strokeWidth = 2;
        opacity = 0.8;
        dashArray = "7,3";
      }
      const ngaCungPattern = [true, false, true, true, true, false, false, true, true, false, false, false];
      const isNgaCung = ngaCungPattern[targetZoneIdx];
      if (isNgaCung) {
        strokeWidth = 1.5;
        opacity = 0.7;
      }
      arrows.push(
        /* @__PURE__ */ jsx(
          "path",
          {
            d: pathData,
            stroke: color.stroke,
            strokeWidth,
            fill: "none",
            opacity,
            markerEnd: `url(#phi-arrow-${dr})`,
            strokeDasharray: dashArray
          },
          `phi-${idx}-${targetZoneIdx}-${dr}`
        )
      );
    }
  });
  console.log("[PhiHoaArrows] Total arrows to render:", arrows.length);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: svgWidth,
        height: svgHeight,
        pointerEvents: "none",
        zIndex: 2
        // Higher than FlyingStarsHtml
      },
      children: [
        /* @__PURE__ */ jsx("defs", { children: [0, 1, 2, 3].map((type) => createArrowMarker(type, `phi-arrow-${type}`)) }),
        arrows
      ]
    }
  );
}

function getElementColor$1(elementId) {
  const colors = ["", "", "#031640", "#067b11", "#8b8380", "#e39e25", "#cf233b"];
  return colors[elementId] || "#000";
}
const PILLAR_NAMES = ["Năm", "Tháng", "Ngày", "Giờ"];
function SkyHtml(props) {
  const { ls, className, fontCenter } = props;
  if (!ls.tutru || !ls.tutru.cot) {
    return /* @__PURE__ */ jsx("div", { className: `flex items-center justify-center ${className}`, children: /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "No Four Pillars data" }) });
  }
  const pillars = ls.tutru.cot;
  return /* @__PURE__ */ jsxs("div", { className: `sky-container relative border-2 border-gray-800 bg-white p-4 ${className}`, children: [
    /* @__PURE__ */ jsx("div", { className: "grid h-full grid-cols-4 gap-2", children: pillars.map((pillar, idx) => {
      const canColor = getElementColor$1(CAN_HH[pillar.cn]);
      const chiColor = getElementColor$1(CHI_HH[pillar.ci]);
      return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center border-r px-1 last:border-r-0", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-2 text-xs font-semibold", style: { fontSize: fontCenter }, children: PILLAR_NAMES[idx] }),
        /* @__PURE__ */ jsx("div", { className: "mb-1 text-lg font-bold", style: { color: canColor, fontSize: fontCenter + 6 }, children: CAN[pillar.cn] }),
        /* @__PURE__ */ jsx("div", { className: "mb-2 text-lg font-bold", style: { color: chiColor, fontSize: fontCenter + 6 }, children: CHI[pillar.ci] }),
        pillar.cht !== -1 && /* @__PURE__ */ jsx("div", { className: "mb-1 text-xs", style: { fontSize: fontCenter - 2 }, children: THAP[pillar.cht] }),
        pillar.ctg && pillar.ctg.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-2 space-y-0.5 text-[10px]", style: { fontSize: fontCenter - 2 }, children: pillar.ctg.map((hiddenCan, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
          /* @__PURE__ */ jsx("span", { style: { color: getElementColor$1(CAN_HH[hiddenCan]) }, children: CAN[hiddenCan] }),
          /* @__PURE__ */ jsx("span", { className: "opacity-70", children: pillar.pht && pillar.pht[i] !== void 0 ? THAP[pillar.pht[i]] : "" })
        ] }, i)) })
      ] }, idx);
    }) }),
    ls.dtb && ls.dtb.bs && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-2 left-2 text-[10px] text-gray-500", style: { fontSize: fontCenter - 2 }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "Mệnh ",
        /* @__PURE__ */ jsx("span", { style: { color: getElementColor$1(LTHG_HH[ls.dtb.bs.y[2]]) }, children: HH[LTHG_HH[ls.dtb.bs.y[2]]] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Cục ",
        /* @__PURE__ */ jsx("span", { style: { color: getElementColor$1(ls.cid) }, children: HH[ls.cid] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute right-2 bottom-2 text-[10px] opacity-50", style: { fontSize: fontCenter - 2 }, children: "TinhMenhDo.com" })
  ] });
}

const MySwal = withReactContent(Swal);
function generateFileName(ls, extension = "png") {
  try {
    const solarDate = ls.dtb.sn;
    const year = solarDate.y.toString();
    const month = solarDate.m.toString().padStart(2, "0");
    const day = solarDate.d.toString().padStart(2, "0");
    const hour = solarDate.h.toString().padStart(2, "0");
    const minute = (solarDate.i || 0).toString().padStart(2, "0");
    const gender = ls.sx === 1 ? "nam" : "nu";
    return `tinhmenhdo-html-${gender}-${year}.${month}.${day}-${hour}.${minute}.${extension}`;
  } catch (error) {
    console.error("Error generating filename:", error);
    return `tinhmenhdo-html-${Date.now()}.${extension}`;
  }
}
function isIOSDevice() {
  if (typeof window === "undefined") return false;
  const userAgent = window.navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isMacSafari = /Mac OS X/.test(userAgent) && /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  return isIOS || isMacSafari;
}
function useExportHtml(chartRef, ls) {
  const exportToImage = async (scale = 2) => {
    if (!chartRef.current) {
      console.error("Chart ref is null");
      return null;
    }
    try {
      const canvas = await html2canvas(chartRef.current, {
        scale,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        allowTaint: true,
        imageTimeout: 0
      });
      return canvas.toDataURL("image/png", 1);
    } catch (error) {
      console.error("Error exporting to image:", error);
      MySwal.fire({
        title: "Lỗi",
        text: "Không thể xuất ảnh lá số. Vui lòng thử lại.",
        icon: "error"
      });
      return null;
    }
  };
  const copyImageToClipboard = async () => {
    try {
      const imageData = await exportToImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      if (isIOSDevice()) {
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(`
            <html>
              <head>
                <title>Lá số Tử Vi - TinhMenhDo.com</title>
                <style>
                  body { margin: 0; padding: 20px; text-align: center; background: #f5f5f5; }
                  .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 12px; }
                  img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
                  .instructions { margin-top: 20px; padding: 15px; background: #e3f2fd; color: #1565c0; border-radius: 8px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <img src="${imageData}" alt="Lá số Tử Vi" />
                  <div class="instructions">
                    <p><strong>Hướng dẫn lưu ảnh:</strong></p>
                    <p>Nhấn và giữ vào ảnh, sau đó chọn "Lưu vào Ảnh"</p>
                  </div>
                </div>
              </body>
            </html>
          `);
          newWindow.document.close();
        }
        MySwal.fire({
          title: "Thông báo",
          text: "Lá số đã mở trong tab mới. Vui lòng nhấn và giữ vào ảnh để lưu.",
          icon: "info"
        });
        return;
      }
      const res = await fetch(imageData);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      MySwal.fire({
        title: "Thành công",
        text: "Đã copy lá số vào clipboard!",
        icon: "success"
      });
    } catch (error) {
      console.error("Error copying image:", error);
      MySwal.fire({
        title: "Lỗi",
        text: error instanceof Error ? error.message : "Có lỗi xảy ra khi copy lá số",
        icon: "error"
      });
    }
  };
  const downloadImage = async (fileName) => {
    try {
      const imageData = await exportToImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      const link = document.createElement("a");
      link.download = fileName || generateFileName(ls, "png");
      link.href = imageData;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      MySwal.fire({
        title: "Thành công",
        text: "Đã tải xuống lá số!",
        icon: "success",
        timer: 2e3
      });
    } catch (error) {
      console.error("Error downloading image:", error);
      MySwal.fire({
        title: "Lỗi",
        text: error instanceof Error ? error.message : "Có lỗi xảy ra khi tải lá số",
        icon: "error"
      });
    }
  };
  const exportImageNote = async () => {
    try {
      const imageData = await exportToImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      if (isIOSDevice()) {
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(`
            <html>
              <head><title>Lá số Tử Vi</title></head>
              <body style="margin:0;padding:20px;text-align:center;">
                <img src="${imageData}" style="max-width:100%;" />
                <p style="margin-top:20px;color:#666;">Nhấn và giữ vào ảnh để lưu</p>
              </body>
            </html>
          `);
          newWindow.document.close();
        }
        const result2 = await MySwal.fire({
          title: "Thông báo",
          text: "Lá số đã mở trong tab mới. Bạn có muốn chuyển sang tab Note không?",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Chuyển sang Note",
          cancelButtonText: "Đóng"
        });
        if (result2.isConfirmed) {
          window.open("/note?export=1", "_blank");
        }
        return;
      }
      const res = await fetch(imageData);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      const result = await MySwal.fire({
        title: "Thành công",
        text: "Đã copy lá số. Bạn có muốn chuyển sang tab Note không?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Chuyển sang Note",
        cancelButtonText: "Đóng"
      });
      if (result.isConfirmed) {
        window.open("/note?export=1", "_blank");
      }
    } catch (error) {
      console.error("Error exporting for notes:", error);
      MySwal.fire({
        title: "Lỗi",
        text: error instanceof Error ? error.message : "Có lỗi xảy ra",
        icon: "error"
      });
    }
  };
  return {
    exportToImage,
    copyImageToClipboard,
    downloadImage,
    exportImageNote
  };
}

function getElementColor(elementId) {
  const colors = ["", "", "#031640", "#067b11", "#8b8380", "#e39e25", "#cf233b"];
  return colors[elementId] || "#000";
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function renderTuHoaArrow(transformType, startX, startY, direction, containerWidth, containerHeight) {
  const colors = [
    "rgb(3 140 0)",
    // Lộc - Green
    "rgb(110 8 136)",
    // Quyền - Purple
    "rgb(14 124 202)",
    // Khoa - Blue
    "rgb(217 4 4)"
    // Kị - Red
  ];
  const color = colors[transformType];
  const x1 = startX;
  const y1 = startY;
  let x2 = startX;
  let y2 = startY;
  const arrowLength = 25;
  switch (direction) {
    case "bottom":
      y2 = containerHeight + arrowLength;
      break;
    case "top":
      y2 = -arrowLength;
      break;
    case "left":
      x2 = -arrowLength;
      break;
    case "right":
      x2 = containerWidth + arrowLength;
      break;
  }
  return /* @__PURE__ */ jsx(
    "line",
    {
      x1,
      y1,
      x2,
      y2,
      stroke: color,
      strokeWidth: "1.5",
      opacity: "0.8",
      markerEnd: `url(#tu-hoa-arrow-${transformType})`
    }
  );
}
const TRANSFORMATION_COLORS = {
  loc: { bg: "rgba(114,250,112,0.9)", border: "rgb(3 140 0)", text: "rgb(3 140 0)" },
  // Green
  quyen: { bg: "rgba(227,100,255,0.9)", border: "rgb(110 8 136)", text: "rgb(110 8 136)" },
  // Purple
  khoa: { bg: "rgba(77,182,255,0.9)", border: "rgb(14 124 202)", text: "rgb(14 124 202)" },
  // Blue
  ki: { bg: "rgba(246,66,66,0.9)", border: "rgb(217 4 4)", text: "rgb(217 4 4)" }
  // Red
};
function getTransformationColor(type) {
  const colors = [
    TRANSFORMATION_COLORS.loc,
    TRANSFORMATION_COLORS.quyen,
    TRANSFORMATION_COLORS.khoa,
    TRANSFORMATION_COLORS.ki
  ];
  return colors[type] || TRANSFORMATION_COLORS.loc;
}
function ZoneHtml(props) {
  const { zone, idx, ls, wSquare, hSquare, config } = props;
  if (!zone) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center border border-gray-300 bg-white/50 p-2", children: /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: "No data" }) });
  }
  const canHoaData = extractCanHoa(ls);
  const typeLs = ls.cfg[1] || 0;
  const zoneName = AREA_NAME[zone.ai];
  const napColor = getElementColor(LTHG_HH[zone.na]);
  const triangleColor = getElementColor(CHI_3HH[idx]);
  const triangleOpacity = CHI_3HH[idx] === 2 ? 0.8 : 0.6;
  const hasDaiVan = ls.tutru?.dv?.some((dv) => {
    const dvIndex = ls.tutru.dv.indexOf(dv);
    const startIdx = ls.ad > 0 ? ls.am : ls.at;
    const moves = ls.ad > 0 ? dvIndex : -dvIndex;
    const targetIdx = (startIdx + moves + 12) % 12;
    return targetIdx === idx;
  });
  hasDaiVan ? ls.tutru.dv.find((dv) => {
    const dvIndex = ls.tutru.dv.indexOf(dv);
    const startIdx = ls.ad > 0 ? ls.am : ls.at;
    const moves = ls.ad > 0 ? dvIndex : -dvIndex;
    const targetIdx = (startIdx + moves + 12) % 12;
    return targetIdx === idx;
  }) : null;
  const isThanhZone = zone.ai === 0;
  const isMenhZone = ls.am === idx;
  const ngaCungPattern = [true, false, true, true, true, false, false, true, true, false, false, false];
  const phiCungNames = zone.cno?.map((cnoIdx, phiType) => {
    const targetZone = ls.ars[cnoIdx];
    if (!targetZone) return null;
    return {
      name: capitalizeFirstLetter(AREA_NAME[targetZone.ai]),
      type: phiType,
      isNga: ngaCungPattern[targetZone.ai],
      isSelf: cnoIdx === idx
    };
  });
  const luuNienCung = zone.ail !== void 0 ? AREA_NAME[zone.ail] : null;
  const idxThangThuc = zone.lmpt ? (zone.lmpt[1][0] - 1 + 2) % 12 : 0;
  const cungCanThang = idxThangThuc >= 0 && idxThangThuc < 12 ? ls.ars[idxThangThuc] : null;
  const padContent = 5;
  const padContentTop = 5;
  const padContentBottom = hSquare - 5;
  const fontDV = 11;
  const fontPhuTinh = 11;
  const fontChinhTinh = 15;
  const chinhTinhStartY = 38;
  const phuTinhStartY = 73;
  const isCung4bottom = idx === 11 || idx === 0 || idx === 1 || idx === 2;
  const isCung4top = idx === 5 || idx === 6 || idx === 7 || idx === 8;
  const isCung2left = idx === 3 || idx === 4;
  const isCung2right = idx === 9 || idx === 10;
  if (idx === 0 && zone.ss && zone.ss.length > 0) {
    console.log("[ZoneHtml Debug] Zone 0:");
    console.log("  zone.ci (Chi):", zone.ci, CHI[zone.ci]);
    console.log("  zone.cn (Can):", zone.cn, CAN[zone.cn]);
    console.log("  zone.ai (Area name):", AREA_NAME[zone.ai]);
    console.log("  canStars (transformations):", canHoaData.canHoaArray[zone.cn]);
    console.log("  typeLs:", typeLs);
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "zone-container border border-gray-800",
      style: {
        position: "relative",
        background: isThanhZone ? "rgba(240, 233, 222, 0.6)" : "linear-gradient(135deg, #fff 0%, #f9f9f9 100%)",
        width: wSquare,
        height: hSquare,
        overflow: "visible"
        // Changed from 'hidden' to show arrows
      },
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              left: `${padContent}px`,
              top: `${padContentTop - 0.5}px`,
              fontSize: `${fontDV - 3}px`,
              color: getElementColor(CHI_HH[zone.ci]),
              lineHeight: 1
            },
            children: [
              CHI[zone.ci].charAt(0),
              ".",
              CHI[zone.ci].slice(1, 4)
            ]
          }
        ),
        zone.lmpt && zone.lmpt[0] && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              right: `${padContent}px`,
              top: `${padContentTop - 0.5}px`,
              fontSize: `${fontDV - 3}px`,
              color: "#000",
              lineHeight: 1
            },
            children: [
              CHI[zone.ci].charAt(0),
              " T",
              zone.lmpt[0]
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "font-bold",
            style: {
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: `${padContentTop}px`,
              fontSize: `${fontDV - 1}px`,
              color: "#000",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "4px"
            },
            children: [
              isMenhZone && /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    position: "absolute",
                    left: "50%",
                    top: "-2px",
                    transform: "translateX(-50%)",
                    width: "calc(100% + 8px)",
                    height: "calc(100% + 4px)",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderRadius: "4px",
                    zIndex: -1
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    color: triangleColor,
                    opacity: triangleOpacity,
                    fontSize: "10px",
                    lineHeight: 1,
                    marginRight: "2px"
                  },
                  children: "▲"
                }
              ),
              /* @__PURE__ */ jsxs("span", { children: [
                zoneName,
                ls.at === idx && "(T)"
              ] }),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "rounded px-1",
                  style: {
                    fontSize: `${fontDV - 2}px`,
                    color: napColor,
                    backgroundColor: isMenhZone ? "rgba(0,0,0,0.2)" : `${napColor}20`,
                    lineHeight: 1,
                    fontWeight: "normal"
                  },
                  children: zone.dv
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              left: `${padContent}px`,
              top: `${padContentTop + 16}px`,
              fontSize: `${fontDV - 1}px`,
              color: napColor
            },
            children: [
              CAN[zone.cn].charAt(0),
              ".",
              CHI[zone.ci]
            ]
          }
        ),
        phiCungNames && phiCungNames.length === 4 && /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: `${padContentTop + 15}px`,
              display: "flex",
              gap: "2px",
              fontSize: `${fontPhuTinh - 5}px`,
              opacity: 0.8,
              lineHeight: 1,
              whiteSpace: "nowrap"
            },
            children: phiCungNames.map((phi, i) => {
              if (!phi) return null;
              const tColor = getTransformationColor(i);
              return /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    color: tColor.text,
                    fontWeight: phi.isNga ? "bold" : "normal",
                    fontSize: phi.isSelf ? "8px" : void 0
                  },
                  children: phi.isSelf ? "✱" : phi.name
                },
                i
              );
            })
          }
        ),
        luuNienCung && zone.lmpt && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              right: `${padContent}px`,
              top: `${padContentTop + 24}px`,
              fontSize: `${fontDV - 3}px`,
              opacity: 0.8,
              textAlign: "right",
              lineHeight: 1.3
            },
            children: [
              /* @__PURE__ */ jsxs("div", { style: { color: "#888", fontWeight: "bold", fontSize: "7px" }, children: [
                capitalizeFirstLetter(luuNienCung),
                "3"
              ] }),
              zone.lmpt[2] !== void 0 && /* @__PURE__ */ jsxs("div", { style: { color: getElementColor(LTHG_HH[zone.lmpt[4]]), marginTop: "1px", fontSize: "8px" }, children: [
                CAN[zone.lmpt[2]].charAt(0),
                " T",
                zone.lmpt[0]
              ] })
            ]
          }
        ),
        zone.sb && zone.sb.length > 0 && zone.sb.map((starId, starIdx) => {
          const star = SM[starId];
          if (!star) return null;
          const starColor = getElementColor(star.hh);
          const posRow2Start = 17;
          let levelBadge = "";
          if (star.lvl) {
            Object.entries(star.lvl).forEach(([key, value]) => {
              if (Number(key) === zone.ci + 1) {
                levelBadge = value;
              }
            });
          }
          const transformations = [];
          const birthYearCan = ls.dtb?.bs?.y?.[0];
          const canStars = birthYearCan !== void 0 ? canHoaData.canHoaArray[birthYearCan] : void 0;
          if (idx === 0 && starIdx === 0) {
            console.log("[ZoneHtml] Zone 0, Star 0:");
            console.log("  typeLs:", typeLs);
            console.log("  birthYearCan (ls.dtb.bs.y[0]):", birthYearCan);
            console.log("  zone.cn (zone Can):", zone.cn);
            console.log("  canStars for birthYearCan:", canStars);
            console.log("  current starId:", starId);
          }
          if (typeLs !== 3 && canStars) {
            for (let transformType = 0; transformType <= 3; transformType++) {
              if (canStars[transformType] === starId) {
                transformations.push({
                  type: transformType,
                  label: ["A", "B", "C", "D"][transformType]
                  // Lộc=A, Quyền=B, Khoa=C, Kị=D
                });
                if (idx === 0) {
                  console.log(`  ✓ Found transformation: ${["A", "B", "C", "D"][transformType]} for starId ${starId}`);
                }
              }
            }
          }
          return /* @__PURE__ */ jsxs(React.Fragment, { children: [
            transformations.length > 0 && /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  right: `calc(50% + ${star.name.length * 7 + 15}px)`,
                  // Dynamic offset based on star name length
                  top: `${chinhTinhStartY + starIdx * posRow2Start}px`,
                  display: "flex",
                  flexDirection: "row-reverse",
                  // Reverse order so they stack left
                  alignItems: "center",
                  gap: "2px",
                  pointerEvents: "none"
                  // Don't interfere with clicks
                },
                children: transformations.map((trans, i) => {
                  const tColor = getTransformationColor(trans.type);
                  return /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        display: "inline-flex",
                        width: "12px",
                        height: "12px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        // Circular shape!
                        fontSize: "7px",
                        fontWeight: "bold",
                        backgroundColor: tColor.bg,
                        border: `1px solid ${tColor.border}`,
                        color: tColor.text,
                        boxShadow: "0 0 2px rgba(0,0,0,0.2)"
                        // Slight shadow for visibility
                      },
                      title: ["Lộc", "Quyền", "Khoa", "Kị"][trans.type],
                      children: trans.label
                    },
                    i
                  );
                })
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: `${chinhTinhStartY + starIdx * posRow2Start}px`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px"
                },
                children: [
                  /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: "font-bold uppercase",
                      style: {
                        color: starColor,
                        fontSize: `${fontChinhTinh}px`,
                        textAlign: "center",
                        lineHeight: 1,
                        textShadow: levelBadge === "M" || levelBadge === "V" ? `0 0 3px ${starColor}40` : "none",
                        opacity: levelBadge === "H" ? 0.6 : 1,
                        whiteSpace: "nowrap"
                      },
                      children: [
                        star.name,
                        levelBadge && levelBadge !== "B" && /* @__PURE__ */ jsxs("sup", { style: { fontSize: "9px", marginLeft: "1px" }, children: [
                          "(",
                          levelBadge,
                          ")"
                        ] })
                      ]
                    }
                  ),
                  star.nn && star.nn[1] !== void 0 && /* @__PURE__ */ jsx("span", { style: { fontSize: "10px", color: starColor }, children: star.nn[1] > 0 ? "+" : "-" })
                ]
              }
            )
          ] }, starId);
        }),
        zone.ss && zone.ss.length > 0 && (() => {
          const leftStars = zone.ss.filter(
            (starId) => SM[starId] && SM[starId].typ === 1 && (!SM[starId].cir || SM[starId].cir !== "vts")
          );
          const rightStars = zone.ss.filter(
            (starId) => SM[starId] && SM[starId].typ === 2 && (!SM[starId].cir || SM[starId].cir !== "vts")
          );
          let leftY = phuTinhStartY;
          let rightY = phuTinhStartY;
          const starSpacing = fontPhuTinh - 1;
          return /* @__PURE__ */ jsxs(Fragment, { children: [
            leftStars.map((starId) => {
              const star = SM[starId];
              const currentY = leftY;
              leftY += starSpacing;
              let brightnessLevel = "";
              if (star.lvl) {
                Object.entries(star.lvl).forEach(([key, value]) => {
                  if (Number(key) === zone.ci + 1) {
                    brightnessLevel = value;
                  }
                });
              }
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: `${padContent}px`,
                    top: `${currentY}px`,
                    fontSize: `${fontPhuTinh}px`,
                    color: getElementColor(star.hh),
                    lineHeight: 1,
                    whiteSpace: "nowrap"
                  },
                  children: [
                    star.name,
                    brightnessLevel && brightnessLevel !== "B" && /* @__PURE__ */ jsxs(
                      "sup",
                      {
                        style: {
                          fontSize: "7px",
                          opacity: 0.6,
                          marginLeft: "1px"
                        },
                        children: [
                          "(",
                          brightnessLevel,
                          ")"
                        ]
                      }
                    )
                  ]
                },
                `left-${starId}`
              );
            }),
            rightStars.map((starId) => {
              const star = SM[starId];
              const currentY = rightY;
              rightY += starSpacing;
              let brightnessLevel = "";
              if (star.lvl) {
                Object.entries(star.lvl).forEach(([key, value]) => {
                  if (Number(key) === zone.ci + 1) {
                    brightnessLevel = value;
                  }
                });
              }
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    right: `${padContent}px`,
                    top: `${currentY}px`,
                    fontSize: `${fontPhuTinh}px`,
                    color: getElementColor(star.hh),
                    textAlign: "right",
                    lineHeight: 1,
                    whiteSpace: "nowrap"
                  },
                  children: [
                    star.name,
                    brightnessLevel && brightnessLevel !== "B" && /* @__PURE__ */ jsxs(
                      "sup",
                      {
                        style: {
                          fontSize: "7px",
                          opacity: 0.6,
                          marginLeft: "1px"
                        },
                        children: [
                          "(",
                          brightnessLevel,
                          ")"
                        ]
                      }
                    )
                  ]
                },
                `right-${starId}`
              );
            })
          ] });
        })(),
        zone.lynp !== void 0 && /* @__PURE__ */ jsx(
          "div",
          {
            className: "font-bold uppercase",
            style: {
              position: "absolute",
              left: `${padContent}px`,
              bottom: `${33}px`,
              color: getElementColor(CHI_HH[zone.lynp]),
              fontSize: "9px",
              opacity: 0.8,
              lineHeight: 1
            },
            children: CHI[zone.lynp]
          }
        ),
        zone.lmnp && zone.lmnp[0] && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              left: `${padContent + 25}px`,
              bottom: `${33}px`,
              color: "#444",
              fontSize: "8px",
              opacity: 0.8,
              lineHeight: 1
            },
            children: [
              "V",
              zone.lmnp[0]
            ]
          }
        ),
        zone.ss && zone.ss.length > 0 && (() => {
          const truongSinhStars = zone.ss.filter((starId) => SM[starId]?.cir === "vts");
          let truongSinhY = padContentBottom - 35;
          return truongSinhStars.map((starId) => {
            const star = SM[starId];
            const currentY = truongSinhY;
            truongSinhY += 12;
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bottom: `${hSquare - currentY}px`,
                  color: getElementColor(star.hh),
                  fontSize: "10px",
                  opacity: 0.8,
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  textAlign: "center"
                },
                children: star.name
              },
              `ts-${starId}`
            );
          });
        })(),
        ls.cfg[6] === 1 && zone.zolk && (() => {
          const numberLoc = zone.zolk[0]?.[ZolkName.currentLoc] || 0;
          const numberKi = zone.zolk[3]?.[ZolkName.currentKi] || 0;
          const typeLs2 = ls.cfg[1] || 0;
          const iconLoc = typeLs2 === 4 || typeLs2 === 5 ? "A" : "";
          const iconKi = typeLs2 === 4 || typeLs2 === 5 ? "D" : "";
          const iconInfiniti = "∞";
          const hasLoc = numberLoc > 0 || containsNumber(ls.loopLP?.[0] || [], idx) && numberLoc === 0;
          const hasKi = numberKi > 0 || containsNumber(ls.loopLP?.[3] || [], idx) && numberKi === 0;
          if (!hasLoc && !hasKi) return null;
          const locColor = TRANSFORMATION_COLORS.loc.text;
          const kiColor = TRANSFORMATION_COLORS.ki.text;
          const locKiBottom = 48;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: `${locKiBottom}px`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: hasLoc && hasKi ? "15px" : "0",
                fontSize: typeLs2 === 4 ? `${fontPhuTinh + 2}px` : `${fontPhuTinh - 2}px`,
                fontWeight: "bold",
                opacity: typeLs2 === 4 ? 1 : 0.8,
                lineHeight: 1
              },
              children: [
                hasLoc && /* @__PURE__ */ jsx("div", { style: { color: locColor, textAlign: "center" }, children: numberLoc > 0 ? /* @__PURE__ */ jsx(Fragment, { children: !containsNumber(ls.loopLP?.[0] || [], idx) ? `${numberLoc}${iconLoc}` : zone.zolk[0]?.[ZolkName.locKeep] === 0 ? `${numberLoc}${iconLoc}${iconInfiniti}` : /* @__PURE__ */ jsx(Fragment, { children: numberLoc - zone.zolk[0]?.[ZolkName.locKeep] > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    zone.zolk[0]?.[ZolkName.locKeep],
                    iconLoc
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { marginTop: "-15px" }, children: [
                    numberLoc - zone.zolk[0]?.[ZolkName.locKeep],
                    iconInfiniti
                  ] })
                ] }) : `${numberLoc}${iconLoc}` }) }) : /* @__PURE__ */ jsx("span", { style: { fontSize: `${fontPhuTinh}px` }, children: iconInfiniti }) }),
                hasKi && /* @__PURE__ */ jsx("div", { style: { color: kiColor, textAlign: "center" }, children: numberKi > 0 ? `${numberKi}${iconKi}${containsNumber(ls.loopLP?.[3] || [], idx) ? iconInfiniti : ""}` : /* @__PURE__ */ jsx("span", { style: { fontSize: `${fontPhuTinh}px` }, children: iconInfiniti }) })
              ]
            }
          );
        })(),
        cungCanThang && zone.lmpt && zone.lmpt[1] && /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              position: "absolute",
              right: `${padContent}px`,
              bottom: `${33}px`,
              fontSize: "8px",
              textAlign: "right",
              opacity: 0.8,
              color: getElementColor(LTHG_HH[cungCanThang.lmpt?.[4] || 0]),
              lineHeight: 1
            },
            children: [
              CAN[cungCanThang.lmpt?.[2] || 0].charAt(0),
              ".",
              CHI[cungCanThang.lmpt?.[3] || 0],
              " P",
              zone.lmpt[1][0]
            ]
          }
        ),
        zone.ys && zone.ys.length > 0 && (() => {
          let yearX = padContent;
          const yearStartBottom = 5;
          const yearSpacing = 34;
          return zone.ys.slice(0, 6).map((yearInfo, i) => {
            const yearColor = yearInfo[2] !== void 0 ? getElementColor(LTHG_HH[yearInfo[2]]) : "#888";
            const isCurrentYear = yearInfo[1] === ls.dtv?.ln?.y;
            const currentX = yearX;
            yearX += yearSpacing;
            return /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: `${currentX}px`,
                    bottom: `${yearStartBottom + 12}px`,
                    fontSize: "7px",
                    color: yearColor,
                    opacity: 0.7,
                    lineHeight: 1
                  },
                  children: [
                    CAN[yearInfo[4] || 0].charAt(0),
                    ".",
                    yearInfo[0]
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: `${currentX}px`,
                    bottom: `${yearStartBottom}px`,
                    fontSize: "8px",
                    color: yearColor,
                    backgroundColor: isCurrentYear ? "rgba(0,0,0,0.15)" : "transparent",
                    padding: isCurrentYear ? "1px 2px" : "0",
                    borderRadius: isCurrentYear ? "2px" : "0",
                    fontWeight: isCurrentYear ? "bold" : "normal",
                    opacity: 0.8,
                    lineHeight: 1
                  },
                  children: yearInfo[1]
                }
              )
            ] }, i);
          });
        })(),
        zone.ht && zone.ht.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute top-1 right-1 flex gap-0.5", children: zone.ht.slice(0, 3).map((flyInfo, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex h-3 w-3 items-center justify-center rounded-full bg-blue-500 text-[8px] font-bold text-white opacity-80",
            title: `Flying star ${i + 1}`,
            children: "★"
          },
          i
        )) }),
        (() => {
          if (typeLs === 3) return null;
          const tuHoaArrows = [];
          const canStars = canHoaData.canHoaArray[zone.cn];
          if (!canStars) return null;
          if (idx === 0) {
            console.log("[ZoneHtml Tự Hóa] Zone 0:");
            console.log("  typeLs:", typeLs);
            console.log("  zone.cn:", zone.cn);
            console.log("  canStars:", canStars);
            console.log("  zone.ss:", zone.ss);
          }
          let direction = "bottom";
          if (isCung4bottom) direction = "bottom";
          else if (isCung4top) direction = "top";
          else if (isCung2left) direction = "left";
          else if (isCung2right) direction = "right";
          zone.sb?.forEach((starId, starIdx) => {
            const transformType = canStars.indexOf(starId);
            if (transformType >= 0) {
              let starX = wSquare / 2;
              const starY = chinhTinhStartY + starIdx * 17;
              const countTH = 0;
              if (isCung4bottom || isCung4top) {
                starX = wSquare / 2 - countTH * 15;
              } else if (isCung2left) {
                starX = 45;
              } else if (isCung2right) {
                starX = wSquare / 2 + 35;
              }
              tuHoaArrows.push(
                /* @__PURE__ */ jsx("g", { children: renderTuHoaArrow(transformType, starX, starY, direction, wSquare, hSquare) }, `tu-hoa-major-${starId}-${transformType}`)
              );
            }
          });
          const arrStarHoa = [60, 61, 62, 63];
          const allLeftStars = zone.ss?.filter(
            (starId) => SM[starId] && SM[starId].typ === 1 && (!SM[starId].cir || SM[starId].cir !== "vts")
          ) || [];
          const allRightStars = zone.ss?.filter(
            (starId) => SM[starId] && SM[starId].typ === 2 && (!SM[starId].cir || SM[starId].cir !== "vts")
          ) || [];
          let leftY = phuTinhStartY;
          let rightY = phuTinhStartY;
          const starSpacing = fontPhuTinh - 1;
          const isKhamThienLuongPhai = typeLs === 4 || typeLs === 5;
          let leftStarX = padContent;
          if (isCung2left) {
            leftStarX = isKhamThienLuongPhai ? 45 : 10;
          } else if (isCung4bottom || isCung4top) {
            leftStarX = wSquare / 2 - 6;
          }
          let rightStarX = wSquare - padContent;
          if (isCung2right) {
            rightStarX = wSquare / 2 + (isKhamThienLuongPhai ? 45 : -15);
          } else if (isCung4bottom || isCung4top) {
            rightStarX = wSquare / 2 - 6;
          }
          allLeftStars.forEach((starId) => {
            if (arrStarHoa.includes(starId)) {
              const transformType = canStars.indexOf(starId);
              if (starId === 62 && idx === 0) {
                console.log("[Tự Hóa] Tả Phụ (62) found in left stars");
                console.log("  transformType:", transformType);
                console.log("  canStars:", canStars);
                console.log("  typeLs:", typeLs);
              }
              if (transformType >= 0) {
                tuHoaArrows.push(
                  /* @__PURE__ */ jsx("g", { children: renderTuHoaArrow(transformType, leftStarX, leftY, direction, wSquare, hSquare) }, `tu-hoa-left-${starId}-${transformType}`)
                );
                if (starId === 62 && idx === 0) {
                  console.log("  ✓ Arrow added for Tả Phụ at leftY:", leftY);
                }
              }
            }
            leftY += starSpacing;
          });
          allRightStars.forEach((starId) => {
            if (arrStarHoa.includes(starId)) {
              const transformType = canStars.indexOf(starId);
              if (starId === 62 && idx === 0) {
                console.log("[Tự Hóa] Tả Phụ (62) found in right stars");
                console.log("  transformType:", transformType);
              }
              if (transformType >= 0) {
                tuHoaArrows.push(
                  /* @__PURE__ */ jsx("g", { children: renderTuHoaArrow(transformType, rightStarX, rightY, direction, wSquare, hSquare) }, `tu-hoa-right-${starId}-${transformType}`)
                );
                if (starId === 62 && idx === 0) {
                  console.log("  ✓ Arrow added for Tả Phụ at rightY:", rightY);
                }
              }
            }
            rightY += starSpacing;
          });
          if (tuHoaArrows.length === 0) return null;
          return /* @__PURE__ */ jsxs(
            "svg",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: wSquare,
                height: hSquare,
                pointerEvents: "none",
                zIndex: 10,
                overflow: "visible"
              },
              children: [
                /* @__PURE__ */ jsx("defs", { children: [0, 1, 2, 3].map((type) => {
                  const colors = ["rgb(3 140 0)", "rgb(110 8 136)", "rgb(14 124 202)", "rgb(217 4 4)"];
                  return /* @__PURE__ */ jsx(
                    "marker",
                    {
                      id: `tu-hoa-arrow-${type}`,
                      markerWidth: "10",
                      markerHeight: "10",
                      refX: "9",
                      refY: "3",
                      orient: "auto",
                      markerUnits: "strokeWidth",
                      children: /* @__PURE__ */ jsx("path", { d: "M0,0 L0,6 L9,3 z", fill: colors[type] })
                    },
                    `tu-hoa-arrow-${type}`
                  );
                }) }),
                tuHoaArrows
              ]
            }
          );
        })()
      ]
    }
  );
}

const ZONE_POSITIONS = [
  { col: 3, row: 4 },
  // Zone 0 - Bottom Right Center
  { col: 2, row: 4 },
  // Zone 1 - Bottom Center Left
  { col: 1, row: 4 },
  // Zone 2 - Bottom Left
  { col: 1, row: 3 },
  // Zone 3 - Middle Left Bottom
  { col: 1, row: 2 },
  // Zone 4 - Middle Left Top
  { col: 1, row: 1 },
  // Zone 5 - Top Left
  { col: 2, row: 1 },
  // Zone 6 - Top Center Left
  { col: 3, row: 1 },
  // Zone 7 - Top Center Right
  { col: 4, row: 1 },
  // Zone 8 - Top Right
  { col: 4, row: 2 },
  // Zone 9 - Middle Right Top
  { col: 4, row: 3 },
  // Zone 10 - Middle Right Bottom
  { col: 4, row: 4 }
  // Zone 11 - Bottom Right
];
function HoroscopeHtmlClient(props) {
  const { ls, fontName, version, fnDownloadCall, fnCopyLs, fnExportNote, fnSocialShare } = props;
  const chartRef = useRef(null);
  const { copyImageToClipboard, downloadImage, exportImageNote } = useExportHtml(chartRef, ls);
  const numberAddMore = ls.css <= 11 ? 0 : (ls.css - 11) * 75;
  const lsWidth = 742;
  const lsHeight = 960 + numberAddMore;
  const wSquare = lsWidth / 4;
  const hSquare = lsHeight / 4;
  const padZone = 54;
  const fontCenter = 12;
  const borderColors = ["", "", "#123e65", "#04973c", "#919191", "#e39e25", "#e73827"];
  useEffect(() => {
    if (fnDownloadCall > 0) {
      const fileName = `tinhmenhdo-html-${ls.sx === 1 ? "nam" : "nu"}-${ls.dtb.sn.y}.${ls.dtb.sn.m}.${ls.dtb.sn.d}-${ls.dtb.sn.h}.${ls.dtb.sn.i || 0}.png`;
      downloadImage(fileName);
    }
  }, [fnDownloadCall, downloadImage, ls]);
  useEffect(() => {
    if (fnCopyLs > 0) {
      copyImageToClipboard();
    }
  }, [fnCopyLs, copyImageToClipboard]);
  useEffect(() => {
    if (fnExportNote > 0) {
      exportImageNote();
    }
  }, [fnExportNote, exportImageNote]);
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: chartRef,
      className: "chart-container relative",
      style: {
        width: lsWidth + padZone,
        height: lsHeight + padZone,
        fontFamily: fontName
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at center, #fff 0%, #ddd 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative z-10 grid grid-cols-4 grid-rows-4",
            style: {
              width: lsWidth,
              height: lsHeight,
              margin: `${padZone / 2}px`
            },
            children: [
              ZONE_POSITIONS.map((pos, idx) => /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    gridColumn: pos.col,
                    gridRow: pos.row
                  },
                  children: /* @__PURE__ */ jsx(
                    ZoneHtml,
                    {
                      idx,
                      zone: ls.ars[idx],
                      ls,
                      config: ls.cfg,
                      wSquare,
                      hSquare
                    }
                  )
                },
                idx
              )),
              /* @__PURE__ */ jsx(
                SkyHtml,
                {
                  ls,
                  className: "col-span-2 col-start-2 row-span-2 row-start-2",
                  wSquare,
                  fontCenter
                }
              ),
              /* @__PURE__ */ jsx(FlyingStarsHtml, { ls, wSquare, hSquare }),
              /* @__PURE__ */ jsx(PhiHoaArrowsHtml, { ls, wSquare, hSquare })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "pointer-events-none absolute inset-0 z-20",
            width: lsWidth + padZone,
            height: lsHeight + padZone,
            style: {
              left: 0,
              top: 0
            },
            children: [
              /* @__PURE__ */ jsx(
                "rect",
                {
                  x: padZone / 2,
                  y: padZone / 2,
                  width: lsWidth,
                  height: lsHeight,
                  fill: "none",
                  stroke: borderColors[ls.cid] || "#000",
                  strokeWidth: "2"
                }
              ),
              /* @__PURE__ */ jsx(
                "line",
                {
                  x1: padZone / 2,
                  y1: padZone / 2 + hSquare,
                  x2: padZone / 2 + lsWidth,
                  y2: padZone / 2 + hSquare,
                  stroke: "#000",
                  strokeWidth: "1"
                }
              ),
              /* @__PURE__ */ jsx(
                "line",
                {
                  x1: padZone / 2,
                  y1: padZone / 2 + hSquare * 3,
                  x2: padZone / 2 + lsWidth,
                  y2: padZone / 2 + hSquare * 3,
                  stroke: "#000",
                  strokeWidth: "1"
                }
              ),
              /* @__PURE__ */ jsx(
                "line",
                {
                  x1: padZone / 2 + wSquare,
                  y1: padZone / 2,
                  x2: padZone / 2 + wSquare,
                  y2: padZone / 2 + lsHeight,
                  stroke: "#000",
                  strokeWidth: "1"
                }
              ),
              /* @__PURE__ */ jsx(
                "line",
                {
                  x1: padZone / 2 + wSquare * 3,
                  y1: padZone / 2,
                  x2: padZone / 2 + wSquare * 3,
                  y2: padZone / 2 + lsHeight,
                  stroke: "#000",
                  strokeWidth: "1"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute right-2 bottom-2 z-30 text-[10px] text-gray-400", children: [
          "TinhMenhDo.com HTML v",
          version
        ] })
      ]
    }
  ) });
}

export { HoroscopeHtmlClient as default };
