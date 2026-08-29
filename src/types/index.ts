export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  stats?: string;
  link?: string;
}

export interface ImpactStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  icon?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  date?: string;
}

export interface Story {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

export interface DonationOption {
  amount: number;
  label: string;
  description: string;
  isPopular?: boolean;
}

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
