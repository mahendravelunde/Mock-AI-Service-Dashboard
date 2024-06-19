
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAIData } from '../../services/aiService';
import { AIData } from '../../types/AIData';

interface AIDataState {
  data: AIData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: AIDataState = {
  data: null,
  status: 'idle',
};

export const fetchAIDataAsync = createAsyncThunk(
  'aiData/fetchAIData',
  async () => {
    const response = await fetchAIData();
    return response as AIData;
  }
);

const aiDataSlice = createSlice({
  name: 'aiData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAIDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAIDataAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAIDataAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default aiDataSlice.reducer;
