/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchRandomMessage = createAsyncThunk('/message/random', async () => {
  const response = await fetch('http://localhost:3000/api/v1/message/random');
  if (response.ok) return response.json();
  return response.statusText;
});
const initialState = { message: '' };
const messageSlice = createSlice({
  name: 'message',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRandomMessage.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});
export { fetchRandomMessage };
export default messageSlice.reducer;
