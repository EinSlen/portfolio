import React, { Suspense } from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/utils"
import { Background } from "./background"
import { MobileNav } from "./mobile-nav"
import { Nav } from "./nav"
import { ThemeToggle } from "./theme-toggle"

const name = siteConfig.name
const nav = siteConfig.header.nav

export const Header = () => {
  return (
    <header className={cn("sticky top-0 z-40 w-full")}>
      <div className="relative">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <a
            href="/"
            className="mr-8 flex items-center space-x-2 transition-all hover:opacity-80"
          >
            <span className="inline-block font-bold">{"<"+name+"/>"}</span>
          </a>
          <div className="hidden flex-1 sm:flex">
            <div className="flex-1">
              <Nav items={nav}/>
            </div>
            <div className="flex space-x-2">
              <ThemeToggle/>
            </div>
          </div>
          <div className="flex flex-1 sm:hidden ">
            <div className="flex-1" />
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
        {/* background */}
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </div>
    </header>
  )
}

export default Header
