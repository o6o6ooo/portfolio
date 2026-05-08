import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sakura Wallace",
  description: "Hi, I&apos;m Sakura a Full-Stack Engineer.",
  icons: {
    icon: "/favicon.svg",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fcff",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
