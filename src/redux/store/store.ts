import { configureStore } from "@reduxjs/toolkit";

import { api } from "../api/appSlice";

// Configure store
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
