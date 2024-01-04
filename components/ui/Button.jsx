import React from 'react';

const Button = ({
  label,
  onClick,
  variant = 'filled',
  type = 'button',
  className = '',
}) => {
  let style;
  if (variant === 'outline') {
    style =
      'border-button-border glow text-white backdrop-blur-xl hover:shadow-button-glow transition-all duration-150';
  } else if (variant === 'filled') {
    style = 'border-white bg-white text-black shadow-button-glow';
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-3 py-3 md:py-4 w-56 text-sm md:text-base font-normal rounded-full border ${style} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
