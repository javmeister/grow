import { render } from '@testing-library/react';

import SelectInput from './select-input';

describe('SelectInput', () => {
 

  it('should render the correct options', () => {
    const options = [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' },
      { key: '3', label: 'Option 3' },
    ];
    const { getByTestId } = render(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      <SelectInput id="test-select" options={options} value="1" onChange={() => {}} />
    );
    const selectElement = getByTestId('test-select') as HTMLSelectElement;
    expect(selectElement.options.length).toBe(options.length);
    for (let i = 0; i < options.length; i++) {
      expect(selectElement.options[i].value).toBe(options[i].key);
      expect(selectElement.options[i].textContent).toBe(options[i].label);
    }
  });
});

