import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const profileImageURL = process.env.NEXT_PUBLIC_DP_URL

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Keith Diaz Portfolio",
  description: "Keith Diaz - A passionate Full Stack Developer specializing in JavaScript and TypeScript frameworks with expertise in mobile and web development.",
  keywords: "Keith Diaz, Keith Cyrill Diaz, Full Stack Developer, JavaScript, TypeScript, React, Node.js, Portfolio",
  authors: [{ name: "Keith Diaz", url: "https://keithdiaz.vercel.app/" }],
  openGraph: {
    url: "https://keithdiaz.vercel.app/",
    title: "Keith Diaz - Full Stack Developer",
    description: "Explore the work of Keith Diaz, a MERN Stack Developer from the Philippines. Expertise in JavaScript and TypeScript frameworks.",
    siteName: "Keith Diaz Portfolio",
    images: [
      {
        url: profileImageURL as string,
        width: 1200,
        height: 630,
        alt: "Keith Diaz Portfolio",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@keithdiaz",
  //   title: "Keith Diaz Portfolio",
  //   description: "Keith Diaz - A Full Stack Developer specializing in JavaScript and TypeScript frameworks.",
  //   image: "https://keithdiaz.vercel.app/images/og-image.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
