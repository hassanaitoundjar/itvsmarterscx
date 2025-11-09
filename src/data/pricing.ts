export interface PricingPlan {
  title: string;
  subtitle: string;
  price: number | string;
  period: string;
  items: Array<{
    description: string;
    icon?: string;
  }>;
  callToAction: {
    text: string;
    href: string;
    target?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  };
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: '1 Month',
    subtitle: 'Best selling - 50% Off',
    price: '20',
    period: 'One time payment',
    items: [
      { description: '15.000+ Live TV Channels', icon: 'tabler:check' },
      { description: '50,000+ Movies & TV Shows', icon: 'tabler:check' },
      { description: 'Premium Live TV Channels', icon: 'tabler:check' },
      { description: 'TV Guide (EPG)', icon: 'tabler:check' },
      { description: 'Support All Devices', icon: 'tabler:check' },
    ],
    callToAction: {
      text: 'Pay Now',
      href: 'https://www.paypal.com/paypalme/MalikaAitoundjar/20',
      target: '_blank',
      variant: 'secondary',
    },
    hasRibbon: false,
  },
  {
    title: '12 Months',
    subtitle: 'Best selling - 55% Off',
    price: '60',
    period: 'One time payment',
    items: [
      { description: '15.000+ Live TV Channels', icon: 'tabler:check' },
      { description: '50,000+ Movies & TV Shows', icon: 'tabler:check' },
      { description: 'Premium Live TV Channels', icon: 'tabler:check' },
      { description: 'TV Guide (EPG)', icon: 'tabler:check' },
      { description: 'Support All Devices', icon: 'tabler:check' },
    ],
    callToAction: {
      text: 'Pay Now',
      href: 'https://www.paypal.com/paypalme/MalikaAitoundjar/60',
      target: '_blank',
      variant: 'primary',
    },
    hasRibbon: true,
    ribbonTitle: 'popular',
  },
  {
    title: '6 Months',
    subtitle: 'Best selling - 50% Off',
    price: '40',
    period: 'One time payment',
    items: [
      { description: '15.000+ Live TV Channels', icon: 'tabler:check' },
      { description: '50,000+ Movies & TV Shows', icon: 'tabler:check' },
      { description: 'Premium Live TV Channels', icon: 'tabler:check' },
      { description: 'TV Guide (EPG)', icon: 'tabler:check' },
      { description: 'Support All Devices', icon: 'tabler:check' },
    ],
    callToAction: {
      text: 'Pay Now',
      href: 'https://www.paypal.com/paypalme/MalikaAitoundjar/40',
      target: '_blank',
      variant: 'secondary',
    },
    hasRibbon: false,
  },
];

// Payment URLs configuration
export const paymentUrls = {
  baseUrl: 'https://www.paypal.com/paypalme/',
  plans: {
    '1month': 'MalikaAitoundjar/20',
    '6months': 'MalikaAitoundjar/40',
    '12months': 'MalikaAitoundjar/60',
  },
  // Helper function to get payment URL for a plan
  getPaymentUrl: (planId: string): string => {
    return `${paymentUrls.baseUrl}${paymentUrls.plans[planId as keyof typeof paymentUrls.plans] || ''}`;
  },
};

