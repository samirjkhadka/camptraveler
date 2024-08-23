import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camp Traveler",
  description: "Samir J Khadka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden"> {children}</main>

        <Footer />
      </body>
    </html>
  );
}
