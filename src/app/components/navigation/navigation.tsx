import styles from './navigation.module.scss';

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  // The figma UX has some hidden elements in here, a logo and navigation bar, but left the bottom border
  // This is probably not meant to be here, but being faithful to the design.
  return (
    <div className={styles['navigation']}>
      <div className={styles['logo']}></div>
    </div>
  );
}

export default Navigation;
