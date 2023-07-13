import styles from './control-input.module.scss';

/* eslint-disable-next-line */
export interface ControlInputProps {
  label: string;
  labelHtmlFor: string;
  icon?: string;
  iconClass?: string;
  children: JSX.Element | JSX.Element[];
}

export function ControlInput({ label, labelHtmlFor, children, icon, iconClass }: ControlInputProps) {
  return (
    <div className="flex flex-row justify-start items-center">
      <div className={styles.icon}>
        <div className={styles[`${iconClass}`]}>
          <img src={icon} alt=""></img>
        </div>
      </div>
      <div className="flex flex-col ml-5">
        <label className="text-stone-400 pointer-events-none" htmlFor={labelHtmlFor}>{label}</label>
        {children}
      </div>
    </div>
  );
}

export default ControlInput;
