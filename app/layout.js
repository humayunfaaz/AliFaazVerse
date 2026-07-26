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

// export const metadata = {
//   title: "AliFaazVerse",
//   description: "A website for Ali Faaz.",
// };
export const metadata = {
  title: "Ali Faaz | AI Software Engineer",
  description:
    "Portfolio of Ali Faaz - AI Software Engineer, Full Stack Developer, and Problem Solver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}>
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}