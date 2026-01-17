import { d as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, e as Fragment$1, a as renderTemplate, b as addAttribute, u as unescapeHTML, g as renderSlot, h as renderScript } from './Cf7UXZdW.js';
import 'piccolore';
import * as LucideIcons from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { jsx, Fragment } from 'react/jsx-runtime';
import { S as SITE, d as getHomePermalink, b as getAsset, a as getPermalink, e as cn } from './Cccj9IsO.js';
import { $ as $$Layout } from './CPcBawhG.js';

function LucideIconCp({ name, ...props }) {
  if (LucideIcons[name] === void 0) return /* @__PURE__ */ jsx(Fragment, {});
  const IconComponent = LucideIcons[name] || LucideIcons.Home;
  return /* @__PURE__ */ jsx(IconComponent, { ...props });
}

const $$Astro$2 = createAstro("https://tinhmenhdo.github.io");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sidebar;
  return renderTemplate`${maybeRenderHead()}<header class="relative z-40 flex h-12 w-full items-center bg-[var(--sidebar-bg)] px-4 shadow-[0_4px_16px_rgba(0,0,0,0.25),_0_2px_4px_rgba(0,0,0,0.15)]"> <div class="bgInset absolute top-0 left-0 z-[-1] h-full w-full"> <div class="bgInsetInner h-full! w-full"></div> </div> <button id="mobile-menu-toggle" class="text-[hsl(var(--sidebar-fg))]"> ${renderComponent($$result, "Menu", Menu, { "className": "h-6 w-6" })} </button> <div class="flex flex-1 justify-center"> <!-- <a href='/' title='Tinh Mệnh Đồ - Công cụ lấy lá số nhanh, chuẩn, hàng đầu!'>
      <img src={logo.src} alt='Tinh Mệnh Đồ - Công cụ lấy lá số nhanh, chuẩn, hàng đầu' class='h-8' />
    </a> --> <div class="flex flex-col items-center justify-center"> ${Astro2.url.pathname !== "/" && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate` <a class="text-[17px] leading-[1.25] font-[600] text-[#ffd641d9] transition-all hover:text-[#ffd641]" href="/" title="Tinh Mệnh Đồ - Công cụ lấy lá số nhanh, chuẩn, hàng đầu!">
Tinh Mệnh Đồ
</a> <div class="font-weight-[400] text-[.625rem] leading-none font-normal text-[#ffffff] opacity-55">
Hành trình khám phá bản thân và vũ trụ
</div> ` })}`} </div> </div> </header>`;
}, "/root/code/tmd_astro/src/components/Sidebar.astro", void 0);

const GEMINI_AI_LINKS = {
  GIEO_QUE: "https://gemini.google.com/gem/cd8dcc81bacd?usp=TinhMenhDo.com",
  //'https://gemini.google.com/gem/2f1319c3da02?usp=TinhMenhDo.com',
  TU_VI_BAT_TU: "https://gemini.google.com/gem/46f94da81b49?usp=TinhMenhDo.com"
  //'https://gemini.google.com/gem/39959fcd60c2?usp=TinhMenhDo.com'
};
const VERSION_HORO = "2026.1.11";

const $$Astro$1 = createAstro("https://tinhmenhdo.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], links = [], theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "not-prose relative border-t border-gray-200 dark:border-slate-800"], "class:list")}> <div class="dark:bg-dark pointer-events-none absolute inset-0" aria-hidden="true"></div> <div class="mx-auto w-full"> <div class="px-6 py-8 xl:px-8"> <div class="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"> ${links.map(({ title, items }) => renderTemplate`<div class="mb-6 break-inside-avoid"> <h2 class="mb-3 text-sm font-semibold text-gray-900 dark:text-white">${title}</h2> ${items && Array.isArray(items) && items.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2"> ${items.map(({ title: text, href, ariaLabel }) => renderTemplate`<a class="intersect intersect-once inline-block rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700 transition-all duration-200 hover:border-orange-300 hover:bg-orange-100 hover:text-orange-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-orange-500 dark:hover:bg-orange-900/20 dark:hover:text-orange-400"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")} target="_blank"${addAttribute(text, "title")}> ${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a>`)} </div>`} </div>`)} <!-- <div>
        <h2 class='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>Tinh Mệnh Đồ</h2>
        <ul class='font-medium text-gray-500 dark:text-gray-400'>
          {
            secondaryLinks.map(({ title: text, href }) => (
              <li class='mb-4'>
                <a
                  class='transition duration-150 ease-in-out text-muted hover:text-gray-700 dark:text-gray-400 hover:underline'
                  href={href}
                  set:html={text}
                />
              </li>
            ))
          }
        </ul>
      </div> --> </div> </div> <div class="bg-gray-100 px-4 py-8 md:py-2 dark:bg-gray-700"> <div class="mx-auto w-full md:flex md:items-center md:justify-between xl:w-[1400px]"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-300">© 2023 <a${addAttribute(getHomePermalink(), "href")}>${SITE?.name}</a> - <a href="/phien-ban-cap-nhat">Phiên bản ${VERSION_HORO}</a> </span> <div class="mt-4 flex space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse"> ${socialLinks?.length ? renderTemplate`<ul class="mb-4 -ml-2 flex md:order-1 md:mb-0 md:ml-4 rtl:-mr-2 rtl:ml-0 md:rtl:mr-4 md:rtl:ml-0"> ${socialLinks.map(({ ariaLabel, href, title: text, icon }) => {
    return renderTemplate`<li> <a class="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 focus:outline-hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")} target="_blank"${addAttribute(text, "title")}> ${renderComponent($$result, "LucideIconCp", LucideIconCp, { "name": icon, "className": "w-5 h-5" })} ${renderComponent($$result, "Fragment", Fragment$1, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`;
  })} </ul>` : ""} </div> </div> </div> </div> </footer>`;
}, "/root/code/tmd_astro/src/components/widgets/Footer.astro", void 0);

const headerData = {
  links: [
    {
      title: 'Lá số tử vi',
      icon: 'Dice4',
      items: [
        {
          title: 'Lá số tử vi âm lịch địa phương',
          href: '/tu-vi-tu-tru/the-gioi-theo-vi-tri-sinh',
          icon: 'PackageSearch'
        },
        { title: 'Tử vi việt nam', href: '/tu-vi/la-so-tu-vi-viet-nam', icon: 'Badge' },
        { title: 'Phi tinh lương phái', href: '/tu-vi/tu-vi-phi-tinh-luong-phai', icon: 'Shell' },
        { title: 'Khâm thiên tứ hóa', href: '/tu-vi/kham-thien-tu-hoa-nam-phai', icon: 'Grid2x2' },
        { title: 'Trung châu phái', href: '/tu-vi/tu-vi-trung-chau-phai', icon: 'PackageSearch' },
        { title: 'Nam phái', href: '/tu-vi/tu-vi-nam-phai', icon: 'PackageSearch' }
      ]
    },
    {
      title: 'Tiết khí',
      icon: 'Goal',
      items: [
        { title: 'Tiết khí chính xác', href: '/tiet-khi-chinh-xac', icon: 'Zap' },
        { title: 'Tiết khí năm 2025', href: '/tiet-khi-chinh-xac/2025', icon: 'Zap' },
        { title: 'Tiết khí năm 2026', href: '/tiet-khi-chinh-xac/2026', icon: 'Zap' },
        { title: 'Điểm Sóc chính xác', href: '/ngay-gio-soc-chinh-xac', icon: 'Gem' },
        { title: 'Điểm Sóc năm 2025', href: '/ngay-gio-soc-chinh-xac/2025', icon: 'Gem' },
        { title: 'Điểm Sóc năm 2026', href: '/ngay-gio-soc-chinh-xac/2026', icon: 'Gem' },
        { title: 'Tiết khí toàn cầu', href: '/tra-cuu-tiet-khi-trong-nam-toan-cau', icon: 'Globe' },
        { title: 'Tiết khí Việt Nam 2026', href: '/tiet-khi/vietnam/2026', icon: 'Globe' },
        { title: 'Tiết khí Trung Quốc 2026', href: '/tiet-khi/china/2026', icon: 'Globe' },
        { title: 'Tiết khí Nhật Bản 2026', href: '/tiet-khi/japan/2026', icon: 'Globe' }
      ]
    },
    {
      title: 'Kinh dịch',
      icon: 'RefreshCw',
      items: [
        { title: 'Ý nghĩa 64 quẻ kinh dịch', href: '/y-nghia-64-que-kinh-dich', icon: 'Glasses' },
        { title: 'Gieo quẻ kinh dịch', href: '/gieo-que-kinh-dich', icon: 'HandCoins' },
        { title: 'Gieo quẻ hỏi việc', href: '/gieo-que-hoi-viec', icon: 'Grip' },
        { title: 'Bát Tự Hà Lạc', href: '/bat-tu-ha-lac-co-truyen', icon: 'BookOpen' },
        { title: 'Xin quẻ đầu năm 2026', href: '/xin-que-dau-nam', icon: 'BookOpen' },
        { title: 'Gieo quẻ đầu năm 2026', href: '/gieo-que-dau-nam', icon: 'BookOpen' },
        {
          title: 'Giải Quẻ với AI',
          href: GEMINI_AI_LINKS.GIEO_QUE,
          icon: 'Bot'
        }
      ]
    },
    {
      title: 'Tự học tử vi',
      icon: 'Brain',
      items: [{ title: 'Hệ thống tự học tử vi', href: '/hoc-tu-vi', icon: 'Star' }]
    },
    {
      title: 'Bổ trợ',
      icon: 'Settings',
      items: [
        { title: 'Bảng ghi chú lá số', href: '/note', icon: 'ClipboardList' },
        { title: 'Đổi giờ âm lịch địa phương', href: '/doi-gio-am-lich-dia-phuong-online', icon: 'Calendar' },
        { title: 'Data lá số', href: '/dang-phat-trien', icon: 'Database' },
        { title: 'Hệ thống dự phòng 1', href: 'https://tinhmenhdo.github.io', icon: 'Globe2' },
        { title: 'Hệ thống dự phòng 2', href: 'https://tinhmenhdo.netlify.app', icon: 'Globe' },
        { title: 'Hệ thống dự phòng 3', href: 'https://tinhmenhdo.pages.dev', icon: 'Globe' }
      ]
    },
    // {
    //   title: 'Hệ thống đang xây dựng',
    //   icon: 'Construction',
    //   items: [
    //     { title: 'Thần số học', href: '/than-so-hoc', icon: 'Calculator' },
    //     { title: 'Tứ trụ', href: '/tu-tru', icon: 'Columns' },
    //     { title: 'Kỳ môn độn giáp', href: '/ky-mon-dong-giap', icon: 'Compass' },
    //     { title: 'Thái Ất', href: '/thai-at', icon: 'CircleDot' },
    //   ]
    // },
    {
      title: 'Liên kết',
      icon: 'Atom',
      items: [
        { title: 'Nền tảng hỗ học thuật', href: 'https://www.facebook.com/alexphong.rough', icon: 'Facebook' },
        {
          title: 'Sách của thầy AlexAlpha',
          href: 'https://alexalpha.sapopage.com?utm_source=tinhmenhdo.com&utm_medium=referral',
          icon: 'University'
        }
      ]
    },
    {
      title: 'Hệ thống site',
      icon: 'Radar',
      items: [
        { title: 'Về chúng tôi', href: '/about-us', icon: 'BookOpen' },
        { title: 'Blog', href: '/blog', icon: 'BookOpen' },
        { title: 'Chính sách', href: '/terms', icon: 'FileText' },
        { title: 'Hỗ trợ cho chúng tôi', href: '/dang-phat-trien', icon: 'HeartHandshake' },
        { title: 'Thông tin cập nhật', href: '/phien-ban-cap-nhat', icon: 'PackageOpen' },
        {
          title: 'Tử Vi & Bát Tự với AI',
          href: GEMINI_AI_LINKS.TU_VI_BAT_TU,
          icon: 'Bot'
        },
        { title: 'Hệ thống dự phòng 1', href: 'https://tinhmenhdo.github.io', icon: 'Globe2' },
        { title: 'Hệ thống dự phòng 2', href: 'https://tinhmenhdo.netlify.app', icon: 'Globe' },
        { title: 'Hệ thống dự phòng 3', href: 'https://tinhmenhdo.pages.dev', icon: 'Globe' }
      ]
    }
  ]
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

const footerData = {
  links: [
    {
      title: 'Lá số tử vi',
      icon: 'CircleCheck',
      items: [
        {
          title: 'Lá số tử vi âm lịch địa phương',
          href: '/tu-vi-tu-tru/the-gioi-theo-vi-tri-sinh',
          icon: 'PackageSearch'
        },
        { title: 'Lá số tử vi việt nam tổng hợp', href: '/tu-vi/la-so-tu-vi-viet-nam', icon: 'Star' },
        { title: 'Lá số khâm thiên & Nam Phái (Phổ biến)', href: '/tu-vi/kham-thien-tu-hoa-nam-phai', icon: 'Star' },
        { title: 'Lá số phi tinh lương phái', href: '/tu-vi/tu-vi-phi-tinh-luong-phai', icon: 'Star' },
        { title: 'Lá số trung châu phái', href: '/tu-vi/tu-vi-trung-chau-phai', icon: 'Star' },
        { title: 'Lá số khâm thiên tứ hóa', href: '/tu-vi/tu-vi-kham-thien-tu-hoa', icon: 'Star' },
        { title: 'Nam phái', href: '/tu-vi/tu-vi-nam-phai', icon: 'PackageSearch' }
      ]
    },
    {
      title: 'Tiết khí & Điểm Sóc',
      icon: 'Goal',
      items: [
        { title: 'Tiết khí chính xác', href: '/tiet-khi-chinh-xac', icon: 'Loader' },
        { title: 'Tiết khí năm 2025', href: '/tiet-khi-chinh-xac/2025', icon: 'Gem' },
        { title: 'Tiết khí năm 2026', href: '/tiet-khi-chinh-xac/2026', icon: 'Gem' },
        { title: 'Tiết khí năm 2027', href: '/tiet-khi-chinh-xac/2027', icon: 'Gem' },
        { title: 'Điểm Sóc chính xác', href: '/ngay-gio-soc-chinh-xac', icon: 'Zap' },
        { title: 'Điểm Sóc năm 2025', href: '/ngay-gio-soc-chinh-xac/2025', icon: 'Gem' },
        { title: 'Điểm Sóc năm 2026', href: '/ngay-gio-soc-chinh-xac/2026', icon: 'Gem' },
        { title: 'Điểm Sóc năm 2027', href: '/ngay-gio-soc-chinh-xac/2027', icon: 'Gem' },
        { title: 'Lịch tiết khí toàn cầu', href: '/tra-cuu-tiet-khi-trong-nam-toan-cau', icon: 'Zap' },
        { title: 'Tiết khí Việt Nam 2026', href: '/tiet-khi/vietnam/2026', icon: 'Globe' },
        { title: 'Tiết khí Trung Quốc 2026', href: '/tiet-khi/china/2026', icon: 'Globe' },
        { title: 'Tiết khí Nhật Bản 2026', href: '/tiet-khi/japan/2026', icon: 'Globe' },
        { title: 'Tiết khí Hàn Quốc 2026', href: '/tiet-khi/korea/2026', icon: 'Globe' },
        { title: 'Tiết khí Đài Loan 2026', href: '/tiet-khi/taiwan/2026', icon: 'Globe' },
        { title: 'Tiết khí Mỹ 2026', href: '/tiet-khi/usa/2026', icon: 'Globe' }
      ]
    },
    {
      title: 'Kinh dịch',
      icon: 'RefreshCw',
      items: [
        { title: 'Ý nghĩa 64 quẻ kinh dịch', href: '/y-nghia-64-que-kinh-dich', icon: 'Glasses' },
        { title: 'Gieo quẻ kinh dịch', href: '/gieo-que-kinh-dich', icon: 'HandCoins' },
        { title: 'Gieo quẻ hỏi việc', href: '/gieo-que-hoi-viec', icon: 'Grip' },
        { title: 'Bát tự hà lạc', href: '/bat-tu-ha-lac-co-truyen', icon: 'BookOpen' },
        { title: 'Xin quẻ đầu năm 2026', href: '/xin-que-dau-nam', icon: 'BookOpen' },
        { title: 'Gieo quẻ đầu năm 2026', href: '/gieo-que-dau-nam', icon: 'BookOpen' },
        {
          title: 'Giải Quẻ với AI',
          href: GEMINI_AI_LINKS.GIEO_QUE,
          icon: 'Bot'
        }
      ]
    },
    {
      title: 'Hệ thống học tử vi',
      icon: 'Construction',
      items: [
        { title: 'Học tử vi online', href: '/hoc-tu-vi', icon: 'Brain' },
        { title: 'Luyện quan hệ can chi', href: '/hoc-tu-vi/can-chi-tuong-tac', icon: 'Brain' },
        { title: 'Luyện tìm năm can chi', href: '/hoc-tu-vi/tim-can-chi-tu-nam-duong-lich', icon: 'Brain' },
        { title: 'Luyện tìm lục thập hoa giáp', href: '/hoc-tu-vi/nho-luc-thap-hoa-giap', icon: 'Brain' },
        { title: 'Ghi nhớ vị trí 14 chính tinh', href: '/hoc-tu-vi/nho-vi-tri-14-chinh-tinh', icon: 'Brain' },
        { title: 'Bảng ghi chú lá số', href: '/note', icon: 'ClipboardList' },
        { title: 'Đổi giờ âm lịch địa phương', href: '/doi-gio-am-lich-dia-phuong-online', icon: 'Calendar' },
        { title: 'Đổi giờ Mặt Trời & Chính Ngọ', href: '/gio-mat-troi-chinh-ngo', icon: 'Zap' }
      ]
    },
    {
      title: 'Các môn khác',
      icon: 'Construction',
      items: [
        { title: 'Thần số học', href: '/than-so-hoc', icon: 'Calculator' },
        { title: 'Tứ trụ', href: '/tu-vi/tu-vi-nam-phai', icon: 'Columns' },
        { title: 'Kỳ môn độn giáp', href: '/dang-phat-trien', icon: 'Compass' },
        { title: 'Thái Ất', href: '/dang-phat-trien', icon: 'CircleDot' },
        { title: 'Data lá số', href: '/dang-phat-trien', icon: 'Database' }
      ]
    },
    {
      title: 'Hệ thống site',
      icon: 'Globe',
      items: [
        { title: 'Điều khoản', href: getPermalink('/terms'), icon: 'FileText' },
        { title: 'Chính sách', href: getPermalink('/privacy'), icon: 'Shield' },
        { title: 'Blog', href: '/blog', icon: 'BookOpen' },
        { title: 'Hỗ trợ cho chúng tôi', href: '/dang-phat-trien', icon: 'Heart' },
        { title: 'Thông tin cập nhật', href: '/phien-ban-cap-nhat', icon: 'RefreshCw' },
        {
          title: 'Tử Vi & Bát Tự với AI',
          href: GEMINI_AI_LINKS.TU_VI_BAT_TU,
          icon: 'Bot'
        }
      ]
    },
    {
      title: 'Liên kết',
      icon: 'Link',
      items: [
        { title: 'Về chúng tôi', href: '/about-us', icon: 'BookOpen' },
        { title: 'Blog', href: '/blog', icon: 'BookOpen' },
        { title: 'Nền tảng hỗ học thuật', href: 'https://www.facebook.com/alexphong.rough', icon: 'GraduationCap' },
        {
          title: 'Sách của thầy AlexAlpha',
          href: 'https://alexalpha.sapopage.com?utm_source=tinhmenhdo.com&utm_medium=referral',
          icon: 'BookMarked'
        },
        { title: 'Website dự phòng 1', href: 'https://tinhmenhdo.github.io', icon: 'Globe2' },
        { title: 'Website dự phòng 2', href: 'https://tinhmenhdo.pages.dev', icon: 'Globe' }
      ]
    }
  ],
  secondaryLinks: [
    { title: 'Điều khoản', href: getPermalink('/terms'), icon: 'FileText' },
    { title: 'Chính sách', href: getPermalink('/privacy'), icon: 'Shield' }
  ],
  socialLinks: [
    { ariaLabel: 'Youtube', icon: 'Youtube', href: 'https://www.youtube.com/@TinhMenhDo' },
    { ariaLabel: 'Github', icon: 'Github', href: 'https://github.com/SoulVoidNova' },
    { ariaLabel: 'X', icon: 'X', href: 'https://x.com/tinhmenhdo' },
    { ariaLabel: 'RSS', icon: 'Rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61552214422782' }
  ],
  footNote: ``
};
// 2023 Copyright Tinh Mệnh Đồ
// Khâm Thiên Tứ Hóa-Tiết Khí Chính Xác-Gieo Quẻ Kinh Dịch-Ý nghĩa 64 quẻ dịch-Thông tin cập nhật phiên bản-Điều khoản sử dụng miễn phí
// <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
// Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata = {} } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen flex-wrap justify-center"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div id="main-content" class="w-full"> ${renderSlot($$result2, $$slots["default"])} ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { "links": footerData.links, "secondaryLinks": footerData.secondaryLinks, "socialLinks": footerData.socialLinks, "footNote": footerData.footNote })} `)} </div> <aside id="mobile-sidebar"${addAttribute(cn(
    "fixed inset-y-0 left-0 w-64 bg-[var(--sidebar-bg)] z-50 transform transition-transform ease-in-out -translate-x-full",
    "flex flex-col"
  ), "class")}> <div class="flex h-16 items-center justify-between px-4"> <div class="flex items-center"> <img src="/logo.png" alt="Tinh Mệnh Đồ Logo" class="h-8"> <div class="font-weight-[400] ml-2 text-xs leading-none font-normal text-[#ffffff] opacity-55">
Hành trình khám phá <br> bản thân và vũ trụ
</div> </div> <button id="close-sidebar-button" class="text-[hsl(var(--sidebar-fg))] hover:text-[hsl(var(--sidebar-fg)_/_0.8)]"> ${renderComponent($$result2, "X", X, { "className": "h-5 w-5" })} </button> </div> <nav class="flex-1 overflow-y-auto py-4"> ${headerData.links.map((section) => renderTemplate`<div class="js-section mb-2"${addAttribute(section.title, "data-section-title")}> <button${addAttribute(cn(
    "flex w-full items-center justify-between px-4 py-2",
    "text-[hsl(var(--sidebar-fg)_/_0.8)] hover:text-[hsl(var(--sidebar-fg))]",
    "hover:bg-[var(--sidebar-hover)]",
    "js-section-toggle"
  ), "class")}> <div class="flex items-center"> ${renderComponent($$result2, "LucideIconCp", LucideIconCp, { "name": section.icon, "className": "w-5 h-5 mr-2" })} <span>${section.title}</span> </div> <svg class="js-section-arrow h-4 w-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2, "stroke-width")} d="M19 9l-7 7-7-7"></path> </svg> </button> <div class="js-section-items mt-1 hidden"> ${section.items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(cn(
    "js-menu-item flex h-10 items-center px-6",
    "text-[hsl(var(--sidebar-fg)_/_0.8)] hover:text-[hsl(var(--sidebar-fg))]",
    "hover:bg-[var(--sidebar-hover)]"
  ), "class")}${addAttribute(item.href, "data-href")}> ${item.icon && renderTemplate`${renderComponent($$result2, "LucideIconCp", LucideIconCp, { "name": item.icon, "className": "w-4 h-4 mr-2" })}`} <span>${item.title}</span> </a>`)} </div> </div>`)} </nav> </aside> <div id="mobile-sidebar-backdrop" class="fixed inset-0 z-40 hidden bg-black/50"></div> ${renderScript($$result2, "/root/code/tmd_astro/src/layouts/PageLayout.astro?astro&type=script&index=0&lang.ts")} </main> ` })}`;
}, "/root/code/tmd_astro/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, GEMINI_AI_LINKS as G, VERSION_HORO as V };
