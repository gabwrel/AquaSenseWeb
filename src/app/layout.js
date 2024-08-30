import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AquaSense",
  description: "AquaSense is an innovative aquaculture management system that streamlines fish farm operations with IoT-driven solutions, including dynamic filtration, real-time monitoring, and modular design.",
  keywords: "AquaSense, aquaculture management, IoT, fish farm management, water filtration, real-time monitoring",
  author: "John Gabriel Declaro, Hannah Mae Arceño, Jayrose Bunda, Royce Karl Gonzaga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
