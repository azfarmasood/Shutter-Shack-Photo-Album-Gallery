import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Sideheader  from "@/components/layout/Sideheader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Excusive Image Album Gallery",
  description: "Created by Azfar Raza and Zeryab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen mt-auto dark`}>
        <Header/>
        <div className="flex flex-row w-full">
          <div>
            <Sideheader/>
          </div>
        <div className="w-full">
        {children}
        </div>
        </div>
        </body>
    </html>
  );
}
