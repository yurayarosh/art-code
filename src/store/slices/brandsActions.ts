import { createAsyncThunk } from '@reduxjs/toolkit'
import { IBrand } from '../types/brands'

export const fetchBrands = createAsyncThunk('brands/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await fetch('https://autobooking.com/api/test/v1/search/brands_terms')

    if (!response.ok)
      return thunkAPI.rejectWithValue(
        `[ERROR]: Status: ${response.status}, Status text: ${response.statusText}`
      )

    const data: { data: IBrand[] } = await response.json()

    return data.data
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message)
  }
})
