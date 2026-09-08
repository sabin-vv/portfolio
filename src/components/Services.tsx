import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import { LayoutIcon, DotsIcon, CodeIcon, PlugIcon } from '@/components/Icons'
import { services } from '@/data/content'

const serviceIcons = {
    fullstack: <LayoutIcon />,
    api: <CodeIcon />,
    database: <DotsIcon />,
    deployment: <PlugIcon />,
} as const

interface ServicesProps {
    showHeader?: boolean
}

export default function Services({ showHeader = true }: ServicesProps) {
    return (
        <section id="services" className="flex scroll-mt-24 flex-col gap-8">
            {showHeader && <SectionHeader title="Services" />}
            <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => (
                    <ServiceCard
                        key={service.title}
                        icon={serviceIcons[service.icon]}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </section>
    )
}
