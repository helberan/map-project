import React from "react";
import baterie from "../baterie_data.json";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Misto({ selectedMarker }) {
  if (!selectedMarker) {
    return <div className="Main-Panel">Vyberte sběrné místo.</div>;
  }

  const popover = (baterka) => (
    <Popover id={`popover-${baterka.id}`}>
      <Popover.Header as="h3">
        <strong>{baterka.categoryName}</strong>
      </Popover.Header>
      <Popover.Body>{baterka.description}</Popover.Body>
    </Popover>
  );

  // Render the selected marker's data
  return (
    <div className="Main-Panel">
      <div className="Misto-header">
        <h3>{selectedMarker.nazev}</h3>
        <Link to="/seznam">
          <Button
            style={{
              backgroundColor: "#4caf50",
              border: "0",
              color: "#000000",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={require("../images/close.png")}
              alt="domeček"
              style={{ width: "10px", height: "10px" }}
            />
          </Button>
        </Link>
      </div>
      <br />
      <p>
        Adresa: {selectedMarker.ulice}, {selectedMarker.obec}{" "}
        {selectedMarker.psc}
      </p>
      <p>Kód provozovny: {selectedMarker.kod}</p>
      <br />
      <h4>Jaké baterie je možné zde odevzdat:</h4>
      <div className="img-wrapper">
        {baterie
          .filter(
            (baterka) =>
              baterka.pb === selectedMarker.pb ||
              baterka.ib === selectedMarker.ib ||
              baterka.ab === selectedMarker.ab
          )
          .map((baterka, index) => {
            return (
              <OverlayTrigger
                key={index}
                trigger="click"
                placement="left"
                overlay={popover(baterka)}
              >
                <img
                  src={require(`../images/${baterka.fileName}`)}
                  alt={baterka.categoryName}
                />
              </OverlayTrigger>
            );
          })}
      </div>
    </div>
  );
}

export default Misto;
