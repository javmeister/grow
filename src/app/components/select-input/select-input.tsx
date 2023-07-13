import { ChangeEventHandler, useMemo } from 'react';
import { KeyLabelOption, SelectOption } from '../../types';

import styles from './select-input.module.scss';

/* eslint-disable-next-line */
export interface SelectInputProps {
  id: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: SelectOption[];
  value: number | string;
}

const isKeyLabelOption = (option: SelectOption): option is KeyLabelOption => {
  return (option as KeyLabelOption).key !== undefined;
};

const CustomOption = ({ option }: { option: SelectOption }): JSX.Element => {
  if (isKeyLabelOption(option)) {
    const { key, label } = option;
    return <option value={key}>{label}</option>;
  } else {
    return <option value={option}>{option}</option>;
  }
};

export function SelectInput({ onChange, options, value, id }: SelectInputProps) {
  const memoOptions = useMemo(() => {
    const getOptions = () => (
      <>
        {options.map((option, index) => (
          <CustomOption key={index} option={option} />
        ))}
      </>
    );
    return getOptions();
  }, [options]);


  return (
    <select id={id} value={value} onChange={onChange} className={styles.select} data-testid={id} data-cy={id}>
      {memoOptions}
    </select>
  );
}

export default SelectInput;
