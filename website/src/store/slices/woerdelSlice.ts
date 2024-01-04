import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
}

export const woerdelSlice = createSlice({
  name: 'woerdel',
  initialState,

  reducers: {
    setIndex: (state: any, action: PayloadAction<number>) => {
      state.index = action.payload
    },
  },
})

export const { setIndex } = woerdelSlice.actions

export const getIndex = (state: any): number => state.index

export default woerdelSlice.reducer
