import React, { useEffect, useState } from 'react';

interface AnimatedTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, interval = 3000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % texts.length);
        setIsFlipping(false);
      }, 500); // Half of the animation duration
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span className={`inline-block ${isFlipping ? 'animate-textflip' : ''} ${className}`}>
      {texts[currentIndex]}
    </span>
  );
};

export default AnimatedText;