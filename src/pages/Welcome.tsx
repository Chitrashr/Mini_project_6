import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import { useUser } from '../contexts/UserContext';
import AccessibleButton from '../components/AccessibleButton';
import { Headphones } from 'lucide-react';

const Welcome: React.FC = () => {
  const { speak } = useSpeech();
  const { isRegistered } = useUser();
  const navigate = useNavigate();

  const welcomeText = `Welcome to Vision Skills, a vocational training platform designed for visually impaired individuals. 
  This application features full keyboard navigation and voice synthesis. 
  Use the arrow keys to navigate between slides. Press numbers 1 through 3 to jump to specific slides. 
  Press R to repeat the current audio. To get started, please register or continue to courses if you're already registered.`;

  useEffect(() => {
    // Automatically read welcome text when component mounts
    speak(welcomeText);
  }, [speak]);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
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

      switch (key) {
        case 'Enter':
        case 'ArrowRight':
          handleContinue();
          break;

        case 'ArrowLeft':
          // You can change this to go back or say something
          speak("You are on the first screen. Please press Enter to continue.");
          break;

        case 'r':
        case 'R':
          speak(welcomeText);
          break;

        case '1':
        case '2':
        case '3':
          // Optional: Navigate directly to a slide
          const slideNum = parseInt(key, 10);
          navigate(`/course/spoken-english?slide=${slideNum}`);
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRegistered, navigate, speak]);


  const handleContinue = () => {
    if (isRegistered) {
      navigate('/courses');
    } else {
      navigate('/register');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-purple-800 rounded-full mb-6">
          <Headphones size={48} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to VisionSkills</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A vocational training platform designed for visually impaired individuals
        </p>
      </div>

      <div className="bg-gray-900 rounded-lg p-8 shadow-lg max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Navigation Instructions</h2>
        <ul className="space-y-3 text-gray-300 mb-6">
          <li className="flex items-start">
            <span className="inline-block bg-gray-800 rounded-md px-2 py-1 mr-2 text-purple-400">→</span>
            <span>Use right arrow key to move to the next slide</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block bg-gray-800 rounded-md px-2 py-1 mr-2 text-purple-400">←</span>
            <span>Use left arrow key to go back to the previous slide</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block bg-gray-800 rounded-md px-2 py-1 mr-2 text-purple-400">1-3</span>
            <span>Press number keys to jump to specific slides</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block bg-gray-800 rounded-md px-2 py-1 mr-2 text-purple-400">R</span>
            <span>Press R key to repeat the current audio</span>
          </li>
        </ul>
      </div>

      <AccessibleButton
        onClick={handleContinue}
        ariaLabel={isRegistered ? "Continue to courses" : "Register to get started"}
        className="text-lg px-8 py-4"
      >
        {isRegistered ? "Continue to Courses" : "Register to Get Started"}
      </AccessibleButton>
    </div>
  );
};

export default Welcome;