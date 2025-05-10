import Image from 'next/image';

export default function Education() {
    return (
        <section id="education" className="py-5 lg:py-12 px-2 bg-[#2A2530]  flex flex-col lg:items-center gap-6">
            <div className="grid place-items-center mb-6">
                <div className='flex flex-row text-center gap-4'>
                    <Image
                                        src="/etudes.png"
                                        className="w-[42px] h-[42px]"
                                        width={50}
                                        height={50}
                                        alt="image etudes"
                                      />
                    <h2 className="text-3xl font-bold text-[#C0A96A] ">Études</h2>
                </div>
            </div>
            <ul className="lg:text-center flex flex-col gap-4">
                <li className=" text-[#F5F5F5] " >2024 - Diplôme Développeur Web & Mobile</li>
                <li className=" text-[#F5F5F5] " >2019 - Bac Professionnel Sécurité et Prévention</li>
            </ul>
        </section>
    );
}
