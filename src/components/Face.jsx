import React from "react";

function Face({ faceId, isSelected, onSelect }) {
  const gender = Math.random() < 0.5 ? "men" : "women";
  const randomNumber = Math.floor(Math.random() * 100);
  const imageUrl = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
  
  // Generate a simple name based on faceId
  const firstNames = ["Alex", "Sam", "Jordan", "Casey", "Taylor", "Morgan", "Riley", "Avery", "Quinn", "Blake", "Cameron", "Drew", "Emery", "Finley", "Harper", "Hayden", "Jamie", "Kendall", "Logan", "Parker"];
  const name = firstNames[faceId % firstNames.length];

  const handleClick = () => {
    onSelect(faceId);
  };

  return (
    <div 
      className={`face ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="faceImage">
        <img
          src={imageUrl}
          alt={`Face filter ${faceId}`}
        />
      </div>
      <div className="faceName">{name}</div>
    </div>
  );
}

export default Face;