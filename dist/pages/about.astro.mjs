import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CwCVLbYD.mjs';
import 'kleur/colors';
import { $ as $$Features2 } from '../chunks/Features2_DRqJhHDu.mjs';
import { $ as $$Features3 } from '../chunks/Features3_DxCR9Di0.mjs';
import { $ as $$Hero } from '../chunks/Hero_CHmsnuQT.mjs';
import { $ as $$Stats } from '../chunks/Stats_BfmBDC-9.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_BZPM_SAQ.mjs';
import { p as pageKeywords } from '../chunks/keywords_Ak0qod4v.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "About Us \u2014 IPTV Smarters Pro | Premium IPTV Streaming Service",
    description: "Learn about IPTV Smarters Pro - Your go-to destination for hassle-free entertainment. Premium IPTV streaming service with multi-device compatibility, extensive content library, and dedicated customer support.",
    keywords: pageKeywords.about.join(", ")
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "About us", "image": {
    src: "~/assets/images/hero-image.webp",
    alt: "IPTV Smarters Pro "
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Welcome to IPTV Smarters, your destination for cutting-edge IPTV solutions. We're dedicated to revolutionizing your entertainment experience with top-quality streaming services and unparalleled convenience.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Experience Unmatched Entertainment: ${maybeRenderHead()}<br> <span class="text-accent dark:text-white"> Join IPTV Smarters Today!</span> ` })}` })}  ${renderComponent($$result2, "Stats", $$Stats, { "title": "Statistics about us", "stats": [
    { title: "Channels", amount: "50K+" },
    { title: "Satisfied Clients", amount: "10K+" },
    { title: "Positive Feedbacks", amount: "1K+" },
    { title: "Freebies Released", amount: "100%" }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Our Mission", "subtitle": "At IPTV Smarters, our mission is to provide you with the ultimate IPTV experience. We're committed to delivering seamless streaming, a user-friendly interface, and a vast selection of content to suit every preference.", "columns": 3, "isBeforeContent": true, "items": [
    {
      title: "Unrivaled Performance",
      description: "Morbi faucibus luctus quam, sit amet aliquet felis tempor id. Cras augue massa, ornare quis dignissim a, molestie vel nulla.",
      icon: "tabler:template"
    },
    {
      title: "User-Friendly Interface",
      description: "Navigate our intuitive interface with ease, designed to enhance your viewing experience and make discovering new content a breeze.",
      icon: "tabler:template"
    },
    {
      title: "Secure and Reliable",
      description: "Your security and privacy are our top priorities. We employ advanced encryption and security protocols to safeguard your data at all times.",
      icon: "tabler:template"
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "columns": 3, "isAfterContent": true, "items": [
    {
      title: "Extensive Content Library",
      description: "Access a wide variety of channels, including live TV, sports, movies, and more. IPTV Smarters offers new content to discover and enjoy, ensuring there's something for everyone.",
      icon: "tabler:library"
    },
    {
      title: "Dedicated Customer Support",
      description: "Get round-the-clock support from our dedicated team for any questions or assistance needed. We promise prompt and helpful service to ensure your satisfaction.",
      icon: "tabler:headset"
    },
    {
      title: "Multi-Device Compatibility",
      description: "Experience crystal-clear HD streaming with IPTV Smarters Pro across various devices. Enjoy unparalleled picture quality for an immersive viewing experience, whether for live TV, movies, or on-demand content.",
      icon: "tabler:device-desktop"
    },
    {
      title: "Compatibility",
      description: "Supported platforms and devices: MAG, Android, PC, iOS, Enigma2, Roku, Kodi, and Smart-TV. Watch your favorite content on any device you prefer.",
      icon: "tabler:devices"
    },
    {
      title: "POWERFUL SERVERS",
      description: "Our 20 Gigabits Servers are strategically located to provide the best connectivity. Experience lightning-fast streaming with minimal buffering and maximum reliability.",
      icon: "tabler:server"
    },
    {
      title: "PREMIUM IPTV SOLUTION",
      description: "IPTV Smarters Pro is a reliable and stable IPTV streaming service available globally. Enjoy premium quality streaming with our cutting-edge technology and robust infrastructure.",
      icon: "tabler:brand-apple"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=768&h=320&fit=min&auto=format",
    alt: "IPTV Smarters Pro Streaming Experience"
  } })}   ${renderComponent($$result2, "Features2", $$Features2, { "title": "Technical Support", "tagline": "Contact us", "columns": 2, "items": [
    {
      title: "Chat with us",
      description: "You ask, we answer! Our customer support team is available 24/7 to provide you with prompt and helpful assistance.",
      icon: "tabler:messages"
    },
    {
      title: "Call us",
      description: "Call us anytime, and we will be happy to assist you with any questions or concerns you may have.",
      icon: "tabler:headset"
    }
  ] })} ` })}`;
}, "/home/zerobug/website/itvsmarterscx/src/pages/about.astro", void 0);

const $$file = "/home/zerobug/website/itvsmarterscx/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
