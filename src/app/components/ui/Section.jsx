import React from 'react';

const Section = ({ id, children, className = "" }) => {
  return (
    <section 
      id={id} 
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;