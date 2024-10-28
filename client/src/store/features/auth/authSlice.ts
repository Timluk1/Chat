import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: true,
    accessToken: localStorage.getItem("accessToken") || null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
})

export default authSlice.reducer;