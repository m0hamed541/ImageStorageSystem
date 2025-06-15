import React from "react";

function ImageCard({ image, onSelect }) {
  let imageUrl;
  
  if (image.url) {
    // Uploaded image
    imageUrl = image.url;
  } else {
    // Random image for demo
    const gender = Math.random() < 0.5 ? "men" : "women";
    const randomNumber = Math.floor(Math.random() * 100);
    imageUrl = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
  }

  const handleClick = () => {
    const imageData = {
      ...image,
      url: imageUrl,
      displayUrl: imageUrl
    };
    onSelect(imageData);
  };

  return (
    <div className="imageCard" onClick={handleClick}>
      <img src={imageUrl} alt={image.name || "Gallery image"} />
    </div>
  );
}

export default ImageCard;