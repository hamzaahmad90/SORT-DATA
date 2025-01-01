import React from 'react';

interface FlipCardProps {
  isFlipped: boolean;
  front: React.ReactNode;
  back: React.ReactNode;
}

const FlipCard = ({ isFlipped, front, back }: FlipCardProps) => (
  <div 
    className="relative w-full max-w-md perspective-1000"
    style={{ height: '440px' }}
  >
    <div className={`absolute w-full h-full transition-transform duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
      {/* Front */}
      <div className="absolute w-full h-full backface-hidden">
        {front}
      </div>
      
      {/* Back */}
      <div className="absolute w-full h-full backface-hidden rotate-y-180">
        <div className="rotate-y-180">
          {back}
        </div>
      </div>
    </div>
  </div>
)

export default FlipCard;