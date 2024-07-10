import TreeNode from "./TreeNode";


const stepsData = [
  { number: 1, title: 'Determination and mindset', description: 'Step 1', left:true },
  { number: 2, title: 'Signup/ Signin', description: 'Step 2', left:false },
  { number: 3, title: 'Modules', description: 'Step 3', left:true },
  { number: 4, title: 'Lessions', description: 'Step 4', left:false },
  { number: 5, title: 'Exams', description: 'Step 5', left:true },
  { number: 6, title: 'Success', description: 'Step 6', left:false },
];

const Tree = () => {
  return (
    <div className="max-w-2xl mx-auto py-[40px]">
      <h5 className="font-semibold text-[34px] leading-[150%] text-center underline text-coralMat">Plan to Grow</h5>
      {stepsData.map((step) => (
        <TreeNode
          key={step.number}
          stepNumber={step.number}
          stepTitle={step.title}
          stepDescription={step.description}
          isLeft={step.left}
        />
      ))}
    </div>
  );
};

export default Tree;
