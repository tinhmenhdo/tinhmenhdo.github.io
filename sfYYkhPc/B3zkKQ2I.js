import slugify from 'limax';

const SITE = {"name":"Tinh Mệnh Đồ","site":"https://tinhmenhdo.github.io","base":"/","trailingSlash":false,"googleSiteVerificationId":"orcPx1I47GSa-cRvY11tUe6iGg2IO_RsPvnA1q95iEM3M_111"};
                    const I18N = {"language":"vi","textDirection":"ltr"};
                    const METADATA = {"title":{"default":"Tinh Mệnh Đồ - Lá số tử vi Khâm Thiên Tứ Hóa, tử vi Việt Nam, xem vận hạn 2024, lập lá số tử vi, Kì Môn, Thái Ất, Kinh Dịch, Lục Hào trọn bộ.","template":"%s — Tinh Mệnh Đồ"},"description":"Lập lá số Tử Vi Việt Nam, xem vận hạn 2024, hệ thống tool hỗ trợ Kì Môn, Thái Ất, Kinh Dịch trọn bộ","robots":{"index":false,"follow":false},"openGraph":{"type":"website","site_name":"TinhMenhDo","images":[{"url":"~/assets/images/default.png","width":1200,"height":628}]},"twitter":{"handle":"@onwidget","site":"@onwidget","cardType":"summary_large_image"}};
                    const APP_BLOG = {"isEnabled":true,"postsPerPage":6,"isRelatedPostsEnabled":true,"relatedPostsCount":4,"post":{"isEnabled":true,"permalink":"/%slug%","robots":{"index":false,"follow":true}},"list":{"isEnabled":true,"pathname":"blog","robots":{"index":false,"follow":true}},"category":{"isEnabled":false,"pathname":"category","robots":{"index":false,"follow":true}},"tag":{"isEnabled":true,"pathname":"tag","robots":{"index":false,"follow":true}}};
                    const UI = {"theme":"light"};

const formatter = new Intl.DateTimeFormat(I18N?.language, {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC"
});
const getFormattedDate = (date) => date ? formatter.format(date) : "";
const trim = (str = "", ch) => {
  let start = 0, end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, "/"));
const createPath = (...params) => {
  const paths = params.map((el) => trimSlash(el)).filter((el) => !!el).join("/");
  return "/" + paths + ("");
};
const BASE_PATHNAME = SITE.base;
const cleanSlug = (text = "") => trimSlash(text).split("/").map((slug) => slugify(slug)).join("/");
const BLOG_BASE = cleanSlug(APP_BLOG?.list?.pathname);
const CATEGORY_BASE = cleanSlug(APP_BLOG?.category?.pathname);
const TAG_BASE = cleanSlug(APP_BLOG?.tag?.pathname) || "tag";
const POST_PERMALINK_PATTERN = trimSlash(APP_BLOG?.post?.permalink);
const getCanonical = (path = "") => {
  const url = String(new URL(path, SITE.site));
  if (path && url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
};
const getPermalink = (slug = "", type = "page") => {
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
};
const getHomePermalink = () => getPermalink("/");
const getBlogPermalink = () => getPermalink(BLOG_BASE);
const getAsset = (path) => "/" + [BASE_PATHNAME, path].map((el) => trimSlash(el)).filter((el) => !!el).join("/");
const definitivePermalink = (permalink) => createPath(BASE_PATHNAME, permalink);

export { APP_BLOG as A, BLOG_BASE as B, I18N as I, METADATA as M, POST_PERMALINK_PATTERN as P, SITE as S, TAG_BASE as T, UI as U, getFormattedDate as a, getBlogPermalink as b, getCanonical as c, cleanSlug as d, getHomePermalink as e, getAsset as f, getPermalink as g, trimSlash as t };
