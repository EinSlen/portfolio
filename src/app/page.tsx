
import { AnimatedGradient } from "@/components"
import {
  GetInTouch,
  HeroBanner,
    Timeline,
    Projects,
    Work,
    Competence
} from "@/features/portfolio"


export default async function Home() {

  return (
      <main className="overflow-hidden">
          <AnimatedGradient/>
          <HeroBanner/>
          <Work/>
          <Timeline/>
          <div
              id="competence"
              className="pt-16 pb-16">
          <Competence />
          </div>
          <Projects/>
          <div
              id="contact"
              className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20"
          >
              <GetInTouch/>
          </div>
      </main>
  )
}
