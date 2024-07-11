"use client";
import LessonButtons from "@/components/Modules/LessonButtons";
import LessonQuestions from "@/components/Modules/LessonQuestions";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useGetAllModulesQuery } from "@/redux/features/module/module.api";
import { IQuestion } from "@/types/module";
import { useState } from "react";
const ModuleView = () => {
  const { data, isLoading } = useGetAllModulesQuery(undefined);

  const [isLessonComplete, setIsLessonComplete] = useState<boolean>(false);

  const [questions, setQuestions] = useState<IQuestion[] | []>(
    data?.data[0]?.lessons[0]?.questions || []
  );

  if (isLoading) {
    return <>loasind</>;
  }

  return (
    <div className="flex h-[80vh]  layout_container overflow-auto p-[20px]">
      <div className="shadow-md rounded-[15px] w-full flex">
        <div className="w-1/4 p-4 border-r border-border">
          <Accordion type="single" collapsible>
            {data?.data?.map(({ name, _id, lessons }, i) => (
              <AccordionItem value={`module-${_id}`} key={i + "module"}>
                <AccordionTrigger>
                  <h2 className="text-lg font-semibold">Module name: {name}</h2>
                </AccordionTrigger>
                <LessonButtons
                  lessons={lessons}
                  onClick={({ questions, isComplete }) => {
                    setQuestions(questions);
                    setIsLessonComplete(isComplete);
                  }}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex-1 p-4">
          <LessonQuestions
            isLessonComplete={isLessonComplete}
            questions={questions}
          />

          <div className="flex justify-between">
            <button className="w-32 h-12 border-2 border-white rounded-lg">
              Previous
            </button>
            <button className="w-32 h-12 border-2 border-white rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModuleView;
