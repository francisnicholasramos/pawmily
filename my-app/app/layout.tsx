import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], // Ensures proper character support
  weight: ["400", "700"], // Specify font weights you need
  variable: "--font-poppins", // Define a CSS variable (optional)
});

export const metadata: Metadata = {
  title: "Pawmily",
  description: "Let our pets be mutuals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
