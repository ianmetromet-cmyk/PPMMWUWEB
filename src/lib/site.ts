// Replace "#" with the real destination once it's available.
export const externalLinks = {
  linktree: "https://linktr.ee/ppmmwu",
  memberActionTeam: "https://tr.ee/hijdXx6ALv",
  bargainingPrinciples: "#",
};

// GitHub Pages can't process form submissions on its own, so the form posts to Formspree.
export const contactFormEndpoint = "https://formspree.io/f/meaepkjl";

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT US", href: "/contact" },
  { label: "ABOUT", href: "/about" },
  { label: "TIMELINE", href: "/timeline" },
] as const;
