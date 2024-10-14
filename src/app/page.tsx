
import { AnimatedGradient } from "@/components"
import {
  GetInTouch,
  HeroBanner,
    Timeline,
    Projects
} from "@/features/portfolio"


export default async function Home() {

  return (
    <main>
      <AnimatedGradient />
      <HeroBanner />
        <Timeline />
        <Projects />
      <div
        id="contact"
        className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20"
      >
        <GetInTouch />
      </div>
    </main>
  )
}
