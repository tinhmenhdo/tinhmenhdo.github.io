import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
/* empty css         */
import 'dayjs/locale/vi.js';
import { MantineProvider } from '@mantine/core';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc.js';
import { ChevronLeft, ChevronRight, Loader2, Star, Clock, MapPin, ArrowRight, Zap, Pencil, User } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { T as TrueSolarBaziEngine, L as LocalLunarCalendar } from './BODF8xcG.js';
import { C as CitySearch } from './D_tFXoGc.js';
import { M as MapPicker } from './CoozNtRe.js';
import { DateTimePicker } from '@mantine/dates';

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
  THAN_SAT_ENUM2["NgocDuong"] = "Ngọc Đường";
  THAN_SAT_ENUM2["ThaiDuong"] = "Thái Dương";
  THAN_SAT_ENUM2["NguyetAn"] = "Nguyệt Ân";
  THAN_SAT_ENUM2["ThienGiai"] = "Thiên Giải";
  THAN_SAT_ENUM2["GiaiThan"] = "Giải Thần";
  THAN_SAT_ENUM2["ThanhLong"] = "Thanh Long";
  THAN_SAT_ENUM2["MinhDuong"] = "Minh Đường";
  THAN_SAT_ENUM2["KimQuy"] = "Kim Quỹ";
  THAN_SAT_ENUM2["TuMenh"] = "Tư Mệnh";
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
[
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

const getElementTextColor = (elementIdx) => {
  const element = NGU_HANH_NAMES[elementIdx];
  switch (element) {
    case "Kim":
      return "text-stone-500";
    // Metal: Dark Gray (Ink-like)
    case "Mộc":
      return "text-emerald-700";
    // Wood: Deep Green
    case "Thủy":
      return "text-blue-800";
    // Water: Deep Blue
    case "Hỏa":
      return "text-red-700";
    // Fire: Deep Red
    case "Thổ":
      return "text-amber-700";
    // Earth: Deep Brown
    default:
      return "text-stone-800";
  }
};
const getCanColor = (canName) => {
  const idx = TrueSolarBaziEngine.CAN.indexOf(canName);
  if (idx === -1) return "text-stone-700";
  const elementIdx = CAN_NGU_HANH[idx];
  return getElementTextColor(elementIdx);
};
const getChiColor = (chiName) => {
  const idx = TrueSolarBaziEngine.CHI.indexOf(chiName);
  if (idx === -1) return "text-stone-700";
  const elementIdx = CHI_NGU_HANH[idx];
  return getElementTextColor(elementIdx);
};

const ZodiacHourClock = ({ hours }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const SIZE = 300;
  const CENTER = SIZE / 2;
  const RADIUS = 102;
  const INNER_RADIUS = 45;
  const LABEL_RADIUS = 125;
  const START_OFFSET = 75;
  const getHourColor = (hour) => {
    if (hour.isHoangDao) {
      if (hour.score >= 65) return "#10b981";
      if (hour.score >= 60) return "#4ade80";
      return "#86efac";
    } else {
      if (hour.score <= 35) return "#ef4444";
      if (hour.score <= 45) return "#fb923c";
      return "#fcd34d";
    }
  };
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const rad = angleInDegrees * Math.PI / 180;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad)
    };
  };
  const createWedge = (index, hour) => {
    const startAngle = START_OFFSET + index * 30;
    const endAngle = startAngle + 30;
    const start = polarToCartesian(CENTER, CENTER, RADIUS, startAngle);
    const end = polarToCartesian(CENTER, CENTER, RADIUS, endAngle);
    const startInner = polarToCartesian(CENTER, CENTER, INNER_RADIUS, startAngle);
    const endInner = polarToCartesian(CENTER, CENTER, INNER_RADIUS, endAngle);
    const largeArcFlag = 0;
    const color = getHourColor(hour);
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
          hour.isHoangDao && /* @__PURE__ */ jsx(
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
          renderLabel(index, startAngle + 15, hour.chi, hour.score, hour.isHoangDao)
        ]
      },
      index
    );
  };
  const renderLabel = (index, angle, label, score, isHoangDao) => {
    const pos = polarToCartesian(CENTER, CENTER, LABEL_RADIUS, angle);
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
      "text",
      {
        x: pos.x,
        y: pos.y,
        textAnchor: "middle",
        dominantBaseline: "middle",
        className: `text-xs font-bold font-serif ${isHoangDao ? "fill-amber-700" : "fill-gray-600"}`,
        children: [
          label,
          isHoangDao && " ★"
        ]
      }
    ) });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-4 text-md font-bold text-gray-800 uppercase tracking-wide", children: "Giờ Hoàng Đạo" }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs("svg", { width: SIZE, height: SIZE, viewBox: `0 0 ${SIZE} ${SIZE}`, children: [
      /* @__PURE__ */ jsx("circle", { cx: CENTER, cy: CENTER, r: RADIUS, fill: "#f9fafb" }),
      hours.map((h, i) => createWedge(i, h)),
      /* @__PURE__ */ jsx("circle", { cx: CENTER, cy: CENTER, r: INNER_RADIUS - 5, fill: "white", className: "drop-shadow-sm" }),
      hoveredIndex !== null ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("text", { x: CENTER, y: hours[hoveredIndex].isHoangDao ? CENTER - 5 : CENTER, dominantBaseline: "middle", textAnchor: "middle", className: "text-sm font-bold fill-gray-800 uppercase", children: [
          hours[hoveredIndex].chi,
          " ",
          hours[hoveredIndex].isHoangDao && "★"
        ] }),
        hours[hoveredIndex].isHoangDao && /* @__PURE__ */ jsx("text", { x: CENTER, y: CENTER + 12, textAnchor: "middle", className: "text-[9px] font-bold fill-amber-500 uppercase", children: "Hoàng Đạo" })
      ] }) : /* @__PURE__ */ jsx("text", { x: CENTER, y: CENTER, textAnchor: "middle", dominantBaseline: "middle", className: "text-[10px] fill-gray-400", children: "12 Giáp" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-col items-center gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-[10px] flex-wrap justify-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500" }),
        " H.Đạo (Tốt)"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-green-400" }),
        " H.Đạo (Khá)"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-300" }),
        " Bình Thường"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-orange-400" }),
        " Xấu"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-red-500" }),
        " H.Đạo (Xung)"
      ] })
    ] }) })
  ] });
};

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
  [THAN_SAT_ENUM.NgocDuong]: "Sao Hoàng Đạo tốt, chủ về văn chương, khoa bảng, hỗ trợ việc công.",
  [THAN_SAT_ENUM.ThaiDuong]: "Quang minh chính đại, dương khí vượng, tốt cho nam giới, công danh.",
  [THAN_SAT_ENUM.NguyetAn]: "Ân huệ của nguyệt thần, hóa giải hung sát, tốt cho cầu phúc.",
  [THAN_SAT_ENUM.ThienGiai]: "Trời ban phúc giải tai ương, bệnh tật, oan khuất.",
  [THAN_SAT_ENUM.GiaiThan]: "Thần giải thoát, hóa giải tranh chấp, thị phi, giúp hòa hoãn.",
  [THAN_SAT_ENUM.ThanhLong]: "Rồng xanh đắc địa, mang lại may mắn, tốt cho cầu tài, hỷ sự.",
  [THAN_SAT_ENUM.MinhDuong]: "Minh đường sáng sủa, tốt cho cầu danh, yết kiến quý nhân.",
  [THAN_SAT_ENUM.KimQuy]: "Kho kim tiền, tài lộc dồi dào, tốt cho cưới hỏi, nhập trạch.",
  [THAN_SAT_ENUM.TuMenh]: "Nắm giữ mệnh lệnh, chủ về quyền uy, tốt cho việc nhậm chức.",
  [THAN_SAT_ENUM.LucHop]: "Sáu phương hòa hợp, tốt cho kết giao, cưới hỏi, hợp tác.",
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
const THIEN_HOANG_DAO_12 = [
  THAN_SAT_ENUM.ThanhLong,
  // 0: Hoàng Đạo (Tốt)
  THAN_SAT_ENUM.MinhDuong,
  // 1: Hoàng Đạo (Tốt)
  THAN_SAT_ENUM.ThienHinh,
  // 2: Hắc Đạo (Xấu)
  THAN_SAT_ENUM.ChuTuoc,
  // 3: Hắc Đạo (Xấu)
  THAN_SAT_ENUM.KimQuy,
  // 4: Hoàng Đạo (Tốt)
  THAN_SAT_ENUM.ThienDuc,
  // 5: Hoàng Đạo (Tốt)
  THAN_SAT_ENUM.BachHo,
  // 6: Hắc Đạo (Xấu)
  THAN_SAT_ENUM.NgocDuong,
  // 7: Hoàng Đạo (Tốt)
  THAN_SAT_ENUM.ThienLao,
  // 8: Hắc Đạo (Xấu)
  THAN_SAT_ENUM.NguyenVu,
  // 9: Hắc Đạo (Xấu)
  THAN_SAT_ENUM.TuMenh,
  // 10: Hoàng Đạo (Tốt)
  THAN_SAT_ENUM.CauTran
  // 11: Hắc Đạo (Xấu)
];

const STAR_TYPE = {
  [THAN_SAT_ENUM.ThanhLong]: 1,
  [THAN_SAT_ENUM.MinhDuong]: 1,
  [THAN_SAT_ENUM.KimQuy]: 1,
  [THAN_SAT_ENUM.ThienDuc]: 1,
  [THAN_SAT_ENUM.NgocDuong]: 1,
  [THAN_SAT_ENUM.TuMenh]: 1,
  [THAN_SAT_ENUM.ThienHinh]: -1,
  [THAN_SAT_ENUM.ChuTuoc]: -1,
  [THAN_SAT_ENUM.BachHo]: -1,
  [THAN_SAT_ENUM.ThienLao]: -1,
  [THAN_SAT_ENUM.NguyenVu]: -1,
  [THAN_SAT_ENUM.CauTran]: -1
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
    const starName = THIEN_HOANG_DAO_12[starIndex];
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
  // CẤU HÌNH CƠ BẢN
  BASE: {
    DAY_START: 50,
    HOUR_START: 50
  },
  // NGƯỠNG ĐÁNH GIÁ (0-100 Scale)
  VERDICT_THRESHOLDS: {
    EXCELLENT: 80,
    // Vượng Khí (Đại Cát)
    GOOD: 65,
    // Sinh Khí (Tiểu Cát)
    AVERAGE: 50,
    // Bình Hòa
    BAD: 35,
    // Suy Khí (Hư Hao nhẹ)
    VERY_BAD: 20
    // Hư Hao (Rất xấu)
  },
  // 2. CẤU HÌNH VI MÔ (MICRO) - ĐÁNH GIÁ GIỜ
  MICRO: {
    SCORES: {
      HOANG_DAO: 10,
      // +10
      HAC_DAO: -10,
      // -10
      LUC_DIEU: { GOOD: 5, BAD: -5 },
      TRUC_HOP: 5}
  }
};
const STAR_SCORES = {
  // --- ĐẠI HUNG TINH (VETO) ---
  [THAN_SAT_ENUM.SatChu]: {
    base: -40,
    // Base 50 - 40 = 10 (Very Bad)
    type: "bad",
    actions: { WEDDING: -60, CONSTRUCTION: -60, BUSINESS: -40 },
    remedies: [
      { star: THAN_SAT_ENUM.ThienDuc, factor: 0.8 },
      { star: THAN_SAT_ENUM.NguyetDuc, factor: 0.8 },
      { star: THAN_SAT_ENUM.ThienXa, factor: 0.9 },
      { star: THAN_SAT_ENUM.GiaiThan, factor: 0.5 }
    ],
    advice: { avoid: ["DONG_THO", "CUOI_HOI"] }
  },
  [THAN_SAT_ENUM.ThuTu]: {
    base: -40,
    type: "bad",
    actions: { WEDDING: -60, CONSTRUCTION: -60, BUSINESS: -40 },
    remedies: [
      { star: THAN_SAT_ENUM.ThienDuc, factor: 0.8 },
      { star: THAN_SAT_ENUM.NguyetDuc, factor: 0.8 },
      { star: THAN_SAT_ENUM.ThienXa, factor: 0.9 }
    ],
    advice: { avoid: ["DONG_THO", "CUOI_HOI"] }
  },
  [THAN_SAT_ENUM.DuongCongKy]: {
    base: -50,
    type: "bad",
    actions: { ALL: -60 },
    advice: { avoid: ["DONG_THO", "CUOI_HOI", "KHAI_TRUONG", "XUAT_HANH"] }
  },
  [THAN_SAT_ENUM.ThienKhacDiaXung]: { base: -30, type: "bad", actions: { ALL: -40 }, advice: { avoid: ["XUAT_HANH", "KY_KET"] } },
  [THAN_SAT_ENUM.NguyetPha]: {
    base: -30,
    type: "bad",
    actions: { CONSTRUCTION: -50, BUSINESS: -40 },
    remedies: [
      { star: THAN_SAT_ENUM.NguyetKhong, factor: 0.7 },
      { star: THAN_SAT_ENUM.ThienGiai, factor: 0.5 }
    ],
    advice: { avoid: ["KHAI_TRUONG", "DONG_THO"] }
  },
  [THAN_SAT_ENUM.ThienCuong]: { base: -25, type: "bad", actions: { CONSTRUCTION: -40 }, advice: { avoid: ["DONG_THO"] } },
  [THAN_SAT_ENUM.DiaPha]: {
    base: -20,
    type: "bad",
    actions: { CONSTRUCTION: -30 },
    remedies: [
      { star: THAN_SAT_ENUM.NguyetAn, factor: 0.7 },
      { star: THAN_SAT_ENUM.TamHop, factor: 0.7 },
      { star: THAN_SAT_ENUM.LucHop, factor: 0.7 }
    ],
    advice: { avoid: ["DONG_THO"] }
  },
  [THAN_SAT_ENUM.HoangVu]: {
    base: -20,
    type: "bad",
    actions: { CONSTRUCTION: -30, WEDDING: -20 },
    remedies: [
      { star: THAN_SAT_ENUM.ThienDuc, factor: 0.7 },
      { star: THAN_SAT_ENUM.NguyetDuc, factor: 0.7 }
    ],
    advice: { avoid: ["DONG_THO", "NHAP_TRACH"] }
  },
  // --- HUNG TINH KHÁC ---
  [THAN_SAT_ENUM.TamNuong]: {
    base: -15,
    type: "bad",
    actions: { ALL: -20, WEDDING: -40 },
    remedies: [
      { star: THAN_SAT_ENUM.ThienDuc, factor: 0.9 },
      { star: THAN_SAT_ENUM.NguyetDuc, factor: 0.9 },
      { star: THAN_SAT_ENUM.ThienXa, factor: 0.9 }
    ],
    advice: { avoid: ["CUOI_HOI", "XUAT_HANH"] }
  },
  [THAN_SAT_ENUM.NguyetKy]: {
    base: -10,
    type: "bad",
    actions: { XUAT_HANH: -25 },
    remedies: [
      { star: THAN_SAT_ENUM.ThienDuc, factor: 0.8 },
      { star: THAN_SAT_ENUM.NguyetDuc, factor: 0.8 }
    ],
    advice: { avoid: ["XUAT_HANH"] }
  },
  [THAN_SAT_ENUM.TuLy_TuTuyet]: { base: -15, type: "bad", actions: { ALL: -20 }, advice: { avoid: ["CUOI_HOI", "KY_KET"] } },
  // --- CÁT TINH ---
  [THAN_SAT_ENUM.ThienDuc]: { base: 15, type: "good", actions: { ALL: 15 }, advice: { do: ["TO_TUNG", "TE_LE"] } },
  [THAN_SAT_ENUM.NguyetDuc]: { base: 15, type: "good", actions: { ALL: 15 }, advice: { do: ["XUAT_HANH", "KY_KET", "TRI_BENH"] } },
  [THAN_SAT_ENUM.ThienXa]: { base: 20, type: "good", actions: { ALL: 20 }, advice: { do: ["TO_TUNG", "KHAI_TRUONG", "DONG_THO"] } },
  [THAN_SAT_ENUM.NguyetKhong]: { base: 10, type: "good", actions: { CONSTRUCTION: 15 }, advice: { do: ["DONG_THO"] } },
  [THAN_SAT_ENUM.SinhKhi]: { base: 15, type: "good", actions: { CONSTRUCTION: 20 }, advice: { do: ["DONG_THO", "NHAP_TRACH"] } },
  [THAN_SAT_ENUM.ThienHy]: { base: 10, type: "good", actions: { WEDDING: 25 }, advice: { do: ["CUOI_HOI"] } },
  [THAN_SAT_ENUM.ThienDucHop]: { base: 5, type: "good", actions: { DAU_TU: 15, TE_LE: 15 }, advice: { do: ["DAU_TU", "TE_LE"] } },
  [THAN_SAT_ENUM.NguyetDucHop]: { base: 5, type: "good", actions: { KY_KET: 15 }, advice: { do: ["KY_KET"] } },
  [THAN_SAT_ENUM.ThienAtQuyNhan]: { base: 15, type: "good", actions: { ALL: 15 }, advice: { do: ["DAU_TU", "XUAT_HANH"] } },
  [THAN_SAT_ENUM.ThienLoc]: { base: 10, type: "good", actions: { BUSINESS: 20 }, advice: { do: ["KHAI_TRUONG", "DAU_TU"] } },
  [THAN_SAT_ENUM.LocKho]: { base: 8, type: "good", actions: { BUSINESS: 15 }, advice: { do: ["KY_KET", "MUA_XE"] } },
  [THAN_SAT_ENUM.ThienPhu]: { base: 8, type: "good", actions: { BUSINESS: 15, CONSTRUCTION: 10 }, advice: { do: ["KHAI_TRUONG", "DONG_THO"] } },
  // --- HẮC ĐẠO / SAO NHỎ ---
  [THAN_SAT_ENUM.ThienHinh]: {
    base: -10,
    type: "bad",
    actions: { LITIGATION: -25 },
    remedies: [
      { star: THAN_SAT_ENUM.NgocDuong, factor: 0.7 },
      { star: THAN_SAT_ENUM.ThaiDuong, factor: 0.7 }
    ],
    advice: { avoid: ["TO_TUNG"] }
  },
  [THAN_SAT_ENUM.ChuTuoc]: {
    base: -5,
    type: "bad",
    actions: { LITIGATION: -15, WEDDING: -5 },
    remedies: [{ star: THAN_SAT_ENUM.NgocDuong, factor: 0.7 }],
    advice: { avoid: ["TO_TUNG"] }
  },
  [THAN_SAT_ENUM.BachHo]: {
    base: -10,
    type: "bad",
    actions: { WEDDING: -15, CONSTRUCTION: -10 },
    remedies: [{ star: THAN_SAT_ENUM.ThienDuc, factor: 0.9 }],
    advice: { avoid: ["AN_TANG", "DONG_THO"] }
  },
  [THAN_SAT_ENUM.HuyenVu]: { base: -5, type: "bad", actions: { BUSINESS: -15 }, advice: { avoid: ["THU_NO"] } },
  [THAN_SAT_ENUM.CauTran]: { base: -5, type: "bad", advice: { avoid: ["DONG_THO"] } },
  [THAN_SAT_ENUM.ThienLao]: { base: -5, type: "bad", advice: { avoid: ["KHAI_TRUONG"] } },
  [THAN_SAT_ENUM.NguyenVu]: { base: -5, type: "bad", actions: { BUSINESS: -10 }, advice: { avoid: ["KY_KET"] } },
  // --- CHUYÊN BIỆT ---
  [THAN_SAT_ENUM.ThoPhu]: {
    base: -10,
    type: "bad",
    actions: { CONSTRUCTION: -40 },
    remedies: [{ star: THAN_SAT_ENUM.ThienDuc, factor: 0.9 }, { star: THAN_SAT_ENUM.SinhKhi, factor: 0.9 }],
    advice: { avoid: ["DONG_THO"] }
  },
  [THAN_SAT_ENUM.ThoCam]: {
    base: -10,
    type: "bad",
    actions: { CONSTRUCTION: -40 },
    remedies: [{ star: THAN_SAT_ENUM.ThienDuc, factor: 0.9 }, { star: THAN_SAT_ENUM.SinhKhi, factor: 0.9 }],
    advice: { avoid: ["DONG_THO"] }
  },
  [THAN_SAT_ENUM.CoThan]: {
    base: -10,
    type: "bad",
    actions: { WEDDING: -40 },
    remedies: [{ star: THAN_SAT_ENUM.ThienHy, factor: 0.7 }],
    advice: { avoid: ["CUOI_HOI"] }
  },
  [THAN_SAT_ENUM.QuaTu]: {
    base: -10,
    type: "bad",
    actions: { WEDDING: -40 },
    remedies: [{ star: THAN_SAT_ENUM.ThienHy, factor: 0.7 }],
    advice: { avoid: ["CUOI_HOI"] }
  },
  [THAN_SAT_ENUM.TrungTang]: {
    base: -15,
    type: "bad",
    actions: { AN_TANG: -60, CONSTRUCTION: -15, WEDDING: -15 },
    remedies: [{ star: THAN_SAT_ENUM.ThienDuc, factor: 0.9 }],
    advice: { avoid: ["AN_TANG", "CUOI_HOI"] }
  },
  [THAN_SAT_ENUM.KiepSat]: {
    base: -10,
    type: "bad",
    actions: { WEDDING: -20, CONSTRUCTION: -10, BUSINESS: -10 },
    remedies: [{ star: THAN_SAT_ENUM.NguyetKhong, factor: 0.9 }],
    advice: { avoid: ["CUOI_HOI", "XUAT_HANH"] }
  },
  [THAN_SAT_ENUM.ThienTac]: { base: -10, type: "bad", actions: { CONSTRUCTION: -20 }, advice: { avoid: ["DONG_THO"] } },
  [THAN_SAT_ENUM.LySang]: {
    base: 0,
    type: "bad",
    actions: { WEDDING: -40 },
    remedies: [{ star: THAN_SAT_ENUM.LucHop, factor: 0.7 }],
    advice: { avoid: ["CUOI_HOI"] }
  },
  [THAN_SAT_ENUM.KhongPhong]: { base: 0, type: "bad", actions: { WEDDING: -30 }, advice: { avoid: ["CUOI_HOI"] } },
  [THAN_SAT_ENUM.LucHop]: { base: 5, type: "good", actions: { WEDDING: 15, BUSINESS: 15 }, advice: { do: ["KY_KET", "CUOI_HOI"] } },
  [THAN_SAT_ENUM.TamHop]: { base: 5, type: "good", actions: { WEDDING: 15, BUSINESS: 15 }, advice: { do: ["KY_KET"] } },
  // --- BỔ SUNG TỪ REFACTOR ---
  // HÔN NHÂN (WEDDING)
  // HÔN NHÂN (WEDDING)
  [THAN_SAT_ENUM.NguyetYem]: { base: -10, type: "bad", actions: { WEDDING: -40 }, advice: { avoid: ["CUOI_HOI"] } },
  [THAN_SAT_ENUM.NhanCach]: { base: -10, type: "bad", actions: { WEDDING: -30 }, advice: { avoid: ["CUOI_HOI"] } },
  [THAN_SAT_ENUM.IchHau]: { base: 10, type: "good", actions: { WEDDING: 20 }, advice: { do: ["CUOI_HOI"] } },
  [THAN_SAT_ENUM.TueHop]: { base: 10, type: "good", actions: { WEDDING: 20 }, advice: { do: ["CUOI_HOI"] } },
  // XÂY DỰNG / KINH DOANH (CONSTRUCTION / BUSINESS)
  [THAN_SAT_ENUM.ThoOn]: { base: -10, type: "bad", actions: { CONSTRUCTION: -30 }, advice: { avoid: ["DONG_THO"] } },
  [THAN_SAT_ENUM.NguPhu]: { base: 10, type: "good", actions: { CONSTRUCTION: 20, BUSINESS: 20 }, advice: { do: ["DONG_THO", "KHAI_TRUONG"] } },
  [THAN_SAT_ENUM.ThienQuy]: { base: 10, type: "good", actions: { BUSINESS: 20, EDUCATION: 20 }, advice: { do: ["KHAI_TRUONG", "NHAP_HOC"] } },
  [THAN_SAT_ENUM.ThienThanh]: { base: 10, type: "good", actions: { BUSINESS: 15 }, advice: { do: ["KHAI_TRUONG", "KY_KET"] } },
  [THAN_SAT_ENUM.TieuHongSa]: { base: -10, type: "bad", actions: { XUAT_HANH: -25, BUSINESS: -20 }, advice: { avoid: ["XUAT_HANH", "KHAI_TRUONG"] } },
  [THAN_SAT_ENUM.DaiHao]: { base: -15, type: "bad", actions: { BUSINESS: -40, RISKY_BUSINESS: -40 }, advice: { avoid: ["DAU_TU", "KHAI_TRUONG"] } },
  // TÂM LINH (SPIRITUAL)
  [THAN_SAT_ENUM.ThienPhuc]: { base: 10, type: "good", actions: { SPIRITUAL: 20 }, advice: { do: ["TE_LE"] } },
  [THAN_SAT_ENUM.PhucSinh]: { base: 10, type: "good", actions: { SPIRITUAL: 20, AN_TANG: 15 }, advice: { do: ["TE_LE", "AN_TANG"] } },
  [THAN_SAT_ENUM.QuyKhoc]: { base: -15, type: "bad", actions: { SPIRITUAL: -30, AN_TANG: -30 }, advice: { avoid: ["TE_LE", "AN_TANG"] } },
  // KHÁC
  [THAN_SAT_ENUM.ThienMa]: { base: 10, type: "good", actions: { DAILY: 20, BUSINESS: 15 }, advice: { do: ["XUAT_HANH", "KHAI_TRUONG"] } },
  [THAN_SAT_ENUM.QuanNhat]: { base: 10, type: "good", actions: { EDUCATION: 20 }, advice: { do: ["NHAP_HOC"] } },
  [THAN_SAT_ENUM.MinhTinh]: { base: 10, type: "good", actions: { LITIGATION: 20 }, advice: { do: ["TO_TUNG"] } },
  [THAN_SAT_ENUM.NguyetHinh]: { base: -15, type: "bad", actions: { LITIGATION: -40 }, advice: { avoid: ["TO_TUNG"] } }
};
const TRUC_SCORES = {
  [TRUC_ENUM.Thanh]: {
    base: 15,
    type: "good",
    actions: { CONSTRUCTION: 20, BUSINESS: 20, WEDDING: 20, EDUCATION: 15 },
    advice: { do: ["KHAI_TRUONG", "CUOI_HOI", "NHAP_HOC"], avoid: ["TO_TUNG"] }
  },
  [TRUC_ENUM.Khai]: {
    base: 15,
    type: "good",
    actions: { BUSINESS: 20, WEDDING: 20, CONSTRUCTION: 15, AN_TANG: -20 },
    advice: { do: ["KHAI_TRUONG", "CUOI_HOI", "XUAT_HANH"], avoid: ["AN_TANG"] }
  },
  [TRUC_ENUM.Man]: {
    base: 10,
    type: "good",
    actions: { BUSINESS: 15, CONSTRUCTION: 10, WEDDING: 15, LITIGATION: -20, TE_LE: 15 },
    advice: { do: ["KHAI_TRUONG", "DAU_TU", "TE_LE"], avoid: ["TO_TUNG"] }
  },
  [TRUC_ENUM.Dinh]: {
    base: 10,
    type: "good",
    actions: { CONSTRUCTION: 10, BUSINESS: 15, EDUCATION: 20, TRI_BENH: -20 },
    advice: { do: ["NHAP_HOC", "KY_KET", "KHAI_TRUONG"], avoid: ["TRI_BENH"] }
  },
  [TRUC_ENUM.Binh]: {
    base: 5,
    type: "good",
    actions: { ALL: 5, LITIGATION: 10, DAU_TU: -20 },
    advice: { do: ["TO_TUNG", "DONG_THO"], avoid: ["DAU_TU"] }
  },
  [TRUC_ENUM.Kien]: {
    base: 5,
    type: "good",
    actions: { CONSTRUCTION: -10, BUSINESS: -10, EDUCATION: -15, XUAT_HANH: 15, KHAI_TRUONG: 15 },
    advice: { do: ["XUAT_HANH", "KHAI_TRUONG"], avoid: ["DONG_THO"] }
  },
  [TRUC_ENUM.Chap]: {
    base: -5,
    type: "bad",
    actions: { CONSTRUCTION: 10, BUSINESS: -15, KHAI_TRUONG: -20, XUAT_HANH: -20, TE_LE: 15 },
    advice: { do: ["TE_LE"], avoid: ["KHAI_TRUONG", "XUAT_HANH"] }
  },
  [TRUC_ENUM.Nguy]: {
    base: -15,
    type: "bad",
    actions: { CONSTRUCTION: -30, RISKY_BUSINESS: -30, XUAT_HANH: -20, TE_LE: 15 },
    advice: { do: ["TE_LE"], avoid: ["XUAT_HANH", "DAU_TU"] }
  },
  [TRUC_ENUM.Pha]: {
    base: -20,
    type: "bad",
    actions: { WEDDING: -30, BUSINESS: -25, CONSTRUCTION: 10, EDUCATION: -25 },
    advice: { do: ["DONG_THO"], avoid: ["CUOI_HOI", "KHAI_TRUONG"] }
  },
  [TRUC_ENUM.Be]: {
    base: -15,
    type: "bad",
    actions: { BUSINESS: -30, TREATMENT: -30, CONSTRUCTION: -20, DONG_THO: 10 },
    advice: { do: ["DONG_THO"], avoid: ["KHAI_TRUONG", "TRI_BENH"] }
  },
  [TRUC_ENUM.Thu]: {
    base: 5,
    type: "good",
    // Changed from -20 (bad) to 5 (mixed/good for holding)
    actions: { BUSINESS: 10, CONSTRUCTION: -25, WEDDING: -25, AN_TANG: -50, KHAI_TRUONG: -20, DAU_TU: -20, TE_LE: 15 },
    advice: { do: ["THU_NO", "TE_LE"], avoid: ["DAU_TU", "KHAI_TRUONG", "AN_TANG"] }
  },
  [TRUC_ENUM.Tru]: {
    base: 5,
    type: "good",
    actions: { TREATMENT: 20, BUSINESS: -10, WEDDING: -10, TE_LE: 20 },
    advice: { do: ["TRI_BENH", "TE_LE"], avoid: ["CUOI_HOI", "XUAT_HANH"] }
  }
};
const TU_SCORES = {
  [NHI_THAP_BAT_TU_ENUM.Giac]: { base: 10, type: "good", actions: { EDUCATION: 20, BUSINESS: 15, AN_TANG: -10 }, advice: { do: ["NHAP_HOC", "KHAI_TRUONG"], avoid: ["AN_TANG"] } },
  [NHI_THAP_BAT_TU_ENUM.Cang]: {
    base: -15,
    type: "bad",
    actions: { WEDDING: -30 },
    remedies: [{ star: THAN_SAT_ENUM.ThienHy, factor: 0.7 }],
    advice: { avoid: ["CUOI_HOI"] }
  },
  [NHI_THAP_BAT_TU_ENUM.De]: {
    base: -15,
    type: "bad",
    actions: { CONSTRUCTION: -30, XUAT_HANH: -25 },
    remedies: [{ star: THAN_SAT_ENUM.ThienDuc, factor: 0.8 }],
    advice: { avoid: ["DONG_THO", "XUAT_HANH"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Phong]: { base: 20, type: "good", actions: { CONSTRUCTION: 25, WEDDING: 25, BUSINESS: 25 }, advice: { do: ["DONG_THO", "CUOI_HOI", "KHAI_TRUONG"] } },
  [NHI_THAP_BAT_TU_ENUM.Tam]: {
    base: -20,
    type: "bad",
    actions: { CONSTRUCTION: -40, WEDDING: -40 },
    remedies: [{ star: THAN_SAT_ENUM.ThienDuc, factor: 0.8 }],
    advice: { avoid: ["DONG_THO", "CUOI_HOI"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Vi]: { base: 20, type: "good", actions: { BUSINESS: 25, CONSTRUCTION: 25, WEDDING: 25 }, advice: { do: ["KHAI_TRUONG", "DONG_THO", "CUOI_HOI"] } },
  [NHI_THAP_BAT_TU_ENUM.Co]: { base: 10, type: "good", actions: { BUSINESS: 15, EDUCATION: 15 }, advice: { do: ["NHAP_HOC", "KHAI_TRUONG"] } },
  [NHI_THAP_BAT_TU_ENUM.Dau]: { base: 15, type: "good", actions: { BUSINESS: 20, CONSTRUCTION: 15 }, advice: { do: ["KHAI_TRUONG", "DONG_THO"] } },
  [NHI_THAP_BAT_TU_ENUM.Nguu]: {
    base: -15,
    type: "bad",
    actions: { WEDDING: -30, BUSINESS: -25 },
    remedies: [{ star: THAN_SAT_ENUM.ThienLoc, factor: 0.7 }],
    advice: { avoid: ["CUOI_HOI", "KHAI_TRUONG"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Nu]: {
    base: -15,
    type: "bad",
    actions: { WEDDING: -40, BUSINESS: -30, LITIGATION: -30 },
    remedies: [{ star: THAN_SAT_ENUM.ThienHy, factor: 0.7 }],
    advice: { avoid: ["CUOI_HOI", "TO_TUNG"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Hu]: {
    base: -20,
    type: "bad",
    actions: { CONSTRUCTION: -40, WEDDING: -40 },
    remedies: [{ star: THAN_SAT_ENUM.LucHop, factor: 0.7 }],
    advice: { avoid: ["DONG_THO", "CUOI_HOI"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Nguy]: {
    base: -15,
    type: "bad",
    actions: { CONSTRUCTION: -40, BUSINESS: 10, TE_LE: 15, XUAT_HANH: -25 },
    remedies: [{ star: THAN_SAT_ENUM.ThienDuc, factor: 0.7 }],
    advice: { do: ["TE_LE"], avoid: ["DONG_THO", "XUAT_HANH"] }
  },
  [NHI_THAP_BAT_TU_ENUM.That]: { base: 15, type: "good", actions: { CONSTRUCTION: 20, BUSINESS: 20 }, advice: { do: ["KHAI_TRUONG", "DONG_THO"] } },
  [NHI_THAP_BAT_TU_ENUM.Bich]: { base: 15, type: "good", actions: { CONSTRUCTION: 20, WEDDING: 20, EDUCATION: 20 }, advice: { do: ["KHAI_TRUONG", "CUOI_HOI", "NHAP_HOC"] } },
  [NHI_THAP_BAT_TU_ENUM.Khue]: {
    base: -15,
    type: "bad",
    actions: { WEDDING: -25, BUSINESS: -20 },
    remedies: [{ star: THAN_SAT_ENUM.ThienHy, factor: 0.7 }],
    advice: { avoid: ["KHAI_TRUONG", "CUOI_HOI"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Lau]: { base: 15, type: "good", actions: { BUSINESS: 20, CONSTRUCTION: 15, WEDDING: 15 }, advice: { do: ["KHAI_TRUONG", "DONG_THO"] } },
  [NHI_THAP_BAT_TU_ENUM.Vi_D]: { base: 15, type: "good", actions: { BUSINESS: 20, CONSTRUCTION: 20, AN_TANG: 20 }, advice: { do: ["KHAI_TRUONG", "DONG_THO", "AN_TANG"] } },
  [NHI_THAP_BAT_TU_ENUM.Mao]: {
    base: -15,
    type: "bad",
    actions: { WEDDING: -30, CONSTRUCTION: -20 },
    remedies: [{ star: THAN_SAT_ENUM.ThienDuc, factor: 0.7 }],
    advice: { avoid: ["CUOI_HOI", "DONG_THO"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Tat]: { base: 15, type: "good", actions: { CONSTRUCTION: 20, BUSINESS: 20, WEDDING: 20 }, advice: { do: ["CUOI_HOI", "KHAI_TRUONG", "DONG_THO"] } },
  [NHI_THAP_BAT_TU_ENUM.Tuy]: {
    base: -15,
    type: "bad",
    actions: { BUSINESS: -30, WEDDING: -25 },
    remedies: [{ star: THAN_SAT_ENUM.ThienLoc, factor: 0.7 }],
    advice: { avoid: ["KHAI_TRUONG", "CUOI_HOI"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Sam]: { base: 10, type: "good", actions: { BUSINESS: 15, EDUCATION: 15, XUAT_HANH: 15 }, advice: { do: ["NHAP_HOC", "KHAI_TRUONG", "XUAT_HANH"] } },
  [NHI_THAP_BAT_TU_ENUM.Tinh]: { base: 10, type: "good", actions: { BUSINESS: 15, CONSTRUCTION: 10 }, advice: { do: ["KHAI_TRUONG", "DONG_THO"] } },
  [NHI_THAP_BAT_TU_ENUM.Quy]: {
    base: -20,
    type: "bad",
    actions: { CONSTRUCTION: -40, WEDDING: -70 },
    remedies: [{ star: THAN_SAT_ENUM.ThienDuc, factor: 0.8 }],
    advice: { avoid: ["DONG_THO", "CUOI_HOI"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Lieu]: {
    base: -20,
    type: "bad",
    actions: { CONSTRUCTION: -40, BUSINESS: -30, WEDDING: -40 },
    remedies: [{ star: THAN_SAT_ENUM.SinhKhi, factor: 0.7 }],
    advice: { avoid: ["DONG_THO", "KHAI_TRUONG", "CUOI_HOI"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Tinh_H]: {
    base: -15,
    type: "bad",
    actions: { WEDDING: -25 },
    remedies: [{ star: THAN_SAT_ENUM.ThienHy, factor: 0.7 }],
    advice: { avoid: ["CUOI_HOI"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Truong]: { base: 15, type: "good", actions: { WEDDING: 20, BUSINESS: 15, DAU_TU: 15 }, advice: { do: ["KHAI_TRUONG", "CUOI_HOI", "DAU_TU"] } },
  [NHI_THAP_BAT_TU_ENUM.Duc]: {
    base: -10,
    type: "bad",
    actions: { CONSTRUCTION: -20 },
    remedies: [{ star: THAN_SAT_ENUM.SinhKhi, factor: 0.7 }],
    advice: { avoid: ["DONG_THO"] }
  },
  [NHI_THAP_BAT_TU_ENUM.Chan]: { base: 15, type: "good", actions: { BUSINESS: 20, CONSTRUCTION: 15, WEDDING: 20, EDUCATION: 20 }, advice: { do: ["KHAI_TRUONG", "CUOI_HOI", "DONG_THO", "NHAP_HOC"] } }
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
  { id: "DONG_THO", category: "CONSTRUCTION", label: "Động thổ / Khởi công" },
  { id: "NHAP_TRACH", category: "CONSTRUCTION", label: "Nhập trạch (Vào nhà mới)" },
  // --- NHÓM KINH DOANH ---
  { id: "KHAI_TRUONG", category: "BUSINESS", label: "Khai trương / Mở cửa hàng" },
  { id: "KY_KET", category: "BUSINESS", label: "Ký hợp đồng / Giao dịch" },
  { id: "MUA_XE", category: "BUSINESS", label: "Mua xe / Tài sản lớn" },
  { id: "THU_NO", category: "BUSINESS", label: "Thu nợ / Cất giữ tài sản" },
  // --- NHÓM HÔN NHÂN ---
  { id: "CUOI_HOI", category: "WEDDING", label: "Cưới hỏi / Đính hôn" },
  // --- NHÓM TÂM LINH ---
  { id: "AN_TANG", category: "SPIRITUAL", label: "An táng / Mai táng" },
  { id: "TE_LE", category: "SPIRITUAL", label: "Tế lễ / Cúng bái" },
  // --- NHÓM ĐỜI SỐNG & SỨC KHỎE ---
  { id: "XUAT_HANH", category: "DAILY", label: "Xuất hành đi xa" },
  { id: "TRI_BENH", category: "TREATMENT", label: "Trị bệnh / Phẫu thuật" },
  // --- NHÓM ĐẦU TƯ / CẦU TÀI ---
  { id: "DAU_TU", category: "RISKY_BUSINESS", label: "Đầu tư / Cầu tài (Vay mượn, hùn vốn)" },
  // --- NHÓM TỐ TỤNG / GIẢI OAN ---
  { id: "TO_TUNG", category: "LITIGATION", label: "Tố tụng / Giải oan" },
  // --- NHÓM CẦU DANH / HỌC TẬP ---
  { id: "NHAP_HOC", category: "EDUCATION", label: "Nhập học / Thi cử / Cầu danh" }
];
const ADVICE_TEMPLATES = {
  DONG_THO: {
    excellent: "Địa khí hưng vượng, đại cát để khởi công.",
    good: "Khởi tạo cát lợi, công trình thuận lợi.",
    average: "Bình hòa. Nên chọn giờ tốt để khởi công.",
    bad: "Thổ khí suy vi, nên cân nhắc kỹ.",
    very_bad: "Ngày rất xấu cho việc động thổ, nên tránh."
  },
  NHAP_TRACH: {
    excellent: "Tân gia đại cát, gia đạo hưng long.",
    good: "An cư lạc nghiệp, mọi việc thuận buồm xuôi gió.",
    average: "Bình thường. Nên làm lễ nhập trạch cẩn thận.",
    bad: "Năng lượng chưa tốt, dễ phát sinh phiền toái.",
    very_bad: "Ngày xấu, không thích hợp để vào nhà mới."
  },
  KHAI_TRUONG: {
    excellent: "Khai trương hồng phát, tài lộc dồi dào.",
    good: "Kinh doanh thuận lợi, khởi đầu tốt đẹp.",
    average: "Bình hòa. Cần chuẩn bị kỹ lưỡng.",
    bad: "Vận khí kém, khởi đầu dễ gặp khó khăn.",
    very_bad: "Ngày đại hung cho cầu tài, khai trương."
  },
  KY_KET: {
    excellent: "Giao kết đại lợi, hợp tác thành công.",
    good: "Thương thảo thuận lợi, đôi bên cùng có lợi.",
    average: "Có thể tiến hành, cần rà soát kỹ điều khoản.",
    bad: "Dễ nảy sinh bất đồng, cần thận trọng.",
    very_bad: "Khí trường xung khắc, không nên ký kết."
  },
  MUA_XE: {
    excellent: "Vạn sự hanh thông, đi lại bình an.",
    good: "Xe tốt, lộ trình thuận lợi.",
    average: "Bình thường. Nên chọn giờ hoàng đạo nhận xe.",
    bad: "Không thuận lợi cho việc mua sắm tài sản lớn.",
    very_bad: "Ngày xấu, kiêng kỵ mua xe."
  },
  CUOI_HOI: {
    excellent: "Trăm năm hảo hợp, gia đạo hưng thịnh.",
    good: "Lương duyên tốt đẹp, mọi sự cát tường.",
    average: "Bình ổn. Cần chọn giờ tốt đón dâu.",
    bad: "Ngày không đẹp cho hỷ sự.",
    very_bad: "Ngày rất xấu, kỵ cưới hỏi."
  },
  AN_TANG: {
    excellent: "Cát táng thuận lợi, ấm phúc tổ tiên.",
    good: "Mọi việc trôi chảy, vong linh siêu thoát.",
    average: "Bình thường. Cần chú trọng nghi thức.",
    bad: "Ngày kém may mắn, khí trường trầm lắng.",
    very_bad: "Ngày đại kỵ cho việc an táng, chôn cất."
  },
  TE_LE: {
    excellent: "Tâm thành tất ứng, phúc lộc dồi dào.",
    good: "Mọi việc thuận lợi, đại cát.",
    average: "Tốt khí bình hòa, có thể tiến hành.",
    bad: "Tâm trí dễ xao động, khó tịnh tâm.",
    very_bad: "Không phù hợp cho các nghi thức quan trọng."
  },
  XUAT_HANH: {
    excellent: "Thượng lộ bình an, gặp nhiều may mắn.",
    good: "Đường đi thuận lợi, công việc suôn sẻ.",
    average: "Bình thường. Chú ý hướng xuất hành.",
    bad: "Lộ trình dễ trắc trở, thận trọng khi đi xa.",
    very_bad: "Ngày xấu, hạn chế đi xa."
  },
  TRI_BENH: {
    excellent: "Gặp thầy gặp thuốc, mau chóng bình phục.",
    good: "Tiến triển khả quan, sức khỏe cải thiện.",
    average: "Có thể điều trị, cần kiên trì.",
    bad: "Hiệu quả trị liệu chậm.",
    very_bad: "Không nên can thiệp phẫu thuật lớn."
  },
  DAU_TU: {
    excellent: "Thời cơ đại lợi, tài lộc sinh sôi.",
    good: "Vận tài chính tốt, có sinh lời.",
    average: "Lợi nhuận đi kèm rủi ro trung bình.",
    bad: "Thị trường bất lợi, dễ hao tài.",
    very_bad: "Rủi ro cao, dễ thua lỗ nặng."
  },
  TO_TUNG: {
    excellent: "Quý nhân phù trợ, lẽ phải được thực thi.",
    good: "Kết quả khả quan, thủ tục thuận lợi.",
    average: "Cần kiên nhẫn và khéo léo.",
    bad: "Bất lợi về lý lẽ, dễ kéo dài.",
    very_bad: "Hạn chế tranh chấp, kiện tụng."
  },
  NHAP_HOC: {
    excellent: "Học hành đỗ đạt, công danh rạng rỡ.",
    good: "Tiếp thu nhanh, thi cử thuận lợi.",
    average: "Cần nỗ lực nhiều hơn.",
    bad: "Khó tập trung, kết quả không cao.",
    very_bad: "Không thuận lợi cho nhập học, thi cử."
  },
  THU_NO: {
    excellent: "Tiền bạc dồi dào, thu hồi dễ dàng.",
    good: "Đàm phán thuận lợi, tài chính hanh thông.",
    average: "Cần kiên nhẫn mới có kết quả.",
    bad: "Tiến độ chậm, khó thu hồi đủ.",
    very_bad: "Dễ nảy sinh tranh cãi vì tiền bạc."
  }
};
function getAdvice(actionId, score, warnings) {
  const template = ADVICE_TEMPLATES[actionId];
  const TH = SCORING_CONFIG.VERDICT_THRESHOLDS;
  let advice = "";
  if (template) {
    if (score >= TH.EXCELLENT) advice = template.excellent;
    else if (score >= TH.GOOD) advice = template.good;
    else if (score >= TH.AVERAGE) advice = template.average;
    else if (score > TH.VERY_BAD) advice = template.bad;
    else advice = template.very_bad;
  } else {
    if (score >= TH.EXCELLENT) advice = "Đại cát, vạn sự hanh thông.";
    else if (score >= TH.GOOD) advice = "Khá tốt.";
    else if (score >= TH.AVERAGE) advice = "Trung bình.";
    else advice = "Nên cân nhắc.";
  }
  if (warnings.length > 0) {
    advice += ` (Lưu ý: ${warnings.join(", ")})`;
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
    score -= 3;
    isStemClash = true;
    reasons.push("Thiên Can khắc Ngày");
  } else if (dayKhacUser) {
    score -= 1.5;
    reasons.push("Ngày khắc Thiên Can");
  }
  const isLucXung = LUC_XUNG[ageChi] === dayChi;
  let isBranchClash = false;
  if (isLucXung) {
    score -= 4;
    isBranchClash = true;
    reasons.push("Lục Xung Địa Chi");
  }
  const userKhacNapAm = SINH_KHAC.KHAC[ageNapAm] === dayNapAm;
  const dayKhacNapAm = SINH_KHAC.KHAC[dayNapAm] === ageNapAm;
  if (userKhacNapAm) {
    score -= 2;
    reasons.push("Nạp Âm khắc Ngày");
  } else if (dayKhacNapAm) {
    score -= 1;
    reasons.push("Nạp Âm bị Ngày khắc");
  }
  if (isStemClash && isBranchClash) {
    score -= 5;
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
    if (ageCan === dayCan && ageChi === dayChi) continue;
    const { score, reasons } = calculateAgeClashScore(dayCan, dayChi, dayNapAm, ageCan, ageChi);
    if (score <= -3) {
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
  return result.sort((a, b) => a.score - b.score);
};
const calculateHarmonyScore = (dayCan, dayChi, dayNapAm, ageCan, ageChi) => {
  let score = 0;
  const reasons = [];
  const ageNapAm = getNguHanhNapAm(ageCan, ageChi);
  const isStemHap = CAN_HOP[dayCan] === ageCan;
  if (isStemHap) {
    score += 1.5;
    reasons.push("Thiên Can Ngũ Hợp");
  }
  let isBranchLucHop = false;
  if (LUC_HOP[dayChi]?.partner === ageChi) {
    score += 2;
    isBranchLucHop = true;
    reasons.push("Địa Chi Lục Hợp");
  }
  if (!isBranchLucHop) {
    const group = TAM_HOP.find((g) => g.group.includes(dayChi));
    if (group && group.group.includes(ageChi) && dayChi !== ageChi) {
      score += 1.5;
      reasons.push("Địa Chi Tam Hợp");
    }
  }
  const dayGeneratesUser = SINH_KHAC.SINH[dayNapAm] === ageNapAm;
  const userGeneratesDay = SINH_KHAC.SINH[ageNapAm] === dayNapAm;
  const sameElement = dayNapAm === ageNapAm;
  if (dayGeneratesUser) {
    score += 1.5;
    reasons.push("Nạp Âm sinh Tuổi (sinh nhập)");
  } else if (userGeneratesDay) {
    score += 0.5;
    reasons.push("Tuổi sinh Nạp Âm (sinh xuất)");
  } else if (sameElement) {
    score += 0.5;
    reasons.push("Nạp Âm Tương Hòa");
  }
  if (isStemHap && isBranchLucHop) {
    score += 2;
    reasons.push("Thiên Địa Đức Hợp (đại Cát)");
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
    if (score >= 1.5) {
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

const getSeason = (monthChi) => {
  if ([CHI_ENUM.Dan, CHI_ENUM.Mao, CHI_ENUM.Thin].includes(monthChi)) return 1 /* XUAN */;
  if ([CHI_ENUM.Ti, CHI_ENUM.Ngo, CHI_ENUM.Mui].includes(monthChi)) return 2 /* HA */;
  if ([CHI_ENUM.Than, CHI_ENUM.Dau, CHI_ENUM.Tuat].includes(monthChi)) return 3 /* THU */;
  return 4 /* DONG */;
};
const calculateShenSha = (input) => {
  const { canDay, chiDay, chiMonth, season, lunarDay, isTuLy, isTuTuyet } = input;
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
  if (isTuLy || isTuTuyet) {
    hungTinh.push(THAN_SAT_ENUM.TuLy_TuTuyet);
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

class DayAttributeService {
  /**
   * 1. Tính toán các thông số chiêm tinh của ngày
   */
  static calculateAttributes(dateInput, lat = 21.0285, long = 105.8333) {
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
    const tomorrow = dayjs(date).add(1, "day").hour(23).toDate();
    const tomorrowInfo = LocalLunarCalendar.getLunarDetails(tomorrow, lat, long);
    const currentTerm = lunaInfo.mst;
    const nextTerm = tomorrowInfo.mst;
    let isTuLy = false;
    let isTuTuyet = false;
    if (currentTerm !== nextTerm) {
      const TU_LY_TERMS = ["Xuân Phân", "Hạ Chí", "Thu Phân", "Đông Chí"];
      const TU_KEY_TERMS = ["Lập Xuân", "Lập Hạ", "Lập Thu", "Lập Đông"];
      if (TU_LY_TERMS.includes(nextTerm)) {
        isTuLy = true;
      } else if (TU_KEY_TERMS.includes(nextTerm)) {
        isTuTuyet = true;
      }
    }
    const shenShaResult = calculateShenSha({
      canDay: dayCanEnum,
      chiDay: dayChiEnum,
      chiMonth: monthChiEnum,
      season,
      lunarDay,
      isTuLy,
      isTuTuyet
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
      THAN_SAT_ENUM.NguyetKy,
      THAN_SAT_ENUM.TrungTang
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
  }
}

class RescueService {
  /**
   * Tính toán mức độ chế hóa của các hung tinh.
   * @param activeBadStars Danh sách tên hung tinh đang kích hoạt
   * @param activeGoodStars Danh sách tên cát tinh đang kích hoạt
   * @param context Các thông tin bổ trợ (nếu cần mở rộng sau này)
   */
  static neutralize(activeBadStars, activeGoodStars, context) {
    return activeBadStars.map((name) => {
      const scoreDef = STAR_SCORES[name];
      const baseScore = scoreDef ? scoreDef.base : -2;
      let finalPenalty = baseScore;
      let isRescued = false;
      let rescueNote = void 0;
      let bestRemedy = void 0;
      if (scoreDef && scoreDef.remedies && scoreDef.remedies.length > 0) {
        const availableRemedies = scoreDef.remedies.filter((r) => activeGoodStars.includes(r.star));
        if (availableRemedies.length > 0) {
          const best = availableRemedies.reduce(
            (prev, current) => prev.factor > current.factor ? prev : current
          );
          isRescued = true;
          bestRemedy = best.star;
          const reliefFactor = best.factor;
          finalPenalty = baseScore * (1 - reliefFactor);
          if (reliefFactor >= 1) {
            rescueNote = `Hóa giải hoàn toàn bởi ${best.star}`;
            finalPenalty = 0;
          } else {
            rescueNote = `Giảm nhẹ sát khí nhờ ${best.star}`;
          }
        }
      }
      return {
        name,
        originalPenalty: baseScore,
        finalPenalty,
        isRescued,
        rescueNote,
        bestRemedy
      };
    });
  }
}

const resolveDayVerdict = (dayScore, affinity, processedBadStars, dayAttrs) => {
  const TH = SCORING_CONFIG.VERDICT_THRESHOLDS;
  const activeCriticalStars = processedBadStars.filter((s) => CRITICAL_STARS.includes(s.name));
  const unrescuedCritical = activeCriticalStars.filter((s) => !s.isRescued);
  if (unrescuedCritical.length > 0) {
    const reasons = unrescuedCritical.map((s) => s.name).join(", ");
    return {
      verdict: "Hư Hao (Đại Kỵ)",
      advice: `Năng lượng ngày chịu ảnh hưởng bởi ${reasons}. Khí trường xung khắc mạnh, nên tạm hoãn các việc đại sự để bảo toàn năng lượng.`,
      color: "red"
    };
  }
  if (dayScore < TH.BAD) {
    return {
      verdict: "Hư Hao",
      advice: "Vận khí ngày suy giảm, âm khí lấn át dương khí. Không thuận lợi cho việc khởi đầu hay đi xa.",
      color: "red"
    };
  }
  if (dayScore < TH.AVERAGE) {
    const reasons = activeCriticalStars.length > 0 ? "(Có sao xấu)" : "";
    return {
      verdict: "Suy Khí",
      advice: `Năng lượng ngày ở mức thấp ${reasons ? "và có chút biến động" : ""}. Cần sự cẩn trọng và nỗ lực cá nhân lớn để đạt kết quả.`,
      color: "orange"
    };
  }
  if (affinity && affinity.isCritical) {
    return {
      verdict: "Bình Hòa (Khắc Tuổi)",
      advice: `Ngày bình thường nhưng xung khắc riêng với tuổi gia chủ. Nên thận trọng trong các quyết định cá nhân.`,
      color: "orange"
    };
  }
  if (dayScore >= TH.EXCELLENT) {
    return {
      verdict: "Vượng Khí",
      advice: "Vượng khí hội tụ, năng lượng thuần khiết và mạnh mẽ. Thời điểm vàng để khởi sự và thực hiện dự định lớn.",
      color: "green"
    };
  }
  if (dayScore >= TH.GOOD) {
    return {
      verdict: "Sinh Khí",
      advice: "Sinh khí dồi dào, vận trình hanh thông. Mọi sự thuận lợi, dễ gặt hái thành công.",
      color: "green"
    };
  }
  return {
    verdict: "Bình Hòa",
    advice: "Khí trường cân bằng, ổn định. Tốt xấu đan xen, thích hợp duy trì công việc thường nhật.",
    color: "blue"
  };
};
const humanizeHourVerdict = (score, lucDieu, truc, thanSat, actionLabel = "công việc") => {
  const isGreatHour = thanSat.includes("Quý Nhân") || thanSat.includes("Đại Cát") || score >= 8;
  const isSlow = lucDieu === LUC_DIEU_ENUM.LuuNien || lucDieu === LUC_DIEU_ENUM.XichKhau;
  const isStable = truc === "Bình" || truc === "Định";
  if (isSlow && isGreatHour) {
    return `Mọi sự có phần dây dưa nhưng may mắn gặp quý nhân nên kết quả vẫn tốt.`;
  }
  if (isStable && score >= 5) {
    return `Giờ bình hòa, an toàn. Thích hợp tiến hành ${actionLabel} bền vững.`;
  }
  if (lucDieu === LUC_DIEU_ENUM.XichKhau && (truc === "Thành" || truc === "Khai")) {
    return `Dễ phát sinh tranh luận, nhưng khéo léo đàm phán vẫn thành công.`;
  }
  if (score >= 8) {
    return `Khung giờ vàng! Rất thuận lợi để triển khai ${actionLabel}.`;
  }
  if (score >= 4) return `Giờ khá tốt, năng lượng tích cực.`;
  if (score >= 0) return `Giờ trung bình, mọi sự bình thường.`;
  return `Giờ hơi kém, dễ gặp trở ngại.`;
};
const getYearCanChi = (year) => {
  const offset = year - 4;
  let canIdx = offset % 10;
  let chiIdx = offset % 12;
  if (canIdx < 0) canIdx += 10;
  if (chiIdx < 0) chiIdx += 12;
  return { can: canIdx, chi: chiIdx };
};
const evaluatePersonalAffinity = (userYear, timeCan, timeChi, type = "Ngày") => {
  const userPillar = getYearCanChi(userYear);
  getNguHanhNapAm(userPillar.can, userPillar.chi);
  const timeNapAm = getNguHanhNapAm(timeCan, timeChi);
  let totalScore = 0;
  const tags = [];
  let isCritical = false;
  const clashResult = calculateAgeClashScore(timeCan, timeChi, timeNapAm, userPillar.can, userPillar.chi);
  if (clashResult.score < 0) {
    totalScore += clashResult.score;
    clashResult.reasons.forEach((r) => {
      tags.push({
        label: r,
        type: "bad",
        description: `Xung khắc: ${r}`
      });
    });
    if (clashResult.score <= -5) {
      isCritical = true;
    }
  }
  const harmonyResult = calculateHarmonyScore(timeCan, timeChi, timeNapAm, userPillar.can, userPillar.chi);
  if (harmonyResult.score > 0) {
    totalScore += harmonyResult.score;
    harmonyResult.reasons.forEach((r) => {
      tags.push({
        label: r,
        type: "good",
        description: `Tương hợp: ${r}`
      });
    });
  }
  if (QUY_NHAN[userPillar.can]?.includes(timeChi)) {
    totalScore += 2;
    tags.push({ label: "Quý Nhân", type: "good", description: "Có quý nhân phù trợ." });
    if (isCritical) isCritical = false;
  }
  if (LOC_THAN[userPillar.can] === timeChi) {
    totalScore += 2;
    tags.push({ label: "Lộc Thần", type: "good", description: "Tốt cho tài lộc." });
  }
  return {
    score: totalScore,
    tags,
    isCritical
  };
};
const evaluateHourV2 = (hourChi, hourCan, dayChi, dayCan, monthChi, userProfile, userDungThan, dayScore = 5) => {
  const CFG = SCORING_CONFIG.MICRO;
  let score = SCORING_CONFIG.BASE.HOUR_START;
  const warnings = [];
  const bonuses = [];
  const tags = [];
  const hChiName = DATA.CHIS[hourChi];
  if (LUC_XUNG[hourChi] === dayChi) {
    score -= 5;
    warnings.push(`Nhật Phá: Giờ ${hChiName} xung ngày.`);
    tags.push("Nhật Phá");
  }
  const hourTruc = getHourTruc(dayChi, hourChi);
  if ([TRUC_ENUM.Thanh, TRUC_ENUM.Khai, TRUC_ENUM.Man, TRUC_ENUM.Dinh].includes(hourTruc)) {
    score += CFG.SCORES.TRUC_HOP;
  } else if ([TRUC_ENUM.Pha, TRUC_ENUM.Be].includes(hourTruc)) {
    score -= 1.5;
  }
  if (userProfile) {
    const affinityRes = evaluatePersonalAffinity(userProfile.year, hourCan, hourChi, "Giờ");
    score += affinityRes.score;
    if (affinityRes.isCritical) {
      tags.push("Xung Tuổi");
    }
  }
  if (userDungThan) {
    const el = CHI_NGU_HANH[hourChi];
    if (el === userDungThan.dungThan) {
      score += 2;
      bonuses.push("Giờ Dụng Thần");
    } else if (el === userDungThan.kyThan) {
      score -= 2;
      warnings.push("Giờ Kỵ Thần");
    }
  }
  if (QUY_NHAN[dayCan]?.includes(hourChi)) {
    score += 2;
    bonuses.push("Giờ Quý Nhân");
  }
  let rating = "Bình";
  if (score >= 8) rating = "Đại Cát";
  else if (score >= 5) rating = "Cát";
  else if (score >= 2) rating = "Bình";
  else rating = "Hung";
  return {
    score: parseFloat(score.toFixed(1)),
    rating,
    warnings,
    bonuses,
    tags: Array.from(new Set(tags)),
    details: { truc: DATA.TRUCS[hourTruc] }
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
    const bdStr = bd;
    const isCritical = ["Sát Chủ", "Thụ Tử", "Dương Công Kỵ", "Thiên Khắc Địa Xung"].includes(bdStr);
    tags.push({
      id: "BAD_DAY",
      label: bdStr,
      type: "general",
      color: isCritical ? "red" : "orange",
      description: isCritical ? "Đại hung" : "Kiêng việc lớn"
    });
  });
  const topGoodStars = ["Thiên Đức", "Nguyệt Đức", "Thiên Hỷ", "Thiên Tài", "Lộc Khố", "Thiên Ât Quý Nhân"];
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
    LITIGATION: "red",
    EDUCATION: "purple"
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
  if (dayInfo.affinity) {
    const status = dayInfo.affinity.score > 0 ? "good" : dayInfo.affinity.isCritical || dayInfo.affinity.score < -2 ? "bad" : "neutral";
    if (status === "good") {
      tags.push({ id: "AFFINITY_GOOD", label: `Hợp tuổi`, type: "personal", color: "green" });
    } else if (status === "bad") {
      tags.push({
        id: "AFFINITY_BAD",
        label: `Xung tuổi`,
        type: "personal",
        color: "red",
        description: "Xung khắc mạnh"
      });
    }
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

class ScoringEngine {
  static scoreDay(attrs, userContext) {
    const { dayCanEnum, dayChiEnum, trucEnum, sao, thanSat, badDays } = attrs;
    const userDungThan = userContext?.dungThan;
    const userProfile = userContext?.profile;
    let dayScore = SCORING_CONFIG.BASE.DAY_START;
    const rescueLogs = [];
    const processedBadStars = RescueService.neutralize(
      [...badDays, ...thanSat.hung],
      // Active Bad Stars
      thanSat.cat,
      // Active Good Stars
      { dayCan: dayCanEnum, dayChi: dayChiEnum, userDungThan }
    );
    processedBadStars.forEach((s) => {
      dayScore += s.finalPenalty;
      if (s.rescueNote) {
        rescueLogs.push(s.rescueNote);
      }
    });
    thanSat.cat.forEach((star) => {
      const scoreDef = STAR_SCORES[star];
      const bonus = scoreDef ? scoreDef.base : 2;
      dayScore += bonus;
    });
    const trucScoreDef = TRUC_SCORES[trucEnum];
    if (trucScoreDef) dayScore += trucScoreDef.base;
    const tuScoreDef = TU_SCORES[sao];
    if (tuScoreDef) dayScore += tuScoreDef.base;
    if (attrs.zodiacOfficer) {
      dayScore += attrs.zodiacOfficer.isHoangDao ? 10 : -5;
    }
    let baseScoreWithClamps = dayScore;
    if (badDays.some((bd) => CRITICAL_STARS.includes(bd))) {
      if (baseScoreWithClamps > 40) baseScoreWithClamps = 40;
    }
    baseScoreWithClamps = Math.max(0, Math.min(100, baseScoreWithClamps));
    let affinityData = void 0;
    if (userContext && userContext.baziChart) {
      if (userDungThan) {
        const dayElement = CAN_NGU_HANH[dayCanEnum];
        const dayChiElement = CHI_NGU_HANH[dayChiEnum];
        if (dayElement === userDungThan.dungThan || dayChiElement === userDungThan.dungThan) {
          dayScore += 10;
          rescueLogs.push(`Dụng Thần (+10)`);
        }
      }
      const userLunarYear = userProfile?.year || 2024;
      let userYearCanChiStr = void 0;
      if (userProfile?.year) {
        const [can, chi] = LocalLunarCalendar.getCanChiYear(userProfile.year);
        userYearCanChiStr = `${can} ${chi}`;
      }
      const realAffinity = evaluatePersonalAffinity(userLunarYear, dayCanEnum, dayChiEnum, "Ngày");
      const scaledAffinityScore = realAffinity.score * 5;
      dayScore += scaledAffinityScore;
      let warning = void 0;
      const criticalStarsPresent = badDays.filter((bd) => CRITICAL_STARS.includes(bd));
      if (criticalStarsPresent.length > 0) {
        if (scaledAffinityScore >= 0) {
          warning = `Tuy hợp tuổi nhưng ngày có các sao ${criticalStarsPresent.join(", ")}. Đây là những sát tinh mạnh, bạn vẫn nên cẩn trọng khi tiến hành việc lớn để tránh rủi ro không đáng có.`;
        } else {
          warning = `Ngày đã xung khắc với tuổi, lại gặp thêm các sao ${criticalStarsPresent.join(", ")}. Họa vô đơn chí, vận khí rất kém, bạn nên hết sức đề phòng và tránh làm việc quan trọng.`;
        }
      }
      affinityData = {
        score: scaledAffinityScore,
        userYear: userYearCanChiStr,
        status: realAffinity.isCritical ? "Đại Kỵ" : scaledAffinityScore >= 15 ? "Rất Hợp" : scaledAffinityScore > 0 ? "Hợp Tuổi" : scaledAffinityScore <= -10 ? "Xung Tuổi" : "Bình Hòa",
        detail: realAffinity.tags.map((t) => t.label).join(", "),
        tags: realAffinity.tags,
        isCritical: realAffinity.isCritical,
        warning,
        advice: realAffinity.isCritical ? "Ngày đại kỵ với tuổi của bạn. Các yếu tố xung khắc rất mạnh, tốt nhất nên tránh các việc đại sự để bảo toàn vận khí." : scaledAffinityScore >= 15 ? "Ngày rất hợp với tuổi của bạn. Các yếu tố tương sinh hỗ trợ mạnh mẽ, làm việc gì cũng dễ thuận lợi." : scaledAffinityScore > 0 ? "Ngày tương đối tốt với tuổi. Có sự hỗ trợ nhất định từ ngũ hành, thích hợp triển khai dự định." : scaledAffinityScore <= -10 ? "Ngày xung khắc với tuổi. Nên cẩn trọng lời ăn tiếng nói và tránh các quyết định mạo hiểm." : "Ngày bình hòa với tuổi. Không có xung khắc đáng kể, mọi sự giữ ở mức ổn định."
      };
    }
    let isCriticalBadDay = false;
    if (badDays.some((bd) => CRITICAL_STARS.includes(bd))) {
      isCriticalBadDay = true;
      if (dayScore > 40) dayScore = 40;
    }
    dayScore = Math.max(0, Math.min(100, dayScore));
    return {
      score: Math.round(dayScore),
      // Integer score
      baseScore: Math.round(baseScoreWithClamps),
      affinityData,
      isCriticalBadDay,
      processedBadStars,
      rescueLogs,
      userDungThan
    };
  }
}

class RecommendationEngine {
  /**
   * Analyze the impact of all day attributes on a specific action.
   * Ensures ALL influencing factors are listed.
   */
  static analyzeImpacts(action, dayAttrs, dayScoreResult) {
    const impacts = [];
    const { thanSat, trucEnum, sao, dayCanEnum, dayChiEnum } = dayAttrs;
    const { processedBadStars, userDungThan } = dayScoreResult;
    thanSat.cat.forEach((star) => {
      const def = STAR_SCORES[star];
      if (def) {
        let contextScore = def.base;
        let isSpecific = false;
        if (def.actions) {
          if (def.actions[action.id] !== void 0) {
            contextScore = def.actions[action.id];
            isSpecific = true;
          } else if (def.actions[action.category] !== void 0) {
            contextScore = def.actions[action.category];
            isSpecific = true;
          } else if (def.actions["ALL"] !== void 0) contextScore = def.actions["ALL"];
        }
        const hasSpecificAdvice = def.advice?.do?.includes(action.id) || def.advice?.do?.includes(action.category);
        if (isSpecific || hasSpecificAdvice || Math.abs(contextScore) >= 5) {
          impacts.push({
            factorName: star,
            type: "star",
            score: def.base,
            contextScore,
            isCritical: false,
            reason: "Cát tinh",
            hasSpecificAdvice,
            isSpecific
          });
        }
      }
    });
    processedBadStars.forEach((bs) => {
      const def = STAR_SCORES[bs.name];
      let contextScore = bs.originalPenalty;
      let isSpecific = false;
      if (def && def.actions) {
        if (def.actions[action.id] !== void 0) {
          contextScore = def.actions[action.id];
          isSpecific = true;
        } else if (def.actions[action.category] !== void 0) {
          contextScore = def.actions[action.category];
          isSpecific = true;
        } else if (def.actions["ALL"] !== void 0) contextScore = def.actions["ALL"];
      }
      let reliefRatio = 0;
      if (bs.originalPenalty !== 0) {
        reliefRatio = 1 - bs.finalPenalty / bs.originalPenalty;
      }
      const finalContextScore = contextScore * (1 - reliefRatio);
      const isCritical = finalContextScore <= -30;
      const hasSpecificAdvice = def?.advice?.avoid?.includes(action.id) || def?.advice?.avoid?.includes(action.category);
      if (isCritical || hasSpecificAdvice || finalContextScore <= -10) {
        impacts.push({
          factorName: bs.name,
          type: "star",
          score: bs.finalPenalty,
          contextScore: finalContextScore,
          isCritical,
          reason: bs.rescueNote || (isCritical ? "Đại kỵ" : "Hung tinh"),
          remedy: bs.rescueNote,
          hasSpecificAdvice,
          isSpecific
        });
      }
    });
    const trucDef = TRUC_SCORES[trucEnum];
    if (trucDef) {
      let trucContext = trucDef.base;
      let isSpecific = false;
      if (trucDef.actions) {
        if (trucDef.actions[action.id] !== void 0) {
          trucContext = trucDef.actions[action.id];
          isSpecific = true;
        } else if (trucDef.actions[action.category] !== void 0) {
          trucContext = trucDef.actions[action.category];
          isSpecific = true;
        } else if (trucDef.actions["ALL"] !== void 0) trucContext = trucDef.actions["ALL"];
      }
      const hasSpecificAdvice = trucDef.advice?.do?.includes(action.id) || trucDef.advice?.avoid?.includes(action.id) || trucDef.advice?.do?.includes(action.category) || trucDef.advice?.avoid?.includes(action.category);
      if (isSpecific || hasSpecificAdvice || Math.abs(trucContext) >= 10) {
        impacts.push({
          factorName: `Trực ${DATA.TRUCS[trucEnum]}`,
          type: "truc",
          score: trucDef.base,
          contextScore: trucContext,
          isCritical: false,
          reason: trucContext > 0 ? "Trực tốt" : "Trực xấu",
          hasSpecificAdvice,
          isSpecific
        });
      }
    }
    const tuDef = TU_SCORES[sao];
    if (tuDef) {
      let tuContext = tuDef.base;
      let isSpecific = false;
      if (tuDef.actions) {
        if (tuDef.actions[action.id] !== void 0) {
          tuContext = tuDef.actions[action.id];
          isSpecific = true;
        } else if (tuDef.actions[action.category] !== void 0) {
          tuContext = tuDef.actions[action.category];
          isSpecific = true;
        }
      }
      const hasSpecificAdvice = tuDef.advice?.do?.includes(action.id) || tuDef.advice?.avoid?.includes(action.id);
      if (isSpecific || hasSpecificAdvice || Math.abs(tuContext) >= 10) {
        impacts.push({
          factorName: `Sao ${DATA.NHI_THAP_BAT_TU[sao]}`,
          type: "tu",
          score: tuDef.base,
          contextScore: tuContext,
          isCritical: false,
          hasSpecificAdvice,
          isSpecific
        });
      }
    }
    if (userDungThan) {
      const dayEl = CAN_NGU_HANH[dayCanEnum];
      const dayChiEl = CHI_NGU_HANH[dayChiEnum];
      if (dayEl === userDungThan.dungThan || dayChiEl === userDungThan.dungThan) {
        impacts.push({
          factorName: "Dụng Thần",
          type: "bazi",
          score: 10,
          contextScore: 10,
          isCritical: false,
          reason: "Ngày hành Dụng thần"
        });
      }
    }
    return impacts;
  }
  static getRecommendations(dayAttrs, dayScoreResult) {
    const recommendations = [];
    ACTIONS_CONFIG.forEach((action) => {
      const impacts = this.analyzeImpacts(action, dayAttrs, dayScoreResult);
      let finalScore = SCORING_CONFIG.BASE.DAY_START;
      impacts.forEach((i) => finalScore += i.contextScore);
      const isVeto = impacts.some((i) => i.isCritical);
      if (isVeto) finalScore -= 50;
      finalScore = Math.max(0, Math.min(100, finalScore));
      const score = Math.round(finalScore);
      const specificGoodFactors = impacts.filter(
        (i) => !i.isCritical && (i.type === "bazi" || i.contextScore > i.score + 5)
      );
      const specificBadFactors = impacts.filter((i) => i.contextScore < -10 || i.isCritical);
      specificGoodFactors.length > 0;
      const hasSpecificWarning = specificBadFactors.length > 0;
      dayScoreResult.score >= 70;
      dayScoreResult.score >= 50;
      let shouldInclude = false;
      let isGood = false;
      if (isVeto) {
        shouldInclude = true;
        isGood = false;
      } else if (score < 40) {
        shouldInclude = true;
        isGood = false;
      } else if (score >= 50) {
        shouldInclude = true;
        isGood = true;
      } else if (hasSpecificWarning) {
        shouldInclude = true;
        isGood = false;
      }
      if (shouldInclude) {
        const activeRemedies = /* @__PURE__ */ new Set();
        const remedies = [];
        impacts.forEach((i) => {
          if (i.remedy && !activeRemedies.has(i.remedy)) {
            activeRemedies.add(i.remedy);
            remedies.push({ star: i.factorName, remedy: i.remedy });
          }
        });
        const badReasons = impacts.filter((i) => i.contextScore < 0 && (i.isCritical || i.hasSpecificAdvice || i.isSpecific || i.contextScore <= -20)).map((i) => i.factorName);
        const specificReasons = Array.from(new Set(
          impacts.filter((i) => i.hasSpecificAdvice && (isGood ? i.contextScore > 0 : i.contextScore < 0)).map((i) => i.factorName)
        ));
        const topFactors = Array.from(new Set(
          impacts.filter((i) => isGood ? i.contextScore > 0 : i.contextScore < 0).sort((a, b) => Math.abs(b.contextScore) - Math.abs(a.contextScore)).map((i) => i.factorName)
        ));
        const goodFactors = Array.from(new Set(
          impacts.filter((i) => i.contextScore > 0).sort((a, b) => b.contextScore - a.contextScore).map((i) => i.factorName)
        ));
        const badFactors = Array.from(new Set(
          impacts.filter((i) => i.contextScore < 0).sort((a, b) => Math.abs(b.contextScore) - Math.abs(a.contextScore)).map((i) => i.factorName)
          // We don't filter Critical here to ensure they are visible in "Xấu do"
        ));
        const reasonsToDisplay = specificReasons.length > 0 ? specificReasons : topFactors;
        const displayReason = reasonsToDisplay.slice(0, 3).join(", ") || (isGood ? "Ngày tốt bao quát" : "Ngày xấu bao quát");
        recommendations.push({
          id: action.id,
          category: action.category,
          label: action.label,
          isGood,
          score,
          reason: displayReason,
          goodReason: goodFactors.length > 0 ? goodFactors.slice(0, 3).join(", ") : void 0,
          badReason: badFactors.length > 0 ? badFactors.slice(0, 3).join(", ") : void 0,
          remedies: remedies.length > 0 ? remedies : void 0,
          advice: getAdvice(action.id, score, isGood ? badReasons : [])
        });
      }
    });
    return recommendations.sort((a, b) => b.score - a.score);
  }
}

const generateAndScoreHours = (dayAttrs, dayScore, isCriticalBadDay, userContext) => {
  const { dayCanEnum, dayChiEnum, monthChiEnum, lunarMonth, lunarDay, lunaInfo } = dayAttrs;
  const userProfile = userContext?.profile;
  const userDungThan = userContext?.dungThan;
  const solarNoonStr = lunaInfo?.solar?.solarNoon;
  let noonMinutes = 12 * 60;
  if (solarNoonStr) {
    const timePart = solarNoonStr.includes(" ") ? solarNoonStr.split(" ")[1] : solarNoonStr;
    const parts = timePart.split(":");
    if (parts.length >= 2) {
      noonMinutes = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
  }
  const shiftMinutes = noonMinutes - 12 * 60;
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
      dayScore
    );
    let hourScore = v2Result.score;
    if (isHD) hourScore += SCORING_CONFIG.MICRO.SCORES.HOANG_DAO;
    else hourScore += SCORING_CONFIG.MICRO.SCORES.HAC_DAO;
    const dayLucDieuIdx = (lunarMonth + lunarDay - 2) % 6;
    const hourLucDieuIdx = ((dayLucDieuIdx + h) % 6 + 6) % 6;
    const hourLucDieu = hourLucDieuIdx;
    if ([LUC_DIEU_ENUM.DaiAn, LUC_DIEU_ENUM.TocHy, LUC_DIEU_ENUM.TieuCat].includes(hourLucDieu)) {
      hourScore += SCORING_CONFIG.MICRO.SCORES.LUC_DIEU.GOOD;
    } else if ([LUC_DIEU_ENUM.KhongVong, LUC_DIEU_ENUM.XichKhau].includes(hourLucDieu)) {
      hourScore += SCORING_CONFIG.MICRO.SCORES.LUC_DIEU.BAD;
    }
    const finalCombinedScore = hourScore;
    const displayTags = [...v2Result.tags];
    if (isHD && !displayTags.includes("Hoàng Đạo")) displayTags.unshift("Hoàng Đạo");
    displayTags.push(DATA.LUC_DIEU[hourLucDieu]);
    const conflictDetails = [...v2Result.warnings, ...v2Result.bonuses];
    const startHour = h * 2 - 1;
    const getDateForHour = (baseHour, shift) => {
      const baseDate = new Date(dayAttrs.date);
      baseDate.setHours(0, 0, 0, 0);
      let totalMinutes = baseHour * 60 + shift;
      baseDate.setMinutes(baseDate.getMinutes() + totalMinutes);
      return baseDate;
    };
    const formatDate = (d) => {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const hh = String(d.getHours()).padStart(2, "0");
      const min = String(d.getMinutes()).padStart(2, "0");
      return `${yyyy}/${mm}/${dd} ${hh}:${min}`;
    };
    const sVal = startHour;
    const eVal = startHour + 2;
    const startDate = getDateForHour(sVal, shiftMinutes);
    const endDate = getDateForHour(eVal, shiftMinutes);
    const displayStart = formatDate(startDate);
    const displayEnd = formatDate(endDate);
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
      timeRange: `${displayStart} - ${displayEnd}`,
      isHoangDao: isHD,
      zodiacStarName: zodiacOfficers.find((o) => o.branchIndex === h)?.starName,
      score: parseFloat(finalCombinedScore.toFixed(1)),
      rawScore: hourScore,
      // The pure hour score
      tags: displayTags,
      conflictDetails,
      truc: hourTrucName,
      trucEnum: hourTrucEnum,
      lucDieu: hourLucDieu,
      thanSat: [],
      advice,
      maiHoa: void 0
    });
  }
  return hourEvaluations;
};
const enrichRecommendationsWithHours = (recommendations, hours, isCriticalBadDay = false) => {
  return recommendations.map((action) => {
    const actionConfig = ACTIONS_CONFIG.find((cfg) => cfg.id === action.id);
    if (!actionConfig) return { ...action, bestHours: [] };
    const rankedHours = hours.map((h) => {
      let actionBonus = 0;
      const reasons = [];
      let isBlocked = false;
      const trucDef = h.trucEnum !== void 0 ? TRUC_SCORES[h.trucEnum] : void 0;
      if (trucDef) {
        let trucScore = trucDef.base;
        if (trucDef.actions) {
          if (trucDef.actions[action.id] !== void 0) trucScore = trucDef.actions[action.id];
          else if (trucDef.actions[action.category] !== void 0) trucScore = trucDef.actions[action.category];
        }
        if (trucScore > 0) {
          actionBonus += 2;
          reasons.push(`Trực ${h.truc} lợi`);
        }
      }
      if ([LUC_DIEU_ENUM.TocHy, LUC_DIEU_ENUM.DaiAn, LUC_DIEU_ENUM.TieuCat].includes(h.lucDieu)) {
        actionBonus += 1;
      }
      let finalHourScore = action.score + (h.rawScore || 0) + actionBonus;
      return {
        chi: h.chi,
        can: h.can,
        score: finalHourScore,
        baseScore: h.score,
        // Combined Day+Hour
        lucDieu: h.lucDieu,
        explanation: reasons.length > 0 ? reasons.join(". ") : "",
        isBlocked,
        truc: h.truc
      };
    });
    const bestHours = rankedHours.filter((h) => !h.isBlocked).sort((a, b) => b.score - a.score).slice(0, 3);
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

const normalizeInput = (latOrProfile, lon, userDob, userGender = 1, userProfileOverride) => {
  let lat = 21.0285;
  let long = 105.8333;
  let userProfile = void 0;
  if (typeof latOrProfile === "object") {
    userProfile = latOrProfile;
    if (userProfile.lat) lat = userProfile.lat;
    if (userProfile.lon) long = userProfile.lon;
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
        gender: userGender || 1,
        lat,
        lon: long
      };
    }
  }
  if (userProfileOverride) {
    userProfile = userProfileOverride;
    if (userProfile.lat) lat = userProfile.lat;
    if (userProfile.lon) long = userProfile.lon;
  }
  let validatedUserContext = void 0;
  if (userProfile) {
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
    validatedUserContext = {
      profile: userProfile,
      baziChart,
      dungThan
    };
  }
  return {
    lat,
    long,
    userProfile,
    validatedUserContext
  };
};

const evaluateDay = (dateInput, latOrProfile, lon, userYearChi, userDob, userGender = 1, userProfileOverride) => {
  const {
    lat,
    long,
    validatedUserContext
  } = normalizeInput(latOrProfile, lon, userDob, userGender, userProfileOverride);
  const dayAttrs = DayAttributeService.calculateAttributes(dateInput, lat, long);
  const { date, lunaInfo, trucEnum, trucName, sao, thanSat, badDays, hoangDaoHoursNames } = dayAttrs;
  const dayScoreResult = ScoringEngine.scoreDay(dayAttrs, validatedUserContext);
  const { score: dayScore, affinityData, isCriticalBadDay, processedBadStars, rescueLogs, userDungThan } = dayScoreResult;
  let recommendations = RecommendationEngine.getRecommendations(dayAttrs, dayScoreResult);
  const hourEvaluations = generateAndScoreHours(dayAttrs, dayScore, isCriticalBadDay, validatedUserContext);
  recommendations = enrichRecommendationsWithHours(recommendations, hourEvaluations, isCriticalBadDay);
  const verdictData = resolveDayVerdict(dayScore, affinityData, processedBadStars);
  const tempResultForTags = {
    date,
    lunaInfo,
    truc: trucName,
    trucEnum,
    trucMeaning: TRUC_MEANING[trucEnum],
    sao,
    saoMeaning: NHI_THAP_BAT_TU_MEANING[sao],
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
    baseScore: dayScoreResult.baseScore,
    dungThan: userDungThan,
    tags: [],
    hours: hourEvaluations,
    verdict: verdictData
  };
  const baseTags = generateDayTags(tempResultForTags, validatedUserContext?.baziChart);
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

const VIETNAMESE_HOLIDAYS = [
  // --- LỄ TẾT ÂM LỊCH ---
  { id: "tet_nguyen_dan", name: "Tết Nguyên Đán", type: "lunar", day: 1, month: 1, description: "Ngày đầu tiên của năm mới âm lịch, lễ hội lớn nhất trong năm của người Việt.", important: true },
  { id: "mung_2_tet", name: "Mùng 2 Tết", type: "lunar", day: 2, month: 1, description: "Ngày thứ hai của Tết Nguyên Đán.", important: true },
  { id: "mung_3_tet", name: "Mùng 3 Tết", type: "lunar", day: 3, month: 1, description: "Ngày thứ ba của Tết Nguyên Đán, hóa vàng.", important: true },
  { id: "chien_thang_ngoc_hoi", name: "Chiến thắng Ngọc Hồi - Đống Đa", type: "lunar", day: 5, month: 1, description: "Kỷ niệm chiến thắng lừng lẫy của vua Quang Trung - Nguyễn Huệ đại phá quân Thanh (1789).", important: true },
  { id: "le_hoi_chua_huong", name: "Khai hội Chùa Hương", type: "lunar", day: 6, month: 1, description: "Lễ hội kéo dài nhất trong năm tại Mỹ Đức, Hà Nội." },
  { id: "thuong_nguyen", name: "Tết Nguyên Tiêu", type: "lunar", day: 15, month: 1, description: "Rằm tháng Giêng, ngày lễ quan trọng cầu an lành cho cả năm.", important: true },
  { id: "hai_ba_trung", name: "Khởi nghĩa Hai Bà Trưng", type: "lunar", day: 6, month: 2, description: "Kỷ niệm cuộc khởi nghĩa của Hai Bà Trưng chống quân Đông Hán (40 SCN)." },
  { id: "han_thuc", name: "Tết Hàn Thực", type: "lunar", day: 3, month: 3, description: "Tết bánh trôi bánh chay, tưởng nhớ người đã khuất.", important: false },
  { id: "phu_giay", name: "Lễ hội Phủ Giầy", type: "lunar", day: 3, month: 3, description: "Tôn vinh Thánh Mẫu Liễu Hạnh tại Nam Định." },
  { id: "gio_to", name: "Giỗ Tổ Hùng Vương", type: "lunar", day: 10, month: 3, description: "Quốc giỗ, tưởng nhớ công ơn các Vua Hùng dựng nước.", important: true },
  { id: "phat_dan", name: "Lễ Phật Đản", type: "lunar", day: 15, month: 4, description: "Kỷ niệm ngày sinh, thành đạo và nhập diệt của Đức Phật Thích Ca.", important: true },
  { id: "doan_ngo", name: "Tết Đoan Ngọ", type: "lunar", day: 5, month: 5, description: "Tết diệt sâu bọ, ăn sứa, nếp cẩm, trái cây.", important: false },
  { id: "vu_lan", name: "Lễ Vu Lan", type: "lunar", day: 15, month: 7, description: "Ngày xá tội vong nhân và báo hiếu cha mẹ.", important: true },
  { id: "con_son_kiep_bac", name: "Lễ hội Côn Sơn - Kiếp Bạc", type: "lunar", day: 16, month: 8, description: "Tưởng nhớ Anh hùng dân tộc Hưng Đạo Đại Vương Trần Quốc Tuấn." },
  { id: "trung_thu", name: "Tết Trung Thu", type: "lunar", day: 15, month: 8, description: "Tết trẻ em, rước đèn, phá cỗ trông trăng.", important: true },
  { id: "trung_cuu", name: "Tết Trùng Cửu", type: "lunar", day: 9, month: 9, description: "Tết người cao tuổi, uống rượu hoa cúc, leo núi." },
  { id: "le_hoi_kate", name: "Lễ hội Katê", type: "lunar", day: 1, month: 7, description: "Lễ hội lớn nhất của đồng bào Chăm." },
  { id: "ong_tao", name: "Ông Công Ông Táo", type: "lunar", day: 23, month: 12, description: "Cúng đưa ông Táo về trời báo cáo ngọc hoàng.", important: false },
  // --- LỊCH SỬ VIỆT NAM ---
  // (Dương lịch hoặc Âm lịch được map cố định, ở đây ưu tiên các ngày kỷ niệm theo Dương lịch phổ biến hiện nay, 
  // các sự kiện xa xưa nếu có ngày âm chính xác sẽ để âm)
  { id: "bach_dang", name: "Chiến thắng Bạch Đằng", type: "solar", day: 9, month: 4, description: "Ngô Quyền đánh tan quân Nam Hán (938), mở ra kỷ nguyên độc lập. (Ngày dương lịch ước tính/kỷ niệm)" },
  { id: "ly_thai_to", name: "Lý Thái Tổ dời đô", type: "solar", day: 10, month: 10, description: "Vua Lý Thái Tổ dời đô về Thăng Long (1010), mở đầu thời kỳ huy hoàng của Đại Việt." },
  // Chọn ngày 10/10 làm ngày biểu tượng Thăng Long - Hà Nội
  // --- LỄ DƯƠNG LỊCH & SỰ KIỆN HIỆN ĐẠI ---
  { id: "tet_duong", name: "Tết Dương Lịch", type: "solar", day: 1, month: 1, description: "Ngày đầu năm mới theo lịch Gregory.", important: true },
  { id: "hssv", name: "Ngày HSSV Việt Nam", type: "solar", day: 9, month: 1, description: "Ngày truyền thống Học sinh Sinh viên Việt Nam." },
  { id: "thanh_lap_dang", name: "Thành lập Đảng CSVN", type: "solar", day: 3, month: 2, description: "Kỷ niệm ngày thành lập Đảng Cộng sản Việt Nam (1930).", important: true },
  { id: "thay_thuoc", name: "Ngày Thầy thuốc VN", type: "solar", day: 27, month: 2, description: "Tôn vinh đội ngũ Y bác sĩ và cán bộ y tế." },
  { id: "bien_phong", name: "Ngày Biên phòng", type: "solar", day: 3, month: 3, description: "Ngày truyền thống Bộ đội Biên phòng (1959)." },
  { id: "quoc_te_phu_nu", name: "Quốc tế Phụ nữ", type: "solar", day: 8, month: 3, description: "Ngày tôn vinh phụ nữ toàn thế giới.", important: false },
  { id: "doan_thanh_nien", name: "Thành lập Đoàn", type: "solar", day: 26, month: 3, description: "Ngày thành lập Đoàn TNCS Hồ Chí Minh (1931)." },
  { id: "giai_phong", name: "Giải Phóng Miền Nam", type: "solar", day: 30, month: 4, description: "Chiến thắng 30/4/1975, thống nhất đất nước.", important: true },
  { id: "lao_dong", name: "Quốc Tế Lao Động", type: "solar", day: 1, month: 5, description: "Ngày hội của giai cấp công nhân và nhân dân lao động.", important: true },
  { id: "dien_bien_phu", name: "Chiến thắng Điện Biên", type: "solar", day: 7, month: 5, description: 'Chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu" (1954).', important: true },
  { id: "bac_ho", name: "Sinh nhật Bác Hồ", type: "solar", day: 19, month: 5, description: "Kỷ niệm ngày sinh Chủ tịch Hồ Chí Minh (1890).", important: true },
  { id: "thieu_nhi", name: "Quốc Tế Thiếu Nhi", type: "solar", day: 1, month: 6, description: "Ngày Tết dành cho trẻ em.", important: false },
  { id: "bao_chi", name: "Báo chí Cách mạng", type: "solar", day: 21, month: 6, description: "Ngày Báo chí Cách mạng Việt Nam (1925)." },
  { id: "gia_dinh", name: "Ngày Gia Đình VN", type: "solar", day: 28, month: 6, description: "Ngày tôn vinh mái ấm gia đình Việt Nam." },
  { id: "thuong_binh", name: "Thương Binh Liệt Sĩ", type: "solar", day: 27, month: 7, description: "Tưởng nhớ và tri ân các anh hùng liệt sĩ, thương binh.", important: true },
  { id: "cong_an", name: "Công An Nhân Dân", type: "solar", day: 19, month: 8, description: "Ngày truyền thống Công an Nhân dân Việt Nam (1945)." },
  { id: "cach_mang_t8", name: "Cách Mạng Tháng 8", type: "solar", day: 19, month: 8, description: "Kỷ niệm Cách mạng tháng Tám thành công (1945).", important: true },
  { id: "quoc_khanh", name: "Quốc Khánh", type: "solar", day: 2, month: 9, description: "Bác Hồ đọc Tuyên ngôn Độc lập, khai sinh nước VNDCCH (1945).", important: true },
  { id: "mat_tran", name: "MTTQ Việt Nam", type: "solar", day: 10, month: 9, description: "Ngày thành lập Mặt trận Tổ quốc Việt Nam (1955)." },
  { id: "thu_do", name: "Giải Phóng Thủ Đô", type: "solar", day: 10, month: 10, description: "Kỷ niệm ngày Giải phóng Thủ đô Hà Nội (1954).", important: true },
  { id: "doanh_nhan", name: "Doanh Nhân VN", type: "solar", day: 13, month: 10, description: "Ngày Doanh nhân Việt Nam." },
  { id: "phu_nu_vn", name: "Phụ Nữ Việt Nam", type: "solar", day: 20, month: 10, description: "Ngày thành lập Hội Liên hiệp Phụ nữ Việt Nam (1930).", important: false },
  { id: "dai_doan_ket", name: "Đại Đoàn Kết", type: "solar", day: 18, month: 11, description: "Ngày hội Đại đoàn kết toàn dân tộc." },
  { id: "nha_giao", name: "Nhà Giáo Việt Nam", type: "solar", day: 20, month: 11, description: "Ngày Hiến chương Nhà giáo Việt Nam, tôn sư trọng đạo.", important: false },
  { id: "hoi_chu_thap_do", name: "Hội Chữ Thập Đỏ", type: "solar", day: 23, month: 11, description: "Ngày thành lập Hội Chữ thập đỏ Việt Nam (1946)." },
  { id: "toan_quoc_khang_chien", name: "Toàn Quốc Kháng Chiến", type: "solar", day: 19, month: 12, description: "Kỷ niệm ngày Toàn quốc kháng chiến (1946)." },
  { id: "quan_doi", name: "Quân Đội Nhân Dân", type: "solar", day: 22, month: 12, description: "Ngày thành lập QĐND Việt Nam (1944) & Ngày hội Quốc phòng toàn dân.", important: true },
  { id: "noel", name: "Giáng Sinh", type: "solar", day: 24, month: 12, description: "Lễ Giáng sinh (Noel).", important: false },
  // ===========================================================================
  // 2. BỔ SUNG SỰ KIỆN LỊCH SỬ & VĂN HÓA VIỆT NAM (MỚI)
  // ===========================================================================
  { id: "le_hoi_lim", name: "Hội Lim", type: "lunar", day: 13, month: 1, description: "Lễ hội dân ca Quan họ lớn nhất vùng Kinh Bắc - Bắc Ninh." },
  { id: "le_hoi_den_tran", name: "Khai ấn Đền Trần", type: "lunar", day: 14, month: 1, description: "Lễ khai ấn cầu mong quốc thái dân an, thăng tiến tại Nam Định." },
  { id: "le_hoi_yen_tu", name: "Khai hội Yên Tử", type: "lunar", day: 10, month: 1, description: "Lễ hội hành hương về đất Phật, nơi Phật hoàng Trần Nhân Tông tu hành." },
  // ===========================================================================
  // 3. SỰ KIỆN THẾ GIỚI QUAN TRỌNG (SOLAR)
  // ===========================================================================
  { id: "world_war_1_end", name: "Kết thúc Thế chiến I", type: "solar", day: 11, month: 11, description: "Lễ đình chiến kết thúc cuộc chiến tranh tàn khốc đầu tiên quy mô toàn cầu (1918)." },
  { id: "world_war_2_end_asia", name: "Nhật Bản đầu hàng (WW2)", type: "solar", day: 15, month: 8, description: "Kết thúc hoàn toàn Chiến tranh Thế giới thứ hai trên toàn thế giới (1945)." },
  { id: "french_revolution", name: "Cách mạng Pháp", type: "solar", day: 14, month: 7, description: "Ngày phá ngục Bastille, biểu tượng của Tự do - Bình đẳng - Bác ái." },
  { id: "american_independence", name: "Quốc khánh Mỹ", type: "solar", day: 4, month: 7, description: "Hợp chủng quốc Hoa Kỳ tuyên bố độc lập khỏi đế quốc Anh (1776)." },
  { id: "russian_october_revolution", name: "Cách mạng Tháng Mười Nga", type: "solar", day: 7, month: 11, description: "Cuộc cách mạng vô sản đầu tiên thắng lợi, khai sinh Liên bang Xô Viết (1917)." },
  { id: "first_man_in_space", name: "Con người đầu tiên bay vào vũ trụ", type: "solar", day: 12, month: 4, description: "Yuri Gagarin thực hiện chuyến bay lịch sử trên tàu Vostok 1 (1961)." },
  { id: "discovery_of_america", name: "Columbus tìm ra châu Mỹ", type: "solar", day: 12, month: 10, description: "Chuyến hải hành thay đổi hoàn toàn bản đồ thế giới và lịch sử nhân loại (1492)." },
  { id: "apollo_11_landing", name: "Apollo 11 hạ cánh xuống Mặt Trăng", type: "solar", day: 20, month: 7, description: "Neil Armstrong đặt bước chân đầu tiên của nhân loại lên một thiên thể khác (1969)." },
  { id: "fall_of_berlin_wall", name: "Bức tường Berlin sụp đổ", type: "solar", day: 9, month: 11, description: "Sự kiện chấm dứt sự chia cắt Đông - Tây Đức và biểu tượng kết thúc Chiến tranh Lạnh." },
  { id: "hiroshima_day", name: "Thảm họa Hiroshima", type: "solar", day: 6, month: 8, description: "Ngày quả bom nguyên tử đầu tiên dội xuống dân thường, lời nhắc nhở về hòa bình thế giới." },
  { id: "magna_carta_signed", name: "Ký kết Đại Hiến chương (Magna Carta)", type: "solar", day: 15, month: 6, description: "Văn bản đầu tiên hạn chế quyền lực quân chủ, nền tảng của luật pháp hiện đại (1215)." }
];
const getVietnameseHoliday = (lunaD, lunaM, solarD, solarM) => {
  const solarH = VIETNAMESE_HOLIDAYS.find((h) => h.type === "solar" && h.day === solarD && h.month === solarM);
  if (solarH?.important) return solarH;
  const lunarH = VIETNAMESE_HOLIDAYS.find((h) => h.type === "lunar" && h.day === lunaD && h.month === lunaM);
  if (lunarH?.important) return lunarH;
  if (solarH) return solarH;
  if (lunarH) return lunarH;
  if (lunaD === 1) return { id: "mung_1", name: "Mùng 1", type: "lunar", day: 1, month: lunaM, description: "Ngày Sóc (đầu tháng âm lịch), thích hợp cầu an, lễ chùa." };
  if (lunaD === 15) return { id: "ram", name: "Rằm", type: "lunar", day: 15, month: lunaM, description: "Ngày Vọng (giữa tháng âm lịch), trăng tròn, khí trường vượng." };
  return null;
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
  const startDayOfWeek = startOfMonth.day();
  const daysInMonth = viewDate.daysInMonth();
  const startDayIndex = (startDayOfWeek + 6) % 7;
  const blanks = Array(startDayIndex).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const getScoreColorInfo = (score) => {
    if (score >= 80) return {
      c1: "#d1fae5",
      // mint-100 (Visible but soft)
      c2: "#34d399",
      // emerald-400
      star: "text-emerald-500 fill-emerald-500",
      text: "text-emerald-800",
      border: "border-emerald-100"
    };
    if (score >= 65) return {
      c1: "#dcfce7",
      // green-100
      c2: "#4ade80",
      // green-400
      star: "text-green-500 fill-green-500",
      text: "text-green-800",
      border: "border-green-100"
    };
    if (score >= 50) return {
      c1: "#fef3c7",
      // amber-100
      c2: "#fbbf24",
      // amber-400
      star: "text-amber-400 fill-amber-400",
      text: "text-stone-700",
      border: "border-stone-200"
    };
    if (score >= 35) return {
      c1: "#ffedd5",
      // orange-100
      c2: "#fb923c",
      // orange-400
      star: "text-orange-400 fill-orange-400",
      text: "text-orange-800",
      border: "border-orange-100"
    };
    return {
      c1: "#fee2e2",
      // rose-100
      c2: "#f87171",
      // rose-400
      star: "text-rose-400 fill-rose-400",
      text: "text-rose-800",
      border: "border-rose-100"
    };
  };
  const getStarCount = (score) => {
    if (score >= 80) return 5;
    if (score >= 65) return 4;
    if (score >= 50) return 3;
    if (score >= 35) return 2;
    return 1;
  };
  const getDayEval = (day) => {
    return monthData[day - 1];
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-8 border border-stone-200 bg-white rounded-2xl overflow-hidden shadow-sm font-serif", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-stone-100 px-6 py-4 bg-gradient-to-r from-[#b91c1c] to-[#991b1b]", children: [
      /* @__PURE__ */ jsx("button", { onClick: prevMonth, className: "text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors cursor-pointer", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 28, strokeWidth: 2 }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-200/90 font-sans", children: "Tháng Dương Lịch" }),
        /* @__PURE__ */ jsxs("time", { dateTime: viewDate.format("YYYY-MM"), className: "text-2xl font-bold uppercase mt-0.5 text-white", children: [
          "Tháng ",
          viewDate.format("MM / YYYY")
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: nextMonth, className: "text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors cursor-pointer", children: /* @__PURE__ */ jsx(ChevronRight, { size: 28, strokeWidth: 2 }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden grid-cols-7 border-b border-stone-100 bg-stone-50 md:grid", children: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"].map((d) => /* @__PURE__ */ jsx("div", { className: "py-3 text-center text-[10px] font-bold uppercase tracking-wider text-stone-500 font-sans", children: d }, d)) }),
    /* @__PURE__ */ jsxs("div", { className: "relative grid auto-rows-auto grid-cols-1 gap-px bg-stone-300 md:auto-rows-[1fr] md:grid-cols-7 border-b border-stone-300", children: [
      loading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-20 flex items-center justify-center bg-white/70 backdrop-blur-[1px]", children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-stone-600" }) }),
      blanks.map((_, i) => /* @__PURE__ */ jsx("div", { className: "hidden min-h-[100px] bg-white md:block" }, `blank-${i}`)),
      days.map((day) => {
        const evalData = getDayEval(day);
        const isSelected = currentDate.date() === day && currentDate.isSame(viewDate, "month");
        const isToday = dayjs().isSame(viewDate.date(day), "day");
        const dateObj = viewDate.date(day);
        const dowMap = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
        const dowStr = dowMap[dateObj.day()];
        const score = evalData ? evalData.score : 50;
        const colors = getScoreColorInfo(score);
        const stars = getStarCount(score);
        let holiday = null;
        if (evalData) {
          holiday = getVietnameseHoliday(
            evalData.lunaInfo.d,
            evalData.lunaInfo.m,
            dateObj.date(),
            dateObj.month() + 1
          );
        }
        const opacity = score >= 50 ? "e6" : "60";
        const backgroundCheck = `linear-gradient(165deg, ${colors.c1}${opacity} 0%, #ffffff 100%)`;
        let cellStyle = { background: backgroundCheck };
        if (isSelected) cellStyle = { background: backgroundCheck, boxShadow: "inset 0 0 10px 1px #dda05bff", position: "relative", zIndex: 10 };
        if (!isSelected && isToday) cellStyle = { ...cellStyle, boxShadow: "inset 0 0 0 1px #fcd34d" };
        const lunarDayStr = evalData ? `${evalData.lunaInfo.d < 10 ? "0" + evalData.lunaInfo.d : evalData.lunaInfo.d}/${evalData.lunaInfo.m < 10 ? "0" + evalData.lunaInfo.m : evalData.lunaInfo.m}` : "";
        return /* @__PURE__ */ jsxs(
          "div",
          {
            onClick: () => onDateSelect(viewDate.date(day)),
            style: cellStyle,
            className: `group relative flex cursor-pointer flex-col justify-between p-2 md:p-3 transition-all hover:brightness-95 min-h-[90px] md:min-h-[110px]`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start w-full", children: [
                /* @__PURE__ */ jsxs("span", { className: `flex items-center gap-1 text-xl font-bold leading-none font-serif ${isToday ? "text-[#b91c1c]" : dateObj.day() === 0 ? "text-[#b91c1c]" : "text-stone-700"}`, children: [
                  day,
                  day === 1 && /* @__PURE__ */ jsx("span", { className: "text-[9px] font-sans font-normal text-stone-400 uppercase", children: "DL" }),
                  isToday && /* @__PURE__ */ jsx("span", { className: "text-[8px] font-sans font-bold text-white bg-red-600 px-1 py-px rounded uppercase tracking-tighter", children: "Hôm nay" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: `md:hidden text-xs font-bold ${dateObj.day() === 0 ? "text-[#b91c1c]" : "text-stone-400"}`, children: dowStr })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-1 my-1 flex-1 w-full px-0.5", children: [
                holiday && /* @__PURE__ */ jsx("span", { className: `text-[8px] md:text-[9px] text-center font-bold break-words w-full ${holiday.important ? "text-[#b91c1c]" : "text-stone-500"}`, children: holiday.name }),
                /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 opacity-80 group-hover:opacity-100 transition-opacity mt-0.5", children: [...Array(stars)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 10, className: `${colors.star}`, fill: "currentColor", strokeWidth: 0 }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end w-full mt-auto", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1" }),
                evalData && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end", children: [
                  /* @__PURE__ */ jsx("span", { className: `text-[10px] font-bold ${holiday && (holiday.important || holiday.type === "lunar") ? "text-[#b91c1c]" : "text-stone-400/80"}`, children: lunarDayStr }),
                  (evalData.lunaInfo.d === 1 || evalData.lunaInfo.d === 15) && /* @__PURE__ */ jsxs("span", { className: "text-[8px] font-medium text-stone-500/70 uppercase leading-none", children: [
                    "Tháng ",
                    evalData.lunaInfo.m
                  ] })
                ] })
              ] })
            ]
          },
          day
        );
      })
    ] })
  ] });
};

const ActionRecommendations = ({ recommendations }) => {
  const goodRecs = recommendations.filter((r) => r.isGood);
  const badRecs = recommendations.filter((r) => !r.isGood);
  if (goodRecs.length === 0 && badRecs.length === 0) return null;
  return /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center px-4 bg-white py-10 shadow-lg rounded-xl border border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mb-8 text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "relative z-10 bg-[#fdfbf7] px-6 text-xl font-bold font-serif uppercase tracking-[0.2em] text-[#8c3a3a]", children: "Lời Khuyên Hành Động" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-0 w-full h-px bg-[#dca54c]/40" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12", children: [
      goodRecs.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-bold text-[#15803d] uppercase tracking-widest border-b border-green-100 pb-2", children: "Việc Nên Làm" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10", children: goodRecs.slice(0, 6).map((rec) => /* @__PURE__ */ jsxs("div", { className: "group relative flex flex-col gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-baseline justify-between border-b border-[#e7e5e4] pb-2 mb-1 group-hover:border-[#dca54c] transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-[#15803d]", children: rec.label }),
            /* @__PURE__ */ jsxs("span", { className: `text-xs font-serif uppercase tracking-widest font-bold opacity-80 ${rec.score >= 80 ? "text-[#16a34a]" : "text-[#65a30d]"}`, children: [
              "[Năng lượng: ",
              rec.score,
              "%]"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("p", { className: "font-serif text-gray-700 leading-relaxed text-base italic pl-1", children: [
            '"',
            rec.advice,
            '"'
          ] }),
          rec.goodReason && /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 pl-1 mt-1 font-sans", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-[#15803d]", children: "Yếu tố tốt:" }),
            " ",
            rec.goodReason
          ] }),
          rec.badReason && /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 pl-1 mt-1 font-sans", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-[#b91c1c]", children: "Yếu tố xấu:" }),
            " ",
            rec.badReason
          ] }),
          rec.remedies && rec.remedies.length > 0 && /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700 pl-1 mt-2 font-sans italic bg-green-50 p-2 rounded-md border border-green-100 flex items-start gap-2", children: /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold mr-1", children: "Hóa giải:" }),
            rec.remedies.map((r) => r.remedy).join(". ")
          ] }) }),
          rec.bestHours && rec.bestHours.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm font-serif text-gray-600 pl-1", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-[#b45309] mr-1", children: "Giờ tốt:" }),
            rec.bestHours.map((h) => h.hour).join(", "),
            "."
          ] })
        ] }, rec.id)) })
      ] }),
      badRecs.length > 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-bold text-[#b91c1c] uppercase tracking-widest border-b border-red-100 pb-2", children: "Việc Cần Tránh (Hạn Chế)" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10", children: badRecs.slice(0, 6).map((rec) => /* @__PURE__ */ jsxs("div", { className: "group relative flex flex-col gap-2 opacity-80 hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-baseline justify-between border-b border-[#e7e5e4] pb-2 mb-1 group-hover:border-red-200 transition-colors", children: /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-serif font-bold text-[#991b1b]", children: rec.label }),
            /* @__PURE__ */ jsxs("span", { className: "text-xs font-serif uppercase tracking-widest font-bold opacity-80 text-[#ef4444]", children: [
              "[Năng lượng: ",
              rec.score,
              "%]"
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("p", { className: "font-serif text-gray-600 leading-relaxed text-base italic pl-1", children: [
            '"',
            rec.advice,
            '"'
          ] }),
          rec.goodReason && /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 pl-1 mt-1 font-sans", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-[#15803d]", children: "Yếu tố tốt:" }),
            " ",
            rec.goodReason
          ] }),
          rec.badReason && /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 pl-1 mt-1 font-sans", children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold text-[#b91c1c]", children: "Yếu tố xấu:" }),
            " ",
            rec.badReason
          ] }),
          rec.remedies && rec.remedies.length > 0 && /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700 pl-1 mt-2 font-sans italic bg-green-50 p-2 rounded-md border border-green-100 flex items-start gap-2", children: /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-bold mr-1", children: "Có cứu giải:" }),
            rec.remedies.map((r) => r.remedy).join(". ")
          ] }) })
        ] }, rec.id)) })
      ] })
    ] })
  ] }) });
};

const AgeClashSection = ({ clashingAges, userYearChi }) => {
  if (!clashingAges || clashingAges.length === 0) return null;
  return /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsx("h4", { className: "font-serif font-bold text-[#b91c1c] uppercase tracking-wider text-sm mb-3 border-b border-red-100 inline-block pb-1", children: "Tuổi Xung Ngày (Nên Kiêng)" }),
    /* @__PURE__ */ jsx("div", { className: `text-sm text-stone-700 font-serif ${clashingAges.length > 5 ? "columns-3 md:columns-7 gap-x-6" : "flex flex-wrap gap-x-4"}`, children: clashingAges.map((clash, idx) => {
      const isUserMatch = userYearChi && clash.label.includes(userYearChi);
      const isStrong = clash.score <= -5;
      let className = "break-inside-avoid py-0.5 ";
      if (isUserMatch) className += "font-bold text-red-700 underline decoration-red-300 decoration-2 underline-offset-2";
      else if (isStrong) className += "font-bold text-stone-900";
      else className += "text-stone-600";
      return /* @__PURE__ */ jsx("div", { className, children: clash.label }, idx);
    }) })
  ] });
};
const AgeHarmonySection = ({ compatibleAges, userYearChi }) => {
  if (!compatibleAges || compatibleAges.length === 0) return null;
  return /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsx("h4", { className: "font-serif font-bold text-[#15803d] uppercase tracking-wider text-sm mb-3 border-b border-green-100 inline-block pb-1", children: "Tuổi Hợp Ngày (Cát Lợi)" }),
    /* @__PURE__ */ jsx("div", { className: `text-sm text-stone-700 font-serif ${compatibleAges.length > 5 ? "columns-3 md:columns-7 gap-x-6" : "flex flex-wrap gap-x-4"}`, children: compatibleAges.map((harmony, idx) => {
      const isUserMatch = userYearChi && harmony.label.includes(userYearChi);
      const isStrong = harmony.score >= 5;
      let className = "break-inside-avoid py-0.5 ";
      if (isUserMatch) className += "font-bold text-green-700 underline decoration-green-300 decoration-2 underline-offset-2";
      else if (isStrong) className += "font-bold text-stone-900";
      else className += "text-stone-600";
      return /* @__PURE__ */ jsx("div", { className, children: harmony.label }, idx);
    }) })
  ] });
};

const BaziDisplay = ({ dungThan, userDob, userBirthLocation, onEdit }) => {
  if (!dungThan?.chart) return null;
  const { chart } = dungThan;
  let baziLink = "#";
  if (userDob) {
    const s = 1;
    const y = userDob.getFullYear();
    const m = String(userDob.getMonth() + 1).padStart(2, "0");
    const d = String(userDob.getDate()).padStart(2, "0");
    const h = String(userDob.getHours()).padStart(2, "0");
    const min = String(userDob.getMinutes()).padStart(2, "0");
    const dateStr = `${y}-${m}-${d}-${h}-${min}`;
    const loc = userBirthLocation ? `${userBirthLocation.lat},${userBirthLocation.lon}` : "21.0285000,105.8333000";
    baziLink = `/tu-vi-tu-tru/the-gioi-theo-vi-tri-sinh?s=${s}&b=${dateStr}&v=${dateStr}&cf=7bmqz-2t-lfrc&loc=${loc}`;
  }
  const renderPillar = (label, key) => {
    const can = chart[`${key}Can`];
    const chi = chart[`${key}Chi`];
    const canEl = CAN_NGU_HANH[can];
    const chiEl = CHI_NGU_HANH[chi];
    const canName = DATA.CANS[can];
    const chiName = DATA.CHIS[chi];
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center px-4 md:px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-2 text-[10px] uppercase tracking-widest text-stone-400 font-sans", children: label }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: `text-xl font-serif font-bold uppercase leading-none ${getElementTextColor(canEl)}`, children: canName }),
        /* @__PURE__ */ jsx("div", { className: `text-xl font-serif font-bold uppercase leading-none ${getElementTextColor(chiEl)}`, children: chiName })
      ] })
    ] }, key);
  };
  const dtColor = dungThan.dungThan !== void 0 ? getElementTextColor(dungThan.dungThan) : "";
  const htColor = dungThan.hyThan !== void 0 ? getElementTextColor(dungThan.hyThan) : "";
  return /* @__PURE__ */ jsxs("div", { className: "mb-6 py-4 bg-transparent", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group relative flex items-center justify-center gap-2 py-5 cursor-pointer hover:bg-stone-50 rounded-lg transition-colors",
        onClick: onEdit,
        title: "Bấm để sửa ngày tháng năm sinh",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold font-serif text-[#1c1917] text-center group-hover:text-amber-700 transition-colors", children: "Bát Tự Mệnh Bàn" }),
          /* @__PURE__ */ jsx("span", { className: "opacity-80 group-hover:opacity-50 text-stone-400 text-xs transition-opacity -ml-1", children: "(Sửa)" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 divide-x divide-stone-200 border-b border-stone-100 pb-4 mb-3", children: [
      renderPillar("Năm", "year"),
      renderPillar("Tháng", "month"),
      renderPillar("Ngày", "day"),
      renderPillar("Giờ", "hour")
    ] }),
    dungThan.dungThan !== void 0 && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-2 text-sm font-serif flex-warp", children: [
      /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-stone-500", children: "Dụng thần:" }),
        /* @__PURE__ */ jsx("span", { className: `font-bold uppercase ${dtColor}`, children: NGU_HANH_NAMES[dungThan.dungThan] }),
        /* @__PURE__ */ jsx("span", { className: "text-stone-500", children: "Hỷ thần:" }),
        /* @__PURE__ */ jsx("span", { className: `font-bold uppercase ${htColor}`, children: NGU_HANH_NAMES[dungThan.hyThan] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full text-center mt-2 px-8", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-amber-700 uppercase tracking-wide mb-1", children: dungThan.pattern }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] text-stone-500 italic leading-relaxed", children: dungThan.description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "w-full flex justify-center text-xs bg-orange-500/10 py-2 rounded-lg  italic", children: [
        "Chú ý: Dụng Thần và Hỷ Thần mang tính chất tham khảo có thể nhầm nên check lại bên phần ",
        /* @__PURE__ */ jsx("a", { href: baziLink, target: "_blank", rel: "noreferrer", className: "font-bold hover:text-orange-600 transition-colors ml-2 text-orange-600", children: "Lá số tử vi & tứ trụ." })
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

const DailyHoursGrid = ({
  hours,
  displayDate,
  lunaInfo,
  truc,
  sao
}) => {
  const saoName = typeof sao === "number" ? DATA.NHI_THAP_BAT_TU[sao] : sao;
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-12 w-full rounded-xl border border-gray-100 bg-white p-6 shadow-sm prose prose-amber max-w-none w-full", children: [
    /* @__PURE__ */ jsxs("h2", { className: "mb-4 text-2xl font-bold text-amber-900", children: [
      "Phân tích ngày ",
      displayDate
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 text-stone-700", children: [
      /* @__PURE__ */ jsxs("p", { className: "mb-1", children: [
        "Ngày ",
        /* @__PURE__ */ jsx("strong", { children: displayDate }),
        " tức ngày ",
        /* @__PURE__ */ jsxs("strong", { children: [
          lunaInfo.d,
          " tháng ",
          lunaInfo.m,
          " năm ",
          /* @__PURE__ */ jsx("span", { className: getCanColor(lunaInfo.ycc[0]), children: lunaInfo.ycc[0] }),
          " ",
          /* @__PURE__ */ jsx("span", { className: getChiColor(lunaInfo.ycc[1]), children: lunaInfo.ycc[1] })
        ] }),
        " âm lịch. Tức lịch tiết khí là ngày ",
        /* @__PURE__ */ jsxs("strong", { children: [
          /* @__PURE__ */ jsx("span", { className: getCanColor(lunaInfo.dcc[0]), children: lunaInfo.dcc[0] }),
          " ",
          /* @__PURE__ */ jsx("span", { className: getChiColor(lunaInfo.dcc[1]), children: lunaInfo.dcc[1] })
        ] }),
        ", tháng ",
        /* @__PURE__ */ jsxs("strong", { children: [
          /* @__PURE__ */ jsx("span", { className: getCanColor(lunaInfo.stcc.mcc[0]), children: lunaInfo.stcc.mcc[0] }),
          " ",
          /* @__PURE__ */ jsx("span", { className: getChiColor(lunaInfo.stcc.mcc[1]), children: lunaInfo.stcc.mcc[1] })
        ] }),
        ", năm ",
        /* @__PURE__ */ jsxs("strong", { children: [
          /* @__PURE__ */ jsx("span", { className: getCanColor(lunaInfo.stcc.ycc[0]), children: lunaInfo.stcc.ycc[0] }),
          " ",
          /* @__PURE__ */ jsx("span", { className: getChiColor(lunaInfo.stcc.ycc[1]), children: lunaInfo.stcc.ycc[1] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Tiết khí: ",
        /* @__PURE__ */ jsx("strong", { children: lunaInfo.mst }),
        ". Trực: ",
        /* @__PURE__ */ jsx("strong", { children: truc }),
        ". Sao: ",
        /* @__PURE__ */ jsx("strong", { children: saoName }),
        ".",
        /* @__PURE__ */ jsxs("span", { className: "ml-3 text-amber-700", children: [
          "Chính Ngọ: ",
          /* @__PURE__ */ jsx("strong", { children: dayjs(lunaInfo.solar?.solarNoon).format("HH:mm") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-gray-500 italic text-sm mb-6", children: [
      "Giờ Tý bắt đầu từ 23h đêm hôm trước. Các giờ Hoàng Đạo được đánh dấu sao (",
      /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "★" }),
      ")."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full", children: hours.map((h, idx) => {
      const borderColor = h.score >= 80 ? "border-emerald-200" : h.score >= 65 ? "border-green-200" : h.score >= 50 ? "border-amber-200" : "border-red-200";
      const bgColor = h.score >= 80 ? "bg-emerald-50/60" : h.score >= 65 ? "bg-green-50/60" : h.score >= 50 ? "bg-amber-50/40" : "bg-red-50/50";
      const titleColor = h.score >= 50 ? "text-stone-800" : "text-red-800";
      return /* @__PURE__ */ jsxs("div", { className: `rounded-xl border ${borderColor} ${bgColor} p-3 flex flex-col gap-2 relative overflow-hidden group transition-all hover:shadow-md`, children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxs("h4", { className: `font-serif font-bold text-base ${titleColor}`, children: [
                "Giờ ",
                h.can,
                " ",
                h.chi
              ] }),
              h.isHoangDao && /* @__PURE__ */ jsx("span", { className: "text-amber-500 text-xs", title: "Hoàng Đạo", children: "★" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-1", children: (() => {
              const [start, end] = h.timeRange.split(" - ");
              const startDate = dayjs(start, "YYYY/MM/DD HH:mm");
              const endDate = dayjs(end, "YYYY/MM/DD HH:mm");
              const isCrossDay = !startDate.isSame(endDate, "day");
              return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-semibold text-stone-600", children: [
                  startDate.format("HH:mm"),
                  " - ",
                  endDate.format("HH:mm")
                ] }),
                isCrossDay && /* @__PURE__ */ jsxs("span", { className: "text-xs text-stone-400 flex items-center gap-1 bg-stone-100 border border-stone-200 px-1.5 py-0.5 rounded w-fit", children: [
                  startDate.format("DD/MM"),
                  " ",
                  /* @__PURE__ */ jsx(ArrowRight, { size: 10 }),
                  " ",
                  endDate.format("DD/MM")
                ] })
              ] });
            })() })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end gap-0.5", children: [
            /* @__PURE__ */ jsxs("span", { className: `text-[10px] font-bold uppercase tracking-wider ${h.score >= 50 ? "text-emerald-700" : "text-red-700"}`, children: [
              h.score,
              "%"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-gray-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `h-full rounded-full transition-all duration-500 ${h.score >= 50 ? "bg-emerald-500" : "bg-red-500"}`,
                style: { width: `${h.score}%` }
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("span", { className: `text-sm font-bold ${h.isHoangDao ? "text-amber-700" : "text-stone-600"}`, children: [
            "Sao ",
            h.zodiacStarName
          ] }),
          h.isHoangDao && /* @__PURE__ */ jsx("span", { className: "text-xs border border-amber-200 text-amber-600 px-1 rounded bg-amber-50", children: "Hoàng Đạo" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `h-px w-full my-1 ${h.score >= 50 ? "bg-emerald-900/5" : "bg-red-900/5"}` }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-0.5 mt-0.5 pl-0", children: [
          h.tags.filter((t) => t !== "Hoàng Đạo" && t !== "Hắc Đạo").map((t, i) => {
            const isGood = ["Đại An", "Tốc Hỷ", "Tiểu Cát"].includes(t);
            const isBad = ["Lưu Niên", "Xích Khẩu", "Không Vong"].includes(t);
            const txtColor = isGood ? "text-emerald-700" : isBad ? "text-red-700" : "text-stone-600";
            const dotColor = isGood ? "bg-emerald-500" : isBad ? "bg-red-500" : "bg-stone-400";
            return /* @__PURE__ */ jsxs("li", { className: `text-xs flex items-center gap-1.5 leading-tight ${txtColor}`, children: [
              /* @__PURE__ */ jsx("span", { className: `w-1 h-1 rounded-full shrink-0 ${dotColor}` }),
              /* @__PURE__ */ jsx("span", { children: t })
            ] }, i);
          }),
          (h.conflictDetails || []).map((d, i) => {
            const cleanText = d.replace(/\s*\([+-]?\d+(\.\d+)?\)$/, "");
            const lower = d.toLowerCase();
            const isNegativeKeyword = ["nhật phá", "xung", "kỵ", "hại", "hình", "sát", "tuyệt"].some((k) => lower.includes(k));
            const isPositive = !d.includes("-") && !isNegativeKeyword;
            return /* @__PURE__ */ jsxs("li", { className: `text-xs flex items-center gap-1.5 leading-tight ${isPositive ? "text-emerald-700" : "text-red-700"}`, children: [
              /* @__PURE__ */ jsx("span", { className: `w-1 h-1 rounded-full shrink-0 ${isPositive ? "bg-emerald-500" : "bg-red-500"}` }),
              /* @__PURE__ */ jsx("span", { children: cleanText })
            ] }, `conflict-${i}`);
          })
        ] })
      ] }, `${h.chi}-${idx}`);
    }) })
  ] });
};

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
function NgayTotXauApp({ initialDateStr, baseUrlPattern } = {}) {
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
    if (dob) params.set("b", formatDobParam(dob));
    else params.delete("b");
    if (birthLoc) params.set("loc", `${birthLoc.lat.toFixed(7)},${birthLoc.lon.toFixed(7)}`);
    else params.delete("loc");
    if (viewLoc) params.set("locday", `${viewLoc.lat.toFixed(7)},${viewLoc.lon.toFixed(7)}`);
    else params.delete("locday");
    const path = baseUrlPattern ? baseUrlPattern.replace("{date}", date.format("YYYY-MM-DD")) : `/xem-ngay-gio-tot-xau-${date.format("YYYY-MM-DD")}`;
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
      }
      const locParam = params.get("loc");
      if (locParam && locParam.includes(",")) {
        const [latStr, lonStr] = locParam.split(",");
        setUserBirthLocation({ name: "Vị trí sinh", lat: parseFloat(latStr), lon: parseFloat(lonStr) });
      }
      setIsUrlParamParsed(true);
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && isUrlParamParsed) {
      updateUrl(currentDate, userDob, userBirthLocation ? { lat: userBirthLocation.lat, lon: userBirthLocation.lon } : void 0, { lat: geoData.lat, lon: geoData.lon });
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
    const finalTz = timezone2 || "UTC";
    const finalOffset = offset || 0;
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
  const { lunaInfo, score, recommendations, hours, affinity, dungThan, zodiacOfficer, clashingAges, compatibleAges, baseScore, truc, sao } = evaluation;
  const dayOfWeek = new Intl.DateTimeFormat("vi-VN", { weekday: "long" }).format(evaluation.date);
  const gaugeScore = typeof baseScore === "number" ? baseScore : score;
  const getEnergyColor = (s) => {
    if (s >= 80) return "bg-emerald-500";
    if (s >= 65) return "bg-green-500";
    if (s >= 50) return "bg-yellow-400";
    if (s >= 30) return "bg-orange-500";
    return "bg-red-600";
  };
  const energyColor = getEnergyColor(gaugeScore);
  const scorePercent = Math.min(100, Math.max(0, gaugeScore));
  return /* @__PURE__ */ jsxs(MantineProvider, { children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto min-h-screen w-full", children: [
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
      /* @__PURE__ */ jsx("div", { className: "mb-2 py-5 w-full mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center shadow-lg rounded-2xl overflow-hidden bg-white border border-stone-200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row w-full justify-start items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:w-5/12 border-r border-stone-100 flex flex-col bg-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-[#b91c1c] text-white py-3 px-3 relative overflow-hidden flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleDateChange(currentDate.subtract(1, "day")), className: "p-1 hover:bg-black/10 rounded-full transition-colors", children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 text-amber-100", children: "Lịch Vạn Sự" }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold font-serif uppercase tracking-widest text-white", children: dayOfWeek })
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleDateChange(currentDate.add(1, "day")), className: "p-1 hover:bg-black/10 rounded-full transition-colors", children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center justify-start pt-8 pb-4 px-6", children: [
            /* @__PURE__ */ jsx("time", { className: `text-[8rem] leading-[0.8] font-bold font-serif tracking-tighter ${evaluation.date.getDay() === 0 || score < 40 ? "text-[#b91c1c]" : "text-stone-800"}`, children: evaluation.date.getDate() }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "text-xl font-medium text-stone-500", children: [
              "Tháng ",
              evaluation.date.getMonth() + 1,
              " / ",
              evaluation.date.getFullYear()
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "w-full mt-8 px-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end mb-1", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold uppercase text-stone-400 tracking-widest flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Zap, { size: 14 }),
                  " Năng Lượng (Tổng Quan)"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: `text-2xl font-bold font-serif ${gaugeScore >= 50 ? "text-stone-700" : "text-red-600"}`, children: [
                  gaugeScore,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-3 w-full bg-stone-100 rounded-full overflow-hidden shadow-inner", children: /* @__PURE__ */ jsx("div", { className: `h-full transition-all duration-700 ease-out ${energyColor}`, style: { width: `${scorePercent}%` } }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-1 text-[10px] font-bold text-stone-300 uppercase", children: [
                /* @__PURE__ */ jsx("span", { children: "Đại Hung" }),
                /* @__PURE__ */ jsx("span", { children: "Bình Hòa" }),
                /* @__PURE__ */ jsx("span", { children: "Đại Cát" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-3", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    setPickingLocationFor("view");
                    setShowLocationPanel(true);
                  },
                  className: "cursor-pointer border border-stone-200 flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-medium text-stone-600 hover:bg-amber-100 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(MapPin, { size: 12 }),
                    " ",
                    geoData.name,
                    " ",
                    /* @__PURE__ */ jsx(Pencil, { size: 10, className: "opacity-50" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setShowUserPanel(true),
                  className: `cursor-pointer border border-stone-200 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${userDob ? "bg-amber-100 text-amber-800" : "bg-stone-100 text-stone-600 hover:bg-amber-50"}`,
                  children: [
                    /* @__PURE__ */ jsx(User, { size: 12 }),
                    " ",
                    userDob ? "Thông tin của bạn" : "Nhập ngày sinh",
                    " ",
                    /* @__PURE__ */ jsx(Pencil, { size: 10, className: "opacity-50" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-dashed border-b border-stone-200 p-6 bg-[#fffdfa]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-5", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-xs font-bold tracking-widest text-stone-400 uppercase mb-1 font-serif", children: [
                "Âm Lịch năm ",
                /* @__PURE__ */ jsx("span", { className: getCanColor(lunaInfo.ycc[0]), children: lunaInfo.ycc[0] }),
                " ",
                /* @__PURE__ */ jsx("span", { className: getChiColor(lunaInfo.ycc[1]), children: lunaInfo.ycc[1] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1 font-serif text-stone-800", children: [
                /* @__PURE__ */ jsx("span", { className: "text-6xl font-bold", children: lunaInfo.d }),
                /* @__PURE__ */ jsx("span", { className: "text-3xl font-light text-stone-300", children: "/" }),
                /* @__PURE__ */ jsx("span", { className: "text-3xl text-stone-500", children: lunaInfo.m })
              ] }),
              (() => {
                const holiday = getVietnameseHoliday(
                  lunaInfo.d,
                  lunaInfo.m,
                  evaluation.date.getDate(),
                  evaluation.date.getMonth() + 1
                );
                if (holiday) {
                  return /* @__PURE__ */ jsxs("div", { className: `mt-3 px-3 py-2 rounded-lg text-center ${holiday.important ? "bg-red-50 border border-red-100" : "bg-amber-50 border border-amber-100"}`, children: [
                    /* @__PURE__ */ jsx("div", { className: `text-sm font-bold uppercase tracking-wide mb-0.5 ${holiday.important ? "text-red-700" : "text-amber-800"}`, children: holiday.name }),
                    holiday.description && /* @__PURE__ */ jsx("div", { className: "text-[10px] leading-snug text-stone-600 max-w-[180px] mx-auto opacity-90", children: holiday.description })
                  ] });
                }
                return null;
              })()
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-stone-100 mb-4" }),
            (() => {
              const lunarYear = `${lunaInfo.ycc[0]} ${lunaInfo.ycc[1]}`;
              const solarYear = `${lunaInfo.stcc.ycc[0]} ${lunaInfo.stcc.ycc[1]}`;
              const lunarMonth = `${lunaInfo.mcc[0]} ${lunaInfo.mcc[1]}`;
              const solarMonth = `${lunaInfo.stcc.mcc[0]} ${lunaInfo.stcc.mcc[1]}`;
              const isMismatch = lunarYear !== solarYear || lunarMonth !== solarMonth;
              if (isMismatch) {
                return /* @__PURE__ */ jsx("div", { className: "mb-4 bg-amber-50/50 rounded-lg p-3 border border-amber-100/50", children: /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-stone-500 leading-relaxed font-serif text-center", children: [
                  "Cảnh báo: Hiện tại Âm Lịch là năm ",
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-stone-600", children: lunarYear }),
                  " tháng ",
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-stone-600", children: lunarMonth }),
                  " không chính xác việc xem ngày tốt phần Can Chi cần dựa vào ",
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-amber-700", children: "Lịch Tiết Khí" }),
                  " cụ thể thông tin ngày sẽ như bên dưới."
                ] }) });
              }
              return null;
            })(),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-center px-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider text-stone-300 font-bold", children: "Năm" }),
                /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold font-serif", children: [
                  /* @__PURE__ */ jsx("span", { className: getCanColor(lunaInfo.stcc.ycc[0]), children: lunaInfo.stcc.ycc[0] }),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: getChiColor(lunaInfo.stcc.ycc[1]), children: lunaInfo.stcc.ycc[1] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider text-stone-300 font-bold", children: "Tháng" }),
                /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold font-serif", children: [
                  /* @__PURE__ */ jsx("span", { className: getCanColor(lunaInfo.stcc.mcc[0]), children: lunaInfo.stcc.mcc[0] }),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: getChiColor(lunaInfo.stcc.mcc[1]), children: lunaInfo.stcc.mcc[1] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wider text-stone-300 font-bold", children: "Ngày" }),
                /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold font-serif", children: [
                  /* @__PURE__ */ jsx("span", { className: getCanColor(lunaInfo.dcc[0]), children: lunaInfo.dcc[0] }),
                  " ",
                  /* @__PURE__ */ jsx("span", { className: getChiColor(lunaInfo.dcc[1]), children: lunaInfo.dcc[1] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center bg-stone-50 py-10", children: /* @__PURE__ */ jsx(ZodiacHourClock, { hours }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:w-7/12 bg-[#fdfbf7] p-8 max-md:p-4 flex flex-col gap-5 relative", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("h2", { className: `text-4xl font-serif font-bold ${score >= 50 ? score >= 80 ? "text-emerald-700" : "text-green-700" : score >= 30 ? "text-[#b91c1c]" : "text-red-800"}`, children: score >= 80 ? "Vượng Khí" : score >= 65 ? "Sinh Khí" : score >= 50 ? "Bình Hòa" : score >= 35 ? "Suy Khí" : "Hư Hao" }),
              /* @__PURE__ */ jsxs("span", { className: "rounded bg-stone-100 px-2 py-1 text-xs font-bold text-stone-500 uppercase tracking-wider", children: [
                score,
                " điểm"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "font-serif text-lg italic text-stone-600", children: [
              '"',
              evaluation.verdict?.advice || "Năng lượng ngày biến động, hãy cân nhắc kỹ trước khi hành sự.",
              '"'
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-dashed border-stone-200" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold uppercase tracking-widest text-stone-400 mb-1 font-serif", children: "TRỰC" }),
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold font-serif text-[#1c1917] mb-1", children: evaluation.truc }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-stone-600 leading-relaxed", children: evaluation.trucMeaning })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold uppercase tracking-widest text-stone-400 mb-1 font-serif", children: "NHỊ THẬP BÁT TÚ" }),
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold font-serif text-[#1c1917] mb-1", children: DATA.NHI_THAP_BAT_TU[evaluation.sao] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-stone-600 leading-relaxed", children: evaluation.saoMeaning })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-8 pt-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-bold text-[#166534] border-b border-green-100 pb-1 mb-1", children: "Cát Tinh (Sao Tốt)" }),
              evaluation.thanSat.cat.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-3", children: evaluation.thanSat.cat.map((s) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-serif font-bold text-gray-800 text-base block", children: s }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-stone-500 italic leading-tight mt-0.5", children: THAN_SAT_MEANING[s] })
              ] }, s)) }) : /* @__PURE__ */ jsx("div", { className: "text-sm text-stone-400 italic", children: "Không có sao tốt nổi bật" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-serif text-lg font-bold text-[#991b1b] border-b border-red-100 pb-1 mb-1", children: "Hung Tinh (Sao Xấu)" }),
              evaluation.thanSat.hung.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-3", children: evaluation.thanSat.hung.map((s) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-serif font-bold text-gray-800 text-base block", children: s }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-stone-500 italic leading-tight mt-0.5", children: THAN_SAT_MEANING[s] })
              ] }, s)) }) : /* @__PURE__ */ jsx("div", { className: "text-sm text-stone-400 italic", children: "Không có sao xấu nổi bật" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-dashed border-stone-200" }),
          /* @__PURE__ */ jsxs("div", { children: [
            userDob && affinity && /* @__PURE__ */ jsxs("div", { className: "mb-8 font-serif", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-sm font-bold uppercase tracking-widest text-stone-400", children: [
                  "Dự báo tuổi ",
                  affinity.userYear || "của bạn"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: `text-lg font-bold font-serif ${score >= (baseScore || score) ? "text-emerald-700" : "text-red-700"}`, children: [
                  Math.round(score),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full bg-stone-100 rounded-full overflow-hidden mb-5", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: `h-full rounded-full transition-all duration-700 ${getEnergyColor(score)}`,
                  style: { width: `${Math.min(100, Math.max(0, score))}%` }
                }
              ) }),
              /* @__PURE__ */ jsx("h3", { className: `text-3xl font-serif font-bold mb-4 ${affinity.score >= 0 ? "text-emerald-800" : "text-red-800"}`, children: affinity.status }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6 bg-stone-50/80 p-5 rounded-xl border border-stone-100", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-xs font-bold text-stone-400 uppercase tracking-widest mb-2 font-sans", children: "Lời bàn" }),
                /* @__PURE__ */ jsxs("div", { className: "text-stone-700 font-serif leading-relaxed space-y-3", children: [
                  affinity.warning && /* @__PURE__ */ jsxs("p", { className: "text-red-800 italic text-[15px]", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-bold not-italic text-red-700 mr-1.5", children: "Lưu ý:" }),
                    affinity.warning
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-lg italic", children: [
                    '"',
                    affinity.advice,
                    '"'
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 border-stone-200 pl-4", children: [
                affinity.tags && affinity.tags.filter((t) => t.type === "good").length > 0 && /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-emerald-700 block mb-1", children: "Những điểm thuận lợi:" }),
                  /* @__PURE__ */ jsx("ul", { className: "text-stone-700 space-y-1", children: affinity.tags.filter((t) => t.type === "good").map((tag, idx) => /* @__PURE__ */ jsxs("li", { children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: tag.label }),
                    tag.description && /* @__PURE__ */ jsxs("span", { className: "text-stone-500 font-sans text-sm", children: [
                      " — ",
                      tag.description
                    ] })
                  ] }, idx)) })
                ] }),
                affinity.tags && affinity.tags.filter((t) => t.type === "bad").length > 0 && /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-red-700 block mb-1", children: "Những điều cần lưu tâm:" }),
                  /* @__PURE__ */ jsx("ul", { className: "text-stone-700 space-y-1", children: affinity.tags.filter((t) => t.type === "bad").map((tag, idx) => /* @__PURE__ */ jsxs("li", { children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: tag.label }),
                    tag.description && /* @__PURE__ */ jsxs("span", { className: "text-stone-500 font-sans text-sm", children: [
                      " — ",
                      tag.description
                    ] })
                  ] }, idx)) })
                ] }),
                (!affinity.tags || affinity.tags.length === 0) && /* @__PURE__ */ jsx("p", { className: "text-stone-500 italic", children: "Ngày bình hòa, không có yếu tố xung hợp đặc biệt với tuổi." })
              ] }),
              dungThan && /* @__PURE__ */ jsx(BaziDisplay, { dungThan, userDob, userBirthLocation, onEdit: () => setShowUserPanel(true) })
            ] }),
            !userDob && /* @__PURE__ */ jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxs("button", { onClick: () => setShowUserPanel(true), className: "text-stone-500 mb-4 font-sans !font-semibold select-none hover:text-amber-600 transition-colors flex items-center justify-center gap-2 mx-auto bg-amber-100 px-4 py-2 font-bold rounded-full hover:bg-amber-200 cursor-pointer", children: [
              /* @__PURE__ */ jsx(User, { size: 16 }),
              " Nhập thông tin để xem dự báo chi tiết cho tuổi của bạn"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx(AgeClashSection, { clashingAges }),
            /* @__PURE__ */ jsx(AgeHarmonySection, { compatibleAges })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(ActionRecommendations, { recommendations }),
      /* @__PURE__ */ jsx(
        DailyHoursGrid,
        {
          hours,
          displayDate: currentDate.format("DD/MM/YYYY"),
          lunaInfo,
          truc: evaluation.truc,
          sao: evaluation.sao
        }
      )
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
  ] });
}

export { DATA as D, NgayTotXauApp as N, evaluateDay as e };
