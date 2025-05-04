import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCourse } from '../contexts/CourseContext';
import { useUser } from '../contexts/UserContext';
import { useSpeech } from '../contexts/SpeechContext';
import AccessibleButton from '../components/AccessibleButton';
import { BookOpen, Check } from 'lucide-react';

const CourseSelection: React.FC = () => {
  const { courses } = useCourse();
  const { user } = useUser();
  const { speak } = useSpeech();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/register');
    } else {
      const instructions = `Welcome ${user.name}. You are on the Course Selection page. We offer ${courses.length} courses. Use Shift to explore, and Enter to select.`;
      speak(instructions);
    }
  }, [courses.length, navigate, speak, user]);

  const handleSelect = (courseId: string) => {
    const selected = courses.find(c => c.id === courseId);
    speak(`You selected ${selected?.name}. Starting course now.`);
    navigate(`/course/${courseId}?slide=1`);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-2">Course Selection</h1>
          {user && (
            <p className="text-xl text-gray-300">
              Hello {user.name}, please select a course to begin learning.
            </p>
          )}
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map(course => {
            const isCompleted = user?.completedCourses.includes(course.id) ?? false;
            const ariaDescription = `${course.name}. ${course.description}. This course has ${course.slides.length} slides. ${isCompleted ? 'You have completed this course.' : 'You have not completed this course yet.'}`;

            return (
              <div
                key={course.id}
                role="region"
                aria-label={ariaDescription}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-3 bg-purple-700/20 rounded-full">
                      <BookOpen className="text-purple-400" size={24} />
                    </div>
                    {isCompleted && (
                      <div className="bg-green-700/20 p-2 rounded-full">
                        <Check className="text-green-400" size={16} />
                      </div>
                    )}
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-2">{course.name}</h2>
                  <p className="text-gray-400 mb-4">{course.description}</p>

                  <div className="text-sm text-gray-500 mb-6 flex justify-between">
                    <span>{course.slides.length} slides</span>
                    <span>{isCompleted ? 'Completed' : 'Not completed'}</span>
                  </div>

                  <AccessibleButton
                    onClick={() => handleSelect(course.id)}
                    className="w-full justify-center"
                    ariaLabel={`${course.name}. ${course.description}. ${isCompleted ? 'Review course' : 'Start course'}`}
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
