import { d as createAstro, c as createComponent, b as addAttribute, k as renderScript, a as renderTemplate, f as defineScriptVars, s as spreadAttributes, r as renderComponent, m as maybeRenderHead, e as Fragment, u as unescapeHTML, l as defineStyleVars, n as renderHead, p as renderSlot } from './3oDUBBJB.js';
/* empty css         */
import 'piccolore';
import 'clsx';
import { A as ANALYTICS, U as UI, b as getAsset, g as getCanonical, I as I18N, S as SITE, M as METADATA } from './Cai4ZUSU.js';
import { escape } from 'html-escaper';
import merge from 'lodash.merge';
import { g as getImage } from './nGoHX81s.js';
import { parseUrl, transformUrl } from 'unpic';

const $$Astro$5 = createAstro("https://tinhmenhdo.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/root/code/tmd_astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/code/tmd_astro/node_modules/astro/components/ClientRouter.astro", void 0);

const bgImage = new Proxy({"src":"/images/pattern_optimize.jpg","width":91,"height":62,"format":"jpg","orientation":1}, {
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

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://tinhmenhdo.com");
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const { id = "GA_MEASUREMENT_ID", partytown = false } = Astro2.props;
  const attrs = partytown ? { type: "text/partytown" } : {};
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script async", "", "><\/script><script", ">(function(){", '\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    window.dataLayer.push(arguments);\n  }\n  gtag("js", new Date());\n  gtag("config", id);\n})();<\/script>'])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${id}`, "src"), spreadAttributes(attrs), spreadAttributes(attrs), defineScriptVars({ id }));
}, "/root/code/tmd_astro/node_modules/@astrolib/analytics/src/GoogleAnalytics.astro", void 0);

const $$Astro$3 = createAstro("https://tinhmenhdo.com");
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Analytics;
  const analyticsId = ANALYTICS?.vendors?.googleAnalytics?.id;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "GoogleAnalytics", $$GoogleAnalytics, { "id": String(analyticsId), "partytown": ANALYTICS?.vendors?.googleAnalytics?.partytown })}` }`;
}, "/root/code/tmd_astro/src/components/common/Analytics.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ApplyColorMode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n    const matches = document.querySelectorAll('[data-aw-toggle-color-scheme] > input');\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.checked = theme !== 'dark';\n      });\n    }\n  }\n\n  if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n    applyTheme(defaultTheme.replace(':only', ''));\n  } else if (\n    localStorage.theme === 'dark' ||\n    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n  ) {\n    applyTheme('dark');\n  } else {\n    applyTheme('light');\n  }\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "/root/code/tmd_astro/src/components/common/ApplyColorMode.astro", void 0);

const $$BasicScripts = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Hidden element to pass theme data to client script -->${maybeRenderHead()}<div id="theme-data"${addAttribute(UI.theme, "data-theme")} style="display: none;"></div> ${renderScript($$result, "/root/code/tmd_astro/src/components/common/BasicScripts.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/code/tmd_astro/src/components/common/BasicScripts.astro", void 0);

const $$CommonMeta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><meta name="theme-color" content="#ffffff"><meta name="author" content="SoulVoidNova"><meta name="publisher" content="SoulVoidNova"><link rel="sitemap"${addAttribute(getAsset("/sitemap-index.xml"), "href")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;900&display=swap" as="style"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" as="style"><link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;900&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet">`;
}, "/root/code/tmd_astro/src/components/common/CommonMeta.astro", void 0);

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

const $$Astro$2 = createAstro("https://tinhmenhdo.com");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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

const config = {
  /**
   * Device breakpoints covering common screen widths
   * Based on popular device resolutions and viewport sizes
   */
  deviceSizes: [
    640,
    // Older and lower-end phones (iPhone SE, small Android)
    750,
    // iPhone 6-8 standard resolution
    828,
    // iPhone XR/11 resolution
    960,
    // Older horizontal phones and small tablets
    1080,
    // iPhone 6-8 Plus, Full HD phones
    1280,
    // 720p displays, small laptops
    1668,
    // Various iPads in portrait
    1920,
    // 1080p displays, standard laptops
    2048,
    // QXGA, large tablets
    2560,
    // WQXGA, high-res laptops
    3200,
    // QHD+ displays
    3840,
    // 4K displays
    4480,
    // 4.5K displays
    5120,
    // 5K displays (iMac 27")
    6016
    // 6K displays (Pro Display XDR)
  ]};
const computeHeight = (width, aspectRatio) => {
  return Math.floor(width / aspectRatio);
};
const parseAspectRatio = (aspectRatio) => {
  if (typeof aspectRatio === "number") return aspectRatio;
  if (typeof aspectRatio === "string") {
    const ratioMatch = aspectRatio.match(/(\d+(?:\.\d+)?)\s*[/:]\s*(\d+(?:\.\d+)?)/);
    if (ratioMatch) {
      const [, numerator, denominator] = ratioMatch.map(Number);
      if (denominator && !isNaN(numerator) && denominator > 0) {
        return numerator / denominator;
      }
    } else {
      const numericValue = parseFloat(aspectRatio);
      if (!isNaN(numericValue) && numericValue > 0) return numericValue;
    }
  }
  return void 0;
};
const getSizes = (width, layout) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    // Constrained: Image scales down on smaller screens but has max width
    // If viewport is wider than image, use image width; otherwise use full viewport
    case "constrained":
      return `(min-width: ${width}px) ${width}px, 100vw`;
    // Fixed: Image always maintains exact specified width
    case "fixed":
      return `${width}px`;
    // Full width: Image always spans entire viewport width
    case "fullWidth":
      return `100vw`;
    // Other layouts don't need specific sizes attributes
    default:
      return void 0;
  }
};
const pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
const getStyle = ({
  width,
  height,
  aspectRatio,
  layout,
  objectFit = "cover",
  objectPosition = "center",
  background
}) => {
  const styleEntries = [
    ["object-fit", objectFit],
    ["object-position", objectPosition]
  ];
  if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:")) {
    styleEntries.push(["background-image", `url(${background})`]);
    styleEntries.push(["background-size", "cover"]);
    styleEntries.push(["background-repeat", "no-repeat"]);
  } else if (background) {
    styleEntries.push(["background", background]);
  }
  switch (layout) {
    case "fixed":
      styleEntries.push(["width", pixelate(width)]);
      styleEntries.push(["height", pixelate(height)]);
      styleEntries.push(["object-position", "top left"]);
      break;
    case "constrained":
      styleEntries.push(["max-width", pixelate(width)]);
      styleEntries.push(["max-height", pixelate(height)]);
      styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
      styleEntries.push(["width", "100%"]);
      break;
    case "fullWidth":
      styleEntries.push(["width", "100%"]);
      styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
      styleEntries.push(["height", pixelate(height)]);
      break;
    case "responsive":
      styleEntries.push(["width", "100%"]);
      styleEntries.push(["height", "auto"]);
      styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
      break;
    case "contained":
      styleEntries.push(["max-width", "100%"]);
      styleEntries.push(["max-height", "100%"]);
      styleEntries.push(["object-fit", "contain"]);
      styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
      break;
    case "cover":
      styleEntries.push(["max-width", "100%"]);
      styleEntries.push(["max-height", "100%"]);
      break;
  }
  const styles = Object.fromEntries(styleEntries.filter(([, value]) => value));
  return Object.entries(styles).map(([key, value]) => `${key}: ${value};`).join(" ");
};
const getBreakpoints = ({
  width,
  breakpoints,
  layout
}) => {
  const responsiveLayouts = ["fullWidth", "cover", "responsive", "contained"];
  if (responsiveLayouts.includes(layout)) {
    return breakpoints || config.deviceSizes;
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  if (layout === "fixed") {
    return [width, doubleWidth];
  }
  if (layout === "constrained") {
    const defaultBreakpoints = breakpoints || config.deviceSizes;
    return [
      width,
      // Always include the base width
      doubleWidth,
      // Include 2x for high-DPI displays
      // Add smaller breakpoints for progressive enhancement
      ...defaultBreakpoints.filter((w) => w < doubleWidth)
    ].sort((a, b) => a - b);
  }
  return [];
};
const astroAssetsOptimizer = async (image, breakpoints, _width, _height, format = void 0) => {
  if (!image) {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const result = await getImage({
        src: image,
        width: w,
        inferSize: true,
        ...format ? { format } : {}
      });
      return {
        src: result?.src || "",
        width: result?.attributes?.width ?? w,
        height: result?.attributes?.height
      };
    })
  );
};
const isUnpicCompatible = (image) => {
  return typeof parseUrl(image) !== "undefined";
};
const unpicOptimizer = async (image, breakpoints, width, height, format = void 0) => {
  if (!image || typeof image !== "string") {
    return [];
  }
  const urlParsed = parseUrl(image);
  if (!urlParsed) {
    return [];
  }
  return Promise.all(
    breakpoints.map(async (w) => {
      const _height = width && height ? computeHeight(w, width / height) : height;
      const url = transformUrl({
        url: image,
        width: w,
        height: _height,
        cdn: urlParsed.cdn,
        ...format ? { format } : {}
      }) || image;
      return {
        src: String(url),
        width: w,
        height: _height
      };
    })
  );
};
async function getImagesOptimized(image, {
  src: _,
  // Destructured but unused (src comes from image parameter)
  width,
  height,
  sizes,
  aspectRatio,
  objectPosition,
  widths,
  layout = "fixed",
  //'constrained',
  style = "",
  format,
  ...rest
  // Spread remaining HTML attributes
}, transform = () => Promise.resolve([])) {
  if (typeof image !== "string") {
    width ||= Number(image.width) || void 0;
    height ||= typeof width === "number" ? computeHeight(width, image.width / image.height) : void 0;
  }
  width = width && Number(width) || void 0;
  height = height && Number(height) || void 0;
  widths ||= config.deviceSizes;
  sizes ||= getSizes(Number(width) || void 0, layout);
  aspectRatio = parseAspectRatio(aspectRatio);
  if (aspectRatio) {
    if (width && !height) {
      height = width / aspectRatio;
    } else if (height && !width) {
      width = Number(height * aspectRatio);
    } else if (!width && !height && layout !== "fullWidth") {
      console.error("When aspectRatio is set, either width or height must also be set");
      console.error("Image", image);
    }
  } else if (width && height) {
    aspectRatio = width / height;
  } else if (layout !== "fullWidth") {
    console.error("Either aspectRatio or both width and height must be set");
    console.error("Image", image);
  }
  let breakpoints = getBreakpoints({ width, breakpoints: widths || void 0, layout });
  breakpoints = [...new Set(breakpoints)].sort((a, b) => a - b);
  const optimizedImages = await transform(
    image,
    breakpoints,
    Number(width) || void 0,
    Number(height) || void 0,
    format
  );
  const srcset = optimizedImages.map(({ src, width: width2 }) => `${src} ${width2}w`).join(", ");
  return {
    src: typeof image === "string" ? image : image.src,
    attributes: {
      width,
      height,
      srcset: srcset || void 0,
      sizes,
      style: `${getStyle({
        width,
        height,
        aspectRatio,
        objectPosition,
        layout
      })}${style ?? ""}`,
      ...rest
      // Include any additional HTML attributes
    }
  };
}

const load = async function() {
  let images = void 0;
  try {
    images = /* #__PURE__ */ Object.assign({"/src/assets/images/144x114.png": () => import('./DgsFmnof.js'),"/src/assets/images/192x192.png": () => import('./BmNqFRmh.js'),"/src/assets/images/196x196.png": () => import('./CqdhMt6R.js'),"/src/assets/images/72x72.png": () => import('./0Kav0zMz.js'),"/src/assets/images/TinhMenhDoLogo.webp": () => import('./Cb86hwTM.js'),"/src/assets/images/YinYang.webp": () => import('./C1hodu6f.js'),"/src/assets/images/am-duong.png": () => import('./D4wPjI7r.js'),"/src/assets/images/app-store.png": () => import('./SBgTewRP.js'),"/src/assets/images/architecture.png": () => import('./CzJWQbku.js'),"/src/assets/images/arrows.png": () => import('./BI3cqrdb.js'),"/src/assets/images/bg.jpg": () => import('./aVkDj8v6.js'),"/src/assets/images/birthday-cake.png": () => import('./DHQ5Gjfe.js'),"/src/assets/images/brain.png": () => import('./ZSlZ5CbK.js'),"/src/assets/images/calendar.png": () => import('./BTuUb74B.js'),"/src/assets/images/curve-arrow.png": () => import('./CJlk85g1.js'),"/src/assets/images/default.png": () => import('./BEYzXJCj.js'),"/src/assets/images/default.webp": () => import('./KQMgJlkK.js'),"/src/assets/images/diaban.png": () => import('./BEsqtrUo.js'),"/src/assets/images/earth.png": () => import('./D3LchadF.js'),"/src/assets/images/fav.png": () => import('./BuEZU2Vo.js'),"/src/assets/images/google-play.png": () => import('./A-5FpT46.js'),"/src/assets/images/hero-image.png": () => import('./BZYNfmg8.js'),"/src/assets/images/icon.png": () => import('./oclOCj_-.js'),"/src/assets/images/logo.png": () => import('./Db-YEDCp.js'),"/src/assets/images/man.png": () => import('./Bn9r19yQ.js'),"/src/assets/images/pattern_optimize.jpg": () => Promise.resolve().then(() => pattern_optimize),"/src/assets/images/scale.png": () => import('./9ZYcqj5c.js'),"/src/assets/images/star.png": () => import('./BEdQ5Euo.js'),"/src/assets/images/tinh-menh-do-gpt.jpg": () => import('./BOJ2VXmo.js'),"/src/assets/images/universe.png": () => import('./C5gf0vei.js'),"/src/assets/images/view.png": () => import('./B-3eN5PD.js'),"/src/assets/images/woman.png": () => import('./CF0FhYXn.js'),"/src/assets/images/yinyang.png": () => import('./DLB3cuU9.js'),"/src/assets/images/yinyang2.webp": () => import('./v8h9yoQH.js')});
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
  if (imagePath.startsWith("/images/")) {
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
        let _image;
        if (typeof resolvedImage === "string" && (resolvedImage.startsWith("http://") || resolvedImage.startsWith("https://")) && isUnpicCompatible(resolvedImage)) {
          _image = (await unpicOptimizer(resolvedImage, [defaultWidth], defaultWidth, defaultHeight, "jpg"))[0];
        } else if (typeof resolvedImage === "string" && resolvedImage.startsWith("/")) {
          return {
            url: String(new URL(resolvedImage, astroSite)),
            width: defaultWidth,
            height: defaultHeight
          };
        } else if (resolvedImage) {
          const dimensions = typeof resolvedImage !== "string" && resolvedImage?.width <= defaultWidth ? [resolvedImage?.width, resolvedImage?.height] : [defaultWidth, defaultHeight];
          _image = (await astroAssetsOptimizer(resolvedImage, [dimensions[0]], dimensions[0], dimensions[1], "jpg"))[0];
        }
        if (typeof _image === "object") {
          return {
            url: "src" in _image && typeof _image.src === "string" ? String(new URL(_image.src, astroSite)) : "",
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

const $$Astro$1 = createAstro("https://tinhmenhdo.com");
const $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  const canonialAddDomain = getCanonical(canonical);
  const seoProps = merge(
    {
      title: "",
      titleTemplate: "%s",
      canonical: canonialAddDomain,
      noindex: true,
      nofollow: true,
      description: void 0,
      openGraph: {
        url: canonialAddDomain,
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
      noindex: false ,
      nofollow: false ,
      description: METADATA?.description,
      openGraph: METADATA?.openGraph,
      twitter: METADATA?.twitter
    },
    {
      title,
      titleTemplate: ignoreTitleTemplate ? "%s" : void 0,
      canonical: canonialAddDomain,
      noindex: typeof robots?.index !== "undefined" ? !robots.index : void 0,
      nofollow: typeof robots?.follow !== "undefined" ? !robots.follow : void 0,
      description,
      openGraph: { url: canonialAddDomain, ...openGraph },
      twitter,
      extend: {
        link: [
          ...Astro2.props.prev ? [{ rel: "prev", href: Astro2.props.prev }] : [],
          ...Astro2.props.next ? [{ rel: "next", href: Astro2.props.next }] : []
        ]
      }
    }
  );
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...{ ...seoProps, openGraph: await adaptOpenGraphImages(seoProps?.openGraph, Astro2.site) } })}`;
}, "/root/code/tmd_astro/src/components/common/Metadata.astro", void 0);

const $$SiteVerification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderTemplate`<meta name="google-site-verification"${addAttribute(SITE.googleSiteVerificationId, "content")}>`}`;
}, "/root/code/tmd_astro/src/components/common/SiteVerification.astro", void 0);

const appleTouchIcon = new Proxy({"src":"/images/apple-touch-icon.png","width":180,"height":180,"format":"png"}, {
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

const favIcon = "/images/favicon.ico";

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const favIconSvg = createSvgComponent({"meta":{"src":"/images/favicon.svg","width":289,"height":289,"format":"svg"},"attributes":{"viewBox":"0 0 1156 1156","width":"289","height":"289"},"children":"\n<path transform=\"translate(547)\" d=\"m0 0h63l43 5 41 7 31 7 27 8 32 11 31 13 33 16 23 13 13 8 24 16 17 12 16 13 11 9 15 13 10 10 3 2v2l4 2 8 8 7 8 10 10 9 11 11 13 13 17 12 17 10 15 8 13 11 19 14 27 11 23 13 33 10 30 10 38 7 36 5 37 3 29v53l-5 46-6 37-5 24-9 34-10 30-12 30-13 28-10 20-14 24-12 19-16 23-13 17-9 11-13 15-11 12-31 31-8 7-14 12-30 23-27 18-25 15-32 17-31 14-26 10-30 10-29 8-39 8-41 6-28 3h-57l-64-8-33-6-42-11-33-11-27-11-24-11-24-12-24-14-16-10-19-13-11-8-13-10-13-11-11-9-16-15-29-29-7-8-12-14-11-14-15-20-14-21-13-21-12-22-8-16-12-25-13-34-10-30-9-34-7-35-5-36-3-30v-61l5-43 4-25 6-30 9-34 12-36 11-28 14-30 12-23 10-17 14-22 14-20 9-12 8-10 9-11 13-15 6-7h2l2-4 24-24 8-7 10-9 11-9 18-14 18-13 18-12 25-15 18-10 24-12 25-11 35-13 26-8 36-9 39-7 41-5z\" fill=\"#D75719\" />\n<path transform=\"translate(587,182)\" d=\"m0 0 9 2 7 4h7l7 2h7l5 6h10l6 5-1-8 4 1v3l5-2 14 7 12 4v4h4v-2l7-2 4 2 7 1 4 3h6l6-4h4l-2 4-4 1v2l6-1v2l5 1-3 12-6 14-1 7-3 7-3 1v6l-4 8v4l-4 3v2h2l13-24 13-22 10-15 7-8 2-1 11 1 16 5-1 4-10 8-4 4-3 7-1 2h2v2l4-2 4-1 7-3 3 2 1-3 3 1v2l3 1v2h2l4 11v5h2l4 6v2l3 1 4 5 3 1 1 8 3 1 5 13 1 6 3 7 2 1 2 6 1 5 3 2v2h3l1 6 4 4v3h-2l3 6 2 11 1 3h-4l1 2 4 1v2l-2 1-1 8 1 5 2 2-1 7-3 4h-2l4 16-1 5 2 11 4 4 1 6-1 1v5l5 1 1 13 1 3v3l2 1-1 2 3 2v2h-2l2 11 1 5 2 6-1 3-2 1 3 2v2l-2 1-3 6 1 2 7 2 1-2 4 1v-2l6 2 5 7 3 7 2 12 1 3 4 1 2 7-2 3h-2l4 10 1 4 3 6-2 16v9l-3 7-6 4-3 7-5 7v4h2v-2h2l2-4 6 1-1 5 1 2h2v9l1 8-2 14-2 2-2 6-3 1v6l-8 12v6l-3 4-3 1-2 4-1 7-3 2-5 10-2 2-1-5-3 3-1 4 1 2h-2l-2 4-2 5-2 2h-3l1 4-5 6-1 3-8 5v5l-1 5 1 8-1 4 3 5-3 4-2-1v2h-2l2 5-5 5-1 5 1 4-4 6-4 4-3 5-1 10-3 8h-2l-3 13-1 5-1-3-4-1-3 4h4l-1 3-3 1-2 7-1 7-2 6-4 2 1 4-4 1-1-2-2 4 4 1v3l-3 5h-2v2h-3v2h-2l-3 11-2-2 1-2-1-6-3 1v-2h-2l-1 4-5 4-7 8-13 10-12 5h-4v2l-5 1 3 4v2h6l2 1-1 7-5 4h5v-2h2l1-2h2l1 4-10 3-3 3-10 1v2l-3 1v-3l-4-2-1-1-7 2 5-5 3-1v-2l5-3 6-4h2l-2-4-2-1h-6l-1 2h-2v2h-2v2l-7 5-6 6-4 2-7 2h-4v2h-3v2l-4 3 2 3v4l-1 2-11 2-6-1-2 2-5 1-9-2h-10l-7-1v-2h-3v2l-10 1-13 2v2l-13-1-5-1-1 2-11-1-12 2-7 1h-20v-2l-11 1v-2h-5l-1 2h-2v-2h-8l-2 1 1-4h11l7-2 7-3 9-2 16-6 14-7 9-2 4-5h2l-1-3-5 1-14 5-5 2h-7v2l-21 5-10 2-4 1-32 2h-14l-15-1v-2l-12-1-11-4-6-5-2-4v-7l5-12 1-7-4 4-1-4-8 7h-2l-1 2-5 2-3-1v-2h-2l-1-5h-2l-2-3-1-10h-2v-2l-3-1-2-9v-5l-7-6-1-6v-2l-3-1-2-4-2-1-1-4 3-8 2 1v-5h-2v-2l-4-2-4-6-5-5-8-6-4-5-6-9-5-5-2-7-3-10-1-7-5-5-4-6-2-5h-3l-1-5-1-2h-2l-1-5h2l1-2 2-3-5 2h-3l-1-6 4-3v-7l2-1-5-3-2-9-1-3-3-1 1-3-4-4 2-4 1-3-6-2-2-2-1-4-5-5v-2h-3l-1-9 3-10 5-5 3 6 9-1 4-4 2-3 3-11 4-7-1-5-9 14-3 6-3 2h-8v-3h-2l1-4h2l1-6 11-25 11-24 13-25 24-44 14-24v-2l-3 2-1 5h-2l-6 10h-2l-1 4-1 2h-2l-2 6h-2l-2 6-4 10h-2v6l-1 3h-2l-2 5-5 9h-2l-1 2-5 6-7 14-9 14-2 5-5 7h-2l-1 6-5 5-2 4-6 4h-2l1-4-4 1v-10l2-3 2 1-4-10-1-4 2-5v-9l4-14h-5l-1-5 1-3v-8l-1-4 2-4-5 1-3-3-1-5-2-1 7 1-1-4 5-10 2-1 2-9-5-1-5-8v-8h4l2 2-2-4 2-1 2-9-1-5 1-3 3-3v-3l7-5-1-5 5-13h2l2-5 4-4-1-9 3-2 1-10 5-2-2-3 1-5-2-4h2l1-2 2 1 1-2 2 1 1-3-3-4-1-6h2l2-17 4-10 1-2v-5h2l-1-3 2-6 8-4 1-8 3-4-2-2v-8l6-4 1-7 2-10 1-2v-7l1-7 1-1 2-13 4-4 1-2v-10l5-10 7-8-2-4 7-1 8-1 2-2-3-12 2-9 6-9 8-6 12-6 16-5 15-3 29-3h49l6-3 4 1 2 4 21 5 13 1h2v-4l-4-4v-2l-5-2-1-3 8 1 1-2 20-5 5-3z\" fill=\"#ED731D\" />\n<path transform=\"translate(461,496)\" d=\"m0 0h11l6 5-1 8-10 19-13 19-32 48-13 22-6 16v13l3 5 4 2 8-1 3-7 4-11 1-2h2l2-6 12-22 5-4v6l-7 13-2 5-3 7-4 10 2 12 4-1 6 7 5 1v-2l4-1 5 3h8l5 8 6 4 3 5 9 5 3 4 9 3v4l5-1 3 1 3 4v3l7 2 2 5-1 6 11 6 10 2 3 1-1 4 4 1 7 1 7-1 8-4 12-2 2-2 1-6 7-2 15-7 6-2 7-1 5-6 17-8 8-2 4-4h2v-2l5-1 7-3h7l7-1 2 2v3l8-4 10-1 6-3h3l1-3 7 1 3 2 3-1v3l11-2 2-3 4-1 1-2 4 1v3l9-2v-5h2l2-5 8-12 3-7 12-16 8-10 9-10 16-16 11-8 1 3-6 10-9 17-10 19-6 15-1 3v11l5 6 6 2 11-1 10-4 11-9 14-14 7-8 9-10 7-8 4-7-7 6-9 11-13 15-16 15-10 6-4 1-7-3-1-4 6-17 10-19 15-22 11-15 2-6-5-4-3-1h-10l-10 5-11 9-10 9-11 12-13 17-10 13-3 2 1-5 11-20 13-21 12-19 13-19 11-15 13-16 10-9 2-1 1-3 4 1 1-2 4 1v-2l6 2 5 7 3 7 2 12 1 3 4 1 2 7-2 3h-2l4 10 1 4 3 6-2 16v9l-3 7-6 4-3 7-5 7v4h2v-2h2l2-4 6 1-1 5 1 2h2v9l1 8-2 14-2 2-2 6-3 1v6l-8 12v6l-3 4-3 1-2 4-1 7-3 2-5 10-2 2-1-5-3 3-1 4 1 2h-2l-2 4-2 5-2 2h-3l1 4-5 6-1 3-8 5v5l-1 5 1 8-1 4 3 5-3 4-2-1v2h-2l2 5-5 5-1 5 1 4-4 6-4 4-3 5-1 10-3 8h-2l-3 13-1 5-1-3-4-1-3 4h4l-1 3-3 1-2 7-1 7-2 6-4 2 1 4-4 1-1-2-2 4 4 1v3l-3 5h-2v2h-3v2h-2l-3 11-2-2 1-2-1-6-3 1v-2h-2l-1 4-5 4-7 8-13 10-12 5h-4v2l-5 1 3 4v2h6l2 1-1 7-5 4h5v-2h2l1-2h2l1 4-10 3-3 3-10 1v2l-3 1v-3l-4-2-1-1-7 2 5-5 3-1v-2l5-3 6-4h2l-2-4-2-1h-6l-1 2h-2v2h-2v2l-7 5-6 6-4 2-7 2h-4v2h-3v2l-4 3 2 3v4l-1 2-11 2-6-1-2 2-5 1-9-2h-10l-7-1v-2h-3v2l-10 1-13 2v2l-13-1-5-1-1 2-11-1-12 2-7 1h-20v-2l-11 1v-2h-5l-1 2h-2v-2h-8l-2 1 1-4h11l7-2 7-3 9-2 16-6 14-7 9-2 4-5h2l-1-3-5 1-14 5-5 2h-7v2l-21 5-10 2-4 1-32 2h-14l-15-1v-2l-12-1-11-4-6-5-2-4v-7l5-12 1-7-4 4-1-4-8 7h-2l-1 2-5 2-3-1v-2h-2l-1-5h-2l-2-3-1-10h-2v-2l-3-1-2-9v-5l-7-6-1-6v-2l-3-1-2-4-2-1-1-4 3-8 2 1v-5h-2v-2l-4-2-4-6-5-5-8-6-4-5-6-9-5-5-2-7-3-10-1-7-5-5-4-6-2-5h-3l-1-5-1-2h-2l-1-5h2l1-2 2-3-5 2h-3l-1-6 4-3v-7l2-1-5-3-2-9-1-3-3-1 1-3-4-4 2-4 1-3-6-2-2-2-1-4-5-5v-2h-3l-1-9 3-10 5-5 3 6 9-1 4-4 2-3 3-11 4-7-1-5-9 14-3 6-3 2h-8v-3h-2l1-4 4 4h5l6-10 18-27 16-21 14-17 7-7 7-8 16-17 19-19 11-9 12-11 13-10 13-9 14-7z\" fill=\"#ED731D\" />\n<path transform=\"translate(557,92)\" d=\"m0 0 6 1 5 5h3 2l1-2h7l9 3 5-1 4 1 10-2 3 3v2h-2v2h-2v5l-4 1v3l3 1-1 2 4 1 9-1 3-1 1-2 4 2 6 2 1 4 4 2 6-1 3 3-1 3 3-1 5 3 2 4 5 1 2-3 9 3 9 6 7-1 9 3 6 3h6l4 2 2 3 2 1v3h6l3 5 6 2 5 1h2l-2 4h8l5 6 7 2 2 2 4-2 1 4-3 3v2l10 3 3-2h3l1 7 3 4v2h2v2l6 1h6l7 3 6 2 3 4v2l5 1 6 5 2 4 5 4v2h2l1 2 6 3 2 3v5l7 2 3 8 6 8 8 8v4l4 2 2 3 1 7 3 6 5 5v11l4 8 1 7 3 3 1 13-3 3h2v2l3-1 1 6 2 1v9l4 4 3 9v7l2 3-1 1v5l1 4 2 1-2 5 3 3-3 1 5 10-1 9 1 6 4 8 1 3-1 2h4l2 5 1 6 1 3h2v10h2l-1 4-2 1 3 6 3 2 1 4-2 4 2 3v6l-1 2 4 1 2 5-1 11 3 1v2h2l-2 8 5 2 2 8v14l-1 5 1 8-2 9v6l-1 2v8l3 5-1 1-1 18-2 3 1 5-1 5-1 10-3 4-2 1 2 7v4l-4 11v11l-2 3 2 7h-2v2l-2 1v2h-2l-1 4-2 7-3 2-1 4v6l-2 3h-2l-3 10-4 1 1 4 2 1-1 5-1 2h-2l-2 4-1 10-1 2h-5l-1 4 6 1-3 8-1 2h-2l-2 13-1 3-4 1-1 5 1 2-2 5h-2v7l-1 2h-2v3l-3 2 1 5-4-1 1 8-3 2-1 3 1 7-2 1-1 2-2-1-2 11-1 2-4 1 1 2-4 8-1 10-5 10-9 9-2 6-3 5h-2v7l-7 5-2 8-5-1-1 4h2v2h-3l-2 5-4 6-6 3-4 1-2 5-8 4-7 2v2l-4-2-2-2-3 2-2 7-3 1-3 6-7 3h-4l-1 5-7 3-1 2-6 2-2 4h-2l-1 2-2 2-2 6h-2l-1 4-9 2v2h-2l1 3h-2v2l-15 4-9 4-7 1-4 2-5 1-3 1-8-1-3 2-2 5-7 2h-7v2h3l-1 5-1 3h-6v2l-10 4-3 1-1 4-2 1v-2h-2l-2-4-5 5-5 8-6-1-1 1h-6l-3-2-8-1-1-5-5-1-1-1h-6l-5 3-2 2-4-1v-2l-14 2-8 3-5 1h-13l-3-1-3 1-2-1v-4l4-2-3-2v2l-2 1-11 1-5 3-5-1-8-3-4-2-7-1v2h-6l1-3 5-1 1-2 5 1h16l-1-4-3-1v-2h-2l-1-1-5 2 1-6-8-5-6-3-7 1-4 1-1-7-3 1-9-2-4-2v-2h-3l-2-8h-3l-12 2-4-5-5-3v-2l-5 2h-5l-1-5-3-2-10-2-3-3-4-5-9-4-3-6-5-2-3-5v-3l-7-1v-2h-2l-5-6v-2h-2v-2h-2l-4-7-4-1-1-5h-5v2l-4 1-5-4v-3l-4-2-8-16-7-9v-2l-3-1v-7l1-4-7-2-5-7-3-8-2-4-3-4-2-5 4-1-1-7-6-2-3-5v-2l-3-1-2-4-4-4 2-5-3-10-5-1-3 1-2-2v-3h-3l-1-4-3-1-1-1v-14l-4-4v-7l1-2-3 1 1-6 1-8 2-4v-3h-4l-2 4h-2l-4-8v-8l-5-6 1-9-1-5h-2l-1-5 1-2v-6l-1-3 2-4 1-4h-2v-3l-2-1 1-2h-2l-4-4v-2h-2v-12h-2l-2-10-2-1v-3l-4-1-2-8v-5l-1-3 3-4-1-7 1-3v-6l-2-2 2-10v-6l-4-3-1-9-1-3 3-5 1-5-4-1 1-5 4-2v-5h-3l-1-4 3-12-3-3 1-4h3v-7l-3-6 1-6 2-10-2-1h2l2-5 1-2h2v-2h3v-2h2l-1-10h2l2-7-1-6 2-3 1-8 2-10 4-11v-12l4-6-2-2 1-7 2-3h2l-1-4 3-7 1-7 5-3 2-4 1-8h2l-2-9 2-3v-3l-2-2v-5l-2-1 1-6h3l1-2 1-1h2l-1-3v-3l2-4 2-2 2 1v-7l-1-4-2-1 6-10v-9l5-4h2v-18l5-2v2h3v-2l1-7v-4l3-7 4-2 1-4 4-6 4-3h1l2-6 5-3h2l2-5 5-3h2l1-5 2-3 3-9 5-1 2-6 4-6 5-4 3-3 8-4h2l1-2 6-1 4-3 7-3 2-1v2l12-7 1-2 9-2 5-4 12-3 2-4 6-8 3-3h2v-2l4-2h7l3 2v-2h2v-2l4-1h4v-3h2v-2l3-3h6v-2l3-1 1-2h-2l-1-6h6l1-2 4-1 7-3 4-7-4-1v2l-5 1-5-1-1 2h-3v-2l-7 1v2l-4 1-1-5v-4l6-3v2h2l1-2 5 3 3-5 5-2 3 1 4-1 1-2 5-2 7-3v-2l2-1h6l2 1v2l8-2 3 1 2 3h8l1-2h3v3l6-2 7 1 9 2h4l3-9zm30 90-15 1-4 3-20 5-1 2-8-1 1 3 5 2 2 5 3 2-2 4-1-1-13-1-21-5-3-5-5 1-4 2h-49l-29 3-23 5-17 7-11 8-6 9-2 9 3 13-5 2h-9l-3 1 2 4-9 11-3 9v8l-4 6h-1l-2 13-1 4-1 5v6l-2 5-1 12-5 5-2 1v8l2 2-3 4-1 8-8 4-2 7 1 2h-2v6l-3 4-1 6-1 1-2 17h-2l1 7 3 3-1 3-3-1v2l-3-1v2h-2l2 4-1 5 2 3-5 2-1 10-3 2 1 10-5 5-1 3h-2l-5 13 1 5-7 5-1 5-2 1-1 6 1 5-2 6-2 2 2 3-2-2h-4v8l5 8 5 1-2 9-2 1-5 11 1 3-7-1 2 1 2 7 3 1 4-1-2 4 1 4v8l-1 5 1 3h5l-4 14v9l-2 7 3 7 2 5-3-1-1 5v8l5-1-2 4 5-2 4-4 1-2 5-5 1-6 4-2 5-9 6-10 5-8 4-9 4-6 3-2v-2h2l6-11 1-3 2-1 1-4v-4h2l4-10 2-6h2l2-6h2l2-3v-3h2l6-10h2l2-6 2-1-2 6-10 17-14 25-18 34-12 23-18 41v4l-3 1v3h2v3h8l4-4 8-14 3-4 1 5-5 9-2 10-6 6-9 1-3-6-5 5-3 10 1 9h3l2 4 4 4 1 3 1 2 6 2-2 4-1 3 4 4-1 4h3l2 5 1 7 5 4h-2v7l-4 3 1 6 5-1 3-1-3 3v2h-2l1 5h2l2 5v2h3l2 6 6 7 3 3 1 9 4 9 2 8 5 5 8 11 6 5 5 4 5 6 4 5h2v2h2v5l-2-1-3 9 1 3 3 3 2 3h2v6l4 5 4 3v8l3 7h2v2h2l1 10 2 3h2l1 5h2v2l4 1 5-2v-2l4-2 6-5 2 4 3-4-1 7-5 12v7l4 6 8 5 13 3h6v2l15 1h14l32-2 6-2 17-3 12-3v-2h7l9-3 11-5h4l1 3-2 1-6 5-9 2-15 7-15 6-9 2-8 3-6 1h-9l-1 4 3-1h7v2l2-1 3-1h3v2l11-1v2h25l10-2 10-1 5 1 2-2 11 2h6v-2l14-2 9-1v-2h3v2l7 1h11l9 2 5-2 2-1 8 1 9-3-1-4v-3-2l3-2v-2h3v-2l15-3 1-3 4-2 5-5 3-2v-2h2v-2h2l1-2h6l2 1 2 4-5 2-5 4-3 1v2l-4 2-4 4 7-2 1 1 5 2v3l2-1v-2l10-1 5-4 8-2-2-4h-2v2h-2v2h-5l5-4 1-7-2-1h-6l-3-6 5-1v-2l7-1 12-6 13-11 6-7 4-3v-3h2l1 2 2-1 1 7v3l2-2 2-9h2v-2h3v-2l3-1 3-6-2-2h-3l2-4 1 2 4-1-1-4 4-2 2-6 1-7 2-7 4-2v-2h-4l4-4 3 1 1 3 4-18h2l3-8 1-10 5-8 4-4 2-4-1-6 3-5 3-2-2-5h2v-2l3 1 2-4-3-5 1-7-1-9 1-5 3-3 5-3 2-4 4-5-1-4 4-1 2-2 2-5 1-3 2-1-1-3 2-4 2-1 1 5 2-4 4-5 1-3 4-4v-6l2-3 5-3 1-6 2-5 6-9v-6l4-2 2-6 1-1 1-11 1-4-1-13v-3h-2l-1-4 1-3-6-1-2 4h-2v2h-2v-5l6-7 3-7 6-4 2-6v-10l2-15-3-6-2-5-3-9 4-2-1-7-2-2h-3l-3-15-6-12-6-4h-2v2l-5-1v2l-8-3 1-5h2v-2l2-1-1-3-2-1 2-1 1-4-3-7-2-14h2l-1-3-2-1 1-3h-2v-5l-2-7v-7l-5-1v-5l1-3-1-4-4-4-2-12 1-4-4-16h2l3-4 1-8-2-1-1-9 1-4 2-1-1-3h-3l-1-2h4l-2-6-1-8-3-6h2l-1-4-4-5v-4h-3l-1-3-2-1-1-5-2-6-3-3-3-9-2-8-4-8h-2l-1-8-5-3-3-4h-2l-2-5-2-3h-2l-1-8-3-8h-2l-1-3h-2l-1-3-2 1-1 2-4-2-7 4-5 1-2 1v-2h-2l3-5 2-5 11-10 3-2v-3l-16-5-11-1-7 6-10 15-13 22-15 27h-2l2-4 2-2 1-6 3-5v-6l3-1 6-18 6-16 1-6-5-1v-2l-6 1v-2l4-1 2-4-6 1-4 3h-6l-6-4h-7l-4-2-5 2v2h-4v-4l-17-6-6-4-4-1-4 2-1-4h-3l1 8-6-5h-10l-5-6h-8l-7-2h-6l-9-5h-5z\" fill=\"#DE641A\" />\n<path transform=\"translate(559,470)\" d=\"m0 0 6 1h3l10 3v-2l4-1 10 1 4 2 1 6 5 1-1-3 3 1 1 2 7 3v2h8l1 3-1 3 8 3h5l2-1 9 4 4 4 5 2v2h3l1-2 3 3-3 2 4 2 7 3 5 7-1 5 5 2 4 10 6 3 5 1 4 3 11 1 6 2 5 1 5 2 2 3-5 6-1 5-2 2 5-1 3-1h10l7 3 3 2-1 7-14 20-12 18-10 19-4 10-1 11 6 1 9-3 11-9 20-20 9-11 9-12 12-22 6-12 13-23 10-18 14-21 7-6h7l20 6-1 4-10 8-8 9-10 13-14 20-13 20-16 26-12 21-2 6 9-11 12-16 13-15 9-9 17-13 7-3h10l6 3 3 3-2 6-14 19-13 20-9 17-6 17 1 4 7 2 12-6 10-10 8-7 13-15 9-11 6-5 1 2-6 8-12 13-7 8-9 10-11 11-10 7-13 4-10-1-7-6-1-2v-11l6-16 10-20 9-16 6-11 1-3-8 6-10 9-15 15-10 13-14 19-3 7-10 15-1 4-4 2h-5l-1-3-3-1-1 3h-4l-2 4-4 1h-7v-3l-4 2-2-1v-2h-7l-1 2-7 3-8 2-7 1-5 2-2-4-14 1-10 4-2-1v2l-8 6-8 2-16 8-4 5-10 2-10 4-8 4-3 1h-4v6l-3 3-14 2-1 2-7 2-10 1-13-3 2-2 5 1 1-3-13-2-11-6v-4l-1-8-7-2-3-5v-2h-8v-4l-9-2-4-5-8-4-3-3v-3l-4-2-3-1-4-8h-8l-5-3h-4v2h-5l-7-7-4 1-2-13 6-16 2-2 4-10 4-7v-5l-4 5-7 12-7 14h-2l-3 9-3 10-5 3-7-1-5-5-1-2v-13l6-16 13-22 46-69 9-17 1-8-5-4h-11l-15 6-14 9-14 11-14 12-10 9-8 7-21 21-7 8-16 17-9 11-14 18-12 17-11 17-6 10-1 1-7-1-1-4 5-13 16-36 16-31 24-44 16-27 12-19 6-7 4-2h7l12 4 2 2-1 6-8 8-13 17-18 27-15 24-7 11v3l9-10 7-8 9-10 16-16 8-7 10-9 12-10 17-13 17-11 14-7 13-3h10l7 3 4 2-1-5 3-1 2-3 13-2 6 1 3-2 28 2 1-3 8-4z\" fill=\"#FC8320\" />\n<path transform=\"translate(471,485)\" d=\"m0 0h10l7 3 5 5 2 3v15l-5 15-6 13 1 1 12-12 11-9 18-14 17-11 11-5 12-3h13l7 3 6 7 1 3v10l-5 15-9 17-14 23-17 29-10 17-14 25-9 19-6 15-4 4-7-1-5-5-2-4v-10l6-15 11-21 17-28 17-26 13-20 14-23 4-10v-7l-4-6-2-1h-12l-14 7-16 12-16 13-10 9-8 7-18 18-9 11-13 17-10 15-12 22-6 14-3 10-5 3-7-1-5-5-1-2v-13l6-16 13-22 46-69 9-17 1-8-5-4h-11l-15 6-14 9-14 11-14 12-10 9-8 7-21 21-7 8-16 17-9 11-14 18-12 17-11 17-6 10-1 1-7-1-1-4 5-13 16-36 16-31 24-44 16-27 12-19 6-7 4-2h7l12 4 2 2-1 6-8 8-13 17-18 27-15 24-7 11v3l9-10 7-8 9-10 16-16 8-7 10-9 12-10 17-13 17-11 14-7z\" fill=\"#FFF888\" />\n<path transform=\"translate(509,772)\" d=\"m0 0h26l19 2 14 3 14 5 11 6 10 8 7 7 9 14 5 13 2 11v20l-4 16-8 17-9 12-13 13-10 9-15 9-14 7-27 9-23 5-22 3-27 1-17-1-16-3-10-5-4-5-1-2v-7l5-12 12-22 12-19 2-3-21 3-15 1-1-7 4-3 40-7 7-10 18-27 9-12 11-13 2-1 12 1 3 3-8 11-12 15-8 11-7 10-6 8v1l34-6h3v3l-12 6-16 4-17 3-10 13-12 17-15 22-3 6v7l6 5 7 2h20l27-4 32-8 20-7 20-9 17-9 14-10 10-9 10-10 8-13 4-8 3-13v-8l-2-10-6-12-7-7-10-6-13-6-18-5-22-4h-34l-18 3-23 6-24 7-7 1-5-6v-10l4-5 15-5 31-6 22-3z\" fill=\"#FFF888\" />\n<path transform=\"translate(829,499)\" d=\"m0 0h7l20 6-1 4-10 8-8 9-10 13-14 20-13 20-16 26-12 21-2 6 9-11 12-16 13-15 9-9 17-13 7-3h10l6 3 3 3-2 6-14 19-13 20-9 17-6 17 1 4 7 2 12-6 10-10 8-7 13-15 9-11 6-5 1 2-6 8-12 13-7 8-9 10-11 11-10 7-13 4-10-1-7-6-1-2v-11l6-16 10-20 9-16 6-11 1-3-8 6-10 9-15 15-10 13-14 19-11 16-8 7-7-1-1-3 6-16 8-18 3-10-6 9h-2l-2 5-9 9-7 8-3 3h-2v2l-13 9-11 4-8-1-6-4-3-6v-12l4-14 7-17 13-24 5-9-8 4-13 11-13 13-8 11-13 16-11 18-7 9-6 3h-10l2-6 10-18 6-15 5-10 9-27 2-9v-12l-1-5 7 1 11 6 6 5-1 9-5 14-8 15-5 10h2l2-4 13-16 7-8 13-13 14-10 10-5h10l7 3 3 2-1 7-14 20-12 18-10 19-4 10-1 11 6 1 9-3 11-9 20-20 9-11 9-12 12-22 6-12 13-23 10-18 14-21z\" fill=\"#FFF888\" />\n<path transform=\"translate(709,841)\" d=\"m0 0 10 1 12 5 4 5 2 5v11l-6 16-8 15-11 16-7 10 16-3 9-5 11-9 13-13 1 3-9 11-9 8-11 7-12 4-13 1-8 7-10 9-8 5-9 3h-11l-11-4-6-5-5-10v-11l5-14 8-14 8-11 8-10 15-15 12-9 16-8z\" fill=\"#FFF888\" />\n<path transform=\"translate(580,272)\" d=\"m0 0 10 4 11 7 2 2-1 9-6 16-12 23 5-5 11-14 9-10 12-12 17-12 6-3h12l8 4 1 6-6 9-12 17-12 19-10 21-2 7v5l2 2h9l11-7 18-18 7-8 6-5-2 4-6 9-8 8-7 8-11 10-12 7-7 2-9-1-6-5-2-4v-14l4-13 7-17 13-23 5-10-6 3-16 13-12 12-9 12-12 15-10 16-8 11-2 2-10 2h-4l1-5 14-27 4-9 3-8-12 12-7 8-9 10-8 7-12 9-7 3-11 1-7-2-4-5-2-6 1-8 6-17 8-16 9-17 12-18 5-6 3-2 10 1 12 4v4l-8 8-9 11-9 12-8 13-8 16-4 10v6l5 3 6-1 10-7 15-14 10-11 7-8 9-10 5-12 4-15 1-11-2-3z\" fill=\"#FFF888\" />\n<path transform=\"translate(749,211)\" d=\"m0 0 11 1 16 5-1 4-10 8-8 9-10 13-12 17-14 21-21 35-9 16v3l13-17 7-9 12-14 9-9 14-11 9-5 4-1h8l7 4 1 1v6l-15 20-13 20-9 17-5 13-1 8 8 2 12-6 17-16 9-10 9-11 9-10h2l-1 4-12 14-9 10-12 13-9 9-13 9-9 3h-8l-7-3-5-6v-10l4-12 11-23 6-10 8-16 3-4v-2l-8 6-13 12-12 12-10 13-14 19-8 12-9 10h-9l-1-3 11-28 5-11 1-8 6-8 12-21 10-19 13-23 11-19 10-15 7-8z\" fill=\"#FFF888\" />\n<path transform=\"translate(507,196)\" d=\"m0 0 4 1 2 4 25 6 9 4 6 4 3 4 1 7-4 1-10-5-18-4-7-1-17-1-2 4-10 14-11 16-10 14-14 20-15 24-15 27-14 29-7 14-3 1v-7l6-18 14-29 16-29 12-20 14-23 14-22 10-14h-24l-23 2-27 5-16 6-10 6-6 7-1 7 4 5 2 1v3l-8-1-6-4-5-6-2-10 3-9 6-8 10-7 17-7 23-5 29-3h49z\" fill=\"#FFF888\" />\n<path transform=\"translate(632,290)\" d=\"m0 0h3l-2 5-7 14-9 16-8 20-2 8v14l4 6 6 3 9-1 10-4 13-10 9-9 7-8 7-9 2-4-3 2 2-4 5-4v8l-7 16-9 23v2l9 1-1 3h-2v2l-12 9-5 1-1 3h-7l-3 6-3-1-1-3-2 2-6 1-2-2-3 1 1 4-3-1h-15l-4-2-17-1-2-4 1-4-5 3-4-1v-3l-3-1-1 3h-2l-2 5-8-2v-2h2l1-4 5-5 2-3-1-2h2l1-4h-3l-2-2-4 3-2-1 7-9 13-20 22-28 14-14z\" fill=\"#FC8320\" />\n<path transform=\"translate(626,559)\" d=\"m0 0h6l5 8 1 2v14l-6 12-3 5h5l1 3-24 3-22 4-8 3-10 19-3 10v9l2 5 4 2h8l11-4 11-7 12-9 24-22 6-6h2l-1 4-11 12-18 18-10 8-13 8-7 3h-22l-9-4-6-5-3-6v-10l4-12 8-15 11-13 6-7 11-9 10-8 18-11z\" fill=\"#FFF888\" />\n<path transform=\"translate(958,145)\" d=\"m0 0 5 2 14 14 3 2v2l4 2 8 8 7 8 10 10 9 11 11 13 13 17 12 17 10 15 8 13 11 19 14 27 11 23 13 33 10 30 10 38 7 36v13l-4 2v-3l-5-2-2-11-1-9-3-14-3-12-1-2-1-9-2-3-1-7-6-16-5-14-3-9-2-5-2-8-5-10-2-3-2-8-5-12-4-6-5-12-6-13-9-17-4-5-2-7-2-1v-2h-2l-3-7-4-9-6-10v-2h-2l-6-8-3-5-11-12-7-9v-2l-4-2-9-14-9-11v-2h-2l-10-14v-2l-5-2v-2h-2l-6-9-2-1v-2h-2l-5-5-3-1z\" fill=\"#C54C0F\" />\n<path transform=\"translate(716,856)\" d=\"m0 0h12l3 5v10l-6 16-6 8-16 8-12 7-2 2v7l6 5-1 5-13 12-10 6-3 1h-9l-6-5-2-4v-11l4-12 8-16 8-11 11-12 16-12 15-8z\" fill=\"#ED731D\" />\n<path transform=\"translate(461,496)\" d=\"m0 0h11l6 5-1 8-10 19-13 19-5 7-5-1-2 4-8 4-4 6-5 5-6 7h-2v2l-4 2-3 3-5-1v-2h-2l-2-7-4-2-2-6-5-1 1-4 5-5 6-8 10-10 7-6h2v-2l8-7 4-6-2-1-9 5-9 6-12 12-7 5h-2l-1 3-8 7-18 18v-3l27-27 11-9 12-11 13-10 13-9 14-7z\" fill=\"#FC8320\" />\n<path transform=\"translate(1149,648)\" d=\"m0 0h1v9l-7 41-10 40-8 25-9 25-11 26-16 33-12 22-15 24-11 16-10 14-10 13-9 11-13 15-4 3 3-9h3l2-7 4-5h2v-2h2l2-6 9-10 3-2 3-7h2l2-4 4-4 4-8 5-7 1-4h2v-2h2v-2h2l1-5 5-8 2-5 7-10 7-17 7-15 12-24 3-12 4-10 3-9 3-10 1-2 1-6 3-4 5-14 1-3 3-13 1-6 2-6v-8l4-10 4-19 7-20z\" fill=\"#C64D10\" />\n<path transform=\"translate(758,568)\" d=\"m0 0 5 1 2 2v6h2l-1 5-3 8-1 6-3 5-1 4-6 5-5 8 1 5 2-1-2 4-22 22-10 7-9 2-4-2-1-4 2-10 10-21 7-11 1 3-3 4-1 4 5-2 9-8 11-18 4-7 5-4 5-12z\" fill=\"#FC8320\" />\n<path transform=\"translate(518,478)\" d=\"m0 0 28 2-4 2-6 5 1 3 3 1 3 3-5 4-13 9-17 13-15 13-9 9-1-3 8-18 3-10v-15l-3-6v-5l3-1 2-3 13-2 6 1z\" fill=\"#FC8320\" />\n<path transform=\"translate(572,285)\" d=\"m0 0h1v7h-2l1 4-2 5 1 3 5 1-1 6-5 8-13 14-9 11-12 12-11 9-8 4-6-1-3-3 1-9 8-18 8-13 1 2-10 18-3 8v8l-1 5h7l-2-8 3-9 9-12 8-11 6-7 4-7 4-5h2l2-4 4-4 3-1 4-9 2-1v-2z\" fill=\"#FC8320\" />\n<path transform=\"translate(566,327)\" d=\"m0 0h2l-1 6-4 8-11 23-6 12 10-2 4 1-5 6-2 1 1 3 2 2-2 2 3 2v2h-5l-1 2h-12l-5-1-3 1-1-3-3 1-3 3-4-2-1-7h2l-2-4h2v-2l-3 1-4-2-4-1-2 1-4-1-3 2-3-1-1-2-7-4-1-10 2 4 4 6 7 2 11-1 10-5 10-8 12-11 7-8 10-11z\" fill=\"#FC8320\" />\n<path transform=\"translate(632,290)\" d=\"m0 0h3l-2 5-7 14-9 16-5 2-6 2v-2l-6 1-5 4 1 6 8-2 3 8-1 7-2 7v7l-2 6-1-3-4-1v-2h-2l-2-4v-6l1-3h2l2-10-2 4-4 1-3 1h-3v2l-2 1-5 11-4 1-2-2 1-5 3-5 10-14 7-8 2-1 3-5 6-5h3l2-5 3-6 5-4h2l2-4 4-5z\" fill=\"#ED731D\" />\n<path transform=\"translate(436,193)\" d=\"m0 0h11l3 1 1 5-20 1-6 1-8 1v2l-17 4-17 7-11 8-6 10h-2l-1 12h-2v-9l1-2-4 2-1-5-1-3 2-2h2l3-5h2v-2h2v-2h2v-2l11-8 10-7 12-4h18l9-1z\" fill=\"#D95A19\" />\n<path transform=\"translate(734,795)\" d=\"m0 0h5l5 8 12 23v3l-7-1-6-4-9-10-3-5-5 2-15 8-18 8-5 1v-3l11-6 15-10 18-13z\" fill=\"#FFF888\" />\n<path transform=\"translate(636,516)\" d=\"m0 0 7 1 14 26 3 6-1 1-7-1-6-4-9-10-2-4-5 1-23 11-12 6h-5l5-5 21-13 13-10z\" fill=\"#FFF888\" />\n<path transform=\"translate(623,579)\" d=\"m0 0h5l1 1v9l-4 11-2 1-25 2h-7l6-7 4-4h2v-2l13-8z\" fill=\"#FC8320\" />\n<path transform=\"translate(722,763)\" d=\"m0 0 7 1 17 8 17 11 9 7 4 4-1 3-7-4-10-6-21-8-19-6-2-1 1-5z\" fill=\"#FFF888\" />\n<path transform=\"translate(564,241)\" d=\"m0 0 6 1 4 4v9l-9 10-3 2h-7l-5-5v-8l4-6 6-5z\" fill=\"#FFF888\" />\n<path transform=\"translate(562,689)\" d=\"m0 0h5l-1 6-5 18-8-1-6-4-3-3 1-5 8-7z\" fill=\"#FFF888\" />\n<path transform=\"translate(566,327)\" d=\"m0 0h2l-1 6-4 8-7 15-5 2-2 2h-4l-3 6h-5v-2l-2-1 1-2 4-1 3-7 11-12 7-8z\" fill=\"#ED731D\" />\n<path transform=\"translate(651,331)\" d=\"m0 0h2l-1 9h-2l-2 10-3 6 3 2-10 8-4 2h-9v-1l8-1 1-8-1-2 6-11 8-10z\" fill=\"#FD8421\" />\n<path transform=\"translate(563,475)\" d=\"m0 0 4 3-5 3h-5l3 3v2l-3 2h-3v2l-9 4h-5l-1-3-4-1 1-4 6-5 9-3 10-2z\" fill=\"#EE741D\" />\n<path transform=\"translate(434,882)\" d=\"m0 0 4 1-9 14-9 2-4-2v-2l-4-1-4 1v-4l3-1 2-3 14-4z\" fill=\"#DF651A\" />\n<path transform=\"translate(495,630)\" d=\"m0 0h5l-1 6-6 14-1 3v16l-5-1-5-8v-7l5-8 5-2 1-6h2l-1-4z\" fill=\"#EE741D\" />\n<path transform=\"translate(512,930)\" d=\"m0 0 4 1-1 3h-3v3l-26 7h-18v-2l7-3 7-1 3 2 1-2 2 1 1-3 2 1 1-2 4 1 6-3h2l1-2h4z\" fill=\"#E3691B\" />\n<path transform=\"translate(634,942)\" d=\"m0 0 8 4 6 4 7 2 1 2 3 2-2 3h-2l-1 3-8-2-5-3v-2l-4-2-4-6z\" fill=\"#E2681A\" />\n<path transform=\"translate(559,940)\" d=\"m0 0 3 1-3 3-14 5-5 2h-7v2l-21 5-10 2-4 1-32 2h-14l-15-1v-1h20l24-1 28-4 20-5 24-8z\" fill=\"#F77E1F\" />\n<path transform=\"translate(406,504)\" d=\"m0 0 4 2 3 6 7-2v-2l6-3v3l-13 10-10 8-3 1 1-5 2-3-3-3z\" fill=\"#FC8320\" />\n<path transform=\"translate(715,623)\" d=\"m0 0 3 3-1 5-5 16-1 2 2 1-2 5h-5l-2-7 4-13 6-11z\" fill=\"#ED731D\" />\n<path transform=\"translate(621,298)\" d=\"m0 0 2 1-8 8h-2l-1 4-4 7-6 2-1 3-3 2-2 4-8 8-10 14-4 7h-2l2-5 9-13 9-11 10-13 14-14z\" fill=\"#FD8421\" />\n<path transform=\"translate(438,904)\" d=\"m0 0 5 1-4 11-6 7h-7l3-9 4-1 2-5z\" fill=\"#DF651A\" />\n<path transform=\"translate(503,790)\" d=\"m0 0h34l22 4 21 6 4 3-5-1-25-7-24-3h-20l-19 1 4-2z\" fill=\"#FD8421\" />\n<path transform=\"translate(420,520)\" d=\"m0 0m-1 1m-1 1m-1 1v3l-8 7-4 5-11 8h-2l-1 3-8 7-18 18v-3l27-27 11-9 12-11z\" fill=\"#FD8421\" />\n<path transform=\"translate(631,376)\" d=\"m0 0 3 2 1 7-8 4-7-1v-5l5-5 5-1z\" fill=\"#ED731D\" />\n<path transform=\"translate(677,325)\" d=\"m0 0h1v8l-6 13h-2l-2 5-4 1-1-4 8-11 4-7-4 3 2-4z\" fill=\"#F0761D\" />\n<path transform=\"translate(603,285)\" d=\"m0 0h1v7l-4 13-5 11h3l-2 4-10 13h-2l2-6 9-17 7-19z\" fill=\"#FC8320\" />\n<path transform=\"translate(630,295)\" d=\"m0 0h2l-1 5-10 18-4 7-3-3 2-4h2l1-7h2v-7l5-3z\" fill=\"#FC8320\" />\n<path transform=\"translate(459,940)\" d=\"m0 0h3v2l5 1-1 3-3 1-21 1 3-5 12-1z\" fill=\"#DE641A\" />\n<path transform=\"translate(525,325)\" d=\"m0 0 1 2-10 18-3 8v8l-1 5 6 1-1 2-6-1-3-3 1-9 8-18z\" fill=\"#FD8421\" />\n<path transform=\"translate(407,227)\" d=\"m0 0 3 1-2 4-9 3-3 3-4 2h-3l1-5 7-4z\" fill=\"#DE641A\" />\n<path transform=\"translate(309,639)\" d=\"m0 0 1 2-10 16-8 14-3 2h-8v-3h-2l1-4 4 4h5l6-10z\" fill=\"#F47B1E\" />\n<path transform=\"translate(964 1e3)\" d=\"m0 0 2 1-8 8-11 9-6 4 2-5h2l1-5 9-5 1-2 6-2v-2z\" fill=\"#C95012\" />\n<path transform=\"translate(555,285)\" d=\"m0 0 3 1-1 4-14 14-10 13-6 8v-3l9-13 9-10 7-8 3-3z\" fill=\"#FD8421\" />\n<path transform=\"translate(451,198)\" d=\"m0 0h36v1l-35 1-29 3h-6v-1l10-3h11z\" fill=\"#F98020\" />\n<path transform=\"translate(678,593)\" d=\"m0 0 2 2h-2l-2 6v3h2l-2 4-10 13h-2l2-5 8-16z\" fill=\"#FD8421\" />\n<path transform=\"translate(681,591)\" d=\"m0 0h5v5l-7 8-5 1 2-6 3-6h2z\" fill=\"#EF751D\" />\n<path transform=\"translate(469,217)\" d=\"m0 0h16l-2 5-2 3h-4l-1-3-5-1v-2h-2z\" fill=\"#DE621A\" />\n<path transform=\"translate(752,901)\" d=\"m0 0v3l-3 6-3 1-2 3-5 3-8 6-9 5h-8l4-2 12-5 14-11z\" fill=\"#F3791E\" />\n<path transform=\"translate(758,615)\" d=\"m0 0 1 3-5 12-4 4-4 2 1-4 3-7h2l2-4z\" fill=\"#F2781E\" />\n<path transform=\"translate(936,1028)\" d=\"m0 0 2 1-12 10-11 8-3-1 9-7h2l2-4 3-3z\" fill=\"#CC5312\" />\n<path transform=\"translate(535,923)\" d=\"m0 0 4 1-2 2-7 3-3 2-8 1-2-1v-2l6-1 1-2 3-1 7-1z\" fill=\"#DE641A\" />\n<path transform=\"translate(713,354)\" d=\"m0 0 1 4v10l5 6 6 2 7 1v1h-15l-3-3v-2l-2-2v-15z\" fill=\"#FD8421\" />\n<path transform=\"translate(778,614)\" d=\"m0 0 1 2v2h3l-10 13-3 2 1-5z\" fill=\"#FC8320\" />\n<path transform=\"translate(409,871)\" d=\"m0 0 5 2-1 2-11 4-4 1v-2h-2l1-4h9z\" fill=\"#E36A1B\" />\n<path transform=\"translate(701,928)\" d=\"m0 0 2 1-5 5-1 2h-2v2h-2v2l-7 5-3 3-2-1v-2l9-7 9-9z\" fill=\"#F3791E\" />\n<path transform=\"translate(707,928)\" d=\"m0 0h7l-2 2h-3l1 3-1 3-3 1v-2l-8-2 4-4z\" fill=\"#EE741D\" />\n<path transform=\"translate(345,575)\" d=\"m0 0 4 2-2 4-9 10-1-2 5-10z\" fill=\"#FC8320\" />\n<path transform=\"translate(434,882)\" d=\"m0 0 4 1-5 7-6-1v-2l-2-1 2-3z\" fill=\"#E2651B\" />\n<path transform=\"translate(713,624)\" d=\"m0 0v3l-7 16-1 5 1 6 4 2-3 1-4-2-1-4 2-10 8-16z\" fill=\"#FD8421\" />\n<path transform=\"translate(578,272)\" d=\"m0 0 2 1 1 4 1 2-1 11-4-5-2-4 3-4z\" fill=\"#FD8421\" />\n<path transform=\"translate(896,1057)\" d=\"m0 0 2 1-10 7-10 6v-3l4-4 9-4z\" fill=\"#CB5111\" />\n<path transform=\"translate(408,954)\" d=\"m0 0 4 1 5 2 2 1-2 4-7-1-2-2z\" fill=\"#D75819\" />\n<path transform=\"translate(992,976)\" d=\"m0 0h2l-2 4-15 15h-2v-2h2l2-4 9-9z\" fill=\"#C64B10\" />\n<path transform=\"translate(356,515)\" d=\"m0 0 1 3-8 14-2-4 3-7 4-5z\" fill=\"#E56B1B\" />\n<path transform=\"translate(799,601)\" d=\"m0 0v3l-5 6h-2l-2 5-6 8-3 1 2-5 12-14z\" fill=\"#FD8421\" />\n<path transform=\"translate(688,872)\" d=\"m0 0 2 1-20 20v-3l12-13z\" fill=\"#F87F1F\" />\n<path transform=\"translate(716,856)\" d=\"m0 0h12l3 5v10l-2 6h-1v-18l-1-1-11-1z\" fill=\"#FD8421\" />\n<path transform=\"translate(372,258)\" d=\"m0 0 6 1 4 2v3h-9l-3-5z\" fill=\"#DE641A\" />\n<path transform=\"translate(284,651)\" d=\"m0 0 1 3-2 8h-4l-1-5 5-5z\" fill=\"#DB5C19\" />\n<path transform=\"translate(461,273)\" d=\"m0 0 1 2-14 21-2 1 2-5 12-18z\" fill=\"#FD8421\" />\n<path transform=\"translate(294,663)\" d=\"m0 0 1 2-3 6-3 2h-8v-3h-2l1-4 4 4h5z\" fill=\"#F2781E\" />\n<path transform=\"translate(737,586)\" d=\"m0 0 1 3-7 9-7 11h-2l2-5 12-17z\" fill=\"#FD8421\" />\n<path transform=\"translate(677,325)\" d=\"m0 0h1v8l-2 5-1-2-3 1 2-5h-1l-2 1 2-4z\" fill=\"#FD8623\" />\n<path transform=\"translate(589,109)\" d=\"m0 0 4 1 3 6 3 3-5-2-7-4v-3z\" fill=\"#D75719\" />\n<path transform=\"translate(498,196)\" d=\"m0 0h4l-1 4h-11l-2-3z\" fill=\"#E1631B\" />\n<path transform=\"translate(547,920)\" d=\"m0 0v3l-18 8-2-1 6-4 5-2z\" fill=\"#F37A1E\" />\n<path transform=\"translate(467,944)\" d=\"m0 0h14l-4 2-12 2h-6l4-2z\" fill=\"#F47B1E\" />\n<path transform=\"translate(695,331)\" d=\"m0 0 1 2-1 2 2 1-6 8-2 1 1-5z\" fill=\"#FC8320\" />\n<path transform=\"translate(776,210)\" d=\"m0 0 5 1 1 4-4 3-5-3 3-4z\" fill=\"#D75719\" />\n<path transform=\"translate(559,940)\" d=\"m0 0 3 1-3 3-10 4-4-1h2v-2z\" fill=\"#F3791E\" />\n<path transform=\"translate(559,335)\" d=\"m0 0v3l-7 9h-2l-2 4h-2l2-4z\" fill=\"#FD8421\" />\n<path transform=\"translate(548,916)\" d=\"m0 0 3 2h-2v2l-9 4-1-4 2-1v2l4-4z\" fill=\"#DE641A\" />\n<path transform=\"translate(406,225)\" d=\"m0 0 3 1-2 2-10 4h-3v-2z\" fill=\"#F1771E\" />\n<path transform=\"translate(562,320)\" d=\"m0 0 4 1-1 3-6 4-1-4z\" fill=\"#EE741D\" />\n<path transform=\"translate(556,688)\" d=\"m0 0 4 1-3 1v2l-9 3-2-2 4-2 1-2 1 2 4-1z\" fill=\"#EF751D\" />\n<path transform=\"translate(740,560)\" d=\"m0 0 5 2 2 3-4 1-6-2z\" fill=\"#FD8421\" />\n<path transform=\"translate(495,630)\" d=\"m0 0h5l-1 6-3 4v-4l-2-1z\" fill=\"#F3791E\" />\n<path transform=\"translate(745,290)\" d=\"m0 0 1 3-3 4-4 1-2-2z\" fill=\"#EF751D\" />\n<path transform=\"translate(680,946)\" d=\"m0 0 2 1-2 5-8 1v-3z\" fill=\"#F0761D\" />\n<path transform=\"translate(311,638)\" d=\"m0 0 2 1v5l-7 4 2-5z\" fill=\"#DF651A\" />\n<path transform=\"translate(563,336)\" d=\"m0 0 1 3-7 15-2-3 4-6 3-7z\" fill=\"#FD8421\" />\n<path transform=\"translate(566,327)\" d=\"m0 0h2l-1 6-3 3-2-4z\" fill=\"#FD8421\" />\n<path transform=\"translate(518,931)\" d=\"m0 0h8l-2 2-9 3h-3v-2z\" fill=\"#F37A1E\" />\n<path transform=\"translate(758,615)\" d=\"m0 0 1 3-3 8-1-2-3 1 2-4z\" fill=\"#FD8421\" />\n<path transform=\"translate(710,323)\" d=\"m0 0v3l-3 5h-2l-2 4-2 1 2-5z\" fill=\"#FD8421\" />\n<path transform=\"translate(427,199)\" d=\"m0 0 6 1-2 2-14 1v-1z\" fill=\"#ED741D\" />\n"});

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="shortcut icon"${addAttribute(favIcon, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favIconSvg.src, "href")}><link rel="mask-icon"${addAttribute(favIconSvg.src, "href")} color="#8D46E7"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(appleTouchIcon.src, "href")}><link rel="manifest" href="/site.webmanifest">`;
}, "/root/code/tmd_astro/src/components/Favicons.astro", void 0);

const $$Astro = createAstro("https://tinhmenhdo.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metadata = {} } = Astro2.props;
  const { language, textDirection } = I18N;
  const initialLayout = "header";
  const $$definedVars = defineStyleVars([{ bgImage: `url(${bgImage.src})` }]);
  return renderTemplate`<html${addAttribute(language, "lang")}${addAttribute(textDirection, "dir")}${addAttribute(initialLayout, "data-layout")}${addAttribute($$definedVars, "style")}> <head>${renderComponent($$result, "CommonMeta", $$CommonMeta, {})}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {})}${renderComponent($$result, "Metadata", $$Metadata, { ...metadata })}${renderComponent($$result, "SiteVerification", $$SiteVerification, {})}${renderComponent($$result, "Analytics", $$Analytics, {})}${renderComponent($$result, "ClientRouter", $$ClientRouter, { "fallback": "animate" })}${renderHead()}</head> <body class="min-h-screen bg-background font-sans antialiased overflow-x-hidden"${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "BasicScripts", $$BasicScripts, {})} ${renderComponent($$result, "VersionChecker", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "~/components/common/VersionChecker", "client:component-export": "default" })}  </body> </html>`;
}, "/root/code/tmd_astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, astroAssetsOptimizer as a, findImage as f, getImagesOptimized as g, isUnpicCompatible as i, unpicOptimizer as u };
