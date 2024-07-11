export interface IQuestion {
  questionText: string;
  options: string[];
  correctAnswer: string;
  _id: string;
}

export interface ILesson {
  _id: string;
  name: string;
  questions: IQuestion[];
}

export interface IModule {
  _id: string;
  name: string;
  lessons: ILesson[];
}

export interface ICourseResponse {
  success: boolean;
  message: string;
  data: IModule[];
}
