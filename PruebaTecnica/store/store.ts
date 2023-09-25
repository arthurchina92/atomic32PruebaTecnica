import {configureStore} from '@reduxjs/toolkit';
import userInformationSlice from './slices/userInformationSlice';

export const store = configureStore({
  reducer: {
    userInformation: userInformationSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
