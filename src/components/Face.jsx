import React from "react";

function Face({ faceId, isSelected, onSelect }) {
  const gender = Math.random() < 0.5 ? "men" : "women";
  const randomNumber = Math.floor(Math.random() * 100);
  const imageUrl = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;

  const handleClick = () => {
    onSelect(faceId);
  };

  return (
    <div 
      className={`face ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <img
        src={imageUrl}
        alt={`Face filter ${faceId}`}
      />
    </div>
  );
}

export default Face;