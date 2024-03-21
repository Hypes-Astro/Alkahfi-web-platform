import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSholat = createAsyncThunk("fetchSholat", async () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const response = await fetch(
    `https://api.myquran.com/v2/sholat/jadwal/0501/${formattedDate}`
  );
  return response.json();
});

const sholatSlice = createSlice({
  name: "sholat",
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSholat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSholat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchSholat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default sholatSlice.reducer;
