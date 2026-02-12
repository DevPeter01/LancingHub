import React from 'react';
import type { InputProps } from '../../types';

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  error,
  className = '',
  required = false,
  name,
}) => {
  const inputId = `input-${name}`;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className={`
          w-full px-4 py-3 rounded-lg border transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
          ${error ? 'border-red-500' : 'border-gray-300'}
          placeholder:text-gray-400
        `}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};
