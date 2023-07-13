import { getBaseWikipediaUrl } from "../constants";

export const getWikipediaLink = (slug: string, project?: string) => {
  return `${getBaseWikipediaUrl(project)}/${slug}`;
};
