import type { ReactNode } from 'react'

interface PageContainerProps {
    children: ReactNode
    gap?: string
    className?: string
}

export default function PageContainer({ children, gap = 'gap-[80px]', className = '' }: PageContainerProps) {
    return <div className={`max-w-275 mx-auto px-6 pt-25 pb-20 flex flex-col ${gap} ${className}`}>{children}</div>
}
