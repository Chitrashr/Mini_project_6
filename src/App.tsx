import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { SpeechProvider } from './contexts/SpeechContext';
import { UserProvider } from './contexts/UserContext';
import { CourseProvider } from './contexts/CourseContext';
import Welcome from './pages/Welcome';
import Registration from './pages/Registration';
import CourseSelection from './pages/CourseSelection';
import CourseViewer from './pages/CourseViewer';
import Quiz from './pages/Quiz';
import Certificate from './pages/Certificate';
import NotFound from './pages/NotFound';
import KeyboardHandler from './components/KeyboardHandler';

function App() {
  useEffect(() => {
    document.title = 'VisionSkills - Vocational Training for Visually Impaired';
  }, []);

  return (
    <ThemeProvider>
      <SpeechProvider>
        <UserProvider>
          <CourseProvider>
            <div className="min-h-screen bg-gray-950 text-gray-100">
              <KeyboardHandler>
                <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/register" element={<Registration />} />
                  <Route path="/courses" element={<CourseSelection />} />
                  <Route path="/course/:courseId" element={<CourseViewer />} />
                  <Route path="/quiz/:courseId" element={<Quiz />} />
                  <Route path="/certificate/:courseId" element={<Certificate />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
              </KeyboardHandler>
            </div>
          </CourseProvider>
        </UserProvider>
      </SpeechProvider>
    </ThemeProvider>
  );
}

export default App;