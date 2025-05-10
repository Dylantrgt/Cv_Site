
import React from 'react'
import Image from 'next/image';

function Experiences() {
    return (
        <section id='experiences' className='bg-[#1F1B24] px-2 lg:px-12 py-5 lg:py-12 flex flex-col lg:items-center'>
            <div className="grid place-items-center mb-6">
                <div className='flex flex-row text-center gap-4'>
                    <Image
                                    src="/experiences.png"
                                    className="w-[42px] h-[42px]"
                                    width={50}
                                    height={50}
                                    alt="image experiences"
                                  />
                    <h2 className="text-3xl text-[#C0A96A] font-bold ">Expériences</h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 lg:gap-6 gap-9 lg:p-4'>
                <div className='flex flex-col lg:gap-2'>
                    <div className='flex flex-row lg:gap-4 ' >
                        <p className='font-bold text-[#C0A96A]'>06/2024 - 07/2024</p>
                        <img src="/dev.png" alt="image experiences" className='w-[32px] h-[32px]' />
                    </div>
                    <p className=' text-[#F5F5F5] '>Stage développeur web / web mobile.</p>
                    <p  className=' text-[#C0A96A] '>RUN&SMILE , ALES.</p>
                    <p className=' text-[#F5F5F5] '>Création d&rsquo;une application mobile, d&rsquo;un panel admin, d&rsquo;un Backend
                        API et d&rsquo;une refonte du site web. Langage et outils utilisés : NodeJs,
                        Express, NextJs, React, React Native, Expo, Tailwind CSS, Figma,
                        GitHub, Supabase, PostgreSQL</p>
                </div>
                <div className='flex flex-col lg:gap-2'>
                    <div className='flex flex-row gap-4' >
                        <p className='font-bold text-[#C0A96A]'>07/2023 - 08/2023</p>
                        <img src="/kayak.png" alt="image experiences" className='w-[32px] h-[32px]' />
                    </div>
                    <p className=' text-[#F5F5F5] '>Employé polyvalent.</p>
                    <p className=' text-[#C0A96A] '>AIGUE VIVE ARDECHE CANOES, VALLON PONT D&rsquo;ARC.</p>
                </div>
                <div className='flex flex-col lg:gap-2'>
                    <div className='flex flex-row gap-4' >
                        <p className='font-bold text-[#C0A96A]'>05/2018 - 07/2022</p>
                        <img src="/vignes.png" alt="image experiences" className='w-[32px] h-[32px]' />
                    </div>
                    <p className=' text-[#F5F5F5] '>Employé.</p>
                    <p className=' text-[#C0A96A] '>EARL CHATEAU DE LA SELVE.</p>
                    <p  className=' text-[#F5F5F5] '>Entretien régulier des vignes, y compris la taille, l&rsquo;ébourgeonnage et
                        le palissage
                        Travaux de cave : participation à la mise en bouteille des vins,
                        réalisation de l&rsquo;étiquetage,
                        Participation à la vendange manuelle et mécanique
                        Chef d&rsquo;équipe des saisonniers</p>
                </div>
                <div className='flex flex-col lg:gap-2'>
                    <div className='flex flex-row gap-4' >
                        <p className='font-bold text-[#C0A96A]'>05/2016 - 08/2016</p>
                        <img src="/securite.png" alt="image experiences" className='w-[32px] h-[32px]' />
                    </div>
                    <p className=' text-[#F5F5F5] '>Agent de sécurité.</p>
                    <p className=' text-[#C0A96A] '>SUD ARDECHE SECURITE, AUBENAS.</p>
                    <p  className=' text-[#F5F5F5] '>Surveillance de l&rsquo;entrée de l&rsquo;établissement, contrôle visuel du contenu
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