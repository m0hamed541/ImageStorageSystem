import ImageCard from "./ImageCard";

function MainSection() {
  const numberOfFaces = 79;

  return (
    <>
      <div className="galleryTitle">
        <p>images</p>
        <br/>
      </div>
      <div className="gallery">
        {Array.from({ length: numberOfFaces }, (_, index) => (
          <ImageCard key={index} />
        ))}
      </div>
    </>
  );
}

export default MainSection;
