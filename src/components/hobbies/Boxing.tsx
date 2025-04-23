"use client";

import { useState } from "react";
import Image from "next/image";


const Boxing = () => {
    const [punch, setPunch] = useState(false);

    const handlePunch = () => {
        setPunch(true);
        setTimeout(() => setPunch(false), 1000); // Retour à l'état initial après 1s
    };

    return (
        <div className="flex flex-col items-center p-2">
            <div className="w-[350px] h-[350px] flex justify-center items-center">
                <Image
                    src={punch ? "/boxer2.png" : "/boxer1.png"}
                    alt="Boxe"
                    width={350}
                    height={350}
                    className=" w-full h-full object-contain"
                />
            </div>
            <button
                onClick={handlePunch}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
                Frapper 💪
            </button>
        </div>
    );
};

export default Boxing;
