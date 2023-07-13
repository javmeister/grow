import { ChangeEvent, memo } from 'react';
import { SelectOption } from '../../types';
import { COUNTRY } from '../../constants';
import ControlInput from '../control-input/control-input';
import SelectInput from '../select-input/select-input';

/* eslint-disable-next-line */
export interface CountryInputProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  value: string;
}

export function CountryInput({ onChange, options, value }: CountryInputProps) {
  return (
    <ControlInput label={COUNTRY} labelHtmlFor="country" icon="country.svg" iconClass="country">
      <SelectInput
        id="country"
        onChange={onChange}
        options={options}
        value={value}
      />
    </ControlInput>
  );
}

export default memo(CountryInput);
