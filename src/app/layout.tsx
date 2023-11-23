import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/Layout/Main/MainLayout";

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
      <body className={'${inter.className} antialiased'}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
