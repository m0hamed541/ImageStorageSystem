import React, { useRef } from "react";
import { Upload } from "lucide-react";

function UploadButton({ onUpload }) {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onUpload(files);
      // Reset the input so the same file can be uploaded again
      event.target.value = '';
    }
  };

  return (
    <>
      <button className="regularButton" onClick={handleClick}>
        <Upload size={18} />
        Upload Photos
      </button>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="uploadInput"
      />
    </>
  );
}

export default UploadButton;