import{j as e}from"./Bv_5wXhZ.js";import{r as n}from"./C3F-cQIw.js";import{C as c,t as K,a as u,b as $,c as E,d as z,l as F,h as G,y as X,p as q}from"./Ra4wX095.js";import{d as N}from"./DX_ACenJ.js";import{K as P,P as Q}from"./BAWV-0zN.js";import"./Cpj98o6Y.js";import"./fDUuCcSR.js";import"./DlPIclI6.js";import"./CM1J0RNE.js";/* empty css        */const U=n.memo(({typeInput:a,dateTime:h,onChange:w,minDate:L,_maxDate:f,showMinute:g=!1})=>{const o=a==="dateTimeView",d=o&&L?N(L):null,_=o?d?.year()??1e3:1e3,Y=o?(d?.year()??0)+120:2099,[m,p]=n.useState(N(h)),[H,b]=n.useState({year:m.year(),month:m.month()+1,date:m.date(),hour:m.hour(),minute:m.minute()}),[x,R]=n.useState({start:Math.floor(m.year()/100)*100,end:Math.floor(m.year()/100)*100+99}),[j,S]=n.useState(!1);n.useRef(0);const y=n.useRef();n.useEffect(()=>{const t=N(h);p(t),b({year:t.year(),month:t.month()+1,date:t.date(),hour:t.hour(),minute:t.minute()})},[h]);const v=[{name:"year",label:"Năm",min:_,max:Y},{name:"month",label:"Tháng",min:1,max:12},{name:"date",label:"Ngày",min:1,max:31},{name:"hour",label:"Giờ",min:0,max:23,padStart:!0},...g?[{name:"minute",label:"Phút",min:0,max:59,padStart:!0}]:[]],W=n.useMemo(()=>o&&d?Array.from({length:121},(t,r)=>d.year()+r):[],[o,d]),k=n.useMemo(()=>Array.from({length:12},(t,r)=>r+1),[]),T=n.useMemo(()=>Array.from({length:31},(t,r)=>r+1),[]),D=n.useMemo(()=>Array.from({length:24},(t,r)=>r),[]),B=n.useMemo(()=>Array.from({length:60},(t,r)=>r),[]),I=n.useCallback((t,r)=>{let s=m;if(r)switch(t.name){case"minute":s.minute()===59?s=s.minute(0).add(1,"hour"):s=s.add(1,"minute");break;case"hour":s.hour()===23?s=s.hour(0).add(1,"day"):s=s.add(1,"hour");break;case"date":s.date()===s.endOf("month").date()?s=s.date(1).add(1,"month"):s=s.add(1,"day");break;case"month":s.month()===11?s=s.month(0).add(1,"year"):s=s.add(1,"month");break;case"year":s=s.add(1,"year");break}else switch(t.name){case"minute":s.minute()===0?s=s.subtract(1,"hour").minute(59):s=s.subtract(1,"minute");break;case"hour":s.hour()===0?s=s.subtract(1,"day").hour(23):s=s.subtract(1,"hour");break;case"date":s.date()===1?(s=s.subtract(1,"month"),s=s.date(s.daysInMonth())):s=s.subtract(1,"day");break;case"month":s.month()===0?s=s.subtract(1,"year").month(11):s=s.subtract(1,"month");break;case"year":s=s.subtract(1,"year");break}if(o&&d){if(s.isBefore(d))s=N(d);else if(s.year()>d.year()+120)return}else if(s.year()<_||s.year()>Y)return;p(s),b({year:s.year(),month:s.month()+1,date:s.date(),hour:s.hour(),minute:s.minute()}),w(a,s.toDate())},[m,d,o,_,Y,w,a]),O=n.useCallback((t,r)=>{let s=m;switch(t){case"year":s=m.year(r);break;case"month":s=m.month(r-1);break;case"date":s=m.date(r);break;case"hour":s=m.hour(r);break;case"minute":s=m.minute(r);break}if(o&&d){if(s.isBefore(d))s=N(d);else if(s.year()>d.year()+120)return}p(s),b(M=>({...M,[t]:r})),w(a,s.toDate())},[m,d,o,w,a]);n.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]);const A=n.useCallback(t=>{const r=n.useMemo(()=>t.name==="year"&&o?W:t.name==="month"?k:t.name==="date"?T:t.name==="hour"?D:B,[t.name,o,W,k,T,D,B]);return e.jsx("select",{value:H[t.name],onChange:s=>O(t.name,parseInt(s.target.value)),className:"w-full h-full text-center text-xl font-medium cursor-pointer focus:outline-none appearance-none bg-transparent hover:bg-gray-50",children:r.map(s=>e.jsx("option",{value:s,children:t.padStart?s.toString().padStart(2,"0"):s},s))})},[H,O]),V=n.useCallback(t=>{R(r=>({start:r.start+(t?100:-100),end:r.end+(t?100:-100)}))},[]),l=()=>{const t=[],r=o?d?.year()||1e3:x.start,s=o?(d?.year()||0)+120:x.end;for(let M=r;M<=s;M++)t.push(M);return t},i=t=>{const r=m.year(t);p(r),b(s=>({...s,year:t})),w(a,r.toDate()),S(!1)};return e.jsx("div",{className:"flex flex-col space-y-4",children:v.map(t=>e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("label",{className:"text-sm font-medium text-gray-700",children:t.label}),e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"flex items-center h-14 rounded-lg border border-gray-300 bg-white overflow-hidden",children:[e.jsx("button",{onClick:()=>I(t,!1),className:`
                  flex-none w-14 h-full flex items-center justify-center text-2xl
                  transition-colors hover:bg-gray-100 active:bg-gray-200
                  text-gray-700 cursor-pointer
                `,children:a==="dateTimeBorn"?"◀":"◁"}),e.jsx("div",{className:"flex-1 h-full flex items-center justify-center",children:t.name==="year"&&!o?e.jsx("div",{className:"w-full h-full flex items-center justify-center cursor-pointer hover:bg-gray-50",onClick:()=>S(!j),children:e.jsxs("span",{className:"text-xl font-medium",children:[H[t.name]," ▾"]})}):A(t)}),e.jsx("button",{onClick:()=>I(t,!0),className:`
                  flex-none w-14 h-full flex items-center justify-center text-2xl
                  transition-colors hover:bg-gray-100 active:bg-gray-200
                  text-gray-700 cursor-pointer
                `,children:a==="dateTimeBorn"?"▶":"▷"})]}),t.name==="year"&&!o&&j&&e.jsxs("div",{className:"absolute top-full left-0 w-full mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-auto",children:[e.jsxs("div",{className:"sticky top-0 flex justify-between items-center p-2 bg-gray-50 border-b",children:[e.jsxs("button",{onClick:()=>V(!1),className:"px-3 py-1 text-sm rounded hover:bg-gray-200",disabled:x.start<=1e3,children:["◀ ",x.start-100," - ",x.start-1]}),e.jsxs("span",{className:"font-medium",children:[x.start," - ",x.end]}),e.jsxs("button",{onClick:()=>V(!0),className:"px-3 py-1 text-sm rounded hover:bg-gray-200",disabled:x.end>=2099,children:[x.end+1," - ",x.end+100," ▶"]})]}),e.jsx("div",{className:"grid grid-cols-4 gap-1 p-2",children:l().map(r=>e.jsx("button",{onClick:()=>i(r),className:`
                        p-2 text-center rounded hover:bg-blue-50
                        ${r===H.year?"bg-blue-100 font-medium":""}
                      `,children:r},r))})]})]})]},t.name))})}),J={src:"/KHN2FAV6/CcqVVc0S.png",width:180,height:180,format:"png"},C={LaSoTuVi:({color:a="#2C3E50"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",stroke:a,strokeWidth:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"5",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 7V17M7 12H17",stroke:a,strokeWidth:"2"})]}),LuongPhai:({color:a="#27AE60"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L14.5 9H21L16 14L18 21L12 17L6 21L8 14L3 9H9.5L12 2Z",stroke:a,strokeWidth:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"4",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:a,strokeWidth:"2"})]}),KhamThien:({color:a="#8E44AD"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L14.4 7.2L20 8.5L16 12.9L17 18.5L12 15.9L7 18.5L8 12.9L4 8.5L9.6 7.2L12 2Z",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 8L13 10.5L15.5 11L13.75 12.75L14 15L12 14L10 15L10.25 12.75L8.5 11L11 10.5L12 8Z",fill:a})]}),TrungChau:({color:a="#C0392B"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 2V22M2 12H22",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeWidth:"2"})]}),ShowStar:({color:a="#2980B9"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",stroke:a,strokeWidth:"2",fill:"none"}),e.jsx("circle",{cx:"12",cy:"12",r:"3",fill:a})]}),TuHoa:({color:a="#34495e"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L14.5 9H21L16 14L18 21L12 17L6 21L8 14L3 9H9.5L12 2Z",stroke:a,strokeWidth:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"4",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 8V16M8 12H16",stroke:a,strokeWidth:"2"})]}),LuuTuHoa:({color:a="#3498db"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L14.5 9H21L16 14L18 21L12 17L6 21L8 14L3 9H9.5L12 2Z",stroke:a,strokeWidth:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"4",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 8L14 12L12 16L10 12L12 8Z",stroke:a,strokeWidth:"2"})]}),TuanHoan:({color:a="#3498db"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 8L10 6M12 8L14 6",stroke:a,strokeWidth:"2"})]}),CungViTrung:({color:a="#9b59b6"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 2V22M2 12H22",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeWidth:"2"})]}),LocKiToanDo:({color:a="#e67e22"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L14.5 9H21L16 14L18 21L12 17L6 21L8 14L3 9H9.5L12 2Z",stroke:a,strokeWidth:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"4",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 8L14 12L12 16L10 12L12 8Z",fill:a})]}),SaoLuu:({color:a="#8e44ad"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 2L14.5 9H21L16 14L18 21L12 17L6 21L8 14L3 9H9.5L12 2Z",stroke:a,strokeWidth:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"3",fill:a}),e.jsx("path",{d:"M12 9L13.5 12L12 15L10.5 12L12 9Z",fill:a})]}),DaiVan:({color:a="#34495e"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 6V12L16 16",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 2V4M4 12H2M12 20V22M20 12H22",stroke:a,strokeWidth:"2"})]}),BatTu:({color:a="#3498db"})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M12 2V22M2 12H22",stroke:a,strokeWidth:"2"}),e.jsx("path",{d:"M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeWidth:"2"}),e.jsx("circle",{cx:"12",cy:"12",r:"2",fill:a})]}),PhiHoa:({type:a=0})=>{const h=P;return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:h[a],strokeWidth:"2",fill:"white"}),e.jsx("text",{x:"12",y:"16",textAnchor:"middle",fill:h[a],style:{font:"bold 13px sans-serif",userSelect:"none"},children:Q[a]})]})},NumberIcon:({color:a="#000000",number:h=1})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:a,strokeWidth:"2",fill:"white"}),e.jsx("text",{x:"12",y:"16",textAnchor:"middle",fill:a,style:{font:"bold 13px sans-serif",userSelect:"none"},children:h})]})},Z={sex:["#3498db","#e91e63"],showSun:["#95a5a6","#f1c40f"],tuanHoanZone:["#95a5a6","#3498db"],rotateZone:["#95a5a6","#9b59b6"],locKiToanDo:["#95a5a6","#e67e22"],dvStar:["#95a5a6","#34495e"],batTuCung:["#95a5a6","#3498db"]},ee=n.forwardRef(({cfgLs:a,onConfigChange:h,sex:w,onSexChange:L,dateTimeBorn:f,dateTimeView:g,onDateChange:o,ls:d},_)=>{const[Y,m]=n.useState({dateTimeBorn:f,dateTimeView:g});n.useEffect(()=>{m({dateTimeBorn:f,dateTimeView:g})},[f,g]);const p=[{id:"sex",icon:w===1?e.jsx("span",{className:"material-symbols-rounded",children:"male"}):e.jsx("span",{className:"material-symbols-rounded",children:"female"}),title:"Giới tính",options:[{value:1,label:"Nam",color:Z.sex[0],icon:e.jsx("span",{className:"material-symbols-rounded",children:"male"})},{value:0,label:"Nữ",color:Z.sex[1],icon:e.jsx("span",{className:"material-symbols-rounded",children:"female"})}],current:w},{id:"dateTimeBorn",icon:e.jsx("span",{className:"material-symbols-rounded",children:"calendar_month"}),title:"Năm sinh",isDateTime:!0,value:f,color:"#2ecc71"},{id:"dateTimeView",icon:e.jsx("span",{className:"material-symbols-rounded",children:"schedule"}),title:"Năm xem",isDateTime:!0,value:g,color:"#9b59b6"},{id:c.showSun,icon:e.jsx("span",{className:"material-symbols-rounded",children:"wb_sunny"}),title:"Hiện dương lịch",options:[{value:0,label:"Không hiện",color:Z.showSun[0],icon:e.jsx("span",{className:"material-symbols-rounded",children:"visibility_off"})},{value:1,label:"Hiện",color:Z.showSun[1],icon:e.jsx("span",{className:"material-symbols-rounded",children:"visibility"})}]},{id:c.typeLs,icon:e.jsx("span",{className:"material-symbols-rounded",children:"auto_stories"}),title:"Chọn kiểu lá số",options:K.map((l,i)=>({value:i,label:l,color:u[i],icon:e.jsx("span",{className:"material-symbols-rounded",children:"auto_stories"})}))},{id:c.tcpb,icon:e.jsx("span",{className:"material-symbols-rounded",children:"view_timeline"}),title:"Bàn Trung Châu",hidden:![6,7,8].includes(a[c.typeLs]),options:$.map((l,i)=>({value:i,label:l,color:E[i],icon:e.jsx("span",{className:"material-symbols-rounded",children:"view_timeline"}),description:i===0?"Hiển thị các sao trên Thiên Bàn":i===1?"Hiển thị các cung trên Địa Bàn":"Hiển thị các yếu tố trên Nhân Bàn"}))},{id:c.typePhiHoa,icon:l=>e.jsx(C.PhiHoa,{type:a[c.typePhiHoa]}),title:"Kiểu phi hóa",options:[{value:0,label:"Hóa Lộc",color:P[0],icon:()=>e.jsx(C.PhiHoa,{type:0})},{value:1,label:"Hóa Quyền",color:P[1],icon:()=>e.jsx(C.PhiHoa,{type:1})},{value:2,label:"Hóa Khoa",color:P[2],icon:()=>e.jsx(C.PhiHoa,{type:2})},{value:3,label:"Hóa Kị",color:P[3],icon:()=>e.jsx(C.PhiHoa,{type:3})}]},{id:c.lsCanType,icon:e.jsx("span",{className:"material-symbols-rounded",children:"view_module"}),title:"Chọn bảng tứ hóa",options:z.map((l,i)=>({value:i,label:l,color:u[i],icon:e.jsx("span",{className:"material-symbols-rounded",children:"view_module"})}))},{id:c.showHoaIcon,icon:l=>{const i=a[c.showHoaIcon];return e.jsx(C.NumberIcon,{color:l,number:i+1})},title:"Hiện các tầng phi hóa",options:F.map((l,i)=>({value:i,label:l,color:u[i],icon:t=>e.jsx(C.NumberIcon,{color:t,number:i+1})}))},{id:c.tuanHoanZone,icon:e.jsx("span",{className:"material-symbols-rounded",children:"loop"}),title:"Tuần hoàn lộc kị",options:[{value:0,label:"Không hiện",color:u[4],icon:e.jsx("span",{className:"material-symbols-rounded",children:"sync_disabled"})},{value:1,label:"Hiện",color:u[5],icon:e.jsx("span",{className:"material-symbols-rounded",children:"loop"})}]},{id:c.rotateZone,icon:e.jsx("span",{className:"material-symbols-rounded",children:"rotate_90_degrees_ccw"}),title:"Cung vị trùng điệp",options:[{value:0,label:"Không hiện",color:u[4],icon:e.jsx("span",{className:"material-symbols-rounded",children:"block"})},{value:1,label:"Hiện",color:u[5],icon:e.jsx("span",{className:"material-symbols-rounded",children:"rotate_90_degrees_ccw"})}]},{id:c.locKiToanDo,icon:e.jsx("span",{className:"material-symbols-rounded",children:"star_rate"}),title:"Phương viên lộc kị toàn đồ",options:[{value:0,label:"Không hiện",color:u[4],icon:e.jsx("span",{className:"material-symbols-rounded",children:"star_border"})},{value:1,label:"Hiện",color:u[5],icon:e.jsx("span",{className:"material-symbols-rounded",children:"star_rate"})}]},{id:c.showHideStar,icon:e.jsx("span",{className:"material-symbols-rounded",children:"stars"}),title:"Hiện sao theo nhóm",options:G.map((l,i)=>({value:i,label:l,color:u[i],icon:e.jsx("span",{className:"material-symbols-rounded",children:"stars"})}))},{id:c.currentStar,icon:e.jsx("span",{className:"material-symbols-rounded",children:"auto_awesome_motion"}),title:"Hiện sao lưu",options:X.map((l,i)=>({value:i,label:l,color:u[i],icon:e.jsx("span",{className:"material-symbols-rounded",children:"auto_awesome_motion"})}))},{id:c.dvStar,icon:e.jsx("span",{className:"material-symbols-rounded",children:"grade"}),title:"Sao lưu đại vận",options:[{value:0,label:"Không hiện",color:u[4],icon:e.jsx("span",{className:"material-symbols-rounded",children:"star_outline"})},{value:1,label:"Hiện",color:u[5],icon:e.jsx("span",{className:"material-symbols-rounded",children:"grade"})}]},{id:c.batTuCung,icon:e.jsx("span",{className:"material-symbols-rounded",children:"view_timeline"}),title:"Bát tự từng năm",options:[{value:0,label:"Không hiện",color:u[4],icon:e.jsx("span",{className:"material-symbols-rounded",children:"block"})},{value:1,label:"Hiện",color:u[5],icon:e.jsx("span",{className:"material-symbols-rounded",children:"view_timeline"})}]}],[H,b]=n.useState(null),[x,R]=n.useState({x:0,y:0}),[j,S]=n.useState(!1),[y,v]=n.useState(null),[W,k]=n.useState(!1),[T,D]=n.useState(!1);n.useImperativeHandle(_,()=>({toggleMenu:()=>{S(!j),j&&(v(null),k(!1))}}));const B=()=>{D(!0),requestAnimationFrame(()=>{S(!1),D(!1),v(null)})},I=n.useCallback(async(l,i)=>{const r=i.currentTarget.getBoundingClientRect();R({x:r.left+r.width/2,y:r.top-10});const s=typeof l.id=="string"?l.id:Number(l.id);b(H===s?null:s),v(s)},[H]),O=n.useCallback((l,i)=>{l.id==="sex"?(L(i.value),b(null)):l.id===c.typeLs?(h(c.typeLs,i.value),b(null),[6,7,8].includes(i.value)?(k(!0),setTimeout(()=>{const t=document.querySelector(".options-panel");t&&(t.scrollTop=0)},50)):k(!1)):l.id===c.tcpb?(h(c.tcpb,i.value),b(null)):(h(l.id,i.value),b(null))},[h,L,o]),A=l=>{const i=new Date;l==="dateTimeBorn"?(o(l,i),i.getTime()>g.getTime()&&o("dateTimeView",i)):l==="dateTimeView"&&(i.getTime()<f.getTime()?o(l,f):o(l,i))},V=(l,i)=>{l==="dateTimeBorn"?(o(l,i),i.getTime()>g.getTime()&&o("dateTimeView",i),q(d)):o(l,i)};return n.useCallback((l,i)=>{h(l,i)},[h]),n.useCallback(l=>{L(l)},[L]),n.useCallback((l,i)=>{o(l,i)},[o]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          @keyframes swalShow {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes swalHide {
            from {
              opacity: 1;
              transform: scale(1);
            }
            to {
              opacity: 0;
              transform: scale(0.8);
            }
          }

          .swal-show-animation {
            animation: swalShow 0.3s ease-out;
          }

          .swal-hide-animation {
            animation: swalHide 0.2s ease-in forwards;
          }

          @keyframes scaleIn {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }

          .floating-menu {
            animation: scaleIn 0.2s ease-out;
          }

          .tool-options {
            animation: slideIn 0.3s ease-out;
          }

          .speed-dial-icon {
            transition: transform 0.3s ease;
          }

          .speed-dial-icon.open {
            transform: rotate(45deg);
          }

          /* Safe areas for mobile */
          .safe-area-top {
            padding-top: env(safe-area-inset-top, 0px);
          }
          
          .pb-safe {
            padding-bottom: env(safe-area-inset-bottom, 16px);
          }

          @keyframes slideInRight {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes slideOutRight {
            from {
              transform: translateX(0);
              opacity: 1;
            }
            to {
              transform: translateX(100%);
              opacity: 0;
            }
          }

          .slide-in {
            animation: slideInRight 0.3s ease-out forwards;
          }

          .slide-out {
            animation: slideOutRight 0.3s ease-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeOut {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          .fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }

          .fade-out {
            animation: fadeOut 0.3s ease-out forwards;
          }

          .slide-in, .slide-out {
            will-change: transform;
          }
          
          .fade-in, .fade-out {
            will-change: opacity; 
          }

          .slide-in {
            transform: translate3d(0, 0, 0);
          }
          
          .slide-out {
            transform: translate3d(100%, 0, 0);
          }

          /* Thêm hardware acceleration cho animations */
          .slide-in,
          .slide-out,
          .fade-in,
          .fade-out {
            will-change: transform, opacity;
            backface-visibility: hidden;
            transform: translateZ(0);
          }

          /* Giảm thời gian animation xuống để mượt hơn */
          .slide-in {
            animation: slideInRight 0.2s ease-out forwards;
          }

          .slide-out { 
            animation: slideOutRight 0.2s ease-out forwards;
          }

          .fade-in {
            animation: fadeIn 0.2s ease-out forwards;
          }

          .fade-out {
            animation: fadeOut 0.2s ease-out forwards;
          }

          /* Tối ưu transitions */
          .transition-transform {
            transition: transform 0.2s ease-out;
          }

          /* Tối ưu hover effects */
          @media (hover: hover) {
            .hover:bg-gray-100:hover {
              background-color: rgba(243, 244, 246, 0.4);
            }
          }
        `}),e.jsxs("div",{className:"fixed z-50 right-2 bottom-2",children:[e.jsx("button",{onClick:()=>{S(!j),j&&(v(null),k(!1))},className:`
            w-14 h-14 rounded-full bg-white shadow-lg
            flex items-center justify-center
            hover:opacity-90 transition-all
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2
            overflow-hidden
            relative z-50
          `,children:e.jsx("img",{src:J.src,alt:"Settings",className:"w-full h-full object-cover"})}),e.jsxs("svg",{className:"absolute top-[-21px] left-[-22px]",width:"100",height:"100",viewBox:"0 0 100 100",children:[e.jsx("defs",{children:e.jsx("path",{id:"circlePath",d:"M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"})}),e.jsx("text",{fontSize:"14",fill:"orange",fontWeight:"bold",children:e.jsx("textPath",{href:"#circlePath",startOffset:"25%",textAnchor:"middle",children:"Sửa Lá Số"})})]})]}),(j||T)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`
              fixed inset-0 z-50
              ${T?"fade-out":"fade-in"}
            `,onClick:B}),e.jsxs("div",{className:`
              fixed top-0 right-0 w-full sm:w-[380px] h-screen 
              bg-white shadow-xl z-[60]
              ${T?"slide-out":"slide-in"}
            `,children:[e.jsx("div",{className:"safe-area-top bg-white"}),e.jsxs("div",{className:"sticky top-0 flex items-center justify-between px-4 py-2 border-b bg-white",children:[e.jsx("h3",{className:"text-lg font-medium",children:y!==null?p.find(l=>l.id===y)?.title:"Cấu hình lá số"}),y!==null?e.jsx("button",{onClick:()=>v(null),className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx("span",{className:"material-symbols-rounded",children:"arrow_back"})}):e.jsx("button",{onClick:B,className:"p-2 hover:bg-gray-100 rounded-xl bg-gray-200 leading-none",children:e.jsx("span",{className:"material-symbols-rounded font-bold leading-none",children:"close"})})]}),e.jsxs("div",{className:"relative h-[calc(100vh-64px)] overflow-hidden",children:[e.jsx("div",{className:`
                absolute inset-0 overflow-y-auto pb-safe
                transition-transform duration-300 ease-in-out
                ${y===null?"translate-x-0":"-translate-x-full"}
              `,children:e.jsx("div",{className:"divide-y",children:p.map(l=>{const i=!l.hidden,t=l.isDateTime?N(l.value).format("YYYY/MM/DD HH:mm"):l.options?.find(r=>r.value===(l.id==="sex"?l.current:a[l.id]))?.label;return i&&e.jsxs("button",{className:`
                          w-full p-4 flex items-center gap-4
                          hover:bg-gray-50 transition-colors
                          ${l.isDateTime?"cursor-pointer":""}
                        `,onClick:r=>{l.isDateTime?I(l,r):v(l.id)},children:[e.jsx("div",{className:"w-10 h-10 flex items-center justify-center rounded-full bg-[#e7e7e7] p-0 text-[#5e5e5e]",children:typeof l.icon=="function"?e.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.icon(l.color||"#ffd641d9")}):l.icon}),e.jsxs("div",{className:"flex-1 text-left",children:[e.jsx("div",{className:"text-sm font-medium",children:l.title}),t&&e.jsx("div",{className:"text-xs text-gray-500 mt-0.5",children:t})]}),e.jsx("span",{className:"material-symbols-rounded text-gray-400",children:"chevron_right"})]},l.id)})})}),e.jsx("div",{className:`
                absolute inset-0 overflow-y-auto pb-safe bg-white options-panel
                transition-transform duration-300 ease-in-out
                ${y!==null?"translate-x-0":"translate-x-full"}
              `,children:y!==null&&p.map(l=>{const i=typeof l.id=="string"?l.id:Number(l.id);if(y===i){if(l.isDateTime){const t=l.id==="dateTimeBorn",r=t?f:g;return e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"relative flex flex-col space-y-6",children:[e.jsxs("div",{className:"w-full flex justify-between items-start",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-lg font-medium mb-2",children:t?"Năm sinh":"Năm xem dương lịch"}),e.jsx("div",{className:"text-sm text-gray-500",children:N(r).format(t?"dddd YYYY/MM/DD - HH:mm":"YYYY/MM/DD - HH")})]}),e.jsx("button",{onClick:()=>A(String(l.id)),className:`px-3 py-1.5 text-sm font-medium text-white bg-orange-500 
                                    rounded-lg hover:bg-orange-600 transition-colors
                                    active:scale-95 transform duration-100`,children:"Đặt Lại"})]}),e.jsx(U,{typeInput:String(l.id),dateTime:r,onChange:V,minDate:t?void 0:f,_maxDate:t?void 0:N(f).add(120,"year").toDate(),showMinute:t})]})},i)}return e.jsxs("div",{className:"relative h-full",children:[e.jsx("div",{className:`
                          absolute inset-0 bg-white transition-transform duration-300
                          ${W?"-translate-x-full":"translate-x-0"}
                        `,children:e.jsx("div",{className:"p-4 space-y-3",children:l.options?.map(t=>{const r=l.id==="sex"?w===t.value:a[l.id]===t.value;return e.jsxs("button",{className:`
                                    w-full p-4 rounded-lg transition-all 
                                    flex items-center justify-between gap-3
                                    relative
                                    ${r?`
                                      ring-2 ring-offset-2 ring-orange-400 
                                      shadow-lg scale-[1.02]
                                      z-10
                                    `:`
                                      hover:bg-opacity-90
                                      active:scale-[0.98]
                                      opacity-70
                                    `}
                                  `,style:{backgroundColor:t.color,transform:r?"scale(1.02)":"scale(1)"},onClick:s=>{s.stopPropagation(),O(l,t)},children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[e.jsx("div",{className:`
                                      w-10 h-10 rounded-full 
                                      flex items-center justify-center
                                      bg-white/20 backdrop-blur-sm
                                      ${r?"bg-white/30":""}
                                    `,children:typeof t.icon=="function"?t.icon(t.color):t.icon}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("span",{className:`
                                        text-base font-medium text-white
                                        ${r?"font-semibold":""}
                                      `,children:t.label}),t.description&&e.jsx("span",{className:"text-sm text-white/80",children:t.description})]})]}),r&&e.jsx("span",{className:"material-symbols-rounded text-white",children:"check_circle"})]},t.value)})})}),[6,7,8].includes(a[c.typeLs])&&e.jsxs("div",{className:`
                            absolute inset-0 bg-white transition-transform duration-300
                            ${W?"translate-x-0":"translate-x-full"}
                          `,children:[e.jsxs("div",{className:"sticky top-0 flex items-center gap-2 p-4 border-b bg-white",children:[e.jsx("button",{onClick:()=>k(!1),className:"p-2 hover:bg-gray-100 rounded-full",children:e.jsx("span",{className:"material-symbols-rounded",children:"arrow_back"})}),e.jsx("h3",{className:"text-lg font-medium",children:"Quay lại loại lá số khác "})]}),e.jsx("div",{className:"p-4 space-y-3",children:p.find(t=>t.id===c.tcpb)?.options?.map(t=>{const r=a[c.tcpb]===t.value;return e.jsxs("button",{className:`
                                      w-full p-4 rounded-lg transition-all 
                                      flex items-center justify-between gap-3
                                      relative
                                      ${r?`
                                        ring-2 ring-offset-2 ring-orange-400 
                                        shadow-lg scale-[1.02]
                                        z-10
                                      `:`
                                        hover:bg-opacity-90
                                        active:scale-[0.98]
                                        opacity-70
                                      `}
                                    `,style:{backgroundColor:t.color,transform:r?"scale(1.02)":"scale(1)"},onClick:s=>{s.stopPropagation(),O(p.find(M=>M.id===c.tcpb),t)},children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1",children:[e.jsx("div",{className:`
                                        w-10 h-10 rounded-full 
                                        flex items-center justify-center
                                        bg-white/20 backdrop-blur-sm
                                        ${r?"bg-white/30":""}
                                      `,children:typeof t.icon=="function"?t.icon(t.color):t.icon}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("span",{className:`
                                        text-base font-medium text-white
                                        ${r?"font-semibold":""}
                                      `,children:t.label}),t.description&&e.jsx("span",{className:"text-sm text-white/80",children:t.description})]})]}),r&&e.jsx("span",{className:"material-symbols-rounded text-white",children:"check_circle"})]},t.value)})})]})]},i)}return null})})]})]})]})]})});ee.displayName="ConfigIcons";export{ee as default};
