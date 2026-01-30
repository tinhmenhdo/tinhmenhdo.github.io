import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
/* empty css         */
import 'dayjs/locale/vi.js';
import { MantineProvider } from '@mantine/core';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
import { ChevronLeft, ChevronRight, Loader2, Clock, MapPin, Pencil } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import 'clsx';
import 'emoji-regex';
import { L as LocalLunarCalendar, S as SolarCalculator } from './COnmZ-xv.js';
import { M as MapPicker } from './IPuAKmdK.js';
import { C as CitySearch } from './CDPV4387.js';
import { DateTimePicker } from '@mantine/dates';

const ZodiacHourClock = ({ hours }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const SIZE = 300;
  const CENTER = SIZE / 2;
  const RADIUS = 102;
  const INNER_RADIUS = 45;
  const LABEL_RADIUS = 125;
  const START_OFFSET = 75;
  const getScoreColor = (score) => {
    if (score >= 7.5) return "#10b981";
    if (score >= 5.5) return "#86efac";
    if (score >= 4) return "#fcd34d";
    if (score >= 2.5) return "#fdba74";
    return "#fca5a5";
  };
  const getScoreColorBg = (score) => {
    if (score >= 7.5) return "fill-emerald-500";
    if (score >= 5.5) return "fill-green-300";
    if (score >= 4) return "fill-amber-300";
    if (score >= 2.5) return "fill-orange-300";
    return "fill-red-300";
  };
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const rad = angleInDegrees * Math.PI / 180;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad)
    };
  };
  const createWedge = (index, score) => {
    const startAngle = START_OFFSET + index * 30;
    const endAngle = startAngle + 30;
    const start = polarToCartesian(CENTER, CENTER, RADIUS, startAngle);
    const end = polarToCartesian(CENTER, CENTER, RADIUS, endAngle);
    const startInner = polarToCartesian(CENTER, CENTER, INNER_RADIUS, startAngle);
    const endInner = polarToCartesian(CENTER, CENTER, INNER_RADIUS, endAngle);
    const largeArcFlag = 0;
    const color = getScoreColor(score);
    return /* @__PURE__ */ jsxs(
      "g",
      {
        onMouseEnter: () => setHoveredIndex(index),
        onMouseLeave: () => setHoveredIndex(null),
        className: "cursor-pointer transition-opacity",
        style: { opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1 },
        children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: [
                `M ${start.x} ${start.y}`,
                `A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
                `L ${endInner.x} ${endInner.y}`,
                `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
                "Z"
              ].join(" "),
              fill: color,
              stroke: "white",
              strokeWidth: "2"
            }
          ),
          hours[index].isHoangDao && /* @__PURE__ */ jsx(
            "path",
            {
              d: [
                `M ${start.x} ${start.y}`,
                `A ${RADIUS} ${RADIUS} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`
              ].join(" "),
              fill: "none",
              stroke: "#fbbf24",
              strokeWidth: "4",
              className: "animate-pulse"
            }
          ),
          renderLabel(index, startAngle + 15, hours[index].chi, hours[index].score, hours[index].isHoangDao)
        ]
      },
      index
    );
  };
  const renderLabel = (index, angle, label, score, isHoangDao) => {
    const pos = polarToCartesian(CENTER, CENTER, LABEL_RADIUS, angle);
    const posScore = polarToCartesian(CENTER, CENTER, RADIUS - 25, angle);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(
        "text",
        {
          x: pos.x,
          y: pos.y,
          textAnchor: "middle",
          dominantBaseline: "middle",
          className: `text-xs font-bold font-serif ${isHoangDao ? "fill-amber-600" : "fill-gray-700"}`,
          children: [
            label,
            isHoangDao && " ★"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "text",
        {
          x: posScore.x,
          y: posScore.y,
          textAnchor: "middle",
          dominantBaseline: "middle",
          className: "text-[10px] font-medium fill-white pointer-events-none",
          children: score % 1 === 0 ? score : score.toFixed(1)
        }
      )
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-4 text-md font-bold text-gray-800 uppercase tracking-wide", children: "Giờ Hoàng Đạo" }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("svg", { width: SIZE, height: SIZE, viewBox: `0 0 ${SIZE} ${SIZE}`, children: [
      /* @__PURE__ */ jsx("circle", { cx: CENTER, cy: CENTER, r: RADIUS, fill: "#f9fafb" }),
      hours.map((h, i) => createWedge(i, h.score)),
      /* @__PURE__ */ jsx("circle", { cx: CENTER, cy: CENTER, r: INNER_RADIUS - 5, fill: "white", className: "drop-shadow-sm" }),
      hoveredIndex !== null ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("text", { x: CENTER, y: CENTER - 5, textAnchor: "middle", className: "text-sm font-bold fill-gray-800 uppercase", children: [
          hours[hoveredIndex].chi,
          " ",
          hours[hoveredIndex].isHoangDao && "★"
        ] }),
        /* @__PURE__ */ jsxs("text", { x: CENTER, y: CENTER + 10, textAnchor: "middle", className: `text-xs font-bold ${getScoreColorBg(hours[hoveredIndex].score).replace("fill-", "fill-")}`, children: [
          hours[hoveredIndex].score % 1 === 0 ? hours[hoveredIndex].score : hours[hoveredIndex].score.toFixed(1),
          "đ"
        ] }),
        hours[hoveredIndex].isHoangDao && /* @__PURE__ */ jsx("text", { x: CENTER, y: CENTER + 24, textAnchor: "middle", className: "text-[9px] font-bold fill-amber-500 uppercase", children: "Hoàng Đạo" })
      ] }) : /* @__PURE__ */ jsx("text", { x: CENTER, y: CENTER, textAnchor: "middle", dominantBaseline: "middle", className: "text-[10px] fill-gray-400", children: "12 Giáp" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-[10px] flex-wrap justify-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500" }),
          " Đại Cát"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-green-300" }),
          " Tốt"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-300" }),
          " T.Bình"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-orange-300" }),
          " Kém"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-red-300" }),
          " Xấu"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-[10px] text-gray-500 flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold", children: "★" }),
        " Giờ Hoàng Đạo"
      ] })
    ] })
  ] });
};

var CAN_ENUM = /* @__PURE__ */ ((CAN_ENUM2) => {
  CAN_ENUM2[CAN_ENUM2["Giap"] = 0] = "Giap";
  CAN_ENUM2[CAN_ENUM2["At"] = 1] = "At";
  CAN_ENUM2[CAN_ENUM2["Binh"] = 2] = "Binh";
  CAN_ENUM2[CAN_ENUM2["Dinh"] = 3] = "Dinh";
  CAN_ENUM2[CAN_ENUM2["Mau"] = 4] = "Mau";
  CAN_ENUM2[CAN_ENUM2["Ky"] = 5] = "Ky";
  CAN_ENUM2[CAN_ENUM2["Canh"] = 6] = "Canh";
  CAN_ENUM2[CAN_ENUM2["Tan"] = 7] = "Tan";
  CAN_ENUM2[CAN_ENUM2["Nham"] = 8] = "Nham";
  CAN_ENUM2[CAN_ENUM2["Quy"] = 9] = "Quy";
  return CAN_ENUM2;
})(CAN_ENUM || {});
var CHI_ENUM = /* @__PURE__ */ ((CHI_ENUM2) => {
  CHI_ENUM2[CHI_ENUM2["Ty"] = 0] = "Ty";
  CHI_ENUM2[CHI_ENUM2["Suu"] = 1] = "Suu";
  CHI_ENUM2[CHI_ENUM2["Dan"] = 2] = "Dan";
  CHI_ENUM2[CHI_ENUM2["Mao"] = 3] = "Mao";
  CHI_ENUM2[CHI_ENUM2["Thin"] = 4] = "Thin";
  CHI_ENUM2[CHI_ENUM2["Ti"] = 5] = "Ti";
  CHI_ENUM2[CHI_ENUM2["Ngo"] = 6] = "Ngo";
  CHI_ENUM2[CHI_ENUM2["Mui"] = 7] = "Mui";
  CHI_ENUM2[CHI_ENUM2["Than"] = 8] = "Than";
  CHI_ENUM2[CHI_ENUM2["Dau"] = 9] = "Dau";
  CHI_ENUM2[CHI_ENUM2["Tuat"] = 10] = "Tuat";
  CHI_ENUM2[CHI_ENUM2["Hoi"] = 11] = "Hoi";
  return CHI_ENUM2;
})(CHI_ENUM || {});
var NGU_HANH_ENUM = /* @__PURE__ */ ((NGU_HANH_ENUM2) => {
  NGU_HANH_ENUM2[NGU_HANH_ENUM2["Kim"] = 0] = "Kim";
  NGU_HANH_ENUM2[NGU_HANH_ENUM2["Moc"] = 1] = "Moc";
  NGU_HANH_ENUM2[NGU_HANH_ENUM2["Thuy"] = 2] = "Thuy";
  NGU_HANH_ENUM2[NGU_HANH_ENUM2["Hoa"] = 3] = "Hoa";
  NGU_HANH_ENUM2[NGU_HANH_ENUM2["Tho"] = 4] = "Tho";
  return NGU_HANH_ENUM2;
})(NGU_HANH_ENUM || {});
var TRUC_ENUM = /* @__PURE__ */ ((TRUC_ENUM2) => {
  TRUC_ENUM2[TRUC_ENUM2["Kien"] = 0] = "Kien";
  TRUC_ENUM2[TRUC_ENUM2["Tru"] = 1] = "Tru";
  TRUC_ENUM2[TRUC_ENUM2["Man"] = 2] = "Man";
  TRUC_ENUM2[TRUC_ENUM2["Binh"] = 3] = "Binh";
  TRUC_ENUM2[TRUC_ENUM2["Dinh"] = 4] = "Dinh";
  TRUC_ENUM2[TRUC_ENUM2["Chap"] = 5] = "Chap";
  TRUC_ENUM2[TRUC_ENUM2["Pha"] = 6] = "Pha";
  TRUC_ENUM2[TRUC_ENUM2["Nguy"] = 7] = "Nguy";
  TRUC_ENUM2[TRUC_ENUM2["Thanh"] = 8] = "Thanh";
  TRUC_ENUM2[TRUC_ENUM2["Thu"] = 9] = "Thu";
  TRUC_ENUM2[TRUC_ENUM2["Khai"] = 10] = "Khai";
  TRUC_ENUM2[TRUC_ENUM2["Be"] = 11] = "Be";
  return TRUC_ENUM2;
})(TRUC_ENUM || {});
var LUC_DIEU_ENUM = /* @__PURE__ */ ((LUC_DIEU_ENUM2) => {
  LUC_DIEU_ENUM2[LUC_DIEU_ENUM2["DaiAn"] = 0] = "DaiAn";
  LUC_DIEU_ENUM2[LUC_DIEU_ENUM2["LuuNien"] = 1] = "LuuNien";
  LUC_DIEU_ENUM2[LUC_DIEU_ENUM2["TocHy"] = 2] = "TocHy";
  LUC_DIEU_ENUM2[LUC_DIEU_ENUM2["XichKhau"] = 3] = "XichKhau";
  LUC_DIEU_ENUM2[LUC_DIEU_ENUM2["TieuCat"] = 4] = "TieuCat";
  LUC_DIEU_ENUM2[LUC_DIEU_ENUM2["KhongVong"] = 5] = "KhongVong";
  return LUC_DIEU_ENUM2;
})(LUC_DIEU_ENUM || {});
var NHI_THAP_BAT_TU_ENUM = /* @__PURE__ */ ((NHI_THAP_BAT_TU_ENUM2) => {
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Giac"] = 0] = "Giac";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Cang"] = 1] = "Cang";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["De"] = 2] = "De";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Phong"] = 3] = "Phong";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Tam"] = 4] = "Tam";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Vi"] = 5] = "Vi";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Co"] = 6] = "Co";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Dau"] = 7] = "Dau";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Nguu"] = 8] = "Nguu";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Nu"] = 9] = "Nu";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Hu"] = 10] = "Hu";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Nguy"] = 11] = "Nguy";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["That"] = 12] = "That";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Bich"] = 13] = "Bich";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Khue"] = 14] = "Khue";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Lau"] = 15] = "Lau";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Vi_D"] = 16] = "Vi_D";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Mao"] = 17] = "Mao";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Tat"] = 18] = "Tat";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Tuy"] = 19] = "Tuy";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Sam"] = 20] = "Sam";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Tinh"] = 21] = "Tinh";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Quy"] = 22] = "Quy";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Lieu"] = 23] = "Lieu";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Tinh_H"] = 24] = "Tinh_H";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Truong"] = 25] = "Truong";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Duc"] = 26] = "Duc";
  NHI_THAP_BAT_TU_ENUM2[NHI_THAP_BAT_TU_ENUM2["Chan"] = 27] = "Chan";
  return NHI_THAP_BAT_TU_ENUM2;
})(NHI_THAP_BAT_TU_ENUM || {});
var THAN_SAT_ENUM = /* @__PURE__ */ ((THAN_SAT_ENUM2) => {
  THAN_SAT_ENUM2["ThienDuc"] = "Thiên Đức";
  THAN_SAT_ENUM2["NguyetDuc"] = "Nguyệt Đức";
  THAN_SAT_ENUM2["ThienXa"] = "Thiên Xá";
  THAN_SAT_ENUM2["NguyetKhong"] = "Nguyệt Không";
  THAN_SAT_ENUM2["SinhKhi"] = "Sinh Khí";
  THAN_SAT_ENUM2["ThienHy"] = "Thiên Hỷ";
  THAN_SAT_ENUM2["ThienDucHop"] = "Thiên Đức Hợp";
  THAN_SAT_ENUM2["NguyetDucHop"] = "Nguyệt Đức Hợp";
  THAN_SAT_ENUM2["ThienAtQuyNhan"] = "Thiên Ất Quý Nhân";
  THAN_SAT_ENUM2["ThienLoc"] = "Thiên Lộc";
  THAN_SAT_ENUM2["LocKho"] = "Lộc Khố";
  THAN_SAT_ENUM2["ThienPhu"] = "Thiên Phú";
  THAN_SAT_ENUM2["ThienQuy"] = "Thiên Quý";
  THAN_SAT_ENUM2["ThienPhuc"] = "Thiên Phúc";
  THAN_SAT_ENUM2["ThienThanh"] = "Thiên Thành";
  THAN_SAT_ENUM2["QuanNhat"] = "Quan Nhật";
  THAN_SAT_ENUM2["DanNhat"] = "Dân Nhật";
  THAN_SAT_ENUM2["NguPhu"] = "Ngũ Phú";
  THAN_SAT_ENUM2["IchHau"] = "Ích Hậu";
  THAN_SAT_ENUM2["PhucSinh"] = "Phúc Sinh";
  THAN_SAT_ENUM2["MinhTinh"] = "Minh Tinh";
  THAN_SAT_ENUM2["ThienMa"] = "Thiên Mã";
  THAN_SAT_ENUM2["TamHop"] = "Tam Hợp";
  THAN_SAT_ENUM2["TueHop"] = "Tuế Hợp";
  THAN_SAT_ENUM2["SatChu"] = "Sát Chủ";
  THAN_SAT_ENUM2["ThuTu"] = "Thụ Tử";
  THAN_SAT_ENUM2["DuongCongKy"] = "Dương Công Kỵ";
  THAN_SAT_ENUM2["TamNuong"] = "Tam Nương";
  THAN_SAT_ENUM2["NguyetKy"] = "Nguyệt Kỵ";
  THAN_SAT_ENUM2["TuLy_TuTuyet"] = "Tứ Ly - Tứ Tuyệt";
  THAN_SAT_ENUM2["NguyetPha"] = "Nguyệt Phá";
  THAN_SAT_ENUM2["ThienKhacDiaXung"] = "Thiên Khắc Địa Xung";
  THAN_SAT_ENUM2["ThienCuong"] = "Thiên Cương";
  THAN_SAT_ENUM2["DiaPha"] = "Địa Phá";
  THAN_SAT_ENUM2["NguyetYem"] = "Nguyệt Yếm";
  THAN_SAT_ENUM2["TieuHongSa"] = "Tiểu Hồng Sa";
  THAN_SAT_ENUM2["HoangVu"] = "Hoang Vu";
  THAN_SAT_ENUM2["ThoOn"] = "Thổ Ôn";
  THAN_SAT_ENUM2["NhanCach"] = "Nhân Cách";
  THAN_SAT_ENUM2["QuyKhoc"] = "Quỷ Khốc";
  THAN_SAT_ENUM2["DaiHao"] = "Đại Hao";
  THAN_SAT_ENUM2["NguyetHinh"] = "Nguyệt Hình";
  THAN_SAT_ENUM2["ThienHinh"] = "Thiên Hình";
  THAN_SAT_ENUM2["ChuTuoc"] = "Chu Tước";
  THAN_SAT_ENUM2["BachHo"] = "Bạch Hổ";
  THAN_SAT_ENUM2["HuyenVu"] = "Huyền Vũ";
  THAN_SAT_ENUM2["CauTran"] = "Câu Trận";
  THAN_SAT_ENUM2["ThienLao"] = "Thiên Lao";
  THAN_SAT_ENUM2["NguyenVu"] = "Nguyên Vũ";
  THAN_SAT_ENUM2["ThoPhu"] = "Thổ Phủ";
  THAN_SAT_ENUM2["ThoCam"] = "Thổ Cấm";
  THAN_SAT_ENUM2["CoThan"] = "Cô Thần";
  THAN_SAT_ENUM2["QuaTu"] = "Quả Tú";
  THAN_SAT_ENUM2["TrungTang"] = "Trùng Tang";
  THAN_SAT_ENUM2["KiepSat"] = "Kiếp Sát";
  THAN_SAT_ENUM2["ThienTac"] = "Thiên Tặc";
  THAN_SAT_ENUM2["LucHop"] = "Lục Hợp";
  THAN_SAT_ENUM2["LySang"] = "Ly Sàng";
  THAN_SAT_ENUM2["KhongPhong"] = "Không Phòng";
  return THAN_SAT_ENUM2;
})(THAN_SAT_ENUM || {});

const CAN_NAMES = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
const CHI_NAMES = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tị", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const TRUC_NAMES = ["Kiến", "Trừ", "Mãn", "Bình", "Định", "Chấp", "Phá", "Nguy", "Thành", "Thu", "Khai", "Bế"];
const LUC_DIEU_NAMES = ["Đại An", "Lưu Niên", "Tốc Hỷ", "Xích Khẩu", "Tiểu Cát", "Không Vong"];
const NHI_THAP_BAT_TU_NAMES = [
  "Giác",
  "Cang",
  "Đê",
  "Phòng",
  "Tâm",
  "Vĩ",
  "Cơ",
  "Đẩu",
  "Ngưu",
  "Nữ",
  "Hư",
  "Nguy",
  "Thất",
  "Bích",
  "Khuê",
  "Lâu",
  "Vị",
  "Mão",
  "Tất",
  "Chủy",
  "Sâm",
  "Tỉnh",
  "Quỷ",
  "Liễu",
  "Tinh",
  "Trương",
  "Dực",
  "Chẩn"
];
const DATA = {
  CHIS: CHI_NAMES,
  CANS: CAN_NAMES,
  TRUCS: TRUC_NAMES,
  LUC_DIEU: LUC_DIEU_NAMES,
  NHI_THAP_BAT_TU: NHI_THAP_BAT_TU_NAMES
  // Refactored to use Enums
};
const TRUC_MEANING = {
  [TRUC_ENUM.Kien]: "Tốt cho xuất hành, giá thú, khai trương. Kỵ động thổ.",
  [TRUC_ENUM.Tru]: "Tốt cho tẩy uế, chữa bệnh, giải oan. Kỵ cưới hỏi, đi xa.",
  [TRUC_ENUM.Man]: "Tốt cho cầu tài, khai trương, xuất hành. Kỵ tố tụng, chôn cất.",
  [TRUC_ENUM.Binh]: "Tốt cho mọi việc bình thường, tu tạo. Kỵ việc nguy hiểm.",
  [TRUC_ENUM.Dinh]: "Tốt cho nhập học, mua bán, động thổ. Kỵ thưa kiện, đi thuyền.",
  [TRUC_ENUM.Chap]: "Tốt cho bắt trộm, giải quyết tranh chấp. Kỵ đi xa, chuyển nhà.",
  [TRUC_ENUM.Pha]: "Chỉ tốt cho việc phá dỡ nhà cửa. Kỵ cưới hỏi, khai trương.",
  [TRUC_ENUM.Nguy]: "Xấu mọi việc, nhất là đi xa, leo trèo. Chỉ tốt cho lễ bái.",
  [TRUC_ENUM.Thanh]: "Đại cát, tốt cho cưới hỏi, khai trương, nhập trạch.",
  [TRUC_ENUM.Thu]: "Tốt cho thu nợ, nhập kho, sửa nhà. Kỵ chôn cất, khánh thành.",
  [TRUC_ENUM.Khai]: "Tốt cho khai trương, cưới hỏi, xuất hành. Kỵ việc không minh bạch.",
  [TRUC_ENUM.Be]: "Tốt cho đắp đê, xây vá. Kỵ khai trương, cưới hỏi, chữa bệnh."
};
({
  [LUC_DIEU_ENUM.DaiAn]: "Mọi việc yên tâm, hành sự thuận lợi, gia đạo bình an.",
  [LUC_DIEU_ENUM.LuuNien]: "Việc khó thành, dây dưa kéo dài, nên hoãn lại việc lớn.",
  [LUC_DIEU_ENUM.TocHy]: "Tin vui đến nhanh, cầu tài đắc lợi, nên làm ngay việc cần.",
  [LUC_DIEU_ENUM.XichKhau]: "Dễ cãi vã, thị phi, lời qua tiếng lại, nên giữ mồm miệng.",
  [LUC_DIEU_ENUM.TieuCat]: "Mọi việc trôi chảy, có quý nhân giúp, gặp dữ hóa lành.",
  [LUC_DIEU_ENUM.KhongVong]: "Tiền của dễ mất, việc lớn chớ làm, an phận thủ thường."
});
const NHI_THAP_BAT_TU_MEANING = {
  [NHI_THAP_BAT_TU_ENUM.Giac]: "Đỗ đạt, vinh hiển, tốt cho cưới hỏi, xây dựng.",
  [NHI_THAP_BAT_TU_ENUM.Cang]: "Xấu cho cưới hỏi, xây dựng, nhưng tốt cho việc mua bán.",
  [NHI_THAP_BAT_TU_ENUM.De]: "Tốt cho cầu tài, cưới hỏi, nhưng kỵ việc đi đường thủy.",
  [NHI_THAP_BAT_TU_ENUM.Phong]: "Đại cát, tốt cho mọi việc, nhất là xây dựng, cưới hỏi.",
  [NHI_THAP_BAT_TU_ENUM.Tam]: "Xấu cho tranh chấp, thưa kiện, kỵ xây dựng, cưới hỏi.",
  [NHI_THAP_BAT_TU_ENUM.Vi]: "Tốt cho khai trương, cầu tài, ngoại giao, ký kết.",
  [NHI_THAP_BAT_TU_ENUM.Co]: "Tốt cho gia đạo, cầu tự, nhưng kỵ việc động thổ, an táng.",
  [NHI_THAP_BAT_TU_ENUM.Dau]: "Đại cát, tốt cho công danh, sự nghiệp, xây dựng nhà cửa.",
  [NHI_THAP_BAT_TU_ENUM.Nguu]: "Xấu cho việc đi xa, nhưng tốt cho chăn nuôi, trồng trọt.",
  [NHI_THAP_BAT_TU_ENUM.Nu]: "Xấu cho tranh chấp, cưới hỏi, kỵ việc mai táng.",
  [NHI_THAP_BAT_TU_ENUM.Hu]: "Xấu mọi việc, nhất là xây dựng, cưới hỏi, khai trương.",
  [NHI_THAP_BAT_TU_ENUM.Nguy]: "Xấu cho đi xa, xây dựng, dễ gặp rủi ro, tai nạn.",
  [NHI_THAP_BAT_TU_ENUM.That]: "Tốt cho xây dựng, kinh doanh, cầu tài lộc.",
  [NHI_THAP_BAT_TU_ENUM.Bich]: "Đại cát, văn chương đỗ đạt, tốt cho khai trương, cưới hỏi.",
  [NHI_THAP_BAT_TU_ENUM.Khue]: "Xấu cho cưới hỏi, khai trương, nhưng tốt cho việc cầu học.",
  [NHI_THAP_BAT_TU_ENUM.Lau]: "Tốt cho cầu danh, nhận chức, nhưng kỵ việc xây dựng.",
  [NHI_THAP_BAT_TU_ENUM.Vi_D]: "Tốt cho yến tiệc, cầu tài, nhưng kỵ việc xuất hành đi xa.",
  [NHI_THAP_BAT_TU_ENUM.Mao]: "Xấu cho việc xây dựng, cưới hỏi, chôn cất, khai trương.",
  [NHI_THAP_BAT_TU_ENUM.Tat]: "Đại cát, tốt cho mọi việc, nhất là chăn nuôi, trồng trọt.",
  [NHI_THAP_BAT_TU_ENUM.Tuy]: "Xấu cho việc nhận chức, đầu tư, kỵ việc tranh chấp.",
  [NHI_THAP_BAT_TU_ENUM.Sam]: "Tốt cho cầu tài, kinh doanh, nhưng kỵ việc cưới hỏi.",
  [NHI_THAP_BAT_TU_ENUM.Tinh]: "Đại cát, tốt cho thi cử, thăng quan tiến chức.",
  [NHI_THAP_BAT_TU_ENUM.Quy]: "Xấu cho mai táng, cưới hỏi, nhưng tốt cho việc chặt cây.",
  [NHI_THAP_BAT_TU_ENUM.Lieu]: "Xấu mọi việc, dễ gặp chuyện thị phi, hao tài tốn của.",
  [NHI_THAP_BAT_TU_ENUM.Tinh_H]: "Tốt cho việc xây dựng, cưới hỏi, nhưng kỵ việc tang chế.",
  [NHI_THAP_BAT_TU_ENUM.Truong]: "Tốt cho việc khai trương, cầu tài, hợp tác làm ăn.",
  [NHI_THAP_BAT_TU_ENUM.Duc]: "Tốt cho việc đi xa, ngoại giao, nhưng kỵ việc xây dựng.",
  [NHI_THAP_BAT_TU_ENUM.Chan]: "Đại cát, tốt cho mọi việc, nhất là cưới hỏi, xuất hành."
};
const THAN_SAT_MEANING = {
  // ========================================================================
  // CÁT TINH (GOOD STARS) - Nhóm hỗ trợ và thúc đẩy năng lượng tích cực
  // ========================================================================
  [THAN_SAT_ENUM.ThienDuc]: "Đệ nhất cát thần, hóa giải hung sát, vạn sự cát tường.",
  [THAN_SAT_ENUM.NguyetDuc]: "Hóa giải tai ách, gia tăng phúc thọ, đại lợi giá thú, xuất hành.",
  [THAN_SAT_ENUM.ThienXa]: "Trời ban ơn xá, giải trừ tội lỗi và tai ương, tốt cho cầu tự, giải oan.",
  [THAN_SAT_ENUM.NguyetKhong]: "Chế hóa sát khí của Sát Chủ và Thụ Tử, giảm nhẹ tai ương.",
  // Chỉnh lại theo logic "Giảm nhẹ"
  [THAN_SAT_ENUM.SinhKhi]: "Nguồn năng lượng sinh sôi, đại lợi cho động thổ, xây dựng, trồng trọt.",
  [THAN_SAT_ENUM.ThienHy]: "Sao hỷ khánh, chủ về tin vui, cưới hỏi, hội họp hân hoan.",
  [THAN_SAT_ENUM.ThienDucHop]: "Phù trợ Thiên Đức, tăng cường năng lượng cát tường, vạn sự hanh thông.",
  [THAN_SAT_ENUM.NguyetDucHop]: "Phù trợ Nguyệt Đức, hòa hợp thiên thời, tốt cho việc ký kết, giao dịch.",
  [THAN_SAT_ENUM.ThienAtQuyNhan]: "Quý nhân phù trợ, đệ nhất thần hộ mệnh, gặp hung hóa cát.",
  //
  [THAN_SAT_ENUM.ThienLoc]: "Lộc trời ban, đại lợi cho cầu tài, khai trương, nhận chức.",
  [THAN_SAT_ENUM.LocKho]: "Kho tàng chứa lộc, tốt cho việc tích lũy tài sản, mở kho, gởi tiết kiệm.",
  [THAN_SAT_ENUM.ThienPhu]: "Kho trời ban phúc, tốt cho mọi việc, đặc biệt là xây dựng, cầu tài.",
  [THAN_SAT_ENUM.ThienQuy]: "Sao quý hiển, đại lợi cho cầu danh, thi cử, yết kiến quý nhân.",
  [THAN_SAT_ENUM.ThienPhuc]: "Phúc tinh chiếu mệnh, tốt cho nhậm chức, tế lễ, dâng sao giải hạn.",
  [THAN_SAT_ENUM.ThienThanh]: "Khí thanh cao, tốt cho giao dịch, ký kết hợp đồng, cưới hỏi.",
  [THAN_SAT_ENUM.QuanNhat]: "Ngày của quan lộc, lợi cho việc công, nhậm chức, yết kiến cấp trên.",
  [THAN_SAT_ENUM.DanNhat]: "Tốt cho việc riêng tư, sửa chữa nhỏ, không nên làm việc quan.",
  [THAN_SAT_ENUM.NguPhu]: "Phú quý song toàn, tốt cho khởi tạo, khai trương, động thổ.",
  [THAN_SAT_ENUM.IchHau]: "Lợi cho hậu thế, tốt cho cưới hỏi, nạp lễ, cầu tự.",
  [THAN_SAT_ENUM.PhucSinh]: "Sinh sôi phúc đức, tốt cho cầu phúc, tế tự, làm việc thiện.",
  [THAN_SAT_ENUM.MinhTinh]: "Sao sáng soi đường, tốt cho công danh, minh bạch hóa giải hàm oan.",
  [THAN_SAT_ENUM.ThienMa]: "Ngựa trời di chuyển, đại lợi cho xuất hành, mua xe, thăng tiến nhanh.",
  [THAN_SAT_ENUM.TamHop]: "Khí thế hòa hợp, thuận lợi cho việc hội họp, kết nối bạn bè, làm ăn.",
  [THAN_SAT_ENUM.TueHop]: "Năm tháng hòa hợp, tốt cho việc kết giao, hợp tác dài hạn.",
  // ========================================================================
  // HUNG TINH (BAD STARS) - Nhóm gây trở ngại và sát khí
  // ========================================================================
  [THAN_SAT_ENUM.SatChu]: "Đại hung tinh, gây hại cho mệnh chủ, trăm sự đều kỵ.",
  //
  [THAN_SAT_ENUM.ThuTu]: "Sát khí nặng nề, trăm sự đều kỵ, đặc biệt là khởi công, giá thú.",
  //
  [THAN_SAT_ENUM.DuongCongKy]: "Ngày đại hung theo lịch cổ, kỵ khởi tạo, cưới hỏi, xuất hành.",
  [THAN_SAT_ENUM.TamNuong]: "Ngày sát khí dân gian, xấu cho cưới hỏi, khai trương, khởi công.",
  [THAN_SAT_ENUM.NguyetKy]: "Khí âm dương mất cân bằng, kỵ xuất hành và khởi sự việc đại sự.",
  [THAN_SAT_ENUM.TuLy_TuTuyet]: "Ngày khí tiết giao thời, năng lượng cạn kiệt, không nên mưu đại sự.",
  [THAN_SAT_ENUM.NguyetPha]: "Xung đột khí tiết trong tháng, kỵ phá dỡ, xây dựng, khai trương.",
  [THAN_SAT_ENUM.ThienKhacDiaXung]: "Trời đất xung đột, đại kỵ cho mọi việc, dễ sinh tai ương.",
  [THAN_SAT_ENUM.ThienCuong]: "Hung tinh mạnh mẽ, kỵ xuất hành, giá thú, dễ gặp trắc trở.",
  //
  [THAN_SAT_ENUM.DiaPha]: "Đất đai xung phá, đại kỵ động thổ, xây dựng, đào ao.",
  [THAN_SAT_ENUM.NguyetYem]: "Khí âm che lấp, xấu cho tình duyên, cưới hỏi, cầu tự.",
  [THAN_SAT_ENUM.TieuHongSa]: "Huyết quang sát, xấu cho khởi tạo, xuất hành, khám chữa bệnh.",
  [THAN_SAT_ENUM.HoangVu]: "Khí suy vi, hoang vắng, kỵ làm nhà, nhập trạch, giá thú.",
  [THAN_SAT_ENUM.ThoOn]: "Ôn khí dưới lòng đất, kỵ động thổ, đào huyệt, làm giếng.",
  [THAN_SAT_ENUM.NhanCach]: "Nhân tâm bất ổn, kỵ cưới hỏi, khai trương, ký kết.",
  [THAN_SAT_ENUM.QuyKhoc]: "Khí âm u buồn, kỵ tế tự, an táng, làm lễ cầu phúc.",
  [THAN_SAT_ENUM.DaiHao]: "Hao tổn tài khí nặng, kỵ đầu tư lớn, khai trương, nhập kho.",
  [THAN_SAT_ENUM.NguyetHinh]: "Hình phạt trong tháng, dễ nảy sinh kiện tụng, tranh chấp pháp lý.",
  // ========================================================================
  // THẦN SÁT THEO HẮC ĐẠO (ZODIAC BLACK STARS)
  // ========================================================================
  [THAN_SAT_ENUM.ThienHinh]: "Sao hình luật, dễ vướng vòng lao lý, kiện tụng, tranh chấp.",
  [THAN_SAT_ENUM.ChuTuoc]: "Khẩu thiệt thị phi, hay nảy sinh cãi vọ, tranh chấp bằng lời nói.",
  [THAN_SAT_ENUM.BachHo]: "Sát khí huyết quang, kỵ mai táng, dễ gặp tai nạn bất ngờ.",
  [THAN_SAT_ENUM.HuyenVu]: "Sao trộm cắp, dễ mất của, bị tiểu nhân ngầm hãm hại.",
  [THAN_SAT_ENUM.CauTran]: "Trì trệ, ngăn trở, mưu sự khó thành, công việc chậm trễ.",
  [THAN_SAT_ENUM.ThienLao]: "Bị kìm hãm, giam cầm năng lượng, bất lợi cho cầu danh.",
  [THAN_SAT_ENUM.NguyenVu]: "Hao tốn tiền bạc, mất mát không rõ lý do.",
  // ========================================================================
  // CÁC TRƯỜNG HỢP CỤ THỂ (CONTEXTUAL)
  // ========================================================================
  [THAN_SAT_ENUM.ThoPhu]: "Thần đất ngăn trở, kỵ động thổ, xây dựng, sửa sang mặt bằng.",
  [THAN_SAT_ENUM.ThoCam]: "Đất đai bị cấm kỵ, không nên đụng chạm vào lòng đất.",
  [THAN_SAT_ENUM.CoThan]: "Sao lẻ loi, kỵ cưới hỏi, nạp thiếp, kết giao bạn đời.",
  [THAN_SAT_ENUM.QuaTu]: "Sao cô độc, xấu cho việc hỷ, dễ dẫn đến phòng không chiếc bóng.",
  [THAN_SAT_ENUM.TrungTang]: "Đại kỵ trong tang lễ, dễ dẫn đến tang trùng, họa vô đơn chí.",
  [THAN_SAT_ENUM.KiepSat]: "Khí sát phạt mạnh, kỵ xuất hành, giá thú, dễ bị thương tích bất ngờ.",
  [THAN_SAT_ENUM.ThienTac]: "Trời sinh đạo tặc, kỵ nhập trạch, khai trương, đề phòng mất trộm.",
  [THAN_SAT_ENUM.LySang]: "Chia ly cách biệt, cực kỵ cho cưới hỏi, bố trí phòng ngủ.",
  [THAN_SAT_ENUM.KhongPhong]: "Bất lợi cho tình cảm, kỵ việc hỷ, chủ về sự cô đơn."
};

const NGU_HANH_NAMES = ["Kim", "Mộc", "Thủy", "Hỏa", "Thổ"];
const CAN_NGU_HANH = {
  [CAN_ENUM.Giap]: NGU_HANH_ENUM.Moc,
  [CAN_ENUM.At]: NGU_HANH_ENUM.Moc,
  [CAN_ENUM.Binh]: NGU_HANH_ENUM.Hoa,
  [CAN_ENUM.Dinh]: NGU_HANH_ENUM.Hoa,
  [CAN_ENUM.Mau]: NGU_HANH_ENUM.Tho,
  [CAN_ENUM.Ky]: NGU_HANH_ENUM.Tho,
  [CAN_ENUM.Canh]: NGU_HANH_ENUM.Kim,
  [CAN_ENUM.Tan]: NGU_HANH_ENUM.Kim,
  [CAN_ENUM.Nham]: NGU_HANH_ENUM.Thuy,
  [CAN_ENUM.Quy]: NGU_HANH_ENUM.Thuy
};
const CHI_NGU_HANH = {
  [CHI_ENUM.Hoi]: NGU_HANH_ENUM.Thuy,
  [CHI_ENUM.Ty]: NGU_HANH_ENUM.Thuy,
  [CHI_ENUM.Dan]: NGU_HANH_ENUM.Moc,
  [CHI_ENUM.Mao]: NGU_HANH_ENUM.Moc,
  [CHI_ENUM.Ti]: NGU_HANH_ENUM.Hoa,
  [CHI_ENUM.Ngo]: NGU_HANH_ENUM.Hoa,
  [CHI_ENUM.Than]: NGU_HANH_ENUM.Kim,
  [CHI_ENUM.Dau]: NGU_HANH_ENUM.Kim,
  [CHI_ENUM.Thin]: NGU_HANH_ENUM.Tho,
  [CHI_ENUM.Tuat]: NGU_HANH_ENUM.Tho,
  [CHI_ENUM.Suu]: NGU_HANH_ENUM.Tho,
  [CHI_ENUM.Mui]: NGU_HANH_ENUM.Tho
};
const TANG_CAN = {
  [CHI_ENUM.Ty]: [{ can: CAN_ENUM.Quy, rate: 1 }],
  [CHI_ENUM.Suu]: [
    { can: CAN_ENUM.Ky, rate: 0.6 },
    { can: CAN_ENUM.Tan, rate: 0.3 },
    { can: CAN_ENUM.Quy, rate: 0.1 }
  ],
  [CHI_ENUM.Dan]: [
    { can: CAN_ENUM.Giap, rate: 0.6 },
    { can: CAN_ENUM.Binh, rate: 0.3 },
    { can: CAN_ENUM.Mau, rate: 0.1 }
  ],
  [CHI_ENUM.Mao]: [{ can: CAN_ENUM.At, rate: 1 }],
  [CHI_ENUM.Thin]: [
    { can: CAN_ENUM.Mau, rate: 0.6 },
    { can: CAN_ENUM.At, rate: 0.3 },
    { can: CAN_ENUM.Quy, rate: 0.1 }
  ],
  [CHI_ENUM.Ti]: [
    { can: CAN_ENUM.Binh, rate: 0.6 },
    { can: CAN_ENUM.Mau, rate: 0.3 },
    { can: CAN_ENUM.Canh, rate: 0.1 }
  ],
  [CHI_ENUM.Ngo]: [
    { can: CAN_ENUM.Dinh, rate: 0.7 },
    { can: CAN_ENUM.Ky, rate: 0.3 }
  ],
  [CHI_ENUM.Mui]: [
    { can: CAN_ENUM.Ky, rate: 0.6 },
    { can: CAN_ENUM.Dinh, rate: 0.3 },
    { can: CAN_ENUM.At, rate: 0.1 }
  ],
  [CHI_ENUM.Than]: [
    { can: CAN_ENUM.Canh, rate: 0.6 },
    { can: CAN_ENUM.Nham, rate: 0.3 },
    { can: CAN_ENUM.Mau, rate: 0.1 }
  ],
  [CHI_ENUM.Dau]: [{ can: CAN_ENUM.Tan, rate: 1 }],
  [CHI_ENUM.Tuat]: [
    { can: CAN_ENUM.Mau, rate: 0.6 },
    { can: CAN_ENUM.Tan, rate: 0.3 },
    { can: CAN_ENUM.Dinh, rate: 0.1 }
  ],
  [CHI_ENUM.Hoi]: [
    { can: CAN_ENUM.Nham, rate: 0.7 },
    { can: CAN_ENUM.Giap, rate: 0.3 }
  ]
};
const SINH_KHAC = {
  SINH: {
    [NGU_HANH_ENUM.Kim]: NGU_HANH_ENUM.Thuy,
    [NGU_HANH_ENUM.Thuy]: NGU_HANH_ENUM.Moc,
    [NGU_HANH_ENUM.Moc]: NGU_HANH_ENUM.Hoa,
    [NGU_HANH_ENUM.Hoa]: NGU_HANH_ENUM.Tho,
    [NGU_HANH_ENUM.Tho]: NGU_HANH_ENUM.Kim
  },
  KHAC: {
    [NGU_HANH_ENUM.Kim]: NGU_HANH_ENUM.Moc,
    [NGU_HANH_ENUM.Moc]: NGU_HANH_ENUM.Tho,
    [NGU_HANH_ENUM.Tho]: NGU_HANH_ENUM.Thuy,
    [NGU_HANH_ENUM.Thuy]: NGU_HANH_ENUM.Hoa,
    [NGU_HANH_ENUM.Hoa]: NGU_HANH_ENUM.Kim
  },
  DUOC_SINH: {
    [NGU_HANH_ENUM.Thuy]: NGU_HANH_ENUM.Kim,
    [NGU_HANH_ENUM.Moc]: NGU_HANH_ENUM.Thuy,
    [NGU_HANH_ENUM.Hoa]: NGU_HANH_ENUM.Moc,
    [NGU_HANH_ENUM.Tho]: NGU_HANH_ENUM.Hoa,
    [NGU_HANH_ENUM.Kim]: NGU_HANH_ENUM.Tho
  }
};
const CAN_KHAC = {
  [CAN_ENUM.Giap]: [CAN_ENUM.Mau, CAN_ENUM.Ky],
  [CAN_ENUM.At]: [CAN_ENUM.Mau, CAN_ENUM.Ky],
  [CAN_ENUM.Binh]: [CAN_ENUM.Canh, CAN_ENUM.Tan],
  [CAN_ENUM.Dinh]: [CAN_ENUM.Canh, CAN_ENUM.Tan],
  [CAN_ENUM.Mau]: [CAN_ENUM.Nham, CAN_ENUM.Quy],
  [CAN_ENUM.Ky]: [CAN_ENUM.Nham, CAN_ENUM.Quy],
  [CAN_ENUM.Canh]: [CAN_ENUM.Giap, CAN_ENUM.At],
  [CAN_ENUM.Tan]: [CAN_ENUM.Giap, CAN_ENUM.At],
  [CAN_ENUM.Nham]: [CAN_ENUM.Binh, CAN_ENUM.Dinh],
  [CAN_ENUM.Quy]: [CAN_ENUM.Binh, CAN_ENUM.Dinh]
};
const CAN_HOP = {
  [CAN_ENUM.Giap]: CAN_ENUM.Ky,
  [CAN_ENUM.Ky]: CAN_ENUM.Giap,
  [CAN_ENUM.At]: CAN_ENUM.Canh,
  [CAN_ENUM.Canh]: CAN_ENUM.At,
  [CAN_ENUM.Binh]: CAN_ENUM.Tan,
  [CAN_ENUM.Tan]: CAN_ENUM.Binh,
  [CAN_ENUM.Dinh]: CAN_ENUM.Nham,
  [CAN_ENUM.Nham]: CAN_ENUM.Dinh,
  [CAN_ENUM.Mau]: CAN_ENUM.Quy,
  [CAN_ENUM.Quy]: CAN_ENUM.Mau
};
const HOP_HOA_CAN = {
  [`${CAN_ENUM.Giap}-${CAN_ENUM.Ky}`]: {
    target: NGU_HANH_ENUM.Tho,
    conditions: [CHI_ENUM.Thin, CHI_ENUM.Tuat, CHI_ENUM.Suu, CHI_ENUM.Mui]
  },
  [`${CAN_ENUM.At}-${CAN_ENUM.Canh}`]: {
    target: NGU_HANH_ENUM.Kim,
    conditions: [CHI_ENUM.Ti, CHI_ENUM.Dau, CHI_ENUM.Suu, CHI_ENUM.Than]
  },
  [`${CAN_ENUM.Binh}-${CAN_ENUM.Tan}`]: {
    target: NGU_HANH_ENUM.Thuy,
    conditions: [CHI_ENUM.Than, CHI_ENUM.Ty, CHI_ENUM.Thin, CHI_ENUM.Hoi]
  },
  [`${CAN_ENUM.Dinh}-${CAN_ENUM.Nham}`]: {
    target: NGU_HANH_ENUM.Moc,
    conditions: [CHI_ENUM.Hoi, CHI_ENUM.Mao, CHI_ENUM.Mui, CHI_ENUM.Dan]
  },
  [`${CAN_ENUM.Mau}-${CAN_ENUM.Quy}`]: {
    target: NGU_HANH_ENUM.Hoa,
    conditions: [CHI_ENUM.Dan, CHI_ENUM.Ngo, CHI_ENUM.Tuat, CHI_ENUM.Ti]
  }
};
const TAM_HOP = [
  { group: [CHI_ENUM.Than, CHI_ENUM.Ty, CHI_ENUM.Thin], target: NGU_HANH_ENUM.Thuy },
  { group: [CHI_ENUM.Hoi, CHI_ENUM.Mao, CHI_ENUM.Mui], target: NGU_HANH_ENUM.Moc },
  { group: [CHI_ENUM.Dan, CHI_ENUM.Ngo, CHI_ENUM.Tuat], target: NGU_HANH_ENUM.Hoa },
  { group: [CHI_ENUM.Ti, CHI_ENUM.Dau, CHI_ENUM.Suu], target: NGU_HANH_ENUM.Kim }
];
const CHI_TAM_HOP_GROUPS = [
  [CHI_ENUM.Than, CHI_ENUM.Ty, CHI_ENUM.Thin],
  [CHI_ENUM.Dan, CHI_ENUM.Ngo, CHI_ENUM.Tuat],
  [CHI_ENUM.Hoi, CHI_ENUM.Mao, CHI_ENUM.Mui],
  [CHI_ENUM.Ti, CHI_ENUM.Dau, CHI_ENUM.Suu]
];
const LUC_HOP = {
  [CHI_ENUM.Ty]: { partner: CHI_ENUM.Suu, target: NGU_HANH_ENUM.Tho },
  [CHI_ENUM.Suu]: { partner: CHI_ENUM.Ty, target: NGU_HANH_ENUM.Tho },
  [CHI_ENUM.Dan]: { partner: CHI_ENUM.Hoi, target: NGU_HANH_ENUM.Moc },
  [CHI_ENUM.Hoi]: { partner: CHI_ENUM.Dan, target: NGU_HANH_ENUM.Moc },
  [CHI_ENUM.Mao]: { partner: CHI_ENUM.Tuat, target: NGU_HANH_ENUM.Hoa },
  [CHI_ENUM.Tuat]: { partner: CHI_ENUM.Mao, target: NGU_HANH_ENUM.Hoa },
  [CHI_ENUM.Thin]: { partner: CHI_ENUM.Dau, target: NGU_HANH_ENUM.Kim },
  [CHI_ENUM.Dau]: { partner: CHI_ENUM.Thin, target: NGU_HANH_ENUM.Kim },
  [CHI_ENUM.Ti]: { partner: CHI_ENUM.Than, target: NGU_HANH_ENUM.Thuy },
  [CHI_ENUM.Than]: { partner: CHI_ENUM.Ti, target: NGU_HANH_ENUM.Thuy },
  [CHI_ENUM.Ngo]: { partner: CHI_ENUM.Mui, target: NGU_HANH_ENUM.Hoa },
  [CHI_ENUM.Mui]: { partner: CHI_ENUM.Ngo, target: NGU_HANH_ENUM.Hoa }
};
const LUC_XUNG = {
  [CHI_ENUM.Ty]: CHI_ENUM.Ngo,
  [CHI_ENUM.Ngo]: CHI_ENUM.Ty,
  [CHI_ENUM.Suu]: CHI_ENUM.Mui,
  [CHI_ENUM.Mui]: CHI_ENUM.Suu,
  [CHI_ENUM.Dan]: CHI_ENUM.Than,
  [CHI_ENUM.Than]: CHI_ENUM.Dan,
  [CHI_ENUM.Mao]: CHI_ENUM.Dau,
  [CHI_ENUM.Dau]: CHI_ENUM.Mao,
  [CHI_ENUM.Thin]: CHI_ENUM.Tuat,
  [CHI_ENUM.Tuat]: CHI_ENUM.Thin,
  [CHI_ENUM.Ti]: CHI_ENUM.Hoi,
  [CHI_ENUM.Hoi]: CHI_ENUM.Ti
};
const TUONG_HINH = [
  { group: [CHI_ENUM.Dan, CHI_ENUM.Ti, CHI_ENUM.Than], type: "Vô Ơn" },
  { group: [CHI_ENUM.Suu, CHI_ENUM.Tuat, CHI_ENUM.Mui], type: "Đặc Quyền" },
  { group: [CHI_ENUM.Ty, CHI_ENUM.Mao], type: "Vô Lễ" },
  { group: [CHI_ENUM.Thin, CHI_ENUM.Thin], type: "Tự Hình" },
  { group: [CHI_ENUM.Ngo, CHI_ENUM.Ngo], type: "Tự Hình" },
  { group: [CHI_ENUM.Dau, CHI_ENUM.Dau], type: "Tự Hình" },
  { group: [CHI_ENUM.Hoi, CHI_ENUM.Hoi], type: "Tự Hình" }
];
({
  [CHI_ENUM.Dan]: [CHI_ENUM.Ti, CHI_ENUM.Than],
  [CHI_ENUM.Ti]: [CHI_ENUM.Dan, CHI_ENUM.Than],
  [CHI_ENUM.Than]: [CHI_ENUM.Dan, CHI_ENUM.Ti],
  [CHI_ENUM.Suu]: [CHI_ENUM.Mui, CHI_ENUM.Tuat],
  [CHI_ENUM.Mui]: [CHI_ENUM.Suu, CHI_ENUM.Tuat],
  [CHI_ENUM.Tuat]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
  [CHI_ENUM.Ty]: [CHI_ENUM.Mao],
  [CHI_ENUM.Mao]: [CHI_ENUM.Ty],
  [CHI_ENUM.Thin]: [CHI_ENUM.Thin],
  [CHI_ENUM.Ngo]: [CHI_ENUM.Ngo],
  [CHI_ENUM.Dau]: [CHI_ENUM.Dau],
  [CHI_ENUM.Hoi]: [CHI_ENUM.Hoi]
});
const TUONG_HAI = {
  [CHI_ENUM.Ty]: CHI_ENUM.Mui,
  [CHI_ENUM.Mui]: CHI_ENUM.Ty,
  [CHI_ENUM.Suu]: CHI_ENUM.Ngo,
  [CHI_ENUM.Ngo]: CHI_ENUM.Suu,
  [CHI_ENUM.Dan]: CHI_ENUM.Ti,
  [CHI_ENUM.Ti]: CHI_ENUM.Dan,
  [CHI_ENUM.Mao]: CHI_ENUM.Thin,
  [CHI_ENUM.Thin]: CHI_ENUM.Mao,
  [CHI_ENUM.Than]: CHI_ENUM.Hoi,
  [CHI_ENUM.Hoi]: CHI_ENUM.Than,
  [CHI_ENUM.Dau]: CHI_ENUM.Tuat,
  [CHI_ENUM.Tuat]: CHI_ENUM.Dau
};
const TUONG_PHA = {
  [CHI_ENUM.Ty]: CHI_ENUM.Dau,
  [CHI_ENUM.Dau]: CHI_ENUM.Ty,
  [CHI_ENUM.Ngo]: CHI_ENUM.Mao,
  [CHI_ENUM.Mao]: CHI_ENUM.Ngo,
  [CHI_ENUM.Than]: CHI_ENUM.Ti,
  [CHI_ENUM.Ti]: CHI_ENUM.Than,
  [CHI_ENUM.Dan]: CHI_ENUM.Hoi,
  [CHI_ENUM.Hoi]: CHI_ENUM.Dan,
  [CHI_ENUM.Thin]: CHI_ENUM.Suu,
  [CHI_ENUM.Suu]: CHI_ENUM.Thin,
  [CHI_ENUM.Tuat]: CHI_ENUM.Mui,
  [CHI_ENUM.Mui]: CHI_ENUM.Tuat
};
const QUY_NHAN = {
  [CAN_ENUM.Giap]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
  [CAN_ENUM.Mau]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
  [CAN_ENUM.Canh]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
  [CAN_ENUM.At]: [CHI_ENUM.Ty, CHI_ENUM.Than],
  [CAN_ENUM.Ky]: [CHI_ENUM.Ty, CHI_ENUM.Than],
  [CAN_ENUM.Binh]: [CHI_ENUM.Hoi, CHI_ENUM.Dau],
  [CAN_ENUM.Dinh]: [CHI_ENUM.Hoi, CHI_ENUM.Dau],
  [CAN_ENUM.Nham]: [CHI_ENUM.Ti, CHI_ENUM.Mao],
  [CAN_ENUM.Quy]: [CHI_ENUM.Ti, CHI_ENUM.Mao],
  [CAN_ENUM.Tan]: [CHI_ENUM.Ngo, CHI_ENUM.Dan]
};
const LOC_THAN = {
  [CAN_ENUM.Giap]: CHI_ENUM.Dan,
  [CAN_ENUM.At]: CHI_ENUM.Mao,
  [CAN_ENUM.Binh]: CHI_ENUM.Ti,
  [CAN_ENUM.Dinh]: CHI_ENUM.Ngo,
  [CAN_ENUM.Mau]: CHI_ENUM.Ti,
  [CAN_ENUM.Ky]: CHI_ENUM.Ngo,
  [CAN_ENUM.Canh]: CHI_ENUM.Than,
  [CAN_ENUM.Tan]: CHI_ENUM.Dau,
  [CAN_ENUM.Nham]: CHI_ENUM.Hoi,
  [CAN_ENUM.Quy]: CHI_ENUM.Ty
};
({
  [CHI_ENUM.Than]: CHI_ENUM.Dan,
  [CHI_ENUM.Ty]: CHI_ENUM.Dan,
  [CHI_ENUM.Thin]: CHI_ENUM.Dan,
  [CHI_ENUM.Dan]: CHI_ENUM.Than,
  [CHI_ENUM.Ngo]: CHI_ENUM.Than,
  [CHI_ENUM.Tuat]: CHI_ENUM.Than,
  [CHI_ENUM.Ti]: CHI_ENUM.Hoi,
  [CHI_ENUM.Dau]: CHI_ENUM.Hoi,
  [CHI_ENUM.Suu]: CHI_ENUM.Hoi,
  [CHI_ENUM.Hoi]: CHI_ENUM.Ti,
  [CHI_ENUM.Mao]: CHI_ENUM.Ti,
  [CHI_ENUM.Mui]: CHI_ENUM.Ti
});

const STARS_12 = [
  "Thanh Long",
  // 0: Hoàng Đạo (Tốt)
  "Minh Đường",
  // 1: Hoàng Đạo (Tốt)
  "Thiên Hình",
  // 2: Hắc Đạo (Xấu)
  "Chu Tước",
  // 3: Hắc Đạo (Xấu)
  "Kim Quỹ",
  // 4: Hoàng Đạo (Tốt)
  "Thiên Đức",
  // 5: Hoàng Đạo (Tốt) - Còn gọi là Bảo Quang
  "Bạch Hổ",
  // 6: Hắc Đạo (Xấu)
  "Ngọc Đường",
  // 7: Hoàng Đạo (Tốt)
  "Thiên Lao",
  // 8: Hắc Đạo (Xấu)
  "Nguyên Vũ",
  // 9: Hắc Đạo (Xấu)
  "Tư Mệnh",
  // 10: Hoàng Đạo (Tốt)
  "Câu Trận"
  // 11: Hắc Đạo (Xấu)
];
const STAR_TYPE = {
  "Thanh Long": 1,
  "Minh Đường": 1,
  "Kim Quỹ": 1,
  "Thiên Đức": 1,
  "Ngọc Đường": 1,
  "Tư Mệnh": 1,
  "Thiên Hình": -1,
  "Chu Tước": -1,
  "Bạch Hổ": -1,
  "Thiên Lao": -1,
  "Nguyên Vũ": -1,
  "Câu Trận": -1
};
function get12ZodiacOfficers(branchIndex) {
  const thanhLongStartMap = {
    0: 8,
    // Tý -> Thân
    1: 10,
    // Sửu -> Tuất
    2: 0,
    // Dần -> Tý
    3: 2,
    // Mão -> Dần
    4: 4,
    // Thìn -> Thìn
    5: 6,
    // Tỵ -> Ngọ
    6: 8,
    // Ngọ -> Thân
    7: 10,
    // Mùi -> Tuất
    8: 0,
    // Thân -> Tý
    9: 2,
    // Dậu -> Dần
    10: 4,
    // Tuất -> Thìn
    11: 6
    // Hợi -> Ngọ
  };
  const startOffset = thanhLongStartMap[branchIndex];
  const result = [];
  for (let i = 0; i < 12; i++) {
    const starIndex = (i - startOffset + 12) % 12;
    const starName = STARS_12[starIndex];
    const type = STAR_TYPE[starName];
    result.push({
      branchIndex: i,
      // 0=Tý, 1=Sửu...
      starName,
      type,
      isHoangDao: type === 1
    });
  }
  return result;
}

const get28Tu = (date) => {
  const refDate = /* @__PURE__ */ new Date("2024-01-01");
  const diffTime = date.getTime() - refDate.getTime();
  const diffDays = Math.floor(diffTime / (1e3 * 60 * 60 * 24));
  const index = ((11 + diffDays) % 28 + 28) % 28;
  return index;
};
const getHourTruc = (dayChiIdx, hourChiIdx) => {
  const offset = (hourChiIdx - dayChiIdx + 12) % 12;
  return offset;
};
const getHoangDaoHours = (dayChi) => {
  const officers = get12ZodiacOfficers(dayChi);
  return officers.filter((o) => o.isHoangDao).map((o) => o.branchIndex);
};
const calculateHourCan = (dayCanIdx, hourChiIdx) => {
  const startCanIdx = dayCanIdx % 5 * 2 % 10;
  return (startCanIdx + hourChiIdx) % 10;
};
const isHoangDaoHour = (dayChiIdx, hourChiIdx) => {
  const officers = get12ZodiacOfficers(dayChiIdx);
  const hourOfficer = officers.find((o) => o.branchIndex === hourChiIdx);
  return hourOfficer ? hourOfficer.isHoangDao : false;
};

const getSeasonalMultiplier = (element, monthElement) => {
  if (element === monthElement) return 2;
  if (SINH_KHAC.SINH[element] === monthElement) return 0.8;
  if (SINH_KHAC.SINH[monthElement] === element) return 1.5;
  if (SINH_KHAC.KHAC[element] === monthElement) return 0.5;
  if (SINH_KHAC.KHAC[monthElement] === element) return 0.3;
  return 1;
};
function getControllerOf(target) {
  for (const k in SINH_KHAC.KHAC) {
    const key = Number(k);
    if (SINH_KHAC.KHAC[key] === target) return key;
  }
  return -1;
}
const calculateBaseScores = (chart) => {
  const scores = {
    [NGU_HANH_ENUM.Kim]: 0,
    [NGU_HANH_ENUM.Moc]: 0,
    [NGU_HANH_ENUM.Thuy]: 0,
    [NGU_HANH_ENUM.Hoa]: 0,
    [NGU_HANH_ENUM.Tho]: 0
  };
  const monthElement = CHI_NGU_HANH[chart.monthChi];
  const W = {
    MONTH_CHI: 40,
    DAY_CHI: 16,
    HOUR_CHI: 12,
    YEAR_CHI: 8,
    STEM: 6
  };
  const add = (elm, val) => {
    if (elm !== void 0 && scores[elm] !== void 0) {
      scores[elm] += val * getSeasonalMultiplier(elm, monthElement);
    }
  };
  [chart.yearCan, chart.monthCan, chart.dayCan, chart.hourCan].forEach((can) => {
    const el = CAN_NGU_HANH[can];
    if (el !== void 0) add(el, W.STEM);
  });
  const processChi = (chi, weight) => {
    const hidden = TANG_CAN[chi];
    if (hidden) {
      hidden.forEach((h) => {
        const el = CAN_NGU_HANH[h.can];
        if (el !== void 0) add(el, weight * h.rate);
      });
    }
  };
  processChi(chart.monthChi, W.MONTH_CHI);
  processChi(chart.dayChi, W.DAY_CHI);
  processChi(chart.hourChi, W.HOUR_CHI);
  processChi(chart.yearChi, W.YEAR_CHI);
  return scores;
};
const applyCombinations = (chart, scores) => {
  const newScores = { ...scores };
  const monthChi = chart.monthChi;
  const branches = [chart.yearChi, chart.monthChi, chart.dayChi, chart.hourChi];
  const stems = [chart.yearCan, chart.monthCan, chart.dayCan, chart.hourCan];
  TAM_HOP.forEach((th) => {
    const hasAll = th.group.every((b) => branches.includes(b));
    if (hasAll) {
      const hasLead = stems.some((s) => CAN_NGU_HANH[s] === th.target);
      const isSeason = CHI_NGU_HANH[monthChi] === th.target;
      if (hasLead || isSeason) {
        newScores[th.target] += 40;
        th.group.forEach((chi) => {
          const originalElement = CHI_NGU_HANH[chi];
          if (originalElement !== void 0 && originalElement !== th.target) {
            newScores[originalElement] -= 10;
          }
        });
      }
    }
  });
  const checkJealousy = (idx) => {
    const left = idx - 1;
    const right = idx + 1;
    if (left < 0 || right > 3) return false;
    const centerCan = stems[idx];
    const leftCan = stems[left];
    const rightCan = stems[right];
    const keyLeft = `${leftCan}-${centerCan}`;
    const ruleLeft = HOP_HOA_CAN[keyLeft] || HOP_HOA_CAN[`${centerCan}-${leftCan}`];
    const keyRight = `${centerCan}-${rightCan}`;
    const ruleRight = HOP_HOA_CAN[keyRight] || HOP_HOA_CAN[`${rightCan}-${centerCan}`];
    if (ruleLeft && ruleRight) return true;
    return false;
  };
  const stemPairs = [
    { idx1: 0, idx2: 1 },
    { idx1: 1, idx2: 2 },
    { idx1: 2, idx2: 3 }
  ];
  stemPairs.forEach(({ idx1, idx2 }) => {
    const s1 = stems[idx1];
    const s2 = stems[idx2];
    const isJealous1 = checkJealousy(idx1);
    const isJealous2 = checkJealousy(idx2);
    if (isJealous1 || isJealous2) {
      const e1 = CAN_NGU_HANH[s1];
      const e2 = CAN_NGU_HANH[s2];
      if (e1 !== void 0 && newScores[e1]) newScores[e1] -= 3;
      if (e2 !== void 0 && newScores[e2]) newScores[e2] -= 3;
      return;
    }
    const key = `${s1}-${s2}`;
    const rule = HOP_HOA_CAN[key] || HOP_HOA_CAN[`${s2}-${s1}`];
    if (rule && rule.conditions.includes(monthChi)) {
      const targetEl = rule.target;
      if (newScores[targetEl]) newScores[targetEl] += 30;
      const e1 = CAN_NGU_HANH[s1];
      const e2 = CAN_NGU_HANH[s2];
      if (e1 !== void 0 && e1 !== targetEl && newScores[e1]) newScores[e1] -= 15;
      if (e2 !== void 0 && e2 !== targetEl && newScores[e2]) newScores[e2] -= 15;
    } else if (rule) {
      const e1 = CAN_NGU_HANH[s1];
      const e2 = CAN_NGU_HANH[s2];
      if (e1 !== void 0 && newScores[e1]) newScores[e1] -= 5;
      if (e2 !== void 0 && newScores[e2]) newScores[e2] -= 5;
    }
  });
  return newScores;
};
const applyComplexInteractions = (chart, scores) => {
  const newScores = { ...scores };
  const branches = [chart.yearChi, chart.monthChi, chart.dayChi, chart.hourChi];
  const reduceScore = (chi, factor) => {
    const el = CHI_NGU_HANH[chi];
    if (el !== void 0 && newScores[el]) newScores[el] *= factor;
  };
  if (LUC_XUNG[chart.monthChi] === chart.yearChi || LUC_XUNG[chart.monthChi] === chart.dayChi) {
    reduceScore(chart.monthChi, 0.6);
  }
  if (LUC_XUNG[chart.dayChi] === chart.monthChi || LUC_XUNG[chart.dayChi] === chart.hourChi) {
    reduceScore(chart.dayChi, 0.7);
  }
  TUONG_HINH.forEach((hinh) => {
    const count = hinh.group.filter((b) => branches.includes(b)).length;
    if (hinh.type === "Tự Hình") {
      const selfCount = branches.filter((b) => b === hinh.group[0]).length;
      if (selfCount >= 2) {
        reduceScore(hinh.group[0], 0.8);
      }
    } else if (count === 3) {
      hinh.group.forEach((b) => reduceScore(b, 0.7));
    } else if (count === 2) {
      hinh.group.filter((b) => branches.includes(b)).forEach((b) => reduceScore(b, 0.9));
    }
  });
  const branchPairs = [
    { b1: chart.yearChi, b2: chart.monthChi },
    { b1: chart.monthChi, b2: chart.dayChi },
    { b1: chart.dayChi, b2: chart.hourChi }
  ];
  branchPairs.forEach(({ b1, b2 }) => {
    if (TUONG_HAI[b1] === b2) {
      reduceScore(b1, 0.85);
      reduceScore(b2, 0.85);
    }
    if (TUONG_PHA[b1] === b2) {
      reduceScore(b1, 0.9);
      reduceScore(b2, 0.9);
    }
  });
  return newScores;
};
const detectHoaKhiCach = (chart) => {
  const { dayCan, monthCan, hourCan, monthChi } = chart;
  const monthEl = CHI_NGU_HANH[monthChi];
  const pairs = [
    { c1: CAN_ENUM.Giap, c2: CAN_ENUM.Ky, target: NGU_HANH_ENUM.Tho },
    { c1: CAN_ENUM.At, c2: CAN_ENUM.Canh, target: NGU_HANH_ENUM.Kim },
    { c1: CAN_ENUM.Binh, c2: CAN_ENUM.Tan, target: NGU_HANH_ENUM.Thuy },
    { c1: CAN_ENUM.Dinh, c2: CAN_ENUM.Nham, target: NGU_HANH_ENUM.Moc },
    { c1: CAN_ENUM.Mau, c2: CAN_ENUM.Quy, target: NGU_HANH_ENUM.Hoa }
  ];
  const partner = pairs.find(
    (p) => p.c1 === dayCan && (p.c2 === monthCan || p.c2 === hourCan) || p.c2 === dayCan && (p.c1 === monthCan || p.c1 === hourCan)
  );
  if (partner) {
    const targetEl = partner.target;
    if (monthEl === targetEl || SINH_KHAC.SINH[monthEl] === targetEl) {
      return {
        scores: {},
        dungThan: targetEl,
        hyThan: SINH_KHAC.SINH[targetEl] || targetEl,
        kyThan: SINH_KHAC.KHAC[targetEl],
        pattern: `Hóa Khí Cách (${NGU_HANH_NAMES[targetEl]})`,
        description: `Nhật chủ hợp hóa thành ${NGU_HANH_NAMES[targetEl]} đắc lệnh.`
      };
    }
  }
  return null;
};
const detectLuongThan = (scores) => {
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [el1Str, score1] = sorted[0];
  const [el2Str, score2] = sorted[1];
  const el1 = Number(el1Str);
  const el2 = Number(el2Str);
  if (score1 + score2 > totalScore * 0.85) {
    if (SINH_KHAC.SINH[el1] === el2 || SINH_KHAC.SINH[el2] === el1) {
      return {
        scores,
        dungThan: el2,
        // Lấy hành được sinh
        hyThan: el1,
        kyThan: SINH_KHAC.KHAC[el1],
        pattern: "Lưỡng Thần (Tương Sinh)",
        description: `Cục diện chỉ có ${NGU_HANH_NAMES[el1]} và ${NGU_HANH_NAMES[el2]} tương sinh.`
      };
    }
    if (SINH_KHAC.KHAC[el1] === el2 || SINH_KHAC.KHAC[el2] === el1) {
      let bridge = -1;
      const b1 = SINH_KHAC.SINH[el1];
      if (SINH_KHAC.SINH[b1] === el2) bridge = b1;
      const b2 = SINH_KHAC.SINH[el2];
      if (SINH_KHAC.SINH[b2] === el1) bridge = b2;
      if (bridge !== -1) {
        return {
          scores,
          dungThan: bridge,
          hyThan: el1,
          kyThan: -1,
          pattern: "Lưỡng Thần (Tương Khắc)",
          description: `Hai hành ${NGU_HANH_NAMES[el1]} và ${NGU_HANH_NAMES[el2]} đối đầu. Cần ${NGU_HANH_NAMES[bridge]} thông quan.`
        };
      }
    }
  }
  return null;
};
const determineDungThan = (chart) => {
  let scores = calculateBaseScores(chart);
  scores = applyCombinations(chart, scores);
  scores = applyComplexInteractions(chart, scores);
  const hoaKhi = detectHoaKhiCach(chart);
  if (hoaKhi) return { ...hoaKhi, scores };
  const luongThan = detectLuongThan(scores);
  if (luongThan) return luongThan;
  const dmEl = CAN_NGU_HANH[chart.dayCan];
  const sinhEl = SINH_KHAC.DUOC_SINH[dmEl];
  const khacEl = getControllerOf(dmEl);
  const taKhacEl = SINH_KHAC.KHAC[dmEl];
  const taSinhEl = SINH_KHAC.SINH[dmEl];
  const myStrength = scores[dmEl] + (scores[sinhEl] || 0);
  const maxScore = Math.max(...Object.values(scores));
  const dominantElStr = Object.keys(scores).find((k) => scores[Number(k)] === maxScore) || "";
  const dominantEl = Number(dominantElStr);
  let dungThan = -1, hyThan = -1, kyThan = -1, pattern = "", description = "";
  if (myStrength < 20 && maxScore > 65) {
    if (dominantEl === taKhacEl) {
      pattern = "Tòng Tài Cách";
      dungThan = taKhacEl;
      hyThan = taSinhEl;
      kyThan = sinhEl;
      description = "Thân cực nhược, khí thế Tài tinh bao trùm. Bỏ mình theo Tài.";
    } else if (dominantEl === khacEl) {
      pattern = "Tòng Sát Cách";
      dungThan = khacEl;
      hyThan = taKhacEl;
      kyThan = sinhEl;
      description = "Thân cực nhược, Quan Sát quá vượng. Thuận theo uy thế của Sát.";
    } else if (dominantEl === taSinhEl) {
      pattern = "Tòng Nhi Cách";
      dungThan = taSinhEl;
      hyThan = dmEl;
      kyThan = sinhEl;
      description = "Thân cực nhược, Thực Thương nắm lệnh. Theo tú khí của con cái.";
    } else {
      pattern = "Thân Nhược (Biến thể)";
      dungThan = taSinhEl;
      hyThan = taKhacEl;
      kyThan = khacEl;
      description = "Thân rất nhược, dùng Thực Thương/Tài để thuận theo thế.";
    }
  } else if (myStrength > 110) {
    pattern = "Tòng Cường/Chuyên Vượng";
    dungThan = dmEl;
    hyThan = sinhEl;
    kyThan = taKhacEl;
    description = "Thân quá vượng, khí thế áp đảo. Nên thuận theo tính cương cường.";
  } else if (!dungThan && ([CHI_ENUM.Hoi, CHI_ENUM.Ty, CHI_ENUM.Suu].includes(chart.monthChi) || [CHI_ENUM.Ti, CHI_ENUM.Ngo, CHI_ENUM.Mui].includes(chart.monthChi))) {
    if ([CHI_ENUM.Hoi, CHI_ENUM.Ty, CHI_ENUM.Suu].includes(chart.monthChi) && scores[NGU_HANH_ENUM.Hoa] < 25) {
      pattern = "Điều Hầu (Mùa Đông)";
      dungThan = NGU_HANH_ENUM.Hoa;
      hyThan = NGU_HANH_ENUM.Moc;
      kyThan = NGU_HANH_ENUM.Thuy;
      description = "Sinh tháng lạnh, cần Hỏa sưởi ấm cục diện.";
    } else if ([CHI_ENUM.Ti, CHI_ENUM.Ngo, CHI_ENUM.Mui].includes(chart.monthChi) && scores[NGU_HANH_ENUM.Thuy] < 25) {
      pattern = "Điều Hầu (Mùa Hạ)";
      dungThan = NGU_HANH_ENUM.Thuy;
      hyThan = NGU_HANH_ENUM.Kim;
      kyThan = NGU_HANH_ENUM.Hoa;
      description = "Sinh tháng nóng, cần Thủy tưới mát.";
    }
  }
  if (dungThan === -1) {
    const conflictPairs = [
      { e1: NGU_HANH_ENUM.Kim, e2: NGU_HANH_ENUM.Moc, bridge: NGU_HANH_ENUM.Thuy },
      { e1: NGU_HANH_ENUM.Moc, e2: NGU_HANH_ENUM.Tho, bridge: NGU_HANH_ENUM.Hoa },
      { e1: NGU_HANH_ENUM.Tho, e2: NGU_HANH_ENUM.Thuy, bridge: NGU_HANH_ENUM.Kim },
      { e1: NGU_HANH_ENUM.Thuy, e2: NGU_HANH_ENUM.Hoa, bridge: NGU_HANH_ENUM.Moc },
      { e1: NGU_HANH_ENUM.Hoa, e2: NGU_HANH_ENUM.Kim, bridge: NGU_HANH_ENUM.Tho }
    ];
    for (const p of conflictPairs) {
      if (scores[p.e1] > 40 && scores[p.e2] > 40) {
        pattern = "Thông Quan";
        dungThan = p.bridge;
        hyThan = p.e1;
        kyThan = p.e2;
        description = `Hai hành xung khắc giao chiến. Cần ${NGU_HANH_NAMES[p.bridge]} làm cầu nối.`;
        break;
      }
    }
  }
  if (dungThan === -1) {
    if (myStrength < 55) {
      pattern = "Thân Nhược";
      dungThan = sinhEl;
      hyThan = dmEl;
      kyThan = khacEl;
      description = "Thân nhược, cần Ấn sinh trợ và Tỷ Kiếp nương tựa.";
    } else {
      pattern = "Thân Vượng";
      const sResource = scores[sinhEl];
      const sRobWealth = scores[dmEl];
      const sOutput = scores[taSinhEl];
      const sWealth = scores[taKhacEl];
      const sOfficer = scores[khacEl];
      if (sResource > sRobWealth && sWealth > 15 && sRobWealth < 40) {
        dungThan = taKhacEl;
        hyThan = taSinhEl;
        kyThan = sinhEl;
        description = "Thân vượng do Ấn trọng. Dụng Tài để phá Ấn.";
      } else {
        if (sOfficer > 20 && sOfficer > sOutput) {
          dungThan = khacEl;
          hyThan = taKhacEl;
          kyThan = taSinhEl;
          description = "Thân vượng, Quan Sát đắc lực. Dụng Quan để hộ Tài.";
        } else {
          dungThan = taSinhEl;
          hyThan = taKhacEl;
          kyThan = sinhEl;
          description = "Thân vượng, dùng Thực Thương để tiết khí sinh Tài.";
        }
      }
    }
  }
  return { scores, dungThan, hyThan, kyThan, pattern, description, chart };
};

const SCORING_CONFIG = {
  // CẤU HÌNH LOGIC CÁI PHỄU (FUNNEL)
  FUNNEL: {
    DAY_WEIGHT: 0.6,
    // Điểm ngày chiếm 60% quyết định
    HOUR_WEIGHT: 0.4,
    // Điểm giờ chiếm 40%
    CRITICAL_CAP: 3,
    // Nếu ngày phạm Đại Hung, điểm giờ tối đa chỉ là 3
    BASE_SCORE: 6
    // Điểm sàn mặc định (Tăng từ 5 lên 6)
  },
  // 1. CẤU HÌNH VĨ MÔ (MACRO) - ĐÁNH GIÁ NGÀY
  MACRO: {
    SCORES: {
      DUNG_THAN: {
        IS_DUNG_THAN: 2}}
  },
  // 2. CẤU HÌNH VI MÔ (MICRO) - ĐÁNH GIÁ GIỜ
  MICRO: {
    WEIGHTS: {
      AFFINITY: 2
    },
    SCORES: {
      HOANG_DAO: 3,
      LUC_DIEU: {
        GOOD: 2,
        BAD: -2
      },
      TRUC_HOP: 2,
      AFFINITY: {
        LOC_QUY: 3,
        TAM_HOP_LUC_HOP: 3,
        HINH_HAI: -2,
        XUNG_KHAC: -5
      }
    }
  }
};
const STAR_SCORES = {
  // ========================================================================
  // 1. ĐẠI HUNG TINH (VETO MẠNH) -> Trọng số rất cao để kéo điểm xuống
  // ========================================================================
  [THAN_SAT_ENUM.SatChu]: { base: -20, type: "bad", actions: { WEDDING: -50, CONSTRUCTION: -50, BUSINESS: -30 } },
  [THAN_SAT_ENUM.ThuTu]: { base: -20, type: "bad", actions: { WEDDING: -50, CONSTRUCTION: -50, BUSINESS: -30 } },
  [THAN_SAT_ENUM.DuongCongKy]: { base: -15, type: "bad", actions: { ALL: -20 } },
  [THAN_SAT_ENUM.ThienKhacDiaXung]: { base: -15, type: "bad", actions: { ALL: -50 } },
  [THAN_SAT_ENUM.NguyetPha]: { base: -10, type: "bad", actions: { CONSTRUCTION: -20, BUSINESS: -10 } },
  // Nhóm nguy hiểm mới
  [THAN_SAT_ENUM.TamNuong]: { base: -10, type: "bad", actions: { ALL: -20, WEDDING: -50, CONSTRUCTION: -50 } },
  [THAN_SAT_ENUM.NguyetKy]: { base: -5, type: "bad", actions: { XUAT_HANH: -10, BUSINESS: -10 } },
  [THAN_SAT_ENUM.TuLy_TuTuyet]: { base: -10, type: "bad", actions: { ALL: -10 } },
  [THAN_SAT_ENUM.ThienCuong]: { base: -10, type: "bad", actions: { CONSTRUCTION: -20, WEDDING: -10 } },
  [THAN_SAT_ENUM.DiaPha]: { base: -10, type: "bad", actions: { CONSTRUCTION: -20 } },
  // ========================================================================
  // 2. CÁT TINH (CỘNG ĐIỂM)
  // ========================================================================
  [THAN_SAT_ENUM.ThienDuc]: { base: 5, type: "good", actions: { ALL: 5 } },
  [THAN_SAT_ENUM.NguyetDuc]: { base: 5, type: "good", actions: { ALL: 5 } },
  [THAN_SAT_ENUM.ThienXa]: { base: 10, type: "good", actions: { ALL: 10 } },
  // Cực tốt
  [THAN_SAT_ENUM.NguyetKhong]: { base: 3, type: "good", actions: { CONSTRUCTION: 5 } },
  [THAN_SAT_ENUM.SinhKhi]: { base: 5, type: "good", actions: { CONSTRUCTION: 10 } },
  [THAN_SAT_ENUM.ThienHy]: { base: 3, type: "good", actions: { WEDDING: 10 } },
  [THAN_SAT_ENUM.ThienDucHop]: { base: 2, type: "good" },
  [THAN_SAT_ENUM.NguyetDucHop]: { base: 2, type: "good" },
  [THAN_SAT_ENUM.ThienAtQuyNhan]: { base: 5, type: "good", actions: { ALL: 5 } },
  [THAN_SAT_ENUM.ThienLoc]: { base: 4, type: "good", actions: { BUSINESS: 10 } },
  [THAN_SAT_ENUM.LocKho]: { base: 3, type: "good", actions: { BUSINESS: 5 } },
  [THAN_SAT_ENUM.ThienPhu]: { base: 3, type: "good", actions: { BUSINESS: 5, CONSTRUCTION: 3 } },
  // ========================================================================
  // 3. HẮC ĐẠO (ĐIỂM TRỪ VỪA PHẢI)
  // ========================================================================
  [THAN_SAT_ENUM.ThienHinh]: { base: -3, type: "bad", actions: { LITIGATION: -10 } },
  [THAN_SAT_ENUM.ChuTuoc]: { base: -2, type: "bad", actions: { LITIGATION: -5, WEDDING: -2 } },
  [THAN_SAT_ENUM.BachHo]: { base: -3, type: "bad", actions: { WEDDING: -5, CONSTRUCTION: -2 } },
  [THAN_SAT_ENUM.HuyenVu]: { base: -2, type: "bad", actions: { BUSINESS: -5 } },
  [THAN_SAT_ENUM.CauTran]: { base: -2, type: "bad" },
  [THAN_SAT_ENUM.ThienLao]: { base: -2, type: "bad" },
  [THAN_SAT_ENUM.NguyenVu]: { base: -2, type: "bad", actions: { BUSINESS: -3 } },
  // ========================================================================
  // 4. CONTEXT / CHUYÊN BIỆT
  // ========================================================================
  [THAN_SAT_ENUM.ThoPhu]: { base: -3, type: "bad", actions: { CONSTRUCTION: -20 } },
  [THAN_SAT_ENUM.ThoCam]: { base: -3, type: "bad", actions: { CONSTRUCTION: -20 } },
  [THAN_SAT_ENUM.CoThan]: { base: -3, type: "bad", actions: { WEDDING: -20 } },
  [THAN_SAT_ENUM.QuaTu]: { base: -3, type: "bad", actions: { WEDDING: -20 } },
  [THAN_SAT_ENUM.TrungTang]: { base: -5, type: "bad", actions: { AN_TANG: -50, CONSTRUCTION: -5, WEDDING: -5 } },
  [THAN_SAT_ENUM.KiepSat]: { base: -3, type: "bad", actions: { WEDDING: -10, CONSTRUCTION: -5, BUSINESS: -5 } },
  [THAN_SAT_ENUM.ThienTac]: { base: -3, type: "bad", actions: { CONSTRUCTION: -10 } },
  [THAN_SAT_ENUM.LySang]: { base: 0, type: "bad", actions: { WEDDING: -20 } },
  [THAN_SAT_ENUM.KhongPhong]: { base: 0, type: "bad", actions: { WEDDING: -20 } },
  [THAN_SAT_ENUM.LucHop]: { base: 2, type: "good", actions: { WEDDING: 5, BUSINESS: 5 } },
  [THAN_SAT_ENUM.TamHop]: { base: 2, type: "good", actions: { WEDDING: 5, BUSINESS: 5 } }
};
const TRUC_SCORES = {
  // --- TRỰC TỐT ---
  [TRUC_ENUM.Thanh]: { base: 4, type: "good", actions: { CONSTRUCTION: 5, BUSINESS: 5, WEDDING: 5, EDUCATION: 5 } },
  [TRUC_ENUM.Khai]: { base: 4, type: "good", actions: { BUSINESS: 5, WEDDING: 5, CONSTRUCTION: 3 } },
  [TRUC_ENUM.Man]: { base: 3, type: "good", actions: { BUSINESS: 5, CONSTRUCTION: 3, WEDDING: 5, LITIGATION: -10 } },
  // Mãn kỵ tố tụng
  [TRUC_ENUM.Dinh]: { base: 3, type: "good", actions: { CONSTRUCTION: 3, BUSINESS: 4, EDUCATION: 5 } },
  [TRUC_ENUM.Binh]: { base: 2, type: "good", actions: { ALL: 2, LITIGATION: 5 } },
  // Bình ổn, dùng được cho giải oan
  // --- TRỰC TRUNG BÌNH / XẤU NHẸ ---
  [TRUC_ENUM.Kien]: { base: 1, type: "good", actions: { CONSTRUCTION: -3, BUSINESS: -2, EDUCATION: -5 } },
  // Kiến (Khởi đầu) nhưng kỵ động thổ
  [TRUC_ENUM.Chap]: { base: 1, type: "bad", actions: { CONSTRUCTION: 2, BUSINESS: -3 } },
  // Chấp (Giữ gìn) kỵ buôn bán, tốt bảo dưỡng
  [TRUC_ENUM.Nguy]: { base: -2, type: "bad", actions: { CONSTRUCTION: -10, RISKY_BUSINESS: -10 } },
  // Nguy hiểm
  // --- TRỰC XẤU ---
  [TRUC_ENUM.Pha]: { base: -3, type: "bad", actions: { WEDDING: -10, BUSINESS: -5, CONSTRUCTION: 3, EDUCATION: -5 } },
  // Phá dỡ nhà thì tốt
  [TRUC_ENUM.Be]: { base: -3, type: "bad", actions: { BUSINESS: -10, TREATMENT: -10, CONSTRUCTION: -5 } },
  // Bế tắc
  [TRUC_ENUM.Thu]: { base: -3, type: "bad", actions: { BUSINESS: 5, CONSTRUCTION: -5, WEDDING: -5 } },
  // Thu tiền thì tốt
  [TRUC_ENUM.Tru]: { base: 1, type: "good", actions: { TREATMENT: 5, BUSINESS: -3, WEDDING: -3 } }
  // Trừ bệnh tốt, trừ tiền xấu
};
const TU_SCORES = {
  // --- ĐÔNG PHƯƠNG THANH LONG (MỘC) ---
  [NHI_THAP_BAT_TU_ENUM.Giac]: { base: 3, type: "good", actions: { EDUCATION: 10, BUSINESS: 5 } },
  // Giác Mộc Giao
  [NHI_THAP_BAT_TU_ENUM.Cang]: { base: -3, type: "bad", actions: { WEDDING: -10 } },
  // Cang Kim Long
  [NHI_THAP_BAT_TU_ENUM.De]: { base: -3, type: "bad", actions: { CONSTRUCTION: -10, XUAT_HANH: -5 } },
  // Đê Thổ Lạc
  [NHI_THAP_BAT_TU_ENUM.Phong]: { base: 5, type: "good", actions: { CONSTRUCTION: 10, WEDDING: 10 } },
  // Phòng Nhật Thố (Đại cát)
  [NHI_THAP_BAT_TU_ENUM.Tam]: { base: -4, type: "bad", actions: { CONSTRUCTION: -20, WEDDING: -20 } },
  // Tâm Nguyệt Hồ (Xấu)
  [NHI_THAP_BAT_TU_ENUM.Vi]: { base: 5, type: "good", actions: { BUSINESS: 10, CONSTRUCTION: 10, WEDDING: 10 } },
  // Vĩ Hỏa Hổ (Đại cát)
  [NHI_THAP_BAT_TU_ENUM.Co]: { base: 3, type: "good", actions: { BUSINESS: 5, EDUCATION: 5 } },
  // Cơ Thủy Báo
  // --- BẮC PHƯƠNG HUYỀN VŨ (THỦY) ---
  [NHI_THAP_BAT_TU_ENUM.Dau]: { base: 4, type: "good", actions: { BUSINESS: 10, CONSTRUCTION: 5 } },
  [NHI_THAP_BAT_TU_ENUM.Nguu]: { base: -4, type: "bad", actions: { WEDDING: -10, BUSINESS: -5 } },
  [NHI_THAP_BAT_TU_ENUM.Nu]: { base: -4, type: "bad", actions: { WEDDING: -20, BUSINESS: -10 } },
  [NHI_THAP_BAT_TU_ENUM.Hu]: { base: -5, type: "bad", actions: { CONSTRUCTION: -20, WEDDING: -20 } },
  [NHI_THAP_BAT_TU_ENUM.Nguy]: { base: -3, type: "bad", actions: { CONSTRUCTION: -20, BUSINESS: 5 } },
  // Nguy thấp thổ, kỵ xây, tốt buôn? (check sách)
  [NHI_THAP_BAT_TU_ENUM.That]: { base: 4, type: "good", actions: { CONSTRUCTION: 10, BUSINESS: 10 } },
  [NHI_THAP_BAT_TU_ENUM.Bich]: { base: 4, type: "good", actions: { CONSTRUCTION: 10, WEDDING: 10, EDUCATION: 10 } },
  // --- TÂY PHƯƠNG BẠCH HỔ (KIM) ---
  [NHI_THAP_BAT_TU_ENUM.Khue]: { base: -2, type: "bad", actions: { WEDDING: -10, BUSINESS: -5 } },
  // Khuê Mộc Lang
  [NHI_THAP_BAT_TU_ENUM.Lau]: { base: 4, type: "good", actions: { BUSINESS: 10, CONSTRUCTION: 5, WEDDING: 5 } },
  [NHI_THAP_BAT_TU_ENUM.Vi_D]: { base: 4, type: "good", actions: { BUSINESS: 10, CONSTRUCTION: 10 } },
  [NHI_THAP_BAT_TU_ENUM.Mao]: { base: -3, type: "bad", actions: { WEDDING: -10, CONSTRUCTION: -5 } },
  [NHI_THAP_BAT_TU_ENUM.Tat]: { base: 4, type: "good", actions: { CONSTRUCTION: 10, BUSINESS: 10, WEDDING: 10 } },
  [NHI_THAP_BAT_TU_ENUM.Tuy]: { base: -4, type: "bad", actions: { BUSINESS: -20, WEDDING: -10 } },
  // Chủy
  [NHI_THAP_BAT_TU_ENUM.Sam]: { base: 3, type: "good", actions: { BUSINESS: 10, EDUCATION: 5 } },
  // --- NAM PHƯƠNG CHU TƯỚC (HỎA) ---
  [NHI_THAP_BAT_TU_ENUM.Tinh]: { base: 3, type: "good", actions: { BUSINESS: 5, CONSTRUCTION: 3 } },
  // Tỉnh
  [NHI_THAP_BAT_TU_ENUM.Quy]: { base: -5, type: "bad", actions: { CONSTRUCTION: -20, WEDDING: -50 } },
  // Quỷ Kim Dương (Xấu)
  [NHI_THAP_BAT_TU_ENUM.Lieu]: { base: -5, type: "bad", actions: { CONSTRUCTION: -20, BUSINESS: -20 } },
  [NHI_THAP_BAT_TU_ENUM.Tinh_H]: { base: -3, type: "bad", actions: { WEDDING: -10 } },
  // Tinh
  [NHI_THAP_BAT_TU_ENUM.Truong]: { base: 4, type: "good", actions: { WEDDING: 10, BUSINESS: 5 } },
  [NHI_THAP_BAT_TU_ENUM.Duc]: { base: -2, type: "bad", actions: { CONSTRUCTION: -5 } },
  [NHI_THAP_BAT_TU_ENUM.Chan]: { base: 4, type: "good", actions: { BUSINESS: 10, CONSTRUCTION: 5, WEDDING: 5, EDUCATION: 10 } }
};
const CRITICAL_STARS = [
  THAN_SAT_ENUM.SatChu,
  THAN_SAT_ENUM.ThuTu,
  THAN_SAT_ENUM.DuongCongKy,
  THAN_SAT_ENUM.TamNuong,
  THAN_SAT_ENUM.NguyetKy,
  THAN_SAT_ENUM.TuLy_TuTuyet,
  THAN_SAT_ENUM.NguyetPha,
  THAN_SAT_ENUM.ThienKhacDiaXung,
  THAN_SAT_ENUM.ThienCuong,
  THAN_SAT_ENUM.DiaPha
];

const ACTIONS_CONFIG = [
  // --- NHÓM XÂY DỰNG ---
  {
    id: "DONG_THO",
    category: "CONSTRUCTION",
    label: "Động thổ / Khởi công",
    goodTruc: [TRUC_ENUM.Thanh, TRUC_ENUM.Khai, TRUC_ENUM.Dinh],
    badTruc: [TRUC_ENUM.Be, TRUC_ENUM.Thu, TRUC_ENUM.Binh],
    criticalStars: [THAN_SAT_ENUM.ThoCam, THAN_SAT_ENUM.ThoPhu, THAN_SAT_ENUM.DiaPha, THAN_SAT_ENUM.ThienTac, THAN_SAT_ENUM.NguyetPha, THAN_SAT_ENUM.HoangVu, THAN_SAT_ENUM.ThoOn, THAN_SAT_ENUM.TamNuong],
    goodStars: [THAN_SAT_ENUM.ThienDuc, THAN_SAT_ENUM.NguyetDuc, THAN_SAT_ENUM.NguyetKhong, THAN_SAT_ENUM.SinhKhi, THAN_SAT_ENUM.NguPhu]
  },
  {
    id: "NHAP_TRACH",
    category: "CONSTRUCTION",
    label: "Nhập trạch (Vào nhà mới)",
    goodTruc: [TRUC_ENUM.Thanh, TRUC_ENUM.Khai, TRUC_ENUM.Man],
    badTruc: [TRUC_ENUM.Be, TRUC_ENUM.Pha, TRUC_ENUM.Kien],
    criticalStars: [THAN_SAT_ENUM.TamNuong, THAN_SAT_ENUM.SatChu, THAN_SAT_ENUM.ThienTac, THAN_SAT_ENUM.HoangVu, THAN_SAT_ENUM.NguyetPha],
    goodStars: [THAN_SAT_ENUM.LucHop, THAN_SAT_ENUM.ThienDuc, THAN_SAT_ENUM.NguyetDuc, THAN_SAT_ENUM.ThienPhu]
  },
  // --- NHÓM KINH DOANH ---
  {
    id: "KHAI_TRUONG",
    category: "BUSINESS",
    label: "Khai trương / Mở cửa hàng",
    goodTruc: [TRUC_ENUM.Man, TRUC_ENUM.Thanh, TRUC_ENUM.Khai],
    badTruc: [TRUC_ENUM.Be, TRUC_ENUM.Nguy, TRUC_ENUM.Pha],
    criticalStars: [THAN_SAT_ENUM.KiepSat, THAN_SAT_ENUM.KhongPhong, THAN_SAT_ENUM.TamNuong, THAN_SAT_ENUM.NguyetPha],
    // Kỵ hao tán
    goodStars: [THAN_SAT_ENUM.ThienLoc, THAN_SAT_ENUM.LocKho, THAN_SAT_ENUM.ThienPhu, THAN_SAT_ENUM.ThienQuy, THAN_SAT_ENUM.NguPhu]
  },
  {
    id: "KY_KET",
    category: "BUSINESS",
    label: "Ký hợp đồng / Giao dịch",
    goodTruc: [TRUC_ENUM.Dinh, TRUC_ENUM.Thanh, TRUC_ENUM.Man],
    badTruc: [TRUC_ENUM.Pha, TRUC_ENUM.Nguy, TRUC_ENUM.Kien],
    criticalStars: [THAN_SAT_ENUM.NguyetPha, THAN_SAT_ENUM.ThienCuong, THAN_SAT_ENUM.TamNuong],
    goodStars: [THAN_SAT_ENUM.TamHop, THAN_SAT_ENUM.LucHop, THAN_SAT_ENUM.ThienHy, THAN_SAT_ENUM.ThienLoc, THAN_SAT_ENUM.ThienThanh]
  },
  {
    id: "MUA_XE",
    category: "BUSINESS",
    label: "Mua xe / Tài sản lớn",
    goodTruc: [TRUC_ENUM.Thanh, TRUC_ENUM.Man, TRUC_ENUM.Khai],
    badTruc: [TRUC_ENUM.Be, TRUC_ENUM.Nguy, TRUC_ENUM.Pha],
    criticalStars: [THAN_SAT_ENUM.ThienCuong, THAN_SAT_ENUM.TamNuong, THAN_SAT_ENUM.NguyetPha],
    goodStars: [THAN_SAT_ENUM.ThienDuc, THAN_SAT_ENUM.NguyetDuc, THAN_SAT_ENUM.LocKho]
  },
  // --- NHÓM HÔN NHÂN ---
  {
    id: "CUOI_HOI",
    category: "WEDDING",
    label: "Cưới hỏi / Đính hôn",
    goodTruc: [TRUC_ENUM.Dinh, TRUC_ENUM.Thanh, TRUC_ENUM.Thu, TRUC_ENUM.Khai],
    badTruc: [TRUC_ENUM.Kien, TRUC_ENUM.Pha, TRUC_ENUM.Be, TRUC_ENUM.Nguy],
    criticalStars: [THAN_SAT_ENUM.CoThan, THAN_SAT_ENUM.QuaTu, THAN_SAT_ENUM.LySang, THAN_SAT_ENUM.KhongPhong, THAN_SAT_ENUM.TuLy_TuTuyet, THAN_SAT_ENUM.NguyetYem, THAN_SAT_ENUM.NhanCach, THAN_SAT_ENUM.TamNuong],
    goodStars: [THAN_SAT_ENUM.ThienDuc, THAN_SAT_ENUM.NguyetDuc, THAN_SAT_ENUM.ThienHy, THAN_SAT_ENUM.IchHau, THAN_SAT_ENUM.TueHop, THAN_SAT_ENUM.TamHop]
  },
  // --- NHÓM TÂM LINH ---
  {
    id: "AN_TANG",
    category: "SPIRITUAL",
    label: "An táng / Mai táng",
    goodTruc: [TRUC_ENUM.Thanh, TRUC_ENUM.Thu, TRUC_ENUM.Dinh, TRUC_ENUM.Binh, TRUC_ENUM.Be],
    badTruc: [TRUC_ENUM.Kien, TRUC_ENUM.Pha, TRUC_ENUM.Khai],
    criticalStars: [THAN_SAT_ENUM.TrungTang, THAN_SAT_ENUM.ThuTu, THAN_SAT_ENUM.SatChu, THAN_SAT_ENUM.ThienCuong, THAN_SAT_ENUM.QuyKhoc, THAN_SAT_ENUM.TamNuong, THAN_SAT_ENUM.NguyetPha],
    goodStars: [THAN_SAT_ENUM.NguyetDuc, THAN_SAT_ENUM.LucHop, THAN_SAT_ENUM.ThienXa, THAN_SAT_ENUM.PhucSinh]
  },
  {
    id: "TE_LE",
    category: "SPIRITUAL",
    label: "Tế lễ / Cúng bái",
    goodTruc: [TRUC_ENUM.Tru, TRUC_ENUM.Dinh, TRUC_ENUM.Thanh],
    badTruc: [TRUC_ENUM.Nguy, TRUC_ENUM.Pha],
    criticalStars: [THAN_SAT_ENUM.ThuTu, THAN_SAT_ENUM.ThienCuong, THAN_SAT_ENUM.QuyKhoc, THAN_SAT_ENUM.NguyetPha],
    goodStars: [THAN_SAT_ENUM.ThienXa, THAN_SAT_ENUM.ThienPhuc, THAN_SAT_ENUM.PhucSinh]
  },
  // --- NHÓM ĐỜI SỐNG & SỨC KHỎE ---
  {
    id: "XUAT_HANH",
    category: "DAILY",
    label: "Xuất hành đi xa",
    goodTruc: [TRUC_ENUM.Khai, TRUC_ENUM.Kien, TRUC_ENUM.Thanh],
    badTruc: [TRUC_ENUM.Be, TRUC_ENUM.Nguy, TRUC_ENUM.Pha],
    criticalStars: [THAN_SAT_ENUM.SatChu, THAN_SAT_ENUM.NguyetPha, THAN_SAT_ENUM.ThienCuong, THAN_SAT_ENUM.TieuHongSa, THAN_SAT_ENUM.TamNuong],
    goodStars: [THAN_SAT_ENUM.ThienDuc, THAN_SAT_ENUM.NguyetDuc, THAN_SAT_ENUM.ThienXa, THAN_SAT_ENUM.ThienMa]
  },
  {
    id: "TRI_BENH",
    category: "TREATMENT",
    label: "Trị bệnh / Phẫu thuật",
    goodTruc: [TRUC_ENUM.Tru, TRUC_ENUM.Pha, TRUC_ENUM.Khai],
    badTruc: [TRUC_ENUM.Be, TRUC_ENUM.Kien, TRUC_ENUM.Man],
    criticalStars: [THAN_SAT_ENUM.ThienCuong, THAN_SAT_ENUM.ThuTu, THAN_SAT_ENUM.NguyetPha],
    goodStars: [THAN_SAT_ENUM.SinhKhi, THAN_SAT_ENUM.ThienDuc, THAN_SAT_ENUM.NguyetDuc]
  },
  // --- NHÓM ĐẦU TƯ / CẦU TÀI ---
  {
    id: "DAU_TU",
    category: "RISKY_BUSINESS",
    label: "Đầu tư / Cầu tài (Vay mượn, hùn vốn)",
    goodTruc: [TRUC_ENUM.Man, TRUC_ENUM.Thanh, TRUC_ENUM.Khai],
    badTruc: [TRUC_ENUM.Be, TRUC_ENUM.Kien, TRUC_ENUM.Nguy],
    criticalStars: [THAN_SAT_ENUM.KhongPhong, THAN_SAT_ENUM.KiepSat, THAN_SAT_ENUM.NguyetPha, THAN_SAT_ENUM.DaiHao],
    goodStars: [THAN_SAT_ENUM.ThienLoc, THAN_SAT_ENUM.LocKho, THAN_SAT_ENUM.ThienPhu, THAN_SAT_ENUM.ThienXa, THAN_SAT_ENUM.ThienQuy]
  },
  // --- NHÓM TỐ TỤNG / GIẢI OAN ---
  {
    id: "TO_TUNG",
    category: "LITIGATION",
    label: "Tố tụng / Giải oan",
    goodTruc: [TRUC_ENUM.Tru, TRUC_ENUM.Pha, TRUC_ENUM.Binh],
    badTruc: [TRUC_ENUM.Kien, TRUC_ENUM.Man],
    criticalStars: [THAN_SAT_ENUM.ThienCuong, THAN_SAT_ENUM.NguyetHinh],
    goodStars: [THAN_SAT_ENUM.ThienXa, THAN_SAT_ENUM.MinhTinh]
  },
  // --- NHÓM CẦU DANH / HỌC TẬP ---
  {
    id: "NHAP_HOC",
    category: "EDUCATION",
    label: "Nhập học / Thi cử / Cầu danh",
    goodTruc: [TRUC_ENUM.Dinh, TRUC_ENUM.Thanh, TRUC_ENUM.Khai],
    badTruc: [TRUC_ENUM.Kien, TRUC_ENUM.Pha],
    criticalStars: [THAN_SAT_ENUM.ThienCuong],
    goodStars: [THAN_SAT_ENUM.ThienDuc, THAN_SAT_ENUM.NguyetDuc, THAN_SAT_ENUM.SinhKhi, THAN_SAT_ENUM.ThienAtQuyNhan, THAN_SAT_ENUM.QuanNhat, THAN_SAT_ENUM.ThienQuy]
  }
];
const getRecommendations = (dayInfo) => {
  const recommendations = [];
  const { truc, sao, dungThan, can, chi, badStarStates, dayScore, thanSat } = dayInfo;
  ACTIONS_CONFIG.forEach((action) => {
    let totalScore = dayScore;
    const badReasons = [];
    const goodReasons = [];
    let isVetoed = false;
    const allBadStars = [...dayInfo.badDays, ...dayInfo.thanSat.hung];
    action.criticalStars.forEach((critStar) => {
      if (allBadStars.includes(critStar)) {
        isVetoed = true;
        badReasons.push(`ĐẠI KỴ: ${critStar}`);
      }
    });
    if (badStarStates) {
      badStarStates.forEach((s) => {
        const def = STAR_SCORES[s.name];
        const currentContribution = s.finalPenalty;
        const base = def ? def.base : -2;
        let contextScore = base;
        if (def && def.actions) {
          if (def.actions[action.id] !== void 0) contextScore = def.actions[action.id];
          else if (def.actions[action.category] !== void 0) contextScore = def.actions[action.category];
          else if (def.actions["ALL"] !== void 0) contextScore = def.actions["ALL"];
        }
        let ratio = 1;
        if (s.originalPenalty !== 0) {
          ratio = s.finalPenalty / s.originalPenalty;
        } else {
          ratio = s.isRescued ? 0 : 1;
        }
        const targetContribution = contextScore * ratio;
        const delta = targetContribution - currentContribution;
        totalScore += delta;
        if (targetContribution < -2) {
          if (ratio < 1 && ratio > 0) {
            badReasons.push(`${s.name} (Giảm nhẹ)`);
          } else if (ratio > 0) {
            if (targetContribution < -5) badReasons.push(`${s.name}`);
          }
        }
        if (targetContribution <= -40) {
          isVetoed = true;
          badReasons.push(`ĐẠI KỴ: ${s.name}`);
        }
      });
    }
    thanSat.cat.forEach((s) => {
      const def = STAR_SCORES[s];
      const base = def ? def.base : 1;
      const currentContribution = base;
      let contextScore = base;
      if (def && def.actions) {
        if (def.actions[action.id] !== void 0) contextScore = def.actions[action.id];
        else if (def.actions[action.category] !== void 0) contextScore = def.actions[action.category];
      }
      const delta = contextScore - currentContribution;
      totalScore += delta;
      if (contextScore >= 5) goodReasons.push(s);
    });
    const trucName = DATA.TRUCS[truc];
    const trucDef = TRUC_SCORES[truc];
    const trucBase = trucDef ? trucDef.base : 0;
    let trucContext = trucBase;
    if (trucDef && trucDef.actions) {
      if (trucDef.actions[action.id] !== void 0) trucContext = trucDef.actions[action.id];
      else if (trucDef.actions[action.category] !== void 0) trucContext = trucDef.actions[action.category];
      else if (trucDef.actions["ALL"] !== void 0) trucContext = trucDef.actions["ALL"];
    }
    const trucDelta = trucContext - trucBase;
    totalScore += trucDelta;
    if (trucContext >= 3) {
      goodReasons.push(`Trực ${trucName}`);
    } else if (trucContext < 0) {
      badReasons.push(`Trực ${trucName} (Hư)`);
    }
    const tuDef = TU_SCORES[sao];
    const tuBase = tuDef ? tuDef.base : 0;
    let tuContext = tuBase;
    if (tuDef && tuDef.actions) {
      if (tuDef.actions[action.id] !== void 0) tuContext = tuDef.actions[action.id];
      else if (tuDef.actions[action.category] !== void 0) tuContext = tuDef.actions[action.category];
      else if (tuDef.actions["ALL"] !== void 0) tuContext = tuDef.actions["ALL"];
    }
    const tuDelta = tuContext - tuBase;
    totalScore += tuDelta;
    const starName = DATA.NHI_THAP_BAT_TU[sao];
    if (tuContext >= 4) goodReasons.push(`Sao ${starName}`);
    else if (tuContext < 0) badReasons.push(`Sao ${starName} (Xấu)`);
    if (dungThan) {
      const dayEl = CAN_NGU_HANH[can];
      const dayChiEl = CHI_NGU_HANH[chi];
      if (dayEl === dungThan.dungThan || dayChiEl === dungThan.dungThan) {
        totalScore += 2;
        goodReasons.push("Dụng thần");
      }
    }
    if (isVetoed) totalScore = -99;
    let finalScore = totalScore;
    if (dayScore < 4) {
      if (finalScore > 4.9) {
        finalScore = 4.9;
        badReasons.push("(Giới hạn do ngày xấu)");
      }
    } else if (dayScore < 5) {
      if (finalScore > 6) {
        finalScore = 6;
        badReasons.push("(Giới hạn do ngày trung bình)");
      }
    }
    const finalThreshold = 4;
    if (finalScore > 10) finalScore = 10;
    if (finalScore < 0) finalScore = 0;
    if (finalScore >= finalThreshold) {
      const displayedReasons = [...badReasons, ...goodReasons];
      recommendations.push({
        id: action.id,
        category: action.category,
        label: action.label,
        isGood: true,
        score: parseFloat(finalScore.toFixed(1)),
        reason: displayedReasons.slice(0, 3).join(", "),
        // Limit reasons
        advice: getAdvice(action.id, finalScore, badReasons)
      });
    }
  });
  return recommendations.sort((a, b) => b.score - a.score);
};
const ADVICE_TEMPLATES = {
  // ========================================================================
  // 1. XÂY DỰNG & NHÀ CỬA (CONSTRUCTION)
  // Nguồn tham khảo: Hoàng Đế Trạch Kinh, Lỗ Ban Kinh
  // ========================================================================
  DONG_THO: {
    high: "Thượng lương đại cát, gia trạch hưng long. Khởi tạo ngày này thì con cháu vinh hiển, điền trạch mở rộng, phúc lộc song toàn.",
    good: "Nhân khang vật thịnh, địa khí an hòa. Động thổ thuận lợi, công trình vững chãi, gia chủ bình an.",
    avg: "Bán cát bán hung. Nên chọn giờ Hoàng Đạo để hóa giải tạp khí, cúng bái Thổ Thần cẩn trọng mới được an yên.",
    bad: "Phạm vào sầu bi khốc khấp. Khởi tạo ắt gặp tai ương, gia đạo bất an, tiền tài hao tán. Tuyệt đối chớ làm."
  },
  NHAP_TRACH: {
    high: "Thiên thời địa lợi, tân gia đại phát. Dọn vào ngày này như rồng gặp mây, vạn sự hanh thông, phú quý khả kỳ.",
    good: "An cư lạc nghiệp, gia đạo thuận hòa. Chuyển nhà tốt đẹp, trong ấm ngoài êm, mưu sự dễ thành.",
    avg: "Bình thường. Cần làm lễ nhập trạch trang nghiêm, kỵ lời qua tiếng lại trong giờ đầu tiên bước vào nhà.",
    bad: "Vận khí trất tắc, âm dương bất giao. Nhập trạch dễ sinh khẩu thiệt, ốm đau hoặc thất thoát tài vật. Nên hoãn."
  },
  // ========================================================================
  // 2. KINH DOANH & TÀI LỘC (BUSINESS)
  // Nguồn tham khảo: Vạn Sự Bất Cầu Nhân, Thông Thư
  // ========================================================================
  KHAI_TRUONG: {
    high: "Khai trương hồng phát, tài nguyên quảng tiến. Ngày đắc Thiên tài, khách hàng tấp nập, nhất bản vạn lợi (bỏ một vốn thu vạn lời).",
    good: "Buôn may bán đắt, tài lộc hanh thông. Mở hàng suôn sẻ, uy tín ngày càng tăng cao.",
    avg: "Thường thường. Nên chọn người hợp tuổi mở hàng để kích hoạt tài khí, tránh giờ Hắc Đạo gây hao hụt.",
    bad: "Tài tinh bị khắc, tiểu nhân quấy phá. Khai trương ế ẩm, dễ gặp tranh chấp hoặc sự cố bất ngờ. Bất lợi."
  },
  KY_KET: {
    high: "Quân tử giao kết, nhất ngôn cửu đỉnh. Hợp đồng ký ngày này mang lại đại lợi, đối tác đắc lực, sự nghiệp thăng hoa.",
    good: "Công việc trôi chảy, giao dịch thành công. Thỏa thuận đạt được sự đồng thuận cao, đôi bên cùng có lợi.",
    avg: "Có thể tiến hành. Cần rà soát kỹ văn bản, chọn giờ tốt hạ bút để tránh bút sa gà chết.",
    bad: "Khẩu thiệt thị phi, văn thư trục trặc. Ký kết dễ sinh bất đồng, kiện tụng về sau. Nên dời ngày."
  },
  MUA_XE: {
    high: "Hành xa đại cát, lộ trình bình an. Mua xe ngày này đi đến nơi về đến chốn, chiêu tài nạp phúc, vạn dặm hanh thông.",
    good: "Thuận buồm xuôi gió. Giao dịch mua bán nhanh gọn, phương tiện sử dụng bền bỉ, ít hư hao.",
    avg: "Tiểu cát. Nên cúng xe cẩn thận, chọn giờ tốt xuất hành nhận xe để gia tăng vận may.",
    bad: "Mã què đường dốc, dễ gặp tai ương. Mua xe không lợi, xe hay hỏng vặt hoặc va quẹt. Nên kiêng kỵ."
  },
  // ========================================================================
  // 3. HÔN NHÂN & GIA ĐẠO (WEDDING)
  // Nguồn tham khảo: Hôn Nhân Bảo Giám, Chu Công Giải Mộng
  // ========================================================================
  CUOI_HOI: {
    high: "Loan phượng hòa minh, sắt cầm hảo hợp. Cưới gả ngày này vợ chồng bách niên giai lão, con cháu đầy đàn, phúc trạch miên trường.",
    good: "Lương duyên tốt đẹp, gia đạo an vui. Lễ cưới diễn ra suôn sẻ, hai họ đều hoan hỷ, tình cảm mặn nồng.",
    avg: "Duyên phận bình ổn. Nên đón dâu vào giờ Hoàng Đạo, kỵ tuổi xung khắc trong đoàn đưa dâu để tránh thị phi.",
    bad: "Phạm Cô thần Quả tú, ly biệt chia phôi. Cưới hỏi bất lợi, vợ chồng dễ khắc khẩu hoặc đứt gánh giữa đường."
  },
  // ========================================================================
  // 4. TÂM LINH & TẾ TỰ (SPIRITUAL)
  // Nguồn tham khảo: Thọ Mai Gia Lễ
  // ========================================================================
  AN_TANG: {
    high: "Phúc ấm tổ tiên, con cháu phát đạt. An táng ngày này vong linh siêu thoát, người dương được phù trợ, vạn sự cát tường.",
    good: "Mồ yên mả đẹp, âm dương thuận hòa. Tang lễ trang nghiêm, không gặp trắc trở.",
    avg: "Bình thường. Cần tránh các giờ Trùng tang, Thiên cương. Nên chọn giờ Đại An để hạ huyệt.",
    bad: "Phạm Trùng tang liên táng, họa vô đơn chí. An táng ngày này cực xấu, ảnh hưởng nặng nề đến người ở lại."
  },
  TE_LE: {
    high: "Sở cầu như ý, sở nguyện tòng tâm. Tế lễ linh ứng, thần phật chứng giám, gia đạo được che chở tai qua nạn khỏi.",
    good: "Tâm thành tất ứng. Việc cúng bái diễn ra thuận lợi, không gian thanh tịnh, tâm hồn an lạc.",
    avg: "Có thể tiến hành. Nên giữ tâm thanh tịnh, chuẩn bị lễ vật chu đáo, tránh ồn ào xô bồ.",
    bad: "Thần linh không ngự, âm khí nặng nề. Tế lễ không thành, cầu cúng vô ích, có thể phản tác dụng."
  },
  // ========================================================================
  // 5. ĐỜI SỐNG HÀNG NGÀY (DAILY)
  // Nguồn tham khảo: Khổng Minh Lục Nhâm, Lý Thuần Phong
  // ========================================================================
  XUAT_HANH: {
    high: "Thượng lộ bình an, quý nhân chỉ lối. Xuất hành đại cát, mưu sự ắt thành, đi một về mười, ngàn dặm không lo.",
    good: "Đường đi thuận lợi, gặp nhiều may mắn. Công việc trôi chảy, không gặp trở ngại đáng kể.",
    avg: "Bình thường. Nên xem hướng xuất hành (Hỷ Thần, Tài Thần) và giờ tốt để tránh chuyện không vui dọc đường.",
    bad: "Đường đi gập ghềnh, dễ gặp đạo tặc hoặc tai nạn. Xuất hành bất lợi, tốt nhất nên hoãn chuyến đi."
  },
  // ========================================================================
  // 6. SỨC KHỎE (TREATMENT)
  // Nguồn tham khảo: Y Tông Kim Giám
  // ========================================================================
  TRI_BENH: {
    high: "Dược đáo bệnh trừ, gặp thầy gặp thuốc. Trị bệnh ngày này cơ thể hồi phục thần tốc, tai ách tiêu tan.",
    good: "Tiến triển khả quan. Phẫu thuật hay châm cứu đều thuận lợi, giảm thiểu đau đớn.",
    avg: "Có thể tiến hành. Nên chọn giờ tốt để uống thuốc hoặc khai dao, giữ tinh thần lạc quan.",
    bad: "Bệnh tình dây dưa, biến chứng khôn lường. Thuốc thang vô hiệu, tránh can thiệp dao kéo lớn vào ngày này."
  },
  // ========================================================================
  // 7. RỦI RO & ĐẦU TƯ (RISKY BUSINESS)
  // ========================================================================
  DAU_TU: {
    high: "Thời cơ chín muồi, thiên thời ủng hộ. Đầu tư trúng lớn, tài vận thăng hoa, thu về lợi nhuận kết xù.",
    good: "Có lợi nhuận, cơ hội tốt. Quyết định sáng suốt mang lại thành quả khả quan.",
    avg: "Cân nhắc kỹ lưỡng. Lợi nhuận đi kèm rủi ro, chỉ nên đầu tư nhỏ giọt, tránh tất tay.",
    bad: 'Tiền bạc đội nón ra đi, đại hao tán lộc. Đầu tư dễ trắng tay, tuyệt đối nên "án binh bất động".'
  },
  // ========================================================================
  // 8. PHÁP LÝ & TRANH CHẤP (LITIGATION)
  // ========================================================================
  TO_TUNG: {
    high: "Lẽ phải thuộc về mình, minh oan giải khuất. Tố tụng thắng lợi, danh tiếng vang xa, kẻ gian phải cúi đầu.",
    good: "Công lý được thực thi, mọi việc sáng tỏ. Giải quyết tranh chấp theo hướng có lợi, hòa giải thành công.",
    avg: "Căng thẳng nhưng có lối thoát. Cần giữ bình tĩnh, khéo léo nhu cương đúng lúc.",
    bad: "Kiện tụng thất lý, hàm oan khó giải. Dễ bị phạt tiền hoặc tù tội, nên nhẫn nhịn chờ thời."
  },
  // ========================================================================
  // 9. HỌC TẬP & CÔNG DANH (EDUCATION)
  // ========================================================================
  NHAP_HOC: {
    high: "Văn Xương chiếu mệnh, bảng vàng đề danh. Thi cử đỗ đạt, nhập học thuận lợi, tiền đồ rộng mở thênh thang.",
    good: "Trí tuệ minh mẫn, học hành tấn tới. Thi cử suôn sẻ, kết quả như ý nguyện.",
    avg: "Cần nỗ lực nhiều (Cần cù bù thông minh). Chọn giờ tốt xuất hành đến trường thi để thêm phần may mắn.",
    bad: "Tinh thần hoảng loạn, lạc đề sai sót. Thi cử bất lợi, công danh trắc trở. Không nên cầu danh ngày này."
  }
};
function getAdvice(actionId, score, warnings) {
  const template = ADVICE_TEMPLATES[actionId];
  let advice = "";
  if (template) {
    if (score >= 8) advice = template.high;
    else if (score >= 6.5) advice = template.good;
    else if (score >= 5) advice = template.avg;
    else advice = template.bad;
  } else {
    if (score >= 8) advice = "Đại cát, vạn sự hanh thông, rất tốt để tiến hành.";
    else if (score >= 6.5) advice = "Khá tốt, tiến hành thuận lợi.";
    else if (score >= 5) advice = "Trung bình, có thể tiến hành nhưng cần cẩn trọng chọn giờ tốt.";
    else advice = "Tương đối kém, nên cân nhắc dời ngày.";
  }
  if (score < 6.5 && warnings.length > 0) {
    const mainWarning = warnings[0];
    advice += ` Lưu ý: Phạm ${mainWarning}`;
  }
  return advice;
}

const getCanValue = (can) => {
  if (can === CAN_ENUM.Giap || can === CAN_ENUM.At) return 1;
  if (can === CAN_ENUM.Binh || can === CAN_ENUM.Dinh) return 2;
  if (can === CAN_ENUM.Mau || can === CAN_ENUM.Ky) return 3;
  if (can === CAN_ENUM.Canh || can === CAN_ENUM.Tan) return 4;
  return 5;
};
const getChiValue = (chi) => {
  if ([CHI_ENUM.Ty, CHI_ENUM.Suu, CHI_ENUM.Ngo, CHI_ENUM.Mui].includes(chi)) return 0;
  if ([CHI_ENUM.Dan, CHI_ENUM.Mao, CHI_ENUM.Than, CHI_ENUM.Dau].includes(chi)) return 1;
  return 2;
};
const getNguHanhNapAm = (can, chi) => {
  const canVal = getCanValue(can);
  const chiVal = getChiValue(chi);
  let sum = canVal + chiVal;
  if (sum > 5) sum -= 5;
  switch (sum) {
    case 1:
      return NGU_HANH_ENUM.Kim;
    case 2:
      return NGU_HANH_ENUM.Thuy;
    case 3:
      return NGU_HANH_ENUM.Hoa;
    case 4:
      return NGU_HANH_ENUM.Tho;
    case 5:
      return NGU_HANH_ENUM.Moc;
    default:
      return NGU_HANH_ENUM.Kim;
  }
};
const calculateAgeClashScore = (dayCan, dayChi, dayNapAm, ageCan, ageChi) => {
  let score = 0;
  const reasons = [];
  const ageNapAm = getNguHanhNapAm(ageCan, ageChi);
  const userKhacDay = CAN_KHAC[ageCan]?.includes(dayCan);
  const dayKhacUser = CAN_KHAC[dayCan]?.includes(ageCan);
  let isStemClash = false;
  if (userKhacDay) {
    score += 30;
    isStemClash = true;
    reasons.push("Thiên Can khắc Ngày");
  } else if (dayKhacUser) {
    score += 15;
    reasons.push("Ngày khắc Thiên Can");
  }
  const isLucXung = LUC_XUNG[ageChi] === dayChi;
  let isBranchClash = false;
  if (isLucXung) {
    score += 40;
    isBranchClash = true;
    reasons.push("Lục Xung Địa Chi");
  }
  const userKhacNapAm = SINH_KHAC.KHAC[ageNapAm] === dayNapAm;
  const dayKhacNapAm = SINH_KHAC.KHAC[dayNapAm] === ageNapAm;
  if (userKhacNapAm) {
    score += 20;
    reasons.push("Nạp Âm khắc Ngày");
  } else if (dayKhacNapAm) {
    score += 10;
    reasons.push("Nạp Âm bị Ngày khắc");
  }
  if (isStemClash && isBranchClash) {
    score += 50;
    reasons.push("Thiên Khắc Địa Xung");
  }
  return { score, reasons };
};
const getClashingAges = (dayCan, dayChi) => {
  const dayNapAm = getNguHanhNapAm(dayCan, dayChi);
  const result = [];
  for (let i = 0; i < 60; i++) {
    const ageCan = i % 10;
    const ageChi = i % 12;
    const { score, reasons } = calculateAgeClashScore(dayCan, dayChi, dayNapAm, ageCan, ageChi);
    if (score >= 40) {
      const canName = DATA.CANS[ageCan];
      const chiName = DATA.CHIS[ageChi];
      result.push({
        can: ageCan,
        chi: ageChi,
        label: `${canName} ${chiName}`,
        score,
        reasons
      });
    }
  }
  return result.sort((a, b) => b.score - a.score);
};

const calculateHarmonyScore = (dayCan, dayChi, dayNapAm, ageCan, ageChi) => {
  let score = 0;
  const reasons = [];
  const ageNapAm = getNguHanhNapAm(ageCan, ageChi);
  const isStemHap = CAN_HOP[dayCan] === ageCan;
  if (isStemHap) {
    score += 20;
    reasons.push("Thiên Can Ngũ Hợp");
  }
  let isBranchLucHop = false;
  if (LUC_HOP[dayChi]?.partner === ageChi) {
    score += 30;
    isBranchLucHop = true;
    reasons.push("Địa Chi Lục Hợp");
  }
  if (!isBranchLucHop) {
    TAM_HOP.some(
      (group2) => group2.group.includes(dayChi) && group2.group.includes(ageChi)
      // And usually requires 3, but for affinity check, being in same triad is good. 
      // "Ban hop" (Half combination)? 
      // Doc says: "Tý-Thìn", "Dần-Ngọ-Tuất"... compatible pairs. 
      // Let's simpler check: Are they in the same Tam Hop group?
    );
    const group = TAM_HOP.find((g) => g.group.includes(dayChi));
    if (group && group.group.includes(ageChi) && dayChi !== ageChi) {
      score += 20;
      reasons.push("Địa Chi Tam Hợp");
    }
  }
  const dayGeneratesUser = SINH_KHAC.SINH[dayNapAm] === ageNapAm;
  const userGeneratesDay = SINH_KHAC.SINH[ageNapAm] === dayNapAm;
  const sameElement = dayNapAm === ageNapAm;
  if (dayGeneratesUser) {
    score += 25;
    reasons.push("Nạp Âm sinh Tuổi (Sinh Nhập)");
  } else if (userGeneratesDay) {
    score += 5;
    reasons.push("Tuổi sinh Nạp Âm (Sinh Xuất)");
  } else if (sameElement) {
    score += 10;
    reasons.push("Nạp Âm Tương Hòa");
  }
  if (isStemHap && isBranchLucHop) {
    score += 30;
    reasons.push("Thiên Địa Đức Hợp (Đại Cát)");
  }
  return { score, reasons };
};
const getCompatibleAges = (dayCan, dayChi) => {
  const dayNapAm = getNguHanhNapAm(dayCan, dayChi);
  const result = [];
  for (let i = 0; i < 60; i++) {
    const ageCan = i % 10;
    const ageChi = i % 12;
    if (ageCan === dayCan && ageChi === dayChi) continue;
    const { score, reasons } = calculateHarmonyScore(dayCan, dayChi, dayNapAm, ageCan, ageChi);
    if (score >= 20) {
      const canName = DATA.CANS[ageCan];
      const chiName = DATA.CHIS[ageChi];
      result.push({
        can: ageCan,
        chi: ageChi,
        label: `${canName} ${chiName}`,
        score,
        reasons
      });
    }
  }
  return result.sort((a, b) => b.score - a.score);
};

const resolveDayVerdict = (dayScore, affinity, badDays) => {
  const isDaiHung = badDays.some((s) => ["Sát Chủ", "Thụ Tử", "Thiên Cương", "Dương Công Kỵ"].includes(s));
  if (isDaiHung) {
    const reason = badDays.find((s) => ["Sát Chủ", "Thụ Tử", "Thiên Cương", "Dương Công Kỵ"].includes(s));
    return {
      verdict: "Rất Xấu (Đại Hung)",
      advice: `Ngày phạm ${reason}, sách xưa khuyên trăm sự đều kỵ. Nên an phận thủ thường, tránh khởi sự việc lớn để bảo toàn năng lượng.`,
      color: "red"
    };
  }
  if (affinity && affinity.isCritical) {
    return {
      verdict: "Xấu (Xung Tuổi)",
      advice: `Ngày này tuy có thể tốt với người khác, nhưng lại khắc kỵ với tuổi của bạn (Thiên Khắc Địa Xung). Cần hết sức cẩn trọng trong đi lại, giao tiếp.`,
      color: "orange"
      // Orange warning for personal clash
    };
  }
  if (dayScore < 4 && affinity && affinity.score > 5) {
    return {
      verdict: "Trung Bình (Hợp Tuổi)",
      advice: "Ngày chung không đẹp, nhưng nhờ bản mệnh hợp ngày (Quý Nhân/Tam Hợp) nên vẫn có thể tiến hành công việc nếu thực sự cần thiết.",
      color: "blue"
    };
  }
  if (dayScore >= 8 && (!affinity || affinity.score >= 0)) {
    return {
      verdict: "Đại Cát (Ngày Vàng)",
      advice: "Năng lượng vũ trụ hội tụ, rất thuận lợi để khai trương, động thổ, cưới hỏi. Hãy tận dụng cơ hội này!",
      color: "green"
    };
  }
  if (dayScore >= 6)
    return {
      verdict: "Khá Tốt",
      advice: "Mọi sự hanh thông, thuận lợi. Có thể triển khai các kế hoạch đã định.",
      color: "green"
    };
  if (dayScore >= 4)
    return {
      verdict: "Bình Hòa",
      advice: "Ngày trung bình, năng lượng ổn định. Làm việc nhỏ thì tốt, việc lớn cần cân nhắc giờ tốt.",
      color: "blue"
    };
  return {
    verdict: "Xấu (Hung Nhật)",
    advice: "Năng lượng ngày suy yếu, dễ gặp trắc trở. Nếu không gấp, hãy chọn ngày khác.",
    color: "red"
  };
};
const humanizeHourVerdict = (score, lucDieu, truc, thanSat, actionLabel = "công việc") => {
  const isGreatHour = thanSat.includes("Quý Nhân") || thanSat.includes("Đại Cát") || score >= 8;
  const isSlow = lucDieu === LUC_DIEU_ENUM.LuuNien || lucDieu === LUC_DIEU_ENUM.XichKhau;
  const isStable = truc === "Bình" || truc === "Định";
  if (isSlow && isGreatHour) {
    return `Mọi sự có phần dây dưa, chậm trễ nhưng may mắn gặp được quý nhân tương trợ nên kết quả cuối cùng vẫn tốt đẹp. Hãy kiên nhẫn.`;
  }
  if (isStable && score >= 7) {
    return `Giờ này mang năng lượng bình hòa, an toàn. Rất thích hợp để tiến hành ${actionLabel} một cách bền vững, không nên nóng vội.`;
  }
  if (lucDieu === LUC_DIEU_ENUM.XichKhau && (truc === "Thành" || truc === "Khai")) {
    return `Dễ phát sinh tranh luận hoặc bất đồng ý kiến, nhưng nếu khéo léo đàm phán thì ${actionLabel} vẫn đi đến kết quả thành công.`;
  }
  if (score >= 8.5) {
    return `Khung giờ vàng! Các yếu tố cát tường đang hội tụ, cực kỳ thuận lợi để triển khai ${actionLabel}.`;
  }
  if (score >= 6) return `Giờ khá tốt, năng lượng tích cực chiếm ưu thế. Có thể triển khai ${actionLabel}.`;
  if (score >= 4) return `Giờ trung bình, mọi sự bình thường. Nếu làm việc lớn thì cần chuẩn bị kỹ lưỡng hơn.`;
  return `Năng lượng giờ này hơi kém, dễ gặp trở ngại. Nếu không gấp, hãy chọn khung giờ khác tốt hơn.`;
};
const getYearCanChi = (year) => {
  const offset = year - 4;
  let canIdx = offset % 10;
  let chiIdx = offset % 12;
  if (canIdx < 0) canIdx += 10;
  if (chiIdx < 0) chiIdx += 12;
  return {
    can: canIdx,
    chi: chiIdx
  };
};
const evaluatePersonalAffinity = (userYear, timeCan, timeChi, type = "Ngày") => {
  let score = 0;
  const tags = [];
  let isCritical = false;
  const userPillar = getYearCanChi(userYear);
  const normTimeChi = timeChi;
  const normUserChi = userPillar.chi;
  const timeCanName = DATA.CANS[timeCan];
  const timeChiName = DATA.CHIS[timeChi];
  const userChiName = DATA.CHIS[userPillar.chi];
  const SCORES = SCORING_CONFIG.MICRO.SCORES.AFFINITY;
  let isCanHop = false;
  if (CAN_HOP[userPillar.can] === timeCan) {
    score += SCORES.LOC_QUY;
    isCanHop = true;
    tags.push({
      label: "Thiên Can Hợp",
      type: "good",
      description: `Can ${timeCanName} hợp Can tuổi.`
    });
  }
  if (!isCanHop) {
    const isTimeKhacUser = CAN_KHAC[timeCan]?.includes(userPillar.can);
    const isUserKhacTime = CAN_KHAC[userPillar.can]?.includes(timeCan);
    const isDiaXung = LUC_XUNG[normUserChi] === normTimeChi;
    if (isTimeKhacUser || isUserKhacTime) {
      if (isDiaXung) {
        score += SCORES.XUNG_KHAC;
        isCritical = true;
        tags.push({
          label: "Thiên Khắc Địa Xung",
          type: "bad",
          description: `${type} ${timeCanName} ${timeChiName} xung khắc toàn diện với tuổi.`
        });
      } else {
        score += SCORES.HINH_HAI;
        tags.push({
          label: "Thiên Can Khắc",
          type: "bad",
          description: `Can ${type} khắc Can tuổi.`
        });
      }
    } else if (isDiaXung) {
      score += SCORES.XUNG_KHAC;
      if (type === "Ngày") isCritical = true;
      tags.push({
        label: `Lục Xung (${userChiName}-${timeChiName})`,
        type: "bad",
        description: `Chi ${type} xung Chi tuổi.`
      });
    }
  } else {
    const isDiaXung = LUC_XUNG[normUserChi] === normTimeChi;
    if (isDiaXung) {
      score += SCORES.XUNG_KHAC;
      tags.push({
        label: `Lục Xung (${userChiName}-${timeChiName})`,
        type: "bad",
        description: `Chi ${type} xung Chi tuổi.`
      });
    }
  }
  const tamHopGroup = CHI_TAM_HOP_GROUPS.find((group) => group.includes(normUserChi));
  if (tamHopGroup && tamHopGroup.includes(normTimeChi) && normUserChi !== normTimeChi) {
    score += SCORES.TAM_HOP_LUC_HOP;
    tags.push({
      label: "Tam Hợp",
      type: "good",
      description: `Tam hợp cục, rất tốt.`
    });
  }
  if (LUC_HOP[normUserChi]?.partner === normTimeChi) {
    score += SCORES.TAM_HOP_LUC_HOP;
    tags.push({
      label: "Lục Hợp",
      type: "good",
      description: `Lục hợp quý nhân.`
    });
  }
  if (QUY_NHAN[userPillar.can]?.includes(normTimeChi)) {
    score += SCORES.LOC_QUY;
    if (isCritical) {
      isCritical = false;
      tags.push({ label: "Quý Nhân Giải Hung", type: "good", description: "Gặp hung hóa cát." });
    } else {
      tags.push({ label: "Thiên Ất Quý Nhân", type: "good", description: "Có quý nhân phù trợ." });
    }
  }
  if (LOC_THAN[userPillar.can] === normTimeChi) {
    score += SCORES.LOC_QUY;
    tags.push({
      label: "Lộc Thần",
      type: "good",
      description: "Lâm quan đắc lộc, tốt cho tài lộc."
    });
  }
  return { score, tags, isCritical };
};
const applyNeutralization = (activeGoodStars, activeBadStars, dayInfo, userDungThan) => {
  const badStarStates = activeBadStars.map((name) => {
    const scoreDef = STAR_SCORES[name];
    const baseScore = scoreDef ? scoreDef.base : -2;
    return {
      name,
      originalPenalty: baseScore,
      finalPenalty: baseScore,
      isRescued: false
    };
  });
  return badStarStates;
};
const evaluateHourV2 = (hourChi, hourCan, dayChi, dayCan, monthChi, userProfile, userDungThan, dayScore = 5) => {
  const CFG = SCORING_CONFIG.MICRO;
  let score = 0;
  const warnings = [];
  const bonuses = [];
  const tags = [];
  const hChiName = DATA.CHIS[hourChi];
  if (LUC_XUNG[hourChi] === dayChi) {
    score -= 10;
    warnings.push(`Nhật Phá: Giờ ${hChiName} xung ngày.`);
    tags.push("Nhật Phá");
  }
  const hourTruc = getHourTruc(dayChi, hourChi);
  if ([TRUC_ENUM.Thanh, TRUC_ENUM.Khai, TRUC_ENUM.Man, TRUC_ENUM.Dinh].includes(hourTruc)) {
    score += CFG.SCORES.TRUC_HOP;
  } else if ([TRUC_ENUM.Pha, TRUC_ENUM.Be].includes(hourTruc)) {
    score -= 2;
  }
  if (userProfile) {
    const affinityRes = evaluatePersonalAffinity(userProfile.year, hourCan, hourChi, "Giờ");
    score += affinityRes.score * CFG.WEIGHTS.AFFINITY;
    if (affinityRes.isCritical) {
      tags.push("Xung Tuổi");
      warnings.push(...affinityRes.tags.filter((t) => t.type === "bad").map((t) => t.description));
    } else {
      bonuses.push(...affinityRes.tags.filter((t) => t.type === "good").map((t) => t.label));
    }
  }
  if (userDungThan) {
    const el = CHI_NGU_HANH[hourChi];
    if (el === userDungThan.dungThan) {
      score += 3;
      bonuses.push("Giờ Dụng Thần");
    } else if (el === userDungThan.kyThan) {
      score -= 3;
      warnings.push("Giờ Kỵ Thần");
    }
  }
  const isQuyNhanHour = QUY_NHAN[dayCan]?.includes(hourChi);
  if (isQuyNhanHour) {
    score += 2;
    bonuses.push("Giờ Quý Nhân (Đại Cát)");
    tags.push("Quý Nhân");
  }
  let rating = "Bình";
  if (score >= 8) rating = "Đại Cát";
  else if (score >= 4) rating = "Cát";
  else if (score >= 0) rating = "Bình";
  else if (score >= -5) rating = "Hung";
  else rating = "Đại Hung";
  return {
    score,
    rating,
    warnings,
    bonuses,
    tags: Array.from(new Set(tags)),
    details: {
      truc: DATA.TRUCS[hourTruc],
      seasonalKill: false,
      dungThanBonus: 0
    }
  };
};
const generateDayTags = (dayInfo, chart) => {
  const tags = [];
  const trucName = dayInfo.truc;
  const trucEnum = DATA.TRUCS.indexOf(trucName);
  if ([TRUC_ENUM.Tru, TRUC_ENUM.Dinh, TRUC_ENUM.Nguy, TRUC_ENUM.Thanh, TRUC_ENUM.Khai].includes(trucEnum)) {
    tags.push({ id: "TRUC_CAT", label: `Trực ${trucName} (Tốt)`, type: "general", color: "green" });
  } else if ([TRUC_ENUM.Pha, TRUC_ENUM.Be].includes(trucEnum)) {
    tags.push({ id: "TRUC_HUNG", label: `Trực ${trucName} (Xấu)`, type: "general", color: "gray" });
  } else {
    tags.push({ id: "TRUC_BINH", label: `Trực ${trucName}`, type: "general", color: "blue" });
  }
  dayInfo.badDays.forEach((bd) => {
    const isCritical = [THAN_SAT_ENUM.SatChu, THAN_SAT_ENUM.ThuTu].includes(bd) || bd === "Dương Công Kỵ";
    tags.push({
      id: "BAD_DAY",
      label: bd,
      type: "general",
      color: isCritical ? "red" : "orange",
      description: isCritical ? "Đại hung" : "Kiêng việc lớn"
    });
  });
  const topGoodStars = ["Thiên Đức", "Nguyệt Đức", "Thiên Hỷ", "Thiên Tài", "Lộc Khố"];
  dayInfo.thanSat.cat.forEach((s) => {
    if (topGoodStars.includes(s)) {
      tags.push({ id: "CAT_TINH", label: s, type: "general", color: "green" });
    }
  });
  const categoryColors = {
    BUSINESS: "yellow",
    CONSTRUCTION: "orange",
    WEDDING: "purple",
    SPIRITUAL: "gray",
    TREATMENT: "green",
    DAILY: "blue",
    RISKY_BUSINESS: "orange",
    // Màu vàng đậm cảnh báo
    LITIGATION: "red",
    // Màu đỏ cảnh báo
    EDUCATION: "purple"
    // Màu chàm tri thức
  };
  const topActions = dayInfo.recommendations.filter((r) => r.isGood).sort((a, b) => b.score - a.score).slice(0, 3);
  if (topActions.length > 0) {
    topActions.forEach((action) => {
      tags.push({
        id: `ACT_${action.id}`,
        label: `Nên: ${action.label}`,
        type: "action",
        color: categoryColors[action.category] || "blue",
        score: action.score,
        description: action.reason
      });
    });
  } else {
    if (dayInfo.badDays.length > 0) {
      const badReason = dayInfo.badDays[0];
      tags.push({
        id: "ACT_REST",
        label: `Kiêng việc lớn`,
        type: "action",
        color: "gray",
        description: `Ngày phạm ${badReason}, nên an phận thủ thường.`
      });
    } else {
      tags.push({
        id: "ACT_NORMAL",
        label: "Ngày bình thường",
        type: "action",
        color: "blue",
        description: "Có thể làm các việc nhỏ."
      });
    }
  }
  if (["Tốt", "Hợp Tuổi"].includes(dayInfo.affinity?.status || "")) {
    tags.push({ id: "AFFINITY_GOOD", label: `Hợp tuổi ${dayInfo.affinity?.detail}`, type: "personal", color: "green" });
  } else if (["Xấu", "Đại Kỵ", "Kỵ"].includes(dayInfo.affinity?.status || "")) {
    tags.push({
      id: "AFFINITY_BAD",
      label: `Xung tuổi ${dayInfo.affinity?.detail}`,
      type: "personal",
      color: "red",
      description: dayInfo.affinity?.detail || ""
    });
  }
  const dt = dayInfo.dungThan;
  if (dt && dt.pattern) {
    tags.push({
      id: "BAZI_PATTERN",
      label: dt.pattern,
      type: "personal",
      color: "purple",
      description: dt.description
    });
  }
  return tags;
};

const getSeason = (monthChi) => {
  if ([CHI_ENUM.Dan, CHI_ENUM.Mao, CHI_ENUM.Thin].includes(monthChi)) return 1 /* XUAN */;
  if ([CHI_ENUM.Ti, CHI_ENUM.Ngo, CHI_ENUM.Mui].includes(monthChi)) return 2 /* HA */;
  if ([CHI_ENUM.Than, CHI_ENUM.Dau, CHI_ENUM.Tuat].includes(monthChi)) return 3 /* THU */;
  return 4 /* DONG */;
};
const calculateShenSha = (input) => {
  const { canDay, chiDay, chiMonth, season, lunarDay } = input;
  const catTinh = [];
  const hungTinh = [];
  const monthIdx = (chiMonth - CHI_ENUM.Dan + 12) % 12;
  let isThienXa = false;
  if (season === 1 /* XUAN */ && canDay === CAN_ENUM.Mau && chiDay === CHI_ENUM.Dan) isThienXa = true;
  if (season === 2 /* HA */ && canDay === CAN_ENUM.Giap && chiDay === CHI_ENUM.Ngo) isThienXa = true;
  if (season === 3 /* THU */ && canDay === CAN_ENUM.Mau && chiDay === CHI_ENUM.Than) isThienXa = true;
  if (season === 4 /* DONG */ && canDay === CAN_ENUM.Giap && chiDay === CHI_ENUM.Ty) isThienXa = true;
  if (isThienXa) catTinh.push(THAN_SAT_ENUM.ThienXa);
  let isThienDuc = false;
  switch (chiMonth) {
    case CHI_ENUM.Ty:
      if (chiDay === CHI_ENUM.Ti) isThienDuc = true;
      break;
    // Ty(Rat) -> Ti(Snake)
    case CHI_ENUM.Suu:
      if (canDay === CAN_ENUM.Canh) isThienDuc = true;
      break;
    case CHI_ENUM.Dan:
      if (canDay === CAN_ENUM.Dinh) isThienDuc = true;
      break;
    case CHI_ENUM.Mao:
      if (chiDay === CHI_ENUM.Than) isThienDuc = true;
      break;
    case CHI_ENUM.Thin:
      if (canDay === CAN_ENUM.Nham) isThienDuc = true;
      break;
    case CHI_ENUM.Ti:
      if (canDay === CAN_ENUM.Tan) isThienDuc = true;
      break;
    // Ti(Snake) -> Tan
    case CHI_ENUM.Ngo:
      if (chiDay === CHI_ENUM.Hoi) isThienDuc = true;
      break;
    case CHI_ENUM.Mui:
      if (canDay === CAN_ENUM.Giap) isThienDuc = true;
      break;
    case CHI_ENUM.Than:
      if (canDay === CAN_ENUM.Quy) isThienDuc = true;
      break;
    case CHI_ENUM.Dau:
      if (chiDay === CHI_ENUM.Dan) isThienDuc = true;
      break;
    case CHI_ENUM.Tuat:
      if (canDay === CAN_ENUM.Binh) isThienDuc = true;
      break;
    case CHI_ENUM.Hoi:
      if (canDay === CAN_ENUM.At) isThienDuc = true;
      break;
  }
  if (isThienDuc) catTinh.push(THAN_SAT_ENUM.ThienDuc);
  let isNguyetDuc = false;
  if ([CHI_ENUM.Dan, CHI_ENUM.Ngo, CHI_ENUM.Tuat].includes(chiMonth) && canDay === CAN_ENUM.Binh) isNguyetDuc = true;
  if ([CHI_ENUM.Than, CHI_ENUM.Ty, CHI_ENUM.Thin].includes(chiMonth) && canDay === CAN_ENUM.Nham) isNguyetDuc = true;
  if ([CHI_ENUM.Hoi, CHI_ENUM.Mao, CHI_ENUM.Mui].includes(chiMonth) && canDay === CAN_ENUM.Giap) isNguyetDuc = true;
  if ([CHI_ENUM.Ti, CHI_ENUM.Dau, CHI_ENUM.Suu].includes(chiMonth) && canDay === CAN_ENUM.Canh) isNguyetDuc = true;
  if (isNguyetDuc) catTinh.push(THAN_SAT_ENUM.NguyetDuc);
  const thienQuyMap = {
    [CAN_ENUM.Giap]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
    [CAN_ENUM.Mau]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
    [CAN_ENUM.Canh]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
    [CAN_ENUM.At]: [CHI_ENUM.Ty, CHI_ENUM.Than],
    [CAN_ENUM.Ky]: [CHI_ENUM.Ty, CHI_ENUM.Than],
    [CAN_ENUM.Binh]: [CHI_ENUM.Hoi, CHI_ENUM.Dau],
    [CAN_ENUM.Dinh]: [CHI_ENUM.Hoi, CHI_ENUM.Dau],
    [CAN_ENUM.Nham]: [CHI_ENUM.Ti, CHI_ENUM.Mao],
    [CAN_ENUM.Quy]: [CHI_ENUM.Ti, CHI_ENUM.Mao],
    [CAN_ENUM.Tan]: [CHI_ENUM.Ngo, CHI_ENUM.Dan]
  };
  if (thienQuyMap[canDay]?.includes(chiDay)) catTinh.push(THAN_SAT_ENUM.ThienQuy);
  const ichHauMap = [
    CHI_ENUM.Ty,
    CHI_ENUM.Ngo,
    CHI_ENUM.Suu,
    CHI_ENUM.Mui,
    CHI_ENUM.Dan,
    CHI_ENUM.Than,
    CHI_ENUM.Mao,
    CHI_ENUM.Dau,
    CHI_ENUM.Thin,
    CHI_ENUM.Tuat,
    CHI_ENUM.Ti,
    CHI_ENUM.Hoi
  ];
  if (ichHauMap[monthIdx] === chiDay) catTinh.push(THAN_SAT_ENUM.IchHau);
  let maTinh = -1;
  if ([CHI_ENUM.Dan, CHI_ENUM.Ngo, CHI_ENUM.Tuat].includes(chiMonth)) maTinh = CHI_ENUM.Than;
  if ([CHI_ENUM.Than, CHI_ENUM.Ty, CHI_ENUM.Thin].includes(chiMonth)) maTinh = CHI_ENUM.Dan;
  if ([CHI_ENUM.Ti, CHI_ENUM.Dau, CHI_ENUM.Suu].includes(chiMonth)) maTinh = CHI_ENUM.Hoi;
  if ([CHI_ENUM.Hoi, CHI_ENUM.Mao, CHI_ENUM.Mui].includes(chiMonth)) maTinh = CHI_ENUM.Ti;
  if (chiDay === maTinh) catTinh.push(THAN_SAT_ENUM.ThienMa);
  const thienHyCung = (chiMonth + 8) % 12;
  if (chiDay === thienHyCung) catTinh.push(THAN_SAT_ENUM.ThienHy);
  const sinhKhiCung = (chiMonth - 1 + 12) % 12;
  if (chiDay === sinhKhiCung) catTinh.push(THAN_SAT_ENUM.SinhKhi);
  const thienLocMap = {
    [CAN_ENUM.Giap]: CHI_ENUM.Dan,
    [CAN_ENUM.At]: CHI_ENUM.Mao,
    [CAN_ENUM.Binh]: CHI_ENUM.Ti,
    [CAN_ENUM.Mau]: CHI_ENUM.Ti,
    // Ti (Tỵ)
    [CAN_ENUM.Dinh]: CHI_ENUM.Ngo,
    [CAN_ENUM.Ky]: CHI_ENUM.Ngo,
    [CAN_ENUM.Canh]: CHI_ENUM.Than,
    [CAN_ENUM.Tan]: CHI_ENUM.Dau,
    [CAN_ENUM.Nham]: CHI_ENUM.Hoi,
    [CAN_ENUM.Quy]: CHI_ENUM.Ty
    // Ty (Tý)
  };
  if (thienLocMap[canDay] === chiDay) catTinh.push(THAN_SAT_ENUM.ThienLoc);
  const quyNhanMap = {
    [CAN_ENUM.Giap]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
    [CAN_ENUM.Mau]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
    [CAN_ENUM.Canh]: [CHI_ENUM.Suu, CHI_ENUM.Mui],
    [CAN_ENUM.At]: [CHI_ENUM.Ty, CHI_ENUM.Than],
    // Ty (Tý)
    [CAN_ENUM.Ky]: [CHI_ENUM.Ty, CHI_ENUM.Than],
    [CAN_ENUM.Binh]: [CHI_ENUM.Hoi, CHI_ENUM.Dau],
    [CAN_ENUM.Dinh]: [CHI_ENUM.Hoi, CHI_ENUM.Dau],
    [CAN_ENUM.Nham]: [CHI_ENUM.Ti, CHI_ENUM.Mao],
    // Ti (Tỵ)
    [CAN_ENUM.Quy]: [CHI_ENUM.Ti, CHI_ENUM.Mao],
    [CAN_ENUM.Tan]: [CHI_ENUM.Ngo, CHI_ENUM.Dan]
  };
  if (quyNhanMap[canDay]?.includes(chiDay)) catTinh.push(THAN_SAT_ENUM.ThienAtQuyNhan);
  const nguyetKhongMap = {
    [CHI_ENUM.Dan]: CAN_ENUM.Nham,
    [CHI_ENUM.Mao]: CAN_ENUM.Canh,
    [CHI_ENUM.Thin]: CAN_ENUM.Binh,
    [CHI_ENUM.Ty]: CAN_ENUM.Giap,
    [CHI_ENUM.Ngo]: CAN_ENUM.Nham,
    [CHI_ENUM.Mui]: CAN_ENUM.Canh,
    [CHI_ENUM.Than]: CAN_ENUM.Binh,
    [CHI_ENUM.Dau]: CAN_ENUM.Giap,
    [CHI_ENUM.Tuat]: CAN_ENUM.Nham,
    [CHI_ENUM.Hoi]: CAN_ENUM.Canh,
    [CHI_ENUM.Ti]: CAN_ENUM.Binh,
    [CHI_ENUM.Suu]: CAN_ENUM.Giap
  };
  if (nguyetKhongMap[chiMonth] === canDay) catTinh.push(THAN_SAT_ENUM.NguyetKhong);
  const thienPhuMap = {
    [CHI_ENUM.Dan]: CHI_ENUM.Than,
    [CHI_ENUM.Mao]: CHI_ENUM.Dau,
    [CHI_ENUM.Thin]: CHI_ENUM.Thin,
    [CHI_ENUM.Ty]: CHI_ENUM.Ti,
    [CHI_ENUM.Ngo]: CHI_ENUM.Ngo,
    [CHI_ENUM.Mui]: CHI_ENUM.Mui,
    [CHI_ENUM.Than]: CHI_ENUM.Dan,
    [CHI_ENUM.Dau]: CHI_ENUM.Dau,
    [CHI_ENUM.Tuat]: CHI_ENUM.Hoi,
    [CHI_ENUM.Hoi]: CHI_ENUM.Ty,
    // Ty (Tý)
    [CHI_ENUM.Ti]: CHI_ENUM.Ngo,
    [CHI_ENUM.Suu]: CHI_ENUM.Mui
  };
  if (thienPhuMap[chiMonth] === chiDay) catTinh.push(THAN_SAT_ENUM.ThienPhu);
  const tdTargetMap = {
    [CHI_ENUM.Ty]: CHI_ENUM.Ti,
    // Month Ty (Rat) -> Ti (Snake)
    [CHI_ENUM.Suu]: CAN_ENUM.Canh,
    [CHI_ENUM.Dan]: CAN_ENUM.Dinh,
    [CHI_ENUM.Mao]: CHI_ENUM.Than,
    [CHI_ENUM.Thin]: CAN_ENUM.Nham,
    [CHI_ENUM.Ti]: CAN_ENUM.Tan,
    // Month Ti (Snake)
    [CHI_ENUM.Ngo]: CHI_ENUM.Hoi,
    [CHI_ENUM.Mui]: CAN_ENUM.Giap,
    [CHI_ENUM.Than]: CAN_ENUM.Quy,
    [CHI_ENUM.Dau]: CHI_ENUM.Dan,
    [CHI_ENUM.Tuat]: CAN_ENUM.Binh,
    [CHI_ENUM.Hoi]: CAN_ENUM.At
  };
  const tdTarget = tdTargetMap[chiMonth];
  if (tdTarget !== void 0) {
    if ([CHI_ENUM.Ty, CHI_ENUM.Mao, CHI_ENUM.Ngo, CHI_ENUM.Dau].includes(chiMonth)) {
      const lucHopMap = {
        [CHI_ENUM.Ty]: CHI_ENUM.Suu,
        [CHI_ENUM.Suu]: CHI_ENUM.Ty,
        [CHI_ENUM.Dan]: CHI_ENUM.Hoi,
        [CHI_ENUM.Hoi]: CHI_ENUM.Dan,
        [CHI_ENUM.Mao]: CHI_ENUM.Tuat,
        [CHI_ENUM.Tuat]: CHI_ENUM.Mao,
        [CHI_ENUM.Thin]: CHI_ENUM.Dau,
        [CHI_ENUM.Dau]: CHI_ENUM.Thin,
        [CHI_ENUM.Ti]: CHI_ENUM.Than,
        [CHI_ENUM.Than]: CHI_ENUM.Ti,
        [CHI_ENUM.Ngo]: CHI_ENUM.Mui,
        [CHI_ENUM.Mui]: CHI_ENUM.Ngo
      };
      if (lucHopMap[tdTarget] === chiDay) catTinh.push(THAN_SAT_ENUM.ThienDucHop);
    } else {
      const canHopMap = {
        [CAN_ENUM.Giap]: CAN_ENUM.Ky,
        [CAN_ENUM.Ky]: CAN_ENUM.Giap,
        [CAN_ENUM.At]: CAN_ENUM.Canh,
        [CAN_ENUM.Canh]: CAN_ENUM.At,
        [CAN_ENUM.Binh]: CAN_ENUM.Tan,
        [CAN_ENUM.Tan]: CAN_ENUM.Binh,
        [CAN_ENUM.Dinh]: CAN_ENUM.Nham,
        [CAN_ENUM.Nham]: CAN_ENUM.Dinh,
        [CAN_ENUM.Mau]: CAN_ENUM.Quy,
        [CAN_ENUM.Quy]: CAN_ENUM.Mau
      };
      if (canHopMap[tdTarget] === canDay) catTinh.push(THAN_SAT_ENUM.ThienDucHop);
    }
  }
  const ndTargetMap = {
    [CHI_ENUM.Dan]: CAN_ENUM.Binh,
    [CHI_ENUM.Ngo]: CAN_ENUM.Binh,
    [CHI_ENUM.Tuat]: CAN_ENUM.Binh,
    [CHI_ENUM.Than]: CAN_ENUM.Nham,
    [CHI_ENUM.Ty]: CAN_ENUM.Nham,
    [CHI_ENUM.Thin]: CAN_ENUM.Nham,
    [CHI_ENUM.Hoi]: CAN_ENUM.Giap,
    [CHI_ENUM.Mao]: CAN_ENUM.Giap,
    [CHI_ENUM.Mui]: CAN_ENUM.Giap,
    [CHI_ENUM.Ti]: CAN_ENUM.Canh,
    [CHI_ENUM.Dau]: CAN_ENUM.Canh,
    [CHI_ENUM.Suu]: CAN_ENUM.Canh
  };
  const ndTarget = ndTargetMap[chiMonth];
  if (ndTarget !== void 0) {
    const canHopMap = {
      [CAN_ENUM.Giap]: CAN_ENUM.Ky,
      [CAN_ENUM.Ky]: CAN_ENUM.Giap,
      [CAN_ENUM.At]: CAN_ENUM.Canh,
      [CAN_ENUM.Canh]: CAN_ENUM.At,
      [CAN_ENUM.Binh]: CAN_ENUM.Tan,
      [CAN_ENUM.Tan]: CAN_ENUM.Binh,
      [CAN_ENUM.Dinh]: CAN_ENUM.Nham,
      [CAN_ENUM.Nham]: CAN_ENUM.Dinh,
      [CAN_ENUM.Mau]: CAN_ENUM.Quy,
      [CAN_ENUM.Quy]: CAN_ENUM.Mau
    };
    if (canHopMap[ndTarget] === canDay) catTinh.push(THAN_SAT_ENUM.NguyetDucHop);
  }
  const satChuMap = [CHI_ENUM.Ti, CHI_ENUM.Ty, CHI_ENUM.Mui, CHI_ENUM.Mao, CHI_ENUM.Than, CHI_ENUM.Tuat, CHI_ENUM.Hoi, CHI_ENUM.Suu, CHI_ENUM.Ngo, CHI_ENUM.Dau, CHI_ENUM.Dan, CHI_ENUM.Thin];
  if (satChuMap[monthIdx] === chiDay) hungTinh.push(THAN_SAT_ENUM.SatChu);
  const thoTuMap = [CHI_ENUM.Tuat, CHI_ENUM.Thin, CHI_ENUM.Hoi, CHI_ENUM.Ti, CHI_ENUM.Ty, CHI_ENUM.Ngo, CHI_ENUM.Suu, CHI_ENUM.Mui, CHI_ENUM.Dan, CHI_ENUM.Than, CHI_ENUM.Mao, CHI_ENUM.Dau];
  if (thoTuMap[monthIdx] === chiDay) hungTinh.push(THAN_SAT_ENUM.ThuTu);
  const nguyetYemMap = [CHI_ENUM.Tuat, CHI_ENUM.Dau, CHI_ENUM.Than, CHI_ENUM.Mui, CHI_ENUM.Ngo, CHI_ENUM.Ti, CHI_ENUM.Thin, CHI_ENUM.Mao, CHI_ENUM.Dan, CHI_ENUM.Suu, CHI_ENUM.Ty, CHI_ENUM.Hoi];
  if (nguyetYemMap[monthIdx] === chiDay) hungTinh.push(THAN_SAT_ENUM.NguyetYem);
  const thienCuongMap = [CHI_ENUM.Ti, CHI_ENUM.Ty, CHI_ENUM.Mui, CHI_ENUM.Mao, CHI_ENUM.Than, CHI_ENUM.Tuat, CHI_ENUM.Hoi, CHI_ENUM.Suu, CHI_ENUM.Ngo, CHI_ENUM.Dau, CHI_ENUM.Dan, CHI_ENUM.Thin];
  if (thienCuongMap[monthIdx] === chiDay) hungTinh.push(THAN_SAT_ENUM.ThienCuong);
  if (season === 1 /* XUAN */ && chiDay === CHI_ENUM.Than) hungTinh.push(THAN_SAT_ENUM.HoangVu);
  if (season === 2 /* HA */ && chiDay === CHI_ENUM.Dan) hungTinh.push(THAN_SAT_ENUM.HoangVu);
  if (season === 3 /* THU */ && chiDay === CHI_ENUM.Thin) hungTinh.push(THAN_SAT_ENUM.HoangVu);
  if (season === 4 /* DONG */ && chiDay === CHI_ENUM.Dan) hungTinh.push(THAN_SAT_ENUM.HoangVu);
  const thoOnCung = (chiMonth + 2) % 12;
  if (chiDay === thoOnCung) hungTinh.push(THAN_SAT_ENUM.ThoOn);
  const thienTacMap = [
    CHI_ENUM.Thin,
    CHI_ENUM.Dau,
    CHI_ENUM.Dan,
    CHI_ENUM.Mui,
    CHI_ENUM.Ty,
    CHI_ENUM.Ti,
    CHI_ENUM.Tuat,
    CHI_ENUM.Mao,
    CHI_ENUM.Than,
    CHI_ENUM.Suu,
    CHI_ENUM.Ngo,
    CHI_ENUM.Hoi
  ];
  if (thienTacMap[monthIdx] === chiDay) hungTinh.push(THAN_SAT_ENUM.ThienTac);
  const tieuHongSaMap = [
    CHI_ENUM.Ti,
    CHI_ENUM.Dau,
    CHI_ENUM.Suu,
    CHI_ENUM.Ti,
    CHI_ENUM.Dau,
    CHI_ENUM.Suu,
    CHI_ENUM.Ti,
    CHI_ENUM.Dau,
    CHI_ENUM.Suu,
    CHI_ENUM.Ti,
    CHI_ENUM.Dau,
    CHI_ENUM.Suu
  ];
  if (tieuHongSaMap[monthIdx] === chiDay) hungTinh.push(THAN_SAT_ENUM.TieuHongSa);
  const nguyetPhaCung = (chiMonth + 6) % 12;
  if (chiDay === nguyetPhaCung) hungTinh.push(THAN_SAT_ENUM.NguyetPha);
  const diaPhaCung = (chiMonth + 5) % 12;
  if (chiDay === diaPhaCung) hungTinh.push(THAN_SAT_ENUM.DiaPha);
  const thoPhuMap = {
    [CHI_ENUM.Dan]: [CHI_ENUM.Ti, CHI_ENUM.Hoi],
    [CHI_ENUM.Mao]: [CHI_ENUM.Suu, CHI_ENUM.Ty],
    [CHI_ENUM.Thin]: [CHI_ENUM.Dan, CHI_ENUM.Ngo],
    [CHI_ENUM.Ti]: [CHI_ENUM.Mao, CHI_ENUM.Mui],
    [CHI_ENUM.Ngo]: [CHI_ENUM.Thin, CHI_ENUM.Than],
    [CHI_ENUM.Mui]: [CHI_ENUM.Ty, CHI_ENUM.Dau],
    [CHI_ENUM.Than]: [CHI_ENUM.Ngo, CHI_ENUM.Tuat],
    [CHI_ENUM.Dau]: [CHI_ENUM.Mui, CHI_ENUM.Hoi],
    [CHI_ENUM.Tuat]: [CHI_ENUM.Than, CHI_ENUM.Ti],
    [CHI_ENUM.Hoi]: [CHI_ENUM.Dau, CHI_ENUM.Suu],
    [CHI_ENUM.Ty]: [CHI_ENUM.Tuat, CHI_ENUM.Dan],
    [CHI_ENUM.Suu]: [CHI_ENUM.Hoi, CHI_ENUM.Mao]
  };
  if (thoPhuMap[chiMonth]?.includes(chiDay)) hungTinh.push(THAN_SAT_ENUM.ThoPhu);
  if (thoPhuMap[chiMonth]?.includes(chiDay)) hungTinh.push(THAN_SAT_ENUM.ThoCam);
  const duongCongKyDates = [13, 11, 9, 7, 5, 3, 8, 27, 25, 23, 21, 19];
  if (duongCongKyDates[monthIdx] === lunarDay) hungTinh.push(THAN_SAT_ENUM.DuongCongKy);
  if ([3, 7, 13, 18, 22, 27].includes(lunarDay)) hungTinh.push(THAN_SAT_ENUM.TamNuong);
  if ([5, 14, 23].includes(lunarDay)) hungTinh.push(THAN_SAT_ENUM.NguyetKy);
  const checkTrungTang = () => {
    if (chiMonth === CHI_ENUM.Dan && [CAN_ENUM.Giap, CAN_ENUM.Canh].includes(canDay)) return true;
    if (chiMonth === CHI_ENUM.Mao && [CAN_ENUM.At, CAN_ENUM.Tan].includes(canDay)) return true;
    return false;
  };
  if (checkTrungTang()) hungTinh.push(THAN_SAT_ENUM.TrungTang);
  const daiHaoCung = (chiMonth + 4) % 12;
  if (chiDay === daiHaoCung) hungTinh.push(THAN_SAT_ENUM.DaiHao);
  return { catTinh, hungTinh };
};

const calculateDayAttributes = (dateInput, lat = 21.0285, long = 105.8333) => {
  const date = dayjs(dateInput).toDate();
  const lunaInfo = LocalLunarCalendar.getLunarDetails(date, lat, long);
  const monthChiIdx = DATA.CHIS.indexOf(lunaInfo.stcc.mcc[1]);
  const dayCanIdx = DATA.CANS.indexOf(lunaInfo.dcc[0]);
  const dayChiIdx = DATA.CHIS.indexOf(lunaInfo.dcc[1]);
  if (monthChiIdx === -1 || dayCanIdx === -1 || dayChiIdx === -1) {
    console.error("Invalid Can/Chi from Lunar Calendar", lunaInfo);
  }
  const monthChiEnum = monthChiIdx === -1 ? 0 : monthChiIdx;
  const dayCanEnum = dayCanIdx === -1 ? 0 : dayCanIdx;
  const dayChiEnum = dayChiIdx === -1 ? 0 : dayChiIdx;
  const lunarMonth = lunaInfo.m;
  const lunarDay = lunaInfo.d;
  const trucEnum = monthChiEnum !== void 0 && dayChiEnum !== void 0 ? (dayChiEnum - monthChiEnum + 12) % 12 : TRUC_ENUM.Kien;
  const trucName = DATA.TRUCS[trucEnum];
  const sao = get28Tu(date);
  const season = getSeason(monthChiEnum);
  const shenShaResult = calculateShenSha({
    canDay: dayCanEnum,
    chiDay: dayChiEnum,
    chiMonth: monthChiEnum,
    season,
    lunarDay
  });
  const thanSat = {
    cat: shenShaResult.catTinh,
    hung: shenShaResult.hungTinh
  };
  const criticalBadStars = [
    THAN_SAT_ENUM.SatChu,
    THAN_SAT_ENUM.ThuTu,
    THAN_SAT_ENUM.ThienCuong,
    THAN_SAT_ENUM.DuongCongKy,
    THAN_SAT_ENUM.TamNuong,
    THAN_SAT_ENUM.NguyetKy
  ];
  const badDays = shenShaResult.hungTinh.filter((s) => criticalBadStars.includes(s));
  const hoangDaoHoursIndices = getHoangDaoHours(dayChiEnum);
  const hoangDaoHoursNames = hoangDaoHoursIndices.map((i) => DATA.CHIS[i]);
  const dayOfficers = get12ZodiacOfficers(monthChiEnum);
  const zodiacOfficer = dayOfficers.find((o) => o.branchIndex === dayChiEnum) || dayOfficers[0];
  const clashingAges = getClashingAges(dayCanEnum, dayChiEnum);
  const compatibleAges = getCompatibleAges(dayCanEnum, dayChiEnum);
  return {
    date,
    lunaInfo,
    monthChiEnum,
    dayCanEnum,
    dayChiEnum,
    lunarMonth,
    lunarDay,
    trucEnum,
    trucName,
    sao,
    thanSat,
    badDays,
    hoangDaoHoursIndices,
    hoangDaoHoursNames,
    zodiacOfficer,
    clashingAges,
    compatibleAges
  };
};
const processUserProfile = (latOrProfile, lon, userDob, userGender) => {
  let lat = 21.0285;
  let long = 105.8333;
  let userProfile = void 0;
  if (typeof latOrProfile === "object") {
    userProfile = latOrProfile;
  } else if (typeof latOrProfile === "number") {
    lat = latOrProfile;
    long = lon || 105.8333;
    if (userDob) {
      userProfile = {
        year: userDob.getFullYear(),
        month: userDob.getMonth() + 1,
        day: userDob.getDate(),
        hour: userDob.getHours(),
        minute: userDob.getMinutes(),
        gender: userGender || 1
      };
    }
  }
  if (!userProfile) return void 0;
  const bornMoment = dayjs(new Date(userProfile.year, userProfile.month - 1, userProfile.day, userProfile.hour, userProfile.minute || 0));
  const bornLat = userProfile.lat || lat;
  const bornLon = userProfile.lon || long;
  const lunaBorn = LocalLunarCalendar.getLunarDetails(bornMoment.toDate(), bornLat, bornLon);
  const baziBorn = lunaBorn.solar.trueSolarBazi;
  const toCan = (s) => Math.max(0, DATA.CANS.indexOf(s));
  const toChi = (s) => Math.max(0, DATA.CHIS.indexOf(s));
  let baziChart;
  if (baziBorn) {
    baziChart = {
      yearCan: toCan(baziBorn.details.yearCan),
      yearChi: toChi(baziBorn.details.yearChi),
      monthCan: toCan(baziBorn.details.monthCan),
      monthChi: toChi(baziBorn.details.monthChi),
      dayCan: toCan(baziBorn.details.dayCan),
      dayChi: toChi(baziBorn.details.dayChi),
      hourCan: toCan(baziBorn.details.hourCan),
      hourChi: toChi(baziBorn.details.hourChi)
    };
  } else {
    const hIdx = lunaBorn.h;
    baziChart = {
      yearCan: toCan(lunaBorn.stcc.ycc[0]),
      yearChi: toChi(lunaBorn.stcc.ycc[1]),
      monthCan: toCan(lunaBorn.stcc.mcc[0]),
      monthChi: toChi(lunaBorn.stcc.mcc[1]),
      dayCan: toCan(lunaBorn.dcc[0]),
      dayChi: toChi(lunaBorn.dcc[1]),
      hourCan: toCan(lunaBorn.h12cc[hIdx][0]),
      hourChi: toChi(lunaBorn.h12cc[hIdx][1])
    };
  }
  const dungThan = determineDungThan(baziChart);
  if (dungThan && !dungThan.chart) {
    dungThan.chart = baziChart;
  }
  return { profile: userProfile, baziChart, dungThan };
};
const scoreDay = (attrs, userContext, userYearChi) => {
  const { dayCanEnum, dayChiEnum, trucEnum, sao, thanSat, badDays } = attrs;
  const userDungThan = userContext?.dungThan;
  const userProfile = userContext?.profile;
  let dayScore = SCORING_CONFIG.FUNNEL.BASE_SCORE;
  const processedBadStars = applyNeutralization(
    thanSat.cat,
    [...badDays, ...thanSat.hung]);
  let totalBadScore = 0;
  const rescueLogs = [];
  processedBadStars.forEach((s) => {
    totalBadScore += s.finalPenalty;
  });
  dayScore += totalBadScore;
  const trucScoreDef = TRUC_SCORES[trucEnum];
  if (trucScoreDef) dayScore += trucScoreDef.base;
  if (attrs.zodiacOfficer) {
    if (attrs.zodiacOfficer.isHoangDao) {
      dayScore += 1.5;
    } else {
      dayScore -= 1;
    }
  }
  const tuScoreDef = TU_SCORES[sao];
  if (tuScoreDef) dayScore += tuScoreDef.base;
  if (thanSat.cat.length > 0) {
    thanSat.cat.forEach((star) => {
      const scoreDef = STAR_SCORES[star];
      const bonus = scoreDef ? scoreDef.base : 1;
      dayScore += bonus;
    });
  }
  let isCriticalBadDay = false;
  const allBadFactors = [...badDays, ...thanSat.hung];
  if (allBadFactors.some((bd) => CRITICAL_STARS.includes(bd))) {
    isCriticalBadDay = true;
  }
  let affinityData = void 0;
  if (userProfile) {
    const bornMoment = dayjs(new Date(userProfile.year, userProfile.month - 1, userProfile.day, userProfile.hour, userProfile.minute || 0));
    const bornLat = userProfile.lat || 21.0285;
    const bornLon = userProfile.lon || 105.8333;
    const lunaBorn = LocalLunarCalendar.getLunarDetails(bornMoment.toDate(), bornLat, bornLon);
    const userLunarYear = lunaBorn.y;
    const userYearCanName = lunaBorn.stcc.ycc[0];
    const userYearChiName = lunaBorn.stcc.ycc[1];
    const personalAffinity = evaluatePersonalAffinity(userLunarYear, dayCanEnum, dayChiEnum, "Ngày");
    const sortedTags = [...personalAffinity.tags].sort((a, b) => {
      const isPositive = personalAffinity.score >= 0;
      if (isPositive) {
        if (a.type === "good" && b.type !== "good") return -1;
        if (a.type !== "good" && b.type === "good") return 1;
      } else {
        if (a.type === "bad" && b.type !== "bad") return -1;
        if (a.type !== "bad" && b.type === "bad") return 1;
      }
      return 0;
    });
    affinityData = {
      score: personalAffinity.score,
      status: personalAffinity.isCritical ? "Đại Kỵ" : personalAffinity.score > 0 ? "Hợp Tuổi" : "Bình Hòa",
      detail: sortedTags.map((t) => t.label).join(", "),
      userYear: `${userLunarYear} (${userYearCanName} ${userYearChiName})`,
      explanations: sortedTags.map((t) => t.description),
      tags: sortedTags,
      isCritical: personalAffinity.isCritical
    };
    if (personalAffinity.isCritical) {
      isCriticalBadDay = true;
    }
    if (userDungThan) {
      const dayElement = CAN_NGU_HANH[dayCanEnum];
      const dayChiElement = CHI_NGU_HANH[dayChiEnum];
      if (dayElement === userDungThan.dungThan || dayChiElement === userDungThan.dungThan) {
        dayScore += SCORING_CONFIG.MACRO.SCORES.DUNG_THAN.IS_DUNG_THAN;
      }
    }
  } else if (userYearChi) {
    affinityData = {
      score: 0,
      status: "Tham khảo",
      detail: "Chưa nhập đầy đủ ngày sinh",
      userYear: userYearChi,
      isCritical: false
    };
  }
  if (tuScoreDef && tuScoreDef.type === "bad") {
    if (dayScore > 7) dayScore = 7;
  }
  let dayQuality = "NEUTRAL";
  if (isCriticalBadDay || dayScore <= 4) {
    dayQuality = "BAD";
  } else if (dayScore >= 8 || attrs.zodiacOfficer?.isHoangDao) {
    dayQuality = "GOOD";
  }
  const getFinalAgeScore = (quality, rawEngineScore, type) => {
    let displayPoints = 0;
    if (type === "CLASH") {
      if (rawEngineScore >= 100) displayPoints = -2;
      else if (rawEngineScore >= 60) displayPoints = -1.5;
      else if (rawEngineScore >= 40) displayPoints = -1;
      else displayPoints = -0.5;
    } else {
      if (rawEngineScore >= 80) displayPoints = 1.5;
      else if (rawEngineScore >= 60) displayPoints = 1.2;
      else if (rawEngineScore >= 40) displayPoints = 1;
      else if (rawEngineScore >= 20) displayPoints = 0.8;
      else displayPoints = 0.5;
    }
    if (quality === "BAD") {
      if (type === "HARMONY") return parseFloat((displayPoints * 0.5).toFixed(1));
      if (type === "CLASH") return parseFloat((displayPoints * 1.5).toFixed(1));
    }
    if (quality === "GOOD") {
      if (type === "HARMONY") return parseFloat((displayPoints * 1.5).toFixed(1));
      if (type === "CLASH") return parseFloat((displayPoints * 0.5).toFixed(1));
    }
    return displayPoints;
  };
  attrs.clashingAges.forEach((age) => {
    age.effectiveScore = getFinalAgeScore(dayQuality, age.score, "CLASH");
  });
  attrs.compatibleAges.forEach((age) => {
    age.effectiveScore = getFinalAgeScore(dayQuality, age.score, "HARMONY");
  });
  const clashesToRemove = [];
  const harmoniesToRemove = [];
  attrs.compatibleAges.forEach((harmony, hIdx) => {
    const cIdx = attrs.clashingAges.findIndex((c) => c.can === harmony.can && c.chi === harmony.chi);
    if (cIdx !== -1) {
      const clash = attrs.clashingAges[cIdx];
      const harmonyScore = harmony.effectiveScore || 0;
      const clashScore = clash.effectiveScore || 0;
      const netScore = harmonyScore + clashScore;
      if (netScore > 0) {
        harmony.effectiveScore = parseFloat(netScore.toFixed(1));
        harmony.reasons.push(...clash.reasons);
        clashesToRemove.push(cIdx);
      } else if (netScore < 0) {
        clash.effectiveScore = parseFloat(netScore.toFixed(1));
        clash.reasons.push(...harmony.reasons);
        harmoniesToRemove.push(hIdx);
      } else {
        clashesToRemove.push(cIdx);
        harmoniesToRemove.push(hIdx);
      }
    }
  });
  clashesToRemove.sort((a, b) => b - a).forEach((idx) => attrs.clashingAges.splice(idx, 1));
  harmoniesToRemove.sort((a, b) => b - a).forEach((idx) => attrs.compatibleAges.splice(idx, 1));
  if (userContext && userContext.baziChart) {
    const userYearCan = userContext.baziChart.yearCan;
    const userYearChi2 = userContext.baziChart.yearChi;
    const userClash = attrs.clashingAges.find((c) => c.can === userYearCan && c.chi === userYearChi2);
    if (userClash && userClash.effectiveScore !== void 0) {
      dayScore += userClash.effectiveScore;
      rescueLogs.push(`Tuổi Xung (${userClash.reasons.join(", ")}): ${userClash.effectiveScore}đ`);
    }
    const userHarmony = attrs.compatibleAges.find((c) => c.can === userYearCan && c.chi === userYearChi2);
    if (userHarmony && userHarmony.effectiveScore !== void 0) {
      dayScore += userHarmony.effectiveScore;
      rescueLogs.push(`Tuổi Hợp (${userHarmony.reasons.join(", ")}): +${userHarmony.effectiveScore}đ`);
    }
  }
  if (badDays.some((d) => [THAN_SAT_ENUM.SatChu, THAN_SAT_ENUM.ThuTu, THAN_SAT_ENUM.DuongCongKy].includes(d))) {
    dayScore = Math.min(dayScore, 2);
    dayScore = Math.max(dayScore, 0);
  } else {
    dayScore = Math.max(dayScore, 0);
    dayScore = Math.min(dayScore, 10);
  }
  return {
    score: dayScore,
    affinityData,
    isCriticalBadDay,
    processedBadStars,
    rescueLogs,
    userDungThan
  };
};

const generateAndScoreHours = (dayAttrs, dayScore, isCriticalBadDay, userContext) => {
  const { dayCanEnum, dayChiEnum, monthChiEnum, lunarMonth, lunarDay } = dayAttrs;
  const userProfile = userContext?.profile;
  const userDungThan = userContext?.dungThan;
  const hourEvaluations = [];
  const zodiacOfficers = get12ZodiacOfficers(dayChiEnum);
  for (let h = 0; h < 12; h++) {
    const hChiEnum = h;
    const hourCanIdx = calculateHourCan(dayCanEnum, h);
    const hCanEnum = hourCanIdx;
    const isHD = isHoangDaoHour(dayChiEnum, h);
    const v2Result = evaluateHourV2(
      hChiEnum,
      hCanEnum,
      dayChiEnum,
      dayCanEnum,
      monthChiEnum,
      userProfile,
      userDungThan,
      5
      // Pass neutral day score to prevent double dipping in v2Result logic
    );
    let rawHourScore = v2Result.score;
    if (isHD) rawHourScore += SCORING_CONFIG.MICRO.SCORES.HOANG_DAO;
    const dayLucDieuIdx = (lunarMonth + lunarDay - 2) % 6;
    const hourLucDieuIdx = ((dayLucDieuIdx + h) % 6 + 6) % 6;
    const hourLucDieu = hourLucDieuIdx;
    if ([LUC_DIEU_ENUM.DaiAn, LUC_DIEU_ENUM.TocHy, LUC_DIEU_ENUM.TieuCat].includes(hourLucDieu)) {
      rawHourScore += SCORING_CONFIG.MICRO.SCORES.LUC_DIEU.GOOD;
    } else if ([LUC_DIEU_ENUM.KhongVong, LUC_DIEU_ENUM.XichKhau].includes(hourLucDieu)) {
      rawHourScore += SCORING_CONFIG.MICRO.SCORES.LUC_DIEU.BAD;
    }
    const normalizedHourScore = Math.max(0, Math.min(10, rawHourScore));
    let dayWeight = SCORING_CONFIG.FUNNEL.DAY_WEIGHT;
    let hourWeight = SCORING_CONFIG.FUNNEL.HOUR_WEIGHT;
    if (v2Result.tags.includes("Quý Nhân") && !isCriticalBadDay) {
      dayWeight = 0.5;
      hourWeight = 0.5;
    }
    let finalCombinedScore = dayScore * dayWeight + normalizedHourScore * hourWeight;
    if (isCriticalBadDay) {
      finalCombinedScore = Math.min(finalCombinedScore, SCORING_CONFIG.FUNNEL.CRITICAL_CAP);
    }
    const displayTags = [...v2Result.tags];
    if (isHD && !displayTags.includes("Hoàng Đạo")) displayTags.unshift("Hoàng Đạo");
    displayTags.push(DATA.LUC_DIEU[hourLucDieu]);
    const conflictDetails = [...v2Result.warnings, ...v2Result.bonuses];
    const startHour = h * 2 - 1;
    const displayStart = startHour < 0 ? 23 : startHour;
    const displayEnd = h * 2 + 1 === 25 ? 1 : h * 2 + 1;
    const hourTrucEnum = getHourTruc(dayChiEnum, h);
    const hourTrucName = DATA.TRUCS[hourTrucEnum];
    const advice = humanizeHourVerdict(
      parseFloat(finalCombinedScore.toFixed(1)),
      hourLucDieu,
      hourTrucName,
      displayTags
    );
    hourEvaluations.push({
      chi: DATA.CHIS[hChiEnum],
      can: DATA.CANS[hCanEnum],
      timeRange: `${displayStart}h - ${displayEnd}h`,
      isHoangDao: isHD,
      zodiacStarName: zodiacOfficers.find((o) => o.branchIndex === h)?.starName,
      score: parseFloat(finalCombinedScore.toFixed(1)),
      rawScore: normalizedHourScore,
      tags: displayTags,
      conflictDetails,
      truc: hourTrucName,
      trucEnum: hourTrucEnum,
      lucDieu: hourLucDieu,
      thanSat: [],
      // Tags act as Than Sat list for display roughly
      advice,
      maiHoa: void 0
    });
  }
  return hourEvaluations;
};
const enrichRecommendationsWithHours = (recommendations, hours, isCriticalBadDay = false) => {
  return recommendations.map((action) => {
    const actionConfig = ACTIONS_CONFIG.find((cfg) => cfg.id === action.id);
    if (!actionConfig) {
      return { ...action, bestHours: [] };
    }
    const rankedHours = hours.map((h) => {
      let actionBonus = 0;
      const reasons = [];
      let isBlocked = false;
      const hasCriticalStar = h.thanSat.some((star) => actionConfig.criticalStars.includes(star));
      if (hasCriticalStar) {
        isBlocked = true;
        reasons.push(`Phạm sao kỵ việc: ${actionConfig.criticalStars.filter((s) => h.thanSat.includes(s)).join(", ")}`);
      }
      if (h.trucEnum !== void 0 && actionConfig.goodTruc.includes(h.trucEnum)) {
        actionBonus += 1.5;
        reasons.push(`Trực ${h.truc} lợi cho việc này (+1.5)`);
      }
      if ([LUC_DIEU_ENUM.TocHy, LUC_DIEU_ENUM.DaiAn, LUC_DIEU_ENUM.TieuCat].includes(h.lucDieu)) {
        actionBonus += 0.5;
      }
      let funnelScore = h.score;
      if (h.rawScore !== void 0) {
        const dayWeight = 0.6;
        const hourWeight = 0.4;
        funnelScore = action.score * dayWeight + h.rawScore * hourWeight;
      }
      let finalHourScore = isBlocked ? -99 : funnelScore + actionBonus;
      if (isCriticalBadDay) {
        finalHourScore = Math.min(finalHourScore, SCORING_CONFIG.FUNNEL.CRITICAL_CAP + 1);
      }
      if (finalHourScore > 10) finalHourScore = 10;
      return {
        chi: h.chi,
        can: h.can,
        score: finalHourScore,
        baseScore: h.score,
        lucDieu: h.lucDieu,
        explanation: reasons.length > 0 ? reasons.join(". ") : "Giờ bình hòa",
        isBlocked,
        truc: h.truc
      };
    });
    const bestHours = rankedHours.filter((h) => !h.isBlocked && h.score >= 4).sort((a, b) => b.score - a.score).slice(0, 3);
    return {
      ...action,
      bestHours: bestHours.map((h) => ({
        hour: h.chi,
        score: parseFloat(h.score.toFixed(1)),
        lucDieu: h.lucDieu,
        truc: h.truc
      }))
    };
  });
};

const evaluateDay = (dateInput, latOrProfile, lon, userYearChi, userDob, userGender = 1, userProfileOverride) => {
  let lat = 21.0285;
  let long = 105.8333;
  let rawUserProfile = void 0;
  if (typeof latOrProfile === "object") {
    rawUserProfile = latOrProfile;
  } else if (typeof latOrProfile === "number") {
    lat = latOrProfile;
    long = lon || 105.8333;
    if (userDob) {
      rawUserProfile = {
        year: userDob.getFullYear(),
        month: userDob.getMonth() + 1,
        day: userDob.getDate(),
        hour: userDob.getHours(),
        gender: userGender || 1
      };
    }
  }
  if (userProfileOverride) {
    rawUserProfile = userProfileOverride;
  }
  const dayAttrs = calculateDayAttributes(dateInput, lat, long);
  const { date, lunaInfo, trucEnum, trucName, sao, thanSat, badDays, hoangDaoHoursNames } = dayAttrs;
  const userContext = processUserProfile(rawUserProfile || lat, long, userDob, userGender);
  const dayScoreResult = scoreDay(dayAttrs, userContext, userYearChi);
  const { score: dayScore, affinityData, isCriticalBadDay, processedBadStars, rescueLogs, userDungThan } = dayScoreResult;
  let recommendations = getRecommendations({
    truc: trucEnum,
    // lucDieu removed
    thanSat,
    badDays,
    sao,
    can: dayAttrs.dayCanEnum,
    chi: dayAttrs.dayChiEnum,
    dungThan: userDungThan,
    badStarStates: processedBadStars,
    dayScore
  });
  const hourEvaluations = generateAndScoreHours(dayAttrs, dayScore, isCriticalBadDay, userContext);
  recommendations = enrichRecommendationsWithHours(recommendations, hourEvaluations, isCriticalBadDay);
  const verdictData = resolveDayVerdict(dayScore, affinityData, badDays);
  const tempResultForTags = {
    date,
    lunaInfo,
    truc: trucName,
    trucEnum,
    trucMeaning: TRUC_MEANING[trucEnum],
    sao,
    saoMeaning: NHI_THAP_BAT_TU_MEANING[sao],
    // lucDieu removed
    hoangDaoHours: hoangDaoHoursNames,
    badDays,
    thanSat,
    affinity: affinityData,
    zodiacOfficer: dayAttrs.zodiacOfficer,
    clashingAges: dayAttrs.clashingAges,
    compatibleAges: dayAttrs.compatibleAges,
    recommendations,
    // Loaded
    score: dayScore,
    dungThan: userDungThan,
    tags: [],
    hours: hourEvaluations,
    verdict: verdictData
  };
  const baseTags = generateDayTags(tempResultForTags, userContext?.baziChart);
  const rescueTags = rescueLogs.map((log, idx) => ({
    id: `RESCUE_${idx}`,
    label: log,
    type: "general",
    color: "green"
  }));
  const allTags = [...baseTags, ...rescueTags];
  return {
    ...tempResultForTags,
    tags: allTags
  };
};
const getMonthEvaluation = (year, month, lat, lon, userYearChi, userDob, userGender = 1) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const results = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    date.setHours(12, 0, 0, 0);
    results.push(evaluateDay(date, lat, lon, userYearChi, userDob, userGender));
  }
  return results;
};

const MonthlyScoreCalendar = ({
  currentDate,
  onDateSelect,
  lat,
  lon,
  userDob,
  userGender = 1
}) => {
  const [viewDate, setViewDate] = useState(currentDate);
  const [monthData, setMonthData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!currentDate.isSame(viewDate, "month")) {
      setViewDate(currentDate);
    }
  }, [currentDate]);
  useEffect(() => {
    const fetchMonthData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 10));
      try {
        const year = viewDate.year();
        const month = viewDate.month();
        let userYearChi = void 0;
        if (userDob) {
          const y = userDob.getFullYear();
          const [, chi] = LocalLunarCalendar.getCanChiYear(y);
          userYearChi = chi;
        }
        const data = getMonthEvaluation(
          year,
          month,
          lat,
          lon,
          userYearChi,
          userDob,
          userGender
        );
        setMonthData(data);
      } catch (err) {
        console.error("Error calculating month data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMonthData();
  }, [viewDate.year(), viewDate.month(), lat, lon, userDob, userGender]);
  const prevMonth = () => setViewDate((d) => d.subtract(1, "month"));
  const nextMonth = () => setViewDate((d) => d.add(1, "month"));
  const startOfMonth = viewDate.startOf("month");
  viewDate.endOf("month");
  const startDayOfWeek = startOfMonth.day();
  const daysInMonth = viewDate.daysInMonth();
  const startDayIndex = (startDayOfWeek + 6) % 7;
  const blanks = Array(startDayIndex).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const getDayEval = (day) => {
    return monthData[day - 1];
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-4 border-b-2 border-stone-300 bg-[#b91c1c] rounded-t-lg overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-stone-300 px-6 py-5", children: [
      /* @__PURE__ */ jsx("button", { onClick: prevMonth, className: "text-white transition-colors hover:text-yellow-300 cursor-pointer", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 48, strokeWidth: 2.5 }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-100", children: "Dương Lịch" }),
        /* @__PURE__ */ jsx("time", { dateTime: viewDate.format("YYYY-MM"), className: "text-3xl font-bold font-serif uppercase  mt-0.5 text-white", children: viewDate.format("MM / YYYY") })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: nextMonth, className: "text-white transition-colors hover:text-yellow-300 cursor-pointer ", children: /* @__PURE__ */ jsx(ChevronRight, { size: 48, strokeWidth: 2.5 }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden grid-cols-7 border-b border-stone-300 bg-stone-300 md:grid", children: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => /* @__PURE__ */ jsx("div", { className: "py-2 text-center text-[10px] font-bold uppercase tracking-widest text-stone-600", children: d }, d)) }),
    /* @__PURE__ */ jsxs("div", { className: "relative grid auto-rows-auto grid-cols-1 gap-px border-b border-stone-300 bg-stone-300 md:auto-rows-[1fr] md:grid-cols-7", children: [
      loading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-[#f4f1ea]/60 backdrop-blur-[1px]", children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-stone-600" }) }),
      blanks.map((_, i) => /* @__PURE__ */ jsx("div", { className: "hidden min-h-[100px] bg-stone-100 md:block" }, `blank-${i}`)),
      days.map((day) => {
        const evalData = getDayEval(day);
        const isSelected = currentDate.date() === day && currentDate.isSame(viewDate, "month");
        const isToday = dayjs().isSame(viewDate.date(day), "day");
        const dateObj = viewDate.date(day);
        const dowMap = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
        const dowStr = dowMap[dateObj.day()];
        let scoreColor = "text-stone-400";
        let bgColor = "bg-[#fdfbf7]";
        if (evalData) {
          if (evalData.score >= 8) scoreColor = "text-[#15803d]";
          else if (evalData.score >= 6.5) scoreColor = "text-[#4ade80]";
          if (evalData.score >= 8) scoreColor = "text-green-700";
          else if (evalData.score >= 6.5) scoreColor = "text-green-600";
          else if (evalData.score >= 5) scoreColor = "text-amber-600";
          else scoreColor = "text-red-700";
        }
        if (isSelected) bgColor = "bg-[#fef3c7] ring-2 ring-inset ring-amber-600 z-10 shadow-md";
        return /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => onDateSelect(viewDate.date(day)),
            className: `group relative flex cursor-pointer flex-row items-stretch justify-between p-3 transition-colors hover:bg-stone-100 md:min-h-[110px] md:flex-col md:p-3 ${bgColor} ${isSelected ? "ring-inset ring-amber-400" : ""}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex w-[15%] min-w-[60px] flex-col items-center justify-center gap-1 border-r border-stone-200 pr-3 md:order-1 md:w-auto md:flex-row md:items-start md:justify-between md:border-r-0 md:pr-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "mb-0.5 text-[10px] font-bold uppercase text-stone-400 md:hidden", children: dowStr }),
                  /* @__PURE__ */ jsx("time", { dateTime: dateObj.format("YYYY-MM-DD"), className: `font-serif text-2xl font-bold leading-none md:text-xl ${isSelected ? "text-stone-900" : "text-stone-700"} ${isToday ? "text-amber-700 underline decoration-amber-500 decoration-2" : ""}`, children: day }),
                  isToday && /* @__PURE__ */ jsx("span", { className: "mt-0.5 text-[8px] font-bold uppercase tracking-tighter text-amber-600 md:text-[10px]", children: "Hôm nay" })
                ] }),
                evalData && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center md:items-end", children: [
                  /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-stone-400 group-hover:text-stone-600 md:text-xs", children: [
                    evalData.lunaInfo.d,
                    "/",
                    evalData.lunaInfo.m
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[9px] uppercase text-stone-300 md:block", children: "Âm" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-1 flex-col justify-center px-4 md:order-3 md:mt-2 md:justify-end md:px-0", children: evalData && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 md:mt-auto md:w-full md:grid md:grid-cols-2 md:items-start md:gap-2 md:border-t md:border-dashed md:border-stone-200 md:pt-1.5", children: [
                evalData.clashingAges && evalData.clashingAges.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:justify-start md:content-start md:gap-x-1 md:gap-y-0.5", children: evalData.clashingAges.slice(0, 3).map((clash, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-xs font-medium leading-tight text-red-800 md:w-full md:gap-1 md:text-[0.6rem]", children: [
                  /* @__PURE__ */ jsx("span", { children: clash.label }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold opacity-75", children: clash.effectiveScore !== void 0 ? clash.effectiveScore : -1 })
                ] }, `c-${idx}`)) }),
                evalData.compatibleAges && evalData.compatibleAges.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:justify-start md:content-start md:gap-x-1 md:gap-y-0.5 md:border-l md:border-stone-200 md:pl-2", children: evalData.compatibleAges.slice(0, 3).map((harmony, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-xs font-medium leading-tight text-green-800 md:w-full md:gap-1 md:text-[0.6rem]", children: [
                  /* @__PURE__ */ jsx("span", { children: harmony.label }),
                  /* @__PURE__ */ jsxs("span", { className: "font-bold opacity-75", children: [
                    "+",
                    harmony.effectiveScore !== void 0 ? harmony.effectiveScore : 1
                  ] })
                ] }, `h-${idx}`)) })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "flex w-[15%] min-w-[50px] flex-col items-center justify-center gap-0.5 border-l border-stone-200 pl-3 md:order-2 md:w-full md:flex-col md:border-l-0 md:pl-0 md:py-2", children: evalData ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("div", { className: `font-serif text-2xl font-bold leading-none tracking-tight md:text-4xl ${scoreColor}`, children: evalData.score % 1 === 0 ? evalData.score : evalData.score.toFixed(1) }),
                /* @__PURE__ */ jsx("span", { className: `text-[0.65rem] font-bold uppercase tracking-[0.1em] ${scoreColor} opacity-90 md:mt-1`, children: evalData.score >= 8 ? "Đại Cát" : evalData.score >= 6.5 ? "Tốt" : evalData.score >= 5 ? "Tr.Bình" : "Xấu" })
              ] }) : /* @__PURE__ */ jsx("div", { className: "h-8 w-8 animate-pulse rounded bg-stone-200 md:h-8 w-12" }) })
            ]
          },
          day
        );
      })
    ] })
  ] });
};

const BaziDisplay = ({ dungThan }) => {
  if (!dungThan?.chart) return null;
  const { chart } = dungThan;
  const getElementColor = (elementIdx) => {
    const element = NGU_HANH_NAMES[elementIdx];
    switch (element) {
      case "Kim":
        return "bg-stone-200 text-stone-600";
      // Metal: Gray/Stone
      case "Mộc":
        return "bg-green-200 text-green-800";
      // Wood: Green
      case "Thủy":
        return "bg-blue-200 text-blue-800";
      // Water: Blue
      case "Hỏa":
        return "bg-red-200 text-red-800";
      // Fire: Red
      case "Thổ":
        return "bg-amber-200 text-amber-800";
      // Earth: Brown/Amber
      default:
        return "bg-stone-50 text-stone-500";
    }
  };
  const renderPillar = (label, key) => {
    const can = chart[`${key}Can`];
    const chi = chart[`${key}Chi`];
    const canEl = CAN_NGU_HANH[can];
    const chiEl = CHI_NGU_HANH[chi];
    const canName = DATA.CANS[can];
    const chiName = DATA.CHIS[chi];
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center p-2", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-2 text-[10px] uppercase tracking-widest text-stone-500", children: label }),
      /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-0 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: `w-full text-center text-lg font-bold uppercase leading-none `, children: canName }),
        /* @__PURE__ */ jsx("div", { className: "my-1.5 h-px w-4 bg-stone-300" }),
        /* @__PURE__ */ jsx("div", { className: `w-full text-center text-lg font-bold uppercase leading-none `, children: chiName }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 flex gap-1 opacity-60", children: [
          /* @__PURE__ */ jsx("div", { className: `h-1.5 w-1.5 rounded-full ${getElementColor(canEl).split(" ")[0]}` }),
          /* @__PURE__ */ jsx("div", { className: `h-1.5 w-1.5 rounded-full ${getElementColor(chiEl).split(" ")[0]}` })
        ] })
      ] })
    ] }, key);
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-6 border-y-2 border-stone-800 bg-[#f4f1ea] px-4 py-6 font-serif text-stone-900", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-center", children: /* @__PURE__ */ jsx("span", { className: "block border-b border-stone-400 pb-1 text-xs font-bold uppercase tracking-[0.3em] text-stone-600", children: "Bát Tự Mệnh Bàn" }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-0 divide-x divide-stone-400 border border-stone-800 bg-[#fdfbf7]", children: [
      renderPillar("Năm", "year"),
      renderPillar("Tháng", "month"),
      renderPillar("Ngày", "day"),
      renderPillar("Giờ", "hour")
    ] }),
    dungThan.dungThan !== void 0 && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-center gap-8 text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-1 text-[10px] uppercase tracking-widest text-stone-500", children: "Dụng thần" }),
        /* @__PURE__ */ jsx("span", { className: `border-b-2 border-stone-800 px-2 font-bold uppercase ${getElementColor(dungThan.dungThan).split(" ")[1]}`, children: NGU_HANH_NAMES[dungThan.dungThan] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-1 text-[10px] uppercase tracking-widest text-stone-500", children: "Hỷ thần" }),
        /* @__PURE__ */ jsx("span", { className: `border-b-2 border-stone-800 px-2 font-bold uppercase ${getElementColor(dungThan.hyThan).split(" ")[1]}`, children: NGU_HANH_NAMES[dungThan.hyThan] })
      ] })
    ] })
  ] });
};

const LocationPanel = ({
  onLocationConfirm,
  onClose,
  mapCenter,
  zoom,
  markerPosition
}) => {
  const handleCitySelect = (city) => {
    const lat = city.lat;
    const lon = city.lng;
    let name = city.city;
    if (city.province && city.province !== city.city) {
      name += `, ${city.province}`;
    }
    name += `, ${city.country}`;
    onLocationConfirm(lat, lon, name, city.timezone, city.offset);
  };
  return /* @__PURE__ */ jsx("aside", { className: "fixed inset-y-0 left-0 z-50 w-full transform border-r border-gray-200 bg-white shadow-xl transition-transform ease-in-out md:w-[400px] dark:bg-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "max-h-screen overflow-y-auto p-4 sm:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Chọn Địa Điểm" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onClose,
          className: "rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white",
          children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-4", children: [
      /* @__PURE__ */ jsx("label", { className: "mb-2 block text-md font-medium text-gray-700 dark:text-gray-300", children: "Tìm thành phố" }),
      /* @__PURE__ */ jsx(CitySearch, { onCitySelect: handleCitySelect, className: "dark:text-black" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(
      MapPicker,
      {
        mapCenter,
        zoom,
        markerPosition,
        onLocationSelect: () => {
        },
        onLocationConfirm: (lat, lon, locationName, fixedTimezone) => {
          onLocationConfirm(
            lat,
            lon,
            locationName || `Tọa độ: ${lat.toFixed(4)}, ${lon.toFixed(4)}`,
            fixedTimezone
          );
        }
      }
    ) })
  ] }) });
};

const UserProfilePanel = ({
  onClose,
  userDob,
  setUserDob,
  userGender,
  setUserGender,
  userBirthLocation,
  onPickLocation
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 flex justify-end", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/30 backdrop-blur-[2px]", onClick: onClose }),
    /* @__PURE__ */ jsxs("aside", { className: "relative z-10 w-full max-w-md transform overflow-y-auto bg-white p-6 shadow-2xl transition-transform dark:bg-slate-800", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between border-b pb-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 dark:text-white", children: "Thông Tin Cá Nhân" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700",
            children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-md font-bold text-gray-700 dark:text-gray-300", children: "Giới tính" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-center gap-2 rounded-lg border p-3 hover:bg-gray-50", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "radio",
                  name: "gender_panel",
                  checked: userGender === 1,
                  onChange: () => setUserGender(1),
                  className: "text-amber-600 focus:ring-amber-500"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: "Nam" })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-center gap-2 rounded-lg border p-3 hover:bg-gray-50", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "radio",
                  name: "gender_panel",
                  checked: userGender === 0,
                  onChange: () => setUserGender(0),
                  className: "text-amber-600 focus:ring-amber-500"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: "Nữ" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          DateTimePicker,
          {
            label: "Ngày giờ sinh (Dương lịch)",
            placeholder: "Chọn ngày giờ sinh",
            value: userDob,
            onChange: (date) => setUserDob(date ? dayjs(date).toDate() : void 0),
            locale: "vi",
            valueFormat: "DD/MM/YYYY HH:mm",
            leftSection: /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-gray-500" }),
            clearable: true,
            classNames: {
              input: "focus:border-amber-500 focus:ring-amber-500",
              label: "mb-2 block text-md font-bold text-gray-700 dark:text-gray-300"
            }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-md font-bold text-gray-700 dark:text-gray-300", children: "Nơi sinh (Quan trọng để tính Bát Tự)" }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-gray-200 p-4", children: [
            userBirthLocation ? /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-800", children: userBirthLocation.name }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500", children: [
                userBirthLocation.lat.toFixed(4),
                ", ",
                userBirthLocation.lon.toFixed(4)
              ] })
            ] }) : /* @__PURE__ */ jsx("div", { className: "mb-3 text-md text-gray-500 italic", children: "Chưa chọn nơi sinh" }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: onPickLocation,
                className: "flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-md font-medium text-gray-700 hover:bg-gray-50",
                children: [
                  /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
                  userBirthLocation ? "Thay đổi nơi sinh" : "Chọn nơi sinh"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "w-full rounded-lg bg-amber-600 px-4 py-3 font-bold text-white shadow hover:bg-amber-700",
            children: "Xác nhận & Xem kết quả"
          }
        ) })
      ] })
    ] })
  ] });
};

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
function NgayTotXauApp({ initialDateStr } = {}) {
  const [currentDate, setCurrentDateTime] = useState(initialDateStr ? dayjs(initialDateStr) : dayjs());
  const [userDob, setUserDob] = useState(void 0);
  const [userGender, setUserGender] = useState(1);
  const [showLocationPanel, setShowLocationPanel] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const [pickingLocationFor, setPickingLocationFor] = useState("view");
  const [geoData, setGeoData] = useState({
    name: "Hà Nội, Việt Nam",
    lat: 21.0285,
    lon: 105.8333,
    timezone: "Asia/Ho_Chi_Minh",
    offset: 7
  });
  const [userBirthLocation, setUserBirthLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState([21.0285, 105.8333]);
  const [zoom] = useState(6);
  const [markerPosition, setMarkerPosition] = useState([21.0285, 105.8333]);
  const [isUrlParamParsed, setIsUrlParamParsed] = useState(false);
  const formatDobParam = (date) => dayjs(date).format("YYYY-MM-DD-HH-mm");
  const parseDobParam = (param) => dayjs(param, "YYYY-MM-DD-HH-mm");
  const updateUrl = (date, dob, birthLoc, viewLoc) => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (dob) {
      params.set("b", formatDobParam(dob));
    } else {
      params.delete("b");
    }
    if (birthLoc) {
      params.set("loc", `${birthLoc.lat.toFixed(7)},${birthLoc.lon.toFixed(7)}`);
    } else {
      params.delete("loc");
    }
    if (viewLoc) {
      params.set("locday", `${viewLoc.lat.toFixed(7)},${viewLoc.lon.toFixed(7)}`);
    } else {
      params.delete("locday");
    }
    const path = `/xem-ngay-gio-tot-xau-${date.format("YYYY-MM-DD")}`;
    const queryString = params.toString();
    const fullUrl = queryString ? `${path}?${queryString}` : path;
    window.history.pushState(null, "", fullUrl);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      let initialDob;
      const bParam = params.get("b");
      if (bParam) {
        const d = parseDobParam(bParam);
        if (d.isValid()) {
          initialDob = d.toDate();
          setUserDob(initialDob);
        }
      } else {
        const legacyDob = params.get("dob");
        if (legacyDob) {
          const d = dayjs(legacyDob);
          if (d.isValid()) {
            initialDob = d.toDate();
            setUserDob(initialDob);
          }
        }
      }
      const locParam = params.get("loc");
      if (locParam && locParam.includes(",")) {
        const [latStr, lonStr] = locParam.split(",");
        const lat = parseFloat(latStr);
        const lon = parseFloat(lonStr);
        if (!isNaN(lat) && !isNaN(lon)) {
          try {
            const tzInfo = SolarCalculator.getTimezoneInfo(lat, lon, initialDob || /* @__PURE__ */ new Date());
            setUserBirthLocation({
              name: `Vị trí sinh (${lat.toFixed(2)}, ${lon.toFixed(2)})`,
              lat,
              lon,
              timezone: tzInfo.name,
              offset: tzInfo.offset
            });
            setPickingLocationFor("birth");
          } catch (e) {
            console.error("Error parsing birth location timezone", e);
            setUserBirthLocation({
              name: `Vị trí sinh (${lat.toFixed(2)}, ${lon.toFixed(2)})`,
              lat,
              lon,
              timezone: "UTC",
              offset: 0
            });
          }
        }
      }
      const locDayParam = params.get("locday");
      let viewLat = geoData.lat;
      let viewLon = geoData.lon;
      let viewName = geoData.name;
      if (locDayParam && locDayParam.includes(",")) {
        const [latStr, lonStr] = locDayParam.split(",");
        const lat = parseFloat(latStr);
        const lon = parseFloat(lonStr);
        if (!isNaN(lat) && !isNaN(lon)) {
          viewLat = lat;
          viewLon = lon;
          viewName = `Vị trí xem (${lat.toFixed(2)}, ${lon.toFixed(2)})`;
        }
      } else {
        const latP = parseFloat(params.get("lat") || "");
        const lonP = parseFloat(params.get("lon") || "");
        const nameP = params.get("name");
        if (!isNaN(latP) && !isNaN(lonP)) {
          viewLat = latP;
          viewLon = lonP;
          if (nameP) viewName = nameP;
        }
      }
      if (viewLat !== geoData.lat || viewLon !== geoData.lon) {
        try {
          const tzInfo = SolarCalculator.getTimezoneInfo(viewLat, viewLon, currentDate.toDate());
          setGeoData((prev) => ({
            ...prev,
            lat: viewLat,
            lon: viewLon,
            name: viewName,
            timezone: tzInfo.name,
            offset: tzInfo.offset
          }));
          setMapCenter([viewLat, viewLon]);
          setMarkerPosition([viewLat, viewLon]);
        } catch (e) {
          console.error("Error parsing view location timezone", e);
        }
      }
      setIsUrlParamParsed(true);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && isUrlParamParsed) {
      updateUrl(
        currentDate,
        userDob,
        userBirthLocation ? { lat: userBirthLocation.lat, lon: userBirthLocation.lon } : void 0,
        { lat: geoData.lat, lon: geoData.lon }
      );
    }
  }, [currentDate, userDob, userBirthLocation, geoData.lat, geoData.lon, isUrlParamParsed]);
  const handleDateChange = (newDate) => {
    setCurrentDateTime(newDate);
  };
  const evaluation = useMemo(() => {
    try {
      let userYearChi = void 0;
      let userProfile = void 0;
      if (userDob) {
        const y = userDob.getFullYear();
        const [, chi] = LocalLunarCalendar.getCanChiYear(y);
        userYearChi = chi;
        userProfile = {
          year: userDob.getFullYear(),
          month: userDob.getMonth() + 1,
          day: userDob.getDate(),
          hour: userDob.getHours(),
          minute: userDob.getMinutes(),
          gender: userGender,
          lat: userBirthLocation?.lat,
          lon: userBirthLocation?.lon,
          timezone: userBirthLocation?.timezone
        };
      }
      const sendDate = currentDate.set("hour", 12);
      return evaluateDay(sendDate.toDate(), geoData.lat, geoData.lon, userYearChi, userDob, userGender, userProfile);
    } catch (e) {
      console.error(e);
      return null;
    }
  }, [currentDate.valueOf(), geoData.lat, geoData.lon, userDob?.valueOf(), userGender, userBirthLocation]);
  const handleLocationUpdate = (lat, lon, name, timezone2, offset) => {
    let finalTz = timezone2;
    let finalOffset = offset;
    if (!finalTz) {
      try {
        const tzInfo = SolarCalculator.getTimezoneInfo(lat, lon, currentDate.toDate());
        finalTz = tzInfo.name;
        finalOffset = tzInfo.offset;
      } catch (e) {
        console.error(e);
      }
    }
    if (!finalTz) finalTz = "UTC";
    if (finalOffset === void 0) finalOffset = 0;
    if (pickingLocationFor === "view") {
      setGeoData({ name, lat, lon, timezone: finalTz, offset: finalOffset });
    } else {
      setUserBirthLocation({ name, lat, lon, timezone: finalTz, offset: finalOffset });
    }
    setMapCenter([lat, lon]);
    setMarkerPosition([lat, lon]);
    setShowLocationPanel(false);
  };
  if (!evaluation) return /* @__PURE__ */ jsx("div", { className: "p-8 text-center text-gray-500", children: "Đang tính toán dữ liệu phong thủy..." });
  const { lunaInfo, score, recommendations, hours, affinity, dungThan, tags, zodiacOfficer, clashingAges, compatibleAges } = evaluation;
  const dayOfWeek = new Intl.DateTimeFormat("vi-VN", { weekday: "long" }).format(evaluation.date);
  new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }).format(
    evaluation.date
  );
  return /* @__PURE__ */ jsx(MantineProvider, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto min-h-screen w-full pb-20", children: [
    /* @__PURE__ */ jsx(
      MonthlyScoreCalendar,
      {
        currentDate,
        onDateSelect: handleDateChange,
        lat: geoData.lat,
        lon: geoData.lon,
        userDob,
        userGender
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mb-2 py-5", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center border-1 border-gray-200 shadow-lg rounded-xl overflow-hidden ", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center bg-[#fdfbf7]", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full bg-white rounded-xl border border-gray-200 ring-1 ring-gray-100 flex flex-col md:flex-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:w-2/5 border-r border-gray-100 flex flex-col bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-[#b91c1c] text-white py-3 px-3 relative overflow-hidden flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  const newDate = currentDate.subtract(1, "day");
                  setCurrentDateTime(newDate);
                  updateUrl(newDate, userDob, userBirthLocation || void 0, geoData);
                },
                className: "relative z-10 p-1 hover:bg-black/10 rounded-full transition-colors cursor-pointer",
                children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [
              /* @__PURE__ */ jsxs("time", { dateTime: currentDate.format("YYYY-MM"), className: "text-[10px] font-bold uppercase tracking-[0.3em] opacity-90 text-amber-100", children: [
                "Tháng ",
                currentDate.format("MM"),
                " • Năm ",
                currentDate.format("YYYY")
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-xl font-bold font-serif uppercase tracking-widest mt-0.5 text-white", children: "Lịch Vạn Sự" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  const newDate = currentDate.add(1, "day");
                  setCurrentDateTime(newDate);
                  updateUrl(newDate, userDob, userBirthLocation || void 0, geoData);
                },
                className: "relative z-10 p-1 hover:bg-black/10 rounded-full transition-colors cursor-pointer",
                children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center justify-start pt-8 pb-4 px-6 relative", children: [
            /* @__PURE__ */ jsx("time", { dateTime: evaluation.date.toISOString(), className: `text-[8rem] leading-[0.8] font-bold font-serif tracking-tighter ${evaluation.date.getDay() === 0 || score >= 8 ? "text-[#b91c1c]" : "text-gray-900"}`, children: evaluation.date.getDate() }),
            /* @__PURE__ */ jsx("div", { className: `mt-2 text-xl font-bold uppercase tracking-widest ${evaluation.date.getDay() === 0 ? "text-[#b91c1c]" : "text-gray-500"}`, children: dayOfWeek }),
            /* @__PURE__ */ jsx("div", { className: `mt-4 mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${zodiacOfficer?.isHoangDao ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-gray-50 text-gray-600 border-gray-200"}`, children: /* @__PURE__ */ jsxs("span", { children: [
              zodiacOfficer?.starName,
              " (",
              zodiacOfficer?.isHoangDao ? "Hoàng Đạo" : "Hắc Đạo",
              ")"
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-5 flex-wrap", children: [
              /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    setPickingLocationFor("view");
                    setMapCenter([geoData.lat, geoData.lon]);
                    setMarkerPosition([geoData.lat, geoData.lon]);
                    setShowLocationPanel(true);
                  },
                  className: "group flex cursor-pointer items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-600 transition-all hover:bg-amber-100 hover:text-amber-800 hover:shadow-sm",
                  children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-stone-400 group-hover:text-amber-600" }),
                    /* @__PURE__ */ jsx("span", { className: "max-w-[200px] truncate", children: geoData.name }),
                    /* @__PURE__ */ jsx(Pencil, { className: "h-3 w-3 opacity-30 group-hover:text-amber-600 group-hover:opacity-100" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  onClick: () => setShowUserPanel(true),
                  className: `rounded-full border border-gray-200 py-1.5 px-4 cursor-pointer ${userDob ? "bg-amber-100 text-amber-800 font-bold border-amber-200" : "bg-gray-50 text-gray-600"} transition-all hover:bg-amber-50 text-xs font-bold uppercase tracking-wide`,
                  children: userDob ? "Sửa thông tin" : "Nhập thông tin"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full border-t border-dashed border-stone-200 pt-4 pb-6 px-4 bg-white", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1", children: "Âm Lịch" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5 text-stone-800", children: [
                /* @__PURE__ */ jsx("span", { className: "text-5xl font-serif font-bold", children: lunaInfo.d }),
                /* @__PURE__ */ jsxs("span", { className: "text-xl font-medium text-stone-400", children: [
                  "/ ",
                  lunaInfo.m
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-xs font-medium text-stone-500 border-t border-stone-100 pt-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "mb-0.5 text-[8px] uppercase tracking-wider text-stone-300", children: "Năm" }),
                /* @__PURE__ */ jsxs("span", { className: "text-stone-700 font-bold", children: [
                  lunaInfo.ycc[0],
                  " ",
                  lunaInfo.ycc[1]
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "mb-0.5 text-[8px] uppercase tracking-wider text-stone-300", children: "Tháng" }),
                /* @__PURE__ */ jsxs("span", { className: "text-stone-700 font-bold", children: [
                  lunaInfo.mcc[0],
                  " ",
                  lunaInfo.mcc[1]
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "mb-0.5 text-[8px] uppercase tracking-wider text-stone-300", children: "Ngày" }),
                /* @__PURE__ */ jsxs("span", { className: "text-stone-700 font-bold", children: [
                  lunaInfo.dcc[0],
                  " ",
                  lunaInfo.dcc[1]
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-[#fdfdfd] pt-5 pb-4 w-full flex justify-center", children: /* @__PURE__ */ jsx(ZodiacHourClock, { hours: evaluation.hours }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:w-3/5 bg-[#fdfbf7] p-8 flex flex-col gap-6 relative", children: [
          (evaluation.badDays.length > 0 || affinity && affinity.isCritical) && /* @__PURE__ */ jsx("div", { className: "mb-6 mx-4 py-4 border-y border-red-100 bg-[#fffbfc] text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-serif font-bold text-[#991b1b] text-base uppercase tracking-widest border-b border-red-100 pb-1", children: "Điều Kiêng Kỵ" }),
            /* @__PURE__ */ jsxs("div", { className: "font-serif text-lg text-gray-800 leading-relaxed px-2", children: [
              "Ngày phạm ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-[#b91c1c]", children: evaluation.badDays.join(", ") }),
              affinity && affinity.isCritical && /* @__PURE__ */ jsxs("span", { children: [
                evaluation.badDays.length > 0 ? " và " : "",
                "xung khắc tuổi ",
                /* @__PURE__ */ jsx("span", { className: "font-bold text-[#b91c1c]", children: affinity.detail })
              ] }),
              "."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "font-serif text-sm text-gray-500 italic", children: '"Khí xấu bao trùm, cát tinh khó hóa giải. Nên thận trọng việc đại sự."' })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 pb-2 border-b border-gray-200 border-dashed", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: `text-4xl font-bold font-serif ${evaluation.verdict?.color === "red" ? "text-red-700" : evaluation.verdict?.color === "orange" ? "text-orange-700" : evaluation.verdict?.color === "green" ? "text-green-700" : "text-blue-700"}`, children: evaluation.verdict?.verdict || (score >= 8 ? "Đại Cát" : "Bình Thường") }),
              /* @__PURE__ */ jsxs("div", { className: "px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-500 uppercase tracking-wide", children: [
                score,
                " điểm"
              ] })
            ] }),
            evaluation.verdict && /* @__PURE__ */ jsxs("div", { className: "text-base text-gray-600 italic font-serif leading-relaxed", children: [
              '"',
              evaluation.verdict.advice,
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1", children: "Trực" }),
              /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-800 text-xl font-serif mb-1", children: evaluation.truc }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 leading-snug", title: evaluation.trucMeaning, children: evaluation.trucMeaning })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1", children: "Nhị Thập Bát Tú" }),
              /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-800 text-xl font-serif mb-1", children: DATA.NHI_THAP_BAT_TU[evaluation.sao] }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 leading-snug", title: evaluation.saoMeaning, children: evaluation.saoMeaning })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-8 py-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-bold text-[#166534] border-b border-[#bbf7d0] pb-1 mb-1", children: "Cát Tinh (Sao Tốt)" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2 pr-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-100", children: evaluation.thanSat.cat.length > 0 ? evaluation.thanSat.cat.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif font-bold text-gray-800 text-base block", children: s }),
                /* @__PURE__ */ jsxs("span", { className: "font-serif text-sm text-gray-500 italic leading-relaxed", children: [
                  '"',
                  THAN_SAT_MEANING[s] || "Tốt cho mọi việc",
                  '"'
                ] })
              ] }, i)) : /* @__PURE__ */ jsx("span", { className: "font-serif text-sm italic text-gray-400", children: "Không có sao tốt nổi bật" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-serif text-lg font-bold text-[#991b1b] border-b border-[#fecaca] pb-1 mb-1", children: "Hung Tinh (Sao Xấu)" }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2 pr-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-100", children: evaluation.thanSat.hung.length > 0 ? evaluation.thanSat.hung.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "mb-1", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif font-bold text-gray-800 text-base block", children: s }),
                /* @__PURE__ */ jsxs("span", { className: "font-serif text-sm text-gray-500 italic leading-relaxed", children: [
                  '"',
                  THAN_SAT_MEANING[s] || "Xấu, nên kiêng kỵ",
                  '"'
                ] })
              ] }, i)) : /* @__PURE__ */ jsx("span", { className: "font-serif text-sm italic text-gray-400", children: "Không có sao xấu nổi bật" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 pt-4 border-t border-dashed border-gray-200", children: [
            clashingAges && clashingAges.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "font-serif font-bold text-[#b91c1c] text-base uppercase tracking-wider", children: "Tuổi Xung Khắc (Nên kiêng):" }),
              /* @__PURE__ */ jsx("div", { className: "font-serif text-gray-700 leading-relaxed text-sm", children: clashingAges.map((c, i) => {
                const score2 = c.effectiveScore !== void 0 ? c.effectiveScore : -(c.score >= 60 ? 3 : 1.5);
                const isHeavy = Math.abs(score2) >= 3;
                return /* @__PURE__ */ jsxs("span", { className: isHeavy ? "font-bold text-red-800" : "", children: [
                  c.label,
                  " ",
                  /* @__PURE__ */ jsxs("span", { className: "text-xs opacity-70", children: [
                    "(",
                    score2 > 0 ? "+" : "",
                    score2,
                    ")"
                  ] }),
                  i < clashingAges.length - 1 ? ", " : "."
                ] }, i);
              }) })
            ] }),
            compatibleAges && compatibleAges.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "font-serif font-bold text-[#15803d] text-base uppercase tracking-wider", children: "Tuổi Hợp (Cát lợi):" }),
              /* @__PURE__ */ jsx("div", { className: "font-serif text-gray-700 leading-relaxed text-sm", children: compatibleAges.slice(0, 20).map((c, i) => {
                const score2 = c.effectiveScore !== void 0 ? c.effectiveScore : c.score >= 80 ? 4 : 2;
                const isHeavy = Math.abs(score2) >= 3;
                return /* @__PURE__ */ jsxs("span", { className: isHeavy ? "font-bold text-green-800" : "", children: [
                  c.label,
                  " ",
                  /* @__PURE__ */ jsxs("span", { className: "text-xs opacity-70", children: [
                    "(",
                    score2 > 0 ? "+" : "",
                    score2,
                    ")"
                  ] }),
                  i < Math.min(compatibleAges.length, 20) - 1 ? ", " : compatibleAges.length > 20 ? "..." : "."
                ] }, i);
              }) })
            ] })
          ] }),
          dungThan && /* @__PURE__ */ jsx(BaziDisplay, { dungThan }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto pt-4 border-t border-gray-100", children: /* @__PURE__ */ jsx("div", { className: "flex items-start gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-x-2 gap-y-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-amber-700 uppercase tracking-wide whitespace-nowrap", children: "Giờ Hoàng Đạo:" }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] font-medium text-gray-600 leading-snug", children: evaluation.hoangDaoHours.join(", ") })
          ] }) }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center px-4 bg-white py-10 shadow-lg rounded-xl border border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative mb-8 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "relative z-10 bg-[#fdfbf7] px-6 text-xl font-bold font-serif uppercase tracking-[0.2em] text-[#8c3a3a]", children: "Lời Khuyên Hành Động" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-0 w-full h-px bg-[#dca54c]/40" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10", children: recommendations.map((rec, idx) => {
          const titleColor = rec.score >= 8 ? "text-[#15803d]" : rec.score >= 6.5 ? "text-[#166534]" : rec.score >= 5 ? "text-[#d97706]" : "text-[#991b1b]";
          const verdict = rec.score >= 8 ? "Đại Cát" : rec.score >= 6.5 ? "Tốt" : rec.score >= 5 ? "Trung Bình" : "Xấu";
          return /* @__PURE__ */ jsxs("div", { className: "group relative flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-baseline justify-between border-b border-[#e7e5e4] pb-2 mb-1 group-hover:border-[#dca54c] transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3", children: [
              /* @__PURE__ */ jsx("h3", { className: `text-xl font-serif font-bold ${titleColor}`, children: rec.label }),
              /* @__PURE__ */ jsxs("span", { className: `text-xs font-serif uppercase tracking-widest font-bold opacity-80 ${titleColor}`, children: [
                "[",
                verdict,
                "]"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("p", { className: "font-serif text-gray-700 leading-relaxed text-base italic pl-1", children: [
              '"',
              rec.advice,
              '"'
            ] }),
            rec.isGood && rec.bestHours && rec.bestHours.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm font-serif text-gray-600 pl-1", children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-[#b45309] mr-1", children: "Giờ tốt:" }),
              rec.bestHours.map((h) => h.hour).join(", "),
              "."
            ] })
          ] }, rec.id);
        }) })
      ] }) })
    ] }),
    showUserPanel && /* @__PURE__ */ jsx(
      UserProfilePanel,
      {
        onClose: () => setShowUserPanel(false),
        userDob,
        setUserDob,
        userGender,
        setUserGender,
        userBirthLocation,
        onPickLocation: () => {
          setPickingLocationFor("birth");
          setMapCenter(
            userBirthLocation ? [userBirthLocation.lat, userBirthLocation.lon] : [21.0285, 105.8333]
          );
          setMarkerPosition(
            userBirthLocation ? [userBirthLocation.lat, userBirthLocation.lon] : [21.0285, 105.8333]
          );
          setShowLocationPanel(true);
        }
      }
    ),
    showLocationPanel && /* @__PURE__ */ jsx(
      LocationPanel,
      {
        onLocationConfirm: handleLocationUpdate,
        onClose: () => setShowLocationPanel(false),
        mapCenter,
        zoom,
        markerPosition
      }
    )
  ] }) });
}

export { DATA as D, NgayTotXauApp as N, evaluateDay as e };
