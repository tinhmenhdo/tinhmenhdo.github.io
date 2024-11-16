import{j as p}from"./jsx-runtime.chL-vPbI.js";import{r as b,R as j}from"./index.l2PZgWEW.js";var H=Object.defineProperty,v=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,I=(t,s,i)=>s in t?H(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,M=(t,s)=>{for(var i in s||(s={}))T.call(s,i)&&I(t,i,s[i]);if(v)for(var i of v(s))W.call(s,i)&&I(t,i,s[i]);return t},y=(t,s)=>{var i={};for(var e in t)T.call(t,e)&&s.indexOf(e)<0&&(i[e]=t[e]);if(null!=t&&v)for(var e of v(t))s.indexOf(e)<0&&W.call(t,e)&&(i[e]=t[e]);return i};const L={starsCount:400,starsColor:"#FFFFFF",starsRotationSpeed:3,cometFrequence:15,nebulasIntensity:10,bgColor:"rgb(8,8,8)",sunScale:1,planetsScale:1,solarSystemOrbite:65,solarSystemSpeedOrbit:100},P=t=>Object.assign({},L,t),g=t=>{const s=(t.includes("#")?q(t):t).split(/[\(|,|\)]/);return[parseInt(s[1],10),parseInt(s[2],10),parseInt(s[3],10)]};function q(t){let s="0",i="0",e="0";return t.length<=5?(s="0x"+t[1]+t[1],i="0x"+t[2]+t[2],e="0x"+t[3]+t[3]):t.length>=7&&(s="0x"+t[1]+t[2],i="0x"+t[3]+t[4],e="0x"+t[5]+t[6]),"rgb("+ +s+","+ +i+","+ +e+")"}const c=(t,s)=>`rgba(${t[0]}, ${t[1]}, ${t[2]}, ${s})`;class S{constructor({ctx:t}){this.ctx=t}getCanvasWidth(){return this.ctx.canvas.width}getCanvasHeight(){return this.ctx.canvas.height}get canvasMinSide(){return Math.min(this.getCanvasHeight(),this.getCanvasWidth())}get canvasMaxSide(){return Math.max(this.getCanvasHeight(),this.getCanvasWidth())}}class A extends S{constructor({ctx:t,width:s,speed:i,distance:e,rgb:n,origin:a,startAngle:r=360*Math.random()}){super({ctx:t}),this.relativeWidth=s,this.rgb=n,this.speed=i,this.relativeDistance=e,this.origin=a,this.angle=Math.PI/180*(r??0)}rotate(){this.angle=(this.angle+Math.PI/180*this.speed)%360}get width(){return this.relativeWidth/100*this.canvasMinSide}get distance(){return this.relativeDistance/100*this.canvasMinSide}getAngle(){return this.angle}getRefAngle(){var t,s;return this.getAngle()+(null!=(s=null==(t=this.origin)?void 0:t.getAngle())?s:0)}getWidth(){return this.width}getOriginCoords(){if(this.origin){const t=this.origin.getOriginCoords();return[t[0]+Math.cos(this.origin.getAngle()+this.angle)*(this.distance+this.origin.getWidth()),t[1]+Math.sin(this.origin.getAngle()+this.angle)*(this.distance+this.origin.getWidth())]}{const t=[this.getCanvasWidth()/2,this.getCanvasHeight()/2];return[t[0]+Math.cos(this.angle)*this.distance,t[1]+Math.sin(this.angle)*this.distance]}}}const m=t=>[Math.round(t[0]),Math.round(t[1])];class G extends A{constructor(t){var s=y(t,[]);super(M({},s)),this.draw=()=>{this.rotate(),this.ctx.shadowBlur=0,this.ctx.beginPath();const t=m(this.getOriginCoords());this.ctx.arc(...t,Math.round(this.width),0,2*Math.PI),this.ctx.closePath(),this.ctx.fillStyle=`rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, 1)`,this.ctx.fill()}}}const o={between:(t,s)=>t+Math.random()*(s-t),around:(t,s,i)=>("%"===i&&(s*=t),t-s+Math.random()*s*2),positiveOrNegative:()=>Math.random()>.5?1:-1,randomizeArray:t=>{const s=t.slice();for(let t=s.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1)),e=s[t];s[t]=s[i],s[i]=e}return s}},z=({stars:t,count:s,color:i,rotationSpeed:e,ctx:n})=>{let a;const r=s-t.length;if(r<=0)a=t.slice(0,s);else{const s=new Array(r).fill(0).map((()=>new G({ctx:n,width:o.between(.03,.1),distance:120*Math.pow(Math.random()*Math.random(),.5),speed:o.around(.015*e,.005),rgb:g(i)})));a=t.concat(s)}return a.map((t=>(t.speed=o.around(.015*e,.005),t)))},O=({canvas:t,drawings:s,bgColor:i,fps:e=0})=>{const n=t.width,a=t.height,r=t.getContext("2d");if(!r)return()=>{};r.save();let o,h=0,c=1e3/e;const l=()=>{if(e){o=requestAnimationFrame(l);const t=Date.now();if(t-h<c)return;h=t}r.clearRect(0,0,n,a),i&&(r.fillStyle=i,r.fillRect(0,0,n,a)),s.forEach((t=>t.draw()))};return l(),()=>{r.restore(),o&&cancelAnimationFrame(o)}};class $ extends A{constructor(t){var s=y(t,[]);super(M({},s)),this.draw=()=>{this.rotate(),this.ctx.shadowBlur=0,this.ctx.beginPath();const t=m(this.getOriginCoords());this.ctx.arc(...t,Math.round(this.width),0,2*Math.PI),this.ctx.fillStyle="white",this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.arc(...t,Math.round(5*this.width),0,2*Math.PI),this.ctx.closePath(),this.ctx.fillStyle=this.getGradiant(),this.ctx.fill()}}getGradiant(){const t=m(this.getOriginCoords()),s=this.ctx.createRadialGradient(...t,0,...t,Math.round(5*this.width));return s.addColorStop(0,c(this.rgb,.2)),s.addColorStop(.1,c(this.rgb,.3)),s.addColorStop(.16,c(this.rgb,.6)),s.addColorStop(.2,c(this.rgb,1)),s.addColorStop(.2,c(this.rgb,.4)),s.addColorStop(.23,c(this.rgb,.08)),s.addColorStop(.5,c(this.rgb,.02)),s.addColorStop(.9,c(this.rgb,.005)),s.addColorStop(1,c(this.rgb,0)),s}}class l extends A{constructor(t){var s=y(t,[]);super(M({},s)),this.draw=()=>{this.rotate(),this.ctx.shadowBlur=0,this.ctx.beginPath();const t=m(this.getOriginCoords());this.ctx.arc(...t,Math.round(this.width),0,2*Math.PI),this.ctx.fillStyle="black",this.ctx.fill(),this.ctx.closePath();const s=this.ctx.createRadialGradient(Math.round(t[0]-.4*this.width*Math.cos(this.getRefAngle())),Math.round(t[1]-.4*this.width*Math.sin(this.getRefAngle())),0,...t,Math.round(this.width));s.addColorStop(0,c(this.rgb,1)),s.addColorStop(1,c(this.rgb,.5)),this.ctx.fillStyle=s,this.ctx.fill()}}}const B=({planets:t,sunScale:s,scale:i,rotationSpeed:e,distance:n,ctx:a})=>{const r=new $({ctx:a,width:1.9*s,distance:n/2,startAngle:0,speed:.0033*e,rgb:g("rgb(208,141,16)")}),o=new l({ctx:a,width:.48*i,distance:5*i,speed:.01*e,rgb:g("rgb(19,102,150)"),origin:r});return[r,new l({ctx:a,width:.15*i,distance:4.2,speed:.017*e,rgb:g("rgb(180, 144, 88)"),origin:r}),o,new l({ctx:a,width:.12*i,distance:1.6*i,speed:.0212*e,rgb:g("rgb(200, 200, 200)"),origin:o}),new l({ctx:a,width:.32*i,distance:6.4*i,speed:.0066*e,rgb:g("rgb(233, 88, 26)"),origin:r}),new l({ctx:a,width:.72*i,distance:8.8*i,speed:.0046*e,rgb:g("rgb(169, 109, 45)"),origin:r}),new l({ctx:a,width:.6*i,distance:11*i,speed:.004*e,rgb:g("rgb(164,127,84)"),origin:r}),new l({ctx:a,width:.38*i,distance:12.6*i,speed:.0037*e,rgb:g("rgb(84,149,164)"),origin:r}),new l({ctx:a,width:.31*i,distance:13.6*i,speed:.0033*e,rgb:g("rgb(36,82,154)"),origin:r})]},D=40,R=115;class V extends S{constructor({ctx:t,frequence:s}){super({ctx:t}),this.speed=R,this.x=0,this.y=0,this.opacity=0,this.draw=()=>{if(this.move(),!this.showConfig)return;this.ctx.save(),this.ctx.ellipse(this.x,this.y,this.showConfig.width,90,this.showConfig.direction+Math.PI/2,0,2*Math.PI),this.ctx.globalAlpha=this.opacity;const t=this.ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,90);t.addColorStop(0,c(this.showConfig.rgb,1)),t.addColorStop(1,c(this.showConfig.rgb,0)),this.ctx.fillStyle=t,this.ctx.fill(),this.ctx.restore()},this.ctx=t,this.frequence=s}move(){if(this.showConfig){this.x+=this.speed*Math.cos(this.showConfig.direction),this.y+=this.speed*Math.sin(this.showConfig.direction);const{x:t,y:s}=this.showConfig.startCoords,i=Math.sqrt(Math.pow(this.x-t,2)+Math.pow(this.y-s,2)),e=i/this.showConfig.distanceToTarget;return this.opacity=Math.max(.7,Math.min(e<.3?e:1-e,1)),void(i>this.showConfig.distanceToTarget&&(this.showConfig=void 0))}if(Math.random()>1-this.frequence/100/D){const t=o.between(0,2*Math.PI),s=Math.max(this.getCanvasHeight(),this.getCanvasWidth());this.showConfig={startCoords:{x:o.around(Math.cos(t)*s/3,.5,"%")+this.getCanvasWidth()/2,y:o.around(Math.sin(t)*s/3,.5,"%")+this.getCanvasHeight()/2},direction:o.between(t+Math.PI-Math.PI/6,t+Math.PI+Math.PI/6),distanceToTarget:o.around(.6*s,.3),speed:o.around(R,.15,"%"),rgb:g("rgb(255,207,207)"),width:o.between(.2,.8),startOpacity:0},this.x=this.showConfig.startCoords.x,this.y=this.showConfig.startCoords.y}}}const Y=({ctx:t,frequence:s})=>new Array(1).fill(0).flatMap((()=>[new V({ctx:t,frequence:s})])),E=.025,_=3,F=["rgb(6,2,122)","rgb(6,66,18)","#57046e"];class U extends S{constructor({ctx:t,intensity:s}){super({ctx:t}),this.draw=()=>{const t=this.ctx.getImageData(0,0,this.getCanvasWidth(),this.getCanvasHeight()),s=this.getCanvasWidth(),i=Array.from(t.data);for(let t=0;t<i.length;t+=4){const e=t/4,n=e%s,a=Math.floor(e/s);this.colorations.forEach((s=>{const e=k(s,n,a)*this.intensity;if(e>0)for(let n=0;n<3;n++)i[t+n]=e*s.rgb[n]+i[n+t]*(1-e)}));for(let s=0;s<3;s++){const e=i[t+s];e>0&&(i[t+s]=Math.round(e-1+Math.random()))}}t.data.set(i),this.ctx.putImageData(t,0,0)},this.intensity=s*E;const i=X(3*F.length);this.colorations=F.flatMap((t=>new Array(3).fill(0).map((()=>{const s=i.pop();return{coords:{x:s.x*this.getCanvasWidth(),y:s.y*this.getCanvasHeight()},rgb:g(t),ratio:o.around(Math.PI/4,.2),width:o.between(5,8)*this.canvasMinSide*.08}}))))}setIntensity(t){this.intensity=t*E}}const X=t=>{const s=2*Math.PI*Math.random(),i=new Array(t).fill(0).map(((i,e)=>{const n=s+o.around(e*Math.PI*2/t,.32),a=o.between(.8,1.1);return{x:(Math.cos(n)*a+1)/2,y:(Math.sin(n)*a+1)/2}}));return o.randomizeArray(i)},k=(t,s,i)=>{const e=s-t.coords.x,n=i-t.coords.y,a=Math.sqrt(Math.pow(e*Math.cos(t.ratio),2)+Math.pow(n*Math.sin(t.ratio),2)),r=(t.width-a)/t.width;return Math.max(r,0)},J=({ctx:t,coloration:s,intensity:i})=>s?(s.setIntensity(i),s):new U({ctx:t,intensity:i}),N="width: 100%;height: 100%;position:absolute;will-change:transform;top: 0;left:0;";class K{constructor({config:t,element:s}){this.cancelAnimations=[],this.stars=[],this.comets=[],this.planets=[],this.onResize=()=>{this.styleCanvas(),this.init()},this.styleCanvas=()=>{this.bgCanvas.setAttribute("style",N),this.bgCanvas.width=this.element.offsetWidth/3,this.bgCanvas.height=this.element.offsetHeight/3,this.canvas.setAttribute("style",N),this.canvas.width=2*this.element.offsetWidth,this.canvas.height=2*this.element.offsetHeight},this.element=s,this.bgCanvas=document.createElement("CANVAS"),this.canvas=document.createElement("CANVAS"),s.append(this.bgCanvas),s.append(this.canvas),this.styleCanvas(),window.addEventListener("resize",this.onResize),this.config=P(t),this.setConfig(t)}setConfig(t){this.config=P(t),this.coloration=J({coloration:this.coloration,ctx:this.bgCanvas.getContext("2d"),intensity:this.config.nebulasIntensity}),this.stars=z({stars:this.stars,ctx:this.canvas.getContext("2d"),color:this.config.starsColor,count:this.config.starsCount,rotationSpeed:this.config.starsRotationSpeed}),this.planets=B({planets:this.planets,sunScale:this.config.sunScale,scale:this.config.planetsScale,ctx:this.canvas.getContext("2d"),rotationSpeed:this.config.solarSystemSpeedOrbit,distance:this.config.solarSystemOrbite}),this.comets=Y({ctx:this.canvas.getContext("2d"),frequence:this.config.cometFrequence}),this.init()}init(){this.draw()}draw(){this.cancelAnimations.forEach((t=>t())),this.cancelAnimations=[O({canvas:this.bgCanvas,drawings:[this.coloration],bgColor:this.config.bgColor}),O({canvas:this.canvas,drawings:[...this.stars,...this.comets,...this.planets],fps:D})]}destroy(){var t,s;window.removeEventListener("resize",this.onResize),this.cancelAnimations.forEach((t=>t())),this.cancelAnimations=[],null==(t=this.bgCanvas.parentElement)||t.removeChild(this.bgCanvas),null==(s=this.canvas.parentElement)||s.removeChild(this.canvas)}}const Q=({config:t={}})=>{const s=b.useRef(),i=b.useRef(null);return b.useLayoutEffect((()=>{var i;s.current&&(null==(i=s.current)||i.setConfig(t))}),[t]),b.useLayoutEffect((()=>(s.current||(s.current=new K({config:t,element:i.current})),()=>{var t;null==(t=s.current)||t.destroy(),s.current=void 0})),[]),j.createElement("div",{ref:i,style:{overflow:"hidden",background:"#0a1929",height:"100%",width:"100%",position:"absolute"}})};function st(){return p.jsx(p.Fragment,{children:p.jsx("div",{className:"opacity-100",children:p.jsx(Q,{config:{starsCount:600,starsColor:"#FFFFFF",starsRotationSpeed:2,cometFrequence:100,nebulasIntensity:30,bgColor:"rgb(42,112,25)",sunScale:0,planetsScale:0,solarSystemOrbite:70,solarSystemSpeedOrbit:100}})})})}export{st as default};