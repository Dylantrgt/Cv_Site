import React from 'react'
import Image from 'next/image';

function Hero() {
    return (
        <section id='hero' className='bg-[#1F1B24] pt-4'>
            <div className='flex flex-col gap-4 items-center text-center mx-4'>
                <div className="profile-picture">
                    
                    <Image
                                        src="/MoiEnDBZ.png"
                                        className="w-[42px] h-[42px]"
                                        width={250}
                                        height={250}
                                        alt="image compétences"
                                      />
                </div>
                <h1 className='text-2xl lg:text-3xl font-bold text-[#F5F5F5] '>Bonjour, je m&rsquo;appelle Dylan Martin</h1>
                <p className="text-[#F5F5F5] mb-4">je suis depuis quelques mois diplômé en tant que <span className='text-[#C0A96A]' >Développeur Web et Web mobile</span>.</p>
            </div>
        </section>
    )
}

export default Hero