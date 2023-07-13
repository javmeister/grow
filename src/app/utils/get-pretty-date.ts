import format from 'date-fns/format'

export const getPrettyDate = (date: Date): string => {
  return format(date, 'MMMM Do, YYYY');
};
