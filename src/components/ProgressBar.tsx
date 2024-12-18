import React from 'react';

const steps = [
  { id: 1, title: 'Preliminary', status: true, current: false },
  { id: 2, title: 'Your Details', status: true, current: false },
  { id: 3, title: 'KYC', status: true, current: false },
  { id: 4, title: 'Parties', status: false, current: true },
  { id: 5, title: 'Claim', status: false, current: false },
  { id: 6, title: 'Review', status: false, current: false },
  { id: 7, title: 'Payment', status: false, current: false },
];

const ProgressBar: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full px-8 py-4 mb-5">
      {steps.map((step, index) => {
        const nextCurrent = steps[index + 1]?.current || false; // Next step's current
        const nextStatus = steps[index + 1]?.status || false; // Next step's status

        return (
          <div key={step.id} className="flex flex-col pr-2 relative w-full">
            <ProgressBarItem
              totalSteps={steps.length}
              title={step.title}
              id={step.id}
              status={step.status}
              current={step.current}
              nextCurrent={nextCurrent}
              nextStatus={nextStatus}
            />
          </div>
        );
      })}
    </div>
  );
};

const ProgressBarItem: React.FC<{
  id: number;
  title: string;
  status: boolean;
  nextStatus: boolean;
  totalSteps: number;
  current: boolean;
  nextCurrent?: boolean;
}> = ({ id, title, status, totalSteps, current, nextCurrent, nextStatus }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Step Title */}
      <div className={`flex gap-2 text-lg py-2 ${status || current ? "opacity-100" : "opacity-40"}`}>
        <h1 className="font-bold text-xl">0{id}</h1>
        <p className="font-semibold text-md text-gray-500">{title}</p>
      </div>

      {/* Circle and Line Container */}
      <div className="flex items-center w-full gap-2">
        {/* Circular Step Icon */}
        <div
          className={`z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 ${
            current
              ? 'border-dotted border-blue-500 text-blue-500 border-4' // Dotted border for current step
              : status
              ? 'bg-blue-500 border-blue-500 text-white'
              : 'border-gray-300 text-gray-400'
          }`}
        >
          {status && <span>&#10003;</span>}
        </div>

        {/* Line Connector */}
        {id !== totalSteps && (
          <div
            className={`h-1 flex-1 ${
              nextCurrent
                ? 'border-4 border-blue-500 border-dotted ' // Dotted line before current step
                : status && nextStatus
                ? 'bg-blue-500' // Solid blue line for completed steps
                : 'bg-gray-300' // Default gray line
            }`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
