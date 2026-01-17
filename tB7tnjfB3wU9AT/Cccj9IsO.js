import slugify from 'limax';
import { clsx } from 'clsx';
import emojiRegex from 'emoji-regex';
import { twMerge } from 'tailwind-merge';

const SITE = {"name":"Tinh Mệnh Đồ","site":"https://tinhmenhdo.github.io","base":"/","trailingSlash":false,"googleSiteVerificationId":"orcPx1I47GSa-cRvY11tUe6iGg2IO_RsPvnA1q95iEM3M_111"};
                    const I18N = {"language":"vi","textDirection":"ltr"};
                    const METADATA = {"title":{"default":"Tinh Mệnh Đồ - Lá số tử vi Khâm Thiên Tứ Hóa, tử vi Việt Nam, xem vận hạn 2024, lập lá số tử vi, Kì Môn, Thái Ất, Kinh Dịch, Lục Hào trọn bộ.","template":"%s — Tinh Mệnh Đồ"},"description":"Lập lá số Tử Vi Việt Nam, xem vận hạn 2024, hệ thống tool hỗ trợ Kì Môn, Thái Ất, Kinh Dịch trọn bộ","openGraph":{"type":"website","site_name":"TinhMenhDo","images":[{"url":"~/assets/images/TinhMenhDoLogo.webp","width":1200,"height":628}]},"twitter":{"handle":"@tinhmenhdo","site":"@tinhmenhdo","cardType":"summary_large_image"}};
                    const APP_BLOG = {"postsPerPage":6,"post":{"permalink":"/%slug%","robots":{"index":true,"follow":true}},"list":{"pathname":"blog","robots":{"follow":true}},"category":{"pathname":"category","robots":{"index":true,"follow":true}},"tag":{"pathname":"tag","robots":{"index":true,"follow":true}}};
                    const UI = {"theme":"light:only"};
                    const ANALYTICS = {"vendors":{"googleAnalytics":{"id":"G-0EKY8C499W","partytown":false}}};

const formatter = new Intl.DateTimeFormat(I18N?.language, {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC"
});
const getFormattedDate = (date) => date ? formatter.format(date) : "";
function trim(str = "", ch) {
  let start = 0;
  let end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
}
function sanitize(text) {
  const em = emojiRegex();
  return text.replace(em, "").replace(/[\uFE0F\u200D]/g, "").replace(/^[^\p{L}\p{N}\s]+/u, "").replace(/[^\p{L}\p{N}\s.,!?;:'"\-–—]+/gu, "").trim();
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const trimSlash = (s) => trim(trim(s, "/"));
function createPath(...params) {
  const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
  return `/${paths}${""}`;
}
const BASE_PATHNAME = SITE.base;
function cleanSlug(text = "") {
  return trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
}
const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink);
function getCanonical(path = "") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(normalizedPath, SITE.site).toString();
  if (url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
}
const getHomePermalink = () => getPermalink("/");
const getBlogPermalink = () => getPermalink(BLOG_BASE);
const definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);
function getPermalink(slug = "", type = "page") {
  let permalink;
  if (slug.startsWith("https://") || slug.startsWith("http://") || slug.startsWith("://") || slug.startsWith("#") || slug.startsWith("javascript:")) {
    return slug;
  }
  switch (type) {
    case "home":
      permalink = getHomePermalink();
      break;
    case "blog":
      permalink = getBlogPermalink();
      break;
    case "asset":
      permalink = getAsset(slug);
      break;
    case "category":
      permalink = createPath(CATEGORY_BASE, trimSlash(slug));
      break;
    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;
    case "post":
      permalink = createPath(trimSlash(slug));
      break;
    case "page":
    default:
      permalink = createPath(slug);
      break;
  }
  return definitivePermalink(permalink);
}
function getAsset(path) {
  return `/${[BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/")}`;
}
function getCategoryUrl(categoryName) {
  const slug = categoryName.toLowerCase().replace(/\s+/g, "-");
  return `${SITE.site}/${slug}`;
}

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

export { ANALYTICS as A, BLOG_BASE as B, CATEGORY_BASE as C, DEFAULT_OUTPUT_FORMAT as D, I18N as I, METADATA as M, POST_PERMALINK_PATTERN as P, SITE as S, TAG_BASE as T, UI as U, VALID_SUPPORTED_FORMATS as V, getPermalink as a, getAsset as b, DEFAULT_HASH_PROPS as c, getHomePermalink as d, cn as e, VALID_INPUT_FORMATS as f, getCanonical as g, cleanSlug as h, APP_BLOG as i, getFormattedDate as j, getBlogPermalink as k, getCategoryUrl as l, sanitize as s, trimSlash as t };
