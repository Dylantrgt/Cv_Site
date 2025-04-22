"use client";

import { useEffect, useRef, useState } from "react";
import { Gamepad2, Dumbbell, BellElectric, Music, BookOpen, Plane } from "lucide-react";
import Boxing from "./hobbies/Boxing";
import Gym from "./hobbies/Gym";
import MusicPlay from "./hobbies/Music";
import Snake from "./hobbies/Game";



export default function Hobbies() {

    return (
        <section id="hobbies" className="py-5 lg:py-16 lg:px-12 pb-4 bg-gray-900 flex flex-col items-center w-[100%] h-[100%] ">
            <div className='flex flex-row text-center gap-4 '>
                <img src="/hobbies.png" alt="image experiences" className='w-[42px] h-[42px]' />
                <h2 className="text-3xl font-bold text-center mb-8">Loisirs</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4 place-items-center w-[95%] h-[100%]">
                <div className=" flex flex-col items-center gap-2 p-4 w-[80%] h-[100%] lg:w-[100%]">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-gray-700 rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-blue-400 hover:text-white hover:scale-105 cursor-pointer">
                        <Gamepad2 className="w-12 h-12 text-blue-600 hover:text-white transition-colors duration-300" />
                        <p>Jeux Vidéos</p>
                    </div>
                    <div className="bg-gray-800 lg:w-[100%] lg:h-[100%] hidden p-4 lg:grid lg:place-items-center">
                        <Snake />
                    </div>
                </div>
                <div className=" flex flex-col items-center gap-2 p-4 w-[80%] h-[100%] lg:w-[100%]">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-gray-700 rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-blue-400 hover:text-white hover:scale-105 cursor-pointer">
                        <Dumbbell className="w-12 h-12 text-blue-600 hover:text-white transition-colors duration-300" />
                        <p>Musculation</p>
                    </div>
                    <div className="bg-gray-800 lg:w-[100%] lg:h-[100%] hidden lg:block p-4">
                        <Gym />
                    </div>
                </div>
                <div className=" flex flex-col items-center gap-2 p-4 w-[80%] h-[100%] lg:w-[100%]">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-gray-700 rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-blue-400 hover:text-white hover:scale-105 cursor-pointer">
                        <BellElectric className="w-12 h-12 text-blue-600 hover:text-white transition-colors duration-300" />
                        <p>Boxe</p>
                    </div>
                    <div className="bg-gray-800 lg:w-[100%] lg:h-[100%] hidden lg:block p-4 ">
                        <Boxing />
                    </div>
                </div>
                <div className=" flex flex-col items-center gap-2 p-4 w-[80%] h-[100%] lg:w-[100%] ">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-gray-700 rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-blue-400 hover:text-white hover:scale-105 cursor-pointer">
                        <Music className="w-12 h-12 text-blue-600 hover:text-white transition-colors duration-300" />
                        <p>Musique</p>
                    </div>
                    <div className="bg-gray-800 lg:w-[100%] lg:h-[100%] hidden lg:block p-4">
                        <MusicPlay />
                    </div>
                </div>
            </div>
        </section>
    );
}
