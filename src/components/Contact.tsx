import { type FormEvent } from 'react'
import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/Icons'
import { contact } from '@/data/content'
import { btnBase, btnPrimary, fieldLabel, socialLink } from '@/lib/styles'

const Contact = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const subject = encodeURIComponent('New message from portfolio')
        const body = encodeURIComponent(
            `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
        )
        window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    }

    const inputClass =
        'w-full resize-y rounded-lg border border-line bg-transparent px-4 py-3.5 font-sans text-[15px] leading-[1.5] text-heading transition-colors placeholder:text-body/55 focus:border-accent focus:outline-none'

    return (
        <section
            id="contact"
            className="relative isolate scroll-mt-24 overflow-hidden rounded-4xl border border-white/20 bg-white/7.5 p-7 shadow-2xl backdrop-blur-2xl md:p-12 lg:p-16"
        >
            <div className="pointer-events-none absolute -right-24 -top-32 -z-10 size-96 rounded-full bg-blue-300/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 size-96 rounded-full bg-purple-300/15 blur-3xl" />

            <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
                <div className="flex flex-col gap-8">
                    <div>
                        <span className="eyebrow">Get in touch</span>
                        <h2 className="mt-5 max-w-md font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[.98] tracking-[-0.065em] text-heading">
                            Let&apos;s build something together.
                        </h2>
                        <p className="mt-5 max-w-md text-[15px] leading-6.5 text-body">
                            Have a project in mind or just want to say hello? Send a message and I&apos;ll get back to
                            you soon.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" className={socialLink}>
                            <GitHubIcon className="size-4.5 text-accent" />
                            <span>GITHUB</span>
                        </a>

                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={socialLink}>
                            <LinkedInIcon className="size-4.5 text-accent" />
                            <span>LINKEDIN</span>
                        </a>
                    </div>
                </div>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className={fieldLabel}>
                            NAME
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className={inputClass}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className={fieldLabel}>
                            EMAIL
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                            className={inputClass}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className={fieldLabel}>
                            MESSAGE
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project..."
                            rows={5}
                            required
                            className={inputClass}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className={`${btnBase} ${btnPrimary} inline-flex w-fit cursor-pointer items-center justify-between gap-3 rounded-full px-6 py-3.5 hover:-translate-y-0.5`}
                        >
                            SEND MESSAGE
                            <span>▷</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
