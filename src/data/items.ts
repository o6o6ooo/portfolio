export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  link?: string;
  icon: string;
  target?: "_blank" | "_self";
};

export const items: PortfolioItem[] = [
  {
    id: "kuusi",
    title: "Kuusi",
    category: "Photo & Video",
    summary: "Share photos with your loved ones.",
    link: "https://apps.apple.com/gb/app/kuusi/id6761270044",
    icon: "/kuusi/kuusi.png",
    target: "_blank",
  },
];
