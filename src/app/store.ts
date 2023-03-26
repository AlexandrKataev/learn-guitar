import { configureStore } from '@reduxjs/toolkit';

import noteFilter from 'features/NoteSelector/model/NoteSelectorSlice';

export const store = configureStore({
  reducer: {
    noteFilter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
