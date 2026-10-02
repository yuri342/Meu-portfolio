import type { Metadata } from "next";
import { Krona_One, Raleway, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const kronaOne = Krona_One({
  variable: "--font-krona-one",
  subsets: ["latin"],
  weight: "400", // Krona One só tem o peso 400
});

export const metadata: Metadata = {
  title: "You Make it",
  description: "You Make Client Page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${kronaOne.variable} ${raleway.variable} ${playfairDisplay.variable} antialiased`}
    >
      <body className="">{children}</body>
    </html>
  ); 
}