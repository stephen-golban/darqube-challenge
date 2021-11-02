import { INews } from '@typings/news'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  initialNews: INews[]
  searched: INews[]
  bookmarks: number[]
  news: INews[]
}

const initialState: State = {
  initialNews: [],
  news: [],
  bookmarks: [],
  searched: [],
}

export const newsSlice = createSlice({
  name: 'newsSlicer',
  initialState,
  reducers: {
    setNewsSlice: (state: State, action: PayloadAction<INews[]>) => {
      state.news = action.payload
    },
    setInitialNewsSlice: (state: State, action: PayloadAction<INews[]>) => {
      state.initialNews = action.payload
    },
    setBookMarkSlice: (state: State, action: PayloadAction<number>) => {
      state.bookmarks = [...state.bookmarks, action.payload]
    },
    unsetBookMarkSlice: (state: State, action: PayloadAction<number>) => {
      state.bookmarks = [...state.bookmarks.filter((item) => item !== action.payload)]
    },
    setSearchedNewsSlice: (state: State, action: PayloadAction<string>) => {
      state.searched = state.initialNews.filter((item) => item.headline.indexOf(action.payload) === 1)
    },
  },
})

export const { setNewsSlice, setBookMarkSlice, unsetBookMarkSlice, setSearchedNewsSlice, setInitialNewsSlice } =
  newsSlice.actions

export default newsSlice.reducer
