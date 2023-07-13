import { NUMBER_OF_RESULTS } from '../../constants';
import { ChangeEvent, memo } from 'react';
import { SelectOption } from '../../types';
import ControlInput from '../control-input/control-input';
import SelectInput from '../select-input/select-input';

/* eslint-disable-next-line */
export interface NumberOfResultsInputProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  value: number;
}

export function NumberOfResultsInput({ onChange, options, value }: NumberOfResultsInputProps) {
  return (
    <ControlInput label={NUMBER_OF_RESULTS} labelHtmlFor="number-of-results" icon="results.svg" iconClass="results">
      <SelectInput
        id="number-of-results"
        onChange={onChange}
        options={options}
        value={value}
      />
    </ControlInput>
  );
}

export default memo(NumberOfResultsInput);
