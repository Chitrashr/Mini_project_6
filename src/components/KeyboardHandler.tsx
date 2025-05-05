
//implemented R on every slide
import { useRef, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import { useCourse } from '../contexts/CourseContext';

interface KeyboardHandlerProps {
  children: ReactNode;
}

const KeyboardHandler: React.FC<KeyboardHandlerProps> = ({ children }) => {
  
  const {repeatLastUtterance} = useSpeech();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const { getCourse } = useCourse();

  const params = useParams();
  const isPausedRef = useRef(false);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore shortcuts when typing or with special keys (but NOT shift alone)
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey
      ) {
        return;
      }

      // Add this block for pause/resume
        
      if (event.key === 'p') {
        if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
          window.speechSynthesis.pause();
          isPausedRef.current = true;
          
          return;
        } else if (window.speechSynthesis.paused && isPausedRef.current) {
          window.speechSynthesis.resume();
          
          isPausedRef.current = false;
          return;
        }
      }
          
      
      // Handle Shift key to move focus between buttons or inputs
      if (event.key === 'Shift') {
        event.preventDefault();

        const focusableElements = Array.from(document.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )).filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);

        if (focusableElements.length === 0) return;//new
        const index = focusableElements.indexOf(document.activeElement as HTMLElement);
        const nextIndex = (index + 1) % focusableElements.length;
        focusableElements[nextIndex].focus();

        return;
      }

      const { key } = event;
      console.log("Key Pressed:", key);
      const pathMatch = currentPath.match(/^\/course\/([^/]+)/);
      const courseId = pathMatch ? pathMatch[1] : undefined;

      if (key === 'r' || key === 'R') {
        repeatLastUtterance();
        event.preventDefault();
        event.stopPropagation();
        return;
      }

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

          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':             
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

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [location, navigate, params, getCourse, repeatLastUtterance]);


  return <>{children}</>;
};

export default KeyboardHandler;






