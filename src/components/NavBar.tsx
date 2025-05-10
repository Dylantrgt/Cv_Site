"use client"; // Ajoutez cette ligne au début du fichier

import { useState } from 'react';
import React from 'react'
import { NAV_LINKS } from '@/constants';
import Link from 'next/link'
import Image from "next/image";
import { Menu, X, } from "lucide-react"; // Ajoutez l'icône X pour fermer le menu

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='flex flex-col lg:flex-row gap-2 lg:mx-16  z-40 sticky top-2'>
            <div className="bg-white flex items-center justify-between px-5 lg:rounded-xl z-30 py-2 w-full">
                <Link href="/#hero">
                <Image
                                    src={"/Logo.png"}
                                    alt="Boxe"
                                    width={44}
                                    height={44}
                                    className=" w-full h-full object-contain"
                                />
                </Link>
                <ul className="hidden lg:flex gap-6 ">
                    {NAV_LINKS.map((link) => (
                        <Link
                            href={`#${link.href}`}
                            key={link.key}
                            className="text-black cursor-pointer transition-all hover:font-bold hover:text-blue-500"
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>

                {/* Bouton burger pour les petits écrans */}
                <button onClick={toggleMenu} className="lg:hidden text-black ">
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Menu déroulant pour les petits écrans */}
            {isMenuOpen && (
                <ul className="flex flex-col bg-white rounded-xl px-5 py-3 lg:hidden">
                    {NAV_LINKS.map((link) => (
                        <Link
                            href={`#${link.href}`}
                            key={link.key}
                            className="text-black cursor-pointer transition-all hover:font-bold hover:text-orange-500 py-2"
                            onClick={toggleMenu} // Fermer le menu lors du clic sur un lien
                        >
                            {link.label}
                        </Link>
                    ))}
                </ul>
            )}

        </nav>
    )
}

export default Navbar