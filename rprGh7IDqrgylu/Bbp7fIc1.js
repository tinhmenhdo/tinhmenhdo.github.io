import { b as createAstro, c as createComponent, r as renderComponent, d as Fragment, a as renderTemplate, e as addAttribute, m as maybeRenderHead } from './uu9o3mPN.js';
import 'piccolore';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tinhmenhdo.github.io");
const $$Adbanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Adbanner;
  const { slot } = Astro2.props;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2941220352835674" crossorigin="anonymous"></script>', '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2941220352835674"', ' data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>'])), maybeRenderHead(), addAttribute(slot, "data-ad-slot")) })}`}`;
}, "/root/code/tmd_astro/src/components/Adbanner.astro", void 0);

export { $$Adbanner as $ };
