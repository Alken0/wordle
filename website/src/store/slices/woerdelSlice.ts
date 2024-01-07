import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentIndex: 0,
}

export const woerdelSlice = createSlice({
  name: 'woerdel',
  initialState,
  reducers: {
    setCurrentIndex: (state: any, action: PayloadAction<number>) => {
      state.currentIndex = action.payload
    },
  },
})

export const { setCurrentIndex } = woerdelSlice.actions

export const getCurrentIndex = (state: any): number => state.woerdel.currentIndex

export default woerdelSlice.reducer
