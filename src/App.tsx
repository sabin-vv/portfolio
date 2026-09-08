import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import HomePage from '@/pages/HomePage'

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen text-body font-sans flex flex-col">
                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/work" element={<HomePage />} />
                        <Route path="/services" element={<HomePage />} />
                        <Route path="/contact" element={<HomePage />} />
                        <Route path="/skills" element={<HomePage />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
