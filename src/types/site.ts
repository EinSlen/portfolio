import { INavItem } from "./nav"

export interface ILinks {
  github?: string
  mail: string
}

export interface IHobbies {
  name: string
  emoji?: string
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

export interface IContact {
  title: string
  description: string
  callToAction: {
    label: string
    href: string
  }
}

export interface IProject {
  name: string
  image: string
  emoji ?: string
  description?: string
  techUsed: string[]
  siteLink?: string
  githubLink ?: string
}

export interface ITimeline {
  title: string
  description: string
  items: ({
    title: string
    status?: string
    time: string
    description: string
    link?: {
      label: string
      href: string
    }
  })[]
}

export interface ISiteConfig {
  name: string
  description: string
  links: ILinks
  header: { nav: INavItem[] }
  heroBanner: IHeroBanner
  projets: IProject[]
  timeline: ITimeline
  contact: IContact
  hobbies: IHobbies[]
}
