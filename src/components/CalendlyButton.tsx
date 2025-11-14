import React from 'react';
import ModernButton from './ModernButton';
import { Calendar } from 'lucide-react';

interface CalendlyButtonProps {
  className?: string;
  text?: string;
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({ 
  className,
  text = "Schedule a Meeting"
}) => {
  const handleClick = () => {
    window.open('https://calendly.com/publish-westernpublish', '_blank');
  };

  return (
    <ModernButton
      variant="gradient"
      size="md"
      icon={Calendar}
      iconPosition="left"
      onClick={handleClick}
      className={className}
    >
      {text}
    </ModernButton>
  );
};

export default CalendlyButton;