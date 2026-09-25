export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'ads' | 'organic' | 'creative' | 'ai';
  deliverables: string[];
  iconName: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyUsPoint {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  filterTag: 'all' | 'performance' | 'web' | 'social' | 'ai';
  description: string;
  metric: string;
  metricLabel: string;
  imageAlt: string;
  accentColor: string;
  tags: string[];
}

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  detail: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeline: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  metric: string;
}

export interface ContactFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budgetRange: string;
  message: string;
}
