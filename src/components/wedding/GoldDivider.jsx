import React from 'react';

export default function GoldDivider({ className = '' }) {
    return (
        <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
            <div className="h-px flex-1 max-w-[120px] gold-border-shimmer" />
            <img
                src="https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/894bf2655_generated_fadd0c9e.png"
                alt="Decorative brass oil lamp"
                className="w-8 h-8 object-cover rounded-full diya-flicker"
            />
            <div className="h-px flex-1 max-w-[120px] gold-border-shimmer" />
        </div>
    );
}