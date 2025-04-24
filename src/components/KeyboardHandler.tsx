import React, { useEffect, ReactNode } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import { useCourse } from '../contexts/CourseContext';

interface KeyboardHandlerProps {
  children: ReactNode;
}

const KeyboardHandler: React.FC<KeyboardHandlerProps> = ({ children }) => {
  const { repeatLastUtterance } = useSpeech();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const { getCourse } = useCourse();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore keyboard shortcuts when user is typing in form fields or when modifier keys are pressed
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      ) {
        return;
      }

      const { key } = event;
      const courseId = params.courseId;
      const currentPath = location.pathname;

      // Only handle navigation in course viewer
      if (currentPath.includes('/course/') && courseId) {
        const course = getCourse(courseId);
        if (!course) return;

        const urlParams = new URLSearchParams(location.search);
        const currentSlide = parseInt(urlParams.get('slide') || '1', 10);
        const totalSlides = course.slides.length;

        let handled = true;

        switch (key) {
          case 'ArrowRight':
            if (currentSlide < totalSlides) {
              navigate(`/course/${courseId}?slide=${currentSlide + 1}`);
            } else {
              navigate(`/quiz/${courseId}`);
            }
            break;

          case 'ArrowLeft':
            if (currentSlide > 1) {
              navigate(`/course/${courseId}?slide=${currentSlide - 1}`);
            }
            break;

          case 'r':
          case 'R':
            repeatLastUtterance();
            break;

          case '1':
          case '2':
          case '3':
            const slideNum = parseInt(key, 10);
            if (slideNum <= totalSlides) {
              navigate(`/course/${courseId}?slide=${slideNum}`);
            }
            break;

          default:
            handled = false;
            break;
        }

        if (handled) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    };

    // Add the event listener to the document to ensure it catches all keyboard events
    document.addEventListener('keydown', handleKeyDown, true);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
    };
  }, [location, navigate, params, getCourse, repeatLastUtterance]);

  return <>{children}</>;
};

export default KeyboardHandler;