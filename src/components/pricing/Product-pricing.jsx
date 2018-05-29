import React from 'react';
import PropTypes from 'prop-types';
import Price, {PriceText} from './styled';

export default function Pricing ({ text }) {
  return (
    <Price>{text}
      <PriceText> online price</PriceText>
    </Price>
  );
}

Pricing.propTypes = {
  text: PropTypes.string.isRequired,
};
