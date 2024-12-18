import React from 'react';

const steps = [
  { id: 1, title: 'Preliminary', status: true },
  { id: 2, title: 'Your Details', status: true },
  { id: 3, title: 'KYC', status: true },
  { id: 4, title: 'Parties', status: false, approx: 'Approx 5 Min' },
  { id: 5, title: 'Claim', status: false, approx: 'Approx 5 Min' },
  { id: 6, title: 'Review', status: false, approx: 'Approx 5 Min' },
  { id: 7, title: 'Payment', status: false, approx: 'Approx 5 Min' },
];

const ProgressBar = () => {
  return (
    <div className="flex justify-between items-center w-full px-8 py-4 mb-5">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col pr-2 relative w-full">
            <ProgressBarItem totalSteps={7} title={step.title} id={step.id} status={step.status}/>    
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;


const ProgressBarItem = ({
    id,
    title,
    status,
    totalSteps,
  }: {
    id: number;
    title: string;
    status: boolean;
    totalSteps: number;
  }) => {
    return (
      <>
        <div className="flex flex-col w-full">
          {/* Step Title */}
          <div className="flex gap-2 text-lg py-2">
            <h1 className="font-bold text-xl">0{id}</h1>
            <p className="font-semibold text-md text-gray-500">{title}</p>
          </div>
  
          {/* Circle and Line Container */}
          <div className="flex items-center w-full gap-2">
            {/* Left Line */}
            {id !== 1 && (
              <div
                className={`h-1 flex-1 ${
                  status ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            )}
  
            {/* Circular Progress Icon */}
            <div
              className={`z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                status
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "border-gray-300 text-gray-400"
              }`}
            >
              {status && <span>&#10003;</span>}
            </div>
  
            {/* Right Line */}
            {id !== totalSteps && (
              <div
                className={`h-1 flex-1 ${
                  status ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        </div>
      </>
    );
  };
  