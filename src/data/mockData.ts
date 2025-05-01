import { Course, Quiz } from '../contexts/CourseContext';

export const mockCourses: Course[] = [
  {
    id: 'call-center',
    name: 'Basic Call Center Communication',
    description: 'Master call center skills: handling customers, resolving conflicts, and using professional communication tools.',
    slides: [
      {
        id: 1,
        title: 'Lesson 1.1: Understanding the Call Center Environment',
        content: `A call center is a dedicated place where a company handles a large number of phone calls. 
There are inbound, outbound, and blended types. Agents need to answer calls, identify needs, provide information, resolve issues, and document each interaction. Technologies include IVR systems, call recording, and screen reader-friendly desktops.`
      },
      {
        id: 2,
        title: 'Lesson 1.2: The Power of Verbal Communication',
        content: `Communication includes: 
- Clarity and Pronunciation,
- Tone of Voice (empathetic, professional, enthusiastic),
- Active Listening (verbal affirmations like “I understand”),
- Pacing and Pauses (don't rush, give space for response).`
      },
      {
        id: 3,
        title: 'Lesson 1.3: Handling Different Types of Callers',
        content: `Adapt your style based on caller needs. 
- Angry callers: stay calm, let them vent, apologize, solve. 
- Confused callers: speak slowly, clarify, be patient. 
- Talkative callers: politely guide back to the issue. 
Always show empathy and patience.`
      },
      {
        id: 4,
        title: 'Lesson 2.1: Answering and Greeting Calls Professionally',
        content: `Start calls with a standard greeting and a positive attitude. 
- Identify caller and their purpose.
- Smile through your tone and be courteous.`
      },
      {
        id: 5,
        title: 'Lesson 2.2: Gathering Information and Asking Effective Questions',
        content: `Use:
- Open-ended questions (“Tell me more…”),
- Closed-ended questions (“Is your number 123?”),
- Clarifying and probing questions (“What steps have you tried?”)`
      },
      {
        id: 6,
        title: 'Lesson 2.3: Providing Solutions and Closing Calls Effectively',
        content: `Clearly explain solutions. Confirm understanding. 
Summarize the call and thank the customer with a professional closing like: “Thank you for calling. Have a good day.”`
      },
      {
        id: 7,
        title: 'Lesson 3.1: Mastering De-escalation and Conflict Resolution',
        content: `Go deeper in calming frustrated callers:
- Identify root cause
- Use empathy and calming language
- Offer alternatives and creative solutions
- Set professional boundaries where needed`
      },
      {
        id: 8,
        title: 'Lesson 3.2: Building Rapport and Loyalty',
        content: `Use personalized and trust-building communication.
- Anticipate needs, provide proactive support
- Make every experience positive and memorable`
      },
      {
        id: 9,
        title: 'Lesson 3.3: Communicating with Diverse Callers',
        content: `Adapt your style for cultural, technical, or accessibility differences.
Handle complex inquiries step-by-step.
Know when to ask for help and stay calm under pressure.`
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
        content: 'Welcome to the Business Strategy course. We will cover market analysis, competitive positioning, and business planning.'
      },
      {
        id: 2,
        title: 'Market Analysis',
        content: 'Study customer needs, market size, and growth potential. Includes demographic analysis, psychographic profiling, and trends.'
      },
      {
        id: 3,
        title: 'Competitive Positioning',
        content: 'Differentiate your business from competitors using cost leadership, differentiation, and niche strategies.'
      }
    ]
  }
];

export const mockQuizzes: Quiz[] = [
  {
    courseId: 'call-center',
    questions: [
      {
        id: 1,
        text: 'What is the primary function of an inbound call center?',
        options: ['Handle calls made to customers', 'Handle calls received from customers', 'Manage both inbound and outbound calls', 'None of the above'],
        correctOption: 1
      },
      {
        id: 2,
        text: 'Which of the following is NOT a responsibility of a call center agent?',
        options: ['Answering calls promptly', 'Resolving customer issues', 'Ignoring caller emotions', 'Documenting interactions accurately'],
        correctOption: 2
      },
      {
        id: 3,
        text: 'What is the best way to handle an angry caller?',
        options: ['Interrupt them immediately', 'Stay calm, acknowledge their feelings, and focus on solutions', 'Argue back to defend the company', 'Transfer the call without explanation'],
        correctOption: 1
      },
      {
        id: 4,
        text: 'Why is tone of voice important in call center communication?',
        options: ['It conveys the agent’s attitude', 'It helps in building rapport', 'It ensures professionalism', 'All of the above'],
        correctOption: 3
      },
      {
        id: 5,
        text: 'What should you do if a caller seems confused?',
        options: ['Speak quickly to save time', 'Break down information into smaller steps', 'Assume they will understand eventually', 'Avoid asking clarifying questions'],
        correctOption: 1
      },
      {
        id: 6,
        text: 'Which technology is commonly used in call centers for audio-guided menus?',
        options: ['IVR (Interactive Voice Response)', 'CRM', 'GPS', 'None of the above'],
        correctOption: 0
      },
      {
        id: 7,
        text: 'What does active listening involve?',
        options: ['Only hearing the words spoken', 'Paying attention to tone and emotions', 'Interrupting to give quick solutions', 'Ignoring the caller’s concerns'],
        correctOption: 1
      },
      {
        id: 8,
        text: 'What is a blended call center?',
        options: ['Handles only inbound calls', 'Handles only outbound calls', 'Handles both inbound and outbound calls', 'Does not handle phone calls'],
        correctOption: 2
      },
      {
        id: 9,
        text: 'What is the first step in answering a call professionally?',
        options: ['Immediately ask for the caller’s problem', 'Use a standard company greeting', 'Stay silent until the caller speaks', 'None of the above'],
        correctOption: 1
      },
      {
        id: 10,
        text: 'Which type of question encourages detailed responses?',
        options: ['Closed-ended question', 'Open-ended question', 'Yes/No question', 'Leading question'],
        correctOption: 1
      }
    ]
  },
  {
    courseId: 'business-strategy',
    questions: [
      {
        id: 1,
        text: 'What is the primary purpose of market analysis?',
        options: ['To maximize profits immediately', 'To understand customer needs and market dynamics', 'To copy competitors\' strategies', 'To reduce operational costs'],
        correctOption: 1
      },
      {
        id: 2,
        text: 'Which of the following is a valid competitive positioning strategy?',
        options: ['Avoiding competition altogether', 'Always offering the lowest prices', 'Differentiation based on unique value', 'Copying successful competitors exactly'],
        correctOption: 2
      },
      {
        id: 3,
        text: 'What is a key component of effective business planning?',
        options: ['Focusing only on short-term goals', 'Setting unrealistic targets', 'Detailed financial projections and resource allocation', 'Avoiding documentation'],
        correctOption: 2
      }
    ]
  }
];
