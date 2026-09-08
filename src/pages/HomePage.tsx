import PageContainer from '@/components/PageContainer'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import FeaturedWork from '@/components/FeaturedWork'
import OtherWorks from '@/components/OtherWorks'
import Contact from '@/components/Contact'
import SectionHeader from '@/components/SectionHeader'

export default function HomePage() {
    return (
        <PageContainer>
            <div id="home" className="scroll-mt-24">
                <Hero />
            </div>
            <section id="skills" className="flex scroll-mt-24 flex-col gap-8">
                <SectionHeader title="Skills" />
                <Skills />
            </section>
            <FeaturedWork />
            <OtherWorks />
            <Services />
            <Contact />
        </PageContainer>
    )
}
