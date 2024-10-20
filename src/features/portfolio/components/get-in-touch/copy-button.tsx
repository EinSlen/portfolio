"use client"

import React from "react"
import { Button, Toaster, useToast } from "@/components/ui"
import { siteConfig } from "@/config/site"

export const CopyButton = () => {
  const { toast } = useToast()
  const mail = siteConfig.links.mail

  const handleClick = () => {

    navigator.clipboard.writeText(mail).then(() => {
        toast({
            description: (
                <div className="flex items-center space-x-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2l4 -4"
                        />
                        <circle cx="12" cy="12" r="9"/>
                    </svg>
                    <span>Email copié</span>
                </div>
            ),
        })
    });

  }
    return (
        <>
            <Button ariaLabel="copy" variant="ghost" size="icon" onClick={handleClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                    />
                    <path
                        d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
              />
          </svg>
      </Button>
        <Toaster/>
    </>
  )
}
