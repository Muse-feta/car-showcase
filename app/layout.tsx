import type { Metadata } from "next";
import "./globals.css";
import { Fotter, NavBar } from "@/components";


export const metadata: Metadata = {
  title: "Muse Car Showroom",
  description: "The official website of Muse Car Showroom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar/>
        {children}
        <Fotter/>
        </body>
    </html>
  );
}
