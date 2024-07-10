import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  defaultPracticeId: "",
  email: "",
  patientId: "",
  titleCode: 0,
  _id: "",
};

export interface IPatient {
  defaultPracticeId: string;
  email: string;
  patientId: string;
  titleCode: number;
  _id: string;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IPatient>) {
      return action.payload;
    },
    resetUser(state) {
      return initialState;
    },
  },
});

export const {
  setUser,

  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
