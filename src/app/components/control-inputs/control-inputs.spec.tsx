/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';

import { ControlInputsProps } from './control-inputs';

import ControlInputs from './control-inputs';

describe('ControlInputs', () => {
  it('should render successfully', () => {
    const mockProps: ControlInputsProps = {
      date: new Date(),
      numResultsValue: 10,
      handleCountryChange: () => {},
      handleDateChange: () => {},
      handleNumResultsChange: () => {},
      handleSearchClick: () => {},
    };
    const { baseElement } = render(<ControlInputs {...mockProps} />);
    expect(baseElement).toBeTruthy();
  });
});
