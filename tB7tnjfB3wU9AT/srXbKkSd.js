import { c as createComponent, d as createAstro, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './Cf7UXZdW.js';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$DListItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DListItem;
  const { dt } = Astro2.props;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${maybeRenderHead()}<h6>${unescapeHTML(dt)}</h6> <div class="dd ml-8">${unescapeHTML(content)}</div>`;
}, "/root/code/tmd_astro/src/components/ui/DListItem.astro", void 0);

export { $$DListItem as $ };
