import { noteValue } from 'features/NoteSelector/model/NoteSelectorSlice';
import React, { FC } from 'react';
import styles from './SelectedNote.module.scss';

interface SelectedNoteProps {
  name: noteValue;
}

export const SelectedNote: FC<SelectedNoteProps> = (props) => {
  return <div className={styles.container}>{props.name}</div>;
};
