import { IUser } from "@/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
type TAuthState = {
  user: IUser | null;
  loading: boolean;
};
// Define initial state
const initialState: TAuthState = {
  user: null,
  loading: true,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.loading = false;
    },
    logout(state, action) {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      return { user: null, loading: false };
    },

    // Add more reducers as needed
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
