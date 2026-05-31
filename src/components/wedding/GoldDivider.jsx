import React from 'react';

export default function GoldDivider({ className = '' }) {
    return (
        <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
            <div className="h-px flex-1 max-w-[120px] gold-border-shimmer" />
            <img
                src="/images/diya_img.png"
                alt="Decorative brass oil lamp"
                className="w-8 h-8 object-cover rounded-full diya-flicker"
            />
            <div className="h-px flex-1 max-w-[120px] gold-border-shimmer" />
        </div>
    );
}