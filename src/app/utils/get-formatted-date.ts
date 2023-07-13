import { DateParts } from "../types/date-parts.type";
import { getDateParts } from "./get-date-parts";

export const getFormattedDate = (date: Date): string => {
  const { day, month, year }: DateParts = getDateParts(date);
  return month + '/' + day + '/' + year;
};
