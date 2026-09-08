import type { Project } from '@/data/projects'
import { ExternalIcon, ArrowRightIcon } from '@/components/Icons'
import Tilt from '@/components/Tilt'
import { btnBase, btnOutline, btnPrimary, cardSurface } from '@/lib/styles'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const isSvg = !!project.image && project.image.endsWith('.svg')

    return (
        <Tilt className="flex h-full flex-col rounded-lg">
            <div className={`${cardSurface} relative flex h-full w-full flex-col overflow-hidden rounded-lg`}>
                <div className="relative h-64 w-full bg-iconbox overflow-hidden">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={`${project.title} project screenshot`}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,229,255,0.30),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(125,239,255,0.15),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.06),transparent_40%)]" />
                    )}
                    {!isSvg && <div className="absolute inset-0 mix-blend-saturation bg-[rgba(255,255,255,0.5)]" />}
                    <div className="absolute inset-0 bg-linear-to-t from-[rgba(16,24,26,0.8)] to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display font-bold text-heading text-2xl leading-10 tracking-[-0.8px] mb-4">
                        {project.title}
                    </h3>
                    <p className="font-sans font-normal text-body text-[16px] leading-6 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 rounded-full bg-iconbox border border-line font-mono text-[12px] leading-none text-body"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-4 pt-2">
                        <a
                            href={project.link ?? '#'}
                            className={`${btnBase} ${btnPrimary} inline-flex items-center gap-2 h-9.5 px-6 w-fit`}
                        >
                            <ExternalIcon />
                            Live Demo
                        </a>
                        <a
                            href={project.github ?? '#'}
                            className={`${btnBase} ${btnOutline} inline-flex items-center gap-2 h-10 px-6 w-fit`}
                        >
                            <ArrowRightIcon />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </Tilt>
    )
}
