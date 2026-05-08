import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BackgroundMusic({ play }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.error("Autoplay prevented:", e);
      });
    }
  }, [play]);

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
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="/radha-ramanam.mp3"
        loop
        preload="auto"
      />
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full shadow-lg h-12 w-12 bg-white/80 backdrop-blur-md hover:bg-white border border-rose-100"
        onClick={togglePlay}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <Volume2 className="h-6 w-6 text-rose-600" />
        ) : (
          <VolumeX className="h-6 w-6 text-rose-600" />
        )}
      </Button>
    </div>
  );
}
