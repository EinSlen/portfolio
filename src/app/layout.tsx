import { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import Loader from "@/components/loader";

//export const revalidate = REVALIDATE_TIME;


interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="fr">
      <body>

      </body>
      </html>
  );
}
