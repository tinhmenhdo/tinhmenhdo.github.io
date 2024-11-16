import { c as createComponent, r as renderTemplate, b as addAttribute, i as defineScriptVars, d as createAstro, a as renderComponent, u as unescapeHTML, F as Fragment, s as spreadAttributes, j as defineStyleVars, e as renderSlot, k as renderHead } from './4CUkstck.js';
/* empty css         */
import { f as getAsset, U as UI, c as getCanonical, S as SITE, I as I18N, M as METADATA } from './B3zkKQ2I.js';
import 'kleur/colors';
import 'clsx';
import merge from 'lodash.merge';
import { escape } from 'html-escaper';
import { g as getImage } from './BCzj0W3d.js';

const $$CommonMeta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, viewport-fit=cover"><link rel="sitemap"${addAttribute(getAsset("/sitemap-index.xml"), "href")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;900&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Icons+Round&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet">`;
}, "/root/code/tmd_astro/src/components/common/CommonMeta.astro", void 0);

const favIcon = "/sfYYkhPc/PqkOVO35.ico";

const favIconSvg = new Proxy({"src":"/sfYYkhPc/u4bVfwPl.svg","width":289,"height":289,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/favicons/favicon.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/favicons/favicon.svg");
							return target[name];
						}
					});

const appleTouchIcon = new Proxy({"src":"/sfYYkhPc/CcqVVc0S.png","width":180,"height":180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/favicons/apple-touch-icon.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/favicons/apple-touch-icon.png");
							return target[name];
						}
					});

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="shortcut icon"${addAttribute(favIcon, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favIconSvg.src, "href")}><link rel="mask-icon"${addAttribute(favIconSvg.src, "href")} color="#8D46E7"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(appleTouchIcon.src, "href")}>`;
}, "/root/code/tmd_astro/src/components/Favicons.astro", void 0);

const $$CustomStyles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<style>
  :root {
    --aw-font-sans: 'Inter Variable';
    --aw-font-serif: 'Inter Variable';
    --aw-font-heading: 'Inter Variable';

    --aw-color-primary: rgb(1 97 239);
    --aw-color-secondary: rgb(1 84 207);
    --aw-color-accent: rgb(109 40 217);

    --aw-color-text-heading: rgb(0 0 0);
    --aw-color-text-default: rgb(16 16 16);
    --aw-color-text-muted: rgb(16 16 16 / 66%);
    --aw-color-bg-page: rgb(255 255 255);

    --aw-color-bg-page-dark: rgb(3 6 32);

    ::selection {
      background-color: lavender;
    }
  }

  .dark {
    --aw-font-sans: 'Inter Variable';
    --aw-font-serif: 'Inter Variable';
    --aw-font-heading: 'Inter Variable';

    --aw-color-primary: rgb(1 97 239);
    --aw-color-secondary: rgb(1 84 207);
    --aw-color-accent: rgb(109 40 217);

    --aw-color-text-heading: rgb(247, 248, 248);
    --aw-color-text-default: rgb(229 236 246);
    --aw-color-text-muted: rgb(229 236 246 / 66%);
    --aw-color-bg-page: rgb(3 6 32);

    ::selection {
      background-color: black;
      color: snow;
    }
  }
  .konvajs-content canvas {
    font-family: 'Roboto Slab', serif;
  }
</style>`;
}, "/root/code/tmd_astro/src/components/CustomStyles.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$ApplyColorMode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<script>(function(){", "\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n    const matches = document.querySelectorAll('[data-aw-toggle-color-scheme] > input');\n\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.checked = theme !== 'dark';\n      });\n    }\n  }\n\n  if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n    applyTheme(defaultTheme.replace(':only', ''));\n  } else if (\n    localStorage.theme === 'dark' ||\n    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n  ) {\n    applyTheme('dark');\n  } else {\n    applyTheme('light');\n  }\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "/root/code/tmd_astro/src/components/common/ApplyColorMode.astro", void 0);

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs}>`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs}>`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(
        createOpenGraphTag(`${mediaType}:height`, medium.height.toString())
      );
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      noarchive,
      unavailableAfter,
      noimageindex,
      notranslate
    } = config.robotsProps;
    if (nosnippet) robotsContent.push("nosnippet");
    if (typeof maxSnippet === "number") robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive) robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex) robotsContent.push("noimageindex");
    if (notranslate) robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(
      createLinkTag({
        rel: "alternate",
        media: config.mobileAlternate.media,
        href: config.mobileAlternate.href
      })
    );
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(
        createLinkTag({
          rel: "alternate",
          hreflang: languageAlternate.hreflang,
          href: languageAlternate.href
        })
      );
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(
          createOpenGraphTag(
            "profile:first_name",
            config.openGraph.profile.firstName
          )
        );
      }
      if (config.openGraph.profile.lastName) {
        addTag(
          createOpenGraphTag(
            "profile:last_name",
            config.openGraph.profile.lastName
          )
        );
      }
      if (config.openGraph.profile.username) {
        addTag(
          createOpenGraphTag(
            "profile:username",
            config.openGraph.profile.username
          )
        );
      }
      if (config.openGraph.profile.gender) {
        addTag(
          createOpenGraphTag("profile:gender", config.openGraph.profile.gender)
        );
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(
          createOpenGraphTag(
            "book:release_date",
            config.openGraph.book.releaseDate
          )
        );
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(
          createOpenGraphTag(
            "article:published_time",
            config.openGraph.article.publishedTime
          )
        );
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(
          createOpenGraphTag(
            "article:modified_time",
            config.openGraph.article.modifiedTime
          )
        );
      }
      if (config.openGraph.article.expirationTime) {
        addTag(
          createOpenGraphTag(
            "article:expiration_time",
            config.openGraph.article.expirationTime
          )
        );
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(
          createOpenGraphTag(
            "article:section",
            config.openGraph.article.section
          )
        );
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(
          createOpenGraphTag(
            "video:duration",
            config.openGraph.video.duration.toString()
          )
        );
      }
      if (config.openGraph.video.releaseDate) {
        addTag(
          createOpenGraphTag(
            "video:release_date",
            config.openGraph.video.releaseDate
          )
        );
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(
          createOpenGraphTag("video:series", config.openGraph.video.series)
        );
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(
      createMetaTag({ property: "fb:app_id", content: config.facebook.appId })
    );
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(
        createMetaTag({
          name: "twitter:card",
          content: config.twitter.cardType
        })
      );
    }
    if (config.twitter.site) {
      addTag(
        createMetaTag({ name: "twitter:site", content: config.twitter.site })
      );
    }
    if (config.twitter.handle) {
      addTag(
        createMetaTag({
          name: "twitter:creator",
          content: config.twitter.handle
        })
      );
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$4 = createAstro("https://tinhmenhdo.github.io");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "/root/code/tmd_astro/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

const load = async function() {
  let images = void 0;
  try {
    images = /* #__PURE__ */ Object.assign({"/src/assets/images/144x114.png": () => import('./DosHl615.js'),"/src/assets/images/192x192.png": () => import('./Dw03Je_3.js'),"/src/assets/images/196x196.png": () => import('./BfbrzL39.js'),"/src/assets/images/72x72.png": () => import('./Bwb96ExD.js'),"/src/assets/images/YinYang.webp": () => import('./2YIjyJG-.js'),"/src/assets/images/am-duong.png": () => import('./BaVfedwi.js'),"/src/assets/images/app-store.png": () => import('./BfCfNJBm.js'),"/src/assets/images/architecture.png": () => import('./r9PazFCl.js'),"/src/assets/images/arrows.png": () => import('./-LwSCVgE.js'),"/src/assets/images/bg.jpg": () => import('./b0Q9F_Uk.js'),"/src/assets/images/birthday-cake.png": () => import('./C9Orsqnb.js'),"/src/assets/images/brain.png": () => import('./KtYBVyLQ.js'),"/src/assets/images/calendar.png": () => import('./C9ceKELD.js'),"/src/assets/images/curve-arrow.png": () => import('./BeerMSC5.js'),"/src/assets/images/default.png": () => import('./cpKXFa_I.js'),"/src/assets/images/diaban.png": () => import('./DY6xNjS9.js'),"/src/assets/images/earth.png": () => import('./Dl5tuset.js'),"/src/assets/images/fav.png": () => import('./DmhSjPoX.js'),"/src/assets/images/google-play.png": () => import('./b8XmVS0B.js'),"/src/assets/images/hero-image.png": () => import('./D7INl3nb.js'),"/src/assets/images/icon.png": () => import('./CgdzHpnG.js'),"/src/assets/images/logo.png": () => import('./BHYf4VGi.js'),"/src/assets/images/man.png": () => import('./CC1C1fm3.js'),"/src/assets/images/pattern_optimize.jpg": () => Promise.resolve().then(() => pattern_optimize),"/src/assets/images/scale.png": () => import('./DPlOd8nn.js'),"/src/assets/images/star.png": () => import('./CdigL1Y2.js'),"/src/assets/images/universe.png": () => import('./B5zjvh4P.js'),"/src/assets/images/view.png": () => import('./CMlm6tmQ.js'),"/src/assets/images/woman.png": () => import('./DYOLepYu.js'),"/src/assets/images/yinyang.png": () => import('./C0yLNfFD.js'),"/src/assets/images/yinyang2.webp": () => import('./Cixkujcv.js')});
  } catch (error) {
  }
  return images;
};
let _images = void 0;
const fetchLocalImages = async () => {
  _images = _images || await load();
  return _images;
};
const findImage = async (imagePath) => {
  if (typeof imagePath !== "string") {
    return imagePath;
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }
  if (!imagePath.startsWith("~/assets/images")) {
    return imagePath;
  }
  const images = await fetchLocalImages();
  const key = imagePath.replace("~/", "/src/");
  return images && typeof images[key] === "function" ? (await images[key]())["default"] : null;
};
const adaptOpenGraphImages = async (openGraph = {}, astroSite = new URL("")) => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }
  const images = openGraph.images;
  const defaultWidth = 1200;
  const defaultHeight = 626;
  const adaptedImages = await Promise.all(
    images.map(async (image) => {
      if (image?.url) {
        const resolvedImage = await findImage(image.url);
        if (!resolvedImage) {
          return {
            url: ""
          };
        }
        const _image = await getImage({
          src: resolvedImage,
          alt: "Placeholder alt",
          width: image?.width || defaultWidth,
          height: image?.height || defaultHeight
        });
        if (typeof _image === "object") {
          return {
            url: "src" in _image && typeof _image.src === "string" ? _image.src : "pepe",
            // url: 'src' in _image && typeof _image.src === 'string' ? String(new URL(_image.src, astroSite)) : 'pepe',
            width: "width" in _image && typeof _image.width === "number" ? _image.width : void 0,
            height: "height" in _image && typeof _image.height === "number" ? _image.height : void 0
          };
        }
        return {
          url: ""
        };
      }
      return {
        url: ""
      };
    })
  );
  return { ...openGraph, ...adaptedImages ? { images: adaptedImages } : {} };
};

const $$Astro$3 = createAstro("https://tinhmenhdo.github.io");
const $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Metadata;
  const {
    title,
    ignoreTitleTemplate = false,
    canonical = String(getCanonical(String(Astro2.url.pathname))),
    robots = {},
    description,
    openGraph = {},
    twitter = {}
  } = Astro2.props;
  const seoProps = merge(
    {
      title: "",
      titleTemplate: "%s",
      canonical,
      noindex: true,
      nofollow: true,
      description: void 0,
      openGraph: {
        url: canonical,
        site_name: SITE?.name,
        images: [],
        locale: I18N?.language,
        type: "website"
      },
      twitter: {
        cardType: openGraph?.images?.length ? "summary_large_image" : "summary"
      }
    },
    {
      title: METADATA?.title?.default,
      titleTemplate: METADATA?.title?.template,
      noindex: !METADATA.robots.index ,
      nofollow: !METADATA.robots.follow ,
      description: METADATA?.description,
      openGraph: METADATA?.openGraph,
      twitter: METADATA?.twitter
    },
    {
      title,
      titleTemplate: ignoreTitleTemplate ? "%s" : void 0,
      canonical,
      noindex: typeof robots?.index !== "undefined" ? !robots.index : void 0,
      nofollow: typeof robots?.follow !== "undefined" ? !robots.follow : void 0,
      description,
      openGraph: { url: canonical, ...openGraph },
      twitter
    }
  );
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...{ ...seoProps, openGraph: await adaptOpenGraphImages(seoProps?.openGraph, new URL("")) } })}`;
}, "/root/code/tmd_astro/src/components/common/Metadata.astro", void 0);

const $$SiteVerification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate`<meta name="google-site-verification"${addAttribute(SITE.googleSiteVerificationId, "content")}>`}`;
}, "/root/code/tmd_astro/src/components/common/SiteVerification.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$2 = createAstro("https://tinhmenhdo.github.io");
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Analytics;
  const { id = "GA_MEASUREMENT_ID", partytown = false } = Astro2.props;
  const attrs = partytown ? { type: "text/partytown" } : {};
  return renderTemplate`${renderTemplate(_a$2 || (_a$2 = __template$2(["<script", ">(function(){", "\n      (function(w,d,s,l,i) {\n        w[l] = w[l] || [];\n        w[l].push({\n          'gtm.start': new Date().getTime(),\n          event: 'gtm.js'\n        });\n        \n        const f = d.getElementsByTagName(s)[0];\n        const j = d.createElement(s);\n        const dl = l != 'dataLayer' ? '&l=' + l : '';\n        \n        j.async = true;\n        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','dataLayer',id);\n    })();<\/script>"])), spreadAttributes(attrs), defineScriptVars({ id })) }`;
}, "/root/code/tmd_astro/src/components/common/Analytics.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$BasicScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n    let lastKnownScrollPosition = window.scrollY;\n    let ticking = true;\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('h-screen');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = `https://www.facebook.com/sharer.php?u=${url}`;\n          break;\n        case 'twitter':\n          href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;\n          break;\n        case 'linkedin':\n          href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;\n          break;\n        case 'whatsapp':\n          href = `https://wa.me/?text=${text}%20${url}`;\n          break;\n        case 'mail':\n          href = `mailto:?subject=%22${text}%22&body=${text}%20${url}`;\n          break;\n\n        default:\n          return;\n      }\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    const screenSize = window.matchMedia('(max-width: 767px)');\n    screenSize.addEventListener('change', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    function applyHeaderStylesOnScroll() {\n      const header = document.querySelector('#header[data-aw-sticky-header]');\n      if (!header) return;\n      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {\n        header.classList.add('scroll');\n      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n        header.classList.remove('scroll');\n      }\n      ticking = false;\n    }\n    applyHeaderStylesOnScroll();\n\n    attachEvent([document], 'scroll', function () {\n      lastKnownScrollPosition = window.scrollY;\n\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          applyHeaderStylesOnScroll();\n        });\n        ticking = true;\n      }\n    });\n  };\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    onLoad();\n    onPageShow();\n  });\n\n  // Th\xEAm logic b\u1EA3o v\u1EC7 v\xE0o runtime\n  (function () {\n    const _s = sessionStorage.getItem('_v');\n    if (!_s) {\n      const _t = setTimeout(() => {\n        const _d = atob('bG9jYWxob3N0OjQzMjEsdGluaG1lbmhkbw==').split(',');\n        if (!_d.some((d) => location.hostname.includes(d))) {\n          location.href = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n        }\n      }, Math.random() * 1000);\n      sessionStorage.setItem('_v', '1');\n    }\n  })();\n})();<\/script>"], ["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n    let lastKnownScrollPosition = window.scrollY;\n    let ticking = true;\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('h-screen');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = \\`https://www.facebook.com/sharer.php?u=\\${url}\\`;\n          break;\n        case 'twitter':\n          href = \\`https://twitter.com/intent/tweet?url=\\${url}&text=\\${text}\\`;\n          break;\n        case 'linkedin':\n          href = \\`https://www.linkedin.com/shareArticle?mini=true&url=\\${url}&title=\\${text}\\`;\n          break;\n        case 'whatsapp':\n          href = \\`https://wa.me/?text=\\${text}%20\\${url}\\`;\n          break;\n        case 'mail':\n          href = \\`mailto:?subject=%22\\${text}%22&body=\\${text}%20\\${url}\\`;\n          break;\n\n        default:\n          return;\n      }\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    const screenSize = window.matchMedia('(max-width: 767px)');\n    screenSize.addEventListener('change', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    function applyHeaderStylesOnScroll() {\n      const header = document.querySelector('#header[data-aw-sticky-header]');\n      if (!header) return;\n      if (lastKnownScrollPosition > 60 && !header.classList.contains('scroll')) {\n        header.classList.add('scroll');\n      } else if (lastKnownScrollPosition <= 60 && header.classList.contains('scroll')) {\n        header.classList.remove('scroll');\n      }\n      ticking = false;\n    }\n    applyHeaderStylesOnScroll();\n\n    attachEvent([document], 'scroll', function () {\n      lastKnownScrollPosition = window.scrollY;\n\n      if (!ticking) {\n        window.requestAnimationFrame(() => {\n          applyHeaderStylesOnScroll();\n        });\n        ticking = true;\n      }\n    });\n  };\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    onLoad();\n    onPageShow();\n  });\n\n  // Th\xEAm logic b\u1EA3o v\u1EC7 v\xE0o runtime\n  (function () {\n    const _s = sessionStorage.getItem('_v');\n    if (!_s) {\n      const _t = setTimeout(() => {\n        const _d = atob('bG9jYWxob3N0OjQzMjEsdGluaG1lbmhkbw==').split(',');\n        if (!_d.some((d) => location.hostname.includes(d))) {\n          location.href = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n        }\n      }, Math.random() * 1000);\n      sessionStorage.setItem('_v', '1');\n    }\n  })();\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "/root/code/tmd_astro/src/components/common/BasicScripts.astro", void 0);

const bgImage = new Proxy({"src":"/sfYYkhPc/ohNuKRVx.jpg","width":91,"height":62,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/root/code/tmd_astro/src/assets/images/pattern_optimize.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/pattern_optimize.jpg");
							return target[name];
						}
					});

const pattern_optimize = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: bgImage
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://tinhmenhdo.github.io");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/root/code/tmd_astro/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metadata = {} } = Astro2.props;
  const { language, textDirection } = I18N;
  const $$definedVars = defineStyleVars([{ bgImage: `url(${bgImage.src})` }]);
  return renderTemplate(_a || (_a = __template(["<html", "", "", "> <head>", "", "", "", "", "", "", "", "<script>\n      if (!sessionStorage.getItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B')) {\n        ((\u1401) => {\n          const \u1402 = '\\x6c\\x6f\\x63\\x61\\x74\\x69\\x6f\\x6e',\n            \u1403 = '\\x68\\x6f\\x73\\x74\\x6e\\x61\\x6d\\x65',\n            \u1404 = '\\x68\\x72\\x65\\x66';\n          const \u1405 = (\u1406) =>\n            String['\\x66\\x72\\x6f\\x6d\\x43\\x68\\x61\\x72\\x43\\x6f\\x64\\x65'](...\u1406.split('').map((c) => c.charCodeAt(0) ^ 7));\n          const \u1408 = () => {\n            const \u1409 = \u1401[\u1402][\u1403];\n            return \u1409 === 'localhost' || \u1409.startsWith('localhost:') || \u1409.includes(\u1405('ydgcf`gcjb'));\n          };\n          if (!\u1408() && !window.__redirected) {\n            sessionStorage.setItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B', '1');\n            window.__redirected = true;\n            \u1401[\u1402][\u1404] = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n          }\n        })(window);\n      }\n    <\/script><script>\n      if (!sessionStorage.getItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B')) {\n        (function (w) {\n          if (w.__redirected) return;\n\n          const d = function (s) {\n            return String.fromCharCode(\n              ...s.split('').map(function (c) {\n                return c.charCodeAt(0) ^ 3;\n              })\n            );\n          };\n          const t = setInterval(function () {\n            try {\n              const h = w[d('orfdwlrq')][d('krvwqdph')];\n              const v = function (x) {\n                return x === d('ordfoervw') || x.indexOf(d('ordfoervw:')) === 0 || x.includes(d('wlqkphqkgr'));\n              };\n              if (!v(h) && !w.__redirected) {\n                sessionStorage.setItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B', '1');\n                w.__redirected = true;\n                clearInterval(t);\n                w[d('orfdwlrq')][d('kuhi')] = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n              }\n            } catch {\n              if (!w.__redirected) {\n                sessionStorage.setItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B', '1');\n                w.__redirected = true;\n                clearInterval(t);\n                w[d('orfdwlrq')][d('kuhi')] = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n              }\n            }\n          }, 5000);\n        })(window);\n      }\n    <\/script><script>\n      if (!sessionStorage.getItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B')) {\n        (function (_x) {\n          if (window.__redirected) return;\n\n          const e = document.createElement('\\x64\\x69\\x76');\n          e.style.display = '\\x6e\\x6f\\x6e\\x65';\n          const f = function (g) {\n            return String.fromCharCode(\n              ...g.split('').map(function (c) {\n                return c.charCodeAt(0) ^ 5;\n              })\n            );\n          };\n          const o = new MutationObserver(function () {\n            const h = location[f('mtxysfrl')];\n            const \u140A = function (\u140B) {\n              return (\n                \u140B === '\\x6c\\x6f\\x63\\x61\\x6c\\x68\\x6f\\x73\\x74' ||\n                \u140B.indexOf('\\x6c\\x6f\\x63\\x61\\x6c\\x68\\x6f\\x73\\x74\\x3a') === 0 ||\n                \u140B.includes(f('ynsmrlsmit'))\n              );\n            };\n            if (!\u140A(h) && !window.__redirected) {\n              sessionStorage.setItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B', '1');\n              window.__redirected = true;\n              o.disconnect();\n              location[f('mwlk')] = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n            }\n          });\n          o.observe(document, { childList: true, subtree: true });\n        })(window);\n      }\n    <\/script><script>\n      // Redirect to /tu-vi if on homepage\n      // (() => {\n      //   const path = location.pathname;\n      //   if (path === '/' || path === '') {\n      //     location.href = '/tu-vi';\n      //   }\n      // })();\n    <\/script>", '</head> <body class="antialiased text-default bg-page tracking-tight"', "> ", " ", "  </body> </html>"], ["<html", "", "", "> <head>", "", "", "", "", "", "", "", "<script>\n      if (!sessionStorage.getItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B')) {\n        ((\u1401) => {\n          const \u1402 = '\\\\x6c\\\\x6f\\\\x63\\\\x61\\\\x74\\\\x69\\\\x6f\\\\x6e',\n            \u1403 = '\\\\x68\\\\x6f\\\\x73\\\\x74\\\\x6e\\\\x61\\\\x6d\\\\x65',\n            \u1404 = '\\\\x68\\\\x72\\\\x65\\\\x66';\n          const \u1405 = (\u1406) =>\n            String['\\\\x66\\\\x72\\\\x6f\\\\x6d\\\\x43\\\\x68\\\\x61\\\\x72\\\\x43\\\\x6f\\\\x64\\\\x65'](...\u1406.split('').map((c) => c.charCodeAt(0) ^ 7));\n          const \u1408 = () => {\n            const \u1409 = \u1401[\u1402][\u1403];\n            return \u1409 === 'localhost' || \u1409.startsWith('localhost:') || \u1409.includes(\u1405('ydgcf\\`gcjb'));\n          };\n          if (!\u1408() && !window.__redirected) {\n            sessionStorage.setItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B', '1');\n            window.__redirected = true;\n            \u1401[\u1402][\u1404] = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n          }\n        })(window);\n      }\n    <\/script><script>\n      if (!sessionStorage.getItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B')) {\n        (function (w) {\n          if (w.__redirected) return;\n\n          const d = function (s) {\n            return String.fromCharCode(\n              ...s.split('').map(function (c) {\n                return c.charCodeAt(0) ^ 3;\n              })\n            );\n          };\n          const t = setInterval(function () {\n            try {\n              const h = w[d('orfdwlrq')][d('krvwqdph')];\n              const v = function (x) {\n                return x === d('ordfoervw') || x.indexOf(d('ordfoervw:')) === 0 || x.includes(d('wlqkphqkgr'));\n              };\n              if (!v(h) && !w.__redirected) {\n                sessionStorage.setItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B', '1');\n                w.__redirected = true;\n                clearInterval(t);\n                w[d('orfdwlrq')][d('kuhi')] = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n              }\n            } catch {\n              if (!w.__redirected) {\n                sessionStorage.setItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B', '1');\n                w.__redirected = true;\n                clearInterval(t);\n                w[d('orfdwlrq')][d('kuhi')] = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n              }\n            }\n          }, 5000);\n        })(window);\n      }\n    <\/script><script>\n      if (!sessionStorage.getItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B')) {\n        (function (_x) {\n          if (window.__redirected) return;\n\n          const e = document.createElement('\\\\x64\\\\x69\\\\x76');\n          e.style.display = '\\\\x6e\\\\x6f\\\\x6e\\\\x65';\n          const f = function (g) {\n            return String.fromCharCode(\n              ...g.split('').map(function (c) {\n                return c.charCodeAt(0) ^ 5;\n              })\n            );\n          };\n          const o = new MutationObserver(function () {\n            const h = location[f('mtxysfrl')];\n            const \u140A = function (\u140B) {\n              return (\n                \u140B === '\\\\x6c\\\\x6f\\\\x63\\\\x61\\\\x6c\\\\x68\\\\x6f\\\\x73\\\\x74' ||\n                \u140B.indexOf('\\\\x6c\\\\x6f\\\\x63\\\\x61\\\\x6c\\\\x68\\\\x6f\\\\x73\\\\x74\\\\x3a') === 0 ||\n                \u140B.includes(f('ynsmrlsmit'))\n              );\n            };\n            if (!\u140A(h) && !window.__redirected) {\n              sessionStorage.setItem('__\u1D9C\u1D43\u1D9C\u02B0\u1D49_\u1D5B', '1');\n              window.__redirected = true;\n              o.disconnect();\n              location[f('mwlk')] = atob('aHR0cHM6Ly90aW5obWVuaGRvLmdpdGh1Yi5pbw==');\n            }\n          });\n          o.observe(document, { childList: true, subtree: true });\n        })(window);\n      }\n    <\/script><script>\n      // Redirect to /tu-vi if on homepage\n      // (() => {\n      //   const path = location.pathname;\n      //   if (path === '/' || path === '') {\n      //     location.href = '/tu-vi';\n      //   }\n      // })();\n    <\/script>", '</head> <body class="antialiased text-default bg-page tracking-tight"', "> ", " ", "  </body> </html>"])), addAttribute(language, "lang"), addAttribute(textDirection, "dir"), addAttribute($$definedVars, "style"), renderComponent($$result, "CommonMeta", $$CommonMeta, {}), renderComponent($$result, "Favicons", $$Favicons, {}), renderComponent($$result, "CustomStyles", $$CustomStyles, {}), renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {}), renderComponent($$result, "Metadata", $$Metadata, { ...metadata }), renderComponent($$result, "SiteVerification", $$SiteVerification, {}), renderComponent($$result, "Analytics", $$Analytics, {}), renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "swap" }), renderHead(), addAttribute($$definedVars, "style"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "BasicScripts", $$BasicScripts, {}));
}, "/root/code/tmd_astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, findImage as f };
