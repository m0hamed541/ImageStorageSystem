import React, { useState, useCallback } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import PreviewSection from "./components/PreviewSection";

function App() {
  const [selectedFace, setSelectedFace] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleFaceSelect = useCallback((faceId) => {
    setSelectedFace(faceId === selectedFace ? null : faceId);
  }, [selectedFace]);

  const handleImageSelect = useCallback((image) => {
    setSelectedImage(image);
  }, []);

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
          selectedImage={selectedImage}
        />
      </div>
    </div>
  );
}

export default App;