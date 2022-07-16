import { createAsyncThunk } from '@reduxjs/toolkit'
import { IService } from '../types/services'

export const fetchServices = createAsyncThunk('services/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await fetch('https://autobooking.com/api/test/v1/search/terms')

    if (!response.ok)
      return thunkAPI.rejectWithValue(
        `[ERROR]: Status: ${response.status}, Status text: ${response.statusText}`
      )

    const data: { data: IService[] } = await response.json()

    return data.data
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message)
  }
})
