import { Link } from 'react-router-dom'
import { hero } from '@/data/content'
import profileImage from '@/assets/my_profile.png'
import Tilt from '@/components/Tilt'
import { btnBase, btnOutline, btnPrimary } from '@/lib/styles'

export default function Hero() {
    const [firstName, ...restName] = hero.name.split(' ')

    return (
        <section className="min-h-[60vh] flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:gap-16">
            <div className="flex flex-1 flex-col gap-6">
                <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,4.5rem)] leading-tight tracking-heading text-heading whitespace-nowrap">
                    {firstName} <span className="text-accent">{restName.join(' ')}</span>
                </h1>
                <p className="font-display font-semibold text-[32px] leading-10 text-body whitespace-nowrap">
                    {hero.role}
                </p>
                <p className="max-w-130 text-[18px] leading-7.25 text-body">{hero.tagline}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                    <Link to="/works" className={`${btnBase} ${btnPrimary} inline-flex items-center px-8 py-3`}>
                        View Projects
                    </Link>
                    <Link to="/connect" className={`${btnBase} ${btnOutline} inline-flex items-center px-8 py-3`}>
                        Let&apos;s Talk
                    </Link>
                </div>
            </div>

            <div className="flex flex-1 justify-center">
                <div className="relative">
                    <div aria-hidden className="absolute inset-0 rounded-full bg-accent/10 blur-2xl" />
                    <div aria-hidden className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/20 blur-xl" />
                    <Tilt className="h-75 w-75 rounded-full md:h-90 md:w-90">
                        <img src={profileImage} alt={`${hero.name} profile`} className="h-full w-full object-cover" />
                    </Tilt>
                </div>
            </div>
        </section>
    )
}
