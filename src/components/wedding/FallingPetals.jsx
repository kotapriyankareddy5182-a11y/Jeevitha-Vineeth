import React, { useEffect, useState, useRef } from 'react';

const PETAL_IMAGES = [
  'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22white%22%20d%3D%22M12%2C2C12%2C2%2018%2C10%2018%2C16C18%2C19.31%2015.31%2C22%2012%2C22C8.69%2C22%206%2C19.31%2C6%2C16C6%2C10%2012%2C2%2012%2C2Z%22%2F%3E%3C%2Fsvg%3E', // jasmine
  'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22red%22%20d%3D%22M12%2C2C12%2C2%2018%2C10%2018%2C16C18%2C19.31%2015.31%2C22%2012%2C22C8.69%2C22%206%2C19.31%2C6%2C16C6%2C10%2012%2C2%2012%2C2Z%22%2F%3E%3C%2Fsvg%3E', // rose
  'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22orange%22%20d%3D%22M12%2C2C12%2C2%2018%2C10%2018%2C16C18%2C19.31%2015.31%2C22%2012%2C22C8.69%2C22%206%2C19.31%2C6%2C16C6%2C10%2012%2C2%2012%2C2Z%22%2F%3E%3C%2Fsvg%3E', // marigold
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