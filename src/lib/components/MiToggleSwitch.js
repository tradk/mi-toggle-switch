// @flow
import * as React from 'react';
import { StyledMiToggleSwitch } from './style';

// flow define prop-types
type Props = {
  isEnable?: boolean,
  isStateChange?: boolean,
  onClick?: Function,
  onStateChanged?: Function,
  width?: number,
  height?: number,
  spacing?: number,
  activeColor?: string,
  deactiveColor?: string,
  ballColor?: string,
  className?: string,
  type?: 'rectangular' | 'rounded',
};

// flow define state
type State = {
  enabled: boolean,
};

// default props
const defaultProps = {
  isEnable: false,
  isStateChange: true,
  height: 32,
  spacing: 2,
  ballColor: '#ffffff',
  activeColor: '#62c28e',
  deactiveColor: '#cccccc',
  type: 'rounded',
};

class MiToggleSwitch extends React.Component<Props, State> {
  // define default props
  static defaultProps = defaultProps;
  
  // define state
  state = {
    enabled: this.props.isEnable,
  };

  // Update state when props change
  componentDidUpdate(nextProps) {
    if (nextProps.isEnable !== this.state.enabled) {
      this.setState({ enabled: nextProps.isEnable });
    }
  }

  // check variable is function
  isFunction = type => typeof type === 'function';

  // event when click togglw switch
  toggleSwitch = evt => {
    evt.persist();
    evt.preventDefault();
    const { onClick, isStateChange, onStateChanged } = this.props;
    if (isStateChange) {
      this.setState({ enabled: !this.state.enabled }, () => {
        const state = this.state;
        const switchEvent = Object.assign(evt, { SWITCH_STATE: state });
        this.isFunction(onClick) && onClick(switchEvent);
        this.isFunction(onStateChanged) && onStateChanged(state);
      });
    } else {
      this.isFunction(onClick) && onClick();
    }
  }

  // render component
  render() {
    const { enabled } = this.state;
    const { className, onClick, onStateChanged, isEnable, isStateChange, ...restProps } = this.props;
    return (
      <StyledMiToggleSwitch
        className={className}
        onClick={this.toggleSwitch}
        {...restProps}
        enabled={enabled} />
    );
  }
}

export default MiToggleSwitch;
