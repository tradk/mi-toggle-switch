import React from 'react';
import renderer from "react-test-renderer";
import 'jest-styled-components'

import MiToggleSwitch from './MiToggleSwitch';

describe("MiToggleSwitch", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<MiToggleSwitch />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});