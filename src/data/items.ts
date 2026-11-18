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
  // プロフィールURLを設定するとInstagramアイコンを表示する。
  instagram: "",
};

export const items: PortfolioItem[] = [
  {
    id: "lightwell",
    title: "Lightwell",
    icon: "/lightwell-christmas.png",
    // 公開時にURLとスクリーンショット3枚のパスを追加する。
    link: "",
    learnMoreLink: "",
    images: [],
  },
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
];
