export default function Education() {
    return (
        <section id="education" className="py-12 px-12 bg-gray-500 items-center">
            <div className='flex flex-row text-center gap-4'>
                <img src="/etudes.png" alt="image experiences" className='w-[42px] h-[42px]' />
                <h2 className="text-3xl font-bold text-center mb-4">Études</h2>
            </div>
            <ul className="text-center">
                <li>2024 - Diplôme Développeur Web & Mobile</li>
                <li>2019 - Bac Professionnel Sécurité et Prévention</li>
            </ul>
        </section>
    );
}
