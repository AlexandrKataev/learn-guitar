import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'app/store';

export enum noteValue {
  'A' = 1,
  'A#' = 2,
  'B' = 3,
  'C' = 4,
  'C#' = 5,
  'D' = 6,
  'D#' = 7,
  'E' = 8,
  'F' = 9,
  'F#' = 10,
  'G' = 11,
  'G#' = 12,
}

export type stringValue = 1 | 2 | 3 | 4 | 5 | 6 | null;

interface Note {
  value: noteValue;
  string: 1 | 2 | 3 | 4 | 5 | 6 | null;
  fret: 1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | null;
  status: boolean;
}

// Define the initial state using that type
const initialState: Note = { value: noteValue.C, string: 1, fret: 1, status: true };

export const noteSelectorSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNote: (state, action: PayloadAction<noteValue>) => {
      state.value = action.payload;
    },
  },
});

export const { setNote } = noteSelectorSlice.actions;
export default noteSelectorSlice.reducer;

export const selectNote = (state: RootState) => state.noteFilter.value;
