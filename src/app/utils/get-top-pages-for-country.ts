import { ALLOW_ALL_ORIGIN, ALL_ACCESS, TOP_PAGES_COUNTRY_BASE_URL } from "../constants";
import { DateParts } from "../types/date-parts.type";
import { getDateParts } from "./get-date-parts";

export const getTopPagesForCountryUrl = (
  countryCode: string,
  date: Date
): string => {
  const { day, month, year }: DateParts = getDateParts(date);
  return `${TOP_PAGES_COUNTRY_BASE_URL}/${countryCode}/${ALL_ACCESS}/${year}/${month}/${day}${ALLOW_ALL_ORIGIN}`;
};
