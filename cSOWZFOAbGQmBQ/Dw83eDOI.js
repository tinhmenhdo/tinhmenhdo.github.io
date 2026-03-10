import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import Konva$2 from 'konva';
import { useEffect, useRef, useState } from 'react';
import Konva from 'konva/lib/Core.js';
import { C as CfgValue, Z as ZolkName, V as AREA_NAME, W as CHI_3HH, X as LTHG_HH, e as CAN, d as CHI, Y as CHI_HH, _ as THAP, a0 as HH_THAP, a1 as CAN_HH, a2 as CAN_AD, S as SM, a3 as containsNumber, a4 as STARSTRONG, a5 as STAR_SIGN, a6 as CR_TS, a7 as FAILURE6, a8 as STARLOOP1, a9 as HH, aa as ADTN, ab as SKB, ac as TKN, ad as TKN_MONTH, ae as TKN_PN, af as idxTHAP, ag as TSNAME, ah as LTHG_NA, ai as GETHOA, f as createShareUrl } from './BIaGjqnI.js';
import { Arrow } from 'konva/lib/shapes/Arrow.js';
import { Circle } from 'konva/lib/shapes/Circle.js';
import { Line } from 'konva/lib/shapes/Line.js';
import { Rect } from 'konva/lib/shapes/Rect.js';
import { Text } from 'konva/lib/shapes/Text.js';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import utc from 'dayjs/plugin/utc.js';
import Konva$1 from 'konva/lib/_CoreInternals.js';
import { d as detectHourBoundaryConflict, a as detectLeapMonthConflict } from './DODzyxnd.js';

const rectCache = new Rect({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  hitStrokeWidth: 0,
  shadowForStrokeEnabled: false
});
rectCache.cache();
const lineCache = new Line({
  points: [0, 0, -100, -100],
  stroke: "#fff",
  strokeWidth: 1.5,
  opacity: 1
});
lineCache.cache();
const cricleCache = new Circle({
  x: -100,
  y: -100,
  radius: 10,
  fill: "#000",
  stroke: "#000",
  strokeWidth: 0.2,
  opacity: 0.4,
  perfectDrawEnabled: true,
  hitStrokeWidth: 0,
  shadowForStrokeEnabled: false,
  width: 100,
  height: 100
});
cricleCache.cache();
const textCache = new Text({
  x: 500,
  y: 500,
  text: "",
  fontStyle: "normal",
  fontSize: 14,
  fontFamily: "Arial",
  fill: "#000",
  strokeWidth: 0,
  perfectDrawEnabled: true,
  textDecoration: "",
  shadowColor: "black",
  shadowBlur: 0,
  shadowOffset: { x: 0, y: 0 },
  shadowOpacity: 0,
  hitStrokeWidth: 0,
  shadowForStrokeEnabled: false,
  width: 10,
  height: 10
});
textCache.cache();
const cachedText = textCache.clone({ width: "auto", height: "auto" });
cachedText.cache();
const cachedTextCache = cachedText;
const arrowCache = new Arrow({
  x: 0,
  y: 0,
  points: [0, 0, 250, 250],
  pointerLength: 12,
  pointerWidth: 6,
  fill: "black",
  stroke: "black",
  strokeWidth: 2.5,
  opacity: 1,
  perfectDrawEnabled: true,
  lineJoin: "round",
  hitStrokeWidth: 0,
  shadowForStrokeEnabled: false,
  width: 5,
  height: 5
});
arrowCache.cache();
function drawText(obj, fontDV, fontFamilySet, mGroup, _bAdd = true) {
  let objMerge = {
    x: 500,
    y: 500,
    text: "",
    fontStyle: "normal",
    fontSize: fontDV,
    fontFamily: fontFamilySet,
    fill: "#000",
    strokeWidth: 0,
    perfectDrawEnabled: true,
    textDecoration: "",
    shadowColor: "black",
    shadowBlur: 0,
    shadowOffset: { x: 0, y: 0 },
    shadowOpacity: 0,
    hitStrokeWidth: 0,
    shadowForStrokeEnabled: false
  };
  objMerge = { ...objMerge, ...obj };
  const textObj = cachedTextCache.clone(objMerge);
  if (_bAdd && typeof mGroup !== "undefined") {
    mGroup.add(textObj);
    if (textObj !== null) textObj.moveToTop();
  }
  return textObj;
}
function drawHoaTienThien(mGroup, canHoa, canHoaId, starId, xTienThien, yTienThien, fontFamilySet, fontDV, colorHoa, colorHoaFill) {
  const rowHoa = canHoa[canHoaId];
  let drawHoaByTienThien = false;
  const styleText = {
    fontSize: fontDV + 2,
    shadowEnabled: true,
    shadowOpacity: 0,
    shadowForStrokeEnabled: true,
    align: "left",
    perfectDrawEnabled: true
    // fontFamily: 'Tahoma',
  };
  styleText.fontStyle = "bold";
  styleText.x = xTienThien;
  styleText.y = yTienThien + 7;
  const aWithHoaHeight = 0;
  let aWithHoa = 0;
  let hoaText;
  const hoaPadding = 13;
  const hoaRadius = 8.5;
  const hoaStrokeWidth = 1.5;
  const nameBig4 = ["A", "B", "C", "D"];
  for (let th = 0; th <= 3; th += 1) {
    const starHoaIdx = rowHoa[th];
    if (starHoaIdx === starId) {
      drawHoaByTienThien = true;
      const colorFill = colorHoaFill[th];
      const colorStroke = colorHoa[th];
      const circleStyle = {
        x: styleText.x,
        y: styleText.y,
        radius: hoaRadius,
        fill: colorFill,
        stroke: colorStroke,
        strokeWidth: hoaStrokeWidth,
        opacity: 0.7,
        hitStrokeWidth: 0,
        shadowForStrokeEnabled: false
      };
      styleText.text = `${nameBig4[th]}`;
      styleText.fill = colorHoa[th];
      hoaText = drawText(styleText, fontDV + 2, fontFamilySet, mGroup, false);
      hoaText.x(hoaText.x() - 4.7);
      hoaText.y(hoaText.y() - 6);
      styleText.x += aWithHoa;
      styleText.y += aWithHoaHeight;
      const circle = cricleCache.clone(circleStyle);
      mGroup.add(circle);
      mGroup.add(hoaText);
      if (aWithHoa === 0) {
        aWithHoa = hoaText.getTextWidth() + hoaPadding;
      }
    }
  }
  return drawHoaByTienThien;
}
function drawTuHoa(mGroup, canHoa, cung, pos, wSquare, hSquare, ipX, ipY, starID, fontDV, fontFamilySet, colorHoa, thdraw, ls) {
  const rowHoa = canHoa[cung.cn];
  let isDraw = false;
  const iTypeHoa = rowHoa.indexOf(starID);
  if (iTypeHoa >= 0) {
    isDraw = true;
    const idx = cung.ci;
    const sty = {
      opacity: 0.8,
      points: [ipX, ipY, ipX, ipY],
      fill: colorHoa[Number(iTypeHoa)],
      // colorHoa[dr]
      stroke: colorHoa[Number(iTypeHoa)],
      // getGradient(posDr.pos, colorHoa[dr], colorHoaStart[dr]),
      strokeWidth: 1.5,
      pointerLength: 15,
      pointerWidth: 8
    };
    const oldPoint = sty.points;
    const isChinhTinh = !!cung.sb.includes(starID);
    const isCung4bottom = idx === 11 || idx === 0 || idx === 1 || idx === 2;
    const isCung4top = idx === 5 || idx === 6 || idx === 7 || idx === 8;
    const isCung2left = idx === 3 || idx === 4;
    const isCung2right = idx === 9 || idx === 10;
    const countTH = thdraw[cung.ci];
    const numberTHofCung = cung.cno.filter((value) => value === cung.ci).length;
    const isKhuc = starID === 63;
    const isKhucAndOneTH = isKhuc && numberTHofCung === 1;
    const isKhamThienLuongPhai = ls.cfg[CfgValue.typeLs] === 4 || ls.cfg[CfgValue.typeLs] === 5;
    if (isCung4bottom || isCung4top) {
      let padByCount = 0;
      const numLoc = Number(ls.ars[idx].zolk[0][ZolkName.currentLoc]);
      const numKi = Number(ls.ars[idx].zolk[3][ZolkName.currentKi]);
      padByCount = numKi > 9 || numLoc > 9 ? 13 : numKi > 0 || numLoc > 0 ? 5 : 0;
      padByCount = ls.cfg[CfgValue.locKiToanDo] === 1 ? padByCount : 0;
      oldPoint[0] = pos.x + (isChinhTinh ? wSquare / 2 + (isCung4bottom ? padByCount : 0) : wSquare / 2 - (isKhucAndOneTH ? 23 : numberTHofCung === 2 ? 10 : 6)) - countTH * 15;
      oldPoint[1] = oldPoint[1] + (isChinhTinh ? 6 : 3);
      oldPoint[2] = oldPoint[0];
      oldPoint[3] = isCung4top ? 5 : isCung4bottom ? pos.y + hSquare + 23 : oldPoint[3];
    }
    if (isCung2left) {
      oldPoint[0] = pos.x + (isChinhTinh ? 45 : isKhamThienLuongPhai ? 45 : 10);
      oldPoint[1] = oldPoint[1] + (isChinhTinh ? 6 : 5);
      oldPoint[2] = 5;
      oldPoint[3] = oldPoint[1];
    }
    if (isCung2right) {
      oldPoint[0] = pos.x + wSquare / 2 + (isChinhTinh ? 35 : isKhamThienLuongPhai ? 45 : -15);
      oldPoint[1] = oldPoint[1] + (isChinhTinh ? 6 : 5);
      oldPoint[2] = pos.x + wSquare + 23;
      oldPoint[3] = oldPoint[1];
    }
    mGroup.add(arrowCache.clone(sty));
  }
  return isDraw;
}
function drawHoaDaiVan(mGroup, canHoa, cung, ipX, ipY, starID, ls, fontDV, fontFamilySet, colorHoa) {
  if (ls.cfg[CfgValue.showHoaIcon] < 1) return false;
  const rowHoa = canHoa[ls.ars[ls.dvidx].cn];
  const widthBoxTH = 9;
  let isDraw = false;
  const idxStarIdHoa = rowHoa.indexOf(starID);
  if (idxStarIdHoa >= 0) {
    isDraw = true;
    mGroup.add(
      rectCache.clone({
        x: ipX,
        y: ipY,
        width: widthBoxTH,
        height: widthBoxTH,
        // fill: getGradient([0,0,lsWidth,lsHeight],'#cdc9c9','#fffdf8'), // `#e3e3e3`'#fff9f3',//'#f2f1ed e8e8e0' #76767600 #e7e7df
        // fill: getGradient([0, 0, lsWidth, lsHeight], '#ddd', '#fff8ea'), // `#e3e3e3`'#fff9f3',//'#f2f1ed e8e8e0' #76767600 #e7e7df
        fill: colorHoa[Number(idxStarIdHoa)],
        stroke: colorHoa[Number(idxStarIdHoa)],
        strokeWidth: 0,
        draggable: false,
        opacity: 0.8,
        perfectDrawEnabled: true,
        cornerRadius: 0,
        hitStrokeWidth: 0,
        shadowForStrokeEnabled: false
      })
    );
    mGroup.add(
      drawText(
        {
          text: `2`,
          x: ipX + 1.8,
          y: ipY + 0.5,
          fontSize: fontDV - 4,
          fill: "#fff",
          shadowBlur: 0,
          shadowOpacity: 1,
          opacity: 0.9
        },
        fontDV,
        fontFamilySet,
        mGroup
      )
    );
  }
  return isDraw;
}
function drawHoaLuuNien(mGroup, canHoa, cung, ipX, ipY, starID, ls, fontDV, fontFamilySet, colorHoa) {
  if (ls.cfg[CfgValue.showHoaIcon] < 2) return false;
  const ipYNew = ipY + 4.3;
  const rowHoa = canHoa[ls.dtv.bs.y[0]];
  let isDraw = false;
  const idxStarIdHoa = rowHoa.indexOf(starID);
  if (idxStarIdHoa >= 0) {
    isDraw = true;
    mGroup.add(
      cricleCache.clone({
        x: ipX + 2.8,
        y: ipYNew,
        radius: 5,
        fill: colorHoa[idxStarIdHoa],
        strokeWidth: 0,
        opacity: 0.8,
        hitStrokeWidth: 0,
        shadowForStrokeEnabled: false
      })
    );
    mGroup.add(
      drawText(
        {
          text: `3`,
          x: Number(ipX + 1),
          y: Number(ipYNew - 3.8),
          fontSize: Number(fontDV - 4),
          fill: "#fff",
          shadowBlur: 0,
          shadowOpacity: 1,
          opacity: 0.9
        },
        fontDV,
        fontFamilySet,
        mGroup
      )
    );
  }
  return isDraw;
}
function drawHoaCanThang(mGroup, canHoa, cung, ipX, ipY, starID, ls, fontDV, fontFamilySet, colorHoa) {
  if (ls.cfg[CfgValue.showHoaIcon] < 3) return false;
  const ipYNew = ipY + 4.1;
  const rowHoa = canHoa[ls.dtv.bs.m[0]];
  let isDraw = false;
  const idxStarIdHoa = rowHoa.indexOf(starID);
  if (idxStarIdHoa >= 0) {
    isDraw = true;
    mGroup.add(
      cricleCache.clone({
        x: ipX + 2.8,
        y: ipYNew,
        radius: 5,
        fill: colorHoa[idxStarIdHoa],
        strokeWidth: 0,
        opacity: 0.8,
        hitStrokeWidth: 0,
        shadowForStrokeEnabled: false
      })
    );
    mGroup.add(
      drawText(
        {
          text: `4`,
          x: Number(ipX + 0.7),
          y: Number(ipYNew - 3.8),
          fontSize: Number(fontDV - 4),
          fill: "#fff",
          shadowBlur: 0,
          shadowOpacity: 1,
          opacity: 0.9
        },
        fontDV,
        fontFamilySet,
        mGroup
      )
    );
  }
  return isDraw;
}
function drawHoaCanNgay(mGroup, canHoa, cung, ipX, ipY, starID, ls, fontDV, fontFamilySet, colorHoa) {
  if (ls.cfg[CfgValue.showHoaIcon] < 4) return false;
  const ipYNew = ipY + 4.1;
  const rowHoa = canHoa[ls.dtv.bs.d[0]];
  let isDraw = false;
  const idxStarIdHoa = rowHoa.indexOf(starID);
  if (idxStarIdHoa >= 0) {
    isDraw = true;
    mGroup.add(
      cricleCache.clone({
        x: ipX + 2.8,
        y: ipYNew,
        radius: 5,
        fill: colorHoa[idxStarIdHoa],
        strokeWidth: 0,
        opacity: 0.8,
        hitStrokeWidth: 0,
        shadowForStrokeEnabled: false
      })
    );
    mGroup.add(
      drawText(
        {
          text: `5`,
          x: Number(ipX + 0.7),
          y: Number(ipYNew - 3.8),
          fontSize: Number(fontDV - 4),
          fill: "#fff",
          shadowBlur: 0,
          shadowOpacity: 1,
          opacity: 0.9
        },
        fontDV,
        fontFamilySet,
        mGroup
      )
    );
  }
  return isDraw;
}

function ZoneBase(props) {
  const {
    color,
    colorHoa,
    colorHoaFill,
    fontPhuTinh,
    idx,
    cung,
    fontDV,
    fontFamilySet,
    typeLs,
    pos,
    hafWSquare,
    padContentTop,
    padContentBottom,
    padContent,
    wSquare,
    hSquare,
    cfgLs
  } = props;
  const { ls } = props;
  const mGroup = new Konva.Group({});
  function highlightBackground(text, strColor, opa = 0.2, boxPad = 0) {
    const box = rectCache.clone({
      x: text.x() - boxPad / 2 - 2,
      y: text.y() - boxPad / 2 - 1.8,
      // idxPos[idx].y - 5,
      fill: strColor,
      width: text.width() + boxPad + 4,
      //
      height: text.height() + boxPad,
      perfectDrawEnabled: true,
      strokeWidth: 0,
      opacity: opa,
      cornerRadius: 4,
      hitStrokeWidth: 0,
      shadowForStrokeEnabled: false
    });
    mGroup.add(box);
    if (box !== null) box.moveToTop();
    if (text !== null) text.moveToTop();
    return box;
  }
  function drawNameZone() {
    let nameCung = AREA_NAME[cung.ai];
    nameCung = `${AREA_NAME[cung.ai]}`;
    if (typeLs === 3) {
      const numberCungPre = drawText(
        {
          text: cung.dv.toString(),
          fill: "#000",
          x: -1e4,
          y: -1e4,
          fontStyle: "bold"
        },
        fontDV,
        fontFamilySet,
        mGroup,
        false
      );
      numberCungPre.destroy();
    }
    let textNameCung = ls.at === idx ? `${nameCung}(T)` : nameCung;
    if (typeLs === 4 || typeLs === 5) {
      textNameCung = nameCung;
    }
    const sty = {
      text: textNameCung,
      fill: "#000",
      //
      x: Number(pos.x) + hafWSquare,
      y: Number(pos.y) + padContentTop,
      fontStyle: "bold",
      align: "left"
    };
    const nameCungText = drawText(sty, fontDV - 1, fontFamilySet, mGroup);
    nameCungText.x(nameCungText.x() - nameCungText.getTextWidth() / 2);
    mGroup.add(
      cachedTextCache.clone({
        x: nameCungText.x() - 14,
        y: nameCungText.y() - 0.3,
        text: "▲",
        // △
        fontStyle: "normal",
        fontSize: fontDV - 1,
        fontFamily: "Arial",
        fill: color[CHI_3HH[idx]],
        perfectDrawEnabled: true,
        opacity: CHI_3HH[idx] === 2 ? 0.8 : 0.6,
        hitStrokeWidth: 0,
        shadowForStrokeEnabled: false
      })
    );
    if (cung.ai === 0 || cung.ai === 4 || cung.ai === 8) ;
    if (cung.ai === 0) {
      const box2 = rectCache.clone({
        x: pos.x + 1,
        y: pos.y + 1,
        width: wSquare - 1,
        height: hSquare - 1,
        fill: "#f0e9de",
        hitStrokeWidth: 0,
        shadowForStrokeEnabled: false,
        opacity: 0.6
      });
      mGroup.add(box2);
    }
    if (ls.am === idx) {
      highlightBackground(nameCungText, sty.fill, 0.3);
    }
    sty.text = cung.dv;
    sty.fill = color[LTHG_HH[cung.na]];
    const numDv = drawText(sty, fontDV - 1, fontFamilySet, mGroup);
    numDv.x(nameCungText.x() + nameCungText.width() + 5);
    const backgroundNumberDV = highlightBackground(numDv, color[LTHG_HH[cung.na]], 0.1);
    let isChild = false;
    if (cung.cn === ls.dtb.bs.y[0] && idx !== 0 && idx !== 1) {
      sty.fontStyle = "bold";
      sty.text = `${sty.text}`;
      isChild = true;
    }
    if (isChild) {
      sty.fill = "#555";
      sty.text = "☸";
      sty.x = nameCungText.x() + nameCungText.getTextWidth() + 2;
      sty.y = nameCungText.y();
      sty.fontSize = fontDV - 2;
      sty.shadowBlur = 0;
      sty.shadowEnabled = false;
      const canZone = drawText(sty, fontDV, fontFamilySet, mGroup);
      numDv.x(canZone.x() + canZone.getTextWidth() + 2);
      backgroundNumberDV.x(numDv.x() - 2);
    }
  }
  function canAD(firstCan, twoCan) {
    if (CAN_AD[firstCan] === CAN_AD[twoCan]) return 1;
    return 0;
  }
  function getTHAP(firstCan, twoCan) {
    return THAP[HH_THAP[CAN_HH[firstCan]][CAN_HH[twoCan]][canAD(firstCan, twoCan)]];
  }
  function drawYears() {
    let remeberY = pos.y + padContentBottom;
    if (typeLs === 4 || typeLs === 5) {
      remeberY = pos.y + padContentBottom + 7;
    }
    const sty2 = {
      text: "",
      fill: color[4],
      x: pos.x + padContent,
      y: remeberY,
      fontSize: fontPhuTinh - 6,
      opacity: 0.7
    };
    cung.ys.forEach((item) => {
      const sty = sty2;
      sty.text = item[1];
      sty.fill = color[LTHG_HH[item[2]]];
      const yNumber = drawText(sty, fontDV, fontFamilySet, mGroup);
      if (item[1] === ls.dtv.ln.y && Number(cfgLs[CfgValue.showSun]) === 1) {
        highlightBackground(yNumber, sty.fill, 0.2);
      }
      const remeberX = yNumber.x() + yNumber.getTextWidth() + 4.5;
      sty.text = `${CAN[item[3]].charAt(0)}`;
      sty.x = yNumber.x();
      sty.y = yNumber.y() - 9;
      const yTextCan = drawText(sty, fontDV, fontFamilySet, mGroup);
      sty.text = `.${item[0]}`;
      sty.x = yTextCan.x() + yTextCan.getTextWidth();
      const yTextCan2 = drawText(sty, fontDV, fontFamilySet, mGroup);
      if (item[1] === ls.dtv.ln.y && Number(cfgLs[CfgValue.showSun]) === 1) {
        highlightBackground(yTextCan, yTextCan.fill(), 0.2);
        highlightBackground(yTextCan2, yTextCan2.fill(), 0.2);
      }
      if (Number(cfgLs[CfgValue.showSun]) === 0) {
        yNumber.destroy();
        yTextCan.y(sty.y + 10);
        yTextCan2.y(yTextCan.y());
        if (item[1] === ls.dtv.sn.y) {
          highlightBackground(yTextCan, yTextCan.fill(), 0.2);
          highlightBackground(yTextCan2, yTextCan2.fill(), 0.2);
        }
      }
      if (cfgLs[CfgValue.batTuCung] === 1) {
        const nameThap = getTHAP(ls.dtb.bs.d[0], item[3]);
        sty.text = nameThap === "Thương" ? "Thg" : nameThap;
        sty.fill = "#444";
        sty.x = yNumber.x();
        if (cfgLs[CfgValue.showSun] === 1) {
          sty.y = yNumber.y() - 20;
        } else {
          sty.y = yNumber.y() - 10;
        }
        drawText(sty, fontDV, fontFamilySet, mGroup);
      }
      let dvPostion = ls.cid;
      if (ls.yeo >= ls.cid) {
        for (let index = 0; index < 120; index += 10) {
          if (dvPostion + 10 >= ls.yeo + 1) {
            break;
          }
          dvPostion = dvPostion + 10;
        }
      }
      if (ls.yeo >= ls.cid && item[0] >= dvPostion && item[0] < dvPostion + 10) {
        mGroup.add(
          cachedTextCache.clone({
            x: yTextCan.x() + 3,
            y: idx === 3 || idx === 4 || idx === 9 || idx === 10 ? pos.y + hSquare - 5 : pos.y + hSquare - 5.5,
            text: "▲",
            // △
            fontStyle: "normal",
            fontSize: fontDV - 5,
            fontFamily: "Arial",
            fill: "#555",
            // yNumber.fill()
            perfectDrawEnabled: true,
            opacity: 1,
            hitStrokeWidth: 0,
            shadowForStrokeEnabled: false
          })
        );
      }
      sty.align = "left";
      sty.x = remeberX;
      sty.y = remeberY;
    });
  }
  function drawDaiVanTop() {
    if (typeLs === 3) {
      return;
    }
    const textDvShow = `${AREA_NAME[cung.aid]}2`;
    const sty = {
      text: textDvShow,
      fill: "#555",
      // color[LTHG_HH[cung.na]]
      x: pos.x + padContent,
      // hafWSquare - preDVtext.getTextWidth() / 2,
      y: pos.y + padContentTop,
      fontStyle: "bold",
      opacity: 0.8,
      fontSize: fontDV - 2
    };
    const dvNameText = drawText(sty, fontDV - 3, fontFamilySet, mGroup);
    if (cung.dvc) {
      highlightBackground(dvNameText, sty.fill, 0.2);
    }
  }
  function drawLuuNienTop() {
    if (typeLs === 3) {
      return;
    }
    const lnCNameText = drawText(
      {
        text: `${AREA_NAME[cung.ail ?? 0]}3`,
        fill: "#888",
        // ,color[LTHG_HH[cung.na]]
        x: pos.x + wSquare - padContent,
        y: pos.y + padContentTop,
        fontStyle: "bold",
        opacity: 1
      },
      fontDV - 2,
      fontFamilySet,
      mGroup
    );
    lnCNameText.absolutePosition({
      x: lnCNameText.x() - lnCNameText.getTextWidth(),
      y: pos.y + padContentTop
    });
    if (cfgLs[CfgValue.rotateZone] === 0) {
      lnCNameText.destroy();
    }
    if (typeLs !== 4) {
      const textLuuCung = `${CAN[cung.lmpt[2]].charAt(0)} T${cung.lmpt[0]}`;
      const colorLuuCung = color[LTHG_HH[cung.lmpt[4]]];
      const luuCung4 = drawText(
        {
          text: textLuuCung,
          //
          fill: colorLuuCung,
          x: pos.x + wSquare - padContent,
          y: lnCNameText.y() + 16.5,
          fontSize: cfgLs[CfgValue.rotateZone] === 1 ? fontDV - 3 : fontDV - 1,
          opacity: 1
        },
        fontDV,
        fontFamilySet,
        mGroup
      );
      luuCung4.x(luuCung4.x() - luuCung4.getTextWidth());
      if (cfgLs[CfgValue.rotateZone] === 0) {
        luuCung4.y(luuCung4.y() - 16.5);
      } else {
        if (cung.ail === 0) {
          highlightBackground(lnCNameText, "#444");
        }
        if (ls.dtv.ln.m === cung.lmpt[0]) {
          highlightBackground(luuCung4, "#555");
        }
      }
    }
  }
  function drawCanCungTop() {
    const textCanShow = `${CAN[cung.cn].charAt(0)}.${CHI[cung.ci]}`;
    const canFontSize = cfgLs[CfgValue.rotateZone] === 1 ? fontDV - 3 : fontDV - 1;
    let canPadY = padContentTop;
    if (Number(cfgLs[CfgValue.rotateZone]) === 1) {
      canPadY = padContentTop + 16;
    }
    const preCanCungText = drawText(
      {
        text: textCanShow,
        fill: color[LTHG_HH[cung.na]],
        x: -1e3,
        y: -1e3,
        fontSize: canFontSize
      },
      fontDV,
      fontFamilySet,
      mGroup,
      false
    );
    const sty = {
      text: textCanShow,
      fill: color[LTHG_HH[cung.na]],
      x: pos.x + padContent,
      y: pos.y + canPadY,
      fontSize: canFontSize
      // fontStyle: 'bold'
    };
    if (typeLs === 3) {
      sty.y = pos.y + padContent;
    }
    drawText(sty, canFontSize, fontFamilySet, mGroup);
    preCanCungText.destroy();
  }
  function drawMenhLocMenhKi() {
    if (typeLs !== 4) return;
    let bottomMargin = 21;
    if (cfgLs[CfgValue.batTuCung] === 1 && cfgLs[CfgValue.showSun] === 1) {
      bottomMargin = 33;
    }
    if (Number(cfgLs[CfgValue.showSun]) === 0 && cfgLs[CfgValue.batTuCung] === 0) {
      bottomMargin = 12;
    }
    if (cfgLs[CfgValue.isNapAmCung] === 0) {
      bottomMargin = 2;
    }
    let isDrawMenhLoc = false;
    if (cung.ci === ls.ars[ls.am].cno[0]) {
      isDrawMenhLoc = true;
      const squareWidh = 18;
      const squareHeight = 18;
      const squareMenhLoc = rectCache.clone({
        x: pos.x + padContent,
        y: pos.y + padContentBottom - bottomMargin - 4,
        width: 15,
        height: 15,
        // fill: getGradient([0,0,lsWidth,lsHeight],'#cdc9c9','#fffdf8'), // `#e3e3e3`'#fff9f3',//'#f2f1ed e8e8e0' #76767600 #e7e7df
        // fill: getGradient([0, 0, lsWidth, lsHeight], '#ddd', '#fff8ea'), // `#e3e3e3`'#fff9f3',//'#f2f1ed e8e8e0' #76767600 #e7e7df
        fill: colorHoaFill[0],
        stroke: colorHoa[0],
        strokeWidth: 1,
        opacity: 0.7,
        hitStrokeWidth: 0,
        shadowForStrokeEnabled: false,
        cornerRadius: 2
      });
      mGroup.add(squareMenhLoc);
      const textMenhLoc = drawText(
        {
          text: "A",
          fill: colorHoa[0],
          x: squareMenhLoc.x(),
          y: squareMenhLoc.y(),
          fontSize: fontDV - 2
        },
        fontDV - 2,
        fontFamilySet,
        mGroup
      );
      textMenhLoc.x(squareMenhLoc.x() + squareWidh / 2 - textMenhLoc.getTextWidth() / 2 - 1);
      textMenhLoc.y(squareMenhLoc.y() + squareHeight / 2 - textMenhLoc.getTextWidth() / 2 - 1.3);
    }
    if (cung.ci === ls.ars[ls.am].cno[3]) {
      const squareWidh = 18;
      const squareHeight = 18;
      const squareMenhKi = rectCache.clone({
        x: pos.x + padContent,
        y: pos.y + padContentBottom - bottomMargin - 4,
        width: 15,
        height: 15,
        fill: colorHoaFill[3],
        stroke: colorHoa[3],
        strokeWidth: 1,
        opacity: 0.7,
        hitStrokeWidth: 0,
        shadowForStrokeEnabled: false,
        cornerRadius: 2
      });
      mGroup.add(squareMenhKi);
      const textMenhKi = drawText(
        {
          text: "D",
          fill: colorHoa[3],
          x: squareMenhKi.x(),
          y: squareMenhKi.y(),
          fontSize: fontDV - 2
        },
        fontDV - 2,
        fontFamilySet,
        mGroup
      );
      textMenhKi.x(squareMenhKi.x() + squareWidh / 2 - textMenhKi.getTextWidth() / 2 - 1);
      textMenhKi.y(squareMenhKi.y() + squareHeight / 2 - textMenhKi.getTextWidth() / 2 - 1.3);
      if (isDrawMenhLoc) {
        squareMenhKi.x(squareMenhKi.x() + 18);
        textMenhKi.x(textMenhKi.x() + 18);
      }
    }
  }
  function drawBottom() {
    let sty = {};
    let bottomMargin = 21;
    if (cfgLs[CfgValue.batTuCung] === 1 && cfgLs[CfgValue.showSun] === 1) {
      bottomMargin = 33;
    }
    if (Number(cfgLs[CfgValue.showSun]) === 0 && cfgLs[CfgValue.batTuCung] === 0) {
      bottomMargin = 12;
    }
    if (cfgLs[CfgValue.isNapAmCung] === 0) {
      bottomMargin = 2;
    }
    if (!(typeLs === 4 || typeLs === 5)) {
      sty = {
        text: `V${cung.lmnp[0]}`,
        // ${CAN[cung.lmpt[2]].charAt(0)}.${CHI[cung.lmpt[3]]}
        fill: "#444",
        // color[LTHG_HH[cung.lmnp[3]]],
        x: pos.x + padContent - 2,
        y: pos.y + padContentBottom - bottomMargin,
        fontSize: fontDV - 2
      };
      const canMonthText = drawText(sty, fontDV, fontFamilySet, mGroup);
      sty = {};
      sty.x = pos.x + padContent;
      sty.y = pos.y + padContentBottom - bottomMargin;
      sty.text = `${CHI[cung.lynp].toUpperCase()}`;
      sty.fill = color[CHI_HH[cung.lynp]];
      sty.align = "left";
      sty.fontSize = fontDV - 3;
      sty.fontStyle = "bold";
      const tieuVanText = drawText(sty, fontDV, fontFamilySet, mGroup);
      if (ls.dtv.bs.y[1] === cung.lynp) {
        highlightBackground(tieuVanText, sty.fill);
      }
      canMonthText.x(tieuVanText.x() + tieuVanText.getTextWidth() + 2);
      if (ls.dtv.ln.m === cung.lmnp[0]) {
        highlightBackground(canMonthText, "#555");
      }
    }
    const idxThangThuc = (cung.lmpt[1][0] - 1 + 2) % 12;
    const cungCanThang = ls.ars[idxThangThuc];
    const luuNguyet = drawText(
      {
        text: `${CAN[cungCanThang.lmpt[2]].charAt(0)}.${CHI[cungCanThang.lmpt[3]]} P${cung.lmpt[1][0]}`,
        //
        fill: color[LTHG_HH[cungCanThang.lmpt[4]]],
        x: pos.x + wSquare - padContent,
        y: pos.y + padContentBottom - bottomMargin,
        fontSize: fontDV - 2,
        opacity: 1
      },
      fontDV,
      fontFamilySet,
      mGroup
    );
    luuNguyet.x(luuNguyet.x() - luuNguyet.getTextWidth());
    if (ls.dtv.ln.m === cung.lmpt[1][0]) {
      highlightBackground(luuNguyet, "#555");
    }
  }
  drawNameZone();
  if (Number(cfgLs[CfgValue.rotateZone]) === 1) {
    drawDaiVanTop();
  }
  drawMenhLocMenhKi();
  drawLuuNienTop();
  drawCanCungTop();
  drawBottom();
  if (Number(cfgLs[CfgValue.isNapAmCung]) === 1) {
    drawYears();
  }
  props.layer.add(mGroup);
  return props.layer;
}

function ZoneBigStar(props) {
  const {
    ls,
    color,
    colorHoa,
    colorHoaFill,
    fontPhuTinh,
    cung,
    fontDV,
    fontFamilySet,
    typeLs,
    pos,
    hafWSquare,
    fontChinhTinh,
    hSquare,
    wSquare,
    canHoa,
    thdraw
  } = props;
  const mGroup = new Konva.Group({});
  function drawText(obj, _bAdd = true) {
    let objMerge = {
      x: 500,
      y: 500,
      text: "",
      fontStyle: "normal",
      fontSize: fontDV,
      fontFamily: fontFamilySet,
      fill: "#000",
      strokeWidth: 0,
      perfectDrawEnabled: true,
      textDecoration: "",
      shadowColor: "#fff",
      shadowBlur: 0,
      shadowOffset: { x: 0, y: 0 },
      shadowOpacity: 0,
      hitStrokeWidth: 0,
      shadowForStrokeEnabled: false
    };
    objMerge = { ...objMerge, ...obj };
    const textObj = cachedTextCache.clone(objMerge);
    if (_bAdd) {
      mGroup.add(textObj);
    }
    return textObj;
  }
  function drawChinhTinh() {
    const chinhPosX = pos.x;
    let chinhPosY = pos.y + 38;
    let posRow2Start = 17;
    const sty = { fontSize: fontChinhTinh, fontStyle: "normal" };
    if (typeLs === 4 || typeLs === 5) {
      posRow2Start = 25;
      sty.fontSize = fontChinhTinh + 4;
      chinhPosY = pos.y + 70;
    }
    const isTuanTriet = typeof cung.tu !== "undefined" || typeof cung.tu !== "undefined";
    for (let id1 = 0; id1 < cung.sb.length; id1 += 1) {
      const idStar = cung.sb[id1];
      const star = SM[idStar];
      if (star.name.length > 0) {
        sty.text = star.name.toUpperCase();
        sty.fill = color[star.hh];
        sty.fontStyle = "bold";
        const preChinhTinh = drawText(sty, false);
        sty.x = chinhPosX + hafWSquare - preChinhTinh.getTextWidth() / 2;
        sty.y = chinhPosY;
        if (typeLs === 4) {
          const styLkStar = { ...sty, fontSize: fontChinhTinh - 6, fontStyle: "normal" };
          styLkStar.x = sty.x;
          styLkStar.y = sty.y - 9;
          if (cung.stlk.length > 0 && typeof cung.stlk[idStar] !== "undefined") {
            const lkStar = cung.stlk[idStar];
            styLkStar.text = `${lkStar[0]}A`;
            styLkStar.fill = colorHoa[0];
            const lkStarTextLoc = drawText(styLkStar);
            styLkStar.text = `${lkStar[1]}D`;
            styLkStar.fill = colorHoa[3];
            const lkStarTextKi = drawText(styLkStar);
            const totalWidth = lkStarTextLoc.getTextWidth() + lkStarTextKi.getTextWidth() + 4;
            lkStarTextLoc.x(pos.x + hafWSquare - totalWidth / 2);
            lkStarTextKi.x(lkStarTextLoc.x() + lkStarTextLoc.getTextWidth() + 4);
            if (lkStar[0] === 0) {
              lkStarTextLoc.destroy();
            }
            if (lkStar[1] === 0) {
              lkStarTextKi.destroy();
              if (lkStar[0] > 0) {
                lkStarTextLoc.x(lkStarTextLoc.x() + lkStarTextLoc.getTextWidth() + 4);
              }
            }
          }
        }
        const objLevel = star.lvl;
        let isBright = false;
        let textDH = "";
        if (objLevel !== void 0) {
          Object.entries(objLevel).forEach(([key, value], _index) => {
            if (Number(key) === cung.ci + 1 && (value === "M" || value === "V")) {
              isBright = true;
              textDH = value;
            }
            if (Number(key) === cung.ci + 1 && value === "H") {
              textDH = value;
            }
            if (Number(key) === cung.ci + 1) {
              textDH = value;
            }
          });
        }
        const isTurnOnLight = isBright && !isTuanTriet;
        if (!(typeLs === 4 || typeLs === 5) && isTurnOnLight) {
          sty.shadowColor = color[star.hh];
          sty.shadowBlur = 0;
          sty.shadowOpacity = 0;
          sty.shadowOffset = { x: 0, y: 0 };
        }
        let chinhTinh = drawText(sty);
        if (!(typeLs === 4 || typeLs === 5) && textDH.length > 0) {
          drawText({
            text: `(${textDH})`,
            fill: color[star.hh],
            fontSize: fontPhuTinh - 6,
            x: sty.x + chinhTinh.getTextWidth() + 1,
            y: sty.y - 1,
            fontStyle: sty.fontStyle
          });
        }
        if (typeLs !== 3 && star.nn !== void 0) {
          const xTienThien = sty.x - 11;
          const yTienThien = sty.y;
          drawHoaTienThien(
            mGroup,
            canHoa,
            ls.dtb.bs.y[0],
            cung.sb[id1],
            xTienThien,
            yTienThien,
            fontFamilySet,
            fontDV,
            colorHoa,
            colorHoaFill
          );
          const xStartHoa = chinhTinh.x() + chinhTinh.getTextWidth();
          const isDrawTuHoa = drawTuHoa(
            mGroup,
            canHoa,
            cung,
            pos,
            wSquare,
            hSquare,
            chinhTinh.x(),
            chinhTinh.y(),
            cung.sb[id1],
            fontDV,
            fontFamilySet,
            colorHoa,
            thdraw,
            ls
          );
          if (isDrawTuHoa) {
            thdraw[cung.ci] += 1;
          }
          const xDaiVan = xStartHoa + 14;
          const yDaiVan = chinhTinh.y() + 1.5;
          const isDrawPhDaiVan = drawHoaDaiVan(
            mGroup,
            canHoa,
            cung,
            xDaiVan,
            yDaiVan,
            cung.sb[id1],
            ls,
            fontDV,
            fontFamilySet,
            colorHoa
          );
          const xLn = isDrawPhDaiVan ? xDaiVan + 12 : xDaiVan;
          const isDrawPhLuuNien = drawHoaLuuNien(
            mGroup,
            canHoa,
            cung,
            xLn,
            yDaiVan,
            cung.sb[id1],
            ls,
            fontDV,
            fontFamilySet,
            colorHoa
          );
          const xCanThang = isDrawPhLuuNien ? xLn + 10 : isDrawPhDaiVan ? xDaiVan + 12 : xDaiVan;
          const isDrawCanThang = drawHoaCanThang(
            mGroup,
            canHoa,
            cung,
            xCanThang,
            yDaiVan,
            cung.sb[id1],
            ls,
            fontDV,
            fontFamilySet,
            colorHoa
          );
          const xCanCungLD = isDrawCanThang ? xCanThang + 10 : isDrawPhLuuNien ? xLn + 10 : isDrawPhDaiVan ? xDaiVan + 12 : xDaiVan;
          drawHoaCanNgay(mGroup, canHoa, cung, xCanCungLD, yDaiVan, cung.sb[id1], ls, fontDV, fontFamilySet, colorHoa);
          drawText({
            text: `${star.nn[1] > 0 ? "+" : "-"}`,
            fill: color[star.hh],
            fontSize: fontPhuTinh - 3,
            x: chinhTinh.x() + chinhTinh.getTextWidth() + 4,
            y: chinhTinh.y() + 5,
            fontStyle: sty.fontStyle
          });
        }
        chinhTinh = cachedTextCache.clone({});
        chinhPosY += posRow2Start;
      }
    }
  }
  drawChinhTinh();
  props.layer.add(mGroup);
  return props.layer;
}

function ZoneFly(props) {
  const {
    colorHoaFill60,
    // colorHoaStart,
    fontPhuTinh,
    idx,
    cung,
    fontDV,
    fontFamilySet,
    typeLs,
    pos,
    hafWSquare,
    hafHSquare,
    colorHoa,
    padContent,
    // wSquare,
    // colorHoaFill,
    xBox12,
    yBox34,
    yBox14,
    yBox12,
    xBox34,
    xBox14,
    getGradient,
    typePhiHoa,
    ls,
    countHt
  } = props;
  const mGroup = new Konva.Group({});
  function arrowPosition() {
    const posArrow = [];
    const padArrow = 17;
    posArrow[0] = [
      { pos: [xBox12 + hafWSquare, yBox34, xBox14 + hafWSquare, yBox14] },
      // 1
      { pos: [xBox14 + hafWSquare, yBox34, xBox12 + hafWSquare, yBox14] },
      // 2
      { pos: [xBox14, yBox34, xBox34, yBox14] },
      // 3
      { pos: [xBox14, yBox12 + hafHSquare, xBox34, yBox14 + hafHSquare] },
      // 4
      { pos: [xBox14, yBox14 + hafHSquare, xBox34, yBox12 + hafHSquare] },
      // 5
      { pos: [xBox14, yBox14, xBox34, yBox34] },
      // 6
      { pos: [xBox14 + hafWSquare, yBox14, xBox12 + hafWSquare, yBox34] },
      // 7
      { pos: [xBox12 + hafWSquare, yBox14, xBox14 + hafWSquare, yBox34] },
      // 8
      { pos: [xBox34, yBox14, xBox14, yBox34] },
      // 9
      { pos: [xBox34, yBox14 + hafHSquare, xBox14, yBox12 + hafHSquare] },
      // 10
      { pos: [xBox34, yBox12 + hafHSquare, xBox14, yBox14 + hafHSquare] },
      // 11
      { pos: [xBox34, yBox34, xBox14, yBox14] }
      // 12
    ];
    posArrow[1] = [
      {
        pos: [
          posArrow[0][0].pos[0] - padArrow,
          posArrow[0][0].pos[1],
          posArrow[0][0].pos[2] + padArrow,
          posArrow[0][0].pos[3]
        ]
      },
      // 1
      {
        pos: [
          posArrow[0][1].pos[0] - padArrow,
          posArrow[0][1].pos[1],
          posArrow[0][1].pos[2] + padArrow,
          posArrow[0][1].pos[3]
        ]
      },
      // 2
      {
        pos: [
          posArrow[0][2].pos[0] - padArrow,
          posArrow[0][2].pos[1],
          posArrow[0][2].pos[2] + padArrow,
          posArrow[0][2].pos[3]
        ]
      },
      // 3
      {
        pos: [
          posArrow[0][3].pos[0],
          posArrow[0][3].pos[1] - padArrow,
          posArrow[0][3].pos[2],
          posArrow[0][3].pos[3] + padArrow
        ]
      },
      // 4
      {
        pos: [
          posArrow[0][4].pos[0],
          posArrow[0][4].pos[1] - padArrow,
          posArrow[0][4].pos[2],
          posArrow[0][4].pos[3] + padArrow
        ]
      },
      // 5
      {
        pos: [
          posArrow[0][5].pos[0],
          posArrow[0][5].pos[1] - padArrow,
          posArrow[0][5].pos[2],
          posArrow[0][5].pos[3] + padArrow
        ]
      },
      // 6
      {
        pos: [
          posArrow[0][6].pos[0] + padArrow,
          posArrow[0][6].pos[1],
          posArrow[0][6].pos[2] - padArrow,
          posArrow[0][6].pos[3]
        ]
      },
      // 7
      {
        pos: [
          posArrow[0][7].pos[0] + padArrow,
          posArrow[0][7].pos[1],
          posArrow[0][7].pos[2] - padArrow,
          posArrow[0][7].pos[3]
        ]
      },
      // 8
      {
        pos: [
          posArrow[0][8].pos[0] + padArrow,
          posArrow[0][8].pos[1],
          posArrow[0][8].pos[2] - padArrow,
          posArrow[0][8].pos[3]
        ]
      },
      // 9
      {
        pos: [
          posArrow[0][9].pos[0],
          posArrow[0][9].pos[1] + padArrow,
          posArrow[0][9].pos[2],
          posArrow[0][9].pos[3] - padArrow
        ]
      },
      // 10
      {
        pos: [
          posArrow[0][10].pos[0],
          posArrow[0][10].pos[1] + padArrow,
          posArrow[0][10].pos[2],
          posArrow[0][10].pos[3] - padArrow
        ]
      },
      // 11
      {
        pos: [
          posArrow[0][11].pos[0],
          posArrow[0][11].pos[1] + padArrow,
          posArrow[0][11].pos[2],
          posArrow[0][11].pos[3] - padArrow
        ]
      }
      // 12
    ];
    posArrow[2] = [
      {
        pos: [
          posArrow[0][0].pos[0] + padArrow,
          posArrow[0][0].pos[1],
          posArrow[0][0].pos[2] - padArrow,
          posArrow[0][0].pos[3]
        ]
      },
      // 1
      {
        pos: [
          posArrow[0][1].pos[0] + padArrow,
          posArrow[0][1].pos[1],
          posArrow[0][1].pos[2] - padArrow,
          posArrow[0][1].pos[3]
        ]
      },
      // 2
      {
        pos: [
          posArrow[0][2].pos[0],
          posArrow[0][2].pos[1] + padArrow,
          posArrow[0][2].pos[2],
          posArrow[0][2].pos[3] - padArrow
        ]
      },
      // 3
      {
        pos: [
          posArrow[0][3].pos[0],
          posArrow[0][3].pos[1] + padArrow,
          posArrow[0][3].pos[2],
          posArrow[0][3].pos[3] - padArrow
        ]
      },
      // 4
      {
        pos: [
          posArrow[0][4].pos[0],
          posArrow[0][4].pos[1] + padArrow,
          posArrow[0][4].pos[2],
          posArrow[0][4].pos[3] - padArrow
        ]
      },
      // 5
      {
        pos: [
          posArrow[0][5].pos[0] - padArrow,
          posArrow[0][5].pos[1],
          posArrow[0][5].pos[2] + padArrow,
          posArrow[0][5].pos[3]
        ]
      },
      // 6
      {
        pos: [
          posArrow[0][6].pos[0] - padArrow,
          posArrow[0][6].pos[1],
          posArrow[0][6].pos[2] + padArrow,
          posArrow[0][6].pos[3]
        ]
      },
      // 7
      {
        pos: [
          posArrow[0][7].pos[0] - padArrow,
          posArrow[0][7].pos[1],
          posArrow[0][7].pos[2] + padArrow,
          posArrow[0][7].pos[3]
        ]
      },
      // 8
      {
        pos: [
          posArrow[0][8].pos[0],
          posArrow[0][8].pos[1] - padArrow,
          posArrow[0][8].pos[2],
          posArrow[0][8].pos[3] + padArrow
        ]
      },
      // 9
      {
        pos: [
          posArrow[0][9].pos[0],
          posArrow[0][9].pos[1] - padArrow,
          posArrow[0][9].pos[2],
          posArrow[0][9].pos[3] + padArrow
        ]
      },
      // 10
      {
        pos: [
          posArrow[0][10].pos[0],
          posArrow[0][10].pos[1] - padArrow,
          posArrow[0][10].pos[2],
          posArrow[0][10].pos[3] + padArrow
        ]
      },
      // 11
      {
        pos: [
          posArrow[0][11].pos[0] + padArrow,
          posArrow[0][11].pos[1],
          posArrow[0][11].pos[2] - padArrow,
          posArrow[0][11].pos[3]
        ]
      }
      // 12
    ];
    posArrow[3] = [
      {
        pos: [
          posArrow[0][0].pos[0] - padArrow * 2,
          posArrow[0][0].pos[1],
          posArrow[0][0].pos[2] + padArrow * 2,
          posArrow[0][0].pos[3]
        ]
      },
      // 1
      {
        pos: [
          posArrow[0][1].pos[0] - padArrow * 2,
          posArrow[0][1].pos[1],
          posArrow[0][1].pos[2] + padArrow * 2,
          posArrow[0][1].pos[3]
        ]
      },
      // 2
      {
        pos: [
          posArrow[0][2].pos[0] - padArrow * 2,
          posArrow[0][2].pos[1],
          posArrow[0][2].pos[2] + padArrow * 2,
          posArrow[0][2].pos[3]
        ]
      },
      // 3
      {
        pos: [
          posArrow[0][3].pos[0],
          posArrow[0][3].pos[1] - padArrow * 2,
          posArrow[0][3].pos[2],
          posArrow[0][3].pos[3] + padArrow * 2
        ]
      },
      // 4
      {
        pos: [
          posArrow[0][4].pos[0],
          posArrow[0][4].pos[1] - padArrow * 2,
          posArrow[0][4].pos[2],
          posArrow[0][4].pos[3] + padArrow * 2
        ]
      },
      // 5
      {
        pos: [
          posArrow[0][5].pos[0],
          posArrow[0][5].pos[1] - padArrow * 2,
          posArrow[0][5].pos[2],
          posArrow[0][5].pos[3] + padArrow * 2
        ]
      },
      // 6
      {
        pos: [
          posArrow[0][6].pos[0] + padArrow * 2,
          posArrow[0][6].pos[1],
          posArrow[0][6].pos[2] - padArrow * 2,
          posArrow[0][6].pos[3]
        ]
      },
      // 7
      {
        pos: [
          posArrow[0][7].pos[0] + padArrow * 2,
          posArrow[0][7].pos[1],
          posArrow[0][7].pos[2] - padArrow * 2,
          posArrow[0][7].pos[3]
        ]
      },
      // 8
      {
        pos: [
          posArrow[0][8].pos[0] + padArrow * 2,
          posArrow[0][8].pos[1],
          posArrow[0][8].pos[2] - padArrow * 2,
          posArrow[0][8].pos[3]
        ]
      },
      // 9
      {
        pos: [
          posArrow[0][9].pos[0],
          posArrow[0][9].pos[1] + padArrow * 2,
          posArrow[0][9].pos[2],
          posArrow[0][9].pos[3] - padArrow * 2
        ]
      },
      // 10
      {
        pos: [
          posArrow[0][10].pos[0],
          posArrow[0][10].pos[1] + padArrow * 2,
          posArrow[0][10].pos[2],
          posArrow[0][10].pos[3] - padArrow * 2
        ]
      },
      // 11
      {
        pos: [
          posArrow[0][11].pos[0],
          posArrow[0][11].pos[1] + padArrow * 2,
          posArrow[0][11].pos[2],
          posArrow[0][11].pos[3] - padArrow * 2
        ]
      }
      // 12
    ];
    return posArrow;
  }
  function checkNgaCung(idxIn) {
    const icons = [true, false];
    const outZone = [
      icons[0],
      icons[1],
      icons[0],
      icons[0],
      icons[0],
      icons[1],
      icons[1],
      icons[0],
      icons[0],
      icons[1],
      icons[1],
      icons[1]
    ];
    return outZone[ls.ars[idxIn].ai];
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function drawPhiCungName() {
    const sty = {
      text: "T.HÓA",
      fill: colorHoa[3],
      x: pos.x,
      y: pos.y + padContent + fontDV + 2.7,
      fontSize: fontPhuTinh - 4,
      opacity: 0.7,
      fontStyle: "normal"
    };
    const padText = 2.3;
    const namePhi = [];
    const iconPhi = [];
    let totalWidth = 0;
    for (let dr = 0; dr <= 3; dr += 1) {
      sty.text = `${capitalizeFirstLetter(AREA_NAME[ls.ars[cung.cno[dr]].ai].toLowerCase())}`;
      sty.fill = colorHoa[dr];
      sty.fontStyle = checkNgaCung(cung.cno[dr]) ? "bold" : "normal";
      sty.opacity = 0.8;
      namePhi[dr] = drawText(sty, fontDV, fontFamilySet, mGroup);
      sty.x = sty.x + namePhi[dr].getTextWidth() + padText;
      totalWidth = totalWidth + namePhi[dr].getTextWidth() + padText;
      if (cung.cno[dr] === idx) {
        namePhi[dr].text(`✱`);
        namePhi[dr].fontSize(fontPhuTinh - 3);
      }
    }
    let repairX = pos.x + hafWSquare - totalWidth / 2 + 4;
    for (let dr = 0; dr <= 3; dr += 1) {
      namePhi[dr].absolutePosition({ x: repairX, y: sty.y });
      repairX = namePhi[dr].x() + namePhi[dr].getTextWidth() + padText;
      if (ls.cfg[CfgValue.tuanHoanZone] === 1) {
        ls.loopPT[dr].forEach((item, i) => {
          if (item.includes(idx)) {
            const iconText = ["⇄", "⇅", "⟳", "⟲", "⇊"];
            const iconStyle = {
              text: iconText[i],
              fill: colorHoa[dr],
              x: namePhi[dr].x() + namePhi[dr].getTextWidth() / 2 - 3.5,
              y: pos.y + padContent + fontDV + (i === 0 ? 10 : 12),
              fontSize: fontPhuTinh - 5,
              opacity: 1,
              fontStyle: "normal"
            };
            if (iconPhi[dr] === void 0) {
              iconPhi[dr] = [];
            }
            iconPhi[dr][i] = drawText(iconStyle, fontDV, fontFamilySet, mGroup);
          }
        });
      }
    }
  }
  function drawCountLocKi() {
    const numberLoc = cung.zolk[0][ZolkName.currentLoc];
    const numberKi = cung.zolk[3][ZolkName.currentKi];
    let textDrLoc = null;
    let textDrLoc1 = null;
    let textDrKi = null;
    const iconInfiniti = "∞";
    const sty = {
      text: "",
      fill: "",
      x: pos.x + hafWSquare,
      y: pos.y + hafHSquare * 2 - 48,
      fontSize: typeLs === 4 ? fontPhuTinh + 2 : fontPhuTinh - 2,
      opacity: typeLs === 4 ? 1 : 0.8,
      fontStyle: "bold"
    };
    const iconLoc = typeLs === 4 || typeLs === 5 ? "A" : "";
    const iconKi = typeLs === 4 || typeLs === 5 ? "D" : "";
    if (numberLoc > 0) {
      if (!containsNumber(ls.loopLP[0], idx)) {
        sty.text = numberLoc.toString() + iconLoc;
        sty.fill = colorHoa[0];
        textDrLoc = drawText(sty, fontDV, fontFamilySet, mGroup);
        if (textDrLoc) {
          textDrLoc.x(textDrLoc.x() - textDrLoc.getTextWidth() / 2);
        }
      } else {
        if (cung.zolk[0][ZolkName.locKeep] === 0) {
          sty.text = numberLoc.toString() + iconLoc + iconInfiniti;
          sty.fill = colorHoa[0];
          textDrLoc = drawText(sty, fontDV, fontFamilySet, mGroup);
          if (textDrLoc) {
            textDrLoc.x(textDrLoc.x() - textDrLoc.getTextWidth() / 2);
          }
        } else {
          const numLocReal = numberLoc - cung.zolk[0][ZolkName.locKeep];
          sty.text = numLocReal > 0 ? cung.zolk[0][ZolkName.locKeep].toString() + iconLoc : numberLoc.toString() + iconLoc;
          sty.fill = colorHoa[0];
          textDrLoc = drawText(sty, fontDV, fontFamilySet, mGroup);
          if (textDrLoc) {
            textDrLoc.x(textDrLoc.x() - textDrLoc.getTextWidth() / 2);
          }
          if (numLocReal > 0) {
            sty.text = numLocReal + iconInfiniti;
            textDrLoc1 = drawText(sty, fontDV, fontFamilySet, mGroup);
            if (textDrLoc1) {
              textDrLoc1.x(textDrLoc1.x() - textDrLoc1.getTextWidth() / 2);
            }
          }
        }
      }
    } else if (containsNumber(ls.loopLP[0], idx) && numberLoc === 0) {
      sty.text = iconInfiniti;
      sty.fill = colorHoa[0];
      sty.fontSize = fontPhuTinh;
      textDrLoc = drawText(sty, fontDV, fontFamilySet, mGroup);
      if (textDrLoc) {
        textDrLoc.x(textDrLoc.x() - textDrLoc.getTextWidth() / 2);
      }
    }
    if (numberKi > 0 || containsNumber(ls.loopLP[3], idx)) {
      if (textDrLoc) textDrLoc.y(textDrLoc.y() - 15);
      if (textDrLoc1) textDrLoc1.y(textDrLoc1.y() - 30);
    } else if (textDrLoc1) {
      textDrLoc1.y(textDrLoc1.y() - 15);
    }
    if (numberKi > 0) {
      sty.text = numberKi.toString() + iconKi + (containsNumber(ls.loopLP[3], idx) ? iconInfiniti : "");
      sty.fill = colorHoa[3];
      textDrKi = drawText(sty, fontDV, fontFamilySet, mGroup);
      if (textDrKi) {
        textDrKi.x(textDrKi.x() - textDrKi.getTextWidth() / 2);
      }
    } else if (containsNumber(ls.loopLP[3], idx) && numberKi === 0) {
      sty.text = iconInfiniti;
      sty.fill = colorHoa[3];
      sty.fontSize = fontPhuTinh;
      textDrKi = drawText(sty, fontDV, fontFamilySet, mGroup);
      if (textDrKi) {
        textDrKi.x(textDrKi.x() - textDrKi.getTextWidth() / 2);
      }
    }
    if (textDrLoc) mGroup.add(textDrLoc);
    if (textDrLoc1) mGroup.add(textDrLoc1);
    if (textDrKi) mGroup.add(textDrKi);
    if (textDrLoc) textDrLoc.moveToTop();
    if (textDrLoc1) textDrLoc1.moveToTop();
    if (textDrKi) textDrKi.moveToTop();
    return [textDrLoc, textDrKi, textDrLoc1];
  }
  function repair12(idxCung) {
    let idxCungProccess = Number(idxCung);
    if (idxCungProccess > 11) {
      idxCungProccess -= 12;
    }
    return idxCungProccess;
  }
  function doiXung(idxCung) {
    return repair12(idxCung + 6);
  }
  function drawHuongTam() {
    const posArrow = arrowPosition();
    for (let dr = 0; dr <= 3; dr += 1) {
      const idxDoiCung = doiXung(idx);
      const isDraw = cung.cno[dr] === idxDoiCung;
      const isLocChuyenKi = cung.zolk[0][ZolkName.isMoveLoc] === 1;
      const isKiChuyenKi = cung.zolk[3][ZolkName.isMoveKi] === 1;
      if (isDraw && typeLs !== 4 || typeLs === 4 && typePhiHoa === dr && isDraw || // lá số lương phái và cần vẽ phi hóa
      typeLs === 1 && typePhiHoa === dr && isDraw || // lá số lương phái và cần vẽ phi hóa
      typeLs === 8 && typePhiHoa === dr && isDraw || // lá số lương phái và cần vẽ phi hóa
      isDraw && isLocChuyenKi && dr === 3 && typePhiHoa !== 1 && typePhiHoa !== 2) {
        const levelDoiCung = countHt[idxDoiCung] ?? 0;
        const levelCurrentCung = countHt[idx] ?? 0;
        let levelUse = levelCurrentCung;
        if (levelDoiCung > levelCurrentCung) {
          countHt[idx] = levelDoiCung;
          levelUse = levelDoiCung;
        }
        const posDr = posArrow[levelUse][idx];
        if (typePhiHoa === dr || typeLs !== 1 && typeLs !== 8 || isLocChuyenKi && dr === 3) {
          const fillColor = colorHoa[dr];
          const sty = {
            opacity: 0.8,
            points: posDr.pos,
            fill: fillColor,
            // colorHoa[dr]
            stroke: fillColor,
            // getGradient(posDr.pos, colorHoa[dr], colorHoaStart[dr]),//
            strokeWidth: 2.5,
            pointerLength: 20,
            pointerWidth: 8
          };
          if ((isKiChuyenKi && typePhiHoa === 3 || isLocChuyenKi && typePhiHoa === 0 && dr === 3) && (typeLs === 0 || typeLs === 1 || typeLs === 4 || typeLs === 8) && dr === 3) {
            sty.dash = [12, 3];
          }
          if (typeLs === 4) {
            sty.strokeWidth = 3;
          }
          mGroup.add(arrowCache.clone(sty));
        }
        countHt[idx] = levelUse + 1;
        countHt[idxDoiCung] = countHt[idx];
      }
    }
  }
  function buildPointPhi(idxEnd, _idxTypeHoa, isSameLocKi = false) {
    const pointsBuild = [[], [], [], [], [], []];
    if (idx === idxEnd || idxEnd === doiXung(idx)) {
      return [-2e3, -2e3, -2e3, -2e3, -2e3, -2e3];
    }
    const posArrow = arrowPosition();
    const posDr = posArrow[0][idx];
    const posDrEnd = posArrow[3][idxEnd];
    pointsBuild[0] = posDr.pos[0];
    pointsBuild[1] = posDr.pos[1];
    pointsBuild[4] = posDrEnd.pos[0];
    pointsBuild[5] = posDrEnd.pos[1];
    if (idxEnd === 6 || idxEnd === 7) {
      pointsBuild[4] += 15;
    }
    const roundPointX = (pointsBuild[4] - pointsBuild[0]) / 2;
    const roundPointY = (pointsBuild[5] - pointsBuild[1]) / 2;
    const xR = pointsBuild[0] + roundPointX;
    const yR = pointsBuild[1] + roundPointY;
    const pointRound = [];
    pointRound[0] = [
      [-2e3, -2e3],
      // 1
      [xR, yR - 30],
      // 2
      [xR - 10, yR - 50],
      // 3
      [xR + 10, yR - 30],
      // 4
      [xR + 30, yR - 30],
      // 5
      [xR + 30, yR - 50],
      // 6
      [xR - 10, yR - 80],
      // 7
      [xR - 50, yR],
      // 8
      [xR - 40, yR - 30],
      // 9
      [xR - 30, yR - 15],
      // 10
      [xR - 10, yR - 15],
      // 11
      [xR, yR - 30]
      // 12
    ];
    pointRound[1] = [
      [xR, yR - 25],
      // 1
      [-2e3, -2e3],
      // 2
      [xR, yR - 30],
      // 3
      [xR + 15, yR - 15],
      // 4
      [xR + 30, yR - 10],
      // 5
      [xR + 30, yR - 30],
      // 6
      [xR + 30, yR],
      // 7
      [xR - 10, yR - 80],
      // 8
      [xR - 50, yR - 50],
      // 9
      [xR - 30, yR - 30],
      // 10
      [xR - 10, yR - 40],
      // 11
      [xR - 10, yR - 40]
      // 12
    ];
    pointRound[2] = [
      [xR, yR - 45],
      // 1
      [xR, yR - 25],
      // 2
      [-2e3, -2e3],
      // 3
      [xR + 20, yR],
      // 4
      [xR + 30, yR - 10],
      // 5
      [xR + 80, yR],
      // 6
      [xR + 40, yR - 40],
      // 7
      [xR + 10, yR + 75],
      // 8
      [xR - 10, yR - 80],
      // 9
      [xR - 10, yR - 50],
      // 10
      [xR - 30, yR - 30],
      // 11
      [xR, yR - 80]
      // 12
    ];
    pointRound[3] = [
      [xR + 15, yR - 40],
      // 1
      [xR + 20, yR - 20],
      // 2
      [xR + 30, yR],
      // 3
      [-2e3, -2e3],
      // 4
      [xR + 30, yR - 10],
      // 5
      [xR + 40, yR - 10],
      // 6
      [xR + 40, yR - 10],
      // 7
      [xR + 10, yR + 60],
      // 8
      [xR + 30, yR + 50],
      // 9
      [xR - 10, yR - 80],
      // 10
      [xR, yR - 30],
      // 11
      [xR + 30, yR - 35]
      // 12
    ];
    pointRound[4] = [
      [xR + 30, yR - 30],
      // 1
      [xR + 25, yR - 10],
      // 2
      [xR + 40, yR + 20],
      // 3
      [xR + 30, yR],
      // 4
      [-2e3, -2e3],
      // 5
      [xR + 30, yR],
      // 6
      [xR + 15, yR + 15],
      // 7
      [xR + 10, yR + 35],
      // 8
      [xR + 20, yR + 50],
      // 9
      [xR, yR + 40],
      // 10
      [xR - 10, yR - 80],
      // 11
      [xR - 10, yR - 80]
      // 12
    ];
    pointRound[5] = [
      [xR + 40, yR - 10],
      // 1
      [xR + 25, yR - 5],
      // 2
      [xR + 80, yR],
      // 3
      [xR + 50, yR - 5],
      // 4
      [xR + 20, yR - 10],
      // 5
      [-2e3, -2e3],
      // 6
      [xR, yR + 25],
      // 7
      [xR + 10, yR + 30],
      // 8
      [xR, yR + 80],
      // 9
      [xR + 10, yR + 50],
      // 10
      [xR - 30, yR + 40],
      // 11
      [xR - 10, yR - 80]
      // 12
    ];
    pointRound[6] = [
      [xR - 30, yR - 30],
      // 1
      [xR + 30, yR],
      // 2
      [xR + 30, yR + 20],
      // 3
      [xR + 30, yR + 25],
      // 4
      [xR + 20, yR + 20],
      // 5
      [xR - 10, yR + 25],
      // 6
      [-2e3, -2e3],
      // 7
      [xR, yR + 25],
      // 8
      [xR - 10, yR + 40],
      // 9
      [xR - 10, yR + 30],
      // 10
      [xR - 40, yR + 40],
      // 11
      [xR - 50, yR + 40]
      // 12
    ];
    pointRound[7] = [
      [xR - 30, yR - 30],
      // 1
      [xR - 30, yR - 30],
      // 2
      [xR + 40, yR + 20],
      // 3
      [xR + 40, yR + 40],
      // 4
      [xR + 10, yR + 30],
      // 5
      [xR + 10, yR + 40],
      // 6
      [xR + 10, yR + 25],
      // 7
      [-2e3, -2e3],
      // 8
      [xR, yR + 25],
      // 9
      [xR - 20, yR + 20],
      // 10
      [xR - 30, yR - 10],
      // 11
      [xR - 35, yR]
      // 12
    ];
    pointRound[8] = [
      [xR - 30, yR - 30],
      // 1
      [xR - 50, yR - 10],
      // 2
      [xR - 40, yR - 20],
      // 3
      [xR + 20, yR + 60],
      // 4
      [xR - 10, yR + 40],
      // 5
      [xR + 10, yR + 80],
      // 6
      [xR, yR + 30],
      // 7
      [xR, yR + 20],
      // 8
      [-2e3, -2e3],
      // 9
      [xR - 25, yR],
      // 10
      [xR - 40, yR],
      // 11
      [xR - 50, yR - 10]
      // 12
    ];
    pointRound[9] = [
      [xR - 30, yR - 30],
      // 1
      [xR - 30, yR - 30],
      // 2
      [xR - 20, yR - 90],
      // 3
      [xR - 40, yR - 20],
      // 4
      [xR, yR + 60],
      // 5
      [xR - 10, yR + 40],
      // 6
      [xR - 10, yR + 40],
      // 7
      [xR - 15, yR + 15],
      // 8
      [xR - 25, yR - 10],
      // 9
      [-2e3, -2e3],
      // 10
      [xR - 30, yR - 10],
      // 11
      [xR - 50, yR - 10]
      // 12
    ];
    pointRound[10] = [
      [xR - 20, yR - 20],
      // 1
      [xR - 10, yR - 35],
      // 2
      [xR - 5, yR - 40],
      // 3
      [xR, yR - 50],
      // 4
      [xR - 10, yR - 80],
      // 5
      [xR - 30, yR + 40],
      // 6
      [xR - 10, yR + 40],
      // 7
      [xR - 25, yR + 10],
      // 8
      [xR - 60, yR],
      // 9
      [xR - 30, yR - 10],
      // 10
      [-2e3, -2e3],
      // 11
      [xR - 25, yR]
      // 12
    ];
    pointRound[11] = [
      [xR, yR - 25],
      // 1
      [xR - 30, yR - 30],
      // 2
      [xR, yR - 80],
      // 3
      [xR + 10, yR - 50],
      // 4
      [xR + 30, yR - 30],
      // 5
      [xR - 10, yR - 80],
      // 6
      [xR - 50, yR - 20],
      // 7
      [xR - 25, yR + 5],
      // 8
      [xR - 80, yR],
      // 9
      [xR - 40, yR - 10],
      // 10
      [xR - 20, yR],
      // 11
      [-2e3, -2e3]
      // 12
    ];
    pointsBuild[2] = pointRound[idx][idxEnd][0];
    pointsBuild[3] = pointRound[idx][idxEnd][1];
    if (isSameLocKi) {
      pointsBuild[2] = pointsBuild[2] + Math.floor(Math.random() * 30) + 10;
      pointsBuild[3] = pointsBuild[3] + Math.floor(Math.random() * 30) + 10;
    }
    return pointsBuild;
  }
  function drawChuyenKi(_idHoa) {
    const colorCK = colorHoa[3];
    const idxEnd = cung.cno[3];
    const sty = {
      fill: colorCK,
      stroke: colorCK,
      pointerLength: 11,
      pointerWidth: 4,
      tension: 0.5,
      opacity: 0.5,
      strokeWidth: 1,
      dash: [8, 4]
    };
    sty.points = buildPointPhi(idxEnd);
    if (checkNgaCung(idxEnd)) {
      sty.strokeWidth = 1.7;
      sty.opacity = 0.7;
    }
    if (typeLs === 4 || typeLs === 5) {
      sty.opacity = 0.7;
      sty.strokeWidth = 1.5;
      if (checkNgaCung(idxEnd)) {
        sty.opacity = 0.9;
        sty.strokeWidth = 2;
      }
    }
    sty.stroke = getGradient(sty.points, colorCK, colorCK);
    mGroup.add(arrowCache.clone(sty));
  }
  function drawPhiHoaCung(hoa) {
    const colorPhiCung = colorHoa[hoa];
    const idxEnd = cung.cno[hoa];
    let bChuyen = false;
    if (hoa === 0 || hoa === 3) {
      bChuyen = cung.zolk[hoa][hoa === 0 ? ZolkName.isMoveLoc : hoa === 3 ? ZolkName.isMoveKi : 3] === 1;
    }
    const arrDash = [7, 3];
    const strokeW = 0.4;
    const sty = {
      fill: colorPhiCung,
      stroke: colorPhiCung,
      pointerLength: 11,
      pointerWidth: 5,
      tension: 0.6,
      opacity: 0.6,
      strokeWidth: strokeW
    };
    switch (hoa) {
      case 0:
        if (bChuyen) {
          drawChuyenKi();
        }
        break;
      case 1:
        if (bChuyen) {
          drawChuyenKi();
        }
        break;
      case 2:
        if (bChuyen) {
          drawChuyenKi();
        }
        break;
    }
    if (idxEnd < 0 || idxEnd === cung.ci) {
      return;
    }
    sty.points = buildPointPhi(idxEnd);
    const idxEndKi = cung.cno[3];
    if (!(hoa === 3) && idxEnd === idxEndKi) {
      sty.points = buildPointPhi(idxEnd, hoa, true);
    }
    const isNgaCungV = checkNgaCung(idxEnd);
    const isChuyenKi = bChuyen && hoa === 3;
    if (isNgaCungV) {
      sty.strokeWidth = 1.5;
      sty.opacity = 0.7;
    }
    if (isChuyenKi) {
      sty.dash = arrDash;
      sty.opacity = 0.8;
      sty.strokeWidth = 2;
    }
    if (isChuyenKi && isNgaCungV) {
      sty.opacity = 0.9;
    }
    if (typeLs === 4 || typeLs === 5) {
      sty.strokeWidth = 1.7;
      sty.opacity = sty.opacity + 0.2;
    }
    sty.stroke = getGradient(sty.points, colorPhiCung, colorHoaFill60[hoa]);
    mGroup.add(arrowCache.clone(sty));
  }
  function drawPhiHoa() {
    if (typeLs === 3) {
      return;
    }
    drawPhiCungName();
    if (ls.cfg[CfgValue.locKiToanDo] === 1) {
      drawCountLocKi();
    }
    if (typeLs === 0 || typeLs === 1 || typeLs === 4 || typeLs === 6 || typeLs === 8) {
      drawPhiHoaCung(typePhiHoa);
    }
    drawHuongTam();
  }
  drawPhiHoa();
  props.layer.add(mGroup);
  return props.layer;
}

function ZoneSmallStar(props) {
  const {
    ls,
    color,
    colorHoa,
    colorHoaFill,
    fontChinhTinh,
    fontPhuTinh,
    cung,
    fontDV,
    fontFamilySet,
    typeLs,
    pos,
    padContentBottom,
    padContent,
    wSquare,
    hafWSquare,
    hSquare,
    cfgLs,
    canHoa,
    thdraw
  } = props;
  const mGroup = new Konva.Group({});
  function drawText(obj, _bAdd = true) {
    let objMerge = {
      x: 500,
      y: 500,
      text: "",
      fontStyle: "normal",
      fontSize: fontDV,
      fontFamily: fontFamilySet,
      fill: "#000",
      shadowForStrokeEnabled: false,
      strokeWidth: 0,
      perfectDrawEnabled: true,
      textDecoration: "",
      shadowColor: "black",
      shadowBlur: 0,
      shadowOffset: { x: 0, y: 0 },
      shadowOpacity: 0
    };
    objMerge = { ...objMerge, ...obj };
    const textObj = cachedTextCache.clone(objMerge);
    if (_bAdd) {
      mGroup.add(textObj);
    }
    return textObj;
  }
  function drawTHXKBacPhai(phuX, phuY, star) {
    const lstTHXK = [60, 61, 62, 63];
    if (!lstTHXK.includes(star.id - 1)) return phuY;
    const sty = { fontSize: fontChinhTinh + 4, fontStyle: "normal" };
    const posRow2Start = 25;
    sty.x = phuX + hafWSquare;
    sty.y = phuY;
    sty.text = star.name.toUpperCase();
    sty.fill = color[star.hh];
    sty.fontStyle = "bold";
    const textStar = drawText(sty);
    const textStarY = textStar.y();
    textStar.x(textStar.x() - textStar.getTextWidth() / 2);
    const starID = star.id - 1;
    const arrStarHoa = [60, 61, 62, 63];
    if (typeLs === 4) {
      const styLkStar = { ...sty, fontSize: fontChinhTinh - 6, fontStyle: "normal" };
      styLkStar.x = sty.x;
      styLkStar.y = sty.y - 9;
      if (cung.stlk.length > 0 && typeof cung.stlk[starID] !== "undefined") {
        const lkStar = cung.stlk[starID];
        styLkStar.text = `${lkStar[0]}A`;
        styLkStar.fill = colorHoa[0];
        const lkStarTextLoc = drawText(styLkStar);
        styLkStar.text = `${lkStar[1]}D`;
        styLkStar.fill = colorHoa[3];
        const lkStarTextKi = drawText(styLkStar);
        const totalWidth = lkStarTextLoc.getTextWidth() + lkStarTextKi.getTextWidth() + 4;
        lkStarTextLoc.x(pos.x + hafWSquare - totalWidth / 2);
        lkStarTextKi.x(lkStarTextLoc.x() + lkStarTextLoc.getTextWidth() + 4);
        if (lkStar[0] === 0) {
          lkStarTextLoc.destroy();
        }
        if (lkStar[1] === 0) {
          lkStarTextKi.destroy();
          if (lkStar[0] > 0) {
            lkStarTextLoc.x(lkStarTextLoc.x() + lkStarTextLoc.getTextWidth() + 4);
          }
        }
      }
    }
    if (arrStarHoa.includes(starID)) {
      const xTienThien = textStar.x() - 11;
      const yTienThien = textStar.y();
      drawHoaTienThien(
        mGroup,
        canHoa,
        ls.dtb.bs.y[0],
        starID,
        xTienThien,
        yTienThien,
        fontFamilySet,
        fontDV,
        colorHoa,
        colorHoaFill
      );
      const xTuHoa = textStar.x() + textStar.getTextWidth() + 5;
      const yTuHoa = textStar.y() - 0.5;
      const isDrawTuHoa = drawTuHoa(
        mGroup,
        canHoa,
        cung,
        pos,
        wSquare,
        hSquare,
        xTuHoa,
        yTuHoa,
        starID,
        fontDV,
        fontFamilySet,
        colorHoa,
        thdraw,
        ls
      );
      if (isDrawTuHoa) {
        thdraw[cung.ci] += 1;
      }
      const xDaiVan = textStar.x() + textStar.getTextWidth() + 3;
      const yDaiVan = textStar.y() + 4;
      const isDrawPhDaiVan = drawHoaDaiVan(
        mGroup,
        canHoa,
        cung,
        xDaiVan,
        yDaiVan,
        starID,
        ls,
        fontDV,
        fontFamilySet,
        colorHoa
      );
      const xLn = isDrawPhDaiVan ? xDaiVan + 12 : xDaiVan;
      const isDrawPhLuuNien = drawHoaLuuNien(
        mGroup,
        canHoa,
        cung,
        xLn,
        yDaiVan,
        starID,
        ls,
        fontDV,
        fontFamilySet,
        colorHoa
      );
      const xCanCungLN = isDrawPhLuuNien ? xLn + 10 : xLn + 3;
      drawHoaCanThang(mGroup, canHoa, cung, xCanCungLN, yDaiVan, starID, ls, fontDV, fontFamilySet, colorHoa);
    }
    return textStarY + posRow2Start;
  }
  function drawTextPhuTinh(phuX, phuY, star, luuType, alignRight = false, fontPhuTinhC = fontPhuTinh) {
    if (typeLs === 4 || typeLs === 5) {
      if (star.zone === 1 && luuType === 0) {
        return drawTHXKBacPhai(phuX, phuY, star);
      }
      return phuY;
    }
    const luu = luuType > 0;
    const idStar = star.id - 1;
    const cfgShowStar = cfgLs[CfgValue.showHideStar];
    if (cfgShowStar > 0 && !luu) {
      if (cfgShowStar === 1 && !STARSTRONG.includes(idStar)) {
        return phuY;
      }
      if (cfgShowStar === 2 && !STARSTRONG.includes(idStar) && !STAR_SIGN.includes(idStar)) {
        return phuY;
      }
      if (cfgShowStar === 3 && !STARSTRONG.includes(idStar) && !STAR_SIGN.includes(idStar) && !CR_TS.includes(idStar)) {
        return phuY;
      }
      if (cfgShowStar === 4 && !STARSTRONG.includes(idStar) && !STAR_SIGN.includes(idStar) && !CR_TS.includes(idStar) && !FAILURE6.includes(idStar)) {
        return phuY;
      }
    }
    const isHoa = [64, 65, 66, 67].includes(idStar);
    const posPhuYNext = fontPhuTinhC - 1;
    if (isHoa && luu) {
      return phuY;
    }
    const vongsao = star.cir !== void 0;
    const important = star.iptt;
    const styleText = {
      text: star.name,
      x: phuX,
      y: phuY,
      fontSize: fontPhuTinhC - 1,
      fill: color[star.hh],
      width: vongsao && star.cir === "vts" ? wSquare : "auto",
      opacity: 1,
      align: "center",
      shadowEnabled: false,
      shadowOpacity: 0,
      shadowForStrokeEnabled: false,
      textDecoration: ""
    };
    if (luuType > 0) {
      styleText.fontSize = styleText.fontSize - 2;
      styleText.y = styleText.y + 1.6;
    }
    if (!luu) {
      if (Number(cfgLs[CfgValue.shortStar]) === 1) {
        styleText.text = star.sht;
      }
      if (important) {
        styleText.fontStyle = "bold";
        styleText.shadowColor = color[star.hh];
        styleText.shadowBlur = 0;
        styleText.shadowOffset = { x: 0, y: 0 };
        styleText.shadowOpacity = 0.8;
      } else {
        styleText.shadowOpacity = 0;
        styleText.fontStyle = "normal";
        styleText.textDecoration = "";
        if (vongsao && (star.cir === "vbs" || star.cir === "vtt")) ;
      }
    } else {
      styleText.fontStyle = "italic";
      styleText.opacity = 0.9;
    }
    const preStarText = drawText(styleText, false);
    if (alignRight) {
      styleText.x = phuX - preStarText.getTextWidth();
    }
    const isTuanTriet = typeof cung.tu !== "undefined" || typeof cung.tr !== "undefined";
    const objLevel = star.lvl;
    let levelValue = "";
    let padDacHam = 0;
    let isDacHam = false;
    if (objLevel !== void 0) {
      Object.entries(objLevel).forEach(([key, value], _index) => {
        if (Number(key) === cung.ci + 1) {
          levelValue = value;
          padDacHam = 5.5;
          isDacHam = true;
        }
      });
    }
    if (star.lvl !== void 0 && levelValue === "Đ" && !isTuanTriet && !luu) {
      styleText.shadowColor = color[star.hh];
      styleText.shadowBlur = 0;
      styleText.shadowOffset = { x: 0, y: 0 };
      styleText.shadowOpacity = 0.8;
      drawText(styleText);
    }
    if (star.lvl !== void 0 && levelValue === "H" && !isTuanTriet) ;
    const textStar = drawText(styleText);
    if (luuType > 0) {
      const styIcon = { ...styleText };
      switch (luuType) {
        case 1:
          styIcon.text = "Đ.";
          break;
        case 2:
          styIcon.text = "L.";
          break;
        case 3:
          styIcon.text = "T.";
          break;
      }
      styIcon.fontSize = styIcon.fontSize - 2;
      if (star.typ === 2) {
        textStar.x(textStar.x() - padContent + 3.5);
      } else {
        textStar.x(textStar.x() + 8);
      }
      styIcon.x = textStar.x() - 8;
      styIcon.y = textStar.y() + 1.5;
      drawText(styIcon);
    }
    const starID = star.id - 1;
    const arrStarHoa = [60, 61, 62, 63];
    if (!luu && arrStarHoa.includes(starID) && typeLs !== 3) {
      padDacHam = padDacHam === 0 ? padDacHam + 3 : padDacHam;
      const xTienThien = textStar.x() + textStar.getTextWidth() + padDacHam + 9;
      const yTienThien = textStar.y() - 1;
      const isDrawTienThien = drawHoaTienThien(
        mGroup,
        canHoa,
        ls.dtb.bs.y[0],
        starID,
        xTienThien,
        yTienThien,
        fontFamilySet,
        fontDV,
        colorHoa,
        colorHoaFill
      );
      const xTuHoa = textStar.x() + textStar.getTextWidth() + padDacHam + (isDrawTienThien ? 22 : 5);
      const yTuHoa = textStar.y() + 1;
      const isDrawTuHoa = drawTuHoa(
        mGroup,
        canHoa,
        cung,
        pos,
        wSquare,
        hSquare,
        xTuHoa,
        yTuHoa,
        starID,
        fontDV,
        fontFamilySet,
        colorHoa,
        thdraw,
        ls
      );
      if (isDrawTuHoa) {
        thdraw[cung.ci] += 1;
      }
      const xDaiVan = textStar.x() + textStar.getTextWidth() + padDacHam + (isDrawTienThien ? 20 : 2);
      const yDaiVan = textStar.y() + 2;
      const isDrawPhDaiVan = drawHoaDaiVan(
        mGroup,
        canHoa,
        cung,
        xDaiVan,
        yDaiVan,
        starID,
        ls,
        fontDV,
        fontFamilySet,
        colorHoa
      );
      const xLn = isDrawPhDaiVan ? xDaiVan + 12 : xDaiVan;
      const isDrawPhLuuNien = drawHoaLuuNien(
        mGroup,
        canHoa,
        cung,
        xLn,
        yDaiVan,
        starID,
        ls,
        fontDV,
        fontFamilySet,
        colorHoa
      );
      const xCanCungLN = isDrawPhLuuNien ? xLn + 11 : isDrawPhDaiVan ? xDaiVan + 12 : xDaiVan;
      const isCanLuuThang = drawHoaCanThang(
        mGroup,
        canHoa,
        cung,
        xCanCungLN,
        yDaiVan,
        starID,
        ls,
        fontDV,
        fontFamilySet,
        colorHoa
      );
      const xCanCungLD = isCanLuuThang ? xCanCungLN + 11 : isDrawPhLuuNien ? xLn + 11 : isDrawPhDaiVan ? xDaiVan + 12 : xDaiVan;
      drawHoaCanNgay(mGroup, canHoa, cung, xCanCungLD, yDaiVan, starID, ls, fontDV, fontFamilySet, colorHoa);
    }
    if (isDacHam && !luu) {
      styleText.x += textStar.getTextWidth();
      styleText.y -= 1;
      styleText.text = levelValue;
      styleText.fontSize = fontPhuTinh - 6;
      styleText.fontStyle = "normal";
      styleText.opacity = 1;
      styleText.shadowOpacity = 0;
      drawText(styleText);
    }
    preStarText.destroy();
    return phuY + posPhuYNext;
  }
  function drawStarColByType(starList, phuX1, phuY1, phuX2, phuY2, luuType = 0) {
    const cfgShowYearLoop = cfgLs[CfgValue.currentStar];
    for (let id1 = 0; id1 < starList.length; id1 += 1) {
      if (luuType > 0) {
        let dontDraw = false;
        let starLoopClone = ls.istc ? [...STARLOOP1, 58, 59, 62, 63] : STARLOOP1;
        starLoopClone = cfgShowYearLoop === 1 ? starLoopClone : cfgShowYearLoop === 2 ? [...starLoopClone, 25, 37, 82, 83, 85, 86] : [];
        if (starLoopClone.length > 0 && !starLoopClone.includes(starList[id1])) {
          dontDraw = true;
        }
        if (!ls.istc && [62, 63].includes(starList[id1])) {
          dontDraw = true;
        }
        if (dontDraw) {
          continue;
        }
      }
      if (Number(cfgLs[CfgValue.isADSat]) === 0 && (starList[id1] === 123 || starList[id1] === 124 || starList[id1] === 125)) {
        continue;
      }
      const star = SM[starList[id1]];
      if (!(star.cir !== void 0 && star.cir === "vts")) {
        if (star.typ === 1) {
          phuY1 = drawTextPhuTinh(phuX1, phuY1, star, luuType);
        }
        if (star.typ === 2) {
          phuY2 = drawTextPhuTinh(phuX2, phuY2, star, luuType, true);
        }
      }
    }
    return [phuY1, phuY2];
  }
  function drawStarColum() {
    let phuX1 = pos.x + padContent;
    const chinhTinhMb = 73;
    let phuY1 = pos.y + chinhTinhMb;
    const phuYFirst = phuY1;
    const phuX2 = pos.x + wSquare - padContent - 2;
    let phuY2 = phuYFirst;
    if (typeLs === 4 || typeLs === 5) {
      const ssCount = cung.sb.length;
      const rowPad = 25;
      const firsRow = pos.y + 70;
      const phuYarr = [firsRow, firsRow + rowPad, firsRow + rowPad * 2];
      phuX1 = pos.x;
      phuY1 = phuYarr[ssCount];
      phuY2 = phuY1;
    }
    const phuX3 = pos.x;
    let phuY3 = pos.y + padContentBottom - 21;
    if (cfgLs[CfgValue.batTuCung] === 1 && cfgLs[CfgValue.showSun] === 1) {
      phuY3 = pos.y + padContentBottom - 35;
    }
    if (cfgLs[CfgValue.batTuCung] === 0 && cfgLs[CfgValue.showSun] === 0) {
      phuY3 = pos.y + padContentBottom - 10;
    }
    if (!(typeLs === 4 || typeLs === 5)) {
      for (let id1 = 0; id1 < cung.ss.length; id1 += 1) {
        const star = SM[cung.ss[id1]];
        if (star.cir !== void 0 && star.cir === "vts") {
          phuY3 = drawTextPhuTinh(phuX3, phuY3, star, 0, false, 13);
        }
      }
    }
    const drawPhuTinh = drawStarColByType(cung.ss, phuX1, phuY1, phuX2, phuY2, 0);
    let dvDrawPhuTinh = drawPhuTinh;
    if (cfgLs[CfgValue.dvStar] === 1) {
      dvDrawPhuTinh = drawStarColByType(cung.sv, phuX1, drawPhuTinh[0], phuX2, drawPhuTinh[1], 1);
    }
    if (cfgLs[CfgValue.currentStar] > 0) {
      drawStarColByType(cung.sy, phuX1, dvDrawPhuTinh[0], phuX2, dvDrawPhuTinh[1], 2);
    }
  }
  function drawPhuTinhStar() {
    drawStarColum();
  }
  drawPhuTinhStar();
  props.layer.add(mGroup);
  return props.layer;
}

function Earth(props) {
  let layerPro = props.layer;
  const mGroup = new Konva.Group({});
  const cungpos = [
    { x: Number(props.xBox12), y: Number(props.yBox34) },
    { x: Number(props.xBox14), y: Number(props.yBox34) },
    { x: Number(props.xBox), y: Number(props.yBox34) },
    { x: Number(props.xBox), y: Number(props.yBox12) },
    { x: Number(props.xBox), y: Number(props.yBox14) },
    { x: Number(props.xBox), y: Number(props.yBox) },
    { x: Number(props.xBox14), y: Number(props.yBox) },
    { x: Number(props.xBox12), y: Number(props.yBox) },
    { x: Number(props.xBox34), y: Number(props.yBox) },
    { x: Number(props.xBox34), y: Number(props.yBox14) },
    { x: Number(props.xBox34), y: Number(props.yBox12) },
    { x: Number(props.xBox34), y: Number(props.yBox34) }
  ];
  let pos;
  let propZoneBase;
  const countHuongTam = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const countTuHoa = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let idx = 0; idx < 12; idx += 1) {
    pos = cungpos[idx];
    propZoneBase = {
      idx: Number(idx),
      cung: props.ls.ars[idx],
      pos,
      thdraw: countTuHoa
    };
    layerPro = ZoneBase({ ...propZoneBase, ...props });
    layerPro = ZoneBigStar({ ...propZoneBase, ...props });
    layerPro = ZoneSmallStar({ ...propZoneBase, ...props });
    const propZoneCount = { countHt: countHuongTam };
    layerPro = ZoneFly({ ...propZoneCount, ...propZoneBase, ...props });
  }
  function drawTuanTrietText(text, levelTr, pos2, idx, colorText = "#fff", colorBox = "#666", isBoth = false) {
    const fontSize = 9;
    const boxPadX = 10;
    const boxPad = 0;
    let widthBox = isBoth ? 50 : 43;
    if (levelTr > 0) {
      widthBox = isBoth ? 33 : 17;
    }
    const sty = {
      x: Number(pos2[0]) - widthBox / 2 + (levelTr > 0 ? 35 : 0),
      y: Number(pos2[1]) - fontSize / 2,
      text,
      fill: colorText,
      width: widthBox,
      align: "center",
      fontSize,
      perfectDrawEnabled: true,
      opacity: 1,
      shadowColor: "#000",
      shadowBlur: 0,
      shadowOpacity: 0,
      shadowOffset: { x: 0, y: 0 }
    };
    const txtTrt = drawText(sty, props.fontDV, props.fontFamilySet, mGroup);
    const boxTrt = rectCache.clone({
      x: txtTrt.x() - boxPadX / 2,
      y: txtTrt.y() - boxPad / 2,
      // idxPos[idx].y - 5,
      fill: colorBox,
      width: txtTrt.width() + boxPadX,
      //
      height: txtTrt.height() + boxPad,
      perfectDrawEnabled: true,
      strokeWidth: 0,
      opacity: 1,
      cornerRadius: 6,
      stroke: "#222",
      hitStrokeWidth: 0,
      shadowForStrokeEnabled: false
    });
    mGroup.add(boxTrt);
    if (boxTrt !== null) boxTrt.moveToTop();
    if (txtTrt !== null) txtTrt.moveToTop();
    if (idx === 6 || idx === 0) {
      if (levelTr === 0 && !isBoth) {
        txtTrt.absolutePosition({ x: sty.x + 17, y: sty.y + 18 });
        boxTrt.absolutePosition({ x: txtTrt.x(), y: txtTrt.y() + 5 });
      }
      if (levelTr === 0 && isBoth) {
        txtTrt.absolutePosition({ x: sty.x + 21, y: sty.y + 18 });
        boxTrt.absolutePosition({ x: txtTrt.x(), y: txtTrt.y() + 5 });
      }
      if (levelTr === 2 && !isBoth) {
        txtTrt.absolutePosition({ x: sty.x - 31, y: sty.y - 50 });
        boxTrt.absolutePosition({ x: txtTrt.x(), y: txtTrt.y() + 5 });
      }
      if (levelTr === 2 && isBoth) {
        txtTrt.absolutePosition({ x: sty.x - 23, y: sty.y - 50 });
        boxTrt.absolutePosition({ x: txtTrt.x(), y: txtTrt.y() + 5 });
      }
      txtTrt.rotation(-90);
      boxTrt.rotation(-90);
    }
  }
  function drawTuanTriet() {
    const areaTuTr = props.ls.ttr[0];
    const areaTuTrYear = props.ls.ttr[2];
    if (areaTuTr.length !== 0 || areaTuTrYear.length !== 0) {
      const arrTr = [
        [cungpos[0].x, cungpos[0].y + props.hafHSquare],
        [cungpos[2].x + props.hafWSquare, cungpos[2].y],
        [cungpos[4].x + props.hafWSquare, cungpos[4].y],
        [cungpos[7].x, cungpos[7].y + props.hafHSquare],
        [cungpos[9].x + props.hafWSquare, cungpos[9].y],
        [cungpos[11].x + props.hafWSquare, cungpos[11].y]
      ];
      if (areaTuTr.length !== 0) {
        const arIdxTu = areaTuTr[0];
        const arIdxTr = areaTuTr[1];
        if (arIdxTu[0] === arIdxTr[0]) {
          drawTuanTrietText("Tuần-Triệt", 0, arrTr[arIdxTu[0] / 2], arIdxTr[0], "#fff", "#111", true);
        } else {
          drawTuanTrietText("Tuần", 0, arrTr[arIdxTu[0] / 2], arIdxTu[0], "#fff", "#777", false);
          drawTuanTrietText("Triệt", 0, arrTr[arIdxTr[0] / 2], arIdxTr[0], "#fff", "#333", false);
        }
      }
      if (areaTuTrYear.length !== 0 && props.ls.cfg[CfgValue.lnTuTr] === 1) {
        const arIdxTu = areaTuTrYear[0];
        const arIdxTr = areaTuTrYear[1];
        if (arIdxTu[0] === arIdxTr[0]) {
          drawTuanTrietText("⊙-⊠", 2, arrTr[arIdxTu[0] / 2], arIdxTr[0], "#fff", "rgba(17, 17, 17, 1)", true);
        } else {
          drawTuanTrietText("⊙", 2, arrTr[arIdxTu[0] / 2], arIdxTu[0], "#fff", "rgba(119, 119, 119, 1)", false);
          drawTuanTrietText("⊠", 2, arrTr[arIdxTr[0] / 2], arIdxTr[0], "#fff", "rgba(51, 51, 51, 1)", false);
        }
      }
      layerPro.add(mGroup);
    }
  }
  if (!(props.typeLs === 5 || props.typeLs === 6)) {
    drawTuanTriet();
  }
  return layerPro;
}

function LinesBorder(props) {
  const {
    ls,
    xBox,
    borderOutWith,
    hafBorderOut,
    yBox,
    xBox14,
    yBox14,
    xBox12,
    yBox12,
    xBox34,
    yBox34,
    xBox4,
    yBox4,
    hafBorderIn,
    borderInnerWith
  } = props;
  function buildLines() {
    const strColorArr = ["#000000", "#000000", "#000000"];
    const strColor = strColorArr[ls.cfg[CfgValue.tcpb]];
    const outBorder = [
      {
        points: [xBox - hafBorderOut, yBox - hafBorderOut, xBox12 + hafBorderIn, yBox - hafBorderOut],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // bColor[6]
      {
        points: [xBox12, yBox - hafBorderOut, xBox34 + hafBorderIn, yBox - hafBorderOut],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // bColor[5]
      {
        points: [xBox34 + hafBorderIn, yBox - hafBorderOut, xBox4 + hafBorderOut, yBox - hafBorderOut],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // '#555'
      {
        points: [xBox4 + hafBorderOut, yBox - hafBorderOut, xBox4 + hafBorderOut, yBox12 + hafBorderIn],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // '#555'
      {
        points: [xBox4 + hafBorderOut, yBox12 + hafBorderIn, xBox4 + hafBorderOut, yBox34 + hafBorderIn],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // bColor[5]
      {
        points: [xBox4 + hafBorderOut, yBox34 + hafBorderIn, xBox4 + hafBorderOut, yBox4 + hafBorderOut],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // color
      {
        points: [xBox4 + hafBorderOut, yBox4 + hafBorderOut, xBox12 + hafBorderIn, yBox4 + hafBorderOut],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // color
      {
        points: [xBox12, yBox4 + hafBorderOut, xBox14 + hafBorderIn, yBox4 + hafBorderOut],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // bColor[5]
      {
        points: [xBox14 + hafBorderIn, yBox4 + hafBorderOut, xBox - hafBorderOut, yBox4 + hafBorderOut],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // bColor[3]
      {
        points: [xBox - hafBorderOut, yBox4 + hafBorderOut, xBox - hafBorderOut, yBox12 + hafBorderIn],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // bColor[3]
      {
        points: [xBox - hafBorderOut, yBox12 + hafBorderIn, xBox - hafBorderOut, yBox14 + hafBorderIn],
        color: strColor,
        strokeWidth: borderOutWith
      },
      // bColor[5]
      {
        points: [xBox - hafBorderOut, yBox14 + hafBorderIn, xBox - hafBorderOut, yBox - hafBorderOut],
        color: strColor,
        strokeWidth: borderOutWith
      }
      // bColor[6]
    ];
    const lineCenters = [
      {
        points: [xBox14 + hafBorderIn, yBox - hafBorderIn, xBox14 + hafBorderIn, yBox4 + hafBorderOut],
        color: strColor,
        strokeWidth: borderInnerWith
      },
      // first col
      {
        points: [xBox12 + hafBorderIn, yBox - hafBorderIn, xBox12 + hafBorderIn, yBox14 + hafBorderIn],
        color: strColor,
        strokeWidth: borderInnerWith
      },
      // two col
      {
        points: [xBox12 + hafBorderIn, yBox34 + hafBorderIn, xBox12 + hafBorderIn, yBox4 + hafBorderOut],
        color: strColor,
        strokeWidth: borderInnerWith
      },
      // two col part 2
      {
        points: [xBox34 + hafBorderIn, yBox - hafBorderIn, xBox34 + hafBorderIn, yBox4 + hafBorderOut],
        color: strColor,
        strokeWidth: borderInnerWith
      },
      // three col
      {
        points: [xBox, yBox14 + hafBorderIn, xBox4 + hafBorderOut, yBox14 + hafBorderIn],
        color: strColor,
        strokeWidth: borderInnerWith
      },
      {
        points: [xBox, yBox12 + hafBorderIn, xBox14 + hafBorderIn, yBox12 + hafBorderIn],
        color: strColor,
        strokeWidth: borderInnerWith
      },
      {
        points: [xBox34 + hafBorderIn, yBox12 + hafBorderIn, xBox4 + hafBorderOut, yBox12 + hafBorderIn],
        color: strColor,
        strokeWidth: borderInnerWith
      },
      {
        points: [xBox, yBox34 + hafBorderIn, xBox4 + hafBorderOut, yBox34 + hafBorderIn],
        color: strColor,
        strokeWidth: borderInnerWith
      }
    ];
    const mergeLines = lineCenters.concat(outBorder);
    return mergeLines;
  }
  buildLines().forEach((objLine) => {
    props.layer.add(
      lineCache.clone({
        points: objLine.points,
        stroke: objLine.color,
        strokeWidth: 1.5,
        opacity: 1
      })
    );
  });
  return props.layer;
}

dayjs.extend(utc);
dayjs.extend(customParseFormat);
function Sky(props) {
  const {
    wSquare,
    xBox12,
    xBox14,
    yBox14,
    yBox34,
    borderInnerWith,
    ls,
    fontCenter,
    fontFamilySet,
    color,
    fontDV,
    cfgLs
  } = props;
  const mGroup = new Konva$1.Group({});
  const isShowTuTru = Number(cfgLs[CfgValue.batTuCenter]) === 1;
  function drawText(obj) {
    let objMerge = {
      x: 500,
      y: 500,
      text: "",
      fontStyle: "normal",
      fontSize: fontDV,
      fontFamily: fontFamilySet,
      fill: "#000",
      strokeWidth: 0,
      textDecoration: "",
      shadowColor: "black",
      shadowBlur: 0,
      shadowOffset: { x: 0, y: 0 },
      shadowOpacity: 0,
      hitStrokeWidth: 0,
      shadowForStrokeEnabled: false,
      perfectDrawEnabled: true
    };
    objMerge = { ...objMerge, ...obj };
    const textObj = cachedTextCache.clone(objMerge);
    mGroup.add(textObj);
    return textObj;
  }
  function drawACol(px, py, cot, textCol, solarTimeText) {
    const wTru = wSquare / 2 - 2.5;
    const padY4Four = wSquare / 10;
    const returnX = wTru + px;
    const box1Info = {
      x: px,
      y: py,
      fill: "rgba(0, 0, 0, 0.07)",
      width: wTru,
      //
      height: isShowTuTru ? wTru * 2.2 : wTru * 1.35,
      perfectDrawEnabled: true,
      strokeWidth: 1,
      opacity: 1,
      cornerRadius: 6,
      hitStrokeWidth: 1,
      shadowForStrokeEnabled: false
    };
    const box1 = rectCache.clone(box1Info);
    mGroup.add(box1);
    drawText({
      text: `${solarTimeText}`,
      x: box1.x(),
      y: box1.y() + 15,
      fill: "#ff6900",
      fontSize: fontCenter - 2,
      width: wTru,
      align: "center",
      fontStyle: "normal",
      fontFamily: "Arial"
    });
    drawText({
      text: `${CAN_AD[cot.cn] > 0 ? "+" : "-"}`,
      // text: `${solarTimeText}`,
      x: box1.x(),
      y: box1.y() + 2,
      fill: "#777",
      fontSize: fontCenter + 1,
      width: wTru,
      align: "center",
      fontStyle: "normal",
      fontFamily: "Arial"
    });
    const yearText = drawText({
      text: `${textCol}`,
      x: box1.x(),
      y: box1.y() + padY4Four + 11,
      fontSize: fontCenter,
      width: wTru,
      align: "center",
      fontStyle: "bold"
    });
    let xNext = yearText.x();
    let yNext = yearText.y();
    if (isShowTuTru) {
      const yearGold = drawText({
        text: `${cot.cht === -1 ? "Nhật chủ" : THAP[cot.cht]}`,
        x: yearText.x(),
        y: yearText.y() + padY4Four + 3,
        fontSize: fontCenter,
        width: wTru,
        align: "center"
      });
      xNext = yearGold.x();
      yNext = yearGold.y();
    }
    const yearTextLuna = drawText({
      text: `${CAN[cot.cn].toUpperCase()}`,
      x: xNext,
      y: yNext + padY4Four + 6,
      fill: color[CAN_HH[cot.cn]],
      fontSize: fontCenter + 1,
      fontStyle: "bold",
      width: wTru,
      align: "center"
    });
    const yearTextLunaChi = drawText({
      text: `${CHI[cot.ci].toUpperCase()}`,
      x: yearTextLuna.x(),
      y: yearTextLuna.y() + padY4Four,
      fill: color[CHI_HH[cot.ci]],
      fontSize: fontCenter + 1,
      fontStyle: "bold",
      width: wTru,
      align: "center"
    });
    xNext = yearTextLunaChi.x();
    yNext = yearTextLunaChi.y();
    if (isShowTuTru) {
      const widthTextCT = wTru / cot.ctg.length;
      const fontSizeCanTang = fontCenter - 2;
      let wZone = 0;
      let yPosGroupCanTag = yearTextLunaChi.y();
      cot.ctg.forEach((idxCT) => {
        const canTangYear = drawText({
          text: `${CAN[idxCT]}`,
          x: wZone === 0 ? yearTextLunaChi.x() : wZone,
          y: yearTextLunaChi.y() + padY4Four,
          fill: color[CAN_HH[idxCT]],
          fontSize: fontSizeCanTang,
          width: widthTextCT,
          align: "center"
        });
        const phtTinh = THAP[idxTHAP(ls.dtb.tk.d[0], idxCT)];
        const widthTextPht = widthTextCT - 2;
        const yearTangGold = drawText({
          text: phtTinh,
          x: canTangYear.x(),
          y: canTangYear.y() + padY4Four + 2,
          fontSize: fontCenter - 2,
          width: phtTinh === "Thương" ? widthTextPht + 8 : widthTextPht,
          align: "center",
          fill: "#000"
        });
        wZone = canTangYear.x() + widthTextCT;
        yPosGroupCanTag = yearTangGold.y();
      });
      const padTruongSinhBig = padY4Four + 3;
      const yearTS = drawText({
        text: `${TSNAME[cot.ts]}`,
        x: yearTextLunaChi.x(),
        y: yPosGroupCanTag + padTruongSinhBig,
        fontSize: fontCenter - 2,
        width: wTru,
        align: "center"
      });
      xNext = yearTS.x();
      yNext = yearTS.y();
    }
    const napAmPad = padY4Four + 5;
    const fontCenterNA = fontCenter - 2;
    drawText({
      text: `${LTHG_NA[cot.na]}`,
      x: xNext,
      y: yNext + napAmPad,
      fill: color[LTHG_HH[cot.na]],
      fontSize: fontCenterNA,
      width: wTru,
      align: "center"
    });
    return returnX;
  }
  function drawTextWithConfig(config) {
    return drawText({
      ...config,
      fontStyle: "normal",
      width: wSquare * 2 + borderInnerWith,
      align: "center"
    });
  }
  function drawAColWithConfig(x, y, cot, text, solarTimeText) {
    return drawACol(x, y, cot, cfgLs[CfgValue.showSun] === 1 ? text : "", solarTimeText);
  }
  function draw4FourPillar() {
    const { dtb, tutru } = ls;
    const tkInfo = dtb.tki;
    const padTop = 95;
    const txtTK = drawTextWithConfig({
      text: `Tứ Trụ - Sinh vào tiết ${TKN[tkInfo[0]]}`,
      x: xBox14,
      y: yBox14 + padTop,
      fontSize: fontCenter
    });
    if (tkInfo[1]) {
      drawTextWithConfig({
        text: `Tháng ${TKN_MONTH[tkInfo[0]]}tk từ ${TKN[TKN_PN[tkInfo[0]][0]]} (${cfgLs[CfgValue.showSun] === 1 ? dayjs.utc(tkInfo[3], "YYYY/MM/DD HH:mm").format("YYYY/MM/DD HH:mm") : dayjs.utc(tkInfo[3], "YYYY/MM/DD HH:mm").format("----/MM/DD HH:mm")}) đến ${TKN[TKN_PN[tkInfo[0]][1]]} (${cfgLs[CfgValue.showSun] === 1 ? dayjs.utc(tkInfo[4], "YYYY/MM/DD HH:mm").format("YYYY/MM/DD HH:mm") : dayjs.utc(tkInfo[4], "YYYY/MM/DD HH:mm").format("----/MM/DD HH:mm")})`,
        x: xBox14,
        y: txtTK.y() + 16,
        fontSize: fontCenter - 3
      });
    }
    const yearX = drawAColWithConfig(xBox14 + 3, txtTK.y() + 33, tutru.cot[0], `${dtb.sn.y}`, `${dtb.sn.ys}`);
    const mText = `${dtb.ln.mt === dtb.ln.m ? `(${dtb.ln.mt})` : `(${dtb.ln.m})(${dtb.ln.mt}tk)`}`;
    const monthX = drawAColWithConfig(yearX + 3, txtTK.y() + 33, tutru.cot[1], `${dtb.sn.m} ${mText}`, `${dtb.sn.ms}`);
    const dayX = drawAColWithConfig(
      monthX + 3,
      txtTK.y() + 33,
      tutru.cot[2],
      `${dtb.sn.d} (${dtb.ln.d})`,
      `${dtb.sn.ds}`
    );
    drawAColWithConfig(dayX + 3, txtTK.y() + 33, tutru.cot[3], `${dtb.sn.h}h${dtb.sn.i}`, `${dtb.sn.hs}h${dtb.sn.is}`);
    if (isShowTuTru) {
      const dvTrInfo = ls.tutru.dvt;
      const txtTimeNhap = drawText({
        text: `${dvTrInfo[0] ? "Thuận" : "Nghịch"} đến tk cách ${dvTrInfo[1]} ngày ${dvTrInfo[2]} giờ quy đổi thành ${dvTrInfo[3]} năm ${dvTrInfo[4]} tháng ${dvTrInfo[5]} ngày`,
        // ( tháng ${TKNIDX[ls.dtb.tkn]} tk)
        x: xBox14,
        y: txtTK.y() + 242,
        fontStyle: "normal",
        width: wSquare * 2 + borderInnerWith,
        align: "center",
        fontSize: fontCenter - 2.5
      });
      const padY4Four = 15;
      const dvTr = ls.tutru.dv;
      const wDvTr = 34;
      let dvPosX = 0;
      dvTr.forEach((item, idx) => {
        const mdj = dayjs.unix(item[2]).utc();
        const isHilightBox = ls.yeo >= mdj.year() - ls.dtb.sn.y + 1 && ls.yeo <= mdj.year() - ls.dtb.sn.y + 10;
        const bx1Tag = {
          x: dvPosX === 0 ? xBox14 + 3 : dvPosX,
          y: txtTimeNhap.y() + padY4Four,
          fill: isHilightBox ? "rgba(255, 224, 191, 0.7)" : "rgba(0, 0, 0, 0.07)",
          width: wDvTr,
          //
          height: 75,
          perfectDrawEnabled: true,
          strokeWidth: 1,
          opacity: 1,
          cornerRadius: 6,
          hitStrokeWidth: 1,
          shadowForStrokeEnabled: false
        };
        mGroup.add(rectCache.clone(bx1Tag));
        const dvTrCanThap = drawText({
          text: `${THAP[idxTHAP(ls.dtb.tk.d[0], item[0])]}`,
          x: dvPosX === 0 ? xBox14 + 3 : dvPosX,
          y: txtTimeNhap.y() + padY4Four + 5,
          fill: "#333",
          fontSize: fontCenter - 4,
          width: wDvTr,
          align: "center"
        });
        const dvTrCan = drawText({
          text: `${CAN[item[0]]}`,
          x: dvPosX === 0 ? xBox14 + 3 : dvPosX,
          y: dvTrCanThap.y() + padY4Four,
          fill: color[CAN_HH[item[0]]],
          fontSize: fontCenter - 2,
          width: wDvTr,
          align: "center"
        });
        const dvTrChi = drawText({
          text: `${CHI[item[1]]}`,
          x: dvTrCan.x(),
          y: dvTrCan.y() + padY4Four,
          fill: color[CHI_HH[item[1]]],
          fontSize: fontCenter - 2,
          width: wDvTr,
          align: "center"
        });
        let textYear = `${mdj.year() - ls.dtb.sn.y + 1}-${mdj.year() - ls.dtb.sn.y + 10}t${cfgLs[CfgValue.showSun] === 1 ? ` ${mdj.format("YYYY")}` : ""}`;
        if (idx === 0) {
          textYear = `${mdj.year() - ls.dtb.sn.y + 1}t${cfgLs[CfgValue.showSun] === 1 ? ` ${mdj.format("DD/MM   YYYY")}` : ""}`;
        }
        drawText({
          text: `${textYear}`,
          x: dvTrCan.x(),
          y: dvTrChi.y() + padY4Four + 2,
          fill: "#333",
          fontSize: fontCenter - 5,
          width: wDvTr,
          align: "center"
        });
        dvPosX = dvTrCan.x() + wDvTr + 3.5;
      });
    }
  }
  function calculateTextWidth({ text, fontSize, fontStyle }) {
    return cachedTextCache.clone({ text, fontSize, fontStyle }).width();
  }
  function drawAndGetWidth({ text, y, fontSize, fontStyle, fill }) {
    const txt = drawText({ text, y, fontSize, fontStyle, fill });
    return { txt, width: txt.getTextWidth() };
  }
  function buildZones() {
    if (ls === void 0) {
      return [];
    }
    mGroup.destroyChildren();
    drawVersionText();
    drawAppN();
    drawTextTMD();
    const fontCenterPrimary = fontCenter - 1;
    let nameAreaThan = AREA_NAME[ls.ars[ls.at].ai];
    nameAreaThan = nameAreaThan.charAt(0) + nameAreaThan.slice(1).toLowerCase();
    const amlichData = ls.dtv.tk;
    const fontInfoDate = fontCenter - 1.5;
    const rows = [
      [
        {
          text: `${ls.adye > 0 ? "Dương" : "Âm"} ${ls.sx > 0 ? "Nam" : "Nữ"}`,
          fontStyle: "normal"
        },
        { text: `${ls.yeo} tuổi`, fontStyle: "bold", align: "center" },
        { text: `âm lịch`, fontStyle: "normal" },
        { text: `giờ`, fontStyle: "normal" },
        { text: `${CHI[ls.dtb.tk.h[1]]}`, fontStyle: "bold" },
        { text: `ngày`, fontStyle: "normal" },
        { text: `${ls.dtb.ln.d}`, fontStyle: "bold" },
        { text: `tháng`, fontStyle: "normal" },
        { text: `${ls.dtb.ln.m}`, fontStyle: "bold" },
        { text: `năm`, fontStyle: "normal" },
        {
          text: CAN[ls.dtb.tk.y[0]],
          fontStyle: "bold",
          fill: color[CAN_HH[ls.dtb.tk.y[0]]]
        },
        {
          text: CHI[ls.dtb.tk.y[1]],
          fontStyle: "bold",
          fill: color[CHI_HH[ls.dtb.tk.y[1]]]
        }
      ],
      [
        { text: "Mệnh", fontStyle: "normal" },
        {
          text: HH[LTHG_HH[ls.dtb.tk.y[2]]],
          fontStyle: "bold",
          fill: color[LTHG_HH[ls.dtb.tk.y[2]]]
        },
        { text: "cục" },
        { text: HH[ls.cid], fontStyle: "bold", fill: color[ls.cid] },
        { text: `- ${ls.ad > 0 ? ADTN[1] : ADTN[0]} - ${SKB[ls.sks]}` }
      ],
      [
        {
          text: `Thân cư`,
          fontStyle: "normal"
        },
        {
          text: `${nameAreaThan}`,
          fontStyle: "bold"
        },
        { text: "- Mệnh chủ" },
        {
          text: SM[ls.mctc[0]].name,
          fontStyle: "bold",
          fill: color[SM[ls.mctc[0]].hh]
        },
        { text: "- Thân chủ" },
        {
          text: SM[ls.mctc[1]].name,
          fontStyle: "bold",
          fill: color[SM[ls.mctc[1]].hh]
        }
      ],
      [
        {
          text: "Năm xem ÂL: ",
          x: xBox14 + 10,
          fontSize: fontInfoDate
        },
        {
          text: `${CAN[amlichData.y[0]]} ${CHI[amlichData.y[1]]} -`,
          fill: color[LTHG_HH[amlichData.y[2]]],
          fontSize: fontInfoDate
        },
        {
          text: `${CAN[amlichData.m[0]]} ${CHI[amlichData.m[1]]}(${ls.dtv.ln.m}) -`,
          fill: color[LTHG_HH[amlichData.m[2]]],
          fontSize: fontInfoDate
        },
        {
          text: `${CAN[amlichData.d[0]]} ${CHI[amlichData.d[1]]}(${ls.dtv.ln.d}) -`,
          fill: color[LTHG_HH[amlichData.d[2]]],
          fontSize: fontInfoDate
        },
        {
          text: `${CAN[amlichData.h[0]]} ${CHI[amlichData.h[1]]}`,
          fill: color[LTHG_HH[amlichData.h[2]]],
          fontSize: fontInfoDate
        }
      ]
    ];
    const ys = generateSequence(yBox14 + 15, 16, 4);
    drawRows(rows, ys, fontCenterPrimary);
    draw4FourPillar();
  }
  function generateSequence(start, step, count) {
    return Array.from({ length: count }, (_, i) => start + i * step);
  }
  function drawVersionText() {
    drawText({
      text: `Ver ${props.version}`,
      x: xBox14 + 10,
      y: yBox34 - 48,
      fill: "#000",
      align: "center",
      width: wSquare * 2 - 20,
      fontSize: fontCenter - 4,
      opacity: 0.3,
      fontVariant: "normal"
    });
  }
  function drawAppN() {
    const encodedText = "VGluaE1lbmhEby5jb20=";
    const decodedText = (() => {
      try {
        return window.atob(encodedText);
      } catch {
        return "";
      }
    })();
    drawText({
      text: decodedText,
      x: xBox14,
      y: yBox34 - 36,
      fill: "#b06200",
      align: "center",
      width: wSquare * 2,
      fontSize: fontCenter - 1,
      opacity: 0.8,
      fontVariant: "normal"
    });
  }
  function drawTextTMD() {
    const encodedPrefix = "TG_FpIHPz";
    let textTMD = `${String.fromCharCode(76)}oại ${String.fromCharCode(108)}á số ${cfgLs[CfgValue.typeLs] + 1}`;
    if ([6, 7, 8].includes(cfgLs[CfgValue.typeLs])) {
      const arrIcon = ["1", "2", "3"];
      textTMD = `${textTMD} - ${encodedPrefix.substring(0, 3)}${arrIcon[cfgLs[CfgValue.tcpb]]}`;
    }
    drawText({
      text: `${textTMD} - ${String.fromCharCode(67)}an ${String.fromCharCode(72)}óa ${ls.cfg[CfgValue.lsCanType] + 1} - ${String.fromCharCode(108)}ập ${String.fromCharCode(108)}úc ${dayjs().format("YYYY/MM/DD HH:mm")}`,
      x: xBox14,
      y: yBox34 - 20,
      fill: "#000",
      align: "center",
      width: wSquare * 2,
      fontSize: fontCenter - 2,
      opacity: 0.8,
      fontVariant: "normal"
    });
  }
  function drawRow(texts, y, fontCenterPrimary) {
    let totalWidth = 0;
    texts.forEach((text) => {
      totalWidth += calculateTextWidth({ ...text, fontSize: fontCenterPrimary }) + 3;
    });
    let x = xBox12 - totalWidth / 2;
    texts.forEach((text, _i) => {
      const { txt, width } = drawAndGetWidth({
        ...text,
        y,
        fontSize: fontCenterPrimary
      });
      txt.x(x);
      x += width + 0.8;
    });
  }
  function drawRows(rows, ys, fontCenterPrimary) {
    rows.forEach((texts, i) => {
      drawRow(texts, ys[i], fontCenterPrimary);
    });
  }
  buildZones();
  props.layer.add(mGroup);
  return props.layer;
}

let _mySwalCache = null;
const getMySwal = async () => {
  if (_mySwalCache) return _mySwalCache;
  const [{ default: Swal }, { default: withReactContent }] = await Promise.all([
    import('./D3UtOy0X.js'),
    import('./Sonx4fQL.js')
  ]);
  _mySwalCache = withReactContent(Swal);
  return _mySwalCache;
};
const ErrorMessage = ({ message }) => /* @__PURE__ */ jsx("div", { className: "p-4 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-red-500", children: message }) });
function useKonvaStage(_config, _horoscopeData) {
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const [canvasImage, setCanvasImage] = useState(null);
  const getStageImage = (inputPixelRatio = 1) => {
    try {
      if (!stageRef.current) return null;
      return stageRef.current.toDataURL({
        pixelRatio: inputPixelRatio,
        quality: 1,
        mimeType: "image/png"
      });
    } catch (error) {
      console.error("Error getting stage image:", error);
      return null;
    }
  };
  const cleanup = () => {
    if (layerRef.current) {
      layerRef.current.destroy();
      layerRef.current = null;
    }
    if (stageRef.current) {
      stageRef.current.destroy();
      stageRef.current = null;
    }
    setCanvasImage(null);
  };
  return {
    stageRef,
    layerRef,
    canvasImage,
    setCanvasImage,
    getStageImage,
    cleanup
  };
}
function createGradient(points, colorEnd, colorStart = "#dcd3aaa8") {
  if (typeof window !== "undefined") {
    try {
      const canvas = window.document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return colorEnd;
      const endPointX = points[4] !== void 0 ? points[4] : points[2];
      const endPointY = points[5] !== void 0 ? points[5] : points[3];
      const gradient = ctx.createLinearGradient(points[0], points[1], endPointX, endPointY);
      gradient.addColorStop(0, colorStart);
      gradient.addColorStop(1, colorEnd);
      return gradient;
    } catch (error) {
      console.error("Error creating gradient:", error);
      return colorEnd;
    }
  }
  return colorEnd;
}
function downloadURI(uri, name) {
  if (typeof window !== "undefined") {
    try {
      const link = window.document.createElement("a");
      link.download = name;
      link.href = uri;
      window.document.body.appendChild(link);
      link.click();
      window.document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading URI:", error);
    }
  }
}
function generateFileName(ls, extension = "png") {
  try {
    const solarDate = ls.dtb.sn;
    const year = solarDate.y.toString();
    const month = solarDate.m.toString().padStart(2, "0");
    const day = solarDate.d.toString().padStart(2, "0");
    const hour = solarDate.h.toString().padStart(2, "0");
    const minute = (solarDate.i || 0).toString().padStart(2, "0");
    const gender = ls.sx === 1 ? "nam" : "nu";
    return `tinhmenhdo-la-so-${gender}-${year}.${month}.${day}-${hour}.${minute}.${extension}`;
  } catch (error) {
    console.error("Error generating filename:", error);
    return `tinhmenhdo-la-so-${Date.now()}.${extension}`;
  }
}
function generateShareTitle(ls) {
  try {
    const solarDate = ls.dtb.sn;
    const year = solarDate.y.toString();
    const month = solarDate.m.toString().padStart(2, "0");
    const day = solarDate.d.toString().padStart(2, "0");
    const hour = solarDate.h.toString().padStart(2, "0");
    const minute = (solarDate.i || 0).toString().padStart(2, "0");
    const gender = ls.sx === 1 ? "Nam" : "Nữ";
    return `Lá số Tử Vi - ${gender} sinh ${day}/${month}/${year} lúc ${hour}h${minute}`;
  } catch (error) {
    console.error("Error generating share title:", error);
    return "Lá số Tử Vi";
  }
}
function useImageExport(ls, getStageImage) {
  const handleExport = async () => {
    try {
      const imageData = getStageImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      const fileName = generateFileName(ls, "png");
      downloadURI(imageData, fileName);
    } catch (error) {
      console.error("Error exporting image:", error);
      const swal = await getMySwal();
      swal.fire({
        title: "Lỗi",
        text: error instanceof Error ? error.message : "Có lỗi xảy ra khi lưu lá số",
        icon: "error"
      });
    }
  };
  const copyImageToClipboard = async () => {
    try {
      const imageData = getStageImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      if (isIOSDevice()) {
        handleIOSImageSave(imageData, ls);
        const swal2 = await getMySwal();
        swal2.fire({
          title: "Thông báo",
          html: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { children: "Lá số đã mở trong tab mới:" }),
            /* @__PURE__ */ jsxs("div", { className: "text-orange-600", children: [
              "Trên iPhone/iPad, vui lòng ",
              /* @__PURE__ */ jsx("b", { children: "nhấn và giữ vào ảnh" }),
              ' rồi chọn "Lưu vào Ảnh" để lưu lá số.'
            ] }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("div", { children: renderHoroscopeInfo(ls) }),
            /* @__PURE__ */ jsx("br", {})
          ] }),
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
      const swal = await getMySwal();
      swal.fire({
        title: "Thông báo",
        html: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { children: "Tinh Mệnh Đồ đã copy xong:" }),
          /* @__PURE__ */ jsxs("div", { className: "text-orange-600", children: [
            "Check lại thông tin ",
            /* @__PURE__ */ jsx("b", { children: "1 lần nữa" }),
            " cho dù bạn đã chắc chắn."
          ] }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("div", { children: renderHoroscopeInfo(ls) }),
          /* @__PURE__ */ jsx("br", {})
        ] }),
        icon: "success"
      });
    } catch (error) {
      console.error("Error copying image:", error);
      const imageData = getStageImage(2);
      const swal = await getMySwal();
      if (imageData) {
        handleIOSImageSave(imageData, ls);
        swal.fire({
          title: "Thông báo",
          html: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { children: "Không thể copy trực tiếp, đã mở lá số trong tab mới:" }),
            /* @__PURE__ */ jsxs("div", { className: "text-orange-600", children: [
              "Vui lòng ",
              /* @__PURE__ */ jsx("b", { children: "nhấn và giữ vào ảnh" }),
              ' rồi chọn "Lưu vào Ảnh" hoặc "Save Image".'
            ] })
          ] }),
          icon: "info"
        });
      } else {
        swal.fire({
          title: "Lỗi",
          text: error instanceof Error ? error.message : "Có lỗi xảy ra khi copy lá số",
          icon: "error"
        });
      }
    }
  };
  const exportImageNote = async () => {
    try {
      const imageData = getStageImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      const swal = await getMySwal();
      if (isIOSDevice()) {
        handleIOSImageSave(imageData, ls);
        const result2 = await swal.fire({
          title: "Thông báo cho iPhone/iPad",
          html: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { children: "Lá số đã mở trong tab mới. Bạn có muốn chuyển sang tab Note lá số không?" }),
            /* @__PURE__ */ jsxs("div", { className: "text-orange-600", children: [
              /* @__PURE__ */ jsx("b", { children: "Hướng dẫn cho iPhone/iPad:" }),
              /* @__PURE__ */ jsx("br", {}),
              "1. Nhấn và giữ vào ảnh lá số để lưu vào thư viện ảnh",
              /* @__PURE__ */ jsx("br", {}),
              "2. Vào tab Note, chọn ảnh từ thư viện để dán vào ghi chú"
            ] }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("div", { children: renderHoroscopeInfo(ls) }),
            /* @__PURE__ */ jsx("br", {})
          ] }),
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Chuyển sang Note",
          cancelButtonText: "Đóng"
        });
        if (result2.isConfirmed) {
          const link = document.createElement("a");
          link.href = "/note?export=1";
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
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
      const result = await swal.fire({
        title: "Thành công",
        html: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { children: "Tinh Mệnh Đồ đã COPY xong. Bạn có muốn chuyển sang tab Note lá số không?" }),
          /* @__PURE__ */ jsx("div", { className: "text-orange-600", children: "Chú ý sau khi chuyển sang bảng ghi chú bạn cần click phải chọn Paste hoặc Ctrl+V để dán lá số vào bảng ghi chú." }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("div", { children: renderHoroscopeInfo(ls) }),
          /* @__PURE__ */ jsx("br", {})
        ] }),
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Chuyển sang Note",
        cancelButtonText: "Đóng"
      });
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = "/note?export=1";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error("Error copying image for notes:", error);
      const imageData = getStageImage(2);
      const swal = await getMySwal();
      if (imageData) {
        handleIOSImageSave(imageData, ls);
        swal.fire({
          title: "Thông báo",
          html: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { children: "Không thể copy trực tiếp, đã mở lá số trong tab mới:" }),
            /* @__PURE__ */ jsxs("div", { className: "text-orange-600", children: [
              "Vui lòng ",
              /* @__PURE__ */ jsx("b", { children: "nhấn và giữ vào ảnh" }),
              " để lưu, sau đó có thể thêm vào ghi chú thủ công."
            ] })
          ] }),
          icon: "info"
        });
      } else {
        swal.fire({
          title: "Lỗi",
          text: error instanceof Error ? error.message : "Có lỗi xảy ra khi copy lá số",
          icon: "error"
        });
      }
    }
  };
  return {
    handleExport,
    copyImageToClipboard,
    exportImageNote
  };
}
function renderHoroscopeInfo(ls) {
  try {
    const solarDate = ls.dtb.sn;
    const lunarDate = ls.dtb.ln;
    const bazi = ls.dtb.bs;
    const nameAreaThan = AREA_NAME[ls.ars[ls.at].ai];
    return /* @__PURE__ */ jsxs("div", { className: "text-[14px] [&_div]:mb-1", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "Thời gian sinh dương lịch:",
        " ",
        /* @__PURE__ */ jsxs("b", { children: [
          solarDate.d,
          "/",
          solarDate.m,
          "/",
          solarDate.y,
          " lúc",
          solarDate.h,
          "h",
          solarDate.i || 0
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("b", { children: `${ls.adye > 0 ? "Dương" : "Âm"} ${ls.sx > 0 ? "Nam" : "Nữ"}` }),
        " tuổi âm lịch",
        /* @__PURE__ */ jsxs("b", { children: [
          ls.yeo,
          " tuổi"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Âm lịch giờ ",
        /* @__PURE__ */ jsx("b", { children: CHI[bazi.h[1]] }),
        " ngày ",
        /* @__PURE__ */ jsx("b", { children: lunarDate.d }),
        " tháng ",
        /* @__PURE__ */ jsx("b", { children: lunarDate.m }),
        " năm",
        " ",
        /* @__PURE__ */ jsxs("b", { className: `color${LTHG_HH[bazi.y[2]]}`, children: [
          CAN[bazi.y[0]],
          " ",
          CHI[bazi.y[1]]
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Mệnh ",
        /* @__PURE__ */ jsxs("b", { className: `color${LTHG_HH[bazi.y[2]]}`, children: [
          " ",
          HH[LTHG_HH[bazi.y[2]]]
        ] }),
        " cục",
        " ",
        /* @__PURE__ */ jsx("b", { className: `color${ls.cid}`, children: HH[ls.cid] }),
        " -",
        `${ls.ad > 0 ? ADTN[1] : ADTN[0]} - ${SKB[ls.sks]}`,
        " "
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Thân cư ",
        /* @__PURE__ */ jsx("b", { children: nameAreaThan.charAt(0) + nameAreaThan.slice(1).toLowerCase() }),
        " - Mệnh chủ",
        " ",
        /* @__PURE__ */ jsx("b", { className: `color${SM[ls.mctc[0]].hh}`, children: SM[ls.mctc[0]].name }),
        " - Thân chủ",
        " ",
        /* @__PURE__ */ jsx("b", { className: `color${SM[ls.mctc[1]].hh}`, children: SM[ls.mctc[1]].name }),
        " "
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3! text-[12px]!", children: [
        "Năm xem ",
        /* @__PURE__ */ jsx("b", { children: ls.dtv.sn.y }),
        " ÂL:",
        " ",
        /* @__PURE__ */ jsxs("span", { className: `color${LTHG_HH[ls.dtv.bs.y[2]]}`, children: [
          CAN[ls.dtv.bs.y[0]],
          " ",
          CHI[ls.dtv.bs.y[1]]
        ] }),
        " ",
        "-",
        " ",
        /* @__PURE__ */ jsxs("span", { className: `color${LTHG_HH[ls.dtv.bs.m[2]]}`, children: [
          CAN[ls.dtv.bs.m[0]],
          " ",
          CHI[ls.dtv.bs.m[1]],
          "(",
          ls.dtv.ln.m,
          ")"
        ] }),
        " ",
        "-",
        " ",
        /* @__PURE__ */ jsxs("span", { className: `color${LTHG_HH[ls.dtv.bs.d[2]]}`, children: [
          CAN[ls.dtv.bs.d[0]],
          " ",
          CHI[ls.dtv.bs.d[1]],
          "(",
          ls.dtv.ln.d,
          ")"
        ] }),
        " ",
        "-",
        " ",
        /* @__PURE__ */ jsxs("span", { className: `color${LTHG_HH[ls.dtv.bs.h[2]]}`, children: [
          CAN[ls.dtv.bs.h[0]],
          " ",
          CHI[ls.dtv.bs.h[1]]
        ] })
      ] })
    ] });
  } catch (error) {
    console.error("Error rendering horoscope info:", error);
    return /* @__PURE__ */ jsx("div", { className: "text-red-500", children: "Lỗi hiển thị thông tin" });
  }
}
const isIOSDevice = () => {
  if (typeof window === "undefined") return false;
  const userAgent = window.navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isMacSafari = /Mac OS X/.test(userAgent) && /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
  return isIOS || isMacSafari;
};
const handleIOSImageSave = (imageData, ls) => {
  const fileName = generateFileName(ls, "png");
  const newWindow = window.open();
  if (newWindow) {
    newWindow.document.write(`
      <html>
        <head>
          <title>${generateShareTitle(ls)} - TinhMenhDo.com</title>
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              text-align: center; 
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              background: #f5f5f5;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
              padding: 20px;
              border-radius: 12px;
              box-shadow: 0 2px 12px rgba(0,0,0,0.1);
            }
            img { 
              max-width: 100%; 
              height: auto; 
              border-radius: 8px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .instructions {
              margin-top: 20px;
              padding: 15px;
              background: #e3f2fd;
              color: #1565c0;
              border-radius: 8px;
              font-size: 14px;
              line-height: 1.5;
            }
            .download-btn {
              display: inline-block;
              margin-top: 15px;
              padding: 12px 24px;
              background: #007aff;
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 500;
            }
            .share-section {
              margin-top: 20px;
              padding: 20px;
              background: #f8f9fa;
              border-radius: 8px;
            }
            .share-buttons {
              display: flex;
              gap: 10px;
              justify-content: center;
              flex-wrap: wrap;
              margin-top: 15px;
            }
            .share-btn {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 10px 16px;
              border-radius: 6px;
              text-decoration: none;
              font-weight: 500;
              font-size: 14px;
              transition: transform 0.2s;
            }
            .share-btn:hover {
              transform: translateY(-1px);
            }
            .facebook { background: #1877f2; color: white; }
            .twitter { background: #1da1f2; color: white; }
            .telegram { background: #0088cc; color: white; }
            .whatsapp { background: #25d366; color: white; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>${generateShareTitle(ls)}</h2>
            <img src="${imageData}" alt="${generateShareTitle(ls)}" id="horoscope-image" />
            <div class="instructions">
              <p><strong>Hướng dẫn lưu ảnh trên iPhone/iPad:</strong></p>
              <p>1. Nhấn và giữ vào ảnh lá số ở trên</p>
              <p>2. Chọn "Lưu vào Ảnh" hoặc "Save to Photos"</p>
              <p>3. Ảnh sẽ được lưu vào thư viện ảnh của bạn</p>
            </div>
            <a href="${imageData}" download="${fileName}" class="download-btn">
              Tải xuống ảnh
            </a>
            
            <div class="share-section">
              <h3>Chia sẻ lá số</h3>
              <p>Sau khi lưu ảnh, bạn có thể chia sẻ qua:</p>
              <div class="share-buttons">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://tinhmenhdo.com" target="_blank" class="share-btn facebook">
                  📘 Facebook
                </a>
                <a href="https://twitter.com/intent/tweet?text=Xem%20lá%20số%20Tử%20Vi%20của%20tôi&url=https://tinhmenhdo.com" target="_blank" class="share-btn twitter">
                  🐦 Twitter
                </a>
                <a href="https://t.me/share/url?url=https://tinhmenhdo.com&text=Xem%20lá%20số%20Tử%20Vi%20của%20tôi" target="_blank" class="share-btn telegram">
                  ✈️ Telegram
                </a>
                <a href="https://wa.me/?text=Xem%20lá%20số%20Tử%20Vi%20của%20tôi%20https://tinhmenhdo.com" target="_blank" class="share-btn whatsapp">
                  💬 WhatsApp
                </a>
                <a href="https://www.messenger.com/new" target="_blank" class="share-btn messenger">
                  💬 Messenger
                </a>
                <a href="https://zalo.me/share?url=https://tinhmenhdo.com&title=Xem%20lá%20số%20Tử%20Vi%20của%20tôi" target="_blank" class="share-btn zalo">
                  📱 Zalo
                </a>
              </div>
              <p style="font-size: 12px; color: #666; margin-top: 15px;">
                💡 Tip: Trên di động, bạn có thể chia sẻ ảnh trực tiếp từ thư viện ảnh
              </p>
            </div>
          </div>
        </body>
      </html>
    `);
    newWindow.document.close();
  }
};
const useSocialShare = (ls, getStageImage) => {
  const createShareText = () => {
    const solarDate = ls.dtb.sn;
    const lunarDate = ls.dtb.ln;
    return `🔮 Lá số Tử Vi - ${ls.sx === 1 ? "Nam" : "Nữ"} sinh ${solarDate.d}/${solarDate.m}/${solarDate.y} (${lunarDate.d}/${lunarDate.m} âm lịch) - Tạo lá số miễn phí tại TinhMenhDo.com`;
  };
  const shareWithFallback = async (platform, imageBlob, shareUrl, getImg) => {
    if (navigator.share && "canShare" in navigator) {
      const fileName = generateFileName(ls, "png");
      const file = new File([imageBlob], fileName, { type: "image/png" });
      const safeUrl = createShareUrl();
      const shareData = {
        files: [file],
        title: generateShareTitle(ls),
        text: `${createShareText()}
${safeUrl}`,
        url: safeUrl
      };
      if (navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
          return;
        } catch (error) {
          if (error.name === "AbortError") {
            return;
          }
          console.error("Web Share API failed, falling back:", error);
        }
      }
    }
    if (isIOSDevice()) {
      const imageData = getImg();
      if (imageData) {
        handleIOSImageSave(imageData, ls);
      }
      return;
    }
    window.open(shareUrl, "_blank", "width=600,height=400,noopener,noreferrer");
  };
  const shareToFacebook = async (imageBlob) => {
    if (!imageBlob) return;
    const shareText = createShareText();
    const safeUrl = createShareUrl();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(safeUrl)}&quote=${encodeURIComponent(shareText)}`;
    await shareWithFallback("facebook", imageBlob, facebookUrl, () => getStageImage(2));
  };
  const shareToTwitter = async (imageBlob) => {
    if (!imageBlob) return;
    const shareText = createShareText();
    const safeUrl = createShareUrl();
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(safeUrl)}`;
    await shareWithFallback("twitter", imageBlob, twitterUrl, () => getStageImage(2));
  };
  const shareToTelegram = async (imageBlob) => {
    if (!imageBlob) return;
    const shareText = createShareText();
    const safeUrl = createShareUrl();
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(safeUrl)}&text=${encodeURIComponent(shareText)}`;
    await shareWithFallback("telegram", imageBlob, telegramUrl, () => getStageImage(2));
  };
  const shareToWhatsApp = async (imageBlob) => {
    if (!imageBlob) return;
    const shareText = createShareText();
    const safeUrl = createShareUrl();
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${safeUrl}`)}`;
    await shareWithFallback("whatsapp", imageBlob, whatsappUrl, () => getStageImage(2));
  };
  const shareToMessenger = async (imageBlob) => {
    if (!imageBlob) return;
    const safeUrl = createShareUrl();
    const messengerUrl = `fb-messenger://share?link=${encodeURIComponent(safeUrl)}`;
    await shareWithFallback("messenger", imageBlob, messengerUrl, () => getStageImage(2));
  };
  const shareToZalo = async (imageBlob) => {
    if (!imageBlob) return;
    const shareText = createShareText();
    const safeUrl = createShareUrl();
    const zaloUrl = `https://zalo.me/share?url=${encodeURIComponent(safeUrl)}&title=${encodeURIComponent(shareText)}`;
    await shareWithFallback("zalo", imageBlob, zaloUrl, () => getStageImage(2));
  };
  const handleSocialShare = async (platform) => {
    try {
      const imageData = getStageImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      const res = await fetch(imageData);
      const imageBlob = await res.blob();
      if (platform === "native") {
        await shareWithFallback("native", imageBlob, "", () => imageData);
        return;
      }
      const platformMap = {
        facebook: shareToFacebook,
        twitter: shareToTwitter,
        telegram: shareToTelegram,
        whatsapp: shareToWhatsApp,
        messenger: shareToMessenger,
        zalo: shareToZalo
      };
      await platformMap[platform](imageBlob);
    } catch (error) {
      console.error("Error sharing:", error);
      const swal = await getMySwal();
      swal.fire({
        title: "Lỗi",
        text: "Có lỗi xảy ra trong quá trình chia sẻ.",
        icon: "error"
      });
    }
  };
  const showShareDialog = async () => {
    const hasNativeShare = typeof navigator !== "undefined" && "share" in navigator && typeof navigator.share === "function";
    const MySwal = await getMySwal();
    await MySwal.fire({
      title: "",
      html: /* @__PURE__ */ jsxs("div", { className: "share-dialog-container", children: [
        /* @__PURE__ */ jsx("div", { className: "share-header", children: /* @__PURE__ */ jsxs("h3", { className: "share-title", children: [
          "Chia sẻ ",
          generateShareTitle(ls)
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "share-buttons-grid", children: [
          /* @__PURE__ */ jsx("button", { className: "share-btn facebook", "data-platform": "facebook", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) }) }),
          /* @__PURE__ */ jsx("button", { className: "share-btn twitter", "data-platform": "twitter", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" }) }) }),
          /* @__PURE__ */ jsx("button", { className: "share-btn telegram", "data-platform": "telegram", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" }) }) }),
          /* @__PURE__ */ jsx("button", { className: "share-btn whatsapp", "data-platform": "whatsapp", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.887 3.488" }) }) }),
          /* @__PURE__ */ jsx("button", { className: "share-btn messenger", "data-platform": "messenger", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.1l3.131 3.26L19.752 8.1l-6.561 6.863z" }) }) }),
          /* @__PURE__ */ jsx("button", { className: "share-btn zalo", "data-platform": "zalo", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 0C18.627 0 24 5.373 24 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm-2.5 17.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5s.224.5.5.5zM8.5 15h7c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5zM7 12.5h10c.276 0 .5-.224.5-.5s-.224-.5-.5-.5H7c-.276 0-.5.224-.5.5s.224.5.5.5zM8.5 10h7c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5zM10 7.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5s.224.5.5.5z" }) }) }),
          hasNativeShare && /* @__PURE__ */ jsx("button", { className: "share-btn native", "data-platform": "native", children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "share-url-box", children: [
          /* @__PURE__ */ jsx("input", { type: "text", readOnly: true, value: createShareUrl(), className: "share-url-input" }),
          /* @__PURE__ */ jsx("button", { className: "share-url-copy-btn", title: "Copy URL", children: /* @__PURE__ */ jsxs("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
            /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "share-tip", children: "💡 Trên mobile có thể chia sẻ trực tiếp" })
      ] }),
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: "compact-share-popup",
        htmlContainer: "compact-share-content"
      },
      didOpen: () => {
        const style = document.createElement("style");
        style.textContent = `
          .compact-share-popup.swal2-popup {
            backdrop-filter: none !important;
            background: transparent !important;
            border-radius: 12px !important;
            box-shadow: 0 8px 32px rgba(101, 67, 33, 0.2) !important;
            border: none !important;
            overflow: hidden !important;
            max-width: 320px !important;
            width: 90% !important;
            background: transparent !important;
            padding: 0 !important;
          }
          
          .compact-share-content.swal2-html-container {
            padding: 0 !important;
            background: transparent !important;
            margin: 0 !important;
          }
          
          .compact-share-popup .swal2-header {
            display: none !important;
          }
          
          .compact-share-popup .swal2-content {
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .compact-share-popup .swal2-actions {
            display: none !important;
          }
          
          .compact-share-popup .swal2-footer {
            display: none !important;
          }
          
          .share-dialog-container {
            padding: 20px;
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
            color: white;
            text-align: center;
            border-radius: 12px;
            margin: 0;
          }
          
          .share-header {
            margin-bottom: 20px;
          }
          
          .share-title {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
            color: white;
          }
          
          .share-buttons-grid {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-bottom: 16px;
            flex-wrap: wrap;
          }
          
          .share-btn {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          
          .share-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0);
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          
          .share-btn:hover::before {
            background: rgba(255, 255, 255, 0.2);
          }
          
          .share-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          }
          
          .share-btn:active {
            transform: translateY(-1px);
          }
          
          .share-btn svg {
            position: relative;
            z-index: 1;
          }
          
          .share-btn.facebook {
            background: linear-gradient(135deg, #CD853F, #DEB887);
            color: #1877f2;
          }
          
          .share-btn.twitter {
            background: linear-gradient(135deg, #CD853F, #DEB887);
            color: #1da1f2;
          }
          
          .share-btn.telegram {
            background: linear-gradient(135deg, #CD853F, #DEB887);
            color: #0088cc;
          }
          
          .share-btn.whatsapp {
            background: linear-gradient(135deg, #CD853F, #DEB887);
            color: #25d366;
          }
          
          .share-btn.messenger {
            background: linear-gradient(135deg, #CD853F, #DEB887);
            color: #0084ff;
          }
          
          .share-btn.zalo {
            background: linear-gradient(135deg, #CD853F, #DEB887);
            color: #0068ff;
          }
          
          .share-btn.native {
            background: linear-gradient(135deg, #CD853F, #DEB887);
            color: #8B4513;
          }
          
          .share-btn:hover svg {
            color: white;
          }
          
          .share-url-box {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            padding: 8px;
            margin-bottom: 16px;
          }
          
          .share-url-input {
            flex: 1;
            background: transparent;
            border: none;
            color: white;
            font-size: 14px;
            outline: none;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          
          .share-url-copy-btn {
            background: transparent;
            border: none;
            color: white;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: background 0.2s;
          }
          
          .share-url-copy-btn:hover {
            background: rgba(255, 255, 255, 0.3);
          }
          
          .share-tip {
            font-size: 12px;
            opacity: 0.9;
            background: rgba(0, 0, 0, 0.1);
            padding: 8px 12px;
            border-radius: 6px;
            backdrop-filter: blur(5px);
          }
          
          .swal2-close {
            color: white !important;
            font-size: 18px !important;
            top: 2px !important;
            right: 2px !important;
            position: absolute !important;
            width: 32px !important;
            height: 32px !important;
            background: rgba(0, 0, 0, 0.2) !important;
            border-radius: 50% !important;
            backdrop-filter: blur(5px) !important;
          }
          
          .swal2-close:hover {
            background: rgba(0, 0, 0, 0.3) !important;
            transform: scale(1.1) !important;
          }
        `;
        document.head.appendChild(style);
        const copyBtn = document.querySelector(".share-url-copy-btn");
        if (copyBtn) {
          copyBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            const urlInput = document.querySelector(".share-url-input");
            if (urlInput) {
              await navigator.clipboard.writeText(urlInput.value);
              const originalHTML = copyBtn.innerHTML;
              copyBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
              setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
              }, 2e3);
            }
          });
        }
        document.querySelectorAll(".share-btn").forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            const platform = target.dataset.platform;
            target.style.transform = "scale(0.95)";
            setTimeout(() => {
              target.style.transform = "";
            }, 150);
            MySwal.close();
            await handleSocialShare(platform);
          });
        });
      }
    });
  };
  return {
    handleSocialShare,
    showShareDialog
  };
};
const ViewerLs = (props) => {
  if (!props || !props.ls) {
    console.error("Missing required props:", { props });
    return /* @__PURE__ */ jsx(ErrorMessage, { message: "Không thể tải dữ liệu lá số. Vui lòng kiểm tra thông tin đầu vào." });
  }
  const ls = props.ls;
  if (!ls.cfg) {
    console.error("Invalid horoscope data - missing cfg:", ls);
    return /* @__PURE__ */ jsx(ErrorMessage, { message: "Dữ liệu lá số không hợp lệ. Vui lòng thử lại." });
  }
  if (!ls.dtb || !ls.dtv) {
    console.error("Invalid horoscope data - missing date info:", ls);
    return /* @__PURE__ */ jsx(ErrorMessage, { message: "Thông tin ngày tháng không hợp lệ. Vui lòng kiểm tra lại." });
  }
  const cfgLs = ls.cfg;
  const numberAddMore = (ls.css <= 11 ? 0 : ls.css - 11) * 75;
  const lsWidth = 742;
  const lsHeight = 960 + numberAddMore;
  const typeLs = cfgLs[CfgValue.typeLs];
  const typePhiHoa = cfgLs[CfgValue.typePhiHoa];
  const borderOutWith = 1;
  const borderInnerWith = 1;
  const wBox = lsWidth;
  const hBox = lsHeight;
  const wSquare = wBox / 4;
  const hSquare = hBox / 4;
  const wBoxOuth = wBox + borderOutWith * 2 + borderOutWith + 1;
  const hBoxOuth = hBox + borderOutWith * 2 + borderOutWith + 1;
  const color = ["", "", "#031640", "#067b11", "#8b8380", "#e39e25", "#cf233b"];
  const bColor = ["", "", "#123e65", "#04973c", "#919191", "#e39e25", "#e73827"];
  let padContent = 5;
  let fontDV = 13;
  let fontChinhTinh = 15;
  let fontPhuTinh = 14;
  const fontCenter = 12;
  if (typeLs === 4 || typeLs === 5) {
    padContent = 8;
  }
  const colorHoa = ["rgb(3 140 0)", "rgb(110 8 136)", "rgb(14 124 202)", "rgb(217 4 4)"];
  const colorHoaStart = [
    "rgb(3 140 0 / 75%)",
    "rgb(110 8 136 / 75%)",
    "rgb(14 124 202 / 75%)",
    "rgb(217 4 4 / 75%)"
  ];
  const colorHoaFill = [
    "rgba(114,250,112,0.9)",
    "rgba(227,100,255,0.9)",
    "rgba(77,182,255,0.9)",
    "rgba(246,66,66,0.9)"
  ];
  const colorHoaFill60 = [
    "rgba(114,250,112,0.5)",
    "rgba(227,100,255,0.5)",
    "rgba(77,182,255,0.5)",
    "rgba(246,66,66,0.5)"
  ];
  const fontFamilySet = "Roboto Slab";
  const padZone = 54;
  const hafWSquare = wSquare / 2;
  const hafHSquare = hSquare / 2;
  const hafBorderOut = borderOutWith / 2;
  const hafBorderIn = borderInnerWith / 2;
  let xBox = borderOutWith;
  let xBox14 = xBox + wSquare;
  let xBox12 = xBox14 + borderInnerWith + wSquare;
  let xBox34 = xBox12 + borderInnerWith + wSquare;
  let xBox4 = xBox34 + borderInnerWith + wSquare;
  let yBox = borderOutWith;
  let yBox14 = yBox + hSquare;
  let yBox12 = yBox14 + borderInnerWith + hSquare;
  let yBox34 = yBox12 + borderInnerWith + hSquare;
  let yBox4 = yBox34 + borderInnerWith + hSquare;
  xBox += padZone / 2;
  xBox14 += padZone / 2;
  xBox12 += padZone / 2;
  xBox34 += padZone / 2;
  xBox4 += padZone / 2;
  yBox += padZone / 2;
  yBox14 += padZone / 2;
  yBox12 += padZone / 2;
  yBox34 += padZone / 2;
  yBox4 += padZone / 2;
  const padContentBottom = hSquare - padContent * 2.3;
  const padContentTop = padContent;
  const canvasConfig = {
    width: wBoxOuth + padZone,
    height: hBoxOuth + padZone,
    borderOutWith,
    borderInnerWith,
    padZone,
    fontFamily: fontFamilySet
  };
  const { stageRef, layerRef, canvasImage, setCanvasImage, getStageImage, cleanup } = useKonvaStage();
  const { handleExport, copyImageToClipboard, exportImageNote } = useImageExport(ls, (ratio = 1) => {
    return canvasImage || stageRef.current?.toDataURL({
      pixelRatio: ratio,
      quality: 1,
      mimeType: "image/png"
    }) || null;
  });
  const { handleSocialShare, showShareDialog } = useSocialShare(ls, (ratio = 1) => {
    return canvasImage || stageRef.current?.toDataURL({
      pixelRatio: ratio,
      quality: 1,
      mimeType: "image/png"
    }) || null;
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        cleanup();
        const container = document.getElementById("cv");
        if (!container) {
          console.error("Container not found");
          return cleanup;
        }
        const newStage = new Konva$2.Stage({
          container: "cv",
          width: canvasConfig.width,
          height: canvasConfig.height,
          fill: "#fefefe",
          font: canvasConfig.fontFamily
        });
        stageRef.current = newStage;
        const newLayer = new Konva$2.Layer();
        layerRef.current = newLayer;
        const canHoaArr = GETHOA(cfgLs[CfgValue.lsCanType]);
        newLayer.add(
          rectCache.clone({
            x: 0,
            y: 0,
            width: wBoxOuth + padZone,
            height: hBoxOuth + padZone,
            hitStrokeWidth: 0,
            shadowForStrokeEnabled: false,
            fillRadialGradientStartPoint: {
              x: xBox12,
              y: yBox12
            },
            fillRadialGradientStartRadius: 0,
            fillRadialGradientEndPoint: {
              x: xBox12,
              y: yBox12
            },
            fillRadialGradientEndRadius: 1e3,
            fillRadialGradientColorStops: [0, "#FFF", 1, "#ddd"]
          })
        );
        newLayer.add(
          rectCache.clone({
            x: xBox14 + borderInnerWith,
            y: yBox14 + borderInnerWith,
            width: 2 * wSquare + borderInnerWith,
            height: 2 * hSquare + borderInnerWith,
            fillRadialGradientStartPoint: {
              x: xBox14,
              y: yBox14
            },
            fillRadialGradientStartRadius: 0,
            fillRadialGradientEndPoint: {
              x: xBox14,
              y: yBox14
            },
            fillRadialGradientEndRadius: 555,
            fillRadialGradientColorStops: [0, "#fff", 1, "#ddd"],
            hitStrokeWidth: 0,
            shadowForStrokeEnabled: false
          })
        );
        const layerWithBorders = LinesBorder({
          ls,
          layer: newLayer,
          lsWidth,
          lsHeight,
          xBox,
          borderOutWith,
          hafBorderOut,
          yBox,
          xBox12,
          yBox12,
          xBox14,
          yBox14,
          xBox34,
          yBox34,
          xBox4,
          yBox4,
          hafBorderIn,
          borderInnerWith,
          bColor
        });
        const layerWithEarth = Earth({
          layer: layerWithBorders,
          bColor,
          colorHoaStart,
          colorHoa,
          colorHoaFill,
          colorHoaFill60,
          color,
          xBox12,
          yBox34,
          xBox14,
          xBox,
          yBox12,
          yBox14,
          yBox,
          xBox4,
          yBox4,
          xBox34,
          ls,
          hafWSquare,
          hafHSquare,
          fontFamilySet,
          borderOutWith,
          hafBorderOut,
          fontDV,
          padContentBottom,
          padContentTop,
          padContent,
          wSquare,
          hSquare,
          fontPhuTinh,
          fontChinhTinh,
          getGradient: createGradient,
          typePhiHoa,
          typeLs,
          cfgLs,
          canHoa: canHoaArr
        });
        const finalLayer = Sky({
          layer: layerWithEarth,
          wSquare,
          xBox12,
          xBox14,
          yBox14,
          yBox34,
          borderInnerWith,
          ls,
          fontCenter,
          hafWSquare,
          fontFamilySet,
          color,
          fontDV,
          cfgLs,
          getGradient: createGradient,
          version: props.version
        });
        finalLayer.add(
          rectCache.clone({
            x: 0,
            y: hBoxOuth + padZone,
            width: wBoxOuth + padZone,
            height: hBoxOuth + padZone,
            fill: "rgb(233 233 233)"
          })
        );
        const hourConflict = detectHourBoundaryConflict(ls);
        const leapConflict = detectLeapMonthConflict(ls);
        if (hourConflict.isConflict || leapConflict.isConflict) {
          const parts = [];
          let note = "";
          if (hourConflict.isConflict) {
            parts.push(`Giờ ${hourConflict.adminHour} (${hourConflict.adminChi}) ≠ Giờ Mặt Trời ${hourConflict.solarHour} (${hourConflict.solarChi})`);
            note = "Tử Vi giờ biên 2 giờ sai số lớn nên xem mệnh theo Tứ Trụ (giữa lá số)";
          }
          if (leapConflict.isConflict) {
            parts.push(`Tháng ÂL ${leapConflict.lunarMonth} ≠ Tiết khí ${leapConflict.solarTermMonth}`);
            note = "Tử Vi tháng nhuận sai số lớn nên xem mệnh theo Tứ Trụ (giữa lá số)";
          }
          if (hourConflict.isConflict && leapConflict.isConflict) {
            note = "Tử Vi giờ biên + tháng nhuận sai số rất cao nên xem mệnh theo Tứ Trụ (giữa lá số)";
          }
          finalLayer.add(
            new Konva$2.Text({
              x: padZone / 2,
              y: 8,
              width: wBoxOuth,
              text: `Lưu ý: ${parts.join(" | ")} — ${note}`,
              fontSize: 10,
              fontFamily: fontFamilySet,
              fill: "#c2410c",
              fontStyle: "normal",
              align: "center",
              hitStrokeWidth: 0,
              listening: false
            })
          );
        }
        newStage.add(finalLayer);
        layerRef.current = finalLayer;
        setTimeout(() => {
          const image = getStageImage(2);
          if (image) {
            setCanvasImage(image);
          }
        }, 100);
      } catch (error) {
        console.error("Error initializing stage:", error);
      }
    }
    return cleanup;
  }, [props.ls, props.version]);
  useEffect(() => {
    if (props.fnDownloadCall > 0) {
      handleExport();
    }
    if (props.fnCopyLs > 0) {
      copyImageToClipboard();
    }
    if (props.fnExportNote > 0) {
      exportImageNote();
    }
    if (props.fnSocialShare > 0) {
      if (props.socialPlatform) {
        handleSocialShare(props.socialPlatform);
      } else {
        showShareDialog();
      }
    }
  }, [props.fnDownloadCall, props.fnCopyLs, props.fnExportNote, props.fnSocialShare, props.socialPlatform]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { id: "cv", className: "flex justify-center" }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 size-full max-lg:block" })
  ] });
};

export { ViewerLs as default };
