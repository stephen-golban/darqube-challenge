import { configureStore } from '@reduxjs/toolkit'
import { testSlice } from './slices'

const store = configureStore({
  reducer: {
    test: testSlice,
  },
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
