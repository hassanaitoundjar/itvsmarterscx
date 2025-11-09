import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CwCVLbYD.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../../chunks/PageLayout_BZPM_SAQ.mjs';
import { $ as $$Headline, a as $$List, b as $$Pagination } from '../../chunks/Pagination_B-Z9EZ91.mjs';
import { d as getStaticPathsBlogList, e as blogListRobots } from '../../chunks/blog_Diyh1o8q.mjs';
import { p as pageKeywords } from '../../chunks/keywords_Ak0qod4v.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://iptvsmarters.io");
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
    title: `Blog${currentPage > 1 ? ` \u2014 Page ${currentPage}` : ""} \u2014 IPTV Smarters Pro`,
    description: "IPTV Smarters Pro blog - Learn how to install and use IPTV on various devices, optimize your streaming experience, setup Xtream Codes API, and get the most out of your IPTV service.",
    keywords: pageKeywords.blog.join(", "),
    robots: {
      index: currentPage === 1,
      follow: blogListRobots?.follow
    },
    openGraph: {
      type: "blog"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="px-6 sm:px-6 py-12 sm:py-16 lg:py-20 mx-auto max-w-4xl"> ${renderComponent($$result2, "Headline", $$Headline, { "subtitle": "IPTV Smarters Pro: Elevate Your Entertainment Experience" }, { "default": async ($$result3) => renderTemplate`
The Blog
` })} ${renderComponent($$result2, "BlogList", $$List, { "posts": page.data })} ${renderComponent($$result2, "Pagination", $$Pagination, { "prevUrl": page.url.prev, "nextUrl": page.url.next })} <!--
      <PostTags tags={allCategories} class="mb-2" title="Search by Categories:" isCategory />
      <PostTags tags={allTags}  title="Search by Tags:" />
    --> </section> ` })}`;
}, "/home/zerobug/website/itvsmarterscx/src/pages/[...blog]/[...page].astro", void 0);

const $$file = "/home/zerobug/website/itvsmarterscx/src/pages/[...blog]/[...page].astro";
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
