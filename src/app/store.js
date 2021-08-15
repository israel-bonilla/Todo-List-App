import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});