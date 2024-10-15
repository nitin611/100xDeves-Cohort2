import React from 'react';
import './Card.css';

const Card = ({ name, description, linkedin, twitter, interests, onDelete }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="social-media">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <div className="interests">
        <h3>Interests:</h3>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Card;
