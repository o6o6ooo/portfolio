export type PortfolioItem = {
  id: string;
  title: string;
  genre: "Personal project" | "Work";
  summary: string;
  link?: string;
  thumbnail: string;
  target?: "_blank" | "_self";
};

export const items: PortfolioItem[] = [
  {
    id: "kuusi",
    title: "Kuusi",
    genre: "Personal project",
    summary: "An iOS app for private family photo sharing with a social feed feel.",
    link: "https://apps.apple.com/gb/app/kuusi/id6761270044",
    thumbnail: "/thumbnails/kuusi.png",
    target: "_blank",
  },
  {
    id: "ikea-bubbles",
    title: "Ikea Bubbles",
    genre: "Personal project",
    summary: "A playful browsing experiment that turns IKEA products into floating bubbles.",
    link: "https://ikea-bubbles.vercel.app",
    thumbnail: "/thumbnails/ikea-bubbles.png",
    target: "_blank",
  },
  {
    id: "colour-bubbles",
    title: "Colour Bubbles",
    genre: "Personal project",
    summary: "An interactive colour playground built around floating, responsive bubbles.",
    link: "https://colour-bubbles.vercel.app",
    thumbnail: "/thumbnails/colour-bubbles.png",
    target: "_blank",
  },
  {
    id: "nuzdex",
    title: "Nuzdex",
    genre: "Personal project",
    summary: "A compact Pokédex-style project for tracking Nuzlocke runs.",
    link: "https://github.com/o6o6ooo/nuzdex",
    thumbnail: "/thumbnails/nuzdex.png",
    target: "_blank",
  },
];
