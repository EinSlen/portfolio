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
  projets: [
          {
            name: 'TEST',
            description:
                "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
            techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
            siteLink: '#',
            githubLink: '#',
            image: `${basePath}/images/projects/Flatcraft.webp`,
          },
    {
      name: 'TEST',
          description:
      "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
          techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/Raytracer.webp`,
    },
    {
      name: 'TEST',
      description: "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
          techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/image.webp`,
    },
    {
      name: 'TEST',
          description:
      "Okv photogram is a web app that mimics Instagram's features using React.js and Firebase v9 (Baas). It lets users share their photos, comment and like others' posts. Users can also browse and follow other users' profiles.",
          techUsed: ['ReactJs', 'Firebase V9', 'React-Icons', 'CSS3', 'HTML'],
        siteLink: '#',
        githubLink: '#',
        image: `${basePath}/images/projects/pokemon.webp`,
    },
    ],
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
