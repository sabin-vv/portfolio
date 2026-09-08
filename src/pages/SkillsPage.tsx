import Skills from '@/components/Skills'
import Services from '@/components/Services'

const SkillsPage = () => {
    return (
        <div className="min-h-screen px-5 pt-23 pb-25 text-body md:pt-23.75 md:pb-27.5">
            <div className="mx-auto w-full max-w-150 md:max-w-275">
                <section className="mb-16">
                    <h1 className="mb-4 font-display text-[clamp(2.2rem,6vw,3.5rem)] font-bold leading-tight tracking-heading text-heading">
                        Capabilities
                    </h1>

                    <p className="max-w-150 text-base leading-relaxed text-body">
                        A comprehensive overview of my technical stack and the professional services I offer.
                        Specializing in building robust, scalable solutions from the ground up.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="mb-7 flex items-center gap-2 font-display text-[clamp(1.6rem,4vw,2.2rem)] font-bold leading-heading tracking-tight text-heading">
                        <span className="text-[1.1em] text-accent">▣</span>
                        Technical Expertise
                    </h2>

                    <Skills />
                </section>

                <section className="mb-12">
                    <h2 className="mb-7 flex items-center gap-2 font-display text-[clamp(1.6rem,4vw,2.2rem)] font-bold leading-heading tracking-tight text-heading">
                        <span className="text-[1.1em] text-accent">ϟ</span>
                        Services
                    </h2>

                    <Services showHeader={false} />
                </section>
            </div>
        </div>
    )
}

export default SkillsPage
