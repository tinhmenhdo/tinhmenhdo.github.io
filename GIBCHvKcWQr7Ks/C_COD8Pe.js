import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import 'dayjs/locale/vi.js';
import dayjs from 'dayjs';
import React from 'react';
import { t as tkHND } from './BoGaZN0a.js';
import { T as TKN } from './Dc1Oa40J.js';

dayjs.locale("vi");
const TietKhiCP = ({ dt }) => {
  const yearCheck = dayjs(dt).year();
  const tk = tkHND[yearCheck]?.tk;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQ Page",
    name: `Tiết khí chính xác năm ${yearCheck}`,
    mainEntity: tk.map((time, idx) => ({
      "@type": "Question",
      name: `Tiết khí ${TKN[idx]} năm ${yearCheck} bắt đầu lúc nào ?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Tiết khí ${TKN[idx]} năm ${yearCheck} bắt đầu lúc ${dayjs.unix(time).format("HH:mm - DD/MM/YYYY")}.`
      }
    }))
  };
  const generateYearLinks = (yearCheck2) => {
    const years = Array.from({ length: 11 }, (_, i) => yearCheck2 - 5 + i);
    return years.map((year, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: `mx-1 inline-block ${year === yearCheck2 ? "bg-orange-100 font-medium text-black" : "text-black"} rounded border border-gray-200 px-2 py-1 text-sm hover:text-[#c0635c]`,
          href: `/tiet-khi-chinh-xac/${year}`,
          children: [
            "Tiết khí năm ",
            year
          ]
        }
      ),
      index < years.length - 1 && " | "
    ] }, year));
  };
  const generateLongRangeYearLinks = (yearCheck2) => {
    const yearJumps = [
      { label: "Tiết khí 10 năm trước", year: yearCheck2 - 10 },
      { label: "Tiết khí 100 năm trước", year: yearCheck2 - 100 },
      { label: "Tiết khí 10 năm sau", year: yearCheck2 + 10 },
      { label: "Tiết khí 100 năm sau", year: yearCheck2 + 100 }
    ];
    const validYearJumps = yearJumps.filter((jump) => jump.year > 1e3 && jump.year < 2099);
    return validYearJumps.map((jump, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          className: `mx-1 inline-block ${jump.year === yearCheck2 ? "bg-orange-100 font-medium text-black" : "text-black"} rounded border border-gray-200 px-2 py-1 text-sm hover:text-[#c0635c]`,
          href: `/tiet-khi-chinh-xac/${jump.year}`,
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
        "Tiết Khí chính xác năm ",
        yearCheck
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-2 text-center", children: [
        "Lá số ",
        /* @__PURE__ */ jsx("strong", { className: "font-normal", children: "Tứ Trụ" }),
        " được tính theo lịch tiết khí này lưu ý thời gian tiết khí này tính cho ",
        /* @__PURE__ */ jsx("strong", { children: "Giờ Hà Nội (UTC+7)" }),
        ". Muốn tính kĩ hơn giờ tiết khí theo vị trí địa lý địa phương hoặc ở nước ngoài, vui lòng sử dụng công cụ",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/tra-cuu-tiet-khi-trong-nam-toan-cau",
            className: "rounded-full bg-amber-200 px-2 py-px font-semibold text-gray-700 shadow-2xl hover:bg-amber-400 hover:text-orange-900 hover:no-underline",
            children: "Tra Cứu Lịch Tiết Khí Toàn Cầu"
          }
        ),
        " ",
        "của Tinh Mệnh Đồ, có tính chính xác cao hơn và có thể tính toán cho hầu hết các vị trí địa phương trên thế giới."
      ] }),
      tkHND[yearCheck] !== null && /* @__PURE__ */ jsxs("table", { className: "mx-auto w-full table-auto lg:w-1/2", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-100", children: [
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-2 text-left", children: "Tiết Khí" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-4 py-2 text-left", children: "Thời Gian" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          tk.map((timeUnix, hndId) => {
            if (timeUnix === null || yearCheck <= 1581 && hndId === 0) return null;
            const djTime = dayjs.unix(timeUnix);
            return /* @__PURE__ */ jsxs(
              "tr",
              {
                className: "odd:bg-white even:bg-gray-50 hover:bg-orange-200",
                children: [
                  /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: /* @__PURE__ */ jsx("b", { className: "text-[#555]", children: TKN[hndId] }) }),
                  /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: /* @__PURE__ */ jsx("time", { dateTime: djTime.format("YYYY-MM-DD HH:mm"), children: djTime.format("HH:mm - DD/MM/YYYY") }) })
                ]
              },
              `hnd2${hndId}`
            );
          }),
          yearCheck <= 1581 && /* @__PURE__ */ jsxs("tr", { className: "odd:bg-white even:bg-gray-50 hover:bg-orange-200", children: [
            /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: /* @__PURE__ */ jsx("b", { className: "text-[#555]", children: TKN[0] }) }),
            /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: /* @__PURE__ */ jsx("time", { dateTime: dayjs.unix(tk[0]).format("YYYY-MM-DD HH:mm"), children: dayjs.unix(tk[0]).format("dddd HH:mm - DD/MM/YYYY") }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "my-5" }),
      /* @__PURE__ */ jsx("h2", { className: "text-[14px] font-bold", children: "Tiết khí các năm gần đây" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 pb-2", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-orange mx-1 inline-block rounded border border-gray-200 bg-green-100 px-2 py-1 text-sm hover:text-[#c0635c]",
            href: "/tiet-khi-chinh-xac",
            children: "Năm hiện tại"
          }
        ),
        generateYearLinks(yearCheck)
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 mb-2 text-[14px] font-bold", children: "Xem tiết khí các năm xa hơn" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pb-2", children: generateLongRangeYearLinks(yearCheck) }),
      /* @__PURE__ */ jsx("hr", { className: "my-5" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "mb-2 text-[14px] font-bold", children: "Tham khảo thêm" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-1 pl-5 text-[#c0635c]", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `/ngay-gio-soc-chinh-xac/${yearCheck}`, className: "hover:underline", children: [
            "Xem điểm Sóc, giờ Sóc (thời điểm trăng mới) năm ",
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

export { TietKhiCP as T };
