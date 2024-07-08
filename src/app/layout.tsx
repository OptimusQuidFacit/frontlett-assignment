import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SINC | Service Incubation Company",
  description: "SINC Partners is a service incubation company Connecting experts in product development and growth marketing willing to offer their services to amazing startups. SINC With Us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen min-w-[1300px]  overflow-x-hidden`}>
        <nav style={{position:"sticky", top: 0, zIndex:100}}>
          <Navbar/>
        </nav>
          {children}
        <footer className="bg-primary">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
