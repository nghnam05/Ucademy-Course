import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "700"],
});

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Nền tảng học trực tuyến chất lượng ! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${manrope.variable} ${roboto.variable} antialiased`}
      >
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
