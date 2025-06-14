import logo from "../logo.svg"
import Face from "./Face";



function SideBar() {
    const numberOfFaces = 20;

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="facesList">
            {Array.from({ length: numberOfFaces }, (_, index) => (
                <li><Face key={index} /></li>
            ))}
            </ul>
            <a>
                settings awla chihaja XD
            </a>
        </>
    );
}


export default SideBar;