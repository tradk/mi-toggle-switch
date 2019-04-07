var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { StyledMiToggleSwitch } from './style';

// flow define prop-types


// flow define state


// default props
var defaultProps = {
  isEnable: false,
  isStateChange: true,
  height: 32,
  spacing: 2,
  ballColor: '#ffffff',
  activeColor: '#62c28e',
  deactiveColor: '#cccccc',
  type: 'rounded'
};

var MiToggleSwitch = function (_React$Component) {
  _inherits(MiToggleSwitch, _React$Component);

  function MiToggleSwitch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MiToggleSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MiToggleSwitch.__proto__ || Object.getPrototypeOf(MiToggleSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      enabled: _this.props.isEnable
    }, _this.isFunction = function (type) {
      return typeof type === 'function';
    }, _this.toggleSwitch = function (evt) {
      evt.persist();
      evt.preventDefault();
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          isStateChange = _this$props.isStateChange,
          onStateChanged = _this$props.onStateChanged;

      if (isStateChange) {
        _this.setState({ enabled: !_this.state.enabled }, function () {
          var state = _this.state;
          var switchEvent = Object.assign(evt, { SWITCH_STATE: state });
          _this.isFunction(onClick) && onClick(switchEvent);
          _this.isFunction(onStateChanged) && onStateChanged(state);
        });
      } else {
        _this.isFunction(onClick) && onClick();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // define default props


  // define state


  _createClass(MiToggleSwitch, [{
    key: 'componentWillReceiveProps',


    // Update state when props change
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isEnable !== this.state.enabled) {
        this.setState({ enabled: nextProps.isEnable });
      }
    }

    // check variable is function


    // event when click togglw switch

  }, {
    key: 'render',


    // render component
    value: function render() {
      var enabled = this.state.enabled;

      var _props = this.props,
          className = _props.className,
          onClick = _props.onClick,
          onStateChanged = _props.onStateChanged,
          isEnable = _props.isEnable,
          isStateChange = _props.isStateChange,
          restProps = _objectWithoutProperties(_props, ['className', 'onClick', 'onStateChanged', 'isEnable', 'isStateChange']);

      return React.createElement(StyledMiToggleSwitch, Object.assign({
        className: className,
        onClick: this.toggleSwitch
      }, restProps, {
        enabled: enabled }));
    }
  }]);

  return MiToggleSwitch;
}(React.Component);

MiToggleSwitch.defaultProps = defaultProps;


export default MiToggleSwitch;