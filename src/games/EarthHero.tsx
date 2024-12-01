import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GAME_DURATION = 60; // seconds
const SPAWN_INTERVAL = 1500; // milliseconds

const gameItems = ['📱', '💻', '🖥️', '🔋', '🖨️', '⌚️', '🎮', '🎧'];

export function EarthHero() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [gameActive, setGameActive] = useState(false);
  const [items, setItems] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('earthHeroHighScore');
    return saved ? parseInt(saved) : 0;
  });

  const spawnItem = useCallback(() => {
    if (!gameActive) return;

    const newItem = {
      id: Date.now(),
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (400 - 100),
      emoji: gameItems[Math.floor(Math.random() * gameItems.length)],
    };

    setItems(prev => [...prev, newItem]);
  }, [gameActive]);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setItems([]);
  };

  useEffect(() => {
    if (!gameActive) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameActive(false);
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('earthHeroHighScore', score.toString());
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const spawnTimer = setInterval(spawnItem, SPAWN_INTERVAL);

    return () => {
      clearInterval(timer);
      clearInterval(spawnTimer);
    };
  }, [gameActive, score, highScore, spawnItem]);

  const collectItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
    setScore(prev => prev + 10);
  };

  return (
    <div className="relative h-[500px] bg-gradient-to-b from-blue-200 to-green-200 overflow-hidden rounded-lg shadow-xl">
      <div className="absolute top-4 left-4 right-4 flex justify-between p-4 bg-white rounded-lg shadow-md z-10">
        <div className="text-lg font-semibold">Score: {score}</div>
        <div className="text-lg font-semibold">High Score: {highScore}</div>
        <div className="text-lg font-semibold">Time: {timeLeft}s</div>
      </div>

      <AnimatePresence>
        {!gameActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
          >
            <div className="text-center text-white p-8 rounded-lg bg-black bg-opacity-75">
              <h2 className="text-3xl font-bold mb-4">
                {timeLeft === 0 ? 'Game Over!' : 'Earth Hero'}
              </h2>
              {timeLeft === 0 && (
                <>
                  <p className="mb-2">Final Score: {score}</p>
                  <p className="mb-4">High Score: {highScore}</p>
                </>
              )}
              <button
                onClick={startGame}
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
              >
                {timeLeft === 0 ? 'Play Again' : 'Start Game'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {items.map(item => (
          <motion.div
            key={item.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute cursor-pointer"
            style={{ left: item.x, top: item.y }}
            onClick={() => collectItem(item.id)}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl transform hover:rotate-12 transition-transform"
            >
              {item.emoji}
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}