import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentIndex: 0,
    isGameWon: false,
}

export const woerdelSlice = createSlice({
    name: 'woerdel',
    initialState,
    reducers: {
        setCurrentIndex: (state: any, action: PayloadAction<number>) => {
            state.currentIndex = action.payload
        },
        setIsGameWon: (state: any, action: PayloadAction<boolean>) => {
            state.isGameWon = action.payload
        },
    },
})

export const {
    setCurrentIndex,
    setIsGameWon
} = woerdelSlice.actions

export const getCurrentIndex = (state: any): number => state.woerdel.currentIndex
export const getIsGameWon = (state: any): boolean => state.woerdel.isGameWon

export default woerdelSlice.reducer
