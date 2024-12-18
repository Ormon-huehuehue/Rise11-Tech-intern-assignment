import React from 'react';

const steps = [
  { id: 1, title: 'Preliminary', status: 'completed' },
  { id: 2, title: 'Your Details', status: 'completed' },
  { id: 3, title: 'KYC', status: 'completed' },
  { id: 4, title: 'Parties', status: 'active', approx: 'Approx 5 Min' },
  { id: 5, title: 'Claim', status: 'upcoming', approx: 'Approx 5 Min' },
  { id: 6, title: 'Review', status: 'upcoming', approx: 'Approx 5 Min' },
  { id: 7, title: 'Payment', status: 'upcoming', approx: 'Approx 5 Min' },
];

const ProgressBar = () => {
  return (
    <div className="flex justify-between items-center w-full px-8 py-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex flex-col items-center relative w-full">
          {/* Step Indicator */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
              step.status === 'completed'
                ? 'bg-blue-500 border-blue-500 text-white'
                : step.status === 'active'
                ? 'border-blue-500 text-blue-500'
                : 'border-gray-300 text-gray-400'
            }`}
          >
            {step.status === 'completed' ? (
              <span className="text-lg font-bold">&#10003;</span>
            ) : (
              <span className="font-bold">{`0${step.id}`}</span>
            )}
          </div>

          {/* Line Connector */}
          {index < steps.length - 1 && (
            <div
              className={`absolute top-4 left-1/2 transform -translate-x-0 h-1 w-full ${
                step.status === 'completed' ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          )}

          {/* Step Title */}
          <div className="text-center mt-2">
            <p
              className={`text-sm ${
                step.status === 'completed' || step.status === 'active'
                  ? 'text-black font-semibold'
                  : 'text-gray-400'
              }`}
            >
              {step.title}
            </p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
