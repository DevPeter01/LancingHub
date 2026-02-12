import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const pricingTiers = [
  {
    id: '1',
    name: 'Starter',
    description: 'Perfect for small businesses getting started',
    price: { monthly: 49, yearly: 470 },
    popular: false,
    features: [
      'Up to 10 users',
      'Basic inventory management',
      'Sales tracking',
      'Email support',
      'Mobile app access',
      '5GB storage',
    ],
  },
  {
    id: '2',
    name: 'Professional',
    description: 'For growing businesses that need more',
    price: { monthly: 99, yearly: 950 },
    popular: true,
    features: [
      'Up to 50 users',
      'Advanced inventory & analytics',
      'Multi-location support',
      'Priority support',
      'Mobile & desktop apps',
      '50GB storage',
      'API access',
      'Custom reports',
    ],
  },
  {
    id: '3',
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: { monthly: 249, yearly: 2390 },
    popular: false,
    features: [
      'Unlimited users',
      'Enterprise-grade features',
      'Dedicated account manager',
      '24/7 phone support',
      'All platforms',
      'Unlimited storage',
      'Advanced API & integrations',
      'Custom development',
      'SLA guarantee',
    ],
  },
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-white rounded-full shadow-md">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !isYearly
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                isYearly
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={tier.id} delay={index * 0.1}>
              <Card
                hover
                padding="lg"
                className={`relative h-full ${
                  tier.popular ? 'border-2 border-primary-500 shadow-xl' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={14} fill="currentColor" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span className="text-gray-500">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600 mt-2">
                      ${Math.round((tier.price.monthly * 12 - tier.price.yearly) / 12)}/mo
                      savings
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  Start Free Trial
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <p className="text-gray-600">
            Need a custom plan?{' '}
            <a href="#" className="text-primary-600 font-semibold hover:underline">
              Contact our sales team
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
