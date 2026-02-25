import { b as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, e as addAttribute, r as renderComponent, d as Fragment } from './uu9o3mPN.js';
import 'piccolore';
import 'clsx';
import { $ as $$Icon } from './BF2MSKEN.js';
import { $ as $$Image, a as $$Tags, b as $$Button } from './CmB4ia-g.js';
import { f as findImage } from './C-2XUs_Y.js';
import { d as getPermalink, j as getFormattedDate } from './D5X8WKes.js';

const $$Astro$3 = createAstro("https://tinhmenhdo.github.io");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Headline;
  const { title = await Astro2.slots.render("default"), subtitle = await Astro2.slots.render("subtitle") } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mx-auto mb-8 max-w-3xl text-center md:mb-16"> <h1 class="leading-tighter font-heading text-4xl font-bold tracking-tighter md:text-5xl">${unescapeHTML(title)}</h1> ${subtitle && renderTemplate`<div class="mx-auto mt-2 text-xl font-medium text-gray-500 md:mt-3 dark:text-slate-400">${unescapeHTML(subtitle)}</div>`} </header>`;
}, "/root/code/tmd_astro/src/components/blog/Headline.astro", void 0);

const $$Astro$2 = createAstro("https://tinhmenhdo.github.io");
const $$ListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { post } = Astro2.props;
  const image = await findImage(post.image);
  const link = getPermalink(post.permalink, "post") ;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`max-w-md mx-auto md:max-w-none grid gap-6 md:gap-8   ${image || post.imageRaw ? "md:grid-cols-2" : ""}`, "class")}> ${(image || post.imageRaw) && (link ? renderTemplate`<a class="group relative block"${addAttribute(link ?? "javascript:void(0)", "href")}> <div class="relative h-0 overflow-hidden rounded pb-[56.25%] shadow-lg md:h-72 md:pb-[75%] lg:pb-[56.25%]"> ${post.imageRaw ? renderTemplate`<img${addAttribute(post.imageRaw, "src")} class="absolute inset-0 mb-6 h-full w-full rounded bg-gray-400 object-cover shadow-lg dark:bg-slate-700"${addAttribute(post.title, "alt")} loading="lazy">` : image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "class": "absolute inset-0 mb-6 h-full w-full rounded bg-gray-400 object-cover shadow-lg dark:bg-slate-700", "widths": [400, 900], "width": 900, "alt": post.title, "aspectRatio": "16:9", "loading": "lazy", "decoding": "async" })}`} </div> </a>` : renderTemplate`<div class="relative h-0 overflow-hidden rounded bg-gray-400 pb-[56.25%] shadow-lg md:h-72 md:pb-[75%] lg:pb-[56.25%] dark:bg-slate-700"> ${post.imageRaw ? renderTemplate`<img${addAttribute(post.imageRaw, "src")} class="absolute inset-0 mb-6 h-full w-full rounded bg-gray-400 object-cover shadow-lg dark:bg-slate-700"${addAttribute(post.title, "alt")} loading="lazy">` : image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "class": "absolute inset-0 mb-6 h-full w-full rounded bg-gray-400 object-cover shadow-lg dark:bg-slate-700", "widths": [400, 900], "width": 900, "alt": post.title, "aspectRatio": "16:9", "loading": "lazy", "decoding": "async" })}`} </div>`)} <div class="mt-2"> <header> <div class="mb-1"> <span class="text-sm"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:clock", "class": "-mt-0.5 inline-block h-3.5 w-3.5 dark:text-gray-400" })} <time${addAttribute(String(post.publishDate), "datetime")} class="inline-block">${getFormattedDate(post.publishDate)}</time> ${post.author && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${" "}
· ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:user", "class": "-mt-0.5 inline-block h-3.5 w-3.5 dark:text-gray-400" })} <span>${post.author.replaceAll("-", " ")}</span> ` })}`} ${post.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${" "}
·${" "}<a class="hover:underline"${addAttribute(getPermalink(post.category.slug, "category"), "href")}> ${post.category.title} </a> ` })}`} </span> </div> <h2 class="font-heading mb-2 text-xl leading-tight font-bold sm:text-2xl dark:text-slate-300"> ${link ? renderTemplate`<a class="hover:text-primary inline-block transition duration-200 ease-in dark:hover:text-blue-700"${addAttribute(link, "href")}> ${post.title} </a>` : post.title} </h2> </header> ${post.excerpt && renderTemplate`<p class="text-muted grow text-lg dark:text-slate-400">${post.excerpt}</p>`} ${post.tags && Array.isArray(post.tags) ? renderTemplate`<footer class="mt-5"> ${renderComponent($$result, "PostTags", $$Tags, { "tags": post.tags })} </footer>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`} </div> </article>`;
}, "/root/code/tmd_astro/src/components/blog/ListItem.astro", void 0);

const $$Astro$1 = createAstro("https://tinhmenhdo.github.io");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$List;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul> ${posts.map((post) => renderTemplate`<li class="mb-12 md:mb-20"> ${renderComponent($$result, "Item", $$ListItem, { "post": post })} </li>`)} </ul>`;
}, "/root/code/tmd_astro/src/components/blog/List.astro", void 0);

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { prevUrl, nextUrl, prevText = "B\xE0i m\u1EDBi h\u01A1n", nextText = "B\xE0i c\u0169 h\u01A1n" } = Astro2.props;
  return renderTemplate`${(prevUrl || nextUrl) && renderTemplate`${maybeRenderHead()}<div class="container flex"><div class="container mx-auto flex flex-row justify-between">${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": `mr-2 flex items-center justify-center px-3 hover:text-orange-500 md:px-3 ${!prevUrl ? "invisible" : ""}`, "href": getPermalink(prevUrl) }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-left", "class": "h-6 w-6" })}<p class="ml-2">${prevText}</p>` })}${renderComponent($$result, "Button", $$Button, { "variant": "tertiary", "class": `flex items-center justify-center px-3 hover:text-orange-500 md:px-3 ${!nextUrl ? "invisible" : ""}`, "href": getPermalink(nextUrl) }, { "default": ($$result2) => renderTemplate`<span class="mr-2">${nextText}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-right", "class": "h-6 w-6" })}` })}</div></div>`}`;
}, "/root/code/tmd_astro/src/components/blog/Pagination.astro", void 0);

export { $$Headline as $, $$List as a, $$Pagination as b };
