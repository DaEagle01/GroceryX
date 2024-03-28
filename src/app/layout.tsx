import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GroceryX: Hooking you up with the freshest fish",
  description: "GroceryX: Your one-stop shop for the freshest catch of the day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`${inter.className} pt-12 sm:pt-16`}>
          {children}
        </div>
      </body>
    </html>
  );
}
