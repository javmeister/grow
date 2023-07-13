import styles from './error-container.module.scss';

/* eslint-disable-next-line */
export interface ErrorContainerProps {
  message: string;
}

export function ErrorContainer({ message }: ErrorContainerProps) {
  return (
    <div className={styles.container}>
      <span>{message}</span>
    </div>
  );
}

export default ErrorContainer;
