import wecareImage from '@/assets/wecare.png'
import olx from '@/assets/olx.png'
import netflix from '@/assets/netflix.png'
import lapzone from '@/assets/lapzone.png'

export interface Project {
    id: number
    title: string
    description: string
    image?: string
    technologies: string[]
    link?: string
    github?: string
}

export const featuredProjects: Project[] = [
    {
        id: 1,
        title: 'WeCare',
        description:
            'A comprehensive healthcare platform designed to streamline patient-doctor interactions. Features include secure messaging, appointment scheduling, medication management, vital tracking, video consultation, and digital healthcare records.',
        image: wecareImage,
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        link: 'https://wecarehealth.online/',
        github: 'https://github.com/sabin-vv/weCare',
    },
]

export const projects: Project[] = [
    {
        id: 1,
        title: 'Lapzone-eCommerce',
        description:
            'A full-stack e-commerce platform for laptop shopping and order management, featuring authentication, cart management, secure payments, and cloud image storage.',
        image: lapzone,
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Razorpay', 'Cloudinary'],
        link: 'https://lapzone-ecommerce.vercel.app/shop',
        github: 'https://github.com/sabin-vv/lapzone-ecommerce',
    },
    {
        id: 2,
        title: 'OLX Clone',
        description:
            'A fully functional classified advertisements platform with user authentication, product listing creation, search, and real-time messaging between buyers and sellers.',
        image: olx,
        technologies: ['React', 'Firebase', 'Tailwind CSS', 'Cloudinary'],
        link: 'https://sabin-vv.github.io/olx-clone',
        github: 'https://github.com/sabin-vv/olx-clone',
    },
    {
        id: 3,
        title: 'Netflix Clone',
        description:
            'A streaming service interface with movie discovery, TMDB API integration, responsive movie rows, dynamic content and modern streaming-platform UI.',
        technologies: ['React', 'Redux', 'TMDB API', 'Firebase'],
        image: netflix,
        link: 'https://github.com/sabin-vv/Netflix-clone',
        github: 'https://github.com/sabin-vv/Netflix-clone',
    },
]
