import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import PreviewSection from "./components/PreviewSection";

function App() {
  const [selectedFace, setSelectedFace] = useState(null);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageData, setSelectedImageData] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFaceSelect = useCallback((faceId) => {
    setSelectedFace(faceId === selectedFace ? null : faceId);
  }, [selectedFace]);

  const handleImageSelect = useCallback((imageId, imageData) => {
    setSelectedImageId(imageId);
  }, []);

  // Use useEffect to update selected image data without causing UI reload
  useEffect(() => {
    if (selectedImageId) {
      // Find the image data based on ID
      const foundImage = uploadedImages.find(img => img.id === selectedImageId);
      if (foundImage) {
        setSelectedImageData(foundImage);
      } else {
        // Handle random images
        const gender = Math.random() < 0.5 ? "men" : "women";
        const randomNumber = Math.floor(Math.random() * 100);
        const imageUrl = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
        
        setSelectedImageData({
          id: selectedImageId,
          url: imageUrl,
          displayUrl: imageUrl,
          name: 'Random Portrait',
          isRandom: true
        });
      }
    } else {
      setSelectedImageData(null);
    }
  }, [selectedImageId, uploadedImages]);

  const handleImageUpload = useCallback((files) => {
    const newImages = Array.from(files).map((file, index) => ({
      id: Date.now() + index,
      file,
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadDate: new Date().toISOString()
    }));
    
    setUploadedImages(prev => [...prev, ...newImages]);
  }, []);

  const clearFilter = useCallback(() => {
    setSelectedFace(null);
  }, []);

  return (
    <div className="App">
      <div className="sideBar">
        <SideBar 
          selectedFace={selectedFace}
          onFaceSelect={handleFaceSelect}
          onImageUpload={handleImageUpload}
          onClearFilter={clearFilter}
        />
      </div>
      <div className="mainSection">
        <MainSection 
          selectedFace={selectedFace}
          uploadedImages={uploadedImages}
          onImageSelect={handleImageSelect}
        />
      </div>
      <div className="previewSection">
        <PreviewSection 
          selectedImage={selectedImageData}
        />
      </div>
    </div>
  );
}

export default App;