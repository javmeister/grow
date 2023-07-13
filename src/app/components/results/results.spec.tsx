import { render } from '@testing-library/react';
import { Article } from '../../types';

import Results from './results';

describe('Results', () => {
  it('should render successfully', () => {
    const mockResults: Article[] = [
      {
        rank: 1,
        article: 'Article 1',
        views: 10000,
        project: 'en.wikipedia.org',
      },
      {
        rank: 2,
        article: 'Article 2',
        views: 30000,
        project: 'en.wikipedia.org',
      },
    ];
    const { baseElement } = render(<Results results={mockResults} />);
    expect(baseElement).toBeTruthy();
  });
});
