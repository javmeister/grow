import { Article } from '../../types';
import Result from '../result/result';

export interface ResultsProps {
  results: Article[];
}

export function Results({ results }: ResultsProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-cy="results">
      <div className="rounded-lg border border-slate-200 shadow-md p-6" data-cy="results-container">
        { results.map((result, index) => (<Result key={`result-${index}`} {...result} /> )) }
      </div>
    </div>
  );
}

export default Results;
