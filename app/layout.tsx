import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "Batul Champeli — Interior Designer",
  description:
    "Mumbai-based interior designer specialising in residential and commercial spaces. Thoughtful design, refined execution.",
  keywords: ["interior designer", "Mumbai", "residential interior", "luxury design"],
  openGraph: {
    title: "Batul Champeli — Interior Designer",
    description: "Thoughtful design, refined execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col cursor-none-md">
        <LoadingScreen />
        <SmoothScroll />
        <CustomCursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
