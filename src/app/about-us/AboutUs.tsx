import ContentSection from '@/app/components/sections/ContentSection';

export default function AboutUs() {
    // Work Experience data
    const workExperience = [
        {
            icon: '💼',
            title: 'Software Consultant',
            company: 'TNG Technology Consulting · Full-time',
            period: 'Oct 2023 to Present · 2 yrs 2 mos',
            location: 'Munich, Bavaria, Germany · Hybrid',
            details: [
                {
                    category: 'Cloud Infrastructure & DevOps',
                    items: [
                        'Manage and optimize AWS infrastructure and Kubernetes clusters in AWS EKS.',
                        'Implement and maintain Identity and Access Management (IAM) including SSO for multiple AWS accounts.',
                        'Automate deployments using Tekton Pipelines.',
                        'Utilize Infrastructure as Code (IaC) with Terraform, Helm, and Helmfile.',
                        'Oversee container applications with k9s.'
                    ]
                },
                {
                    category: 'Backend Development',
                    items: [
                        'Develop internal applications and REST APIs in Python3 to support various departments.',
                        'Create internal automation tools and REST APIs in Go for infrastructure and compliance.'
                    ]
                },
                {
                    category: 'Frontend Development',
                    items: [
                        'Develop internal self-service portals and applications using TypeScript, React, and Material-UI.'
                    ]
                },
                {
                    category: 'SSO & Security',
                    items: [
                        'Continuously develop and manage a company-wide SSO solution for over 800 users.',
                        'Operate Keycloak as the central entry point for internal and external services.',
                        'Implement Configuration as Code for Keycloak configuration via Terraform.'
                    ]
                },
                {
                    category: 'Network & System Administration',
                    items: [
                        'Administer network infrastructure, server management, and modern firewall management across multiple locations.',
                        'Server configuration and provisioning with Ansible.',
                        'Manage various internal systems and tools: LDAP, VPN, DNS, PGP and cloud access control system.'
                    ]
                },
                {
                    category: 'Team Collaboration & Knowledge Sharing',
                    items: [
                        'Onboard new team members and foster knowledge dissemination within the team.'
                    ]
                }
            ]
        },
        {
            icon: '💻',
            title: 'Freelance Developer',
            company: 'Various clients',
            period: '2018–2022',
            location: '',
            details: []
        },
        // Add more roles as needed
    ];

    // Education data
    const education = [
        {
            icon: '🎓',
            title: 'MSc Computer Science',
            description: 'University of Example, 2020–2022',
        },
        {
            icon: '🎓',
            title: 'BSc Mathematics',
            description: 'University of Example, 2017–2020',
        },
        // Add more education as needed
    ];

    // Map workExperience to CardItem format for ContentSection
    const workExperienceCards = workExperience.map(role => ({
        icon: role.icon,
        title: role.title,
        subtitle: `${role.company}${role.location ? ` · ${role.location}` : ''}`,
        description: role.period,
        details: role.details.length > 0
            ? role.details.map(detail => (
                <div key={detail.category}>
                    <span className="font-semibold">{detail.category}:</span>
                    <ul className="list-disc ml-6">
                        {detail.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))
            : undefined
    }));

    return (
        <div className="min-h-screen">
            <ContentSection
                title="Work Experience"
                backgroundColor="white"
                layout="centered"
                maxWidth="7xl"
                variant="card"
                cardItems={workExperienceCards}
            />
        </div>
    );
}
