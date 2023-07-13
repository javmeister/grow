import { SyntheticEvent, memo } from 'react';
import { DATE } from '../../constants';
import ControlInput from '../control-input/control-input';
import DatePicker from '../date-picker/date-picker';

/* eslint-disable-next-line */
export interface DateInputProps {
  date: Date;
  onChange: (date: Date, event: SyntheticEvent<any> | undefined) => void;
  datePickerOptions: object;
}

export function DateInput({ date, onChange, datePickerOptions }: DateInputProps) {
  return (
    <ControlInput label={DATE} labelHtmlFor="start-date" icon="calendar.svg" iconClass="calendar">
      <DatePicker
        id="start-date"
        date={date}
        onChange={onChange}       
        {...datePickerOptions}
      />
    </ControlInput>
  );
}

export default memo(DateInput);;
