import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import 'dayjs/locale/vi.js';
/* empty css         */
import { useStore } from '@nanostores/react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import React, { startTransition, lazy, Suspense, useState, useMemo, useEffect, memo, useCallback, useRef } from 'react';
import { c as configDefault, a as HoroscopeBuildGps, b as HoroHelp, n as numbStringToArr, C as CfgValue, H as HOROSCOPE_CONFIG, A as APP_ROUTES, v as validateAllConfig, u as updateConfig, d as CHI, e as CAN, g as getLunaBornText, T as TrungChauWarning, f as createShareUrl, I as IconSettings, h as CSVTable, E as ExplainLS, i as arrH1, j as getSexText, S as SM, k as IconSchedule, l as IconAutoStories, m as IconVisibility, o as IconLoop, p as IconSyncDisabled, q as IconRotate90DegreesCcw, r as IconBlock, s as IconStarRate, t as IconStarBorder, w as IconViewTimeline, x as typeLsName, y as IconAutoAwesomeMotion, z as typeBanTCP, P as PHIHOA_COLOR, B as levelPhiHoaMsg, D as changeCanTypeMsg, F as IconVisibilityOff, G as yearLoopStarMsg, J as hideStarMsg, K as IconStars, L as IconGrade, M as IconStarOutline, N as IconMale, O as IconFemale, Q as PHIHOA_SYMBOL1, R as AppUI } from './BIaGjqnI.js';
import { S as SolarCalculator } from './CpgQb43x.js';
import debounce from 'lodash/debounce.js';
import { map, atom } from 'nanostores';
import { i as initFuse, f as findNearestCity, C as CitySearch } from './DiprJFgG.js';
import { i as CfgValue$1 } from './CpcYxhgG.js';
import BatQuaiMenhTungBo from './DRo8N7sk.js';
import PageContentStatic from './sceLOtPC.js';
import { G as GEMINI_AI_LINKS } from './B4isgTGt.js';
import { Modal, MantineProvider } from '@mantine/core';
/* empty css         */
import { YearPicker } from '@mantine/dates';

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
        i: 0,
        ys: 0,
        ms: 0,
        ds: 0,
        hs: 0,
        is: 0,
        solarNoon: "",
        solarNoonUtc: null
      },
      ln: { y: 0, m: 0, d: 0, h: 0, mt: 0, yt: 0 },
      bs: {
        y: [0, 0, 0],
        m: [0, 0, 0],
        d: [0, 0, 0],
        h: [0, 0, 0]
      },
      tk: {
        y: [0, 0, 0],
        m: [0, 0, 0],
        d: [0, 0, 0],
        h: [0, 0, 0]
      },
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
        i: 0,
        ys: 0,
        ms: 0,
        ds: 0,
        hs: 0,
        is: 0,
        solarNoon: "",
        solarNoonUtc: null
      },
      ln: { y: 0, m: 0, d: 0, h: 0, mt: 0, yt: 0 },
      bs: {
        y: [0, 0, 0],
        m: [0, 0, 0],
        d: [0, 0, 0],
        h: [0, 0, 0]
      },
      tk: {
        y: [0, 0, 0],
        m: [0, 0, 0],
        d: [0, 0, 0],
        h: [0, 0, 0]
      },
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
        i: 0,
        ys: 0,
        ms: 0,
        ds: 0,
        hs: 0,
        is: 0,
        solarNoon: "",
        solarNoonUtc: null
      },
      ln: { y: 0, m: 0, d: 0, h: 0, mt: 0, yt: 0 },
      bs: {
        y: [0, 0, 0],
        m: [0, 0, 0],
        d: [0, 0, 0],
        h: [0, 0, 0]
      },
      tk: {
        y: [0, 0, 0],
        m: [0, 0, 0],
        d: [0, 0, 0],
        h: [0, 0, 0]
      },
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
function getLsDataServerGps(utcBorn, utcView, sex = 1, cfgInput = [...configDefault], lat = 21.0285, lon = 105.8333) {
  try {
    let validBorn = utcBorn;
    let validView = utcView;
    if (!isValidDate(utcBorn.toDate()) || !isValidDate(utcView.toDate())) {
      console.error("Invalid input dates:", { born: utcBorn, view: utcView });
      const now = dayjs();
      validBorn = now;
      validView = now;
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
    const horoClean = new HoroscopeBuildGps({
      sex,
      born: validBorn,
      view: validView,
      cfg,
      lat,
      lon
    });
    delete horoClean.starPlacer;
    delete horoClean.circlePlacer;
    delete horoClean.zoneBuilder;
    delete horoClean.calculationHelper;
    delete horoClean.arrIdxChuyenLoc;
    delete horoClean.str2hc;
    delete horoClean.str2u;
    delete horoClean.arrCkZone;
    delete horoClean.countLoop;
    delete horoClean.HOA;
    delete horoClean.numberStarCol1;
    delete horoClean.numberStarCol2;
    delete horoClean.idxCheckZone;
    delete horoClean.tpCan;
    delete horoClean.adyetk;
    delete horoClean.dtc;
    try {
      horoHelp = new HoroHelp(horoClean);
      horoClean.cach.base = getInfoCach(horoClean);
    } catch (error) {
      console.error("Error in HoroHelp or getInfoCach:", error);
      horoClean.cach.base = {};
    }
    return validateHoroMap(horoClean, sex, cfg);
  } catch (error) {
    console.error("Error in getLsDataServer:", error);
    return createDefaultHoroMap(sex, cfgInput);
  }
}

function compressConfig(cf) {
  if (!cf) return "";
  try {
    const part1 = cf.substring(0, 8);
    const part2 = cf.substring(8, 16);
    const part3 = cf.substring(16);
    const compressed1 = BigInt(part1).toString(36);
    const compressed2 = BigInt(part2).toString(36);
    const compressed3 = BigInt(part3).toString(36);
    return `${compressed1}-${compressed2}-${compressed3}`;
  } catch (e) {
    console.warn("Failed to compress config:", cf, e);
    return cf;
  }
}
function decompressConfig(compressed, originalLength = 23) {
  if (!compressed) return "";
  try {
    if (/^\d+$/.test(compressed)) return compressed.padStart(originalLength, "0");
    const parts = compressed.split("-");
    if (parts.length !== 3) {
      throw new Error("Invalid compressed format");
    }
    const [part1, part2, part3] = parts;
    const decompressed1 = BigInt(parseInt(part1, 36)).toString().padStart(8, "0");
    const decompressed2 = BigInt(parseInt(part2, 36)).toString().padStart(8, "0");
    const decompressed3 = BigInt(parseInt(part3, 36)).toString().padStart(7, "0");
    return decompressed1 + decompressed2 + decompressed3;
  } catch (e) {
    console.warn("Failed to decompress config:", compressed, e);
    return "";
  }
}

dayjs.extend(utc);
function parseDateFromArrStringGps(parts, includeMinutes = true) {
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
    const utcDate = dayjs.utc(`${year}-${month + 1}-${day} ${hour}:${minute}`);
    return utcDate;
  } catch (error) {
    console.error("Error parsing date components GPS:", error);
    return dayjs();
  }
}
function getDefaultInfoGps() {
  return {
    dtBornUTC: dayjs(),
    sex: 1,
    strBorn: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    tkccBorn: "giap-thin-tan-mui-mau-ty-nham-tuat",
    dtViewUTC: dayjs(),
    strView: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    cfg: [...configDefault],
    key: "err",
    keyUrl: "err",
    lat: 21.0285,
    // Hanoi default
    lon: 105.8333
  };
}
function buildUrlForGpsMinimal(vBornUTC, vViewUTC, sex, cfg, lat, lon) {
  const dtBornUTC = vBornUTC ?? dayjs();
  const dtViewUTC = vViewUTC ?? dayjs();
  const bornParam = `${dtBornUTC.format("YYYY-MM-DD-HH-mm")}`;
  const viewParam = `${dtViewUTC.format("YYYY-MM-DD-HH-mm")}`;
  const cfgParam = compressConfig(cfg.join(""));
  let url = `?s=${sex}&b=${bornParam}&v=${viewParam}&cf=${cfgParam}`;
  if (lat !== void 0 && lon !== void 0) {
    url += `&loc=${lat.toFixed(7)},${lon.toFixed(7)}`;
  }
  const strBorn = `${dtBornUTC.format("YYYY-MM-DD-HH-mm")}`;
  const strView = `${dtViewUTC.format("YYYY-MM-DD-HH-mm")}`;
  return {
    url,
    urlArr: [url],
    sex,
    dtBornUTC,
    strBorn,
    tkccBorn: "",
    dtViewUTC,
    strView,
    cfg,
    key: ""
  };
}
function GetInfoFromURLGpsMinimal(url) {
  try {
    const params = new URLSearchParams(url.split("?")[1]);
    const sexParam = params.get("s");
    const sex = sexParam === null ? 1 : Number(sexParam);
    if (Number.isNaN(sex) || sex !== 0 && sex !== 1) {
      console.error("Invalid sex parameter:", sexParam);
      return getDefaultInfoGps();
    }
    const bornParam = params.get("b");
    if (!bornParam) return getDefaultInfoGps();
    const bornDelimiter = bornParam.includes("-") ? "-" : ".";
    const bornParts = bornParam.split(bornDelimiter);
    const dtBornUTC = parseDateFromArrStringGps(bornParts, true);
    if (!dtBornUTC) {
      console.error("Invalid birth date:", bornParam);
      return getDefaultInfoGps();
    }
    const viewParam = params.get("v");
    if (!viewParam) return getDefaultInfoGps();
    const viewDelimiter = viewParam.includes("-") ? "-" : ".";
    const viewParts = viewParam.split(viewDelimiter);
    const dtViewUTC = parseDateFromArrStringGps(viewParts, false);
    if (!dtViewUTC) {
      console.error("Invalid view date:", viewParam);
      return getDefaultInfoGps();
    }
    const cfgStr = params.get("cf") || "";
    const decompressedCfgStr = cfgStr ? decompressConfig(cfgStr) : "";
    const cfg = decompressedCfgStr ? numbStringToArr(decompressedCfgStr) : [...configDefault];
    if (!Array.isArray(cfg) || cfg.some((val) => typeof val !== "number")) {
      console.error("Invalid config:", cfgStr, "decompressed:", decompressedCfgStr);
      return getDefaultInfoGps();
    }
    let lat;
    let lon;
    const locParam = params.get("loc");
    if (locParam && locParam.includes(",")) {
      const [latStr, lonStr] = locParam.split(",");
      lat = parseFloat(latStr.trim());
      lon = parseFloat(lonStr.trim());
    } else {
      const latParam = params.get("lat");
      const lonParam = params.get("lon");
      lat = latParam ? parseFloat(latParam) : void 0;
      lon = lonParam ? parseFloat(lonParam) : void 0;
    }
    const strBorn = `${dtBornUTC.format("YYYY-MM-DD HH:mm:ss")}`;
    const strView = `${dtViewUTC.format("YYYY-MM-DD HH:mm:ss")}`;
    return {
      sex,
      dtBornUTC,
      strBorn,
      tkccBorn: "",
      dtViewUTC,
      strView,
      cfg,
      key: "",
      keyUrl: "",
      lat,
      lon
    };
  } catch (error) {
    console.error("Error parsing minimal GPS URL:", error);
    return getDefaultInfoGps();
  }
}

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

dayjs.extend(utc);
const $horoscope = map({
  sex: 1,
  vBornUTC: dayjs(),
  vViewUTC: dayjs(),
  lon: 105.8333,
  lat: 21.0285,
  cfgLs: [1],
  first: false,
  copyState: false,
  copyLS: false
});
const $location = map({
  citySearch: "",
  cityList: [],
  isDropdownOpen: false,
  geoData: {
    lat: 21.0285,
    lon: 105.8333,
    name: "Hà Nội, Việt Nam",
    timezone: "Asia/Ho_Chi_Minh",
    country: "Vietnam"
  },
  manuallySelected: false,
  mapCenter: [21.0285, 105.8333],
  zoom: 6,
  markerPosition: [21.0285, 105.8333],
  selectedTimezone: "Asia/Ho_Chi_Minh",
  targetTimezone: null,
  targetOffset: null,
  timezoneDisplay: "Múi giờ: Asia/Ho_Chi_Minh (Offset: 7h)",
  error: null
});
const $ui = map({
  isClient: false,
  fontsPreloaded: false,
  showCanvas: false,
  showNewConfigPanel: true,
  showLocationPanel: false,
  isPanelExiting: false,
  isLocationPanelExiting: false
});
const $actions = map({
  fnDownloadCall: 0,
  fnCopyCall: 0,
  fnExportNote: 0,
  fnSocialShare: 0,
  socialPlatform: "",
  isCopying: false
});
const $lsObj = atom(null);
const $lstUrlArr = map({
  url: "?s=1&b=2024.01.01.12.00&v=2024.01.01.12&c=1&lat=21.0285&lon=105.8333",
  urlArr: ["?s=1&b=2024.01.01.12.00&v=2024.01.01.12&c=1&lat=21.0285&lon=105.8333"],
  sex: 1,
  dtBornUTC: dayjs(),
  strBorn: "2024-01-01-12-00",
  tkccBorn: "",
  dtViewUTC: dayjs(),
  strView: "2024-01-01-12",
  cfg: [1],
  key: ""
});
const initGpsStore = () => {
  if (typeof window === "undefined") return;
  $ui.setKey("isClient", true);
  const pathName = getPathName();
  const searchParams = getSearchParams();
  const urlData = GetInfoFromURLGpsMinimal(`${pathName}?${searchParams.toString()}`);
  const initialCfg = validateAllConfig(urlData.cfg);
  $horoscope.set({
    vBornUTC: urlData.dtBornUTC,
    vViewUTC: urlData.dtViewUTC,
    lon: urlData.lon ?? 105.8333,
    lat: urlData.lat ?? 21.0285,
    sex: urlData.sex,
    cfgLs: initialCfg,
    first: false,
    copyState: false,
    copyLS: false
  });
  if (urlData.lat !== void 0 && urlData.lon !== void 0) {
    fetchReverseGeocode(urlData.lat, urlData.lon);
  }
  initFuse();
  calculateLsData();
};
const fetchReverseGeocode = async (lat, lon) => {
  try {
    const cityInfo = await findNearestCity(lat, lon);
    if (cityInfo) {
      let locationName = cityInfo.city;
      if (cityInfo.province && cityInfo.province !== cityInfo.city) {
        locationName += `, ${cityInfo.province}`;
      }
      locationName += `, ${cityInfo.country}`;
      updateLocationOnly(lat, lon, locationName, cityInfo.timezone, cityInfo.country, false);
      $location.setKey("manuallySelected", true);
      return;
    }
  } catch (_e) {
  }
  const name = `Tọa độ: ${lat.toFixed(4)}°, ${lon.toFixed(4)}°`;
  updateLocationOnly(lat, lon, name, void 0, void 0, false);
  $location.setKey("manuallySelected", true);
};
const updateLocationOnly = (lat, lon, name, timezoneName, country, shouldZoom = false) => {
  let normalizedLon = lon;
  while (normalizedLon > 180) normalizedLon -= 360;
  while (normalizedLon < -180) normalizedLon += 360;
  const currentLoc = $location.get();
  const updates = {
    markerPosition: [lat, normalizedLon],
    geoData: {
      lat,
      lon: normalizedLon,
      name,
      timezone: timezoneName,
      // Will be updated below if calculated
      country
    },
    error: null
  };
  if (shouldZoom) {
    updates.mapCenter = [lat, normalizedLon];
    updates.zoom = 10;
  } else {
    updates.mapCenter = [lat, normalizedLon];
  }
  let finalTzName = timezoneName;
  let finalOffset = 7;
  try {
    const summary = SolarCalculator.getTimezoneSummary({
      lat,
      lon: normalizedLon,
      date: /* @__PURE__ */ new Date(),
      timezoneName
    });
    finalTzName = summary.tzName;
    finalOffset = summary.tzOffsetInit;
  } catch (_e) {
    updates.error = "Không xác định được múi giờ tại vị trí này. Vui lòng chọn vị trí trên đất liền hoặc chọn múi giờ thủ công.";
    updates.targetTimezone = null;
    updates.targetOffset = null;
    $location.set({ ...currentLoc, ...updates });
    return;
  }
  if (updates.geoData) {
    updates.geoData.timezone = finalTzName;
  }
  updates.targetTimezone = finalTzName;
  updates.targetOffset = finalOffset;
  updates.timezoneDisplay = `${finalTzName} (Offset: ${finalOffset}h)`;
  updates.selectedTimezone = finalTzName || currentLoc.selectedTimezone;
  $location.set({ ...currentLoc, ...updates });
  debouncedCalculateLsData();
};
const calculateLsDataInternal = () => {
  const loc = $location.get();
  const horo = $horoscope.get();
  const lat = loc.geoData?.lat ?? 21.0285;
  const lon = loc.geoData?.lon ?? 105.8333;
  const urlInfo = buildUrlForGpsMinimal(horo.vBornUTC, horo.vViewUTC, horo.sex, horo.cfgLs, lat, lon);
  $lstUrlArr.set(urlInfo);
  try {
    const data = getLsDataServerGps(horo.vBornUTC, horo.vViewUTC, horo.sex, horo.cfgLs, lat, lon);
    console.log("data solarNoon", data.dtb.sn.solarNoon);
    startTransition(() => {
      $lsObj.set(data);
    });
    debouncedUpdateUrl();
  } catch (error) {
    console.error("Error fetching horoscope data:", error);
  }
};
let lastCalcSignature = "";
const calculateLsData = () => {
  const loc = $location.get();
  const horo = $horoscope.get();
  const lat = loc.geoData?.lat ?? 21.0285;
  const lon = loc.geoData?.lon ?? 105.8333;
  const signature = JSON.stringify({
    born: horo.vBornUTC.format("YYYY-MM-DD-HH-mm"),
    view: horo.vViewUTC.format("YYYY-MM-DD-HH"),
    sex: horo.sex,
    cfg: horo.cfgLs,
    lat: lat.toFixed(4),
    lon: lon.toFixed(4)
  });
  if (signature === lastCalcSignature && $lsObj.get()) {
    return;
  }
  lastCalcSignature = signature;
  calculateLsDataInternal();
};
const debouncedCalculateLsData = debounce(() => {
  requestAnimationFrame(() => {
    calculateLsDataInternal();
    const loc = $location.get();
    const horo = $horoscope.get();
    const lat = loc.geoData?.lat ?? 21.0285;
    const lon = loc.geoData?.lon ?? 105.8333;
    lastCalcSignature = JSON.stringify({
      born: horo.vBornUTC.format("YYYY-MM-DD-HH-mm"),
      view: horo.vViewUTC.format("YYYY-MM-DD-HH"),
      sex: horo.sex,
      cfg: horo.cfgLs,
      lat: lat.toFixed(4),
      lon: lon.toFixed(4)
    });
  });
}, 300);
const updateURL = (url) => {
  if (typeof window === "undefined") return;
  const cleanUrl = url.replace(/\/tu-vi\/tu-vi\//, "/tu-vi/");
  if (window.location.pathname + window.location.search !== cleanUrl) {
    window.history.pushState({}, "", cleanUrl);
  }
};
const debouncedUpdateUrl = debounce(() => {
  if (typeof window !== "undefined" && window.location.search.includes("b=1895")) return;
  $lstUrlArr.get();
  const horo = $horoscope.get();
  const currentType = horo.cfgLs[CfgValue.typeLs];
  const config = HOROSCOPE_CONFIG.find((c) => c.typeLs === currentType) || HOROSCOPE_CONFIG[0];
  const currentPath = window.location.pathname;
  let basePath = "/tu-vi-tu-tru";
  let targetSlug = config.tvPage.slug;
  for (const route of APP_ROUTES) {
    if (currentPath.includes(route.basePath)) {
      basePath = route.basePath;
      targetSlug = config[route.configKey].slug;
      break;
    }
  }
  const slugPath = normalizePath(targetSlug).replace(/^tu-vi\//, "");
  const newPath = `${basePath}/${slugPath}`;
  const currentUrlInfo = $lstUrlArr.get();
  const currentSearch = getSearchParams().toString();
  const newSearch = currentUrlInfo.url.substring(1);
  if (currentSearch !== newSearch || currentPath !== newPath) {
    requestAnimationFrame(() => {
      updateURL(newPath + currentUrlInfo.url);
    });
  }
}, 300);
const handleCitySelect = (city) => {
  const lat = city.lat;
  const lon = city.lng;
  let name = city.city;
  if (city.province && city.province !== city.city) {
    name += `, ${city.province}`;
  }
  name += `, ${city.country}`;
  const tz = city.timezone;
  updateLocationOnly(lat, lon, name, tz, city.country, true);
  $location.setKey("isDropdownOpen", false);
  $location.setKey("citySearch", city.city);
  $location.setKey("manuallySelected", true);
};
const handleDateTimeChange = (type, djDate) => {
  let newDate = djDate;
  if (newDate.year() < 1e3) newDate = newDate.year(1e3);
  if (newDate.year() > 2099) newDate = newDate.year(2099);
  const current = $horoscope.get();
  const utcDate = newDate;
  const currentViewDate = current.vViewUTC;
  let nextViewUTC = current.vViewUTC;
  if (type === "dateTimeBorn") {
    if (newDate.isAfter(currentViewDate)) {
      nextViewUTC = newDate;
    }
  } else {
    nextViewUTC = newDate;
  }
  $horoscope.set({
    ...current,
    vBornUTC: type === "dateTimeBorn" ? utcDate : current.vBornUTC,
    vViewUTC: nextViewUTC,
    first: true
  });
  if (!$ui.get().showCanvas) $ui.setKey("showCanvas", true);
  debouncedCalculateLsData();
};
const changeSetConfig = (typeCfg, value) => {
  const current = $horoscope.get();
  const newCfgLs = updateConfig(current.cfgLs, typeCfg, value);
  $horoscope.set({
    ...current,
    cfgLs: newCfgLs,
    first: true
  });
  if (!$ui.get().showCanvas) $ui.setKey("showCanvas", true);
  debouncedCalculateLsData();
};
const triggerAction = async (action, value) => {
  if (action === "isCopying") {
    $actions.setKey("isCopying", value);
    return;
  }
  if (action === "fnSocialShare" || action === "fnDownloadCall" || action === "fnCopyCall" || action === "fnExportNote") {
    const current = $actions.get()[action];
    $actions.setKey(action, current + 1);
    if (action === "fnSocialShare") {
      $actions.setKey("socialPlatform", "");
    }
    await new Promise((resolve) => setTimeout(resolve, action === "fnCopyCall" ? 1e3 : 200));
    $actions.setKey(action, 0);
  } else {
    $actions.setKey(action, value);
  }
};
const handleMapClick = (lat, lon, locationName, fixedTimezone, isManual = false) => {
  const name = locationName || `Tọa độ: ${lat.toFixed(4)}, ${lon.toFixed(4)}`;
  updateLocationOnly(lat, lon, name, fixedTimezone, void 0, false);
  if (isManual) {
    $location.setKey("manuallySelected", true);
  }
};

const MapPicker = lazy(
  () => import('./zPSr96Kh.js').then(n => n.a).then((module) => ({ default: module.MapPicker }))
);
function LocationPanel() {
  const ui = useStore($ui);
  const location = useStore($location);
  const { showLocationPanel } = ui;
  const { geoData, citySearch, isDropdownOpen, cityList, mapCenter, zoom, markerPosition, timezoneDisplay, error } = location;
  const handleHideLocationPanel = () => $ui.setKey("showLocationPanel", false);
  return /* @__PURE__ */ jsx(
    Suspense,
    {
      fallback: /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 z-50 h-full w-[400px] -translate-x-full transform overflow-y-auto bg-white shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 h-6 w-3/4 rounded-md bg-gray-200" }),
        /* @__PURE__ */ jsx("div", { className: "mb-4 h-32 rounded-md bg-gray-200" }),
        /* @__PURE__ */ jsx("div", { className: "mb-4 h-20 rounded-md bg-gray-200" })
      ] }) }),
      children: /* @__PURE__ */ jsx(
        "aside",
        {
          className: `fixed inset-y-0 left-0 z-50 w-full transform bg-white shadow-xl transition-transform ease-in-out md:w-[400px] ${showLocationPanel ? "translate-x-0" : "-translate-x-full"} overflow-y-auto`,
          "aria-label": "Location panel",
          children: /* @__PURE__ */ jsxs("div", { className: "max-h-screen overflow-y-auto p-4 sm:p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Chọn Địa Điểm Sinh" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleHideLocationPanel,
                  className: "rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600",
                  "aria-label": "Đóng panel",
                  children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-9999 mb-4", children: [
              /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-700", children: "Tìm thành phố / quốc gia hoặc chọn vị trí trên bản đồ" }),
              /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(CitySearch, { onCitySelect: handleCitySelect, className: "" }) })
            ] }),
            geoData && /* @__PURE__ */ jsx("div", { className: "my-4 rounded-md bg-amber-50 p-3", children: /* @__PURE__ */ jsxs("div", { className: "text-sm text-amber-700", children: [
              /* @__PURE__ */ jsx("strong", { children: "Địa điểm hiện tại:" }),
              " ",
              geoData.name,
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("strong", { children: "Tọa độ:" }),
              " ",
              geoData.lat.toFixed(4),
              "°, ",
              geoData.lon.toFixed(4),
              "°",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("strong", { children: "Múi giờ:" }),
              " ",
              timezoneDisplay || "Không xác định"
            ] }) }),
            error && /* @__PURE__ */ jsx("div", { className: "my-4 rounded-md bg-red-50 p-3 text-sm text-red-600", children: error }),
            /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
              Suspense,
              {
                fallback: /* @__PURE__ */ jsx("div", { className: "relative flex h-80 w-full items-center justify-center overflow-hidden rounded-lg border bg-gray-100", children: /* @__PURE__ */ jsx("div", { className: "text-gray-500", children: "Đang tải bản đồ..." }) }),
                children: /* @__PURE__ */ jsx(
                  MapPicker,
                  {
                    mapCenter,
                    zoom,
                    markerPosition,
                    onLocationSelect: (lat, lon) => {
                    },
                    onLocationConfirm: (lat, lon, locationName, fixedTimezone) => {
                      handleMapClick(lat, lon, locationName, fixedTimezone, true);
                    }
                  }
                )
              }
            ) })
          ] })
        }
      )
    }
  );
}

const LA_SO_WIDTH = 742;
const PAD_ZONE = 54;
const BORDER_WIDTH = 1;
function detectHourBoundaryConflict(lsObj) {
  const adminH = lsObj.dtb.sn.h;
  const adminM = lsObj.dtb.sn.i || 0;
  const solarH = lsObj.dtb.sn.hs;
  const solarM = lsObj.dtb.sn.is || 0;
  const hourToChi = (h) => {
    if (h >= 23 || h < 1) return 0;
    return Math.floor((h + 1) / 2);
  };
  const adminChiIdx = hourToChi(adminH);
  const solarChiIdx = hourToChi(solarH);
  const isConflict = adminChiIdx !== solarChiIdx;
  return {
    isConflict,
    adminHour: `${String(adminH).padStart(2, "0")}:${String(adminM).padStart(2, "0")}`,
    solarHour: `${String(solarH).padStart(2, "0")}:${String(solarM).padStart(2, "0")}`,
    adminChi: CHI[adminChiIdx],
    solarChi: CHI[solarChiIdx]
  };
}
function detectLeapMonthConflict(lsObj) {
  const lunarMonth = lsObj.dtb.ln.m;
  const solarTermMonth = lsObj.dtb.ln.mt;
  return {
    isConflict: lunarMonth !== solarTermMonth,
    lunarMonth,
    solarTermMonth
  };
}
function BirthTimeWarning({ lsObj }) {
  const hourConflict = detectHourBoundaryConflict(lsObj);
  const leapConflict = detectLeapMonthConflict(lsObj);
  if (!hourConflict.isConflict && !leapConflict.isConflict) return null;
  const warningWidth = LA_SO_WIDTH + PAD_ZONE + BORDER_WIDTH * 2;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "mx-auto mb-4 overflow-hidden rounded-lg border border-amber-300/60 bg-gradient-to-r from-amber-50 to-orange-50 shadow-sm",
      style: { maxWidth: `${warningWidth}px` },
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 border-b border-amber-200/60 bg-amber-100/50 px-4 py-2.5", children: /* @__PURE__ */ jsx("span", { className: "text-md font-bold text-red-500 font-sans uppercase", children: 'Lá số sinh vào thời điểm "dễ lệch lá số"' }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 px-4 py-3", children: [
          hourConflict.isConflict && /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-orange-200/60 bg-white/20 p-3", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-1.5 flex items-center gap-1.5", children: /* @__PURE__ */ jsx("span", { className: "text-[13px] font-bold text-orange-800 underline", children: "Giờ sinh sát ranh giới" }) }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-stone-700", children: [
              "Giờ hành chính ",
              /* @__PURE__ */ jsx("strong", { className: "text-orange-700", children: hourConflict.adminHour }),
              " thuộc giờ",
              " ",
              /* @__PURE__ */ jsx("strong", { className: "text-orange-700", children: hourConflict.adminChi }),
              ", nhưng Giờ Mặt Trời Thật",
              " ",
              /* @__PURE__ */ jsx("strong", { className: "text-orange-700", children: hourConflict.solarHour }),
              " lại thuộc giờ",
              " ",
              /* @__PURE__ */ jsx("strong", { className: "text-orange-700", children: hourConflict.solarChi }),
              ". Hệ thống đang dùng",
              " ",
              /* @__PURE__ */ jsxs("strong", { children: [
                "giờ Mặt Trời (",
                hourConflict.solarChi,
                ")"
              ] }),
              " để tính lá số."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "mt-1.5 text-xs italic text-red-500", children: [
              "Vui lòng kiểm tra lại ",
              /* @__PURE__ */ jsx("strong", { children: "phút sinh" }),
              " chính xác và ",
              /* @__PURE__ */ jsx("strong", { children: "nơi sinh" }),
              " (tọa độ) để đảm bảo giờ Mặt Trời được tính đúng."
            ] })
          ] }),
          leapConflict.isConflict && /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-amber-200/60 bg-white/20 p-3", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-1.5 flex items-center gap-1.5", children: /* @__PURE__ */ jsx("span", { className: "text-[13px] font-bold text-amber-800 underline", children: "Tháng Âm Lịch và Tháng Tiết Khí khác nhau" }) }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-stone-700", children: [
              "Tháng Âm Lịch là ",
              /* @__PURE__ */ jsxs("strong", { className: "text-amber-700", children: [
                "tháng ",
                leapConflict.lunarMonth
              ] }),
              " nhưng tháng Tiết Khí là ",
              /* @__PURE__ */ jsxs("strong", { className: "text-amber-700", children: [
                "tháng ",
                leapConflict.solarTermMonth
              ] }),
              ". Điều này xảy ra khi sinh vào ",
              /* @__PURE__ */ jsx("strong", { children: "tháng nhuận" }),
              " hoặc gần ranh giới giữa 2 tiết khí."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs italic text-red-500", children: "Lá số Tử Vi dùng tháng Âm Lịch, còn Bát Tự dùng tháng Tiết Khí. Hai hệ thống có thể cho kết quả khác nhau ở vùng biên." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-green-200/80 bg-green-50/50 p-3", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-1 flex items-center gap-1.5", children: /* @__PURE__ */ jsx("span", { className: "text-[13px] font-bold text-green-800", children: "Khuyến nghị" }) }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-stone-700", children: [
              "Trong các trường hợp giờ sinh sát biên hoặc tháng nhuận ",
              /* @__PURE__ */ jsx("strong", { children: "xem mệnh bằng Tử Vi dễ sai số lớn do nguyên tắc làm tròn âm lịch" }),
              ". Cần check lại kỹ thời gian sinh chính xác hơn nếu vẫn đúng thời gian sinh rồi thì nên ",
              /* @__PURE__ */ jsx("strong", { className: "text-green-700", children: "ưu tiên xem mệnh bằng Tứ Trụ (Bát Tự)" }),
              " được in ở giữa lá số. Bát Tự dùng giờ Mặt Trời và tháng Tiết Khí — chính xác hơn trong việc xác định mệnh."
            ] })
          ] })
        ] })
      ]
    }
  );
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

const ViewerLs = lazy(() => import('./Dw83eDOI.js'));
const HoroscopeHtmlClient = lazy(() => import('./CeQDcD_k.js'));
const LOADING_FONT_MESSAGE = "Đang tải phông chữ...";
const PROCESSING_DATA_MESSAGE = "Đang xử lý dữ liệu...";
const ResponsiveContainer = ({
  children,
  className = "",
  lsObj
}) => {
  const numberAddMore = lsObj?.css && lsObj.css > 11 ? (lsObj.css - 11) * 75 : 0;
  const canvasWidth = 799;
  const canvasHeight = 1017 + numberAddMore;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `relative w-full mx-auto ${className}`,
      style: {
        maxWidth: `${canvasWidth}px`,
        aspectRatio: `${canvasWidth} / ${canvasHeight}`
      },
      children
    }
  );
};
const LoadingMessage = ({ message }) => /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex h-full w-full items-center justify-center bg-slate-100/50 p-4 text-center", children: /* @__PURE__ */ jsx("p", { children: message }) });
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
    children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3 text-center text-2xl font-bold", children: "TinhMenhDo.com" }),
      /* @__PURE__ */ jsx("div", { className: "mb-3 text-center text-lg max-sm:text-base", children: birthInfo }),
      /* @__PURE__ */ jsx("div", { className: "text-md text-center max-sm:text-sm", children: lunarInfo }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 top-40 flex items-center justify-center text-center text-lg opacity-20 md:text-xl", children: "Click hoặc di chuột để hiện lá số" })
    ]
  }
);
const HoroscopeContentGps = ({
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
  return /* @__PURE__ */ jsx("div", { className: "relative h-full w-full", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(LoadingMessage, { message: "Đang tải lá số..." }), children: useHtmlRender ? /* @__PURE__ */ jsx(
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
  ) : /* @__PURE__ */ jsx(
    ViewerLs,
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
const ContentDisplayGps = React.memo(
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
      if (!fontsPreloaded) {
        return /* @__PURE__ */ jsx(LoadingMessage, { message: LOADING_FONT_MESSAGE });
      }
      return /* @__PURE__ */ jsx(
        HoroscopeContentGps,
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
          className: "hidden rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition-colors hover:bg-blue-200",
          children: isHtmlRender ? "🔄 Chuyển sang Canvas Rendering" : "🔄 Chuyển sang HTML/CSS Rendering (Beta)"
        }
      ) }),
      /* @__PURE__ */ jsx(ResponsiveContainer, { lsObj, className: `${hasLsData(lsObj) && !showCanvas ? "bg-gray-100" : ""}`, children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-full w-full transition-opacity duration-300 ease-in-out",
          style: { opacity: showCanvas ? 1 : 0.8 },
          onMouseEnter: () => !showCanvas && setShowCanvas(true),
          onTouchStart: () => !showCanvas && setShowCanvas(true),
          children: content
        }
      ) })
    ] });
  }
);
ContentDisplayGps.displayName = "ContentDisplayGps";

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
      return /* @__PURE__ */ jsxs("div", { className: "mx-auto my-3 px-2 text-center text-lg", children: [
        lsState.sex === 1 ? "Nam" : "Nữ",
        " ",
        lsObj.dtb.sn.y,
        "/",
        lsObj.dtb.sn.m,
        "/",
        lsObj.dtb.sn.d,
        " ",
        lsObj.dtb.sn.h,
        ":",
        lsObj.dtb.sn.i,
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

function isTrungChauPhai(type) {
  return type >= 6 && type <= 8;
}
function MainContentGps({
  configIconsRef,
  titleSeo,
  descSeo,
  fontClass,
  fontName,
  version,
  useHtmlRendering,
  getMySwal,
  lsAreaRef,
  CONTAINER_MIN_HEIGHT,
  lsObj: propLsObj
}) {
  const storeLsObj = useStore($lsObj);
  const lsObj = propLsObj || storeLsObj;
  const lsState = useStore($horoscope);
  const location = useStore($location);
  const { fontsPreloaded, showCanvas } = useStore($ui, { keys: ["fontsPreloaded", "showCanvas"] });
  const actions = useStore($actions);
  const { geoData, timezoneDisplay, error } = location;
  const { fnDownloadCall, fnCopyCall, fnExportNote, fnSocialShare, socialPlatform, isCopying } = actions;
  const solarNoonStr = useMemo(() => {
    if (!lsObj?.dtb?.sn?.solarNoon) return "";
    try {
      console.log("solarNoonStr", lsObj.dtb.sn.solarNoon);
      return dayjs(lsObj.dtb.sn.solarNoon);
    } catch (e) {
      console.warn("Failed to extract solar noon", e);
      return "";
    }
  }, [lsObj]);
  const setShowNewConfigPanel = (val) => startTransition(() => $ui.setKey("showNewConfigPanel", val));
  const setShowLocationPanel = (val) => startTransition(() => $ui.setKey("showLocationPanel", val));
  const setShowCanvas = (val) => $ui.setKey("showCanvas", val);
  const setSocialPlatform = (val) => $actions.setKey("socialPlatform", val);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { className: "sr-only", children: titleSeo }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 mb-4 px-3 2xl:absolute 2xl:top-12 2xl:left-5 2xl:z-20 2xl:w-[320px] 2xl:rounded-xl 2xl:bg-white 2xl:shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "group relative mx-auto flex max-w-2xl flex-col items-center justify-center p-4 md:p-5 xl:max-w-7xl", children: [
      /* @__PURE__ */ jsxs("span", { className: "mb-2 flex items-center gap-1 text-xs font-bold tracking-widest text-amber-600 uppercase", children: [
        /* @__PURE__ */ jsx("svg", { className: "h-3 w-3", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
            clipRule: "evenodd"
          }
        ) }),
        "Vị trí tính toán"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-3 text-center text-lg font-bold text-amber-700 transition-all duration-300 hover:text-amber-600 md:text-2xl", children: geoData?.name || "Hà Nội, Việt Nam" }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-wrap items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-full border border-red-300/15 bg-red-50/20 px-3 py-1 text-xs font-semibold text-stone-600", children: [
          geoData?.lat?.toFixed(4) || "21.0285",
          "°, ",
          geoData?.lon?.toFixed(4) || "105.8333",
          "°"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-full border border-red-300/15 bg-red-50/20 px-3 py-1 text-xs font-semibold text-stone-600", children: [
          "Múi giờ ",
          timezoneDisplay || "Asia/HCM (+7)"
        ] }),
        solarNoonStr && /* @__PURE__ */ jsxs("div", { className: "rounded-full border border-orange-300/20 bg-orange-50/20 px-3 py-1 text-xs font-semibold text-stone-600", children: [
          "Chính ngọ:",
          " ",
          /* @__PURE__ */ jsx(
            "time",
            {
              dateTime: solarNoonStr.format("YYYY/MM/DD HH:mm"),
              className: "font-bold text-red-600",
              title: solarNoonStr.format("YYYY/MM/DD HH:mm"),
              children: solarNoonStr.format("YYYY/MM/DD HH:mm")
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "gap-2", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setShowLocationPanel(true),
          className: "flex cursor-pointer items-center justify-center rounded-md border border-amber-500/50 bg-transparent px-6 py-1 text-xs font-bold text-amber-600 transition-colors hover:border-amber-500 hover:bg-amber-50/50",
          children: "Sửa Nơi Sinh"
        }
      ) }),
      /* @__PURE__ */ jsxs("details", { className: "mt-4 w-full text-center text-[11px] text-gray-950", children: [
        /* @__PURE__ */ jsx("summary", { className: "cursor-pointer font-medium text-amber-700/80 select-none hover:text-amber-800", children: "Tại sao cần Tọa độ chính xác?" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 text-center italic", children: [
          "Hệ thống tính Giờ Mặt Trời Thật tại tọa độ khai báo để xác định giờ sinh chuẩn xác hơn. Giờ Mặt Trời Thật (ghi màu ",
          /* @__PURE__ */ jsx("span", { className: "font-bold text-orange-600", children: "CAM" }),
          " ngay trên giờ hành chính 4 trụ giữa ảnh lá số). Thông thường lệch so với giờ hành chính nhà nước quy định, vì giờ thiên văn có sự thay đổi theo thời gian và vị trí địa lý."
        ] })
      ] })
    ] }) }),
    error && /* @__PURE__ */ jsx("div", { className: "mb-6 rounded-md bg-red-50 p-4 text-center text-red-600", children: error }),
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
      isTrungChauPhai(lsState.cfgLs[CfgValue$1.typeLs]) && /* @__PURE__ */ jsx(TrungChauWarning, {}),
      /* @__PURE__ */ jsx(BirthTimeWarning, { lsObj })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 my-4 text-sm max-lg:m-0 max-lg:mb-5 max-lg:p-0", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          id: "lsArea",
          className: `relative mx-auto max-lg:mb-5 max-lg:h-auto max-lg:w-full ${fontClass}`,
          ref: lsAreaRef,
          children: /* @__PURE__ */ jsx(
            ContentDisplayGps,
            {
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
              useHtmlRender: useHtmlRendering
            }
          )
        }
      ),
      hasLsData(lsObj) && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "w-full overflow-hidden px-2 pt-10 sm:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-2 mb-4 text-sm max-lg:m-0", children: [
          /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-1 flex max-w-4xl justify-center px-2", children: [
            "Link gửi lá số ấn",
            /* @__PURE__ */ jsxs(
              "svg",
              {
                className: "mx-1",
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
                  /* @__PURE__ */ jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
                ]
              }
            ),
            " ",
            "để copy link"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 flex max-w-4xl justify-center px-2", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center justify-between rounded-md border border-stone-200 bg-yellow-100/20 p-1 shadow-sm sm:w-[284px] xl:w-[678px]", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                readOnly: true,
                value: createShareUrl(),
                className: "w-full truncate bg-transparent px-3 py-1.5 text-xs text-stone-400 italic outline-none"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: async (e) => {
                  const btn = e.currentTarget;
                  await navigator.clipboard.writeText(createShareUrl());
                  const originalHtml = btn.innerHTML;
                  btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                  setTimeout(() => {
                    btn.innerHTML = originalHtml;
                  }, 2e3);
                },
                className: "ml-1 flex shrink-0 cursor-pointer items-center justify-center rounded bg-stone-100 p-2 text-stone-600 transition-colors hover:bg-stone-200",
                title: "Copy URL",
                children: /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
                      /* @__PURE__ */ jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
                    ]
                  }
                )
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 px-2 pb-6 sm:gap-3", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setShowNewConfigPanel(true),
                className: "flex w-[calc(50%-0.25rem)] cursor-pointer items-center justify-center gap-1.5 rounded-md border border-amber-200/80 bg-amber-50/50 py-2 text-[13px] font-medium text-amber-900 shadow-sm transition-colors hover:bg-amber-100/80 sm:w-[136px] sm:text-sm",
                children: [
                  /* @__PURE__ */ jsx(IconSettings, { className: "h-4 w-4 text-amber-700" }),
                  " Sửa lá số"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: async () => {
                  try {
                    setSocialPlatform("");
                    triggerAction("fnSocialShare");
                  } catch (error2) {
                    console.error("Social share error:", error2);
                  }
                },
                className: "flex w-[calc(50%-0.25rem)] cursor-pointer items-center justify-center gap-1.5 rounded-md border border-stone-200 bg-white py-2 text-[13px] font-medium text-stone-700 shadow-sm transition-colors hover:bg-stone-50 sm:w-[136px] sm:text-sm",
                children: [
                  /* @__PURE__ */ jsx("svg", { className: "h-4 w-4 text-stone-500", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M18 16.08c-0.76 0-1.44 0.3-1.96 0.77L8.91 12.7c0.05-0.23 0.09-0.46 0.09-0.7s-0.04-0.47-0.09-0.7l7.05-4.11c0.54 0.5 1.25 0.81 2.04 0.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 0.24 0.04 0.47 0.09 0.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c0.79 0 1.5-0.31 2.04-0.81l7.12 4.15c-0.05 0.21-0.08 0.43-0.08 0.66 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" }) }),
                  /* @__PURE__ */ jsx("span", { children: "Share Ảnh" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  triggerAction("fnDownloadCall");
                },
                className: "flex w-[calc(50%-0.25rem)] cursor-pointer items-center justify-center gap-1.5 rounded-md border border-stone-200 bg-white py-2 text-[13px] font-medium text-stone-700 shadow-sm transition-colors hover:bg-stone-50 sm:w-[136px] sm:text-sm",
                children: "Lưu ảnh"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: async () => {
                  if (isCopying) {
                    const swal = await getMySwal();
                    swal.fire({
                      title: "Thông báo",
                      text: "Đang trong quá trình copy, vui lòng đợi...",
                      icon: "info"
                    });
                    return;
                  }
                  try {
                    triggerAction("isCopying", true);
                    triggerAction("fnCopyCall");
                    triggerAction("isCopying", false);
                  } catch {
                    triggerAction("isCopying", false);
                    const swal = await getMySwal();
                    swal.fire({
                      title: "Lỗi",
                      text: "Có lỗi xảy ra khi copy lá số",
                      icon: "error"
                    });
                  }
                },
                className: "flex w-[calc(50%-0.25rem)] cursor-pointer items-center justify-center gap-1.5 rounded-md border border-stone-200 bg-white py-2 text-[13px] font-medium text-stone-700 shadow-sm transition-colors hover:bg-stone-50 sm:w-[136px] sm:text-sm",
                children: isCopying ? "Đang copy..." : "Copy lá số"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: async () => {
                  if (isCopying) {
                    const swal = await getMySwal();
                    swal.fire({
                      title: "Thông báo",
                      text: "Đang trong quá trình copy, vui lòng đợi...",
                      icon: "info"
                    });
                    return;
                  }
                  try {
                    triggerAction("fnExportNote");
                  } catch {
                    const swal = await getMySwal();
                    swal.fire({
                      title: "Thông báo",
                      text: "Có lỗi trong quá trình export lá số ấn F5 và thử lại",
                      icon: "error"
                    });
                  }
                },
                className: "flex w-[calc(50%-0.25rem)] cursor-pointer items-center justify-center gap-1.5 rounded-md border border-stone-200 bg-white py-2 text-[13px] font-medium text-stone-700 shadow-sm transition-colors hover:bg-stone-50 sm:w-[136px] sm:text-sm",
                children: "Ghi chú"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/hoc-tu-vi",
                target: "_blank",
                className: "flex w-[calc(50%-0.25rem)] cursor-pointer items-center justify-center gap-1.5 rounded-md border border-stone-200 bg-white py-2 text-[13px] font-medium text-stone-700 no-underline shadow-sm transition-colors hover:bg-stone-50 sm:w-[136px] sm:text-sm",
                children: "Học tử vi"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(PageContentStatic, { ls: lsObj }, "pcsID")
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 mb-10 w-full px-2 sm:px-6", children: /* @__PURE__ */ jsxs(
        "section",
        {
          className: "relative w-full overflow-hidden rounded-xl border-4 border-double border-amber-900/20 bg-[#FCFBF8] p-4 sm:p-6 lg:p-8",
          style: { minHeight: "300px" },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-6 flex items-center justify-center gap-3 border-b-2 border-dotted border-amber-900/20 pb-4 text-center font-serif text-2xl font-bold text-amber-900 md:text-3xl", children: "Chế Độ AI Tư Vấn" }),
            /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
              /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-8 max-w-5xl text-justify font-serif text-sm leading-relaxed text-stone-700 italic md:text-center md:text-[15px]", children: [
                "AI phân tích dựa trên dữ liệu sao bạn cung cấp.",
                " ",
                /* @__PURE__ */ jsx("strong", { children: "Lưu ý rằng đây chỉ là góc nhìn tham khảo, không thể thay thế sự đánh giá của các chuyên gia phong thủy hay tử vi chuyên sâu." }),
                " ",
                "Khi đi vào phân tích chi tiết, có thể có sai số nhất định do cách diễn giải hoặc phương pháp tính toán khác biệt. Bạn có thể tiếp tục đặt câu hỏi để phân tích sâu hơn về từng cung hoặc từng bộ sao cụ thể.",
                " ",
                /* @__PURE__ */ jsxs("span", { className: "mt-2 block", children: [
                  "(Lưu ý dùng đúng app tên ",
                  /* @__PURE__ */ jsx("strong", { className: "text-red-700", children: "Tinh Mệnh Đồ - Tử Vi & Bát Tự" }),
                  " để cho kết quả tốt nhất)"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-3", children: [
                /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/img/cach-xem-la-so-tu-vi-bang-AI-2.jpg",
                    className: "h-auto w-[85%] rounded-xl border-2 border-amber-900/20 shadow-[0_0px_0px_rgb(0,0,0,0.12)] transition-all hover:shadow-[0_8px_25px_rgba(180,83,9,0.3)] sm:w-full",
                    alt: "App Tinh Mệnh Đồ trên Gemini",
                    loading: "lazy"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/img/cach-xem-la-so-tu-vi-bang-AI-3.jpg",
                    className: "h-auto w-[85%] rounded-xl border-2 border-amber-900/20 shadow-[0_0px_0px_rgb(0,0,0,0.12)] transition-all hover:shadow-[0_8px_25px_rgba(180,83,9,0.3)] sm:w-full",
                    alt: "App Tinh Mệnh Đồ trên Gemini",
                    loading: "lazy"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/img/cach-xem-la-so-tu-vi-bang-AI-4.jpg",
                    className: "h-auto w-[85%] rounded-xl border-2 border-amber-900/20 shadow-[0_0px_0px_rgb(0,0,0,0.12)] transition-all hover:shadow-[0_8px_25px_rgba(180,83,9,0.3)] sm:w-full",
                    alt: "App Tinh Mệnh Đồ trên Gemini",
                    loading: "lazy"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-8 max-w-5xl font-serif text-sm leading-relaxed text-stone-800 md:text-[15px]", children: [
                /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
                  "Để có thể dùng ",
                  /* @__PURE__ */ jsx("b", { className: "text-amber-900", children: "App Tinh Mệnh Đồ trên Gemini" }),
                  ", quý vị cần có tài khoản",
                  " ",
                  /* @__PURE__ */ jsx("strong", { children: "Google đăng nhập sẵn" }),
                  ". Sau đó, hãy lấy đủ dữ liệu sao dạng text dưới đây bằng",
                  " ",
                  /* @__PURE__ */ jsx("b", { className: "text-red-700", children: "nút Copy" }),
                  " hoặc click nút mở",
                  " ",
                  /* @__PURE__ */ jsx("strong", { className: "text-amber-900", children: "Tinh Mệnh Đồ - Tử Vi & Bát Tự" }),
                  " ở phía dưới."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-amber-900/10 bg-white/50 p-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "mb-2", children: "Mặc định khi copy vào dán dữ liệu dưới vào AI sẽ chỉ phân tích tổng quát" }),
                  /* @__PURE__ */ jsx("p", { className: "mb-2 font-bold text-amber-900", children: "Gợi ý cách đặt câu hỏi cho AI:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "list-inside list-disc space-y-1.5 pl-2 text-stone-700 italic", children: [
                    /* @__PURE__ */ jsx("li", { children: '"Phân tích chi tiết hơn về lá số này"' }),
                    /* @__PURE__ */ jsx("li", { children: '"Phân tích các đại vận quan trọng"' }),
                    /* @__PURE__ */ jsx("li", { children: '"Các vấn đề nổi bật cần lưu ý của lá số ví dụ: sức khỏe, tình duyên, sự nghiệp, tài chính..."' })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mb-8 w-full overflow-x-auto rounded-lg shadow-sm", children: lsObj && /* @__PURE__ */ jsx(CSVTable, { ls: lsObj }) }),
              /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-5xl flex-col items-center justify-center border-t border-dashed border-amber-900/20 pt-4", children: [
                /* @__PURE__ */ jsx("p", { className: "mb-4 font-serif text-base font-bold text-stone-800", children: "Link mở ứng dụng:" }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: GEMINI_AI_LINKS.TU_VI_BAT_TU,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "fire-btn group flex w-full items-center justify-center gap-2 rounded-md px-8 py-3.5 text-center font-serif text-sm font-bold text-white shadow-md shadow-orange-900/20 transition-all hover:scale-105 sm:w-auto sm:text-base",
                    children: "TINH MỆNH ĐỒ - TỬ VI & BÁT TỰ"
                  }
                )
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
        lsObj && /* @__PURE__ */ jsx(BatQuaiMenhTungBo, { ls: lsObj }),
        /* @__PURE__ */ jsx(ExplainLS, {})
      ] }),
      descSeo && /* @__PURE__ */ jsx("h2", { className: "mt-8 mb-4 px-4 text-center font-serif text-lg text-amber-900/80 italic", children: descSeo }),
      /* @__PURE__ */ jsx("div", { className: "mb-30 w-full px-2 pt-20 sm:px-4 xl:px-8", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden border-4 border-double p-6 lg:p-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-8 flex items-center justify-center gap-3 border-b-2 border-dotted border-amber-900/20 pb-4 text-center font-serif text-2xl font-bold text-amber-900 md:text-3xl", children: "Hướng Dẫn Luận Giải" }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl space-y-8 font-serif text-sm leading-relaxed text-stone-800 sm:text-[15px]", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "mb-3 flex items-center gap-2 text-lg font-bold text-amber-900 md:text-xl", children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full border border-red-700/30 text-sm text-red-700", children: "1" }),
              "Nhập chính xác tọa độ & thời gian sinh"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "pl-10", children: [
              "Thời khắc giáng sinh là yếu tố tiên quyết trong thuật số phương Đông. Quý vị cần",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "cẩn trọng rà soát ngày giờ sinh" }),
              ". Tinh Mệnh Đồ ứng dụng thuật toán thiên văn tiên tiến để tự động quy đổi và ",
              /* @__PURE__ */ jsx("strong", { children: "tinh chỉnh Giờ Mặt Trời (Chính ngọ)" }),
              " theo tọa độ địa lý, đảm bảo độ chuẩn xác cao nhất cho lá số Tử Vi & Bát tự."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "mb-3 flex items-center gap-2 text-lg font-bold text-amber-900 md:text-xl", children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full border border-red-700/30 text-sm text-red-700", children: "2" }),
              "Khảo cứu bình chú & AI tư vấn"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "pl-10", children: [
              "Sau khi an sao lập số, hệ thống cung cấp góc nhìn tổng quan qua công cụ AI luận đoán. Quý vị hãy sử dụng tính năng ",
              /* @__PURE__ */ jsx("strong", { children: "[COPY Lấy Text]" }),
              " để trích xuất thông tin mã hóa, rồi mở chính xác phiên bản ",
              /* @__PURE__ */ jsx("strong", { children: "Tinh Mệnh Đồ - Tử Vi & Bát Tự" }),
              " trên Gemini, sau đó có thể tham vấn sâu hơn về lá số đại vận, hoặc tìm dụng thần Bát tự thông qua cách chat với AI.",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsxs("i", { children: [
                "Lưu ý: để có thể hỏi AI về lá số, quý vị cần có tài khoản Google đăng nhập sẵn.",
                /* @__PURE__ */ jsx("br", {}),
                " Để AI có khả năng giải đáp tốt nhất, quý vị cần có kiến thức cơ bản về thuật số phương Đông.",
                " "
              ] }),
              /* @__PURE__ */ jsx("br", {}),
              "Tinh Mệnh Đồ đang xây dựng thêm chức năng",
              " ",
              /* @__PURE__ */ jsx("strong", { children: /* @__PURE__ */ jsx("a", { href: "/hoc-tu-vi", children: "Học Tử Vi" }) }),
              " ",
              "để quý vị có thể nắm vững kiến thức cơ bản."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "mb-3 flex items-center gap-2 text-lg font-bold text-amber-900 md:text-xl", children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full border border-red-700/30 text-sm text-red-700", children: "3" }),
              "Chuyên tu & tham học điển tịch"
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "pl-10", children: [
              "Mệnh lý học là một biển học bao la. Để đắc kỳ chân tủy, quý vị nên tìm đọc các trước tác kinh điển về huyền học và ứng dụng",
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/la-so-tu-vi/la-so-tu-vi-viet-nam",
                  className: "font-semibold text-red-700 underline decoration-red-700/30 underline-offset-4 transition-colors hover:text-red-800",
                  children: "lá số Tử Vi Việt Nam"
                }
              ),
              " ",
              "kết hợp với sự suy ngẫm thực chứng. Hệ thống công cụ",
              " ",
              /* @__PURE__ */ jsx("strong", { children: /* @__PURE__ */ jsx("a", { href: "/hoc-tu-vi", children: "tự học huyền học" }) }),
              " ",
              "trên Tinh Mệnh Đồ luôn sẵn sàng hỗ trợ quý vị trên con đường tham ngộ chân lý vũ trụ."
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}

const FONT_SIZES = [12, 14, 16];
const FONT_TEST_TEXT = "Tử Vi Thiên Phủ Thái Dương 0123456789";
function PreloadCanvas({ fontName, onPreloadComplete }) {
  useEffect(() => {
    let cancelled = false;
    const preloadFonts = async () => {
      try {
        if (document.fonts?.load) {
          await Promise.all(
            FONT_SIZES.map((size) => document.fonts.load(`${size}px "${fontName}"`, FONT_TEST_TEXT))
          );
        }
      } catch (error) {
        console.warn("Font preload via FontFace API failed, using fallback:", error);
      }
      if (!cancelled) onPreloadComplete();
    };
    preloadFonts();
    return () => {
      cancelled = true;
    };
  }, [fontName, onPreloadComplete]);
  return null;
}

function generateTitle(dLich, gioiTinh, lunaCC, urlInfo) {
  const minutes = dLich.i || 0;
  return `Lá số Tử Vi Tứ Trụ ${gioiTinh} tuổi ${lunaCC.y} ${arrH1[urlInfo.cfg[CfgValue.typeLs]]} sinh ${dLich.d}/${dLich.m}/${dLich.y} ${dLich.h}h${minutes} , tử vi số mệnh, bát tự ${lunaCC.y.toUpperCase()} | ${lunaCC.m.toUpperCase()} | ${lunaCC.d.toUpperCase()} | ${lunaCC.h.toUpperCase()}`;
}
function generateDest(dLich, gioiTinh, lunaCC, urlInfo, menh1, menh2, menh3, menhTv, chinhTinhMenhTH) {
  return `Lá Số Vi Tứ Trụ ${dLich.d}/${dLich.m}/${dLich.y} tử vi trọn đời ${arrH1[urlInfo.cfg[CfgValue.typeLs] - 1]} ${gioiTinh} tuổi ${lunaCC.y} ${dLich.y} mệnh tại ${CHI[menh1.ci]} có ${chinhTinhMenhTH}. Đại vn ${CHI[menh2.ci]}, lưu niên ${CHI[menh3.ci]}, tiểu vận ${CHI[menhTv.ci]}`;
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

const DateTimeInputGps = memo(
  ({ typeInput, dateTime, onChange, minDate, _maxDate, showMinute = false }) => {
    const isDateTimeView = typeInput === "dateTimeView";
    const birthDate = isDateTimeView && minDate ? minDate : null;
    const minYear = isDateTimeView ? birthDate?.year() ?? 1e3 : 1e3;
    const maxYear = isDateTimeView ? (birthDate?.year() ?? 0) + 120 : 2099;
    const [currentDateTime, setCurrentDateTime] = useState(dateTime);
    const [pickerViewDate, setPickerViewDate] = useState(
      new Date(currentDateTime.year(), currentDateTime.month(), currentDateTime.date())
    );
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
      if (!dateTime.isSame(currentDateTime)) {
        setCurrentDateTime(dateTime);
      }
    }, [dateTime]);
    useEffect(() => {
      if (modalOpen) {
        setPickerViewDate(new Date(currentDateTime.year(), currentDateTime.month(), currentDateTime.date()));
      }
    }, [modalOpen, currentDateTime]);
    const timeUnits = [
      { name: "year", label: "Năm", min: minYear, max: maxYear },
      { name: "month", label: "Tháng", min: 1, max: 12 },
      { name: "date", label: "Ngày", min: 1, max: currentDateTime.daysInMonth() },
      { name: "hour", label: "Giờ", min: 0, max: 23, padStart: true },
      ...showMinute ? [{ name: "minute", label: "Phút", min: 0, max: 59, padStart: true }] : []
    ];
    const monthOptions = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);
    const dateOptions = useMemo(() => Array.from({ length: currentDateTime.daysInMonth() }, (_, i) => i + 1), [currentDateTime]);
    const hourOptions = useMemo(() => Array.from({ length: 24 }, (_, i) => i), []);
    const minuteOptions = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);
    const getDisplayValue = (unitName) => {
      switch (unitName) {
        case "year":
          return currentDateTime.year();
        case "month":
          return currentDateTime.month() + 1;
        case "date":
          return currentDateTime.date();
        case "hour":
          return currentDateTime.hour();
        case "minute":
          return currentDateTime.minute();
        default:
          return 0;
      }
    };
    const handleChange = useCallback(
      (unit, increment) => {
        let newDateTime = currentDateTime;
        if (increment) {
          switch (unit.name) {
            case "minute":
              if (newDateTime.minute() === 59) {
                newDateTime = newDateTime.minute(0).add(1, "hour");
              } else {
                newDateTime = newDateTime.add(1, "minute");
              }
              break;
            case "hour":
              if (newDateTime.hour() === 23) {
                newDateTime = newDateTime.hour(0).add(1, "day");
              } else {
                newDateTime = newDateTime.add(1, "hour");
              }
              break;
            case "date":
              if (newDateTime.date() === newDateTime.endOf("month").date()) {
                newDateTime = newDateTime.date(1).add(1, "month");
              } else {
                newDateTime = newDateTime.add(1, "day");
              }
              break;
            case "month":
              if (newDateTime.month() === 11) {
                newDateTime = newDateTime.month(0).add(1, "year");
              } else {
                newDateTime = newDateTime.add(1, "month");
              }
              break;
            case "year":
              newDateTime = newDateTime.add(1, "year");
              break;
          }
        } else {
          switch (unit.name) {
            case "minute":
              if (newDateTime.minute() === 0) {
                newDateTime = newDateTime.subtract(1, "hour").minute(59);
              } else {
                newDateTime = newDateTime.subtract(1, "minute");
              }
              break;
            case "hour":
              if (newDateTime.hour() === 0) {
                newDateTime = newDateTime.subtract(1, "day").hour(23);
              } else {
                newDateTime = newDateTime.subtract(1, "hour");
              }
              break;
            case "date":
              if (newDateTime.date() === 1) {
                newDateTime = newDateTime.subtract(1, "month");
                newDateTime = newDateTime.date(newDateTime.daysInMonth());
              } else {
                newDateTime = newDateTime.subtract(1, "day");
              }
              break;
            case "month":
              if (newDateTime.month() === 0) {
                newDateTime = newDateTime.subtract(1, "year").month(11);
              } else {
                newDateTime = newDateTime.subtract(1, "month");
              }
              break;
            case "year":
              newDateTime = newDateTime.subtract(1, "year");
              break;
          }
        }
        if (isDateTimeView && birthDate) {
          if (newDateTime.isBefore(birthDate)) {
            newDateTime = birthDate;
          } else if (newDateTime.year() > birthDate.year() + 120) {
            return;
          }
        } else {
          if (newDateTime.year() < minYear || newDateTime.year() > maxYear) {
            return;
          }
        }
        setCurrentDateTime(newDateTime);
        startTransition(() => {
          onChange(typeInput, newDateTime);
        });
      },
      [currentDateTime, birthDate, isDateTimeView, minYear, maxYear, onChange, typeInput]
    );
    const handleValueChange = useCallback(
      (unitName, value) => {
        let newDateTime = currentDateTime;
        switch (unitName) {
          case "year":
            newDateTime = currentDateTime.year(value);
            break;
          case "month":
            newDateTime = currentDateTime.month(value - 1);
            break;
          case "date":
            newDateTime = currentDateTime.date(value);
            break;
          case "hour":
            newDateTime = currentDateTime.hour(value);
            break;
          case "minute":
            newDateTime = currentDateTime.minute(value);
            break;
        }
        if (isDateTimeView && birthDate) {
          if (newDateTime.isBefore(birthDate)) {
            newDateTime = birthDate;
          } else if (newDateTime.year() > birthDate.year() + 120) {
            return;
          }
        } else {
          if (newDateTime.year() < minYear || newDateTime.year() > maxYear) {
            return;
          }
        }
        setCurrentDateTime(newDateTime);
        startTransition(() => {
          onChange(typeInput, newDateTime);
        });
      },
      [currentDateTime, birthDate, isDateTimeView, minYear, maxYear, onChange, typeInput]
    );
    const handlePickerChange = (val) => {
      const rawVal = Array.isArray(val) ? val[0] : val;
      if (!rawVal) return;
      const d = dayjs(rawVal);
      if (!d.isValid()) return;
      const year = d.year();
      const month = currentDateTime.month();
      const date = currentDateTime.date();
      const newDateTime = currentDateTime.year(year);
      if (isDateTimeView && birthDate) {
        if (newDateTime.isBefore(birthDate)) ; else if (newDateTime.year() > birthDate.year() + 120) {
          return;
        }
      } else {
        if (newDateTime.year() < minYear || newDateTime.year() > maxYear) {
          return;
        }
      }
      setCurrentDateTime(newDateTime);
      setPickerViewDate(new Date(year, month, date));
      onChange(typeInput, newDateTime);
      setModalOpen(false);
    };
    return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      timeUnits.map((unit) => /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative flex h-14 items-center overflow-hidden rounded-lg border border-gray-300 shadow-sm ${isDateTimeView ? "bg-white" : "bg-orange-200"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-[15px] left-[65px] z-40 px-2 pt-1 text-xs text-gray-500", children: unit.label }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => handleChange(unit, false),
                className: `flex h-full w-14 flex-none items-center justify-center transition-colors ${isDateTimeView ? "hover:bg-gray-100 active:bg-gray-200" : "hover:bg-orange-300 active:bg-orange-400"} cursor-pointer text-gray-700 touch-manipulation select-none`,
                "aria-label": `Decrease ${unit.label}`,
                children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", children: "-" })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "relative flex h-full flex-1 items-center justify-center", children: unit.name === "year" ? /* @__PURE__ */ jsx(
              "div",
              {
                className: `flex h-full w-full cursor-pointer items-center justify-center text-lg font-medium ${isDateTimeView ? "hover:bg-gray-50" : "hover:bg-orange-300"} touch-manipulation select-none`,
                onClick: () => setModalOpen(true),
                children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: getDisplayValue(unit.name) })
              }
            ) : /* @__PURE__ */ jsx(
              "select",
              {
                value: getDisplayValue(unit.name),
                onChange: (e) => handleValueChange(unit.name, Number.parseInt(e.target.value)),
                className: `h-full w-full cursor-pointer appearance-none bg-transparent text-center !text-lg font-bold focus:outline-hidden ${isDateTimeView ? "hover:bg-gray-50" : "hover:bg-orange-300"} touch-manipulation select-none`,
                children: unit.name === "month" ? monthOptions.map((value) => /* @__PURE__ */ jsx("option", { value, children: value }, value)) : unit.name === "date" ? dateOptions.map((value) => /* @__PURE__ */ jsx("option", { value, children: value }, value)) : unit.name === "hour" ? hourOptions.map((value) => /* @__PURE__ */ jsx("option", { value, children: unit.padStart ? value.toString().padStart(2, "0") : value }, value)) : minuteOptions.map((value) => /* @__PURE__ */ jsx("option", { value, children: unit.padStart ? value.toString().padStart(2, "0") : value }, value))
              }
            ) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => handleChange(unit, true),
                className: `flex h-full w-14 flex-none items-center justify-center transition-colors ${isDateTimeView ? "hover:bg-gray-100 active:bg-gray-200" : "hover:bg-orange-300 active:bg-orange-400"} cursor-pointer text-gray-700 touch-manipulation select-none`,
                "aria-label": `Increase ${unit.label}`,
                children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", children: "+" })
              }
            )
          ]
        }
      ) }) }, unit.name)),
      /* @__PURE__ */ jsx(
        Modal,
        {
          opened: modalOpen,
          onClose: () => setModalOpen(false),
          title: "Chọn năm",
          centered: true,
          zIndex: 200,
          size: "lg",
          classNames: { content: "!w-[90%] md:!w-[95%]" },
          children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-4", children: /* @__PURE__ */ jsx(
            YearPicker,
            {
              size: "lg",
              value: new Date(currentDateTime.year(), currentDateTime.month(), currentDateTime.date()),
              date: pickerViewDate,
              onDateChange: (val) => setPickerViewDate(val),
              onChange: handlePickerChange,
              allowDeselect: false,
              locale: "vi",
              minDate: isDateTimeView && birthDate ? new Date(birthDate.year(), birthDate.month(), birthDate.date()) : new Date(minYear, 0, 1),
              maxDate: new Date(maxYear, 11, 31)
            }
          ) })
        }
      )
    ] });
  }
);

const SETTINGS_PANEL_STYLES = `
.reset-button {
  padding: 8px 12px;
  min-height: 36px;
  font-size: 13px;
  border-radius: 8px;
  background-color: #ff5722;
  color: white;
  transition: all 0.2s;
  font-weight: 500;
  border: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
}
.reset-button:hover {
  background-color: #e64a19;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
.tab-indicator, .time-tab-indicator {
  animation: slideIn 0.3s ease-out forwards;
  height: 2px !important;
  bottom: -1px !important;
  position: absolute;
}
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.section-transition {
  animation: sectionFadeIn 0.4s cubic-bezier(0.2, 0, 0.2, 1) forwards;
}
@keyframes sectionFadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
.config-panel button {
  transition: all 0.2s ease-out;
  touch-action: manipulation;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
.config-panel button:active { transform: scale(0.95); }
.config-panel .grid button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.2, 0, 0.2, 1);
}
.config-panel .grid button:before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 0; height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: width 0.3s ease;
  z-index: 0;
}
.config-panel .grid button:hover:before { width: 100%; }
.config-panel .grid button:active { transform: scale(0.97); }
.config-panel .grid button span { position: relative; z-index: 1; }
.config-panel .grid button.selected {
  transform: scale(1.02);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.config-panel .grid button.selected span:first-child { transform: scale(1.1); }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.2); border-radius: 3px; }
@media (prefers-color-scheme: dark) {
  ::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.2); }
}
@media (max-width: 767px) {
  .config-panel {
    top: 0; bottom: auto; width: 100%; height: 92vh;
    border-top-left-radius: 20px; border-top-right-radius: 20px;
    border-left: none; transform: translateY(0);
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 0 75px rgba(0, 0, 0, 0.4);
  }
  .config-panel:before {
    content: '';
    position: absolute; top: 10px; left: 50%;
    transform: translateX(-50%);
    width: 40px; height: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  .grid.border-b { border-bottom: 1px solid rgba(209, 213, 219, 1) !important; }
  .time-tab-indicator { height: 2px !important; bottom: -1px !important; }
}
.time-tab-indicator {
  display: block !important;
  animation: slideIn 0.3s ease-out forwards;
  height: 3px !important; bottom: -1.5px !important;
  position: absolute !important; z-index: 10 !important;
  border-radius: 3px;
}
`;
const CONFIG_COLORS = {
  sex: ["#3498db", "#e91e63"],
  // Nam/Nữ
  showSun: ["#95a5a6", "#ff8c42"],
  // Không hiện/Hiện dương lịch
  tuanHoanZone: ["#95a5a6", "#ff8c42"],
  // Không hiện/Hiện tuần hoàn
  rotateZone: ["#95a5a6", "#ff8c42"],
  // Không hiện/Hiện cung vị trùng
  locKiToanDo: ["#95a5a6", "#ff8c42"],
  // Không hiện/Hiện lộc kị toàn đồ
  dvStar: ["#95a5a6", "#ff8c42"],
  // Không hiện/Hiện sao lưu đại vận
  batTuCung: ["#95a5a6", "#ff8c42"]
  // Không hiện/Hiện bát tự từng năm
};
const Icons = {
  NumberIcon: ({ color = "#000000", number = 1 }) => /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", stroke: color, strokeWidth: "2", fill: "white" }),
    /* @__PURE__ */ jsx("text", { x: "12", y: "16", textAnchor: "middle", fill: color, style: { font: "bold 13px sans-serif", userSelect: "none" }, children: number })
  ] }),
  PhiHoa: ({ type = 0 }) => {
    const colors = PHIHOA_COLOR;
    return /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", stroke: colors[type], strokeWidth: "2", fill: "white" }),
      /* @__PURE__ */ jsx(
        "text",
        {
          x: "12",
          y: "16",
          textAnchor: "middle",
          fill: colors[type],
          style: { font: "bold 13px sans-serif", userSelect: "none" },
          children: PHIHOA_SYMBOL1[type]
        }
      )
    ] });
  }
};
function SettingsPanel({
  cfgLs,
  onConfigChange,
  sex,
  onSexChange,
  dateTimeBorn,
  dateTimeView,
  onDateChange,
  ls,
  onHidePanel
}) {
  const [activeSection, setActiveSection] = useState("dateTime");
  const [selectedTcpType, setSelectedTcpType] = useState(cfgLs[CfgValue.tcpb]);
  const [activeTimeTab, setActiveTimeTab] = useState("dateTimeBorn");
  const panelRef = useRef(null);
  useEffect(() => {
    setSelectedTcpType(cfgLs[CfgValue.tcpb]);
  }, [cfgLs]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (target.closest(".mantine-Modal-root") || target.closest(".mantine-Popover-dropdown") || target.closest('[role="dialog"]')) {
        return;
      }
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        if (window.innerWidth <= 767) {
          onHidePanel();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onHidePanel]);
  const handleDateTimeChange = (type, djDate) => {
    onDateChange(type, djDate);
  };
  const handleResetDateTime = (configId) => {
    const now = dayjs();
    if (configId === "dateTimeBorn") {
      onDateChange(configId, dayjs());
      if (now.isAfter(dateTimeView)) {
        onDateChange("dateTimeView", dayjs());
      }
    } else if (configId === "dateTimeView") {
      if (now.isBefore(dateTimeBorn)) {
        onDateChange(configId, dateTimeBorn);
      } else {
        onDateChange(configId, dayjs());
      }
    }
  };
  const handleTcpTypeChange = useCallback(
    (value) => {
      setSelectedTcpType(value);
      onConfigChange(CfgValue.tcpb, value);
    },
    [onConfigChange]
  );
  const sections = [
    {
      id: "dateTime",
      title: "Thời gian",
      icon: /* @__PURE__ */ jsx(IconSchedule, {})
    },
    {
      id: "typeConfig",
      title: "Lá số",
      icon: /* @__PURE__ */ jsx(IconAutoStories, {})
    },
    {
      id: "display",
      title: "Hiển thị",
      icon: /* @__PURE__ */ jsx(IconVisibility, {})
    },
    {
      id: "advancedConfig",
      title: "Nâng cao",
      icon: /* @__PURE__ */ jsx(IconSettings, {})
    }
  ];
  const getConfigsBySection = () => {
    switch (activeSection) {
      case "dateTime":
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 max-lg:pb-25", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Giới tính" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: [
              { value: 1, label: "Nam", icon: "male", color: CONFIG_COLORS.sex[0] },
              { value: 0, label: "Nữ", icon: "female", color: CONFIG_COLORS.sex[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all duration-300 ease-out ${sex === option.value ? "scale-[1.02] transform font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: sex === option.value ? option.color : "",
                  color: sex === option.value ? "white" : ""
                },
                onClick: () => onSexChange(option.value),
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `text-xl transition-transform duration-200 ${sex === option.value ? "scale-110 transform" : ""}`,
                      children: option.icon === "male" ? /* @__PURE__ */ jsx(IconMale, {}) : /* @__PURE__ */ jsx(IconFemale, {})
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("div", { className: "relative mb-4 grid grid-cols-2 border-b border-gray-300", children: [
              { id: "dateTimeBorn", label: "Năm sinh" },
              { id: "dateTimeView", label: "Năm xem" }
            ].map((tab) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `relative flex-1 px-2 py-3 text-sm font-medium transition-all duration-300 ease-out sm:px-6 sm:text-base ${activeTimeTab === tab.id ? "text-orange-500" : "text-gray-500 hover:text-gray-700"} touch-manipulation select-none`,
                onClick: () => setActiveTimeTab(tab.id),
                children: [
                  tab.label,
                  activeTimeTab === tab.id && /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "time-tab-indicator absolute bottom-0 left-0 h-1 w-full bg-orange-500",
                      style: { zIndex: 10, height: "3px" }
                    }
                  )
                ]
              },
              tab.id
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "p-2", children: [
              activeTimeTab === "dateTimeBorn" && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-3 flex content-center items-center justify-between", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-sm text-gray-500", children: dateTimeBorn.format("dddd YYYY/MM/DD - HH:mm").charAt(0).toUpperCase() + dateTimeBorn.format("dddd YYYY/MM/DD - HH:mm").slice(1) }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => handleResetDateTime("dateTimeBorn"),
                      className: "reset-button bg-orange-500! text-xs! text-white",
                      children: "Đặt lại"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  DateTimeInputGps,
                  {
                    typeInput: "dateTimeBorn",
                    dateTime: dateTimeBorn,
                    onChange: handleDateTimeChange,
                    showMinute: true
                  }
                )
              ] }),
              activeTimeTab === "dateTimeView" && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-sm text-gray-500", children: dateTimeView.format("dddd YYYY/MM/DD - HH:mm").charAt(0).toUpperCase() + dateTimeView.format("dddd YYYY/MM/DD - HH:mm").slice(1) }),
                  /* @__PURE__ */ jsx("button", { onClick: () => handleResetDateTime("dateTimeView"), className: "reset-button", children: "Đặt lại" })
                ] }),
                /* @__PURE__ */ jsx(
                  DateTimeInputGps,
                  {
                    typeInput: "dateTimeView",
                    dateTime: dateTimeView,
                    onChange: handleDateTimeChange,
                    minDate: dateTimeBorn,
                    _maxDate: dateTimeBorn.add(120, "year"),
                    showMinute: true
                  }
                )
              ] })
            ] })
          ] })
        ] }) });
      case "display":
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 max-lg:pb-25", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Hiện dương lịch" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: [
              { value: 0, label: "Không hiện", icon: "visibility_off", color: CONFIG_COLORS.showSun[0] },
              { value: 1, label: "Hiện", icon: "visibility", color: CONFIG_COLORS.showSun[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all duration-300 ease-out ${cfgLs[CfgValue.showSun] === option.value ? "selected font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.showSun] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.showSun] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.showSun, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: option.icon === "visibility" ? /* @__PURE__ */ jsx(IconVisibility, {}) : /* @__PURE__ */ jsx(IconVisibilityOff, {}) }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Hiện sao lưu" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: yearLoopStarMsg.map((label, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.currentStar] === idx ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.currentStar] === idx ? "#ff8c42" : "",
                  color: cfgLs[CfgValue.currentStar] === idx ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.currentStar, idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: /* @__PURE__ */ jsx(IconLoop, {}) }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: label })
                ]
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Hiện sao theo nhóm" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: hideStarMsg.map((label, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.showHideStar] === idx ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.showHideStar] === idx ? "#ff8c42" : "",
                  color: cfgLs[CfgValue.showHideStar] === idx ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.showHideStar, idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: /* @__PURE__ */ jsx(IconStars, {}) }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: label })
                ]
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Sao lưu đại vận" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: [
              { value: 0, label: "Không hiện", icon: "star_outline", color: CONFIG_COLORS.dvStar[0] },
              { value: 1, label: "Hiện", icon: "grade", color: CONFIG_COLORS.dvStar[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.dvStar] === option.value ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.dvStar] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.dvStar] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.dvStar, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: option.icon === "grade" ? /* @__PURE__ */ jsx(IconGrade, {}) : /* @__PURE__ */ jsx(IconStarOutline, {}) }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] })
        ] }) });
      case "typeConfig":
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 max-lg:pb-25", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Chọn kiểu lá số" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: typeLsName.map((name, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.typeLs] === idx ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.typeLs] === idx ? "#ff8c42" : "",
                  color: cfgLs[CfgValue.typeLs] === idx ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.typeLs, idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: /* @__PURE__ */ jsx(IconAutoAwesomeMotion, {}) }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: name })
                ]
              },
              idx
            )) })
          ] }),
          [6, 7, 8].includes(cfgLs[CfgValue.typeLs]) && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Bàn Trung Châu" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: typeBanTCP.map((name, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${selectedTcpType === idx ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: selectedTcpType === idx ? "#ff8c42" : "",
                  color: selectedTcpType === idx ? "white" : ""
                },
                onClick: () => handleTcpTypeChange(idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: /* @__PURE__ */ jsx(IconAutoStories, {}) }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: name })
                ]
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Kiểu phi hóa" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: [
              { value: 0, label: "Hóa Lộc", color: PHIHOA_COLOR[0] },
              { value: 1, label: "Hóa Quyền", color: PHIHOA_COLOR[1] },
              { value: 2, label: "Hóa Khoa", color: PHIHOA_COLOR[2] },
              { value: 3, label: "Hóa Kị", color: PHIHOA_COLOR[3] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.typePhiHoa] === option.value ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.typePhiHoa] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.typePhiHoa] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.typePhiHoa, option.value),
                children: [
                  /* @__PURE__ */ jsx(Icons.PhiHoa, { type: option.value }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Hiện các tầng phi hóa" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: levelPhiHoaMsg.map((msg, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.showHoaIcon] === idx ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.showHoaIcon] === idx ? "#ff8c42" : "",
                  color: cfgLs[CfgValue.showHoaIcon] === idx ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.showHoaIcon, idx),
                children: [
                  /* @__PURE__ */ jsx(
                    Icons.NumberIcon,
                    {
                      color: cfgLs[CfgValue.showHoaIcon] === idx ? "white" : "#ff8c42",
                      number: idx + 1
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: msg })
                ]
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Chọn bảng tứ hóa" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: changeCanTypeMsg.map((msg, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.lsCanType] === idx ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.lsCanType] === idx ? "#ff8c42" : "",
                  color: cfgLs[CfgValue.lsCanType] === idx ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.lsCanType, idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: /* @__PURE__ */ jsx(IconSettings, {}) }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: msg })
                ]
              },
              idx
            )) })
          ] })
        ] }) });
      case "advancedConfig":
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 max-lg:pb-25", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Tuần hoàn lộc kị" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: [
              { value: 0, label: "Không hiện", icon: "sync_disabled", color: CONFIG_COLORS.tuanHoanZone[0] },
              { value: 1, label: "Hiện", icon: "loop", color: CONFIG_COLORS.tuanHoanZone[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.tuanHoanZone] === option.value ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.tuanHoanZone] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.tuanHoanZone] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.tuanHoanZone, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: option.icon === "loop" ? /* @__PURE__ */ jsx(IconLoop, {}) : /* @__PURE__ */ jsx(IconSyncDisabled, {}) }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Cung vị trùng điệp" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: [
              { value: 0, label: "Không hiện", icon: "block", color: CONFIG_COLORS.rotateZone[0] },
              { value: 1, label: "Hiện", icon: "rotate_90_degrees_ccw", color: CONFIG_COLORS.rotateZone[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.rotateZone] === option.value ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.rotateZone] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.rotateZone] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.rotateZone, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: option.icon === "rotate_90_degrees_ccw" ? /* @__PURE__ */ jsx(IconRotate90DegreesCcw, {}) : /* @__PURE__ */ jsx(IconBlock, {}) }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Phương viên lộc kị toàn đồ" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: [
              { value: 0, label: "Không hiện", icon: "star_border", color: CONFIG_COLORS.locKiToanDo[0] },
              { value: 1, label: "Hiện", icon: "star_rate", color: CONFIG_COLORS.locKiToanDo[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.locKiToanDo] === option.value ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.locKiToanDo] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.locKiToanDo] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.locKiToanDo, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: option.icon === "star_rate" ? /* @__PURE__ */ jsx(IconStarRate, {}) : /* @__PURE__ */ jsx(IconStarBorder, {}) }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Bát tự từng năm" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2.5 sm:gap-3", children: [
              { value: 0, label: "Không hiện", icon: "block", color: CONFIG_COLORS.batTuCung[0] },
              { value: 1, label: "Hiện", icon: "view_timeline", color: CONFIG_COLORS.batTuCung[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex min-h-[44px] items-center justify-start gap-2 rounded-xl px-3 py-2.5 text-sm transition-all ${cfgLs[CfgValue.batTuCung] === option.value ? "font-medium shadow-md ring-1 ring-black/5" : "border border-transparent bg-gray-100/80 text-gray-600 hover:bg-gray-200/50"} touch-manipulation select-none`,
                style: {
                  backgroundColor: cfgLs[CfgValue.batTuCung] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.batTuCung] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.batTuCung, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xl", children: option.icon === "view_timeline" ? /* @__PURE__ */ jsx(IconViewTimeline, {}) : /* @__PURE__ */ jsx(IconBlock, {}) }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] })
        ] }) });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsx(MantineProvider, { theme: { primaryColor: "orange" }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: panelRef,
      className: "config-panel fixed top-0 right-0 z-20 h-full 2xl:w-100 max-w-full \n      overflow-hidden border-l border-gray-200 bg-white shadow-lg",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 \n        bg-linear-to-b from-gray-50 to-white px-3 py-2", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Cấu hình lá số" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onHidePanel,
                className: "touch-manipulation rounded-md transition-colors select-none hover:bg-gray-100",
                children: /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-gray-400 inset-0 w-12 h-12 bg-gray-200/10 rounded-sm flex items-center justify-center", children: "✕" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "sticky top-10 z-10 flex overflow-x-auto border-b border-gray-200 bg-white", children: sections.map((section) => /* @__PURE__ */ jsxs(
            "button",
            {
              className: `group relative flex min-h-[56px] min-w-[80px] flex-1 flex-col items-center justify-center overflow-hidden px-4 py-3 transition-all duration-300 ease-out ${activeSection === section.id ? "text-orange-500" : "text-gray-500 hover:text-gray-700"} touch-manipulation select-none`,
              onClick: () => setActiveSection(section.id),
              children: [
                /* @__PURE__ */ jsx("span", { className: "mb-1 transform text-lg transition-transform duration-300 ease-out will-change-transform group-hover:scale-110", children: section.icon }),
                /* @__PURE__ */ jsx("span", { className: "mt-1 transition-all duration-300 text-xs font-medium", children: section.title }),
                activeSection === section.id && /* @__PURE__ */ jsx("div", { className: "tab-indicator absolute bottom-0 left-0 h-0.5 w-full bg-orange-500" })
              ]
            },
            section.id
          )) }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 space-y-3 overflow-y-auto bg-gray-50 p-2", children: /* @__PURE__ */ jsx("div", { className: "section-transition", children: getConfigsBySection() }, activeSection) })
        ] }),
        /* @__PURE__ */ jsx("style", { children: SETTINGS_PANEL_STYLES })
      ]
    }
  ) });
}

const CONTAINER_MIN_HEIGHT = "400px";
const getMySwal = async () => {
  const [{ default: Swal }, { default: withReactContent }] = await Promise.all([
    import('./D3UtOy0X.js'),
    import('./Sonx4fQL.js')
  ]);
  return withReactContent(Swal);
};
dayjs.extend(utc);
dayjs.locale("vi");
function AppLaSo({
  fontName,
  fontClass,
  version,
  defaultType,
  titleSeo,
  descSeo,
  useHtmlRendering
}) {
  const lsState = useStore($horoscope);
  const lsObj = useStore($lsObj);
  const lstUrlArr = useStore($lstUrlArr);
  const ui = useStore($ui);
  const [defaultLsObj] = useState(() => {
    return getLsDataServerGps(dayjs(), dayjs(), 1, [...configDefault], 21.0285, 105.8333);
  });
  const { showNewConfigPanel, showLocationPanel, showCanvas, isClient } = ui;
  const configIconsRef = useRef(null);
  const lsAreaRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    initGpsStore();
  }, []);
  const pageMetadata = usePageMetadata(lsObj, lstUrlArr);
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
  const handlePreloadComplete = () => $ui.setKey("fontsPreloaded", true);
  const handleHidePanel = () => {
    $ui.setKey("isPanelExiting", true);
    setTimeout(() => {
      $ui.setKey("showNewConfigPanel", false);
      $ui.setKey("isPanelExiting", false);
    }, 300);
  };
  const handleClick = () => {
    if (!showCanvas) $ui.setKey("showCanvas", true);
  };
  const setShowNewConfigPanel = (val) => startTransition(() => $ui.setKey("showNewConfigPanel", val));
  const setShowLocationPanel = (val) => startTransition(() => $ui.setKey("showLocationPanel", val));
  const handleSexChange = (value) => {
    $horoscope.set({
      ...lsState,
      sex: value,
      first: true
    });
    debouncedCalculateLsData();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PreloadCanvas, { fontName, onPreloadComplete: handlePreloadComplete }),
    /* @__PURE__ */ jsx(AppUI, { rightDom: "", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: `x2l:max-[1600px]:flex relative mx-auto pb-24 max-xl:grid-cols-1 ${showNewConfigPanel ? "main-content" : ""}`,
        onClick: handleClick,
        onTouchStart: handleClick,
        style: { minHeight: CONTAINER_MIN_HEIGHT },
        children: /* @__PURE__ */ jsx(
          MainContentGps,
          {
            configIconsRef,
            titleSeo,
            descSeo,
            fontClass,
            fontName,
            version,
            useHtmlRendering,
            getMySwal,
            lsAreaRef,
            CONTAINER_MIN_HEIGHT,
            lsObj: lsObj || defaultLsObj
          }
        )
      }
    ) }),
    isMounted && /* @__PURE__ */ jsx(LocationPanel, {}),
    /* @__PURE__ */ jsx(Fragment, { children: lsObj && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "aside",
        {
          className: `fixed inset-y-0 right-0 z-50 w-full transform bg-white/0 shadow-xl transition-transform ease-in-out 2xl:w-100 ${showNewConfigPanel ? "translate-x-0" : "translate-x-full"} overflow-y-auto`,
          "aria-label": "Configuration panel",
          children: showNewConfigPanel && /* @__PURE__ */ jsx(
            SettingsPanel,
            {
              cfgLs: lsState.cfgLs,
              onConfigChange: changeSetConfig,
              sex: lsState.sex,
              onSexChange: handleSexChange,
              dateTimeBorn: lsState.vBornUTC,
              dateTimeView: lsState.vViewUTC,
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
          className: `fixed top-3 left-3 z-50 transition-[opacity,transform] duration-300 ease-out ${showLocationPanel || showNewConfigPanel ? "pointer-events-none -translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`,
          children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowLocationPanel(true),
              className: "flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/30 text-amber-700 shadow-sm backdrop-blur-md transition-[transform,background-color,color] duration-200 hover:scale-110 hover:cursor-pointer hover:bg-white/40 hover:text-amber-800 active:scale-95",
              "aria-label": "Chọn địa điểm sinh",
              children: /* @__PURE__ */ jsxs("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  }
                )
              ] })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: `fixed top-3 right-3 z-50 transition-[opacity,transform] duration-300 ease-out ${showLocationPanel || showNewConfigPanel ? "pointer-events-none -translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`,
          children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowNewConfigPanel(true),
              className: "flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/30 text-amber-700 shadow-sm backdrop-blur-md transition-[transform,background-color,color] duration-200 hover:scale-110 hover:cursor-pointer hover:bg-white/40 hover:text-amber-800 active:scale-95",
              "aria-label": "Sửa lá số",
              children: /* @__PURE__ */ jsx(IconSettings, { className: "h-5 w-5" })
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("style", { children: `
      .konva-container {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 400px;
      }
      .konva-container canvas {
        position: absolute;
        top: 0;
        left: 0;
      }

      .animate-in {
        animation: fadeInUp 0.4s ease-out forwards;
      }

      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    ` })
  ] });
}

export { AppLaSo as A, detectLeapMonthConflict as a, detectHourBoundaryConflict as d };
