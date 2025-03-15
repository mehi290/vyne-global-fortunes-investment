import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 56, label: 'Million € Total Cross-border Portfolio', suffix: 'M' },
  { value: 5, label: 'Billion € Total Funds Mobilized', suffix: 'B' },
  { value: 300, label: 'Clients Served', suffix: '+' },
  { value: 100, label: 'Million $ Energy Business Investments', suffix: 'M' },
];

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-dark" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : '0'}
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;