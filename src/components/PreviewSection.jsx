import React from "react";

function PreviewSection({ selectedImage }) {
  if (!selectedImage) {
    return (
      <>
        <div className="previewHeader sectionHeader">
          <h2 className="previewTitle">Image Preview</h2>
          <p className="previewSubtitle">Select an image to view details</p>
        </div>
        <div className="previewContent">
          <div className="previewPlaceholder">
            <p>Click on any image to preview it here</p>
          </div>
        </div>
      </>
    );
  }

  const formatFileSize = (bytes) => {
    if (!bytes) return 'Unknown';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <div className="previewHeader sectionHeader">
        <h2 className="previewTitle">Image Preview</h2>
        <p className="previewSubtitle">
          {selectedImage.name || 'Random Portrait'}
        </p>
      </div>
      <div className="previewContent">
        <img 
          src={selectedImage.displayUrl || selectedImage.url} 
          alt={selectedImage.name || "Preview"} 
          className="previewImage"
        />
        
        {selectedImage.file && (
          <div className="imageMetadata">
            <div className="metadataItem">
              <span className="metadataLabel">File Name:</span>
              <span className="metadataValue">{selectedImage.name}</span>
            </div>
            <div className="metadataItem">
              <span className="metadataLabel">File Size:</span>
              <span className="metadataValue">{formatFileSize(selectedImage.size)}</span>
            </div>
            <div className="metadataItem">
              <span className="metadataLabel">File Type:</span>
              <span className="metadataValue">{selectedImage.type}</span>
            </div>
            <div className="metadataItem">
              <span className="metadataLabel">Upload Date:</span>
              <span className="metadataValue">{formatDate(selectedImage.uploadDate)}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PreviewSection;