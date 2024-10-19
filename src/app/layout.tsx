import { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import Loader from "@/components/loader";

//export const revalidate = REVALIDATE_TIME;

export const metadata: Metadata = {
  title: {
    default: "Portfolio de Damlencourt Valentin",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "./favicon.ico",
  }
};

// Dynamic imports
const ThemeProvider = dynamic(() => import("@/components/theme-provider"), {
  ssr: false,
});
const Header = dynamic(() => import("@/components/header/header"), { ssr: false, loading: () => <Loader /> });
const Footer = dynamic(() => import("@/components/footer/footer"), { ssr: false });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="fr">
      <body>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Header />
        <div className="min-h-[calc(100vh-64px)]">{children}</div>
      </ThemeProvider>
      </body>
      </html>
  );
}
