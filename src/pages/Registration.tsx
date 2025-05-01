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
    education: ''
  });

  useEffect(() => {
    const instructionText = "Please fill out the registration form. Use tab key to navigate between form fields. All fields are required.";
    speak(instructionText);
  }, [speak]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setUser({
      name: formData.name,
      age: parseInt(formData.age, 10),
      education: formData.education,
      completedCourses: []
    });

    speak("Registration successful. You will now be redirected to the course selection page.");

    // Delay navigation to allow speech to finish
    setTimeout(() => {
      navigate('/courses');
    }, 2000);
  };

  const educationOptions = [
    { value: 'high-school', label: 'High School' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
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
            onFocus={() => speak("Please enter your full name.")}//new
            placeholder="Enter your full name"
          />

          <FormField
            id="age"
            label="Age"
            type="number"
            required
            value={formData.age}
            onChange={handleChange}
            onFocus={() => speak("Please enter your age.")}//new
            min={18}
            max={100}
            placeholder="Enter your age"
          />

          {/* <FormField
            id="education"
            label="Education Level"
            type="select"
            required
            value={formData.education}
            onChange={handleChange}
            onFocus={() => speak("Please select your education level.")}//new
            
            options={educationOptions}
            
          /> */}

          <FormField
            id="education"
            label="Education Level"
            type="select"
            required
            value={formData.education}
            onChange={handleChange}
            onFocus={() => speak("Please select your education level.")}
            options={[
              { value: '', label: 'Select your education level', disabled: true }, // <-- Placeholder option
              ...educationOptions.map(option => ({
                ...option,
                disabled: false
              }))
            ]}
          />


          <div className="mt-8">
            <AccessibleButton
              onClick={() => { }}
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