import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import utc from 'dayjs/plugin/utc.js';
import { L as LocalLunarCalendar } from './CpgQb43x.js';
import { x as xtngl$1 } from './CpcYxhgG.js';
import { c as createComponent, a as renderTemplate } from './F_Fel0yb.js';
import 'piccolore';
import 'clsx';

const HOROSCOPE_CONFIG = [
  {
    id: 0,
    slug: "viet-nam",
    name: "Mặc định",
    typeLs: 2,
    // Logic mapping from page: if slug is 'viet-nam' -> defaultType = 2
    color: "#2C3E50",
    icon: "⍟",
    tvPage: {
      slug: "the-gioi-theo-vi-tri-sinh",
      title: "Tử Vi Tứ Trụ Việt Nam & Quốc Tế Chính Xác Theo Nơi Sinh",
      desc: "Lập lá số Tử Vi Bát Tự Việt Nam & Quốc Tế chuyên nghiệp, tự động hiệu chỉnh sai lệch múi giờ dựa trên tọa độ vị trí sinh thực tế. Giải pháp tối ưu cho chuyên gia luận giải toàn cầu."
    },
    gpsPage: {
      slug: "viet-nam",
      title: "Lập Lá Số Tử Vi & Tứ Trụ Chính Xác Theo Tọa Độ - Giờ Chính Ngọ Theo Tọa Độ",
      desc: "Lập lá số Tử Vi Việt Nam chuẩn xác dựa trên tọa độ nơi sinh. Hệ thống tự động hiệu chỉnh giờ Mặt Trời và giờ địa phương, giúp luận giải vận mệnh, tài lộc, gia đạo chính xác tuyệt đối."
    },
    lstvPage: {
      slug: "la-so-tu-vi-viet-nam",
      title: "Lá số Tử Vi Việt Nam đầy đủ nhất – Công cụ phân tích chuyên nghiệp hàng đầu",
      desc: "Tra cứu lá số Tử Vi Việt Nam chính xác nhất với công nghệ tiên tiến. Cung cấp đầy đủ thông tin vận mệnh, tài lộc và gia đạo hoàn toàn miễn phí."
    }
  },
  {
    id: 1,
    slug: "luong-phai-nam-phai",
    name: "Lương Phái + Nam phái",
    typeLs: 1,
    color: "#27AE60",
    icon: "☸",
    tvPage: {
      slug: "luong-phai-nam-phai-toan-cau",
      title: "Lá Số Tử Vi Tứ Trụ & Lương Phái + Nam Phái - Chuẩn hóa Giờ sinh theo Vị trí Thực tế",
      desc: "Công cụ lập lá số Phi Tinh Lương Phái & Nam Phái tích hợp thuật toán định vị tọa độ. Xác định chính xác giờ sinh địa phương tại bất kỳ địa điểm nào trên thế giới."
    },
    gpsPage: {
      slug: "luong-phai-nam-phai",
      title: "Lá Số Tử Vi Phi Tinh Lương Phái & Nam Phái - Tính Giờ Theo Tọa Độ Kinh Độ",
      desc: "Khám phá lá số Tử Vi Phi Tinh Lương Phái & Nam Phái với thuật toán tính giờ theo kinh độ và tọa độ. Phân tích hiện đại, chính xác đến từng phút, giúp thấu hiểu sâu sắc bản mệnh."
    },
    lstvPage: {
      slug: "luong-phai-nam-phai",
      title: "Lá số Tử Vi Phi Tinh Lương Phái & Nam Phái đầy đủ nhất – Giải mã bí ẩn cuộc đời",
      desc: "Khám phá lá số Tử Vi Phi Tinh Lương Phái & Nam Phái đầy đủ nhất. Công cụ phân tích hiện đại, chính xác, giúp bạn hiểu sâu vận mệnh của mình."
    }
  },
  {
    id: 2,
    slug: "kham-thien-tu-hoa-nam-phai",
    name: "Khâm Thiên + Nam phái",
    typeLs: 2,
    color: "#8E44AD",
    icon: "❖",
    tvPage: {
      slug: "kham-thien-tu-hoa-nam-phai-toan-cau",
      title: "Tử Vi Tứ Trụ & Khâm Thiên Tứ Hóa - Hiệu chỉnh Giờ Địa phương Toàn cầu theo Tọa độ",
      desc: "Nền tảng Tử Vi Khâm Thiên Tứ Hóa chuyên sâu. Tự động xử lý sai lệch múi giờ pháp định bằng cách hiệu chỉnh theo vị trí sinh thực tế, loại bỏ hoàn toàn sai số khi lập số quốc tế."
    },
    gpsPage: {
      slug: "kham-thien-tu-hoa-nam-phai",
      title: "Lá Số Tử Vi Khâm Thiên & Tứ Trụ - Giờ Mặt Trời & Giờ Địa Phương",
      desc: "Xem lá số Tử Vi Khâm Thiên Tứ Hóa & Nam Phái chuẩn giờ Chính Ngọ theo tọa độ thực tế. Luận giải chi tiết sự nghiệp, tình duyên dựa trên hệ thống tính giờ thiên văn hiện đại."
    },
    lstvPage: {
      slug: "kham-thien-tu-hoa-nam-phai",
      title: "Lá số Tử Vi Khâm Thiên Tứ Hóa & Nam Phái đầy đủ nhất – Xem vận mệnh miễn phí",
      desc: "Xem lá số Tử Vi Khâm Thiên Tứ Hóa & Nam Phái miễn phí. Luận giải chi tiết vận mệnh, sự nghiệp và tình duyên, hỗ trợ định hướng tương lai."
    }
  },
  {
    id: 3,
    slug: "nam-phai",
    name: "Nam phái",
    typeLs: 3,
    color: "#2980B9",
    icon: "▩",
    tvPage: {
      slug: "nam-phai-toan-cau",
      title: "Lập Lá Tử Vi Tứ Trụ & Nam Phái - Tự động Định vị GPS & Hiệu chỉnh Giờ sinh",
      desc: "Phần mềm lập lá số Tử Vi Nam Phái hàng đầu. Tự động định vị GPS để xác định giờ sinh địa phương chuẩn xác nhất, đảm bảo lá số nhất quán với thực địa nơi sinh."
    },
    gpsPage: {
      slug: "nam-phai",
      title: "Lập Lá Số Tử Vi Nam Phái - Hiệu Chỉnh Giờ Sinh Chính Xác Theo Tọa Độ",
      desc: "Công cụ lập lá số Tử Vi Nam Phái hàng đầu, tự động hiệu chỉnh giờ sinh theo tọa độ địa lý. Phân tích chính xác vận hạn, tài lộc và sự nghiệp nhờ xác định chuẩn xác giờ Mặt Trời."
    },
    lstvPage: {
      slug: "tu-vi-nam-phai",
      title: "Lá số Tử Vi Nam Phái đầy đủ nhất – Khám phá tương lai chi tiết",
      desc: "Lá số Tử Vi Nam Phái đầy đủ nhất. Công cụ hàng đầu giúp bạn phân tích chính xác vận hạn, tài lộc và sự nghiệp rõ ràng."
    }
  },
  {
    id: 4,
    slug: "phi-tinh-luong-phai",
    name: "Lương Phái",
    typeLs: 4,
    color: "#F39C12",
    icon: "☸",
    tvPage: {
      slug: "phi-tinh-luong-phai-toan-cau",
      title: "Tử Vi Tứ Trụ & Tứ Trụ & Phi Tinh Lương Phái - Tự động hiệu chỉnh trên Vị trí sinh",
      desc: "Tra cứu Tử Vi Lương Phái với hệ thống tính Tiết khí thực dựa trên tọa độ địa lý. Tự động xử lý dữ liệu địa điểm toàn cầu, phục vụ phân tích cách cục chuyên sâu và chuyên nghiệp."
    },
    gpsPage: {
      slug: "phi-tinh-luong-phai",
      title: "Tử Vi Phi Tinh Lương Phái Chuyên Sâu - Tự Động Tính Giờ Tọa Độ Địa Phương",
      desc: "Tra cứu lá số Tử Vi Phi Tinh Lương Phái chuyên sâu. Hệ thống tự động tính giờ âm lịch địa phương dựa trên tọa độ và kinh độ nơi sinh, giúp nhận diện chính xác các cách cục phức tạp."
    },
    lstvPage: {
      slug: "tu-vi-phi-tinh-luong-phai",
      title: "Lá số Tử Vi Phi Tinh Lương Phái đầy đủ nhất – Công cụ phân tích chuyên sâu",
      desc: "Xem lá số Tử Vi Phi Tinh Lương Phái chuyên sâu. Miễn phí và dễ sử dụng, phù hợp cho mọi đối tượng muốn hiểu rõ về vận mệnh."
    }
  },
  {
    id: 5,
    slug: "kham-thien-tu-hoa",
    name: "Khâm Thiên",
    typeLs: 5,
    color: "#D35400",
    icon: "❖",
    tvPage: {
      slug: "kham-thien-tu-hoa-toan-cau",
      title: "Lập Lá Tử Vi Tứ Trụ & Khâm Thiên Tứ Hóa - Phân tích Chuẩn xác theo Tọa độ GPS",
      desc: "Lập lá số Tử Vi Khâm Thiên Tứ Hóa chuẩn xác qua tọa độ GPS. Hệ thống hiệu chỉnh giờ sinh dựa trên vị trí thực tế, cung cấp thông số tọa độ minh bạch cho các chuyên gia."
    },
    gpsPage: {
      slug: "kham-thien-tu-hoa",
      title: "Lập Lá Số Tử Vi Khâm Thiên Tứ Hóa  Xác Qua Tọa Độ & Kinh Độ",
      desc: "Lập lá số Tử Vi Khâm Thiên Tứ Hóa chuẩn xác qua tọa độ. Nhận ngay phân tích chi tiết công danh, vận hạn dựa trên phương pháp tính giờ Chính Ngọ và hiệu chỉnh giờ theo kinh độ."
    },
    lstvPage: {
      slug: "tu-vi-kham-thien-tu-hoa",
      title: "Lá số Tử Vi Khâm Thiên Tứ Hóa đầy đủ nhất – Công cụ luận giải vận mệnh chính xác",
      desc: "Tra cứu lá số Tử Vi Khâm Thiên Tứ Hóa chính xác nhất. Nhận ngay phân tích chi tiết về công danh, tình duyên và vận hạn của bạn."
    }
  },
  {
    id: 6,
    slug: "trung-chau-phai",
    name: "Trung Châu Phái",
    typeLs: 6,
    color: "#C0392B",
    icon: "☪",
    tvPage: {
      slug: "trung-chau-phai-toan-cau",
      title: "Lá Tử Vi Tứ Trụ & Trung Châu Phái - Xác định Giờ sinh chuẩn xác tại mọi Vị trí Địa lý",
      desc: "Lá số Trung Châu Phái chuẩn xác nhờ thuật toán xử lý tọa độ thực địa. Giải mã vận mệnh với hệ thống hiệu chỉnh giờ sinh địa phương chuẩn xác tại mọi quốc gia trên thế giới."
    },
    gpsPage: {
      slug: "trung-chau-phai",
      title: "Lá Số Tử Vi Trung Châu Phái - Xác Định Giờ Chính Ngọ Theo Tọa Độ Thực tế",
      desc: "Lá số Trung Châu Phái chuẩn xác nhất nhờ thuật toán xử lý tọa độ thực tế. Giải mã cuộc sống toàn diện với hệ thống hiệu chỉnh giờ sinh theo thiên văn địa phương và giờ mặt trời."
    },
    lstvPage: {
      slug: "tu-vi-trung-chau-phai",
      title: "Lá số Trung Châu Phái đầy đủ nhất – Phân tích Tử Vi chuẩn xác",
      desc: "Lá số Trung Châu Phái chuẩn xác và đầy đủ nhất. Công cụ phân tích hiện đại, dễ sử dụng, hỗ trợ giải mã cuộc sống một cách toàn diện."
    }
  },
  {
    id: 7,
    slug: "trung-chau-phai-kham-thien",
    name: "Trung Châu Phái + Khâm Thiên",
    typeLs: 7,
    color: "#458305",
    icon: "☪",
    tvPage: {
      slug: "trung-chau-phai-kham-thien-toan-cau",
      title: "Tử Vi Tứ Trụ & Trung Châu & Khâm Thiên - Giải pháp Hiệu chỉnh Địa điểm Toàn cầu",
      desc: "Sự kết hợp giữa Trung Châu & Khâm Thiên Tứ Hóa trên nền tảng số hóa địa điểm. Chuẩn hóa quy trình lập số theo vị trí sinh, đảm bảo độ chính xác tuyệt đối cho việc luận giải."
    },
    gpsPage: {
      slug: "trung-chau-phai-kham-thien",
      title: "Tử Vi Trung Châu & Khâm Thiên Tứ Hóa - Chuẩn Hóa Giờ Địa Phương Qua Tọa Độ",
      desc: "Sự kết hợp độc đáo giữa Trung Châu Phái & Khâm Thiên Tứ Hóa trên nền tảng tính giờ tọa độ. Khám phá vận mệnh chi tiết với độ chính xác thời gian tuyệt đối theo từng vị trí địa lý."
    },
    lstvPage: {
      slug: "tu-vi-trung-chau-phai-kham-thien",
      title: "Lá số Trung Châu Phái & Khâm Thiên Tứ Hóa đầy đủ nhất – Kết hợp độc đáo",
      desc: "Xem lá số Trung Châu Phái & Khâm Thiên Tứ Hóa, sự kết hợp độc đáo giữa truyền thống và hiện đại. Khám phá vận mệnh chi tiết hơn bao giờ hết."
    }
  },
  {
    id: 8,
    slug: "trung-chau-luong-phai",
    name: "Trung Châu Phái + Lương Phái",
    typeLs: 8,
    color: "#04719d",
    icon: "☪",
    tvPage: {
      slug: "trung-chau-luong-phai-toan-cau",
      title: "Tử Vi Tứ Trụ & Trung Châu & Lương Phái - Tối ưu hóa Giờ sinh theo Tọa độ Nơi sinh",
      desc: "Công cụ lập lá số dành cho nghiên cứu chuyên sâu. Tích hợp thuật toán hiệu chỉnh giờ sinh theo tọa độ địa lý và múi giờ lịch sử tại mọi vị trí sinh trên toàn thế giới."
    },
    gpsPage: {
      slug: "trung-chau-luong-phai",
      title: "Lá Số Tử Vi Trung Châu & Lương Phái - Tối Ưu Giờ Mặt Trời Theo Tọa Độ",
      desc: "Khám phá lá số Trung Châu Phái & Lương Phái tính theo giờ Mặt Trời và tọa độ. Mang đến cái nhìn sâu sắc, chính xác về cuộc đời nhờ công nghệ định vị và thuật toán tính giờ hiện đại."
    },
    lstvPage: {
      slug: "tu-vi-trung-chau-luong-phai",
      title: "Lá số Trung Châu Phái & Lương Phái đầy đủ nhất – Định hướng vận mệnh",
      desc: "Khám phá lá số Trung Châu Phái & Lương Phái với công nghệ tiên tiến. Miễn phí, chính xác, mang đến cái nhìn sâu sắc về cuộc đời bạn."
    }
  }
];
const APP_ROUTES = [
  { basePath: "/tu-vi-tu-tru-dia-diem-sinh", configKey: "gpsPage" },
  { basePath: "/la-so-tu-vi", configKey: "lstvPage" },
  { basePath: "/tu-vi-tu-tru", configKey: "tvPage" }
];
HOROSCOPE_CONFIG.map((item) => item.slug);
const typeLsName$1 = HOROSCOPE_CONFIG.map((item) => item.name);
HOROSCOPE_CONFIG.map((item) => item.color);
HOROSCOPE_CONFIG.map((item) => item.icon);

const IconBase = ({ size = "1em", className, children, ...props }) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    ...props,
    children
  }
);
const IconMale = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M16 2v2h3.59l-5.34 5.34c-1.15-.9-2.61-1.44-4.2-1.44C6.12 7.9 3 11.02 3 14.9s3.12 7 7.05 7C13.9 21.9 17 18.78 17 14.9c0-1.59-.54-3.05-1.44-4.2l5.34-5.34V9h2V2h-6.9zM10.05 19.9c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" }) });
const IconFemale = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 4a6 6 0 0 0-6 6c0 2.97 2.16 5.44 5 5.92V18H7.5v2H11v2h2v-2h3.5v-2H13v-2.08c2.84-.48 5-2.95 5-5.92a6 6 0 0 0-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" }) });
const IconSchedule = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" }) });
const IconVisibility = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" }) });
const IconVisibilityOff = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-4 .7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" }) });
const IconAutoStories = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M19 1l-5 5v11l5-4.5V1zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-1.45-1.1-3.55-1.5-5.5-1.5s-4.05.4-5.5 1.5v15.5c1.45-1.1 3.55-1.5 5.5-1.5 1.45 0 3.4.45 4.75 1.1.1.05.15.05.25.05.25 0 .5-.25.5-.5z" }) });
const IconViewTimeline = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 12H6v-2h6v2zm3-4H9V9h6v2zm3-4h-6V5h6v2z" }) });
const IconLoop = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" }) });
const IconSyncDisabled = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4l-2.24 2.24C19.32 7.39 20 8.89 20 10.5v1.23l-3.36-3.36V4h3.36zM13 4.07V1L9 5l4 4V6.07c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C20.55 15.11 21 13.61 21 12c0-4.42-3.58-8-8-7.93z" }) });
const IconRotate90DegreesCcw = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66 3.66 3.66-3.66 3.66-3.66-3.66zM19.36 6.64C17.61 4.9 15.3 4 12.79 4c-.84 0-1.67.11-2.48.33l2.46 2.46c.01 0 .01 0 .02-.01.55.08 1.09.23 1.6.46l3.68 3.68c-.14-1.65-.96-3.15-2.28-4.18.99.79 1.76 1.8 2.2 2.97l2.52 2.52c.28-.75.45-1.55.45-2.39 0-2.24-.87-4.34-2.6-6.2zM21 12.5h-5.98l.68-2.84 2.11 2.11C17.27 12.08 16.66 12.3 16 12.43V10.3c1.39-.28 2.65-.88 3.73-1.7l1.76 1.76c.26.68.44 1.41.51 2.14z" }) });
const IconBlock = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z" }) });
const IconStarRate = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) });
const IconStarBorder = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.01 4.38.38-3.32 2.88 1 4.28L12 15.4z" }) });
const IconStars = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23 1.12 4.82z" }) });
const IconAutoAwesomeMotion = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-2-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4 4.5c.34 0 .67.04 1 .1.92-1.35 2.5-2.22 4.28-2.1l-.16-2.12c-2.32-.13-4.36.98-5.52 2.76-.8-1.04-1.92-1.78-3.22-2.02L8 15.5c1.86.34 3.28 1.98 3.28 3.9.24-.05.48-.08.72-.08z" }) });
const IconGrade = IconStarRate;
const IconStarOutline = IconStarBorder;
const IconSettings = (props) => /* @__PURE__ */ jsx(IconBase, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" }) });

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

const ICHING_NUMBER = [
  "111111",
  // ䷀: Thuần Càn (Hexagram 1)
  "000000",
  // ䷁: Thuần Khôn (Hexagram 2)
  "010001",
  // ䷂: Thủy Lôi Truân (Hexagram 3)
  "100010",
  // ䷃: Sơn Thủy Mông (Hexagram 4)
  "010111",
  // ䷄: Thủy Thiên Nhu (Hexagram 5)
  "111010",
  // ䷅: Thiên Thủy Tụng (Hexagram 6)
  "000010",
  // ䷆: Địa Thủy Sư (Hexagram 7)
  "010000",
  // ䷇: Thủy Địa Tỷ (Hexagram 8)
  "110111",
  // ䷈: Phong Thiên Tiểu Súc (Hexagram 9)
  "111011",
  // ䷉: Thiên Trạch Lý (Hexagram 10)
  "000111",
  // ䷊: Địa Thiên Thái (Hexagram 11)
  "111000",
  // ䷋: Thiên Địa Bĩ (Hexagram 12)
  "111101",
  // ䷌: Thiên Hỏa Đồng Nhân (Hexagram 13)
  "101111",
  // ䷍: Hỏa Thiên Đại Hữu (Hexagram 14)
  "000100",
  // ䷎: Địa Sơn Khiêm (Hexagram 15)
  "001000",
  // ䷏: Lôi Địa Dự (Hexagram 16)
  "011001",
  // ䷐: Trạch Lôi Tùy (Hexagram 17)
  "100110",
  // ䷑: Sơn Phong Cổ (Hexagram 18)
  "000011",
  // ䷒: Địa Trạch Lâm (Hexagram 19)
  "110000",
  // ䷓: Phong Địa Quan (Hexagram 20)
  "101001",
  // ䷔: Hỏa Lôi Phệ Hạp (Hexagram 21)
  "100101",
  // ䷕: Sơn Hỏa Bí (Hexagram 22)
  "100000",
  // ䷖: Sơn Địa Bác (Hexagram 23)
  "000001",
  // ䷗: Địa Lôi Phục (Hexagram 24)
  "111001",
  // ䷘: Thiên Lôi Vô Vọng (Hexagram 25)
  "100111",
  // ䷙: Sơn Thiên Đại Súc (Hexagram 26)
  "100001",
  // ䷚: Sơn Lôi Di (Hexagram 27)
  "011110",
  // ䷛: Trạch Phong Đại Quá (Hexagram 28)
  "010010",
  // ䷜: Thuần Khảm (Hexagram 29)
  "101101",
  // ䷝: Thuần Ly (Hexagram 30)
  "011100",
  // ䷞: Trạch Sơn Hàm (Hexagram 31)
  "001110",
  // ䷟: Lôi Phong Hằng (Hexagram 32)
  "111100",
  // ䷠: Thiên Sơn Độn (Hexagram 33)
  "001111",
  // ䷡: Lôi Thiên Đại Tráng (Hexagram 34)
  "101000",
  // ䷢: Hỏa Địa Tấn (Hexagram 35)
  "000101",
  // ䷣: Địa Hỏa Minh Di (Hexagram 36)
  "110101",
  // ䷤: Phong Hỏa Gia Nhân (Hexagram 37)
  "101011",
  // ䷥: Hỏa Trạch Khuê (Hexagram 38)
  "010100",
  // ䷦: Thủy Sơn Kiển (Hexagram 39)
  "001010",
  // ䷧: Lôi Thủy Giải (Hexagram 40)
  "100011",
  // ䷨: Sơn Trạch Tổn (Hexagram 41)
  "110001",
  // ䷹: Phong Lôi Ích (Hexagram 42)
  "011111",
  // ䷺: Trạch Thiên Quải (Hexagram 43)
  "111110",
  // ䷻: Thiên Phong Cấu (Hexagram 44)
  "011000",
  // ䷼: Trạch Địa Tụy (Hexagram 45)
  "000110",
  // ䷽: Địa Phong Thăng (Hexagram 46)
  "011010",
  // ䷾: Trạch Thủy Khốn (Hexagram 47)
  "010110",
  // ䷿: Thủy Phong Tỉnh (Hexagram 48)
  "011101",
  // ䷰: Trạch Hỏa Cách (Hexagram 49)
  "101110",
  // ䷱: Hỏa Phong Đỉnh (Hexagram 50)
  "001001",
  // ䷲: Thuần Chấn (Hexagram 51)
  "100100",
  // ䷳: Thuần Cấn (Hexagram 52)
  "110100",
  // ䷴: Phong Sơn Tiệm (Hexagram 53)
  "001011",
  // ䷵: Lôi Trạch Quy Muội (Hexagram 54)
  "001101",
  // ䷶: Lôi Hỏa Phong (Hexagram 55)
  "101100",
  // ䷷: Hỏa Sơn Lữ (Hexagram 56)
  "110110",
  // ䷸: Thuần Tốn (Hexagram 57)
  "011011",
  // ䷹: Thuần Đoài (Hexagram 58)
  "110010",
  // ䷺: Phong Thủy Hoán (Hexagram 59)
  "010011",
  // ䷻: Thủy Trạch Tiết (Hexagram 60)
  "110011",
  // ䷼: Phong Trạch Trung Phu (Hexagram 61)
  "001100",
  // ䷽: Lôi Sơn Tiểu Quá (Hexagram 62)
  "010101",
  // ䷾: Thủy Hỏa Ký Tế (Hexagram 63)
  "101010"
  // ䷿: Hỏa Thủy Vị Tế (Hexagram 64)
];

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
const typeLsName = typeLsName$1;
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

dayjs.extend(utc);
dayjs.extend(customParseFormat);
var PrefixArea = /* @__PURE__ */ ((PrefixArea2) => {
  PrefixArea2["BigStar"] = "sb";
  PrefixArea2["SmallStar"] = "ss";
  PrefixArea2["YearStar"] = "sy";
  PrefixArea2["MonthStar"] = "sm";
  PrefixArea2["DayStar"] = "sd";
  PrefixArea2["TenYearStar"] = "sv";
  return PrefixArea2;
})(PrefixArea || {});
class HoroscopeBuildGps {
  lat = 21.0285;
  lon = 105.8333;
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
  bornDate;
  // Original Date object for birth date to avoid redundant reconstruction
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
  /**
   * Constructor
   * @param _opt Options
   * @param _opt.sex Giới tính
   * @param _opt.born Ngày sinh (Dạyjs UTC)
   * @param _opt.view Ngày xem (Dạyjs UTC)
   * @param _opt.cfg Cấu hình
   * @param _opt.lat Vĩ độ
   * @param _opt.lon Kinh độ
   */
  constructor(_opt) {
    if (_opt && _opt.cfg) {
      Object.assign(this.cfg, _opt.cfg);
    }
    this.lat = _opt.lat || 21.0285;
    this.lon = _opt.lon || 105.8542;
    const dtNow = dayjs();
    this.bornDate = _opt.born;
    const bornLnIf = this.getSafeLunarDetails(_opt.born.format("YYYY-MM-DD HH:mm"), this.lat, this.lon);
    console.log("bornLnIf", bornLnIf.solar.solarNoon);
    this.dtb = this.buildDateInfo(bornLnIf);
    _opt.view ? _opt.view : dtNow.utc().toDate();
    const viewLnIf = this.getSafeLunarDetails(_opt.view.format("YYYY-MM-DD HH:mm"), this.lat, this.lon);
    this.dtv = this.buildDateInfo(viewLnIf);
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
  // /**
  //  * Chuyển đổi UTC time thành local time của GPS location
  //  *
  //  * Luồng xử lý:
  //  * 1. Nhận UTC time (từ user input sau khi đã convert từ local time của user)
  //  * 2. Lấy timezone offset của GPS coordinates (ví dụ: VN = +7h)
  //  * 3. Cộng offset vào UTC time để được local time tại GPS location
  //  *
  //  * Tại sao cần: LocalLunarCalendar cần UTC time, nhưng phải là UTC time
  //  * tương ứng với local time tại GPS location để tính toán thiên văn chính xác.
  //  *
  //  * @param utcDate Date object (UTC time từ user input)
  //  * @returns Date object (local time tại GPS location)
  //  */
  // public adjustDateForGpsTimezone = (utcDate: Date): Date => {
  // const tzInfo = SolarCalculator.getTimezoneInfo(this.lat, this.lon, utcDate);
  // // Tạo đối tượng dayjs từ utcDate (coi như đây là gốc UTC)
  // // Sau đó cộng offset (tính bằng phút để chính xác hơn giờ)
  // const gpsDate = dayjs.utc(utcDate).add(tzInfo.offset, 'hour');
  // // Trả về Date object đã được "dịch chuyển" kim đồng hồ
  // return gpsDate.toDate();
  // };
  /**
   * Chuẩn hóa Date object từ Input để truyền vào bộ tính toán Lunar
   * @param inputDateTime Chuỗi giờ từ picker (VD: "2026-01-06 08:00")
   * @param gpsLat Tọa độ Vĩ độ
   * @param gpsLon Tọa độ Kinh độ
   */
  getSafeLunarDetails = (inputDateTime, gpsLat, gpsLon) => {
    const localMoment = dayjs(inputDateTime);
    return LocalLunarCalendar.getLunarDetails(localMoment.toDate(), gpsLat, gpsLon);
  };
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
    const canDv = CanChi.can(this.dtb.bs.y);
    this.starPlacer.fillSixAssassin(mtLocTon[canDv], "ss" /* SmallStar */);
    this.starPlacer.fillSixBuffer(CanChi.can(this.dtb.bs.y), "ss" /* SmallStar */, this.dtb.ln.h);
    this.starPlacer.fillBig4(CanChi.can(this.dtb.bs.y), "ss" /* SmallStar */);
    this.circlePlacer.fillKingCircle(CanChi.chi(this.dtb.bs.y), "ss" /* SmallStar */);
    this.circlePlacer.fillDoctorCircle(CanChi.can(this.dtb.bs.y), "ss" /* SmallStar */);
    this.circlePlacer.fillGrowCircle();
    this.starPlacer.fillTuanTriet(CanChi.can(this.dtb.bs.y), CanChi.chi(this.dtb.bs.y));
    this.starPlacer.fillQuangQuyThaiToa();
    this.starPlacer.fillThaiCaoAnDuong();
    this.starPlacer.fillDargon();
    this.starPlacer.fillTangMaKhocHu(CanChi.chi(this.dtb.bs.y), "ss" /* SmallStar */);
    this.starPlacer.fillHinhRieuHaSatToai();
    this.starPlacer.fillDaoHongHiCoQua(CanChi.chi(this.dtb.bs.y), "ss" /* SmallStar */);
    this.starPlacer.fillQuanPhucNienTru(CanChi.can(this.dtb.bs.y), "ss" /* SmallStar */);
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
    this.sks = SKBS[LTHG_HH[CanChi.lthg(this.dtb.bs.y)]][LTHG_HH[this.ars[this.aIdx.am].na]];
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
    this.circlePlacer.fillKingCircle(CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.circlePlacer.fillDoctorCircle(CanChi.can(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillSixAssassin(this.aIdx.sy27, "sy" /* YearStar */);
    this.starPlacer.fillSixBuffer(CanChi.can(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillBig4(CanChi.can(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillTangMaKhocHu(CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillHinhRieuHaSatToai(CanChi.can(this.dtv.bs.y), CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillDaoHongHiCoQua(CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillDargon(CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
    this.starPlacer.fillTuanTriet(CanChi.can(this.dtv.bs.y), CanChi.chi(this.dtv.bs.y), "sy" /* YearStar */);
  }
  // Phương thức thêm tuổi vào các cung
  addAgeToAreas() {
    let idxBorn = CanChi.chi(this.dtb.bs.y);
    let yearCount = 0;
    for (let i = 1; i <= 84; i += 1) {
      const numbYear = yearCount + this.dtb.ln.y;
      if (numbYear > 2099) {
        break;
      }
      const canYearIdx = numbYear % 10;
      const chiYearIdx = (numbYear + 8) % 12;
      const canChi = `${CAN[canYearIdx]} ${CHI[chiYearIdx]}`;
      const lthgIdx = LTHG.indexOf(canChi);
      const yearInfo = {
        bs: {
          y: CanChi.create(canYearIdx, chiYearIdx, lthgIdx)
        }
      };
      this.ars[idxBorn].ys.push([yearCount + 1, numbYear, CanChi.lthg(yearInfo.bs.y), CanChi.can(yearInfo.bs.y)]);
      idxBorn = this.jumbUp(idxBorn);
      yearCount += 1;
    }
  }
  // Phương thức xây dựng thời gian lớn cho Tứ Trụ
  tuTruBuildBigTime() {
    const tgSinh = this.bornDate;
    const realTkArr = this.dtb.tki;
    const isDirectRight = this.sx === this.adyetk;
    let endDate, numberDay;
    if (!realTkArr || realTkArr.length < 5) {
      endDate = dayjs.utc();
      numberDay = 0;
    } else {
      const parseTkDate = (dateStr) => {
        return dayjs.utc(dateStr, "YYYY/MM/DD HH:mm");
      };
      if (isDirectRight) {
        endDate = parseTkDate(realTkArr[4]);
        numberDay = endDate.diff(tgSinh, "day", true);
      } else {
        endDate = parseTkDate(realTkArr[3]);
        numberDay = tgSinh.diff(endDate, "day", true);
      }
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
    let canStart = CanChi.can(this.dtb.tk.m);
    let chiStart = CanChi.chi(this.dtb.tk.m);
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
    const canNhatChu = CanChi.can(nhatChu);
    this.tutru.cot[idxCot].cht = isNhatChu ? -1 : idxTHAP(canNhatChu, CanChi.can(cotCC));
    this.tutru.cot[idxCot].cn = CanChi.can(cotCC);
    this.tutru.cot[idxCot].ci = CanChi.chi(cotCC);
    const lstCanTang = CHI_CAN[CanChi.chi(cotCC)];
    this.tutru.cot[idxCot].ctg = lstCanTang;
    const lstPhoTinh = [];
    lstCanTang.forEach((val, idxCT) => {
      lstPhoTinh[idxCT] = idxTHAP(canNhatChu, val);
    });
    this.tutru.cot[idxCot].pht = lstPhoTinh;
    this.tutru.cot[idxCot].ts = idxTSTutru(CanChi.can(nhatChu), CanChi.chi(cotCC));
    this.tutru.cot[idxCot].na = CanChi.lthg(cotCC);
  }
  /**
   *
   * @param lnInfo Luna date canchi
   * @returns InfoDate
   */
  buildDateInfo(lnInfo) {
    const data = {
      sn: {
        y: lnInfo.sun.year(),
        m: lnInfo.sun.month() + 1,
        d: lnInfo.sun.date(),
        h: lnInfo.sun.hour(),
        i: lnInfo.sun.minute(),
        ys: lnInfo.solarTime.year(),
        ms: lnInfo.solarTime.month() + 1,
        ds: lnInfo.solarTime.date(),
        hs: lnInfo.solarTime.hour(),
        is: lnInfo.solarTime.minute(),
        solarNoon: lnInfo.solar?.solarNoon || "N/A",
        solarNoonUtc: lnInfo.solar?.solarNoonUtc || null
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
      m12: this.parse12ToIdx(lnInfo.m12cc),
      h12: this.parse12ToIdx(lnInfo.h12cc),
      m12k: this.parse12ToIdx(lnInfo.stcc.m12cc),
      tki: lnInfo.tk
    };
    return data;
  }
  // fn
  parse12ToIdx(data) {
    const obj12data = [];
    for (let i = 0; i < 12; i += 1) {
      obj12data[i] = CanChiPair.create(CAN.indexOf(data[i][0]), CHI.indexOf(data[i][1]));
    }
    return obj12data;
  }
}

class HoroHelp {
  ls;
  // public cach: { name: string; tuvi: string; good: string[]; bad: string[] };
  aIdx;
  mIdx;
  diaban;
  // private group: Record<number, Record<string, any>> = {
  //   0: {
  //     xung: 6,
  //     tamhop: [4, 8],
  //     nhihop: 1,
  //     giap: [11, 1],
  //     luchai: 7
  //   },
  //   1: {
  //     xung: 7,
  //     tamhop: [5, 9],
  //     nhihop: 0,
  //     giap: [0, 2],
  //     luchai: 6
  //   },
  //   2: {
  //     xung: 8,
  //     tamhop: [6, 10],
  //     nhihop: 11,
  //     giap: [1, 3],
  //     luchai: 5
  //   },
  //   3: {
  //     xung: 9,
  //     tamhop: [7, 11],
  //     nhihop: 10,
  //     giap: [2, 4],
  //     luchai: 4
  //   },
  //   4: {
  //     xung: 10,
  //     tamhop: [8, 12],
  //     nhihop: 9,
  //     giap: [3, 5],
  //     luchai: 3
  //   },
  //   5: {
  //     xung: 11,
  //     tamhop: [9, 1],
  //     nhihop: 8,
  //     giap: [4, 6],
  //     luchai: 2
  //   },
  //   6: {
  //     xung: 0,
  //     tamhop: [10, 2],
  //     nhihop: 7,
  //     giap: [5, 7],
  //     luchai: 1
  //   },
  //   7: {
  //     xung: 1,
  //     tamhop: [11, 3],
  //     nhihop: 6,
  //     giap: [6, 8],
  //     luchai: 0
  //   },
  //   8: {
  //     xung: 2,
  //     tamhop: [0, 4],
  //     nhihop: 5,
  //     giap: [7, 9],
  //     luchai: 11
  //   },
  //   9: {
  //     xung: 3,
  //     tamhop: [1, 5],
  //     nhihop: 4,
  //     giap: [8, 10],
  //     luchai: 10
  //   },
  //   10: {
  //     xung: 4,
  //     tamhop: [2, 6],
  //     nhihop: 3,
  //     giap: [9, 11],
  //     luchai: 9
  //   },
  //   11: {
  //     xung: 5,
  //     tamhop: [3, 7],
  //     nhihop: 2,
  //     giap: [10, 0],
  //     luchai: 8
  //   }
  // };
  constructor(ls) {
    this.ls = ls;
    this.diaban = ls.ars;
    this.aIdx = ls.aIdx;
    this.mIdx = ls.am;
  }
  // bindCachCuc() {
  //   this.ccTuPhuVuTuong();
  // }
  tuChinh(idx) {
    return [idx, xtngl$1[idx].x, xtngl$1[idx].t[0], xtngl$1[idx].t[1]];
  }
  tamPhuong(idx) {
    return [idx, xtngl$1[idx].t[0], xtngl$1[idx].t[1]];
  }
  xungChieu(idx) {
    return [xtngl$1[idx].x];
  }
  giapCung(idx) {
    return [xtngl$1[idx].g[0], xtngl$1[idx].g[1]];
  }
  isGiap(idStar, idx) {
    return this.giapCung(idx).includes(this.aIdx[`s${idStar}`]);
  }
  isXung(idStar, idx) {
    return this.xungChieu(idx).includes(this.aIdx[`s${idStar}`]);
  }
  isStar4(idStar, idx) {
    return this.tuChinh(idx).includes(this.aIdx[`s${idStar}`]);
  }
  isStar3(idStar, idx) {
    return this.tamPhuong(idx).includes(this.aIdx[`s${idStar}`]);
  }
  isStar(idStar, idx) {
    return this.aIdx[`s${idStar}`] === idx;
  }
  isKo(idx, type = 0) {
    if (type === 3) return this.isStar3(52, idx);
    if (type === 4) return this.isStar4(52, idx);
    return this.isStar(52, idx);
  }
  isKiep(idx, type = 0) {
    if (type === 3) return this.isStar3(53, idx);
    if (type === 4) return this.isStar4(53, idx);
    return this.isStar(53, idx);
  }
  isKoKiep(idx, type = 0) {
    return this.isKo(idx, type) || this.isKiep(idx, type);
  }
  isHoa(idx, type = 0) {
    if (type === 3) return this.isStar3(54, idx);
    if (type === 4) return this.isStar4(54, idx);
    return this.isStar(54, idx);
  }
  isLinh(idx, type = 0) {
    if (type === 3) return this.isStar3(55, idx);
    if (type === 4) return this.isStar4(55, idx);
    return this.isStar(55, idx);
  }
  isHoaLinh(idx, type = 0) {
    return this.isHoa(idx, type) || this.isLinh(idx, type);
  }
  isKinh(idx, type = 0) {
    if (type === 3) return this.isStar3(56, idx);
    if (type === 4) return this.isStar4(56, idx);
    return this.isStar(56, idx);
  }
  isDa(idx, type = 0) {
    if (type === 3) return this.isStar3(57, idx);
    if (type === 4) return this.isStar4(57, idx);
    return this.isStar(57, idx);
  }
  isKinhDa(idx, type = 0) {
    return this.isKinh(idx, type) || this.isDa(idx, type);
  }
  isLucSatTinh(idx, type = 0) {
    return this.isKoKiep(idx, type) || this.isKinhDa(idx, type) || this.isHoaLinh(idx, type);
  }
  isKhoi(idx, type = 0) {
    if (type === 3) return this.isStar3(58, idx);
    if (type === 4) return this.isStar4(58, idx);
    return this.isStar(58, idx);
  }
  isViet(idx, type = 0) {
    if (type === 3) return this.isStar3(59, idx);
    if (type === 4) return this.isStar4(59, idx);
    return this.isStar(59, idx);
  }
  isKhoiViet(idx, type = 0) {
    return this.isKhoi(idx, type) || this.isViet(idx, type);
  }
  isTa(idx, type = 0) {
    if (type === 3) return this.isStar3(60, idx);
    if (type === 4) return this.isStar4(60, idx);
    return this.isStar(60, idx);
  }
  isHuu(idx, type = 0) {
    if (type === 3) return this.isStar3(61, idx);
    if (type === 4) return this.isStar4(61, idx);
    return this.isStar(61, idx);
  }
  isTaHuu(idx, type = 0) {
    return this.isTa(idx, type) || this.isHuu(idx, type);
  }
  isXuong(idx, type = 0) {
    if (type === 3) return this.isStar3(62, idx);
    if (type === 4) return this.isStar4(62, idx);
    return this.isStar(62, idx);
  }
  isKhuc(idx, type = 0) {
    if (type === 3) return this.isStar3(63, idx);
    if (type === 4) return this.isStar4(63, idx);
    return this.isStar(63, idx);
  }
  isXuongKhuc(idx, type = 0) {
    return this.isXuong(idx, type) || this.isKhuc(idx, type);
  }
  isGiapKhoi(idx) {
    return this.isGiap(58, idx);
  }
  isGiapViet(idx) {
    return this.isGiap(59, idx);
  }
  isGiapTa(idx) {
    return this.isGiap(60, idx);
  }
  isGiapHuu(idx) {
    return this.isGiap(61, idx);
  }
  isGiapXuong(idx) {
    return this.isGiap(62, idx);
  }
  isGiapKhuc(idx) {
    return this.isGiap(63, idx);
  }
  // addMsgMeet(idStar: number, idx: number, isGood: boolean, msg = '') {
  //   this.addMsg(this.isStar4(idStar, idx), isGood, `Gặp ${SM[idStar].name} ${msg}`);
  // }
  // addListMeet(lstStar: number[], idx: number, isGood: boolean) {
  //   lstStar.forEach((idStar: number, _id: number) => {
  //     this.addMsgMeet(idStar, idx, isGood);
  //   });
  // }
  // addMsgGiap(idStar: number, idx: number, isGood: boolean, msg = '') {
  //   this.addMsg(this.isGiap(idStar, idx), isGood, `Giáp cung là ${SM[idStar].name} ${msg}`);
  // }
  // addListGiap(lstStar: number[], idx: number, isGood: boolean) {
  //   lstStar.forEach((idStar: number, _id: number) => {
  //     this.addMsgGiap(idStar, idx, isGood);
  //   });
  // }
  // chkMeetLucCat(idx: number, isGood = true) {
  //   this.addListMeet([58, 59, 60, 61, 62, 63], idx, isGood);
  // }
  // chkGiapLucCat(idx: number, isGood = true) {
  //   this.addListGiap([58, 59, 60, 61, 62, 63], idx, isGood);
  // }
  isTangTueDieu(idx) {
    return this.isStar(17, idx) || this.isStar(21, idx) || this.isStar(25, idx);
  }
  isThaiTueCircle(idx) {
    return this.isStar(15, idx) || this.isStar(23, idx) || this.isStar(19, idx);
  }
  isLocTonCircle(idx) {
    return this.isStar(27, idx) || this.isStar(32, idx) || this.isStar(74, idx);
  }
  isTruongSinhCircle(idx) {
    return this.isStar(40, idx) || this.isStar(44, idx) || this.isStar(48, idx);
  }
  isTuanChieu(idx) {
    return this.isTuan(this.xungChieu(idx)[0]);
  }
  isTrietChieu(idx) {
    return this.isTriet(this.xungChieu(idx)[0]);
  }
  isTuan(idx) {
    return this.ls.ttr[0].includes(idx);
  }
  isTriet(idx) {
    return this.ls.ttr[1].includes(idx);
  }
  // isPhuMeetTuan(){
  //   this.addMsg(this.isTuan(this.aIdx.ss6), false, 'Thiên Phủ rất kị gặp tuần tượng kho rỗng');
  // }
  // isTuongMeetTriet(){
  //   this.addMsg(this.isTriet(this.aIdx.ss10), false, 'Thiên Tướng rất kị gặp triệt');
  // }
  // addMsg(isOk: boolean, isGood = true, text: string) {
  //   if (isOk && isGood) this.cach.good.push(text);
  //   if (isOk && !isGood) this.cach.bad.push(text);
  //   // this.cach.desc.push([isOk, text]); //'✓' '✖'
  //   return isOk;
  // }
  // addDacThreeCircle() {
  //   let count = 0;
  //   if (this.addMsg(this.isLocTonCircle(this.mIdx), true, 'Đắc vòng Lộc Tồn')) count = +1;
  //   if (this.addMsg(this.isThaiTueCircle(this.mIdx), true, 'Đắc vòng Thái Tuế')) count = +1;
  //   if (this.addMsg(this.isTruongSinhCircle(this.mIdx), true, 'Đắc vòng Trường Sinh')) count = +1;
  //   return count;
  // }
  // ccTuPhuVuTuong(): boolean {
  //   /*
  //   Cách cục tử phủ vũ tướng
  //   6 thế đứng sao tử vi khi sao tử vi đóng cung dương, hợp Tí, Dân, Thìn, Ngọ, Thân, Tuất
  //   Tứ sinh:
  //   - Tử Vũ Liêm của vòng chính tinh
  //   - Tuế Hổ Phù của vòng thái tuế
  //   - Lộc Tướng Ấn của vòng lộc tồn bác sỹ
  //   - Sinh Vượng Mộ của vòng trường sinh
  //   */
  //   let isNext = true;
  //   let idxTuvi = this.aIdx.s0;
  //   let tuviCcMt = [0, 2, 4, 6, 8, 10];
  //   if (this.mIdx !== this.aIdx.s0 || !tuviCcMt.includes(this.mIdx)) return isNext;
  //   isNext = false;
  //   this.cach.name = 'Tử Phủ Vũ Tướng';
  //   this.cach.tuvi = `Thế Tử Vi cư ${CHI[idxTuvi]}`;
  //   this.addMsg(this.addDacThreeCircle() === 3, true, 'Đắc cả 3 vòng Lộc Tồn, Thái Tuế, Trường Sinh rất hợp cho cách cục');
  //   this.addMsg(this.mIdx === 6, true, 'Đồ hình Tử Vi tại Ngọ là vị trí tốt nhất của Tử Vi trong các đồ hình');
  //   this.addMsg(tuviCcMt.includes(this.ls.dtb.bs.y[1]), true, `Đương số tuổi trong các tuổi Tý, Dần, Thìn, Ngọ, Thân, Tuất hợp với cách cục`);
  //   this.addMsgMeet(27, this.mIdx, true, 'rất tốt tăng độ số cách cục nhiều');
  //   this.chkMeetLucCat(this.mIdx);
  //   this.chkGiapLucCat(this.mIdx);
  //   this.isPhuMeetTuan();
  //   this.isTuongMeetTriet();
  //   this.addMsg(this.isTangTueDieu(this.mIdx), false, 'Gặp Tang Tuế Điếu rất không hợp cho cách cục giảm độ số cách cục');
  //   this.addMsg(this.isKoKiep(this.mIdx, 4), false, 'Gặp Không hoặc Kiếp rất kị cách đế ngộ hung đồ rất xấu');
  //   this.addMsg(this.isKinhDa(this.mIdx, 4), false, 'Gặp Kình, Đà thiên về thái quá dễ gây biến chất Tử Vi');
  //   this.addMsg(this.isHoaLinh(this.mIdx, 4), false, 'Gặp Hỏa, Linh Tử Vi có thể trị được Hỏa Linh');
  //   this.addMsg(this.isTriet(this.mIdx), false, 'Gặp Triệt cực kì không tốt cho Tử Vi');
  //   this.addMsg(this.isTuan(this.mIdx), false, 'Gặp Tuần cực kì không tốt cho Tử Vi');
  //   return isNext;
  // }
}

const CUC_SINO = { 2: "Nhị", 3: "Tam", 4: "Tứ", 5: "Ngũ", 6: "Lục" };
function getStarNames(starIds) {
  return starIds.map((id) => SM[id].name).join(", ");
}
function getSmallStarNames(starIds) {
  return starIds.filter((id) => id < 40 || id > 51).map((id) => SM[id].name).join(", ");
}
function getTruongSinhStarNames(starIds) {
  return starIds.filter((id) => id >= 40 && id <= 51).map((id) => SM[id].name).join(", ");
}
function getTuanTrietStarNames(zoneCi, ttr) {
  if (ttr[0][0].includes(zoneCi) && ttr[0][1].includes(zoneCi)) return ", Tuần, Triệt";
  if (ttr[0][0].includes(zoneCi)) return ", Tuần";
  if (ttr[0][1].includes(zoneCi)) return ", Triệt";
  return "";
}
function buildStarList(zone, ls) {
  let lst = zone.sb.length > 0 ? `${getStarNames(zone.sb)}, ` : `VCD xung (${getStarNames(ls.ars[xtngl[zone.ci].x].sb).replace(",", " -")}), `;
  lst += `${getSmallStarNames(zone.ss)}, `;
  lst += getTruongSinhStarNames(zone.ss);
  lst += getTuanTrietStarNames(zone.ci, ls.ttr);
  return lst;
}
function generateSectionI(ls, dvTTStartAge) {
  const { dtb, tutru } = ls;
  const dayMasterCan = dtb.bs.d[0];
  const dvTrInfo = tutru.dvt;
  const dvTr = tutru.dv;
  const sexText = ls.sx === 1 ? "Nam" : "Nữ";
  const van = dvTrInfo[0] ? "Thuận" : "Nghịch";
  const solarDate = `${dtb.sn.d}/${dtb.sn.m}/${dtb.sn.y}`;
  const lunarDate = `${dtb.ln.d}/${dtb.ln.m}`;
  const hourStr = `${dtb.sn.h}h${(dtb.sn.i || 0).toString().padStart(2, "0")}`;
  let mk = "## I. DỮ LIỆU BÁT TỰ TỨ TRỤ\n\n";
  mk += `* **Giới tính:** ${sexText}
`;
  mk += `* **Ngày sinh:** ${solarDate} (Dương) | ${lunarDate} (Âm). **Giờ:** ${hourStr}.
`;
  mk += `* **Tiết khí:** ${TKN[dtb.tki[0]]}. **Vận:** ${van}.

`;
  mk += "### 1. Bảng Tứ Trụ Chi Tiết\n\n";
  mk += "| Thành phần | Trụ Năm | Trụ Tháng | **Trụ Ngày (Chủ)** | Trụ Giờ |\n";
  mk += "| --- | --- | --- | --- | --- |\n";
  mk += "| **Thập Thần** |";
  tutru.cot.forEach((col, idx) => {
    mk += ` ${idx === 2 ? "**Nhật Chủ**" : col.cht !== -1 ? THAP[col.cht] : ""} |`;
  });
  mk += "\n";
  mk += "| **Thiên Can** |";
  tutru.cot.forEach((col) => {
    mk += ` **${CAN[col.cn].toUpperCase()}** |`;
  });
  mk += "\n";
  mk += "| **Địa Chi** |";
  tutru.cot.forEach((col) => {
    mk += ` **${CHI[col.ci].toUpperCase()}** |`;
  });
  mk += "\n";
  mk += "| **Tàng Can** |";
  tutru.cot.forEach((col) => {
    const tangCans = col.ctg.map((canIdx) => `${CAN[canIdx]} (${THAP[idxTHAP(dayMasterCan, canIdx)]})`).join(", ");
    mk += ` ${tangCans} |`;
  });
  mk += "\n";
  mk += "| **Trường Sinh** |";
  tutru.cot.forEach((col) => {
    mk += ` ${TSNAME[col.ts]} |`;
  });
  mk += "\n";
  mk += "| **Nạp Âm** |";
  tutru.cot.forEach((col) => {
    mk += ` ${LTHG_NA[col.na]} |`;
  });
  mk += "\n\n";
  if (dvTr && dvTr.length > 0) {
    mk += `### 2. Đại Vận Tứ Trụ (DV-TT) - Khởi từ ${dvTTStartAge} tuổi

`;
    mk += "| Vận |";
    dvTr.forEach((_, i) => {
      const mdj = dayjs.unix(dvTr[i][2]);
      const ageStart = mdj.year() - dtb.sn.y + 1;
      const ageEnd = ageStart + 9;
      mk += ` ${i + 1} (${ageStart}-${ageEnd}t) |`;
    });
    mk += "\n";
    mk += "| --- |";
    dvTr.forEach(() => mk += " --- |");
    mk += "\n";
    mk += "| **Năm** |";
    dvTr.forEach((item) => {
      mk += ` ${dayjs.unix(item[2]).year()} |`;
    });
    mk += "\n";
    mk += "| **Can Chi** |";
    dvTr.forEach((item) => {
      mk += ` **${CAN[item[0]]} ${CHI[item[1]]}** |`;
    });
    mk += "\n";
    mk += "| **Thần** |";
    dvTr.forEach((item) => {
      mk += ` ${THAP[idxTHAP(dayMasterCan, item[0])]} |`;
    });
    mk += "\n";
  }
  return mk;
}
function generateSectionII(ls, dvTVStartAge) {
  const { dtb } = ls;
  const sexText = ls.sx === 1 ? "Nam" : "Nữ";
  const adageText = `${ls.adye > 0 ? "Dương" : "Âm"} ${sexText}`;
  const adText = ADTN[ls.ad > 0 ? 1 : 0];
  const menhNapAm = LTHG_NA[dtb.bs.y[2]];
  const cucFullName = `${HH[ls.cid]} ${CUC_SINO[ls.cid] || ""} Cục`;
  const nameAreaThan = AREA_NAME[ls.ars[ls.at].ai];
  const muaText = SEASON[TKN_SS[dtb.tki[0]]];
  const skbText = SKB[ls.sks];
  let okmuaText = "Không được mùa sinh";
  if (OK_HH_TKN[LTHG_HH[dtb.bs.y[2]]].includes(dtb.tki[0])) {
    okmuaText = "Được mùa sinh";
  }
  let mk = "## II. TỬ VI ĐẨU SỐ - CHI TIẾT 12 CUNG VỊ\n\n";
  mk += `* **Cơ bản:** ${adageText}, ${adText}. **Mệnh:** ${menhNapAm}.
`;
  mk += `* **Cục:** ${cucFullName} (Khởi vận ${dvTVStartAge} tuổi). **Thân:** Thân cư ${nameAreaThan}.
`;
  mk += `* **Đặc điểm:** Sinh mùa ${muaText} (${okmuaText}), ${skbText}.

`;
  mk += "| Tên Cung | Vị trí | Can Chi | **Đại Vận TV** | Danh Sách Sao (Giữ nguyên gốc) |\n";
  mk += "| --- | --- | --- | --- | --- |\n";
  for (let i = 0; i < 12; i++) {
    const idx = (ls.am + i) % 12;
    const zone = ls.ars[idx];
    const nameCung = AREA_NAME[zone.ai];
    const viTri = CHI[zone.ci];
    const canChi = `${CAN[zone.cn]} ${CHI[zone.ci]}`;
    const dvRange = `**${zone.dv} - ${zone.dv + 9}**`;
    const lstStar = buildStarList(zone, ls);
    mk += `| **${nameCung}** | ${viTri} | ${canChi} | ${dvRange} | ${lstStar} |
`;
  }
  return mk;
}
function generateSectionIII(ls) {
  if (!ls?.ars) return "";
  const hoaShort = ["Lộc", "Quyền", "Khoa", "Kị"];
  const hoaFull = ["Lộc (A)", "Quyền (B)", "Khoa (C)", "Kị (D)"];
  const cfgType = ls.cfg[CfgValue.lsCanType] ?? 1;
  const HOA = GETHOA(cfgType);
  let mk = "## III. HỆ THỐNG TỬ VI PHI HÓA \n\n";
  mk += "### 1. Niên Hóa & Phi Hóa Từng Cung\n\n";
  const canNamSinh = ls.dtb.bs.y[0];
  const nienHoaStars = HOA[canNamSinh];
  const nienParts = [];
  for (let dr = 0; dr < 4; dr++) {
    const starId = nienHoaStars[dr];
    const zoneIdx = ls.aIdx[`s${starId}`];
    const zoneName = zoneIdx !== void 0 ? AREA_NAME[ls.ars[zoneIdx].ai] : "Không rõ";
    nienParts.push(`${hoaFull[dr]} -> ${SM[starId]?.name || ""} (${zoneName})`);
  }
  mk += `* **Niên Hóa (Can ${CAN[canNamSinh]}):** ${nienParts.join(" | ")}.
`;
  mk += "* **Chi tiết Phi Hóa:**\n";
  for (let step = 0; step < 12; step++) {
    const currIdx = ls.aIdx[`ai${step}`];
    if (currIdx === void 0) continue;
    const zone = ls.ars[currIdx];
    const canIdx = zone.cn;
    const cno = zone.cno;
    const starIds = HOA[canIdx];
    const phiParts = [];
    for (let dr = 0; dr < 4; dr++) {
      const destIdx = cno[dr];
      const destZoneName = AREA_NAME[ls.ars[destIdx].ai];
      const starName = SM[starIds[dr]]?.name || "";
      if (destIdx === currIdx) {
        phiParts.push(`**Tự hóa ${hoaShort[dr]} (${starName})**`);
      } else if (Math.abs(destIdx - currIdx) === 6) {
        phiParts.push(`**Hướng tâm ${hoaShort[dr]} -> ${destZoneName} (${starName})**`);
      } else {
        phiParts.push(`${hoaShort[dr]} -> ${destZoneName} (${starName})`);
      }
    }
    mk += `* **${AREA_NAME[zone.ai]} (${CAN[canIdx]}):** ${phiParts.join(", ")}.
`;
  }
  mk += "\n";
  mk += generateLuongPhaiSection(ls, HOA, hoaShort);
  return mk;
}
function generateLuongPhaiSection(ls, HOA, hoaShort) {
  let mk = "### 2. Đặc Điểm Lương Phái Chi Tiết\n\n";
  const tuHoaTexts = [];
  const luuXuatTexts = [];
  const kiChuyenLocTexts = [];
  const chuyenKiTexts = [];
  for (let step = 0; step < 12; step++) {
    const currIdx = ls.aIdx[`ai${step}`];
    if (currIdx === void 0) continue;
    const zone = ls.ars[currIdx];
    const canIdx = zone.cn;
    const cno = zone.cno;
    const starIds = HOA[canIdx];
    const cungName = AREA_NAME[zone.ai];
    for (let dr = 0; dr < 4; dr++) {
      const destIdx = cno[dr];
      const destZoneName = AREA_NAME[ls.ars[destIdx].ai];
      const starName = SM[starIds[dr]]?.name || "";
      if (destIdx === currIdx) {
        tuHoaTexts.push(`${starName} tự hóa ${hoaShort[dr]} (${cungName})`);
      } else if (Math.abs(destIdx - currIdx) === 6) {
        if (dr === 0) luuXuatTexts.push(`${cungName} lưu xuất lộc -> ${destZoneName}`);
        if (dr === 3) luuXuatTexts.push(`${cungName} lưu xuất kị -> ${destZoneName}`);
      }
      if (dr === 3 && zone.zolk?.[TH.L]?.[ZolkName.isMoveLoc] === 1) {
        kiChuyenLocTexts.push(`${cungName} -> ${destZoneName}`);
      }
      if (dr === 3 && destIdx !== currIdx && Math.abs(destIdx - currIdx) !== 6) {
        if (zone.zolk?.[TH.K]?.[ZolkName.isMoveKi] === 1) {
          chuyenKiTexts.push(`${cungName} -> ${destZoneName} (${starName})`);
        }
      }
    }
  }
  if (tuHoaTexts.length > 0) mk += `* **Tự Hóa:** ${tuHoaTexts.join(", ")}.
`;
  if (luuXuatTexts.length > 0) mk += `* **Lưu Xuất:** ${luuXuatTexts.join(", ")}.
`;
  if (kiChuyenLocTexts.length > 0) mk += `* **Đường Kị chuyển Lộc:** ${kiChuyenLocTexts.join(", ")}.
`;
  if (chuyenKiTexts.length > 0) mk += `* **Đường chuyển Kị:** ${chuyenKiTexts.join(", ")}.
`;
  mk += "\n";
  mk += "### 3. Phương viên Lộc Kị Toàn Đồ Lương Phái:\n\n";
  for (let step = 0; step < 12; step++) {
    const currIdx = ls.aIdx[`ai${step}`];
    if (currIdx === void 0) continue;
    const zone = ls.ars[currIdx];
    let numberLoc = 0;
    let numberKi = 0;
    if (zone.zolk?.[TH.L]) numberLoc = zone.zolk[TH.L][ZolkName.currentLoc];
    if (zone.zolk?.[TH.K]) numberKi = zone.zolk[TH.K][ZolkName.currentKi];
    const isTuanHoanLoc = ls.loopLP?.[TH.L]?.find((arr) => arr.includes(currIdx));
    const isTuanHoanKi = ls.loopLP?.[TH.K]?.find((arr) => arr.includes(currIdx));
    if (numberLoc === 0 && numberKi === 0 && !isTuanHoanLoc && !isTuanHoanKi) continue;
    const parts = [];
    if (numberLoc > 0 || isTuanHoanLoc) {
      if (isTuanHoanLoc) {
        const otherZones = isTuanHoanLoc.filter((id) => id !== currIdx).map((id) => AREA_NAME[ls.ars[id].ai]).join(", ");
        if (zone.zolk?.[TH.L]?.[ZolkName.locKeep] > 0) {
          parts.push(`${zone.zolk[TH.L][ZolkName.locKeep]} Lộc giữ lại`);
        }
        parts.push(`${numberLoc > 0 ? numberLoc + " Lộc " : ""}(Tuần hoàn với ${otherZones})`);
      } else {
        parts.push(`${numberLoc} Lộc (A)`);
      }
    }
    if (numberKi > 0 || isTuanHoanKi) {
      if (isTuanHoanKi) {
        const otherZones = isTuanHoanKi.filter((id) => id !== currIdx).map((id) => AREA_NAME[ls.ars[id].ai]).join(", ");
        parts.push(`${numberKi > 0 ? numberKi + " Kị " : ""}(Tuần hoàn với ${otherZones})`);
      } else {
        parts.push(`${numberKi} Kị (D)`);
      }
    }
    if (parts.length > 0) {
      mk += `* ${AREA_NAME[zone.ai]}: ${parts.join(", ")}.
`;
    }
  }
  return mk;
}
function generateFullMarkdown(ls) {
  const { dtb, tutru } = ls;
  const dvTr = tutru.dv;
  let dvTTStartAge = 0;
  if (dvTr?.length > 0) {
    const mdjFirst = dayjs.unix(dvTr[0][2]);
    dvTTStartAge = mdjFirst.year() - dtb.sn.y + 1;
  }
  const menhZone = ls.ars[ls.am];
  const dvTVStartAge = menhZone.dv;
  let mk = "# HỆ THỐNG DỮ LIỆU MỆNH LÝ TOÀN DIỆN (TỨ TRỤ & TỬ VI)\n\n";
  mk += "> [!IMPORTANT] **QUY TẮC CỐT LÕI ĐỂ AI KHÔNG NHẦM LẪN:**\n";
  mk += `> 1. **ĐẠI VẬN TỨ TRỤ (DV-TT):** Khởi từ **${dvTTStartAge} tuổi**. Dựa trên Tiết Khí. Dùng để luận Thập Thần và hưng suy ngũ hành.
`;
  mk += `> 2. **ĐẠI VẬN TỬ VI (DV-TV):** Khởi từ **${dvTVStartAge} tuổi**. Dựa trên ${HH[ls.cid]} Cục. Dùng để luận sao và cung vị.
`;
  mk += "> \n\n---\n\n";
  mk += generateSectionI(ls, dvTTStartAge);
  mk += "\n---\n\n";
  mk += generateSectionII(ls, dvTVStartAge);
  mk += "\n---\n\n";
  mk += generateSectionIII(ls);
  return mk;
}

const TabContent = ({ title, content, btnId, onCopy }) => /* @__PURE__ */ jsx("pre", { className: "overflow-visible!", children: /* @__PURE__ */ jsxs("div", { className: "rounded-md border-[0.5px] border-[#ffffff26] bg-[#ddd]/50 contain-inline-size", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex h-9 items-center justify-center rounded-t-md bg-[#ccc]/50 px-4 py-2 font-sans text-xs text-black/85 select-none", children: [
    /* @__PURE__ */ jsx("span", { children: title }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-1", onClick: () => onCopy(content, btnId), children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          fill: "none",
          viewBox: "0 0 24 24",
          className: "icon-sm",
          children: /* @__PURE__ */ jsx(
            "path",
            {
              fill: "currentColor",
              fillRule: "evenodd",
              d: "M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z",
              clipRule: "evenodd"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("span", { id: btnId, className: "cursor-pointer pl-2 font-sans", children: "Click Copy - Lấy Text" })
    ] }) })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "", dir: "ltr", children: /* @__PURE__ */ jsx(
    "textarea",
    {
      className: "language-markdown h-[120px] w-full overflow-y-auto border-none bg-[#ddd]/50 p-4 text-left font-mono text-xs leading-normal whitespace-pre-wrap text-[#686868] focus:bg-yellow-100/30 focus:outline-hidden",
      readOnly: true,
      value: content
    }
  ) })
] }) });
function toBase64(str) {
  try {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
  } catch (e) {
    return "";
  }
}
const CSVTable = ({ ls }) => {
  const [csvContent, setCsvContent] = useState("");
  useEffect(() => {
    setCsvContent(toBase64(generateFullMarkdown(ls)));
  }, [ls]);
  const handleCopyClick = (content, btnId) => {
    const btnCopy = document.getElementById(btnId);
    if (!btnCopy) return;
    const originalText = btnCopy.textContent;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(content).then(() => {
        btnCopy.textContent = "Đã copy";
        setTimeout(() => {
          btnCopy.textContent = originalText;
        }, 2e3);
      }).catch((err) => {
        console.warn("Clipboard API failed, trying fallback:", err);
        fallbackCopyText(content, btnCopy, originalText);
      });
    } else {
      fallbackCopyText(content, btnCopy, originalText);
    }
  };
  const fallbackCopyText = (text, btnElement, originalText) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    textArea.style.width = "1px";
    textArea.style.height = "1px";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    setTimeout(() => {
      try {
        textArea.focus();
        textArea.select();
        textArea.setSelectionRange(0, text.length);
        const successful = document.execCommand("copy");
        if (successful) {
          btnElement.textContent = "Đã copy";
          setTimeout(() => {
            btnElement.textContent = originalText;
          }, 2e3);
        } else if (navigator.userAgent.match(/ipad|iphone/i)) {
          const tempDiv = document.createElement("div");
          tempDiv.innerText = text;
          tempDiv.style.position = "absolute";
          tempDiv.style.left = "-9999px";
          document.body.appendChild(tempDiv);
          const range = document.createRange();
          range.selectNodeContents(tempDiv);
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
            const iosSuccess = document.execCommand("copy");
            selection.removeAllRanges();
            if (iosSuccess) {
              btnElement.textContent = "Đã copy";
              setTimeout(() => {
                btnElement.textContent = originalText;
              }, 2e3);
            }
          }
          document.body.removeChild(tempDiv);
        }
      } catch (err) {
        console.error("Fallback copy error:", err);
        btnElement.textContent = "Copy thất bại";
        setTimeout(() => {
          btnElement.textContent = originalText;
        }, 2e3);
      }
      if (document.body.contains(textArea)) {
        document.body.removeChild(textArea);
      }
    }, 0);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(TabContent, { title: "", content: csvContent, btnId: "btnCopy", onCopy: handleCopyClick }) });
};

const ExplainLS = React.memo(() => {
  const Section = ({ title, id, children, defaultOpen = true }) => /* @__PURE__ */ jsxs("details", { className: "group mb-6 border-t border-amber-900/20 pt-4", open: defaultOpen, id, children: [
    /* @__PURE__ */ jsxs("summary", { className: "flex cursor-pointer list-none items-center justify-between font-serif text-lg md:text-xl font-bold text-amber-900 transition-colors hover:text-red-700 [&::-webkit-details-marker]:hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "text-red-700 font-serif text-sm", children: "◈" }),
        /* @__PURE__ */ jsx("span", { children: title })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-red-700/50 transition-transform duration-300 group-open:rotate-180", children: "▼" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 animate-in fade-in duration-300 text-stone-800 text-sm sm:text-base leading-relaxed font-serif", children })
  ] });
  return /* @__PURE__ */ jsx("div", { className: "w-full mt-8", children: /* @__PURE__ */ jsxs("div", { className: "relative border-b-4 border-b-double border-amber-900/30 p-4 sm:p-8 text-stone-800 mx-auto w-full", children: [
    /* @__PURE__ */ jsxs("section", { className: "mb-10 px-2 sm:px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-6 mt-2 text-2xl md:text-3xl font-bold font-serif text-amber-900 flex items-center justify-center gap-2 text-center", children: "Video giới thiệu chung" }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto w-full max-w-4xl border-2 border-amber-900/20 p-1 bg-white/50", children: /* @__PURE__ */ jsx("div", { className: "relative w-full aspect-video bg-amber-50", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          loading: "lazy",
          src: "https://www.youtube.com/embed/NihjY_1UjjA",
          title: "Video hướng dẫn xem lá số",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          referrerPolicy: "strict-origin-when-cross-origin",
          allowFullScreen: true,
          className: "absolute top-0 left-0 h-full w-full border-0"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "px-2 sm:px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-8 text-xl md:text-3xl text-center font-bold font-serif text-amber-900 flex items-center justify-center gap-2", children: "Chú Giải Ký Hiệu" }),
      /* @__PURE__ */ jsx(Section, { title: "Ý Nghĩa Tại Các Cung Vị trên Lá Số", id: "explanation-container", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "border border-amber-900/15 p-4 bg-white/40 transition-colors hover:bg-white/80", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-amber-900 mb-3 border-b-2 border-dotted border-amber-900/20 pb-2 text-center text-lg", children: "Tổng Quan Cung" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-[15px]", children: [
            /* @__PURE__ */ jsx("li", { children: "Tên cung nguyên bàn ở chính giữa (Mệnh, Bào, Phối...)." }),
            /* @__PURE__ */ jsx("li", { children: "Tam giác nhỏ cạnh tên chỉ vòng tam hợp (VD: Thân - Tý - Thìn)." }),
            /* @__PURE__ */ jsx("li", { children: "Góc trái trên cùng: Can chi cung (B.Dần, Đ.Mão...)." }),
            /* @__PURE__ */ jsxs("li", { children: [
              "Chữ ",
              /* @__PURE__ */ jsx("strong", { children: "(T)" }),
              ": Cung Thân Nam Phái."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border border-amber-900/15 p-4 bg-white/40 transition-colors hover:bg-white/80", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-amber-900 mb-3 border-b-2 border-dotted border-amber-900/20 pb-2 text-center text-lg", children: "Tứ Hóa - Phi Hóa" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-[15px]", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "☸" }),
              ": Lai Nhân Cung Khâm Thiên."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "+ -" }),
              ": Nam nữ nhân tinh Khâm Thiên."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "A, B, C, D" }),
              " (tròn): Tiên Thiên Tứ Hóa (Lộc, Quyền, Khoa, Kị)."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "2, 3, 4, 5" }),
              ": Tứ hóa lưu từ Đại Vận đến Nhật."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "Mũi tên xuyên tâm: ",
              /* @__PURE__ */ jsx("em", { children: "Tự hóa hướng tâm" }),
              ", ra ngoài: ",
              /* @__PURE__ */ jsx("em", { children: "Tự hóa ly tâm" }),
              "."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border border-amber-900/15 p-4 bg-white/40 transition-colors hover:bg-white/80", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-amber-900 mb-3 border-b-2 border-dotted border-amber-900/20 pb-2 text-center text-lg", children: "Vận Hạn - Sao Lưu" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-[15px]", children: [
            /* @__PURE__ */ jsx("li", { children: "Góc trái dưới: Tiểu vận Nam Phái." }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Đ." }),
              " (Đại vận), ",
              /* @__PURE__ */ jsx("strong", { children: "L." }),
              " (Lưu niên) áp dụng cho tinh diệu."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "V5" }),
              ": Nguyệt vận Nam Phái tháng 5."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Đ.S Sửu P12" }),
              ": Nguyệt vận Phi Tinh (Tháng 12 Đinh Sửu)."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "⊙" }),
              " Lưu Tuần, ",
              /* @__PURE__ */ jsx("strong", { children: "⊠" }),
              " Lưu Triệt."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border border-amber-900/15 p-4 bg-white/40 transition-colors hover:bg-white/80", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-amber-900 mb-3 border-b-2 border-dotted border-amber-900/20 pb-2 text-center text-lg", children: "Cung Vị Trùng Điệp" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-[15px]", children: [
            /* @__PURE__ */ jsx("li", { children: "Trái trên: Cung Đại vận kích hoạt (Đ.Mệnh)." }),
            /* @__PURE__ */ jsx("li", { children: "Phải trên: Cung Lưu niên (L.Mệnh)." }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "⇄" }),
              " và ",
              /* @__PURE__ */ jsx("strong", { children: "⇅" }),
              ": Sự tuần hoàn giao lưu của Lộc, Quyền, Kị giữa các trục."
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(Section, { title: "Phụ Lục: Bảng An Tứ Hóa Các Phái", id: "tuhoatbl-container", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-5 text-center italic text-stone-600", children: "Tham khảo sự dị biệt trong an sao Tứ Hóa (Lộc - Quyền - Khoa - Kị) giữa các môn phái." }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto pb-4 scrollbar-hide", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[900px] border-collapse text-left whitespace-nowrap border-2 border-amber-900/20", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-amber-900/5 font-serif", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "border border-amber-900/20 px-4 py-3 text-center text-amber-900 text-lg", children: "Thiên Can" }),
            /* @__PURE__ */ jsx("th", { className: "border border-amber-900/20 px-4 py-3 font-semibold text-lg", children: "Bảng 1 (Phổ Thông)" }),
            /* @__PURE__ */ jsx("th", { className: "border border-amber-900/20 px-4 py-3 font-bold text-red-700 text-lg", children: "Bảng 2 (Mặc Định)" }),
            /* @__PURE__ */ jsx("th", { className: "border border-amber-900/20 px-4 py-3 font-semibold text-lg", children: "Bảng 3 (Trung Châu)" }),
            /* @__PURE__ */ jsx("th", { className: "border border-amber-900/20 px-4 py-3 font-semibold text-lg", children: "Bảng 4 (Dị Phái 1)" }),
            /* @__PURE__ */ jsx("th", { className: "border border-amber-900/20 px-4 py-3 font-semibold text-lg", children: "Bảng 5 (Dị Phái 2)" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "font-serif text-[15px]", children: [
            { can: "GIÁP", vals: [["Liêm", "Phá", "Vũ", "Dương"], ["Liêm", "Phá", "Vũ", "Dương"], ["Liêm", "Phá", "Vũ", "Dương"], ["Liêm", "Phá", "Vũ", "Dương"], ["Liêm", "Phá", "Vũ", "Dương"]] },
            { can: "ẤT", vals: [["Cơ", "Lương", "Tử", "Âm"], ["Cơ", "Lương", "Tử", "Âm"], ["Cơ", "Lương", "Tử", "Âm"], ["Cơ", "Lương", "Tử", "Âm"], ["Cơ", "Lương", "Tử", "Âm"]] },
            { can: "BÍNH", vals: [["Đồng", "Cơ", "Xương", "Liêm"], ["Đồng", "Cơ", "Xương", "Liêm"], ["Đồng", "Cơ", "Xương", "Liêm"], ["Đồng", "Cơ", "Xương", "Liêm"], ["Đồng", "Cơ", "Xương", "Liêm"]] },
            { can: "ĐINH", vals: [["Âm", "Đồng", "Cơ", "Cự"], ["Âm", "Đồng", "Cơ", "Cự"], ["Âm", "Đồng", "Cơ", "Cự"], ["Âm", "Đồng", "Cơ", "Cự"], ["Âm", "Đồng", "Cơ", "Cự"]] },
            { can: "MẬU", vals: [["Tham", "Âm", "Bật", "Cơ"], ["Tham", "Âm", "Bật", "Cơ"], ["Tham", "Âm", "!Dương", "Cơ"], ["Tham", "Âm", "Bật", "Cơ"], ["Tham", "Âm", "Bật", "Cơ"]] },
            { can: "KỶ", vals: [["Vũ", "Tham", "Lương", "Khúc"], ["Vũ", "Tham", "Lương", "Khúc"], ["Vũ", "Tham", "Lương", "Khúc"], ["Vũ", "Tham", "Lương", "Khúc"], ["Vũ", "Tham", "Lương", "Khúc"]] },
            { can: "CANH", vals: [["Dương", "Vũ", "!Âm", "!Đồng"], ["Dương", "Vũ", "!Đồng", "!Âm"], ["Dương", "Vũ", "!Phủ", "!Đồng"], ["Dương", "Vũ", "!Đồng", "!Tướng"], ["Dương", "Vũ", "!Tham", "!Đồng"]] },
            { can: "TÂN", vals: [["Cự", "Dương", "Khúc", "Xương"], ["Cự", "Dương", "Khúc", "Xương"], ["Cự", "Dương", "Khúc", "Xương"], ["Cự", "Dương", "Khúc", "Xương"], ["Cự", "Dương", "Khúc", "Xương"]] },
            { can: "NHÂM", vals: [["Lương", "Tử", "Phụ", "Vũ"], ["Lương", "Tử", "Phụ", "Vũ"], ["Lương", "Tử", "!Phủ", "Vũ"], ["Lương", "Tử", "Phụ", "Vũ"], ["Lương", "Tử", "Phụ", "Vũ"]] },
            { can: "QUÝ", vals: [["Phá", "Cự", "Âm", "Tham"], ["Phá", "Cự", "Âm", "Tham"], ["Phá", "Cự", "Âm", "Tham"], ["Phá", "Cự", "Âm", "Tham"], ["Phá", "Cự", "Âm", "Tham"]] }
          ].map((row, i) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-amber-900/5 transition-colors", children: [
            /* @__PURE__ */ jsx("td", { className: "border border-amber-900/20 px-4 py-3 text-center font-bold text-amber-900 bg-amber-900/5 text-lg", children: row.can }),
            row.vals.map((col, j) => /* @__PURE__ */ jsx("td", { className: "border border-amber-900/20 px-4 py-3", children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 lg:gap-3", children: col.map((star, k) => {
              const isAlert = star.startsWith("!");
              const starName = isAlert ? star.substring(1) : star;
              return /* @__PURE__ */ jsx("span", { className: `inline-block min-w-[36px] text-center ${isAlert ? "text-red-700 font-bold" : ""}`, children: starName }, k);
            }) }) }, j))
          ] }, i)) })
        ] }) })
      ] })
    ] })
  ] }) });
});
ExplainLS.displayName = "ExplainLS";

const LA_SO_WIDTH = 742;
const PAD_ZONE = 54;
const BORDER_WIDTH = 1;
function TrungChauWarning() {
  const warningWidth = LA_SO_WIDTH + PAD_ZONE + BORDER_WIDTH * 2;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "mx-auto mb-4 border-l-4 border-yellow-400 bg-yellow-50 p-4",
      style: { maxWidth: `${warningWidth}px` },
      children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "h-5 w-5 text-yellow-400",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-labelledby": "warningTitle",
            children: [
              /* @__PURE__ */ jsx("title", { id: "warningTitle", children: "Cảnh báo" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                  clipRule: "evenodd"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "ml-3", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-yellow-700", children: [
          /* @__PURE__ */ jsx("strong", { children: "Lưu ý:" }),
          " đang là lá số Trung Châu Phái cẩn thận nhầm Thiên Bàn, Địa Bàn, Nhân Bàn"
        ] }) })
      ] })
    }
  );
}

const tmdAppThumb = new Proxy({"src":"/images/TinhMenhDo-Gemini-app.jpg","width":844,"height":733,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/content/posts/img/TinhMenhDo-Gemini-app.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/content/posts/img/TinhMenhDo-Gemini-app.jpg");
							return target[name];
						}
					});

function toBase64Url(str) {
  const utf8 = new TextEncoder().encode(str);
  let binary = "";
  for (const byte of utf8) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function createShareUrl() {
  if (typeof window === "undefined") return "";
  const { origin, pathname, search } = window.location;
  if (!search) return window.location.href;
  const relativeUrl = `${pathname}${search}`;
  const encoded = toBase64Url(relativeUrl);
  return `${origin}/share#${encoded}`;
}

function AppUI(props) {
  const fnPageClick = () => {
    if (props.fnPageClick !== void 0) {
      props.fnPageClick();
    }
  };
  const fnPageTouchStart = () => {
    if (props.fnPageTouchStart !== void 0) {
      props.fnPageTouchStart();
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      onClick: fnPageClick,
      onTouchStart: fnPageTouchStart,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          fnPageClick();
        }
      },
      tabIndex: 0,
      children: props.children
    }
  ) });
}

const $$StylePopup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/root/code/tmd_astro/src/components/StylePopup.astro", void 0);

export { $$StylePopup as $, APP_ROUTES as A, levelPhiHoaMsg as B, CfgValue as C, changeCanTypeMsg as D, ExplainLS as E, IconVisibilityOff as F, yearLoopStarMsg as G, HOROSCOPE_CONFIG as H, IconSettings as I, hideStarMsg as J, IconStars as K, IconGrade as L, IconStarOutline as M, IconMale as N, IconFemale as O, PHIHOA_COLOR as P, PHIHOA_SYMBOL1 as Q, AppUI as R, SM as S, TrungChauWarning as T, tmdAppThumb as U, AREA_NAME as V, CHI_3HH as W, LTHG_HH as X, CHI_HH as Y, ZolkName as Z, THAP as _, HoroscopeBuildGps as a, HH_THAP as a0, CAN_HH as a1, CAN_AD as a2, containsNumber as a3, STARSTRONG as a4, STAR_SIGN as a5, CR_TS as a6, FAILURE6 as a7, STARLOOP1 as a8, HH as a9, ADTN as aa, SKB as ab, TKN as ac, TKN_MONTH as ad, TKN_PN as ae, idxTHAP as af, TSNAME as ag, LTHG_NA as ah, GETHOA as ai, HoroHelp as b, configDefault as c, CHI as d, CAN as e, createShareUrl as f, getLunaBornText as g, CSVTable as h, arrH1 as i, getSexText as j, IconSchedule as k, IconAutoStories as l, IconVisibility as m, numbStringToArr as n, IconLoop as o, IconSyncDisabled as p, IconRotate90DegreesCcw as q, IconBlock as r, IconStarRate as s, IconStarBorder as t, updateConfig as u, validateAllConfig as v, IconViewTimeline as w, typeLsName as x, IconAutoAwesomeMotion as y, typeBanTCP as z };
