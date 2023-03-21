import { configureStore } from '@reduxjs/toolkit'
import globalsReducer from "@store/slices/globalsSlice"

export const store = configureStore({
  reducer: {
    globals: globalsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch