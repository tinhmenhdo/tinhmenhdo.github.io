import 'cookie';
import 'kleur/colors';
import './sfYYkhPc/BTASe_bZ.js';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './sfYYkhPc/4CUkstck.js';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (ctx, next) => {
  ctx.request.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return next();
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///root/code/tmd_astro/","adapterName":"","routes":[{"file":"file:///root/code/tmd_astro/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///root/code/tmd_astro/dist/api/crawl","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/crawl","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/crawl$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"crawl","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/crawl.ts","pathname":"/api/crawl","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///root/code/tmd_astro/dist/crawl/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/crawl","isIndex":false,"type":"page","pattern":"^\\/crawl$","segments":[[{"content":"crawl","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/crawl.astro","pathname":"/crawl","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///root/code/tmd_astro/dist/draw/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/draw","isIndex":false,"type":"page","pattern":"^\\/draw$","segments":[[{"content":"draw","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/draw.astro","pathname":"/draw","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///root/code/tmd_astro/dist/privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.md","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///root/code/tmd_astro/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///root/code/tmd_astro/dist/terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.md","pathname":"/terms","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///root/code/tmd_astro/dist/tu-vi/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tu-vi","isIndex":true,"type":"page","pattern":"^\\/tu-vi$","segments":[[{"content":"tu-vi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tu-vi/index.astro","pathname":"/tu-vi","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///root/code/tmd_astro/dist/y-nghia-64-que-kinh-dich/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/y-nghia-64-que-kinh-dich","isIndex":true,"type":"page","pattern":"^\\/y-nghia-64-que-kinh-dich$","segments":[[{"content":"y-nghia-64-que-kinh-dich","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/y-nghia-64-que-kinh-dich/index.astro","pathname":"/y-nghia-64-que-kinh-dich","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///root/code/tmd_astro/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://tinhmenhdo.github.io","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/root/code/tmd_astro/src/utils/blog.ts",{"propagation":"in-tree","containsHead":false}],["/root/code/tmd_astro/src/components/blog/RelatedPosts.astro",{"propagation":"in-tree","containsHead":false}],["/root/code/tmd_astro/src/pages/[...blog]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/root/code/tmd_astro/src/components/widgets/BlogHighlightedPosts.astro",{"propagation":"in-tree","containsHead":false}],["/root/code/tmd_astro/src/pages/[...blog]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/root/code/tmd_astro/src/pages/[...blog]/[category]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/root/code/tmd_astro/src/pages/[...blog]/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/root/code/tmd_astro/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/root/code/tmd_astro/src/pages/privacy.md",{"propagation":"none","containsHead":true}],["/root/code/tmd_astro/src/pages/terms.md",{"propagation":"none","containsHead":true}],["/root/code/tmd_astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/root/code/tmd_astro/src/pages/crawl.astro",{"propagation":"none","containsHead":true}],["/root/code/tmd_astro/src/pages/draw.astro",{"propagation":"none","containsHead":true}],["/root/code/tmd_astro/src/pages/tu-vi/[...slug].astro",{"propagation":"none","containsHead":true}],["/root/code/tmd_astro/src/pages/tu-vi/index.astro",{"propagation":"none","containsHead":true}],["/root/code/tmd_astro/src/pages/y-nghia-64-que-kinh-dich/index.astro",{"propagation":"none","containsHead":true}],["/root/code/tmd_astro/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/crawl@_@ts":"pages/api/crawl.astro.mjs","\u0000@astro-page:src/pages/crawl@_@astro":"pages/crawl.astro.mjs","\u0000@astro-page:src/pages/draw@_@astro":"pages/draw.astro.mjs","\u0000@astro-page:src/pages/privacy@_@md":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/terms@_@md":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/tu-vi/index@_@astro":"pages/tu-vi.astro.mjs","\u0000@astro-page:src/pages/tu-vi/[...slug]@_@astro":"pages/tu-vi/_---slug_.astro.mjs","\u0000@astro-page:src/pages/y-nghia-64-que-kinh-dich/index@_@astro":"pages/y-nghia-64-que-kinh-dich.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[category]/[...page]@_@astro":"pages/_---blog_/_category_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[tag]/[...page]@_@astro":"pages/_---blog_/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/[...blog]/[...page]@_@astro":"pages/_---blog_/_---page_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...blog]/index@_@astro":"pages/_---blog_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DzKBDGBT.mjs","/root/code/tmd_astro/node_modules/@astrojs/react/vnode-children.js":"sfYYkhPc/BkR_XoPb.js","/root/code/tmd_astro/src/assets/images/144x114.png":"sfYYkhPc/DosHl615.js","/root/code/tmd_astro/src/assets/images/192x192.png":"sfYYkhPc/Dw03Je_3.js","/root/code/tmd_astro/src/assets/images/196x196.png":"sfYYkhPc/BfbrzL39.js","/root/code/tmd_astro/src/assets/images/72x72.png":"sfYYkhPc/Bwb96ExD.js","/root/code/tmd_astro/src/assets/images/YinYang.webp":"sfYYkhPc/2YIjyJG-.js","/root/code/tmd_astro/src/assets/images/am-duong.png":"sfYYkhPc/BaVfedwi.js","/root/code/tmd_astro/src/assets/images/app-store.png":"sfYYkhPc/BfCfNJBm.js","/root/code/tmd_astro/src/assets/images/architecture.png":"sfYYkhPc/r9PazFCl.js","/root/code/tmd_astro/src/assets/images/arrows.png":"sfYYkhPc/-LwSCVgE.js","/root/code/tmd_astro/src/assets/images/bg.jpg":"sfYYkhPc/b0Q9F_Uk.js","/root/code/tmd_astro/src/assets/images/birthday-cake.png":"sfYYkhPc/C9Orsqnb.js","/root/code/tmd_astro/src/assets/images/brain.png":"sfYYkhPc/KtYBVyLQ.js","/root/code/tmd_astro/src/assets/images/calendar.png":"sfYYkhPc/C9ceKELD.js","/root/code/tmd_astro/src/assets/images/curve-arrow.png":"sfYYkhPc/BeerMSC5.js","/root/code/tmd_astro/src/assets/images/default.png":"sfYYkhPc/cpKXFa_I.js","/root/code/tmd_astro/src/assets/images/diaban.png":"sfYYkhPc/DY6xNjS9.js","/root/code/tmd_astro/src/assets/images/earth.png":"sfYYkhPc/Dl5tuset.js","/root/code/tmd_astro/src/assets/images/fav.png":"sfYYkhPc/DmhSjPoX.js","/root/code/tmd_astro/src/assets/images/google-play.png":"sfYYkhPc/b8XmVS0B.js","/root/code/tmd_astro/src/assets/images/hero-image.png":"sfYYkhPc/D7INl3nb.js","/root/code/tmd_astro/src/assets/images/icon.png":"sfYYkhPc/CgdzHpnG.js","/root/code/tmd_astro/src/assets/images/logo.png":"sfYYkhPc/BHYf4VGi.js","/root/code/tmd_astro/src/assets/images/man.png":"sfYYkhPc/CC1C1fm3.js","/root/code/tmd_astro/src/assets/images/scale.png":"sfYYkhPc/DPlOd8nn.js","/root/code/tmd_astro/src/assets/images/star.png":"sfYYkhPc/CdigL1Y2.js","/root/code/tmd_astro/src/assets/images/universe.png":"sfYYkhPc/B5zjvh4P.js","/root/code/tmd_astro/src/assets/images/view.png":"sfYYkhPc/CMlm6tmQ.js","/root/code/tmd_astro/src/assets/images/woman.png":"sfYYkhPc/DYOLepYu.js","/root/code/tmd_astro/src/assets/images/yinyang.png":"sfYYkhPc/C0yLNfFD.js","/root/code/tmd_astro/src/assets/images/yinyang2.webp":"sfYYkhPc/Cixkujcv.js","/root/code/tmd_astro/src/content/post/gioi-thieu-ve-tu-vi.mdx?astroContentCollectionEntry=true":"sfYYkhPc/Bh5Qq1Ew.js","/root/code/tmd_astro/src/content/post/huyen-hoc-tu-vi-va-phong-thuy-tong-quan.md?astroContentCollectionEntry=true":"sfYYkhPc/BuJP8L7X.js","/root/code/tmd_astro/src/content/post/kinh-dich-cong-cu-tai-nguyen-hoc-va-ung-dung.md?astroContentCollectionEntry=true":"sfYYkhPc/CtHsBrFl.js","/root/code/tmd_astro/src/content/post/kinh-dich-tong-quan-va-ung-dung-trong-cuoc-song.md?astroContentCollectionEntry=true":"sfYYkhPc/D9H9VHWv.js","/root/code/tmd_astro/src/content/post/landing.md?astroContentCollectionEntry=true":"sfYYkhPc/ik1SJjbw.js","/root/code/tmd_astro/src/content/post/tu-vi-kinh-dich-tong-quan-va-cach-tinh-menh.mdx?astroContentCollectionEntry=true":"sfYYkhPc/BEc-EmLQ.js","/root/code/tmd_astro/src/content/post/gioi-thieu-ve-tu-vi.mdx?astroPropagatedAssets":"sfYYkhPc/CaMeH14R.js","/root/code/tmd_astro/src/content/post/huyen-hoc-tu-vi-va-phong-thuy-tong-quan.md?astroPropagatedAssets":"sfYYkhPc/DvY3I_bj.js","/root/code/tmd_astro/src/content/post/kinh-dich-cong-cu-tai-nguyen-hoc-va-ung-dung.md?astroPropagatedAssets":"sfYYkhPc/Bc7oN5VM.js","/root/code/tmd_astro/src/content/post/kinh-dich-tong-quan-va-ung-dung-trong-cuoc-song.md?astroPropagatedAssets":"sfYYkhPc/CHGGrddw.js","/root/code/tmd_astro/src/content/post/landing.md?astroPropagatedAssets":"sfYYkhPc/DULHzlky.js","/root/code/tmd_astro/src/content/post/tu-vi-kinh-dich-tong-quan-va-cach-tinh-menh.mdx?astroPropagatedAssets":"sfYYkhPc/w_8iLyJd.js","\u0000astro:asset-imports":"sfYYkhPc/D9aVaOQr.js","\u0000astro:data-layer-content":"sfYYkhPc/BcEe_9wP.js","/root/code/tmd_astro/src/content/post/gioi-thieu-ve-tu-vi.mdx":"sfYYkhPc/CMem9MH8.js","/root/code/tmd_astro/src/content/post/huyen-hoc-tu-vi-va-phong-thuy-tong-quan.md":"sfYYkhPc/CQkfY9Xn.js","/root/code/tmd_astro/src/content/post/kinh-dich-cong-cu-tai-nguyen-hoc-va-ung-dung.md":"sfYYkhPc/BgnD3xqp.js","/root/code/tmd_astro/src/content/post/kinh-dich-tong-quan-va-ung-dung-trong-cuoc-song.md":"sfYYkhPc/BhaG8t9Z.js","/root/code/tmd_astro/src/content/post/landing.md":"sfYYkhPc/h9FJJeyl.js","/root/code/tmd_astro/src/content/post/tu-vi-kinh-dich-tong-quan-va-cach-tinh-menh.mdx":"sfYYkhPc/Dsz9I69L.js","/astro/hoisted.js?q=0":"sfYYkhPc/Bj6vSF6I.js","/root/code/tmd_astro/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro?astro&type=script&index=0&lang.ts":"sfYYkhPc/CgRsrQuG.js","@astrojs/react/client.js":"sfYYkhPc/Cq2MwrZN.js","~/components/horo/home/CalendarHome":"sfYYkhPc/BNQkJfCJ.js","/root/code/tmd_astro/node_modules/@astro-community/astro-embed-youtube/YouTube.astro?astro&type=script&index=0&lang.ts":"sfYYkhPc/Dkyb9mLy.js","~/components/horo/effect/StarEffectClient":"sfYYkhPc/BJyxdbwB.js","~/components/horo/ReactApp":"sfYYkhPc/BZhwMn4Y.js","/astro/hoisted.js?q=2":"sfYYkhPc/BScVxmeO.js","/astro/hoisted.js?q=1":"sfYYkhPc/BcIB7y1W.js","/root/code/tmd_astro/src/components/horo/tuvi/HoroscopeClient.tsx":"sfYYkhPc/ssh4wl1_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///root/code/tmd_astro/dist/404.html","/file:///root/code/tmd_astro/dist/api/crawl","/file:///root/code/tmd_astro/dist/crawl/index.html","/file:///root/code/tmd_astro/dist/draw/index.html","/file:///root/code/tmd_astro/dist/privacy/index.html","/file:///root/code/tmd_astro/dist/rss.xml","/file:///root/code/tmd_astro/dist/terms/index.html","/file:///root/code/tmd_astro/dist/tu-vi/index.html","/file:///root/code/tmd_astro/dist/y-nghia-64-que-kinh-dich/index.html","/file:///root/code/tmd_astro/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"D6pR1ZvkhCltUVXhEfYyB3h5qdBOHIONvzA3vcIMudE=","experimentalEnvGetSecretEnabled":false});

export { manifest };
