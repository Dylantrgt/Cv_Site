
import React from 'react'

function Experiences() {
    return (
        <section id='experiences' className='bg-gray-900 px-2 lg:px-12 py-5 lg:py-12 flex flex-col lg:items-center'>
            <div className="grid place-items-center mb-6">
                <div className='flex flex-row text-center gap-4'>
                    <img src="/experiences.png" alt="image experiences" className='w-[42px] h-[42px]' />
                    <h2 className="text-3xl font-bold ">Expériences</h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 lg:gap-6 gap-9 lg:p-4'>
                <div className='flex flex-col lg:gap-2'>
                    <div className='flex flex-row lg:gap-4 ' >
                        <p className='font-bold'>06/2024 - 07/2024</p>
                        <img src="/dev.png" alt="image experiences" className='w-[32px] h-[32px]' />
                    </div>
                    <p>Stage développeur web / web mobile.</p>
                    <p>RUN&SMILE , ALES.</p>
                    <p>Création d’une application mobile, d’un panel admin, d’un Backend
                        API et d’une refonte du site web. Language et outils utilisé : NodeJs,
                        Express, NextJs, React, React Native, Expo, Tailwind CSS, Figma,
                        GitHub, Supabase, PostgreSQL</p>
                </div>
                <div className='flex flex-col lg:gap-2'>
                    <div className='flex flex-row gap-4' >
                        <p className='font-bold'>07/2023 - 08/2023</p>
                        <img src="/kayak.png" alt="image experiences" className='w-[32px] h-[32px]' />
                    </div>
                    <p>Employé polyvalent.</p>
                    <p>AIGUE VIVE ARDECHE CANOES, VALLON PONT D'ARC.</p>
                </div>
                <div className='flex flex-col lg:gap-2'>
                    <div className='flex flex-row gap-4' >
                        <p className='font-bold'>05/2018 - 07/2022</p>
                        <img src="/vignes.png" alt="image experiences" className='w-[32px] h-[32px]' />
                    </div>
                    <p>Employé.</p>
                    <p>EARL CHATEAU DE LA SELVE.</p>
                    <p>Entretien régulier des vignes, y compris la taille, l'ébourgeonnage et
                        le palissage
                        Travaux de cave : participation à la mise en bouteille des vins,
                        réalisation de l'étiquetage,
                        Participation à la vendange manuelle et mécanique
                        Chef d'équipe des saisonniers</p>
                </div>
                <div className='flex flex-col lg:gap-2'>
                    <div className='flex flex-row gap-4' >
                        <p className='font-bold'>05/2016 - 08/2016</p>
                        <img src="/securite.png" alt="image experiences" className='w-[32px] h-[32px]' />
                    </div>
                    <p>Agent de sécurité.</p>
                    <p>SUD ARDECHE SECURITE, AUBENAS.</p>
                    <p>Surveillance de l'entrée de l'établissement, contrôle visuel du contenu
                        des sacs
                        Réalisation de rondes régulières pour détecter et prévenir toute
                        activité suspecte
                        Surveillance et patrouille des zones désignées pour assurer la
                        sécurité.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Experiences