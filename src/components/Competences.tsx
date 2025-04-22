
import React from 'react';

const skills = [
    { name: 'React', level: '50%' },
    { name: 'Next.js', level: '65%' },
    { name: 'JavaScript', level: '40%' },
    { name: 'Tailwind CSS', level: '65%' },
    { name: 'Node.js', level: '30%' },
];

export default function Competences() {
    return (
        <section id='competences' className="py-5 lg:py-16 lg:px-12 px-2  bg-gray-500 ">
            <div className="grid place-items-center mb-6">
                <div className="grid grid-cols-[auto_auto] items-center gap-4">
                    <img src="/competences.png" alt="image compétences" className="w-[42px] h-[42px]" />
                    <h2 className="text-3xl font-bold">Compétences</h2>
                </div>
            </div>
            <div className="lg:max-w-xl mx-auto space-y-4 w-[75%] h-[100%]">
                {skills.map((skill, index) => (
                    <div key={index} className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                        <div
                            className="bg-blue-500 text-white text-[12px] lg:text-sm font-bold flex items-center justify-center h-full transition-all duration-500 ease-in-out"
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
