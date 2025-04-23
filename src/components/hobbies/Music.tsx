"use client";

import { useState } from "react";
import Image from "next/image";


const MusicPlay = () => {
    const [playing, setPlaying] = useState(false);

    const handlePlay = () => {
        setPlaying(true);
        setTimeout(() => setPlaying(false), 1000);
    };

    return (
        <div className="flex flex-col items-center p-2">
              <div className="relative w-[350px] h-[350px]">
    <Image
      src="/guitariste.png"
      alt="Musicien"
      width={350}
      height={350}
    />
    {playing && (
      <div className="absolute top-[-20px] left-[50px] animate-notes ml-[40%]">
        <Image
          src="/note2.png"
          alt="note 2"
          width={55}
          height={55}
          className="ml-[145%] mb-2"
        />
        <Image
          src="/note1.png"
          alt="note 1"
          width={40}
          height={40}
          className="ml-[65%] mb-2"
        />
        <Image
          src="/note3.png"
          alt="note 3"
          width={45}
          height={45}
        />
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
