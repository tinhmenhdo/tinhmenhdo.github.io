import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML, m as maybeRenderHead, b as addAttribute, F as Fragment, _ as __astro_tag_component__, n as createVNode } from './4CUkstck.js';
import { $ as $$Image } from './BCzj0W3d.js';
import './BrvFOQeG.js';
import 'kleur/colors';
/* empty css         */
/* empty css         */
/* empty css         */
import { parseHTML } from 'linkedom';
/* empty css         */
import 'clsx';
import './l0sNRNKZ.js';

const $$Astro$3 = createAstro("https://tinhmenhdo.github.io");
const $$Tweet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tweet;
  const { id, theme = "light" } = Astro2.props;
  async function fetchTweet(id2, theme2 = "light") {
    try {
      const oembedUrl = new URL("https://publish.twitter.com/oembed");
      oembedUrl.searchParams.set("url", id2);
      oembedUrl.searchParams.set("omit_script", "true");
      oembedUrl.searchParams.set("dnt", "true");
      oembedUrl.searchParams.set("theme", theme2);
      return await fetch(oembedUrl).then((res) => res.json());
    } catch (e) {
      console.error(
        `[error]  astro-embed
         ${e.status} - ${e.statusText}: Failed to fetch tweet ${id2}`
      );
    }
  }
  const tweet = await fetchTweet(id, theme);
  return renderTemplate`${tweet && renderTemplate`${renderComponent($$result, "astro-embed-tweet", "astro-embed-tweet", {}, { "default": () => renderTemplate`${unescapeHTML(tweet.html)}` })}`}`;
}, "/root/code/tmd_astro/node_modules/@astro-community/astro-embed-twitter/Tweet.astro", void 0);

const urlPattern$1 = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher$1(url) {
  const match = url.match(urlPattern$1);
  return match?.[3];
}

const $$Astro$2 = createAstro("https://tinhmenhdo.github.io");
const $$YouTube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$YouTube;
  const {
    id,
    poster,
    posterQuality = "default",
    title,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^[A-Za-z0-9-_]+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher$1(idOrUrl);
  }
  const videoid = extractID(id);
  const posterFile = {
    max: "maxresdefault",
    high: "sddefault",
    default: "hqdefault",
    low: "default"
  }[posterQuality] || "hqdefault";
  const posterURL = poster || `https://i.ytimg.com/vi/${videoid}/${posterFile}.jpg`;
  const href = `https://youtube.com/watch?v=${videoid}`;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": videoid, "title": title, "data-title": title, ...attrs, "style": `background-image: url('${posterURL}');` }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(href, "href")} class="lty-playbtn"> <span class="lyt-visually-hidden">${attrs.playlabel}</span> </a> ` })}  `;
}, "/root/code/tmd_astro/node_modules/@astro-community/astro-embed-youtube/YouTube.astro", void 0);

class LRU extends Map {
  constructor(maxSize) {
    super();
    this.maxSize = maxSize;
  }
  get(key) {
    const value = super.get(key);
    if (value) this.#touch(key, value);
    return value;
  }
  set(key, value) {
    this.#touch(key, value);
    if (this.size > this.maxSize) this.delete(this.keys().next().value);
    return this;
  }
  #touch(key, value) {
    this.delete(key);
    super.set(key, value);
  }
}
const formatError = (...lines) => lines.join("\n         ");
const safeGet = makeSafeGetter((res) => res.json());
const safeGetDOM = makeSafeGetter(
  async (res) => parseHTML(await res.text()).document
);
function makeSafeGetter(handleResponse, { cacheSize = 1e3 } = {}) {
  const cache = new LRU(cacheSize);
  return async function safeGet2(url) {
    try {
      const cached = cache.get(url);
      if (cached) return cached;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(
          formatError(
            `Failed to fetch ${url}`,
            `Error ${response.status}: ${response.statusText}`
          )
        );
      const result = await handleResponse(response);
      cache.set(url, result);
      return result;
    } catch (e) {
      console.error(formatError(`[error]  astro-embed`, e?.message ?? e));
      return void 0;
    }
  };
}

const urlPattern = /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:vimeo\.com)\/(\d{1,20})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;
function matcher(url) {
  const match = url.match(urlPattern);
  return match?.[3];
}

const $$Astro$1 = createAstro("https://tinhmenhdo.github.io");
const $$Vimeo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Vimeo;
  const {
    id,
    poster,
    posterQuality = "default",
    params = "",
    playlabel = "Play",
    style,
    ...attrs
  } = Astro2.props;
  const idRegExp = /^\d+$/;
  function extractID(idOrUrl) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return matcher(idOrUrl);
  }
  const videoid = extractID(id);
  let posterURL = poster;
  if (!posterURL) {
    const data = await safeGet(`https://vimeo.com/api/v2/video/${videoid}.json`);
    if (data) {
      const resolution = { max: 1280, high: 640, default: 480, low: 120 }[posterQuality] || 480;
      const { thumbnail_large } = data?.[0] || {};
      if (thumbnail_large.endsWith("d_640")) {
        posterURL = thumbnail_large.slice(0, -3) + resolution;
      } else {
        posterURL = thumbnail_large;
      }
    }
  }
  let [searchString, t] = params.split("#t=");
  const searchParams = new URLSearchParams(searchString);
  if (!t) t = searchParams.get("t");
  searchParams.append("autoplay", "1");
  if (!searchParams.has("dnt")) searchParams.append("dnt", "1");
  const color = searchParams.get("color");
  const styles = [];
  if (style) styles.push(style);
  if (color) styles.push(`--ltv-color: #${color}`);
  if (posterURL) styles.push(`background-image: url('${posterURL}')`);
  return renderTemplate`${renderComponent($$result, "lite-vimeo", "lite-vimeo", { "data-id": videoid, "data-t": t, "data-params": searchParams.toString(), "style": styles.join(";"), ...attrs }, { "default": () => renderTemplate` ${maybeRenderHead()}<a class="ltv-playbtn"${addAttribute(`https://vimeo.com/${videoid}`, "href")}${addAttribute(playlabel, "aria-label")}></a> ` })} `;
}, "/root/code/tmd_astro/node_modules/@astro-community/astro-embed-vimeo/Vimeo.astro", void 0);

const getContent = (el) => el?.getAttribute("content");
const urlOrNull = (url) => url?.slice(0, 8) === "https://" ? url : null;
async function parseOpenGraph(pageUrl) {
  const html = await safeGetDOM(pageUrl);
  if (!html) return;
  const getMetaProperty = (prop) => getContent(html.querySelector(`meta[property=${JSON.stringify(prop)}]`));
  const getMetaName = (name) => getContent(html.querySelector(`meta[name=${JSON.stringify(name)}]`));
  const title = getMetaProperty("og:title") || html.querySelector("title")?.textContent;
  const description = getMetaProperty("og:description") || getMetaName("description");
  const image = urlOrNull(
    getMetaProperty("og:image:secure_url") || getMetaProperty("og:image:url") || getMetaProperty("og:image")
  );
  const imageAlt = getMetaProperty("og:image:alt");
  const video = urlOrNull(
    getMetaProperty("og:video:secure_url") || getMetaProperty("og:video:url") || getMetaProperty("og:video")
  );
  const videoType = getMetaProperty("og:video:type");
  const url = urlOrNull(
    getMetaProperty("og:url") || html.querySelector("link[rel='canonical']")?.getAttribute("href")
  ) || pageUrl;
  return { title, description, image, imageAlt, url, video, videoType };
}

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$LinkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkPreview;
  const { id, hideMedia = false } = Astro2.props;
  const meta = await parseOpenGraph(id);
  const domain = meta?.url ? new URL(meta.url).hostname.replace("www.", "") : "";
  return renderTemplate`${meta && meta.title ? renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "link-preview",
    {
      "link-preview--has-video": !hideMedia && meta.video && meta.videoType,
      "link-preview--no-media": hideMedia || !(meta.video && meta.videoType || meta.image)
    }
  ], "class:list")} data-astro-cid-ztfdmrby><div class="link-preview__content" data-astro-cid-ztfdmrby><header data-astro-cid-ztfdmrby><a class="link-preview__title"${addAttribute(id, "href")} data-astro-cid-ztfdmrby>${meta.title}</a>${" "}${domain && renderTemplate`<small class="link-preview__domain" data-astro-cid-ztfdmrby>${domain}</small>`}</header><small class="link-preview__description" data-astro-cid-ztfdmrby>${meta.description}</small></div>${hideMedia ? null : meta.video && meta.videoType ? renderTemplate`<video controls preload="metadata" width="1200" height="630" data-astro-cid-ztfdmrby><source${addAttribute(meta.video, "src")}${addAttribute(meta.videoType, "type")} data-astro-cid-ztfdmrby></video>` : meta.image ? renderTemplate`<img${addAttribute(meta.image, "src")}${addAttribute(meta.imageAlt || "", "alt")} width="1200" height="630" data-astro-cid-ztfdmrby>` : null}</article>` : renderTemplate`<div class="link-preview link-preview--no-metadata" data-astro-cid-ztfdmrby><a${addAttribute(id, "href")} data-astro-cid-ztfdmrby>${id}</a></div>`}`;
}, "/root/code/tmd_astro/node_modules/@astro-community/astro-embed-link-preview/LinkPreview.astro", void 0);

const frontmatter = {
  "publishDate": "2023-01-02T00:00:00.000Z",
  "title": "Tìm Hiểu Về Tử Vi và Kinh Dịch",
  "excerpt": "Khám phá những kiến thức cơ bản về Tử Vi và Kinh Dịch, hai môn học huyền bí trong văn hóa phương Đông.",
  "tags": ["tử vi", "kinh dịch", "văn hóa á đông"],
  "readingTime": 2
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "tổng-quan-về-tử-vi",
    "text": "Tổng Quan Về Tử Vi"
  }, {
    "depth": 2,
    "slug": "các-khái-niệm-cơ-bản-trong-tử-vi",
    "text": "Các Khái Niệm Cơ Bản Trong Tử Vi"
  }, {
    "depth": 3,
    "slug": "thập-can-và-thập-nhị-chi",
    "text": "Thập Can và Thập Nhị Chi"
  }, {
    "depth": 2,
    "slug": "ví-dụ-về-cách-tính-mệnh",
    "text": "Ví Dụ Về Cách Tính Mệnh"
  }, {
    "depth": 2,
    "slug": "kinh-dịch-và-các-quẻ",
    "text": "Kinh Dịch Và Các Quẻ"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Tử Vi và Kinh Dịch là hai môn học cổ xưa của phương Đông, đã tồn tại và phát triển qua hàng nghìn năm lịch sử. Những môn học này không chỉ là công cụ bói toán đơn thuần mà còn chứa đựng triết lý nhân sinh sâu sắc của người xưa."
    }), "\n", createVNode(_components.h2, {
      id: "tổng-quan-về-tử-vi",
      children: [createVNode("a", {
        name: "Headings"
      }), "Tổng Quan Về Tử Vi"]
    }), "\n", createVNode(_components.p, {
      children: "Tử Vi là một môn khoa học cổ xưa nghiên cứu về vận mệnh con người dựa trên thời gian sinh (năm, tháng, ngày, giờ) theo âm lịch. Môn học này sử dụng các sao, cung và các mối quan hệ giữa chúng để luận đoán về cuộc đời một người."
    }), "\n", createVNode(_components.h2, {
      id: "các-khái-niệm-cơ-bản-trong-tử-vi",
      children: "Các Khái Niệm Cơ Bản Trong Tử Vi"
    }), "\n", createVNode(_components.p, {
      children: "Trong Tử Vi có nhiều khái niệm quan trọng cần nắm vững như Thập Can, Thập Nhị Chi, các cung mệnh, các sao chính tinh và phụ tinh. Mỗi yếu tố đều mang những ý nghĩa riêng và tác động đến vận mệnh con người."
    }), "\n", createVNode(_components.h3, {
      id: "thập-can-và-thập-nhị-chi",
      children: "Thập Can và Thập Nhị Chi"
    }), "\n", createVNode(_components.p, {
      children: "Thập Can bao gồm: Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm, Quý\nThập Nhị Chi gồm: Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi"
    }), "\n", createVNode(_components.h2, {
      id: "ví-dụ-về-cách-tính-mệnh",
      children: [createVNode("a", {
        name: "Code"
      }), "Ví Dụ Về Cách Tính Mệnh"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "python",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "def"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " tinh_menh"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(nam_sinh, thang_sinh, ngay_sinh, gio_sinh):"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # Tính can chi năm sinh"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    can "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (nam_sinh "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 10"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    chi "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (nam_sinh "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 12"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6A737D"
            },
            children: "    # Xác định cung mệnh"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    cung_menh "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " (nam_sinh "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " thang_sinh "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " ngay_sinh "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " gio_sinh) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "%"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 8"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    return"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " cung_menh"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "kinh-dịch-và-các-quẻ",
      children: "Kinh Dịch Và Các Quẻ"
    }), "\n", createVNode(_components.p, {
      children: "Kinh Dịch bao gồm 64 quẻ, mỗi quẻ là sự kết hợp của 6 hào âm dương. Mỗi quẻ đều mang những ý nghĩa và lời giải đoán riêng về các khía cạnh của cuộc sống."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "https://placehold.co/600x400/000000/FFFFFF/png",
        alt: "Bát Quái Đồ",
        loading: "lazy"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Bát quái là nền tảng của Kinh Dịch, bao gồm 8 quẻ đơn: Càn, Khảm, Cấn, Chấn, Tốn, Ly, Khôn, Đoài"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/post/tu-vi-kinh-dich-tong-quan-va-cach-tinh-menh.mdx";
const file = "/root/code/tmd_astro/src/content/post/tu-vi-kinh-dich-tong-quan-va-cach-tinh-menh.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/root/code/tmd_astro/src/content/post/tu-vi-kinh-dich-tong-quan-va-cach-tinh-menh.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
