import { cardSurface } from '@/lib/styles'

interface SkillBadgeProps {
    skill: string
    highlighted?: boolean
}

const SkillBadge = ({ skill, highlighted = false }: SkillBadgeProps) => {
    return (
        <span
            className={`${cardSurface} inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-5.25 py-2.75 font-mono text-[14px] leading-5 text-body ${
                highlighted ? 'text-heading' : ''
            }`}
        >
            {highlighted && <span className="size-2 shrink-0 rounded-full bg-accent" />}
            {skill}
        </span>
    )
}

export default SkillBadge
