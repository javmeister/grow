import { Article } from "../types";

export const processDataDefault = (responseData: any, numResults: number): Article[] => {
  const { articles } = responseData.items[0];
  return articles.slice(0, numResults);
};
