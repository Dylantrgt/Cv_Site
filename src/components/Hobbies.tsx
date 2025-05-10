"use client";

import { Gamepad2, Dumbbell, BellElectric, Music } from "lucide-react";
import Boxing from "./hobbies/Boxing";
import Gym from "./hobbies/Gym";
import MusicPlay from "./hobbies/Music";
import Snake from "./hobbies/Game";
import Image from 'next/image';

export default function Hobbies() {
    return (
        <section id="hobbies" className="py-5 lg:py-16 lg:px-12 pb-4 bg-[#1F1B24] flex flex-col items-center w-[100%] h-[100%] text-[#F0EAD6]">
            <div className="flex flex-row text-center gap-4">
                <Image
                                    src="/hobbies.png"
                                    className="w-[42px] h-[42px]"
                                    width={50}
                                    height={50}
                                    alt="image Loisirs"
                                  />
                <h2 className="text-3xl font-bold text-center mb-8 text-[#C6B36B]">Loisirs</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 place-items-center w-[95%] h-[100%]">
               
                <div className="flex flex-col items-center gap-2 p-4 w-[80%] h-[100%] lg:w-[100%]">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-[#2A2340] rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-[#3A4B78] hover:text-[#F0EAD6] hover:scale-105 cursor-pointer">
                        <Gamepad2 className="w-12 h-12 text-[#C6B36B] hover:text-[#F0EAD6] transition-colors duration-300" />
                        <p>Jeux Vidéos</p>
                    </div>
                    <div className="bg-[#2A2530] lg:w-[100%] lg:h-[100%] hidden p-4 lg:grid lg:place-items-center rounded-xl">
                        <Snake />
                    </div>
                </div>

                
                <div className="flex flex-col items-center gap-2 p-4 w-[80%] h-[100%] lg:w-[100%]">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-[#2A2340] rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-[#3A4B78] hover:text-[#F0EAD6] hover:scale-105 cursor-pointer">
                        <Dumbbell className="w-12 h-12 text-[#C6B36B] hover:text-[#F0EAD6] transition-colors duration-300" />
                        <p>Musculation</p>
                    </div>
                    <div className="bg-[#2A2530] lg:w-[100%] lg:h-[100%] hidden lg:block p-4 rounded-xl">
                        <Gym />
                    </div>
                </div>

                
                <div className="flex flex-col items-center gap-2 p-4 w-[80%] h-[100%] lg:w-[100%]">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-[#2A2340] rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-[#3A4B78] hover:text-[#F0EAD6] hover:scale-105 cursor-pointer">
                        <BellElectric className="w-12 h-12 text-[#C6B36B] hover:text-[#F0EAD6] transition-colors duration-300" />
                        <p>Boxe</p>
                    </div>
                    <div className="bg-[#2A2530] lg:w-[100%] lg:h-[100%] hidden lg:block p-4 rounded-xl">
                        <Boxing />
                    </div>
                </div>

                
                <div className="flex flex-col items-center gap-2 p-4 w-[80%] h-[100%] lg:w-[100%]">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-[#2A2340] rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-[#3A4B78] hover:text-[#F0EAD6] hover:scale-105 cursor-pointer">
                        <Music className="w-12 h-12 text-[#C6B36B] hover:text-[#F0EAD6] transition-colors duration-300" />
                        <p>Musique</p>
                    </div>
                    <div className="bg-[#2A2530] lg:w-[100%] lg:h-[100%] hidden lg:block p-4 rounded-xl">
                        <MusicPlay />
                    </div>
                </div>
            </div>
        </section>
    );
}
