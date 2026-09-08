import SectionHeader from '@/components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function FeaturedWork() {
    const featured = projects.find((project) => project.featured)

    if (!featured) return null

    return (
        <section className="flex flex-col gap-8">
            <SectionHeader title="Featured Work" />
            <ProjectCard project={featured} />
        </section>
    )
}