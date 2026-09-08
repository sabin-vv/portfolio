import SkillBadge from './SkillBadge'
import Tilt from '@/components/Tilt'
import { cardSurface } from '@/lib/styles'
import { skillGroups } from '@/data/content'

const Skills = () => {
    return (
        <div className="flex flex-col gap-5">
            {skillGroups.map((group) => (
                <Tilt className="rounded-lg" key={group.title}>
                    <div className={`${cardSurface} hover:bg-surface-hover rounded-lg p-6`}>
                        <div className="mb-5 flex items-center justify-between gap-3">
                            <h3 className="font-display text-[20px] font-semibold leading-[1.3] tracking-[-0.3px] text-heading">
                                {group.title}
                            </h3>

                            <span className="font-mono text-base leading-none text-accent">{group.icon}</span>
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