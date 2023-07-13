import { ERROR_MESSAGES } from "../constants";
import { FetchConfig } from "../types";
import { getTopPagesForCountryUrl } from "./get-top-pages-for-country";
import { getTopPagesUrl } from "./get-top-pages-url";
import { processDataDefault } from "./process-data-default";
import { processDataForCountry } from "./process-data-for-country";

export const getFetchConfig = (
    date: Date,
    countryCode: string,
    numResults: number
  ): FetchConfig => {
    const url = countryCode
      ? getTopPagesForCountryUrl(countryCode, date)
      : getTopPagesUrl(date);
    const processData = countryCode ? processDataForCountry : processDataDefault;
    const getErrorMessage = () => {
      return countryCode ? ERROR_MESSAGES.COUNTRY : ERROR_MESSAGES.GENERAL;
    };
    const fetchConfig = {
      url,
      numResults,
      processData,
      getErrorMessage,
    };
    return fetchConfig;
  };