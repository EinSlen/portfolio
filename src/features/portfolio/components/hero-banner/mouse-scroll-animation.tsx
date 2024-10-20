"use client"

import React from "react"
import { motion } from "framer-motion"

export const MouseScrollAnimation = () => {
  return (
      <div className="flex flex-col items-center justify-center space-y-1">
          <div
              className="border-gray-800 dark:border-foreground-secondary flex h-[40px] w-[26px] items-center justify-center rounded-full border">
              <motion.div
                  className="bg-gray-800 dark:bg-foreground-secondary h-[12px] w-[2px] rounded-full"
                  initial={{opacity: 1, y: -6}}
                  animate={{y: 0, opacity: 0}}
                  transition={{
                      repeat: Infinity,
                      duration: 1,
                      repeatDelay: 0.3,
                  }}
              />
          </div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dark:text-foreground-secondary border-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              width="20"
              height="20"
          >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 13l5 5 5-5M7 6l5 5 5-5"
              />
          </svg>

      </div>
  )
}
