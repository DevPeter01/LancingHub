import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { Button } from '../ui/Button';
import { fadeIn, slideInFromBottom } from '../../utils/animations';

export const Hero: React.FC = () => {
  const { displayedText } = useTypingEffect(
    'Build Smarter. Scale Faster. Win Online.',
    30,
    500
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-animated">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-white/20 rounded-full blur-xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-8 border border-white/30"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium">Now Available - Cloud ERP 2.0</span>
        </motion.div>

        {/* Main Headline with Typing Effect */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {displayedText}
          <span className="inline-block w-1 h-12 md:h-16 bg-white ml-1 animate-pulse" />
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2.5 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I design and develop high-performance digital solutions that turn ideas into revenue-generating systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={slideInFromBottom}
          initial="hidden"
          animate="visible"
          transition={{ delay: 3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            variant="secondary"
            size="lg"
            icon={<ArrowRight size={20} />}
            className="bg-white text-primary-600 hover:bg-gray-100 shadow-2xl"
          >
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            size="lg"
            icon={<Play size={20} />}
            className="border-2 border-white text-white hover:bg-white/10"
          >
            Watch Demo
          </Button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5 Rating</span>
          </div>
          <div>✓ No credit card required</div>
          <div>✓ 14-day free trial</div>
          <div>✓ Cancel anytime</div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </div>

      {/* Floating UI Mockup - Removed for responsiveness */}
    </section>
  );
};
