import{d as createAstro,c as createComponent,r as renderTemplate,a as renderComponent,u as unescapeHTML,m as maybeRenderHead,b as addAttribute}from"./UJWqr72G.js";import"kleur/colors";import"clsx";import{parseHTML}from"linkedom";import"./l0sNRNKZ.js";const $$Astro$3=createAstro("https://tinhmenhdo.github.io"),$$Tweet=createComponent((async(e,t,r)=>{const a=e.createAstro($$Astro$3,t,r);a.self=$$Tweet;const{id:o,theme:s="light"}=a.props;const i=await async function(e,t="light"){try{const r=new URL("https://publish.twitter.com/oembed");return r.searchParams.set("url",e),r.searchParams.set("omit_script","true"),r.searchParams.set("dnt","true"),r.searchParams.set("theme",t),await fetch(r).then((e=>e.json()))}catch(t){console.error(`[error]  astro-embed\n         ${t.status} - ${t.statusText}: Failed to fetch tweet ${e}`)}}(o,s);return renderTemplate`${i&&renderTemplate`${renderComponent(e,"astro-embed-tweet","astro-embed-tweet",{},{default:()=>renderTemplate`${unescapeHTML(i.html)}`})}`}`}),"/root/code/tmd_astro/node_modules/@astro-community/astro-embed-twitter/Tweet.astro",void 0),urlPattern$1=/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;function matcher$1(e){const t=e.match(urlPattern$1);return t?.[3]}const $$Astro$2=createAstro("https://tinhmenhdo.github.io"),$$YouTube=createComponent(((e,t,r)=>{const a=e.createAstro($$Astro$2,t,r);a.self=$$YouTube;const{id:o,poster:s,posterQuality:i="default",title:n,...d}=a.props;const l=/^[A-Za-z0-9-_]+$/.test(c=o)?c:matcher$1(c);var c;const m=s||`https://i.ytimg.com/vi/${l}/${{max:"maxresdefault",high:"sddefault",default:"hqdefault",low:"default"}[i]||"hqdefault"}.jpg`,u=`https://youtube.com/watch?v=${l}`;return renderTemplate`${renderComponent(e,"lite-youtube","lite-youtube",{videoid:l,title:n,"data-title":n,...d,style:`background-image: url('${m}');`},{default:()=>renderTemplate` ${maybeRenderHead()}<a${addAttribute(u,"href")} class="lty-playbtn"> <span class="lyt-visually-hidden">${d.playlabel}</span> </a> `})}  `}),"/root/code/tmd_astro/node_modules/@astro-community/astro-embed-youtube/YouTube.astro",void 0);class LRU extends Map{constructor(e){super(),this.maxSize=e}get(e){const t=super.get(e);return t&&this.#e(e,t),t}set(e,t){return this.#e(e,t),this.size>this.maxSize&&this.delete(this.keys().next().value),this}#e(e,t){this.delete(e),super.set(e,t)}}const formatError=(...e)=>e.join("\n         "),safeGet=makeSafeGetter((e=>e.json())),safeGetDOM=makeSafeGetter((async e=>parseHTML(await e.text()).document));function makeSafeGetter(e,{cacheSize:t=1e3}={}){const r=new LRU(t);return async function(t){try{const a=r.get(t);if(a)return a;const o=await fetch(t);if(!o.ok)throw new Error(formatError(`Failed to fetch ${t}`,`Error ${o.status}: ${o.statusText}`));const s=await e(o);return r.set(t,s),s}catch(e){return void console.error(formatError("[error]  astro-embed",e?.message??e))}}}const urlPattern=/(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;function matcher(e){const t=e.match(urlPattern);return t?.[3]}const $$Astro$1=createAstro("https://tinhmenhdo.github.io"),$$Vimeo=createComponent((async(e,t,r)=>{const a=e.createAstro($$Astro$1,t,r);a.self=$$Vimeo;const{id:o,poster:s,posterQuality:i="default",params:n="",playlabel:d="Play",style:l,...c}=a.props;const m=/^\d+$/.test(u=o)?u:matcher(u);var u;let p=s;if(!p){const e=await safeGet(`https://vimeo.com/api/v2/video/${m}.json`);if(e){const t={max:1280,high:640,default:480,low:120}[i]||480,{thumbnail_large:r}=e?.[0]||{};p=r.endsWith("d_640")?r.slice(0,-3)+t:r}}let[h,$]=n.split("#t=");const y=new URLSearchParams(h);$||($=y.get("t")),y.append("autoplay","1"),y.has("dnt")||y.append("dnt","1");const b=y.get("color"),f=[];return l&&f.push(l),b&&f.push(`--ltv-color: #${b}`),p&&f.push(`background-image: url('${p}')`),renderTemplate`${renderComponent(e,"lite-vimeo","lite-vimeo",{"data-id":m,"data-t":$,"data-params":y.toString(),style:f.join(";"),...c},{default:()=>renderTemplate` ${maybeRenderHead()}<a class="ltv-playbtn"${addAttribute(`https://vimeo.com/${m}`,"href")}${addAttribute(d,"aria-label")}></a> `})} `}),"/root/code/tmd_astro/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro",void 0),getContent=e=>e?.getAttribute("content"),urlOrNull=e=>"https://"===e?.slice(0,8)?e:null;async function parseOpenGraph(e){const t=await safeGetDOM(e);if(!t)return;const r=e=>getContent(t.querySelector(`meta[property=${JSON.stringify(e)}]`)),a=r("og:title")||t.querySelector("title")?.textContent,o=r("og:description")||(s="description",getContent(t.querySelector(`meta[name=${JSON.stringify(s)}]`)));var s;const i=urlOrNull(r("og:image:secure_url")||r("og:image:url")||r("og:image")),n=r("og:image:alt"),d=urlOrNull(r("og:video:secure_url")||r("og:video:url")||r("og:video")),l=r("og:video:type");return{title:a,description:o,image:i,imageAlt:n,url:urlOrNull(r("og:url")||t.querySelector("link[rel='canonical']")?.getAttribute("href"))||e,video:d,videoType:l}}const $$Astro=createAstro("https://tinhmenhdo.github.io"),$$LinkPreview=createComponent((async(e,t,r)=>{const a=e.createAstro($$Astro,t,r);a.self=$$LinkPreview;const{id:o,hideMedia:s=!1}=a.props,i=await parseOpenGraph(o),n=i?.url?new URL(i.url).hostname.replace("www.",""):"";return renderTemplate`${i&&i.title?renderTemplate`${maybeRenderHead()}<article${addAttribute(["link-preview",{"link-preview--has-video":!s&&i.video&&i.videoType,"link-preview--no-media":s||!(i.video&&i.videoType||i.image)}],"class:list")} data-astro-cid-ztfdmrby><div class="link-preview__content" data-astro-cid-ztfdmrby><header data-astro-cid-ztfdmrby><a class="link-preview__title"${addAttribute(o,"href")} data-astro-cid-ztfdmrby>${i.title}</a>${" "}${n&&renderTemplate`<small class="link-preview__domain" data-astro-cid-ztfdmrby>${n}</small>`}</header><small class="link-preview__description" data-astro-cid-ztfdmrby>${i.description}</small></div>${s?null:i.video&&i.videoType?renderTemplate`<video controls preload="metadata" width="1200" height="630" data-astro-cid-ztfdmrby><source${addAttribute(i.video,"src")}${addAttribute(i.videoType,"type")} data-astro-cid-ztfdmrby></video>`:i.image?renderTemplate`<img${addAttribute(i.image,"src")}${addAttribute(i.imageAlt||"","alt")} width="1200" height="630" data-astro-cid-ztfdmrby>`:null}</article>`:renderTemplate`<div class="link-preview link-preview--no-metadata" data-astro-cid-ztfdmrby><a${addAttribute(o,"href")} data-astro-cid-ztfdmrby>${o}</a></div>`}`}),"/root/code/tmd_astro/node_modules/@astro-community/astro-embed-link-preview/LinkPreview.astro",void 0);export{$$YouTube as $};