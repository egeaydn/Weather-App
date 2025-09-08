export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Weather App",
  description: "Modern weather forecasting application with beautiful design.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Forecast",
      href: "/forecast",
    },
    {
      label: "Maps",
      href: "/maps",
    },
    {
      label: "About",
      href: "/about",
    }
  ],
  navMenuItems: [
    {
      label: "Current Weather",
      href: "/",
    },
    {
      label: "7-Day Forecast",
      href: "/forecast",
    },
    {
      label: "Weather Maps",
      href: "/maps",
    },
    {
      label: "Favorites",
      href: "/favorites",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/egeaydn",
  },
};
