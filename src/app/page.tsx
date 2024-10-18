import React, { Suspense } from "react";
const AnimatedGradient = React.lazy(() => import("@/components/animated-gradient"));
const HeroBanner = React.lazy(() => import("@/features/portfolio/components/hero-banner/hero-banner"));
const Work = React.lazy(() => import("@/features/portfolio/components/work/work-card"));
const BeyondTheCode = React.lazy(() => import("@/features/portfolio/components/beyond-the-code/beyond-the-code"));
const Timeline = React.lazy(() => import("@/features/portfolio/components/timeline/timeline"));
const Competence = React.lazy(() => import("@/features/portfolio/components/competence/competence"));
const SelectedWork = React.lazy(() => import("@/features/portfolio/components/projects/projects"));
const GetInTouch = React.lazy(() => import("@/features/portfolio/components/get-in-touch/get-in-touch"));

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Suspense fallback={<div>Loading...</div>}>
                <AnimatedGradient />
                <HeroBanner />
            </Suspense>
            <div className="relative flex flex-col sm:flex-row gap-3 min-h-[calc(100vh-550px)] md:pt-8 pt-8 items-center justify-center">
                <Suspense fallback={<div>Loading...</div>}>
                    <Work />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <BeyondTheCode />
                </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Timeline />
            </Suspense>
            <div id="competence" className="pb-16 pt-32">
                <Suspense fallback={<div>Loading...</div>}>
                    <Competence />
                </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <SelectedWork />
            </Suspense>
            <div id="contact" className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20">
                <Suspense fallback={<div>Loading...</div>}>
                    <GetInTouch />
                </Suspense>
            </div>
        </main>
    );
}
