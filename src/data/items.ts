export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  link?: string;
  learnMoreLink: string;
  icon: string;
  images: string[];
  target?: "_blank" | "_self";
};

export const items: PortfolioItem[] = [
  {
    id: "kuusi",
    title: "Kuusi",
    category: "Photo & Video",
    summary: "Share photos with your loved ones.",
    link: "https://apps.apple.com/gb/app/kuusi/id6761270044",
    learnMoreLink: "https://kuusi.app",
    icon: "/kuusi/kuusi.png",
    images: [
      "/kuusi/AppStore1.jpg",
      "/kuusi/AppStore2.jpg",
      "/kuusi/AppStore3.jpg",
      "/kuusi/AppStore4.jpg",
      "/kuusi/AppStore6.jpg",
      "/kuusi/AppStore7.jpg",
    ],
    target: "_blank",
  },
  {
    id: "viisi",
    title: "Viisi",
    category: "Games",
    summary: "Your private Hold’em table.",
    link: "https://apps.apple.com/gb/app/kuusi/id6792840532",
    learnMoreLink: "https://viisi.vercel.app",
    icon: "/viisi/viisi.png",
    images: [
      "/viisi/AppStore1.jpg",
      "/viisi/AppStore2.jpg",
      "/viisi/AppStore3.jpg",
      "/viisi/AppStore4.jpg",
      "/viisi/AppStore5.jpg",
    ],
    target: "_blank",
  },
];
