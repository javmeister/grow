import { render } from '@testing-library/react';
import { DateInputProps } from './date-input';

import DateInput from './date-input';

describe('DateInput', () => {
  it('should render successfully', () => {
    const mockProps: DateInputProps = {
      date: new Date(),
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onChange: () => {},
      datePickerOptions: {},
    };
    const { baseElement } = render(<DateInput {...mockProps} />);
    expect(baseElement).toBeTruthy();
  });
});
