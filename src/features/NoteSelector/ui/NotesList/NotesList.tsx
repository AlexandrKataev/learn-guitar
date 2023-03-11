import { useAppDispatch } from 'app/hooks';
import { enable, noteValue } from 'features/NoteSelector/model/NoteSelectorSlice';
import React, { FC } from 'react';
import styles from './NotesList.module.scss';

const NotesListArray: noteValue[] = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

export const NotesList: FC = () => {
  const dispatch = useAppDispatch();

  const onClickNote = (note: noteValue) => {
    dispatch(enable(note));
  };

  return (
    <div className={styles.container}>
      {NotesListArray.map((note) => {
        return (
          <div
            className={styles.note}
            onClick={() => {
              onClickNote(note);
            }}>
            {note}
          </div>
        );
      })}
    </div>
  );
};
