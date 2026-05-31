import React from 'react';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';

const VENUE_BG = '/images/temple_bg.png';

export default function LocationSection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0" style={{ background: '#FDF5E6' }} />

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

                <div className="max-w-2xl mx-auto">
                    {/* Wedding venue */}
                    <SectionReveal delay={0.1}>
                        <div className="rounded-sm overflow-hidden border border-secondary/30 shadow-lg">
                            <div className="p-6 text-center" style={{ background: 'rgba(197,160,89,0.08)' }}>
                                <h3 className="font-display text-xl font-semibold text-primary mb-1">Wedding Ceremony</h3>
                                <p className="font-body text-sm text-[#E8D5A3] mb-1">Sri Parthasarathy Temple</p>
                                <p className="font-body text-xs text-secondary">Triplicane, Chennai — 6:30 AM</p>
                            </div>
                            <div className="h-64 md:h-96">
                                <iframe
                                    src="https://maps.google.com/maps?q=Sri+Parthasarathy+Temple+Triplicane&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
                </div>
            </div>
        </section>
    );
}