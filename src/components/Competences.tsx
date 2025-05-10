

import Image from 'next/image';
import React from 'react';



export default function Competences() {
    return (

        <section id="competences" className="bg-[#2A2530] text-[#F5F5F5] py-12 px-6 lg:px-12">
            <div className="flex flex-row text-center gap-4 justify-center mb-8">
                <Image
                    src="/competences.png"
                    className="w-[42px] h-[42px]"
                    width={50}
                    height={50}
                    alt="image compétences"
                  />
                <h2 className="text-3xl font-bold text-[#C6B36B]">Compétences</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 text-left ml-2">

                <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#C6B36B]">Développement Frontend</h3>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>HTML5, CSS3, Tailwind CSS</li>
                        <li>JavaScript (ES6+), React.js, Next.js</li>
                        <li>Création de sites responsives </li>
                        <li>Utilisation de composants UI et animations</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#C6B36B]">Backend & Base de données</h3>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Supabase pour la gestion des données</li>
                        <li>SQL (lecture et compréhension de requêtes)</li>
                        <li>Appels API REST (fetch, intégration)</li>
                        <li>Notions vues en formation (Node.js, Express...)</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#C6B36B]">UX/UI & Conception</h3>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Figma pour la création de maquettes</li>
                        <li>User stories </li>
                        <li>Diagrammes de séquence et de fonctionnement backend</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#C6B36B]">Méthodologie & Outils</h3>
                    <ul className="list-disc ml-6 space-y-1">
                        <li>Git, GitHub (versioning, collaboration)</li>
                        <li>Organisation de projet (Notion)</li>
                        <li>Responsive design & mobile-first</li>
                    </ul>
                </div>

            </div>
        </section>

    );
}
