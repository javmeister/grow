import { SyntheticEvent } from 'react';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export interface DatePickerProps {
  date: Date;
  id: string;
  dateFormat?: string;
  maxDate?: Date | null;
  minDate?: Date | null;
  onChange: (date: Date, event: SyntheticEvent<any> | undefined) => void;
}

export function DatePicker({ date, id, maxDate, minDate, dateFormat, onChange }: DatePickerProps) {
  return (
    <div className="date-picker-wrapper" data-cy="calendar">
      <ReactDatePicker
        id={id}
        selected={date}
        dateFormat={dateFormat}
        onChange={onChange}
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
}

export default DatePicker;
