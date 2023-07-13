export const TOP_PAGES_BASE_URL =
  'https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access';

export const TOP_PAGES_COUNTRY_BASE_URL =
  'https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country';

export const getBaseWikipediaUrl = (project = 'en.wikipedia') =>
  `https://${project}.org/wiki`;

export const ALL_ACCESS = 'all-access';

export const ALLOW_ALL_ORIGIN = '?origin=*';

export const DEFAULT_NUM_RESULTS = 100;

export const NUM_RESULTS_OPTIONS: number[] = [25, 50, 75, 100, 200];

export const API_MIN_DATE = new Date(2015, 7, 1);

export const DATE = 'DATE';
export const COUNTRY = 'COUNTRY';
export const NUMBER_OF_RESULTS = 'NUM RESULTS';
export const VIEWS = 'views';
export const LOADING = 'Loading...';

export const ERROR_MESSAGES = {
  GENERAL: `The server was unable to retrieve results.`,
  COUNTRY: `The server was unable to retrieve results. The data for this country may not be available on Wikipedia.`,
  NO_RESULTS_FOUND: `No results were found. Try a different input!`,
};

export { COUNTRY_CODES } from './country-codes';