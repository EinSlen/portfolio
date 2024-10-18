"use client"

import React from "react"
import { siteConfig } from "@/config"
import { Button, Sheet, SheetContent, SheetTrigger } from "../ui"
import { Nav } from "./nav"

const nav = siteConfig.header.nav

export const MobileNav = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="sm:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>

            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-40 pt-12">
          <Nav items={nav} direction="column" onNavItemClick={handleClose} />
        </SheetContent>
      </Sheet>
    </div>
  )
}
