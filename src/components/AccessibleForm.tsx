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

/*export interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  min?: number;
  max?: number;
  placeholder?: string;
}*/
export interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  options?: { value: string; label: string ; disabled:boolean ; }[];
  onFocus?: () => void; // <-- add this line
  min?: number; 
  max?: number;
  
}


/*export const FormField: React.FC<FormFieldProps> = ({
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
};*/

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type,
  required,
  value,
  onChange,
  placeholder,
  options,
  onFocus // <- make sure to add this
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 font-medium ">
        {label}
      </label>

      {type === 'select' ? (
        <select
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={onFocus}   
          className="border rounded p-2 text-gray-950 w-full "
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled} className={option.disabled ? "text-gray-300" : "text-gray-950"}>
              {option.label} 
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={onFocus}   
          placeholder={placeholder}
          className="border rounded p-2 w-full text-gray-950"
        />
      )}
    </div>
  );
};


export default AccessibleForm;