import { render } from '@testing-library/react';

import ControlInput from './control-input';

describe('ControlInput', () => {
  it('should render successfully', () => {
    const mockLabel = 'Test Label';
    const mockLabelHtmlFor = 'test-input';
    const { baseElement } = render(
      <ControlInput label={mockLabel} labelHtmlFor={mockLabelHtmlFor}>
        <input id={mockLabelHtmlFor} />
      </ControlInput>
    );
    expect(baseElement).toBeTruthy();
  });
});
