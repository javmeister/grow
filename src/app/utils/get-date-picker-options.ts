import { API_MIN_DATE } from "../constants";
import { getYesterday } from "./get-yesterday";

export const getDatePickerOptions = (): { minDate: Date; maxDate: Date; dateFormat: string } => {
  return {
    minDate: API_MIN_DATE,
    maxDate: getYesterday(),
    dateFormat: "MMMM dd, yyyy"
  };
};
