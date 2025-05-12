import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Provider } from "react-redux";



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
  authors: [{ name: "Keith Cyrill A. Diaz", url: "https://keithdiaz.vercel.app/" }],
  openGraph: {
    url: "https://keithdiaz.vercel.app/",
    title: "Keith Diaz - Full Stack Developer",
    description: "Explore the work of Keith Diaz, a Full Stack Developer from the Philippines. Expertise in JavaScript and TypeScript frameworks.",
    siteName: "Keith Diaz Portfolio",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/portfolio-keith.appspot.com/o/Profile%20Image%2FDiaz%2C%20Keith%20Cyrill%20A.jpg?alt=media&token=1a585aab-91ee-4d1e-85cd-4cb0e4d2f038",
        width: 630,
        height: 1200,
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
