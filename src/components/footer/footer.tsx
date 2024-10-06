import {
  Codepen,
  GitFork,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Star,
  Twitter,
} from "@/assets/icons"
import { siteConfig } from "@/config"
import { ILinks } from "@/types"
import { Button, Separator } from "../ui"


const links = siteConfig.links
const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  instagram: Instagram,
  codepen: Codepen,
}

export const Footer = async () => {

  return (
    <div className="container mt-12 pb-1">
      <Separator />
      <div className="flex flex-col-reverse items-start justify-between py-4 sm:flex-row">
        <div>
          <p>
            All rights reserved ©{" "}
            <a
              href="https://github.com/einslen/portfolio"
              target="_blank"
              className="hover:underline"
            >
              {siteConfig.name}
            </a>{" "}
            2024.
          </p>
        </div>
        <div className="flex space-x-1">
          {/* TODO: Repetition of ILinks */}
          {Object.keys(links).map((key) => {
            if (links[key as keyof ILinks]) {
              const Icon = icons[key as keyof ILinks]
              return (
                <a key={key} href={links[key as keyof ILinks]} target="_blank">
                  <Button size="icon" variant="ghost">
                    <Icon />
                  </Button>
                </a>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
