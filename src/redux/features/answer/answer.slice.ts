import { IQuestion } from "@/types/module";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAnswer extends IQuestion {
  answer: string;
}

export type ILessonAnswer = {
  lesson: string;
  answers: IAnswer[];
};

const initialState: ILessonAnswer = {
  lesson: "",
  answers: [],
};

const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    setLesson(state, action: PayloadAction<string>) {
      state.lesson = action.payload;
    },
    addOrUpdateAnswer(state, action: PayloadAction<IAnswer>) {
      const index = state.answers.findIndex(
        (answer) => answer._id === action.payload._id
      );
      if (index !== -1) {
        state.answers[index] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
    resetQuiz(state) {
      state.lesson = "";
      state.answers = [];
    },
  },
});

// Export the actions
export const { setLesson, addOrUpdateAnswer, resetQuiz } = answerSlice.actions;

// Export the reducer
export default answerSlice.reducer;
