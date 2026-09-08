import { useState, useEffect, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '@/data/content'
import profileImage from '@/assets/my_profile.png'

const navLinkClass = (isActive: boolean, mobile = false) =>
    `font-sans text-[13px] font-semibold tracking-[0.8px] uppercase transition-all ${
        mobile ? 'rounded-lg px-3 py-2 ' : 'rounded-full px-3 py-1.5 '
    }${isActive ? 'border border-white/20 bg-white/[0.14] text-white shadow-[0_4px_18px_rgba(120,170,255,.12)]' : 'border border-transparent text-body hover:border-white/10 hover:bg-white/[0.06] hover:text-white'}`

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState(window.location.pathname.slice(1) || 'home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll, { passive: true })
        const onPopState = () => setActiveSection(window.location.pathname.slice(1) || 'home')
        const onPortfolioNavigation = () => setActiveSection(window.location.pathname.slice(1) || 'home')
        window.addEventListener('popstate', onPopState)
        window.addEventListener('portfolio-navigation', onPortfolioNavigation)

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

                if (visibleSection) setActiveSection(visibleSection.target.id)
            },
            { rootMargin: '-18% 0px -62% 0px', threshold: [0.05, 0.2, 0.5] },
        )

        navLinks.forEach((link) => {
            const section = document.getElementById(link.section)
            if (section) sectionObserver.observe(section)
        })

        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('popstate', onPopState)
            window.removeEventListener('portfolio-navigation', onPortfolioNavigation)
            sectionObserver.disconnect()
        }
    }, [])

    const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, section: string, path: string) => {
        const target = document.getElementById(section)
        if (!target) return

        event.preventDefault()
        window.history.pushState({}, '', path)
        setActiveSection(section)
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setMenuOpen(false)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'border-b border-white/10 bg-bg/60 backdrop-blur-2xl' : 'bg-transparent'
            }`}
        >
            <div className="max-w-275 mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
                    <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md"
                        aria-hidden
                    >
                        <img src={profileImage} alt="" className="h-full w-full rounded-full object-cover" />
                    </span>
                    <span className="font-display font-semibold text-heading text-[16px] tracking-[-0.3px] group-hover:text-accent transition-colors">
                        Sabin VV
                    </span>
                </Link>

                <div className="flex items-center gap-3">
                <nav className="hidden sm:flex items-center gap-6" aria-label="Primary">
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            onClick={(event) => handleNavClick(event, link.section, link.path)}
                            className={navLinkClass(activeSection === link.section)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                    <button
                        className="sm:hidden flex flex-col gap-1.25 p-1"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((o) => !o)}
                    >
                        {[
                            menuOpen ? 'rotate-45 translate-y-[6px]' : '',
                            menuOpen ? 'opacity-0' : '',
                            menuOpen ? '-rotate-45 -translate-y-[6px]' : '',
                        ].map((transform, i) => (
                            <span
                                key={i}
                                className={`block w-5 h-px bg-heading transition-all duration-200 ${transform}`}
                            />
                        ))}
                    </button>
                </div>
            </div>

            <div
                className={`sm:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 border-b border-line' : 'max-h-0'}`}
            >
                <nav className="flex flex-col gap-4 border-t border-white/10 bg-bg/70 px-6 py-4 backdrop-blur-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            onClick={(event) => handleNavClick(event, link.section, link.path)}
                            className={navLinkClass(activeSection === link.section, true)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}
