// Replace each "#" with the real destination once it's available.
export const externalLinks = {
  linktree: "#",
  memberActionTeam: "#",
  bargainingPrinciples: "#",
};

// A Formspree (or similar) endpoint, e.g. "https://formspree.io/f/abcd1234".
// GitHub Pages can't process form submissions on its own.
export const contactFormEndpoint = "";

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT US", href: "/contact" },
  { label: "ABOUT", href: "/about" },
] as const;
