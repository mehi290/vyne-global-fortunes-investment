import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section className="bg-primary-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.h2 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          MEET THE TEAM
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative group w-[300px] h-[300px] mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80&sat=-100" 
                alt="Nikolay Kuznetsov"
                className="w-full h-full object-cover object-top rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Nikolay Kuznetsov</h3>
            <p className="text-secondary mb-4">Investment Director, Vyne Global</p>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Nikolay Kuznetsov brings over 15 years of expertise in investor relations, real estate sales, and acquisitions to Vyne Global. His deep understanding of the real estate market and strategic approach to investments make him an invaluable asset to our team.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group w-[300px] h-[300px] mb-6">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80&sat=-100" 
                alt="Roman Zyryanov"
                className="w-full h-full object-cover object-top rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Roman Zyryanov</h3>
            <p className="text-secondary mb-4">General Manager, GVK</p>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Roman Zyryanov is a dynamic leader in petroleum exports, combining ambition with a results-driven mindset. Operating from the UAE, he has successfully managed complex supply chains and built lasting client relationships.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative group w-[300px] h-[300px] mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80&sat=-100" 
                alt="Kirill Goncharov"
                className="w-full h-full object-cover object-top rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl font-bold mb-1">Kirill Goncharov</h3>
            <p className="text-secondary mb-4">Department Head, GVK</p>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Kirill Goncharov brings extensive expertise in the oil and gas sector, delivering innovative strategies and operational excellence. His leadership ensures sustainable growth and value for global partners.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;