import { INavItem } from "./nav"

export interface ILinks {
  github?: string
  linkedin?: string
  mail: string
}

export interface IHeroBanner {
  title: {
    [sectionNumber: string]: {
      text: string
      highlighted?: boolean
    }[]
  }
  subtitle: string
  callToActions: {
    label: string
    href: string
  }[]
}

export interface IAbout {
  avatar: string
  title: string
  description: string[]
}

export interface IContact {
  title: string
  description: string
  callToAction: {
    label: string
    href: string
  }
}

export interface ISiteConfig {
  name: string
  description: string
  links: ILinks
  header: { nav: INavItem[] }
  heroBanner: IHeroBanner
  about: IAbout
  contact: IContact
}
