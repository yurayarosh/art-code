import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IService, ServicesState } from '../types/services'
import { fetchServices } from './servicesActions'

const initialState: ServicesState = {
  isLoading: false,
  services: [],
}

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchServices.pending.type]: state => {
      state.isLoading = true
    },
    [fetchServices.fulfilled.type]: (state, action: PayloadAction<IService[]>) => {
      state.isLoading = false
      state.services = action.payload
    },
    [fetchServices.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default servicesSlice.reducer
