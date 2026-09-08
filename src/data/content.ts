export const navLinks = [
    { label: 'Home', path: '/', section: 'home' },
    { label: 'Skills', path: '/skills', section: 'skills' },
    { label: 'Work', path: '/work', section: 'work' },
    { label: 'Services', path: '/services', section: 'services' },
    { label: 'Contact', path: '/contact', section: 'contact' },
]

export const hero = {
    role: 'MERN-Stack Developer',
    name: 'Sabin V V',
    tagline:
        'Building modern web applications with scalable architecture, intuitive interfaces, and thoughtful user experiences. I turn complex problems into practical, reliable, and maintainable solutions.',
}

export const skillGroups = [
    {
        title: 'Frontend Development',
        icon: 'frontend' as const,
        skills: ['React.Js', 'TypeScript', 'Redux Toolkit', 'Next.js', 'Tailwind CSS'],
    },
    {
        title: 'Backend & Architecture',
        icon: 'backend' as const,
        skills: ['Node.js', 'Express.Js', 'REST APIs', 'Socket.IO', 'JWT'],
    },
    {
        title: 'Database & Infrastructure',
        icon: 'database' as const,
        skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'AWS S3', 'Razorpay'],
    },
]

export const services = [
    {
        icon: 'fullstack' as const,
        title: 'Full-Stack Web Development',
        description:
            'Build complete web applications using React, Node.js, Express.js, and MongoDB, from frontend interfaces to backend APIs and database integration.',
    },
    {
        icon: 'api' as const,
        title: 'API Development & Integration',
        description:
            'Build REST APIs and integrate third-party services such as payment gateways, cloud storage, real-time communication, and external APIs.',
    },
    {
        icon: 'database' as const,
        title: 'Database Design',
        description:
            'Design and structure MongoDB databases, schemas, relationships, and data access layers for complex applications.',
    },
    {
        icon: 'deployment' as const,
        title: 'Deployment & CI/CD',
        description:
            'Containerize applications with Docker and set up automated build and deployment workflows using CI/CD and cloud infrastructure.',
    },
]

export const contact = {
    email: 'vvsabin@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sabin-vv/',
    github: 'https://github.com/sabin-vv',
}
