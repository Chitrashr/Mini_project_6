/*import React from 'react';



interface AccessibleButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  className = '',
  ariaLabel,
  children,
  disabled = false
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500';
  const enabledStyles = 'bg-purple-700 hover:bg-purple-600 text-white';
  const disabledStyles = 'bg-gray-700 text-gray-400 cursor-not-allowed';
  
  const combinedStyles = `${baseStyles} ${disabled ? disabledStyles : enabledStyles} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedStyles}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AccessibleButton;*/


/*
import React from 'react';
import { speakText } from '../utils/speakText'; // adjust path if needed

interface AccessibleButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  className = '',
  ariaLabel,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      onFocus={(e) => speakText((e.target as HTMLButtonElement).innerText)}
      aria-label={ariaLabel}
      className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default AccessibleButton;*/

import React from 'react';
import { speakText } from '../utils/speakText'; // adjust the path if needed

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  ariaLabel,
  children,
  onFocus,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      aria-label={ariaLabel}
      className={`bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 transition ${className}`}
      onFocus={(e) => {
        speakText(ariaLabel); 
        if (onFocus) {
          onFocus(e);
        }
      }}
    >
      {children}
    </button>
  );
};

export default AccessibleButton;

