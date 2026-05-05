import{j as e}from"./jsx-runtime.u17CrQMm.js";import{u as Y,a as P}from"./store.DaE36Lwf.js";import{d as I}from"./dayjs.min.CNW_RzbD.js";import{u as O,t as R}from"./LocalLunarCalendar.CMF-3h7G.js";import{r as o}from"./index.CMYDzz0P.js";import{I as W,a as T,b as S,c as N,d as C,e as $,f as E,g as K,h as V,i as Z,j as F,k as G,l as U}from"./TrungChauWarning.CPlV2Njs.js";import{n as _}from"./chartWallClock.BT7t2_LZ.js";import{C as n,t as Q,a as q,P as d,l as J,c as X,y as L,h as ee,b as te}from"./engine.BeJZlAcJ.js";import{D as H}from"./DateTimeInputGps.CTCvTsGR.js";import{M as se}from"./use-dates-state.KVChbrJS.js";I.extend(O);I.extend(R);const ne=`
/* ══ Scrollbar ══ */
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.15); border-radius: 3px; }

/* ══ Animations ══ */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeScale {
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
}
.section-animate {
  animation: slideUp 0.35s cubic-bezier(0.2, 0, 0.13, 1) forwards;
}

/* ══ Toggle switch ══ */
.toggle-track {
  position: relative;
  width: 52px; height: 30px;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.toggle-track.off { background-color: #d1d5db; }
.toggle-track.on  { background-color: #ff8c42; }
.toggle-thumb {
  position: absolute;
  top: 3px;
  width: 24px; height: 24px;
  border-radius: 12px;
  background: white;
  transition: left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
}
.toggle-track.off .toggle-thumb { left: 3px; }
.toggle-track.on  .toggle-thumb { left: 25px; }

/* ══ Chip / Pill button ══ */
.chip-btn {
  display: flex; align-items: center; gap: 8px;
  min-height: 44px;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 13px; font-weight: 500;
  border: 1.5px solid #e5e7eb;
  transition: all 0.25s cubic-bezier(0.2, 0, 0.13, 1);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
  background: #f9fafb;
  color: #4b5563;
  position: relative;
  overflow: hidden;
}
.chip-btn:active { transform: scale(0.97); }
.chip-btn.selected {
  border-color: transparent;
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* ══ Tab bar ══ */
.tab-bar {
  display: flex;
  gap: 4px;
  padding: 3px;
  border-radius: 14px;
  background: #f0f0f0;
}
.tab-item {
  flex: 1;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 3px;
  padding: 8px 6px;
  border-radius: 11px;
  font-size: 11px; font-weight: 500;
  color: #9ca3af;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.2, 0, 0.13, 1);
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
  border: none;
  background: transparent;
  position: relative;
}
.tab-item.active {
  background: rgba(255,140,66,0.15);
  color: #f97316;
  font-weight: 600;
}
.tab-item .tab-icon {
  font-size: 20px;
  transition: transform 0.3s ease;
}
.tab-item.active .tab-icon { transform: scale(1.12); }

/* ══ Card ══ */
.settings-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 14px;
}
.settings-card-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #9ca3af;
  margin-bottom: 10px;
}

/* ══ Time tab (segmented) ══ */
.time-seg {
  display: flex;
  gap: 2px;
  padding: 3px;
  border-radius: 12px;
  background: #f0f0f0;
}
.time-seg-btn {
  flex: 1;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 13px; font-weight: 500;
  color: #6b7280;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: all 0.25s ease;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
  text-align: center;
}
.time-seg-btn.active {
  background: rgba(249,115,22,0.12);
  color: #f97316;
  font-weight: 600;
}

/* ══ Reset button ══ */
.reset-btn {
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 12px; font-weight: 600;
  color: #f97316;
  background: rgba(249,115,22,0.1);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
}
.reset-btn:active { transform: scale(0.95); }

/* ══ Mobile full-screen ══ */
@media (max-width: 767px) {
  .config-panel-root {
    top: 0 !important; bottom: 0 !important;
    right: 0 !important; left: 0 !important;
    width: 100% !important; max-width: none !important;
    height: 100dvh !important; height: 100vh !important;
    border-radius: 0 !important;
    border-left: none !important;
    box-shadow: none;
  }
}
`,ie=({isOn:t,onToggle:r})=>e.jsx("div",{className:`toggle-track ${t?"on":"off"}`,onClick:r,role:"switch","aria-checked":t,children:e.jsx("div",{className:"toggle-thumb"})}),c=({icon:t,label:r,description:p,isOn:m,onToggle:l})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0",borderBottom:"1px solid #f3f4f6"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flex:1,minWidth:0},children:[e.jsx("span",{style:{fontSize:20,color:"#9ca3af",flexShrink:0},children:t}),e.jsxs("div",{style:{minWidth:0},children:[e.jsx("div",{style:{fontSize:14,fontWeight:500,color:"#1f2937"},children:r}),p&&e.jsx("div",{style:{fontSize:11,color:"#9ca3af",marginTop:2},children:p})]})]}),e.jsx(ie,{isOn:m,onToggle:l})]}),ae=({type:t=0})=>e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:d[t],strokeWidth:"2",fill:"transparent"}),e.jsx("text",{x:"12",y:"16",textAnchor:"middle",fill:d[t],style:{font:"bold 12px sans-serif",userSelect:"none"},children:te[t]})]}),re=({color:t="#f97316",number:r=1})=>e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:t,strokeWidth:"2",fill:"transparent"}),e.jsx("text",{x:"12",y:"16",textAnchor:"middle",fill:t,style:{font:"bold 12px sans-serif",userSelect:"none"},children:r})]});function fe({cfgLs:t,onConfigChange:r,sex:p,onSexChange:m,dateTimeBorn:l,dateTimeView:h,onDateChange:x,ls:le,onHidePanel:u}){const y=Y(P),[g,z]=o.useState("dateTime"),[j,v]=o.useState(t[n.tcpb]),[b,D]=o.useState("dateTimeBorn"),f=o.useRef(null);o.useEffect(()=>{v(t[n.tcpb])},[t]),o.useEffect(()=>{const s=i=>{const a=i.target;a.closest(".mantine-Modal-root")||a.closest(".mantine-Popover-dropdown")||a.closest('[role="dialog"]')||f.current&&!f.current.contains(i.target)&&window.innerWidth<=767&&u()};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}},[u]);const k=(s,i)=>{x(s,i)},w=s=>{const i=_(y.geoData?.lat??21.0285,y.geoData?.lon??105.8333);s==="dateTimeBorn"?(x(s,i),i.isAfter(h)&&x("dateTimeView",i)):s==="dateTimeView"&&x(s,i.isBefore(l)?l:i)},A=o.useCallback(s=>{v(s),r(n.tcpb,s)},[r]),M=[{id:"dateTime",title:"Thời gian",icon:e.jsx(W,{})},{id:"typeConfig",title:"Lá số",icon:e.jsx(T,{})},{id:"display",title:"Hiển thị",icon:e.jsx(S,{})},{id:"advancedConfig",title:"Nâng cao",icon:e.jsx(N,{})}],B=()=>{switch(g){case"dateTime":return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"settings-card-title",children:"Giới tính"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[{value:1,label:"Nam",icon:e.jsx(G,{}),color:"#3b82f6"},{value:0,label:"Nữ",icon:e.jsx(U,{}),color:"#ec4899"}].map(s=>e.jsxs("button",{className:`chip-btn ${p===s.value?"selected":""}`,style:p===s.value?{background:s.color,borderColor:"transparent"}:{},onClick:()=>m(s.value),children:[e.jsx("span",{style:{fontSize:18},children:s.icon}),e.jsx("span",{children:s.label})]},s.value))})]}),e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"time-seg",style:{marginBottom:12},children:[{id:"dateTimeBorn",label:"Năm sinh"},{id:"dateTimeView",label:"Năm xem"}].map(s=>e.jsx("button",{className:`time-seg-btn ${b===s.id?"active":""}`,onClick:()=>D(s.id),children:s.label},s.id))}),b==="dateTimeBorn"&&e.jsxs("div",{style:{animation:"fadeScale 0.3s ease forwards"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10},children:[e.jsx("span",{style:{fontSize:13,color:"#6b7280"},children:l.format("dddd YYYY/MM/DD - HH:mm").charAt(0).toUpperCase()+l.format("dddd YYYY/MM/DD - HH:mm").slice(1)}),e.jsx("button",{className:"reset-btn",onClick:()=>w("dateTimeBorn"),children:"Đặt lại"})]}),e.jsx(H,{typeInput:"dateTimeBorn",dateTime:l,onChange:k,showMinute:!0})]}),b==="dateTimeView"&&e.jsxs("div",{style:{animation:"fadeScale 0.3s ease forwards"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10},children:[e.jsx("span",{style:{fontSize:13,color:"#6b7280"},children:h.format("dddd YYYY/MM/DD - HH:mm").charAt(0).toUpperCase()+h.format("dddd YYYY/MM/DD - HH:mm").slice(1)}),e.jsx("button",{className:"reset-btn",onClick:()=>w("dateTimeView"),children:"Đặt lại"})]}),e.jsx(H,{typeInput:"dateTimeView",dateTime:h,onChange:k,minDate:l,_maxDate:l.add(120,"year"),showMinute:!0})]})]})]});case"display":{const s=t[n.typeLs]===9;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"settings-card-title",children:"Tùy chỉnh hiển thị"}),e.jsx(c,{icon:e.jsx(S,{}),label:"Hiện dương lịch",description:"Hiển thị ngày dương trên lá số",isOn:t[n.showSun]===1,onToggle:()=>r(n.showSun,t[n.showSun]===1?0:1)}),!s&&e.jsx(c,{icon:e.jsx(Z,{}),label:"Sao lưu đại vận",description:"Hiển thị sao lưu theo đại vận",isOn:t[n.dvStar]===1,onToggle:()=>r(n.dvStar,t[n.dvStar]===1?0:1)})]}),!s&&e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"settings-card-title",children:"Hiện sao lưu"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:L.map((i,a)=>e.jsxs("button",{className:`chip-btn ${t[n.currentStar]===a?"selected":""}`,style:t[n.currentStar]===a?{background:"#ff8c42",borderColor:"transparent"}:{},onClick:()=>r(n.currentStar,a),children:[e.jsx("span",{style:{fontSize:18,flexShrink:0},children:e.jsx(C,{})}),e.jsx("span",{style:{textAlign:"left"},children:i})]},a))})]}),!s&&e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"settings-card-title",children:"Hiện sao theo nhóm"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:ee.map((i,a)=>e.jsxs("button",{className:`chip-btn ${t[n.showHideStar]===a?"selected":""}`,style:t[n.showHideStar]===a?{background:"#ff8c42",borderColor:"transparent"}:{},onClick:()=>r(n.showHideStar,a),children:[e.jsx("span",{style:{fontSize:18,flexShrink:0},children:e.jsx(F,{})}),e.jsx("span",{style:{textAlign:"left"},children:i})]},a))})]})]})}case"typeConfig":{const s=t[n.typeLs]===9;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"settings-card-title",children:"Kiểu lá số"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[0,9,1,2,3,4,5,6,7,8].map(i=>e.jsxs("button",{className:`chip-btn ${t[n.typeLs]===i?"selected":""}`,style:t[n.typeLs]===i?{background:i===9?"#B8860B":"#ff8c42",borderColor:"transparent"}:{},onClick:()=>r(n.typeLs,i),children:[e.jsx("span",{style:{fontSize:18,flexShrink:0},children:e.jsx(V,{})}),e.jsx("span",{style:{textAlign:"left"},children:Q[i]})]},i))})]}),[6,7,8].includes(t[n.typeLs])&&e.jsxs("div",{className:"settings-card",style:{animation:"fadeScale 0.3s ease forwards"},children:[e.jsx("div",{className:"settings-card-title",children:"Bàn Trung Châu"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:q.map((i,a)=>e.jsxs("button",{className:`chip-btn ${j===a?"selected":""}`,style:j===a?{background:"#ff8c42",borderColor:"transparent"}:{},onClick:()=>A(a),children:[e.jsx("span",{style:{fontSize:18,flexShrink:0},children:e.jsx(T,{})}),e.jsx("span",{style:{textAlign:"left"},children:i})]},a))})]}),s&&e.jsx("div",{className:"settings-card",style:{animation:"fadeScale 0.3s ease forwards",background:"rgba(184,134,11,0.08)",borderColor:"#B8860B"},children:e.jsxs("div",{style:{fontSize:13,color:"#6b7280",lineHeight:1.5},children:[e.jsx("span",{style:{fontWeight:600,color:"#B8860B"},children:"Chế độ Tứ Trụ"}),e.jsx("br",{}),"Ẩn sao Tử Vi, phi hóa, phương viên lộc kị. Chỉ hiển thị vòng Lục Thập Hoa Giáp và Thập Thần theo từng năm."]})}),!s&&e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"settings-card-title",children:"Kiểu phi hóa"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[{value:0,label:"Hóa Lộc",color:d[0]},{value:1,label:"Hóa Quyền",color:d[1]},{value:2,label:"Hóa Khoa",color:d[2]},{value:3,label:"Hóa Kị",color:d[3]}].map(i=>e.jsxs("button",{className:`chip-btn ${t[n.typePhiHoa]===i.value?"selected":""}`,style:t[n.typePhiHoa]===i.value?{background:i.color,borderColor:"transparent"}:{},onClick:()=>r(n.typePhiHoa,i.value),children:[e.jsx(ae,{type:i.value}),e.jsx("span",{style:{textAlign:"left"},children:i.label})]},i.value))})]}),!s&&e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"settings-card-title",children:"Tầng phi hóa"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:J.map((i,a)=>e.jsxs("button",{className:`chip-btn ${t[n.showHoaIcon]===a?"selected":""}`,style:t[n.showHoaIcon]===a?{background:"#ff8c42",borderColor:"transparent"}:{},onClick:()=>r(n.showHoaIcon,a),children:[e.jsx(re,{color:t[n.showHoaIcon]===a?"white":"#f97316",number:a+1}),e.jsx("span",{style:{textAlign:"left"},children:i})]},a))})]}),!s&&e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"settings-card-title",children:"Bảng tứ hóa"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:X.map((i,a)=>e.jsxs("button",{className:`chip-btn ${t[n.lsCanType]===a?"selected":""}`,style:t[n.lsCanType]===a?{background:"#ff8c42",borderColor:"transparent"}:{},onClick:()=>r(n.lsCanType,a),children:[e.jsx("span",{style:{fontSize:18,flexShrink:0},children:e.jsx(N,{})}),e.jsx("span",{style:{textAlign:"left"},children:i})]},a))})]})]})}case"advancedConfig":{const s=t[n.typeLs]===9;return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:e.jsxs("div",{className:"settings-card",children:[e.jsx("div",{className:"settings-card-title",children:"Hiển thị nâng cao"}),!s&&e.jsxs(e.Fragment,{children:[e.jsx(c,{icon:e.jsx(C,{}),label:"Tuần hoàn lộc kị",description:"Hiển thị vòng tuần hoàn lộc kị",isOn:t[n.tuanHoanZone]===1,onToggle:()=>r(n.tuanHoanZone,t[n.tuanHoanZone]===1?0:1)}),e.jsx(c,{icon:e.jsx($,{}),label:"Cung vị trùng điệp",description:"Hiển thị cung vị trùng điệp",isOn:t[n.rotateZone]===1,onToggle:()=>r(n.rotateZone,t[n.rotateZone]===1?0:1)}),e.jsx(c,{icon:e.jsx(E,{}),label:"Lộc kị toàn đồ",description:"Phương viên lộc kị toàn đồ",isOn:t[n.locKiToanDo]===1,onToggle:()=>r(n.locKiToanDo,t[n.locKiToanDo]===1?0:1)})]}),e.jsx(c,{icon:e.jsx(K,{}),label:"Bát tự từng năm",description:"Hiện bát tự chi tiết từng năm",isOn:t[n.batTuCung]===1,onToggle:()=>r(n.batTuCung,t[n.batTuCung]===1?0:1)})]})})}default:return null}};return e.jsxs(se,{theme:{primaryColor:"orange"},children:[e.jsxs("div",{ref:f,className:"config-panel-root",style:{position:"fixed",top:0,right:0,zIndex:50,height:"100%",width:"100%",maxWidth:400,display:"flex",flexDirection:"column",background:"#f5f5f7",borderLeft:"1px solid #e5e7eb",boxShadow:"-4px 0 24px rgba(0,0,0,0.08)",fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',color:"#1f2937",overflow:"hidden"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center",paddingTop:8,paddingBottom:2},children:e.jsx("div",{style:{width:36,height:4,borderRadius:2,background:"rgba(0,0,0,0.15)"},className:"lg:hidden"})}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px 12px",borderBottom:"1px solid #e5e7eb"},children:[e.jsx("h2",{style:{fontSize:18,fontWeight:700,margin:0,color:"#1f2937"},children:"Cấu hình lá số"}),e.jsx("button",{onClick:u,style:{width:32,height:32,borderRadius:10,background:"rgba(0,0,0,0.06)",border:"none",color:"#6b7280",fontSize:16,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s",WebkitTapHighlightColor:"transparent"},children:"✕"})]}),e.jsx("div",{style:{padding:"8px 12px 4px"},children:e.jsx("div",{className:"tab-bar",children:M.map(s=>e.jsxs("button",{className:`tab-item ${g===s.id?"active":""}`,onClick:()=>z(s.id),children:[e.jsx("span",{className:"tab-icon",children:s.icon}),e.jsx("span",{children:s.title})]},s.id))})}),e.jsx("div",{style:{flex:1,overflowY:"auto",padding:"8px 12px 100px",WebkitOverflowScrolling:"touch"},children:e.jsx("div",{className:"section-animate",children:B()},g)})]}),e.jsx("style",{children:ne})]})}export{fe as default};
