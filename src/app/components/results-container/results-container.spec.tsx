import { render } from '@testing-library/react';

import ResultsContainer from './results-container';

describe('ResultsContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ResultsContainer />);
    expect(baseElement).toBeTruthy();
  });
});
