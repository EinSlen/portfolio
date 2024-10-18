import { Metadata } from "next"
import { Footer, Header, ThemeProvider } from "@/components"
import { REVALIDATE_TIME, siteConfig } from "@/config"
import "@/styles/globals.css"

export const revalidate = REVALIDATE_TIME

export const metadata: Metadata = {
  title: {
    default: "Portfolio de damlencourt Valentin",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.image,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="min-h-[calc(100vh-64px)]">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
