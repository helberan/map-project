import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import "../styles/small.css";
import "../styles/large.css";
import "../styles/App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import Mapa from "./Mapa";
import Hledani from "./Hledani";
import Navigace from "./Navigace";
import Home from "./Home";
import Kontakt from "./Kontakt";
import Sber from "./Sber";
import Misto from "./Misto";
import Footer from "./Footer";

const LazySeznam = React.lazy(() => import("./Seznam"));

function App() {
  //data about selected marker
  const [selectedMarker, setSelectedMarker] = useState(null);
  //data about searched place on the map - input either from <Hledani> or <Seznam>, passed on to <Mapa>
  const [foundPlace, setFoundPlace] = useState({});

  return (
    <div className="App">
      <Router>
        {/*mapa*/}
        <Mapa setSelectedMarker={setSelectedMarker} foundPlace={foundPlace} />
        {/*obsah*/}
        <div className="Main-Container">
          <header>
            <Navigace />
            <Hledani setFoundPlace={setFoundPlace} />
          </header>
          <div>
            <Routes>
              <Route path="/map-project" element={<Home />} />
              <Route
                path="/seznam"
                element={
                  <React.Suspense fallback="Načítám...">
                    <LazySeznam
                      setSelectedMarker={setSelectedMarker}
                      setFoundPlace={setFoundPlace}
                    />
                  </React.Suspense>
                }
              />
              <Route path="/sber" element={<Sber />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route
                path="/misto"
                element={<Misto selectedMarker={selectedMarker} />}
              />
              <Route path="*" element="" />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
