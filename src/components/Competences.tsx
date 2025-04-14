
import React from 'react';

const skills = [
    { name: 'React', level: '50%' },
    { name: 'Next.js', level: '65%' },
    { name: 'JavaScript', level: '55%' },
    { name: 'Tailwind CSS', level: '65%' },
    { name: 'Node.js', level: '40%' },
];

export default function Competences() {
    return (
        <section id='competences' className="py-16 px-12 bg-gray-900">
            <div className='flex flex-row text-center gap-4'>
                <img src="/competences.png" alt="image experiences" className='w-[42px] h-[42px]' />
                <h2 className="text-3xl font-bold text-center mb-8">Compétences</h2>
            </div>
            <div className="max-w-xl mx-auto space-y-4">
                {skills.map((skill, index) => (
                    <div key={index} className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                        <div
                            className="bg-blue-500 text-white text-sm font-bold flex items-center justify-center h-full transition-all duration-500 ease-in-out"
                            style={{ width: skill.level }}
                        >
                            {skill.name} ({skill.level})
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
