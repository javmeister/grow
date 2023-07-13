import { formatNumber, getWikipediaLink, sanitizeArticleTitle } from '../../utils';
import { Article } from '../../types';
import { VIEWS } from '../../constants';

/* eslint-disable-next-line */
export interface ResultProps extends Article {}

export function Result({ article, views, rank, project }: ResultProps) {
  return (
    <div className="flex flex-row justify-between gap-4 p-4 rounded-xl border-stone-200 border mb-5">
      <h3 className="text-slate-400">{rank}</h3>
      <a
            href={getWikipediaLink(article, project)}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 font-semibold"
          >
            {article && sanitizeArticleTitle(article)}
          </a>
      <h3 className="text-slate-400 text-sm">{views && formatNumber(views)} {VIEWS}</h3>
    </div>    
  );
}

export default Result;
