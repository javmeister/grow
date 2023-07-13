import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['header']}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <h1 className="text-4xl text-center font-regular leading-relaxed text-gray-900">Top Wikipedia Articles</h1>
      </div>
    </div>
  );
}

export default Header;
