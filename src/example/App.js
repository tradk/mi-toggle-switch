import React from 'react';

import { MiToggleSwitch } from '../lib';
import { StyledWrapper, Label } from './style';

class App extends React.Component {
  state = {
    enableOnClick: false,
    onClickState: {},
    enableOnStateChanged: false,
    onStateChangedState: {},
    enable: false,
  }

  handleOnClick = (switchEvent) => {
    this.setState({ onClickState: switchEvent.SWITCH_STATE });
    this.setState({ enableOnClick: !this.state.enableOnClick });
  };

  handleOnStateChanged = (state) => {
    this.setState({ onStateChangedState: state });
    this.setState({ enableOnStateChanged: !this.state.enableOnStateChanged });
  }

  confirmToggleSwitchChange = () => {
    if (window.confirm("Change state Mi-Toggle-Switch")) {
      this.setState({enable: !this.state.enable});
    } else {
      // do some thing
    }
  }

  render() {
    const { enable, enableOnClick, enableOnStateChanged } = this.state;
    return (
      <StyledWrapper>
        <Label>1. Default Mi-Toggle-Switch component</Label>
        <MiToggleSwitch />

        <Label>2. Mi-Toggle-Switch component (isEnable: true)</Label>
        <MiToggleSwitch isEnable />

        <Label>3. Mi-Toggle-Switch component (type: 'rectangular')</Label>
        <MiToggleSwitch style={{ marginRight: 20 }} type='rectangular' />
        <MiToggleSwitch isEnable type='rectangular' />

        <Label>4. Mi-Toggle-Switch component (deactiveColor: '#90a4ae', activeColor: '#e91e63')</Label>
        <MiToggleSwitch style={{ marginRight: 20 }} deactiveColor='#90a4ae' activeColor='#e91e63' />
        <MiToggleSwitch deactiveColor='#90a4ae' activeColor='#e91e63' isEnable />

        <Label>5. Mi-Toggle-Switch component (width:30, height:20)</Label>
        <MiToggleSwitch style={{ marginRight: 20 }} width={30} height={20} />
        <MiToggleSwitch style={{ marginRight: 20 }} type='rectangular' width={30} height={20} />

        <Label>6. Mi-Toggle-Switch component (width:70, height:30)</Label>
        <MiToggleSwitch style={{ marginRight: 20 }} width={70} height={30} />
        <MiToggleSwitch style={{ marginRight: 20 }} type='rectangular' width={70} height={30} />

        <Label>7. Mi-Toggle-Switch component (ballColor:'#ff9800')</Label>
        <MiToggleSwitch ballColor='#ff9800' />

        <Label>8. Mi-Toggle-Switch component (spacing:10)</Label>
        <MiToggleSwitch spacing={10} />

        <Label>9. Mi-Toggle-Switch component (callback onClick())</Label>
        <Label>{JSON.stringify(this.state.onClickState)}</Label>
        <MiToggleSwitch isEnable={enableOnClick} onClick={this.handleOnClick} />

        <Label>10. Mi-Toggle-Switch component (callback onStateChanged())</Label>
        <Label>{JSON.stringify(this.state.onStateChangedState)}</Label>
        <MiToggleSwitch isEnable={enableOnStateChanged} onStateChanged={this.handleOnStateChanged} />

        <Label>11. Mi-Toggle-Switch component (isStateChange: false)</Label>
        <MiToggleSwitch isEnable={enable} isStateChange={false} onClick={this.confirmToggleSwitchChange} />
      </StyledWrapper>
    );
  }
}

export default App;
