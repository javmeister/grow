import { render } from '@testing-library/react';
import { SelectOption } from '../../types';

import NumberOfResultsInput from './number-of-results-input';

describe('NumberOfResultsInput', () => {
  it('should render successfully', () => {
    const mockOptions: SelectOption[] = [
      { key: '10', label: '10' },
      { key: '20', label: '20' },
      { key: '30', label: '30' },
    ];
    const mockValue = 10;
    const { baseElement } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <NumberOfResultsInput options={mockOptions} value={mockValue} onChange={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });
});