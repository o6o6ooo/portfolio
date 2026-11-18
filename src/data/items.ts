export type PortfolioItem = {
  id: string;
  title: string;
  link?: string;
  learnMoreLink?: string;
  icon: string;
  images: string[];
};

export const socialLinks = {
  email: "mailto:066sakura@gmail.com",
  linkedin: "https://www.linkedin.com/in/sakurawallace/",
  instagram: "https://www.instagram.com/appsbyooo/",
};

export const items: PortfolioItem[] = [
  {
    id: "kuusi",
    title: "Kuusi",
    link: "https://apps.apple.com/gb/app/kuusi/id6761270044",
    learnMoreLink: "https://kuusi.app",
    icon: "/kuusi-christmas.png",
    images: [
      "/kuusi/AppStore1.jpg",
      "/kuusi/AppStore2.jpg",
      "/kuusi/AppStore3.jpg",
    ],
  },
  {
    id: "lightwell",
    title: "Lightwell",
    icon: "/lightwell-christmas.png",
    link: "https://apps.apple.com/gb/app/lightwell-film-camera/id6812115687",
    learnMoreLink: "https://getlightwell.vercel.app",
    // スクリーンショット3枚のパスを後から追加する。
    images: [],
  },
];
