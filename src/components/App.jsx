import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import "../styles/App.css";
import "../styles/extra-large.css";
import "../styles/large.css";
import "../styles/medium.css";
import "../styles/small.css";
import "../styles/extra-small.css";

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
  //data o zvolené provozovně
  const [selectedMarker, setSelectedMarker] = useState(null);
  //data o místě hledaném na mapě - zadáno buď přes komponent <Hledani> nebo <Seznam>, předáváno komponentu <Mapa> pro zobrazení tohoto místa
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
              <Route path="/" element={<Home />} />
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
