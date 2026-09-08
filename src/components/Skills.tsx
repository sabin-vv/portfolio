import SkillBadge from './SkillBadge'
import Tilt from '@/components/Tilt'
import { cardSurface } from '@/lib/styles'
import { skillGroups } from '@/data/content'
import { Database, Monitor, Server } from 'lucide-react'

const groupIcons = {
    frontend: Monitor,
    backend: Server,
    database: Database,
} as const

const Skills = () => {
    return (
        <div className="flex flex-col gap-5">
            {skillGroups.map((group) => (
                <Tilt className="group/skill rounded-lg" key={group.title}>
                    <div className={`${cardSurface} hover:bg-surface-hover rounded-lg p-6`}>
                        <div className="mb-5 flex items-center justify-between gap-3">
                            <h3 className="font-display text-[20px] font-semibold leading-[1.3] tracking-[-0.3px] text-heading">
                                {group.title}
                            </h3>
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/8 text-accent shadow-[inset_0_1px_rgba(255,255,255,.12)] transition-colors group-hover/skill:border-blue-200/30 group-hover/skill:bg-blue-200/10">
                                {(() => {
                                    const Icon = groupIcons[group.icon]
                                    return <Icon className="size-5" strokeWidth={1.7} aria-hidden />
                                })()}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill) => (
                                <SkillBadge key={skill} skill={skill} />
                            ))}
                        </div>
                    </div>
                </Tilt>
            ))}
        </div>
    )
}

export default Skills
