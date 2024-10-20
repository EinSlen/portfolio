import { ISiteConfig } from "@/types";
import { basePath } from "@/utils";

export const siteConfig: ISiteConfig = {
  name: "einslen", // shown in the header
  description: "Portfolio de damlencourt Valentin",
  links: {
    // order is same order in the footer (when link added it's shown in the footer)
    mail: "valentin.damlencourt@gmail.com",
    github: "https://github.com/EinSlen",
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
  timeline: {
    title: "Parcours Scolaire",
    description: "Voici une timeline, l'aperçu de mon parcours scolaire ci-dessous:",
    items: [
      {
        title: "BUT Informatique",
        status: "En cours",
        time: "Du 15 septembre, 2022 - Aujourd'hui",
        description:
            `Actuellement en BUT Informatique à <strong>l'IUT de Lens</strong>, ce parcours me permet<br/> d'acquérir des compétences solides en développement web, gestion de bases de données et en programmation. <br/>J'y apprends les technologies modernes pour construire des applications performantes et innovantes.`,
        link: {
          label: "Site web",
          href: "https://www.iut-lens.univ-artois.fr/",
        },
      },
      {
        title: "Prepa Scientifique",
        time: "Le 13 septembre, 2021",
        description:
            " J'ai suivi une classe préparatoire scientifique à <strong>Valencienne</strong> qui m'a permis d'acquérir des bases solides<br/> en mathématiques et en physique. Cette expérience m'a préparé aux exigences des études supérieures.",
      },
      {
        title: "Baccalauréat Scientifique",
        time: "Diplômé le 7 décembre, 2021",
        description:
            " J'ai obtenu mon baccalauréat avec mention au lycée <strong>Henry D'Arras</strong>, ce qui m'a ouvert les portes<br/> de l'enseignement supérieur dans le domaine des sciences et de la technologie/Informatique.",
      },
    ],
  },
  projets: [
    {
      name: "Flatcraft",
      emoji: "🪨",
      description:
          "Flatcraft est une version en 2D de Minecraft, entièrement développée en Java. Les joueurs ont la possibilité de miner des blocs, de récolter des ressources, de se déplacer, et de fabriquer des outils ou de nouveaux blocs. Un système de dimensions est également disponible.",
      techUsed: ["Java"],
      siteLink: "https://edgar-dev.itch.io/flatcraft",
      githubLink: "https://github.com/EinSlen/flatcraft",
      image: `${basePath}/images/projects/Flatcraft.webp`,
    },
    {
      name: "ReyTracer",
      emoji: "🌟",
      description:
          "Le but de ce projet était de créer une librairie capable de lire un fichier de configuration et de générer une image. L'élaboration de cette image implique des calculs complexes de lumière, se concentrant spécifiquement sur l'application des principes du raytracing. Cette technique de rendu simule le trajet des rayons de lumière à travers une scène virtuelle, permettant d'obtenir des images réalistes en reproduisant fidèlement les effets de lumière et d'ombre.",
      techUsed: ["Java"],
      siteLink: "https://fr.wikipedia.org/wiki/Ray_tracing",
      githubLink: "https://github.com/EinSlen/ray-tracer.git",
      image: `${basePath}/images/projects/Raytracer.webp`,
    },
    {
      name: "Crunchyroll Calendrier",
      emoji: "🍥",
      description:
          '"Crunchyroll Calendrier" est une application web qui utilise Node.js et Express pour récupérer et afficher les horaires de diffusion des séries animées sur Crunchyroll. Grâce à Puppeteer, cette application permet de naviguer automatiquement sur le site de Crunchyroll pour extraire les informations sur les nouveaux épisodes, les saisons et les horaires de diffusion. Les utilisateurs peuvent ainsi consulter facilement les dernières mises à jour et ne jamais manquer leurs séries préférées.',
      techUsed: ["NodeJS", "Express", "puppeteer"],
      githubLink: "https://github.com/EinSlen/Crunchyroll-scraper",
      image: `${basePath}/images/projects/image.webp`,
    },
    {
      name: "Pykemon",
      emoji: "🐍",
      description:
          "Ce projet est un jeu inspiré de l'univers de Pokémon, développé en Python avec la bibliothèque TMX. Les joueurs peuvent explorer un monde rempli de créatures, capturer des Pokémon et participer à des combats. Ce projet met en avant la logique de jeu et la gestion des ressources, tout en offrant une expérience immersive à travers une interface graphique.",
      techUsed: ["Python", "TMX"],
      githubLink: "https://github.com/EinSlen/pykemon",
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
};
