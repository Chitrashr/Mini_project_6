import React, { useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useCourse } from '../contexts/CourseContext';
import { useSpeech } from '../contexts/SpeechContext';
import SlideContent from '../components/SlideContent';
import NavigationControls from '../components/NavigationControls';
import AccessibleButton from '../components/AccessibleButton';
import { Home, BookOpen } from 'lucide-react';

const CourseViewer: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [searchParams] = useSearchParams();
  const slideParam = searchParams.get('slide');
  const currentSlide = slideParam ? parseInt(slideParam, 10) : 1;
  
  const { getCourse } = useCourse();
  const { speak } = useSpeech();
  const navigate = useNavigate();

  const course = courseId ? getCourse(courseId) : undefined;
  const slide = course?.slides.find(s => s.id === currentSlide);

  useEffect(() => {
    if (!course) {
      speak("Course not found. Redirecting to course selection.");
      navigate('/courses');
      return;
    }

    if (!slide) {
      speak("Slide not found. Redirecting to first slide.");
      navigate(`/course/${courseId}?slide=1`);
      return;
    }
  }, [course, slide, courseId, navigate, speak]);

  if (!course || !slide) {
    return null;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <header className="max-w-4xl mx-auto mb-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpen className="text-purple-400" />
          <h1 className="text-xl font-semibold text-white">{course.name}</h1>
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

      <SlideContent slide={slide} />
      
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={course.slides.length}
        courseId={courseId}
      />

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Keyboard shortcuts: Arrow keys to navigate, R to repeat audio, 1-3 to jump to slides</p>
      </div>
    </div>
  );
};

export default CourseViewer;