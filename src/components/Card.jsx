// Card.jsx
import React from 'react';
import './Card.css'; 

const Card = ({ image, children, ...props }) => {
  return (
    <div className="card" {...props}>
      {image && (
        <div className="card-image">
          <img src={image} alt="Card cap" />
        </div>
      )}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;