import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Globe, BarChart as ChartBar, Ban as Bank, Lock, Briefcase, Building2, Banknote, Lightbulb, Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import SocialLinks from '../components/SocialLinks';

const AboutPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Banknote,
      title: "Access to Capital",
      description: "Tailored financial solutions to grow your business."
    },
    {
      icon: Building2,
      title: "Banking Support",
      description: "Seamless banking services to streamline financial operations."
    },
    {
      icon: Bank,
      title: "Cross-Border Financial Expertise",
      description: "Seamless navigation of international financial landscapes."
    },
    {
      icon: Lightbulb,
      title: "Expert Guidance",
      description: "Navigate complex financial landscapes with confidence."
    },
    {
      icon: Lock,
      title: "Exclusive Investment Opportunities",
      description: "Access to premium deals and unique market positions."
    },
    {
      icon: Lock,
      title: "Full Discretion",
      description: "A trusted partner ensuring confidentiality and discretion in all dealings."
    },
    {
      icon: Globe,
      title: "Global Network Access",
      description: "Leverage our extensive connections to unlock opportunities worldwide."
    },
    {
      icon: ChartBar,
      title: "High-Yield Investment Strategies",
      description: "Sophisticated approaches to maximize returns while managing risk."
    },
    {
      icon: Users,
      title: "Investment Opportunities",
      description: "Navigate complex financial landscapes with confidence."
    },
    {
      icon: Shield,
      title: "50+ Years of Financial Legacy",
      description: "A proven track record of excellence and stability in global finance."
    }
  ].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <PageTransition>
      <div className="pt-24 md:pt-28">
        {/* About VYNE Section */}
        <section className="bg-primary-dark text-white py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h1 className="text-5xl font-bold mb-8">About Vyne Global</h1>
                  <h2 className="text-3xl text-secondary mb-6">A Legacy of Wealth Creation & Global Investments</h2>
                </div>
                <SocialLinks className="hidden md:flex" />
              </div>
              <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                Vyne Global Fortunes Investment is a premier wealth management and financial services firm specializing in navigating complex cross-border financial landscapes and capital solutions. With unparalleled expertise and an extensive global network, Vyne Global assists high-net-worth individuals in mobilizing funds, structuring investments, and facilitating international business expansion.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Meet the CEO Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <ScrollReveal variant="slide-right">
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
              </ScrollReveal>
              <ScrollReveal variant="slide-left">
                <div className="relative group max-w-[400px] mx-auto">
                  <img 
                    src="/assets/e40f53bd-2325-43a9-bd78-edacb25afe05.jpg"
                    alt="Captain Mohhamed Moinuddinn - CEO of VYNE Global Fortunes Investment"
                    className="w-full aspect-[3/4] object-cover object-top rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="bg-primary-dark text-white py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12">MEET THE TEAM</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  name: "Nikolay Kuznetsov",
                  role: "Investment Director, Vyne Global",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
                  description: "Nikolay Kuznetsov brings over 15 years of expertise in investor relations, real estate sales, and acquisitions to Vyne Global."
                },
                {
                  name: "Roman Zyryanov",
                  role: "General Manager, GVK",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
                  description: "Roman Zyryanov is a dynamic leader in petroleum exports, combining ambition with a results-driven mindset."
                },
                {
                  name: "Kirill Goncharov",
                  role: "Department Head, GVK",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
                  description: "Kirill Goncharov brings extensive expertise in the oil and gas sector, delivering innovative strategies and operational excellence."
                }
              ].map((member, index) => (
                <ScrollReveal key={index} variant="slide-up" delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative group w-[300px] h-[300px] mb-6">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-secondary mb-4">{member.role}</p>
                    <p className="text-gray-300 leading-relaxed max-w-sm">{member.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Vyne Global Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12 text-center">Why Vyne Global?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={index} variant="slide-up" delay={index * 0.1}>
                  <div className="bg-primary-dark p-6 rounded-lg border border-gray-800 hover:border-secondary transition-all duration-300">
                    <feature.icon className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Track Record Section */}
        <section className="bg-primary-dark text-white py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-12 text-center">Our Track Record</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal variant="slide-up">
                <div className="text-center p-6 bg-primary rounded-lg border border-gray-800">
                  <div className="text-5xl font-bold text-secondary mb-3">56</div>
                  <div className="text-xl text-gray-400 mb-2">MN EURO</div>
                  <p className="text-gray-300">Total Cross Border Portfolio Value</p>
                  <div className="flex justify-center gap-2 mt-4">
                    <img src="https://flagcdn.com/w40/pt.png" alt="Portugal" className="w-8 h-6 object-cover rounded" />
                    <img src="https://flagcdn.com/w40/es.png" alt="Spain" className="w-8 h-6 object-cover rounded" />
                    <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="w-8 h-6 object-cover rounded" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-up" delay={0.1}>
                <div className="text-center p-6 bg-primary rounded-lg border border-gray-800">
                  <div className="text-5xl font-bold text-secondary mb-3">05</div>
                  <div className="text-xl text-gray-400 mb-2">BN EURO</div>
                  <p className="text-gray-300">Total Funds Mobilized</p>
                  <p className="text-sm text-gray-400 mt-2">Purchase of Oil depot from USA</p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-up" delay={0.2}>
                <div className="text-center p-6 bg-primary rounded-lg border border-gray-800">
                  <div className="text-5xl font-bold text-secondary mb-3">200</div>
                  <div className="text-xl text-gray-400 mb-2">MN USD</div>
                  <p className="text-gray-300">Supply Chain and Working Capital Financing</p>
                  <p className="text-sm text-secondary mt-2">LC Facilitated from</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <img src="https://flagcdn.com/w40/es.png" alt="Spain" className="w-8 h-6 object-cover rounded" />
                    <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="w-8 h-6 object-cover rounded" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-up" delay={0.3}>
                <div className="text-center p-6 bg-primary rounded-lg border border-gray-800">
                  <div className="text-5xl font-bold text-secondary mb-3">300</div>
                  <div className="text-xl text-gray-400 mb-2">Clients Served</div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-up" delay={0.4}>
                <div className="text-center p-6 bg-primary rounded-lg border border-gray-800">
                  <div className="text-5xl font-bold text-secondary mb-3">100</div>
                  <div className="text-xl text-gray-400 mb-2">MN USD</div>
                  <p className="text-gray-300">Total Investment in Energy Business</p>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slide-up" delay={0.5}>
                <div className="text-center p-6 bg-primary rounded-lg border border-gray-800">
                  <div className="text-5xl font-bold text-secondary mb-3">20</div>
                  <div className="text-xl text-gray-400 mb-2">Businesses Served</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Ready to Elevate Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Investment Strategy?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                Join us on an extraordinary journey where opportunity meets innovation, and passion meets potential. At VYNE GLOBAL FORTUNES INVESTMENT, we specialize in crafting tailor-made solutions that cater to the unique needs of high net worth individuals and discerning investors.
              </p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => navigate('/consultation')}
                  className="bg-secondary hover:bg-secondary-light text-primary px-8 py-3 rounded-md transition-all"
                >
                  Join Us
                </button>
                <button 
                  onClick={() => navigate('/services')}
                  className="border-2 border-secondary text-white px-8 py-3 rounded-md hover:bg-secondary hover:text-primary transition-all"
                >
                  Learn More
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;