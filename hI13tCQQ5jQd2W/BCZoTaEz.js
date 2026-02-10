import dayjs from 'dayjs';
import './BODF8xcG.js';
import { a as ICHING_NUMBER } from './Dn_1HrqL.js';

const configDefault = Object.freeze([
  1,
  // lsCanType 1
  2,
  // typeLs 3
  3,
  // typePhiHoa 3
  0,
  // showHideStar 1
  0,
  // currentStar 1
  0,
  // dvTuHoa 0
  1,
  // locKiToanDo 0
  1,
  // dvKVXK 0
  0,
  // lnTuHoa 0
  0,
  // lnDHCQH 0
  0,
  // lnKVXK 0
  0,
  // lnTuTr 0
  0,
  // isADSat 0
  1,
  // batTuCenter 1
  0,
  // batTuCung 0
  1,
  // isNapAmCung 1
  1,
  // showSun 1
  0,
  // shortStar 0
  0,
  // rotateZone 0
  0,
  // drawByZone 0
  2,
  // showHoaIcon 0
  0,
  // tcph 0
  0
  // dvStar 0
]);
var CfgValue = /* @__PURE__ */ ((CfgValue2) => {
  CfgValue2[CfgValue2["lsCanType"] = 0] = "lsCanType";
  CfgValue2[CfgValue2["typeLs"] = 1] = "typeLs";
  CfgValue2[CfgValue2["typePhiHoa"] = 2] = "typePhiHoa";
  CfgValue2[CfgValue2["showHideStar"] = 3] = "showHideStar";
  CfgValue2[CfgValue2["currentStar"] = 4] = "currentStar";
  CfgValue2[CfgValue2["dvTuHoa"] = 5] = "dvTuHoa";
  CfgValue2[CfgValue2["locKiToanDo"] = 6] = "locKiToanDo";
  CfgValue2[CfgValue2["tuanHoanZone"] = 7] = "tuanHoanZone";
  CfgValue2[CfgValue2["lnTuHoa"] = 8] = "lnTuHoa";
  CfgValue2[CfgValue2["lnDHCQH"] = 9] = "lnDHCQH";
  CfgValue2[CfgValue2["lnKVXK"] = 10] = "lnKVXK";
  CfgValue2[CfgValue2["lnTuTr"] = 11] = "lnTuTr";
  CfgValue2[CfgValue2["isADSat"] = 12] = "isADSat";
  CfgValue2[CfgValue2["batTuCenter"] = 13] = "batTuCenter";
  CfgValue2[CfgValue2["batTuCung"] = 14] = "batTuCung";
  CfgValue2[CfgValue2["isNapAmCung"] = 15] = "isNapAmCung";
  CfgValue2[CfgValue2["showSun"] = 16] = "showSun";
  CfgValue2[CfgValue2["shortStar"] = 17] = "shortStar";
  CfgValue2[CfgValue2["rotateZone"] = 18] = "rotateZone";
  CfgValue2[CfgValue2["drawByZone"] = 19] = "drawByZone";
  CfgValue2[CfgValue2["showHoaIcon"] = 20] = "showHoaIcon";
  CfgValue2[CfgValue2["tcpb"] = 21] = "tcpb";
  CfgValue2[CfgValue2["dvStar"] = 22] = "dvStar";
  return CfgValue2;
})(CfgValue || {});
const LsTypeSlug = [
  "la-so-tu-vi-viet-nam",
  "luong-phai-nam-phai",
  "kham-thien-tu-hoa-nam-phai",
  "tu-vi-nam-phai",
  "tu-vi-phi-tinh-luong-phai",
  "tu-vi-kham-thien-tu-hoa",
  `tu-vi-trung-chau-phai`,
  "tu-vi-trung-chau-phai-kham-thien",
  "tu-vi-trung-chau-luong-phai"
];
const CanChi = {
  /** Get CAN index from CanChiTuple */
  can: (tuple) => tuple[0],
  /** Get CHI index from CanChiTuple */
  chi: (tuple) => tuple[1],
  /** Get LTHG index from CanChiTuple */
  lthg: (tuple) => tuple[2],
  /** Create CanChiTuple from individual indices */
  create: (can, chi, lthg) => [can, chi, lthg]
};
const CanChiPair = {
  /** Get CAN index from CanChiPair */
  can: (pair) => pair[0],
  /** Get CHI index from CanChiPair */
  chi: (pair) => pair[1],
  /** Create CanChiPair from individual indices */
  create: (can, chi) => [can, chi]
};
var StlkName = /* @__PURE__ */ ((StlkName2) => {
  StlkName2[StlkName2["numLoc"] = 0] = "numLoc";
  StlkName2[StlkName2["numKi"] = 1] = "numKi";
  StlkName2[StlkName2["currentLoc"] = 2] = "currentLoc";
  StlkName2[StlkName2["isMoveLoc"] = 3] = "isMoveLoc";
  StlkName2[StlkName2["isMoveKi"] = 4] = "isMoveKi";
  StlkName2[StlkName2["isTruyLoc"] = 5] = "isTruyLoc";
  StlkName2[StlkName2["isTruyKi"] = 6] = "isTruyKi";
  return StlkName2;
})(StlkName || {});
var ZolkName = /* @__PURE__ */ ((ZolkName2) => {
  ZolkName2[ZolkName2["isMoveLoc"] = 0] = "isMoveLoc";
  ZolkName2[ZolkName2["totalLoc"] = 1] = "totalLoc";
  ZolkName2[ZolkName2["currentLoc"] = 2] = "currentLoc";
  ZolkName2[ZolkName2["isMoveAllLoc"] = 3] = "isMoveAllLoc";
  ZolkName2[ZolkName2["locKeep"] = 4] = "locKeep";
  ZolkName2[ZolkName2["isMoveNienLoc"] = 5] = "isMoveNienLoc";
  ZolkName2[ZolkName2["isMoveKi"] = 0] = "isMoveKi";
  ZolkName2[ZolkName2["totalKi"] = 1] = "totalKi";
  ZolkName2[ZolkName2["currentKi"] = 2] = "currentKi";
  return ZolkName2;
})(ZolkName || {});
var TH = /* @__PURE__ */ ((TH2) => {
  TH2[TH2["L"] = 0] = "L";
  TH2[TH2["Q"] = 1] = "Q";
  TH2[TH2["Z"] = 2] = "Z";
  TH2[TH2["K"] = 3] = "K";
  return TH2;
})(TH || {});
function numbStringToArr(inputString) {
  const digits = inputString.split("").map((char) => Number.parseInt(char, 10)).filter((digit) => !Number.isNaN(digit));
  return digits;
}
function fixMaxMinValue(val, min, max) {
  return Math.max(min, Math.min(max, val));
}
function validateConfig(name, val) {
  let value = val;
  switch (name) {
    case 0 /* lsCanType */:
      value = fixMaxMinValue(value, 0, 4);
      break;
    case 1 /* typeLs */:
      value = fixMaxMinValue(value, 0, 8);
      break;
    case 2 /* typePhiHoa */:
      value = fixMaxMinValue(value, 0, 3);
      break;
    case 3 /* showHideStar */:
      value = fixMaxMinValue(value, 0, 4);
      break;
    case 4 /* currentStar */:
      value = fixMaxMinValue(value, 0, 4);
      break;
    case 5 /* dvTuHoa */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 6 /* locKiToanDo */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 7 /* tuanHoanZone */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 8 /* lnTuHoa */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 9 /* lnDHCQH */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 10 /* lnKVXK */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 11 /* lnTuTr */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 12 /* isADSat */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 13 /* batTuCenter */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 14 /* batTuCung */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 15 /* isNapAmCung */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 16 /* showSun */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 17 /* shortStar */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 18 /* rotateZone */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 19 /* drawByZone */:
      value = fixMaxMinValue(value, 0, 1);
      break;
    case 20 /* showHoaIcon */:
      value = fixMaxMinValue(value, 0, 4);
      break;
    case 21 /* tcpb */:
      value = fixMaxMinValue(value, 0, 2);
      break;
    case 22 /* dvStar */:
      value = fixMaxMinValue(value, 0, 1);
      break;
  }
  return value;
}
function updateConfig(cfg, name, val) {
  let newConfig;
  if (typeof cfg === "string") {
    newConfig = numbStringToArr(cfg);
  } else {
    newConfig = numbStringToArr(cfg.join(""));
  }
  newConfig[name] = validateConfig(name, val);
  if (![6, 7, 8].includes(newConfig[1 /* typeLs */])) {
    newConfig[21 /* tcpb */] = 0;
  }
  return newConfig;
}
function validateAllConfig(cfg) {
  const newConfig = numbStringToArr(cfg.join(""));
  return newConfig.map((val, idx) => validateConfig(idx, val));
}
function getSexText(ls) {
  return ls.sx === 1 ? "Nam" : "Nữ";
}
function getLunaBornText(ls) {
  return {
    y: `${CAN[ls.dtb.bs.y[0]]} ${CHI[ls.dtb.bs.y[1]]}`,
    m: `${CAN[ls.dtb.bs.m[0]]} ${CHI[ls.dtb.bs.m[1]]}`,
    d: `${CAN[ls.dtb.bs.d[0]]} ${CHI[ls.dtb.bs.d[1]]}`,
    h: `${CAN[ls.dtb.bs.h[0]]} ${CHI[ls.dtb.bs.h[1]]}`
  };
}
function getBatTuMarkdown(ls) {
  const { dtb, tutru } = ls;
  const tkInfo = dtb.tki;
  const dvTrInfo = ls.tutru.dvt;
  const van = dvTrInfo[0] ? "Vận Thuận" : "Vận Nghịch";
  const sexText = ls.sx === 1 ? "Nam" : "Nữ";
  const adText = ls.adye > 0 ? "Dương" : "Âm";
  const fullSexText = `${sexText} (${adText} ${sexText}) - ${van}`;
  const solarDate = `${dtb.sn.d}/${dtb.sn.m}/${dtb.sn.y}`;
  const lunarDate = `${dtb.ln.d}/${dtb.ln.m}`;
  const hourStr = `${dtb.sn.h}h${(dtb.sn.i || 0).toString().padStart(2, "0")}`;
  let mk = `# DỮ LIỆU LÁ SỐ BÁT TỰ

`;
  mk += `## A. Thông tin cơ bản
`;
  mk += `* **Ngày sinh:** ${solarDate} (Dương lịch) - Tức ${lunarDate} Âm lịch.
`;
  mk += `* **Giờ sinh:** ${hourStr}.
`;
  mk += `* **Tiết khí:** ${TKN[tkInfo[0]]}.
`;
  mk += `* **Giới tính:** ${fullSexText}.
`;
  mk += `* **Dữ liệu Tứ Trụ cơ bản:**
`;
  mk += `  - **Trụ Năm:** ${CAN[tutru.cot[0].cn]} ${CHI[tutru.cot[0].ci]}
`;
  mk += `  - **Trụ Tháng:** ${CAN[tutru.cot[1].cn]} ${CHI[tutru.cot[1].ci]}
`;
  mk += `  - **Trụ Ngày (Nhật Chủ):** ${CAN[tutru.cot[2].cn]} ${CHI[tutru.cot[2].ci]}
`;
  mk += `  - **Trụ Giờ:** ${CAN[tutru.cot[3].cn]} ${CHI[tutru.cot[3].ci]}

`;
  mk += `## B. Bảng Tứ Trụ (Chi tiết)

`;
  mk += `| Thành phần | Trụ Năm (${dtb.sn.y}) | Trụ Tháng (Tháng ${dtb.ln.m}) | Trụ Ngày (Ngày ${dtb.ln.d}) | Trụ Giờ (${hourStr}) |
`;
  mk += `| :--- | :--- | :--- | :--- | :--- |
`;
  let row1 = `| **Thập Thần (Thiên Can)** |`;
  tutru.cot.forEach((col, idx) => {
    const text = idx === 2 ? "**Nhật Chủ**" : col.cht !== -1 ? THAP[col.cht] : "Nhật Chủ";
    row1 += ` ${text} |`;
  });
  mk += row1 + `
`;
  let row2 = `| **Thiên Can** |`;
  tutru.cot.forEach((col) => {
    row2 += ` **${CAN[col.cn].toUpperCase()}** |`;
  });
  mk += row2 + `
`;
  let row3 = `| **Địa Chi** |`;
  tutru.cot.forEach((col) => {
    row3 += ` **${CHI[col.ci].toUpperCase()}** |`;
  });
  mk += row3 + `
`;
  let row4 = `| **Tàng Can (Thập thần)** |`;
  const dayMasterCan = dtb.bs.d[0];
  tutru.cot.forEach((col) => {
    let cell = "";
    col.ctg.forEach((canIdx, i) => {
      const ttIdx = idxTHAP(dayMasterCan, canIdx);
      const ttName = THAP[ttIdx];
      const prefix = i > 0 ? "<br>" : "";
      cell += `${prefix}- ${CAN[canIdx]} (${ttName})`;
    });
    row4 += ` ${cell} |`;
  });
  mk += row4 + `
`;
  let row5 = `| **Vòng Trường Sinh** |`;
  tutru.cot.forEach((col) => {
    row5 += ` ${TSNAME[col.ts]} |`;
  });
  mk += row5 + `
`;
  let row6 = `| **Nạp Âm** |`;
  tutru.cot.forEach((col) => {
    row6 += ` ${LTHG_NA[col.na]} |`;
  });
  mk += row6 + `

`;
  const dvTr = ls.tutru.dv;
  if (dvTr && dvTr.length > 0) {
    const firstDv = dvTr[0];
    const mdjFirst = dayjs.unix(firstDv[2]);
    const startAge = mdjFirst.year() - ls.dtb.sn.y + 1;
    const direction = dvTrInfo[0] ? "Thuận" : "Nghịch";
    mk += `## C. Đại Vận (Khởi vận ${startAge} tuổi - ${direction})

`;
    let hRow = `| Vận |`;
    dvTr.forEach((_, i) => hRow += ` ${i + 1} |`);
    mk += hRow + `
`;
    let sRow = `| :--- |`;
    dvTr.forEach(() => sRow += ` :--- |`);
    mk += sRow + `
`;
    let rAge = `| **Tuổi** |`;
    dvTr.forEach((item) => {
      const mdj = dayjs.unix(item[2]);
      const ageStart = mdj.year() - ls.dtb.sn.y + 1;
      const ageEnd = ageStart + 9;
      rAge += ` ${ageStart}t - ${ageEnd}t |`;
    });
    mk += rAge + `
`;
    let rYear = `| **Năm** |`;
    dvTr.forEach((item) => {
      const mdj = dayjs.unix(item[2]);
      rYear += ` ${mdj.year()} |`;
    });
    mk += rYear + `
`;
    let rCC = `| **Can Chi** |`;
    dvTr.forEach((item) => {
      rCC += ` **${CAN[item[0]]} ${CHI[item[1]]}** |`;
    });
    mk += rCC + `
`;
    let rTT = `| **Thập Thần** |`;
    dvTr.forEach((item) => {
      const ttIdx = idxTHAP(dayMasterCan, item[0]);
      rTT += ` ${THAP[ttIdx]} |`;
    });
    mk += rTT + `
`;
  }
  return mk;
}
function getBaseText(ls) {
  const nameAreaThan = AREA_NAME[ls.ars[ls.at].ai];
  let okmua = "Không được mùa sinh";
  if (OK_HH_TKN[LTHG_HH[ls.dtb.bs.y[2]]].includes(ls.dtb.tki[0])) {
    okmua = "Được mùa sinh";
  }
  return {
    ad: `${ls.ad > 0 ? ADTN[1] : ADTN[0]}`,
    adage: `${ls.adye > 0 ? "Dương" : "Âm"} ${getSexText(ls)}`,
    sk: `${SKB[ls.sks]}`,
    hmenh: `${HH[LTHG_HH[ls.dtb.bs.y[2]]]}`,
    cuc: `${HH[ls.cid]}`,
    tcu: nameAreaThan,
    mchu: `${SM[ls.mctc[0]].name}`,
    tchu: `${SM[ls.mctc[1]].name}`,
    mua: `${SEASON[TKN_SS[ls.dtb.tki[0]]]}`,
    okmua: `${okmua}`,
    textbt: getBatTuMarkdown(ls)
  };
}
function hoa2IchingIdx(arrTuHoa) {
  const lstTuHoaToBigFor = [
    [1, 1],
    // A
    [0, 1],
    // B
    [1, 0],
    // C
    [0, 0]
    // D
  ];
  let iChingCheck = [];
  iChingCheck = iChingCheck.concat(
    lstTuHoaToBigFor[arrTuHoa[0]],
    lstTuHoaToBigFor[arrTuHoa[1]],
    lstTuHoaToBigFor[arrTuHoa[2]]
  );
  const idxICH = ICHING_NUMBER.indexOf(iChingCheck.join(""));
  return idxICH;
}
function sameAD(firstCan, twoCan) {
  if (CAN_AD[firstCan] === CAN_AD[twoCan]) return 1;
  return 0;
}
function idxTHAP(firstCan, twoCan) {
  return HH_THAP[CAN_HH[firstCan]][CAN_HH[twoCan]][sameAD(firstCan, twoCan)];
}
function idxTSTutru(can, chi) {
  return CAN_TSTB[can][chi];
}
const typeLsName = [
  "Mặc định",
  "Lương Phái + Nam phái",
  "Khâm Thiên + Nam phái",
  "Nam phái",
  "Lương Phái",
  "Khâm Thiên",
  "Trung Châu Phái",
  "Trung Châu Phái + Khâm Thiên",
  "Trung Châu Phái + Lương Phái"
];
const typeBanTCP = ["Thiên Bàn", "Địa Bàn", "Nhân Bàn"];
const levelPhiHoaMsg = ["Tiên Thiên", "Đại Vận", "Lưu Niên", "Lưu Nguyệt", "Lưu Nhật"];
const changeCanTypeMsg = [
  "Can hóa 1 - Canh Đồng Kị",
  "Can hóa 2 - Canh Âm Kị",
  "Can hóa 3 - Trung Châu Phái",
  "Can hóa 4 - Phái khác",
  "Can hóa 5 - Phái nhỏ"
];
const arrH1 = [
  "lá số tử vi tổng hợp",
  "lá số tử vi Phi Tinh Lương Phái kết hợp Nam Phái",
  "lá số tử vi Khâm Thiên Tứ Hóa kết hợp Nam Phái",
  "lá số tử vi Nam Phái",
  "lá số tử vi Phi Tinh Lương Phái",
  "lá số tử vi Khâm Thiên Tứ Hóa",
  "lá số Trung Châu Phái",
  "lá số Trung Châu Phái & Khâm Thiên Tứ Hóa",
  "lá số Trung Châu Phái & Lương Phái"
];
const hideStarMsg = [
  "Tất cả",
  "Sao chính",
  "Sao chính, quý tinh",
  "Sao chính, quý tinh, trường sinh",
  "Sao chính, quý tinh, trường sinh, lục bại"
];
const yearLoopStarMsg = ["Không hiện", "Hiện 9 sao", "Hiện 15 sao", "Toàn bộ"];
function containsNumber(arr, x) {
  for (const subArr of arr) {
    if (subArr.includes(x)) {
      return true;
    }
  }
  return false;
}

const TKN = [
  /* 0 */
  "Tiểu Hàn",
  // Tháng 12
  /* 1 */
  "Đại Hàn",
  /* 2 */
  "Lập Xuân",
  // Tháng 1
  /* 3 */
  "Vũ Thủy",
  /* 4 */
  "Kinh Trập",
  // Tháng 2
  /* 5 */
  "Xuân Phân",
  /* 6 */
  "Thanh Minh",
  // Tháng 3
  /* 7 */
  "Cốc Vũ",
  /* 8 */
  "Lập Hạ",
  // Tháng 4
  /* 9 */
  "Tiểu Mãn",
  /* 10 */
  "Mang Chủng",
  // Tháng 5
  /* 11 */
  "Hạ Chí",
  /* 12 */
  "Tiểu Thử",
  // Tháng 6
  /* 13 */
  "Đại Thử",
  /* 14 */
  "Lập Thu",
  // Tháng 7
  /* 15 */
  "Xử Thử",
  /* 16 */
  "Bạch Lộ",
  // Tháng 8
  /* 17 */
  "Thu Phân",
  /* 18 */
  "Hàn Lộ",
  // Tháng 9
  /* 19 */
  "Sương Giáng",
  /* 20 */
  "Lập Đông",
  // Tháng 10
  /* 21 */
  "Tiểu Tuyết",
  /* 22 */
  "Đại Tuyết",
  // Tháng 11
  /* 23 */
  "Đông Chí"
];
const SEASON = {
  3: "Xuân",
  6: "Hạ",
  4: "Thu",
  2: "Đông"
};
const OK_HH_TKN = {
  2: [20, 21, 22, 23, 14, 15, 16, 17],
  3: [2, 3, 4, 5, 20, 21, 22, 23],
  4: [14, 15, 16, 17],
  5: [6, 7, 12, 13, 18, 19, 0, 1],
  6: [8, 9, 10, 11, 2, 3, 4, 5]
};
const TKN_SS = [
  /* 0 */
  2,
  // Tháng 12
  /* 1 */
  2,
  /* 2 */
  3,
  // Tháng 1
  /* 3 */
  3,
  /* 4 */
  3,
  // Tháng 2
  /* 5 */
  3,
  /* 6 */
  3,
  // Tháng 3
  /* 7 */
  3,
  /* 8 */
  6,
  // Tháng 4
  /* 9 */
  6,
  /* 10 */
  6,
  // Tháng 5
  /* 11 */
  6,
  /* 12 */
  6,
  // Tháng 6
  /* 13 */
  6,
  /* 14 */
  4,
  // Tháng 7
  /* 15 */
  4,
  /* 16 */
  4,
  // Tháng 8
  /* 17 */
  4,
  /* 18 */
  4,
  // Tháng 9
  /* 19 */
  4,
  /* 20 */
  2,
  // Tháng 10
  /* 21 */
  2,
  /* 22 */
  2,
  // Tháng 11
  /* 23 */
  2
];
const TKN_MONTH = [12, 12, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11];
const TKN_PN = [
  [0, 2],
  // 0
  [0, 2],
  // 1
  [2, 4],
  // 2
  [2, 4],
  // 3
  [4, 6],
  // 4
  [4, 6],
  // 5
  [6, 8],
  // 6
  [6, 8],
  // 7
  [8, 10],
  // 8
  [8, 10],
  // 9
  [10, 12],
  // 10
  [10, 12],
  // 11
  [12, 14],
  // 12
  [12, 14],
  // 13
  [14, 16],
  // 14
  [14, 16],
  // 15
  [16, 18],
  // 16
  [16, 18],
  // 17
  [18, 20],
  // 18
  [18, 20],
  // 19
  [20, 22],
  // 20
  [20, 22],
  // 21
  [22, 0],
  // 22
  [22, 0]
  // 23
];
const LTHG = [
  "Giáp Tý",
  // 4,
  "Ất Sửu",
  // 4,
  "Bính Dần",
  // 6,
  "Đinh Mão",
  // 6,
  "Mậu Thìn",
  // 3,
  "Kỷ Tị",
  // 3,
  "Canh Ngọ",
  // 5,
  "Tân Mùi",
  // 5,
  "Nhâm Thân",
  // 4,
  "Quý Dậu",
  // 4,
  "Giáp Tuất",
  // 6,
  "Ất Hợi",
  // 6,
  "Bính Tý",
  // 2,
  "Đinh Sửu",
  // 2,
  "Mậu Dần",
  // 5,
  "Kỷ Mão",
  // 5,
  "Canh Thìn",
  // 4,
  "Tân Tị",
  // 4,
  "Nhâm Ngọ",
  // 3,
  "Quý Mùi",
  // 3,
  "Giáp Thân",
  // 2,
  "Ất Dậu",
  // 2,
  "Bính Tuất",
  // 5,
  "Đinh Hợi",
  // 5,
  "Mậu Tý",
  // 6,
  "Kỷ Sửu",
  // 6,
  "Canh Dần",
  // 3,
  "Tân Mão",
  // 3,
  "Nhâm Thìn",
  // 2,
  "Quý Tị",
  // 2,
  "Giáp Ngọ",
  // 4,
  "Ất Mùi",
  // 4,
  "Bính Thân",
  // 6,
  "Đinh Dậu",
  // 6,
  "Mậu Tuất",
  // 3,
  "Kỷ Hợi",
  // 3,
  "Canh Tý",
  // 5,
  "Tân Sửu",
  // 5,
  "Nhâm Dần",
  // 4,
  "Quý Mão",
  // 4,
  "Giáp Thìn",
  // 6,
  "Ất Tị",
  // 6,
  "Bính Ngọ",
  // 2,
  "Đinh Mùi",
  // 2,
  "Mậu Thân",
  // 5,
  "Kỷ Dậu",
  // 5,
  "Canh Tuất",
  // 4,
  "Tân Hợi",
  // 4,
  "Nhâm Tý",
  // 3,
  "Quý Sửu",
  // 3,
  "Giáp Dần",
  // 2,
  "Ất Mão",
  // 2,
  "Bính Thìn",
  // 5,
  "Đinh Tị",
  // 5,
  "Mậu Ngọ",
  // 6,
  "Kỷ Mùi",
  // 6,
  "Canh Thân",
  // 3,
  "Tân Dậu",
  // 3,
  "Nhâm Tuất",
  // 2,
  "Quý Hợi"
  // 2,
];
const LTHG_HH = [
  4,
  4,
  6,
  6,
  3,
  3,
  5,
  5,
  4,
  4,
  6,
  6,
  2,
  2,
  5,
  5,
  4,
  4,
  3,
  3,
  2,
  2,
  5,
  5,
  6,
  6,
  3,
  3,
  2,
  2,
  4,
  4,
  6,
  6,
  3,
  3,
  5,
  5,
  4,
  4,
  6,
  6,
  2,
  2,
  5,
  5,
  4,
  4,
  3,
  3,
  2,
  2,
  5,
  5,
  6,
  6,
  3,
  3,
  2,
  2
];
const NAPAM = {
  T1: "Giản Hạ Thủy",
  T2: "Đại Khê Thủy",
  T3: "Trường Lưu Thủy",
  T4: "Thiên Hà Thủy",
  T5: "Tuyền Trung Thủy",
  T6: "Đại Hải Thủy",
  M1: "Tang Đố Mộc",
  M2: "Tùng Bách Mộc",
  M3: "Đại Lâm Mộc",
  M4: "Dương Liễu Mộc",
  M5: "Thạch Lựu Mộc",
  M6: "Bình Địa Mộc",
  K1: "Hải Trung Kim",
  K2: "Kim Bạch Kim",
  K3: "Bạch Lạp Kim",
  K4: "Sa Trung Kim",
  K5: "Kiếm Phong Kim",
  K6: "Thoa Xuyến Kim",
  G1: "Bích Thượng Thổ",
  G2: "Thành Đầu Thổ",
  G3: "Sa Trung Thổ",
  G4: "Lộ Bàng Thổ",
  G5: "Đại Trạch Thổ",
  G6: "Ốc Thượng Thổ",
  H1: "Tích Lịch Hỏa",
  H2: "Lư Trung Hỏa",
  H3: "Phú Đăng Hỏa",
  H4: "Thiên Thượng Hỏa",
  H5: "Sơn Hạ Hỏa",
  H6: "Sơn Đầu Hỏa"
};
const LTHG_NA = [
  NAPAM.K1,
  // 'Giáp Tý', // 4,
  NAPAM.K1,
  // 'Ất Sửu', // 4,
  NAPAM.H2,
  // 'Bính Dần', // 6,
  NAPAM.H2,
  // 'Đinh Mão', // 6,
  NAPAM.M3,
  // 'Mậu Thìn', // 3,
  NAPAM.M3,
  // 'Kỷ Tị', // 3,
  NAPAM.G4,
  // 'Canh Ngọ', // 5,
  NAPAM.G4,
  // 'Tân Mùi', // 5,
  NAPAM.K5,
  // 'Nhâm Thân', // 4,
  NAPAM.K5,
  // 'Quý Dậu', // 4,
  NAPAM.H6,
  // 'Giáp Tuất', // 6,
  NAPAM.H6,
  // 'Ất Hợi', // 6,
  NAPAM.T1,
  // 'Bính Tý', // 2,
  NAPAM.T1,
  // 'Đinh Sửu', // 2,
  NAPAM.G2,
  // 'Mậu Dần', // 5,
  NAPAM.G2,
  // 'Kỷ Mão', // 5,
  NAPAM.K3,
  // 'Canh Thìn', // 4,
  NAPAM.K3,
  // 'Tân Tị', // 4,
  NAPAM.M4,
  // 'Nhâm Ngọ', // 3,
  NAPAM.M4,
  // 'Quý Mùi', // 3,
  NAPAM.T5,
  // 'Giáp Thân', // 2,
  NAPAM.T5,
  // 'Ất Dậu', // 2,
  NAPAM.G6,
  // 'Bính Tuất', // 5,
  NAPAM.G6,
  // 'Đinh Hợi', // 5,
  NAPAM.H1,
  // 'Mậu Tý', // 6,
  NAPAM.H1,
  // 'Kỷ Sửu', // 6,
  NAPAM.M2,
  // 'Canh Dần', // 3,
  NAPAM.M2,
  // 'Tân Mão', // 3,
  NAPAM.T3,
  // 'Nhâm Thìn', // 2,
  NAPAM.T3,
  // 'Quý Tị', // 2,
  NAPAM.K4,
  // 'Giáp Ngọ', // 4,
  NAPAM.K4,
  // 'Ất Mùi', // 4,
  NAPAM.H5,
  // 'Bính Thân', // 6,
  NAPAM.H5,
  // 'Đinh Dậu', // 6,
  NAPAM.M6,
  // 'Mậu Tuất', // 3,
  NAPAM.M6,
  // 'Kỷ Hợi', // 3,
  NAPAM.G1,
  // 'Canh Tý', // 5,
  NAPAM.G1,
  // 'Tân Sửu', // 5,
  NAPAM.K2,
  // 'Nhâm Dần', // 4,
  NAPAM.K2,
  // 'Quý Mão', // 4,
  NAPAM.H3,
  // 'Giáp Thìn', // 6,
  NAPAM.H3,
  // 'Ất Tị', // 6,
  NAPAM.T4,
  // 'Bính Ngọ', // 2,
  NAPAM.T4,
  // 'Đinh Mùi', // 2,
  NAPAM.G5,
  // 'Mậu Thân', // 5,
  NAPAM.G5,
  // 'Kỷ Dậu', // 5,
  NAPAM.K6,
  // 'Canh Tuất', // 4,
  NAPAM.K6,
  // 'Tân Hợi', // 4,
  NAPAM.M1,
  // 'Nhâm Tý', // 3,
  NAPAM.M1,
  // 'Quý Sửu', // 3,
  NAPAM.T2,
  // 'Giáp Dần', // 2,
  NAPAM.T2,
  // 'Ất Mão', // 2,
  NAPAM.G3,
  // 'Bính Thìn', // 5,
  NAPAM.G3,
  // 'Đinh Tị', // 5,
  NAPAM.H4,
  // 'Mậu Ngọ', // 6,
  NAPAM.H4,
  // 'Kỷ Mùi', // 6,
  NAPAM.M5,
  // 'Canh Thân', // 3,
  NAPAM.M5,
  // 'Tân Dậu', // 3,
  NAPAM.T6,
  // 'Nhâm Tuất', // 2,
  NAPAM.T6
  // 'Quý Hợi' // 2,
];
const CAN = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
const CAN_HH = [4, 4, 2, 2, 3, 3, 6, 6, 5, 5];
const CAN_AD = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const CHI = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tị", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const CHI_HH = [2, 5, 3, 3, 5, 6, 6, 5, 4, 4, 5, 2];
const CHI_3HH = [2, 4, 6, 3, 2, 4, 6, 3, 2, 4, 6, 3];
const CHI_AD = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const CHI_CAN = {
  0: [3],
  1: [9, 3, 1],
  2: [4, 6, 8],
  3: [5],
  4: [8, 5, 3],
  5: [6, 8, 0],
  6: [7, 9],
  7: [9, 7, 5],
  8: [0, 2, 8],
  9: [1],
  10: [8, 1, 7],
  11: [2, 4]
};
const xtngl = {
  0: {
    x: 6,
    t: [4, 8],
    n: 1,
    g: [11, 1],
    l: 7
  },
  1: {
    x: 7,
    t: [5, 9],
    n: 0,
    g: [0, 2],
    l: 6
  },
  2: {
    x: 8,
    t: [6, 10],
    n: 11,
    g: [1, 3],
    l: 5
  },
  3: {
    x: 9,
    t: [7, 11],
    n: 10,
    g: [2, 4],
    l: 4
  },
  4: {
    x: 10,
    t: [8, 0],
    n: 9,
    g: [3, 5],
    l: 3
  },
  5: {
    x: 11,
    t: [9, 1],
    n: 8,
    g: [4, 6],
    l: 2
  },
  6: {
    x: 0,
    t: [10, 2],
    n: 7,
    g: [5, 7],
    l: 1
  },
  7: {
    x: 1,
    t: [11, 3],
    n: 6,
    g: [6, 8],
    l: 0
  },
  8: {
    x: 2,
    t: [0, 4],
    n: 5,
    g: [7, 9],
    l: 11
  },
  9: {
    x: 3,
    t: [1, 5],
    n: 4,
    g: [8, 10],
    l: 10
  },
  10: {
    x: 4,
    t: [2, 6],
    n: 3,
    g: [9, 11],
    l: 9
  },
  11: {
    x: 5,
    t: [3, 7],
    n: 2,
    g: [10, 0],
    l: 8
  }
};
const AREA_NAME = ["MỆNH", "BÀO", "PHỐI", "TỬ", "TÀI", "TẬT", "DI", "NÔ", "QUAN", "ĐIỀN", "PHÚC", "PHỤ"];
const AREA_NAME_FULL = [
  "MỆNH",
  "HUYNH ĐỆ",
  "PHU THÊ",
  "TỬ TỨC",
  "TÀI BẠCH",
  "TẬT ÁCH",
  "THIÊN DI",
  "NÔ BỘC",
  "QUAN LỘC",
  "ĐIỀN TRẠCH",
  "PHÚC ĐỨC",
  "PHỤ MẪU"
];
const SKB = {
  3: "Mệnh Cục tì hòa",
  1: "Cục sinh mệnh",
  2: "Mệnh sinh Cục",
  4: "Mệnh khắc cục",
  5: "Cục khắc mệnh"
};
const ADTN = ["Âm dương nghịch lý", "Âm dương thuận lý"];
const HH = {
  2: "Thủy",
  3: "Mộc",
  4: "Kim",
  5: "Thổ",
  6: "Hỏa"
};
const THAP = ["Quan", "Sát", "Tài", "T.Tài", "Ấn", "Kiêu", "Thương", "Thực", "Kiếp", "Tỷ"];
const HH_THAP = {
  2: {
    2: [8, 9],
    3: [6, 7],
    4: [4, 5],
    6: [2, 3],
    5: [0, 1]
  },
  3: {
    3: [8, 9],
    6: [6, 7],
    2: [4, 5],
    5: [2, 3],
    4: [0, 1]
  },
  4: {
    4: [8, 9],
    2: [6, 7],
    5: [4, 5],
    3: [2, 3],
    6: [0, 1]
  },
  5: {
    5: [8, 9],
    4: [6, 7],
    6: [4, 5],
    2: [2, 3],
    3: [0, 1]
  },
  6: {
    6: [8, 9],
    5: [6, 7],
    3: [4, 5],
    4: [2, 3],
    2: [0, 1]
  }
};
const SMI = [
  /* 0 */
  "Tử Vi",
  /* 1 */
  "Thiên Cơ",
  /* 2 */
  "Thái Dương",
  /* 3 */
  "Vũ Khúc",
  /* 4 */
  "Thiên Đồng",
  /* 5 */
  "Liêm Trinh",
  /* 6 */
  "Thiên Phủ",
  /* 7 */
  "Thái Âm",
  /* 8 */
  "Tham Lang",
  /* 9 */
  "Cự Môn",
  /* 10 */
  "Thiên Tướng",
  /* 11 */
  "Thiên Lương",
  /* 12 */
  "Thất Sát",
  /* 13 */
  "Phá Quân",
  /* 14 */
  "Thiên Không",
  // ******* Thai Tue *******
  /* 15 */
  "Thái Tuế",
  /* 16 */
  "Thiếu Dương",
  // 16
  /* 17 */
  "Tang Môn",
  /* 18 */
  "Thiếu Âm",
  /* 19 */
  "Quan Phù",
  /* 20 */
  "Tử Phù",
  /* 21 */
  "Tuế Phá",
  /* 22 */
  "Long Đức",
  /* 23 */
  "Bạch Hổ",
  /* 24 */
  "Phúc Đức",
  /* 25 */
  "Điếu Khách",
  /* 26 */
  "Trực Phù",
  // 26
  /* 27 */
  "Lộc Tồn",
  // ******* BS *******
  /* 28 */
  "Bác Sĩ",
  // 28
  /* 29 */
  "Lực Sĩ",
  // 29
  /* 30 */
  "Thanh Long",
  // 30
  /* 31 */
  "Tiểu Hao",
  // 31
  /* 32 */
  "Tướng Quân",
  // 32
  /* 33 */
  "Tấu Thư",
  // 33
  /* 34 */
  "Phi Liêm",
  // 34
  /* 35 */
  "Hỉ Thần",
  // 35
  /* 36 */
  "Bệnh Phù",
  // 36
  /* 37 */
  "Đại Hao",
  // 37
  /* 38 */
  "Phục Binh",
  // 38
  /* 39 */
  "Quan Phủ",
  // 39
  /* 40 */
  "Trường Sinh",
  // ******* Truong Sinh *******
  /* 41 */
  "Mộc Dục",
  /* 42 */
  "Quan Đới",
  /* 43 */
  "Lâm Quan",
  /* 44 */
  "Đế Vượng",
  /* 45 */
  "Suy",
  /* 46 */
  "Bệnh",
  /* 47 */
  "Tử",
  /* 48 */
  "Mộ",
  /* 49 */
  "Tuyệt",
  /* 50 */
  "Thai",
  /* 51 */
  "Dưỡng",
  /* 52 */
  "Địa Không",
  // ******* Luc sat *******
  /* 53 */
  "Địa Kiếp",
  /* 54 */
  "Hỏa Tinh",
  /* 55 */
  "Linh Tinh",
  /* 56 */
  "Kình Dương",
  /* 57 */
  "Đà La",
  /* 58 */
  "Thiên Khôi",
  // ******* Luc cat *******
  /* 59 */
  "Thiên Việt",
  /* 60 */
  "Tả Phụ",
  /* 61 */
  "Hữu Bật",
  /* 62 */
  "Văn Xương",
  /* 63 */
  "Văn Khúc",
  /* 64 */
  "Hóa Lộc",
  // ******* Tu Hoa *******
  /* 65 */
  "Hóa Quyền",
  /* 66 */
  "Hóa Khoa",
  /* 67 */
  "Hóa Kị",
  /* 68 */
  "Ân Quang",
  /* 69 */
  "Thiên Quý",
  /* 70 */
  "Tam Thai",
  /* 71 */
  "Bát Tọa",
  /* 72 */
  "Thai Phụ",
  /* 73 */
  "Phong Cáo",
  /* 74 */
  "Quốc Ấn",
  /* 75 */
  "Đường Phù",
  /* 76 */
  "Long Trì",
  /* 77 */
  "Phượng Các",
  /* 78 */
  "Hoa Cái",
  /* 79 */
  "Thiên Mã",
  /* 80 */
  "Thiên Khốc",
  /* 81 */
  "Thiên Hư",
  /* 82 */
  "Đào Hoa",
  /* 83 */
  "Hồng Loan",
  /* 84 */
  "Thiên Hỉ",
  /* 85 */
  "Cô Thần",
  /* 86 */
  "Quả Tú",
  /* 87 */
  "Thiên Hình",
  /* 88 */
  "Thiên Diêu",
  /* 89 */
  "Thiên Y",
  /* 90 */
  "Lưu Hà",
  /* 91 */
  "Kiếp Sát",
  /* 92 */
  "Phá Toái",
  /* 93 */
  "Thiên Quan",
  /* 94 */
  "Thiên Phúc",
  /* 95 */
  "Văn Tinh",
  /* 96 */
  "Thiên Trù",
  /* 97 */
  "Thiên Đức",
  /* 98 */
  "Nguyệt Đức",
  /* 99 */
  "Thiên Giải",
  /* 100 */
  "Địa Giải",
  /* 101 */
  "Giải Thần",
  /* 102 */
  "Thiên Tài",
  /* 103 */
  "Thiên Thọ",
  /* 104 */
  "Đẩu Quân",
  /* 105 */
  "Thiên Thương",
  /* 106 */
  "Thiên Sứ",
  /* 107 */
  "Thiên La",
  /* 108 */
  "Địa Võng",
  /* 109 */
  "Tướng Tinh",
  /* 110 */
  "Phan An",
  /* 111 */
  "Tuế Dịch",
  /* 112 */
  "Tức Thần",
  /* 113 */
  "Tai Sát",
  /* 114 */
  "Thiên Sát",
  /* 115 */
  "Chỉ Bối",
  /* 116 */
  "Nguyệt Sát",
  /* 117 */
  "Vong Thần",
  /* 118 */
  "Niên Giải",
  /* 119 */
  "Nguyệt Giải",
  /* 120 */
  "Thiên Vu",
  /* 121 */
  "Thiên Nguyệt",
  /* 122 */
  "Âm Sát",
  /* 123 */
  "Dương Sát",
  /* 124 */
  "Âm Đức",
  /* 125 */
  "Dương Đức"
];
const SM = [
  {
    name: "Tử Vi",
    id: 1,
    hh: 5,
    isht: 1,
    sht: "Tử",
    ad: -1,
    grp: 1,
    type: "Quý",
    lvl: { 6: "M", 7: "M", 3: "M", 9: "M", 5: "V", 11: "V", 2: "Đ", 8: "Đ", 4: "B", 12: "B", 10: "B", 1: "B" },
    nn: [1, 0]
  },
  {
    name: "Thiên Cơ",
    id: 2,
    hh: 3,
    isht: 1,
    sht: "Cơ",
    ad: -1,
    grp: 1,
    type: "Thọ,Phúc",
    lvl: {
      5: "M",
      11: "M",
      4: "M",
      10: "M",
      6: "V",
      9: "V",
      1: "Đ",
      7: "Đ",
      2: "Đ",
      8: "Đ",
      3: "H",
      12: "H"
    },
    nn: [0, 1]
  },
  {
    name: "Thái Dương",
    id: 3,
    hh: 6,
    isht: 1,
    sht: "Nhật",
    ad: 1,
    grp: 1,
    type: "Quý",
    htg: "Mắt trái",
    lvl: {
      6: "M",
      7: "M",
      3: "M",
      4: "M",
      5: "M",
      2: "Đ",
      8: "Đ",
      9: "H",
      10: "H",
      11: "H",
      12: "H",
      1: "H"
    },
    nn: [1, 1]
  },
  {
    name: "Vũ Khúc",
    id: 4,
    hh: 4,
    isht: 1,
    sht: "Vũ",
    ad: -1,
    grp: 1,
    type: "Tài",
    htg: "Vú trái/Nốt ruồi",
    lvl: {
      5: "M",
      11: "M",
      2: "M",
      8: "M",
      3: "V",
      9: "V",
      1: "V",
      7: "V",
      4: "Đ",
      10: "Đ",
      6: "H",
      12: "H"
    },
    nn: [0, 0],
    good: [5, 11, 2, 8],
    bad: [6, 12, 4],
    good_pos: [4, 9]
  },
  {
    name: "Thiên Đồng",
    id: 5,
    hh: 2,
    isht: 1,
    sht: "Đồng",
    ad: 1,
    grp: 1,
    type: "Thọ,Phúc",
    htg: "Bộ máy tiêu hóa",
    lvl: {
      3: "M",
      9: "M",
      1: "V",
      4: "Đ",
      6: "Đ",
      12: "Đ",
      7: "H",
      10: "H",
      5: "H",
      11: "H",
      2: "H",
      8: "H"
    },
    nn: [1, 1],
    bad: [2, 8, 7],
    good_pos: [1, 3]
  },
  {
    name: "Liêm Trinh",
    id: 6,
    hh: 6,
    isht: 1,
    sht: "Liêm",
    ad: -1,
    grp: 1,
    type: "Hình",
    lvl: {
      5: "M",
      11: "M",
      1: "V",
      7: "V",
      3: "V",
      9: "V",
      2: "Đ",
      8: "Đ",
      6: "H",
      12: "H",
      4: "H",
      10: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Thiên Phủ",
    id: 7,
    hh: 5,
    isht: 1,
    sht: "Phủ",
    ad: 1,
    grp: 2,
    type: "Tài",
    lvl: {
      3: "M",
      9: "M",
      1: "M",
      7: "M",
      5: "V",
      11: "V",
      6: "Đ",
      12: "Đ",
      8: "Đ",
      4: "B",
      10: "B",
      2: "B"
    },
    nn: [1, 1]
  },
  {
    name: "Thái Âm",
    id: 8,
    hh: 2,
    isht: 1,
    sht: "Nguyệt",
    ad: -1,
    grp: 2,
    type: "Tài",
    htg: "Mắt phải",
    lvl: {
      10: "M",
      11: "M",
      12: "M",
      9: "V",
      1: "V",
      2: "Đ",
      8: "Đ",
      3: "H",
      4: "H",
      5: "H",
      6: "H",
      7: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Tham Lang",
    id: 9,
    hh: 3,
    isht: 1,
    sht: "Tham",
    ad: 1,
    grp: 2,
    type: "Dâm",
    htg: "Nách/Vết bớt",
    lvl: {
      2: "M",
      8: "M",
      5: "V",
      11: "V",
      3: "Đ",
      9: "Đ",
      6: "H",
      12: "H",
      1: "H",
      7: "H",
      4: "H",
      10: "H"
    },
    nn: [0, 1]
  },
  {
    name: "Cự Môn",
    id: 10,
    hh: 2,
    isht: 1,
    sht: "Cự",
    ad: -1,
    grp: 2,
    type: "Ám",
    htg: "Mồm/Nhân trung",
    lvl: {
      4: "M",
      10: "M",
      1: "V",
      7: "V",
      3: "V",
      9: "Đ",
      12: "Đ",
      5: "H",
      11: "H",
      2: "H",
      8: "H",
      6: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Thiên Tướng",
    id: 11,
    hh: 2,
    isht: 1,
    sht: "Tướng",
    ad: 1,
    grp: 2,
    type: "Quyền",
    htg: "Mặt",
    lvl: {
      3: "M",
      9: "M",
      5: "V",
      11: "V",
      1: "V",
      7: "V",
      2: "Đ",
      8: "Đ",
      6: "Đ",
      12: "Đ",
      4: "H",
      10: "H"
    },
    nn: [1, 1]
  },
  {
    name: "Thiên Lương",
    id: 12,
    hh: 5,
    isht: 1,
    sht: "Lương",
    ad: 1,
    grp: 2,
    type: "Thọ,Phúc",
    lvl: {
      7: "M",
      5: "M",
      11: "M",
      1: "V",
      4: "V",
      3: "V",
      9: "V",
      2: "Đ",
      8: "Đ",
      10: "H",
      6: "H",
      12: "H"
    },
    nn: [0, 1],
    good: [1, 7, 4, 5, 2, 8],
    bad: [9, 6, 12, 10],
    good_pos: [1, 13, 3, 6]
  },
  {
    name: "Thất Sát",
    id: 13,
    hh: 4,
    isht: 1,
    sht: "Sát",
    ad: 1,
    grp: 2,
    type: "Quyền",
    lvl: {
      3: "M",
      9: "M",
      1: "M",
      7: "M",
      6: "V",
      12: "V",
      2: "Đ",
      8: "Đ",
      4: "H",
      10: "H",
      5: "H",
      11: "H"
    },
    nn: [1, 1],
    good: [3, 9],
    good_pos: [1, 3]
  },
  {
    name: "Phá Quân",
    id: 14,
    hh: 2,
    isht: 1,
    sht: "Phá",
    ad: -1,
    grp: 2,
    type: "Quyền",
    lvl: {
      1: "M",
      7: "M",
      2: "V",
      8: "V",
      5: "Đ",
      11: "Đ",
      4: "H",
      10: "H",
      3: "H",
      9: "H",
      6: "H",
      12: "H"
    },
    nn: [0, 0]
  },
  {
    name: "Thiên Không",
    id: 15,
    hh: 6,
    isht: 1,
    sht: "Th.Không",
    ad: 0,
    ans: 1,
    sort: 10,
    type: "Hung",
    typ: 2,
    zone: 1
  },
  {
    name: "Thái Tuế",
    id: 16,
    hh: 6,
    isht: 1,
    sht: "Tuế",
    ad: 0,
    ans: 1,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    type: "Hình",
    typ: 1,
    zone: 3
  },
  {
    name: "Thiếu Dương",
    id: 17,
    hh: 6,
    isht: 1,
    sht: "Dương",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    type: "Phúc",
    typ: 1,
    zone: 3
  },
  {
    name: "Tang Môn",
    id: 18,
    hh: 3,
    isht: 1,
    sht: "Tang",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 3,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Thiếu Âm",
    id: 19,
    hh: 2,
    isht: 1,
    sht: "Âm",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 4,
    type: "Phúc",
    typ: 1,
    zone: 3
  },
  {
    name: "Quan Phù",
    id: 20,
    hh: 6,
    isht: 1,
    sht: "Phù",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 1,
    typ: 2,
    zone: 3
  },
  {
    name: "Tử Phù",
    id: 21,
    hh: 6,
    isht: 1,
    sht: "Tử.P",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    typ: 1,
    zone: 3
  },
  {
    name: "Tuế Phá",
    id: 22,
    hh: 6,
    isht: 1,
    sht: "Tuế.P",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 3,
    typ: 2,
    zone: 3,
    htg: "Răng"
  },
  {
    name: "Long Đức",
    id: 23,
    hh: 2,
    isht: 1,
    sht: "Long.Đ",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 4,
    typ: 1,
    zone: 3
  },
  {
    name: "Bạch Hổ",
    id: 24,
    hh: 4,
    isht: 1,
    sht: "Hổ",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 1,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    htg: "Xương, máu",
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Phúc Đức",
    id: 25,
    hh: 5,
    isht: 1,
    sht: "P.Đức",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 2,
    typ: 1,
    zone: 3
  },
  {
    name: "Điếu Khách",
    id: 26,
    hh: 6,
    isht: 1,
    sht: "Điếu",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 3,
    typ: 2,
    zone: 3
  },
  {
    name: "Trực Phù",
    id: 27,
    hh: 6,
    isht: 1,
    sht: "Trực.P",
    ad: 0,
    sort: 101,
    cir: "vtt",
    cirTp: 4,
    typ: 2,
    zone: 3
  },
  {
    name: "Lộc Tồn",
    id: 28,
    hh: 5,
    isht: 1,
    sht: "Lộc.T",
    iptt: true,
    ad: 1,
    ans: 0,
    sort: 10,
    type: "Tài",
    typ: 1,
    zone: 1
  },
  {
    name: "Bác Sĩ",
    id: 29,
    hh: 2,
    isht: 1,
    sht: "Bác.S",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 1,
    typ: 1,
    zone: 3
  },
  {
    name: "Lực Sĩ",
    id: 30,
    hh: 6,
    isht: 1,
    sht: "Lực",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 2,
    typ: 1,
    zone: 3
  },
  {
    name: "Thanh Long",
    id: 31,
    hh: 2,
    isht: 1,
    sht: "T.Long",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 3,
    type: "Hỉ",
    typ: 1,
    zone: 3
  },
  {
    name: "Tiểu Hao",
    id: 32,
    hh: 6,
    isht: 1,
    sht: "T.Hao",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 4,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Tướng Quân",
    id: 33,
    hh: 3,
    isht: 1,
    sht: "Tướng",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 1,
    type: "Quyền",
    typ: 2,
    zone: 3
  },
  {
    name: "Tấu Thư",
    id: 34,
    hh: 4,
    isht: 1,
    sht: "Tấu",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 2,
    type: "Quý",
    typ: 1,
    zone: 3
  },
  {
    name: "Phi Liêm",
    id: 35,
    hh: 6,
    isht: 1,
    sht: "Phi",
    ans: 1,
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 3,
    typ: 2,
    zone: 3,
    htg: "Tóc"
  },
  {
    name: "Hỉ Thần",
    id: 36,
    hh: 6,
    isht: 1,
    sht: "Hỉ.T",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 4,
    type: "Hỉ",
    typ: 1,
    zone: 3,
    htg: "Hậu môn"
  },
  {
    name: "Bệnh Phù",
    id: 37,
    hh: 5,
    isht: 1,
    sht: "Bệnh.P",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 1,
    typ: 2,
    zone: 3
  },
  {
    name: "Đại Hao",
    id: 38,
    hh: 6,
    isht: 1,
    sht: "Đ.Hao",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 2,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 3,
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Phục Binh",
    id: 39,
    hh: 6,
    isht: 1,
    sht: "Phục",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 3,
    typ: 2,
    zone: 3
  },
  {
    name: "Quan Phủ",
    id: 40,
    hh: 6,
    isht: 1,
    sht: "Q.Phủ",
    ad: 0,
    sort: 100,
    cir: "vbs",
    cirTp: 4,
    typ: 2,
    zone: 3
  },
  {
    name: "Trường Sinh",
    id: 41,
    hh: 2,
    isht: 1,
    sht: "Sinh",
    ad: 0,
    cir: "vts",
    cirTp: 1,
    type: "Thọ",
    typ: 1,
    zone: 0
  },
  {
    name: "Mộc Dục",
    id: 42,
    hh: 2,
    isht: 1,
    sht: "Mộc",
    ad: 0,
    cir: "vts",
    cirTp: 2,
    type: "Dâm",
    typ: 1,
    zone: 0
  },
  {
    name: "Quan Đới",
    id: 43,
    hh: 2,
    // 4
    isht: 1,
    sht: "Đới",
    ad: 0,
    cir: "vts",
    cirTp: 3,
    type: "Quyền",
    typ: 1,
    zone: 0
  },
  {
    name: "Lâm Quan",
    id: 44,
    hh: 2,
    // 4
    isht: 1,
    sht: "Lâm",
    ad: 0,
    cir: "vts",
    cirTp: 4,
    typ: 1,
    zone: 0,
    htg: "Cổ"
  },
  {
    name: "Đế Vượng",
    id: 45,
    hh: 2,
    // 4
    isht: 1,
    sht: "Vượng",
    ad: 0,
    cir: "vts",
    cirTp: 1,
    type: "Thọ",
    typ: 1,
    zone: 0,
    htg: "Lưng"
  },
  {
    name: "Suy",
    id: 46,
    hh: 2,
    isht: 1,
    sht: "Suy",
    ad: 0,
    cir: "vts",
    cirTp: 2,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Bệnh",
    id: 47,
    hh: 2,
    // 6
    isht: 1,
    sht: "Bệnh",
    ad: 0,
    cir: "vts",
    cirTp: 3,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Tử",
    id: 48,
    hh: 2,
    isht: 1,
    sht: "Tử",
    ad: 0,
    cir: "vts",
    cirTp: 4,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Mộ",
    id: 49,
    hh: 2,
    // 5
    isht: 1,
    sht: "Mộ",
    ad: 0,
    cir: "vts",
    cirTp: 1,
    type: "Bại",
    typ: 1,
    zone: 0,
    htg: "Nhọt, u bướu"
  },
  {
    name: "Tuyệt",
    id: 50,
    hh: 2,
    // 5
    isht: 1,
    sht: "Tuyệt",
    ad: 0,
    cir: "vts",
    cirTp: 2,
    type: "Bại",
    typ: 1,
    zone: 0
  },
  {
    name: "Thai",
    id: 51,
    hh: 2,
    // 5
    isht: 1,
    sht: "Thai",
    ad: 0,
    cir: "vts",
    cirTp: 3,
    type: "Dâm",
    typ: 1,
    zone: 0,
    htg: "Rốn, chỗ kín phụ nữ"
  },
  {
    name: "Dưỡng",
    id: 52,
    hh: 2,
    // 3
    isht: 1,
    sht: "Dưỡng",
    ad: 0,
    cir: "vts",
    cirTp: 4,
    typ: 1,
    zone: 0
  },
  {
    name: "Địa Không",
    id: 53,
    hh: 6,
    isht: 1,
    sht: "Không",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 4,
    ad: 1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      1: "H",
      2: "H",
      3: "Đ",
      4: "H",
      5: "H",
      6: "Đ",
      7: "H",
      8: "H",
      9: "Đ",
      10: "H",
      11: "H",
      12: "Đ"
    }
  },
  {
    name: "Địa Kiếp",
    id: 54,
    hh: 6,
    isht: 1,
    sht: "Kiếp",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 4,
    ad: -1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      1: "H",
      2: "H",
      3: "Đ",
      4: "H",
      5: "H",
      6: "Đ",
      7: "H",
      8: "H",
      9: "Đ",
      10: "H",
      11: "H",
      12: "Đ"
    }
  },
  {
    name: "Hỏa Tinh",
    id: 55,
    hh: 6,
    isht: 1,
    sht: "Hỏa",
    iptt: true,
    ans: 1,
    sort: 1,
    grp: 4,
    ad: 1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      1: "H",
      2: "H",
      3: "Đ",
      4: "Đ",
      5: "Đ",
      6: "Đ",
      7: "Đ",
      8: "H",
      9: "H",
      10: "H",
      11: "H",
      12: "H"
    }
  },
  {
    name: "Linh Tinh",
    id: 56,
    hh: 6,
    isht: 1,
    sht: "Linh",
    iptt: true,
    ans: 1,
    sort: 1,
    grp: 4,
    ad: -1,
    type: "Hung",
    typ: 2,
    zone: 1,
    lvl: {
      1: "H",
      2: "H",
      3: "Đ",
      4: "Đ",
      5: "Đ",
      6: "Đ",
      7: "Đ",
      8: "H",
      9: "H",
      10: "H",
      11: "H",
      12: "H"
    }
  },
  {
    name: "Kình Dương",
    id: 57,
    hh: 4,
    isht: 1,
    sht: "Kình",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 4,
    ad: 1,
    type: "Hung",
    typ: 2,
    zone: 1,
    htg: "Dương vật",
    lvl: {
      1: "H",
      2: "Đ",
      3: "H",
      4: "H",
      5: "Đ",
      6: "H",
      7: "H",
      8: "Đ",
      9: "H",
      10: "H",
      11: "Đ",
      12: "H"
    }
  },
  {
    name: "Đà La",
    id: 58,
    hh: 4,
    isht: 1,
    sht: "Đà",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 4,
    ad: -1,
    type: "Hung",
    typ: 2,
    zone: 1,
    htg: "Chân tay",
    lvl: {
      1: "H",
      2: "Đ",
      3: "H",
      4: "H",
      5: "Đ",
      6: "H",
      7: "H",
      8: "Đ",
      9: "H",
      10: "H",
      11: "Đ",
      12: "H"
    }
  },
  {
    name: "Thiên Khôi",
    id: 59,
    hh: 6,
    isht: 1,
    sht: "Khôi",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 3,
    ad: 1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Đầu"
  },
  {
    name: "Thiên Việt",
    id: 60,
    hh: 6,
    isht: 1,
    sht: "Việt",
    iptt: true,
    ans: 0,
    sort: 1,
    grp: 3,
    ad: -1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Hai vai"
  },
  {
    name: "Tả Phụ",
    id: 61,
    hh: 5,
    isht: 1,
    sht: "Tả",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: 1,
    type: "Trợ",
    typ: 1,
    zone: 1,
    htg: "Lông mày trái",
    nn: [-1e3, 1]
  },
  {
    name: "Hữu Bật",
    id: 62,
    hh: 2,
    isht: 1,
    sht: "Hữu",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: -1,
    type: "Trợ",
    typ: 1,
    zone: 1,
    htg: "Lông mày phải",
    nn: [-1e3, -1]
  },
  {
    name: "Văn Xương",
    id: 63,
    hh: 4,
    isht: 1,
    sht: "Xương",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: 1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Thính giác",
    lvl: {
      1: "H",
      2: "Đ",
      3: "H",
      4: "H",
      5: "Đ",
      6: "Đ",
      7: "H",
      8: "Đ",
      9: "H",
      10: "H",
      11: "Đ",
      12: "Đ"
    },
    nn: [-1e3, 1]
  },
  {
    name: "Văn Khúc",
    id: 64,
    hh: 2,
    isht: 1,
    sht: "Khúc",
    iptt: true,
    ans: 2,
    sort: 1,
    grp: 3,
    ad: -1,
    type: "Văn",
    typ: 1,
    zone: 1,
    htg: "Vú phải",
    lvl: {
      2: "Đ",
      5: "Đ",
      6: "Đ",
      8: "Đ",
      11: "Đ",
      12: "Đ"
    },
    nn: [-1e3, -1]
  },
  {
    name: "Hóa Lộc",
    id: 65,
    hh: 3,
    isht: 1,
    sht: "Lộc",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 6,
    ad: 0,
    type: "Tài",
    typ: 1,
    zone: 1,
    htg: "Râu",
    colorpt: "#18b248"
  },
  {
    name: "Hóa Quyền",
    id: 66,
    hh: 3,
    isht: 1,
    sht: "Quyền",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 6,
    ad: 0,
    type: "Quyền",
    typ: 1,
    zone: 1,
    htg: "Gò má",
    notshow: false,
    colorpt: "#982b8b"
  },
  {
    name: "Hóa Khoa",
    id: 67,
    hh: 2,
    isht: 1,
    sht: "Khoa",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 6,
    ad: 0,
    type: "Văn,Phúc",
    typ: 1,
    zone: 1,
    notshow: false,
    colorpt: "#00c6da"
  },
  {
    name: "Hóa Kị",
    id: 68,
    hh: 2,
    isht: 1,
    sht: "Kị",
    iptt: true,
    ans: 0,
    sort: 300,
    grp: 7,
    ad: 0,
    type: "Ám",
    typ: 2,
    zone: 1,
    htg: "Lưỡi",
    notshow: false,
    colorpt: "#222222",
    lvl: {
      1: "H",
      2: "Đ",
      3: "H",
      4: "H",
      5: "Đ",
      6: "H",
      7: "H",
      8: "Đ",
      9: "H",
      10: "H",
      11: "Đ",
      12: "H"
    }
  },
  {
    name: "Ân Quang",
    id: 69,
    hh: 3,
    isht: 1,
    sht: "Quang",
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    grp: 8
  },
  {
    name: "Thiên Quý",
    id: 70,
    hh: 5,
    isht: 1,
    sht: "Quý",
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    grp: 8
  },
  {
    name: "Tam Thai",
    id: 71,
    hh: 2,
    isht: 1,
    sht: "Thai",
    ans: 2,
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    htg: "Trán",
    grp: 8
  },
  {
    name: "Bát Tọa",
    id: 72,
    hh: 3,
    isht: 1,
    sht: "Tọa",
    ans: 2,
    sort: 2,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    htg: "Cằm",
    grp: 8
  },
  {
    name: "Thai Phụ",
    id: 73,
    hh: 4,
    isht: 1,
    sht: "T.Phụ",
    ad: 0,
    type: "Văn",
    typ: 1,
    zone: 2,
    grp: 8
  },
  {
    name: "Phong Cáo",
    id: 74,
    hh: 5,
    isht: 1,
    sht: "Cáo",
    ad: 0,
    type: "Văn",
    typ: 1,
    zone: 2,
    grp: 8
  },
  {
    name: "Quốc Ấn",
    id: 75,
    hh: 5,
    isht: 1,
    sht: "Ấn",
    ad: 0,
    type: "Quyền",
    typ: 1,
    zone: 2
  },
  {
    name: "Đường Phù",
    id: 76,
    hh: 3,
    isht: 1,
    sht: "Đường",
    ad: 0,
    typ: 1,
    zone: 2
  },
  {
    name: "Long Trì",
    id: 77,
    hh: 2,
    isht: 1,
    sht: "Long",
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 2,
    htg: "Mũi",
    grp: 11
  },
  {
    name: "Phượng Các",
    id: 78,
    hh: 3,
    isht: 1,
    sht: "Phượng",
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 2,
    htg: "Tai"
  },
  {
    name: "Hoa Cái",
    id: 79,
    hh: 4,
    isht: 1,
    sort: 120,
    sht: "Cái",
    cir: "vtt2",
    cirTp: 5,
    ans: 1,
    ad: 0,
    typ: 1,
    zone: 2,
    grp: 11
  },
  {
    name: "Thiên Mã",
    id: 80,
    hh: 6,
    isht: 1,
    sht: "Mã",
    ans: 1,
    sort: 4,
    ad: 0,
    type: "Quý",
    typ: 1,
    zone: 1,
    htg: "Chân tay",
    lvl: {
      3: "Đ",
      6: "Đ"
    }
  },
  {
    name: "Thiên Khốc",
    id: 81,
    hh: 2,
    isht: 1,
    sht: "Khốc",
    ans: 1,
    sort: 4,
    ad: 0,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 1,
    lvl: {
      1: "Đ",
      2: "Đ",
      4: "Đ",
      7: "Đ",
      8: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Thiên Hư",
    id: 82,
    hh: 2,
    isht: 1,
    sht: "Hư",
    ans: 1,
    sort: 4,
    ad: 0,
    grp: 5,
    type: "Bại",
    typ: 2,
    zone: 1,
    lvl: {
      1: "Đ",
      2: "Đ",
      4: "Đ",
      7: "Đ",
      8: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Đào Hoa",
    id: 83,
    hh: 3,
    sort: 100,
    ans: 1,
    isht: 1,
    sht: "Đào",
    cir: "vtt2",
    ad: 0,
    type: "Dâm",
    typ: 1,
    zone: 1
  },
  {
    name: "Hồng Loan",
    id: 84,
    hh: 2,
    ans: 1,
    isht: 1,
    sht: "Hồng",
    ad: 0,
    type: "Dâm",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Hỉ",
    id: 85,
    hh: 2,
    ans: 1,
    isht: 1,
    sht: "Hỉ",
    ad: 0,
    type: "Hỉ",
    typ: 1,
    zone: 2
  },
  {
    name: "Cô Thần",
    id: 86,
    hh: 5,
    ans: 1,
    isht: 1,
    sht: "Cô",
    ad: 0,
    type: "Bại",
    typ: 2,
    zone: 2
  },
  {
    name: "Quả Tú",
    id: 87,
    hh: 5,
    ans: 1,
    isht: 1,
    sht: "Quả",
    ad: 0,
    type: "Bại",
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên Hình",
    id: 88,
    hh: 6,
    isht: 1,
    iptt: true,
    sht: "Hình",
    ans: 2,
    sort: 3,
    ad: 0,
    type: "Hình",
    typ: 2,
    zone: 1,
    htg: "Da hay vết sẹo",
    lvl: {
      3: "Đ",
      4: "Đ",
      9: "Đ",
      10: "Đ"
    }
  },
  {
    name: "Thiên Diêu",
    id: 89,
    hh: 2,
    isht: 1,
    sht: "Diêu",
    ans: 2,
    sort: 3,
    ad: 0,
    type: "Dâm",
    typ: 2,
    zone: 1,
    htg: "Lông, tóc, bộ ngực",
    lvl: {
      3: "Đ",
      4: "Đ",
      10: "Đ",
      11: "Đ"
    }
  },
  {
    name: "Thiên Y",
    id: 90,
    hh: 2,
    isht: 1,
    sht: "Y",
    ad: 0,
    typ: 1,
    zone: 2
  },
  {
    name: "Lưu Hà",
    id: 91,
    hh: 2,
    isht: 1,
    sht: "Hà",
    ans: 0,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2
  },
  {
    name: "Kiếp Sát",
    id: 92,
    hh: 6,
    isht: 1,
    sht: "K.Sát",
    cir: "vtt2",
    sort: 120,
    cirTp: 5,
    ans: 1,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2
  },
  {
    name: "Phá Toái",
    id: 93,
    hh: 6,
    isht: 1,
    sht: "Toái",
    ans: 1,
    ad: 0,
    type: "Hung",
    typ: 1,
    zone: 2,
    htg: "Cuống họng"
  },
  {
    name: "Thiên Quan",
    id: 94,
    hh: 6,
    isht: 1,
    sht: "Quan",
    ad: 0,
    ans: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Phúc",
    id: 95,
    hh: 5,
    isht: 1,
    sht: "TPhúc",
    ad: 0,
    ans: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Văn Tinh",
    id: 96,
    hh: 6,
    isht: 1,
    sht: "Văn.T",
    ad: 0,
    type: "Tài",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Trù",
    id: 97,
    hh: 5,
    isht: 1,
    sht: "TTrù",
    ad: 0,
    ans: 0,
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Đức",
    id: 98,
    hh: 6,
    isht: 1,
    sht: "Th.Đức",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Nguyệt Đức",
    id: 99,
    hh: 6,
    isht: 1,
    sht: "Ng.Đức",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Giải",
    id: 100,
    hh: 6,
    isht: 1,
    sht: "T.Giải",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Địa Giải",
    id: 101,
    hh: 5,
    isht: 1,
    sht: "Đ.Giải",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Giải Thần",
    id: 102,
    hh: 3,
    isht: 1,
    sht: "G.Thần",
    ad: 0,
    type: "Phúc",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Tài",
    id: 103,
    hh: 5,
    isht: 1,
    sht: "Tài",
    ad: 0,
    type: "Trợ",
    typ: 1,
    zone: 2
  },
  {
    name: "Thiên Thọ",
    id: 104,
    hh: 5,
    isht: 1,
    sht: "Thọ",
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2
  },
  {
    name: "Đẩu Quân",
    id: 105,
    hh: 6,
    isht: 1,
    sht: "Đẩu.Q",
    ad: 0,
    type: "Phúc",
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên Thương",
    id: 106,
    hh: 5,
    isht: 1,
    sht: "Thương",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên Sứ",
    id: 107,
    hh: 2,
    isht: 1,
    sht: "Sứ",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Thiên La",
    id: 108,
    hh: 5,
    isht: 1,
    sht: "La",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Địa Võng",
    id: 109,
    hh: 5,
    isht: 1,
    sht: "Võng",
    ad: 0,
    typ: 2,
    zone: 2
  },
  {
    name: "Tướng Tinh",
    id: 110,
    hh: 5,
    isht: 1,
    sht: "T.Tinh",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Phan An",
    id: 111,
    hh: 4,
    isht: 1,
    sht: "P.An",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Tuế Dịch",
    id: 112,
    hh: 6,
    isht: 1,
    sht: "T.Dịch",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Tức Thần",
    id: 113,
    hh: 3,
    isht: 1,
    sht: "T.Thần",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Tai Sát",
    id: 114,
    hh: 3,
    isht: 1,
    sht: "Tai.S",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Thiên Sát",
    id: 115,
    hh: 3,
    isht: 1,
    sht: "Thiên.S",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Chỉ Bối",
    id: 116,
    hh: 3,
    isht: 1,
    sht: "Chỉ.B",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Nguyệt Sát",
    id: 117,
    hh: 3,
    isht: 1,
    sht: "Nguyệt.S",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Vong Thần",
    id: 118,
    hh: 3,
    isht: 1,
    sht: "Vong.T",
    cir: "vtt2",
    cirTp: 5,
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 2,
    zone: 3,
    htg: ""
  },
  {
    name: "Niên Giải",
    id: 119,
    hh: 2,
    isht: 1,
    sht: "Niên.G",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Nguyệt Giải",
    id: 120,
    hh: 3,
    isht: 1,
    sht: "Nguyệt.G",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Thiên Vu",
    id: 121,
    hh: 3,
    isht: 1,
    sht: "Thiên.V",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 3,
    htg: ""
  },
  {
    name: "Thiên Nguyệt",
    id: 122,
    hh: 3,
    isht: 1,
    sht: "Thiên.N",
    sort: 120,
    ad: 0,
    type: "Thọ",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Âm Sát",
    id: 123,
    hh: 2,
    isht: 1,
    sht: "Âm.S",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2,
    htg: ""
  },
  {
    name: "Dương Sát",
    id: 124,
    hh: 2,
    isht: 1,
    sht: "Dương.S",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 2,
    zone: 2,
    htg: ""
  },
  {
    name: "Âm Đức",
    id: 125,
    hh: 5,
    isht: 1,
    sht: "Âm.Đ",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 1,
    zone: 2,
    htg: ""
  },
  {
    name: "Dương Đức",
    id: 126,
    hh: 5,
    isht: 1,
    sht: "Dương.Đức",
    sort: 120,
    ad: 0,
    type: "Hung",
    typ: 1,
    zone: 2,
    htg: ""
  }
];
const TUHOAID = [64, 65, 66, 67];
const STAR_RULE = [87, 88];
const STAR_SIGN = [68, 69, 70, 71, 72, 73, 93, 94];
const STAR_LOCMA = [27, 79];
const ASSASSIN6 = [52, 53, 54, 55, 56, 57];
const BUFF6 = [58, 59, 60, 61, 62, 63];
const FAILURE6 = [17, 23, 31, 37, 80, 81];
const CR_TS = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
const STARSTRONG = [...TUHOAID, ...STAR_RULE, ...STAR_LOCMA, ...ASSASSIN6, ...BUFF6];
const STARLOOP1 = [15, 17, 23, 80, 81, 27, 56, 57, 79];
const CAN_HOA = {
  4: [5, 13, 3, 2],
  // Giap 'Liêm Trinh', 'Phá Quân', 'Vũ Khúc', 'Thái Dương'
  5: [1, 11, 0, 7],
  // At 'Thiên Cơ', 'Thiên Lương', 'Tử Vi', 'Thái Âm'
  6: [4, 1, 62, 5],
  // Binh 'Thiên Đồng', 'Thiên Cơ', 'Văn Xương', 'Liêm Trinh'
  7: [7, 4, 1, 9],
  // Dinh 'Thái Âm', 'Thiên Đồng', 'Thiên Cơ', 'Cự Môn'
  8: [8, 7, 61, 1],
  // Mau 'Tham Lang', 'Thái Âm', 'Hữu Bật', 'Thiên Cơ'
  9: [3, 8, 11, 63],
  // Ky 'Vũ Khúc', 'Tham Lang', 'Thiên Lương', 'Văn Khúc'
  0: [2, 3, 4, 7],
  // Canh 'Thái Dương', 'Vũ Khúc',  'Thiên Đồng','Thái Âm',
  1: [9, 2, 63, 62],
  // Tan 'Cự Môn', 'Thái Dương', 'Văn Khúc', 'Văn Xương'
  2: [11, 0, 60, 3],
  // Nham 'Thiên Lương', 'Tử Vi', 'Tả Phụ', 'Vũ Khúc'
  3: [13, 9, 7, 8]
  // Quy 'Phá Quân', 'Cự Môn', 'Thái Âm', 'Tham Lang'
};
function GETHOA(tcan = 1) {
  let myCan = {};
  myCan = { ...CAN_HOA };
  if (tcan === 0) {
    myCan[0] = [2, 3, 7, 4];
  }
  if (tcan === 2) {
    myCan[0] = [2, 3, 6, 4];
    myCan[8] = [8, 7, 2, 1];
    myCan[2] = [11, 0, 6, 3];
  }
  if (tcan === 3) {
    myCan[0] = [2, 3, 4, 10];
  }
  if (tcan === 4) {
    myCan[0] = [2, 3, 8, 4];
  }
  return myCan;
}
function findAllPositionsOfValue(obj, value) {
  const positions = [];
  for (const key of Object.keys(obj)) {
    obj[Number(key)].forEach((item, index) => {
      if (item === value) {
        positions.push({ parentKey: key, key: index });
      }
    });
  }
  return positions;
}
function getAllUniqueValues(obj) {
  const allValues = Object.values(obj).flat();
  const uniqueValues = [...new Set(allValues)];
  return uniqueValues;
}
function StarUseHoa(objHoa) {
  return getAllUniqueValues(objHoa);
}
function StarToHoaCan(objHoa) {
  const arrObj = {};
  const listStar = getAllUniqueValues(objHoa);
  listStar.forEach((idSTAR) => {
    arrObj[Number(idSTAR)] = [[], [], [], []];
    const positions = findAllPositionsOfValue(objHoa, idSTAR);
    positions.forEach((item) => {
      arrObj[Number(idSTAR)][Number(item.key)].push(Number(item.parentKey));
    });
  });
  return arrObj;
}
const PHIHOA_COLOR = ["#038c00", "#6e0888", "#0e7cca", "#d90404"];
const PHIHOA_SYMBOL1 = ["A", "B", "C", "D"];
const TSNAME = [
  "Sinh",
  // 0
  "Dục",
  "Đới",
  "LQuan",
  "Vượng",
  "Suy",
  // 5
  "Bệnh",
  // 6
  "Tử",
  // 7
  "Mộ",
  // 8
  "Tuyệt",
  // 9
  "Thai",
  // 10
  "Dưỡng"
  // 11
];
const CAN_TSTB = [
  [7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6],
  // Canh ts
  [0, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  // Tân ts
  [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3],
  // Nhâm ts
  [3, 2, 1, 0, 11, 10, 9, 8, 7, 6, 5, 4],
  // Quý ts
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0],
  // Giáp ts
  [6, 5, 4, 3, 2, 1, 0, 11, 10, 9, 8, 7],
  // Ất ts
  [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // Bính ts
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 10],
  // Đinh ts
  [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // Mậu ts
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 11, 10]
  // Kỷ ts
];
function buildDateInfo(lnInfo) {
  const data = {
    sn: {
      y: lnInfo.sun.year(),
      m: lnInfo.sun.month() + 1,
      d: lnInfo.sun.date(),
      h: lnInfo.sun.hour(),
      i: lnInfo.sun.minute()
    },
    ln: { y: lnInfo.y, m: lnInfo.m, d: lnInfo.d, h: lnInfo.h, mt: lnInfo.stcc.ml, yt: lnInfo.stcc.yl },
    bs: {
      y: CanChi.create(CAN.indexOf(lnInfo.ycc[0]), CHI.indexOf(lnInfo.ycc[1]), LTHG.indexOf(lnInfo.ycc.join(" "))),
      m: CanChi.create(CAN.indexOf(lnInfo.mcc[0]), CHI.indexOf(lnInfo.mcc[1]), LTHG.indexOf(lnInfo.mcc.join(" "))),
      d: CanChi.create(CAN.indexOf(lnInfo.dcc[0]), CHI.indexOf(lnInfo.dcc[1]), LTHG.indexOf(lnInfo.dcc.join(" "))),
      h: CanChi.create(
        CAN.indexOf(lnInfo.h12cc[lnInfo.h][0]),
        CHI.indexOf(lnInfo.h12cc[lnInfo.h][1]),
        LTHG.indexOf(lnInfo.h12cc[lnInfo.h].join(" "))
      )
    },
    tk: {
      y: CanChi.create(
        CAN.indexOf(lnInfo.stcc.ycc[0]),
        CHI.indexOf(lnInfo.stcc.ycc[1]),
        LTHG.indexOf(lnInfo.stcc.ycc.join(" "))
      ),
      m: CanChi.create(
        CAN.indexOf(lnInfo.stcc.mcc[0]),
        CHI.indexOf(lnInfo.stcc.mcc[1]),
        LTHG.indexOf(lnInfo.stcc.mcc.join(" "))
      ),
      d: CanChi.create(CAN.indexOf(lnInfo.dcc[0]), CHI.indexOf(lnInfo.dcc[1]), LTHG.indexOf(lnInfo.dcc.join(" "))),
      h: CanChi.create(
        CAN.indexOf(lnInfo.h12cc[lnInfo.h][0]),
        CHI.indexOf(lnInfo.h12cc[lnInfo.h][1]),
        LTHG.indexOf(lnInfo.h12cc[lnInfo.h].join(" "))
      )
    },
    m12: parse12ToIdx(lnInfo.m12cc),
    h12: parse12ToIdx(lnInfo.h12cc),
    m12k: parse12ToIdx(lnInfo.stcc.m12cc),
    tki: lnInfo.tk
  };
  return data;
}
function parse12ToIdx(data) {
  const obj12data = [];
  for (let i = 0; i < 12; i += 1) {
    obj12data[i] = CanChiPair.create(CAN.indexOf(data[i][0]), CHI.indexOf(data[i][1]));
  }
  return obj12data;
}

export { PHIHOA_SYMBOL1 as $, AREA_NAME as A, CHI_3HH as B, CHI as C, THAP as D, HH_THAP as E, FAILURE6 as F, GETHOA as G, HH as H, containsNumber as I, STARLOOP1 as J, ADTN as K, LTHG as L, SKB as M, NAPAM as N, TKN_MONTH as O, TSNAME as P, getLunaBornText as Q, getSexText as R, SMI as S, TKN as T, validateAllConfig as U, updateConfig as V, LsTypeSlug as W, getBaseText as X, arrH1 as Y, ZolkName as Z, AREA_NAME_FULL as _, CAN as a, typeLsName as a0, typeBanTCP as a1, PHIHOA_COLOR as a2, levelPhiHoaMsg as a3, changeCanTypeMsg as a4, yearLoopStarMsg as a5, hideStarMsg as a6, CAN_AD as b, CAN_HH as c, CHI_AD as d, CHI_HH as e, LTHG_NA as f, LTHG_HH as g, TKN_PN as h, configDefault as i, TH as j, CfgValue as k, StlkName as l, hoa2IchingIdx as m, numbStringToArr as n, CAN_HOA as o, buildDateInfo as p, StarToHoaCan as q, StarUseHoa as r, SM as s, STARSTRONG as t, STAR_SIGN as u, CR_TS as v, idxTHAP as w, xtngl as x, CHI_CAN as y, idxTSTutru as z };
