import { NavItem, SiteConfig, HeroSection } from '../lib/types';

export const NAV_LINKS: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

export const SITE_CONFIG: SiteConfig = {
  name: "CoderDojo Template",
  description: "A secondary project structure using React + Vite",
  links: {
    facebook: "https://facebook.com",
    github: "https://github.com/coderdojo",
  }
};

export const HERO_CONTENT: HeroSection = {
  title: "Welcome to our Dojo",
  subtitle: "Start your journey into coding today!",
  cta: "Get Started"
};
