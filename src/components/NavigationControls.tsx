import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AccessibleButton from './AccessibleButton';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  courseId: string;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  courseId
}) => {
  const navigate = useNavigate();

  const goToPreviousSlide = () => {
    if (currentSlide > 1) {
      navigate(`/course/${courseId}?slide=${currentSlide - 1}`);
    }
  };

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      navigate(`/course/${courseId}?slide=${currentSlide + 1}`);
    } else {
      navigate(`/quiz/${courseId}`);
    }
  };

  return (
    <div className="flex justify-between items-center w-full max-w-3xl mx-auto mt-8 px-4">
      <AccessibleButton
        onClick={goToPreviousSlide}
        ariaLabel="Go to previous slide"
        disabled={currentSlide === 1}
        className="flex items-center gap-2"
      >
        <ChevronLeft size={20} />
        <span>Previous</span>
      </AccessibleButton>
      
      <div className="text-center" aria-live="polite">
        <span className="sr-only">Current slide</span>
        <span className="text-sm text-gray-400">
          Slide {currentSlide} of {totalSlides}
        </span>
      </div>
      
      <AccessibleButton
        onClick={goToNextSlide}
        ariaLabel={currentSlide === totalSlides ? "Go to quiz" : "Go to next slide"}
        className="flex items-center gap-2"
      >
        <span>{currentSlide === totalSlides ? "Go to Quiz" : "Next"}</span>
        <ChevronRight size={20} />
      </AccessibleButton>
    </div>
  );
};

export default NavigationControls;