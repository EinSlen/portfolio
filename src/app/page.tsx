import dynamic from 'next/dynamic';

const components = {
    AnimatedGradient: dynamic(() => import('@/components/animated-gradient'), { ssr: false }),
    HeroBanner: dynamic(() => import('@/features/portfolio/components/hero-banner/hero-banner'), { ssr: false }),

};

export default function Home() {
    const {
        AnimatedGradient,
        HeroBanner,

    } = components;
    return (
        <main className="overflow-hidden">
                <AnimatedGradient/>
                <HeroBanner/>
        </main>
);
}
