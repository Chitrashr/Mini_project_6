import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  age: number;
  education: string;
  completedCourses: string[];
}

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  isRegistered: boolean;
  completeQuiz: (courseId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  const setUser = (userData: User) => {
    setUserState({ ...userData, completedCourses: [] });
  };

  const isRegistered = user !== null;

  const completeQuiz = (courseId: string) => {
    if (user && !user.completedCourses.includes(courseId)) {
      setUserState({
        ...user,
        completedCourses: [...user.completedCourses, courseId]
      });
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, isRegistered, completeQuiz }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};