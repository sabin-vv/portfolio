import PageContainer from '@/components/PageContainer'
import FeaturedWork from '@/components/FeaturedWork'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function WorksPage() {
    const otherProjects = projects.filter((project) => !project.featured)

    return (
        <PageContainer gap="gap-[40px]">
            <FeaturedWork />

            <section className="flex flex-col gap-6">
                <span className="font-mono text-[12px] font-bold tracking-[0.14em] uppercase text-accent-soft">
                    Other Works
                </span>
                <div className="grid sm:grid-cols-2 gap-6">
                    {otherProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </PageContainer>
    )
}
