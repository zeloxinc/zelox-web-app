import React from 'react';
import PropTypes from 'prop-types';

const Anchor = ({ href, children, className = "", target = "_blank" }) => (
  <a
    href={href}
    target={target}
    rel="noreferrer noopener"
    className={`inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-black px-4 py-2 text-white transition hover:bg-neutral-800 active:scale-[0.98] ${className}`}
  >
    {children}
  </a>
);

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  target: PropTypes.string,
};

export default Anchor;