import { AnimatedGradient } from "@/components"
import {
    GetInTouch,
    HeroBanner,
    Timeline,
    Work,
    Competence,
    BeyondTheCode, SelectedWork
} from "@/features/portfolio"


export default async function Home() {

  return (
      <main className="overflow-hidden">
          <AnimatedGradient/>
          <HeroBanner/>
          <div
              className="relative flex flex-col sm:flex-row gap-3 min-h-[calc(100vh-550px)] md:pt-8 pt-8 items-center justify-center">
              <Work/>
              <BeyondTheCode/>
          </div>
              <Timeline/>
              <div
                  id="competence"
                  className="pb-16 pt-32">
                  <Competence/>
              </div>
              <SelectedWork/>
              <div
                  id="contact"
                  className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20">
                  <GetInTouch/>
              </div>
      </main>
)
}
