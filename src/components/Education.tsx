export default function Education() {
    return (
        <section id="education" className="py-5 lg:py-12 px-2 bg-gray-500  flex flex-col lg:items-center gap-6">
            <div className="grid place-items-center mb-6">
                <div className='flex flex-row text-center gap-4'>
                    <img src="/etudes.png" alt="image experiences" className='w-[42px] h-[42px]' />
                    <h2 className="text-3xl font-bold ">Études</h2>
                </div>
            </div>
            <ul className="lg:text-center flex flex-col gap-4">
                <li>2024 - Diplôme Développeur Web & Mobile</li>
                <li>2019 - Bac Professionnel Sécurité et Prévention</li>
            </ul>
        </section>
    );
}
