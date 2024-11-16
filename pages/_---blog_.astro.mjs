import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, e as renderSlot, F as Fragment, u as unescapeHTML } from '../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import merge from 'lodash.merge';
import { $ as $$PageLayout } from '../sfYYkhPc/DJ33LBXk.js';
import { $ as $$Icon } from '../sfYYkhPc/CXYkg3Co.js';
import { $ as $$Image, a as $$Tags, b as $$Button } from '../sfYYkhPc/BPHUF2yy.js';
import { a as getFormattedDate, g as getPermalink, b as getBlogPermalink, I as I18N, c as getCanonical } from '../sfYYkhPc/B3zkKQ2I.js';
import { h as findPostsByIds, i as getRelatedPosts, j as blogPostRobots, k as getStaticPathsBlogPost } from '../sfYYkhPc/D_ghFfRQ.js';
import { f as findImage } from '../sfYYkhPc/m5rBg2M8.js';
import { twMerge } from 'tailwind-merge';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro("https://tinhmenhdo.github.io");
const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const { text, url, class: className = "inline-block" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> <span class="align-super font-bold text-slate-500 dark:text-slate-400">Share:</span> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Twitter Share" data-aw-social-share="twitter"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-x", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Facebook Share" data-aw-social-share="facebook"${addAttribute(url, "data-aw-url")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-facebook", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Linkedin Share" data-aw-social-share="linkedin"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-linkedin", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Whatsapp Share" data-aw-social-share="whatsapp"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:brand-whatsapp", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> <button class="ml-2 rtl:ml-0 rtl:mr-2" title="Email Share" data-aw-social-share="mail"${addAttribute(url, "data-aw-url")}${addAttribute(text, "data-aw-text")}>${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:mail", "class": "w-6 h-6 text-gray-400 dark:text-slate-500 hover:text-black dark:hover:text-slate-300" })} </button> </div>`;
}, "/root/code/tmd_astro/src/components/common/SocialShare.astro", void 0);

const $$Astro$7 = createAstro("https://tinhmenhdo.github.io");
const $$SinglePost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SinglePost;
  const { post, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-16 lg:py-20 mx-auto"> <article> <header${addAttribute(post.image ? "" : "", "class")}> <div class="flex justify-between flex-col sm:flex-row max-w-3xl mx-auto mt-0 mb-2 px-4 sm:px-6 sm:items-center"> <p> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:clock", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <time${addAttribute(String(post.publishDate), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time> ${post.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}
· ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:user", "class": "w-4 h-4 inline-block -mt-0.5 dark:text-gray-400" })} <span class="inline-block">${post.author}</span> ` })}`} ${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}
·${" "}<a class="hover:underline inline-block"${addAttribute(getPermalink(post.category.slug, "category"), "href")}> ${post.category.title} </a> ` })}`} ${post.readingTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&nbsp;· <span>${post.readingTime}</span> min read
` })}`} </p> </div> <h1 class="px-4 sm:px-6 max-w-3xl mx-auto text-4xl md:text-5xl font-bold leading-tighter tracking-tighter font-heading"> ${post.title} </h1> <p class="max-w-3xl mx-auto mt-4 mb-8 px-4 sm:px-6 text-xl md:text-2xl text-muted dark:text-slate-400 text-justify"> ${post.excerpt} </p> ${post.image ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": post.image, "class": "max-w-full lg:max-w-[900px] mx-auto mb-6 sm:rounded-md bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "sizes": "(max-width: 900px) 400px, 900px", "alt": post?.excerpt || "", "width": 900, "height": 506, "loading": "eager", "decoding": "async" })}` : renderTemplate`<div class="max-w-3xl mx-auto px-4 sm:px-6"> <div class="border-t dark:border-slate-700"></div> </div>`} </header> <div class="mx-auto px-6 sm:px-6 max-w-3xl prose prose-md lg:prose-xl dark:prose-invert dark:prose-headings:text-slate-300 prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-primary dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8 prose-headings:scroll-mt-[80px] prose-li:my-0"> ${renderSlot($$result, $$slots["default"])} </div> <div class="mx-auto px-6 sm:px-6 max-w-3xl mt-8 flex justify-between flex-col sm:flex-row"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags, "class": "mr-5 rtl:mr-0 rtl:ml-5" })} ${renderComponent($$result, "SocialShare", $$SocialShare, { "url": url, "text": post.title, "class": "mt-5 sm:mt-1 align-middle text-gray-500 dark:text-slate-600" })} </div> </article> </section>`;
}, "/root/code/tmd_astro/src/components/blog/SinglePost.astro", void 0);

const $$ToBlogLink = createComponent(($$result, $$props, $$slots) => {
  const { textDirection } = I18N;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 sm:px-6 max-w-3xl pt-8 md:pt-4 pb-12 md:pb-20"> ${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": "px-3 md:px-3", "href": getBlogPermalink() }, { "default": ($$result2) => renderTemplate`${textDirection === "rtl" ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}` : renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "w-5 h-5 mr-1 -ml-1.5 rtl:-mr-1.5 rtl:ml-1" })}`} Back to Blog
` })} </div>`;
}, "/root/code/tmd_astro/src/components/blog/ToBlogLink.astro", void 0);

const $$Astro$6 = createAstro("https://tinhmenhdo.github.io");
const $$GridItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const link = getPermalink(post.permalink, "post") ;
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> ${image && (link ? renderTemplate`<a${addAttribute(link, "href")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "layout": "cover", "loading": "lazy", "decoding": "async" })} </a>` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": post.title, "aspectRatio": "16:9", "layout": "cover", "loading": "lazy", "decoding": "async" })}`)} </div> <h3 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300"> ${link ? renderTemplate`<a class="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"${addAttribute(link, "href")}> ${post.title} </a>` : post.title} </h3> <p class="text-muted dark:text-slate-400 text-lg">${post.excerpt}</p> </article>`;
}, "/root/code/tmd_astro/src/components/blog/GridItem.astro", void 0);

const $$Astro$5 = createAstro("https://tinhmenhdo.github.io");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Grid;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { "post": post })}`)} </div>`;
}, "/root/code/tmd_astro/src/components/blog/Grid.astro", void 0);

const $$Astro$4 = createAstro("https://tinhmenhdo.github.io");
const $$Background = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Background;
  const { isDark = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["absolute inset-0", { "bg-dark dark:bg-transparent": isDark }], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/root/code/tmd_astro/src/components/ui/Background.astro", void 0);

const $$Astro$3 = createAstro("https://tinhmenhdo.github.io");
const $$WidgetWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WidgetWrapper;
  const { id, isDark = false, containerClass = "", bg, as = "section" } = Astro2.props;
  const WrapperTag = as;
  return renderTemplate`${renderComponent($$result, "WrapperTag", WrapperTag, { "class": "relative not-prose scroll-mt-[72px]", ...id ? { id } : {} }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true"> ${renderSlot($$result2, $$slots["bg"], renderTemplate` ${bg ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(bg)}` })}` : renderTemplate`${renderComponent($$result2, "Background", $$Background, { "isDark": isDark })}`} `)} </div> <div${addAttribute([
    twMerge("relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default", containerClass),
    { dark: isDark }
  ], "class:list")}> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/root/code/tmd_astro/src/components/ui/WidgetWrapper.astro", void 0);

const $$Astro$2 = createAstro("https://tinhmenhdo.github.io");
const $$BlogHighlightedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogHighlightedPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    postIds = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findPostsByIds(postIds) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`<a class="text-muted dark:text-slate-400 hover:text-primary transition ease-in duration-200 block mb-6 lg:mb-0"${addAttribute(linkUrl, "href")}>${linkText} »
</a>`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "/root/code/tmd_astro/src/components/widgets/BlogHighlightedPosts.astro", void 0);

const $$Astro$1 = createAstro("https://tinhmenhdo.github.io");
const $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { post } = Astro2.props;
  const relatedPosts = post.tags ? await getRelatedPosts(post, 4) : [];
  return renderTemplate`${renderTemplate`${renderComponent($$result, "BlogHighlightedPosts", $$BlogHighlightedPosts, { "classes": { container: "pt-0 lg:pt-0 md:pt-0" }, "title": "Related Posts", "linkText": "View All Posts", "linkUrl": getBlogPermalink(), "postIds": relatedPosts.map((post2) => post2.id) })}` }`;
}, "/root/code/tmd_astro/src/components/blog/RelatedPosts.astro", void 0);

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const prerender = true;
const getStaticPaths = async () => {
  return await getStaticPathsBlogPost();
};
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { post } = Astro2.props;
  const url = getCanonical(getPermalink(post.permalink, "post"));
  const image = await findImage(post.image);
  const metadata = merge(
    {
      title: post.title,
      description: post.excerpt,
      robots: {
        index: blogPostRobots?.index,
        follow: blogPostRobots?.follow
      },
      openGraph: {
        type: "article",
        ...image ? { images: [{ url: image, width: image?.width, height: image?.height }] } : {}
      }
    },
    { ...post?.metadata ? { ...post.metadata, canonical: post.metadata?.canonical || url } : {} }
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SinglePost", $$SinglePost, { "post": { ...post, image }, "url": url }, { "default": ($$result3) => renderTemplate`${post.Content ? renderTemplate`${renderComponent($$result3, "post.Content", post.Content, {})}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(post.content || "")}` })}`}` })} ${renderComponent($$result2, "ToBlogLink", $$ToBlogLink, {})} ${renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "post": post })} ` })}`;
}, "/root/code/tmd_astro/src/pages/[...blog]/index.astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/[...blog]/index.astro";
const $$url = "/[...blog]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
