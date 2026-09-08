import { contact } from '@/data/content'
import { footerLink } from '@/lib/styles'

export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="max-w-275 mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[13px] text-muted font-mono">
                    &copy; {new Date().getFullYear()} Sabin VV. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <a href={contact.github} target="_blank" rel="noreferrer" className={footerLink}>
                        GitHub
                    </a>
                    <a href={contact.linkedin} target="_blank" rel="noreferrer" className={footerLink}>
                        LinkedIn
                    </a>
                    <a href={`mailto:${contact.email}`} className={footerLink}>
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}
