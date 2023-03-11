import React, { FC } from 'react';
import styles from './SelectedNote.module.scss';

interface SelectedNoteProps {
  name: string;
}

export const SelectedNote: FC<SelectedNoteProps> = (props) => {
  return <div className={styles.container}>{props.name}</div>;
};
