import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background with Gradient */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1470723710355-95304d8aece4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative min-h-screen flex items-center mt-16 md:mt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 mt-8"
              >
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary font-semibold tracking-wider">VYNE GLOBAL FORTUNES INVESTMENT</span>
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Elevate Your Global <br />
                <span className="text-secondary">Financial Legacy</span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Exclusive Investment & Business Expansion Solutions for High-Net-Worth Investors & Entrepreneurs. At Vyne Global, we go beyond traditional investment firms. As a 50+ year conglomerate holding and investment company, we provide strategic wealth ecosystems, navigating complex cross-border financial landscapes with unparalleled expertise.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button 
                  className="group bg-secondary hover:bg-secondary-light text-primary font-semibold px-8 py-4 rounded-md flex items-center gap-2 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/services')}
                >
                  Explore Investment Opportunities
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
                <motion.button 
                  className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-8 py-4 rounded-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/about')}
                >
                  About Us
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <SocialLinks />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-primary-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                title: "Global Network",
                description: "Access our extensive network of financial institutions and investment opportunities worldwide."
              },
              {
                title: "Strategic Growth",
                description: "Tailored investment strategies aligned with your wealth preservation and growth objectives."
              },
              {
                title: "Seamless Global Transactions",
                description: "Expert handling of complex cross-border transactions and regulatory compliance."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-6 rounded-lg border border-gray-800 hover:border-secondary transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;