import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface NoteState {
  note: string;
  octave: number | null;
}

const initialState: NoteState = {
  note: 'C',
  octave: null,
};

export const noteFilterSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
  },
});

export const { setNote } = noteFilterSlice.actions;
export default noteFilterSlice.reducer;
