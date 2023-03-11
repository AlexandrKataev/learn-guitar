import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'app/store';

export type noteValue = 'All' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

interface Note {
  value: noteValue;
  string: 1 | 2 | 3 | 4 | 5 | 6;
  fret: 1 | 2 | 3 | 4 | 5 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
  status: boolean;
}

// Define the initial state using that type
const initialState: Note = { value: 'A', string: 1, fret: 1, status: true };

export const noteSelectorSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    enable: (state, action: PayloadAction<noteValue>) => {
      state.value = action.payload;
    },
    disable: (state) => {
      state.value = 'A';
    },
  },
});

export const { enable } = noteSelectorSlice.actions;

export const selectCount = (state: RootState) => state.notes.value;

export default noteSelectorSlice.reducer;
