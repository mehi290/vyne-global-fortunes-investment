import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-dark">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-4xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us
            </motion.h2>
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <Phone className="text-secondary w-6 h-6 mt-1" />
                </motion.div>
                <div>
                  <p className="text-white">+971 4 591 4419</p>
                  <p className="text-white">+971 4 328 3863</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <Mail className="text-secondary w-6 h-6 mt-1" />
                </motion.div>
                <div>
                  <p className="text-white">info@vyneglobal.com</p>
                  <p className="text-white">vyneglobal@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  <MapPin className="text-secondary w-6 h-6 mt-1" />
                </motion.div>
                <p className="text-white">
                  806 Dubai National Insurance Building,<br />
                  Port Saeed, Deira, Dubai,<br />
                  United Arab Emirates
                </p>
              </motion.div>
              
              <motion.div 
                className="pt-4"
                variants={itemVariants}
              >
                <motion.p 
                  className="text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Follow us on social media:
                </motion.p>
                <SocialLinks />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={formFieldVariants}>
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
            
            <motion.div variants={formFieldVariants}>
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
            
            <motion.div variants={formFieldVariants}>
              <motion.input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
            
            <motion.div variants={formFieldVariants}>
              <motion.textarea
                placeholder="Please enter your message here"
                rows={4}
                className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary transition-colors duration-300"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>
            
            <motion.button 
              className="w-full bg-secondary hover:bg-secondary-light text-white py-3 rounded-md transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;