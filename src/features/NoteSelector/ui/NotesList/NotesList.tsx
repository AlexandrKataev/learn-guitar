import { useAppDispatch } from 'app/hooks';
import { noteValue, setNote } from 'features/NoteSelector/model/NoteSelectorSlice';
import React, { FC } from 'react';
import styles from './NotesList.module.scss';

const NotesListArray: noteValue[] = [
  noteValue.A,
  noteValue.B,
  noteValue.C,
  noteValue.D,
  noteValue.E,
  noteValue.F,
  noteValue.G,
];

export const NotesList: FC = () => {
  const dispatch = useAppDispatch();

  const onClickNote = (note: noteValue) => {
    dispatch(setNote(note));
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
