import {
  ServiceItem,
  ValueProp,
  WhyUsPoint,
  PortfolioItem,
  StatisticItem,
  ProcessStep,
  TestimonialItem,
} from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const CLIENT_LOGOS = [
  { name: 'ApexDigital Labs', symbol: 'AD' },
  { name: 'OmniHealth Media', symbol: 'OH' },
  { name: 'SaaSify Platforms', symbol: 'SP' },
  { name: 'Lumina Retail Co.', symbol: 'LR' },
  { name: 'Kore Ventures', symbol: 'KV' },
  { name: 'Verve Studio Collective', symbol: 'VS' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'wordpress-development',
    title: 'WordPress Website Development',
    description:
      'High-converting, fast and responsive WordPress websites designed around your business goals.',
    category: 'web',
    deliverables: ['Custom Theme Architecture', 'WooCommerce & Payments', 'Speed & Core Web Vitals', 'Conversion Flow UX'],
    iconName: 'Layout',
  },
  {
    id: 'seo-growth',
    title: 'SEO',
    description:
      'Build sustainable organic visibility and attract the right customers through search.',
    category: 'organic',
    deliverables: ['Technical SEO Audits', 'High-Intent Keyword Mapping', 'Content Architecture', 'Authority & Backlinks'],
    iconName: 'Search',
  },
  {
    id: 'google-ads',
    title: 'Google Ads',
    description:
      'Performance-focused Google campaigns designed to generate qualified leads and sales.',
    category: 'ads',
    deliverables: ['Search & Intent Ads', 'Performance Max (PMax)', 'Google Shopping Setup', 'Conversion Tracking & ROAS'],
    iconName: 'Target',
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    description:
      'Creative and conversion-focused Facebook and Instagram campaigns that scale.',
    category: 'ads',
    deliverables: ['Creative Testing Matrices', 'Lookalike & Custom Audiences', 'Retargeting Funnels', 'Real-Time ROAS Scaling'],
    iconName: 'Share2',
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    description:
      'Build a consistent social presence that increases awareness, engagement and trust.',
    category: 'organic',
    deliverables: ['Editorial Calendar', 'Community Engagement', 'Brand Aesthetic Direction', 'Platform Trend Leveraging'],
    iconName: 'TrendingUp',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description:
      'Professional creatives that make your brand visually memorable.',
    category: 'creative',
    deliverables: ['Brand Identity Systems', 'Ad Creative Sets', 'Marketing Collateral', 'Pitch Decks & UI Assets'],
    iconName: 'Palette',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description:
      'Engaging short-form and long-form video content designed for modern digital platforms.',
    category: 'creative',
    deliverables: ['Reels, Shorts & TikToks', 'High-Retention Pacing', 'Dynamic Typography & Sound', 'YouTube Video Production'],
    iconName: 'Film',
  },
  {
    id: 'ai-video-creation',
    title: 'AI Video Creation',
    description:
      'Use AI-powered creative workflows to produce engaging marketing videos faster.',
    category: 'ai',
    deliverables: ['AI Avatar Presentations', 'Synthetic Script Generation', 'Multilingual Localization', 'Rapid Visual Prototyping'],
    iconName: 'Sparkles',
  },
  {
    id: 'ai-marketing-solutions',
    title: 'AI Marketing Solutions',
    description:
      'Smart AI tools and workflows to improve content, creativity, research and marketing efficiency.',
    category: 'ai',
    deliverables: ['Competitor Intelligence Bots', 'Predictive Audience Insights', 'AI Content Pipelines', 'Automated Lead Enrichment'],
    iconName: 'Cpu',
  },
];

export const VALUE_PROPOSITIONS: ValueProp[] = [
  {
    id: 'strategy-first',
    title: 'Strategy First',
    description: 'Every campaign starts with a clear business objective.',
    iconName: 'Compass',
  },
  {
    id: 'conversion-focused',
    title: 'Conversion Focused',
    description: 'We design websites and campaigns around actions, not vanity metrics.',
    iconName: 'Crosshair',
  },
  {
    id: 'data-driven',
    title: 'Data Driven',
    description: 'Use analytics and performance data to make smarter decisions.',
    iconName: 'BarChart3',
  },
  {
    id: 'creative-that-converts',
    title: 'Creative That Converts',
    description: 'Strong visuals and messaging built to attract and engage.',
    iconName: 'Layers',
  },
  {
    id: 'ai-powered',
    title: 'AI Powered',
    description: 'Modern AI workflows help us work faster and smarter.',
    iconName: 'Zap',
  },
  {
    id: 'long-term-growth',
    title: 'Long-Term Growth',
    description: 'Build digital assets that continue creating value over time.',
    iconName: 'ShieldCheck',
  },
];

export const WHY_CHOOSE_US: WhyUsPoint[] = [
  {
    number: '01',
    title: 'One Partner, Multiple Solutions',
    description:
      'Eliminate agency fragmentation. From web engineering and SEO to paid search, social campaigns, and AI creative assets, everything harmonizes under one unified growth team.',
  },
  {
    number: '02',
    title: 'Strategy + Creativity + Performance',
    description:
      'We never treat creative design and media buying as separate silos. We pair mathematical audience targeting with high-converting visual assets that actually persuade customers.',
  },
  {
    number: '03',
    title: 'Transparent Communication',
    description:
      'Zero vanity metrics or obscure spreadsheets. You receive clean live dashboards, clear weekly growth updates, and direct access to your dedicated marketing strategists.',
  },
  {
    number: '04',
    title: 'Business-Focused Marketing',
    description:
      'We measure our success by your bottom-line profit, customer acquisition cost (CAC), and pipeline revenue—not empty impressions or accidental clicks.',
  },
  {
    number: '05',
    title: 'Modern AI-Powered Workflows',
    description:
      'By integrating state-of-the-art AI tooling across our research, content synthesis, and video workflows, we deliver enterprise-grade velocity without enterprise-grade bloat.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'brand-growth-campaign',
    title: 'Brand Growth Campaign',
    category: 'Performance Marketing',
    filterTag: 'performance',
    description:
      'Multichannel customer acquisition engine combining targeted Google Ads and high-converting retargeting funnels for an expanding D2C wellness brand.',
    metric: '+380%',
    metricLabel: 'ROAS Achieved',
    imageAlt: 'Performance marketing dashboard showing revenue surge',
    accentColor: '#6C4CE6',
    tags: ['Google Ads', 'Meta Ads', 'Funnel Strategy'],
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Website',
    category: 'WordPress + WooCommerce',
    filterTag: 'web',
    description:
      'Bespoke, blazing-fast WordPress & WooCommerce storefront optimized for mobile checkouts, sub-second page loads, and elevated brand positioning.',
    metric: '1.2s',
    metricLabel: 'Page Load Speed',
    imageAlt: 'Modern WooCommerce store interface mockup',
    accentColor: '#8B6FF0',
    tags: ['WordPress', 'Custom UX', 'Stripe & Checkout'],
  },
  {
    id: 'social-media-growth',
    title: 'Social Media Growth',
    category: 'Social Media Marketing',
    filterTag: 'social',
    description:
      'End-to-end organic social acceleration program utilizing viral short-form video editing and authentic brand narrative building across Instagram and LinkedIn.',
    metric: '+240%',
    metricLabel: 'Organic Reach',
    imageAlt: 'Social media growth analytics and video creative layout',
    accentColor: '#6C4CE6',
    tags: ['Reels & Shorts', 'Brand Positioning', 'Community'],
  },
  {
    id: 'lead-generation-campaign',
    title: 'Lead Generation Campaign',
    category: 'Google Ads + Meta Ads',
    filterTag: 'performance',
    description:
      'High-intent B2B pipeline generation strategy utilizing localized search keywords, interactive quiz landing pages, and automated CRM routing.',
    metric: '4.2x',
    metricLabel: 'Qualified Inquiries',
    imageAlt: 'B2B lead generation campaign metrics and funnel architecture',
    accentColor: '#8B6FF0',
    tags: ['Search Campaigns', 'Landing Pages', 'CRM Sync'],
  },
  {
    id: 'ai-creative-production',
    title: 'AI Video & Content Engine',
    category: 'AI Creative Solutions',
    filterTag: 'ai',
    description:
      'Automated marketing content pipeline delivering 40+ customized high-definition video variants per month for rapid multivariate ad creative testing.',
    metric: '65%',
    metricLabel: 'Production Cost Saved',
    imageAlt: 'AI video production timeline and variant generator',
    accentColor: '#6C4CE6',
    tags: ['AI Video', 'Dynamic Creative', 'Multi-Variant'],
  },
  {
    id: 'organic-seo-scale',
    title: 'Enterprise SEO Dominance',
    category: 'SEO & Content Architecture',
    filterTag: 'web',
    description:
      'Complete technical SEO restructuring and topical cluster content execution securing top 3 rankings across 85+ high-intent search keywords.',
    metric: '+310%',
    metricLabel: 'Organic Inbound Leads',
    imageAlt: 'Search rankings and organic traffic growth curve',
    accentColor: '#8B6FF0',
    tags: ['Technical SEO', 'Keyword Clusters', 'Schema Markup'],
  },
];

export const METRICS_DATA: StatisticItem[] = [
  {
    id: 'projects',
    value: '100+',
    label: 'Projects & Campaigns',
    detail: 'Engineered across web development, paid acquisition, and brand design.',
  },
  {
    id: 'businesses',
    value: '30+',
    label: 'Businesses Supported',
    detail: 'From early-stage startups and coaches to thriving e-commerce enterprises.',
  },
  {
    id: 'channels',
    value: 'Multiple',
    label: 'Digital Channels',
    detail: 'Seamlessly orchestrated across Google, Meta, YouTube, and organic search.',
  },
  {
    id: 'potential',
    value: '24/7',
    label: 'Digital Growth Potential',
    detail: 'Always-on acquisition funnels capturing leads and revenue around the clock.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand your business, audience and goals.',
    timeline: 'Week 1',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Build a focused strategy and action plan.',
    timeline: 'Week 1-2',
  },
  {
    step: '03',
    title: 'Create',
    description: 'Develop your website, content, campaigns and creatives.',
    timeline: 'Week 2-4',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Put the strategy into action across the right channels.',
    timeline: 'Week 4',
  },
  {
    step: '05',
    title: 'Optimize',
    description: 'Analyze performance and continuously improve.',
    timeline: 'Ongoing',
  },
  {
    step: '06',
    title: 'Grow',
    description: 'Scale what works and build long-term digital growth.',
    timeline: 'Scale Phase',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      'Brandformer helped us bring our digital presence together and gave us a much clearer growth strategy. Our lead volume more than doubled in the first 90 days.',
    author: 'Aarav Mehta',
    role: 'Founder & Managing Director',
    company: 'Nexus Living Spaces',
    rating: 5,
    metric: '2.4x Lead Volume',
  },
  {
    id: 'testimonial-2',
    quote:
      'From rebuilding our WordPress store to managing our Google & Meta Ads, the Brandformer team executes with absolute precision. Their transparency and communication are unmatched.',
    author: 'Priya Sharma',
    role: 'Head of E-Commerce Growth',
    company: 'Artisan Botanicals',
    rating: 5,
    metric: '380% ROAS',
  },
  {
    id: 'testimonial-3',
    quote:
      'Their AI-assisted video workflows and creative campaigns set a new standard for our brand. We went from struggling with content production to publishing high-converting assets weekly.',
    author: 'Rohan Kapoor',
    role: 'Chief Marketing Officer',
    company: 'FinVantage Solutions',
    rating: 5,
    metric: '+190% Engagement',
  },
];
