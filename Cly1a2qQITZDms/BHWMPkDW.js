import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, p as renderSlot } from './3oDUBBJB.js';
import 'piccolore';
import { $ as $$PageLayout } from './DDt8buec.js';

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { frontmatter } = Astro2.props;
  const metadata = {
    title: frontmatter?.title,
    description: frontmatter?.description
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"> <h1 class="font-heading leading-tighter text-4xl font-bold tracking-tighter md:text-5xl">${frontmatter.title}</h1> <div class="prose prose-lg dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-orange-800 prose-a:no-underline prose-a:hover:underline dark:prose-a:text-orange-400 prose-img:rounded-md prose-img:shadow-lg mx-auto mt-8 max-w-4xl"> ${renderSlot($$result2, $$slots["default"])} </div> </section> ` })}`;
}, "/root/code/tmd_astro/src/layouts/MarkdownLayout.astro", void 0);

export { $$MarkdownLayout as $ };
