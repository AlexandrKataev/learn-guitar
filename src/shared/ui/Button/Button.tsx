import { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  name: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return <div className={styles.container}>{props.name}</div>;
};
