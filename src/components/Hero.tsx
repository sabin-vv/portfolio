import { type MouseEvent } from 'react'
import { hero } from '@/data/content'
import profileImage from '@/assets/my_profile.png'
import Tilt from '@/components/Tilt'
import { btnBase, btnOutline, btnPrimary } from '@/lib/styles'

export default function Hero() {
    const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, path: string, sectionId: string) => {
        const target = document.getElementById(sectionId)
        if (!target) return

        event.preventDefault()
        window.history.pushState({}, '', path)
        window.dispatchEvent(new Event('portfolio-navigation'))
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <section className="relative isolate flex min-h-[calc(100vh-9rem)] flex-col items-center justify-center gap-12 overflow-hidden rounded-4xl border border-white/20 bg-white/7.5 px-7 py-14 shadow-2xl backdrop-blur-2xl md:px-16 lg:flex-row lg:gap-20">
            <div className="glass-hero-orb one" />
            <div className="glass-hero-orb two" />
            <div className="flex flex-1 flex-col items-start gap-6">
                <span className="eyebrow">MERN-stack developer</span>
                <h1 className="max-w-180 font-display text-[clamp(3.25rem,8vw,6.5rem)] font-bold leading-[.95] tracking-[-0.075em] text-heading">
                    Hi, I&apos;m <span className="text-accent">Sabin.</span>
                </h1>
                <p className="font-display text-[clamp(1.2rem,2vw,1.5rem)] font-medium leading-8 text-body">
                    I Build clean, useful web experiences.
                </p>
                <p className="max-w-130 text-[17px] leading-7.5 text-body text-justify">{hero.tagline}</p>
                <div className="flex flex-wrap gap-3 pt-1">
                    <a
                        href="/work"
                        onClick={(event) => scrollToSection(event, '/work', 'work')}
                        className={`${btnBase} ${btnPrimary} inline-flex items-center px-8 py-3`}
                    >
                        View Projects
                    </a>
                    <a
                        href="/contact"
                        onClick={(event) => scrollToSection(event, '/contact', 'contact')}
                        className={`${btnBase} ${btnOutline} inline-flex items-center px-8 py-3`}
                    >
                        Let&apos;s Talk
                    </a>
                </div>
            </div>

            <div className="flex flex-1 justify-center">
                <Tilt className="relative h-72 w-72 overflow-hidden rounded-full border border-white/30 bg-white/10 p-2 shadow-[0_0_0_14px_rgba(255,255,255,.035),0_1.5rem_4rem_rgba(0,0,0,.3)] backdrop-blur-xl md:h-88 md:w-88">
                    <div className="h-full w-full overflow-hidden rounded-full">
                        <img src={profileImage} alt={`${hero.name} profile`} className="h-full w-full object-cover" />
                    </div>
                </Tilt>
            </div>
        </section>
    )
}
