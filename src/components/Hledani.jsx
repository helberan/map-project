import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Hledani({ setFoundPlace }) {
  //value of input field
  const [searchedPlace, setSearchedPlace] = useState("");
  //value/data of searched place - searchedPlace
  //const [foundPlace, setFoundPlace] = useState({});

  //basic address nominatim api - for searching of the place in the map
  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

  //function for searching the place
  async function hledat(e) {
    const params = {
      q: searchedPlace, //value of input - what are we searching for
      format: "json", //format
      addressdetails: 1, //sets what should be displayed
    };

    //converting the params object to the correct format
    //e.g. for "praha" -> q=praha&format=json&addressdetails=1
    const queryString = new URLSearchParams(params).toString();

    //API call details
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      //api call
      const response = await fetch(
        `${NOMINATIM_BASE_URL}${queryString}`,
        requestOptions
      );
      //recieved data
      const result = await response.json();
      console.log("výsledky: ", result);
      setFoundPlace(result[0]); //first matched place
      console.log("Found a place: ", result[0]);
    } catch (err) {
      console.error("err: ", err); //error to console
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
            onChange={(e) => {
              setSearchedPlace(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                hledat();
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
          </Button>{" "}
        </InputGroup>
      </Container>
    </Navbar>
  );
}

export default Hledani;
