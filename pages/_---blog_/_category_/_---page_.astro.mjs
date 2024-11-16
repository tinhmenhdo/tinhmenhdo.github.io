import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import { b as blogCategoryRobots, g as getStaticPathsBlogCategory } from '../../../sfYYkhPc/D_ghFfRQ.js';
import { $ as $$PageLayout } from '../../../sfYYkhPc/DJ33LBXk.js';
import { $ as $$Headline, a as $$List, b as $$Pagination } from '../../../sfYYkhPc/DQ9BCOut.js';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  return await getStaticPathsBlogCategory({ paginate });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page, category } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Category '${category.title}' ${currentPage > 1 ? ` \u2014 Page ${currentPage}` : ""}`,
    robots: {
      index: blogCategoryRobots?.index,
      follow: blogCategoryRobots?.follow
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-4 md:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, {}, { "default": ($$result3) => renderTemplate`${category.title}` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} </section> ` })}`;
}, "/root/code/tmd_astro/src/pages/[...blog]/[category]/[...page].astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/[...blog]/[category]/[...page].astro";
const $$url = "/[...blog]/[category]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
