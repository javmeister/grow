import { pad } from './pad';

describe('pad', () => {
  it('should pad a number with zeros', () => {
    const n = 42;
    const width = 5;
    const padded = pad(n, width);
    expect(padded).toEqual('00042');
  });

  it('should pad a number with custom padding character', () => {
    const n = 42;
    const width = 5;
    const paddingChar = '-';
    const padded = pad(n, width, paddingChar);
    expect(padded).toEqual('---42');
  });

  it('should not pad a number that already has the required width', () => {
    const n = 12345;
    const width = 5;
    const padded = pad(n, width);
    expect(padded).toEqual('12345');
  });
});