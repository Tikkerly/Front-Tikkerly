import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/provider";
import { Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tykkera",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className} suppressHydrationWarning={true}>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
