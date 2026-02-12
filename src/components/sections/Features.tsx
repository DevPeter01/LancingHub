import React from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  TrendingUp, 
  BarChart3, 
  MapPin, 
  FileText, 
  Zap 
} from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../ui/Card';
import { staggerContainer, rotateOnHover } from '../../utils/animations';

const features = [
  {
    id: '1',
    icon: Package,
    title: 'Inventory Management',
    description: 'Real-time tracking, automated reordering, and multi-warehouse support to optimize your stock levels.',
  },
  {
    id: '2',
    icon: TrendingUp,
    title: 'Sales & CRM',
    description: 'Manage leads, track deals, and automate your sales pipeline with powerful CRM tools.',
  },
  {
    id: '3',
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain actionable insights with customizable dashboards and real-time business intelligence.',
  },
  {
    id: '4',
    icon: MapPin,
    title: 'Multi-Location',
    description: 'Seamlessly manage operations across multiple locations with centralized control.',
  },
  {
    id: '5',
    icon: FileText,
    title: 'Financial Reports',
    description: 'Generate comprehensive financial reports with automated reconciliation and compliance.',
  },
  {
    id: '6',
    icon: Zap,
    title: 'Smart Integrations',
    description: 'Connect with 100+ apps including accounting, e-commerce, and shipping platforms.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Everything You Need to <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive features designed to streamline your business operations 
            and drive growth at every stage.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.id} delay={index * 0.1}>
                <Card hover padding="lg" className="h-full group">
                  <motion.div
                    variants={rotateOnHover}
                    initial="rest"
                    whileHover="hover"
                    className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
