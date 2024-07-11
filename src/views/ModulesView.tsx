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
import Loader from "@/utils/Loader";
import { useRouter } from "next/navigation";
import { useState } from "react";
const ModuleView = () => {
  const { data, isLoading } = useGetAllModulesQuery(undefined);
  const router = useRouter();

  const [isLessonComplete, setIsLessonComplete] = useState<boolean>(false);

  const [questions, setQuestions] = useState<IQuestion[] | []>(
    data?.data[0]?.lessons[0]?.questions || []
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex h-[100vh]  layout_container p-[20px]">
      <div className="shadow-md rounded-[15px] w-full flex py-[20px]">
        <div className="w-1/4 p-4 border-r border-border h-full overflow-auto smoothBar">
          <Accordion type="single" collapsible>
            {data?.data?.map(({ name, _id, lessons }, i) => (
              <AccordionItem value={`module-${_id}`} key={i + "module"}>
                <AccordionTrigger
                  onClick={() => router.push(`/modules?moduleid=${_id || ""}`)}
                >
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
        <div className="flex-1 p-4 h-full overflow-auto smoothBar">
          <LessonQuestions
            isLessonComplete={isLessonComplete}
            questions={questions}
          />
        </div>
      </div>
    </div>
  );
};
export default ModuleView;
