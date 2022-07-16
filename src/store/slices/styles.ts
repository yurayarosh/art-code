import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IStyle, StylessState } from '../types/styles'
import { fetchStyles } from './stylesActions'

const initialState: StylessState = {
  isLoading: false,
  styles: [],
}

export const brandsSlice = createSlice({
  name: 'styles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStyles.pending.type]: state => {
      state.isLoading = true
    },
    [fetchStyles.fulfilled.type]: (state, action: PayloadAction<IStyle[]>) => {
      state.isLoading = false
      state.styles = action.payload
    },
    [fetchStyles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default brandsSlice.reducer
