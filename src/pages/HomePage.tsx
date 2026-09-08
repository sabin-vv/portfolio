import PageContainer from '@/components/PageContainer'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import FeaturedWork from '@/components/FeaturedWork'
import Contact from '@/components/Contact'

export default function HomePage() {
    return (
        <PageContainer>
            <Hero />
            <Skills />
            <FeaturedWork />
            <Services />
            <Contact />
        </PageContainer>
    )
}
