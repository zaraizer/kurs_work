import React, { MutableRefObject } from 'react';
import arrowRight from '../assets/arrow_right.svg';

interface AnimatedDivProps {
  animatedDivRef: MutableRefObject<HTMLDivElement | null>;
  articleText: string;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ animatedDivRef, articleText }) => {
  return (
    <div ref={animatedDivRef} className="animated-div p-3 rounded-lg text-black">
      <img className="w-20 h-20 close-button" src={arrowRight} alt="arrow" onClick={() => {
        animatedDivRef.current?.classList.remove('visible-div');
      }} />
      {articleText}
    </div>
  );
};

export default AnimatedDiv;
