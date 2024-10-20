import dynamic from 'next/dynamic';

const components = {
    AnimatedGradient: dynamic(() => import('@/components/animated-gradient'), { ssr: false }),
    HeroBanner: dynamic(() => import('@/features/portfolio/components/hero-banner/hero-banner'), { ssr: false }),
    Work: dynamic(() => import('@/features/portfolio/components/work-card'), { ssr: false }),
    BeyondTheCode: dynamic(() => import('@/features/portfolio/components/beyond-the-code'), { ssr: false }),
    Timeline: dynamic(() => import('@/features/portfolio/components/timeline'), { ssr: false }),
    Competence: dynamic(() => import('@/features/portfolio/components/competence'), { ssr: false }),
    SelectedWork: dynamic(() => import('@/features/portfolio/components/projects'), { ssr: false }),
    GetInTouch: dynamic(() => import('@/features/portfolio/components/get-in-touch/get-in-touch'), { ssr: false }),
    SkillsAndLanguages: dynamic(() => import('@/features/portfolio/components/skillsAndLanguage'), { ssr: false }),
};

export default function Home() {
    const {
        SkillsAndLanguages,
        AnimatedGradient,
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
            <AnimatedGradient/>
            <HeroBanner/>
            <div
                className="relative flex flex-col sm:flex-row gap-3 pt-32 items-center justify-center">
                <Work/>
                <BeyondTheCode/>
            </div>

            <div className="flex justify-center w-full pt-3">
                <SkillsAndLanguages/>
            </div>


            <div className="pt-32" id="school">
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
