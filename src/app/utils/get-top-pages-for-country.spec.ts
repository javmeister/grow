import { getTopPagesForCountryUrl } from './get-top-pages-for-country';

describe('getTopPagesForCountryUrl', () => {
  it('should return the correct URL for a given country code and date', () => {
    const countryCode = 'us';
    const date = new Date('2022-01-01');
    // The date depends on local time zone, so we need to use UTC to get the expected output
    const expectedOutput = 'https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/us/all-access/2021/12/31?origin=*';
    expect(getTopPagesForCountryUrl(countryCode, date)).toEqual(expectedOutput);
  });
});