import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpeech } from '../contexts/SpeechContext';
import { useUser } from '../contexts/UserContext';
import AccessibleForm, { FormField } from '../components/AccessibleForm';
import AccessibleButton from '../components/AccessibleButton';

const Registration: React.FC = () => {
  const { speak } = useSpeech();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    education: '',
    phone: ''
  });

  useEffect(() => {
    const instructionText =
      "Please fill out the registration form. Use tab key to navigate between form fields. All fields are required.";
    speak(instructionText);
  }, [speak]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      name: formData.name,
      phone: formData.phone,
      age: parseInt(formData.age, 10),
      education: formData.education,
      completedCourses: [],
      progress: {}
    };

    // Save to localStorage
    const storedUsers = JSON.parse(localStorage.getItem('usersData') || '[]');
    storedUsers.push(newUser);
    localStorage.setItem('usersData', JSON.stringify(storedUsers));

    // Set as current user in context
    setUser(newUser);

    speak("Registration successful. You will now be redirected to the course selection page.");

    setTimeout(() => {
      navigate('/courses');
    }, 2000);
  };

  const educationOptions = [
    { value: 'high-school', label: 'High School' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'bachelor', label: "Bachelor's Degree" },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'doctorate', label: 'Doctorate' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl">
        <AccessibleForm
          onSubmit={handleSubmit}
          title="User Registration"
          description="Please provide your information to get started with VisionSkills."
        >
          <FormField
            id="name"
            label="Full Name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => speak("Please enter your full name.")}
            placeholder="Enter your full name"
          />

          <FormField
            id="age"
            label="Age"
            type="number"
            required
            value={formData.age}
            onChange={handleChange}
            onFocus={() => speak("Please enter your age.")}
            min={18}
            max={100}
            placeholder="Enter your age"
          />

          <FormField
            id="phone"
            label="Phone No."
            type="text"
            required
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => speak("Please enter your phone number.")}
            placeholder="Enter your Phone No."
          />

          <FormField
            id="education"
            label="Education Level"
            type="select"
            required
            value={formData.education}
            onChange={handleChange}
            onFocus={() => speak("Please select your education level.")}
            options={[
              { value: '', label: 'Select your education level', disabled: true },
              ...educationOptions.map(option => ({
                ...option,
                disabled: false
              }))
            ]}
          />

          <div className="mt-8">
            <AccessibleButton
              type="submit"
              ariaLabel="Submit registration form"
              className="w-full text-lg"
            >
              Register
            </AccessibleButton>
          </div>
        </AccessibleForm>
      </div>
    </div>
  );
};

export default Registration;
