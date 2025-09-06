

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



export default function Projects() {
    return (

        <section id="Projets" className="bg-[#1F1B24] text-[#F5F5F5] py-12 px-2 lg:px-12 flex flex-col ">
            <div className="flex flex-row text-center gap-4 justify-center mb-8">
                <Image
                    src="/competences.png"
                    className="w-[42px] h-[42px]"
                    width={50}
                    height={50}
                    alt="image compétences"
                  />
                <h2 className="text-3xl font-bold text-[#C6B36B]">Projets personels</h2>
            </div>
            
                <div className='mt-2'>
                    <h3 className="text-xl font-semibold mb-2 text-[#C6B36B]">Projets realise sous NextJS</h3>
                    <div className="flex flex-col mt-4">
                        <Link href={"https://site-lavage.vercel.app/"} target="_blank" className='text-[#3154c9] hover:text-white w-54'>Site de lavage ( Non finalisé )</Link>
                        <Link href={"https://sport-contact.vercel.app/"} target="_blank" className='text-[#3154c9] hover:text-white w-100'>Site d'annuaire pour des sports de combat ( En cours.. )</Link>
                    </div>
                </div>
        </section>

    );
}
