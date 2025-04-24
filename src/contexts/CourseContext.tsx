import React, { createContext, useContext, ReactNode } from 'react';
import { mockCourses, mockQuizzes } from '../data/mockData';

export interface Slide {
  id: number;
  title: string;
  content: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  slides: Slide[];
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: string[];
  correctOption: number;
}

export interface Quiz {
  courseId: string;
  questions: QuizQuestion[];
}

interface CourseContextType {
  courses: Course[];
  getCourse: (courseId: string) => Course | undefined;
  getQuiz: (courseId: string) => Quiz | undefined;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const courses = mockCourses;

  const getCourse = (courseId: string) => {
    return courses.find(course => course.id === courseId);
  };

  const getQuiz = (courseId: string) => {
    return mockQuizzes.find(quiz => quiz.courseId === courseId);
  };

  return (
    <CourseContext.Provider value={{ courses, getCourse, getQuiz }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = (): CourseContextType => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};