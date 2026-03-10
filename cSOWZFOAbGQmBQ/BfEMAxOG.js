import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, j as renderScript, e as addAttribute } from './F_Fel0yb.js';
import 'piccolore';
import 'clsx';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
import { S as SolarCalculator } from './CpgQb43x.js';

const $$Astro$1 = createAstro("https://tinhmenhdo.github.io");
const $$SolarTermsInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SolarTermsInfo;
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#f8f5e6] py-16"> <div class="container mx-auto px-4"> <div class="mb-12 text-center"> <h2 class="mb-4 font-serif text-3xl font-bold text-gray-800">
Tại sao việc tính toán tiết khí chính xác lại quan trọng?
</h2> <p class="text-gray-600 italic">"Năm tháng trôi qua, tiết khí xoay vần - Nền tảng của lịch pháp Á Đông"</p> </div> <div class="grid grid-cols-1 gap-8 md:grid-cols-3"> <!-- Card 1: Nguyên Lý --> <div class="rounded-lg border-t-4 border-amber-500 bg-white p-8 shadow-sm"> <div class="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold tracking-wider text-amber-800 uppercase">
Nguyên Lý Thiên Văn
</div> <h3 class="mb-4 text-xl font-bold text-gray-800">Quỹ Đạo Mặt Trời</h3> <p class="mb-6 text-sm leading-relaxed text-gray-600">
24 tiết khí được xác định dựa trên vị trí của Trái Đất trên quỹ đạo quanh Mặt Trời (Hoàng Đạo). Toàn bộ vòng
          tròn 360° được chia thành 24 cung bằng nhau, mỗi cung 15°.
</p> <ul class="list-disc space-y-3 pl-4 text-sm text-gray-600 marker:text-amber-500"> <li><strong>Hệ thống dương lịch:</strong> Tiết khí thực chất là dương lịch, cố định theo vị trí mặt trời.</li> <li><strong>Điểm mốc:</strong> Bắt đầu từ Lập Xuân (315°) hoặc Xuân Phân (0°).</li> <li><strong>Chu kỳ:</strong> Mỗi tiết khí kéo dài khoảng 15 ngày.</li> </ul> </div> <!-- Card 2: Ý Nghĩa --> <div class="rounded-lg border-t-4 border-green-600 bg-white p-8 shadow-sm"> <div class="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold tracking-wider text-green-800 uppercase">
Ý Nghĩa Thực Tiễn
</div> <h3 class="mb-4 text-xl font-bold text-gray-800">Nhịp Điệu Tự Nhiên</h3> <p class="mb-6 text-sm leading-relaxed text-gray-600">
Tên gọi các tiết khí phản ánh chân thực sự thay đổi của khí hậu, thời tiết và vật hậu trong năm, hướng dẫn
          canh tác nông nghiệp và sinh hoạt.
</p> <ul class="list-disc space-y-3 pl-4 text-sm text-gray-600 marker:text-green-600"> <li> <strong>Quan sát tinh tế:</strong> Phân chia chi tiết các giai đoạn: mưa (Vũ Thủy), sâu nở (Kinh Trập), sương
            (Bạch Lộ)...
</li> <li> <strong>Huyền học:</strong> Tiết khí là cơ sở để xác định lịch can chi trong các môn huyền học phương đông.
</li> <li><strong>Dưỡng sinh:</strong> Chỉ dẫn lối sống hòa hợp với nhịp điệu thiên nhiên.</li> </ul> </div> <!-- Card 3: Công Nghệ --> <div class="rounded-lg border-t-4 border-blue-600 bg-white p-8 shadow-sm"> <div class="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold tracking-wider text-blue-800 uppercase">
Công Nghệ Số
</div> <h3 class="mb-4 text-xl font-bold text-gray-800">Tính Toán Chính Xác</h3> <p class="mb-6 text-sm leading-relaxed text-gray-600">
Kết hợp thuật toán thiên văn hiện đại (Astronomy Engine) với dữ liệu địa lý số hóa để mang lại kết quả chính
          xác tuyệt đối.
</p> <ul class="list-disc space-y-3 pl-4 text-sm text-gray-600 marker:text-blue-600"> <li> <strong>Giờ Mặt Trời (Giờ Chân Thái Dương):</strong> Tính toán dựa trên kinh độ thực tế, không chỉ múi giờ hành
            chính.
</li> <li><strong>Đa Nền Tảng:</strong> Dữ liệu chuẩn hóa cho mọi vị trí trên toàn cầu.</li> <li><strong>Tích Hợp AI:</strong> Phân tích và dự báo dựa trên dữ liệu lịch sử và thiên văn.</li> </ul> </div> </div> </div> </div>`;
}, "/root/code/tmd_astro/src/components/horo/SolarTermsInfo.astro", void 0);

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$SolarTermsSeasons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SolarTermsSeasons;
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const {
    year = (/* @__PURE__ */ new Date()).getFullYear(),
    lat = 21.0285,
    // Hanoi default
    lon = 105.8333,
    timezone: tz = "Asia/Ho_Chi_Minh"
  } = Astro2.props;
  let termsData = [];
  try {
    termsData = SolarCalculator.getSolarTermsForYear(year, lon, lat, tz);
  } catch (e) {
    console.error("Error calculating solar terms:", e);
  }
  const TERM_TO_SEASON = {
    "L\u1EADp Xu\xE2n": "spring",
    "V\u0169 Th\u1EE7y": "spring",
    "Kinh Tr\u1EADp": "spring",
    "Xu\xE2n Ph\xE2n": "spring",
    "Thanh Minh": "spring",
    "C\u1ED1c V\u0169": "spring",
    "L\u1EADp H\u1EA1": "summer",
    "Ti\u1EC3u M\xE3n": "summer",
    "Mang Ch\u1EE7ng": "summer",
    "H\u1EA1 Ch\xED": "summer",
    "Ti\u1EC3u Th\u1EED": "summer",
    "\u0110\u1EA1i Th\u1EED": "summer",
    "L\u1EADp Thu": "autumn",
    "X\u1EED Th\u1EED": "autumn",
    "B\u1EA1ch L\u1ED9": "autumn",
    "Thu Ph\xE2n": "autumn",
    "H\xE0n L\u1ED9": "autumn",
    "S\u01B0\u01A1ng Gi\xE1ng": "autumn",
    "L\u1EADp \u0110\xF4ng": "winter",
    "Ti\u1EC3u Tuy\u1EBFt": "winter",
    "\u0110\u1EA1i Tuy\u1EBFt": "winter",
    "\u0110\xF4ng Ch\xED": "winter",
    "Ti\u1EC3u H\xE0n": "winter",
    "\u0110\u1EA1i H\xE0n": "winter"
  };
  const TERM_VI = {
    // Mùa Xuân
    "L\u1EADp Xu\xE2n": "B\u1EAFt \u0111\u1EA7u m\xF9a xu\xE2n, v\u1EA1n v\u1EADt kh\u1EDFi \u0111\u1EA7u chu k\u1EF3 m\u1EDBi",
    "V\u0169 Th\u1EE7y": "M\u01B0a xu\xE2n xu\u1EA5t hi\u1EC7n, \u0111\u1ED9 \u1EA9m t\u0103ng cao, c\xE2y xanh l\xE1",
    "Kinh Tr\u1EADp": "S\xE2u b\u01B0\u1EDBm t\u1EC9nh gi\u1EA5c, s\u1EA5m m\xF9a xu\xE2n vang kh\u1EAFp tr\u1EDDi",
    "Xu\xE2n Ph\xE2n": "Gi\u1EEFa xu\xE2n, th\u1EDDi \u0111i\u1EC3m ng\xE0y v\xE0 \u0111\xEAm d\xE0i b\u1EB1ng nhau",
    "Thanh Minh": "Ti\u1EBFt tr\u1EDDi trong s\xE1ng, th\u1EDDi gian t\u1EA3o m\u1ED9 t\u1ED5 ti\xEAn",
    "C\u1ED1c V\u0169": "M\u01B0a r\xE0o thu\u1EADn l\u1EE3i cho c\xE1c lo\u1EA1i ng\u0169 c\u1ED1c ph\xE1t tri\u1EC3n",
    // Mùa Hạ
    "L\u1EADp H\u1EA1": "B\u1EAFt \u0111\u1EA7u m\xF9a h\xE8, nhi\u1EC7t \u0111\u1ED9 t\u0103ng nhanh, n\u1EAFng d\u1EA7n g\u1EAFt",
    "Ti\u1EC3u M\xE3n": "L\xFAa b\u1EAFt \u0111\u1EA7u k\u1EBFt h\u1EA1t nh\u01B0ng v\u1EABn c\xF2n ch\u01B0a ch\xEDn h\u1EB3n",
    "Mang Ch\u1EE7ng": "Ng\u0169 c\u1ED1c tr\u1ED5 b\xF4ng, th\u1EDDi \u0111i\u1EC3m b\u1EADn r\u1ED9n gieo tr\u1ED3ng",
    "H\u1EA1 Ch\xED": "\u0110\u1EC9nh \u0111i\u1EC3m m\xF9a h\xE8, ng\xE0y d\xE0i nh\u1EA5t trong c\u1EA3 m\u1ED9t n\u0103m",
    "Ti\u1EC3u Th\u1EED": "Th\u1EDDi ti\u1EBFt b\u1EAFt \u0111\u1EA7u oi b\u1EE9c nh\u01B0ng ch\u01B0a ph\u1EA3i n\xF3ng nh\u1EA5t",
    "\u0110\u1EA1i Th\u1EED": "Th\u1EDDi ti\u1EBFt c\u1EF1c k\u1EF3 oi g\u1EAFt, n\xF3ng n\u1EF1c nh\u1EA5t trong n\u0103m",
    // Mùa Thu
    "L\u1EADp Thu": "B\u1EAFt \u0111\u1EA7u m\xF9a thu, kh\xED tr\u1EDDi tr\u1EDF n\xEAn m\xE1t m\u1EBB d\u1EC5 ch\u1ECBu",
    "X\u1EED Th\u1EED": "N\u1EAFng n\xF3ng d\u1EA7n k\u1EBFt th\xFAc, c\xE1i n\xF3ng m\xF9a h\xE8 r\xFAt lui",
    "B\u1EA1ch L\u1ED9": "S\u01B0\u01A1ng tr\u1EAFng xu\u1EA5t hi\u1EC7n, ban \u0111\xEAm b\u1EAFt \u0111\u1EA7u se l\u1EA1nh",
    "Thu Ph\xE2n": "Gi\u1EEFa thu, th\u1EDDi \u0111i\u1EC3m ng\xE0y v\xE0 \u0111\xEAm d\xE0i b\u1EB1ng nhau",
    "H\xE0n L\u1ED9": "S\u01B0\u01A1ng m\xF9 l\u1EA1nh l\u1EBDo, b\xE1o hi\u1EC7u m\xF9a \u0111\xF4ng \u0111ang s\u1EAFp \u0111\u1EBFn",
    "S\u01B0\u01A1ng Gi\xE1ng": "S\u01B0\u01A1ng \u0111\u1ECDng th\xE0nh mu\u1ED1i, nhi\u1EC7t \u0111\u1ED9 gi\u1EA3m xu\u1ED1ng r\u1EA5t s\xE2u",
    // Mùa Đông
    "L\u1EADp \u0110\xF4ng": "B\u1EAFt \u0111\u1EA7u m\xF9a \u0111\xF4ng, v\u1EA1n v\u1EADt chuy\u1EC3n sang ngh\u1EC9 ng\u01A1i",
    "Ti\u1EC3u Tuy\u1EBFt": "Tuy\u1EBFt b\u1EAFt \u0111\u1EA7u r\u01A1i nh\u1EB9 \u1EDF c\xE1c v\xF9ng ph\xEDa ph\u01B0\u01A1ng B\u1EAFc",
    "\u0110\u1EA1i Tuy\u1EBFt": "Tuy\u1EBFt r\u01A1i r\u1EA5t d\xE0y \u0111\u1EB7c, kh\xED h\u1EADu tr\u1EDF n\xEAn r\u1EA5t l\u1EA1nh",
    "\u0110\xF4ng Ch\xED": "\u0110\u1EC9nh \u0111i\u1EC3m m\xF9a \u0111\xF4ng, \u0111\xEAm d\xE0i nh\u1EA5t trong c\u1EA3 m\u1ED9t n\u0103m",
    "Ti\u1EC3u H\xE0n": "Th\u1EDDi ti\u1EBFt r\xE9t nh\u1EB9, b\u1EAFt \u0111\u1EA7u giai \u0111o\u1EA1n gi\xE1 r\xE9t \u0111\u1EADm",
    "\u0110\u1EA1i H\xE0n": "Th\u1EDDi ti\u1EBFt r\xE9t \u0111\u1EADm, giai \u0111o\u1EA1n l\u1EA1nh nh\u1EA5t c\u1EE7a c\u1EA3 n\u0103m"
  };
  const TERM_EN = {
    "L\u1EADp Xu\xE2n": "The Beginning of Spring",
    "V\u0169 Th\u1EE7y": "Rain Water",
    "Kinh Tr\u1EADp": "The Waking of Insects",
    "Xu\xE2n Ph\xE2n": "The Spring Equinox",
    "Thanh Minh": "Pure Brightness",
    "C\u1ED1c V\u0169": "Grain Rain",
    "L\u1EADp H\u1EA1": "The Beginning of Summer",
    "Ti\u1EC3u M\xE3n": "Lesser Fullness of Grain",
    "Mang Ch\u1EE7ng": "Grain in Beard",
    "H\u1EA1 Ch\xED": "The Summer Solstice",
    "Ti\u1EC3u Th\u1EED": "Lesser Heat",
    "\u0110\u1EA1i Th\u1EED": "Greater Heat",
    "L\u1EADp Thu": "The Beginning of Autumn",
    "X\u1EED Th\u1EED": "The End of Heat",
    "B\u1EA1ch L\u1ED9": "White Dew",
    "Thu Ph\xE2n": "The Autumn Equinox",
    "H\xE0n L\u1ED9": "Cold Dew",
    "S\u01B0\u01A1ng Gi\xE1ng": "Frost's Descent",
    "L\u1EADp \u0110\xF4ng": "The Beginning of Winter",
    "Ti\u1EC3u Tuy\u1EBFt": "Lesser Snow",
    "\u0110\u1EA1i Tuy\u1EBFt": "Greater Snow",
    "\u0110\xF4ng Ch\xED": "The Winter Solstice",
    "Ti\u1EC3u H\xE0n": "Lesser Cold",
    "\u0110\u1EA1i H\xE0n": "Greater Cold"
  };
  const TERM_ORDER = [
    "L\u1EADp Xu\xE2n",
    "V\u0169 Th\u1EE7y",
    "Kinh Tr\u1EADp",
    "Xu\xE2n Ph\xE2n",
    "Thanh Minh",
    "C\u1ED1c V\u0169",
    "L\u1EADp H\u1EA1",
    "Ti\u1EC3u M\xE3n",
    "Mang Ch\u1EE7ng",
    "H\u1EA1 Ch\xED",
    "Ti\u1EC3u Th\u1EED",
    "\u0110\u1EA1i Th\u1EED",
    "L\u1EADp Thu",
    "X\u1EED Th\u1EED",
    "B\u1EA1ch L\u1ED9",
    "Thu Ph\xE2n",
    "H\xE0n L\u1ED9",
    "S\u01B0\u01A1ng Gi\xE1ng",
    "L\u1EADp \u0110\xF4ng",
    "Ti\u1EC3u Tuy\u1EBFt",
    "\u0110\u1EA1i Tuy\u1EBFt",
    "\u0110\xF4ng Ch\xED",
    "Ti\u1EC3u H\xE0n",
    "\u0110\u1EA1i H\xE0n"
  ];
  termsData.sort((a, b) => {
    return TERM_ORDER.indexOf(a.term) - TERM_ORDER.indexOf(b.term);
  });
  const formatDate = (date) => {
    return dayjs.utc(date).format("dddd, ng\xE0y DD, MMMM l\xFAc HH:mm:ss");
  };
  const seasonTerms = { spring: [], summer: [], autumn: [], winter: [] };
  termsData.forEach((term) => {
    const seasonKey = TERM_TO_SEASON[term.term];
    if (seasonKey) {
      seasonTerms[seasonKey].push({
        name: term.term,
        enName: TERM_EN[term.term],
        viName: TERM_VI[term.term],
        date: formatDate(term.localTime),
        fullDate: dayjs.utc(term.localTime).format("YYYY-MM-DD HH:mm"),
        utcDate: term.utc
      });
    }
  });
  const SEASONS = [
    {
      key: "spring",
      name: "Spring",
      element: "Wood",
      viName: "M\xF9a Xu\xE2n",
      viElement: "M\u1ED9c",
      textColor: "text-[#6B8E23]",
      // Sage/Green
      borderColor: "border-[#6B8E23]",
      terms: seasonTerms.spring
    },
    {
      key: "summer",
      name: "Summer",
      element: "Fire",
      viName: "M\xF9a H\u1EA1",
      viElement: "H\u1ECFa",
      textColor: "text-[#CD5C5C]",
      // IndianRed/Rust
      borderColor: "border-[#CD5C5C]",
      terms: seasonTerms.summer
    },
    {
      key: "autumn",
      name: "Autumn",
      element: "Metal",
      viName: "M\xF9a Thu",
      viElement: "Kim",
      // textColor: 'text-[#DAA520]', // GoldenRod
      // borderColor: 'border-[#DAA520]',
      textColor: "text-[#777777]",
      // GoldenRod
      borderColor: "border-[#777777]",
      terms: seasonTerms.autumn
    },
    {
      key: "winter",
      name: "Winter",
      element: "Water",
      viName: "M\xF9a \u0110\xF4ng",
      viElement: "Th\u1EE7y",
      textColor: "text-[#4682B4]",
      // SteelBlue
      borderColor: "border-[#4682B4]",
      terms: seasonTerms.winter
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white py-12 font-serif"> <div class="mb-16 text-center"> <h2 class="text-3xl font-bold tracking-wide text-gray-800">Lịch 24 tiết khí năm ${year} bắt đầu khi nào?</h2> <p class="mt-3 font-sans text-sm text-gray-500 italic">
"Hệ thống 24 tiết khí phản ánh sự vận động của mặt trời, là kim chỉ nam cho nông nghiệp, sức khỏe và đời sống tinh
      thần của người phương Đông. Đồng thời là cơ sở tính toán của nhiều hệ thống huyền học."
</p> <div class="mt-2 font-sans text-xs text-gray-400">
Location: ${tz} (${lat.toFixed(5)}, ${lon.toFixed(5)}) • Year: ${year} </div> </div> <div class="container mx-auto max-w-7xl px-4"> <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-5"> ${SEASONS.map((season) => renderTemplate`<div class="flex flex-col rounded-lg border border-gray-200 px-5 py-5 shadow-sm">  <div${addAttribute(`mb-8 flex items-start border-l-4 pl-4 ${season.borderColor}`, "class")}> <div class="flex flex-col"> <span${addAttribute(`text-2xl font-bold tracking-wider ${season.textColor}`, "class")}> ${season.viName} • <br> ${season.viElement} </span>  </div> </div>  <div class="space-y-8"> ${season.terms.map((term) => renderTemplate`<div class="solar-term-item group relative -mx-2 flex flex-row flex-wrap items-baseline justify-between rounded-lg p-2 transition-all duration-300"${addAttribute(term.utcDate.toISOString(), "data-date")}> <div class="flex w-full flex-row flex-wrap"> <div class="term-name mt-0.5 w-full font-sans text-xl font-bold text-gray-800 transition-colors"> ${term.name} </div> <div class="term-subname text-base font-medium text-gray-500 transition-colors group-hover:text-amber-600">  ${term.viName} </div> </div> <div class="w-full shrink-0 font-sans text-sm text-gray-500 italic"${addAttribute(term.fullDate, "title")}> ${term.date} </div> </div>`)} </div> </div>`)} </div> </div> </div> ${renderScript($$result, "/root/code/tmd_astro/src/components/horo/SolarTermsSeasons.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/code/tmd_astro/src/components/horo/SolarTermsSeasons.astro", void 0);

export { $$SolarTermsSeasons as $, $$SolarTermsInfo as a };
