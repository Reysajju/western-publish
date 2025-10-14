import React from 'react';

interface CalendlyButtonProps {
  className?: string;
  text?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({ 
  className = "inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl",
  text = "Schedule a Meeting"
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://calendly.com/publish-westernpublish', '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {text}
    </button>
  );
};

export default CalendlyButton;