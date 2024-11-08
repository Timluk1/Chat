import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'features/auth'
import { authApi } from 'features/auth'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
