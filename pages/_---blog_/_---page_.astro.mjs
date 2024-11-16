import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../sfYYkhPc/4CUkstck.js';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../sfYYkhPc/DJ33LBXk.js';
import { $ as $$Headline, a as $$List, b as $$Pagination } from '../../sfYYkhPc/DQ9BCOut.js';
import { d as getStaticPathsBlogList, e as blogListRobots } from '../../sfYYkhPc/D_ghFfRQ.js';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://tinhmenhdo.github.io");
const prerender = true;
const getStaticPaths = async ({ paginate }) => {
  return await getStaticPathsBlogList({ paginate });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const currentPage = page.currentPage ?? 1;
  const metadata = {
    title: `Blog${currentPage > 1 ? ` \u2014 Page ${currentPage}` : ""}`,
    robots: {
      index: blogListRobots?.index,
      follow: blogListRobots?.follow
    },
    openGraph: {
      type: "blog"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, { "subtitle": "A statically generated blog example with news, tutorials, resources and other interesting content related to AstroWind" }, { "default": ($$result3) => renderTemplate`
The Blog
` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} <!--
      <PostTags tags={allCategories} class="mb-2" title="Search by Categories:" isCategory />
      <PostTags tags={allTags}  title="Search by Tags:" />
    --> </section> ` })}`;
}, "/root/code/tmd_astro/src/pages/[...blog]/[...page].astro", void 0);

const $$file = "/root/code/tmd_astro/src/pages/[...blog]/[...page].astro";
const $$url = "/[...blog]/[...page]";

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
