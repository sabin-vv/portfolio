import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '@/data/content'
import { btnBase, btnOutline, btnPrimary } from '@/lib/styles'

const navLinkClass = (isActive: boolean, mobile = false) =>
    `font-sans text-[13px] font-semibold tracking-[0.8px] uppercase transition-colors ${mobile ? 'py-1 ' : ''}${
        isActive ? 'text-accent' : 'text-body hover:text-accent'
    }`

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-bg/92 backdrop-blur-md border-b border-line' : 'bg-transparent'
            }`}
        >
            <div className="max-w-275 mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
                    <span
                        className="w-8 h-8 rounded-sm bg-accent flex items-center justify-center shrink-0"
                        aria-hidden
                    >
                        <span className="font-display font-bold text-accent-ink text-[14px] leading-none">S</span>
                    </span>
                    <span className="font-display font-semibold text-heading text-[16px] tracking-[-0.3px] group-hover:text-accent transition-colors">
                        Sabin VV
                    </span>
                </Link>

                <nav className="hidden sm:flex items-center gap-6" aria-label="Primary">
                    {navLinks.map((link) => (
                        <NavLink key={link.path} to={link.path} className={({ isActive }) => navLinkClass(isActive)}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        to="/connect"
                        className={`${btnBase} ${btnOutline} hidden sm:flex items-center justify-center px-5 py-2`}
                    >
                        Let&apos;s Talk
                    </Link>

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
                className={`sm:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 border-b border-line' : 'max-h-0'}`}
            >
                <nav className="bg-bg/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => navLinkClass(isActive, true)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/connect"
                        onClick={() => setMenuOpen(false)}
                        className={`${btnBase} ${btnPrimary} mt-1 flex items-center justify-center px-5 py-2.5`}
                    >
                        Let&apos;s Talk
                    </Link>
                </nav>
            </div>
        </header>
    )
}
