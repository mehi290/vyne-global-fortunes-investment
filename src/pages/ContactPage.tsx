import React from 'react';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

const ContactPage = () => {
  return (
    <PageTransition>
      <div className="pt-24 md:pt-28">
        <Contact />
      </div>
    </PageTransition>
  );
};

export default ContactPage