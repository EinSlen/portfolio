import React from "react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui"
import { CopyButton } from "./copy-button"

const data = siteConfig.contact
const mail = siteConfig.links.mail

const GetInTouch = () => {

  return (
    <div className="container max-w-xl text-center">
      <h2 className="font-display mb-4 font-bold text-4xl">{data.title}</h2>
      <p className="mb-4">{data.description}</p>
      <div className="mb-4 flex items-center justify-center space-x-2 font-semibold">
        <p>{mail}</p>
        <CopyButton />
      </div>
      <Button ariaLabel="call action" size="lg" asChild>
        <a href={data.callToAction.href}>{data.callToAction.label}</a>
      </Button>
    </div>
  )
}

export default GetInTouch;