import {
  addOrUpdateAnswer,
  IAnswer,
  resetQuiz,
} from "@/redux/features/answer/answer.slice";
import { useUpdateLessonMutation } from "@/redux/features/module/module.api";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IQuestion } from "@/types/module";
import { useSearchParams } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface IPorps {
  questions: IQuestion[];
  isLessonComplete: boolean;
}

const LessonQuestions: React.FC<IPorps> = ({ questions, isLessonComplete }) => {
  const dispatch = useAppDispatch();
  const { answers, lesson } = useAppSelector((state) => state.answer);
  const [isSubmited, setIsSubmit] = useState(false);
  const [updateLesson] = useUpdateLessonMutation();

  const params = useSearchParams();
  const moduleId = params.get("moduleid") || "";

  const [score, setScore] = useState(0);
  const radio = useRef();

  const handleSubmitAnswwer = (payload: IAnswer) => {
    if (isLessonComplete) {
      return;
    }
    dispatch(addOrUpdateAnswer(payload));
  };

  const checkAnswers = async () => {
    let Quizscore = 0;

    answers.forEach((question) => {
      if (question.answer === question.correctAnswer) {
        Quizscore++;
      }
    });
    setScore(Quizscore);
    setIsSubmit(true);
    if (Quizscore < questions.length) {
      return toast.message(
        `Your final score is ${Quizscore} out of ${answers.length}`,
        {
          description: "Please try again to continue",
        }
      );
    }

    try {
      await updateLesson({ lessonId: lesson, moduleId: moduleId });
      dispatch(resetQuiz());
      setScore(0);
      setIsSubmit(false);
      toast.success(
        "Congratulation you completed this lession and unlocked a new mission"
      );
    } catch {
      toast.error("Something went wrong please reload this page");
    }
  };

  return (
    <div>
      {questions.map(({ _id, options, questionText, correctAnswer }, idx) => (
        <div key={_id + "question"}>
          <h2 className="text-lg font-semibold mb-4">Question</h2>
          <h2 className="text-[20px] font-[600] mb-4">{questionText}</h2>
          <div className="space-y-4 mb-8">
            <RadioGroup
              defaultValue=""
              value={isLessonComplete ? correctAnswer : undefined}
              // aria-label="Quiz answers"
              className="mt-2 flex flex-col gap-2"
            >
              {options.map((opt, i) => (
                <Label
                  key={i + "option"}
                  htmlFor={opt}
                  className={`flex cursor-pointer items-center space-x-3 rounded-md border border-input bg-background px-4 py-2 hover:bg-muted w-[350px] ${
                    isSubmited
                      ? opt !== correctAnswer
                        ? "!border-red-400"
                        : "!border-green-400"
                      : ""
                  }`}
                >
                  <RadioGroupItem
                    id={opt}
                    value={opt}
                    disabled={isSubmited}
                    className="cr-only"
                    onClick={() =>
                      handleSubmitAnswwer({
                        _id,
                        options,
                        questionText,
                        correctAnswer,
                        answer: opt,
                      })
                    }
                  />

                  <span className="text-sm font-medium">{opt}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}

      {isSubmited ? (
        <div className="grid gap-2 my-[15px]">
          <Label>Your Score</Label>
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold">{score}</span>
            <span className="text-muted-foreground">/ {questions.length}</span>
          </div>
        </div>
      ) : (
        ""
      )}
      {isSubmited && score !== questions.length ? (
        <Button
          className="w-full"
          variant={"destructive"}
          onClick={() => {
            // dispatch(resetQuiz());
            setIsSubmit(false);
            setScore(0);
          }}
        >
          Try again
        </Button>
      ) : (
        <Button
          className="w-full"
          onClick={checkAnswers}
          disabled={answers.length !== questions.length || !questions.length}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default LessonQuestions;
