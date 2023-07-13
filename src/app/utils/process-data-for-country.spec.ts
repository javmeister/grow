import { processDataForCountry } from './process-data-for-country';

describe('processDataForCountry', () => {
  it('should return an array of Article objects with the correct properties', () => {
    const responseData = {
      items: [
        {
          articles: [
            {
              article: 'Article 1',
              views_ceil: 1000,
              rank: 1,
              project: 'Project 1',
            },
            {
              article: 'Article 2',
              views_ceil: 2000,
              rank: 2,
              project: 'Project 2',
            },
          ],
        },
      ],
    };
    const numResults = 2;
    const expectedOutput = [
      {
        article: 'Article 1',
        views: 1000,
        rank: 1,
        project: 'Project 1',
      },
      {
        article: 'Article 2',
        views: 2000,
        rank: 2,
        project: 'Project 2',
      },
    ];
    expect(processDataForCountry(responseData, numResults)).toEqual(expectedOutput);
  });

  it('should return an empty array if no articles are provided', () => {
    const responseData = {
      items: [
        {
          articles: [],
        },
      ],
    };
    const numResults = 2;
    const expectedOutput: any[] = [];
    expect(processDataForCountry(responseData, numResults)).toEqual(expectedOutput);
  });

  it('should return an array of Article objects with the correct properties if numResults is greater than the number of articles provided', () => {
    const responseData = {
      items: [
        {
          articles: [
            {
              article: 'Article 1',
              views_ceil: 1000,
              rank: 1,
              project: 'Project 1',
            },
            {
              article: 'Article 2',
              views_ceil: 2000,
              rank: 2,
              project: 'Project 2',
            },
          ],
        },
      ],
    };
    const numResults = 3;
    const expectedOutput = [
      {
        article: 'Article 1',
        views: 1000,
        rank: 1,
        project: 'Project 1',
      },
      {
        article: 'Article 2',
        views: 2000,
        rank: 2,
        project: 'Project 2',
      },
    ];
    expect(processDataForCountry(responseData, numResults)).toEqual(expectedOutput);
  });
});