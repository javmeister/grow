import { render } from '@testing-library/react';

import ErrorContainer from './error-container';

describe('ErrorContainer', () => {
  it('should render successfully', () => {
    const mockMessage = 'Test error message';
    const { baseElement } = render(<ErrorContainer message={mockMessage} />);
    expect(baseElement).toBeTruthy();
  });
});
