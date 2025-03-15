import React from 'react';
import Typewriter from 'typewriter-effect';

interface RetroTextProps {
  text: string | string[];
  className?: string;
  cursor?: boolean;
  delay?: number;
  loop?: boolean;
}

const RetroText: React.FC<RetroTextProps> = ({ 
  text, 
  className = "", 
  cursor = true,
  delay = 50,
  loop = false 
}) => {
  return (
    <div className={`font-mono ${className}`}>
      <Typewriter
        options={{
          strings: Array.isArray(text) ? text : [text],
          autoStart: true,
          loop,
          delay,
          cursor: cursor ? '|' : '',
          wrapperClassName: "retro-text",
          cursorClassName: "retro-cursor"
        }}
      />
    </div>
  );
};

export default RetroText;