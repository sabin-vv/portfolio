import type { ReactNode } from 'react'
import Tilt from '@/components/Tilt'
import { cardSurface } from '@/lib/styles'

interface ServiceCardProps {
    icon: ReactNode
    title: string
    description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <Tilt className="rounded-lg">
            <div className={`${cardSurface} hover:bg-surface-hover relative rounded-lg w-full h-full`}>
                <div className="flex flex-col gap-4 items-start p-6.25">
                    <div className="bg-iconbox rounded-sm w-12 h-12 flex items-center justify-center shrink-0">
                        {icon}
                    </div>
                    <p className="font-sans font-semibold text-heading text-[18px] leading-[1.3]">{title}</p>
                    <p className="font-sans font-normal text-body text-[14px] leading-5">{description}</p>
                </div>
            </div>
        </Tilt>
    )
}
