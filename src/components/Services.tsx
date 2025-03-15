import React from 'react';
import { Building2, Banknote, LineChart, Diamond, Globe, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Building2,
    title: 'Cross-Border Property Purchases',
    description: 'Seamlessly acquire and manage international real estate with expert legal vetting.',
  },
  {
    icon: Banknote,
    title: 'Financial Solutions',
    description: 'Multi-currency banking, trade finance, and working capital management.',
    subServices: [
      'Multi-Currency Banking',
      'Trade Finance',
      'Working Capital Solutions',
      'FX Risk Management'
    ]
  },
  {
    icon: LineChart,
    title: 'Corporate Advisory',
    description: 'Expert guidance on M&A, restructuring, and global expansion.',
    subServices: [
      'M&A Advisory',
      'Capital Structure Optimization',
      'Growth Strategy Planning'
    ]
  },
  {
    icon: Diamond,
    title: 'Alternative Assets',
    description: 'Luxury metals, gems, fine art, and secure investment storage.',
  },
  {
    icon: Globe,
    title: 'Energy & Services',
    description: 'Oil and gas supply solutions, including state-of-the-art facilities.',
  },
  {
    icon: Briefcase,
    title: 'Retail Solutions',
    description: 'Mini Mart services and building material supply solutions.',
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[100px]"
          animate={{
            x: ['-25%', '25%'],
            y: ['-25%', '25%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored for high-net-worth individuals and corporations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-primary/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-secondary transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <service.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              {service.subServices && (
                <ul className="space-y-2 text-sm text-gray-400">
                  {service.subServices.map((subService, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {subService}
                    </li>
                  ))}
                </ul>
              )}
              
              <motion.button 
                className="mt-4 text-secondary hover:text-secondary-light transition-colors flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;