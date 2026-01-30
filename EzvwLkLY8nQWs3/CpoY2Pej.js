import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import dayjs from 'dayjs';
import { memo, useState, useEffect, useCallback, useRef } from 'react';
import { k as CfgValue, a0 as IconSchedule, a1 as IconAutoStories, a2 as IconVisibility, I as IconSettings, a3 as typeLsName, a4 as typeBanTCP, a5 as PHIHOA_COLOR, a6 as levelPhiHoaMsg, a7 as changeCanTypeMsg, a8 as yearLoopStarMsg, a9 as hideStarMsg, aa as PHIHOA_SYMBOL1 } from './CicWam7W.js';
/* empty css         */
import 'dayjs/locale/vi.js';
import { MantineProvider, Modal, Button } from '@mantine/core';
import { DatePicker, TimePicker } from '@mantine/dates';

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
      { name: "date", label: "Ngày", min: 1, max: 31 },
      { name: "hour", label: "Giờ", min: 0, max: 23, padStart: true },
      ...showMinute ? [{ name: "minute", label: "Phút", min: 0, max: 59, padStart: true }] : []
    ];
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
        onChange(typeInput, newDateTime);
      },
      [currentDateTime, birthDate, isDateTimeView, minYear, maxYear, onChange, typeInput]
    );
    const handlePickerChange = (val) => {
      const rawVal = Array.isArray(val) ? val[0] : val;
      if (!rawVal) return;
      const d = dayjs(rawVal);
      if (!d.isValid()) return;
      const year = d.year();
      const month = d.month();
      const date = d.date();
      const newDateTime = currentDateTime.year(year).month(month).date(date);
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
    };
    const handleTimeChange = (timeStr) => {
      if (!timeStr) return;
      const [h, m] = timeStr.split(":").map(Number);
      const newDateTime = currentDateTime.hour(h).minute(m);
      setCurrentDateTime(newDateTime);
      onChange(typeInput, newDateTime);
    };
    return /* @__PURE__ */ jsx(MantineProvider, { theme: { primaryColor: "orange" }, children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      timeUnits.map((unit) => /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative flex h-14 items-center overflow-hidden rounded-lg border border-gray-300 shadow-sm ${isDateTimeView ? "bg-white" : "bg-orange-200"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-[15px] left-[65px] z-40 px-2 pt-1 text-xs text-gray-500", children: unit.label }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleChange(unit, false),
                className: `flex h-full w-14 flex-none items-center justify-center transition-colors ${isDateTimeView ? "hover:bg-gray-100 active:bg-gray-200" : "hover:bg-orange-300 active:bg-orange-400"} cursor-pointer text-gray-700`,
                "aria-label": `Decrease ${unit.label}`,
                children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold", children: "-" })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "relative flex h-full flex-1 items-center justify-center", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `flex h-full w-full cursor-pointer items-center justify-center text-xl font-medium ${isDateTimeView ? "hover:bg-gray-50" : "hover:bg-orange-300"}`,
                onClick: () => setModalOpen(true),
                children: /* @__PURE__ */ jsx("span", { className: "text-xl font-medium", children: unit.padStart ? getDisplayValue(unit.name).toString().padStart(2, "0") : getDisplayValue(unit.name) })
              }
            ) }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleChange(unit, true),
                className: `flex h-full w-14 flex-none items-center justify-center transition-colors ${isDateTimeView ? "hover:bg-gray-100 active:bg-gray-200" : "hover:bg-orange-300 active:bg-orange-400"} cursor-pointer text-gray-700`,
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
          title: "Chọn thời gian",
          centered: true,
          zIndex: 200,
          size: "lg",
          classNames: { content: "!w-[90%] md:!w-[95%]" },
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              DatePicker,
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
            ),
            showMinute && /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-4 border-t pt-4", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: "Giờ:" }),
              /* @__PURE__ */ jsx(
                TimePicker,
                {
                  size: "lg",
                  value: currentDateTime.format("HH:mm"),
                  onChange: handleTimeChange,
                  withSeconds: false,
                  className: "flex-1"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 flex w-full justify-end", children: /* @__PURE__ */ jsx(Button, { onClick: () => setModalOpen(false), children: "Xong" }) })
          ] })
        }
      )
    ] }) });
  }
);

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
function NewConfigPanelGps({
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
    const now = dayjs().utc(true);
    if (configId === "dateTimeBorn") {
      onDateChange(configId, dayjs().utc(true));
      if (now.isAfter(dateTimeView)) {
        onDateChange("dateTimeView", dayjs().utc(true));
      }
    } else if (configId === "dateTimeView") {
      if (now.isBefore(dateTimeBorn)) {
        onDateChange(configId, dateTimeBorn);
      } else {
        onDateChange(configId, dayjs().utc(true));
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
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Giới tính" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { value: 1, label: "Nam", icon: "male", color: CONFIG_COLORS.sex[0] },
              { value: 0, label: "Nữ", icon: "female", color: CONFIG_COLORS.sex[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all duration-300 ease-out ${sex === option.value ? "scale-[1.02] transform font-medium shadow-xs" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
                style: {
                  backgroundColor: sex === option.value ? option.color : "",
                  color: sex === option.value ? "white" : ""
                },
                onClick: () => onSexChange(option.value),
                children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: `text-base transition-transform duration-200 ${sex === option.value ? "scale-110 transform" : ""}`,
                      children: option.icon === "male" ? "♂" : "♀"
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
                className: `relative px-6 py-2 text-sm font-medium transition-all duration-300 ease-out ${activeTimeTab === tab.id ? "text-orange-500" : "text-gray-500 hover:text-gray-700"}`,
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
                  /* @__PURE__ */ jsx("h3", { className: "text-sm text-gray-500", children: dateTimeView.format("dddd YYYY/MM/DD - HH").charAt(0).toUpperCase() + dateTimeView.format("dddd YYYY/MM/DD - HH").slice(1) }),
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
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Hiện dương lịch" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { value: 0, label: "Không hiện", icon: "visibility_off", color: CONFIG_COLORS.showSun[0] },
              { value: 1, label: "Hiện", icon: "visibility", color: CONFIG_COLORS.showSun[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all duration-300 ease-out ${cfgLs[CfgValue.showSun] === option.value ? "selected font-medium shadow-xs" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.showSun] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.showSun] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.showSun, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: option.icon === "visibility" ? "◉" : "◌" }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Hiện sao lưu" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: yearLoopStarMsg.map((label, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.currentStar] === idx ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.currentStar] === idx ? "#ff8c42" : "",
                  color: cfgLs[CfgValue.currentStar] === idx ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.currentStar, idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: "⟳" }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: label })
                ]
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Hiện sao theo nhóm" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: hideStarMsg.map((label, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.showHideStar] === idx ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.showHideStar] === idx ? "#ff8c42" : "",
                  color: cfgLs[CfgValue.showHideStar] === idx ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.showHideStar, idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: "✦" }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: label })
                ]
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Sao lưu đại vận" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { value: 0, label: "Không hiện", icon: "star_outline", color: CONFIG_COLORS.dvStar[0] },
              { value: 1, label: "Hiện", icon: "grade", color: CONFIG_COLORS.dvStar[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.dvStar] === option.value ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.dvStar] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.dvStar] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.dvStar, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: option.icon === "grade" ? "★" : "☆" }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] })
        ] }) });
      case "typeConfig":
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Chọn kiểu lá số" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: typeLsName.map((name, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.typeLs] === idx ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.typeLs] === idx ? "#ff8c42" : "",
                  color: cfgLs[CfgValue.typeLs] === idx ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.typeLs, idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: "◆" }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: name })
                ]
              },
              idx
            )) })
          ] }),
          [6, 7, 8].includes(cfgLs[CfgValue.typeLs]) && /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Bàn Trung Châu" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: typeBanTCP.map((name, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${selectedTcpType === idx ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: selectedTcpType === idx ? "#ff8c42" : "",
                  color: selectedTcpType === idx ? "white" : ""
                },
                onClick: () => handleTcpTypeChange(idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: "▣" }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: name })
                ]
              },
              idx
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Kiểu phi hóa" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { value: 0, label: "Hóa Lộc", color: PHIHOA_COLOR[0] },
              { value: 1, label: "Hóa Quyền", color: PHIHOA_COLOR[1] },
              { value: 2, label: "Hóa Khoa", color: PHIHOA_COLOR[2] },
              { value: 3, label: "Hóa Kị", color: PHIHOA_COLOR[3] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.typePhiHoa] === option.value ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
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
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: levelPhiHoaMsg.map((msg, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.showHoaIcon] === idx ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
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
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: changeCanTypeMsg.map((msg, idx) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.lsCanType] === idx ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.lsCanType] === idx ? "#ff8c42" : "",
                  color: cfgLs[CfgValue.lsCanType] === idx ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.lsCanType, idx),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: "◇" }),
                  /* @__PURE__ */ jsx("span", { className: "text-left", children: msg })
                ]
              },
              idx
            )) })
          ] })
        ] }) });
      case "advancedConfig":
        return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Tuần hoàn lộc kị" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { value: 0, label: "Không hiện", icon: "sync_disabled", color: CONFIG_COLORS.tuanHoanZone[0] },
              { value: 1, label: "Hiện", icon: "loop", color: CONFIG_COLORS.tuanHoanZone[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.tuanHoanZone] === option.value ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.tuanHoanZone] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.tuanHoanZone] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.tuanHoanZone, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: option.icon === "loop" ? "⟲" : "∅" }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Cung vị trùng điệp" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { value: 0, label: "Không hiện", icon: "block", color: CONFIG_COLORS.rotateZone[0] },
              { value: 1, label: "Hiện", icon: "rotate_90_degrees_ccw", color: CONFIG_COLORS.rotateZone[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.rotateZone] === option.value ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.rotateZone] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.rotateZone] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.rotateZone, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: option.icon === "rotate_90_degrees_ccw" ? "↻" : "∅" }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Phương viên lộc kị toàn đồ" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { value: 0, label: "Không hiện", icon: "star_border", color: CONFIG_COLORS.locKiToanDo[0] },
              { value: 1, label: "Hiện", icon: "star_rate", color: CONFIG_COLORS.locKiToanDo[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.locKiToanDo] === option.value ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.locKiToanDo] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.locKiToanDo] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.locKiToanDo, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: option.icon === "star_rate" ? "✧" : "∅" }),
                  /* @__PURE__ */ jsx("span", { children: option.label })
                ]
              },
              option.value
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-white p-3 shadow-xs", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-sm font-medium text-gray-700", children: "Bát tự từng năm" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: [
              { value: 0, label: "Không hiện", icon: "block", color: CONFIG_COLORS.batTuCung[0] },
              { value: 1, label: "Hiện", icon: "view_timeline", color: CONFIG_COLORS.batTuCung[1] }
            ].map((option) => /* @__PURE__ */ jsxs(
              "button",
              {
                className: `flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${cfgLs[CfgValue.batTuCung] === option.value ? "font-medium shadow-xs" : "bg-gray-50 text-gray-600"}`,
                style: {
                  backgroundColor: cfgLs[CfgValue.batTuCung] === option.value ? option.color : "",
                  color: cfgLs[CfgValue.batTuCung] === option.value ? "white" : ""
                },
                onClick: () => onConfigChange(CfgValue.batTuCung, option.value),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-base", children: option.icon === "view_timeline" ? "≡" : "∅" }),
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: panelRef,
      className: "config-panel fixed top-0 right-0 z-20 h-full w-[340px] overflow-hidden border-l border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-linear-to-b from-gray-50 to-white px-3 py-1 dark:border-gray-700", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Cấu hình lá số" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onHidePanel,
                className: "rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700",
                children: /* @__PURE__ */ jsx("span", { className: "text-lg", children: "✕" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "sticky top-10 z-10 flex overflow-x-auto border-b border-gray-200 bg-white dark:border-gray-700", children: sections.map((section) => /* @__PURE__ */ jsxs(
            "button",
            {
              className: `relative flex min-w-[80px] flex-1 flex-col items-center justify-center overflow-hidden px-4 py-2 text-xs font-medium transition-all duration-300 ease-out ${activeSection === section.id ? "text-orange-500" : "text-gray-500 hover:text-gray-700"} `,
              onClick: () => setActiveSection(section.id),
              children: [
                section.id === "dateTime" ? /* @__PURE__ */ jsx("span", { className: "transform text-lg transition-transform duration-300 ease-out hover:scale-110", children: "⏱" }) : section.id === "display" ? /* @__PURE__ */ jsx("span", { className: "transform text-lg transition-transform duration-300 ease-out hover:scale-110", children: "◉" }) : section.id === "typeConfig" ? /* @__PURE__ */ jsx("span", { className: "transform text-lg transition-transform duration-300 ease-out hover:scale-110", children: "☰" }) : /* @__PURE__ */ jsx("span", { className: "transform text-lg transition-transform duration-300 ease-out hover:scale-110", children: "⚙" }),
                /* @__PURE__ */ jsx("span", { className: "mt-1 transition-all duration-300", children: section.title }),
                activeSection === section.id && /* @__PURE__ */ jsx("div", { className: "tab-indicator absolute bottom-0 left-0 h-0.5 w-full bg-orange-500" })
              ]
            },
            section.id
          )) }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 space-y-3 overflow-y-auto bg-gray-50 p-2", children: /* @__PURE__ */ jsx("div", { className: "section-transition", children: getConfigsBySection() }, activeSection) })
        ] }),
        /* @__PURE__ */ jsx("style", { children: `
        .reset-button {
          padding: 4px 8px;
          font-size: 12px;
          border-radius: 4px;
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
        
        /* Tab animations */
        .tab-indicator, .time-tab-indicator {
          animation: slideIn 0.3s ease-out forwards;
          height: 2px !important;
          bottom: -1px !important;
          position: absolute;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        /* Animation for section content */
        .section-transition {
          animation: sectionFadeIn 0.4s cubic-bezier(0.2, 0, 0.2, 1) forwards;
        }
        
        @keyframes sectionFadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Button animations */
        button {
          transition: all 0.2s ease-out;
        }
        
        button:active {
          transform: scale(0.95);
        }

        /* Style for option buttons */
        .grid button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.2, 0, 0.2, 1);
        }
        
        .grid button:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.1);
          transition: width 0.3s ease;
          z-index: 0;
        }
        
        .grid button:hover:before {
          width: 100%;
        }
        
        .grid button:active {
          transform: scale(0.97);
        }
        
        .grid button span {
          position: relative;
          z-index: 1;
        }
        
        .grid button.selected {
          transform: scale(1.02);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .grid button.selected span:first-child {
          transform: scale(1.1);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.2);
          border-radius: 3px;
        }
        
        @media (prefers-color-scheme: dark) {
          ::-webkit-scrollbar-thumb {
            background-color: rgba(255,255,255,0.2);
          }
        }
        
        /* Media query for mobile devices */

        @media (max-width: 767px) {
          .config-panel {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 63vh;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-left: none;
            transform: translateY(0);
            transition: transform 0.3s ease-in-out;
            box-shadow: 0 0 75px rgba(0, 0, 0, 0.4);
          }
          
          /* Add a subtle handle for better usability */
          .config-panel:before {
            content: '';
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 4px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 4px;
          }

          /* Ensure tab separators are visible on mobile */
          .grid.border-b {
            border-bottom: 1px solid rgba(209, 213, 219, 1) !important;
          }

          /* Adjust tab indicator position for mobile */
          .time-tab-indicator {
            height: 2px !important;
            bottom: -1px !important;
          }
        }

        /* Tab indicator styles with increased specificity */
        .time-tab-indicator {
          display: block !important;
          animation: slideIn 0.3s ease-out forwards;
          height: 3px !important;
          bottom: -1.5px !important;
          position: absolute !important;
          z-index: 10 !important;
          border-radius: 3px;
        }
        ` })
      ]
    }
  );
}

export { NewConfigPanelGps as default };
