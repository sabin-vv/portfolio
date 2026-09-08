import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import HomePage from '@/pages/HomePage'
import WorksPage from '@/pages/WorksPage'
import SkillsPage from '@/pages/SkillsPage'
import ConnectPage from '@/pages/ConnectPage'

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen text-body font-sans flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/works" element={<WorksPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/connect" element={<ConnectPage />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}