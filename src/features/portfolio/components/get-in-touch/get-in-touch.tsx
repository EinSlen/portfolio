"use client"

import React from "react"
import { siteConfig } from "@/config"
import { Button } from "@/components/ui"
import { CopyButton } from "./copy-button"
import {useTranslation} from "react-i18next";

const data = siteConfig.contact
const mail = siteConfig.links.mail

export const GetInTouch = () => {
  const { t } = useTranslation();

  return (
    <div className="container max-w-xl text-center">
      <h2 className="font-display mb-4 text-4xl">{data.title}</h2>
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
