import logo from "../logo.svg";

function Face() {
  const gender = Math.random() < 0.5 ? "men" : "women";
  const randomNumber = Math.floor(Math.random() * 100);
  const imageUrl = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;

  return (
    <a href="#" className="face">
      <img
        src={imageUrl}
        alt="Random face"
      />
    </a>
  );
}

export default Face;
