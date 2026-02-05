import { jsxs, jsx } from 'react/jsx-runtime';
/* empty css         */
import 'dayjs/locale/vi.js';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
import { useState, useEffect, useRef } from 'react';
import { C as CitySearch, I as Input } from './D_tFXoGc.js';
import { S as SolarCalculator } from './BODF8xcG.js';
import { M as MapPicker, S as Skeleton } from './CthoUXDB.js';
import { B as Button } from './CIiwLcnv.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
const messages = {
  title: "Tra Cứu Lịch Tiết Khí (Online)",
  description: "Công cụ tra cứu các tiết khí trong năm theo tọa độ địa lý - Phiên bản Online.",
  searchPlaceholder: "Nhập tên thành phố (VD: Hà Nội, Ho Chi Minh...)",
  yearPlaceholder: "Năm",
  searchButton: "Tìm Kiếm",
  toggleSearch: "Dùng khi chọn bản đồ không được",
  toggleMap: "Chọn trên bản đồ",
  errorEmpty: "Vui lòng nhập tên thành phố",
  errorGeo: "Không tìm thấy địa điểm này. Vui lòng thử lại.",
  errorApi: "Có lỗi xảy ra khi tính toán tiết khí.",
  locationInfo: "Địa điểm:",
  coordinates: "Tọa độ:",
  timezone: "Múi giờ:",
  offsetPlaceholder: "Offset (giờ)",
  sectionResults: "Kết Quả Tra Cứu",
  table: {
    term: "Tiết Khí",
    utc: "Giờ UTC",
    localTime: "Giờ Hành Chính",
    offset: "Offset"
  }
};
function SolarTermsViewerOnline({
  defaultLat,
  defaultLon,
  defaultName,
  defaultTimezone,
  defaultYear,
  fixedLocation = false
}) {
  const [dateValue, setDateValue] = useState(defaultYear ? new Date(defaultYear, 0, 1) : null);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState(0);
  useEffect(() => {
    if (!dateValue) {
      const now = /* @__PURE__ */ new Date();
      setDateValue(now);
      setYearInput(now.getFullYear().toString());
    }
    if (!fixedLocation) {
      const now = /* @__PURE__ */ new Date();
      const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const currentOffset = now.getTimezoneOffset() / -60;
      setSelectedTimezone(currentTimezone);
      setTimezoneOffset(currentOffset);
    }
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [terms, setTerms] = useState(null);
  const [mapCenter, setMapCenter] = useState([21.0285, 105.8333]);
  const [zoom, setZoom] = useState(6);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [timezoneDisplay, setTimezoneDisplay] = useState(null);
  const [targetTimezone, setTargetTimezone] = useState(null);
  const [targetOffset, setTargetOffset] = useState(null);
  const [yearInput, setYearInput] = useState("");
  const resultsRef = useRef(null);
  dateValue instanceof Date ? dateValue.getFullYear() < 1582 : false;
  useEffect(() => {
    if (dateValue instanceof Date) {
      setYearInput(dateValue.getFullYear().toString());
    }
  }, [dateValue]);
  useEffect(() => {
    try {
      let initialLat = 21.0285;
      let initialLon = 105.8333;
      let initialYear = (/* @__PURE__ */ new Date()).getFullYear();
      let tzName = "Asia/Ho_Chi_Minh";
      let tzOffset = 7;
      let locName = "Hà Nội, Việt Nam";
      let countryName = "Vietnam";
      if (fixedLocation && defaultLat !== void 0 && defaultLon !== void 0) {
        initialLat = defaultLat;
        initialLon = defaultLon;
        initialYear = defaultYear || initialYear;
        tzName = defaultTimezone || tzName;
        locName = defaultName || `Tọa độ: ${initialLat.toFixed(4)}, ${initialLon.toFixed(4)}`;
        if (defaultTimezone) {
          const now = /* @__PURE__ */ new Date();
        }
      } else {
        const params = new URLSearchParams(window.location.search);
        const locParam = params.get("loc");
        const yearParam = params.get("year");
        if (locParam) {
          const [latStr, lonStr] = locParam.split(",");
          if (latStr && lonStr) {
            const lat = parseFloat(latStr);
            const lon = parseFloat(lonStr);
            if (!isNaN(lat) && !isNaN(lon)) {
              initialLat = lat;
              initialLon = lon;
              locName = `Tọa độ: ${initialLat.toFixed(4)}, ${initialLon.toFixed(4)}`;
              countryName = "";
            }
          }
        }
        if (yearParam) {
          const year = parseInt(yearParam);
          if (!isNaN(year)) {
            initialYear = year;
          }
        }
      }
      if (fixedLocation && defaultTimezone) {
        tzName = defaultTimezone;
      }
      try {
        const summary = SolarCalculator.getTimezoneSummary({
          lat: initialLat,
          lon: initialLon,
          date: dayjs().year(initialYear).startOf("year").toDate(),
          timezoneName: fixedLocation ? defaultTimezone : void 0
        });
        tzName = summary.tzName;
        tzOffset = summary.tzOffsetInit;
      } catch (error2) {
        console.warn("Failed to detect timezone:", error2);
      }
      setGeoData({
        lat: initialLat,
        lon: initialLon,
        name: locName,
        timezone: tzName,
        country: countryName
      });
      setMapCenter([initialLat, initialLon]);
      setMarkerPosition([initialLat, initialLon]);
      setSelectedTimezone(tzName);
      const initialDate = dayjs().year(initialYear).startOf("year").toDate();
      setDateValue(initialDate);
      setYearInput(initialYear.toString());
      setTimezoneDisplay(`Múi giờ: ${tzName} (Offset chuẩn khoảng: ${tzOffset}h)`);
      setTimezoneOffset(tzOffset);
      if (fixedLocation || window.location.search.includes("loc") || window.location.search.includes("year")) {
        calculateTerms(initialLat, initialLon, initialYear, tzName);
      } else if (!fixedLocation) {
      }
      if (fixedLocation) {
        calculateTerms(initialLat, initialLon, initialYear, tzName);
      }
    } catch (e) {
      console.warn("Initialization failed:", e);
    }
  }, []);
  useEffect(() => {
    if (fixedLocation) return;
    if (!geoData || !(dateValue instanceof Date)) return;
    const params = new URLSearchParams(window.location.search);
    const yearStr = dateValue.getFullYear().toString();
    const locStr = `${geoData.lat.toFixed(7)},${geoData.lon.toFixed(7)}`;
    const currentYear = params.get("year");
    const currentLoc = params.get("loc");
    if (currentYear !== yearStr || currentLoc !== locStr) {
      params.set("year", yearStr);
      params.set("loc", locStr);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, "", newUrl);
    }
  }, [geoData, dateValue, fixedLocation]);
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
    setTerms(null);
    setError(null);
    setTimezoneDisplay(null);
    let finalTzName;
    let finalOffset;
    try {
      const summary = SolarCalculator.getTimezoneSummary({
        lat,
        lon: normalizedLon,
        date: dateValue || /* @__PURE__ */ new Date(),
        timezoneName
      });
      finalTzName = summary.tzName;
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
    setTimezoneDisplay(`Múi giờ: ${finalTzName} (Offset chuẩn khoảng: ${finalOffset}h)`);
    if (finalTzName) {
      setSelectedTimezone(finalTzName);
    }
    setTimezoneOffset(finalOffset);
  };
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
    if (dateValue instanceof Date) {
      calculateTerms(lat, lon, dateValue.getFullYear(), tz);
    }
  };
  const handleLocationConfirm = (lat, lon, locationName, fixedTimezone) => {
    let normalizedLon = lon;
    while (normalizedLon > 180) normalizedLon -= 360;
    while (normalizedLon < -180) normalizedLon += 360;
    const displayName = locationName || `Tọa độ: ${lat.toFixed(4)}, ${normalizedLon.toFixed(4)}`;
    updateLocationOnly(lat, normalizedLon, displayName, fixedTimezone);
  };
  const calculateTerms = async (lat, lon, yearVal, tz) => {
    setLoading(true);
    try {
      let urlapi = atob("aHR0cDovL2xvY2FsaG9zdDo4Nzg4L2FwaS9zb2xhci10ZXJtcw==");
      if (true) {
        urlapi = atob("L2FwaS9zb2xhci10ZXJtcw==");
      }
      const response = await fetch(urlapi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          year: yearVal,
          lat,
          lon,
          timezone: tz
        })
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || messages.errorApi);
      }
      const data = await response.json();
      setTerms(data.terms);
      setError(null);
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
  const handleManualCalculate = () => {
    if (!geoData) {
      setError("Vui lòng chọn địa điểm trước khi tính toán.");
      return;
    }
    if (!(dateValue instanceof Date)) {
      setError("Vui lòng chọn năm.");
      return;
    }
    setError(null);
    calculateTerms(geoData.lat, geoData.lon, dateValue.getFullYear(), targetTimezone || void 0);
  };
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full rounded-lg px-4", children: [
    !fixedLocation && /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-bold text-amber-600", children: messages.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: messages.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6 rounded-lg bg-gray-100 p-6", children: [
      !fixedLocation && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-700", children: "Tìm kiếm tỉnh / thành phố (Không dấu)" }),
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(CitySearch, { onCitySelect: handleCitySelect, placeholder: messages.searchPlaceholder }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-1 block text-sm font-medium text-gray-700", children: messages.yearPlaceholder }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              min: "1900",
              max: "2100",
              placeholder: messages.yearPlaceholder,
              value: yearInput,
              onChange: (e) => {
                const value = e.target.value;
                setYearInput(value);
                const year = parseInt(value);
                if (!isNaN(year) && year >= 1900 && year <= 2100) {
                  const newDate = new Date(dateValue instanceof Date ? dateValue : /* @__PURE__ */ new Date());
                  newDate.setFullYear(year);
                  setDateValue(newDate);
                } else if (value === "") {
                  setDateValue(null);
                }
              },
              className: "w-full"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium text-gray-700", children: messages.offsetPlaceholder }),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "number",
              step: "0.5",
              min: "-12",
              max: "14",
              placeholder: messages.offsetPlaceholder,
              value: timezoneOffset,
              disabled: true,
              className: "w-full bg-gray-50"
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
    dateValue instanceof Date && dateValue.getFullYear() < 1582 && /* @__PURE__ */ jsx("div", { className: "mb-6 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800", children: /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Lưu ý lịch sử:" }),
      " Bạn đang xem dữ liệu trước năm 1582. Kết quả hiển thị theo Lịch Gregorian (lịch dương hiện tại), có thể lệch vài ngày so với lịch Julius được sử dụng trong lịch sử vào thời điểm đó."
    ] }) }),
    !fixedLocation && /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx(
      MapPicker,
      {
        mapCenter,
        zoom,
        markerPosition,
        onLocationSelect: () => {
        },
        onLocationConfirm: handleLocationConfirm
      }
    ) }),
    error && /* @__PURE__ */ jsx("div", { className: "mb-6 rounded-md bg-red-50 p-4 text-center text-red-600", children: error }),
    loading && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "mx-auto mb-4 h-8 w-1/3" }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-md border p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 grid grid-cols-4 gap-4 border-b pb-2", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-full" }, i)) }),
        [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxs("div", { className: "mb-4 grid grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" })
        ] }, i))
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
      terms && terms.length > 0 && /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-lg border", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "border-b bg-gray-50 text-xs text-gray-700 uppercase", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3", children: messages.table.term }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3", children: messages.table.localTime }),
          /* @__PURE__ */ jsx("th", { className: "px-6 py-3 text-right", children: messages.table.offset })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: terms.map((item, index) => /* @__PURE__ */ jsxs(
          "tr",
          {
            className: `border-b hover:bg-gray-50 ${item.term === "Lập Xuân" ? "bg-red-50/60" : "bg-white"}`,
            children: [
              /* @__PURE__ */ jsxs(
                "td",
                {
                  className: `px-6 py-4 font-medium ${item.term === "Lập Xuân" ? "font-bold text-red-800" : "text-gray-900"}`,
                  children: [
                    item.term,
                    item.term === "Lập Xuân" && /* @__PURE__ */ jsx("div", { className: "text-xs font-normal text-red-600", children: "(Điểm khởi nguyên Chu kỳ khí tiết Năm)" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 font-bold text-blue-600", children: item.localTime }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-right", children: item.tzOffset.toFixed(2) })
            ]
          },
          index
        )) })
      ] }) })
    ] })
  ] });
}

export { SolarTermsViewerOnline as S };
