import React, { FC } from 'react';
import { NotesList, SelectedNote } from './ui';
import styles from './NoteSelector.module.scss';

import { useAppSelector, useAppDispatch } from 'app/hooks';

export const NoteSelector: FC = () => {
  const selectedNote = useAppSelector((state) => state.notes.value);

  return (
    <div className={styles.container}>
      <SelectedNote name={selectedNote} />
      <NotesList />
    </div>
  );
};
