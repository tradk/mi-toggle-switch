# Mi-Toggle-Switch
![version](https://img.shields.io/npm/v/mi-toggle-switch.svg)
![license](https://img.shields.io/npm/l/mi-toggle-switch.svg)
![type](https://img.shields.io/npm/types/mi-toggle-switch.svg)
![npm](https://img.shields.io/npm/dm/mi-toggle-switch.svg)

Mi-Toggle-Switch is a React component library build with [styled-components](https://www.styled-components.com/). It will help you create a Toggle Switch component very fast and extremely easy in ReactJS.

[![Mi-Toggle-Switch component](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yjzr3z85wz)

## Installation
You can use either npm

```npm i mi-toggle-switch```

or yarn

```yarn add mi-toggle-switch```

## Basic Usage
```js
import React from 'react';
import { MiToggleSwitch } from 'mi-toggle-switch';

class App extends React.Component {
  render() {
    return (
      <MiToggleSwitch />
    );
  }
}

export default App;
```

## PropTypes and defaultProps
Prop         | Type         | Default      | Description
------------ | ------------ | ------------ | ------------
isEnable | boolean | false | If true, the switch is set to checked. If false, it is not checked.
type | oneOf(['rectangular', 'rounded']) | 'rounded' | If 'rectangular' => create Rectangular Toggle Switch. If 'rounded' => create Rounded Toggle Switch
activeColor | string | '#62c28e' | Set color when it is checked
deactiveColor | string | '#cccccc' | Set color when it is not checked
width | number | 32*1.625 | Set width of the Toggle Switch
height | number | 32 | Set height of the Toggle Switch
ballColor | string | '#ffffff' | Set ball background color
spacing | number | 2 | Set space between ball and Toggle Switch container 
onClick | Function | undefined | Callback when click Toggle Switch
onStateChanged | Function | undefined | Callback when change state Toggle Switch
isStateChange | boolean | true | Enable and disable change state Toggle Switch when click it.

## License
Mi-Toggle-Switch is [MIT licensed](https://github.com/tradk/mi-toggle-switch/blob/master/LICENSE).
