"use client";

import { useState } from "react";

const Boxing = () => {
    const [punch, setPunch] = useState(false);

    const handlePunch = () => {
        setPunch(true);
        setTimeout(() => setPunch(false), 500);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-[200px] h-[200px]">
                <img src={punch ? "/boxer_punch.png" : "/boxer_idle.png"} alt="Boxeur" />
                <img src="/punching_bag.png" alt="Sac de frappe" className={`absolute ${punch ? "animate-shake" : ""}`} />
            </div>
            <button onClick={handlePunch} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
                Frapper 🥊
            </button>
        </div>
    );
};

export default Boxing;
