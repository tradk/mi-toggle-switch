var _templateObject = _taggedTemplateLiteral(['\n  &::before {\n    background: ', ' !important;\n  }\n  &::after {\n    transform: translateX(', ');\n  }\n'], ['\n  &::before {\n    background: ', ' !important;\n  }\n  &::after {\n    transform: translateX(', ');\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  height: ', '\n  width: ', '\n  cursor: pointer !important;\n  user-select: none !important;\n  position: relative !important;\n  display: inline-block;\n  &:before {\n    content: \'\';\n    left: 0;\n    position: absolute !important;\n    height: inherit;\n    width: inherit;\n    border-radius: ', ';\n    will-change: background;\n    transition: background .4s .3s ease-out;\n  }\n  &:after {\n    content: \'\';\n    left: 0;\n    position: absolute !important;\n    top: ', ';\n    height: ', ';\n    width: ', ';\n    border-radius: ', ';\n    background: ', ' !important;\n    will-change: transform;\n    transition: transform .4s ease-out;\n  }\n  ', ';\n'], ['\n  height: ', '\n  width: ', '\n  cursor: pointer !important;\n  user-select: none !important;\n  position: relative !important;\n  display: inline-block;\n  &:before {\n    content: \'\';\n    left: 0;\n    position: absolute !important;\n    height: inherit;\n    width: inherit;\n    border-radius: ', ';\n    will-change: background;\n    transition: background .4s .3s ease-out;\n  }\n  &:after {\n    content: \'\';\n    left: 0;\n    position: absolute !important;\n    top: ', ';\n    height: ', ';\n    width: ', ';\n    border-radius: ', ';\n    background: ', ' !important;\n    will-change: transform;\n    transition: transform .4s ease-out;\n  }\n  ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled, { css } from 'styled-components';

var stretchFactor = 1.625;

/**
 * return switch toggle height
 */
var returnHeight = function returnHeight(props) {
  return props.height;
};

/**
 * return switch toggle width
 */
var returnWidth = function returnWidth(props) {
  if (props.width) {
    if (props.width <= props.height * stretchFactor) {
      return props.height * stretchFactor;
    } else {
      return props.width;
    }
  } else {
    return props.height * stretchFactor;
  }
};

/**
 * return boder radius
 */
var returnBorderRadius = function returnBorderRadius(props) {
  if (props.type === 'rectangular') {
    return 0;
  } else {
    return props.height / 2;
  }
};

// return propertis for ball switch toggle
/**
 * return ball spacing
 */
var returnBallSpacing = function returnBallSpacing(props) {
  return props.spacing;
};

/**
 * return ball size
 */
var returnBallSize = function returnBallSize(props) {
  return props.height - props.spacing * 2;
};

/**
 * return ball radius
 */
var returnBallRadius = function returnBallRadius(props) {
  if (props.type === 'rectangular') {
    return 0;
  } else {
    return (props.height - props.spacing * 2) / 2;
  }
};

/**
 * return ball slide size
 */
var returnBallSlideSize = function returnBallSlideSize(props) {
  return returnWidth(props) - returnBallSize(props) - props.spacing;
};

// event switch toggle enable
var returnEnableSwitchToggle = css(_templateObject, function (props) {
  return props.activeColor;
}, function (props) {
  return returnBallSlideSize(props) + 'px';
});

var returnDisableSwitchToggle = css(_templateObject, function (props) {
  return props.deactiveColor;
}, function (props) {
  return returnBallSpacing(props) + 'px';
});

export var StyledMiToggleSwitch = styled.div(_templateObject2, function (props) {
  return returnHeight(props) + 'px';
}, function (props) {
  return returnWidth(props) + 'px';
}, function (props) {
  return returnBorderRadius(props) + 'px';
}, function (props) {
  return returnBallSpacing(props) + 'px';
}, function (props) {
  return returnBallSize(props) + 'px';
}, function (props) {
  return returnBallSize(props) + 'px';
}, function (props) {
  return returnBallRadius(props) + 'px';
}, function (props) {
  return props.ballColor;
}, function (props) {
  return props.enabled ? returnEnableSwitchToggle : returnDisableSwitchToggle;
});