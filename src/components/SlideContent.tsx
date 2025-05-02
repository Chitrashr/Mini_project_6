import React, { useEffect } from 'react';
import { useSpeech } from '../contexts/SpeechContext';
import { Slide } from '../contexts/CourseContext';

interface SlideContentProps {
  slide: Slide;
  autoRead?: boolean;
}

const SlideContent: React.FC<SlideContentProps> = ({ slide, autoRead = true }) => {
  const { speak } = useSpeech();

  useEffect(() => {
    if (autoRead) {
      const textToRead = `${slide.title}. ${slide.content}`;

      // Delay before reading to avoid clipping the start
      const timeoutId = setTimeout(() => {
        speak(textToRead);
      }, 300); // 300ms delay

      return () => clearTimeout(timeoutId); // Cleanup on unmount
    }
  }, [slide, speak, autoRead]);

  return (
    <div className="bg-gray-900 rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">{slide.title}</h1>

      {/* Scrollable content container */}
      <div className="text-lg text-gray-300 leading-relaxed max-h-[400px] overflow-y-auto pr-2">
        {slide.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default SlideContent;
