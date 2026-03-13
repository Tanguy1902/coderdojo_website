export interface NavItem {
  name: string;
  href: string;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  cta: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  links: {
    facebook: string;
    github: string;
  };
}
