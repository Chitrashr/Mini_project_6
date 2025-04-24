import React, { ReactNode } from 'react';

interface AccessibleFormProps {
  onSubmit: (e: React.FormEvent) => void;
  children: ReactNode;
  title: string;
  description?: string;
}

const AccessibleForm: React.FC<AccessibleFormProps> = ({
  onSubmit,
  children,
  title,
  description
}) => {
  return (
    <form 
      onSubmit={onSubmit} 
      className="bg-gray-900 rounded-lg p-8 shadow-lg max-w-xl w-full mx-auto"
      aria-labelledby="form-title"
    >
      <h2 id="form-title" className="text-2xl font-bold mb-2 text-white">{title}</h2>
      {description && (
        <p id="form-description" className="text-gray-300 mb-6">{description}</p>
      )}
      {children}
    </form>
  );
};

export interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: Array<{ value: string; label: string }>;
  min?: number;
  max?: number;
  placeholder?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  required = false,
  value,
  onChange,
  options,
  min,
  max,
  placeholder
}) => {
  return (
    <div className="mb-6">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === 'select' && options ? (
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="bg-gray-800 text-white rounded-md border-gray-700 block w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required={required}
          aria-required={required}
        >
          <option value="" disabled>{placeholder || `Select ${label}`}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className="bg-gray-800 text-white rounded-md border-gray-700 block w-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required={required}
          aria-required={required}
          min={min}
          max={max}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default AccessibleForm;