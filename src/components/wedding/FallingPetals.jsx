import React, { useEffect, useState, useRef } from 'react';

const PETAL_IMAGES = [
  'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/d4217b2f1_generated_image.png', // jasmine
  'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/0ac0d669d_generated_image.png', // rose
  'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/2a6fa17b0_generated_image.png', // marigold
];

const ALT_TEXTS = ['Jasmine petal', 'Rose petal', 'Marigold petal'];

function Petal({ id, onDone }) {
  const left = useRef(Math.random() * 100);
  const size = useRef(18 + Math.random() * 22);
  const duration = useRef(7 + Math.random() * 7);
  const delay = useRef(Math.random() * 5);
  const imgIndex = useRef(Math.floor(Math.random() * PETAL_IMAGES.length));
  const startRotation = useRef(Math.random() * 360);
  const swayAmount = useRef(40 + Math.random() * 60);
  const swayDirection = useRef(Math.random() > 0.5 ? 1 : -1);

  const animStyle = {
    position: 'fixed',
    left: `${left.current}%`,
    top: '-5%',
    width: `${size.current}px`,
    height: `${size.current}px`,
    objectFit: 'contain',
    pointerEvents: 'none',
    animation: `petalFallReal ${duration.current}s ${delay.current}s linear forwards`,
    transform: `rotate(${startRotation.current}deg)`,
    '--sway': `${swayAmount.current * swayDirection.current}px`,
    '--rotate-end': `${startRotation.current + 540}deg`,
    zIndex: 50,
  };

  return (
    <img
      key={id}
      src={PETAL_IMAGES[imgIndex.current]}
      alt={ALT_TEXTS[imgIndex.current]}
      style={animStyle}
      onAnimationEnd={() => onDone(id)}
    />
  );
}

export default function FallingPetals({ active = true }) {
  const [petals, setPetals] = useState([]);
  const nextId = useRef(0);

  useEffect(() => {
    if (!active) return;

    // Spawn initial batch
    const initial = Array.from({ length: 10 }, () => {
      const id = nextId.current++;
      return id;
    });
    setPetals(initial);

    // Keep spawning new petals periodically
    const interval = setInterval(() => {
      setPetals((prev) => {
        if (prev.length > 25) return prev;
        const id = nextId.current++;
        return [...prev, id];
      });
    }, 800);

    return () => clearInterval(interval);
  }, [active]);

  const removePetal = (id) => {
    setPetals((prev) => prev.filter((p) => p !== id));
  };

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 50 }}>
      {petals.map((id) => (
        <Petal key={id} id={id} onDone={removePetal} />
      ))}
    </div>
  );
}