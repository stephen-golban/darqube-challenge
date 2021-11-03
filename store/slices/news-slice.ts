import { INews } from '@typings/news'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  bookmarks: number[]
  news: INews[]
}

const initialState: State = {
  news: [],
  bookmarks: [],
}

export const newsSlice = createSlice({
  name: 'newsSlicer',
  initialState,
  reducers: {
    setNewsSlice: (state: State, action: PayloadAction<INews[]>) => {
      state.news = action.payload
    },
    setBookMarkSlice: (state: State, action: PayloadAction<number>) => {
      state.bookmarks = [...state.bookmarks, action.payload]
    },
    unsetBookMarkSlice: (state: State, action: PayloadAction<number>) => {
      state.bookmarks = [...state.bookmarks.filter((item) => item !== action.payload)]
    },
  },
})

export const { setNewsSlice, setBookMarkSlice, unsetBookMarkSlice } = newsSlice.actions

export default newsSlice.reducer
