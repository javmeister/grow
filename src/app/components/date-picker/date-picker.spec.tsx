import { render } from '@testing-library/react';
import { DatePickerProps } from './date-picker';

import DatePicker from './date-picker';

describe('DatePicker', () => {
  it('should render successfully', () => {
    const mockProps: DatePickerProps = {
      date: new Date(),
      id: 'test-id',
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onChange: () => {},
    };
    const { baseElement } = render(<DatePicker {...mockProps} />);
    expect(baseElement).toBeTruthy();
  });
});
