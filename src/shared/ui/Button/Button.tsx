import { FC } from 'react';
import styles from './Button.module.scss';

import cx from 'classnames';
import { Link, useMatch } from 'react-router-dom';

interface ButtonProps {
  name: string;
  path: string;
}

export const Button: FC<ButtonProps> = ({ name, path }) => {
  const isActive = useMatch(path);

  return (
    <Link to={path}>
      <div className={cx(styles.container, { [styles.disable]: !isActive })}>{name}</div>
    </Link>
  );
};
