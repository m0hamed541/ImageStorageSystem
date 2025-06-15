import React from "react";
import { LogOut, Upload, X } from "lucide-react";
import Face from "./Face";
import UploadButton from "./UploadButton";

function SideBar({ selectedFace, onFaceSelect, onImageUpload, onClearFilter }) {
  const numberOfFaces = 20;

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked");
  };

  return (
    <>
      <div className="profileSection">
        <div className="profileAvatar">
          JD
        </div>
        <div className="profileInfo">
          <p className="profileName">John Doe</p>
          <p className="profileEmail">john.doe@example.com</p>
        </div>
        <button className="logoutButton" onClick={handleLogout}>
          <LogOut size={18} />
        </button>
      </div>

      <div className="facesSection">
        <div className="facesHeader">
          <p className="facesTitle">Face Filters</p>
          {selectedFace && (
            <button className="clearFilterButton" onClick={onClearFilter}>
              <X size={14} />
              Clear
            </button>
          )}
        </div>
        <ul className="facesList">
          {Array.from({ length: numberOfFaces }, (_, index) => (
            <li key={index}>
              <Face 
                faceId={index}
                isSelected={selectedFace === index}
                onSelect={onFaceSelect}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="uploadSection">
        <UploadButton onUpload={onImageUpload} />
      </div>
    </>
  );
}

export default SideBar;