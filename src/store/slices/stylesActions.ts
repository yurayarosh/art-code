import { createAsyncThunk } from '@reduxjs/toolkit'
import { IStyle } from '../types/styles'

export const fetchStyles = createAsyncThunk('styles/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await fetch('https://autobooking.com/api/test/v1/search/styles')

    if (!response.ok)
      return thunkAPI.rejectWithValue(
        `[ERROR]: Status: ${response.status}, Status text: ${response.statusText}`
      )

    const data: { data: IStyle[] } = await response.json()

    return data.data
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message)
  }
})
