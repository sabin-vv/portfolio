interface SectionHeaderProps {
    title: string
    id?: string
}

export default function SectionHeader({ title, id }: SectionHeaderProps) {
    return (
        <div id={id} className="flex w-full items-center gap-5">
            <span className="relative size-3 shrink-0" aria-hidden>
                <span className="absolute left-0 top-0 h-1.75 w-px bg-accent/80" />
                <span className="absolute left-0 top-0 h-px w-1.75 bg-accent/80" />
                <span className="absolute bottom-0 right-0 h-1.75 w-px bg-accent/80" />
                <span className="absolute bottom-0 right-0 h-px w-1.75 bg-accent/80" />
            </span>

            <h2 className="font-display shrink-0 text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-none tracking-[-0.055em] text-heading">
                {title}
            </h2>

            <span className="h-px min-w-0 flex-1 bg-linear-to-r from-white/15 via-white/6 to-transparent" aria-hidden />
        </div>
    )
}
