import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, e as renderSlot, m as maybeRenderHead } from './4CUkstck.js';
import 'kleur/colors';
import { $ as $$Layout } from './m5rBg2M8.js';
import { $ as $$Header, h as headerData, a as $$Footer, f as footerData } from './DpAnnGRv.js';

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["announcement"], renderTemplate` <!-- <Announcement /> --> `)} ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Header, { ...headerData, "isSticky": true, "showRssFeed": true, "showToggleTheme": true })} `)} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ${renderSlot($$result2, $$slots["footer"], renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, { ...footerData })} `)} ` })}`;
}, "/root/code/tmd_astro/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $ };
