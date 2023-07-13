import { ChangeEvent, FormEvent, SyntheticEvent, useMemo } from 'react';
import { NUM_RESULTS_OPTIONS } from '../../constants';
import { getCountryOptions, getDatePickerOptions } from '../../utils';
import DateInput from '../date-input/date-input';
import NumberOfResultsInput from '../number-of-results-input/number-of-results-input';
import CountryInput from '../country-input/country-input';


/* eslint-disable-next-line */
export interface ControlInputsProps {
  countryValue?: string;
  date: Date;
  numResultsValue: number;
  handleCountryChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleDateChange: (
    date: Date,
    event: SyntheticEvent<any> | undefined
  ) => void;
  handleNumResultsChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleSearchClick: (event: FormEvent<HTMLButtonElement>) => void;
}

export function ControlInputs({
  countryValue = '',
  date,
  numResultsValue,
  handleCountryChange,
  handleDateChange,
  handleNumResultsChange,
  handleSearchClick,
}: ControlInputsProps) {
  const datePickerOptions = useMemo(() => {
    return getDatePickerOptions();
  }, []);

  const countryOptions = useMemo(() => {
    return getCountryOptions();
  }, []);

  return (
    <div className="flex flex-row justify-between items-center">
      <DateInput
        date={date}
        onChange={handleDateChange}
        datePickerOptions={datePickerOptions}
      />

      <div className="bg-slate-200 w-px h-16"></div>

      <NumberOfResultsInput
        onChange={handleNumResultsChange}
        options={NUM_RESULTS_OPTIONS}
        value={numResultsValue}
      />
      
      <div className="bg-slate-200 w-px h-16"></div>

      <CountryInput
        onChange={handleCountryChange}
        options={countryOptions}
        value={countryValue}
      />

      <button
        type="button"
        onClick={handleSearchClick}
        data-cy="search-button"
        className="rounded-full bg-emerald-900 px-16 py-6 text-lg font-regular tracking-wide text-white shadow-sm hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
      >
        Search
      </button>
    </div>
  );
}

export default ControlInputs;
