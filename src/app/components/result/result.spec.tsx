import { render } from '@testing-library/react';
import { ResultProps } from './result';

import Result from './result';

describe('Result', () => {
  it('should render successfully', () => {
    const mockProps: ResultProps = {
      article: 'Test Article',
      views: 1000,
      rank: 1,
      project: 'en.wikipedia.org',
    };
    const { baseElement } = render(<Result {...mockProps} />);
    expect(baseElement).toBeTruthy();
  });
});
