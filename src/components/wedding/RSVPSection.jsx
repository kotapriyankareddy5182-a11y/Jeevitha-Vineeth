import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import SectionReveal from './SectionReveal';
import GoldDivider from './GoldDivider';

const BLESSING_IMG = 'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/fa690882d_generated_29b3bfe2.png';
const STAGE_BG = 'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/7aa127059_generated_f93ada1a.png';
const RICE_IMG = 'https://media.base44.com/images/public/6a041c87a355438a2f5ed1bd/6f942a2cf_generated_3caba513.png';

export default function RSVPSection() {
  const [form, setForm] = useState({
    guest_name: '',
    email: '',
    phone: '',
    attending: 'yes',
    guest_count: 1,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.RSVPResponse.create(form);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={STAGE_BG} alt="Wedding stage decorations" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(253,245,230,0.94), rgba(253,245,230,0.90))' }} />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-6">
        <SectionReveal className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-[#E8D5A3] mb-3">
            Kindly Respond
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-primary font-semibold">
            Grace Us with Your Presence
          </h2>
          <GoldDivider className="mt-4" />
        </SectionReveal>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <SectionReveal key="form" delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="font-display text-sm tracking-wide text-primary block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.guest_name}
                    onChange={(e) => handleChange('guest_name', e.target.value)}
                    className="w-full bg-transparent border-b-2 border-secondary/40 focus:border-secondary py-3 px-1 font-body text-foreground outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-display text-sm tracking-wide text-primary block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full bg-transparent border-b-2 border-secondary/40 focus:border-secondary py-3 px-1 font-body text-foreground outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="font-display text-sm tracking-wide text-primary block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full bg-transparent border-b-2 border-secondary/40 focus:border-secondary py-3 px-1 font-body text-foreground outline-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Attending */}
                <div>
                  <label className="font-display text-sm tracking-wide text-primary block mb-3">
                    Will You Attend?
                  </label>
                  <div className="flex gap-4">
                    {[
                      { value: 'yes', label: 'Joyfully Accept' },
                      { value: 'maybe', label: 'Possibly' },
                      { value: 'no', label: 'Regretfully Decline' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleChange('attending', opt.value)}
                        className={`flex-1 py-3 px-2 rounded-sm font-body text-xs md:text-sm transition-all duration-300 border ${form.attending === opt.value
                            ? 'border-secondary bg-secondary/10 text-primary'
                            : 'border-secondary/20 text-[#E8D5A3] hover:border-secondary/40'
                          }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest count */}
                {form.attending !== 'no' && (
                  <div>
                    <label className="font-display text-sm tracking-wide text-primary block mb-2">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={form.guest_count}
                      onChange={(e) => handleChange('guest_count', parseInt(e.target.value) || 1)}
                      className="w-24 bg-transparent border-b-2 border-secondary/40 focus:border-secondary py-3 px-1 font-body text-foreground outline-none transition-colors text-center"
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="font-display text-sm tracking-wide text-primary block mb-2">
                    Your Blessing
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={3}
                    className="w-full bg-transparent border-b-2 border-secondary/40 focus:border-secondary py-3 px-1 font-body text-foreground outline-none transition-colors resize-none"
                    placeholder="Share your blessings for the couple..."
                  />
                </div>

                {/* Submit */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative group inline-block cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-sm">
                      <img
                        src={RICE_IMG}
                        alt="Sacred rice and turmeric"
                        className="w-48 h-14 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                        <span className="font-display text-base tracking-[0.15em]" style={{ color: '#E8D5A3' }}>
                          {loading ? 'Sending...' : 'Send Blessings'}
                        </span>
                      </div>
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ boxShadow: 'inset 0 0 30px rgba(197,160,89,0.4)' }}
                      />
                    </div>
                  </button>
                </div>
              </form>
            </SectionReveal>
          ) : (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-2 border-secondary/40">
                <img
                  src={BLESSING_IMG}
                  alt="Hands held in Namaste prayer gesture with golden divine light"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-primary font-semibold mb-4">
                Thank You for Your Blessings
              </h3>
              <p className="font-body text-base text-[#E8D5A3]">
                We are honored by your presence and your kind words. We look forward to celebrating with you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}