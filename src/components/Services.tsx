import SectionHeader from '@/components/SectionHeader'
import ServiceCard from '@/components/ServiceCard'
import { LayoutIcon, DotsIcon, CodeIcon, PlugIcon } from '@/components/Icons'
import { services } from '@/data/content'

const serviceIcons = {
    website: <LayoutIcon />,
    webapp: <DotsIcon />,
    api: <CodeIcon />,
    automation: <PlugIcon />,
} as const

interface ServicesProps {
    showHeader?: boolean
}

export default function Services({ showHeader = true }: ServicesProps) {
    return (
        <section className="flex flex-col gap-8">
            {showHeader && <SectionHeader title="Capabilities" />}
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
