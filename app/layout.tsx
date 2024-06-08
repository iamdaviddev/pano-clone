import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pano",
  description: "Pano integrates with your existing apps to bring your team the full picture of your customer's journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
