'use client';

import { useState, useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 bg-white rounded-full p-2 shadow-md z-50"
    >
      {isPlaying ? '🔇' : '🔊'}
    </button>
  );
}