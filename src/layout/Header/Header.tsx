import { FC } from 'react';
import { Button } from '../../shared/ui/Button/Button';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Button name={'Ноты'} path={'/'} />
      <Button name={'Интервалы'} path={'/interval'} />
      <Button name={'Аккорды'} path={'/chord'} />
      <Button name={'Гаммы'} path={'/scale'} />
    </div>
  );
};
