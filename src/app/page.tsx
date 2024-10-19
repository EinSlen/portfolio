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
};

export default function Home() {
    const {
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

        </main>
);
}
