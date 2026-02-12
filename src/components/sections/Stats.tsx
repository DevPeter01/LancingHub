import React from 'react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { AnimatedCounter } from '../ui/AnimatedCounter';

const stats = [
  { id: '1', value: 10000, suffix: '+', label: 'Active Customers' },
  { id: '2', value: 1, suffix: 'M+', label: 'Transactions Processed' },
  { id: '3', value: 99.9, suffix: '%', label: 'Uptime Guarantee', decimals: 1 },
  { id: '4', value: 50, suffix: '+', label: 'Countries Worldwide' },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-animated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Trusted by Businesses <span className="text-white/80">Worldwide</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of companies that trust Lancing Hub to power their operations.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={index * 0.1}>
              <div className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="text-white/80 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
