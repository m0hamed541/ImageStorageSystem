import React, { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import PreviewSection from "./components/PreviewSection";
import AuthScreens from "./auth/AuthScreens";

function App() {
  const [isAuthenicated, setIsAuthenicated] = useState(true);
  const selectedFaceRef = useRef(null);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageData, setSelectedImageData] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

 
  return (
    <div
      className="App"
      style={
        !isAuthenicated
          ? { display: "flex", flexDirection: "column", alignItems: "stretch" }
          : {}
      }
    >
      {isAuthenicated ? (
        <>
          <div className="sideBar">
            <SideBar
            user = {{name : "John Doe", email : "john.doe@example.com", profilePicture : "kk"}}
              selectedFace={selectedFaceRef.current}
              onFaceSelect={()=>{console.log('select face')}}
              onImageUpload={()=>{console.log('upload image')}}
              onClearFilter={()=>{console.log("clear filter")}}
            />
          </div>
          <div className="mainSection">
            <MainSection
              selectedFace={selectedFaceRef.current}
              uploadedImages={uploadedImages}
              onImageSelect={()=>{console.log('select imge')}}
            />
          </div>
          <div className="previewSection">
            <PreviewSection selectedImage={selectedImageData} />
          </div>
        </>
      ) : (
        <div>
          <AuthScreens />
        </div>
      )}
    </div>
  );
}

export default App;
