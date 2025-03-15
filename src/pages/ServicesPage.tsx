import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Banknote, LineChart, Diamond, Briefcase, Globe, Hotel, Ban as Bank, Fuel } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SocialLinks from '../components/SocialLinks';

const ServicesPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const ServiceCard = ({ icon: Icon, title, children, image, delay = 0 }) => (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-dark p-8 rounded-lg border border-gray-800 hover:border-secondary transition-all duration-300 relative overflow-hidden group"
    >
      {image && (
        <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div variants={iconVariants} whileHover="hover">
        <Icon className="w-12 h-12 text-secondary mb-4" />
      </motion.div>
      <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-secondary"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  return (
    <PageTransition>
      <div className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="relative h-[40vh] mb-20 overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Modern Corporate Building with Impressive Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </motion.div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.h1 
                className="text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Services
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Comprehensive financial solutions tailored for high-net-worth individuals and corporations
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary relative overflow-hidden">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[100px]"
            animate={{
              x: ['-25%', '25%'],
              y: ['-25%', '25%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          
          <div className="container mx-auto px-6 relative">
            {/* Cross-Border & Financial Solutions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-20"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-secondary mb-8"
              >
                1. Cross-Border & Financial Solutions
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={Building2} 
                  title="Cross-Border Property Purchases"
                  image="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <p className="text-gray-400">Secure international real estate with full legal compliance.</p>
                </ServiceCard>
                <ServiceCard 
                  icon={Banknote} 
                  title="Streamlined Financial Solutions"
                  image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <ul className="text-gray-400 space-y-2">
                    <li>• Multi-currency banking</li>
                    <li>• Working capital solutions</li>
                    <li>• FX risk management</li>
                  </ul>
                </ServiceCard>
                <ServiceCard 
                  icon={Bank} 
                  title="Financial Services"
                  image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <ul className="text-gray-400 space-y-2">
                    <li>• Investment banking</li>
                    <li>• Brokerage services</li>
                    <li>• Trade finance solutions</li>
                  </ul>
                </ServiceCard>
              </div>
            </motion.div>

            {/* Investment & Advisory */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-20"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-secondary mb-8"
              >
                2. Investment & Advisory Services
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={LineChart} 
                  title="Corporate Advisory"
                  image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <ul className="text-gray-400 space-y-2">
                    <li>• M&A consulting</li>
                    <li>• Restructuring</li>
                    <li>• Global expansion strategies</li>
                  </ul>
                </ServiceCard>
                <ServiceCard 
                  icon={Diamond} 
                  title="Alternative Assets"
                  image="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <ul className="text-gray-400 space-y-2">
                    <li>• Luxury metals and gems</li>
                    <li>• Fine art collections</li>
                    <li>• Secure storage solutions</li>
                  </ul>
                </ServiceCard>
                <ServiceCard 
                  icon={Hotel} 
                  title="Real Estate & Hospitality"
                  image="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <ul className="text-gray-400 space-y-2">
                    <li>• Prime property investments</li>
                    <li>• Luxury hotel management</li>
                    <li>• Hospitality consulting</li>
                  </ul>
                </ServiceCard>
              </div>
            </motion.div>

            {/* Industrial & Retail */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl font-bold text-secondary mb-8"
              >
                3. Industrial & Retail Services
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard 
                  icon={Fuel} 
                  title="Energy & Industrial Services"
                  image="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <ul className="text-gray-400 space-y-2">
                    <li>• Oil & gas solutions</li>
                    <li>• Car wash facilities</li>
                    <li>• Industrial operations</li>
                  </ul>
                </ServiceCard>
                <ServiceCard 
                  icon={Briefcase} 
                  title="Retail & Supply Chain"
                  image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <ul className="text-gray-400 space-y-2">
                    <li>• Mini Mart services</li>
                    <li>• Building materials distribution</li>
                    <li>• Supply chain optimization</li>
                  </ul>
                </ServiceCard>
                <ServiceCard 
                  icon={Globe} 
                  title="Global Opportunities"
                  image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                >
                  <p className="text-gray-400">Explore diverse investment opportunities across our international portfolio.</p>
                </ServiceCard>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="mt-20 relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative py-16 px-8">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Professional Investment Consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/90" />
                </div>
                <div className="relative text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Investment Strategy?</h2>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Schedule a private consultation with our expert team to explore how we can help you achieve your financial goals.
                  </p>
                  <motion.button 
                    onClick={() => navigate('/consultation')}
                    className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-md transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book a Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ServicesPage;