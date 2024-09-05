import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {
  return (
    <div className="text-[1.5rem] font-bold text-[#0E46A3]">
      <Typewriter
        words={['Full Stack Developer', 'Problem Solver', 'Entrepreneurship Enthusiast']}
        loop={0} // Infinitely looping
        cursor
        cursorStyle='|'
        typeSpeed={100}
        deleteSpeed={100}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypeWriter;
