const pricingPlans = [
  {
    title: "1 Month",
    subtitle: "Best selling - 50% Off",
    price: "20",
    period: "One time payment",
    items: [
      { description: "15.000+ Live TV Channels", icon: "tabler:check" },
      { description: "50,000+ Movies & TV Shows", icon: "tabler:check" },
      { description: "Premium Live TV Channels", icon: "tabler:check" },
      { description: "TV Guide (EPG)", icon: "tabler:check" },
      { description: "Support All Devices", icon: "tabler:check" }
    ],
    callToAction: {
      text: "Pay Now",
      href: "https://www.paypal.com/paypalme/MalikaAitoundjar/20",
      target: "_blank",
      variant: "secondary"
    },
    hasRibbon: false
  },
  {
    title: "12 Months",
    subtitle: "Best selling - 55% Off",
    price: "60",
    period: "One time payment",
    items: [
      { description: "15.000+ Live TV Channels", icon: "tabler:check" },
      { description: "50,000+ Movies & TV Shows", icon: "tabler:check" },
      { description: "Premium Live TV Channels", icon: "tabler:check" },
      { description: "TV Guide (EPG)", icon: "tabler:check" },
      { description: "Support All Devices", icon: "tabler:check" }
    ],
    callToAction: {
      text: "Pay Now",
      href: "https://www.paypal.com/paypalme/MalikaAitoundjar/60",
      target: "_blank",
      variant: "primary"
    },
    hasRibbon: true,
    ribbonTitle: "popular"
  },
  {
    title: "6 Months",
    subtitle: "Best selling - 50% Off",
    price: "40",
    period: "One time payment",
    items: [
      { description: "15.000+ Live TV Channels", icon: "tabler:check" },
      { description: "50,000+ Movies & TV Shows", icon: "tabler:check" },
      { description: "Premium Live TV Channels", icon: "tabler:check" },
      { description: "TV Guide (EPG)", icon: "tabler:check" },
      { description: "Support All Devices", icon: "tabler:check" }
    ],
    callToAction: {
      text: "Pay Now",
      href: "https://www.paypal.com/paypalme/MalikaAitoundjar/40",
      target: "_blank",
      variant: "secondary"
    },
    hasRibbon: false
  }
];

export { pricingPlans as p };
