import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import 'dayjs/locale/vi.js';
/* empty css         */
import dayjs from 'dayjs';
import debounce from 'lodash/debounce.js';
import React, { useEffect, useRef, useState, useMemo, lazy, useCallback, Suspense } from 'react';
import { b as HoroHelp, E as withReactContent, I as Swal, J as HoroscopeHtmlClient, a6 as AppUI, M as TrungChauWarning, O as tmdAppThumb, P as CSVTable, Q as ExplainLS, N as IconSettings } from './B_8m_d-e.js';
import { s as configDefault, t as numbStringToArr, L as LTHG, a as CAN, C as CHI, A as AREA_NAME, o as TH, g as LTHG_HH, n as CfgValue, d as CHI_AD, u as StlkName, Z as ZolkName, v as hoa2IchingIdx, x as xtngl, w as CAN_HOA, y as buildDateInfo, G as GETHOA, z as StarToHoaCan, B as StarUseHoa, j as SM, D as STARSTRONG, E as STAR_SIGN, F as CR_TS, I as FAILURE6, J as idxTHAP, K as CHI_CAN, M as idxTSTutru, l as CHI_3HH, e as CHI_HH, i as THAP, O as HH_THAP, c as CAN_HH, b as CAN_AD, k as containsNumber, Q as STARLOOP1, H as HH, R as ADTN, U as SKB, T as TKN, V as TKN_MONTH, h as TKN_PN, W as TSNAME, f as LTHG_NA, q as getLunaBornText, X as arrH1, r as getSexText, Y as validateAllConfig, _ as updateConfig, $ as LsTypeSlug } from './Dc1Oa40J.js';
import { c as convertSolar2Lunar } from './BoGaZN0a.js';
import utc from 'dayjs/plugin/utc.js';
import { G as GEMINI_AI_LINKS } from './C-2XUs_Y.js';
import Konva$2 from 'konva';
import Konva from 'konva/lib/Core.js';
import { Arrow } from 'konva/lib/shapes/Arrow.js';
import { Circle } from 'konva/lib/shapes/Circle.js';
import { Line } from 'konva/lib/shapes/Line.js';
import { Rect } from 'konva/lib/shapes/Rect.js';
import { Text } from 'konva/lib/shapes/Text.js';
import Konva$1 from 'konva/lib/_CoreInternals.js';
import './BODF8xcG.js';

function buildKeyUrl(inputDtBorn, inputDtView = /* @__PURE__ */ new Date(), sex = 1, cfgInput = [...configDefault], lat, lon) {
  const cfg = cfgInput;
  const dtBorn = inputDtBorn ?? /* @__PURE__ */ new Date();
  const lunaBorn = convertSolar2Lunar(
    dtBorn.getFullYear(),
    dtBorn.getMonth() + 1,
    dtBorn.getDate(),
    dtBorn.getHours(),
    dtBorn.getMinutes()
  );
  const bornParam = `${dtBorn.getFullYear()}.${(dtBorn.getMonth() + 1).toString().padStart(2, "0")}.${dtBorn.getDate().toString().padStart(2, "0")}.${dtBorn.getHours().toString().padStart(2, "0")}.${dtBorn.getMinutes().toString().padStart(2, "0")}`;
  const viewParam = `${inputDtView.getFullYear()}.${(inputDtView.getMonth() + 1).toString().padStart(2, "0")}.${inputDtView.getDate().toString().padStart(2, "0")}.${inputDtView.getHours().toString().padStart(2, "0")}`;
  const cfgParam = cfg.join("");
  let url = `?s=${sex}&b=${bornParam}&v=${viewParam}&cf=${cfgParam}`;
  const strBorn = `${dtBorn.getFullYear()}-${dtBorn.getMonth() + 1}-${dtBorn.getDate()}-${dtBorn.getHours()}-${dtBorn.getMinutes()}`;
  const strView = `${inputDtView.getFullYear()}-${inputDtView.getMonth() + 1}-${inputDtView.getDate()}-${inputDtView.getHours()}`;
  return {
    url,
    urlArr: [url],
    sex,
    dtBorn,
    strBorn,
    tkccBorn: "",
    dtView: inputDtView,
    strView,
    cfg,
    key: "",
    luna: lunaBorn
  };
}
function GetInfoFromURL(url) {
  try {
    const params = new URLSearchParams(url.split("?")[1]);
    const sexParam = params.get("s");
    const sex = sexParam === null ? 1 : Number(sexParam);
    if (Number.isNaN(sex) || sex !== 0 && sex !== 1) {
      console.error("Invalid sex parameter:", sexParam);
      return getDefaultInfo();
    }
    const bornParam = params.get("b");
    if (!bornParam) return getDefaultInfo();
    const bornParts = bornParam.split(".");
    const dtBorn = parseDateComponents(bornParts, true);
    if (!dtBorn) {
      console.error("Invalid birth date:", bornParam);
      return getDefaultInfo();
    }
    const viewParam = params.get("v");
    if (!viewParam) return getDefaultInfo();
    const viewParts = viewParam.split(".");
    const dtView = parseDateComponents(viewParts, false);
    if (!dtView) {
      console.error("Invalid view date:", viewParam);
      return getDefaultInfo();
    }
    const cfgStr = params.get("cf") || "";
    const cfg = cfgStr ? numbStringToArr(cfgStr) : [...configDefault];
    if (!Array.isArray(cfg) || cfg.some((val) => typeof val !== "number")) {
      console.error("Invalid config:", cfgStr);
      return getDefaultInfo();
    }
    const latParam = params.get("lat");
    const lonParam = params.get("lon");
    const lat = latParam ? parseFloat(latParam) : void 0;
    const lon = lonParam ? parseFloat(lonParam) : void 0;
    const strBorn = `${dtBorn.getFullYear()}-${String(dtBorn.getMonth() + 1).padStart(2, "0")}-${String(dtBorn.getDate()).padStart(2, "0")}-${String(dtBorn.getHours()).padStart(2, "0")}-${String(dtBorn.getMinutes()).padStart(2, "0")}`;
    const strView = `${dtView.getFullYear()}-${String(dtView.getMonth() + 1).padStart(2, "0")}-${String(dtView.getDate()).padStart(2, "0")}-${String(dtView.getHours()).padStart(2, "0")}`;
    return {
      sex,
      dtBorn,
      strBorn,
      tkccBorn: "",
      dtView,
      strView,
      cfg,
      key: "",
      keyUrl: "",
      lat,
      lon
    };
  } catch {
    return getDefaultInfo();
  }
}
function isValidDate$1(date) {
  return date instanceof Date && !Number.isNaN(date.getTime());
}
function parseDateComponents(parts, includeMinutes = true) {
  try {
    if (!parts || parts.length < (includeMinutes ? 5 : 4)) {
      return null;
    }
    const year = Number(parts[0]);
    const month = Number(parts[1]) - 1;
    const day = Number(parts[2]);
    const hour = Number(parts[3]);
    const minute = includeMinutes ? Number(parts[4]) : 0;
    if (Number.isNaN(year) || year < 1e3 || year > 2100 || Number.isNaN(month) || month < 0 || month > 11 || Number.isNaN(day) || day < 1 || day > 31 || Number.isNaN(hour) || hour < 0 || hour > 23 || Number.isNaN(minute) || minute < 0 || minute > 59) {
      return null;
    }
    const date = new Date(year, month, day, hour, minute);
    return isValidDate$1(date) ? date : null;
  } catch {
    return null;
  }
}
function getDefaultInfo() {
  return {
    sex: 1,
    dtBorn: /* @__PURE__ */ new Date(),
    strBorn: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
    tkccBorn: "giap-thin-tan-mui-mau-ty-nham-tuat",
    dtView: /* @__PURE__ */ new Date(),
    strView: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
    cfg: [...configDefault],
    key: "err",
    keyUrl: "err",
    lat: 21.0285,
    // Hanoi default
    lon: 105.8333
  };
}

class CalculationHelper {
  // Nhảy xuống từ vị trí idxStart
  jumpDown(idxStart) {
    return (idxStart + 11) % 12;
  }
  // Nhảy lên từ vị trí idxStart
  jumpUp(idxStart) {
    return (idxStart + 1) % 12;
  }
  // Tính toán vị trí sau khi di chuyển
  idxAfterMove(idxStart, steps, forward = true) {
    let currentIdx = forward ? this.jumpDown(idxStart) : this.jumpUp(idxStart);
    for (let i = 1; i <= steps; i++) {
      currentIdx = forward ? this.jumpUp(currentIdx) : this.jumpDown(currentIdx);
    }
    return currentIdx;
  }
  // Kiểm tra có thể nhảy xuống từ vị trí startIdxInput
  canJumpDown(startIdxInput) {
    return (startIdxInput - 1 + 10) % 10;
  }
  // Kiểm tra có thể nhảy lên từ vị trí startIdxInput
  canJumpUp(startIdxInput) {
    return (startIdxInput + 1) % 10;
  }
}

const CIRCLE_LENGTH = 12;
const TRUONG_SINH_START = 40;
const BAC_SI_START = 28;
const THAI_TUE_START = 15;
const MT_TRUONG = /* @__PURE__ */ new Map([
  [2, 8],
  [3, 11],
  [4, 5],
  [5, 8],
  [6, 2]
]);
const MT_BS = /* @__PURE__ */ new Map([
  [0, 8],
  [1, 9],
  [2, 11],
  [3, 0],
  [4, 2],
  [5, 3],
  [6, 5],
  [7, 6],
  [8, 5],
  [9, 6]
]);
class CirclePlacer {
  hsc;
  constructor(horoscope) {
    this.hsc = horoscope;
  }
  fillGrowCircle() {
    let idxStart = MT_TRUONG.get(this.hsc.cid) ?? 0;
    let circleTruongsinh = TRUONG_SINH_START;
    for (let k = 0; k < CIRCLE_LENGTH; k += 1) {
      this.hsc.addStar(idxStart, circleTruongsinh, PrefixArea.SmallStar);
      idxStart = this.hsc.jumbByYinBoyYanGirl(idxStart);
      circleTruongsinh += 1;
    }
  }
  fillDoctorCircle(idxCan, prefix) {
    let idxStart = MT_BS.get(idxCan) ?? 0;
    let circleBacSi = BAC_SI_START;
    for (let k = 0; k < CIRCLE_LENGTH; k += 1) {
      this.hsc.addStar(idxStart, circleBacSi, prefix);
      if (circleBacSi === BAC_SI_START) {
        this.hsc.addStar(idxStart, BAC_SI_START - 1, prefix);
      }
      idxStart = this.hsc.jumbByYinBoyYanGirl(idxStart);
      circleBacSi += 1;
    }
  }
  fillKingCircle(yearIdx, prefix) {
    let idx = yearIdx;
    let circleThaiTue = THAI_TUE_START;
    for (let k = 0; k < CIRCLE_LENGTH; k += 1) {
      this.hsc.addStar(idx, circleThaiTue, prefix);
      if (circleThaiTue === THAI_TUE_START + 1) {
        this.hsc.addStar(idx, THAI_TUE_START - 1, prefix);
      }
      idx = this.hsc.jumbUp(idx);
      circleThaiTue += 1;
    }
  }
  fillCircleSmallTime() {
    this.setAilPositions();
    this.setMonthCanChi();
    this.setLuuNguyetPositions();
    this.setLuuNienPositions();
    this.setLuuNguyetNPPositions();
  }
  setAilPositions() {
    const { dtv, ars, aIdx } = this.hsc;
    let menhLnIdx = dtv.bs.y[1];
    let idxZone = 0;
    for (let i = 0; i < CIRCLE_LENGTH; i += 1) {
      ars[menhLnIdx].ail = idxZone;
      aIdx[`ail${idxZone}`] = menhLnIdx;
      idxZone = this.hsc.jumbDown(idxZone);
      menhLnIdx = this.hsc.jumbUp(menhLnIdx);
    }
  }
  setMonthCanChi() {
    const { dtv, ars } = this.hsc;
    let firstChiLuuNguyetIdx = 2;
    let firstCanThangIdx = this.getNguHoDon(dtv.bs.y[0]);
    for (let idMonth = 0; idMonth < CIRCLE_LENGTH; idMonth += 1) {
      ars[firstChiLuuNguyetIdx].lmpt = [
        idMonth + 1,
        // Số thứ tự tháng
        0,
        // Giá trị mặc định (có thể được cập nhật sau)
        firstCanThangIdx,
        // Chỉ số Can của tháng
        firstChiLuuNguyetIdx,
        // Chỉ số Chi của tháng
        LTHG.indexOf(`${CAN[firstCanThangIdx]} ${CHI[firstChiLuuNguyetIdx]}`)
        // Chỉ số trong bảng Lục Thập Hoa Giáp
      ];
      firstCanThangIdx = this.hsc.canJumpUp(firstCanThangIdx);
      firstChiLuuNguyetIdx = this.hsc.jumbUp(firstChiLuuNguyetIdx);
    }
  }
  setLuuNguyetPositions() {
    const { dtv, dtb, ars, aIdx } = this.hsc;
    let idxNguyetTCP = dtv.bs.y[1];
    idxNguyetTCP = this.hsc.idxAfterMove(idxNguyetTCP, dtb.ln.m, false);
    idxNguyetTCP = this.hsc.idxAfterMove(idxNguyetTCP, dtb.ln.h + 1, true);
    for (let idNameCung = 0; idNameCung < CIRCLE_LENGTH; idNameCung += 1) {
      ars[idxNguyetTCP].lmpt[1] = [idNameCung + 1, idNameCung];
      aIdx[`lmpt${idNameCung}`] = idxNguyetTCP;
      idxNguyetTCP = this.hsc.jumbUp(idxNguyetTCP);
    }
  }
  setLuuNienPositions() {
    const { dtv, dtb, ars, aIdx } = this.hsc;
    const mt = {
      8: 10,
      0: 10,
      4: 10,
      2: 4,
      6: 4,
      10: 4,
      5: 7,
      9: 7,
      1: 7,
      11: 1,
      3: 1,
      7: 1
    };
    const idxChiYearView = dtv.bs.y[1];
    let idxCungTieuvan = mt[dtb.bs.y[1]];
    let idxYearBorn = dtb.bs.y[1];
    const direction = this.hsc.sx > 0;
    for (let i = 0; i < CIRCLE_LENGTH; i += 1) {
      if (idxChiYearView === idxYearBorn) {
        aIdx.lynpc = idxCungTieuvan;
      }
      ars[idxCungTieuvan].lynp = idxYearBorn;
      idxYearBorn = this.hsc.jumbUp(idxYearBorn);
      idxCungTieuvan = direction ? this.hsc.jumbUp(idxCungTieuvan) : this.hsc.jumbDown(idxCungTieuvan);
    }
  }
  setLuuNguyetNPPositions() {
    const { dtv, dtb, ars, aIdx } = this.hsc;
    let idxNguyetNP = aIdx.lynpc;
    idxNguyetNP = this.hsc.idxAfterMove(idxNguyetNP, dtb.ln.m, false);
    idxNguyetNP = this.hsc.idxAfterMove(idxNguyetNP, dtb.ln.h + 1, true);
    let canThangNvIdx = this.getNguHoDon(dtv.bs.y[0]);
    let chiThangNvIdx = 2;
    for (let i = 0; i < CIRCLE_LENGTH; i += 1) {
      ars[idxNguyetNP].lmnp = [
        i + 1,
        // Số thứ tự tháng
        canThangNvIdx,
        // Chỉ số Can của tháng
        chiThangNvIdx,
        // Chỉ số Chi của tháng
        LTHG.indexOf(`${CAN[canThangNvIdx]} ${CHI[chiThangNvIdx]}`)
        // Chỉ số trong bảng Lục Thập Hoa Giáp
      ];
      if (dtv.ln.m - 1 === i) {
        aIdx.lmnpc = idxNguyetNP;
      }
      idxNguyetNP = this.hsc.jumbUp(idxNguyetNP);
      canThangNvIdx = this.hsc.canJumpUp(canThangNvIdx);
      chiThangNvIdx = this.hsc.jumbUp(chiThangNvIdx);
    }
  }
  // Phương thức lấy giá trị Ngũ Hổ Đồn dựa trên năm
  getNguHoDon(year) {
    const nguHoDon = {
      4: 6,
      5: 8,
      6: 0,
      7: 2,
      8: 4,
      9: 6,
      0: 8,
      1: 0,
      2: 2,
      3: 4
    };
    return nguHoDon[year];
  }
  // Phương thức điền thông tin cho vòng Đại Vận
  fillCircleBigTime() {
    const { ars, aIdx } = this.hsc;
    let idxStart = aIdx.am;
    const idxFirstCuc = this.hsc.cid;
    let idxCuc = this.hsc.cid;
    for (let i = 0; i < CIRCLE_LENGTH; i += 1) {
      ars[idxStart].dv = idxCuc;
      const prvCuc = idxCuc;
      const idxStartPrev = idxStart;
      idxStart = this.hsc.jumbByYinBoyYanGirl(idxStart);
      idxCuc += 10;
      if (this.hsc.yeo >= prvCuc && this.hsc.yeo < idxCuc) {
        ars[idxStartPrev].dvc = true;
        this.hsc.dvidx = idxStartPrev;
      }
      if (this.hsc.yeo <= idxFirstCuc) {
        ars[aIdx.am].dvc = true;
        this.hsc.dvidx = aIdx.am;
      }
    }
    let menhLuuDvIdx = this.hsc.dvidx;
    let idxZone = 0;
    for (let i = 0; i < AREA_NAME.length; i += 1) {
      ars[menhLuuDvIdx].aid = idxZone;
      aIdx[`aid${idxZone}`] = menhLuuDvIdx;
      idxZone = this.hsc.jumbDown(idxZone);
      menhLuuDvIdx = this.hsc.jumbUp(menhLuuDvIdx);
    }
  }
}

class StarPlacer {
  hsc;
  constructor(horoscope) {
    this.hsc = horoscope;
  }
  fillBigStar() {
    const arrConst = [0, 1, 2, 3, 4, 5];
    let firstJumb = 0;
    let secondJumb = 0;
    for (let item = 0; item < arrConst.length; item += 1) {
      if ((this.hsc.dtb.ln.d + item) % this.hsc.cid === 0) {
        firstJumb = (this.hsc.dtb.ln.d + item) / this.hsc.cid;
        secondJumb = item;
        break;
      }
    }
    let idxTuvi = this.hsc.idxAfterMove(2, firstJumb);
    idxTuvi = this.hsc.idxAfterMove(idxTuvi, secondJumb + 1, secondJumb % 2 === 0);
    const chomBacDau = [0, 1, -1, 2, 3, 4, -1, -1, 5, -1, -1, -1];
    const thienphuMt = {
      0: 4,
      1: 3,
      2: 2,
      3: 1,
      4: 0,
      5: 11,
      6: 10,
      7: 9,
      8: 8,
      9: 7,
      10: 6,
      11: 5
    };
    const chomThienPhu = [6, 7, 8, 9, 10, 11, 12, -1, -1, -1, 13];
    const handleBigStar = (idx, items, upOrDown) => {
      let idxAddStar = idx;
      items.forEach((starId) => {
        if (Number(starId) >= 0) {
          this.hsc.addStar(idxAddStar, Number(starId), PrefixArea.BigStar);
        }
        idxAddStar = upOrDown(idxAddStar);
      });
      return idxAddStar;
    };
    handleBigStar(idxTuvi, chomBacDau, this.hsc.jumbDown.bind(this.hsc));
    handleBigStar(thienphuMt[idxTuvi], chomThienPhu, this.hsc.jumbUp.bind(this.hsc));
  }
  fillSixAssassin(idxLocton, prefix) {
    this.hsc.addStar(this.hsc.jumbUp(idxLocton), 56, prefix);
    this.hsc.addStar(this.hsc.jumbDown(idxLocton), 57, prefix);
    if (prefix !== PrefixArea.SmallStar) {
      return;
    }
    this.hsc.addStar(this.hsc.idxAfterMove(11, this.hsc.dtb.ln.h + 1, false), 52, PrefixArea.SmallStar);
    this.hsc.addStar(this.hsc.idxAfterMove(11, this.hsc.dtb.ln.h + 1, true), 53, PrefixArea.SmallStar);
    const mtBigFire = {
      2: 1,
      6: 1,
      10: 1,
      8: 2,
      0: 2,
      4: 2,
      5: 3,
      9: 3,
      1: 3,
      11: 9,
      3: 9,
      7: 9
    };
    const mtSmallFire = {
      2: 3,
      6: 3,
      10: 3,
      8: 10,
      0: 10,
      4: 10,
      5: 10,
      9: 10,
      1: 10,
      11: 10,
      3: 10,
      7: 10
    };
    let bigFireIdx = mtBigFire[this.hsc.dtb.bs.y[1]];
    let smallFireIdx = mtSmallFire[this.hsc.dtb.bs.y[1]];
    if (!this.hsc.istc) {
      bigFireIdx = this.hsc.idxAfterMove(bigFireIdx, this.hsc.dtb.ln.h + 1, this.hsc.sx === this.hsc.adye);
      smallFireIdx = this.hsc.idxAfterMove(smallFireIdx, this.hsc.dtb.ln.h + 1, !(this.hsc.sx === this.hsc.adye));
    } else {
      bigFireIdx = this.hsc.idxAfterMove(bigFireIdx, this.hsc.dtb.ln.h + 1, true);
      smallFireIdx = this.hsc.idxAfterMove(smallFireIdx, this.hsc.dtb.ln.h + 1, true);
    }
    this.hsc.addStar(bigFireIdx, 54, PrefixArea.SmallStar);
    this.hsc.addStar(smallFireIdx, 55, PrefixArea.SmallStar);
  }
  fillSixBuffer(canIdx, prefix, lunaHour = 0) {
    const khoiCung = { 4: 1, 5: 0, 6: 11, 7: 11, 8: 1, 9: 0, 0: 1, 1: 6, 2: 3, 3: 3 };
    const vietCung = { 4: 7, 5: 8, 6: 9, 7: 9, 8: 7, 9: 8, 0: 7, 1: 2, 2: 5, 3: 5 };
    this.hsc.addStar(khoiCung[canIdx], 58, prefix);
    this.hsc.addStar(vietCung[canIdx], 59, prefix);
    if (prefix !== PrefixArea.SmallStar) {
      const xuongKhucMt = {
        0: [5, 9],
        1: [6, 8],
        2: [8, 6],
        3: [9, 5],
        4: [8, 6],
        5: [9, 5],
        6: [11, 3],
        7: [0, 2],
        8: [2, 0],
        9: [3, 11]
      };
      this.hsc.addStar(xuongKhucMt[canIdx][0], 62, prefix);
      this.hsc.addStar(xuongKhucMt[canIdx][1], 63, prefix);
      return;
    }
    const xuongIdx = this.hsc.idxAfterMove(10, lunaHour + 1, false);
    const khucIdx = this.hsc.idxAfterMove(4, lunaHour + 1, true);
    this.hsc.addStar(xuongIdx, 62, prefix);
    this.hsc.addStar(khucIdx, 63, prefix);
    const taIdx = this.hsc.idxAfterMove(4, this.hsc.dtb.ln.m, true);
    const huuIdx = this.hsc.idxAfterMove(10, this.hsc.dtb.ln.m, false);
    this.hsc.addStar(taIdx, 60, prefix);
    this.hsc.addStar(huuIdx, 61, prefix);
  }
  fillBig4(idCan, prefix) {
    const starHoa = this.hsc.HOA[idCan];
    this.hsc.addStar(this.hsc.aIdx[`s${starHoa[TH.L]}`], 64, prefix);
    this.hsc.addStar(this.hsc.aIdx[`s${starHoa[TH.Q]}`], 65, prefix);
    this.hsc.addStar(this.hsc.aIdx[`s${starHoa[TH.Z]}`], 66, prefix);
    this.hsc.addStar(this.hsc.aIdx[`s${starHoa[TH.K]}`], 67, prefix);
  }
  fillTuanTriet(idCan, idChi, prefix = PrefixArea.SmallStar) {
    const tuanMt = {
      0: [10, 11],
      // tuần giáp tý
      10: [8, 9],
      // tuần giáp tuất
      8: [6, 7],
      // tuần giáp thân
      6: [4, 5],
      // tuần giáp ngọ
      4: [2, 3],
      // tuần giáp thìn
      2: [0, 1]
      // tuần giáp tuất
    };
    const trietMt = {
      4: [8, 9],
      // giáp
      5: [6, 7],
      // ất
      6: [4, 5],
      // bính
      7: [2, 3],
      // đinh
      8: [0, 1],
      // mậu
      9: [8, 9],
      // kỷ
      0: [6, 7],
      // canh
      1: [4, 5],
      // tân
      2: [2, 3],
      // nhâm
      3: [0, 1]
      // quý
    };
    let yearCan = idCan;
    let yearChiofGiap = idChi;
    for (let i = 0; i < 10; i += 1) {
      if (yearCan === 4) {
        break;
      }
      yearCan = this.hsc.canJumpDown(yearCan);
      yearChiofGiap = this.hsc.jumbDown(yearChiofGiap);
    }
    const arrTuanIdx = tuanMt[yearChiofGiap];
    const arrTuanTr = [];
    arrTuanTr[0] = [arrTuanIdx[0], arrTuanIdx[1]];
    this.hsc.aIdx.tu = arrTuanIdx;
    arrTuanTr[1] = trietMt[idCan];
    this.hsc.aIdx.tr = trietMt[idCan];
    const idxTTR = prefix === PrefixArea.SmallStar ? 0 : prefix === PrefixArea.TenYearStar ? 1 : 2;
    this.hsc.ttr[idxTTR] = arrTuanTr;
  }
  fillDargon(idChi = this.hsc.dtb.bs.y[1], prefix = PrefixArea.SmallStar) {
    this.hsc.addStar(this.hsc.idxAfterMove(4, idChi + 1, true), 76, prefix);
    this.hsc.addStar(this.hsc.idxAfterMove(10, idChi + 1, false), 77, prefix);
    const hoaCaiMt = {
      5: 1,
      9: 1,
      1: 1,
      11: 7,
      3: 7,
      7: 7,
      2: 10,
      6: 10,
      10: 10,
      8: 4,
      0: 4,
      4: 4
    };
    this.hsc.addStar(hoaCaiMt[idChi], 78, prefix);
  }
  fillTangMaKhocHu(yearChiIdx, prefix) {
    const thienMaMt = {
      5: 11,
      9: 11,
      1: 11,
      11: 5,
      3: 5,
      7: 5,
      2: 8,
      6: 8,
      10: 8,
      8: 2,
      0: 2,
      4: 2
    };
    const thienMaIdx = thienMaMt[yearChiIdx];
    this.hsc.addStar(thienMaIdx, 79, prefix);
    const thienKhocIdx = this.hsc.idxAfterMove(6, yearChiIdx + 1, false);
    this.hsc.addStar(thienKhocIdx, 80, prefix);
    const thienHuIdx = this.hsc.idxAfterMove(6, yearChiIdx + 1, true);
    this.hsc.addStar(thienHuIdx, 81, prefix);
  }
  fillHinhRieuHaSatToai(idCan = this.hsc.dtb.bs.y[0], idChi = this.hsc.dtb.bs.y[1], prefix = PrefixArea.SmallStar) {
    const luuHaMt = {
      4: 9,
      5: 10,
      6: 7,
      7: 8,
      8: 5,
      9: 6,
      0: 4,
      1: 3,
      2: 11,
      3: 2
    };
    this.hsc.addStar(luuHaMt[idCan], 90, prefix);
    const kiepSatMt = {
      5: 2,
      9: 2,
      1: 2,
      11: 8,
      3: 8,
      7: 8,
      2: 11,
      6: 11,
      10: 11,
      8: 5,
      0: 5,
      4: 5
    };
    this.hsc.addStar(kiepSatMt[idChi], 91, prefix);
    const phaToaiMt = {
      0: 5,
      6: 5,
      3: 5,
      9: 5,
      2: 9,
      8: 9,
      5: 9,
      11: 9,
      4: 1,
      10: 1,
      1: 1,
      7: 1
    };
    const phaToaiIdx = phaToaiMt[idChi];
    this.hsc.addStar(phaToaiIdx, 92, prefix);
    if (prefix !== PrefixArea.SmallStar) {
      return;
    }
    this.hsc.addStar(this.hsc.idxAfterMove(9, this.hsc.dtb.ln.m, true), 87, PrefixArea.SmallStar);
    const thienRieuIdx = this.hsc.idxAfterMove(1, this.hsc.dtb.ln.m, true);
    this.hsc.addStar(thienRieuIdx, 88, PrefixArea.SmallStar);
    this.hsc.addStar(thienRieuIdx, 89, PrefixArea.SmallStar);
  }
  fillDaoHongHiCoQua(yearChiIdx, prefix) {
    const daoHoaMt = {
      5: 6,
      9: 6,
      1: 6,
      11: 0,
      3: 0,
      7: 0,
      2: 3,
      6: 3,
      10: 3,
      8: 9,
      0: 9,
      4: 9
    };
    const daoHoaIdx = daoHoaMt[yearChiIdx];
    this.hsc.addStar(daoHoaIdx, 82, prefix);
    const hongLoanIdx = this.hsc.idxAfterMove(3, yearChiIdx + 1, false);
    this.hsc.addStar(hongLoanIdx, 83, prefix);
    const thienHiIdx = this.hsc.idxAfterMove(hongLoanIdx, 7, true);
    this.hsc.addStar(thienHiIdx, 84, prefix);
    if (prefix !== PrefixArea.SmallStar) {
      return;
    }
    const coQuaMt = {
      11: [2, 10],
      0: [2, 10],
      1: [2, 10],
      2: [5, 1],
      3: [5, 1],
      4: [5, 1],
      5: [8, 4],
      6: [8, 4],
      7: [8, 4],
      8: [11, 7],
      9: [11, 7],
      10: [11, 7]
    };
    const cothanIdx = coQuaMt[yearChiIdx][0];
    this.hsc.addStar(cothanIdx, 85, prefix);
    const quaTuIdx = coQuaMt[yearChiIdx][1];
    this.hsc.addStar(quaTuIdx, 86, prefix);
  }
  fillThaiCaoAnDuong() {
    const thaiPhuIdx = this.hsc.idxAfterMove(6, this.hsc.dtb.ln.h + 1, true);
    this.hsc.addStar(thaiPhuIdx, 72, PrefixArea.SmallStar);
    const phongCaoIdx = this.hsc.idxAfterMove(2, this.hsc.dtb.ln.h + 1, true);
    this.hsc.addStar(phongCaoIdx, 73, PrefixArea.SmallStar);
    const quocAnIdx = this.hsc.idxAfterMove(this.hsc.aIdx.s27, 9, true);
    const duongPhuIdx = this.hsc.idxAfterMove(this.hsc.aIdx.s27, 8, false);
    this.hsc.addStar(quocAnIdx, 74, PrefixArea.SmallStar);
    this.hsc.addStar(duongPhuIdx, 75, PrefixArea.SmallStar);
  }
  fillQuangQuyThaiToa() {
    const lunaDate = this.hsc.dtb.ln.d;
    this.hsc.addStar(
      this.hsc.jumbDown(this.hsc.idxAfterMove(this.hsc.aIdx.s62, lunaDate, true)),
      68,
      PrefixArea.SmallStar
    );
    this.hsc.addStar(
      this.hsc.jumbUp(this.hsc.idxAfterMove(this.hsc.aIdx.s63, lunaDate, false)),
      69,
      PrefixArea.SmallStar
    );
    this.hsc.addStar(this.hsc.idxAfterMove(this.hsc.aIdx.s60, lunaDate, true), 70, PrefixArea.SmallStar);
    this.hsc.addStar(this.hsc.idxAfterMove(this.hsc.aIdx.s61, lunaDate, false), 71, PrefixArea.SmallStar);
  }
  fillQuanPhucNienTru(canYearIdx, prefix) {
    const quanPhucNienTru = {
      4: [7, 9, 5, 5],
      5: [4, 8, 6, 6],
      6: [5, 0, 8, 5],
      7: [2, 11, 9, 6],
      8: [3, 3, 8, 8],
      9: [9, 2, 9, 9],
      0: [11, 6, 11, 11],
      1: [9, 5, 0, 0],
      2: [10, 6, 2, 2],
      3: [6, 5, 3, 3]
    };
    const thienQuanIdx = quanPhucNienTru[canYearIdx][0];
    const thienPhucIdx = quanPhucNienTru[canYearIdx][1];
    const luuNienVanTinhIdx = quanPhucNienTru[canYearIdx][2];
    const thienTruIdx = quanPhucNienTru[canYearIdx][3];
    this.hsc.addStar(thienQuanIdx, 93, prefix);
    this.hsc.addStar(thienPhucIdx, 94, prefix);
    this.hsc.addStar(luuNienVanTinhIdx, 95, prefix);
    this.hsc.addStar(thienTruIdx, 96, prefix);
  }
  fillThienNguyetDiaThanTaiTho() {
    if (!this.hsc.istc) {
      this.hsc.addStar(this.hsc.aIdx.s77, 101, PrefixArea.SmallStar);
    }
    const diaGiaiIdx = this.hsc.idxAfterMove(7, this.hsc.dtb.ln.m, true);
    this.hsc.addStar(diaGiaiIdx, 100, PrefixArea.SmallStar);
    const thienGiaiIdx = this.hsc.idxAfterMove(8, this.hsc.dtb.ln.m, true);
    this.hsc.addStar(thienGiaiIdx, 99, PrefixArea.SmallStar);
    const thienDucIdx = this.hsc.idxAfterMove(9, this.hsc.dtb.bs.y[1] + 1, true);
    this.hsc.addStar(thienDucIdx, 97, PrefixArea.SmallStar);
    const nguyetDucIdx = this.hsc.idxAfterMove(5, this.hsc.dtb.bs.y[1] + 1, true);
    this.hsc.addStar(nguyetDucIdx, 98, PrefixArea.SmallStar);
    const thienTaiIdx = this.hsc.idxAfterMove(this.hsc.aIdx.am, this.hsc.dtb.bs.y[1] + 1, true);
    this.hsc.addStar(thienTaiIdx, 102, PrefixArea.SmallStar);
    const thienThoIdx = this.hsc.idxAfterMove(this.hsc.aIdx.at, this.hsc.dtb.bs.y[1] + 1, true);
    this.hsc.addStar(thienThoIdx, 103, PrefixArea.SmallStar);
  }
  fillDauThuongSuLaVong() {
    let dauQuanIdx = this.hsc.idxAfterMove(this.hsc.aIdx.s15, this.hsc.dtb.ln.m, false);
    dauQuanIdx = this.hsc.idxAfterMove(dauQuanIdx, this.hsc.dtb.ln.h + 1, true);
    this.hsc.addStar(dauQuanIdx, 104, PrefixArea.SmallStar);
    this.hsc.addStar(this.hsc.aIdx.ai5, 106, PrefixArea.SmallStar);
    this.hsc.addStar(this.hsc.aIdx.ai7, 105, PrefixArea.SmallStar);
    this.hsc.addStar(4, 107, PrefixArea.SmallStar);
    this.hsc.addStar(10, 108, PrefixArea.SmallStar);
    const mtAs = {
      1: [2, 6, 9, 10],
      2: [0, 8, 7, 0],
      3: [10, 10, 5, 2],
      4: [8, 0, 3, 4],
      5: [6, 2, 1, 6],
      6: [4, 4, 11, 8],
      7: [2, 6, 9, 10],
      8: [0, 8, 7, 0],
      9: [10, 10, 5, 2],
      10: [8, 0, 3, 4],
      11: [6, 2, 1, 6],
      12: [4, 4, 11, 8]
    };
    this.hsc.addStar(mtAs[this.hsc.dtb.ln.m][0], 122, PrefixArea.SmallStar);
    this.hsc.addStar(mtAs[this.hsc.dtb.ln.m][1], 123, PrefixArea.SmallStar);
    this.hsc.addStar(mtAs[this.hsc.dtb.ln.m][2], 124, PrefixArea.SmallStar);
    this.hsc.addStar(mtAs[this.hsc.dtb.ln.m][3], 125, PrefixArea.SmallStar);
  }
  fillTuViTrungChauPhai() {
    const idxNien = this.hsc.idxAfterMove(10, this.hsc.dtb.bs.y[1] + 1, false);
    this.hsc.addStar(idxNien, 118, PrefixArea.SmallStar);
    const mtNg = {
      1: 8,
      2: 8,
      3: 10,
      4: 10,
      5: 0,
      6: 0,
      7: 2,
      8: 2,
      9: 4,
      10: 4,
      11: 6,
      12: 6
    };
    const idxNg = mtNg[this.hsc.dtb.ln.m];
    this.hsc.addStar(idxNg, 119, PrefixArea.SmallStar);
    const mtTv = {
      1: 5,
      5: 5,
      9: 5,
      2: 8,
      6: 8,
      10: 8,
      3: 2,
      7: 2,
      11: 2,
      4: 11,
      8: 11,
      12: 11
    };
    const idxTv = mtTv[this.hsc.dtb.ln.m];
    this.hsc.addStar(idxTv, 120, PrefixArea.SmallStar);
    const mtTn = {
      1: 10,
      2: 5,
      3: 4,
      4: 2,
      5: 7,
      6: 3,
      7: 11,
      8: 7,
      9: 2,
      10: 6,
      11: 10,
      12: 2
    };
    const idxTn = mtTn[this.hsc.dtb.ln.m];
    this.hsc.addStar(idxTn, 121, PrefixArea.SmallStar);
    const mtTt = {
      8: 0,
      0: 0,
      4: 0,
      2: 6,
      6: 6,
      10: 6,
      11: 3,
      3: 3,
      7: 3,
      5: 9,
      9: 9,
      1: 9
    };
    let idxTt = mtTt[this.hsc.dtb.bs.y[1]];
    const vTT = [109, 110, 111, 112, -1, -1, 113, 114, 115, -1, 116, 117];
    for (let i = 0; i < vTT.length; i += 1) {
      if (vTT[i] > 0) {
        this.hsc.addStar(idxTt, vTT[i], PrefixArea.SmallStar);
      }
      idxTt = this.hsc.jumbUp(idxTt);
    }
  }
}

class ZoneBuilder {
  hsc;
  constructor(horoscope) {
    this.hsc = horoscope;
  }
  /**
   * Xác định tên các cung
   */
  buildZoneName() {
    let idxChi = this.hsc.idxAfterMove(2, this.hsc.dtb.ln.m);
    const idxThan = this.hsc.idxAfterMove(idxChi, this.hsc.dtb.ln.h + 1);
    this.hsc.aIdx.at = idxThan;
    idxChi = this.hsc.idxAfterMove(idxChi, this.hsc.dtb.ln.h + 1, false);
    this.hsc.aIdx.am = idxChi;
    let idxZone = 0;
    for (let i = 0; i < 12; i += 1) {
      const itemAppend = {
        ai: idxZone,
        ci: idxChi,
        cn: -1,
        na: -1,
        sb: [],
        ss: [],
        sv: [],
        sy: [],
        sm: [],
        sd: [],
        lmnp: [],
        lynp: 0,
        lmpt: [],
        aid: 0,
        dv: 0,
        cni: [[], [], [], []],
        cnw: [[], [], [], []],
        cno: [],
        th1: [[0, 0, 0], [], [], [0, 0]],
        ys: [],
        que: [],
        stlk: [],
        zolk: []
      };
      this.hsc.ars[idxChi] = itemAppend;
      this.hsc.aIdx[`ai${idxZone}`] = idxChi;
      idxZone = this.hsc.jumbDown(idxZone);
      idxChi = this.hsc.jumbUp(idxChi);
    }
    let idMonth12 = 0;
    let idxCanStart = 2;
    while (idMonth12 < 12) {
      const cnCiCur = this.hsc.dtb.m12[idMonth12][0];
      this.hsc.ars[idxCanStart].cn = cnCiCur;
      this.hsc.ars[idxCanStart].na = LTHG.indexOf(`${CAN[cnCiCur]} ${CHI[idxCanStart]}`);
      idMonth12 += 1;
      idxCanStart = this.hsc.jumbUp(idxCanStart);
    }
    this.hsc.am = this.hsc.aIdx.am;
    this.hsc.at = this.hsc.aIdx.at;
    this.hsc.cid = LTHG_HH[this.hsc.ars[this.hsc.aIdx.am].na];
    if (this.hsc.cfg[CfgValue.tcpb] === 1) {
      this.hsc.cid = LTHG_HH[this.hsc.ars[this.hsc.aIdx.at].na];
    }
    if (this.hsc.cfg[CfgValue.tcpb] === 2) {
      this.hsc.cid = LTHG_HH[this.hsc.ars[this.hsc.aIdx.ai10].na];
    }
    this.hsc.adme = CHI_AD[this.hsc.ars[this.hsc.aIdx.am].ci];
    const adMenhChk = this.hsc.adme === 1 ? 1 : -1;
    this.hsc.adye = CHI_AD[this.hsc.dtb.bs.y[1]];
    this.hsc.adyetk = CHI_AD[this.hsc.dtb.tk.y[1]];
    const adYearChk = this.hsc.adye === 1 ? 1 : -1;
    this.hsc.ad = adMenhChk * adYearChk > 0 ? 1 : 0;
  }
  /**
   * Xác định Mệnh Chủ Thân Chủ base trên sao nào dựa trên năm sinh
   * Mệnh chủ thân chủ này không giống cung mệnh chủ, cung thân chủ
   */
  fillBaseMenhThan() {
    const mtMenhThan = {
      0: [8, 55],
      1: [9, 10],
      2: [27, 11],
      3: [63, 4],
      4: [5, 62],
      5: [3, 1],
      6: [13, 54],
      7: [3, 10],
      8: [5, 11],
      9: [63, 4],
      10: [27, 62],
      11: [9, 1]
    };
    this.hsc.mctc = mtMenhThan[this.hsc.dtb.bs.y[1]];
  }
  /**
   * Xử lý Phi Hóa cho mỗi cung
   */
  fillPhiHoa() {
    for (let idx = 0; idx <= 11; idx += 1) {
      const idStarHoa = this.hsc.HOA[this.hsc.ars[idx].cn];
      this.hsc.ars[idx].cno = [
        this.hsc.aIdx[`s${idStarHoa[TH.L]}`],
        this.hsc.aIdx[`s${idStarHoa[TH.Q]}`],
        this.hsc.aIdx[`s${idStarHoa[TH.Z]}`],
        this.hsc.aIdx[`s${idStarHoa[TH.K]}`]
      ];
      for (let idx2 = 0; idx2 <= 11; idx2 += 1) {
        const lstIdStartHoa = this.hsc.HOA[this.hsc.ars[idx2].cn];
        for (let k = 0; k < 4; k += 1) {
          if (this.hsc.aIdx[`s${lstIdStartHoa[k]}`] === idx) {
            this.hsc.ars[idx].cni[k].push(idx2);
            this.hsc.ars[idx].cnw[k].push(lstIdStartHoa[k]);
          }
        }
      }
    }
    this.setLocKiStatic();
    const tuanHoanKiZones = [[], [], [], [], [], [], [], [], [], [], [], []];
    const tuanHoanLocZones = [[], [], [], [], [], [], [], [], [], [], [], []];
    const ptTuanHoan = [
      [[], [], [], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], [], [], []]
    ];
    for (let idc = 0; idc < 12; idc += 1) {
      this.hsc.countLoop = 0;
      this.countMoveKi(idc);
      this.hsc.countLoop = 0;
      this.countMoveLoc(idc);
      this.hsc.countLoop = 0;
      const arrTuanHoanKi = this.checkTuanHoan(3, idc);
      if (this.checkPeriodicRepetition(arrTuanHoanKi)) {
        tuanHoanKiZones[idc] = this.getUniquePeriodicElements(arrTuanHoanKi);
      }
      this.hsc.countLoop = 0;
      const arrTuanHoanLoc = this.checkTuanHoan(0, idc);
      if (this.checkPeriodicRepetition(arrTuanHoanLoc)) {
        tuanHoanLocZones[idc] = this.getUniquePeriodicElements(arrTuanHoanLoc);
      }
      for (let tph = 0; tph < 4; tph++) {
        this.hsc.countLoop = 0;
        const ptArrTuanHoan = this.checkTuanHoanPT(tph, idc);
        if (this.checkPeriodicRepetition(ptArrTuanHoan)) {
          ptTuanHoan[tph][idc] = this.getUniquePeriodicElements(ptArrTuanHoan);
        }
      }
    }
    this.hsc.loopLP[TH.L] = this.getUniqueRepresentatives(tuanHoanLocZones);
    this.hsc.loopLP[TH.K] = this.getUniqueRepresentatives(tuanHoanKiZones);
    for (let tph = 0; tph < 4; tph++) {
      this.hsc.loopPT[tph] = this.getUniqueRepresentatives(ptTuanHoan[tph]);
    }
    if (this.hsc.loopLP[TH.L].length > 0) {
      this.hsc.loopLP[TH.L].forEach((item, index) => {
        if (item.length > 0 && !this.isTuanHoanLocLuongPhai(item)) {
          this.hsc.loopLP[TH.L][index] = [];
        }
      });
    }
    this.addBatQuai();
  }
  /**
   * Kiểm tra Tuần Hoàn Lộc Luông Phái
   * @param arrTuanHoanLoc
   * @returns True if the Tuần Hoàn Lộc follows the correct pattern, false otherwise
   */
  isTuanHoanLocLuongPhai(arrTuanHoanLoc) {
    let isOk = true;
    arrTuanHoanLoc.forEach((idxCung, index) => {
      const idxCungLoc = idxCung;
      let indexNext = index + 1;
      if (indexNext > arrTuanHoanLoc.length - 1) {
        indexNext = 0;
      }
      const idxChuyenLocTiep = arrTuanHoanLoc[indexNext];
      const idxFlyCungChuyenLoc = this.hsc.ars[idxCungLoc].cno[TH.K];
      if (idxFlyCungChuyenLoc !== idxChuyenLocTiep) {
        isOk = false;
        return false;
      }
      const idStarChuyenKi = this.hsc.HOA[this.hsc.ars[idxCungLoc].cn][3];
      if (this.hsc.ars[idxChuyenLocTiep].stlk[idStarChuyenKi][StlkName.isMoveLoc] === 0) {
        isOk = false;
        return false;
      }
    });
    return isOk;
  }
  /**
   * So sánh hai mảng
   * @param a
   * @param b
   * @returns True if the arrays are equal (have identical content), false otherwise
   */
  arraysEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  /**
   * Xoay mảng
   * @param arr
   * @param k
   * @returns A new array with elements rotated by k positions
   */
  rotateArray(arr, k) {
    return [...arr.slice(k, arr.length), ...arr.slice(0, k)];
  }
  /**
   * Lấy các đại diện duy nhất
   * @param arr
   * @returns An array of unique representative elements from the input array
   */
  getUniqueRepresentatives(arr) {
    const representatives = [];
    const visited = Array.from({ length: arr.length }).fill(false);
    for (let i = 0; i < arr.length; i++) {
      if (visited[i] || arr[i].length === 0) continue;
      const representative = arr[i];
      visited[i] = true;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].length === 0) continue;
        for (let k = 0; k < arr[j].length; k++) {
          if (this.arraysEqual(this.rotateArray(arr[j], k), representative)) {
            visited[j] = true;
            break;
          }
        }
      }
      representatives.push(representative);
    }
    return representatives;
  }
  /**
   * Lấy danh sách các sao Hóa trong cung
   * @param idx
   * @returns An array of star objects containing information about transformed stars in the specified zone
   */
  listStarHoaInZone(idx) {
    const starHoaRows = [];
    const cungCr = this.hsc.ars[idx];
    const filteredTHXK = cungCr.ss.filter((item) => [60, 61, 62, 63].includes(item));
    const allStars = cungCr.sb.concat(filteredTHXK);
    allStars.forEach((starCr) => {
      if (this.hsc.str2u.includes(starCr)) {
        starHoaRows.push({ ids: starCr, vl: this.hsc.str2hc[starCr] });
      }
    });
    return starHoaRows;
  }
  /**
   * Kiểm tra Niên Lộc
   * @param idx
   * @returns True if the zone contains Niên Lộc, false otherwise
   */
  isNienLoc(idx) {
    const idxNienLoc = this.hsc.aIdx.s64;
    return idxNienLoc === idx;
  }
  /**
   * Kiểm tra Niên Kỵ
   * @param idx
   * @returns True if the zone contains Niên Kỵ, false otherwise
   */
  isNienKi(idx) {
    const idxNienKi = this.hsc.aIdx.s67;
    return idxNienKi === idx;
  }
  /**
   * Kiểm tra Mệnh Lộc hoặc Niên Lộc
   * @param idx
   * @returns True if the zone contains either Mệnh Lộc or Niên Lộc, false otherwise
   */
  isMenhLocNienLoc(idx) {
    const idxNienLoc = this.hsc.aIdx.s64;
    const idxMenhPhiLoc = this.hsc.ars[this.hsc.am].cno[TH.L];
    return idxNienLoc === idx || idxMenhPhiLoc === idx;
  }
  /**
   * Kiểm tra Mệnh Kỵ hoặc Niên Kỵ
   * @param idx
   * @returns True if the zone contains either Mệnh Kỵ or Niên Kỵ, false otherwise
   */
  isMenhKiNienKi(idx) {
    const idxNienKi = this.hsc.aIdx.s67;
    const idxMenhPhiKy = this.hsc.ars[this.hsc.am].cno[TH.K];
    return idxNienKi === idx || idxMenhPhiKy === idx;
  }
  /**
   * Kiểm tra Mệnh Kỵ
   * @param idx
   * @returns True if the zone contains Mệnh Kỵ, false otherwise
   */
  isMenhKi(idx) {
    const idxMenhPhiKy = this.hsc.ars[this.hsc.am].cno[TH.K];
    return idxMenhPhiKy === idx;
  }
  /**
   * Thiết lập Lộc Kỵ tĩnh
   */
  /**
   * Thiết lập Lộc Kỵ tĩnh cho tất cả các cung
   */
  setLocKiStatic() {
    for (let idx = 0; idx < 12; idx += 1) {
      let zoneNumLoc = 0;
      let zoneNumLocKeep = 0;
      let zoneNumKi = 0;
      zoneNumLoc += this.isNienLoc(idx) ? 1 : 0;
      zoneNumKi += this.isNienKi(idx) ? 1 : 0;
      let isMoveLoc = this.isMenhLocNienLoc(idx) ? 1 : 0;
      let isMoveAll = this.isMenhLocNienLoc(idx) ? 1 : 0;
      let isMoveKi = this.isMenhKiNienKi(idx) ? 1 : 0;
      const bTuKi = this.hsc.ars[idx].cno[TH.K] === idx;
      const bTuLoc = this.hsc.ars[idx].cno[TH.L] === idx;
      const starHoaInZones = this.listStarHoaInZone(idx);
      if (starHoaInZones.length <= 0) {
        this.hsc.ars[idx].zolk[TH.L] = [0, -1, 0, 0, 0, 0];
        this.hsc.ars[idx].zolk[TH.K] = [0, -1, 0];
        continue;
      }
      starHoaInZones.forEach((starHoaIz) => {
        const detailStarHoaCome = this.hsc.ars[idx].cnw;
        const starNumLoc = detailStarHoaCome[TH.L].filter((x) => x === starHoaIz.ids).length;
        const starNumKi = detailStarHoaCome[TH.K].filter((x) => x === starHoaIz.ids).length;
        if (starNumLoc > 0 || starNumKi > 0) {
          let locKeepSmall = 0;
          this.hsc.ars[idx].stlk[starHoaIz.ids] = [0, 0, 0, 0, 0, 0, 0];
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.numLoc] = starNumLoc;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.numKi] = starNumKi;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.currentLoc] = starNumLoc;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.isMoveLoc] = bTuKi ? 0 : starNumLoc >= 2 ? 1 : 0;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.isMoveKi] = bTuKi ? 0 : starNumKi >= 2 ? 1 : 0;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.isTruyLoc] = 0;
          this.hsc.ars[idx].stlk[starHoaIz.ids][StlkName.isTruyKi] = 0;
          locKeepSmall = bTuKi ? starNumLoc : starNumLoc >= 2 ? 0 : starNumLoc;
          zoneNumLocKeep += locKeepSmall;
          zoneNumLoc += starNumLoc;
          zoneNumKi += starNumKi;
        }
      });
      isMoveLoc = bTuLoc ? 1 : isMoveLoc;
      isMoveAll = bTuLoc ? 1 : isMoveAll;
      isMoveLoc = this.checkMoveLoc(isMoveLoc, zoneNumLoc, idx);
      isMoveAll = this.checkMoveAll(isMoveAll, idx, isMoveLoc);
      isMoveKi = this.checkMoveKi(isMoveKi, zoneNumKi);
      isMoveLoc = bTuKi ? 0 : isMoveLoc;
      isMoveAll = bTuKi ? 0 : isMoveAll;
      isMoveKi = bTuKi ? 0 : isMoveKi;
      this.updateZoneLocKi(idx, isMoveLoc, zoneNumLoc, zoneNumLocKeep, isMoveAll, isMoveKi, zoneNumKi);
    }
    this.truyLocKi();
    this.countKiStatic();
  }
  /**
   * Kiểm tra di chuyển Lộc
   * @param isMoveLoc
   * @param zoneNumLoc
   * @param idx
   * @returns Updated isMoveLoc value: 1 if zone should move Lộc, 0 otherwise
   */
  checkMoveLoc(isMoveLoc, zoneNumLoc, idx) {
    if (isMoveLoc === 0) {
      const isZoneHas1StarHasMoveLoc = this.hsc.ars[idx].stlk.some(
        (lksData) => lksData[StlkName.isMoveLoc] === 1
      );
      isMoveLoc = zoneNumLoc >= 2 && isZoneHas1StarHasMoveLoc ? 1 : isMoveLoc;
    }
    return isMoveLoc;
  }
  /**
   * Kiểm tra di chuyển tất cả
   * @param isMoveAll
   * @param idx
   * @param isMoveLoc
   * @returns Updated isMoveAll value: 1 if all Lộc should move, 0 otherwise
   */
  checkMoveAll(isMoveAll, idx, isMoveLoc) {
    if (isMoveAll === 0) {
      if (this.hsc.ars[idx].stlk.length === 1 && isMoveLoc === 1) {
        isMoveAll = 1;
      }
    }
    return isMoveAll;
  }
  /**
   * Kiểm tra di chuyển Kỵ
   * @param isMoveKi
   * @param zoneNumKi
   * @returns Updated isMoveKi value: 1 if zone should move Kỵ, 0 otherwise
   */
  checkMoveKi(isMoveKi, zoneNumKi) {
    if (isMoveKi === 0) {
      return zoneNumKi >= 2 ? 1 : isMoveKi;
    }
    return isMoveKi;
  }
  /**
   * Update zone loc ki
   * @param idx
   * @param isMoveLoc
   * @param zoneNumLoc
   * @param zoneNumLocKeep
   * @param isMoveAll
   * @param isMoveKi
   * @param zoneNumKi
   */
  updateZoneLocKi(idx, isMoveLoc, zoneNumLoc, zoneNumLocKeep, isMoveAll, isMoveKi, zoneNumKi) {
    this.hsc.ars[idx].zolk[TH.L] = [0, 0, 0, 0, 0, 0, 0];
    this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] = isMoveLoc;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.totalLoc] = zoneNumLoc;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.currentLoc] = zoneNumLoc;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveAllLoc] = isMoveAll;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.locKeep] = isMoveAll === 1 ? 0 : zoneNumLocKeep;
    this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveNienLoc] = this.isNienLoc(idx) ? 1 : 0;
    this.hsc.ars[idx].zolk[TH.K] = [0, 0, 0, 0, 0, 0, 0];
    this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] = isMoveKi;
    this.hsc.ars[idx].zolk[TH.K][ZolkName.totalKi] = zoneNumKi;
    this.hsc.ars[idx].zolk[TH.K][ZolkName.currentKi] = 0;
  }
  /**
   * Kiểm tra Truy Lộc cho cung
   * @param idx
   */
  checkZoneTruyLoc(idx) {
    const isTuKi = this.hsc.ars[idx].cno[TH.K] === idx;
    if (!isTuKi) {
      const isIdxMoveAllLoc = this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveAllLoc];
      let zoneNumLoc = 0;
      this.hsc.ars[idx].stlk.forEach((stlkData, idxStar) => {
        if (isIdxMoveAllLoc === 1 && stlkData[StlkName.currentLoc] > 0 && stlkData[StlkName.isMoveLoc] === 0) {
          this.hsc.ars[idx].stlk[idxStar][StlkName.isMoveLoc] = 1;
          this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] = 1;
        } else {
          if (stlkData[StlkName.currentLoc] > 0 && stlkData[StlkName.isMoveLoc] === 0 && stlkData[StlkName.numKi] > 0 && stlkData[StlkName.numLoc] > 0) {
            this.hsc.ars[idx].cni[3].forEach((idZoneCome, index) => {
              if (this.hsc.ars[idx].cnw[3][index] === idxStar) {
                const isZoneComeMoveLoc = this.hsc.ars[idZoneCome].zolk[TH.L][ZolkName.isMoveLoc] > 0;
                if (isZoneComeMoveLoc) {
                  this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] = 1;
                  this.hsc.ars[idx].stlk[idxStar][StlkName.isMoveLoc] = 1;
                  this.hsc.ars[idx].stlk[idxStar][StlkName.isTruyLoc] = 1;
                }
              }
            });
          }
        }
        zoneNumLoc += stlkData[StlkName.currentLoc];
      });
      this.hsc.ars[idx].zolk[TH.L][ZolkName.currentLoc] = zoneNumLoc;
    }
    if (!isTuKi && this.hsc.ars[idx].stlk.length === 1 && this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] === 1) {
      this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveAllLoc] = 1;
    }
  }
  /**
   * Kiểm tra Truy Kỵ cho cung
   * @param idx
   */
  checkZoneTruyKi(idx) {
    const isTuKi = this.hsc.ars[idx].cno[TH.K] === idx;
    let countZoneComeIsMoveKi = 0;
    this.hsc.ars[idx].cni[TH.K].forEach((idZoneCome) => {
      if (this.hsc.ars[idZoneCome].zolk[TH.K][ZolkName.isMoveKi] === 1 && !isTuKi) {
        countZoneComeIsMoveKi += 1;
      }
    });
    if (this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] === 1 && countZoneComeIsMoveKi === this.hsc.ars[idx].cni[TH.K].length && !this.isMenhKiNienKi(idx)) {
      this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] = 0;
    }
    if (this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] === 0 && this.hsc.ars[idx].cni[TH.K].length > 1 && countZoneComeIsMoveKi < this.hsc.ars[idx].cni[TH.K].length && !isTuKi) {
      this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] = 1;
    }
  }
  /**
   * Truy loc ki
   */
  truyLocKi() {
    for (let idx = 0; idx < 12; idx += 1) {
      this.checkZoneTruyLoc(idx);
      this.checkZoneTruyKi(idx);
    }
  }
  /**
   * Count ki static
   */
  countKiStatic() {
    for (let idx = 0; idx < 12; idx++) {
      let currentKi = 0;
      if (this.isNienKi(idx)) {
        currentKi++;
      }
      this.hsc.ars[idx].cni[TH.K].forEach((idZoneCome) => {
        if (this.hsc.ars[idZoneCome].zolk[TH.K][ZolkName.isMoveKi] === 0 || this.isMenhKi(idx) && this.hsc.ars[idZoneCome].zolk[TH.K][ZolkName.isMoveKi] === 1) {
          currentKi++;
        }
      });
      this.hsc.ars[idx].zolk[TH.K][ZolkName.currentKi] = currentKi;
    }
  }
  /**
   * Count move ki
   * @param idx
   */
  countMoveKi(idx) {
    if (this.hsc.countLoop >= 11) return;
    const currentZone = this.hsc.ars[idx].zolk[TH.K];
    if (this.hsc.ars[idx].cno[TH.K] === idx) return;
    if (currentZone[ZolkName.totalKi] === -1) return;
    this.hsc.countLoop += 1;
    if (this.isZoneMove2(idx)) {
      const idxFly = this.hsc.ars[idx].cno[TH.K];
      const flyZone = this.hsc.ars[idxFly].zolk[TH.K];
      const idCurrentKi = currentZone[ZolkName.currentKi];
      const idCurrentKiFly = flyZone[ZolkName.currentKi];
      flyZone[ZolkName.currentKi] = idCurrentKiFly + idCurrentKi;
      currentZone[ZolkName.currentKi] = 0;
      if (this.isZoneMove2(idxFly)) {
        this.countMoveKi(idxFly);
      }
    }
  }
  /**
   * Count move loc
   * @param idx
   */
  countMoveLoc(idx) {
    if (this.hsc.countLoop >= 11) return;
    const currentZone = this.hsc.ars[idx].zolk[TH.L];
    if (currentZone[ZolkName.totalLoc] === -1) return;
    if (this.hsc.ars[idx].cno[TH.K] === idx) return;
    this.hsc.countLoop += 1;
    const idxStlkList = this.hsc.ars[idx].stlk;
    let zoneLocWillMove = 0;
    idxStlkList.forEach((dataStlk, idStar) => {
      const currentLoc = dataStlk[StlkName.currentLoc];
      const isMoveLoc = dataStlk[StlkName.isMoveLoc];
      const isMoveAllLoc = currentZone[ZolkName.isMoveAllLoc];
      if (isMoveAllLoc === 1 && currentLoc > 0 || currentLoc > 0 && isMoveLoc === 1) {
        zoneLocWillMove += currentLoc;
        currentZone[ZolkName.currentLoc] -= currentLoc;
        this.hsc.ars[idx].stlk[idStar][StlkName.currentLoc] = 0;
      }
    });
    if (this.isNienLoc(idx) && currentZone[ZolkName.isMoveNienLoc] === 1) {
      zoneLocWillMove += 1;
      currentZone[ZolkName.isMoveNienLoc] = 0;
    }
    const idxFly = this.hsc.ars[idx].cno[TH.K];
    const idCan = this.hsc.ars[idx].cn;
    const starIdxFly = this.hsc.HOA[idCan][TH.K];
    const flyZone = this.hsc.ars[idxFly].zolk[TH.L];
    const flyStlk = this.hsc.ars[idxFly].stlk[starIdxFly];
    flyZone[ZolkName.currentLoc] += zoneLocWillMove;
    flyStlk[StlkName.currentLoc] += zoneLocWillMove;
    this.checkZoneTruyLoc(idxFly);
    if (this.isZoneMove2(idxFly, 0)) {
      this.countMoveLoc(idxFly);
    }
  }
  /**
   * Check tuan hoan
   * @param typeTuanHoan
   * @param idx
   * @param arrTuanHoa
   * @returns An array of indices representing the path of tuần hoàn (periodic repetition) through zones
   */
  checkTuanHoan(typeTuanHoan, idx, arrTuanHoa = []) {
    let arrTuanHoaTemp = arrTuanHoa;
    if (this.hsc.countLoop >= 24) return arrTuanHoaTemp;
    this.hsc.countLoop += 1;
    if (this.isZoneMove2(idx, typeTuanHoan)) {
      arrTuanHoaTemp.push(idx);
      const idxFly = this.hsc.ars[idx].cno[TH.K];
      if (this.isZoneMove2(idxFly, typeTuanHoan)) {
        arrTuanHoaTemp = this.checkTuanHoan(typeTuanHoan, idxFly, arrTuanHoaTemp);
      } else {
        arrTuanHoaTemp.push(idxFly);
      }
    }
    return arrTuanHoaTemp;
  }
  /**
   * Check tuan hoan phu thien
   * @param typeTuanHoan
   * @param idx
   * @param arrTuanHoa
   * @returns An array of indices representing the cycle of tuần hoàn (periodic repetition) in Phủ Thiên
   */
  checkTuanHoanPT(typeTuanHoan, idx, arrTuanHoa = []) {
    let arrTuanHoaTemp = arrTuanHoa;
    if (this.hsc.countLoop >= 12 || this.hsc.ars[idx].cno[typeTuanHoan] === idx) {
      return arrTuanHoaTemp;
    }
    this.hsc.countLoop += 1;
    arrTuanHoaTemp.push(idx);
    const idxFly = this.hsc.ars[idx].cno[typeTuanHoan];
    if (idxFly === idx) {
      arrTuanHoaTemp.push(idx);
      return arrTuanHoaTemp;
    }
    arrTuanHoaTemp = this.checkTuanHoanPT(typeTuanHoan, idxFly, arrTuanHoaTemp);
    return arrTuanHoaTemp;
  }
  isZoneMove2(idx, typeLocKi = 3) {
    return typeLocKi === 0 ? this.hsc.ars[idx].zolk[TH.L][ZolkName.isMoveLoc] === 1 : this.hsc.ars[idx].zolk[TH.K][ZolkName.isMoveKi] === 1;
  }
  /**
   * Check xem có phải chu kỳ lặp lại
   * @param arr
   * @returns True if the array has a periodic pattern, false otherwise
   */
  checkPeriodicRepetition(arr) {
    const n = arr.length;
    for (let len = 1; len <= n / 2; len++) {
      let isPeriodic = true;
      for (let i = 0; i < n; i++) {
        if (arr[i] !== arr[i % len]) {
          isPeriodic = false;
          break;
        }
      }
      if (isPeriodic) {
        return true;
      }
    }
    return false;
  }
  /**
   * Lấy các phần tử duy nhất có chu kỳ lặp lại
   * @param arr
   * @returns Array of unique elements that form the periodic pattern
   */
  getUniquePeriodicElements(arr) {
    for (let len = 1; len <= arr.length / 2; len++) {
      const subArray = arr.slice(0, len);
      const repeatedSubArray = Array.from({ length: Math.ceil(arr.length / len) }).fill(subArray).flat().slice(0, arr.length);
      if (JSON.stringify(repeatedSubArray) === JSON.stringify(arr)) {
        return [...new Set(subArray)];
      }
    }
    return [];
  }
  /**
   * Check xem có phải que đã tồn tại trong cung
   * @param idx
   * @param iQue
   * @returns True if the que exists in the zone, false otherwise
   */
  isExitQueByCung(idx, iQue) {
    const queLst = this.hsc.ars[idx].que;
    let returnData = false;
    queLst.forEach((element) => {
      if (iQue === element[0]) {
        returnData = true;
        return returnData;
      }
    });
    return returnData;
  }
  /**
   *Add Bat Quai
   */
  addBatQuai() {
    const mtHoaIdx = [this.hsc.aIdx.s64, this.hsc.aIdx.s65, this.hsc.aIdx.s66, this.hsc.aIdx.s67];
    for (let typeHoa = 0; typeHoa < 4; typeHoa += 1) {
      const quePart1 = typeHoa;
      const idxTienThien = mtHoaIdx[typeHoa];
      const cungTienThien = this.hsc.ars[idxTienThien];
      cungTienThien.cno.forEach((idxCungFlyOut, typeHoaFlyOut) => {
        if (idxCungFlyOut === idxTienThien) {
          const quePart2 = typeHoaFlyOut;
          cungTienThien.cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              if (idxCungFlyIn === idxTienThien && typeHoaFlyIn === typeHoaFlyOut) {
                continue;
              }
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxTienThien, idxCungFlyIn]
                ]);
              }
            }
          });
        }
      });
      const idxXungTH = xtngl[idxTienThien].x;
      cungTienThien.cno.forEach((idxCungFlyOut, typeHoaFlyOut) => {
        if (idxCungFlyOut === idxXungTH) {
          const quePart2 = typeHoaFlyOut;
          this.hsc.ars[idxXungTH].cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              if (idxCungFlyIn === idxTienThien && typeHoaFlyIn === typeHoaFlyOut) {
                continue;
              }
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxXungTH, idxCungFlyIn]
                ]);
              }
            }
          });
          cungTienThien.cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              if (idxCungFlyIn === idxTienThien) {
                continue;
              }
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxTienThien, idxCungFlyIn]
                ]);
              }
            }
          });
        }
      });
      const cungXungTH = this.hsc.ars[idxXungTH];
      cungXungTH.cno.forEach((idxCungFlyOut, typeHoaFlyOut) => {
        if (idxCungFlyOut === idxTienThien) {
          const quePart2 = typeHoaFlyOut;
          this.hsc.ars[idxXungTH].cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxXungTH, idxCungFlyIn]
                ]);
              }
            }
          });
          cungTienThien.cni.forEach((arrCniFlyIn, typeHoaFlyIn) => {
            for (let idxArrTemp = 0; idxArrTemp < arrCniFlyIn.length; idxArrTemp += 1) {
              const idxCungFlyIn = arrCniFlyIn[idxArrTemp];
              if (idxCungFlyIn === idxXungTH && typeHoaFlyIn === typeHoaFlyOut) {
                continue;
              }
              if (idxCungFlyIn === idxTienThien) {
                continue;
              }
              const quePart3 = typeHoaFlyIn;
              const idxIChing = hoa2IchingIdx([quePart1, quePart2, quePart3]);
              if (!this.isExitQueByCung(idxCungFlyIn, idxIChing)) {
                this.hsc.ars[idxCungFlyIn].que.push([
                  idxIChing,
                  [typeHoa, typeHoaFlyOut, typeHoaFlyIn],
                  [idxTienThien, idxTienThien, idxCungFlyIn]
                ]);
              }
            }
          });
        }
      });
    }
  }
}

var PrefixArea = /* @__PURE__ */ ((PrefixArea2) => {
  PrefixArea2["BigStar"] = "sb";
  PrefixArea2["SmallStar"] = "ss";
  PrefixArea2["YearStar"] = "sy";
  PrefixArea2["MonthStar"] = "sm";
  PrefixArea2["DayStar"] = "sd";
  PrefixArea2["TenYearStar"] = "sv";
  return PrefixArea2;
})(PrefixArea || {});
class HoroscopeBuild {
  search;
  cid = 2;
  //Số cục trong tử vi 2 Thủy nhị cục, 3 Mộc tam cục, 4 Kim tứ cục, 5 Thổ ngũ cục, 6 Hỏa lục cục
  at = 1;
  // Index cung thân (0-11)
  am = 1;
  // Index cung mệnh (0-11)
  yeo = 1;
  // Tuổi âm lịch
  dtb;
  // Thông tin ngày sinh dương lịch, âm lịch, can chi, lục thập hoa giáp
  dtv;
  // Thông tin ngày xem dương lịch, âm lịch, can chi, lục thập hoa giáp
  dtc;
  // Thông tin ngày hiện tại dương lịch, âm lịch, can chi, lục thập hoa giáp
  aIdx = {};
  // Index các sao trong lá số
  adye = 1;
  // Năm Dương, Năm Âm theo âm lịch 1 Dương, 0 Âm
  adyetk = 1;
  // Năm Dương, Năm Âm theo tiết khí 1 Dương, 0 Âm
  adme = 1;
  // Cung Mệnh Dương Âm theo địa chi 1 Dương, 0 Âm
  ad = 1;
  //âm dương thuận lý 1, âm dương nghịch lý 0
  sx = 1;
  // Giới tính 1 Nam, 0 Nữ
  ttr = { 0: [], 1: [], 2: [] };
  // Tứ trụ
  ars = [];
  // Lá số
  sks = 5;
  // Index của SKB trong staticData.ts 3 Mệnh Cục tì hòa, 1 Cục sinh mệnh, 2 Mệnh sinh Cục, 4 Mệnh khắc cục, 5 Cục khắc mệnh
  istc = false;
  // False la khoong phai Trung châu phái, Kiểu lá số 6, 7, 8 là Trung châu phái
  tpCan = 0;
  cfg = [...configDefault];
  // Cấu Hình ls
  dvidx = 0;
  // Index của DV Đại Vận hiện tại trong lá số
  idxCheckZone = 0;
  mctc = [];
  // Mệnh chủ thân chủ base trên sao nào dựa trên năm sinh array SM index [0] Mệnh chủ, [1] Thân chủ
  cach = {};
  // cách cục nhưng chưa dùng
  rad = 0;
  tutru = {
    cot: [
      { cht: -1, cn: -1, ci: -1, ctg: [], pht: [], tsctg: [], ts: -1, na: -1 },
      { cht: -1, cn: -1, ci: -1, ctg: [], pht: [], tsctg: [], ts: -1, na: -1 },
      { cht: -1, cn: -1, ci: -1, ctg: [], pht: [], tsctg: [], ts: -1, na: -1 },
      { cht: -1, cn: -1, ci: -1, ctg: [], pht: [], tsctg: [], ts: -1, na: -1 }
    ],
    dv: [],
    dvt: []
  };
  // Đánh dấu các thuộc tính có thể bị xóa là optional nhưng khởi tạo giá trị mặc định
  starPlacer;
  circlePlacer;
  zoneBuilder;
  calculationHelper;
  arrIdxChuyenLoc = [];
  str2hc = {};
  str2u = [];
  arrCkZone = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ];
  loopLP = [[], [], [], []];
  loopPT = [[], [], [], []];
  countLoop = 0;
  HOA = CAN_HOA;
  numberStarCol1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  numberStarCol2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  css = 0;
  constructor(_opt) {
    if (_opt && _opt.cfg) {
      Object.assign(this.cfg, _opt.cfg);
    }
    const dtNow = dayjs();
    const curLnInfo = convertSolar2Lunar(dtNow.year(), dtNow.month() + 1, dtNow.date(), dtNow.hour(), dtNow.minute());
    this.dtc = buildDateInfo(curLnInfo);
    const bornLnIf = convertSolar2Lunar(
      _opt.born.year(),
      _opt.born.month() + 1,
      _opt.born.date(),
      _opt.born.hour(),
      _opt.born.minute()
    );
    this.dtb = buildDateInfo(bornLnIf);
    this.dtv = this.dtc ?? buildDateInfo(convertSolar2Lunar(dtNow.year(), dtNow.month() + 1, dtNow.date(), dtNow.hour(), dtNow.minute()));
    if (_opt.view !== void 0) {
      this.dtv = buildDateInfo(
        convertSolar2Lunar(
          _opt.view.year(),
          _opt.view.month() + 1,
          _opt.view.date(),
          _opt.view.hour(),
          _opt.view.minute()
        )
      );
    }
    this.yeo = this.dtv.ln.y - this.dtb.ln.y + 1;
    this.sx = _opt.sex;
    this.istc = [6, 7, 8].includes(this.cfg[CfgValue.typeLs]);
    this.HOA = GETHOA(this.cfg[CfgValue.lsCanType]);
    if (!this.istc) {
      this.cfg[CfgValue.tcpb] = 0;
    }
    this.str2hc = StarToHoaCan(this.HOA);
    this.str2u = StarUseHoa(this.HOA);
    this.starPlacer = new StarPlacer(this);
    this.circlePlacer = new CirclePlacer(this);
    this.zoneBuilder = new ZoneBuilder(this);
    this.calculationHelper = new CalculationHelper();
    this.initializeHoroscope();
  }
  removePrivateProperties() {
    delete this.starPlacer;
    delete this.circlePlacer;
    delete this.zoneBuilder;
    delete this.calculationHelper;
    this.arrIdxChuyenLoc = [];
    this.str2hc = {};
    this.str2u = [];
    this.arrCkZone = [];
    this.countLoop = 0;
    this.HOA = {};
    this.numberStarCol1 = [];
    this.numberStarCol2 = [];
    this.idxCheckZone = 0;
    this.tpCan = 0;
    this.adyetk = 1;
    delete this.dtc;
  }
  initializeHoroscope() {
    this.zoneBuilder.buildZoneName();
    this.starPlacer.fillBigStar();
    const mtLocTon = [8, 9, 11, 0, 2, 3, 5, 6, 5, 6];
    const canDv = this.dtb.bs.y[0];
    this.starPlacer.fillSixAssassin(mtLocTon[canDv], "ss" /* SmallStar */);
    this.starPlacer.fillSixBuffer(this.dtb.bs.y[0], "ss" /* SmallStar */, this.dtb.ln.h);
    this.starPlacer.fillBig4(this.dtb.bs.y[0], "ss" /* SmallStar */);
    this.circlePlacer.fillKingCircle(this.dtb.bs.y[1], "ss" /* SmallStar */);
    this.circlePlacer.fillDoctorCircle(this.dtb.bs.y[0], "ss" /* SmallStar */);
    this.circlePlacer.fillGrowCircle();
    this.starPlacer.fillTuanTriet(this.dtb.bs.y[0], this.dtb.bs.y[1]);
    this.starPlacer.fillQuangQuyThaiToa();
    this.starPlacer.fillThaiCaoAnDuong();
    this.starPlacer.fillDargon();
    this.starPlacer.fillTangMaKhocHu(this.dtb.bs.y[1], "ss" /* SmallStar */);
    this.starPlacer.fillHinhRieuHaSatToai();
    this.starPlacer.fillDaoHongHiCoQua(this.dtb.bs.y[1], "ss" /* SmallStar */);
    this.starPlacer.fillQuanPhucNienTru(this.dtb.bs.y[0], "ss" /* SmallStar */);
    this.starPlacer.fillThienNguyetDiaThanTaiTho();
    this.starPlacer.fillDauThuongSuLaVong();
    this.skyAreaSK();
    if (this.istc) {
      this.starPlacer.fillTuViTrungChauPhai();
    }
    this.circlePlacer.fillCircleBigTime();
    this.circlePlacer.fillCircleSmallTime();
    this.fillStarRepeatByLoop();
    this.addAgeToAreas();
    this.zoneBuilder.fillBaseMenhThan();
    this.zoneBuilder.fillPhiHoa();
    this.tuTruBuildBigTime();
    this.tuTruBuildCot(0, this.dtb.tk.y, this.dtb.tk.d);
    this.tuTruBuildCot(1, this.dtb.tk.m, this.dtb.tk.d);
    this.tuTruBuildCot(2, this.dtb.tk.d, this.dtb.tk.d, true);
    this.tuTruBuildCot(3, this.dtb.tk.h, this.dtb.tk.d);
    this.css = Math.max(Math.max(...this.numberStarCol1), Math.max(...this.numberStarCol2));
  }
  // Phương thức thêm sao vào lá số
  addStar(idx, starID, prefix) {
    if (prefix !== "sb" /* BigStar */ && prefix !== "ss" /* SmallStar */ && SM[starID][`is${prefix}`] !== void 0) {
      if (SM[starID][`is${prefix}`] === false) {
        return;
      }
    }
    this.ars[idx][prefix].push(starID);
    const mang = this.ars[idx][prefix];
    mang.sort((a, b) => {
      if (SM[a].zone === 1 && SM[b].zone !== 1) {
        return -1;
      }
      if (SM[a].zone === 3 && SM[b].zone !== 1 && SM[b].zone !== 3) {
        return -1;
      }
      return 1;
    });
    this.ars[idx][prefix] = mang;
    switch (prefix) {
      case "sb" /* BigStar */:
      case "ss" /* SmallStar */:
        this.aIdx[`s${starID}`] = idx;
        break;
      default:
        this.aIdx[`${prefix}${starID}`] = idx;
        break;
    }
    const luuStar = prefix !== "sb" /* BigStar */ && prefix !== "ss" /* SmallStar */;
    if ((prefix === "ss" /* SmallStar */ || prefix === "sv" /* TenYearStar */ && this.cfg[CfgValue.dvStar] === 1 && ![64, 65, 66, 67].includes(starID) || prefix === "sy" /* YearStar */ && this.cfg[CfgValue.currentStar] > 0 && ![64, 65, 66, 67].includes(starID)) && starID > 13) {
      const sif = SM[starID];
      if (!(sif.cir !== void 0 && sif.cir === "vts")) {
        const cfgShowStar = this.cfg[CfgValue.showHideStar];
        if (cfgShowStar > 0 && !luuStar) {
          if (cfgShowStar === 1 && !STARSTRONG.includes(starID)) {
            return;
          }
          if (cfgShowStar === 2 && !STARSTRONG.includes(starID) && !STAR_SIGN.includes(starID)) {
            return;
          }
          if (cfgShowStar === 3 && !STARSTRONG.includes(starID) && !STAR_SIGN.includes(starID) && !CR_TS.includes(starID)) {
            return;
          }
          if (cfgShowStar === 4 && !STARSTRONG.includes(starID) && !STAR_SIGN.includes(starID) && !CR_TS.includes(starID) && !FAILURE6.includes(starID)) {
            return;
          }
        }
        const isShowDV = this.cfg[CfgValue.dvStar] === 1;
        const isShowLuu = this.cfg[CfgValue.currentStar] > 0;
        if (prefix === "sv" /* TenYearStar */ && !isShowDV || prefix === "sy" /* YearStar */ && !isShowLuu) {
          return;
        }
        if (sif.typ === 1) {
          this.numberStarCol1[idx] += 1;
        }
        if (sif.typ === 2) {
          this.numberStarCol2[idx] += 1;
        }
      }
    }
  }
  // Các phương thức di chuyển và tính toán vị trí
  jumbDown(idxStart) {
    return this.calculationHelper.jumpDown(idxStart);
  }
  jumbUp(idxStart) {
    return this.calculationHelper.jumpUp(idxStart);
  }
  jumbByYinBoyYanGirl(idxStart) {
    return this.sx === this.adye ? this.jumbUp(idxStart) : this.jumbDown(idxStart);
  }
  jumbByYinBoyYanGirlTietKhi(idxStart) {
    return this.sx === this.adyetk ? this.jumbUp(idxStart) : this.jumbDown(idxStart);
  }
  idxAfterMove(idxStart, limit, bThuan = true) {
    return this.calculationHelper.idxAfterMove(idxStart, limit, bThuan);
  }
  canJumpDown(startIdxInput) {
    return this.calculationHelper.canJumpDown(startIdxInput);
  }
  canJumpUp(startIdxInput) {
    return this.calculationHelper.canJumpUp(startIdxInput);
  }
  canJumbByYinBoyYanGirl(startIdxInput) {
    return this.sx === this.adye ? this.canJumpUp(startIdxInput) : this.canJumpDown(startIdxInput);
  }
  canJumbByYinBoyYanGirlTietKhi(startIdxInput) {
    return this.sx === this.adyetk ? this.canJumpUp(startIdxInput) : this.canJumpDown(startIdxInput);
  }
  // Phương thức tính toán khu vực bầu trời
  skyAreaSK() {
    const SKBS = {
      2: { 2: 3, 3: 2, 4: 1, 6: 4, 5: 5 },
      3: { 3: 3, 6: 2, 2: 1, 5: 4, 4: 5 },
      4: { 4: 3, 2: 2, 5: 1, 3: 4, 6: 5 },
      5: { 5: 3, 4: 2, 6: 1, 2: 4, 3: 5 },
      6: { 6: 3, 5: 2, 3: 1, 4: 4, 2: 5 }
    };
    this.sks = SKBS[LTHG_HH[this.dtb.bs.y[2]]][LTHG_HH[this.ars[this.aIdx.am].na]];
  }
  // Phương thức đặt các sao lặp lại theo chu kỳ
  fillStarRepeatByLoop() {
    const cungDvCheckIdx = this.aIdx[`aid${this.idxCheckZone}`];
    const mtLocTon = [8, 9, 11, 0, 2, 3, 5, 6, 5, 6];
    const canDvCheck = this.ars[cungDvCheckIdx].cn;
    this.addStar(mtLocTon[canDvCheck], 27, "sv" /* TenYearStar */);
    this.starPlacer.fillSixAssassin(this.aIdx.sv27, "sv" /* TenYearStar */);
    this.starPlacer.fillSixBuffer(canDvCheck, "sv" /* TenYearStar */);
    this.starPlacer.fillBig4(canDvCheck, "sv" /* TenYearStar */);
    this.circlePlacer.fillKingCircle(this.dtv.bs.y[1], "sy" /* YearStar */);
    this.circlePlacer.fillDoctorCircle(this.dtv.bs.y[0], "sy" /* YearStar */);
    this.starPlacer.fillSixAssassin(this.aIdx.sy27, "sy" /* YearStar */);
    this.starPlacer.fillSixBuffer(this.dtv.bs.y[0], "sy" /* YearStar */);
    this.starPlacer.fillBig4(this.dtv.bs.y[0], "sy" /* YearStar */);
    this.starPlacer.fillTangMaKhocHu(this.dtv.bs.y[1], "sy" /* YearStar */);
    this.starPlacer.fillHinhRieuHaSatToai(this.dtv.bs.y[0], this.dtv.bs.y[1], "sy" /* YearStar */);
    this.starPlacer.fillDaoHongHiCoQua(this.dtv.bs.y[1], "sy" /* YearStar */);
    this.starPlacer.fillDargon(this.dtv.bs.y[1], "sy" /* YearStar */);
    this.starPlacer.fillTuanTriet(this.dtv.bs.y[0], this.dtv.bs.y[1], "sy" /* YearStar */);
  }
  // Phương thức thêm tuổi vào các cung
  addAgeToAreas() {
    let idxBorn = this.dtb.bs.y[1];
    let yearCount = 0;
    for (let i = 1; i <= 84; i += 1) {
      const numbYear = yearCount + this.dtb.ln.y;
      if (numbYear > 2099) {
        break;
      }
      const numbYearInfo = buildDateInfo(convertSolar2Lunar(numbYear, 6, 6, 6, 6));
      this.ars[idxBorn].ys.push([yearCount + 1, numbYear, numbYearInfo.bs.y[2], numbYearInfo.bs.y[0]]);
      idxBorn = this.jumbUp(idxBorn);
      yearCount += 1;
    }
  }
  // Phương thức xây dựng thời gian lớn cho Tứ Trụ
  tuTruBuildBigTime() {
    const tgSinh = dayjs(`${this.dtb.sn.y}-${this.dtb.sn.m}-${this.dtb.sn.d} ${this.dtb.sn.h}:${this.dtb.sn.i}`);
    const realTkArr = this.dtb.tki;
    const isDirectRight = this.sx === this.adyetk;
    let endDate, numberDay;
    if (isDirectRight) {
      endDate = dayjs(realTkArr[4]);
      numberDay = endDate.diff(tgSinh, "day", true);
    } else {
      endDate = dayjs(realTkArr[3]);
      numberDay = tgSinh.diff(endDate, "day", true);
    }
    const realNumberDay = Number(numberDay.toFixed(10));
    const dayNhapVanReal = Math.floor(realNumberDay);
    const hourNhapVanFirst = (realNumberDay - dayNhapVanReal) * 24;
    const hourNhapVanReal = Math.ceil(hourNhapVanFirst);
    const yearConvertFloat = realNumberDay / 3;
    const yeoNhapVanFix = Math.floor(yearConvertFloat);
    const monthNhapVanFloat = (yearConvertFloat - yeoNhapVanFix) * 365 / 30;
    const monthNhapVanFix = Math.floor(monthNhapVanFloat);
    const dayNhapVanFloat = (monthNhapVanFloat - monthNhapVanFix) * 30;
    const dayNhapVanFix = Math.floor(dayNhapVanFloat);
    let timeNhapVan = tgSinh.add(yeoNhapVanFix, "year").add(monthNhapVanFix, "month").add(dayNhapVanFix, "day");
    let canStart = this.dtb.tk.m[0];
    let chiStart = this.dtb.tk.m[1];
    for (let i = 0; i < 10; i++) {
      canStart = this.canJumbByYinBoyYanGirlTietKhi(canStart);
      chiStart = this.jumbByYinBoyYanGirlTietKhi(chiStart);
      this.tutru.dv.push([canStart, chiStart, timeNhapVan.unix()]);
      timeNhapVan = timeNhapVan.add(10, "year");
    }
    this.tutru.dvt = [isDirectRight, dayNhapVanReal, hourNhapVanReal, yeoNhapVanFix, monthNhapVanFix, dayNhapVanFix];
  }
  // Phương thức xây dựng cột cho Tứ Trụ
  tuTruBuildCot(idxCot, cotCC, nhatChu, isNhatChu = false) {
    const canNhatChu = nhatChu[0];
    this.tutru.cot[idxCot].cht = isNhatChu ? -1 : idxTHAP(canNhatChu, cotCC[0]);
    this.tutru.cot[idxCot].cn = cotCC[0];
    this.tutru.cot[idxCot].ci = cotCC[1];
    const lstCanTang = CHI_CAN[cotCC[1]];
    this.tutru.cot[idxCot].ctg = lstCanTang;
    const lstPhoTinh = [];
    lstCanTang.forEach((val, idxCT) => {
      lstPhoTinh[idxCT] = idxTHAP(canNhatChu, val);
    });
    this.tutru.cot[idxCot].pht = lstPhoTinh;
    this.tutru.cot[idxCot].ts = idxTSTutru(nhatChu[0], cotCC[1]);
    this.tutru.cot[idxCot].na = cotCC[2];
  }
}

dayjs.extend(utc);
let horoHelp;
function checkCachCuc(ls) {
  const tuviCcMt = [0, 2, 4, 6, 8, 10];
  const idxMenh = ls.am;
  const cungMenh = ls.ars[idxMenh];
  if (horoHelp.isStar3(0, idxMenh) && tuviCcMt.includes(idxMenh)) return 2;
  if (horoHelp.isStar3(12, idxMenh) && horoHelp.isStar3(13, idxMenh) && horoHelp.isStar3(8, idxMenh)) return 3;
  if (cungMenh.sb.length === 0) return 4;
  if (horoHelp.isStar4(2, idxMenh) || horoHelp.isStar4(7, idxMenh)) return 5;
  const yanZone = [5, 9, 1, 11, 3, 7];
  if (yanZone.includes(idxMenh) && horoHelp.isStar3(6, idxMenh) && horoHelp.isStar3(10, idxMenh)) return 6;
  if (horoHelp.isStar3(1, idxMenh) && horoHelp.isStar3(4, idxMenh) && horoHelp.isStar3(9, idxMenh)) return 7;
  return 1;
}
function getInfoCach(ls) {
  const idCach = checkCachCuc(ls);
  const arrCC = {
    1: "Mặc định",
    2: "Tử Phủ Vũ Tướng",
    3: "Sát Phá Tham",
    4: "Vô Chính Diệu",
    5: "Nhật Nguyệt",
    6: "Phủ Tướng",
    7: "Cơ Đồng Cự"
  };
  const dataReturn = {};
  dataReturn.name = arrCC[idCach];
  dataReturn.good = [];
  dataReturn.bad = [];
  return dataReturn;
}
function buildLsData(born, view = /* @__PURE__ */ new Date(), sex = 1, cfgInput = [...configDefault]) {
  const cfg = cfgInput;
  const horoB = new HoroscopeBuild({
    sex,
    born: dayjs(born),
    view: dayjs(view),
    cfg
  });
  const lsData = horoB;
  delete lsData.starPlacer;
  delete lsData.circlePlacer;
  delete lsData.zoneBuilder;
  delete lsData.calculationHelper;
  delete lsData.arrIdxChuyenLoc;
  delete lsData.str2hc;
  delete lsData.str2u;
  delete lsData.arrCkZone;
  delete lsData.countLoop;
  delete lsData.HOA;
  delete lsData.numberStarCol1;
  delete lsData.numberStarCol2;
  delete lsData.idxCheckZone;
  delete lsData.tpCan;
  delete lsData.adyetk;
  delete lsData.dtc;
  return lsData;
}
function createDefaultHoroMap(sex, cfg) {
  return {
    loopLP: [],
    loopPT: [],
    cach: { base: {} },
    rad: null,
    aIdx: {},
    search: [],
    ttr: null,
    cid: 0,
    at: 0,
    am: 0,
    yeo: 0,
    adye: 0,
    adme: 0,
    ad: 0,
    sx: sex,
    ars: [],
    sks: 0,
    istc: false,
    dvidx: 0,
    mctc: [],
    dtc: {
      sn: {
        y: 0,
        m: 0,
        d: 0,
        h: 0,
        i: 0
      },
      ln: { y: 0, m: 0, d: 0, h: 0, mt: 0, yt: 0 },
      bs: { y: [0, 0, 0], m: [0, 0, 0], d: [0, 0, 0], h: [0, 0, 0] },
      tk: { y: [0, 0, 0], m: [0, 0, 0], d: [0, 0, 0], h: [0, 0, 0] },
      m12: [],
      h12: [],
      m12k: [],
      tki: [0, "", "", "", ""]
    },
    dtb: {
      sn: {
        y: 0,
        m: 0,
        d: 0,
        h: 0,
        i: 0
      },
      ln: { y: 0, m: 0, d: 0, h: 0, mt: 0, yt: 0 },
      bs: { y: [0, 0, 0], m: [0, 0, 0], d: [0, 0, 0], h: [0, 0, 0] },
      tk: { y: [0, 0, 0], m: [0, 0, 0], d: [0, 0, 0], h: [0, 0, 0] },
      m12: [],
      h12: [],
      m12k: [],
      tki: [0, "", "", "", ""]
    },
    dtv: {
      sn: {
        y: 0,
        m: 0,
        d: 0,
        h: 0,
        i: 0
      },
      ln: { y: 0, m: 0, d: 0, h: 0, mt: 0, yt: 0 },
      bs: { y: [0, 0, 0], m: [0, 0, 0], d: [0, 0, 0], h: [0, 0, 0] },
      tk: { y: [0, 0, 0], m: [0, 0, 0], d: [0, 0, 0], h: [0, 0, 0] },
      m12: [],
      h12: [],
      m12k: [],
      tki: [0, "", "", "", ""]
    },
    tutru: { cot: [], dv: [], dvt: [] },
    cfg: [...cfg],
    css: 0
  };
}
function isValidDate(date) {
  return date instanceof Date && !Number.isNaN(date.getTime());
}
function validateHoroMap(data, sex, cfg) {
  try {
    if (!data) {
      console.error("Invalid HoroMap: data is null or undefined");
      return createDefaultHoroMap(sex, cfg);
    }
    if (!data.dtb || !data.dtv || !data.cfg) {
      console.error("Invalid HoroMap: missing required fields", { dtb: !!data.dtb, dtv: !!data.dtv, cfg: !!data.cfg });
      return createDefaultHoroMap(sex, cfg);
    }
    const validateDateInfo = (info) => {
      return info && info.sn && typeof info.sn === "object" && info.ln && typeof info.ln === "object" && info.bs && typeof info.bs === "object" && info.tk && typeof info.tk === "object";
    };
    if (!validateDateInfo(data.dtb) || !validateDateInfo(data.dtv)) {
      console.error("Invalid HoroMap: invalid date info structure");
      return createDefaultHoroMap(sex, cfg);
    }
    return data;
  } catch (error) {
    console.error("Error validating HoroMap:", error);
    return createDefaultHoroMap(sex, cfg);
  }
}
function getLsDataServer(born, view = /* @__PURE__ */ new Date(), sex = 1, cfgInput = [...configDefault]) {
  try {
    if (!isValidDate(born) || !isValidDate(view)) {
      console.error("Invalid input dates:", { born, view });
      return createDefaultHoroMap(sex, cfgInput);
    }
    if (typeof sex !== "number" || sex !== 0 && sex !== 1) {
      console.error("Invalid sex parameter:", sex);
      return createDefaultHoroMap(1, cfgInput);
    }
    if (!Array.isArray(cfgInput)) {
      console.error("Invalid config:", cfgInput);
      return createDefaultHoroMap(sex, [...configDefault]);
    }
    const cfg = cfgInput;
    const horoB = buildLsData(born, view, sex, cfg);
    try {
      horoHelp = new HoroHelp(horoB);
      horoB.cach.base = getInfoCach(horoB);
    } catch (error) {
      console.error("Error in HoroHelp or getInfoCach:", error);
      horoB.cach.base = {};
    }
    return validateHoroMap(horoB, sex, cfg);
  } catch (error) {
    console.error("Error in getLsDataServer:", error);
    return createDefaultHoroMap(sex, cfgInput);
  }
}

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
  function drawACol(px, py, cot, textCol) {
    const wTru = wSquare / 2 - 2.5;
    const padY4Four = wSquare / 10;
    const returnX = wTru + px;
    const box1Info = {
      x: px,
      y: py,
      fill: "rgba(0, 0, 0, 0.07)",
      width: wTru,
      //
      height: isShowTuTru ? wTru * 2.1 : wTru * 1.35,
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
      text: `${CAN_AD[cot.cn] > 0 ? "+" : "-"}`,
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
      y: box1.y() + padY4Four,
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
        const phtTinh = THAP[idxTHAP(ls.dtb.bs.d[0], idxCT)];
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
  function drawAColWithConfig(x, y, cot, text) {
    return drawACol(x, y, cot, cfgLs[CfgValue.showSun] === 1 ? text : "");
  }
  function draw4FourPillar() {
    const { dtb, tutru } = ls;
    const tkInfo = dtb.tki;
    console.log("tkInfo1:", tkInfo);
    const padTop = 95;
    const txtTK = drawTextWithConfig({
      text: `Tứ Trụ - Sinh vào tiết ${TKN[tkInfo[0]]}`,
      x: xBox14,
      y: yBox14 + padTop,
      fontSize: fontCenter
    });
    if (tkInfo[1]) {
      drawTextWithConfig({
        text: `Tháng ${TKN_MONTH[tkInfo[0]]}tk từ ${TKN[TKN_PN[tkInfo[0]][0]]} (${cfgLs[CfgValue.showSun] === 1 ? dayjs(tkInfo[3]).format("YYYY/MM/DD HH:mm") : dayjs(tkInfo[3]).format("----/MM/DD HH:mm")}) đến ${TKN[TKN_PN[tkInfo[0]][1]]} (${cfgLs[CfgValue.showSun] === 1 ? dayjs(tkInfo[4]).format("YYYY/MM/DD HH:mm") : dayjs(tkInfo[4]).format("----/MM/DD HH:mm")})`,
        x: xBox14,
        y: txtTK.y() + 16,
        fontSize: fontCenter - 3
      });
    }
    const yearX = drawAColWithConfig(xBox14 + 3, txtTK.y() + 33, tutru.cot[0], `${dtb.sn.y}`);
    const mText = `${dtb.ln.mt === dtb.ln.m ? `(${dtb.ln.mt})` : `(${dtb.ln.m})(${dtb.ln.mt}tk)`}`;
    const monthX = drawAColWithConfig(yearX + 3, txtTK.y() + 33, tutru.cot[1], `${dtb.sn.m} ${mText}`);
    const dayX = drawAColWithConfig(monthX + 3, txtTK.y() + 33, tutru.cot[2], `${dtb.sn.d} (${dtb.ln.d})`);
    drawAColWithConfig(dayX + 3, txtTK.y() + 33, tutru.cot[3], `${dtb.sn.h}h${dtb.sn.i}`);
    if (isShowTuTru) {
      const dvTrInfo = ls.tutru.dvt;
      const txtTimeNhap = drawText({
        text: `${dvTrInfo[0] ? "Thuận" : "Nghịch"} đến tk cách ${dvTrInfo[1]} ngày ${dvTrInfo[2]} giờ quy đổi thành ${dvTrInfo[3]} năm ${dvTrInfo[4]} tháng ${dvTrInfo[5]} ngày`,
        // ( tháng ${TKNIDX[ls.dtb.tkn]} tk)
        x: xBox14,
        y: txtTK.y() + 235,
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
        const mdj = dayjs.unix(item[2]);
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
          text: `${THAP[idxTHAP(ls.dtb.bs.d[0], item[0])]}`,
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
    const amlichData = ls.dtv.bs;
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
        { text: `${CHI[ls.dtb.bs.h[1]]}`, fontStyle: "bold" },
        { text: `ngày`, fontStyle: "normal" },
        { text: `${ls.dtb.ln.d}`, fontStyle: "bold" },
        { text: `tháng`, fontStyle: "normal" },
        { text: `${ls.dtb.ln.m}`, fontStyle: "bold" },
        { text: `năm`, fontStyle: "normal" },
        {
          text: CAN[ls.dtb.bs.y[0]],
          fontStyle: "bold",
          fill: color[CAN_HH[ls.dtb.bs.y[0]]]
        },
        {
          text: CHI[ls.dtb.bs.y[1]],
          fontStyle: "bold",
          fill: color[CHI_HH[ls.dtb.bs.y[1]]]
        }
      ],
      [
        { text: "Mệnh", fontStyle: "normal" },
        {
          text: HH[LTHG_HH[ls.dtb.bs.y[2]]],
          fontStyle: "bold",
          fill: color[LTHG_HH[ls.dtb.bs.y[2]]]
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

const MySwal$1 = withReactContent(Swal);
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
  const handleExport = () => {
    try {
      const imageData = getStageImage(2);
      if (!imageData) {
        throw new Error("Không thể lấy được ảnh lá số");
      }
      const fileName = generateFileName(ls, "png");
      downloadURI(imageData, fileName);
    } catch (error) {
      console.error("Error exporting image:", error);
      MySwal$1.fire({
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
        MySwal$1.fire({
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
      MySwal$1.fire({
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
      if (imageData) {
        handleIOSImageSave(imageData, ls);
        MySwal$1.fire({
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
        MySwal$1.fire({
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
      if (isIOSDevice()) {
        handleIOSImageSave(imageData, ls);
        const result2 = await MySwal$1.fire({
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
      const result = await MySwal$1.fire({
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
      if (imageData) {
        handleIOSImageSave(imageData, ls);
        MySwal$1.fire({
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
        MySwal$1.fire({
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
      const shareData = {
        files: [file],
        title: generateShareTitle(ls),
        text: createShareText()
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
    const currentUrl = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(shareText)}`;
    await shareWithFallback("facebook", imageBlob, facebookUrl, () => getStageImage(2));
  };
  const shareToTwitter = async (imageBlob) => {
    if (!imageBlob) return;
    const shareText = createShareText();
    const currentUrl = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
    await shareWithFallback("twitter", imageBlob, twitterUrl, () => getStageImage(2));
  };
  const shareToTelegram = async (imageBlob) => {
    if (!imageBlob) return;
    const shareText = createShareText();
    const currentUrl = window.location.href;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`;
    await shareWithFallback("telegram", imageBlob, telegramUrl, () => getStageImage(2));
  };
  const shareToWhatsApp = async (imageBlob) => {
    if (!imageBlob) return;
    const shareText = createShareText();
    const currentUrl = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`;
    await shareWithFallback("whatsapp", imageBlob, whatsappUrl, () => getStageImage(2));
  };
  const shareToMessenger = async (imageBlob) => {
    if (!imageBlob) return;
    const fallbackUrl = `https://www.messenger.com/new`;
    await shareWithFallback("messenger", imageBlob, fallbackUrl, () => getStageImage(2));
  };
  const shareToZalo = async (imageBlob) => {
    if (!imageBlob) return;
    const shareText = createShareText();
    const currentUrl = window.location.href;
    const zaloUrl = `https://zalo.me/share?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(shareText)}`;
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
      MySwal$1.fire({
        title: "Lỗi",
        text: "Có lỗi xảy ra trong quá trình chia sẻ.",
        icon: "error"
      });
    }
  };
  const showShareDialog = async () => {
    const hasNativeShare = typeof navigator !== "undefined" && "share" in navigator && typeof navigator.share === "function";
    await MySwal$1.fire({
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
        document.querySelectorAll(".share-btn").forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            const platform = target.dataset.platform;
            target.style.transform = "scale(0.95)";
            setTimeout(() => {
              target.style.transform = "";
            }, 150);
            MySwal$1.close();
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
const HoroscopeClient = (props) => {
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
    /* @__PURE__ */ jsx("div", { id: "cv", className: "flex justify-center" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 size-full max-lg:block" })
  ] });
};

function normalizePath(path) {
  return path?.toLowerCase().trim().replace(/\s+/g, "-") || "";
}
const isClient = typeof window !== "undefined";
function getSearchParams() {
  if (!isClient) return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}
function getPathName() {
  if (!isClient) return "";
  return window.location.pathname;
}

const safeGetLsData = {
  getBirthData: (ls) => {
    try {
      return ls?.dtb?.bs && Array.isArray(ls.dtb.bs.y) && Array.isArray(ls.dtb.bs.m) && Array.isArray(ls.dtb.bs.d) && Array.isArray(ls.dtb.bs.h) ? {
        y: ls.dtb.bs.y,
        m: ls.dtb.bs.m,
        d: ls.dtb.bs.d,
        h: ls.dtb.bs.h
      } : null;
    } catch {
      return null;
    }
  },
  getLunarData: (ls) => {
    try {
      return ls?.dtb?.ln && typeof ls.dtb.ln.y === "number" && typeof ls.dtb.ln.m === "number" && typeof ls.dtb.ln.d === "number" ? {
        y: ls.dtb.ln.y,
        m: ls.dtb.ln.m,
        d: ls.dtb.ln.d
      } : null;
    } catch {
      return null;
    }
  },
  getSolarData: (ls) => {
    try {
      return ls?.dtb?.sn && typeof ls.dtb.sn.y === "number" && typeof ls.dtb.sn.m === "number" && typeof ls.dtb.sn.d === "number" && typeof ls.dtb.sn.h === "number" ? {
        y: ls.dtb.sn.y,
        m: ls.dtb.sn.m,
        d: ls.dtb.sn.d,
        h: ls.dtb.sn.h,
        i: ls.dtb.sn.i || 0
      } : null;
    } catch {
      return null;
    }
  }
};
function hasLsData(ls) {
  try {
    if (!ls || !ls.dtb) {
      console.error("Invalid HoroMap: missing ls or dtb");
      return false;
    }
    const birthData = safeGetLsData.getBirthData(ls);
    const lunarData = safeGetLsData.getLunarData(ls);
    const solarData = safeGetLsData.getSolarData(ls);
    if (!birthData) console.error("Invalid HoroMap: missing or invalid birth data");
    if (!lunarData) console.error("Invalid HoroMap: missing or invalid lunar data");
    if (!solarData) console.error("Invalid HoroMap: missing or invalid solar data");
    return Boolean(birthData && lunarData && solarData);
  } catch (error) {
    console.error("Error in hasLsData:", error);
    return false;
  }
}

const LOADING_FONT_MESSAGE = "Đang tải phông chữ...";
const PROCESSING_DATA_MESSAGE = "Đang xử lý dữ liệu...";
const RESPONSIVE_HEIGHT = "60vh";
const ResponsiveContainer = ({ children, className = "" }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: `relative w-full ${className}`,
    style: {
      minHeight: RESPONSIVE_HEIGHT
    },
    children
  }
);
const LoadingMessage = ({ message }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: "flex h-full w-full items-center justify-center bg-slate-100 p-4 text-center dark:bg-slate-800",
    style: { minHeight: RESPONSIVE_HEIGHT },
    children: /* @__PURE__ */ jsx("p", { children: message })
  }
);
const InitialContent = ({
  lunarInfo,
  birthInfo,
  setShowCanvas
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: "absolute inset-0 flex cursor-pointer flex-col items-center justify-center bg-slate-50/50",
    onClick: () => setShowCanvas(true),
    onTouchStart: () => setShowCanvas(true),
    style: { minHeight: RESPONSIVE_HEIGHT },
    children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 text-center text-2xl font-bold", children: "TinhMenhDo.com" }),
      /* @__PURE__ */ jsx("div", { className: "mb-3 text-center text-lg max-sm:text-base", children: birthInfo }),
      /* @__PURE__ */ jsx("div", { className: "text-md text-center max-sm:text-sm", children: lunarInfo }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 top-40 flex items-center justify-center text-center text-lg opacity-20 md:text-xl", children: "Click hoặc di chuột để hiện lá số" })
    ]
  }
);
const HoroscopeContent = ({
  lsObj,
  fontName,
  version,
  fnDownloadCall,
  fnCopyCall,
  fnExportNote,
  fnSocialShare,
  socialPlatform,
  useHtmlRender
}) => {
  if (!hasLsData(lsObj)) {
    return /* @__PURE__ */ jsx(LoadingMessage, { message: "Dữ liệu lá số không đầy đủ" });
  }
  return /* @__PURE__ */ jsx("div", { className: "relative h-full w-full", children: useHtmlRender ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    HoroscopeHtmlClient,
    {
      ls: lsObj,
      fontName,
      version,
      fnDownloadCall,
      fnCopyLs: fnCopyCall,
      fnExportNote,
      fnSocialShare,
      socialPlatform: socialPlatform || void 0
    }
  ) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    HoroscopeClient,
    {
      ls: lsObj,
      fontName,
      version,
      fnDownloadCall,
      fnCopyLs: fnCopyCall,
      fnExportNote,
      fnSocialShare,
      socialPlatform: socialPlatform || void 0
    }
  ) }) });
};
const ContentDisplay = React.memo(
  ({
    fontsPreloaded,
    showCanvas,
    lsObj,
    setShowCanvas,
    fontName,
    version,
    fnDownloadCall,
    fnCopyCall,
    fnExportNote,
    fnSocialShare,
    socialPlatform,
    useHtmlRender: initialHtmlRender
  }) => {
    const [isHtmlRender, setIsHtmlRender] = useState(initialHtmlRender);
    const toggleRenderMode = () => setIsHtmlRender(!isHtmlRender);
    const content = useMemo(() => {
      if (!fontsPreloaded) {
        return /* @__PURE__ */ jsx(LoadingMessage, { message: LOADING_FONT_MESSAGE });
      }
      if (!showCanvas) {
        if (!hasLsData(lsObj)) {
          return /* @__PURE__ */ jsx(LoadingMessage, { message: PROCESSING_DATA_MESSAGE });
        }
        let lunarInfo = "";
        let birthInfo = "";
        try {
          if (lsObj.dtb && lsObj.dtb.ln) {
            const lunar = lsObj.dtb.ln;
            lunarInfo = `Ngày ${lunar.d} tháng ${lunar.m} năm ${lunar.y} (Âm lịch)`;
          }
          if (lsObj.dtb && lsObj.dtb.bs && lsObj.dtb.bs.y) {
            birthInfo = `Năm ${CAN[lsObj.dtb.bs.y[0]]} ${CHI[lsObj.dtb.bs.y[1]]}`;
          }
        } catch (error) {
          console.error("Error formatting horoscope data:", error);
        }
        if (!lunarInfo) lunarInfo = "Đang tải thông tin ngày âm lịch...";
        if (!birthInfo) birthInfo = "Đang tải thông tin năm sinh...";
        return /* @__PURE__ */ jsx(InitialContent, { lunarInfo, birthInfo, setShowCanvas });
      }
      return /* @__PURE__ */ jsx(
        HoroscopeContent,
        {
          lsObj,
          fontName,
          version,
          fnDownloadCall,
          fnCopyCall,
          fnExportNote,
          fnSocialShare,
          socialPlatform,
          useHtmlRender: isHtmlRender
        }
      );
    }, [
      fontsPreloaded,
      showCanvas,
      lsObj,
      setShowCanvas,
      fontName,
      version,
      fnDownloadCall,
      fnCopyCall,
      fnExportNote,
      fnSocialShare,
      socialPlatform,
      isHtmlRender
    ]);
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      showCanvas && hasLsData(lsObj) && /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: toggleRenderMode,
          className: "hidden rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800",
          children: isHtmlRender ? "🔄 Chuyển sang Canvas Rendering" : "🔄 Chuyển sang HTML/CSS Rendering (Beta)"
        }
      ) }),
      /* @__PURE__ */ jsx(ResponsiveContainer, { className: `mb-10 ${hasLsData(lsObj) ? "" : "bg-gray-100"}`, children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full w-full transition-all duration-300 ease-in-out",
          onMouseEnter: () => !showCanvas && setShowCanvas(true),
          onTouchStart: () => !showCanvas && setShowCanvas(true),
          children: content
        }
      ) })
    ] });
  }
);
ContentDisplay.displayName = "ContentDisplay";

const PRELOAD_CANVAS_SIZE = 200;
const SAMPLE_STARS = ["Tử Vi", "Thiên Phủ", "Thái Dương", "Vũ Khúc", "Thiên Đồng", "Liêm Trinh"];
function PreloadCanvas({ fontName, onPreloadComplete }) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  useEffect(() => {
    const preloadFonts = () => {
      Array.from({ length: 3 }).forEach((_, index) => {
        try {
          const preloadContainer = document.createElement("div");
          preloadContainer.id = `preload-canvas-${index}`;
          preloadContainer.style.position = "fixed";
          preloadContainer.style.left = "-1000px";
          preloadContainer.style.top = "-1000px";
          document.body.appendChild(preloadContainer);
          const stage = new Konva$2.Stage({
            container: preloadContainer,
            width: PRELOAD_CANVAS_SIZE,
            height: PRELOAD_CANVAS_SIZE
          });
          const layer = new Konva$2.Layer();
          const rect = new Konva$2.Rect({
            x: 0,
            y: 0,
            width: PRELOAD_CANVAS_SIZE,
            height: PRELOAD_CANVAS_SIZE,
            fill: "#ffffff"
          });
          layer.add(rect);
          SAMPLE_STARS.forEach((star, i) => {
            const randomStarKeys = Object.keys(SM);
            const randomStar = SM[randomStarKeys[Math.floor(Math.random() * randomStarKeys.length)]];
            const text = new Konva$2.Text({
              x: 10,
              y: 20 + i * 30,
              text: `${star} ${randomStar?.name || ""}`,
              fontSize: 16,
              fontFamily: fontName,
              fill: "#000000"
            });
            layer.add(text);
          });
          stage.add(layer);
          layer.cache();
          setTimeout(() => {
            stage.destroy();
            document.body.removeChild(preloadContainer);
          }, 1e3);
        } catch (error) {
          console.error(`Error creating preload canvas ${index}:`, error);
        }
      });
      setTimeout(onPreloadComplete, 1e3);
    };
    preloadFonts();
    return () => {
      if (stageRef.current) {
        stageRef.current.destroy();
      }
    };
  }, [fontName, onPreloadComplete]);
  return /* @__PURE__ */ jsx("div", { ref: containerRef, style: { display: "none" } });
}

const safeLsRender = {
  renderBirthInfo: (ls) => {
    try {
      const birthData = safeGetLsData.getBirthData(ls);
      if (!birthData) return null;
      return {
        canChi: {
          nam: `${CAN[birthData.y[0]]} ${CHI[birthData.y[1]]}`,
          thang: `${CAN[birthData.m[0]]} ${CHI[birthData.m[1]]}`,
          ngay: `${CAN[birthData.d[0]]} ${CHI[birthData.d[1]]}`,
          gio: `${CHI[birthData.h[1]]}`
        }
      };
    } catch {
      return null;
    }
  },
  renderLunarInfo: (ls) => {
    try {
      const lunarData = safeGetLsData.getLunarData(ls);
      if (!lunarData) return null;
      return {
        ngay: lunarData.d,
        thang: lunarData.m,
        nam: lunarData.y
      };
    } catch {
      return null;
    }
  },
  renderSolarInfo: (ls) => {
    try {
      const solarData = safeGetLsData.getSolarData(ls);
      if (!solarData) return null;
      return {
        ngay: solarData.d,
        thang: solarData.m,
        nam: solarData.y,
        gio: solarData.h,
        phut: solarData.i || 0
      };
    } catch {
      return null;
    }
  }
};
const updateDocumentMeta = {
  tag: (element, attributes) => {
    const selector = attributes.property ? `${element}[property="${attributes.property}"]` : `${element}[name="${attributes.name}"]`;
    let tag = document.querySelector(selector);
    if (!tag) {
      tag = document.createElement(element);
      Object.entries(attributes).forEach(([key, value]) => {
        tag?.setAttribute(key, value);
      });
      document.head.appendChild(tag);
    } else {
      tag.setAttribute("content", attributes.content);
    }
  },
  meta: (name, content) => {
    const attributes = {
      ...name.startsWith("og:") ? { property: name } : { name },
      content
    };
    updateDocumentMeta.tag("meta", attributes);
  },
  link: (rel, href) => {
    updateDocumentMeta.tag("link", { rel, href });
  }
};

const RenderTitle = React.memo(
  ({ lsObj, lsState, configIconsRef, setShowNewConfigPanel }) => {
    if (!lsObj || !hasLsData(lsObj)) {
      return null;
    }
    try {
      const solarInfo = safeLsRender.renderSolarInfo(lsObj);
      const lunarInfo = safeLsRender.renderLunarInfo(lsObj);
      const lunaBornText = getLunaBornText(lsObj);
      if (!solarInfo || !lunarInfo || !lunaBornText) {
        console.error("Missing required data for title:", { solarInfo, lunarInfo, lunaBornText });
        return null;
      }
      return /* @__PURE__ */ jsxs("div", { className: "mx-auto my-3 text-center text-lg", children: [
        "Tử vi ",
        lsState.sex === 1 ? "Nam" : "Nữ",
        " ",
        solarInfo.nam,
        "/",
        solarInfo.thang,
        "/",
        solarInfo.ngay,
        " ",
        solarInfo.gio,
        "h",
        solarInfo.phut,
        " - Âm lịch ngày ",
        lunarInfo.ngay,
        " tháng ",
        lunarInfo.thang,
        " năm ",
        lunaBornText.y,
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            onClick: () => {
              if (setShowNewConfigPanel) {
                setShowNewConfigPanel(true);
              } else {
                configIconsRef.current?.toggleMenu?.();
              }
            },
            className: "cursor-pointer rounded-md border border-orange-500 px-2 font-bold text-orange-500 hover:bg-orange-500 hover:text-white",
            children: "SỬA LÁ SỐ"
          }
        )
      ] });
    } catch (error) {
      console.error("Error rendering title:", error);
      return null;
    }
  }
);
RenderTitle.displayName = "RenderTitle";

function generateTitle(dLich, gioiTinh, lunaCC, urlInfo) {
  const minutes = dLich.i || 0;
  return `Lá số Tử Vi ${gioiTinh} tuổi ${lunaCC.y} ${arrH1[urlInfo.cfg[CfgValue.typeLs]]} sinh ${dLich.d}/${dLich.m}/${dLich.y} ${dLich.h}h${minutes} , tử vi số mệnh, bát tự ${lunaCC.y.toUpperCase()} | ${lunaCC.m.toUpperCase()} | ${lunaCC.d.toUpperCase()} | ${lunaCC.h.toUpperCase()}`;
}
function generateDest(dLich, gioiTinh, lunaCC, urlInfo, menh1, menh2, menh3, menhTv, chinhTinhMenhTH) {
  return `Tu vi ${dLich.d}/${dLich.m}/${dLich.y} tử vi trọn đời ${arrH1[urlInfo.cfg[CfgValue.typeLs] - 1]} ${gioiTinh} tuổi ${lunaCC.y} ${dLich.y} mệnh tại ${CHI[menh1.ci]} có ${chinhTinhMenhTH}. Đại vn ${CHI[menh2.ci]}, lưu niên ${CHI[menh3.ci]}, tiểu vận ${CHI[menhTv.ci]}`;
}

function usePageMetadata(ls, urlArr) {
  return useMemo(() => {
    if (!ls || !hasLsData(ls)) return null;
    const solarData = safeGetLsData.getSolarData(ls);
    const lunarData = safeGetLsData.getLunarData(ls);
    const birthData = safeGetLsData.getBirthData(ls);
    if (!solarData || !lunarData || !birthData) return null;
    try {
      if (!ls.ars || !ls.am || !ls.aIdx || !ls.dtv) return null;
      const dLich = solarData;
      const gioiTinh = getSexText(ls);
      const lunaCC = getLunaBornText(ls);
      const amData = ls.ars[ls.am];
      if (!amData || !amData.sb) return null;
      const chinhTinhMenhTH = amData.sb.length === 0 ? "Vô Chính Diệu" : amData.sb.length === 1 ? SM[amData.sb[0]]?.name || "" : `${SM[amData.sb[0]]?.name || ""}, ${SM[amData.sb[1]]?.name || ""}`;
      if (!ls.aIdx.aid0 || !ls.dtv.bs?.y || !ls.aIdx.lynpc) return null;
      const title = generateTitle(dLich, gioiTinh, lunaCC, {
        cfg: { [CfgValue.typeLs]: urlArr.cfg[CfgValue.typeLs] }
      });
      const description = generateDest(
        dLich,
        gioiTinh,
        lunaCC,
        { cfg: { [CfgValue.typeLs]: urlArr.cfg[CfgValue.typeLs] } },
        ls.ars[ls.am],
        ls.ars[ls.aIdx.aid0],
        ls.ars[ls.dtv.bs.y[1]],
        ls.ars[ls.aIdx.lynpc],
        chinhTinhMenhTH
      );
      return { title, description };
    } catch (error) {
      console.error("Error generating metadata:", error);
      return null;
    }
  }, [ls, urlArr?.cfg]);
}

const MySwal = withReactContent(Swal);
const CONTAINER_MIN_HEIGHT = "600px";
dayjs.locale("vi");
const BatQuaiMenhTungBoLazy = lazy(() => import('./ByRiIpM2.js'));
const NewConfigPanelLazy = lazy(() => import('./DKffAK3A.js'));
const PageContentStaticLazy = lazy(() => import('./CBdRAqWl.js'));
const SkeletonLoader = () => /* @__PURE__ */ jsxs("div", { className: "animate-pulse rounded-md bg-gray-50 p-4 dark:bg-gray-800", style: { minHeight: "200px" }, children: [
  /* @__PURE__ */ jsx("div", { className: "mb-2 h-6 w-3/4 rounded-md bg-gray-200 dark:bg-gray-700" }),
  /* @__PURE__ */ jsx("div", { className: "mb-2 h-4 w-1/2 rounded-md bg-gray-200 dark:bg-gray-700" }),
  /* @__PURE__ */ jsx("div", { className: "mb-2 h-4 w-2/3 rounded-md bg-gray-200 dark:bg-gray-700" })
] });
function isTrungChauPhai(type) {
  return type >= 6 && type <= 8;
}
function PersonInfoClient({
  fontName,
  fontClass,
  version,
  defaultType,
  titleSeo,
  descSeo,
  useHtmlRendering
}) {
  const [isClient, setIsClient] = useState(false);
  const [fnDownloadCall, setFnDownloadCall] = useState(0);
  const [fnCopyCall, setFnCopyCall] = useState(0);
  const [fnExportNote, setFnExportNote] = useState(0);
  const [fnSocialShare, setFnSocialShare] = useState(0);
  const [socialPlatform, setSocialPlatform] = useState("");
  const [fontsPreloaded, setFontsPreloaded] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [showNewConfigPanel, setShowNewConfigPanel] = useState(true);
  const [, setIsPanelExiting] = useState(false);
  const configIconsRef = useRef(null);
  const lsAreaRef = useRef(null);
  const pathName = getPathName();
  const searchParams = getSearchParams();
  const LsIfUrl = useMemo(() => {
    const urlData = GetInfoFromURL(`${pathName}?${searchParams.toString()}`);
    return urlData;
  }, [pathName, searchParams]);
  const [lsState, setLsState] = useState(() => {
    if (typeof window === "undefined") {
      return {
        vBorn: /* @__PURE__ */ new Date(),
        vView: /* @__PURE__ */ new Date(),
        sex: 1,
        cfgLs: [1],
        first: false,
        copyState: false,
        copyLS: false
      };
    }
    searchParams.has("b") && searchParams.get("b")?.startsWith("1895");
    const dtBorn = LsIfUrl.dtBorn instanceof Date ? LsIfUrl.dtBorn : dayjs(LsIfUrl.dtBorn).toDate();
    const dtView = LsIfUrl.dtView instanceof Date ? LsIfUrl.dtView : dayjs(LsIfUrl.dtView).toDate();
    if (defaultType !== void 0 && !searchParams.get("cf")) {
      const newCfg = [...LsIfUrl.cfg];
      newCfg[CfgValue.typeLs] = defaultType;
      return {
        vBorn: dtBorn,
        vView: dtView,
        sex: LsIfUrl.sex,
        cfgLs: validateAllConfig(newCfg),
        first: false,
        copyState: false,
        copyLS: false
      };
    }
    return {
      vBorn: dtBorn,
      vView: dtView,
      sex: LsIfUrl.sex,
      cfgLs: validateAllConfig(LsIfUrl.cfg),
      first: false,
      copyState: false,
      copyLS: false
    };
  });
  const [lsObj, setLsObj] = useState(() => getLsDataServer(/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date(), 1, [1]));
  const [lstUrlArr, setLstUrlArr] = useState(
    () => buildKeyUrl(lsState.vBorn, lsState.vView, lsState.sex, lsState.cfgLs)
  );
  const repairDateByRule = useCallback((dateCheck) => {
    const newDate = new Date(dateCheck);
    if (newDate.getFullYear() < 1e3) {
      newDate.setFullYear(1e3);
    }
    if (newDate.getFullYear() > 2099) {
      newDate.setFullYear(2099);
    }
    return newDate;
  }, []);
  const updateURL = useCallback(
    (url) => {
      if (!isClient) return;
      const cleanUrl = url.replace(/\/tu-vi\/tu-vi\//, "/tu-vi/");
      if (window.location.pathname + window.location.search !== cleanUrl) {
        window.history.pushState({}, "", cleanUrl);
      }
    },
    [isClient]
  );
  const updateLsStateAction = useCallback((updates) => {
    setLsState((prev) => ({ ...prev, ...updates }));
  }, []);
  const handleClick = useCallback(() => {
    if (!showCanvas) {
      setShowCanvas(true);
    }
  }, [showCanvas]);
  const changeUrl = useCallback(
    debounce(() => {
      const updateURLWhenIdle = () => {
        if (typeof window !== "undefined" && window.location.search.includes("b=1895")) {
          return;
        }
        const urlInfo = buildKeyUrl(lsState.vBorn, lsState.vView, lsState.sex, lsState.cfgLs);
        const currentType = lsState.cfgLs[CfgValue.typeLs];
        const slugPath = normalizePath(LsTypeSlug[currentType]).replace(/^tu-vi\//, "");
        const newPath = `/tu-vi/${slugPath}`;
        const currentPath = window.location.pathname;
        const currentSearch = searchParams.toString();
        const newSearch = urlInfo.url.substring(1);
        if (currentSearch !== newSearch || !currentPath.includes(newPath)) {
          requestAnimationFrame(() => {
            updateURL(newPath + urlInfo.url);
            setLstUrlArr(urlInfo);
          });
        }
      };
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(
          updateURLWhenIdle
        );
      } else {
        setTimeout(updateURLWhenIdle, 0);
      }
    }, 300),
    [lsState.vBorn, lsState.vView, lsState.sex, lsState.cfgLs, searchParams, updateURL]
  );
  const fetchLsData = useCallback((vBorn, vView, sex, cfgLs) => {
    try {
      const data = getLsDataServer(vBorn, vView, sex, cfgLs);
      setLsObj(data);
    } catch (error) {
      console.error("Error fetching horoscope data:", error);
    }
  }, []);
  const handleDateTimeChange = useCallback(
    (type, date) => {
      const newDate = repairDateByRule(date);
      setLsState((prev) => ({
        ...prev,
        vBorn: type === "dateTimeBorn" ? newDate : prev.vBorn,
        vView: type === "dateTimeView" ? newDate : date.getTime() > prev.vView.getTime() ? newDate : prev.vView,
        first: true
      }));
      if (!showCanvas) {
        setShowCanvas(true);
      }
    },
    [showCanvas, repairDateByRule]
  );
  const changeSetConfig = useCallback(
    (typeCfg, value) => {
      requestAnimationFrame(() => {
        const newCfgLs = updateConfig(lsState.cfgLs, typeCfg, value);
        updateLsStateAction({
          cfgLs: newCfgLs,
          first: true
        });
        handleClick();
      });
    },
    [lsState.cfgLs, updateLsStateAction, handleClick]
  );
  useCallback(() => {
    if (!isClient) return;
    const urlCopy = window.location.href;
    window.navigator.clipboard.writeText(urlCopy);
    updateLsStateAction({ copyState: true });
    setTimeout(() => {
      updateLsStateAction({ copyState: false });
    }, 2e3);
  }, [isClient, updateLsStateAction]);
  const handlePreloadComplete = useCallback(() => {
    setFontsPreloaded(true);
  }, []);
  const handleHidePanel = useCallback(() => {
    setIsPanelExiting(true);
    setTimeout(() => {
      setShowNewConfigPanel(false);
      setIsPanelExiting(false);
    }, 300);
  }, []);
  const pageMetadata = usePageMetadata(lsObj, lstUrlArr);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("b=1895")) {
      return;
    }
    if (isClient) {
      changeUrl();
    }
  }, [lsState.vBorn, lsState.vView, lsState.sex, lsState.cfgLs, changeUrl, isClient]);
  useEffect(() => {
    fetchLsData(lsState.vBorn, lsState.vView, lsState.sex, lsState.cfgLs);
  }, [lsState.vBorn, lsState.vView, lsState.sex, lsState.cfgLs, fetchLsData]);
  useEffect(() => {
    if (!isClient || !hasLsData(lsObj) || !pageMetadata) return;
    const { title, description } = pageMetadata;
    const currentUrl = window.location.href;
    document.title = title;
    const metaTags = {
      "og:title": title,
      description,
      "og:description": description,
      "og:url": currentUrl
    };
    Object.entries(metaTags).forEach(([name, content]) => {
      updateDocumentMeta.meta(name, content);
    });
    updateDocumentMeta.link("canonical", currentUrl);
  }, [pageMetadata, lsObj, isClient]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PreloadCanvas, { fontName, onPreloadComplete: handlePreloadComplete }),
    /* @__PURE__ */ jsx(AppUI, { children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `x2l:max-[1600px]:flex relative mx-auto pb-24 max-xl:grid-cols-1 dark:text-slate-300 ${showNewConfigPanel ? "main-content" : ""}`,
        onClick: handleClick,
        onTouchStart: handleClick,
        style: { minHeight: CONTAINER_MIN_HEIGHT },
        children: [
          /* @__PURE__ */ jsx("h1", { className: "w-full py-4 text-center text-xl font-bold", children: titleSeo }),
          /* @__PURE__ */ jsxs("div", { className: "mx-auto w-fit gap-2 rounded-lg bg-amber-500/20 p-4 py-4 text-center text-sm", children: [
            "Dưới đây là lá số Tử Vi tính toán theo ",
            /* @__PURE__ */ jsx("b", { children: "giờ Hà Nội, Việt Nam" }),
            ", để tính chính xác theo",
            " ",
            /* @__PURE__ */ jsx("b", { children: "Địa Điểm Sinh" }),
            " mời bạn dùng tại đây",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `/tu-vi-tu-tru/the-gioi-theo-vi-tri-sinh${searchParams.toString() ? "?" + searchParams.toString() : ""}`,
                className: "font-bold text-amber-700 hover:text-amber-800",
                children: "Lá Số Tử Vi & Tứ Trụ theo địa điểm sinh"
              }
            )
          ] }),
          lsObj && hasLsData(lsObj) && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              RenderTitle,
              {
                lsObj,
                lsState,
                configIconsRef,
                setShowNewConfigPanel
              }
            ),
            isTrungChauPhai(lsState.cfgLs[CfgValue.typeLs]) && /* @__PURE__ */ jsx(TrungChauWarning, {})
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 my-4 text-sm max-lg:m-0 max-lg:mb-5 max-lg:p-0", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                id: "lsArea",
                className: `relative mx-auto max-lg:mb-5 max-lg:h-auto max-lg:w-full ${fontClass}`,
                ref: lsAreaRef,
                style: { minHeight: "400px" },
                children: /* @__PURE__ */ jsx(
                  ContentDisplay,
                  {
                    fontsPreloaded,
                    showCanvas,
                    lsObj,
                    lsState,
                    setShowCanvas,
                    fontName,
                    version,
                    fnDownloadCall,
                    fnCopyCall,
                    fnExportNote,
                    fnSocialShare,
                    socialPlatform,
                    useHtmlRender: useHtmlRendering
                  }
                )
              }
            ),
            hasLsData(lsObj) && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "px-2 sm:px-6", children: [
              /* @__PURE__ */ jsx("div", { className: "relative z-10 my-4 text-sm max-lg:m-0", children: /* @__PURE__ */ jsxs("div", { className: "mb-3 flex flex-wrap justify-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "btnSave",
                    onClick: async () => {
                      try {
                        setSocialPlatform("");
                        setFnSocialShare((prev) => prev + 1);
                        await new Promise((resolve) => setTimeout(resolve, 1e3));
                        setFnSocialShare(0);
                      } catch (error) {
                        console.error("Social share error:", error);
                      }
                    },
                    children: /* @__PURE__ */ jsxs("button", { className: "fire-btn btnLsAction flex items-center gap-2 font-bold text-white transition-all hover:scale-105 max-md:text-[10px]", children: [
                      /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18 16.08c-0.76 0-1.44 0.3-1.96 0.77L8.91 12.7c0.05-0.23 0.09-0.46 0.09-0.7s-0.04-0.47-0.09-0.7l7.05-4.11c0.54 0.5 1.25 0.81 2.04 0.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 0.24 0.04 0.47 0.09 0.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c0.79 0 1.5-0.31 2.04-0.81l7.12 4.15c-0.05 0.21-0.08 0.43-0.08 0.66 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" }) }),
                      /* @__PURE__ */ jsx("span", { children: "Chia sẻ lá số" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "btnSave",
                    onClick: () => {
                      setFnDownloadCall((current) => current + 1);
                      setTimeout(() => {
                        setFnDownloadCall(0);
                      }, 200);
                    },
                    children: /* @__PURE__ */ jsx("button", { className: "fire-btn btnLsAction font-bold text-white transition-all hover:scale-105 max-md:text-[10px]", children: "Lưu ảnh lớn" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "btnSave",
                    onClick: async () => {
                      if (isCopying) {
                        MySwal.fire({
                          title: "Thông báo",
                          text: "Đang trong quá trình copy, vui lòng đợi...",
                          icon: "info"
                        });
                        return;
                      }
                      try {
                        setIsCopying(true);
                        setFnCopyCall((prev) => prev + 1);
                        await new Promise((resolve) => setTimeout(resolve, 1e3));
                        setFnCopyCall(0);
                        setIsCopying(false);
                      } catch {
                        setIsCopying(false);
                        MySwal.fire({
                          title: "Lỗi",
                          text: "Có lỗi xảy ra khi copy lá số",
                          icon: "error"
                        });
                      }
                    },
                    children: /* @__PURE__ */ jsx("button", { className: "fire-btn btnLsAction font-bold text-white transition-all hover:scale-105 max-md:text-[10px]", children: isCopying ? "Đang copy..." : "Copy ảnh" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "btnSave",
                    onClick: async () => {
                      if (isCopying) {
                        MySwal.fire({
                          title: "Thông báo",
                          text: "Đang trong quá trình copy, vui lòng đợi...",
                          icon: "info"
                        });
                        return;
                      }
                      try {
                        setFnExportNote((prev) => prev + 1);
                        await new Promise((resolve) => setTimeout(resolve, 1e3));
                        setFnExportNote(0);
                      } catch {
                        MySwal.fire({
                          title: "Thông báo",
                          text: "Có lỗi trong quá trình export lá số ấn F5 và thử lại",
                          icon: "error"
                        });
                      }
                    },
                    children: /* @__PURE__ */ jsx("span", { className: "fire-btn btnLsAction flex justify-center font-bold text-white transition-all hover:scale-105 max-md:text-[10px]", children: "Ghi chú lá số" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "/hoc-tu-vi",
                    className: "fire-btn btnLsAction flex justify-center font-bold text-white transition-all hover:scale-105 max-md:text-[10px]",
                    target: "_blank",
                    children: "Học tử vi"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "btnSave", children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    onClick: () => setShowNewConfigPanel(true),
                    className: "fire-btn btnLsAction flex justify-center font-bold text-white transition-all hover:scale-105 max-md:text-[10px]",
                    children: "Sửa lá số"
                  }
                ) })
              ] }) }),
              /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(SkeletonLoader, {}), children: /* @__PURE__ */ jsx(PageContentStaticLazy, { ls: lsObj }, "pcsID") })
            ] }) }),
            /* @__PURE__ */ jsxs("section", { className: "mb-20 px-2 sm:px-6", style: { minHeight: "300px" }, children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-4 border-b border-dashed border-gray-300 pb-1 text-2xl font-bold", children: "Chế độ AI tư vấn" }),
              /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
                /* @__PURE__ */ jsxs("div", { className: "py-5 italic", children: [
                  "AI phân tích dựa trên dữ liệu sao bạn cung cấp.",
                  " ",
                  /* @__PURE__ */ jsx("strong", { children: "Lưu ý rằng đây chỉ là góc nhìn tham khảo, không thể thay thế sự đánh giá của các chuyên gia phong thủy hay tử vi chuyên sâu." }),
                  " ",
                  "Khi đi vào phân tích chi tiết, có thể có sai số nhất định do cách diễn giải hoặc phương pháp tính toán khác biệt. Bạn có thể tiếp tục đặt câu hỏi để phân tích sâu hơn về từng cung hoặc từng bộ sao cụ thể.",
                  " ",
                  /* @__PURE__ */ jsx("strong", { className: "text-orange-500", children: "(Lưu ý dùng đúng app Tinh Mệnh Đồ - Tử Vi & Bát Tự để cho kết quả tốt nhất)" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex w-full justify-center gap-2 py-5 [&>img]:w-1/3", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: tmdAppThumb.src,
                    className: "h-auto rounded-xl border border-black/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all hover:shadow-[0_8px_25px_rgba(255,104,0,0.3)] dark:shadow-[0_8px_20px_rgba(255,104,0,0.15)]",
                    alt: "App Tinh Mệnh Đồ trên Gemini",
                    loading: "lazy"
                  }
                ) }),
                /* @__PURE__ */ jsxs("p", { className: "text-normal mb-5", children: [
                  "Để có thể dùng ",
                  /* @__PURE__ */ jsx("b", { children: "App Tinh Mệnh Đồ trên Gemini" }),
                  " bạn cần có tài khoản",
                  " ",
                  /* @__PURE__ */ jsx("strong", { children: "Google đăng nhập sẵn" }),
                  " sau đó cần lấy đủ dữ liệu sao dạng text dưới đây bằng",
                  " ",
                  /* @__PURE__ */ jsx("b", { children: "nút Copy" }),
                  " hoặc click nút mở ",
                  /* @__PURE__ */ jsx("strong", { children: "Tinh Mệnh Đồ - Tử Vi & Bát Tự" }),
                  " ở phía dưới.",
                  /* @__PURE__ */ jsx("br", {}),
                  "Sau cần phân tích tổng quát nếu cần cụ thể hơn hãy hỏi chatbot ví dụ:",
                  /* @__PURE__ */ jsx("br", {}),
                  "- ",
                  /* @__PURE__ */ jsx("i", { children: "Phân tích tổng quát lá số 12 cung" }),
                  /* @__PURE__ */ jsx("br", {}),
                  "- ",
                  /* @__PURE__ */ jsx("i", { children: "Phân tích các đại vận tử vi quan trọng" }),
                  /* @__PURE__ */ jsx("br", {}),
                  "- ",
                  /* @__PURE__ */ jsx("i", { children: "Phân tích chi tiết Bát tự mạnh yếu và tìm dụng thần hợp lý" }),
                  /* @__PURE__ */ jsx("br", {}),
                  "...",
                  /* @__PURE__ */ jsx("br", {})
                ] }),
                /* @__PURE__ */ jsx(CSVTable, { ls: lsObj }),
                /* @__PURE__ */ jsxs("div", { className: "pt-5 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-4", children: "Link mở: " }),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: GEMINI_AI_LINKS.TU_VI_BAT_TU,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "fire-btn mx-2 inline-block rounded-md px-6 py-3 font-bold text-white transition-all hover:scale-105",
                      children: "Tinh Mệnh Đồ - Tử Vi & Bát Tự"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              Suspense,
              {
                fallback: /* @__PURE__ */ jsxs("div", { className: "rounded-md bg-gray-50 p-4 dark:bg-gray-800", style: { height: "200px", width: "100%" }, children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-2 h-6 w-3/4 rounded-md bg-gray-200 dark:bg-gray-700" }),
                  /* @__PURE__ */ jsx("div", { className: "mb-2 h-4 w-1/2 rounded-md bg-gray-200 dark:bg-gray-700" })
                ] }),
                children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(BatQuaiMenhTungBoLazy, { ls: lsObj }),
                  /* @__PURE__ */ jsx(ExplainLS, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "px-4", children: descSeo }),
            /* @__PURE__ */ jsxs("div", { className: "mb-30 px-4", children: [
              /* @__PURE__ */ jsx("h2", { className: "mb-4 border-b border-dashed border-gray-300 pb-1 text-2xl font-bold", children: "🚀 Hướng Dẫn Xem Mệnh Bằng Tinh Mệnh Đồ" }),
              /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsx("strong", { children: "📌 Bước 1: Truy cập ngay TinhMenhDo.com" }),
                /* @__PURE__ */ jsx("div", { children: "🔹 Bạn sẽ thấy giao diện trực quan, dễ sử dụng để nhập thông tin cá nhân." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsx("strong", { children: "📌 Bước 2: Nhập ngày tháng năm sinh & giờ sinh chính xác" }),
                /* @__PURE__ */ jsx("div", { children: "🔹 Giờ sinh là yếu tố cực kỳ quan trọng trong Tử Vi, vì vậy hãy kiểm tra kỹ trước khi nhập!" }),
                /* @__PURE__ */ jsx("div", { children: "🔹 Nếu không chắc chắn giờ sinh, có thể tham khảo cha mẹ hoặc dùng phương pháp truy đoán giờ sinh." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsx("strong", { children: '📌 Bước 3: Nhấn nút "AI TƯ VẤN" tổng quát (tham khảo)' }),
                /* @__PURE__ */ jsx("div", { children: "🔹 Hệ thống AI sẽ nhanh chóng tính toán và hiển thị lá số cùng luận giải tổng quát sơ bộ." }),
                /* @__PURE__ */ jsx("div", { children: '🔹 Hãy sử dụng nút "LẤY TEXT" để sao chép nội dung chọn đúng Tinh Mệnh Đồ trên Gemini.' })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsx("strong", { children: "📌 Bước 4: Nghiên Cứu Luận Giải & Định Hướng Vận Mệnh" }),
                /* @__PURE__ */ jsx("div", { children: "🔹 Đọc kỹ luận giải, đối chiếu với thực tế để hiểu sâu hơn về vận mệnh." }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "🔹 Để hiểu sâu hơn về luận giải mệnh và",
                  " ",
                  /* @__PURE__ */ jsx("a", { href: "/tu-vi/la-so-tu-vi-viet-nam", children: /* @__PURE__ */ jsx("strong", { children: "lá số Tử Vi" }) }),
                  ", bạn có thể sử dụng các công cụ rèn luyện ",
                  /* @__PURE__ */ jsx("strong", { children: "tự học huyền học" }),
                  " trên website, những công cụ này giúp bạn thực hành và áp dụng kiến thức Tử Vi vào thực tế một cách trực quan và hiệu quả."
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "🔹 Sách của thầy AlexAlpha, với phương pháp hệ thống hóa kiến thức ",
                  /* @__PURE__ */ jsx("strong", { children: "Tử Vi chuyên sâu" }),
                  ", là tài liệu không thể thiếu để nghiên cứu và phân tích lá số Tử Vi. Ngoài ra, bạn cũng có thể tham khảo các tài liệu, sách tham khảo từ nhiều nguồn uy tín khác để làm phong phú thêm hiểu biết về Tử Vi và các yếu tố vận mệnh."
                ] })
              ] })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      Suspense,
      {
        fallback: /* @__PURE__ */ jsx("div", { className: "fixed top-0 right-0 z-50 h-full w-85 translate-x-full transform overflow-y-auto bg-white shadow-xl dark:bg-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 h-6 w-3/4 rounded-md bg-gray-200 dark:bg-gray-700" }),
          /* @__PURE__ */ jsx("div", { className: "mb-4 h-32 rounded-md bg-gray-200 dark:bg-gray-700" }),
          /* @__PURE__ */ jsx("div", { className: "mb-4 h-20 rounded-md bg-gray-200 dark:bg-gray-700" })
        ] }) }),
        children: hasLsData(lsObj) && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "aside",
            {
              className: `fixed inset-y-0 right-0 z-50 w-full transform bg-white/0 shadow-xl transition-transform ease-in-out md:w-85 dark:bg-slate-800 ${showNewConfigPanel ? "translate-x-0" : "translate-x-full"} overflow-y-auto`,
              "aria-label": "Configuration panel",
              children: showNewConfigPanel && /* @__PURE__ */ jsx(
                NewConfigPanelLazy,
                {
                  cfgLs: lsState.cfgLs,
                  onConfigChange: changeSetConfig,
                  sex: lsState.sex,
                  onSexChange: (value) => {
                    updateLsStateAction({
                      sex: value,
                      first: true
                    });
                  },
                  dateTimeBorn: lsState.vBorn,
                  dateTimeView: lsState.vView,
                  onDateChange: handleDateTimeChange,
                  ls: lsObj,
                  onHidePanel: handleHidePanel
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `fixed top-3 right-3 z-50 transition-all duration-300 ease-out ${showNewConfigPanel ? "pointer-events-none -translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`,
              children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setShowNewConfigPanel(true),
                  className: "flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/30 text-amber-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:scale-110 hover:cursor-pointer hover:bg-white/40 hover:text-amber-800 active:scale-95",
                  "aria-label": "Sửa lá số",
                  children: /* @__PURE__ */ jsx(IconSettings, { className: "h-5 w-5" })
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
      .konva-container {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 400px; /* Thêm chiều cao cố định */
      }
      .konva-container canvas {
        position: absolute;
        top: 0;
        left: 0;
      }
      
      /* html, body {
        overflow: auto !important;
      } */    

      /* Animation for floating action button */
      .animate-in {
        animation: fadeInUp 0.4s ease-out forwards;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      /* Add skeleton loading animation */
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 1 }
        50% { opacity: .5 }
      }
    ` })
  ] });
}

export { PersonInfoClient as P };
