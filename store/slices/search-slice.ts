import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  value: string
}

const initialState: State = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'searchSlicer',
  initialState,
  reducers: {
    setSearchValueSlice: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSearchValueSlice } = searchSlice.actions

export default searchSlice.reducer
