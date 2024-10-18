import { Suspense } from "react";
import dynamic from 'next/dynamic';

import Loader from "@/components/loader";
const AnimatedGradient = dynamic(() => import("@/components/animated-gradient"),  { ssr: true });
const HeroBanner = dynamic(() => import("@/features/portfolio/components/hero-banner/hero-banner"),  { ssr: false });
const Work =dynamic(() => import("@/features/portfolio/components/work/work-card"), { ssr: false });
const BeyondTheCode = dynamic(() => import("@/features/portfolio/components/beyond-the-code/beyond-the-code"), { ssr: false });
const Timeline = dynamic(() => import("@/features/portfolio/components/timeline/timeline"), { ssr: false });
const Competence = dynamic(() => import("@/features/portfolio/components/competence/competence"), { ssr: false });
const SelectedWork = dynamic(() => import("@/features/portfolio/components/projects/projects"), { ssr: false });
const GetInTouch = dynamic(() => import("@/features/portfolio/components/get-in-touch/get-in-touch"), { ssr: false });

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Suspense fallback={<Loader />}>
                <AnimatedGradient />
                <HeroBanner />
            </Suspense>
            <div className="relative flex flex-col sm:flex-row gap-3 min-h-[calc(100vh-550px)] md:pt-8 pt-8 items-center justify-center">
                <Suspense fallback={<Loader />}>
                    <Work />
                </Suspense>
                <Suspense fallback={<Loader />}>
                    <BeyondTheCode />
                </Suspense>
            </div>
            <Suspense fallback={<Loader />}>
                <Timeline />
            </Suspense>
            <div id="competence" className="pb-16 pt-32">
                <Suspense fallback={<Loader />}>
                    <Competence />
                </Suspense>
            </div>
            <Suspense fallback={<Loader />}>
                <SelectedWork />
            </Suspense>
            <div id="contact" className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20">
                <Suspense fallback={<Loader />}>
                    <GetInTouch />
                </Suspense>
            </div>
        </main>
    );
}
