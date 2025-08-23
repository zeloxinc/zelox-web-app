import React from 'react';
import PropTypes from 'prop-types';

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs text-neutral-700 backdrop-blur">
    {children}
  </span>
);

Pill.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pill;