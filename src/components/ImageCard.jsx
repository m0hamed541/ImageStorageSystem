import logo from "../logo.svg";

function ImageCard() {
  const gender = Math.random() < 0.5 ? "men" : "women";
  const randomNumber = Math.floor(Math.random() * 100);
  const imageUrl = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;

  return (
    <div className="imageCard">
      <img src={imageUrl} className="App-logo" alt="logo" />
    </div>
  );
}

export default ImageCard;
