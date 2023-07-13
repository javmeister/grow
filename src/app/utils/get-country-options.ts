import { COUNTRY_CODES } from "../constants";
import { SelectOption } from "../types";

export const getCountryOptions = (): SelectOption[] => {
  const emptyOption: SelectOption = {
    key: '',
    label: 'Select a Country...',
  };
  return [
    emptyOption,
    ...Object.keys(COUNTRY_CODES).map((countryCode) => {
      return {
        key: countryCode,
        label: COUNTRY_CODES[countryCode],
      };
    }),
  ];
};
