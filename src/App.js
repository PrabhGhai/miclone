import "./App.css";
import Navbar from "./components/Navbar";
import Prenavbar from "./components/Prenavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import Offer from "./components/Offer";
import data from "./data/data.json";
import Heading from "./components/Heading.js";
import Starproduct from "./components/Starproduct.js";
import AccessoriesMenu from "./components/Accessoriesmenu.js";
import Accessories from "./components/Accessories.js";
import Videos from "./components/Videos.js";
function App() {
  const banner = data.banner;
  return (
    <>
      <Router>
        <Prenavbar />
        <Navbar />
        <Slider start={banner.start} />
        <Offer offer={data.offer} />
        <Heading text=" Hot Accessories" />
        <AccessoriesMenu />
        <Routes>
          <Route
            exact
            path="/music"
            element={<Accessories cards={data.hotAccessories.music} />}
          />
          <Route
            exact
            path="/smartdevices"
            element={<Accessories cards={data.hotAccessories.smartDevice} />}
          />
          <Route
            exact
            path="/home"
            element={<Accessories cards={data.hotAccessories.home} />}
          />
          <Route
            exact
            path="/lifestyle"
            element={<Accessories cards={data.hotAccessories.lifeStyle} />}
          />
          <Route
            exact
            path="/mobileaccessories"
            element={
              <Accessories cards={data.hotAccessories.mobileAccessories} />
            }
          />
        </Routes>

        <Heading text=" Videos" />
        <Videos video={data.videos} />
      </Router>
    </>
  );
}

export default App;
