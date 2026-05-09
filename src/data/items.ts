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

export const items: BubbleItem[] = [
  {
    id: "kuusi",
    name: "Kuusi",
    description: "Family photo sharing web app",
    link: "https://kuusi-f06ab.web.app/",
    icon: "/icons/kuusi.png",
    type: "work",
    target: "_blank",
  },
  {
    id: "contact",
    name: "Contact Me",
    link: "mailto:066sakura@gmail.com",
    icon: "/icons/contact.png",
    type: "action",
    target: "_self",
  },
  {
    id: "github",
    name: "GitHub",
    link: "https://github.com/o6o6ooo",
    icon: "/icons/github.png",
    type: "action",
    target: "_blank",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sakurawallace/",
    icon: "/icons/linkedin.png",
    type: "action",
    target: "_blank",
  },
  {
    id: "ikeabubbles",
    name: "Ikea Bubbles",
    link: "https://ikea-bubbles.vercel.app",
    icon: "/icons/ikea-bubbles.png",
    type: "work",
    target: "_blank",
  },
  {
    id: "colour-bubbles",
    name: "Colour Bubbles",
    link: "https://colour-bubbles.vercel.app",
    icon: "/icons/colour-bubbles.png",
    type: "work",
    target: "_blank",
  },
  {
    id: "nuzdex",
    name: "Nuzdex",
    link: "https://github.com/o6o6ooo/nuzdex",
    icon: "/icons/nuzdex.png",
    type: "work",
    target: "_blank",
  },
];
