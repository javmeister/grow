import { ChangeEvent, ChangeEventHandler, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { useFetch } from '../../hooks';
import { FetchConfig } from '../../types';
import { DEFAULT_NUM_RESULTS, ERROR_MESSAGES } from '../../constants';
import ErrorContainer from '../error-container/error-container';
import Loading from '../loading/loading';
import { getYesterday, getFetchConfig } from '../../utils';
import Results from '../results/results';
import ControlInputs from '../control-inputs/control-inputs';
import Pagination from 'rc-pagination';

import styles from './results-container.module.scss';

/* eslint-disable-next-line */
export interface ResultsContainerProps {}

export function ResultsContainer(props: ResultsContainerProps) {
  const [date, setDate] = useState<Date>(getYesterday());
  const [numberOfResults, setNumberOfResults] = useState<number>(DEFAULT_NUM_RESULTS);
  const [countryCode, setCountryCode] = useState<string>('');
  const [search, setSearch] = useState<boolean>(false);
  const [fetchConfig, setFetchConfig] = useState<FetchConfig | null>(null);
  const [current, setCurrent] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    setFetchConfig(getFetchConfig(date, countryCode, numberOfResults));
  }, [search]);

  const handleDateChange = useCallback(
    (
      selectedDate: Date,
      event: SyntheticEvent<any> | undefined
    ): void => {
      setDate(selectedDate);
    },
    [setDate]
  );

  const handleCountryChange: ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (event: ChangeEvent<HTMLSelectElement>) => {
        setCountryCode(event.target.value);
      },
      [setCountryCode]
    );

  const handleNumResultsChange: ChangeEventHandler<HTMLSelectElement> =
    useCallback(
      (event: ChangeEvent<HTMLSelectElement>) => {
        const element = event.target as HTMLSelectElement;
        setNumberOfResults(element.value as unknown as number);
      },
      [setNumberOfResults]
    );

  const handleSearchClick = 
    useCallback(
      (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setSearch(s => !s); // Just toggle the search state
        setCurrent(1);      // And reset to the first page
      }, []
    );
    
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrent(page)
    }, []
  );

  // eslint-disable-next-line prefer-const
  let { data, loading, hasError } = useFetch(fetchConfig);
  
  let errorMessage = fetchConfig?.getErrorMessage() ?? '';
  let displayResults = [];

  if (!hasError && !loading && Array.isArray(data)) {
    if (data && data.length > 0) {
      displayResults = data.slice((current - 1) * pageSize, current * pageSize);
    } else {
      hasError = true;
      errorMessage = ERROR_MESSAGES.NO_RESULTS_FOUND;
    }
  }

  return (
    <div data-cy="main-container">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6" data-cy="filters">
        <div className="rounded-full border border-stone-200 p-4">
          <ControlInputs
            countryValue={countryCode}
            date={date}
            handleCountryChange={handleCountryChange}
            handleDateChange={handleDateChange}
            handleNumResultsChange={handleNumResultsChange}
            handleSearchClick={handleSearchClick}
            numResultsValue={numberOfResults}
          />
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : hasError ? (
        <ErrorContainer message={errorMessage} />
      ) : (
        <Results
          results={displayResults}
        />
      )}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 mb-12 mt-8 flex flex-row items-center justify-center"
        data-cy="pagination">
        <Pagination
          onChange={handlePageChange}
          current={current}
          total={data.length}
          pageSize={pageSize}
          className={styles.pagination}
          showTitle={false}
        />         
      </div>
    </div>
  );
}

export default ResultsContainer;
