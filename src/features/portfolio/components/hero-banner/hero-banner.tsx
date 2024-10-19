import React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui"
import { MouseScrollAnimation } from "./mouse-scroll-animation"

const data = siteConfig.heroBanner

const HeroBanner = () => {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center p-4">
      <div className="pb-28">
        <h1 className="font-display mb-2 text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl">

        </h1>
        <h2 className="mb-8 text-center text-lg md:text-xl">{data.subtitle}</h2>
        <div className="flex justify-center space-x-2 sm:space-x-4">

        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 translate-x-[-50%]">
        <MouseScrollAnimation />
      </div>
    </div>
  )
}

export default HeroBanner;
