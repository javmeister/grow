import { LOADING } from '../../constants';

/* eslint-disable-next-line */
export interface LoadingProps {}

export function Loading(props: LoadingProps) {
  return (
    <div>
      <span>{LOADING}</span>
    </div>
  );
}

export default Loading;
