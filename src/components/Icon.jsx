import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as iconSet from '@images/icons';

const Wrapper = styled.span`
  > svg {
    height: 1em;
    width: auto;
    vertical-align: middle;

    /* IE hack */
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      width: 1em;
    }

    .st0 {
      ${(props) => props.mainColor && `fill: ${props.mainColor};`}
    }

    .st1 {
      ${(props) => props.secondaryColor && `fill: ${props.secondaryColor};`}
    }
  }
`;

const Icon = ({ type, mainColor, secondaryColor }) => {
  const SvgImage = iconSet[type];

  return (
    SvgImage
      ? <Wrapper mainColor={mainColor} secondaryColor={secondaryColor}><SvgImage /></Wrapper>
      : null
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  mainColor: PropTypes.string,
  secondaryColor: PropTypes.string
};

Icon.defaultProps = {
  mainColor: undefined,
  secondaryColor: undefined
};

export default Icon;
