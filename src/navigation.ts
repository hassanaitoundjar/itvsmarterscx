import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      links: [
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
  ],
  actions: [{ text: 'Subscribe', href: getPermalink('/#pricing') }],
};

export const footerData = {
  links: [
    {
      title: 'Site Links',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Pricing', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'contact@iptvsmarters.cx', href: 'mailto:contact@iptvsmarters.cx' },
        { text: 'Phone', href: 'tel:' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Copyright iptvsmarters.cx © 2024 · All rights reserved. <a class="text-blue-600 underline dark:text-muted" href="#"> Need Help?</a>
  `,
};
