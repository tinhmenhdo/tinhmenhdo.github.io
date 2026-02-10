import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
/* empty css         */
/* empty css         */
import 'dayjs/locale/vi.js';
import { MantineProvider } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
import { useState, useRef, useEffect } from 'react';
import { C as CitySearch, I as Input } from './CGfRn2eR.js';
import { S as SolarCalculator } from './BODF8xcG.js';
import { M as MapPicker, S as Skeleton } from './JMARO_ir.js';
import { B as Button } from './COpOt3S1.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
function formatLunarDay(day) {
  if (day >= 1 && day <= 10) {
    return `Mồng ${day}`;
  }
  return `Ngày ${day}`;
}
const messages = {
  title: "Lấy Giờ Chính Ngọ và Giờ Địa Phương (Online)",
  description: "Công cụ chuyển đổi giờ Mặt Trời thực và tính toán Điểm Sóc (New Moon) - Phiên bản Online.",
  sectionDateTime: "1. Chọn Thời Gian",
  sectionLocation: "2. Chọn Địa Điểm",
  sectionResults: "Kết Quả Tính Toán",
  datePlaceholder: "Chọn ngày",
  timePlaceholder: "Chọn giờ (Mặc định 12:00)",
  timezonePlaceholder: "Chọn múi giờ",
  offsetPlaceholder: "Offset (giờ)",
  errorApi: "Có lỗi xảy ra khi tính toán.",
  errorEmpty: "Vui lòng nhập tên thành phố",
  errorGeo: "Không tìm thấy địa điểm này. Vui lòng thử lại.",
  locationInfo: "Địa điểm:",
  coordinates: "Tọa độ:",
  timezone: "Múi giờ:",
  searchPlaceholder: "Nhập tên thành phố (VD: Hanoi, Ho Chi Minh...)",
  searchButton: "Tìm Kiếm",
  table: {
    date: "Ngày Giờ Đầu Vào",
    utc: "Giờ UTC",
    localTime: "Giờ Hành Chính",
    trueSolarTime: "Giờ Mặt Trời",
    solarNoon: "Giờ Chính Ngọ",
    offset: "Offset",
    newMoon: "Điểm Sóc (Trăng Mới)",
    daysSinceNewMoon: "Số ngày từ Điểm Sóc",
    lunarDay: "Ngày Âm Lịch",
    lunarMonth: "Tháng Âm Lịch"
  }
};
const getElementColor = (name) => {
  const wood = ["Giáp", "Ất", "Dần", "Mão"];
  const fire = ["Bính", "Đinh", "Tị", "Ngọ"];
  const earth = ["Mậu", "Kỷ", "Thìn", "Tuất", "Sửu", "Mùi"];
  const metal = ["Canh", "Tân", "Thân", "Dậu"];
  const water = ["Nhâm", "Quý", "Hợi", "Tý"];
  if (wood.includes(name)) {
    return {
      text: "text-green-700",
      bg: "bg-linear-to-br from-emerald-50/60 to-green-50/40",
      border: "border-emerald-200/50",
      label: "text-emerald-800"
    };
  }
  if (fire.includes(name)) {
    return {
      text: "text-rose-700",
      bg: "bg-linear-to-br from-rose-50/60 to-pink-50/40",
      border: "border-rose-200/50",
      label: "text-rose-800"
    };
  }
  if (earth.includes(name)) {
    return {
      text: "text-amber-700",
      bg: "bg-linear-to-br from-amber-50/60 to-yellow-50/40",
      border: "border-amber-200/50",
      label: "text-amber-800"
    };
  }
  if (metal.includes(name)) {
    return {
      text: "text-gray-500",
      bg: "bg-linear-to-br from-slate-50/60 to-gray-50/40",
      border: "border-slate-200/50",
      label: "text-slate-700"
    };
  }
  if (water.includes(name)) {
    return {
      text: "text-blue-800",
      bg: "bg-linear-to-br from-indigo-50/60 to-blue-50/40",
      border: "border-indigo-200/50",
      label: "text-blue-800"
    };
  }
  return {
    text: "text-slate-600",
    bg: "bg-linear-to-br from-slate-50/60 to-gray-50/40",
    border: "border-slate-200/50",
    label: "text-slate-700"
  };
};
function SolarNoonViewerOnline() {
  const [dateValue, setDateValue] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState(0);
  const [targetTimezone, setTargetTimezone] = useState(null);
  const [targetOffset, setTargetOffset] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [solarData, setSolarData] = useState(null);
  const [mapCenter, setMapCenter] = useState([21.0285, 105.8333]);
  const [zoom, setZoom] = useState(6);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [timezoneDisplay, setTimezoneDisplay] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const resultsRef = useRef(null);
  const handleCitySelect = (city) => {
    let name = city.city;
    if (city.province && city.province !== city.city) {
      name += `, ${city.province}`;
    }
    name += `, ${city.country}`;
    updateLocationOnly(city.lat, city.lng, name, void 0, city.country, true);
  };
  const updateLocationOnly = (lat, lon, name, timezoneName, country, shouldZoom = false) => {
    let normalizedLon = lon;
    while (normalizedLon > 180) normalizedLon -= 360;
    while (normalizedLon < -180) normalizedLon += 360;
    if (shouldZoom) {
      setMapCenter([lat, normalizedLon]);
      setZoom(10);
    } else {
      setMapCenter([lat, normalizedLon]);
    }
    setMarkerPosition([lat, normalizedLon]);
    setSolarData(null);
    setError(null);
    setTimezoneDisplay(null);
    let finalTzName;
    let finalOffset;
    try {
      const summary = SolarCalculator.getTimezoneSummary({
        lat,
        lon: normalizedLon,
        date: /* @__PURE__ */ new Date(),
        // Current date for offset lookup
        timezoneName
      });
      finalTzName = summary.tzName;
      try {
        if (typeof Intl !== "undefined") {
          finalTzName = Intl.DateTimeFormat(void 0, { timeZone: finalTzName }).resolvedOptions().timeZone;
        }
      } catch (err) {
        console.warn("Could not normalize timezone:", finalTzName);
      }
      finalOffset = summary.tzOffsetInit;
    } catch (e) {
      console.warn("Timezone detection failed", e);
      setError(
        "Không xác định được múi giờ tại vị trí này. Vui lòng chọn vị trí trên đất liền hoặc chọn múi giờ thủ công."
      );
      setGeoData({
        lat,
        lon: normalizedLon,
        name,
        timezone: timezoneName,
        country
      });
      setTargetTimezone(null);
      setTargetOffset(null);
      return;
    }
    setGeoData({
      lat,
      lon: normalizedLon,
      name,
      timezone: finalTzName,
      country
    });
    setTargetTimezone(finalTzName);
    setTargetOffset(finalOffset);
    setTimezoneDisplay(`Múi giờ: ${finalTzName} (Offset: ${finalOffset}h)`);
    if (finalTzName) {
      setSelectedTimezone(finalTzName);
    }
    setTimezoneOffset(finalOffset);
  };
  const handleManualCalculate = () => {
    if (!geoData) {
      setError("Vui lòng chọn địa điểm trước khi tính toán.");
      return;
    }
    if (!dateValue) {
      setError("Vui lòng chọn ngày giờ.");
      return;
    }
    const effTargetOffset = targetOffset !== null ? targetOffset : timezoneOffset;
    setError(null);
    calculateSolarData(
      geoData.lat,
      geoData.lon,
      dateValue,
      timezoneOffset,
      effTargetOffset,
      targetTimezone || void 0
    );
  };
  const calculateSolarData = async (lat, lon, inputDate, inOffset, tgtOffset, tgtTzName) => {
    setLoading(true);
    try {
      const inputTimeBase = dayjs(inputDate).utc(true);
      if (!inputTimeBase.isValid()) {
        throw new Error("Ngày giờ không hợp lệ");
      }
      const utcTime = inputTimeBase.subtract(inOffset, "hour");
      const targetLocalTime = utcTime.add(tgtOffset, "hour");
      const dateForLib = targetLocalTime.toDate();
      let urlapi = atob("aHR0cDovL2xvY2FsaG9zdDo4Nzg4L2FwaS9zb2xhci1kYXRh");
      if (true) {
        urlapi = atob("L2FwaS9zb2xhci1kYXRh");
      }
      const response = await fetch(urlapi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: dateForLib.toISOString(),
          // Send as ISO string
          lat,
          lon,
          timezone: tgtTzName,
          offset: tgtOffset
        })
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || messages.errorApi);
      }
      const calculatedData = await response.json();
      const dataFormatted = {
        date: inputDate,
        // Original Input
        utc: calculatedData.utc,
        localTime: calculatedData.localTime,
        trueSolarTime: calculatedData.trueSolarTime,
        solarNoon: calculatedData.solarNoon,
        tzOffset: calculatedData.tzOffset,
        newMoon: calculatedData.newMoon ? {
          ...calculatedData.newMoon,
          // Convert string dates back to Date objects if needed, or keeping them as is if not used as Date
          // SolarData interface expects Date for utc/localTime. API returns string?
          // calculatedData.newMoon.utc is string from JSON
          utc: new Date(calculatedData.newMoon.utc),
          localTime: new Date(calculatedData.newMoon.localTime)
        } : null,
        trueSolarBazi: calculatedData.trueSolarBazi ? {
          ...calculatedData.trueSolarBazi,
          solarDate: new Date(calculatedData.trueSolarBazi.solarDate)
        } : void 0
      };
      setSolarData(dataFormatted);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    } catch (err) {
      console.error(err);
      setError(err.message || messages.errorApi);
    } finally {
      setLoading(false);
    }
  };
  const handleLocationConfirm = (lat, lon, locationName, fixedTimezone) => {
    const name = locationName || `Tọa độ: ${lat.toFixed(4)}, ${lon.toFixed(4)}`;
    updateLocationOnly(lat, lon, name, fixedTimezone, void 0, false);
  };
  useEffect(() => {
    if (!geoData || !dateValue) return;
    const params = new URLSearchParams(window.location.search);
    const d = dayjs(dateValue);
    if (!d.isValid()) return;
    const year = d.year();
    const month = String(d.month() + 1).padStart(2, "0");
    const day = String(d.date()).padStart(2, "0");
    const hour = String(d.hour()).padStart(2, "0");
    const minute = String(d.minute()).padStart(2, "0");
    const bStr = `${year}-${month}-${day}-${hour}-${minute}`;
    const locStr = `${geoData.lat.toFixed(7)},${geoData.lon.toFixed(7)}`;
    const currentB = params.get("b");
    const currentLoc = params.get("loc");
    if (currentB !== bStr || currentLoc !== locStr) {
      params.set("b", bStr);
      params.set("loc", locStr);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", newUrl);
    }
  }, [geoData, dateValue]);
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const locParam = params.get("loc");
      const bParam = params.get("b");
      let initialLat = 21.0285;
      let initialLon = 105.8333;
      let initialTz = "Asia/Ho_Chi_Minh";
      let locationName = "Hà Nội, Việt Nam";
      let initialDate = /* @__PURE__ */ new Date();
      let shouldCalculate = false;
      if (bParam) {
        const parsedDate = dayjs(bParam, "YYYY-MM-DD-HH-mm");
        if (parsedDate.isValid()) {
          initialDate = parsedDate.toDate();
          shouldCalculate = true;
        }
      }
      if (locParam) {
        const [latStr, lonStr] = locParam.split(",");
        if (latStr && lonStr) {
          const lat = parseFloat(latStr);
          const lon = parseFloat(lonStr);
          if (!isNaN(lat) && !isNaN(lon)) {
            initialLat = lat;
            initialLon = lon;
            locationName = `Tọa độ: ${lat.toFixed(4)}, ${lon.toFixed(4)}`;
            shouldCalculate = true;
          }
        }
      }
      let tzOffset = 7;
      try {
        const summary = SolarCalculator.getTimezoneSummary({
          lat: initialLat,
          lon: initialLon,
          date: initialDate,
          timezoneName: void 0
          // Auto detect
        });
        initialTz = summary.tzName;
        tzOffset = summary.tzOffsetInit;
      } catch (e) {
        console.warn("Timezone detection failed, using default", e);
      }
      setGeoData({
        lat: initialLat,
        lon: initialLon,
        name: locationName,
        timezone: initialTz,
        country: locParam ? void 0 : "Vietnam"
      });
      setMapCenter([initialLat, initialLon]);
      setMarkerPosition([initialLat, initialLon]);
      setSelectedTimezone(initialTz);
      setDateValue(initialDate);
      setTargetTimezone(initialTz);
      setTargetOffset(tzOffset);
      setTimezoneDisplay(`Múi giờ: ${initialTz} (Offset: ${tzOffset}h)`);
      const clientOffset = initialDate.getTimezoneOffset() / -60;
      setTimezoneOffset(clientOffset);
      if (shouldCalculate) {
        calculateSolarData(initialLat, initialLon, initialDate, clientOffset, tzOffset, initialTz);
      }
    } catch (e) {
      console.warn("Initialization failed:", e);
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full space-y-8", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: messages.description }) }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-gray-100 p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-semibold text-gray-600", children: messages.sectionDateTime }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-700", children: "Tìm kiếm tỉnh / thành phố (Không dấu)" }),
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(CitySearch, { onCitySelect: handleCitySelect }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(MantineProvider, { theme: { primaryColor: "orange" }, children: /* @__PURE__ */ jsx(
          DateTimePicker,
          {
            dropdownType: "modal",
            label: "Thời điểm",
            placeholder: messages.timePlaceholder,
            locale: "vi",
            valueFormat: "DD/MM/YYYY HH:mm",
            value: dateValue,
            onChange: (val) => setDateValue(val),
            className: "w-full"
          }
        ) }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-1 block text-sm font-medium text-gray-700", children: messages.offsetPlaceholder }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              step: "0.5",
              min: "-12",
              max: "14",
              placeholder: messages.offsetPlaceholder,
              disabled: true,
              value: timezoneOffset,
              onChange: (e) => {
                const newOffset = parseFloat(e.target.value);
                setTimezoneOffset(newOffset);
                if (geoData) {
                  setTargetOffset(newOffset);
                }
              },
              className: "w-full"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsx(
        Button,
        {
          onClick: handleManualCalculate,
          disabled: loading || !geoData,
          className: "h-11 w-full cursor-pointer bg-linear-to-r from-amber-500 to-amber-600 text-white transition-all duration-200 hover:from-amber-600 hover:to-amber-700",
          children: loading ? "Đang tính toán..." : "Xem Kết Quả"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-gray-100 p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-semibold text-gray-900", children: messages.sectionLocation }),
      /* @__PURE__ */ jsx(
        MapPicker,
        {
          mapCenter,
          zoom,
          markerPosition,
          onLocationSelect: () => {
          },
          onLocationConfirm: handleLocationConfirm
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "rounded-md bg-red-50 p-4 text-center text-red-600", children: error }),
    loading && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-gray-100 p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-semibold text-gray-900", children: "Đang Tính Toán..." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "mx-auto mb-4 h-8 w-1/3" }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-md border p-4", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "mt-2 h-20 w-full" })
        ] })
      ] })
    ] }),
    geoData && !loading && /* @__PURE__ */ jsxs("div", { ref: resultsRef, className: "rounded-lg", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-4 text-lg font-semibold text-gray-700", children: messages.sectionResults }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6 rounded-sm bg-linear-to-b from-gray-50 to-gray-100 p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 text-center", children: /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-gray-700", children: [
          messages.locationInfo,
          " ",
          geoData.name
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 text-sm md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-white/70 p-3", children: [
            /* @__PURE__ */ jsx("span", { className: "block text-xs font-medium tracking-wider text-gray-600 uppercase", children: messages.coordinates }),
            /* @__PURE__ */ jsxs("span", { className: "mt-1 block text-lg font-bold text-gray-700", children: [
              geoData.lat.toFixed(4),
              "°, ",
              geoData.lon.toFixed(4),
              "°"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border bg-white/70 p-3", children: [
            /* @__PURE__ */ jsx("span", { className: "block text-xs font-medium tracking-wider text-gray-600 uppercase", children: messages.timezone }),
            /* @__PURE__ */ jsx("span", { className: "mt-1 block text-base font-bold text-gray-700", children: timezoneDisplay ?? "Không xác định" })
          ] })
        ] })
      ] }),
      solarData && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-sm bg-linear-to-b from-gray-50 to-gray-100", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse border-gray-200 text-left text-sm", children: [
          /* @__PURE__ */ jsx("thead", { className: "border-b bg-gray-100 text-xs font-bold text-gray-700 uppercase", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "px-2 py-4 text-center md:px-6", children: messages.table.localTime }),
            /* @__PURE__ */ jsx("th", { className: "px-2 py-4 text-center md:px-6", children: messages.table.utc }),
            /* @__PURE__ */ jsx("th", { className: "px-2 py-4 text-center md:px-6", children: messages.table.trueSolarTime }),
            /* @__PURE__ */ jsx("th", { className: "px-2 py-4 text-center md:px-6", children: messages.table.solarNoon }),
            /* @__PURE__ */ jsx("th", { className: "px-2 py-4 text-center md:px-6", children: messages.table.offset })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("td", { className: "px-2 py-4 text-center font-medium text-gray-900 md:px-6", children: /* @__PURE__ */ jsx("div", { className: "text-sm", children: solarData.localTime }) }),
            /* @__PURE__ */ jsx("td", { className: "rounded px-4 py-4 text-center md:px-6", children: solarData.utc }),
            /* @__PURE__ */ jsx("td", { className: "rounded px-4 py-4 text-center md:px-6", children: solarData.trueSolarTime }),
            /* @__PURE__ */ jsx("td", { className: "rounded px-4 py-4 text-center md:px-6", children: solarData.solarNoon }),
            /* @__PURE__ */ jsx("td", { className: "rounded px-4 py-4 text-center md:px-6", children: solarData.tzOffset.toFixed(1) })
          ] }) })
        ] }) }),
        solarData.trueSolarBazi && /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-sm border border-gray-200 bg-linear-to-br from-amber-50 to-amber-100 p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-amber-800 decoration-amber-300 decoration-4 underline-offset-4", children: "Bát Tự (Tứ Trụ) chính xác theo Giờ Mặt Trời" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-col items-center gap-1", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                "Chính xác theo năng lượng thực của Mặt Trời tại tọa độ ",
                geoData.lat.toFixed(4),
                ",",
                " ",
                geoData.lon.toFixed(4),
                " | Giờ Chính Ngọ: ",
                solarData.solarNoon
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "mt-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700", children: [
                "Giờ mặt trời thực tế: ",
                SolarCalculator.formatDateTime(solarData.trueSolarBazi.solarDate, false),
                solarData.trueSolarBazi.isNextDay && /* @__PURE__ */ jsx("span", { className: "ml-1 font-bold text-red-600", children: "(Đã sang ngày mới do quá 23h)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-4", children: [
            (() => {
              const yearCanStyle = getElementColor(solarData.trueSolarBazi.details.yearCan);
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `relative rounded-lg border bg-linear-to-b from-amber-50 to-amber-100 p-4 text-center ring-1 ring-amber-200`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `absolute -top-2 left-1/2 -translate-x-1/2 rounded-sm bg-amber-200 px-3 py-1 text-xs font-bold text-amber-800 shadow-sm`,
                        children: "NĂM"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-col items-center justify-center space-y-1", children: [
                      /* @__PURE__ */ jsx("div", { className: `text-4xl font-bold ${yearCanStyle.text}`, children: solarData.trueSolarBazi.details.yearCan }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `text-4xl font-bold ${getElementColor(solarData.trueSolarBazi.details.yearChi).text}`,
                          children: solarData.trueSolarBazi.details.yearChi
                        }
                      )
                    ] })
                  ]
                }
              );
            })(),
            (() => {
              const monthCanStyle = getElementColor(solarData.trueSolarBazi.details.monthCan);
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `relative rounded-lg border bg-linear-to-b from-amber-50 to-amber-100 p-4 text-center ring-1 ring-amber-200`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `absolute -top-2 left-1/2 -translate-x-1/2 rounded-sm bg-amber-200 px-3 py-1 text-xs font-bold text-amber-800 shadow-sm`,
                        children: "THÁNG"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-col items-center justify-center space-y-1", children: [
                      /* @__PURE__ */ jsx("div", { className: `text-3xl font-bold ${monthCanStyle.text}`, children: solarData.trueSolarBazi.details.monthCan }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `text-3xl font-bold ${getElementColor(solarData.trueSolarBazi.details.monthChi).text}`,
                          children: solarData.trueSolarBazi.details.monthChi
                        }
                      )
                    ] })
                  ]
                }
              );
            })(),
            (() => {
              const dayCanStyle = getElementColor(solarData.trueSolarBazi.details.dayCan);
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `relative rounded-lg border bg-linear-to-b from-amber-50 to-amber-100 p-4 text-center ring-1 ring-amber-200`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `absolute -top-2 left-1/2 -translate-x-1/2 rounded-sm bg-amber-200 px-3 py-1 text-xs font-bold text-amber-800 shadow-sm`,
                        children: "NGÀY"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-col items-center justify-center space-y-1", children: [
                      /* @__PURE__ */ jsx("div", { className: `text-3xl font-bold ${dayCanStyle.text}`, children: solarData.trueSolarBazi.details.dayCan }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `text-3xl font-bold ${getElementColor(solarData.trueSolarBazi.details.dayChi).text}`,
                          children: solarData.trueSolarBazi.details.dayChi
                        }
                      )
                    ] })
                  ]
                }
              );
            })(),
            (() => {
              const hourCanStyle = getElementColor(solarData.trueSolarBazi.details.hourCan);
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `relative rounded-lg border bg-linear-to-b from-amber-50 to-amber-100 p-4 text-center ring-1 ring-amber-200`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `absolute -top-2 left-1/2 -translate-x-1/2 rounded-sm bg-amber-200 px-3 py-1 text-xs font-bold text-amber-800 shadow-sm`,
                        children: "GIỜ"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-col items-center justify-center space-y-1", children: [
                      /* @__PURE__ */ jsx("div", { className: `text-3xl font-bold ${hourCanStyle.text}`, children: solarData.trueSolarBazi.details.hourCan }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `text-3xl font-bold ${getElementColor(solarData.trueSolarBazi.details.hourChi).text}`,
                          children: solarData.trueSolarBazi.details.hourChi
                        }
                      )
                    ] })
                  ]
                }
              );
            })()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center gap-5", children: (() => {
            const solarDate = dayjs.utc(solarData.trueSolarBazi.solarDate);
            const dateParam = solarDate.format("YYYY.MM.DD.HH.mm");
            return /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/tu-vi-tu-tru/the-gioi-theo-vi-tri-sinh?s=1&b=${dateParam}&v=${dateParam}&lat=${geoData.lat.toFixed(4)}&lon=${geoData.lon.toFixed(4)}`,
                  className: "rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Xem Chi Tiết Tử Vi - Bát Tự (Nam)"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `/tu-vi-tu-tru/the-gioi-theo-vi-tri-sinh?s=0&b=${dateParam}&v=${dateParam}&lat=${geoData.lat.toFixed(4)}&lon=${geoData.lon.toFixed(4)}`,
                  className: "rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-700",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Xem Chi Tiết Tử Vi - Bát Tự (Nữ)"
                }
              )
            ] });
          })() })
        ] }),
        solarData.newMoon && /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-sm border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100 p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
            /* @__PURE__ */ jsx("h4", { className: "mb-2 text-xl font-bold text-gray-800", children: "🌙 Thông tin Trăng Mới (Sóc)" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600", children: "Dữ liệu thời gian sóc (Trăng Mới) theo giờ địa phương" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-6 p-3", children: /* @__PURE__ */ jsx("div", { className: "text-center text-sm text-gray-700", children: "Lưu ý: Ngày chứa thời điểm sóc (Trăng Mới) là ngày mồng 1 theo cách tính âm lịch phổ biến" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 text-sm md:grid-cols-2 lg:grid-cols-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100 p-3", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs font-medium tracking-wider text-gray-600 uppercase", children: messages.table.newMoon }),
              /* @__PURE__ */ jsx("span", { className: "mt-1 block text-lg font-bold text-gray-800", children: solarData.newMoon.formattedLocal }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "Giờ dương lịch địa phương" }),
              /* @__PURE__ */ jsxs("span", { className: "block text-xs text-gray-500", children: [
                "Cũng là mồng 1 âm lịch vì ngày chứa thời điểm sóc là ngày mồng 1 theo cách tính âm lịch phổ biến",
                " "
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100 p-3", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs font-medium tracking-wider uppercase", children: messages.table.daysSinceNewMoon }),
              /* @__PURE__ */ jsxs("span", { className: "mt-1 block text-lg font-bold text-gray-800", children: [
                solarData.newMoon.daysElapsed.toFixed(1),
                " ngày"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100 p-3", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs font-medium tracking-wider text-gray-600 uppercase", children: messages.table.lunarDay }),
              /* @__PURE__ */ jsx("span", { className: "mt-1 block text-lg font-bold text-gray-800", children: formatLunarDay(solarData.newMoon.lunarDay) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100 p-3 md:col-span-2 lg:col-span-1", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs font-medium tracking-wider text-gray-600 uppercase", children: messages.table.lunarMonth }),
              /* @__PURE__ */ jsxs("div", { className: "mt-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "block text-lg font-bold text-teal-800", children: [
                  "Tháng ",
                  solarData.newMoon.lunarMonth,
                  " ",
                  solarData.newMoon.isLeapMonth ? /* @__PURE__ */ jsx("strong", { children: "(Nhuận)" }) : ""
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "block text-sm font-bold text-teal-700", children: [
                  "Năm",
                  " ",
                  /* @__PURE__ */ jsxs("span", { className: "", children: [
                    solarData.trueSolarBazi?.details.yearCan,
                    " ",
                    solarData.trueSolarBazi?.details.yearChi
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "mt-1 block text-xs text-teal-600", children: [
                  "(",
                  solarData.newMoon.isBigMonth ? "Tháng Đủ" : "Tháng Thiếu",
                  ")"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}

export { SolarNoonViewerOnline as S };
