import { useCallback, useRef, type MouseEvent, type ReactNode } from 'react'

interface TiltProps {
    children: ReactNode
    className?: string
    max?: number
}

export default function Tilt({ children, className = '', max = 5 }: TiltProps) {
    const ref = useRef<HTMLDivElement>(null)

    const handleMove = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            const el = ref.current
            if (!el) return
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

            const rect = el.getBoundingClientRect()
            const px = (e.clientX - rect.left) / rect.width
            const py = (e.clientY - rect.top) / rect.height
            const rx = (0.5 - py) * max
            const ry = (px - 0.5) * max

            el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-4px)`
            el.style.setProperty('--tilt-x', `${(px * 100).toFixed(1)}%`)
            el.style.setProperty('--tilt-y', `${(py * 100).toFixed(1)}%`)
        },
        [max],
    )

    const handleLeave = useCallback(() => {
        const el = ref.current
        if (!el) return
        el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)'
    }, [])

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className={`group/tilt relative overflow-hidden will-change-transform transition-transform duration-200 ease-out ${className}`}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {children}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover/tilt:opacity-100"
                style={{
                    background:
                        'radial-gradient(circle at var(--tilt-x, 50%) var(--tilt-y, 50%), rgba(0, 229, 255, 0.07), transparent 55%)',
                }}
            />
        </div>
    )
}
