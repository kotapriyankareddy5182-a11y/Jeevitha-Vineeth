import React, { useEffect } from 'react';

export default function AutoScroll() {
    useEffect(() => {
        let animationFrameId;
        // Speed: 0.6 pixels per frame is roughly 36 pixels per second. 
        // Not too slow, not too fast.
        let speed = 0.6; 
        
        let lastTime = performance.now();

        const scroll = (time) => {
            const deltaTime = time - lastTime;
            lastTime = time;

            // Frame rate independent speed
            const distance = speed * (deltaTime / 16.66); 
            window.scrollBy(0, distance);

            // Check if we hit the bottom
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // stop if reached bottom
                cancelAnimationFrame(animationFrameId);
                return;
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        // Start scrolling
        animationFrameId = requestAnimationFrame(scroll);

        // Pause scroll on user interaction
        const stopScroll = () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        };

        // Resume scroll after some time? Let's just stop it permanently if they interact, 
        // or just let it stop. For wedding invitations, stopping on manual scroll is best.
        window.addEventListener('wheel', stopScroll, { passive: true });
        window.addEventListener('touchstart', stopScroll, { passive: true });
        window.addEventListener('mousedown', stopScroll, { passive: true });

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener('wheel', stopScroll);
            window.removeEventListener('touchstart', stopScroll);
            window.removeEventListener('mousedown', stopScroll);
        };
    }, []);

    return null;
}
