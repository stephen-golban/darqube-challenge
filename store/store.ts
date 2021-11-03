import newsSlice from './slices/news-slice'
import searchSlice from './slices/search-slice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    news: newsSlice,
    search: searchSlice,
  },
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
