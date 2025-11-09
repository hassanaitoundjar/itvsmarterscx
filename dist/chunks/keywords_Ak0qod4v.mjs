const primaryKeywords = [
  "IPTV Smarters Pro",
  "IPTV Smarters",
  "IPTV streaming",
  "IPTV service",
  "IPTV subscription",
  "IPTV player",
  "best IPTV",
  "premium IPTV"
];
const deviceKeywords = [
  "Android IPTV",
  "iOS IPTV",
  "Smart TV IPTV",
  "Samsung Smart TV",
  "LG Smart TV",
  "Roku IPTV",
  "Firestick IPTV",
  "Fire TV",
  "MAG IPTV",
  "Enigma2",
  "Kodi IPTV",
  "PC IPTV",
  "Windows IPTV",
  "macOS IPTV"
];
const contentKeywords = [
  "Live TV",
  "VOD",
  "Video on Demand",
  "TV channels",
  "Movies",
  "TV series",
  "Catch-up TV",
  "EPG",
  "Electronic Program Guide",
  "streaming channels"
];
const featureKeywords = [
  "multi-device compatibility",
  "user-friendly interface",
  "extensive content library",
  "premium channels",
  "secure streaming",
  "streaming app"
];
const pageKeywords = {
  home: [
    ...primaryKeywords,
    "entertainment",
    "streaming service",
    "watch TV online",
    "live streaming",
    ...contentKeywords
  ],
  about: [
    ...primaryKeywords,
    "about IPTV Smarters",
    "IPTV provider",
    "streaming solution",
    ...featureKeywords
  ],
  pricing: [
    ...primaryKeywords,
    "IPTV pricing",
    "IPTV plans",
    "IPTV subscription",
    "affordable IPTV",
    "IPTV deals"
  ],
  blog: [
    ...primaryKeywords,
    "IPTV guide",
    "IPTV tutorial",
    "how to install IPTV",
    "IPTV setup",
    ...deviceKeywords
  ],
  contact: [
    ...primaryKeywords,
    "IPTV support",
    "contact IPTV Smarters",
    "customer support"
  ]
};

export { pageKeywords as p };
