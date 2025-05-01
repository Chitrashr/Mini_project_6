import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useCourse } from '../contexts/CourseContext';
import { useSpeech } from '../contexts/SpeechContext';
import SlideContent from '../components/SlideContent';
import NavigationControls from '../components/NavigationControls';
import AccessibleButton from '../components/AccessibleButton';
import { Home, BookOpen } from 'lucide-react';

const CourseViewer: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { getCourse } = useCourse();
  const { speak } = useSpeech();

  const course = courseId ? getCourse(courseId) : undefined;

  const initialSlide = (() => {
    const slideParam = searchParams.get('slide');
    const parsed = slideParam ? parseInt(slideParam, 10) : 1;
    return isNaN(parsed) || parsed < 1 ? 1 : parsed;
  })();

  const slideParam = searchParams.get('slide');
  const currentIndex = slideParam ? parseInt(slideParam, 10) - 1 : 0;


  useEffect(() => {
    if (!course) {
      speak('Course not found. Redirecting to course list.');
      navigate('/courses');
      return;
    }
  
    if (currentIndex < 0 || currentIndex >= course.slides.length) {
      speak('Slide not found. Redirecting to the first slide.');
      setSearchParams({ slide: '1' });
    } else {
      const currentSlide = course.slides[currentIndex];
      if (currentSlide) {
        const fullText = `${currentSlide.title}. ${currentSlide.content}`;
        speak(fullText);
      }
    }
  }, [course, currentIndex, navigate, setSearchParams, speak]);
  
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!course) return;
  
      if (e.key === 'ArrowRight') {
        if (currentIndex + 1 < course.slides.length) {
          setSearchParams({ slide: String(currentIndex + 2) });
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex - 1 >= 0) {
          setSearchParams({ slide: String(currentIndex) });
        }
      } else if (e.key === 'r' || e.key === 'R') {
        const currentSlide = course.slides[currentIndex];
        if (currentSlide) {
          const fullText = `${currentSlide.title}. ${currentSlide.content}`;
          speak(fullText);
        }
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [course, currentIndex, setSearchParams, speak]);
  

  const handleNavigate = (newIndex: number) => {
    if (!course) return;
    if (newIndex >= 0 && newIndex < course.slides.length) {
      setSearchParams({ slide: String(newIndex + 1) });
    }
  };

  if (!course) return null;

  const slide = course.slides[currentIndex];
  const totalSlides = course.slides.length;

  return (
    <div className="min-h-screen py-12 px-4">
      <header className="max-w-4xl mx-auto mb-8 flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <BookOpen className="text-purple-400" />
            <h1 className="text-xl font-semibold text-white">{course.name}</h1>
          </div>
          <h2 className="text-lg text-gray-300 mt-1">
            Slide {currentIndex + 1} of {totalSlides}
          </h2>
        </div>
        <AccessibleButton
          onClick={() => navigate('/courses')}
          ariaLabel="Return to course selection"
          className="bg-transparent border border-gray-700 hover:bg-gray-800 px-4 py-2"
        >
          <Home size={18} className="mr-2" />
          <span>Courses</span>
        </AccessibleButton>
      </header>

      {/* Hidden live region for screen readers */}
      <div aria-live="polite" className="sr-only">
        {slide.title} - {slide.content}
      </div>

      <SlideContent slide={slide} />

      <NavigationControls
        currentSlide={currentIndex + 1}
        totalSlides={totalSlides}
        courseId={courseId!}
        onNavigate={(slideNumber) => handleNavigate(slideNumber - 1)}
      />

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Keyboard shortcuts: Arrow keys to navigate, R to repeat audio, 1-9 to jump to slides</p>
        <p className="mt-1">Currently viewing: Slide {currentIndex + 1} of {totalSlides}</p>
      </div>
    </div>
  );
};

export default CourseViewer;
