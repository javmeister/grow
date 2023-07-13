import { render } from '@testing-library/react';
import { SelectOption } from '../../types';

import CountryInput from './country-input';


describe('CountryInput', () => {
  it('should render successfully', () => {
    const mockOptions: SelectOption[] = [
      { key: 'US', label: 'United States' },
      { key: 'FR', label: 'France' },
      { key: 'ES', label: 'Spain' },
    ];
    const mockValue = 'US';

    const { baseElement } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <CountryInput options={mockOptions} value={mockValue} onChange={() => {}} />
    );

    expect(baseElement).toBeTruthy();
  });
});
