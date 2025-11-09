/**
 * SEO Keywords for IPTV Smarters Pro
 * Extracted from https://iptvsmarters.cx/ and optimized for Google search ranking
 */

// High-Value Primary Keywords (High Search Volume)
export const primaryKeywords = [
  'IPTV Smarters Pro',
  'IPTV Smarters',
  'IPTV streaming',
  'IPTV service',
  'IPTV subscription',
  'IPTV player',
  'best IPTV',
  'premium IPTV',
  'IPTV provider',
  'best IPTV service',
  'IPTV streaming service',
  'IPTV app',
  'IPTV software',
  'IPTV platform',
  'IPTV solution',
  'IPTV reseller',
  'IPTV server',
];

// Device-Specific Keywords (High Intent)
export const deviceKeywords = [
  'Android IPTV',
  'iOS IPTV',
  'iPhone IPTV',
  'iPad IPTV',
  'Smart TV IPTV',
  'Samsung Smart TV IPTV',
  'LG Smart TV IPTV',
  'Roku IPTV',
  'Firestick IPTV',
  'Amazon Fire TV IPTV',
  'Fire TV IPTV',
  'MAG IPTV',
  'Enigma2 IPTV',
  'Kodi IPTV',
  'PC IPTV',
  'Windows IPTV',
  'macOS IPTV',
  'Apple TV IPTV',
  'Chromecast IPTV',
  'Xbox IPTV',
  'PlayStation IPTV',
];

// Content & Channel Keywords (High Volume)
export const contentKeywords = [
  'Live TV',
  'VOD',
  'Video on Demand',
  'TV channels',
  'live TV channels',
  'Movies',
  'TV series',
  'TV shows',
  'Catch-up TV',
  'EPG',
  'Electronic Program Guide',
  'streaming channels',
  'sports channels',
  'movie channels',
  'news channels',
  'entertainment channels',
  'premium channels',
  'HD channels',
  '4K channels',
];

// Technology & API Keywords (Technical SEO)
export const technologyKeywords = [
  'Xtream Codes API',
  'XTREAM Codes',
  'IPTV API',
  'M3U playlist',
  'M3U URL',
  'streaming technology',
  'HD streaming',
  '4K streaming',
  'UHD streaming',
  'streaming service',
  'IPTV protocol',
  'streaming protocol',
  'IPTV middleware',
];

// Feature & Benefit Keywords (Conversion-Focused)
export const featureKeywords = [
  'multi-device compatibility',
  'user-friendly interface',
  'extensive content library',
  'premium channels',
  'secure streaming',
  'streaming app',
  'easy setup',
  'fast streaming',
  'buffer-free streaming',
  'high-quality streaming',
  'affordable IPTV',
  'cheap IPTV',
  'reliable IPTV',
  'stable IPTV',
];

// Long-Tail Keywords (High Intent, Lower Competition)
export const longTailKeywords = [
  'best IPTV service for Firestick',
  'best IPTV for Android TV',
  'how to setup IPTV on Smart TV',
  'IPTV subscription cheap',
  'best IPTV provider 2024',
  'IPTV service with EPG',
  'best IPTV for sports',
  'IPTV with catch up TV',
  'how to install IPTV Smarters',
  'best IPTV app for Android',
  'IPTV service for Roku',
  'best IPTV for Samsung TV',
  'IPTV subscription plans',
  'best IPTV player app',
  'how to use Xtream Codes API',
  'best IPTV for multiple devices',
  'affordable IPTV subscription',
  'best IPTV service review',
  'IPTV setup guide',
  'best IPTV for live sports',
];

// Problem-Solving Keywords (Search Intent)
export const problemSolvingKeywords = [
  'how to watch IPTV',
  'how to setup IPTV',
  'how to install IPTV',
  'best IPTV alternative',
  'IPTV not working',
  'IPTV buffering solution',
  'how to fix IPTV',
  'IPTV setup tutorial',
  'IPTV installation guide',
  'how to configure IPTV',
];

// Geographic Keywords (If Targeting Specific Regions)
export const geographicKeywords = [
  'IPTV USA',
  'IPTV UK',
  'IPTV Canada',
  'IPTV Australia',
  'IPTV Europe',
  'IPTV worldwide',
  'global IPTV service',
];

// Competitor & Brand Keywords
export const competitorKeywords = [
  'IPTV Smarters alternative',
  'best IPTV like Smarters',
  'IPTV Smarters vs',
  'similar to IPTV Smarters',
];

// All Keywords Combined
export const allKeywords = [
  ...primaryKeywords,
  ...deviceKeywords,
  ...contentKeywords,
  ...technologyKeywords,
  ...featureKeywords,
  ...longTailKeywords,
  ...problemSolvingKeywords,
  ...geographicKeywords,
];

export const keywordString = allKeywords.join(', ');

// High-Priority Keywords for Meta Tags (Limited to 10-15 most important)
export const highPriorityKeywords = [
  'IPTV Smarters Pro',
  'best IPTV service',
  'IPTV streaming',
  'premium IPTV',
  'IPTV subscription',
  'IPTV player',
  'Smart TV IPTV',
  'Android IPTV',
  'Xtream Codes API',
  'Live TV streaming',
  'VOD IPTV',
  'HD streaming',
  '4K streaming',
  'IPTV app',
  'streaming channels',
];

// Page-specific keywords optimized for SEO
export const pageKeywords = {
  home: [
    ...highPriorityKeywords,
    ...primaryKeywords,
    'entertainment',
    'streaming service',
    'watch TV online',
    'live streaming',
    'stream movies online',
    'watch live TV',
    'online TV streaming',
    ...contentKeywords,
    ...longTailKeywords.slice(0, 5), // Top 5 long-tail for homepage
  ],
  about: [
    ...primaryKeywords,
    'about IPTV Smarters',
    'IPTV provider',
    'streaming solution',
    'IPTV company',
    'IPTV service provider',
    'best IPTV provider',
    'reliable IPTV service',
    ...featureKeywords,
    ...problemSolvingKeywords.slice(0, 3),
  ],
  pricing: [
    ...primaryKeywords,
    'IPTV pricing',
    'IPTV plans',
    'IPTV subscription',
    'affordable IPTV',
    'IPTV deals',
    'cheap IPTV',
    'IPTV subscription cost',
    'IPTV service price',
    'best IPTV deals',
    'IPTV subscription plans',
    'IPTV pricing plans',
    'IPTV cost',
    'IPTV monthly subscription',
    'IPTV yearly subscription',
  ],
  blog: [
    ...primaryKeywords,
    'IPTV guide',
    'IPTV tutorial',
    'how to install IPTV',
    'IPTV setup',
    'IPTV installation',
    'IPTV setup guide',
    'IPTV tutorial guide',
    'how to use IPTV',
    'IPTV configuration',
    ...deviceKeywords,
    ...problemSolvingKeywords,
    ...longTailKeywords,
  ],
  contact: [
    ...primaryKeywords,
    'IPTV support',
    'contact IPTV Smarters',
    'customer support',
    'IPTV help',
    'IPTV customer service',
    'IPTV technical support',
    'IPTV assistance',
    'IPTV support team',
  ],
};

