import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  test: false,
}

export const testSlice = createSlice({
  name: 'testSlicer',
  initialState,
  reducers: {
    setTestSlice: (state, action: PayloadAction<boolean>): void => {
      state.test = action.payload
    },
  },
})

export const { setTestSlice } = testSlice.actions

export default testSlice.reducer
