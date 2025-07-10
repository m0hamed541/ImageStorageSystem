import React, { useEffect, useRef, useState } from "react";





function Face({ profile, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`face ${isSelected ? "selected" : ""}`}
      onClick={() => {
        setIsSelected(!isSelected);
        onSelect()
      }}
    >
      <div className="faceImage">
        <img src={profile.image_url} alt={`Face ${profile.name}`} />
      </div>
      <div className="faceName">{profile.name}</div>
    </div>
  );
}

export default React.memo(Face);
