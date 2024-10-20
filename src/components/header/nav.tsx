import React from "react"
import { INavItem } from "@/types"
import { cn } from "@/utils"

interface NavProps {
  items: INavItem[]
  direction?: "column" | "row"
  onNavItemClick?: () => void
}

export const Nav = (props: NavProps) => {
  const { items, direction = "row", onNavItemClick } = props

  return (
    <nav
      className={cn("flex space-x-0 sm:space-x-2", {
        "flex-col items-stretch": direction === "column",
      })}
    >
      {items?.map(
        (item, index) =>
          item.href && (
            <a
              key={index}
              href={item.href}
              className={cn(
                "hover:text-foreground flex items-center justify-center rounded-lg px-5 py-2 text-sm font-medium transition-all",
                item.disabled && "cursor-not-allowed opacity-80", "text-foreground/60"
              )}
              onClick={onNavItemClick}
            >
              {item.title}
            </a>
          )
      )}
    </nav>
  )
}
