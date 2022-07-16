import { configureStore } from '@reduxjs/toolkit'
import services from './slices/services'
import brands from './slices/brands'
import styles from './slices/styles'

export const store = configureStore({
  reducer: {
    services,
    brands,
    styles,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
