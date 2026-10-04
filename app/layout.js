import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ali Faaz | CSE Student & AI Builder",
  description:
    "Ali Faaz's personal portfolio — projects, learning journey, and experiments in software development and AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 font-sans text-white antialiased`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}