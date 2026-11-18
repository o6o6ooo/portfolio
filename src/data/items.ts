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
      "/Kuusi1.png",
      "/Kuusi2.jpg",
      "/Kuusi3.jpg",
    ],
  },
  {
    id: "lightwell",
    title: "Lightwell",
    icon: "/lightwell-christmas.png",
    link: "https://apps.apple.com/gb/app/lightwell-film-camera/id6812115687",
    learnMoreLink: "https://getlightwell.vercel.app",
    images: [
      "/Lightwell1.jpg",
      "/Lightwell2.jpg",
      "/Lightwell3.jpg",
    ],
  },
];
