import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import dayjs from 'dayjs';
import { useState, useEffect, useRef } from 'react';
import { S as SolarCalculator } from './BODF8xcG.js';
/* empty css         */
import 'dayjs/locale/vi.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
import { C as CitySearch, I as Input } from './DxH6TUwF.js';
import { M as MapPicker, S as Skeleton } from './CHheibNO.js';
import { B as Button } from './C2cJs2rg.js';

const TERM_EN = {
  "Lập Xuân": "The Beginning of Spring",
  "Vũ Thủy": "Rain Water",
  "Kinh Trập": "The Waking of Insects",
  "Xuân Phân": "The Spring Equinox",
  "Thanh Minh": "Pure Brightness",
  "Cốc Vũ": "Grain Rain",
  "Lập Hạ": "The Beginning of Summer",
  "Tiểu Mãn": "Lesser Fullness of Grain",
  "Mang Chủng": "Grain in Beard",
  "Hạ Chí": "The Summer Solstice",
  "Tiểu Thử": "Lesser Heat",
  "Đại Thử": "Greater Heat",
  "Lập Thu": "The Beginning of Autumn",
  "Xử Thử": "The End of Heat",
  "Bạch Lộ": "White Dew",
  "Thu Phân": "The Autumn Equinox",
  "Hàn Lộ": "Cold Dew",
  "Sương Giáng": "Frost's Descent",
  "Lập Đông": "The Beginning of Winter",
  "Tiểu Tuyết": "Lesser Snow",
  "Đại Tuyết": "Greater Snow",
  "Đông Chí": "The Winter Solstice",
  "Tiểu Hàn": "Lesser Cold",
  "Đại Hàn": "Greater Cold"
};
const SOLAR_TERM_QUOTES = {
  "Lập Xuân": {
    vi: "Xuân về, vạn vật hồi sinh từ giấc ngủ đông.",
    en: "Spring begins, life awakens from the winter slumber.",
    zh: "立春：春回大地，万物复苏。",
    ja: "立春：春が来りて、万物が蘇る。",
    ko: "입춘: 봄이 시작되니 만물이 다시 살아난다."
  },
  "Vũ Thủy": {
    vi: "Mưa ẩm bắt đầu rơi, nuôi dưỡng mầm non xanh biếc.",
    en: "Rain water falls, nourishing the tender green buds.",
    zh: "雨水：润 vật无声，草木萌动。",
    ja: "雨水：雨が降り始め、草木が芽吹く。",
    ko: "우수: 비가 내리고 싹이 트기 시작한다."
  },
  "Kinh Trập": {
    vi: "Sấm vang động, đánh thức côn trùng ngủ vùi dưới đất.",
    en: "Thunder awakens the hibernating insects underground.",
    zh: "惊蛰：春雷乍响，惊醒蛰伏。",
    ja: "啓蟄：春雷が響き, 虫が穴から出始める。",
    ko: "경칩: 봄천둥이 울려 벌레들이 깨어난다."
  },
  "Xuân Phân": {
    vi: "Ngày đêm cân bằng, dương khí bắt đầu vươn lên.",
    en: "Day and night are balanced, Yang energy rises.",
    zh: "春分：昼夜平分，阴阳平衡。",
    ja: "春分：昼夜が等しくなり、陽気が増す。",
    ko: "춘분: 낮과 밤의 길이가 같고 양기가 솟는다."
  },
  "Thanh Minh": {
    vi: "Trời trong sáng, gió mát lành, lòng người hướng về tổ tiên.",
    en: "Clear and bright skies, a time to honor the ancestors.",
    zh: "清明：天 thanh khí lãng, 祭祖踏青。",
    ja: "清明：空は晴れ渡り、万物が清らか。",
    ko: "청명: 하늘이 맑고 밝으니 조상을 기리는 때."
  },
  "Cốc Vũ": {
    vi: "Mưa rào nuôi dưỡng ngũ cốc, báo hiệu mùa xuân sắp qua.",
    en: "Rain falls for the grain, marking the end of spring.",
    zh: "谷雨：雨 sinh bách cốc, 春季将尽。",
    ja: "穀雨：百穀を潤す雨が降り、春が暮れる。",
    ko: "곡우: 곡식을 기르는 비가 내려 봄이 저문다."
  },
  "Lập Hạ": {
    vi: "Mùa hè bắt đầu, vạn vật bước vào thời kỳ trưởng thành.",
    en: "Summer begins, all things enter the stage of growth.",
    zh: "立夏：夏季开始，万物生长。",
    ja: "立夏：夏が始まり、万物が茂る。",
    ko: "입하: 여름이 시작되어 만물이 자라난다."
  },
  "Tiểu Mãn": {
    vi: "Hạt lúa bắt đầu đầy nhưng chưa chín, nhựa sống căng tràn.",
    en: "Grains become plump but not yet ripe, life flows strong.",
    zh: "小满：物致于此，小得盈满。",
    ja: "小満：命が満ち始め、草木が茂る。",
    ko: "소만: 만물이 점차 자라나 가득 차기 시작한다."
  },
  "Mang Chủng": {
    vi: "Mùa gieo hạt, ngũ cốc có râu bắt đầu được gieo trồng.",
    en: "Time for sowing the bearded grains.",
    zh: "芒种：有芒之谷，忙于播种。",
    ja: "芒種：のぎある穀物を植える時。",
    ko: "망종: 까칠한 곡식 씨를 뿌리는 바쁜 때."
  },
  "Hạ Chí": {
    vi: "Ngày dài nhất năm, dương khí cực thịnh.",
    en: "The longest day of the year, peak of Yang energy.",
    zh: "夏至：日长之至，阳气之极。",
    ja: "夏至：日が最も長く、陽気が極まる。",
    ko: "하지: 낮이 가장 길고 양기가 극에 달한다."
  },
  "Tiểu Thử": {
    vi: "Trời bắt đầu oi bức, nắng nóng dần len lỏi.",
    en: "The weather begins to get sultry, slight heat appears.",
    zh: "小暑：暑 khí tà d渐，天气渐热。",
    ja: "小暑：暑さが本格的になり始める。",
    ko: "소서: 더위가 시작되어 날씨가 차츰 더워진다."
  },
  "Đại Thử": {
    vi: "Nắng nóng cực độ, thời điểm oi ả nhất trong năm.",
    en: "Extreme heat, the most sweltering time of the year.",
    zh: "大暑：大热至极，一年之最。",
    ja: "大暑：暑さが最も厳しい時。",
    ko: "대서: 더위가 가장 심해지는 한여름."
  },
  "Lập Thu": {
    vi: "Mùa thu chớm về, gió mát nhẹ nhàng đuổi cái nóng đi.",
    en: "Autumn begins, cool breezes gently drive away the heat.",
    zh: "立秋：秋季开始，凉风渐起。",
    ja: "立秋：秋が始まり、涼風が吹き始める。",
    ko: "입추: 가을이 시작되어 서늘한 바람이 분다."
  },
  "Xử Thử": {
    vi: "Cái nóng dần tan, báo hiệu sự kết thúc của mùa hè.",
    en: "The heat fades away, marking the end of summer.",
    zh: "处暑：暑气渐消，炎热终止。",
    ja: "処暑：暑さが収まり、秋の気配が深まる。",
    ko: "처서: 더위가 물러가고 가을 기운이 자리 잡는다."
  },
  "Bạch Lộ": {
    vi: "Sương trắng đọng trên cỏ, trời se lạnh về đêm.",
    en: "White dew on the grass, the nights turn crisp.",
    zh: "白露：露凝 mà bạch, 天气转凉。",
    ja: "白露：草に露が降り、秋色が深まる。",
    ko: "백로: 풀잎에 흰 이슬이 맺히고 기온이 내려간다."
  },
  "Thu Phân": {
    vi: "Ngày đêm lại bằng nhau, mùa thu chín muồi.",
    en: "Equinox of autumn, nature is in perfect balance.",
    zh: "秋分：昼夜平分，秋意正浓。",
    ja: "秋分：昼夜が等しくなり、秋が深まる。",
    ko: "추분: 낮과 밤이 같아지며 가을이 깊어간다."
  },
  "Hàn Lộ": {
    vi: "Sương đêm lạnh lẽo, báo hiệu mùa đông không còn xa.",
    en: "The dew is cold, winter is approaching.",
    zh: "寒露：露 thủy nhật hàn, 寒意渐生。",
    ja: "寒露：露が冷たくなり、冬の足音が聞こえる。",
    ko: "한로: 이슬이 차가워져 겨울이 다가옴을 알린다."
  },
  "Sương Giáng": {
    vi: "Sương muối bắt đầu rơi, cỏ cây dần chuyển màu đỏ úa.",
    en: "Frost descends, leaves turn red and withering.",
    zh: "霜降：气 sương mà hạ, 初霜出现。",
    ja: "霜降：霜が降り始め、秋が深まりきる。",
    ko: "상강: 서리가 내리기 시작하고 단풍이 짙어진다."
  },
  "Lập Đông": {
    vi: "Mùa đông bắt đầu, vạn vật đi vào nghỉ ngơi.",
    en: "Winter begins, all things go into dormancy.",
    zh: "立冬：冬季开始，万物收藏。",
    ja: "立冬：冬が始まり、万物が静まる。",
    ko: "입동: 겨울이 시작되어 만물이 갈무리한다."
  },
  "Tiểu Tuyết": {
    vi: "Tuyết bắt đầu rơi nhẹ, trời đất dần trở nên tĩnh lặng.",
    en: "Light snow falls, the world becomes quiet.",
    zh: "小雪：雪 qì 渐 n凝，天寒地冻。",
    ja: "小雪：雪が降り始め、寒さが増す。",
    ko: "소설: 눈이 내리기 시작하고 날씨가 추워진다."
  },
  "Đại Tuyết": {
    vi: "Tuyết rơi dày đặc, vạn vật bị bao phủ bởi màu trắng xóa.",
    en: "Heavy snow covers the world in brilliant white.",
    zh: "大雪：雪 hạ nhi đại, 积雪严寒。",
    ja: "大雪：雪が激しく降り、冬本番となる。",
    ko: "대설: 눈이 많이 내리고 본격적인 추위가 온다."
  },
  "Đông Chí": {
    vi: "Đêm dài nhất năm, điểm khởi đầu của chu kỳ dương khí mới.",
    en: "The longest night, the start of a new Yang cycle.",
    zh: "冬至：日短之至，阳气始生。",
    ja: "冬至：夜が最も長く、陽気が戻り始める。",
    ko: "동지: 밤이 가장 길고 다시 양기가 살아나는 때."
  },
  "Tiểu Hàn": {
    vi: "Cái lạnh nhỏ nhưng thấm thía, Tết đã gần kề.",
    en: "Lesser Cold brings urgency, families gather as year draws near.",
    zh: "小寒：冷气积久，严冬将至。",
    ja: "小寒：寒さが厳しくなり、年越しを待つ。",
    ko: "소한: 본격적인 추위가 시작되고 설이 다가온다."
  },
  "Đại Hàn": {
    vi: "Cái lạnh cực độ, tích lũy năng lượng chuẩn bị cho mùa xuân mới.",
    en: "Greater Cold is the peak of winter, preparing for the new spring.",
    zh: "大寒：寒气之极，岁末将归。",
    ja: "大寒：一年の最も寒い時期。",
    ko: "대한: 일 년 중 가장 추운 때이자 겨울의 끝."
  }
};
function CurrentSolarTerm({ lat, lon, timezone, year }) {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  if (year !== currentYear) {
    return null;
  }
  const [data, setData] = useState(null);
  useEffect(() => {
    const calculate = () => {
      const now = /* @__PURE__ */ new Date();
      const year2 = now.getFullYear();
      const termsCurrentYear = SolarCalculator.getSolarTermsForYear(year2, lon, lat, timezone);
      const termsNextYear = SolarCalculator.getSolarTermsForYear(year2 + 1, lon, lat, timezone);
      const termsPrevYear = SolarCalculator.getSolarTermsForYear(year2 - 1, lon, lat, timezone);
      const allTerms = [...termsPrevYear, ...termsCurrentYear, ...termsNextYear];
      let currentIdx = -1;
      allTerms.sort((a, b) => a.localTime.getTime() - b.localTime.getTime());
      for (let i = 0; i < allTerms.length - 1; i++) {
        if (now.getTime() >= allTerms[i].localTime.getTime() && now.getTime() < allTerms[i + 1].localTime.getTime()) {
          currentIdx = i;
          break;
        }
      }
      if (currentIdx !== -1) {
        const currentTerm2 = allTerms[currentIdx];
        const nextTerm2 = allTerms[currentIdx + 1];
        const diffTime = Math.abs(nextTerm2.localTime.getTime() - now.getTime());
        const daysToNext2 = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
        setData({
          currentTerm: currentTerm2,
          nextTerm: nextTerm2,
          daysToNext: daysToNext2,
          currentDate: now
        });
      }
    };
    calculate();
  }, [lat, lon, timezone]);
  if (!data) return null;
  const { currentTerm, nextTerm, daysToNext } = data;
  const enName = TERM_EN[currentTerm.term] || currentTerm.term;
  const nextEnName = TERM_EN[nextTerm.term] || nextTerm.term;
  const currentTermQuotes = SOLAR_TERM_QUOTES[currentTerm.term];
  const viQuote = currentTermQuotes?.vi || `Tiết khí ${currentTerm.term} đã đến.`;
  const enQuote = currentTermQuotes?.en || `The solar term ${enName} has arrived.`;
  return /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto mb-12 w-full max-w-4xl font-serif", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase", children: "Tiết khí hiện tại" }),
        /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex h-64 w-64 transform flex-col items-center justify-center rounded-full border-4 border-white bg-white shadow-xl transition-transform duration-500 group-hover:scale-105", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 scale-90 rounded-full border border-gray-100" }),
            /* @__PURE__ */ jsx("h3", { className: "mb-2 px-4 text-center text-3xl leading-tight font-bold text-gray-700 md:text-4xl", children: currentTerm.term }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 font-sans text-2xl font-light text-gray-500 md:text-3xl", children: enName.split(" ").length > 3 ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xl md:text-2xl", children: enName.split(" ").slice(0, 2).join(" ") }),
              /* @__PURE__ */ jsx("span", { className: "block text-lg md:text-xl", children: enName.split(" ").slice(2).join(" ") })
            ] }) : enName }),
            /* @__PURE__ */ jsx("div", { className: "mt-3 font-sans text-xs text-gray-400 italic", children: dayjs(currentTerm.localTime).format("MMM D, YYYY") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-0 scale-110 rounded-full bg-amber-100 opacity-50 blur-xl" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mx-4 hidden h-32 w-px bg-linear-to-b from-transparent via-gray-300 to-transparent md:block" }),
      /* @__PURE__ */ jsx("div", { className: "my-2 h-px w-16 bg-gray-300 md:hidden" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase", children: "Tiết khí tiếp theo" }),
        /* @__PURE__ */ jsxs("div", { className: "h-64 w-64 rounded-2xl border border-white/50 bg-white/80 p-8 text-center shadow-lg backdrop-blur-sm transition-all hover:shadow-xl", children: [
          /* @__PURE__ */ jsx("h4", { className: "mb-1 text-xl font-bold text-gray-600", children: nextTerm.term }),
          /* @__PURE__ */ jsx("div", { className: "mb-6 text-sm text-gray-400", children: nextEnName }),
          /* @__PURE__ */ jsx("div", { className: "mb-2 font-sans text-5xl font-light text-slate-700", children: daysToNext }),
          /* @__PURE__ */ jsx("div", { className: "mb-6 font-sans text-xs tracking-widest text-gray-400 uppercase", children: "ngày đếm ngược" }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 pt-4 font-sans text-xs text-gray-500", children: dayjs(nextTerm.localTime).format("MMM D, YYYY") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative max-w-lg border-l-4 border-amber-300 pl-6", children: [
      /* @__PURE__ */ jsxs("p", { className: "mb-3 text-lg leading-relaxed text-slate-600 italic md:text-xl", children: [
        '" ',
        viQuote,
        ' "'
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-slate-500 italic md:text-base", children: [
        '" ',
        enQuote,
        ' "'
      ] })
    ] }) })
  ] });
}

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
const TIMEZONE_COORDINATES = {
  "Asia/Ho_Chi_Minh": [21.0285, 105.8333],
  UTC: [51.4769, -5e-4],
  // Greenwich
  "America/New_York": [40.7128, -74.006],
  "Europe/London": [51.5074, -0.1278],
  "Asia/Tokyo": [35.6895, 139.6917]
};
const messages = {
  title: "Tra Cứu Lịch Tiết Khí",
  description: "Ưu tiên chọn địa điểm trên bản đồ để đạt tốc độ nhanh nhất phần tìm kiếm tên thành phố dùng khi chọn bản đồ không chính xác.",
  searchPlaceholder: "Nhập tên thành phố (VD: Hà Nội, Ho Chi Minh...)",
  yearPlaceholder: "Năm",
  errorApi: "Có lỗi xảy ra khi tính toán tiết khí.",
  locationInfo: "Địa điểm:",
  coordinates: "Tọa độ:",
  timezone: "Múi giờ:",
  offsetPlaceholder: "Offset (giờ)",
  sectionResults: "Kết Quả Tra Cứu",
  table: {
    term: "Tiết Khí",
    localTime: "Giờ Hành Chính",
    offset: "Offset"
  }
};
function SolarTermsViewer() {
  const [dateValue, setDateValue] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState(0);
  useEffect(() => {
    const now = /* @__PURE__ */ new Date();
    setDateValue(now);
    setYearInput(now.getFullYear().toString());
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const currentOffset = now.getTimezoneOffset() / -60;
    setSelectedTimezone(currentTimezone);
    setTimezoneOffset(currentOffset);
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [terms, setTerms] = useState([]);
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
      const params = new URLSearchParams(window.location.search);
      const locParam = params.get("loc");
      const yearParam = params.get("year");
      let initialLat = 21.0285;
      let initialLon = 105.8333;
      let initialYear = (/* @__PURE__ */ new Date()).getFullYear();
      if (locParam) {
        const [latStr, lonStr] = locParam.split(",");
        if (latStr && lonStr) {
          const lat = parseFloat(latStr);
          const lon = parseFloat(lonStr);
          if (!isNaN(lat) && !isNaN(lon)) {
            initialLat = lat;
            initialLon = lon;
          }
        }
      }
      if (yearParam) {
        const year = parseInt(yearParam);
        if (!isNaN(year)) {
          initialYear = year;
        }
      }
      const hanoiTz = "Asia/Ho_Chi_Minh";
      let tzName = hanoiTz;
      let tzOffset = 7;
      if (initialLat !== 21.0285 || initialLon !== 105.8333) {
        try {
          const summary = SolarCalculator.getTimezoneSummary({
            lat: initialLat,
            lon: initialLon,
            date: dayjs().year(initialYear).startOf("year").toDate(),
            timezoneName: void 0
          });
          tzName = summary.tzName;
          tzOffset = summary.tzOffsetInit;
        } catch (error2) {
          console.warn("Failed to detect timezone:", error2);
        }
      }
      setGeoData({
        lat: initialLat,
        lon: initialLon,
        name: locParam ? `Tọa độ: ${initialLat.toFixed(4)}, ${initialLon.toFixed(4)}` : "Hà Nội, Việt Nam",
        timezone: tzName,
        country: locParam ? void 0 : "Vietnam"
      });
      setMapCenter([initialLat, initialLon]);
      setMarkerPosition([initialLat, initialLon]);
      setSelectedTimezone(tzName);
      const initialDate = dayjs().year(initialYear).startOf("year").toDate();
      setDateValue(initialDate);
      setYearInput(initialYear.toString());
      setTimezoneDisplay(`Múi giờ: ${tzName} (Offset chuẩn khoảng: ${tzOffset}h)`);
      calculateTerms(initialLat, initialLon, initialYear, tzName);
    } catch (e) {
      console.warn("Initialization failed:", e);
    }
  }, []);
  useEffect(() => {
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
  }, [geoData, dateValue]);
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
    setTerms([]);
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
  const calculateTerms = (lat, lon, yearVal, tz) => {
    setLoading(true);
    try {
      const { tzName, tzOffsetInit } = SolarCalculator.getTimezoneSummary({
        lat,
        lon,
        date: dayjs().year(yearVal).startOf("year").toDate(),
        timezoneName: tz
      });
      setSelectedTimezone(tzName);
      setTimezoneOffset(tzOffsetInit);
      setTimezoneDisplay(`Múi giờ: ${tzName} (Offset chuẩn khoảng: ${tzOffsetInit}h)`);
      const calculatedTerms = SolarCalculator.getSolarTermsForYear(yearVal, lon, lat, tzName);
      const termsFormatted = calculatedTerms.map((t) => ({
        term: t.term,
        utc: SolarCalculator.formatDateTime(t.utc),
        localTime: SolarCalculator.formatDateTime(t.localTime),
        // solarNoon: t.solarNoon, // Removed as per request
        tzOffset: t.tzOffset
      }));
      setTerms(termsFormatted);
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
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full rounded-lg px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-bold text-amber-600", children: messages.title }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: messages.description })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6 rounded-lg bg-gray-100 p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
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
          /* @__PURE__ */ jsx("label", { className: "mb-1 block text-sm font-medium text-gray-700", children: messages.offsetPlaceholder }),
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
          onClick: () => {
            if (geoData && dateValue instanceof Date) {
              calculateTerms(geoData.lat, geoData.lon, dateValue.getFullYear(), selectedTimezone);
            } else {
              if (!(dateValue instanceof Date)) {
                setError("Vui lòng chọn năm");
                return;
              }
              const coords = TIMEZONE_COORDINATES[selectedTimezone];
              if (coords) {
                const [lat, lon] = coords;
                calculateTerms(lat, lon, dateValue.getFullYear(), selectedTimezone);
              } else {
                setError("Không thể xác định vị trí cho múi giờ này");
              }
            }
          },
          disabled: loading,
          className: "h-11 w-full cursor-pointer bg-linear-to-r from-amber-500 to-amber-600 text-white transition-all duration-200 hover:from-amber-600 hover:to-amber-700",
          children: loading ? "Đang tính toán..." : "Xem Kết Quả"
        }
      ) })
    ] }),
    dateValue instanceof Date && dateValue.getFullYear() < 1582 && /* @__PURE__ */ jsx("div", { className: "mb-6 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800", children: /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Lưu ý lịch sử:" }),
      " Bạn đang xem dữ liệu trước năm 1582. Kết quả hiển thị theo Lịch Gregorian (lịch dương hiện tại), có thể lệch vài ngày so với lịch Julius được sử dụng trong lịch sử vào thời điểm đó."
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx(
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
      terms.length > 0 && !loading && /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-lg border", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm", children: [
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
                    item.term === "Lập Xuân" && /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs font-normal text-red-600", children: "(Điểm khởi nguyên Chu kỳ khí tiết Năm)" })
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

export { CurrentSolarTerm as C, SolarTermsViewer as S };
