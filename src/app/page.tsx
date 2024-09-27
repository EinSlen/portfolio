import Link from "next/link"
import { AnimatedGradient } from "@/components"
import {
    About,
    Education,
    GetInTouch,
    HeroBanner,
    Projects,
    WorkExperience,
} from "@/app/features/portfolio"
export default async function Home() {

    return (
        <main>
            <AnimatedGradient />
            <HeroBanner />
            <div className="container flex flex-col space-y-24">

            </div>
            <div
                id="contact"
                className="flex min-h-[calc(100vh-160px)] items-center justify-center py-20"
            >
                <GetInTouch />
            </div>
        </main>
    )
}

interface SectionProps {
    title: string
    children: React.ReactNode
    id: string
}

const Section = (props: SectionProps) => {
    const { title, id, children } = props
    return (
        <div id={id} className="mx-auto w-full max-w-4xl">
            <h2 className="font-display mb-4 text-4xl font-bold">{title}</h2>
            {children}
        </div>
    )
}
