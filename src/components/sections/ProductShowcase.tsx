import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';
import { fadeIn } from '../../utils/animations';

const showcaseItems = [
  {
    id: '1',
    category: 'Dashboard',
    title: 'Real-Time Analytics Dashboard',
    description: 'Monitor your business metrics with intuitive visualizations and customizable widgets.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: '2',
    category: 'Inventory',
    title: 'Smart Inventory System',
    description: 'Track stock levels, manage suppliers, and automate reordering with AI-powered insights.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: '3',
    category: 'Reports',
    title: 'Automated Reporting',
    description: 'Generate comprehensive reports with one click and share them with your team instantly.',
    color: 'from-orange-500 to-red-500',
  },
];

export const ProductShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="product" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            See Lancing Hub in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our powerful features designed to transform how you manage your business.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tab Navigation */}
          <div className="space-y-4">
            {showcaseItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-primary-50 border-2 border-primary-500 shadow-lg'
                    : 'bg-gray-50 border-2 border-transparent hover:border-gray-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Visual Display */}
          <ScrollReveal className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${showcaseItems[activeIndex].color} opacity-20 blur-3xl`} />
                <motion.div
                  className="relative bg-white rounded-2xl shadow-hard p-8 border border-gray-200"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${showcaseItems[activeIndex].color} animate-pulse`} />
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
                        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
