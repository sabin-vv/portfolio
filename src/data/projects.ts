import wecareImage from '@/assets/wecare.svg'

export interface Project {
    id: number
    title: string
    description: string
    image?: string
    technologies: string[]
    featured?: boolean
    link?: string
    github?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'WeCare',
        description:
            'A comprehensive healthcare platform designed to streamline patient-doctor interactions. Features include secure messaging, appointment scheduling, medication management, vital tracking, video consultation, and digital healthcare records.',
        image: wecareImage,
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        featured: true,
        link: '#',
        github: '#',
    },
    {
        id: 2,
        title: 'OLX Clone',
        description:
            'A fully functional classified advertisements platform with user authentication, product listing creation, search, and real-time messaging between buyers and sellers.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        link: '#',
        github: '#',
    },
    {
        id: 3,
        title: 'Netflix Clone',
        description:
            'A streaming service interface with movie discovery, TMDB API integration, responsive movie rows, dynamic content and modern streaming-platform UI.',
        technologies: ['React', 'Redux', 'TMDB API', 'Tailwind'],
        link: '#',
        github: '#',
    },
]