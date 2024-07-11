import { IQuestion } from "@/types/module";
import React from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface IPorps {
  questions: IQuestion[];
  isLessonComplete: boolean;
}

const LessonQuestions: React.FC<IPorps> = ({ questions, isLessonComplete }) => {
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
              onValueChange={(e) => console.log(options)}
              className="mt-2 flex flex-col gap-2"
            >
              {options.map((opt, i) => (
                <Label
                  key={i + "option"}
                  htmlFor={opt}
                  className="flex cursor-pointer items-center space-x-3 rounded-md border border-input bg-background px-4 py-2 hover:bg-muted w-[350px]"
                >
                  <RadioGroupItem id={opt} value={opt} className="cr-only" />

                  <span className="text-sm font-medium">{opt}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonQuestions;
