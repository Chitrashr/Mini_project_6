import { Course, Quiz } from '../contexts/CourseContext';

export const mockCourses: Course[] = [
  {
    id: 'call-center',
    name: 'Basic Call Center Communication',
    description: 'All interactions between agents and customers, focused on clear, empathetic, and efficient problem resolution. communication builds rapport and enhances overall customer satisfaction during every contact.',
    slides: [
      {
        id: 1,
        title: 'Module 1 - Lesson 1.1: Understanding the Call Center Environment',
        content: `
        INTODUCTION TO CALL CENTERS:
      
      A call center is a place where trained people, called call center agents, talk to customers over the phone. Customers call for different reasons — they might have questions about a product, need help with a service, or want to make a complaint. A call center agent listens carefully and gives the right information or solution. The main goal of a call center is to provide help quickly and politely so that the customer feels happy and satisfied after the call.
      
      Call centers are very important for companies. They help companies stay connected to their customers without meeting them face-to-face. A good call center can make a big difference to a company's success. If a customer gets good service, they trust the company more and continue to use its products or services. On the other hand, if the customer feels ignored or not helped properly, they may never come back. Therefore, working in a call center is a very important job that needs good communication skills.
      
      
      TYPES OF CALL CENTERS:
      
      There are mainly two types of call centers: inbound and outbound. In an inbound call center, customers call you for help. For example, if someone’s internet is not working, they will call the customer care number. In this case, you receive the call and assist them. In an outbound call center, you are the one who calls the customers. For example, you might call people to remind them about a payment, inform them about a new offer, or conduct a survey. Both types of call centers require clear speaking, patience, and a friendly attitude to handle customers well.
      
      Some companies have mixed call centers, where agents handle both inbound and outbound calls. This means sometimes you will be answering calls, and sometimes you will be making calls. No matter what type of call center it is, the main goal is always the same: to help customers and make sure they are satisfied. Being polite, speaking clearly, and listening patiently are the three most important skills you must have.
      
      
      IMPORTANCE OF CALL CENTERS IN BUSINESS:
      
      A call center is often the heart of customer service for a company. When customers have a problem, their first step is usually to call for help. A friendly and helpful conversation can turn an unhappy customer into a loyal one. That is why companies invest a lot of money and training into call centers. Good communication builds trust, and trust leads to long-term relationships with customers. If the call center experience is good, customers will feel that the company truly cares about them.
      
      Also, call centers help companies collect important information. Every time a customer calls, they give feedback about products, services, or their overall experience. This feedback helps companies improve. By handling calls well, call center agents are not just solving individual problems, but they are also helping the company grow stronger. In this way, a call center is not just a talking service — it is a bridge between the company and its customers.
      
      
      YOUR ROLE AS CALL CENTER AGENT:
      
      When you work in a call center, you represent the company to the customer. You are the company's voice. Since the customer cannot see you, your tone of voice must express friendliness, respect, and professionalism. A positive tone can create a positive experience for the customer. Even if the customer is upset or angry, a calm and kind voice can make them feel better. Always remember to smile while talking — because a smile can be heard through the phone.
      
      Good call center agents are good listeners and good problem-solvers. They stay calm under pressure, speak clearly even in difficult situations, and always focus on helping the customer. It is not just about talking; it is about building a connection through your voice. Your goal is to make sure that every customer feels important, respected, and helped by the end of the call.`
      },
    
      {
        
          id: 2,
          title: 'Lesson 1.2:Roles and Responsibilities of a Call Center Agent',
          content: `
        
        WHO IS A CALL CENTER AGENT?:
        A call center agent is a professional who talks with customers over the phone and helps them with their needs. As a call center agent, your main job is to listen carefully to the customer's question or problem, provide accurate information, and guide them towards a solution. You are not just answering phone calls — you are building trust, solving problems, and representing the company with every word you speak. The way you talk and listen can make the customer feel valued and respected.
        Call center agents must remember that every customer is important, whether the customer is happy or upset. You must be ready to handle all kinds of people with patience and a positive attitude. Being polite, speaking clearly, and staying calm are the basic qualities of a successful call center agent. Good agents do not just focus on solving the problem quickly; they also focus on making the customer feel good during the conversation.
        
        MAIN RESPONSIBILITIES OF A CALL CENTER AGENT:
        The responsibilities of a call center agent can vary depending on the company, but some tasks are common everywhere. First, you must answer calls quickly and politely. Customers do not like waiting too long. Second, you must listen carefully without interrupting. Many times, customers feel better just because someone listened to them. Third, you must speak clearly, using simple English words that are easy to understand. Avoid using technical words unless necessary, and always explain them if you have to use them.
        Another important responsibility is to record important details after each call. You may need to note the customer's complaint, the solution you provided, or any promises made. Good record-keeping helps the company and ensures that customers do not have to repeat their problems in the future. In short, your responsibilities include listening, speaking, solving, recording, and always being respectful and professional.
        
        SKILLS NEEDED TO BECOME A GOOD AGENT:
        To succeed as a call center agent, you need several important skills. One of the most important is patience. Some customers might be confused, upset, or talk slowly. You must give them time to explain without showing frustration. Another essential skill is positive attitude. Even if you have handled many calls in a day, you must treat every customer like they are the first and most important person you are speaking to. Your energy and tone should stay positive throughout the day.
        Problem-solving ability is another skill you must develop. Customers call because they have a problem. Sometimes, you will not have a ready answer. In such cases, you must think calmly, use the resources provided by your company, and find the best solution. Finally, having a good memory helps a lot. You should remember the company's rules, important policies, and common solutions so that you can answer questions quickly and accurately. Regular practice will make you faster and more confident.
        
        A TYPICAL WORKDAY IN A CALL CENTER:
        A normal workday for a call center agent starts with logging into the company’s communication system. Once you are logged in, you start receiving calls. You must answer each call professionally, listen to the customer’s problem, and provide solutions or guidance. After each call, you need to record the important details before taking the next call. Throughout the day, you may also need to attend quick team meetings, training sessions, or consult your supervisor if a customer issue is too complicated.
        You will usually get scheduled breaks during the day to rest your voice and mind. It is important to use these breaks wisely because working in a call center requires a lot of mental energy. By the end of the shift, you should make sure all calls are properly recorded, and all promises made to customers are updated in the system. Every day, you will learn something new by speaking to different kinds of customers. Each call is a new opportunity to improve your communication skills.`
        },
      {
        id: 3,
        title: 'Lesson 1.3: Importance of Good Communication Skills',
        content: ` 
        WHY GOOD COMMMUNICATION IS THE KEY:
      
      In a call center, talking well is the most important thing. It's not just about speaking words – it's about how clearly you send your message and how well you understand what the customer needs. Customers can't see your body language, they can only hear your voice. That's why the words you use, how you sound, and how clear you are become very important. If you talk well, customers will feel like you're listening to them and respecting them.
      
      Good talking means being polite when you speak, being patient when you listen, and giving clear answers. Don't use long, confusing sentences. Instead, use short and simple sentences. Always talk slowly enough so the customer can understand you, but not too slow that it sounds strange. You should also check if the customer understood you by asking easy questions like, "Does that make sense?" or "Would you like me to say it again?"
      
      HOE GOOD TALKING BUILDS TRUST:
      
        When you talk in a good way, customers will trust you and the company you work for. Even if you can't fix their problem right away, talking to them well can make them feel like you hear them and care about them. When customers trust you, they will likely stay with the company for a long time. But if you talk badly – like sounding rude, rushing the call, or giving answers that don't make sense – customers can quickly become unhappy.
      
        Always remember: in a call center, you might be the only person the customer talks to from the company. If you handle the call in a professional way, the customer will have a good feeling about the whole company. Every word you say matters. Being polite and respectful in every call makes the company's relationship with customers stronger and makes the company look good.
      
      ACTIVE LISTENING: THE SCRET TO SUCCESS:
      
        Active listening is a very important part of talking well. It means not just hearing the customer's words, but really understanding what they are trying to say. When a customer is talking, you should give them all your attention. Don't interrupt them. Don't think about what you're going to say next. Just listen. After they finish talking, say the important things back to them in your own words to show you understood. You can say things like, "Let me say that back to you to make sure I got it right."
      
        Active listening makes the customer feel respected and important. Many times, customers just want someone to really understand their problem. If you listen carefully, you'll often find that it's easier to solve the problem because you know all the details. Practicing active listening will make you a better agent and will also help you in other parts of your life.
      
      USING POSITIVE LANGUAGE TO KEEP CUSTOMERS HAPPY:

        Using positive words when talking to customers is very powerful. It can change a bad experience into a good one. Even when you can't give the customer exactly what they want, how you say it can make a big difference. Instead of saying, "I can't do that," you can say, "Let me see what the best thing I can do for you is." Positive words show that you want to help, and customers like that.
      
        Always try not to blame the customer or make them feel like they did something wrong. Even if the problem was their fault, stay polite and focus on finding a solution. End every call in a good way by saying thank you for their time and asking if there's anything else you can help them with. Using positive language not only makes the customer feel better but also makes your workday better.`
      },
      
      {
          id: 4,
          title: 'MODULE 2 - lesson 2.1: Active Listening Skills',
          content: `
        
         ACTIVE LISTENING SKILLS:
        What is Active Listening?
        Active listening is a very important skill for anyone working in a call center. It means truly focusing on what the customer is saying and understanding their needs. It’s not just about hearing their words, but understanding their feelings and responding correctly. Good active listening helps to solve problems faster and make the customer feel heard and valued.
        For example, if a customer calls to complain about a broken product, don’t interrupt them. Instead, listen carefully to their problem. Show that you are paying attention by saying things like “I understand,” “I’m here to help,” or “I hear your concern.” This makes the customer feel like they are important to you.
        
        WHY ACTIVE LISTENING IS IMPORTANT:
        When you listen actively, you avoid misunderstandings. It also helps to keep the customer calm. If the customer feels they are being heard, they are more likely to stay calm and work with you to solve the problem. A simple “I understand” or “I’m sorry to hear that” can help in making the customer feel more comfortable.
        Another important part of active listening is asking the right questions. If a customer is describing a problem, ask follow-up questions to make sure you fully understand what they need. This will show the customer that you care about solving their issue correctly.
        
        TECNIQUES FOR ACTIVE LISTENING:
        There are several techniques to practice active listening. Here are a few simple ones to follow in a call center:
        1. Paraphrase the Customer’s Words:
        When the customer tells you something, repeat it back to them in your own words. For example, if a customer says, “My internet has been down for 2 days,” you could say, “Just to make sure I understand, you’ve been having internet issues for two days. Let’s fix that right away.”
        2. Use Positive Body Language (If In-Person):
        While this lesson is focused on call centers, using positive body language helps when you are speaking to customers in person. Even though the customer can’t see you on the phone, using a friendly tone and smiling while talking can make a big difference in your communication.
        3. Don’t Interrupt:
        It can be tempting to speak before the customer finishes explaining the issue, but avoid interrupting. Let them talk, and then you can respond to what they said.
        
        By following these techniques, you will make the customer feel like you are focused on solving their problem and not just rushing through the call.`
        },
        
        {
          id: 5,
          title: 'Lesson 2.2: Using Clear and Simple Language',
          content: `
        
        WHY SIMPLE LANGUAGE MATTERS:
        Using simple and clear language is crucial in a call center. Many customers may not understand complicated words or technical terms, so it is important to explain things in a way that everyone can understand. Speaking clearly also prevents mistakes and ensures the customer knows what to do.
        For example, instead of saying “We will escalate your case to the technical support team,” you could say “I will send your problem to someone who can fix it for you.” This makes the process sound more friendly and easy to understand.
        
        WHEN TO USE SIMPLE LANGUAGE:
        You should always use simple language in a call center, but it’s especially important when:
        1. Explaining Instructions:
        If you need the customer to do something, explain it clearly. For example, if you ask them to check something on their computer, you could say, “Can you please press the power button on your computer and let me know what happens?”
        2. Describing Problems:
        If the customer has a problem, avoid using technical words that they might not understand. Instead of saying “Your account has been flagged due to security concerns,” you could say, “There is a problem with your account that we need to fix to keep your information safe.”
        By speaking clearly, you make the customer’s experience more positive. It reduces their confusion and makes the call more effective.
        
        HOW TO SPEAK CLEARLY:
        Here are some tips to make sure your language is clear and simple:
        1. Avoid Jargon:
        Don’t use terms or words that the customer may not know. Instead of saying “IP address” or “server issue,” explain the problem in simple terms, like “Your internet is not connecting properly” or “There seems to be a problem with your connection.”
        2. Be Direct and to the Point:
        Don’t add unnecessary details. Stick to the facts. For example, instead of saying “There might be a possibility that your problem is related to a network issue,” just say, “It looks like the network is causing the issue.”
        3. Check for Understanding:
        After explaining something, ask if the customer understands. You can say, “Does that make sense?” or “Let me know if you need more information.” This shows that you care about their understanding.
        
        When you use simple, clear language, you build trust with the customer and make it easier for them to understand what’s going on.`
        },
      
        {
          id: 6,
          title: 'Lesson 2.3: Managing Difficult Conversations',
          content: `
        
        WHY CALL CENTER CONVERSATIONS CAN BE DIFFICULT:
        Not every call will be easy. Sometimes customers will be upset, frustrated, or angry. They may have had a bad experience, or they might be having a tough day. As a call center worker, it’s important to stay calm and handle these difficult situations in the best way possible.
        If a customer is angry, they might shout or complain loudly. It is important to remain calm and show understanding. You should never argue with the customer. Instead, listen carefully to their concerns, acknowledge their feelings, and help find a solution.
        
        HOW TO STAY CALM DURING DIFFICULT CALLS:
        The first step to managing a difficult call is to stay calm yourself. Take a deep breath and remember that the customer’s anger is not personal. They are upset about the situation, not about you. When you stay calm, it helps the customer calm down too.
        Also, be patient. Sometimes, angry customers need to vent. Let them express their feelings, but don’t let them get too aggressive. Keep your voice steady and kind, even if the customer is shouting.
        
        STEPS FOR HANDLING DIFFICULT CALLS:
        Here are some steps to follow when you are dealing with a difficult conversation:
        1. Listen Without Interrupting:
        When the customer is upset, don’t interrupt. Let them say everything they want to say. This makes them feel heard and understood.
        2. Empathize with the Customer:
        Show the customer you understand how they feel. You can say things like, “I understand how frustrating this must be for you,” or “I’m really sorry this happened.”
        3. Apologize and Offer Solutions:
        Even if the problem isn’t your fault, apologize for the inconvenience. Then, focus on solving the problem. For example, “I’m sorry for the delay. Let me check the status of your order right away.”
        4. Stay Positive:
        Always stay positive, even if the customer is negative. Positive language can change the tone of the conversation. For example, instead of saying, “I can’t help you with that,” you can say, “Let me see what I can do to help.”
        
        By following these steps, you can handle difficult conversations and turn them into positive experiences for both you and the customer.`
        },
        
        {
          id: 7,
          title: 'Module 3 - Lesson 3.1: Mastering Call Handling Techniques',
          content: `
          STARTING THE CALL PROFESSIONALY:
        
     ANSWERING THE CALL PROMPTLY AND POLITELY: Imagine a customer is waiting on the other end of the line, possibly feeling frustrated or needing urgent help. Answering quickly shows them that their call is important. Aim to pick up within three rings if you can. When you answer, your greeting is the first impression the customer has of you and the company. Make it warm and professional.
        More Greeting Examples:
            1)"Thank you for calling [Company Name], this is [Your Name]. How may I be of assistance?" (Slightly more formal)
            2)"[Company Name], good morning/afternoon. [Your Name] here, ready to help you." (Friendly and direct)
        
      WHY TONE MATTERS: Your tone of voice carries a lot of meaning. Even if you can't see the customer, a smile in your voice makes you sound friendly and approachable. Speak clearly so they don't have to strain to hear you, and at a speed that's easy to follow – not too fast that you sound rushed, and not so slow that it sounds unnatural.
        
      IDENTIFYING AND VERIFYING THE CUSTOMER: Think of this as confirming you're talking to the right person before sharing any private information about their account or making changes. This protects the customer's privacy and prevents unauthorized access.
        More Verification Examples:
            1)"To ensure I'm speaking with the correct account holder, could you please provide the last four digits of your social security number?" (Use only if company policy allows and it's necessary)
            2)"Can you please confirm the postcode associated with your account?"
        
      EXPLAINING "FOR SECURITY PURPOSES": When you ask for this information, briefly explaining why builds trust. Customers understand the need for security. You could say, "Just to keep your account secure, could you please..."
        
      STATING THE PURPOSE OF THE CALL(If Outbound): When you're the one calling, the customer might be busy or unsure why you're contacting them. Getting straight to the point in a polite way respects their time.
         More Outbound Examples:
            1)"Hello [Customer Name], this is [Your Name] calling from [Company Name]. I'm reaching out to inform you about an update to your service."
            2)"Good afternoon, [Customer Name]. My name is [Your Name], and I'm calling from [Company Name] to see if you were satisfied with the recent service you received."`
        },
      {
        
          id: 8,
          title: 'Lesson 3.2: Gathering Information and Providing Solutions',
          content: `
        
        UNDERSTANDING AND ASKING QUESTIONS: First, it's important to really listen to the customer without interrupting. Let them tell you what's happening.
          Show you're listening by saying things like "I understand," "Yes," or "Okay."
          Then, ask clear and simple questions to get all the details you need.
            1)For more information, you can ask: "Could you please tell me more about what happened?" or "What exactly were you trying to do?"
            2)For specific details, ask: "What is the order number?" or "What date did this problem start?"
        
        UNDERSTANDING THE ISSUE AND CONFIRMING: As the customer talks, try to understand their problem fully.
           Repeat back what you've heard in your own words to make sure you've got it right. For example: "So, it sounds like your [problem] started on [date]. Is that correct?"
           Always ask the customer to confirm if you've understood everything: "Is that right?" or "Have I understood correctly?"
        
        EXPLANING SOLUTIONS: Once you know the problem, explain the solution using easy words. Don't use technical terms unless you really have to, and if you do, explain what they mean.
           If the customer needs to do something, give them clear, step-by-step instructions. For example, instead of "Clear your cache," say "Could you please close your internet browser and then open it again?"
        
        CHECKING IF THE CUSTOMER UNDERSTANDS THE SOLUTION: After you explain the solution, make sure the customer understands what to do. Ask questions like: "Does that make sense?" or "Would you like me to explain that again?"
        
        TTAKING TACTION AND HELPING THE CUSTOMER: Show the customer that you are going to help them. Say things like: "I can help you with that," or "Let me take care of that for you."
           If you need to move the customer to someone else or do something later, explain clearly what will happen next. For example: "I will now transfer you to our billing team who can help you with that," or "I have made a note of this, and someone will contact you within 24 hours."`
        },
        
      {
        id: 9,
        title: ' Lesson 3.3: Closing the Call Professionally ',
        content: `
      
      SUMMARIZIN THE OUTCOMES: Before saying goodbye, quickly recap what was achieved during the call and what the customer (or you) needs to do next. This ensures everyone is on the same page.
         "Summary" Examples:
          1) "So, just to confirm, your new password has been set, and you should be able to log in now. Is that correct?"
          2) "We've scheduled a technician to visit your home tomorrow between 9 am and 12 pm."
      
      Offering Further Assistance: This is your final opportunity to ensure the customer's needs have been met. It shows you're thorough and willing to help.
        Varying Your "Assistance" Questions:
          1) "Was there anything else at all that I could help you with today?"
          2) "Before we end the call, is there anything else on your mind?"
      
      Ending the Call Courteously: Your closing remarks leave the customer with a final impression of the company. Be polite and thank them for their time and business.
        Varying Your Closings: Choose a closing that feels natural and fits the tone of the call.
          1) "Thank you for contacting [Company Name]. We appreciate your business."
          2) "It was my pleasure to assist you today. Have a wonderful day!"
      
      DISCONNECTING THE CALL PROPERLY: Letting the customer hang up first is a sign of respect. It ensures they have finished speaking and don't feel cut off. End the call gently – don't just slam the phone button on your end. A brief pause before disconnecting is good practice.`
      }
    ]
  },
  {
    id: 'business-strategy',
    name: 'Business Strategy',
    description: ' A long-term plan defining how a company will compete, attract customers, and achieve its objectives within the market. It guides resource allocation and decision-making for sustainable success',
    slides: [
        {
          id: 1,
          title: 'Module 1 - Lesson 1.1: What is Business Strategy?',
          content: `
      UNDERSTANDING THE MEANING OF BUSINESS STRATEGY: Business strategy is the plan a company makes to reach its goals and succeed. It is like a road map that shows how a company will move forward, win customers, and make money. Every company, small or big, needs a strategy. Without a good plan, a company may waste time, lose money, or even fail. A business strategy helps people inside the company know what they must do every day.
          For example, if you open a small bakery, your business strategy might include baking fresh bread, setting fair prices, and making sure customers are happy. Strategy is not just about big ideas. It is about making smart choices every day that lead to success. Good business strategies keep the company strong even when there are problems or competition.
        
      WHY IS BUSINESS STRATEGY IMPORTANT?: Without a clear strategy, a company can easily get lost. Imagine traveling without a map — you would not know which road to take. In the same way, a company without a plan may waste energy doing the wrong things. Business strategy helps the company focus on what is important. It shows what products to sell, what customers to serve, and how to stand out from others.
          A strong strategy can also protect a company during hard times. For example, if sales drop, a good strategy helps the company stay calm and find new ways to succeed. Business strategy is about thinking ahead, being prepared, and always finding better ways to win.
        
      
      STRATEGY vs TACTICS: Sometimes people confuse strategy and tactics. They are related, but not the same. Strategy is the big plan — the long-term vision. Tactics are the small actions you take every day to follow that big plan. For example, if your strategy is to sell the best-tasting bread in town, a tactic could be giving free samples to new customers.
          Both are important. Strategy keeps the company moving in the right direction. Tactics help the company make quick moves to reach short-term goals. Good companies have both a smart strategy and smart tactics working together every day.
          Real-Life Example: Pizza Shop Strategy
          Imagine you run a small pizza shop. Your business strategy could be simple: "Sell the freshest, tastiest pizza at a good price." Your tactics could include offering buy-one-get-one-free deals, delivering pizza faster, or having a friendly service. If you follow your strategy and use good tactics, your pizza shop can become very popular. This simple example shows how important and powerful business strategy can be.`
        },
        {
          id: 2,
          title: 'Lesson 1.2: Key Parts of a Business Strategy',
          content: `
        THE FOUR MAIN PARTS OF A BUSINESS STRATEGY 

        Every good business strategy has four important parts:
        1. Vision and Mission: Vision means what the company wants to become in the future. Mission means what the company does every day to reach that future.
        2. Goals and Objectives: These are the targets the company wants to achieve. Goals are big, like "become number one." Objectives are smaller, like "increase sales by 10% this year."
        3. Competitive Advantage: This is what makes a company better than others. It could be better quality, cheaper prices, faster delivery, or great customer service.
        4. Plan of Action: This is the step-by-step plan of what the company will do to reach its goals.
           If any part is missing, the strategy will not be strong. All four parts must work together like the wheels of a car.
        
        VISION AND MISSION: The Company's Dream and Work
        The vision is like a dream for the company. For example, a coffee shop's vision could be "to be the favorite coffee place in town." The mission is about what the company does every day. The mission could be "serve fresh coffee quickly with a smile."
        The vision gives people hope and excitement. The mission gives people a clear job to do. Together, they inspire workers and guide the company to success. Without vision and mission, employees may not know what they are working for.
      
       GOAL AND OBJECTIVES:
         Goals and objectives are important because they show whether the company is moving in the right direction. A goal is a big dream, like "open 10 stores in 5 years." An objective is a small step toward that dream, like "open 2 stores this year." Goals inspire, and objectives make those dreams real.
        
        Good goals are SMART:
        • Specific
        • Measurable
        • Achievable
        • Realistic
        • Time-bound
        This means goals should be clear, not too hard, and have a deadline.

        WHAT IS COMPETITIVE ADVANTAGE: Competitive advantage is the special strength that makes a company different from others. It could be anything: cheaper prices, better technology, faster delivery, or a great reputation. A pizza shop could have an advantage because its pizza stays hot for a long time. A clothing shop could have an advantage by offering styles nobody else has.
        Knowing your advantage is very important. It tells you where to focus your efforts. It also helps you tell customers why they should choose you and not someone else.`
        },
        {
          id: 3,
          title: 'Lesson 1.3: Different Types of Business Strategies',
          content: `
        UNDERSTANDING DIFFERENT STRATEGIES
        Companies can use different types of strategies depending on their goals and situation. Knowing about these types helps a company choose the best way to succeed. Here are three common types of business strategies:
        1. Cost Leadership Strategy: In this strategy, the company tries to be the cheapest. They sell products at low prices but still make a profit. Big stores like Walmart use this strategy. They sell many items cheaply and attract lots of customers.
        2. Differentiation Strategy: Here, the company tries to be different and special. They offer something unique that no one else does — like better quality, special designs, or excellent service. For example, Apple sells unique, stylish phones that many people love.
        3. Focus Strategy: This means the company serves a small group of customers very well. They focus on a narrow market. For example, a company might sell only eco-friendly clothes for teenagers. They don't try to sell to everyone, just a special group.
        
        CHOOSING THE RIGHT STRATEGY:
        Choosing the right strategy is very important. If a company picks the wrong one, it can lose money and customers. For example, trying to sell the cheapest and best product at the same time can confuse people. It is better to pick one main strategy and do it really well.
        Before choosing, a company must study the market, understand the competition, and know what customers really want. A clear and focused strategy makes it easier to make good decisions every day.
        
        COST LEADERSHIP: Winning by Being Affordable
        When a company follows a cost leadership strategy, they must keep their costs low. This means finding cheap suppliers, making products quickly, and avoiding waste. They make a small profit on each product, but because they sell a lot, they still make good money.
        For example, a fast-food restaurant might sell burgers at a very low price. Even if they make only a small amount of profit per burger, they sell thousands of burgers every day. That way, they earn a lot overall.
        
        DIFFERENTIATION AND FOCUS: Winning by Being Unique or Special
        In a differentiation strategy, companies work hard to be unique. They might offer better customer service, use high-quality materials, or have exciting new designs. Because their product is special, they can charge higher prices, and customers are happy to pay.
        In a focus strategy, the company becomes an expert in serving a small group of customers. These companies usually understand their customers' needs very well. For example, a company making shoes only for runners can make shoes that are perfect for that sport.
        Choosing between cost leadership, differentiation, and focus depends on what the company is good at and what the market needs.`
        },
        {
          id: 4,
          title: 'Module 2 - Lesson 2.1: How to Create a Simple Business Strategy',
          content: `
       START BY KNOWING YOUR BUSINESS AND CUSTOMERS: Before making a business strategy, it is important to understand your business well. What products do you sell? Who are your customers? What problems do you solve for them? When you know these answers, it becomes easier to make a strong plan. You must also study what other businesses are doing. This is called "market research." Look at your competitors and learn what they do well or badly.
        For example, if you want to open a coffee shop, first find out who your customers are. Are they college students, office workers, or tourists? Each group will want different things. Knowing your customer helps you build a strategy that fits them perfectly.
        
        SET CLEAR GOALS FOR YOUR BUSINESS: Once you understand your business and customers, you must set clear goals. A goal gives direction. Without goals, you can easily lose focus. A good goal might be "sell 500 cups of coffee per week" or "open a second shop in 2 years." When you have goals, you can plan the steps to reach them.
        Always make sure your goals are realistic. If you set goals that are too hard, you might get discouraged. If they are too easy, you might not grow. Good goals are like stepping stones that lead you forward, little by little, until you reach success.
        
        CHOOSE YOUR MAIN STRATEGY: Now it is time to choose your main strategy. Will you focus on being the cheapest (cost leadership)? Will you offer something very special (differentiation)? Or will you serve a small group of customers really well (focus strategy)? Picking the right strategy is very important because it guides all your decisions later.
        For example, if you want to sell the cheapest coffee, you might use less expensive beans but sell more cups. If you want to offer the best quality coffee, you might choose expensive beans and charge higher prices. Choosing your main strategy early helps you stay on track.
        
        MAKE A SIMPLE ACTION PLAN: An action plan lists what you will do to follow your strategy. For example, if your strategy is to sell cheap coffee, your plan might include finding low-cost suppliers, making quick service a rule, and training your workers to serve fast. A good action plan is clear, simple, and easy for everyone to understand.
        Remember, a business strategy is not just words on paper. It must be used every day. If you build a simple, clear, and strong strategy, it will guide your company and help you reach your dreams.`
        },
        {
          id: 5,
          title: 'Lesson 2.2: How to Apply Your Business Strategy in Real Life',
          content: `
      TRAIN YOUR TEAM AND APPLY THE STRATEGY: After you create your strategy, you must teach it to your team. Everyone working with you should know the plan and understand their role. If your workers do not understand the strategy, they might do things that harm the company. Take time to explain the goals and the action plan clearly.
        For example, if your strategy is to serve coffee quickly, all workers must know they must serve every customer in less than three minutes. Training your team well will make sure that everyone works together to achieve the goals.
        
      MAKE SURE EVERYONE WORKS TOWARDS SAME GOAL: A good strategy works best when everyone is moving in the same direction. You should have regular meetings to check if workers are following the strategy. If you see problems, you can fix them early. Praising workers who do a good job also keeps everyone motivated.
        For example, if a worker always serves coffee quickly and smiles at customers, you should appreciate their effort. This keeps morale high and encourages others to do the same.
        
      CHECK YOUR PROGRESS OFTEN: A business must always check if the strategy is working. Every week or month, you should review your progress. Are sales going up? Are customers happy? Are your costs under control? If something is wrong, you can adjust the plan.
        For example, if you notice that customers complain about coffee being cold, you must find a solution quickly. Maybe you need better coffee machines or faster service. Small checks and corrections help keep the business healthy.
        
        STAY FLEXIBLE AND OPEN TI CHANGE: No matter how good your strategy is, you must be ready to change if needed. The market can change. Customers' needs can change. New competitors can appear. A smart business owner watches carefully and changes the plan when necessary.
        Being flexible does not mean changing the strategy every day. It means being wise and making smart changes only when truly needed. This way, your business can survive and grow even when things around you change.`
        },
        {
          id: 6,
          title: 'Lesson 2.3: Common Problems in Business Strategy (And How to Solve Them)',
          content: `
        PROBLEM 1: NO CLEAR STRATEGY ->
        One of the biggest mistakes companies make is not having a clear strategy. When people are not sure about the company’s goals, everyone works differently. This causes confusion, waste, and loss of customers. The solution is simple: write down your strategy clearly and make sure everyone understands it.
        Having a written strategy makes it easy for everyone to follow the same path. It also helps new workers learn quickly. A clear strategy gives focus and builds a strong company culture.
        
        PROBLEM 2: IGNORING THE CUSTOMER NEEDS ->
        Sometimes companies focus too much on their own ideas and forget about their customers. This is dangerous because customers are the reason businesses exist. If you don't listen to your customers, you will lose them to someone else.
        The solution is to always listen to feedback. Talk to customers, read their reviews, and make changes based on their needs. A company that listens and improves is a company that grows.
        
       PROBLEM 3: FEAR OF CHANGE ->
        Many businesses fail because they are afraid to change. Even when they see that something is wrong, they keep doing the same things. Fear of change can be deadly in business.
        The solution is to stay open-minded and brave. Learn new things, try new ideas, and adjust your strategy when needed. Smart businesses are not the biggest — they are the ones that can change quickly when the world changes.
        
        PROBLEM 4: POOR COMMUNICATION ->
        Sometimes, even when there is a good strategy, the message is not passed clearly to workers. This causes mistakes and confusion. Good communication is like the oil that keeps a machine running smoothly.
        The solution is to talk often and clearly with your team. Use simple language. Repeat important points. Ask if people have questions. When everyone understands the plan, they can work faster and better.`
        },
        {
          id: 7,
          title: 'Module 3 - Lesson 3.1: When the Plan Isn’t Clear',
          content: `
        PROBLEM: THE CONFUSING MAP ->
        Imagine trying to navigate to a new destination using a map where the roads are poorly marked, signs are missing, or the directions are written in a confusing language. This is analogous to a business operating with an unclear strategy. If a company's employees don't have a solid grasp of the organization's goals, target audience, or the steps required to achieve success, they may become disoriented and work at cross-purposes. This lack of clarity can lead to wasted time, squandered resources, and ultimately, a failure to reach desired outcomes.
        
        WHY IT HAPPENS: An unclear business plan can arise from several factors. Sometimes, those who formulate the strategy use overly complex business jargon that is difficult for the average employee to understand. In other instances, the plan may not be documented in a comprehensive or easily accessible manner. Additionally, insufficient time may be dedicated to communicating the strategy to the entire team, leaving individuals to interpret it in their own way.
        
        HOW TO FIX IT: To rectify this issue, businesses must prioritize clear and concise communication of their strategy.
        1. Use Simple Words: The plan should be articulated in everyday language, avoiding technical terms and industry-specific jargon whenever possible.
        2. Write It Down Clearly: The strategy should be documented in a well-organized format, using short sentences, bullet points, and clear headings to enhance readability.
        3. Talk About It Often: Regular meetings, workshops, and training sessions should be conducted to explain the strategy, answer questions, and provide real-world examples that illustrate its application to employees' daily tasks.
        4. Check for Understanding: Leaders should actively solicit feedback from employees to ensure they comprehend the strategy. If confusion exists, the plan should be re-explained using different approaches or examples.`
        },
        {
          id: 8,
          title: 'Lesson 3.2: When Customers Don’t Want What You’re Selling',
          content: `
        PROBLEM: THE WRONG KIND OF CAKE
        Picture a bakery that specializes in chocolate cake, but it turns out that the majority of people in the town prefer vanilla cake. Even if the bakery's chocolate cake is exceptionally delicious, it won't attract many customers. This situation mirrors what happens when a business strategy doesn't align with customer preferences.
        
        WHY IT HAPPENS: Businesses sometimes make the mistake of assuming they know what customers want without conducting thorough market research. They might develop products or services based on internal ideas or past successes, only to discover that the market has shifted. Additionally, customer preferences can evolve over time, and companies that don't stay attuned to these changes risk offering outdated or irrelevant products.
        
        HOW TO FIX IT: To avoid this problem, businesses must adopt a customer-centric approach, prioritizing ongoing communication and feedback.
        1. Ask for Feedback: Companies should actively seek input from customers through surveys, focus groups, social media interactions, and direct conversations. They should inquire about customer needs, preferences, and pain points.
        2. Watch What They Buy: Businesses should closely monitor sales data and analyze which products or services are popular and which ones are not. This information can reveal valuable insights into customer buying patterns.
        3. Be Willing to Change: If customer feedback indicates a desire for different products or services, the company must be prepared to adapt its offerings. In the bakery example, this might involve introducing vanilla cake or other flavors to cater to customer tastes.`
        },
        {
          id: 9,
          title: 'Lesson 3.3: When the World Around You Changes',
          content: `
        PROBLEM: THE WEATHER CHANGES YOUR PICNIC ->
        Imagine planning a perfect outdoor picnic, complete with all your favorite foods and activities. However, just as you're about to begin, it starts to rain heavily. You can't stubbornly stick to your original plan; you need to find an alternative, such as moving the picnic indoors or rescheduling for another day. Similarly, businesses must recognize that external factors can disrupt their plans. These factors might include new competitors entering the market, technological advancements, or shifts in consumer trends.
        
        WHY IT HAPPENS: The business landscape is dynamic and constantly evolving. New competitors can emerge, offering similar products or services at lower prices or with innovative features. Technological breakthroughs can render existing products or processes obsolete. Consumer preferences can change rapidly, driven by factors such as social trends, economic conditions, or cultural influences.
        
        HOW TO FIX IT: To thrive in this ever-changing environment, companies must cultivate agility and adaptability.
        1. Keep an Eye on Things: Businesses should continuously monitor their external environment, including competitor activities, emerging technologies, and market trends. They can use tools such as market research reports, industry publications, and competitive analysis to stay informed.
        2. Be Open to New Ideas: Companies should foster a culture of innovation, encouraging employees to generate new ideas and explore alternative approaches. They should also be willing to experiment and test new strategies.
        3. Don't Be Afraid to Adapt: If the original plan is no longer effective due to external changes, businesses must be willing to modify their strategy, product offerings, or operational processes. They must embrace change as an opportunity for growth and improvement.`
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
        text: 'What is the main role of a call center agent?',
        options: [
          'To install company hardware',
          'To solve customer problems and build trust over the phone',
          'To manage marketing campaigns',
          'To lead the HR team'
        ],
        correctOption: 1
      },
      {
        id: 2,
        text: 'What should a call center agent do after each call?',
        options: [
          'Delete all call records',
          'Forget the conversation',
          'Record important details about the call',
          'Call the same customer again'
        ],
        correctOption: 2
      },
      {
        id: 3,
        text: 'Which skill is most essential when talking to a slow-speaking customer?',
        options: ['Speed', 'Patience', 'Sarcasm', 'Ignoring'],
        correctOption: 1
      },
      {
        id: 4,
        text: 'How should you respond when a customer is upset?',
        options: [
          'Tell them to calm down immediately',
          'Transfer the call without explanation',
          'Interrupt to speed up the process',
          'Stay calm, listen and show empathy'
        ],
        correctOption: 3
      },
      {
        id: 5,
        text: 'What is active listening?',
        options: [
          "Just hearing the customer's words",
          'Repeating scripts quickly',
          'Understanding and paraphrasing what the customer says',
          'Writing notes silently without talking'
        ],
        correctOption: 2
      },
      {
        id: 6,
        text: 'Why is it important to use simple language?',
        options: [
          'To confuse customers',
          'To impress with big words',
          'To sound technical',
          'To make sure everyone can understand'
        ],
        correctOption: 3
      },
      {
        id: 7,
        text: "What should an agent do when unsure about a customer's issue?",
        options: [
          'Guess a solution',
          "Say 'I don't know' and end the call",
          'Stay calm, use resources or ask a supervisor',
          'Ignore it'
        ],
        correctOption: 2
      },
      {
        id: 8,
        text: 'Which of the following shows positive language?',
        options: [
          'I can’t do that.',
          'You should have done it right.',
          'Let me see how I can help you.',
          'It’s your fault.'
        ],
        correctOption: 2
      },
      {
        id: 9,
        text: 'Why are breaks important during a call center workday?',
        options: [
          'To avoid taking calls',
          'To socialize more',
          'To rest voice and mind',
          'To leave work early'
        ],
        correctOption: 2
      },
      {
        id: 10,
        text: 'What is a blended call center?',
        options: [
          'One that only handles emails',
          'Only receives calls',
          'Handles both inbound and outbound calls',
          'Does not handle calls at all'
        ],
        correctOption: 2
      },
      {
        id: 11,
        text: 'What should you do if a caller seems confused?',
        options: [
          'Speak quickly to save time',
          'Break down information into smaller steps',
          'Assume they will understand eventually',
          'Avoid asking clarifying questions'
        ],
        correctOption: 1
      },
      {
        id: 12,
        text: 'What does tone of voice help with in call center conversations?',
        options: [
          'Building rapport and showing professionalism',
          'Making the call longer',
          'Confusing the customer',
          'Making your voice louder'
        ],
        correctOption: 0
      },
      {
        id: 13,
        text: 'Why is note-taking important after each call?',
        options: [
          'To avoid remembering things',
          'To reduce the call log size',
          'To have a record for future help',
          'To fill time between calls'
        ],
        correctOption: 2
      },
      {
        id: 14,
        text: 'What is the first step when starting a call?',
        options: [
          'Ask for the caller’s issue',
          'Introduce yourself with a professional greeting',
          'Transfer the call',
          'Stay silent'
        ],
        correctOption: 1
      },
      {
        id: 15,
        text: 'What is one benefit of empathy in customer service?',
        options: [
          'It ends the call faster',
          'It makes the customer feel understood',
          'It avoids responsibility',
          'It leads to upselling'
        ],
        correctOption: 1
      },
      {
        id: 16,
        text: 'Which of the following is an open-ended question?',
        options: [
          'Is your phone working now?',
          'Did you reset your router?',
          'Can I help you?',
          'Can you tell me more about the issue?'
        ],
        correctOption: 3
      },
      {
        id: 17,
        text: 'What is the key to building rapport?',
        options: [
          'Talking about yourself',
          'Being quick and impersonal',
          'Using a friendly tone and showing interest',
          'Ignoring the customer’s emotions'
        ],
        correctOption: 2
      },
      {
        id: 18,
        text: 'Which phrase is best when closing a call?',
        options: [
          'Bye.',
          'You’re done now.',
          'Thank you for calling. Have a great day!',
          'Nothing.'
        ],
        correctOption: 2
      },
      {
        id: 19,
        text: 'Why is training important in call centers?',
        options: [
          'To extend shift hours',
          'To reduce vacation time',
          'To improve performance and service',
          'To increase call volume'
        ],
        correctOption: 2
      },
      {
        id: 20,
        text: 'How can a call center agent stay calm under pressure?',
        options: [
          'Speak louder',
          'Hang up quickly',
          'Take a breath, stay positive and focus on helping',
          'Blame the customer'
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
        text: 'What is the main purpose of a business strategy?',
        options: [
          'To manage daily employee schedules',
          'To improve the company’s visual design',
          'To reach company goals and succeed',
          'To increase employee count'
        ],
        correctOption: 2
      },
      {
        id: 2,
        text: 'Why is business strategy important?',
        options: [
          'It helps companies focus and avoid wasting resources',
          'It increases staff workload',
          'It replaces need for leadership',
          'It automates all tasks'
        ],
        correctOption: 0
      },
      {
        id: 3,
        text: 'Which of the following is a tactic rather than a strategy?',
        options: [
          'Becoming the top local brand',
          'Providing free samples to attract customers',
          'Expanding to international markets',
          'Leading the market in innovation'
        ],
        correctOption: 1
      },
      {
        id: 4,
        text: 'What does a company’s vision describe?',
        options: [
          'Daily operations',
          'Financial documents',
          'What the company wants to become',
          'Who founded the company'
        ],
        correctOption: 2
      },
      {
        id: 5,
        text: 'What makes a competitive advantage?',
        options: [
          'Unique and valuable offering',
          'Having many employees',
          'Expensive marketing',
          'All employees working overtime'
        ],
        correctOption: 0
      },
      {
        id: 6,
        text: 'Which is NOT one of the four main parts of business strategy?',
        options: [
          'Vision and mission',
          'Product packaging',
          'Goals and objectives',
          'Competitive advantage'
        ],
        correctOption: 1
      },
      {
        id: 7,
        text: 'What is cost leadership strategy?',
        options: [
          'Focusing on unique design',
          'Selling at lowest prices profitably',
          'Serving niche customer groups',
          'Using the most expensive resources'
        ],
        correctOption: 1
      },
      {
        id: 8,
        text: 'What is a focus strategy?',
        options: [
          'Targeting a broad market',
          'Serving a specific group very well',
          'Outsourcing all production',
          'Hiring only part-time workers'
        ],
        correctOption: 1
      },
      {
        id: 9,
        text: 'What should come first when making a strategy?',
        options: [
          'Market domination',
          'Understanding your business and customers',
          'Recruiting staff',
          'Making promotions'
        ],
        correctOption: 1
      },
      {
        id: 10,
        text: 'What does SMART stand for?',
        options: [
          'Simple, Measurable, Achievable, Rapid, Trackable',
          'Specific, Measurable, Achievable, Realistic, Time-bound',
          'Strategic, Meaningful, Accurate, Reliable, Timed',
          'Standard, Modular, Achievable, Responsible, Tracked'
        ],
        correctOption: 1
      },
      {
        id: 11,
        text: 'Why should strategies be communicated clearly?',
        options: [
          'To increase meeting time',
          'So everyone knows the goals and their roles',
          'To sound professional',
          'To confuse competitors'
        ],
        correctOption: 1
      },
      {
        id: 12,
        text: 'What happens when customers don’t want what you sell?',
        options: [
          'Sales rise automatically',
          'The business must adapt to customer preferences',
          'Keep selling it until they change',
          'Change the business vision'
        ],
        correctOption: 1
      },
      {
        id: 13,
        text: 'How can companies stay updated with market changes?',
        options: [
          'Ignore trends',
          'Focus only on sales',
          'Do market research and watch competitors',
          'Stop innovation'
        ],
        correctOption: 2
      },
      {
        id: 14,
        text: 'What does a good action plan include?',
        options: [
          'Employee birthdays',
          'Step-by-step tasks to follow the strategy',
          'Product price list',
          'Marketing slogans'
        ],
        correctOption: 1
      },
      {
        id: 15,
        text: 'What is the purpose of team training in strategy?',
        options: [
          'To test employees',
          'To fill free time',
          'To align everyone with the goals',
          'To prepare for layoffs'
        ],
        correctOption: 2
      },
      {
        id: 16,
        text: 'When should businesses check if the strategy is working?',
        options: [
          'Every day only',
          'Once a year',
          'Never',
          'Regularly, like weekly or monthly'
        ],
        correctOption: 3
      },
      {
        id: 17,
        text: 'Why should a company stay flexible?',
        options: [
          'To impress investors',
          'To respond to customer and market changes',
          'To avoid responsibilities',
          'To reduce training costs'
        ],
        correctOption: 1
      },
      {
        id: 18,
        text: 'What can poor communication of a strategy cause?',
        options: [
          'Faster work',
          'More sales',
          'Mistakes and confusion',
          'Higher morale'
        ],
        correctOption: 2
      },
      {
        id: 19,
        text: 'What should be done if a strategy is failing?',
        options: [
          'Ignore it',
          'Blame others',
          'Make smart adjustments',
          'Fire the staff'
        ],
        correctOption: 2
      },
      {
        id: 20,
        text: 'What is one way to involve employees in strategic improvement?',
        options: [
          'Limit their feedback',
          'Let them suggest improvements in meetings',
          'Keep the plan secret',
          'Focus only on top management'
        ],
        correctOption: 1
      }
    ]
  }
];
