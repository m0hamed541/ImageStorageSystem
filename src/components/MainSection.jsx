import React from "react";
import ImageCard from "./ImageCard";

function MainSection({ selectedFace, uploadedImages, onImageSelect }) {
  const numberOfRandomImages = 50;
  
  // Generate random images for demo purposes
  const randomImages = Array.from({ length: numberOfRandomImages }, (_, index) => ({
    id: `random-${index}`,
    isRandom: true,
    faceId: Math.floor(Math.random() * 20) // Random face ID for filtering
  }));

  // Combine uploaded and random images
  const allImages = [...uploadedImages, ...randomImages];
  
  // Filter images based on selected face
  const filteredImages = selectedFace !== null 
    ? allImages.filter(image => image.isRandom && image.faceId === selectedFace)
    : allImages;

  return (
    <>
      <div className="mainHeader">
        <h1 className="galleryTitle">
          {selectedFace !== null ? 'Filtered Images' : 'All Images'}
        </h1>
        <p className="imageCount">
          {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
        </p>
      </div>
      <div className="gallery">
        {filteredImages.map((image, index) => (
          <ImageCard 
            key={image.id || index} 
            image={image}
            onSelect={onImageSelect}
          />
        ))}
      </div>
    </>
  );
}

export default MainSection;