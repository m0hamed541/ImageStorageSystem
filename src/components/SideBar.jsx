// SideBar.jsx
import React, { useMemo, useState } from "react";
import { LogOut, Upload, X } from "lucide-react";
import Face from "./Face";
import UploadButton from "./UploadButton";

function SideBar({ onFaceSelect, selectedFace, onClearFilter, user }) {
  //user : name, email, profilePicture

  const firstNames = [
    "Alex",
    "Sam",
    "Jordan",
    "Casey",
    "Taylor",
    "Morgan",
    "Riley",
    "Avery",
    "Quinn",
    "Blake",
    "Cameron",
    "Drew",
    "Emery",
    "Finley",
    "Harper",
    "Hayden",
    "Jamie",
    "Kendall",
    "Logan",
    "Parker",
  ];

  const numberOfFaces = 20;

  const profiles = useMemo(
    () =>
      Array.from({ length: numberOfFaces }, (_, index) => {
        const gender = Math.random() < 0.5 ? "men" : "women";
        const randomNumber = Math.floor(Math.random() * 100);
        return {
          id: index,
          name: firstNames[index % firstNames.length],
          image_url: `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`,
        };
      }),
    []
  );

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleClearFilter = () => {
    onClearFilter();
  };

  return (
    <>
      <div className="sectionHeader">
        <div className="profileSection">
          <div className="profileAvatar">
            {user.image ? (
              <img src={user.image} alt="Profile" />
            ) : (
              <span>
                {user.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
            )}
          </div>
          <div className="profileInfo">
            <p className="profileName">{user.name}</p>
            <p className="profileEmail">{user.email}</p>
          </div>
          <button className="logoutButton" onClick={handleLogout}>
            <LogOut size={18} />
          </button>
        </div>
      </div>

      <div className="facesSection">
        <div className="facesHeader">
          <p className="facesTitle">Face Filters</p>
          {selectedFace !== null && (
            <button className="clearFilterButton" onClick={handleClearFilter}>
              <X size={14} />
              Clear
            </button>
          )}
        </div>
        <ul className="facesList">
          {profiles.map((profile) => (
            <li key={profile.id}>
              <Face
                profile={profile}
                isSelected={selectedFace === profile.id}
                onSelect={() => {
                  console.log("select face");
                  onFaceSelect(profile);
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="uploadSection">
        <UploadButton onUpload={(file) => console.log("Upload", file)} />
      </div>
    </>
  );
}

export default SideBar;
