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
    thumbnail: "/kuusi/kuusi.png",
    target: "_blank",
  },
];
