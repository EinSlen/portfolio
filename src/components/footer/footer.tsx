
import { siteConfig } from "@/config"
import { ILinks } from "@/types"
import { Button, Separator } from "../ui"


const links = siteConfig.links
const icons = {
  github: (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
      >
        <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.485 2 12.016c0 4.419 2.865 8.165 6.839 9.488.5.09.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.002.07 1.53 1.03 1.53 1.03.892 1.528 2.341 1.087 2.91.831.09-.647.35-1.087.636-1.338-2.22-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.029-2.689-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.025a9.564 9.564 0 012.5-.336c.848.004 1.703.115 2.5.336 1.909-1.296 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.594 1.028 2.689 0 3.853-2.338 4.7-4.566 4.947.359.31.678.922.678 1.858 0 1.34-.012 2.42-.012 2.75 0 .268.18.577.688.48A10.017 10.017 0 0022 12.016C22 6.485 17.523 2 12 2z"
            clipRule="evenodd"
        />
      </svg>
  ),
  linkedin: (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
      >
        <path
            d="M16.75 3H7.25C6.01 3 5 4.01 5 5.25v13.5C5 19.99 6.01 21 7.25 21h9.5c1.24 0 2.25-1.01 2.25-2.25V5.25C19 4.01 17.99 3 16.75 3zM8.5 18.5h-2V9h2v9.5zM7.5 7.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM17.5 18.5h-2V13.25c0-1.25-1-2.25-2.25-2.25s-2.25 1-2.25 2.25V18.5h-2V9h2v1.25c.673-.695 1.59-1.25 2.75-1.25 2 0 3.5 1.5 3.5 3.5V18.5z"
        />
      </svg>
  ),
  mail: (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
      >
        <path
            d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM3 8.237l7.363 4.912c.809.538 1.87.538 2.679 0L21 8.237V18H3V8.237zM20.1 6L12 11.764 3.9 6h16.2z"
        />
      </svg>
  )
};

const Footer = async () => {

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
                  <Button ariaLabel={`icon ${key}`} size="icon" variant="ghost">
                      {Icon}
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

export default Footer;
