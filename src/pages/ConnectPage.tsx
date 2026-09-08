import Contact from '../components/Contact'

const ConnectPage = () => {
    return (
        <div className="min-h-screen px-5 pt-30 pb-25 text-body">
            <div className="mx-auto w-full max-w-275">
                <section className="mb-20 max-w-180">
                    <h1 className="mb-17.5 font-display text-[clamp(3rem,9vw,6rem)] font-bold leading-tight tracking-heading text-heading">
                        Let&apos;s build
                        <br />
                        something
                        <br />
                        <span className="text-accent">together.</span>
                    </h1>

                    <p className="max-w-170 text-[clamp(1.15rem,2.5vw,1.5rem)] leading-relaxed text-body">
                        Looking for a developer to bring your vision to life? Let's connect and discuss how we can
                        create high-performance, elegant solutions.
                    </p>
                </section>

                <Contact />
            </div>
        </div>
    )
}

export default ConnectPage
