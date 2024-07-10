
interface StepProps {
  stepNumber: number;
  stepTitle: string;
  stepDescription: string;
  isLeft: boolean;
}

const TreeNode: React.FC<StepProps> = ({ stepNumber, stepTitle, stepDescription, isLeft }) => {
  return (
    <div className={`flex items-center my-8 btn-style ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center">
          {stepNumber}
        </div>
      </div>
      <div className={`w-32 h-2 bg-teal-500 ${isLeft ? 'ml-4' : 'mr-4'}`}></div>
      <div className={`text-center ${isLeft ? 'ml-4' : 'mr-4'}`}>
        <h3 className="text-xl font-bold text-primaryTxt">{stepTitle}</h3>
        <p className="text-gray-600">{stepDescription}</p>
      </div>
    </div>
  );
};

export default TreeNode;
