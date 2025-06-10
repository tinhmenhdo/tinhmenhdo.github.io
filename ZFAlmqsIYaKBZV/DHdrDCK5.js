import{d as createAstro,c as createComponent,m as maybeRenderHead,r as renderComponent,a as renderTemplate,b as addAttribute,g as Fragment$1,u as unescapeHTML,f as renderSlot,e as renderScript}from"./BLPCCYJH.js";import"kleur/colors";import*as LucideIcons from"lucide-react";import{Menu,X}from"lucide-react";import{jsx,Fragment}from"react/jsx-runtime";import{S as SITE,e as getHomePermalink,f as getAsset,a as getPermalink}from"./hp21E7cv.js";import{$ as $$Layout}from"./Bs3PoTj1.js";import{clsx}from"clsx";import{twMerge}from"tailwind-merge";function LucideIconCp({name:e,...t}){if(void 0===LucideIcons[e])return jsx(Fragment,{});const i=LucideIcons[e]||LucideIcons.Home;return jsx(i,{...t})}const $$Astro$2=createAstro("https://tinhmenhdo.com"),$$Sidebar=createComponent(((e,t,i)=>(e.createAstro($$Astro$2,t,i).self=$$Sidebar,renderTemplate`${maybeRenderHead()}<header class="relative h-12 bg-[var(--sidebar-bg)] z-40 flex items-center px-4 w-full"> <div class="bgInset h-full absolute top-0 left-0 w-full z-[-1]"> <div class="bgInsetInner !h-full w-full"></div> </div> <button id="mobile-menu-toggle" class="text-[hsl(var(--sidebar-fg))]"> ${renderComponent(e,"Menu",Menu,{className:"w-6 h-6"})} </button> <div class="flex justify-center flex-1"> <!-- <a href='/' title='Tinh Mệnh Đồ - Công cụ lấy lá số nhanh, chuẩn, hàng đầu!'>
      <img src={logo.src} alt='Tinh Mệnh Đồ - Công cụ lấy lá số nhanh, chuẩn, hàng đầu' class='h-8' />
    </a> --> <div class="flex justify-center items-center flex-col"> <a class="font-[600] hover:text-[#ffd641] leading-[1.25] text-[#ffd641d9] text-[17px] transition-all" href="/" title="Tinh Mệnh Đồ - Công cụ lấy lá số nhanh, chuẩn, hàng đầu!">Tinh Mệnh Đồ</a><div class="font-normal font-weight-[400] leading-none opacity-55 text-[#ffffff] text-[.625rem]">
Hành trình khám phá bản thân và vũ trụ
</div> </div> </div> </header>`)),"/root/code/tmd_astro/src/components/Sidebar.astro",void 0),$$Astro$1=createAstro("https://tinhmenhdo.com"),$$Footer=createComponent(((e,t,i)=>{const n=e.createAstro($$Astro$1,t,i);n.self=$$Footer;const{socialLinks:a=[],links:r=[],theme:o="light"}=n.props;return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{dark:"dark"===o},"relative border-t border-gray-200 dark:border-slate-800 not-prose"],"class:list")}> <div class="absolute inset-0 pointer-events-none dark:bg-dark" aria-hidden="true"></div> <div class="w-full mx-auto"> <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:px-3 px-6 py-6 xl:py-8 xl:grid-cols-7"> ${r.map((({title:t,items:i})=>renderTemplate`<div class=""> <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white ">${t}</h2> ${i&&Array.isArray(i)&&i.length>0&&renderTemplate`<ul class="text-sm text-gray-500 dark:text-gray-400"> ${i.map((({title:t,href:i,ariaLabel:n})=>renderTemplate`<li class="mb-2"> <a class="transition duration-150 ease-in-out text-muted dark:text-gray-400 hover:text-orange-500 hover:underline"${addAttribute(i,"href")}${addAttribute(n,"aria-label")} target="_blank"${addAttribute(t,"title")}> ${renderComponent(e,"Fragment",Fragment$1,{},{default:e=>renderTemplate`${unescapeHTML(t)}`})} </a> </li>`))} </ul>`} </div>`))} <!-- <div>
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
      </div> --> </div> <div class="px-4 py-8 bg-gray-100 md:py-2 dark:bg-gray-700"> <div class="xl:w-[1400px] md:flex md:items-center md:justify-between mx-auto w-full"> <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a${addAttribute(getHomePermalink(),"href")}>${SITE?.name}</a>. All Rights Reserved.
</span> <div class="flex mt-4 space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse"> ${a?.length?renderTemplate`<ul class="flex mb-4 -ml-2 md:order-1 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4"> ${a.map((({ariaLabel:t,href:i,title:n,icon:a})=>renderTemplate`<li> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(t,"aria-label")}${addAttribute(i,"href")} target="_blank"${addAttribute(n,"title")}> ${renderComponent(e,"LucideIconCp",LucideIconCp,{name:a,className:"w-5 h-5","client:load":!0,"client:component-hydration":"load","client:component-path":"~/components/LucideIconCp","client:component-export":"default"})} ${renderComponent(e,"Fragment",Fragment$1,{},{default:e=>renderTemplate`${unescapeHTML(n)}`})} </a> </li>`))} </ul>`:""} </div> </div> </div> </div> </footer> <!-- <footer
  class:list={[{ dark: theme === 'dark' }, 'hidden relative border-t border-gray-200 dark:border-slate-800 not-prose']}
>
  <div class='absolute inset-0 pointer-events-none dark:bg-dark' aria-hidden='true'></div>
  <div class='relative px-4 mx-auto max-w-7xl sm:px-6 dark:text-slate-300 intercept-no-queue'>
    <div class='grid grid-cols-12 gap-4 py-8 gap-y-8 sm:gap-8 md:py-12'>
      <div class='col-span-12 lg:col-span-4'>
        <div class='mb-2'>
          <a class='inline-block text-xl font-bold' href={getHomePermalink()}>{SITE?.name}</a>
        </div>
        <div class='flex gap-1 text-sm text-muted'>
          {
            secondaryLinks.map(({ title: text, href }, index) => (
              <>
                {index !== 0 ? ' · ' : ''}
                <a
                  class='transition duration-150 ease-in-out text-muted hover:text-gray-700 dark:text-gray-400 hover:underline'
                  href={href}
                  set:html={text}
                />
              </>
            ))
          }
        </div>
      </div>
      {
        links.map(({ title, items }) => (
          <div class='col-span-6 md:col-span-3 lg:col-span-2'>
            <div class='mb-2 font-medium dark:text-gray-300'>{title}</div>
            {items && Array.isArray(items) && items.length > 0 && (
              <ul class='text-sm'>
                {items.map(({ title: text, href, ariaLabel }) => (
                  <li class='mb-2'>
                    <a
                      class='transition duration-150 ease-in-out text-muted hover:text-gray-700 hover:underline dark:text-gray-400'
                      href={href}
                      aria-label={ariaLabel}
                    >
                      <Fragment set:html={text} />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      }
    </div>
    <div class='py-6 md:flex md:items-center md:justify-between md:py-8'>
      {
        socialLinks?.length ? (
          <ul class='flex mb-4 -ml-2 md:order-1 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4'>
            {socialLinks.map(({ ariaLabel, href, title: text, icon }) => {
              return (
                <li>
                  <a
                    class='text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center'
                    aria-label={ariaLabel}
                    href={href}
                    target='_blank'
                    title={text}
                  >
                    <LucideIconCp name={icon as IconName} class='w-5 h-5' client:load />
                    <Fragment set:html={text} />
                  </a>
                </li>
              );
            })}
          </ul>
        ) : (
          ''
        )
      }

      <div class='mr-4 text-sm dark:text-muted'>
        <Fragment set:html={footNote} />
      </div>
    </div>
  </div>
</footer> -->`}),"/root/code/tmd_astro/src/components/widgets/Footer.astro",void 0);function cn(...e){return twMerge(clsx(e))}const headerData={links:[{title:"Tử vi",icon:"Dice4",items:[{title:"Tử vi việt nam",href:"/tu-vi/la-so-tu-vi-viet-nam",icon:"Badge"},{title:"Phi tinh lương phái",href:"/tu-vi/tu-vi-phi-tinh-luong-phai",icon:"Shell"},{title:"Khâm thiên tứ hóa",href:"/tu-vi/kham-thien-tu-hoa-nam-phai",icon:"Grid2x2"},{title:"Trung châu phái",href:"/tu-vi/tu-vi-trung-chau-phai",icon:"PackageSearch"}]},{title:"Tiết khí",icon:"Goal",items:[{title:"Tiết khí chính xác",href:"/tiet-khi-chinh-xac",icon:"Zap"},{title:"Tiết khí năm 2025",href:"/tiet-khi-chinh-xac/2025",icon:"Zap"},{title:"Tiết khí năm 2026",href:"/tiet-khi-chinh-xac/2026",icon:"Zap"},{title:"Giờ sóc chính xác",href:"/ngay-gio-soc-chinh-xac",icon:"Gem"},{title:"Giờ sóc năm 2025",href:"/ngay-gio-soc-chinh-xac/2025",icon:"Gem"},{title:"Giờ sóc năm 2026",href:"/ngay-gio-soc-chinh-xac/2026",icon:"Gem"}]},{title:"Kinh dịch",icon:"RefreshCw",items:[{title:"Ý nghĩa 64 quẻ kinh dịch",href:"/y-nghia-64-que-kinh-dich",icon:"Glasses"},{title:"Gieo quẻ tung xu 6 lần",href:"/gieo-que-kinh-dich",icon:"HandCoins"},{title:"Gieo quẻ ngẫu nhiên",href:"/kinh-dich-gieo-que",icon:"Grip"}]},{title:"Tự học",icon:"Brain",items:[{title:"Luyện an sao chính tinh",href:"/tu-vi/ren-luyen-an-sao/nho-vi-tri-14-chinh-tinh",icon:"Star"}]},{title:"Bổ trợ",icon:"Settings",items:[{title:"Bảng ghi chú lá số",href:"/note",icon:"ClipboardList"},{title:"Đổi âm lịch địa phương",href:"/dang-phat-trien",icon:"Calendar"},{title:"Data lá số",href:"/dang-phat-trien",icon:"Database"},{title:"Hệ thống dự phòng 1",href:"https://tinhmenhdo.github.io",icon:"Globe2"},{title:"Hệ thống dự phòng 2",href:"https://tinhmenhdo.netlify.app",icon:"Globe"},{title:"Hệ thống dự phòng 3",href:"https://tinhmenhdo.pages.dev",icon:"Globe"}]},{title:"Liên kết",icon:"Atom",items:[{title:"Nền tảng hỗ học thuật",href:"https://www.facebook.com/alexphong.rough",icon:"Facebook"},{title:"Sách của thầy AlexAlpha",href:"https://alexalpha.sapopage.com/",icon:"University"}]},{title:"Hệ thống site",icon:"Radar",items:[{title:"Về chúng tôi",href:"/about-us",icon:"BookOpen"},{title:"Blog",href:"/blog",icon:"BookOpen"},{title:"Chính sách",href:"/terms",icon:"FileText"},{title:"Hỗ trợ cho chúng tôi",href:"/ho-tro-cho-chung-toi",icon:"HeartHandshake"},{title:"Thông tin cập nhật",href:"/phien-ban-cap-nhat",icon:"PackageOpen"},{title:"Tinh Mệnh Đồ GPT",href:"https://chatgpt.com/g/g-BHVwAwPzS-tu-vi-va-nghien-cuu-so-menh-tinh-menh-do",icon:"Bot"},{title:"Hệ thống dự phòng 1",href:"https://tinhmenhdo.github.io",icon:"Globe2"},{title:"Hệ thống dự phòng 2",href:"https://tinhmenhdo.netlify.app",icon:"Globe"},{title:"Hệ thống dự phòng 3",href:"https://tinhmenhdo.pages.dev",icon:"Globe"}]}]},footerData={links:[{title:"Tử vi",icon:"CircleCheck",items:[{title:"Tử vi việt nam",href:"/tu-vi/la-so-tu-vi-viet-nam",icon:"Star"},{title:"Phi tinh lương phái",href:"/tu-vi/tu-vi-phi-tinh-luong-phai",icon:"Star"},{title:"Khâm thiên tứ hóa",href:"/tu-vi/kham-thien-tu-hoa-nam-phai",icon:"Star"},{title:"Trung châu phái",href:"/tu-vi/tu-vi-trung-chau-phai",icon:"Star"}]},{title:"Tiết khí & giờ sóc",icon:"Goal",items:[{title:"Tiết khí chính xác",href:"/tiet-khi-chinh-xac",icon:"Loader"},{title:"Tiết khí năm 2025",href:"/tiet-khi-chinh-xac/2025",icon:"Gem"},{title:"Tiết khí năm 2026",href:"/tiet-khi-chinh-xac/2026",icon:"Gem"},{title:"Tiết khí năm 2027",href:"/tiet-khi-chinh-xac/2027",icon:"Gem"},{title:"Giờ sóc chính xác",href:"/ngay-gio-soc-chinh-xac",icon:"Zap"},{title:"Giờ sóc năm 2025",href:"/ngay-gio-soc-chinh-xac/2025",icon:"Gem"},{title:"Giờ sóc năm 2026",href:"/ngay-gio-soc-chinh-xac/2026",icon:"Gem"},{title:"Giờ sóc năm 2027",href:"/ngay-gio-soc-chinh-xac/2027",icon:"Gem"}]},{title:"Kinh dịch",icon:"RefreshCw",items:[{title:"Ý nghĩa 64 quẻ kinh dịch",href:"/y-nghia-64-que-kinh-dich",icon:"Glasses"},{title:"Gieo quẻ tung xu 6 lần",href:"/gieo-que-kinh-dich",icon:"HandCoins"},{title:"Gieo quẻ ngẫu nhiên",href:"/kinh-dich-gieo-que",icon:"Grip"}]},{title:"Tự học",icon:"Construction",items:[{title:"Luyện an sao chính tinh",href:"/tu-vi/ren-luyen-an-sao/nho-vi-tri-14-chinh-tinh",icon:"Brain"},{title:"Bảng ghi chú lá số",href:"/note",icon:"ClipboardList"},{title:"Đổi âm lịch địa phương",href:"/dang-phat-trien",icon:"Calendar"}]},{title:"Bổ trợ",icon:"Construction",items:[{title:"Thần số học",href:"/than-so-hoc",icon:"Calculator"},{title:"Tứ trụ",href:"/dang-phat-trien",icon:"Columns"},{title:"Kỳ môn độn giáp",href:"/dang-phat-trien",icon:"Compass"},{title:"Thái Ất",href:"/dang-phat-trien",icon:"CircleDot"},{title:"Data lá số",href:"/dang-phat-trien",icon:"Database"}]},{title:"Hệ thống site",icon:"Globe",items:[{title:"Điều khoản",href:getPermalink("/terms"),icon:"FileText"},{title:"Chính sách",href:getPermalink("/privacy"),icon:"Shield"},{title:"Hỗ trợ cho chúng tôi",href:"/ho-tro-cho-chung-toi",icon:"Heart"},{title:"Thông tin cập nhật",href:"/phien-ban-cap-nhat",icon:"RefreshCw"},{title:"Tinh Mệnh Đồ GPT",href:"https://chatgpt.com/g/g-BHVwAwPzS-tu-vi-va-nghien-cuu-so-menh-tinh-menh-do",icon:"Bot"}]},{title:"Liên kết",icon:"Link",items:[{title:"Về chúng tôi",href:"/about-us",icon:"BookOpen"},{title:"Blog",href:"/blog",icon:"BookOpen"},{title:"Nền tảng hỗ học thuật",href:"https://www.facebook.com/alexphong.rough",icon:"GraduationCap"},{title:"Sách của thầy AlexAlpha",href:"https://alexalpha.sapopage.com/",icon:"BookMarked"},{title:"Website dự phòng 1",href:"https://tinhmenhdo.github.io",icon:"Globe2"},{title:"Website dự phòng 2",href:"https://tinhmenhdo.pages.dev",icon:"Globe"}]}],secondaryLinks:[{title:"Điều khoản",href:getPermalink("/terms"),icon:"FileText"},{title:"Chính sách",href:getPermalink("/privacy"),icon:"Shield"}],socialLinks:[{ariaLabel:"Youtube",icon:"Youtube",href:"https://www.youtube.com/@TinhMenhDo"},{ariaLabel:"Github",icon:"Github",href:"https://github.com/SoulVoidNova"},{ariaLabel:"X",icon:"X",href:"https://x.com/tinhmenhdo"},{ariaLabel:"RSS",icon:"Rss",href:getAsset("/rss.xml")},{ariaLabel:"Facebook",icon:"Facebook",href:"https://www.facebook.com/profile.php?id=61552214422782"}],footNote:""},$$Astro=createAstro("https://tinhmenhdo.com"),$$PageLayout=createComponent(((e,t,i)=>{const n=e.createAstro($$Astro,t,i);n.self=$$PageLayout;const{metadata:a={}}=n.props;return renderTemplate`${renderComponent(e,"Layout",$$Layout,{metadata:a},{default:e=>renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen justify-center flex-wrap"> ${renderComponent(e,"Sidebar",$$Sidebar,{})} <div id="main-content" class="w-full"> <!-- <slot name="announcement" /> --> <!-- <slot name="header">
          <div class="hidden"><Header {...headerData} isSticky={false} showRssFeed showToggleTheme /></div>
        </slot> --> ${renderSlot(e,i.default)} ${renderSlot(e,i.footer,renderTemplate` ${renderComponent(e,"Footer",$$Footer,{links:footerData.links,secondaryLinks:footerData.secondaryLinks,socialLinks:footerData.socialLinks,footNote:footerData.footNote})} `)} </div> <aside id="mobile-sidebar"${addAttribute(cn("fixed inset-y-0 left-0 w-64 bg-[var(--sidebar-bg)] z-50 transform transition-transform ease-in-out -translate-x-full","flex flex-col"),"class")}> <div class="flex items-center justify-between h-16 px-4"> <div class="flex items-center"> <img src="/logo.png" alt="Tinh Mệnh Đồ Logo" class="h-8"> <div class="font-normal leading-none opacity-55 text-[#ffffff] text-xs font-weight-[400] ml-2">
Hành trình khám phá <br> bản thân và vũ trụ
</div> </div> <button id="close-sidebar-button" class="text-[hsl(var(--sidebar-fg))] hover:text-[hsl(var(--sidebar-fg)_/_0.8)]"> ${renderComponent(e,"X",X,{className:"w-5 h-5"})} </button> </div> <nav class="flex-1 py-4 overflow-y-auto"> ${headerData.links.map((t=>renderTemplate`<div class="mb-2 js-section"${addAttribute(t.title,"data-section-title")}> <button${addAttribute(cn("flex items-center justify-between w-full px-4 py-2","text-[hsl(var(--sidebar-fg)_/_0.8)] hover:text-[hsl(var(--sidebar-fg))]","hover:bg-[var(--sidebar-hover)]","js-section-toggle"),"class")}> <div class="flex items-center"> ${renderComponent(e,"LucideIconCp",LucideIconCp,{name:t.icon,className:"w-5 h-5 mr-2"})} <span>${t.title}</span> </div> <svg class="w-4 h-4 transition-transform js-section-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round"${addAttribute(2,"stroke-width")} d="M19 9l-7 7-7-7"></path> </svg> </button> <div class="mt-1 hidden js-section-items"> ${t.items.map((t=>renderTemplate`<a${addAttribute(t.href,"href")}${addAttribute(cn("flex items-center h-10 px-6 js-menu-item","text-[hsl(var(--sidebar-fg)_/_0.8)] hover:text-[hsl(var(--sidebar-fg))]","hover:bg-[var(--sidebar-hover)]"),"class")}${addAttribute(t.href,"data-href")}> ${t.icon&&renderTemplate`${renderComponent(e,"LucideIconCp",LucideIconCp,{name:t.icon,className:"w-4 h-4 mr-2"})}`} <span>${t.title}</span> </a>`))} </div> </div>`))} </nav> </aside> <div id="mobile-sidebar-backdrop" class="fixed inset-0 z-40 bg-black/50 hidden"></div> ${renderScript(e,"/root/code/tmd_astro/src/layouts/PageLayout.astro?astro&type=script&index=0&lang.ts")} </main> `})}`}),"/root/code/tmd_astro/src/layouts/PageLayout.astro",void 0);export{$$PageLayout as $};