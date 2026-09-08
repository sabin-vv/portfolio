interface SectionHeaderProps {
    title: string
    id?: string
}

export default function SectionHeader({ title, id }: SectionHeaderProps) {
    return (
        <div id={id} className="flex gap-4 items-center w-full">
            <h2 className="font-display font-bold text-heading text-[32px] leading-heading tracking-tight whitespace-nowrap shrink-0">
                {title}
            </h2>
            <div className="flex-1 h-px bg-line min-w-0" />
        </div>
    )
}
