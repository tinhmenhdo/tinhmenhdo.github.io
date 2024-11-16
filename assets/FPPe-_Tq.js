import{Traverse}from"neotraverse/modern";import pLimit from"p-limit";import{r as removeBase,i as isRemotePath,V as VALID_INPUT_FORMATS,A as AstroError,U as UnknownContentCollectionError,p as prependForwardSlash}from"./DEWHgkAV.js";import{c as createComponent,f as renderUniqueStylesheet,g as renderScriptElement,h as createHeadAndContent,r as renderTemplate,a as renderComponent,u as unescapeHTML}from"./UJWqr72G.js";import"kleur/colors";import*as devalue from"devalue";import{A as APP_BLOG,B as BLOG_BASE,T as TAG_BASE,d as cleanSlug,P as POST_PERMALINK_PATTERN,t as trimSlash}from"./CQJbOprE.js";const CONTENT_IMAGE_FLAG="astroContentImageFlag",IMAGE_IMPORT_PREFIX="__ASTRO_IMAGE_";function imageSrcToImportId(t,e){if(t=removeBase(t,IMAGE_IMPORT_PREFIX),isRemotePath(t))return;const o=t.split(".").at(-1);if(!o||!VALID_INPUT_FORMATS.includes(o))return;const n=new URLSearchParams(CONTENT_IMAGE_FLAG);return e&&n.set("importer",e),`${t}?${n.toString()}`}class DataStore{_collections=new Map;constructor(){this._collections=new Map}get(t,e){return this._collections.get(t)?.get(String(e))}entries(t){return[...(this._collections.get(t)??new Map).entries()]}values(t){return[...(this._collections.get(t)??new Map).values()]}keys(t){return[...(this._collections.get(t)??new Map).keys()]}has(t,e){const o=this._collections.get(t);return!!o&&o.has(String(e))}hasCollection(t){return this._collections.has(t)}collections(){return this._collections}static async fromModule(){try{const t=await import("./BcEe_9wP.js");if(t.default instanceof Map)return DataStore.fromMap(t.default);const e=devalue.unflatten(t.default);return DataStore.fromMap(e)}catch{}return new DataStore}static async fromMap(t){const e=new DataStore;return e._collections=t,e}}function dataStoreSingleton(){let t;return{get:async()=>(t||(t=DataStore.fromModule()),t),set:e=>{t=e}}}const globalDataStore=dataStoreSingleton(),__vite_import_meta_env__={ASSETS_PREFIX:void 0,BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SITE:"https://tinhmenhdo.github.io",SSR:!0};function createCollectionToGlobResultMap({globResult:t,contentDir:e}){const o={};for(const n in t){const a=n.replace(new RegExp(`^${e}`),"").split("/");if(a.length<=1)continue;const r=a[0];o[r]??={},o[r][n]=t[n]}return o}function createGetCollection({contentCollectionToEntryMap:t,dataCollectionToEntryMap:e,getRenderEntryImport:o,cacheEntriesByCollection:n}){return async function(a,r){const s="function"==typeof r,i=await globalDataStore.get();let c;if(a in t)c="content";else{if(!(a in e)){if(i.hasCollection(a)){const{default:t}=await import("./D9aVaOQr.js"),e=[];for(const o of i.values(a)){const n=updateImageReferencesInData(o.data,o.filePath,t),i={...o,data:n,collection:a};s&&!r(i)||e.push(i)}return e}return console.warn(`The collection ${JSON.stringify(a)} does not exist or is empty. Ensure a collection directory with this name exists.`),[]}c="data"}const l=Object.values("content"===c?t[a]:e[a]);let p=[];if(!Object.assign(__vite_import_meta_env__,{_:process.env._})?.DEV&&n.has(a))p=n.get(a);else{const t=pLimit(10);p=await Promise.all(l.map((e=>t((async()=>{const t=await e();return"content"===c?{id:t.id,slug:t.slug,body:t.body,collection:t.collection,data:t.data,render:async()=>render({collection:t.collection,id:t.id,renderEntryImport:await o(a,t.slug)})}:{id:t.id,collection:t.collection,data:t.data}}))))),n.set(a,p)}return s?p.filter(r):p.slice()}}function updateImageReferencesInData(t,e,o){return new Traverse(t).map((function(t,n){if("string"==typeof n&&n.startsWith(IMAGE_IMPORT_PREFIX)){const a=n.replace(IMAGE_IMPORT_PREFIX,""),r=imageSrcToImportId(a,e);if(!r)return void t.update(a);const s=o?.get(r);s?t.update(s):t.update(a)}}))}async function render({collection:t,id:e,renderEntryImport:o}){const n=new AstroError({...UnknownContentCollectionError,message:`Unexpected error while rendering ${String(t)} → ${String(e)}.`});if("function"!=typeof o)throw n;const a=await o();if(null==a||"object"!=typeof a)throw n;const{default:r}=a;if(isPropagatedAssetsModule(r)){const{collectedStyles:t,collectedLinks:o,collectedScripts:a,getMod:s}=r;if("function"!=typeof s)throw n;const i=await s();if(null==i||"object"!=typeof i)throw n;return{Content:createComponent({factory(n,r,s){let c="",l="",p="";Array.isArray(t)&&(c=t.map((t=>renderUniqueStylesheet(n,{type:"inline",content:t}))).join("")),Array.isArray(o)&&(l=o.map((t=>renderUniqueStylesheet(n,{type:"external",src:prependForwardSlash(t)}))).join("")),Array.isArray(a)&&(p=a.map((t=>renderScriptElement(t))).join(""));let u=r;return e.endsWith("mdx")&&(u={components:i.components??{},...r}),createHeadAndContent(unescapeHTML(c+l+p),renderTemplate`${renderComponent(n,"Content",i.Content,u,s)}`)},propagation:"self"}),headings:i.getHeadings?.()??[],remarkPluginFrontmatter:i.frontmatter??{}}}if(a.Content&&"function"==typeof a.Content)return{Content:a.Content,headings:a.getHeadings?.()??[],remarkPluginFrontmatter:a.frontmatter??{}};throw n}function isPropagatedAssetsModule(t){return"object"==typeof t&&null!=t&&"__astroPropagation"in t}const contentDir="/src/content/",contentEntryGlob=Object.assign({"/src/content/post/gioi-thieu-ve-tu-vi.mdx":()=>import("./jZDajaNs.js"),"/src/content/post/how-to-customize-astrowind-to-your-brand.md":()=>import("./CvznAbvq.js"),"/src/content/post/huyen-hoc-tu-vi-va-phong-thuy-tong-quan.md":()=>import("./BuJP8L7X.js"),"/src/content/post/landing.md":()=>import("./ik1SJjbw.js"),"/src/content/post/markdown-elements-demo-post.mdx":()=>import("./xBaqs5HP.js"),"/src/content/post/useful-resources-to-create-websites.md":()=>import("./Ck4ma3GU.js")}),contentCollectionToEntryMap=createCollectionToGlobResultMap({globResult:contentEntryGlob,contentDir:contentDir}),dataEntryGlob=Object.assign({}),dataCollectionToEntryMap=createCollectionToGlobResultMap({globResult:dataEntryGlob,contentDir:contentDir});createCollectionToGlobResultMap({globResult:{...contentEntryGlob,...dataEntryGlob},contentDir:contentDir});let lookupMap={};function createGlobLookup(t){return async(e,o)=>{const n=lookupMap[e]?.entries[o];if(n)return t[e][n]}}lookupMap={post:{type:"content",entries:{"gioi-thieu-ve-tu-vi":"/src/content/post/gioi-thieu-ve-tu-vi.mdx","how-to-customize-astrowind-to-your-brand":"/src/content/post/how-to-customize-astrowind-to-your-brand.md","huyen-hoc-tu-vi-va-phong-thuy-tong-quan":"/src/content/post/huyen-hoc-tu-vi-va-phong-thuy-tong-quan.md",landing:"/src/content/post/landing.md","markdown-elements-demo-post":"/src/content/post/markdown-elements-demo-post.mdx","useful-resources-to-create-websites":"/src/content/post/useful-resources-to-create-websites.md"}}},new Set(Object.keys(lookupMap));const renderEntryGlob=Object.assign({"/src/content/post/gioi-thieu-ve-tu-vi.mdx":()=>import("./CkaaMPiX.js"),"/src/content/post/how-to-customize-astrowind-to-your-brand.md":()=>import("./DSb9MURa.js"),"/src/content/post/huyen-hoc-tu-vi-va-phong-thuy-tong-quan.md":()=>import("./BJ_Hsam0.js"),"/src/content/post/landing.md":()=>import("./BAtwoawQ.js"),"/src/content/post/markdown-elements-demo-post.mdx":()=>import("./CHthaONW.js"),"/src/content/post/useful-resources-to-create-websites.md":()=>import("./B3pi27J1.js")}),collectionToRenderEntryMap=createCollectionToGlobResultMap({globResult:renderEntryGlob,contentDir:contentDir}),cacheEntriesByCollection=new Map,getCollection=createGetCollection({contentCollectionToEntryMap:contentCollectionToEntryMap,dataCollectionToEntryMap:dataCollectionToEntryMap,getRenderEntryImport:createGlobLookup(collectionToRenderEntryMap),cacheEntriesByCollection:cacheEntriesByCollection}),generatePermalink=async({id:t,slug:e,publishDate:o,category:n})=>{const a=String(o.getFullYear()).padStart(4,"0"),r=String(o.getMonth()+1).padStart(2,"0"),s=String(o.getDate()).padStart(2,"0"),i=String(o.getHours()).padStart(2,"0"),c=String(o.getMinutes()).padStart(2,"0"),l=String(o.getSeconds()).padStart(2,"0");return POST_PERMALINK_PATTERN.replace("%slug%",e).replace("%id%",t).replace("%category%",n||"").replace("%year%",a).replace("%month%",r).replace("%day%",s).replace("%hour%",i).replace("%minute%",c).replace("%second%",l).split("/").map((t=>trimSlash(t))).filter((t=>!!t)).join("/")},getNormalizedPost=async t=>{const{id:e,slug:o="",data:n}=t,{Content:a,remarkPluginFrontmatter:r}=await t.render(),{publishDate:s=new Date,updateDate:i,title:c,excerpt:l,image:p,tags:u=[],category:g,author:d,draft:m=!1,metadata:y={}}=n,h=cleanSlug(o),f=new Date(s),P=i?new Date(i):void 0,b=g?{slug:cleanSlug(g),title:g}:void 0,S=u.map((t=>({slug:cleanSlug(t),title:t})));return{id:e,slug:h,permalink:await generatePermalink({id:e,slug:h,publishDate:f,category:b?.slug}),publishDate:f,updateDate:P,title:c,excerpt:l,image:p,category:b,tags:S,author:d,draft:m,metadata:y,Content:a,readingTime:r?.readingTime}},load=async function(){const t=(await getCollection("post")).map((async t=>await getNormalizedPost(t)));return(await Promise.all(t)).sort(((t,e)=>e.publishDate.valueOf()-t.publishDate.valueOf())).filter((t=>!t.draft))};let _posts;const blogListRobots=APP_BLOG.list.robots,blogPostRobots=APP_BLOG.post.robots,blogCategoryRobots=APP_BLOG.category.robots,blogTagRobots=APP_BLOG.tag.robots,blogPostsPerPage=APP_BLOG?.postsPerPage,fetchPosts=async()=>(_posts||(_posts=await load()),_posts),findPostsByIds=async t=>{if(!Array.isArray(t))return[];const e=await fetchPosts();return t.reduce((function(t,o){return e.some((function(e){return o===e.id&&t.push(e)})),t}),[])},findLatestPosts=async({count:t})=>{const e=t||4,o=await fetchPosts();return o?o.slice(0,e):[]},getStaticPathsBlogList=async({paginate:t})=>t(await fetchPosts(),{params:{blog:BLOG_BASE||void 0},pageSize:blogPostsPerPage}),getStaticPathsBlogPost=async()=>(await fetchPosts()).flatMap((t=>({params:{blog:t.permalink},props:{post:t}}))),getStaticPathsBlogCategory=async({paginate:t})=>[],getStaticPathsBlogTag=async({paginate:t})=>{const e=await fetchPosts(),o={};return e.map((t=>{Array.isArray(t.tags)&&t.tags.map((t=>{o[t?.slug]=t}))})),Array.from(Object.keys(o)).flatMap((n=>t(e.filter((t=>Array.isArray(t.tags)&&t.tags.find((t=>t.slug===n)))),{params:{tag:n,blog:TAG_BASE||void 0},pageSize:blogPostsPerPage,props:{tag:o[n]}})))};async function getRelatedPosts(t,e=4){const o=await fetchPosts(),n=new Set(t.tags?t.tags.map((t=>t.slug)):[]),a=o.reduce(((e,o)=>{if(o.slug===t.slug)return e;let a=0;return o.category&&t.category&&o.category.slug===t.category.slug&&(a+=5),o.tags&&o.tags.forEach((t=>{n.has(t.slug)&&(a+=1)})),e.push({post:o,score:a}),e}),[]);a.sort(((t,e)=>e.score-t.score));const r=[];let s=0;for(;r.length<e&&s<a.length;)r.push(a[s].post),s++;return r}export{fetchPosts as a,blogCategoryRobots as b,blogTagRobots as c,getStaticPathsBlogTag as d,getStaticPathsBlogList as e,findLatestPosts as f,getStaticPathsBlogCategory as g,blogListRobots as h,findPostsByIds as i,getRelatedPosts as j,blogPostRobots as k,getStaticPathsBlogPost as l};