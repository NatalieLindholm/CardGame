import { Metadata } from "next";
import { Inria_Serif } from "next/font/google";
import { FlippedProvider } from "./context/FlippedContext";
import "./globals.css";

// Google Font: Inria Serif
const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want to use
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
      <body className={`${inriaSerif.className} antialiased`}>
        <FlippedProvider>{children}</FlippedProvider>
      </body>
    </html>
  );
}
