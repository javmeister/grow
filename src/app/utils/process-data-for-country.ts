import { Article } from "../types";

export const processDataForCountry = (responseData: any, numResults: number): Article[] => {
  const { articles } = responseData.items[0];
  return articles
    .slice(0, numResults)
    .map((article: any) => {
      return {
        article: article.article,
        views: article.views_ceil,
        rank: article.rank,
        project: article.project,
      };
    });
};
