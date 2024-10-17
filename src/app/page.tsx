
import { AnimatedGradient } from "@/components"
import {
  GetInTouch,
  HeroBanner,
    Timeline,
    Projects,
    Work,
    Competence,
    BeyondTheCode
} from "@/features/portfolio"


export default async function Home() {

  return (
      <main className="overflow-hidden">
          <AnimatedGradient/>
          <HeroBanner/>
          <div
              className="relative flex flex-col sm:flex-row gap-3 min-h-[calc(100vh-350px)] md:pt-8 pt-8 items-center justify-center">
              <Work/>
              <BeyondTheCode/>
          </div>
              <Timeline/>
              <div
                  id="competence"
                  className="pb-16 pt-32">
                  <Competence/>
              </div>
              <Projects/>
              <div
                  id="contact"
                  className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20">
                  <GetInTouch/>
              </div>
      </main>
)
}
