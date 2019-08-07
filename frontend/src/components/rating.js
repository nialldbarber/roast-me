import React, { useState } from 'react';
import { RatingContainer } from '../styles/components/rating';

export default function Rating() {
  const [rating, setRating] = useState([
    { name: 'Excellent', score: 0 },
    { name: 'V.good', score: 0 },
    { name: 'Average', score: 0 },
    { name: 'Poor', score: 0 },
    { name: 'Terrible', score: 0 }
  ]);

  return (
    <RatingContainer>
      {rating.map(({ name, score }) => (
        <label htmlFor={name}>
          {name}
          <input type="checkbox" id={name} />
        </label>
      ))}
    </RatingContainer>
  );
}
