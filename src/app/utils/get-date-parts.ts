import { DateParts } from "../types/date-parts.type";
import { pad } from "./pad";

export function getDateParts(date: Date): DateParts {
  const day: string = pad(date.getDate(), 2);
  const month: string = pad(date.getMonth() + 1, 2); // js month is 0-based
  const year: string = date.getFullYear() as unknown as string;
  return { day, month, year };
}
