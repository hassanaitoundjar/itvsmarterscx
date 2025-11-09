import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CwCVLbYD.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_BZPM_SAQ.mjs';
import { $ as $$Image } from '../chunks/Image_CXN6bE-e.mjs';
import { $ as $$Hero } from '../chunks/Hero_CHmsnuQT.mjs';
import { $ as $$Features } from '../chunks/Features_CDoIjUqN.mjs';
import { $ as $$Steps } from '../chunks/Steps_D1yBwkzI.mjs';
import { $ as $$BlogLatestPosts } from '../chunks/BlogLatestPosts_oFhY2EGY.mjs';
import { $ as $$FAQs } from '../chunks/FAQs_Cd7yXEcn.mjs';
import { $ as $$Stats } from '../chunks/Stats_BfmBDC-9.mjs';
import { $ as $$CallToAction } from '../chunks/CallToAction_aiIIcMMP.mjs';
import { $ as $$Pricing } from '../chunks/Pricing_B9kdnjiZ.mjs';
import { p as pricingPlans } from '../chunks/pricing_D3FcyBO7.mjs';
import { p as pageKeywords } from '../chunks/keywords_Ak0qod4v.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "IPTV Smarters Pro \u2014 Best IPTV Streaming Service | Live TV, Movies & Series",
    description: "Elevate Your Entertainment Experience with IPTV Smarters Pro. Watch 15,000+ Live TV channels, 50,000+ movies & TV shows on Android, iOS, Smart TV, Roku, Firestick. Stream HD/4K content with Xtream Codes API.",
    keywords: pageKeywords.home.join(", "),
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "Subscribe",
      href: "#pricing",
      icon: "tabler:credit-card"
    },
    {
      text: "Download",
      href: "#steps",
      icon: "tabler:download"
    }
  ], "image": { src: "~/assets/images/hero-image.webp", alt: "IPTV Smarters Pro Hero Image" } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Discover the ultimate experience with Smarters Pro. Watch your favorite shows, movies, and live TV channels on-the-go. Seamless streaming, user-friendly interface, and endless content options. Try IPTV Smarters Pro today!
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Elevate Your Entertainment Experience with ${maybeRenderHead()}<span class="text-accent dark:text-white">IPTV Smarters Pro</span> <br class="hidden md:inline">
Watch Your Favorites Anywhere
` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "tagline": "FEATURES", "title": "WHAT IS IPTV SMARTERS?", "subtitle": "The IPTV Smarters app is an exceptional video streaming player that enables your IPTV customers or end users to access and enjoy content such as Live TV, VOD, Series, and Catch-up TV, all provided by you. It is compatible with Android and iOS devices. Smart TVs..", "items": [
    {
      title: "Multi-Device Compatibility",
      description: "A seamless integration between two great frameworks that offer high productivity, performance and versatility. Experience crystal-clear HD streaming with IPTV Smarters Pro. Whether you're watching live TV, movies, or on-demand content, enjoy unparalleled picture quality for an immersive viewing experience.",
      icon: "tabler:device-desktop"
    },
    {
      title: "User-Friendly Interface",
      description: "Navigate through your favorite channels and content effortlessly with IPTV Smarters Pro's intuitive and user-friendly interface. Easily discover new shows, customize your playlists, and access advanced features with just a few clicks.",
      icon: "tabler:layout-dashboard"
    },
    {
      title: "HD, 4K Streaming",
      description: "Experience crystal-clear HD streaming with IPTV Smarters Pro. Whether you're watching live TV, movies, or on-demand content, enjoy unparalleled picture quality for an immersive viewing experience.",
      icon: "tabler:screen-share"
    },
    {
      title: "Extensive Content Library",
      description: "Access a vast library of entertainment with IPTV Smarters Pro. From live TV channels to on-demand movies and series, discover endless content options to suit every taste and preference.",
      icon: "tabler:library"
    }
  ] })}  <section class="relative not-prose py-12 md:py-20 bg-blue-50 dark:bg-slate-800/50"> <div class="absolute inset-0" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <!-- Header Section --> <div class="text-center mb-12 md:mb-16"> <p class="text-sm md:text-base font-bold tracking-wide uppercase text-purple-600 dark:text-purple-400 mb-3">
Welcome to IPTV Smarters
</p> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
Your Ultimate Entertainment Destination
</h2> <p class="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Experience seamless streaming with our cutting-edge IPTV solution. Access thousands of channels, movies, and shows anytime, anywhere.
</p> </div> <!-- First Section: Image Left, Content Right --> <div class="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20"> <!-- Left Column: TV Image with Badges --> <div class="order-2 md:order-1"> <div class="relative"> <!-- Purple Title --> <!-- TV Image --> <div class="relative rounded-lg overflow-hidden shadow-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": "~/assets/images/iptv-smarters.webp", "alt": "Person watching IPTV on smart TV with LIVE TV, MOVIE, SERIES, ALL interface", "width": 700, "height": 500, "widths": [400, 600, 700, 800], "sizes": "(max-width: 768px) 100vw, 50vw", "class": "w-full rounded-lg ", "loading": "lazy" })} </div> </div> </div> <!-- Right Column: Text and Benefits --> <div class="order-1 md:order-2"> <p class="text-base  md:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
With our cutting-edge IPTV solution, accessing your favorite content has never been easier or more enjoyable. Whether you're a sports fanatic, a movie buff, or a TV show enthusiast, we've got you covered.
</p> <div class="space-y-6 md:space-y-8"> <!-- Benefit 1 --> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <div> <h3 class="text-xl font-bold mb-2 dark:text-white">Simplify Your Experience</h3> <p class="text-gray-700 dark:text-gray-300">
Navigate with ease and access a world of entertainment at your fingertips. Say goodbye to complexity and hello to simplicity.
</p> </div> </div> <!-- Benefit 2 --> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <div> <h3 class="text-xl font-bold mb-2 dark:text-white">Endless Options</h3> <p class="text-gray-700 dark:text-gray-300">
Explore a wide selection of channels, including live TV, sports, and more. There's something for everyone.
</p> </div> </div> <!-- Benefit 3 --> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <div> <h3 class="text-xl font-bold mb-2 dark:text-white">Start Today</h3> <p class="text-gray-700 dark:text-gray-300">
Join IPTV Smarters and start enjoying entertainment made easy.${" "} <a href="#pricing" class="text-purple-600 underline hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-semibold">
Subscribe Now!
</a> </p> </div> </div> </div> </div> </div> <!-- Second Section: Content Left, Image Right --> <div class="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"> <!-- Left Column: Text and Benefits --> <div class="order-2 md:order-1"> <h3 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
Simplify your entertainment with IPTV Smarters. Sign up today!
</h3> <div class="space-y-6 md:space-y-8"> <!-- Benefit 1 --> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <div> <h3 class="text-xl font-bold mb-2 dark:text-white">Enjoy Secure Streaming</h3> <p class="text-gray-700 dark:text-gray-300">
Your gateway to effortless entertainment. Stream securely, explore freely.
</p> </div> </div> <!-- Benefit 2 --> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <div> <h3 class="text-xl font-bold mb-2 dark:text-white">Stream Smarter</h3> <p class="text-gray-700 dark:text-gray-300">
Simplify your entertainment with IPTV Smarters. Secure streaming, endless choices.
</p> </div> </div> <!-- Benefit 3 --> <div class="flex items-start gap-4"> <div class="flex-shrink-0"> <div class="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <div> <h3 class="text-xl font-bold mb-2 dark:text-white">Discover Ease</h3> <p class="text-gray-700 dark:text-gray-300">
Navigate easily, stream securely.${" "} <a href="#pricing" class="text-purple-600 underline hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 font-semibold">
Join IPTV Smarters today.
</a> </p> </div> </div> </div> </div> <!-- Right Column: TV Image with Badges --> <div class="order-1 md:order-2"> <div class="relative"> <!-- Purple Title and Badges --> <div class="flex items-center gap-4 mb-6 flex-wrap"> <!-- TV Image --> <div class="relative rounded-lg overflow-hidden shadow-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": "~/assets/images/iptv-smarters-pro.webp", "alt": "Two people watching IPTV on smart TV with LIVE TV, MOVIES, SERIES, ALL interface", "width": 700, "height": 500, "widths": [400, 600, 700, 800], "sizes": "(max-width: 768px) 100vw, 50vw", "class": "w-full rounded-lg", "loading": "lazy" })} </div> </div> </div> </div> </div> </div></section>  ${renderComponent($$result2, "Steps", $$Steps, { "id": "steps", "title": "Simplify Your Experience: Easy Steps to Get Started", "items": [
    {
      title: 'Step 1: <span class="font-medium">Subscribe to Our Service</span>',
      description: "Subscribe now and gain access to a world of entertainment.",
      icon: "tabler:credit-card"
    },
    {
      title: 'Step 2: <span class="font-medium">Download Our App</span>',
      description: "Download our app for seamless access to your favorite content.",
      icon: "tabler:download"
    },
    {
      title: 'Step 3: <span class="font-medium">Enter Your Activation Codes</span>',
      description: "Enter your activation codes (Xtream codes api) and start enjoying our services.",
      icon: "tabler:key"
    },
    {
      title: "Get Ready to Enjoy!",
      icon: "tabler:check"
    }
  ], "image": {
    src: "~/assets/images/phone-home.webp",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "Pricing", $$Pricing, { "id": "pricing", "title": "Iptv Smarters Pro Pricing Plans", "subtitle": "One time payment", "prices": pricingPlans })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "title": "Find out more content in our Blog", "information": `View all posts \xBB
                ` })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Frequently Asked Questions for IPTV SMARTERS PRO", "subtitle": "IPTV Smarters Pro is a popular IPTV player that pairs with any IPTV service for an improved streaming experience.", "tagline": "FAQs", "classes": { container: "max-w-6xl" }, "items": [
    {
      title: "What do I need to start?",
      description: "Subscribe up for iptv smarter pro above. After that, you will get information about username, password and url so you can log in to the smarter iptv app. Once you download the app and log into the app, you can start viewing channels."
    },
    {
      title: "How can I install IPTV Smarters Pro on my devices?",
      description: "Learn the simple steps to download and install IPTV Smarters Pro on your Android, iOS, Smart TV, macOS, or Windows devices."
    },
    {
      title: "What's something you may find puzzling about IPTV Smarters Pro?",
      description: "Explore FAQs to unravel any mysteries and optimize your IPTV Smarters Pro experience for seamless streaming."
    },
    {
      title: "On which devices is it possible to install IPTV Smarters Pro?",
      description: "This app is compatible with all devices running the Android operating system, which encompasses the Amazon Firestick, Fire TV, and various other Android devices."
    },
    {
      title: "Is IPTV Smarters Pro Safe?",
      description: "Yes, you can confidently install and utilize this application on any Fire TV or Android device without any concerns regarding safety."
    },
    {
      title: "Is IPTV Smarters app Legal?",
      description: "Absolutely Yes. This app is 100% legal to install and use."
    }
  ] })}  ${renderComponent($$result2, "Stats", $$Stats, { "stats": [
    { title: "CHANNELS/VODS", amount: "50K+" },
    { title: "SATISFIED CLIENTS", amount: "15K+" },
    { title: "POSITIVE FEEDBACKS", amount: "1K+" },
    { title: "FREEBIES RELEASED", amount: "100%" }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [
    {
      variant: "primary",
      text: "Subscribe Now",
      href: "#pricing",
      icon: "tabler:credit-card"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate`
Unlock a world of entertainment with IPTV Smarters Pro. Stream your favorite channels, movies, and shows on any device, anytime, anywhere.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Experience Unlimited Entertainment with IPTV Smarters Pro
` })}` })} ` })}`;
}, "/home/zerobug/website/itvsmarterscx/src/pages/index.astro", void 0);

const $$file = "/home/zerobug/website/itvsmarterscx/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
