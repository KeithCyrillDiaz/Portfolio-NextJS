import React from 'react';

type LoadingSpinnerProps = {
    className?: string
}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({className}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-defaultGreen"></div>
    </div>
  );
};