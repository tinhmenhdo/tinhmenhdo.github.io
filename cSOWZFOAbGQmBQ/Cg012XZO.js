import{j as e}from"./D_zvdyIk.js";import{d as g}from"./ipD3SNdB.js";import{r as c}from"./DbXAazNU.js";import{I as E,a as R,b as B,c as F}from"./BDMw0jwD.js";import{n as l,t as V,o as G,p as H,q as U,r as W,y as X,s as q,P as Q}from"./BPLXesbx.js";import"./C3wSS1ep.js";import"./CrB7Zyak.js";import"./DuUYSBdl.js";const A=c.memo(({typeInput:s,dateTime:d,onChange:x,minDate:D,_maxDate:j,showMinute:w=!1})=>{const i=s==="dateTimeView",h=i&&D?g(D):null,p=i?h?.year()??1e3:1e3,b=i?(h?.year()??0)+120:2099,[m,v]=c.useState(g(d)),[N,f]=c.useState({year:m.year(),month:m.month()+1,date:m.date(),hour:m.hour(),minute:m.minute()}),[y,k]=c.useState({start:Math.floor(m.year()/100)*100,end:Math.floor(m.year()/100)*100+99}),[T,S]=c.useState(!1),Y=c.useRef(null);c.useEffect(()=>{const o=g(d);v(o),f({year:o.year(),month:o.month()+1,date:o.date(),hour:o.hour(),minute:o.minute()})},[d]);const M=[{name:"year",label:"Năm",min:p,max:b},{name:"month",label:"Tháng",min:1,max:12},{name:"date",label:"Ngày",min:1,max:31},{name:"hour",label:"Giờ",min:0,max:23,padStart:!0},...w?[{name:"minute",label:"Phút",min:0,max:59,padStart:!0}]:[]],$=c.useMemo(()=>Array.from({length:12},(o,r)=>r+1),[]),a=c.useMemo(()=>Array.from({length:31},(o,r)=>r+1),[]),n=c.useMemo(()=>Array.from({length:24},(o,r)=>r),[]),Z=c.useMemo(()=>Array.from({length:60},(o,r)=>r),[]),_=c.useCallback((o,r)=>{let t=m;if(r)switch(o.name){case"minute":t.minute()===59?t=t.minute(0).add(1,"hour"):t=t.add(1,"minute");break;case"hour":t.hour()===23?t=t.hour(0).add(1,"day"):t=t.add(1,"hour");break;case"date":t.date()===t.endOf("month").date()?t=t.date(1).add(1,"month"):t=t.add(1,"day");break;case"month":t.month()===11?t=t.month(0).add(1,"year"):t=t.add(1,"month");break;case"year":t=t.add(1,"year");break}else switch(o.name){case"minute":t.minute()===0?t=t.subtract(1,"hour").minute(59):t=t.subtract(1,"minute");break;case"hour":t.hour()===0?t=t.subtract(1,"day").hour(23):t=t.subtract(1,"hour");break;case"date":t.date()===1?(t=t.subtract(1,"month"),t=t.date(t.daysInMonth())):t=t.subtract(1,"day");break;case"month":t.month()===0?t=t.subtract(1,"year").month(11):t=t.subtract(1,"month");break;case"year":t=t.subtract(1,"year");break}if(i&&h){if(t.isBefore(h))t=g(h);else if(t.year()>h.year()+120)return}else if(t.year()<p||t.year()>b)return;v(t),f({year:t.year(),month:t.month()+1,date:t.date(),hour:t.hour(),minute:t.minute()}),x(s,t.toDate())},[m,h,i,p,b,x,s]),z=c.useCallback((o,r)=>{let t=m;switch(o){case"year":t=m.year(r);break;case"month":t=m.month(r-1);break;case"date":t=m.date(r);break;case"hour":t=m.hour(r);break;case"minute":t=m.minute(r);break}if(i&&h){if(t.isBefore(h))t=g(h);else if(t.year()>h.year()+120)return}v(t),f(C=>({...C,[o]:r})),x(s,t.toDate())},[m,h,i,x,s]);c.useEffect(()=>()=>{Y.current&&clearTimeout(Y.current)},[]);const I=c.useMemo(()=>{const o=[],r=i?h?.year()??p:y.start,t=i?(h?.year()??0)+120:y.end;for(let C=r;C<=Math.min(t,b);C++)o.push(C);return o},[i,h,y,p,b]),O=c.useCallback(o=>{k(r=>({start:r.start+(o?100:-100),end:r.end+(o?100:-100)}))},[]),P=o=>{const r=m.year(o);v(r),f(t=>({...t,year:o})),x(s,r.toDate()),S(!1)};return e.jsx("div",{className:"space-y-4",children:M.map(o=>e.jsx("div",{className:"mb-4",children:e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:`relative flex h-14 items-center overflow-hidden rounded-lg border border-gray-300 shadow-sm ${i?"bg-white":"bg-orange-200"}`,children:[e.jsx("div",{className:"pointer-events-none absolute top-[15px] left-[65px] z-40 px-2 pt-1 text-xs text-gray-500",children:o.label}),e.jsx("button",{onClick:()=>_(o,!1),className:`flex h-full w-14 flex-none items-center justify-center transition-colors ${i?"hover:bg-gray-100 active:bg-gray-200":"hover:bg-orange-300 active:bg-orange-400"} cursor-pointer text-gray-700`,"aria-label":`Decrease ${o.label}`,children:e.jsx("span",{className:"text-2xl font-bold",children:"-"})}),e.jsx("div",{className:"relative flex h-full flex-1 items-center justify-center",children:o.name==="year"&&!i?e.jsx("div",{className:`flex h-full w-full cursor-pointer items-center justify-center text-xl font-medium ${i?"hover:bg-gray-50":"hover:bg-orange-300"}`,onClick:()=>S(!T),children:e.jsxs("span",{className:"text-xl font-medium",children:[N[o.name]," ▾"]})}):e.jsx("select",{value:N[o.name],onChange:r=>z(o.name,Number.parseInt(r.target.value)),className:`h-full w-full cursor-pointer appearance-none bg-transparent text-center text-xl font-medium focus:outline-hidden ${i?"hover:bg-gray-50":"hover:bg-orange-300"}`,children:o.name==="year"&&i?I.map(r=>e.jsx("option",{value:r,children:r},r)):o.name==="month"?$.map(r=>e.jsx("option",{value:r,children:r},r)):o.name==="date"?a.map(r=>e.jsx("option",{value:r,children:r},r)):o.name==="hour"?n.map(r=>e.jsx("option",{value:r,children:o.padStart?r.toString().padStart(2,"0"):r},r)):Z.map(r=>e.jsx("option",{value:r,children:o.padStart?r.toString().padStart(2,"0"):r},r))})}),e.jsx("button",{onClick:()=>_(o,!0),className:`flex h-full w-14 flex-none items-center justify-center transition-colors ${i?"hover:bg-gray-100 active:bg-gray-200":"hover:bg-orange-300 active:bg-orange-400"} cursor-pointer text-gray-700`,"aria-label":`Increase ${o.label}`,children:e.jsx("span",{className:"text-2xl font-bold",children:"+"})})]}),o.name==="year"&&!i&&T&&e.jsxs("div",{className:"absolute top-full left-0 z-50 mt-1 max-h-72 w-full overflow-auto rounded-lg border bg-white shadow-lg",children:[e.jsxs("div",{className:"sticky top-0 z-50 flex items-center justify-between border-b bg-gray-50 p-2",children:[e.jsx("button",{onClick:()=>O(!1),className:"rounded px-3 py-2 text-sm hover:bg-gray-200 active:bg-gray-300",disabled:y.start<=1e3,children:e.jsx("span",{className:"text-lg font-bold",children:"←"})}),e.jsxs("span",{className:"font-medium",children:[y.start," - ",y.end]}),e.jsx("button",{onClick:()=>O(!0),className:"rounded px-3 py-2 text-sm hover:bg-gray-200 active:bg-gray-300",disabled:y.end>=2099,children:e.jsx("span",{className:"text-lg font-bold",children:"→"})})]}),e.jsx("div",{className:"grid grid-cols-4 gap-1 p-2",children:I.map(r=>e.jsx("button",{onClick:()=>P(r),className:`rounded-md p-2 text-center ${r===N.year?"bg-blue-100 font-medium":"hover:bg-blue-50 active:bg-blue-100"} `,children:r},r))})]})]})},o.name))})}),u={sex:["#3498db","#e91e63"],showSun:["#95a5a6","#ff8c42"],tuanHoanZone:["#95a5a6","#ff8c42"],rotateZone:["#95a5a6","#ff8c42"],locKiToanDo:["#95a5a6","#ff8c42"],dvStar:["#95a5a6","#ff8c42"],batTuCung:["#95a5a6","#ff8c42"]},K={NumberIcon:({color:s="#000000",number:d=1})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:s,strokeWidth:"2",fill:"white"}),e.jsx("text",{x:"12",y:"16",textAnchor:"middle",fill:s,style:{font:"bold 13px sans-serif",userSelect:"none"},children:d})]}),PhiHoa:({type:s=0})=>{const d=H;return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:d[s],strokeWidth:"2",fill:"white"}),e.jsx("text",{x:"12",y:"16",textAnchor:"middle",fill:d[s],style:{font:"bold 13px sans-serif",userSelect:"none"},children:Q[s]})]})}};function ne({cfgLs:s,onConfigChange:d,sex:x,onSexChange:D,dateTimeBorn:j,dateTimeView:w,onDateChange:i,ls:h,onHidePanel:p}){const[b,m]=c.useState("dateTime"),[v,N]=c.useState(s[l.tcpb]),[f,y]=c.useState("dateTimeBorn"),k=c.useRef(null);c.useEffect(()=>{N(s[l.tcpb])},[s]),c.useEffect(()=>{const a=n=>{k.current&&!k.current.contains(n.target)&&window.innerWidth<=767&&p()};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}},[p]);const T=(a,n)=>{i(a,n)},S=a=>{const n=new Date;a==="dateTimeBorn"?(i(a,n),n.getTime()>w.getTime()&&i("dateTimeView",n)):a==="dateTimeView"&&(n.getTime()<j.getTime()?i(a,j):i(a,n))},Y=c.useCallback(a=>{N(a),d(l.tcpb,a)},[d]),M=[{id:"dateTime",title:"Thời gian",icon:e.jsx(E,{})},{id:"typeConfig",title:"Lá số",icon:e.jsx(R,{})},{id:"display",title:"Hiển thị",icon:e.jsx(B,{})},{id:"advancedConfig",title:"Nâng cao",icon:e.jsx(F,{})}],$=()=>{switch(b){case"dateTime":return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Giới tính"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:1,label:"Nam",icon:"male",color:u.sex[0]},{value:0,label:"Nữ",icon:"female",color:u.sex[1]}].map(a=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all duration-300 ease-out ${x===a.value?"scale-[1.02] transform font-medium shadow-xs":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,style:{backgroundColor:x===a.value?a.color:"",color:x===a.value?"white":""},onClick:()=>D(a.value),children:[e.jsx("span",{className:`text-base transition-transform duration-200 ${x===a.value?"scale-110 transform":""}`,children:a.icon==="male"?"♂":"♀"}),e.jsx("span",{children:a.label})]},a.value))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("div",{className:"relative mb-4 grid grid-cols-2 border-b border-gray-300",children:[{id:"dateTimeBorn",label:"Năm sinh"},{id:"dateTimeView",label:"Năm xem"}].map(a=>e.jsxs("button",{className:`relative px-6 py-2 text-sm font-medium transition-all duration-300 ease-out ${f===a.id?"text-orange-500":"text-gray-500 hover:text-gray-700"}`,onClick:()=>y(a.id),children:[a.label,f===a.id&&e.jsx("span",{className:"time-tab-indicator absolute bottom-0 left-0 h-1 w-full bg-orange-500",style:{zIndex:10,height:"3px"}})]},a.id))}),e.jsxs("div",{className:"p-2",children:[f==="dateTimeBorn"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-3 flex content-center items-center justify-between",children:[e.jsx("h3",{className:"text-sm text-gray-500",children:g(j).format("dddd YYYY/MM/DD - HH:mm").charAt(0).toUpperCase()+g(j).format("dddd YYYY/MM/DD - HH:mm").slice(1)}),e.jsx("button",{onClick:()=>S("dateTimeBorn"),className:"reset-button bg-orange-500! text-xs! text-white",children:"Đặt lại"})]}),e.jsx(A,{typeInput:"dateTimeBorn",dateTime:j,onChange:T,showMinute:!0})]}),f==="dateTimeView"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm text-gray-500",children:g(w).format("dddd YYYY/MM/DD - HH").charAt(0).toUpperCase()+g(w).format("dddd YYYY/MM/DD - HH").slice(1)}),e.jsx("button",{onClick:()=>S("dateTimeView"),className:"reset-button",children:"Đặt lại"})]}),e.jsx(A,{typeInput:"dateTimeView",dateTime:w,onChange:T,minDate:j,_maxDate:g(j).add(120,"year").toDate(),showMinute:!1})]})]})]})]})});case"display":return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Hiện dương lịch"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:0,label:"Không hiện",icon:"visibility_off",color:u.showSun[0]},{value:1,label:"Hiện",icon:"visibility",color:u.showSun[1]}].map(a=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all duration-300 ease-out ${s[l.showSun]===a.value?"selected font-medium shadow-xs":"bg-gray-50 text-gray-600 hover:bg-gray-100"}`,style:{backgroundColor:s[l.showSun]===a.value?a.color:"",color:s[l.showSun]===a.value?"white":""},onClick:()=>d(l.showSun,a.value),children:[e.jsx("span",{className:"text-base",children:a.icon==="visibility"?"◉":"◌"}),e.jsx("span",{children:a.label})]},a.value))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Hiện sao lưu"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:X.map((a,n)=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.currentStar]===n?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.currentStar]===n?"#ff8c42":"",color:s[l.currentStar]===n?"white":""},onClick:()=>d(l.currentStar,n),children:[e.jsx("span",{className:"text-base",children:"⟳"}),e.jsx("span",{className:"text-left",children:a})]},n))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Hiện sao theo nhóm"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:q.map((a,n)=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.showHideStar]===n?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.showHideStar]===n?"#ff8c42":"",color:s[l.showHideStar]===n?"white":""},onClick:()=>d(l.showHideStar,n),children:[e.jsx("span",{className:"text-base",children:"✦"}),e.jsx("span",{className:"text-left",children:a})]},n))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Sao lưu đại vận"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:0,label:"Không hiện",icon:"star_outline",color:u.dvStar[0]},{value:1,label:"Hiện",icon:"grade",color:u.dvStar[1]}].map(a=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.dvStar]===a.value?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.dvStar]===a.value?a.color:"",color:s[l.dvStar]===a.value?"white":""},onClick:()=>d(l.dvStar,a.value),children:[e.jsx("span",{className:"text-base",children:a.icon==="grade"?"★":"☆"}),e.jsx("span",{children:a.label})]},a.value))})]})]})});case"typeConfig":return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Chọn kiểu lá số"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:V.map((a,n)=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.typeLs]===n?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.typeLs]===n?"#ff8c42":"",color:s[l.typeLs]===n?"white":""},onClick:()=>d(l.typeLs,n),children:[e.jsx("span",{className:"text-base",children:"◆"}),e.jsx("span",{className:"text-left",children:a})]},n))})]}),[6,7,8].includes(s[l.typeLs])&&e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Bàn Trung Châu"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:G.map((a,n)=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${v===n?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:v===n?"#ff8c42":"",color:v===n?"white":""},onClick:()=>Y(n),children:[e.jsx("span",{className:"text-base",children:"▣"}),e.jsx("span",{className:"text-left",children:a})]},n))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Kiểu phi hóa"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:0,label:"Hóa Lộc",color:H[0]},{value:1,label:"Hóa Quyền",color:H[1]},{value:2,label:"Hóa Khoa",color:H[2]},{value:3,label:"Hóa Kị",color:H[3]}].map(a=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.typePhiHoa]===a.value?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.typePhiHoa]===a.value?a.color:"",color:s[l.typePhiHoa]===a.value?"white":""},onClick:()=>d(l.typePhiHoa,a.value),children:[e.jsx(K.PhiHoa,{type:a.value}),e.jsx("span",{className:"text-left",children:a.label})]},a.value))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Hiện các tầng phi hóa"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:U.map((a,n)=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.showHoaIcon]===n?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.showHoaIcon]===n?"#ff8c42":"",color:s[l.showHoaIcon]===n?"white":""},onClick:()=>d(l.showHoaIcon,n),children:[e.jsx(K.NumberIcon,{color:s[l.showHoaIcon]===n?"white":"#ff8c42",number:n+1}),e.jsx("span",{className:"text-left",children:a})]},n))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Chọn bảng tứ hóa"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:W.map((a,n)=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.lsCanType]===n?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.lsCanType]===n?"#ff8c42":"",color:s[l.lsCanType]===n?"white":""},onClick:()=>d(l.lsCanType,n),children:[e.jsx("span",{className:"text-base",children:"◇"}),e.jsx("span",{className:"text-left",children:a})]},n))})]})]})});case"advancedConfig":return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Tuần hoàn lộc kị"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:0,label:"Không hiện",icon:"sync_disabled",color:u.tuanHoanZone[0]},{value:1,label:"Hiện",icon:"loop",color:u.tuanHoanZone[1]}].map(a=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.tuanHoanZone]===a.value?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.tuanHoanZone]===a.value?a.color:"",color:s[l.tuanHoanZone]===a.value?"white":""},onClick:()=>d(l.tuanHoanZone,a.value),children:[e.jsx("span",{className:"text-base",children:a.icon==="loop"?"⟲":"∅"}),e.jsx("span",{children:a.label})]},a.value))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Cung vị trùng điệp"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:0,label:"Không hiện",icon:"block",color:u.rotateZone[0]},{value:1,label:"Hiện",icon:"rotate_90_degrees_ccw",color:u.rotateZone[1]}].map(a=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.rotateZone]===a.value?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.rotateZone]===a.value?a.color:"",color:s[l.rotateZone]===a.value?"white":""},onClick:()=>d(l.rotateZone,a.value),children:[e.jsx("span",{className:"text-base",children:a.icon==="rotate_90_degrees_ccw"?"↻":"∅"}),e.jsx("span",{children:a.label})]},a.value))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Phương viên lộc kị toàn đồ"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:0,label:"Không hiện",icon:"star_border",color:u.locKiToanDo[0]},{value:1,label:"Hiện",icon:"star_rate",color:u.locKiToanDo[1]}].map(a=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.locKiToanDo]===a.value?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.locKiToanDo]===a.value?a.color:"",color:s[l.locKiToanDo]===a.value?"white":""},onClick:()=>d(l.locKiToanDo,a.value),children:[e.jsx("span",{className:"text-base",children:a.icon==="star_rate"?"✧":"∅"}),e.jsx("span",{children:a.label})]},a.value))})]}),e.jsxs("div",{className:"rounded-lg bg-white p-3 shadow-xs",children:[e.jsx("h3",{className:"mb-2 text-sm font-medium text-gray-700",children:"Bát tự từng năm"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{value:0,label:"Không hiện",icon:"block",color:u.batTuCung[0]},{value:1,label:"Hiện",icon:"view_timeline",color:u.batTuCung[1]}].map(a=>e.jsxs("button",{className:`flex items-center justify-start gap-2 rounded-md px-3 py-2 text-sm transition-all ${s[l.batTuCung]===a.value?"font-medium shadow-xs":"bg-gray-50 text-gray-600"}`,style:{backgroundColor:s[l.batTuCung]===a.value?a.color:"",color:s[l.batTuCung]===a.value?"white":""},onClick:()=>d(l.batTuCung,a.value),children:[e.jsx("span",{className:"text-base",children:a.icon==="view_timeline"?"≡":"∅"}),e.jsx("span",{children:a.label})]},a.value))})]})]})});default:return null}};return e.jsxs("div",{ref:k,className:"config-panel fixed top-0 right-0 z-20 h-full w-[340px] overflow-hidden border-l border-gray-200 bg-white shadow-lg",children:[e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsxs("div",{className:"sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-linear-to-b from-gray-50 to-white px-3 py-1",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Cấu hình lá số"}),e.jsx("button",{onClick:p,className:"rounded-full p-2 transition-colors hover:bg-gray-100",children:e.jsx("span",{className:"text-lg",children:"✕"})})]}),e.jsx("div",{className:"sticky top-10 z-10 flex overflow-x-auto border-b border-gray-200 bg-white",children:M.map(a=>e.jsxs("button",{className:`relative flex min-w-[80px] flex-1 flex-col items-center justify-center overflow-hidden px-4 py-2 text-xs font-medium transition-all duration-300 ease-out ${b===a.id?"text-orange-500":"text-gray-500 hover:text-gray-700"} `,onClick:()=>m(a.id),children:[a.id==="dateTime"?e.jsx("span",{className:"transform text-lg transition-transform duration-300 ease-out hover:scale-110",children:"⏱"}):a.id==="display"?e.jsx("span",{className:"transform text-lg transition-transform duration-300 ease-out hover:scale-110",children:"◉"}):a.id==="typeConfig"?e.jsx("span",{className:"transform text-lg transition-transform duration-300 ease-out hover:scale-110",children:"☰"}):e.jsx("span",{className:"transform text-lg transition-transform duration-300 ease-out hover:scale-110",children:"⚙"}),e.jsx("span",{className:"mt-1 transition-all duration-300",children:a.title}),b===a.id&&e.jsx("div",{className:"tab-indicator absolute bottom-0 left-0 h-0.5 w-full bg-orange-500"})]},a.id))}),e.jsx("div",{className:"flex-1 space-y-3 overflow-y-auto bg-gray-50 p-2",children:e.jsx("div",{className:"section-transition",children:$()},b)})]}),e.jsx("style",{children:`
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
            height: 92vh;
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
        `})]})}export{ne as default};
