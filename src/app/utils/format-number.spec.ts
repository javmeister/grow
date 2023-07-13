import { formatNumber } from './format-number';

describe('formatNumber', () => {
  it('should format a number with commas', () => {
    const n = 1000000;
    const formatted = formatNumber(n);
    expect(formatted).toEqual('1,000,000');
  });

  it('should format a negative number with commas', () => {
    const n = -1000000;
    const formatted = formatNumber(n);
    expect(formatted).toEqual('-1,000,000');
  });

  it('should format a decimal number with commas', () => {
    const n = 1234.5678;
    const formatted = formatNumber(n);
    expect(formatted).toEqual('1,234.568'); // Rounds up!!
  });
});