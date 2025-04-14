import { Image } from 'lucide-react'
import React from 'react'

function Hero() {
    return (
        <section id='hero' className='bg-gray-900 pt-4'>
            <div className='flex flex-col gap-4 items-center text-center'>
                <div className="profile-picture">
                    <img src="/perceval.webp" alt="Ma photo" />
                </div>
                <h1 className='text-3xl font-bold'>Bonjour, je m'appelle Dylan Martin</h1>
                <p className="text-white">je suis depuis quelques mois diplômé en tant que Développeur Web et Web mobile.</p>
            </div>
        </section>
    )
}

export default Hero