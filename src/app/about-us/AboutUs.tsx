import ContentSection from '@/app/components/sections/ContentSection';

export default function AboutUs() {
    // Work Experience data
    const workExperience = [
        {
            icon: '💼',
            title: 'Software Consultant',
            description: 'TNG Technology Consulting GmbH, 2022–Present',
        },
        {
            icon: '💻',
            title: 'Freelance Developer',
            description: 'Various clients, 2018–2022',
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

    return (
        <div className="min-h-screen">
            {/* Work Experience Section */}
            <ContentSection
                title="Work Experience"
                backgroundColor="white"
                layout="centered"
                maxWidth="4xl"
                gridItems={workExperience}
            />

            {/* Education Section */}
            <ContentSection
                title="Education"
                backgroundColor="white"
                layout="centered"
                maxWidth="4xl"
                gridItems={education}
            />
        </div>
    );
}
