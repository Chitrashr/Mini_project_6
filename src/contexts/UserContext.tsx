import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CourseProgress {
  [courseId: string]: {
    lastLesson: number;
    completed: boolean;
  };
}

interface User {
  name: string;
  phone: string;
  age: number;
  education: string;
  completedCourses: string[];
  progress: CourseProgress;
}

interface UserContextType {
  user: User | null;
  setUser: (user: Omit<User, 'completedCourses' | 'progress'>) => void;
  isRegistered: boolean;
  completeQuiz: (courseId: string) => void;
  updateProgress: (courseId: string, lessonIndex: number) => void;
  loginUser: (name: string, phone: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [usersData, setUsersData] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('usersData');
    if (storedUsers) {
      setUsersData(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('usersData', JSON.stringify(usersData));
  }, [usersData]);

  const setUser = (userData: Omit<User, 'completedCourses' | 'progress'>) => {
    const newUser: User = {
      ...userData,
      completedCourses: [],
      progress: {},
    };
    setUserState(newUser);
    setUsersData((prev) => [...prev, newUser]);
  };

  const loginUser = (name: string, phone: string): boolean => {
    const foundUser = usersData.find(
      (u) => u.name.toLowerCase() === name.toLowerCase() && u.phone === phone
    );
    if (foundUser) {
      setUserState(foundUser);
      return true;
    }
    return false;
  };

  const completeQuiz = (courseId: string) => {
    if (user && !user.completedCourses.includes(courseId)) {
      const updatedUser: User = {
        ...user,
        completedCourses: [...user.completedCourses, courseId],
        progress: {
          ...user.progress,
          [courseId]: {
            ...user.progress[courseId],
            completed: true,
          },
        },
      };
      setUserState(updatedUser);
      setUsersData((prev) =>
        prev.map((u) =>
          u.name === updatedUser.name && u.phone === updatedUser.phone ? updatedUser : u
        )
      );
    }
  };

  const updateProgress = (courseId: string, lessonIndex: number) => {
    if (!user) return;

    const updatedUser: User = {
      ...user,
      progress: {
        ...user.progress,
        [courseId]: {
          lastLesson: lessonIndex,
          completed: user.progress[courseId]?.completed || false,
        },
      },
    };

    setUserState(updatedUser);
    setUsersData((prev) =>
      prev.map((u) =>
        u.name === updatedUser.name && u.phone === updatedUser.phone ? updatedUser : u
      )
    );
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, isRegistered: !!user, completeQuiz, updateProgress, loginUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};