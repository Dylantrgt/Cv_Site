"use client";

import { useState } from "react";

// const Boxing = () => {
//     const [punch, setPunch] = useState(false);

//     const handlePunch = () => {
//         setPunch(true);
//         setTimeout(() => setPunch(false), 500);
//     };

//     return (
//         <div className="flex flex-col items-center">
//             <div className="relative w-[200px] h-[200px]">
//                 <img src={punch ? "/boxer1.png" : "/boxer2.png"} alt="Boxeur" />
//                 <img src="/boxer1.png" alt="Sac de frappe" className={`absolute ${punch ? "animate-shake" : ""}`} />
//             </div>
//             <button onClick={handlePunch} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
//                 Frapper 🥊
//             </button>
//         </div>
//     );
// };


const Boxing = () => {
    const [punch, setPunch] = useState(false);

    const handlePunch = () => {
        setPunch(true);
        setTimeout(() => setPunch(false), 1000); // Retour à l'état initial après 1s
    };

    return (
        <div className="flex flex-col items-center p-2">
            <div className="w-[350px] h-[350px] flex justify-center items-center">
                <img
                    src={punch ? "/boxer2.png" : "/boxer1.png"}
                    alt="Boxe"
                    className="w-full h-full object-contain"
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
