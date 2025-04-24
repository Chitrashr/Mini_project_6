import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import { useUser } from '../contexts/UserContext';
import { useCourse } from '../contexts/CourseContext';
import AccessibleButton from '../components/AccessibleButton';
import { Download, Home } from 'lucide-react';

const Certificate: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { speak } = useSpeech();
  const { user } = useUser();
  const { getCourse } = useCourse();
  const navigate = useNavigate();
  const certificateRef = useRef<HTMLDivElement>(null);

  const course = courseId ? getCourse(courseId) : undefined;

  useEffect(() => {
    if (!user) {
      speak("User information not found. Redirecting to registration.");
      navigate('/register');
      return;
    }

    if (!course) {
      speak("Course not found. Redirecting to course selection.");
      navigate('/courses');
      return;
    }

    if (!user.completedCourses.includes(courseId || '')) {
      speak("You haven't completed this course yet. Redirecting to course page.");
      navigate(`/course/${courseId}?slide=1`);
      return;
    }

    speak(`Certificate for ${course.name}. Congratulations ${user.name} on completing the ${course.name} course. This certificate is presented on ${new Date().toLocaleDateString()}.`);
  }, [user, course, courseId, navigate, speak]);

  const generatePDF = () => {
    speak("Generating certificate PDF. This might take a moment.");
    // In a real implementation, this would generate and download a PDF
    speak("Certificate downloaded successfully.");
  };

  if (!user || !course) return null;

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div 
          ref={certificateRef}
          className="bg-gray-900 rounded-lg p-8 border-4 border-purple-600 shadow-lg mb-8 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-pattern"></div>
          </div>
          
          {/* Certificate seal */}
          <div className="absolute top-8 right-8 w-24 h-24 rounded-full border-2 border-purple-400 flex items-center justify-center bg-purple-900/20">
            <span className="text-purple-400 text-xs text-center font-mono">VISION SKILLS CERTIFIED</span>
          </div>

          <div className="relative text-center py-8">
            <h1 className="text-3xl font-bold text-white mb-2">Certificate of Completion</h1>
            <p className="text-gray-400 mb-8">This certificate is awarded to</p>
            
            <h2 className="text-4xl font-bold text-purple-400 mb-6 font-serif">{user.name}</h2>
            
            <p className="text-gray-300 mb-6">
              for successfully completing the course
            </p>
            
            <h3 className="text-2xl font-bold text-white mb-8 font-serif">{course.name}</h3>
            
            <p className="text-gray-400 mb-12">
              Demonstrating proficiency in the skills and knowledge required.
            </p>
            
            <div className="flex justify-between items-center max-w-lg mx-auto">
              <div>
                <div className="w-32 border-b border-gray-500 mb-2"></div>
                <p className="text-sm text-gray-500">Date: {today}</p>
              </div>
              
              <div>
                <div className="w-32 border-b border-gray-500 mb-2"></div>
                <p className="text-sm text-gray-500">VisionSkills Director</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AccessibleButton
            onClick={generatePDF}
            ariaLabel="Download certificate as PDF"
            className="flex items-center gap-2"
          >
            <Download size={18} />
            <span>Download Certificate</span>
          </AccessibleButton>
          
          <AccessibleButton
            onClick={() => navigate('/courses')}
            ariaLabel="Return to course selection"
            className="bg-gray-800 hover:bg-gray-700 flex items-center gap-2"
          >
            <Home size={18} />
            <span>Back to Courses</span>
          </AccessibleButton>
        </div>
      </div>
    </div>
  );
};

export default Certificate;