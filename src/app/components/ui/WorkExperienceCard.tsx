import React from 'react';
import { colors } from '@/app/lib/colors';

interface WorkExperienceDetail {
    category: string;
    items: string[];
}

interface WorkExperienceCardProps {
    icon: string;
    title: string;
    company: string;
    period: string;
    location?: string;
    details: WorkExperienceDetail[];
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ icon, title, company, period, location, details }) => (
    <div className={`${colors.background.card} rounded-lg shadow p-6`}>
        <div className="flex items-center mb-2">
            <span className="text-3xl mr-3">{icon}</span>
            <span className={`text-xl font-semibold ${colors.text.cardTitle}`}>{title}</span>
        </div>
        <div className={`${colors.text.cardSubtitle} mb-1`}>{company}</div>
        <div className={`text-sm ${colors.text.cardDescription} mb-1`}>{period}{location ? ` · ${location}` : ''}</div>
        {details.length > 0 && (
            <ul className="list-disc list-inside mt-4 space-y-2">
                {details.map((detail, i) => (
                    <li key={i}>
                        <span className={`font-semibold ${colors.text.cardDetail}`}>{detail.category}:</span>
                        <ul className="list-disc ml-6">
                            {detail.items.map((item, j) => (
                                <li key={j} className={colors.text.cardDetail}>{item}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default WorkExperienceCard;
