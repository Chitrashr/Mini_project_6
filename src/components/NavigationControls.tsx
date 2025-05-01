import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AccessibleButton from './AccessibleButton';

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  courseId: string;
  moduleId?: string;
  onNavigate?: (slideNumber: number) => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  courseId,
  moduleId = 'module-1',
  onNavigate
}) => {
  const navigate = useNavigate();

  const goToPreviousSlide = () => {
    const prevSlide = currentSlide - 1;
    if (prevSlide >= 1) {
      if (onNavigate) {
        onNavigate(prevSlide);
      } else {
        navigate(`/course/${courseId}?module=${moduleId}&slide=${prevSlide}`);
      }
    }
  };

  const goToNextSlide = () => {
    const nextSlide = currentSlide + 1;
    if (nextSlide <= totalSlides) {
      if (onNavigate) {
        onNavigate(nextSlide);
      } else {
        navigate(`/course/${courseId}?module=${moduleId}&slide=${nextSlide}`);
      }
    } else {
      navigate(`/quiz/${courseId}?module=${moduleId}`);
    }
  };

  return (
    <div className="flex justify-between items-center w-full max-w-3xl mx-auto mt-8 px-4">
      <AccessibleButton
        onClick={goToPreviousSlide}
        ariaLabel="Go to previous slide"
        disabled={currentSlide === 1}
        className="flex items-center gap-2 disabled:opacity-50"
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