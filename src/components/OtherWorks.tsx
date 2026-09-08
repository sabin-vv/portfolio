import ProjectCard from '@/components/ProjectCard'
import SectionHeader from '@/components/SectionHeader'
import { projects } from '@/data/projects'

export default function OtherWorks() {
    if (!projects.length) return null

    return (
        <section className="flex flex-col gap-8">
            <SectionHeader title="More Work" />
            <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}
