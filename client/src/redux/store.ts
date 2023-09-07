import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/authSlice';
import postsReducer from './features/postsSlice';
import friendsReducer from './features/friendsSlice';
import registerReducer from './features/registerSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedPostsReducer = persistReducer(persistConfig, postsReducer);
const persistedFriendsReducer = persistReducer(persistConfig, friendsReducer);

export const store = configureStore({
  reducer: {
    authReducer: persistedAuthReducer,
    postsReducer: persistedPostsReducer,
    friendsReducer: persistedFriendsReducer,
    registerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
