import React from 'react';
import PropTypes from 'prop-types';
import Price from './styled';

export default function Pricing ({ text }) {
  return (
    <Price>{text}
      <span> online price</span>
    </Price>
  );
}

Pricing.propTypes = {
  text: PropTypes.string.isRequired,
};
