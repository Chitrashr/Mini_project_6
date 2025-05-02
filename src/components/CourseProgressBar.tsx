import React from 'react';

interface CourseProgressBarProps {
  current: number;
  total: number;
}

const CourseProgressBar: React.FC<CourseProgressBarProps> = ({ current, total }) => {
  const progressPercentage = Math.round((current / total) * 100);

  return (
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mt-2 mb-4">
      <div
        className="h-full bg-purple-500 transition-all duration-300"
        style={{ width: `${progressPercentage}%` }}
        aria-valuenow={progressPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      ></div>
    </div>
  );
};

export default CourseProgressBar;
