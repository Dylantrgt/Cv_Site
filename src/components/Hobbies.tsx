"use client";

import { useEffect, useRef, useState } from "react";
import { Gamepad2, Dumbbell, BellElectric, Music, BookOpen, Plane } from "lucide-react";
import Boxing from "./hobbies/Boxing";
import Gym from "./hobbies/Gym";
import MusicPlay from "./hobbies/Music";
import Snake from "./hobbies/Game";



export default function Hobbies() {

    return (
        <section id="hobbies" className="py-16 px-12 bg-gray-500 flex flex-col items-center">
            <div className='flex flex-row text-center gap-4 '>
                <img src="/hobbies.png" alt="image experiences" className='w-[42px] h-[42px]' />
                <h2 className="text-3xl font-bold text-center mb-8">Hobbies</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 items-center  ">
                <div className="bg-amber-300 flex flex-col items-center gap-2 p-4">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-gray-700 rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-blue-400 hover:text-white hover:scale-105 cursor-pointer">
                        <Gamepad2 className="w-12 h-12 text-blue-600 hover:text-white transition-colors duration-300" />
                        <p>Jeux Vidéos</p>
                    </div>
                    <div className="bg-gray-800 w-[650px] h-[450px] p-4">
                        <Snake />
                    </div>
                </div>
                <div className="bg-amber-400 flex flex-col items-center gap-2 p-4">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-gray-700 rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-blue-400 hover:text-white hover:scale-105 cursor-pointer">
                        <Dumbbell className="w-12 h-12 text-blue-600 hover:text-white transition-colors duration-300" />
                        <p>Musculation</p>
                    </div>
                    <div className="bg-gray-800 w-[650px] h-[450px]">
                        <Gym />
                    </div>
                </div>
                <div className="bg-amber-500 flex flex-col items-center gap-2 p-4">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-gray-700 rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-blue-400 hover:text-white hover:scale-105 cursor-pointer">
                        <BellElectric className="w-12 h-12 text-blue-600 hover:text-white transition-colors duration-300" />
                        <p>Boxe</p>
                    </div>
                    <div className="bg-gray-800 w-[650px] h-[450px]">
                        <Boxing />
                    </div>
                </div>
                <div className="bg-amber-600 flex flex-col items-center gap-2 p-4">
                    <div className="flex flex-col items-center gap-3 p-6 mx-auto bg-gray-700 rounded-xl w-[170px] h-[130px] shadow-md transition-transform duration-300 ease-in-out 
                       hover:bg-blue-400 hover:text-white hover:scale-105 cursor-pointer">
                        <Music className="w-12 h-12 text-blue-600 hover:text-white transition-colors duration-300" />
                        <p>Musique</p>
                    </div>
                    <div className="bg-gray-800 w-[650px] h-[450px]">
                        <MusicPlay />
                    </div>
                </div>
            </div>
        </section>
    );
}
