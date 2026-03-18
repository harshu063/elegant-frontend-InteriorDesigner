"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send your project brief or questions",
    value: "jayinterior.miraroad@gmail.com",
    link: "mailto:jayinterior.miraroad@gmail.com",
    gradient: "from-[#C9A96E]/20 to-[#C9A96E]/20",
    hoverColor: "amber"
  },
  {
    icon: Phone,
    title: "Call / WhatsApp",
    description: "Speak directly with Om Prakash Chauhan",
    value: "+91 99209 04475",
    link: "tel:+919920904475",
    gradient: "from-[#2C3E50]/20 to-[#C9A96E]/20",
    hoverColor: "green"
  },
  {
    icon: MapPin,
    title: "Visit Our Studio",
    description: "Mira Road East, Thane District",
    value: "Gala No. 2, Opp. Kheteshwar Ashram, Dachkun Fada, Kashi Meera, Mira Road East — 401107",
    link: "https://maps.google.com/?q=Mira+Road+East+Mumbai",
    gradient: "from-[#C9A96E]/20 to-[#2C3E50]/20",
    hoverColor: "orange"
  }
];

const companyStats = [
  { label: "Response Time", value: "< 2 hrs", icon: Clock },
  { label: "Happy Clients", value: "250+",    icon: Globe },
  { label: "Years Experience", value: "10+",  icon: Shield },
  { label: "Projects Done", value: "300+",    icon: Zap }
];

export function PremiumContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    const text = `Hello! I found you through your website and would like a free consultation for an interior design project.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Project Type:* ${formData.company || 'Not specified'}
*Requirements:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/919920904475?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  return (
    <section className="relative py-14 md:py-24 bg-gradient-to-br from-[#2C3E50] via-[#2d3f5c] to-[#1a2535] text-white overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/[0.06] via-[#C9A96E]/[0.03] to-[#C9A96E]/[0.06]"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: '400% 400%' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-[#C9A96E]/10 rounded-full blur-3xl"
          animate={{ x: [0, 200, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-[#C9A96E]/10 rounded-full blur-3xl"
          animate={{ x: [0, -150, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent"
              style={{ left: `${20 + (i * 15)}%`, top: `${25 + (i * 8)}%`, transform: `rotate(${30 + i * 20}deg)` }}
              animate={{ opacity: [0.2, 0.8, 0.2], scaleY: [1, 1.5, 1] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />
          ))}
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="text-center mb-10 md:mb-20" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="h-4 w-4 text-[#C9A96E]" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">Free Consultation</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tight" variants={fadeInUp}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Let's Design</span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#C9A96E] via-[#e8d5a8] to-[#C9A96E]"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Your Space
            </motion.span>
          </motion.h2>

          <motion.p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed" variants={fadeInUp}>
            Tell us about your interior design requirements and our expert team will reach out to help you create the perfect space.
          </motion.p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-8 md:mb-16" variants={fadeInUp}>
          {companyStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-3 md:p-6 bg-white/[0.05] backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/[0.15] group hover:bg-white/[0.08] transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={fadeInUp}
            >
              <motion.div
                className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-[#C9A96E]/20 to-[#C9A96E]/10 border border-white/20 flex items-center justify-center mx-auto mb-2 md:mb-3"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-4 h-4 md:w-6 md:h-6 text-[#C9A96E]" />
              </motion.div>
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Send us your requirements</h3>
              <p className="text-white/60 text-base">Describe your space and requirements and we'll get back to you within 2 hours.</p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="text" placeholder="Your Name" value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#C9A96E] transition-all ${errors.name ? 'border-red-400' : 'border-white/[0.15]'}`}
                      />
                      {errors.name && (
                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-2">{errors.name}</motion.p>
                      )}
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="email" placeholder="Email Address" value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#C9A96E] transition-all ${errors.email ? 'border-red-400' : 'border-white/[0.15]'}`}
                      />
                      {errors.email && (
                        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-2">{errors.email}</motion.p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                    <input
                      type="text" placeholder="Project Type (e.g. Bedroom, Office, Villa)" value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full pl-10 pr-4 py-4 bg-white/[0.08] border border-white/[0.15] rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#C9A96E] transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-white/40" />
                    <textarea
                      placeholder="Describe your interior requirements — room type, style preferences, budget, timeline, etc."
                      rows={6} value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#C9A96E] transition-all resize-none ${errors.message ? 'border-red-400' : 'border-white/[0.15]'}`}
                    />
                    {errors.message && (
                      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm mt-2">{errors.message}</motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit" disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-[#C9A96E] hover:bg-[#2C3E50] text-white font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50"
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.5 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <><Send className="h-5 w-5" /> Send Message <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-white/60 text-base mb-6">Thank you for contacting Jay Interior. We'll reach out within 2 hours.</p>
                  <motion.button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', company: '', message: '' }); }}
                    className="px-6 py-3 bg-white/[0.08] border border-white/[0.15] rounded-xl text-white hover:bg-white/[0.12] transition-all"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Other ways to reach us</h3>
              <p className="text-white/60 text-base">We're available Mon–Sat, 9 AM to 7 PM.</p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index} href={method.link}
                  className="block p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] hover:bg-white/[0.08] transition-all group"
                  variants={fadeInUp} whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} border border-white/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotateY: 180 }} transition={{ duration: 0.6 }}
                    >
                      <method.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">{method.title}</h4>
                      <p className="text-white/60 text-sm mb-2">{method.description}</p>
                      <p className="text-white font-medium text-sm">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="p-6 bg-gradient-to-br from-[#C9A96E]/[0.08] to-[#C9A96E]/[0.05] backdrop-blur-xl rounded-2xl border border-[#C9A96E]/30"
              variants={fadeInUp}
            >
              <h4 className="text-lg font-semibold text-white mb-3">Quick Response Guarantee</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                At Jay Interior, we value your time. All inquiries receive a response within 2 hours during business hours. We'll schedule a free site visit to understand your space and provide a detailed proposal within 48 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#C9A96E]/20 rounded-full"
            style={{ left: `${10 + (i * 12)}%`, top: `${20 + (i * 10)}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 2, 1] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          />
        ))}
      </motion.div>
    </section>
  );
}
