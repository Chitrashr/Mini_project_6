import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import { useCourse } from '../contexts/CourseContext';
import { useUser } from '../contexts/UserContext';
import AccessibleButton from '../components/AccessibleButton';
import { BookOpen, Check } from 'lucide-react';

const CourseSelection: React.FC = () => {
  const { speak } = useSpeech();
  const { courses } = useCourse();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const instructionText = `Course Selection Page. We offer ${courses.length} courses. Use tab to navigate between course options and press Enter to select a course.`;
    speak(instructionText);
  }, [speak, courses.length]);

  const handleCourseSelect = (courseId: string) => {
    speak(`You selected ${courses.find(c => c.id === courseId)?.name}. Loading course content.`);
    navigate(`/course/${courseId}?slide=1`);
  };

  if (!user) {
    navigate('/register');
    return null;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2 text-white">Course Selection</h1>
          <p className="text-xl text-gray-300">
            Welcome, {user.name}. Please select a course to begin.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => {
            const isCompleted = user.completedCourses.includes(course.id);
            
            return (
              <div 
                key={course.id}
                className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-[1.02]"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-800/20 rounded-full">
                      <BookOpen className="text-purple-400" size={24} />
                    </div>
                    {isCompleted && (
                      <div className="bg-green-800/20 p-2 rounded-full">
                        <Check className="text-green-400" size={16} />
                      </div>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2 text-white">{course.name}</h2>
                  <p className="text-gray-400 mb-6">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <span>{course.slides.length} slides</span>
                    <span>{isCompleted ? 'Completed' : 'Not completed'}</span>
                  </div>
                  
                  <AccessibleButton
                    onClick={() => handleCourseSelect(course.id)}
                    ariaLabel={`Start ${course.name} course`}
                    className="w-full justify-center"
                  >
                    {isCompleted ? 'Review Course' : 'Start Course'}
                  </AccessibleButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;