import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Hledani({ setFoundPlace }) {
  const [searchedPlace, setSearchedPlace] = useState("");

  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

  async function hledat(e) {
    if (e) e.preventDefault();

    const params = {
      q: searchedPlace,
      format: "json",
      addressdetails: 1,
    };

    const queryString = new URLSearchParams(params).toString();
    const url = `${NOMINATIM_BASE_URL}${queryString}`;
    
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.length > 0) {
        setFoundPlace(result[0]);
        console.log("Found a place: ", result[0]);
      } else {
        console.log("No place found.");
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  }

  return (
    <Navbar expand="lg" className="justify-content-between">
      <Container>
        <InputGroup>
          <Form.Control
            placeholder="Hledat..."
            aria-label="Hledat"
            value={searchedPlace}
            onChange={(e) => setSearchedPlace(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                hledat(e);
              }
            }}
          />
          <Button
            style={{
              backgroundColor: "#4caf50",
              border: "0",
              display: "flex",
              alignItems: "center",
            }}
            onClick={hledat}
          >
            <img
              src={require("../images/lupa.png")}
              alt="lupa"
              style={{ width: "20px", height: "20px", filter: "brightness(0)" }}
            />
          </Button>
        </InputGroup>
      </Container>
    </Navbar>
  );
}

export default Hledani;
