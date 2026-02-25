import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import 'dayjs/locale/vi.js';
import dayjs from 'dayjs';
import React from 'react';
import { t as tkHND } from './BoGaZN0a.js';
import { T as TKN } from './Dc1Oa40J.js';

dayjs.locale("vi");
const NgayGioSocCP = ({ dt }) => {
  const yearCheck = dayjs(dt).year();
  const sc = tkHND[yearCheck]?.sc;
  const tk = tkHND[yearCheck]?.tk;
  const prevYearDongChi = yearCheck > 1e3 ? tkHND[yearCheck - 1]?.tk?.[23] : null;
  const currYearDongChi = tkHND[yearCheck]?.tk?.[23];
  const prevYearDaiHan = yearCheck > 1e3 ? yearCheck >= 1583 ? tkHND[yearCheck - 1]?.tk?.[1] : tkHND[yearCheck - 1]?.tk?.[0] : null;
  const currYearDaiHan = yearCheck >= 1583 ? tkHND[yearCheck]?.tk?.[1] : tkHND[yearCheck]?.tk?.[0];
  const hasThirteenMoons = sc && sc.length === 13;
  const findFirstNewMoonAfterDongChi = () => {
    if (!prevYearDongChi || !sc) return null;
    const firstNewMoonAfterDongChi2 = sc.find((moonTime) => moonTime > prevYearDongChi);
    if (!firstNewMoonAfterDongChi2) return null;
    const firstNewMoonIndex = sc.indexOf(firstNewMoonAfterDongChi2);
    const firstNewMoonDate = dayjs.unix(firstNewMoonAfterDongChi2);
    return {
      index: firstNewMoonIndex,
      date: firstNewMoonDate,
      timestamp: firstNewMoonAfterDongChi2
    };
  };
  const findLunarNewYear = () => {
    if (!currYearDaiHan || !sc) return null;
    let lunarMonthWithDaiHan = -1;
    let newMoonAfterDaiHan = null;
    for (let i = 0; i < sc.length; i++) {
      const currentNewMoon = sc[i];
      if (currentNewMoon >= currYearDaiHan) {
        lunarMonthWithDaiHan = i;
        newMoonAfterDaiHan = currentNewMoon;
        break;
      }
    }
    if (lunarMonthWithDaiHan === -1 || newMoonAfterDaiHan === null) return null;
    return {
      index: lunarMonthWithDaiHan,
      date: dayjs.unix(newMoonAfterDaiHan),
      timestamp: newMoonAfterDaiHan,
      hasDaiHan: true
    };
  };
  const firstNewMoonAfterDongChi = findFirstNewMoonAfterDongChi();
  const lunarNewYear = findLunarNewYear();
  const hasLeapMonth = () => {
    if (!prevYearDongChi || !currYearDongChi || !sc) return false;
    const newMoonsBetweenDongChi = sc.filter((time) => time > prevYearDongChi && time < currYearDongChi);
    return newMoonsBetweenDongChi.length > 12;
  };
  const isLeapYear = hasLeapMonth();
  const determineLeapMonthCandidate = () => {
    if (!isLeapYear || !sc || !prevYearDongChi || !currYearDongChi) return null;
    const newMoonsBetweenDongChi = sc.filter((time) => time > prevYearDongChi && time < currYearDongChi);
    if (newMoonsBetweenDongChi.length <= 12) return null;
    const middleIndex = Math.floor(newMoonsBetweenDongChi.length / 2);
    const estimatedLeapMonthIndex = sc.indexOf(newMoonsBetweenDongChi[middleIndex]);
    return estimatedLeapMonthIndex >= 0 ? estimatedLeapMonthIndex : null;
  };
  const leapMonthCandidate = determineLeapMonthCandidate();
  const getLunarMonthNumber = (monthIdx) => {
    if (!lunarNewYear) return "N/A";
    if (monthIdx === lunarNewYear.index) {
      return "1";
    }
    if (monthIdx > lunarNewYear.index) {
      const monthNum = monthIdx - lunarNewYear.index + 1;
      return isLeapYear && monthIdx === leapMonthCandidate ? `${monthNum} (nhuận)` : `${monthNum}`;
    }
    const prevMonthNum = 12 - (lunarNewYear.index - monthIdx - 1);
    if (prevMonthNum <= 0) {
      return `${prevMonthNum + 12}`;
    }
    return `${prevMonthNum}`;
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQ Page",
    name: `Ngày giờ sóc chính xác năm ${yearCheck}`,
    mainEntity: sc?.map((time, idx) => ({
      "@type": "Question",
      name: `Ngày giờ sóc lần ${idx + 1} năm ${yearCheck} bắt đầu lúc nào?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Ngày giờ sóc lần ${idx + 1} năm ${yearCheck} bắt đầu lúc ${dayjs.unix(time).format("HH:mm - DD/MM/YYYY")}.`
      }
    })) || []
  };
  const generateYearLinks = (yearCheck2) => {
    const years = Array.from({ length: 11 }, (_, i) => yearCheck2 - 5 + i);
    return years.map((year, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: `mx-1 inline-block ${year === yearCheck2 ? "bg-orange-100 font-medium text-black" : "text-black"} rounded border border-gray-200 px-2 py-1 text-sm hover:text-[#c0635c]`,
          href: `/ngay-gio-soc-chinh-xac/${year}`,
          children: [
            "Ngày giờ sóc năm ",
            year
          ]
        },
        year
      ),
      index < years.length - 1 && " | "
    ] }, year));
  };
  const generateLongRangeYearLinks = (yearCheck2) => {
    const yearJumps = [
      { label: "Giờ sóc 10 năm trước", year: yearCheck2 - 10 },
      { label: "Giờ sóc 100 năm trước", year: yearCheck2 - 100 },
      { label: "Giờ sóc 10 năm sau", year: yearCheck2 + 10 },
      { label: "Giờ sóc 100 năm sau", year: yearCheck2 + 100 }
    ];
    const validYearJumps = yearJumps.filter((jump) => jump.year > 1e3 && jump.year < 2099);
    return validYearJumps.map((jump, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: `mx-1 inline-block ${jump.year === yearCheck2 ? "bg-orange-100 font-medium text-black" : "text-black"} rounded border border-gray-200 px-2 py-1 text-sm hover:text-[#c0635c]`,
          href: `/ngay-gio-soc-chinh-xac/${jump.year}`,
          children: [
            jump.label,
            " (",
            jump.year,
            ")"
          ]
        }
      ),
      index < validYearJumps.length - 1 && " | "
    ] }, jump.year));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 my-8 mt-4 mb-10 px-4 pt-15 text-sm", children: [
      /* @__PURE__ */ jsxs("h1", { className: "mt-10 mb-5 text-center text-2xl font-bold", children: [
        "Ngày giờ sóc chính xác năm ",
        yearCheck,
        " - Thời điểm trăng non, trăng mới - tại Việt Nam (UTC+7)"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
        /* @__PURE__ */ jsx("strong", { className: "font-normal", children: "Giờ Sóc" }),
        " là khoảnh khắc đặc biệt trong lịch âm dương, khi Mặt Trăng nằm giữa Trái Đất và Mặt Trời, tạo nên pha trăng non đầy cuốn hút. Đây không chỉ là hiện tượng thiên văn đánh dấu sự bắt đầu của mỗi tháng âm lịch, mà còn là nền tảng cho lịch âm – kim chỉ nam của nông nghiệp và lễ hội truyền thống. Kết hợp giữa khoa học và văn hóa, Giờ Sóc mang đến sự giao thoa độc đáo, khơi gợi tò mò về chu kỳ thiên nhiên kỳ diệu.!"
      ] }),
      hasThirteenMoons && /* @__PURE__ */ jsxs("div", { className: "mb-6 rounded-lg bg-amber-100 p-4 text-amber-800", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-bold text-amber-900", children: [
          "Lưu ý: Năm",
          yearCheck,
          " có 13 lần trăng mới"
        ] }),
        /* @__PURE__ */ jsx("p", { children: isLeapYear ? `Đây là năm có tháng nhuận trong âm lịch vì có ${hasThirteenMoons ? "13" : "nhiều"} trăng mới giữa hai tiết Đông Chí liên tiếp.` : `` }),
        lunarNewYear && /* @__PURE__ */ jsxs("p", { className: "mt-1", children: [
          "Tháng 1 âm lịch bắt đầu vào ngày ",
          /* @__PURE__ */ jsx("strong", { children: lunarNewYear.date.format("DD/MM/YYYY") }),
          "."
        ] })
      ] }),
      lunarNewYear && /* @__PURE__ */ jsxs("div", { className: "mb-6 rounded-lg bg-emerald-100 p-3 text-emerald-800", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-bold", children: "Thông tin Tháng 1 âm lịch" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Tháng 1 âm lịch bắt đầu vào ngày",
          lunarNewYear.date.format("DD/MM/YYYY")
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Đây là trăng mới lần thứ ",
          lunarNewYear.index + 1,
          " trong năm ",
          yearCheck
        ] })
      ] }),
      tkHND[yearCheck] !== null && /* @__PURE__ */ jsx("div", { className: "-mx-4 overflow-x-auto px-4", children: /* @__PURE__ */ jsxs("table", { className: "mx-auto w-full table-auto", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-100", children: [
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-2 text-left whitespace-nowrap", children: "Giờ Sóc" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-2 text-left whitespace-nowrap", children: "Thời Gian" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-2 text-left whitespace-nowrap", children: "Tháng Âm Lịch" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-2 text-left whitespace-nowrap", children: "Tiết Khí" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: sc?.map((timeUnix, monthIdx) => {
          if (timeUnix === null) return null;
          const djTime = dayjs.unix(timeUnix);
          const isLunarNewYear = lunarNewYear && monthIdx === lunarNewYear.index;
          const firstAfterDongChi = firstNewMoonAfterDongChi && monthIdx === firstNewMoonAfterDongChi.index;
          const isPrevDongChi = prevYearDongChi && Math.abs(timeUnix - prevYearDongChi) < 86400;
          const isCurrDongChi = currYearDongChi && Math.abs(timeUnix - currYearDongChi) < 86400;
          const isPrevDaiHan = prevYearDaiHan && Math.abs(timeUnix - prevYearDaiHan) < 86400;
          const isCurrDaiHan = currYearDaiHan && Math.abs(timeUnix - currYearDaiHan) < 86400;
          const isBeforeCurrDaiHan = currYearDaiHan && timeUnix < currYearDaiHan;
          const isDongChi = isPrevDongChi || isCurrDongChi;
          const isDaiHan = isPrevDaiHan || isCurrDaiHan;
          const lunarMonth = getLunarMonthNumber(monthIdx);
          const tietKhiInMonth = [];
          if (tk) {
            const nextMonthTime = monthIdx < sc.length - 1 ? sc[monthIdx + 1] : dayjs(`${yearCheck + 1}-01-01`).unix();
            tk.forEach((tietKhiTime, tietKhiIdx) => {
              if (tietKhiTime && tietKhiTime >= timeUnix && tietKhiTime < nextMonthTime) {
                tietKhiInMonth.push({
                  index: tietKhiIdx,
                  time: tietKhiTime
                });
              }
            });
          }
          let rowClass = "odd:bg-white even:bg-gray-50 hover:bg-orange-200";
          if (isLunarNewYear) rowClass += " bg-amber-50";
          else if (isDongChi) rowClass += " bg-blue-50";
          else if (isDaiHan) rowClass += " bg-purple-50";
          else if (firstAfterDongChi && !isLunarNewYear) rowClass += " bg-indigo-50";
          return /* @__PURE__ */ jsxs("tr", { className: rowClass, children: [
            /* @__PURE__ */ jsx("td", { className: "min-w-[100px] border px-4 py-2", children: /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
              "Giờ Sóc lần ",
              monthIdx + 1
            ] }) }),
            /* @__PURE__ */ jsxs("td", { className: "min-w-[160px] border px-4 py-2 whitespace-nowrap", children: [
              /* @__PURE__ */ jsx("time", { dateTime: djTime.format("YYYY-MM-DD HH:mm"), children: djTime.format("HH:mm - DD/MM/YYYY") }),
              /* @__PURE__ */ jsx("div", { className: "text-sm italic", children: isLunarNewYear ? /* @__PURE__ */ jsx("span", { className: "text-green-700", children: "Tháng 1 âm lịch" }) : isBeforeCurrDaiHan ? /* @__PURE__ */ jsx("span", { className: "text-red-700", children: "Giờ Sóc trước trung khí Đại Hàn" }) : /* @__PURE__ */ jsx(Fragment, {}) })
            ] }),
            /* @__PURE__ */ jsx("td", { className: "min-w-[100px] border px-4 py-2", children: /* @__PURE__ */ jsx(
              "b",
              {
                className: `${isLunarNewYear ? "text-amber-700" : "text-[#555]"}`,
                children: !isBeforeCurrDaiHan ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Tháng",
                  lunarMonth
                ] }) : /* @__PURE__ */ jsx(Fragment, {})
              }
            ) }),
            /* @__PURE__ */ jsx("td", { className: "min-w-[180px] border px-4 py-2", children: tietKhiInMonth.length > 0 ? /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-2", children: tietKhiInMonth.map((tietKhi, idx) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "text-blue-800 last:border-t last:border-dashed last:pt-[5px]",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "inline-block w-[100px] font-medium", children: TKN[tietKhi.index] }),
                  /* @__PURE__ */ jsx("span", { className: "ml-1 text-sm whitespace-nowrap text-gray-600", children: dayjs.unix(tietKhi.time).format("HH:mm - DD/MM/YYYY") })
                ]
              },
              `tk-${monthIdx}-${idx}`
            )) }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "-" }) })
          ] }, `sc${monthIdx}`);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("hr", { className: "my-5" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-[14px] font-bold", children: "Ngày giờ sóc các năm gần đây" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 pb-2", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-orange mx-1 inline-block rounded border border-gray-200 bg-green-100 px-2 py-1 text-sm hover:text-[#c0635c]",
            href: "/ngay-gio-soc-chinh-xac",
            children: "Năm hiện tại"
          }
        ),
        generateYearLinks(yearCheck)
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 mb-2 text-[14px] font-bold", children: "Xem ngày giờ sóc các năm xa hơn" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pb-2 text-[#b4b4b4]", children: generateLongRangeYearLinks(yearCheck) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 mb-4 rounded-lg bg-gray-100 p-4 text-gray-800", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-3 text-lg font-bold", children: "Giờ Sóc, Tiết Khí và Cách Xác Định Tháng Giêng Âm Lịch Chuẩn Nhất" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1", children: [
          "Bạn tò mò về cách âm lịch xác định tháng Giêng dựa trên ",
          /* @__PURE__ */ jsx("strong", { children: "giờ Sóc" }),
          " và",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "tiết khí" }),
          "? Hãy cùng khám phá quy tắc chuẩn, vai trò của trăng mới, và cách nhận biết năm nhuận trong âm lịch qua bài viết này!"
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-md mt-4 mb-2 font-bold", children: "Nguyên tắc xác định tháng Giêng âm lịch" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-1", children: [
          "Trong lịch âm, tháng Giêng (tháng 1) là tháng chứa ",
          /* @__PURE__ */ jsx("strong", { children: "tiết Lập Xuân" }),
          " (thường rơi vào 3-5/2 dương lịch). Đây là tháng đầu tiên sau tháng có trung khí ",
          /* @__PURE__ */ jsx("strong", { children: "Đại Hàn" }),
          " (khoảng 20-21/1 dương lịch), bắt đầu từ ",
          /* @__PURE__ */ jsx("strong", { children: "giờ Sóc" }),
          " (thời điểm trăng mới)."
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-md mt-4 mb-2 font-bold", children: "Vai trò của giờ Sóc và tiết khí năm nhuận âm lịch: Điều chỉnh dựa trên tiết khí" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1", children: "Một năm âm lịch thường có 12 tháng (khoảng 354 ngày), ngắn hơn năm dương lịch (365.25 ngày). Để cân bằng, âm lịch thêm tháng nhuận với quy tắc:" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-2 list-disc space-y-2 pl-5", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "Nếu giữa hai ",
            /* @__PURE__ */ jsx("strong", { children: "tiết Đông Chí" }),
            " liên tiếp có ",
            /* @__PURE__ */ jsx("strong", { children: "13 lần giờ Sóc" }),
            " (trăng mới), năm đó sẽ có ",
            /* @__PURE__ */ jsx("strong", { children: "13 tháng" }),
            ", bao gồm một tháng nhuận."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Tháng nhuận là tháng không chứa ",
            /* @__PURE__ */ jsx("strong", { children: "tiết khí" }),
            " nào trong 12 trung khí chính của năm."
          ] })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "text-md mt-4 mb-2 font-bold", children: "Ví dụ thực tế: Giờ Sóc và âm lịch năm 2022" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-2 list-disc space-y-2 pl-5", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "Trăng mới ngày 03/01/2022 (01:33): Trước trung khí Đại Hàn (20/1/2022), thuộc",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "tháng 12 âm lịch năm 2021" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Trăng mới ngày 01/02/2022 (12:46): Sau Đại Hàn và trước tiết Lập Xuân (4/2/2022), là",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "tháng Giêng năm 2022" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "my-5" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-[14px] font-bold", children: "Tham khảo thêm" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-1 pl-5 text-[#c0635c]", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `/tiet-khi-chinh-xac/${yearCheck}`, className: "hover:underline", children: [
            "Xem Tiết khí chính xác năm ",
            yearCheck
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/gieo-que-hoi-viec", className: "hover:underline", children: "Gieo quẻ hỏi việc" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/huong-dan-ung-dung-kinh-dich-trong-cuoc-song", className: "hover:underline", children: "Hướng dẫn ứng dụng Kinh Dịch trong cuộc sống" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/gioi-thieu-ve-tu-vi", className: "hover:underline", children: "Giới thiệu về Tử Vi" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "my-5 italic", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://www.informatik.uni-leipzig.de/~duc/amlich/DuLieu/index.html",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "(Dữ liệu ngày Sóc và Tiết khí được đối chiếu theo bảng tính của tác giả Hồ Ngọc Đức.)"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } })
  ] });
};

export { NgayGioSocCP as N };
