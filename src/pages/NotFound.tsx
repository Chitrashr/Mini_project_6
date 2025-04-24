import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import AccessibleButton from '../components/AccessibleButton';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const { speak } = useSpeech();
  const navigate = useNavigate();

  useEffect(() => {
    speak("Page not found. The page you are looking for does not exist. You can return to the home page.");
  }, [speak]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-white">Page Not Found</h2>
        <p className="text-xl text-gray-400 max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <AccessibleButton
          onClick={() => navigate('/')}
          ariaLabel="Return to home page"
          className="flex items-center gap-2 mx-auto"
        >
          <Home size={18} />
          <span>Return to Home</span>
        </AccessibleButton>
      </div>
    </div>
  );
};

export default NotFound;