"use client";

import { useState } from "react";

const MusicPlay = () => {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
        setTimeout(() => setPlaying(false), 1000);
    };

    return (
        <div className="flex flex-col items-center p-2">
            <div className="relative w-[350px] h-[350px]">
                <img
                    src= "/guitariste.png"
                    alt="Musicien"
                />
                {playing && (
                    <div className="absolute top-[-20px] left-[50px] animate-notes ml-[40%] ">
                        <img src="/note2.png" alt="note 2" className="w-[55px] h-[55px] ml-[145%] mb-2"/>
                        <img src="/note1.png" alt="note 1" className="w-[40px] h-[40px] ml-[65%] mb-2"/>
                        <img src="/note3.png" alt="note 3" className="w-[45px] h-[45px]" />
                    </div>
                )}
            </div>
            <button onClick={handlePlay} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Jouer 🎸
            </button>
        </div>
    );
};

export default MusicPlay;
