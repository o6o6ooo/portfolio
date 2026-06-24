export type PortfolioItem = {
  id: string;
  title: string;
  genre: "Personal project" | "Work";
  summary: string;
  details: string;
  link?: string;
  symbol: "aperture" | "blocks" | "palette" | "gamepad";
  themeColor: string;
  target?: "_blank" | "_self";
};

export type BubbleItem = {
  id: string;
  name: string;
  description?: string;
  link?: string;
  archived?: boolean;
  icon: string;
  type: "work" | "action";
  target?: "_blank" | "_self";
};

export const items: PortfolioItem[] = [
  {
    id: "kuusi",
    title: "Kuusi",
    genre: "Personal project",
    summary: "An iOS app for private family photo sharing with a social feed feel.",
    details:
      "Combines the privacy of a shared folder with the familiar flow of a social media feed, giving families a calm place to collect and revisit photos together.",
    link: "https://apps.apple.com/gb/app/kuusi/id6761270044",
    symbol: "aperture",
    themeColor: "#EAF3FF",
    target: "_blank",
  },
  {
    id: "ikea-bubbles",
    title: "Ikea Bubbles",
    genre: "Personal project",
    summary: "A playful browsing experiment that turns IKEA products into floating bubbles.",
    details:
      "Explores a more tactile product discovery pattern using motion, collision, and lightweight interaction.",
    link: "https://ikea-bubbles.vercel.app",
    symbol: "blocks",
    themeColor: "#FFF3D8",
    target: "_blank",
  },
  {
    id: "colour-bubbles",
    title: "Colour Bubbles",
    genre: "Personal project",
    summary: "An interactive colour playground built around floating, responsive bubbles.",
    details:
      "A small interaction study for colour, movement, and touch-friendly canvas behaviour.",
    link: "https://colour-bubbles.vercel.app",
    symbol: "palette",
    themeColor: "#F4EAFE",
    target: "_blank",
  },
  {
    id: "nuzdex",
    title: "Nuzdex",
    genre: "Personal project",
    summary: "A compact Pokédex-style project for tracking Nuzlocke runs.",
    details:
      "Designed around quick lookup and collection-style browsing for players managing challenge runs.",
    link: "https://github.com/o6o6ooo/nuzdex",
    symbol: "gamepad",
    themeColor: "#EAF8EF",
    target: "_blank",
  },
];
