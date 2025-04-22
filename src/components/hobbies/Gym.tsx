"use client";

import { useState } from "react";

const Gym = () => {
    const [lifting, setLifting] = useState(false);

    const handleLift = () => {
        setLifting(true);
        setTimeout(() => setLifting(false), 1000); // Retour à l'état initial après 1s
    };

    return (
        <div className="flex flex-col items-center p-2">
            <div className="w-[350px] h-[350px] flex justify-center items-center">
                <img
                    src={lifting ? "/muscu2.png" : "/muscu1.png"}
                    alt="Musculation"
                    className="w-full h-full object-contain"
                />
            </div>
            <button
                onClick={handleLift}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
                Soulever 💪
            </button>
        </div>
    );
};

export default Gym;
