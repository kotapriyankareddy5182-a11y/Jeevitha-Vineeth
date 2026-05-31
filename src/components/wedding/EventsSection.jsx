import React from 'react';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';

const EVENTS = [
    {
        title: 'Haldi Ceremony',
        date: 'December 13, 2026',
        time: '8:00 AM — 11:00 AM',
        venue: 'Family Residence, Mylapore',
        image: '/gallery/haldi-bg.jpeg',
        alt: 'Turmeric paste in brass vessels surrounded by flowers and sacred items',
        description: 'The sacred turmeric ritual to bless the bride and groom.',
    },
    {
        title: 'Mehendi',
        date: 'December 13, 2026',
        time: '4:00 PM — 8:00 PM',
        venue: 'Family Residence, Mylapore',
        image: '/gallery/mehandi-bg.jpeg',
        alt: 'Mehendi ceremony with ornate henna designs',
        description: 'An evening of intricate henna art, music, and celebration.',
    },
    {
        title: 'Wedding Ceremony',
        date: 'December 14, 2026',
        time: '6:30 AM — 9:00 AM',
        venue: 'Sri Parthasarathy Temple, Triplicane',
        image: '/gallery/wedding-bg.jpeg',
        alt: 'Grand South Indian wedding mandap',
        description: 'The sacred Muhurtham — the divine union of two souls.',
    },
    {
        title: 'Reception',
        date: 'December 15, 2026',
        time: '6:00 PM — 10:00 PM',
        venue: 'The Grand Ballroom, Taj Coromandel',
        image: '/gallery/reception-bg.jpeg',
        alt: 'Opulent reception stage',
        description: 'An evening of celebration, feast, and togetherness.',
    },
];

function EventCard({ event, index }) {
    const isEven = index % 2 === 0;

    return (
        <SectionReveal delay={index * 0.1}>
            <div className="relative rounded-sm overflow-hidden group">
                {/* Background image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                        src={event.image}
                        alt={event.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <p
                                className="font-body text-xs tracking-[0.2em] uppercase mb-2"
                                style={{ color: '#C5A059' }}
                            >
                                {event.date}
                            </p>
                            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2" style={{ color: '#FDF5E6' }}>
                                {event.title}
                            </h3>
                            <p className="font-body text-sm mb-3" style={{ color: '#E8D5A3' }}>
                                {event.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs" style={{ color: '#C5A059' }}>
                        <span className="font-body tracking-wide">{event.time}</span>
                        <span className="hidden sm:inline" style={{ color: '#C5A059' }}>&middot;</span>
                        <span className="font-body tracking-wide">{event.venue}</span>
                    </div>
                </div>

                {/* Gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 gold-border-shimmer" />
            </div>
        </SectionReveal>
    );
}

export default function EventsSection() {
    return (
        <section className="relative py-20 md:py-28" >
            <div className="max-w-4xl mx-auto px-6">
                <SectionReveal className="text-center mb-16">
                    <p className="font-body text-sm tracking-[0.3em] uppercase text-[#E8D5A3] mb-3">
                        Celebrations
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold">
                        The Wedding Events
                    </h2>
                    <GoldDivider className="mt-4" />
                </SectionReveal>

                {/* Vertical gold thread connector */}
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px gold-border-shimmer hidden md:block" style={{ transform: 'translateX(-50%)' }} />

                    <div className="space-y-8 md:space-y-12">
                        {EVENTS.map((event, index) => (
                            <EventCard key={event.title} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}