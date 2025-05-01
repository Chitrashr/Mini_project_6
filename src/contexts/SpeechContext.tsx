import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface SpeechContextType {
  speak: (text: string, rate?: number, pitch?: number) => void;
  stop: () => void;
  isSpeaking: boolean;
  isSupported: boolean;
  repeatLastUtterance: () => void;
  lastText: string;
}

const SpeechContext = createContext<SpeechContextType | undefined>(undefined);

export const SpeechProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [lastText, setLastText] = useState('');
  const [lastRate, setLastRate] = useState(1);
  const [lastPitch, setLastPitch] = useState(1);

  useEffect(() => {
    // Check if speech synthesis is supported
    const supported = 'speechSynthesis' in window;
    setIsSupported(supported);

    if (supported) {
      // Set up event listeners for speech synthesis
      speechSynthesis.addEventListener('start', () => setIsSpeaking(true));
      speechSynthesis.addEventListener('end', () => setIsSpeaking(false));
      speechSynthesis.addEventListener('pause', () => setIsSpeaking(false));
      speechSynthesis.addEventListener('resume', () => setIsSpeaking(true));
      speechSynthesis.addEventListener('error', () => setIsSpeaking(false));
    }

    return () => {
      if (supported) {
        speechSynthesis.cancel();
        speechSynthesis.removeEventListener('start', () => setIsSpeaking(true));
        speechSynthesis.removeEventListener('end', () => setIsSpeaking(false));
        speechSynthesis.removeEventListener('pause', () => setIsSpeaking(false));
        speechSynthesis.removeEventListener('resume', () => setIsSpeaking(true));
        speechSynthesis.removeEventListener('error', () => setIsSpeaking(false));
      }
    };
  }, []);

  const speak = useCallback((text: string, rate = 1, pitch = 1) => {
    if (!isSupported) return;

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    // Create a new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = pitch;

    // Store the last utterance details for replay
    setLastText(text);
    setLastRate(rate);
    setLastPitch(pitch);

    // Speak the utterance
    speechSynthesis.speak(utterance);
  }, [isSupported]);

  const stop = useCallback(() => {
    if (!isSupported) return;
    speechSynthesis.cancel();
  }, [isSupported]);

  const repeatLastUtterance = useCallback(() => {
    if (lastText) {
      speak(lastText, lastRate, lastPitch);
    }
  }, [lastText, lastRate, lastPitch, speak]);

  return (
    <SpeechContext.Provider value={{ speak, stop, isSpeaking, isSupported, repeatLastUtterance ,lastText}}>
      {children}
    </SpeechContext.Provider>
  );
};

export const useSpeech = (): SpeechContextType => {
  const context = useContext(SpeechContext);
  if (context === undefined) {
    throw new Error('useSpeech must be used within a SpeechProvider');
  }
  return context;
};