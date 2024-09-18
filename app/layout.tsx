import { Metadata } from "next";
import { Inria_Serif } from "next/font/google";
import "./globals.css";

// Google Font: Inria Serif
const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want to use
  variable: "--font-inria-serif",
});

export const metadata: Metadata = {
  title: "Card Game",
  description: "Card game where the highest card drawn wins",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inriaSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
