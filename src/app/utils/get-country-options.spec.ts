import { COUNTRY_CODES } from '../constants';
import { KeyLabelOption } from '../types';
import { getCountryOptions } from './get-country-options';

describe('getCountryOptions', () => {
  it('should return an array of options', () => {
    const options = getCountryOptions();
    expect(Array.isArray(options)).toBe(true);
    expect(options.length).toBeGreaterThan(0);
  });

  it('should include an empty option', () => {
    const options = getCountryOptions();
    const emptyOption = options[0] as KeyLabelOption;
    expect(emptyOption.key).toEqual('');
    expect(emptyOption.label).toEqual('Select a Country...');
  });

  it('should include all country codes and names', () => {
    const options = getCountryOptions();
    const countryCodes = Object.keys(options).slice(1);
    countryCodes.forEach((countryCode) => {
      const option: any = options.find((o: any) => o.key === countryCode);
      expect(option?.label).toEqual(COUNTRY_CODES[countryCode]);
    });
  });
});