import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/../src/components/header/header";
import React from "react";
import Button from "@/components/Button";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://onam.vercel.app"),
    alternates: {
        canonical: "/",
    },

    title: "Onam - Front End Developer",
    description:
        "As a front-end developer, I assist emerging businesses in achieving their digital aspirations. I specialize in developing modern web applications",
    keywords:
        "Onam kumar verma, Onam,Portfolio, Onamkrverma, onam Portfolio, web developer Portfolio",
    authors: [
        { name: "Onamkrverma", url: "https://linkedin.com/in/onamkumarverma" },
    ],
    openGraph: {
        images: "/logo.webp",
    },
};

const Footer = dynamic(() => import("@/../src/components/Footer"), { ssr: false });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
                <body className={`${geistSans.variable} dark:bg-[#0D0D0D]`}>
                <main className="container relative">
                    <div className="absolute top-0 w-full h-48 -z-10 flex items-center justify-center rounded-full">
                        <span className="bg-custom_gradient block w-3/4 h-full blur-3xl" />
                    </div>
                    {/* show logo on mobile */}
                    <div className="w-full relative text-center block mb-20 sm:hidden">
                        <Button
                            link="/"
                            variant="icon"
                            title="onam"
                            className={`!text-4xl dark:text-white !p-0 !font-bold ${geistMono.variable}`}
                        >
                            {"<DVLaD/>"}
                        </Button>
                    </div>
                    <Navbar />
                    {children}
                </main>
                <Footer />
                </body>
        </html>
    );
}
