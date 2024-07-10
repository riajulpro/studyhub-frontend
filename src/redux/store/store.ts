import { configureStore } from "@reduxjs/toolkit";

import { api } from "../api/appSlice";
import authReducer from "../features/auth/auth.slice";

// Configure store
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
