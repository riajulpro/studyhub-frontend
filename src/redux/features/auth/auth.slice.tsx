import { IUser } from "@/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TAuthState = {
  user: IUser | null;
};
// Define initial state
const initialState: TAuthState = {
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logout(state, action) {
      return { user: null };
    },

    // Add more reducers as needed
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
