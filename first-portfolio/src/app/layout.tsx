import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  description: "Keith Diaz - A passionate Full Stack Developer specializing in JavaScript and TypeScript frameworks.",
  keywords: "Keith Diaz, Keith Cyrill Diaz, Full Stack Developer, JavaScript, TypeScript, Portfolio",
  authors: [{ name: "Keith Diaz", url: "https://keithdiaz.vercel.app/" }],
  openGraph: {
    url: "https://keithdiaz.vercel.app/",
    title: "Keith Diaz - Portfolio",
    description: "Keith Diaz - A passionate Full Stack Developer specializing in JavaScript and TypeScript frameworks.",
    siteName: "Keith Diaz Portfolio",
  },
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
