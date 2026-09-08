import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import { featuredProjects } from '@/data/projects'

export default function FeaturedWork() {
    if (!featuredProjects.length) return null

    return (
        <section id="work" className="flex scroll-mt-24 flex-col gap-8">
            <SectionHeader title="Featured Work" />
            {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </section>
    )
}
