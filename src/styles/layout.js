import styled, { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const MainContainer = styled.main `
    max-width: 1000px;
    margin: 0 auto;
    ${media.desktop`
        margin: 0 15px;
    `}
`;

export const Column = styled.section `
    width: 50%;
    margin-right: ${props => props.rightSide ? '0' : '2%'};
    width: ${props => props.rightSide ? '50%' : '48%'};
    float: ${props => props.rightSide ? 'right' : 'left'};
    ${media.desktop`
        width: 100%;
        float: inherit;
        margin-right: 0;
    `}
`;