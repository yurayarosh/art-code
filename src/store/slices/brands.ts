import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BrandsState, IBrand } from '../types/brands'
import { fetchBrands } from './brandsActions'

const initialState: BrandsState = {
  isLoading: false,
  brands: [],
}

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBrands.pending.type]: state => {
      state.isLoading = true
    },
    [fetchBrands.fulfilled.type]: (state, action: PayloadAction<IBrand[]>) => {
      state.isLoading = false
      state.brands = action.payload
    },
    [fetchBrands.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default brandsSlice.reducer
