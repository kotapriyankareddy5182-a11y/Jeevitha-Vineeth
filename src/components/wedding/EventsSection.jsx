import React from 'react';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';

const EVENTS = [

    {
        title: 'Haldi Ceremony',
        date: 'December 13, 2026',
        time: '8:00 AM — 11:00 AM',
        venue: 'Family Residence, Mylapore',
        image: 'https://images.pexels.com/photos/35457632/pexels-photo-35457632/free-photo-of-vibrant-indian-wedding-haldi-ceremony-celebration.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Turmeric paste in brass vessels surrounded by flowers and sacred items',
        description: 'The sacred turmeric ritual to bless the bride and groom.',
    },
    {
        title: 'Mehendi',
        date: 'December 13, 2026',
        time: '4:00 PM — 8:00 PM',
        venue: 'Family Residence, Mylapore',
        image: 'data:image/jpeg;base64,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',
        alt: 'Mehendi ceremony with ornate henna designs and jasmine garlands',
        description: 'An evening of intricate henna art, music, and celebration.',
    },
    {
        title: 'Wedding Ceremony',
        date: 'December 14, 2026',
        time: '6:30 AM — 9:00 AM',
        venue: 'Sri Parthasarathy Temple, Triplicane',
        image: 'https://www.hamaraevent.com/uploads/blog/0772719001469270884.jpg',
        alt: 'Grand South Indian wedding mandap with sacred fire and elaborate flowers',
        description: 'The sacred Muhurtham — the divine union of two souls.',
    },
    {
        title: 'Reception',
        date: 'December 15, 2026',
        time: '6:00 PM — 10:00 PM',
        venue: 'The Grand Ballroom, Taj Coromandel',
        image: 'https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/1734952418631-IORA21H2UJOIDLTJ4N5E/Screenshot%2B2023-08-16%2Bat%2B5.07.01%2BPM%2B%281%29%2B%281%29%2B%282%29.png',
        alt: 'Opulent reception stage with golden arch and crystal chandeliers',
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