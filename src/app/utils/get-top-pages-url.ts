import { TOP_PAGES_BASE_URL, ALLOW_ALL_ORIGIN } from "../constants";
import { DateParts } from "../types/date-parts.type";
import { getDateParts } from "./get-date-parts";

export const getTopPagesUrl = (date: Date): string => {
  const { day, month, year }: DateParts = getDateParts(date);
  return `${TOP_PAGES_BASE_URL}/${year}/${month}/${day}${ALLOW_ALL_ORIGIN}`;
};
