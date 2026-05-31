import React, { useRef, useState, useEffect } from 'react';

const VEENA_IMAGE = '/images/diya_img.png';

export default function AudioToggle() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/jeevitha-song.mpeg');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
        
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setIsPlaying(true);
            }).catch(() => {
                console.log("Auto-play prevented");
            });
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(() => { });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            onClick={toggleAudio}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full overflow-hidden border-2 border-secondary shadow-lg transition-all duration-300 hover:scale-110"
            style={{
                animation: isPlaying ? 'softGlow 2s ease-in-out infinite' : 'none',
            }}
            aria-label={isPlaying ? 'Mute music' : 'Play music'}
        >
            <img
                src={VEENA_IMAGE}
                alt="Traditional veena instrument - tap to toggle music"
                className="w-full h-full object-cover"
                style={{
                    animation: isPlaying ? 'flicker 1.5s ease-in-out infinite' : 'none',
                }}
            />
            {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1" />
                </div>
            )}
        </button>
    );
}