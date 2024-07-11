import { configureStore } from "@reduxjs/toolkit";

import { api } from "../api/appSlice";
import answerReducer from "../features/answer/answer.slice";
import authReducer from "../features/auth/auth.slice";

// Configure store
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    answer: answerReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
