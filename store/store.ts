import { configureStore } from '@reduxjs/toolkit'
import { newsSlice } from './slices'

const store = configureStore({
  reducer: {
    news: newsSlice,
  },
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
