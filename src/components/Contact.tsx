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
        <section className="flex flex-col gap-12 md:gap-16">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3">
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className={socialLink}>
                    <GitHubIcon className="size-4.5 text-accent" />
                    <span>GITHUB</span>
                </a>

                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={socialLink}>
                    <LinkedInIcon className="size-4.5 text-accent" />
                    <span>LINKEDIN</span>
                </a>

                <a href={`mailto:${contact.email}`} className={socialLink}>
                    <Mail className="size-4.5 text-accent" />
                    <span>EMAIL</span>
                </a>
            </div>

            <form className="flex max-w-140 flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className={fieldLabel}>
                        NAME
                    </label>

                    <input id="name" type="text" name="name" placeholder="John Doe" required className={inputClass} />
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

                <button
                    type="submit"
                    className={`${btnBase} ${btnPrimary} inline-flex w-fit cursor-pointer items-center justify-between gap-3 rounded-lg px-6 py-3.5 hover:-translate-y-0.5`}
                >
                    SEND MESSAGE
                    <span>▷</span>
                </button>
            </form>
        </section>
    )
}

export default Contact
