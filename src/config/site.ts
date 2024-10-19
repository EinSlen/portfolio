import { ISiteConfig } from "@/types"
import {basePath} from "@/utils";

export const siteConfig: ISiteConfig = {
  name: "einslen", // shown in the header
  description:
    "Portfolio de damlencourt Valentin",
  links: {
    // order is same order in the footer (when link added it's shown in the footer)
    mail: "valentin.damlencourt@gmail.com",
    linkedin: "https://linkedin.com/mehdibha",
    github: "https://github.com/mehdibha",
  },
  header: {
    nav: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Parcours Scolaire",
        href: "#school",
      },
      {
        title: "Compétences",
        href: "#competence",
      },
      {
        title: "Projets",
        href: "#work",
      },
    ],
  },
  heroBanner: {
    title: {
      1: [{ text: "Hey !" }],
      2: [
        { text: "Je suis " },
        { text: "Valentin damlencourt", highlighted: true },
        { text: "." },
      ],
      3: [{ text: "Voici mon portfolio." }],
    },
    subtitle:
        "Retrouvez mes projets et mes compétences à travers ce portfolio.",
    callToActions: [
      {
        label: "Télécharger mon CV",
        href: `${basePath}/assets/cv.pdf`,
      },
      {
        label: "Mes Projets",
        href: "#work",
      },
    ],
  },
  contact: {
    title: "Get in touch",
    description:
      "Si vous avez besoin d'aide pour un projet ou si vous souhaitez discuter d'une collaboration, n'hésitez pas à me contacter !",
    callToAction: {
      label: "Me contacter",
      href: "mailto:valentin.damlencourt@gmail.com",
    },
  },
}
