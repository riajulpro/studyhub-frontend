import { setLesson } from "@/redux/features/answer/answer.slice";
import { useGetUserLessonProgressQuery } from "@/redux/features/module/module.api";
import { useAppDispatch } from "@/redux/hook";
import { ILesson, IQuestion } from "@/types/module";
import { CircleCheck, Ellipsis, Lock } from "lucide-react";
import React from "react";
import { AccordionContent } from "../ui/accordion";

interface IArgument {
  questions: IQuestion[];
  isComplete: boolean;
}

interface IPorps {
  lessons: ILesson[];
  onClick: ({ questions, isComplete }: IArgument) => any;
}

const LessonButtons: React.FC<IPorps> = ({ lessons, onClick }) => {
  const dispatch = useAppDispatch();
  const { data: lessonData = { data: [] } } =
    useGetUserLessonProgressQuery(undefined);

  const isComplete = (_id: string) => {
    return lessonData.data.includes(_id as never);
  };

  const isLock = (_id: string, index: number) => {
    const prevIndex = index ? index - 1 : 0;

    const prevLesson = lessons[prevIndex];
    const cur = lessons[index];

    const boolean = true;

    // go ahead if the previous lesson is complete =>
    if (isComplete(prevLesson._id)) {
      return false;
    }

    return !lessonData?.data.length || !lessonData?.data.includes(_id as never);
  };

  return (
    <AccordionContent>
      {lessons.map(({ _id, name, questions }, i) => (
        <button
          key={_id + "lesson"}
          onClick={() => {
            dispatch(setLesson(_id));
            onClick({ questions, isComplete: isComplete(_id) });
          }}
          className="w-full p-[10px] border-b-[1px] border-borderColor text-start hover:bg-borderColor/20 flex items-center justify-start gap-[10px]"
          disabled={i !== 0 && isLock(_id, i)}
        >
          {i !== 0 && isLock(_id, i) ? (
            <Lock className="w-[20px]" />
          ) : isComplete(_id) ? (
            <CircleCheck className="w-[20px]" />
          ) : (
            <Ellipsis className="w-[20px]" />
          )}

          {name}
        </button>
      ))}
    </AccordionContent>
  );
};

export default LessonButtons;
