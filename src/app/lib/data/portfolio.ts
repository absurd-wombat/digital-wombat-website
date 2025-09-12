import { Project, Stat } from '@/app/lib/types';

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce solution built with Next.js and integrated payment processing.',
    icon: '��',
    gradient: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    technologies: ['Next.js', 'TypeScript', 'Stripe'],
    href: '/contact'
  },
  {
    id: 'banking',
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with real-time transactions and biometric authentication.',
    icon: '📱',
    gradient: 'bg-gradient-to-br from-green-400 to-blue-500',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    href: '/contact'
  },
  {
    id: 'dashboard',
    title: 'Corporate Dashboard',
    description: 'A comprehensive business intelligence dashboard with real-time analytics and reporting.',
    icon: '🏢',
    gradient: 'bg-gradient-to-br from-orange-400 to-red-500',
    technologies: ['React', 'D3.js', 'PostgreSQL'],
    href: '/contact'
  },
  {
    id: 'creative',
    title: 'Creative Agency Website',
    description: 'A stunning portfolio website for a creative agency with smooth animations and modern design.',
    icon: '🎨',
    gradient: 'bg-gradient-to-br from-purple-400 to-pink-500',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind'],
    href: '/contact'
  },
  {
    id: 'saas',
    title: 'SaaS Platform',
    description: 'A comprehensive SaaS solution with user management, billing, and API integrations.',
    icon: '��',
    gradient: 'bg-gradient-to-br from-teal-400 to-cyan-500',
    technologies: ['Vue.js', 'Express', 'AWS'],
    href: '/contact'
  },
  {
    id: 'startup',
    title: 'Startup MVP',
    description: 'A rapid prototype and MVP development for an innovative startup idea with user feedback integration.',
    icon: '��',
    gradient: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    technologies: ['React', 'Firebase', 'Stripe'],
    href: '/contact'
  }
];

export const stats: Stat[] = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '25+', label: 'Happy Clients' },
  { value: '99%', label: 'Success Rate' },
  { value: '24/7', label: 'Support' }
];