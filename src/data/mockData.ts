import { Course, Quiz } from '../contexts/CourseContext';

export const mockCourses: Course[] = [
  {
    id: 'spoken-english',
    name: 'Spoken English',
    description: 'Learn to speak English fluently with confidence in professional settings.',
    slides: [
      {
        id: 1,
        title: 'Introduction to Spoken English',
        content: 'Welcome to the Spoken English course. In this course, you will learn how to speak English fluently and confidently in professional settings. We will cover basic greetings, introductions, and common phrases used in everyday conversations. Press the right arrow key to continue to the next slide.'
      },
      {
        id: 2,
        title: 'Basic Greetings and Introductions',
        content: 'In this slide, we will learn basic greetings and introductions in English. Common greetings include "Hello", "Good morning", "Good afternoon", and "Good evening". When introducing yourself, you can say "My name is..." or "I am...". It\'s also polite to ask "How are you?" after greeting someone.'
      },
      {
        id: 3,
        title: 'Professional Communication',
        content: 'This slide covers professional communication in English. In a professional setting, it\'s important to speak clearly and confidently. Use formal language such as "Good morning, it\'s a pleasure to meet you" instead of casual expressions. When ending a conversation, you can say "It was nice talking to you" or "I look forward to speaking with you again".'
      }
    ]
  },
  {
    id: 'business-strategy',
    name: 'Business Strategy',
    description: 'Learn fundamental business strategies for entrepreneurs and professionals.',
    slides: [
      {
        id: 1,
        title: 'Introduction to Business Strategy',
        content: 'Welcome to the Business Strategy course. In this course, you will learn fundamental business strategies that can help you as an entrepreneur or professional. We will cover market analysis, competitive positioning, and business planning. Press the right arrow key to continue to the next slide.'
      },
      {
        id: 2,
        title: 'Market Analysis',
        content: 'This slide covers market analysis. Market analysis involves studying the dynamics of the market, including customer needs, market size, and growth potential. Understanding your target market is crucial for developing effective business strategies. Key aspects include demographic analysis, psychographic profiling, and identifying market trends.'
      },
      {
        id: 3,
        title: 'Competitive Positioning',
        content: 'In this slide, we will discuss competitive positioning. Competitive positioning refers to how your business differentiates itself from competitors. This involves identifying your unique value proposition and communicating it effectively to your target audience. Strategies include cost leadership, differentiation, and niche targeting.'
      }
    ]
  }
];

export const mockQuizzes: Quiz[] = [
  {
    courseId: 'spoken-english',
    questions: [
      {
        id: 1,
        text: 'Which of the following is NOT a common greeting in English?',
        options: [
          'Good morning',
          'Hello there',
          'Pleasant sunrise',
          'Nice to meet you'
        ],
        correctOption: 2
      },
      {
        id: 2,
        text: 'What is a formal way to introduce yourself in a professional setting?',
        options: [
          'Hey, I\'m John',
          'My name is John Smith and I work for ABC Company',
          'John here',
          'What\'s up, I\'m John'
        ],
        correctOption: 1
      },
      {
        id: 3,
        text: 'When ending a professional conversation, which phrase is most appropriate?',
        options: [
          'See ya later',
          'Gotta run',
          'It was a pleasure speaking with you',
          'Talk to you whenever'
        ],
        correctOption: 2
      }
    ]
  },
  {
    courseId: 'business-strategy',
    questions: [
      {
        id: 1,
        text: 'What is the primary purpose of market analysis?',
        options: [
          'To maximize profits immediately',
          'To understand customer needs and market dynamics',
          'To copy competitors\' strategies',
          'To reduce operational costs'
        ],
        correctOption: 1
      },
      {
        id: 2,
        text: 'Which of the following is a valid competitive positioning strategy?',
        options: [
          'Avoiding competition altogether',
          'Always offering the lowest prices',
          'Differentiation based on unique value',
          'Copying successful competitors exactly'
        ],
        correctOption: 2
      },
      {
        id: 3,
        text: 'What is a key component of effective business planning?',
        options: [
          'Focusing only on short-term goals',
          'Setting unrealistic targets to motivate employees',
          'Detailed financial projections and resource allocation',
          'Avoiding documentation to maintain flexibility'
        ],
        correctOption: 2
      }
    ]
  }
];