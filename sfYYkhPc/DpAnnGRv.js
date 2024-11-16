import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, a as renderComponent, u as unescapeHTML, F as Fragment } from './4CUkstck.js';
import { $ as $$Logo } from './BrvFOQeG.js';
import 'kleur/colors';
import { $ as $$Icon } from './CXYkg3Co.js';
import { e as getHomePermalink, S as SITE, g as getPermalink, b as getBlogPermalink, f as getAsset } from './B3zkKQ2I.js';

const $$Astro$1 = createAstro("https://tinhmenhdo.github.io");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { id = "header", isSticky = false, isDark = false, isFullWidth = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark },
    "top-0 z-40 flex-none mx-auto w-full transition-[opacity] ease-in-out bgInset text-lg"
  ], "class:list")}${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})}> <!-- <div class="absolute inset-0"></div> --> <div${addAttribute([
    "text-default mx-auto bgInsetInner",
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}> <div class="flex items-center w-full justify-center"> ${renderComponent($$result, "Logo", $$Logo, {})} </div> </div> </header>`;
}, "/root/code/tmd_astro/src/components/widgets/Header.astro", void 0);

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], secondaryLinks = [], links = [], footNote = "", theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([
    { dark: theme === "dark" },
    "relative border-t border-gray-200 dark:border-slate-800 not-prose bg-neutral-100"
  ], "class:list")}> <div class="dark:bg-dark absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12"> <div class="col-span-12 lg:col-span-4"> <div class="mb-2"> <a class="inline-block font-bold text-xl"${addAttribute(getHomePermalink(), "href")}>${SITE?.name}</a> </div> <div class="text-sm text-muted flex gap-1"> ${secondaryLinks.map(({ text, href }, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index !== 0 ? " \xB7 " : ""}<a class="text-muted hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out"${addAttribute(href, "href")}>${unescapeHTML(text)}</a> ` })}`)} </div> </div> ${links.map(({ title, links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> <div class="dark:text-gray-300 font-medium mb-2">${title}</div> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-2"> <a class="text-muted hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} </div> <div class="md:flex md:items-center md:justify-between py-6 md:py-8"> ${socialLinks?.length ? renderTemplate`<ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4"> ${socialLinks.map(({ ariaLabel, href, text, icon }) => renderTemplate`<li> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")}> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>` : ""} <div class="text-sm mr-4 dark:text-muted"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> </div> </div> </footer>`;
}, "/root/code/tmd_astro/src/components/widgets/Footer.astro", void 0);

const headerData = {
  links: [
    {
      text: 'Trang chủ',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

const footerData = {
  links: [
    {
      title: 'Hệ thống tool',
      links: [
        { text: 'Tử vi', href: '/tu-vi' },
        { text: 'Tứ trụ', href: '#' },
        { text: 'Kỳ môn độn giáp', href: '#' },
        { text: 'Thái Ất', href: '#' },
        { text: 'Kinh Dịch', href: '#' },
      ],
    },
    {
      title: 'Hệ thống kiến thức',
      links: [
        { text: 'Các bài viết sưu tầm', href: '#' },
        { text: 'Hệ thống sách', href: '#' },
        { text: 'Hệ thống video', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Hỗ trợ chúng tôi', href: '#' },
        { text: 'Thông tin cập nhật tool', href: '#' },
        { text: 'Tài trợ', href: '#' },
      ],
    },
    {
      title: 'Admin',
      links: [
        { text: 'Chúng tôi', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: ``,
};

//<img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
//Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved

export { $$Header as $, $$Footer as a, footerData as f, headerData as h };
