import React from 'react';
import PropTypes from 'prop-types';
import Title from './styled';

function Header ({ text }) {
  return (
    <header>
      <Title>{text}</Title>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header