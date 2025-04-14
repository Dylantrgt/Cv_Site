"use client";

import { useState, useEffect, useRef } from "react";

const GRID_SIZE = 20; // Taille de la grille
const CELL_SIZE = 20; // Taille d'une cellule

const Snake = () => {
    const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
    const [food, setFood] = useState({ x: 10, y: 10 });
    const [direction, setDirection] = useState({ x: 1, y: 0 });
    const [gameOver, setGameOver] = useState(false);
    const gameRef = useRef<HTMLDivElement>(null);

    // Gérer les touches du clavier
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (gameOver) return;

            if (["ArrowUp", "ArrowDown"].includes(event.key)) {
                event.preventDefault(); // Empêche le scroll de la page
            }

            switch (event.key) {
                case "ArrowUp":
                    if (direction.y === 0) setDirection({ x: 0, y: -1 });
                    break;
                case "ArrowDown":
                    if (direction.y === 0) setDirection({ x: 0, y: 1 });
                    break;
                case "ArrowLeft":
                    if (direction.x === 0) setDirection({ x: -1, y: 0 });
                    break;
                case "ArrowRight":
                    if (direction.x === 0) setDirection({ x: 1, y: 0 });
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [direction, gameOver]);

    // Mettre à jour le jeu à intervalle régulier
    useEffect(() => {
        if (gameOver) return;

        const moveSnake = () => {
            setSnake((prevSnake) => {
                const newSnake = [...prevSnake];
                const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

                // Vérifier collision avec les murs
                if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
                    setGameOver(true);
                    return prevSnake;
                }

                // Vérifier collision avec le corps
                if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
                    setGameOver(true);
                    return prevSnake;
                }

                // Ajouter la nouvelle tête du serpent
                newSnake.unshift(head);

                // Vérifier si le serpent mange la pomme
                if (head.x === food.x && head.y === food.y) {
                    setFood({
                        x: Math.floor(Math.random() * GRID_SIZE),
                        y: Math.floor(Math.random() * GRID_SIZE),
                    });
                } else {
                    newSnake.pop();
                }

                return newSnake;
            });
        };

        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [direction, food, gameOver]);

    // Redémarrer le jeu
    const resetGame = () => {
        setSnake([{ x: 5, y: 5 }]);
        setFood({ x: 10, y: 10 });
        setDirection({ x: 1, y: 0 });
        setGameOver(false);
    };

    return (
        <div className="flex flex-col items-center gap-4">
            {/* <h3 className="text-xl font-bold">Jeu Snake 🎮</h3> */}
            {/* {gameOver && <p className="text-red-500 font-semibold">Game Over 😵</p>} */}
            <div
                ref={gameRef}
                className="relative border-4 border-gray-800 bg-gray-900"
                style={{
                    width: GRID_SIZE * CELL_SIZE,
                    height: GRID_SIZE * CELL_SIZE,
                }}
            >
                {/* Dessiner le serpent */}
                {snake.map((segment, index) => (
                    index === 0 ? (
                        <img
                            key={index}
                            src="/snake.png" // Mets ton image ici
                            alt="Tête du serpent"
                            className="absolute"
                            style={{
                                left: segment.x * CELL_SIZE,
                                top: segment.y * CELL_SIZE,
                                width: CELL_SIZE,
                                height: CELL_SIZE,
                            }}
                        />
                    ) : (
                        <img
                            key={index}
                            src="/body_snake.png" // Mets ton image ici
                            alt="Corps du serpent"
                            className="absolute bg-green-500 rounded-xl"
                            style={{
                                left: segment.x * CELL_SIZE,
                                top: segment.y * CELL_SIZE,
                                width: CELL_SIZE,
                                height: CELL_SIZE,
                            }}
                        />
                    )
                ))}


                {/* Dessiner la pomme */}
                <img
                    src="/apple.png" // Mets le chemin de ton image ici
                    alt="Pomme"
                    className="absolute"
                    style={{
                        left: food.x * CELL_SIZE,
                        top: food.y * CELL_SIZE,
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                    }}
                />

                {/* <div
                    className="absolute bg-red-500"
                    style={{
                        left: food.x * CELL_SIZE,
                        top: food.y * CELL_SIZE,
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                    }}
                />*/}

                {/* Affichage du "Game Over" et du bouton "Rejouer" au centre */}
                {gameOver && (
                    <div className="w-[105%] h-[105%] absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-4 ">
                        <p className="text-2xl font-bold mb-4 text-red-600">Game Over</p>
                        <button
                            onClick={resetGame}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Rejouer
                        </button> 
                    </div>
                )}
            </div>

        </div>
    );
};

export default Snake;
