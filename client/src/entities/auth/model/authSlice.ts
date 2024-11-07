import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    accessToken: string
}

const initialState: AuthState = {
    accessToken: localStorage.getItem("acccessToken") || ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setAccessToken: (state, action: PayloadAction<string>) => {
        state.accessToken = action.payload;
    }
  },
})

export const { setAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;