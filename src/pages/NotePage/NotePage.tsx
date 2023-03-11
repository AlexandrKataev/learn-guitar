import { NoteSelector } from 'features/NoteSelector';
import React, { FC } from 'react';
import styles from './NotePage.module.scss';

export const NotePage: FC = () => {
  return (
    <div>
      <NoteSelector />
    </div>
  );
};
