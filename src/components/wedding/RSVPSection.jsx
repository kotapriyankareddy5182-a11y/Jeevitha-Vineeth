import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle2 } from 'lucide-react';

export default function RSVPSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    guest_name: '',
    phone: '',
    attending: '',
    num_guests: 1,
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.RSVP.create(form);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-rose-50/50 to-white">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="font-script text-3xl text-rose-700 mb-2">Thank You!</h3>
          <p className="font-sans text-sm text-rose-500">
            Your response has been recorded. We look forward to celebrating with you!
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-rose-50/50 to-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-serif text-sm tracking-[0.3em] uppercase text-rose-400 mb-3">
          Be Our Guest
        </p>
        <h2 className="font-script text-4xl sm:text-5xl text-rose-700">RSVP</h2>
      </motion.div>

      <motion.form
        className="max-w-md mx-auto space-y-4"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-6 space-y-4">
          <Input
            placeholder="Your Name *"
            value={form.guest_name}
            onChange={(e) => setForm({ ...form, guest_name: e.target.value })}
            required
            className="border-rose-100 focus:border-rose-300 font-sans"
          />

          <Input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border-rose-100 focus:border-rose-300 font-sans"
          />

          <Select
            value={form.attending}
            onValueChange={(value) => setForm({ ...form, attending: value })}
            required
          >
            <SelectTrigger className="border-rose-100 font-sans">
              <SelectValue placeholder="Will you attend? *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Joyfully Accept</SelectItem>
              <SelectItem value="maybe">Maybe</SelectItem>
              <SelectItem value="no">Regretfully Decline</SelectItem>
            </SelectContent>
          </Select>

          {form.attending === 'yes' && (
            <Select
              value={String(form.num_guests)}
              onValueChange={(value) => setForm({ ...form, num_guests: Number(value) })}
            >
              <SelectTrigger className="border-rose-100 font-sans">
                <SelectValue placeholder="Number of Guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((n) => (
                  <SelectItem key={n} value={String(n)}>
                    {n} {n === 1 ? 'Guest' : 'Guests'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <Textarea
            placeholder="Your wishes for the couple..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border-rose-100 focus:border-rose-300 font-sans h-24"
          />

          <Button
            type="submit"
            disabled={loading || !form.guest_name || !form.attending}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-sans"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send RSVP
              </>
            )}
          </Button>
        </div>
      </motion.form>
    </section>
  );
}