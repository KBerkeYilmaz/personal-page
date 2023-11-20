import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseTracker from "./components/mouseTracker";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berke Yilmaz",
  description: "Hello World || Portfolio Site of Berke Yilmaz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
