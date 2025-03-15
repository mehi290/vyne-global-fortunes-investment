import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ConsultationPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your interest. We will contact you shortly.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-primary-dark pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Schedule Your Private Consultation</h1>
          <p className="text-gray-300 mb-8">
            Take the first step towards securing your financial future. Our team of experts is ready to understand your goals and create a tailored strategy for your success.
          </p>

          <motion.form 
            onSubmit={handleSubmit}
            className="bg-primary/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text"
                  required
                  className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email"
                  required
                  className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input 
                  type="tel"
                  className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Investment Interest</label>
                <select 
                  required
                  className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary"
                >
                  <option value="">Select an option</option>
                  <option value="wealth-management">Wealth Management</option>
                  <option value="cross-border">Cross-Border Investments</option>
                  <option value="business-expansion">Business Expansion</option>
                  <option value="real-estate">Real Estate Investment</option>
                  <option value="alternative-assets">Alternative Assets</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Investment Amount Range</label>
                <select 
                  className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary"
                >
                  <option value="">Select a range</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m-5m">$1,000,000 - $5,000,000</option>
                  <option value="5m+">$5,000,000+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  className="w-full bg-primary border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-secondary"
                  rows={4}
                  placeholder="Tell us about your investment goals and any specific requirements..."
                />
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox"
                  required
                  className="h-4 w-4 text-secondary border-gray-700 rounded focus:ring-secondary"
                />
                <label className="ml-2 block text-sm text-gray-300">
                  I agree to the privacy policy and terms of service
                </label>
              </div>
              
              <motion.button 
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-light text-primary font-semibold py-3 rounded-md transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Consultation Request
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultationPage;