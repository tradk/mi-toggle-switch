import styled, { css } from 'styled-components';

/**
 * return switch toggle height
 */
const returnHeight = props => {
  return props.height;
};

/**
 * return switch toggle width
 */
const returnWidth = props => {
  if (props.width) {
    if (props.width <= props.height * 1.625) {
      return props.height * 1.625;
    } else {
      return props.width;
    }
  } else {
    return props.height * 1.625;
  }
}

/**
 * return boder radius
 */
const returnBorderRadius = props => {
  return props.height / 2;
};

// return propertis for ball switch toggle
/**
 * return ball spacing
 */
const returnBallSpacing = props => {
  return props.spacing;
};

/**
 * return ball size
 */
const returnBallSize = props => {
  return props.height - (props.spacing * 2);
};

/**
 * return ball radius
 */
const returnBallRadius = props => {
  return (props.height - (props.spacing * 2)) / 2;
};

/**
 * return ball slide size
 */
const returnBallSlideSize = props => {
  return returnWidth(props) - returnBallSize(props) - props.spacing;
}

// event switch toggle enable
const returnEnableSwitchToggle = css`
  &::before {
    background: ${props => props.activeColor} !important;
  }
  &::after {
    transform: translateX(${props => `${returnBallSlideSize(props)}px`});
  }
`;

const returnDisableSwitchToggle = css`
  &::before {
    background: ${props => props.deactiveColor} !important;
  }
  &::after {
    transform: translateX(${props => `${returnBallSpacing(props)}px`});
  }
`;

export const StyledMiToggleSwitch = styled.div`
  height: ${props => `${returnHeight(props)}px`}
  width: ${props => `${returnWidth(props)}px`}
  cursor: pointer !important;
  user-select: none !important;
  position: relative !important;
  display: inline-block;
  &:before {
    content: '';
    left: 0;
    position: absolute !important;
    height: inherit;
    width: inherit;
    border-radius: ${props => `${returnBorderRadius(props)}px`};
    will-change: background;
    transition: background .4s .3s ease-out;
  }
  &:after {
    content: '';
    left: 0;
    position: absolute !important;
    top: ${props => `${returnBallSpacing(props)}px`};
    height: ${props => `${returnBallSize(props)}px`};
    width: ${props => `${returnBallSize(props)}px`};
    border-radius: ${props => `${returnBallRadius(props)}px`};
    background: ${props => props.ballColor} !important;
    will-change: transform;
    transition: transform .4s ease-out;
  }
  ${props => props.enabled ? returnEnableSwitchToggle : returnDisableSwitchToggle};
`
