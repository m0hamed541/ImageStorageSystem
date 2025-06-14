import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import MainSection from "./components/MainSection";
import PreviewSection from "./components/PreviewSection";
import RegularButton from "./components/RegularButton";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="mainSection">
        <MainSection />
      </div>
      <div className="previewSection">

        <PreviewSection/>
        <RegularButton text={"upload a new photo"}/>
      </div>
    </div>
  );
}

export default App;
