import React from 'react';

const About = () => {
  return (
    <section className="bg-primary-dark text-white">
      {/* Meet the CEO Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4">MEET THE CEO</h2>
            <h3 className="text-2xl mb-2">Captain Mohhamed Moinuddinn</h3>
            <p className="text-secondary mb-6">Visionary Leader | Multifaceted Achiever</p>
            <p className="text-gray-300 mb-6">
              Captain Mohhamed Moinuddinn, CEO of VYNE Global Fortunes Investment, is a seasoned pilot, investor, realtor, and banker with a remarkable career spanning diverse industries. His expertise includes construction, real estate, banking, retail, and energy, driving the growth of VYNE across 6 companies in 5 countries: UAE, Portugal, Spain, Bangladesh, and the Caribbean.
            </p>
            <p className="text-gray-300">
              An accomplished leader with an Air Transport Pilot License recognized globally, he is also a RERA-certified property manager, a master value investor, and a member of the Royal Aeronautical Society. Known for his client-centric approach and innovative vision, Captain Moinuddinn is committed to unlocking prosperity and fostering trust in the global investment community.
            </p>
          </div>
          <div className="relative">
            <div className="relative group max-w-[400px] mx-auto">
              <img 
                src="/assets/e40f53bd-2325-43a9-bd78-edacb25afe05.jpg"
                alt="Captain Mohhamed Moinuddinn - CEO of VYNE Global Fortunes Investment"
                className="w-full aspect-[3/4] object-cover object-top rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Discover Our <span className="text-secondary relative">
                Journey
                <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary"></span>
              </span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-300">
              At VYNE Global Fortunes Investment, we pride ourselves on being a trusted Partner in financial excellence. With a deep understanding of our client's unique needs, we deliver personalized financial solutions that empower them to achieve their goals, leveraging our expertise, innovation and dedication.
            </p>
          </div>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Why Partner with VYNE?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-primary-light rounded-lg hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-3">Access to Capital</h3>
              <p className="text-gray-400">Unlock diverse funding opportunities through our extensive network.</p>
            </div>
            <div className="p-6 border border-primary-light rounded-lg hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-3">Banking Support</h3>
              <p className="text-gray-400">Comprehensive banking solutions tailored to your needs.</p>
            </div>
            <div className="p-6 border border-primary-light rounded-lg hover:border-secondary transition-colors">
              <h3 className="text-xl font-semibold mb-3">Full Discretion</h3>
              <p className="text-gray-400">Confidential handling of all transactions and investments.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-dark py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Investment Strategy?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
            Join us on an extraordinary journey where opportunity meets innovation, and passion meets potential. At VYNE GLOBAL FORTUNES INVESTMENT, we specialize in crafting tailor-made solutions that cater to the unique needs of high net worth individuals and discerning investors.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-secondary text-primary px-8 py-3 rounded-md hover:bg-secondary-light transition-all">
              Join Us
            </button>
            <button className="border-2 border-secondary text-white px-8 py-3 rounded-md hover:bg-secondary hover:text-primary transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;