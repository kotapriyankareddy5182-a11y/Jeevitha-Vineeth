import React from 'react';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';

const VENUE_BG = 'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/3c7b5d0e8_generated_ff110e67.png';

export default function LocationSection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={VENUE_BG}
                    alt="Aerial view of a South Indian temple complex with ornate gopuram towers"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(253,245,230,0.93), rgba(253,245,230,0.88))' }} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <SectionReveal className="text-center mb-12">
                    <p className="font-body text-sm tracking-[0.3em] uppercase text-[#E8D5A3] mb-3">
                        Venue
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold">
                        Where We Unite
                    </h2>
                    <GoldDivider className="mt-4" />
                </SectionReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Wedding venue */}
                    <SectionReveal delay={0.1}>
                        <div className="rounded-sm overflow-hidden border border-secondary/30">
                            <div className="p-6 text-center" style={{ background: 'rgba(197,160,89,0.08)' }}>
                                <h3 className="font-display text-xl font-semibold text-primary mb-1">Wedding Ceremony</h3>
                                <p className="font-body text-sm text-[#E8D5A3] mb-1">Sri Parthasarathy Temple</p>
                                <p className="font-body text-xs text-secondary">Triplicane, Chennai — 6:30 AM</p>
                            </div>
                            <div className="h-56">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d80.2707!3d13.0569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzI1LjAiTiA4MMKwMTYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1000000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Wedding ceremony venue map"
                                />
                            </div>
                        </div>
                    </SectionReveal>

                    {/* Reception venue */}
                    <SectionReveal delay={0.2}>
                        <div className="rounded-sm overflow-hidden border border-secondary/30">
                            <div className="p-6 text-center" style={{ background: 'rgba(197,160,89,0.08)' }}>
                                <h3 className="font-display text-xl font-semibold text-primary mb-1">Grand Reception</h3>
                                <p className="font-body text-sm text-[#E8D5A3] mb-1">Taj Coromandel</p>
                                <p className="font-body text-xs text-secondary">Nungambakkam, Chennai — 6:00 PM</p>
                            </div>
                            <div className="h-56">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2353!3d13.0627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzQ1LjciTiA4MMKwMTQnMDcuMSJF!5e0!3m2!1sen!2sin!4v1000000000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Reception venue map"
                                />
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
}