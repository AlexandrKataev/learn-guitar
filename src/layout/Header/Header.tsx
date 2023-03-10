import { FC } from 'react';
import { Button } from '../../shared/ui/Button/Button';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Button name={'Ноты'} />
      <Button name={'Интервалы'} />
      <Button name={'Аккорды'} />
      <Button name={'Гаммы'} />
    </div>
  );
};
