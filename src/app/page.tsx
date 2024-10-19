import dynamic from 'next/dynamic';

const components = {
    HeroBanner: dynamic(() => import('@/features/portfolio/components/hero-banner/hero-banner'), { ssr: false }),
    Work: dynamic(() => import('@/features/portfolio/components/work-card'), { ssr: false }),
    BeyondTheCode: dynamic(() => import('@/features/portfolio/components/beyond-the-code'), { ssr: false }),
    Timeline: dynamic(() => import('@/features/portfolio/components/timeline'), { ssr: false }),
    Competence: dynamic(() => import('@/features/portfolio/components/competence'), { ssr: false }),
    SelectedWork: dynamic(() => import('@/features/portfolio/components/projects'), { ssr: false }),
    GetInTouch: dynamic(() => import('@/features/portfolio/components/get-in-touch/get-in-touch'), { ssr: false }),
};

export default function Home() {
    const {
        HeroBanner,
        Work,
        BeyondTheCode,
        Timeline,
        Competence,
        SelectedWork,
        GetInTouch
    } = components;
    return (
        <main className="overflow-hidden">
                <HeroBanner/>
            <div
                className="relative flex flex-col sm:flex-row gap-3 min-h-[calc(100vh-550px)] md:pt-8 pt-8 items-center justify-center">
                    <Work/>
                    <BeyondTheCode/>
            </div>
            <div id="school">
                <Timeline/>
            </div>
            <div id="competence" className="pb-16 pt-32">
                    <Competence/>
            </div>
            <div id="work">
                    <SelectedWork/>
            </div>
                <div id="contact" className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20">
                        <GetInTouch/>
                </div>
        </main>
);
}
