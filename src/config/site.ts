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
        title: "School",
        href: "#school",
      },
      {
        title: "Courses",
        href: "#competence",
      },
      {
        title: "Work",
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
        href: `/assets/cv.pdf`,
      },
      {
        label: "Explore my projects",
        href: "#projects",
      },
    ],
  },
  about: {
    avatar: "/images/avatar.png",
    title: "I'm a passionate full-stack developer working from Sousse,Tunisia.",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi est sit amet facilisis magna etiam. Rutrum quisque non tellus orci ac auctor augue.",
      "Posuere morbi leo urna molestie. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Est velit egestas dui id ornare arcu odio ut sem. Faucibus in ornare quam viverra orci. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc.",
      "Montes nascetur ridiculus mus mauris vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Elit pellentesque habitant morbi tristique. Elementum facilisis leo vel fringilla. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc non blandit massa enim nec",
    ],
  },
  contact: {
    title: "Get in touch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    callToAction: {
      label: "Say hello",
      href: "mailto:hello@mehdibha.co",
    },
  },
}
