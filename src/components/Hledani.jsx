import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Hledani({ setFoundPlace }) {
  const [searchedPlace, setSearchedPlace] = useState(""); //hodnota v input políčku
  //const [foundPlace, setFoundPlace] = useState({}); //hodnota/data hledaného slova - searchedPlace

  //základní adresa nominatim api - pro hledání daného místa v mapě
  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

  //hledání konkrétního místa v mapě
  async function hledat(e) {
    const params = {
      q: searchedPlace, //hodnota inputu - tedy co hledáme
      format: "json", //formát api
      addressdetails: 1, //udává detaily pro hledané místo - co vše se zobrazí
    };

    //převod objektu params do správného tvaru
    //např. pokud q bude "praha" - q=praha&format=json&addressdetails=1
    const queryString = new URLSearchParams(params).toString();

    //podrobnosti API callu
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
      //příchozí data
      const result = await response.json();
      console.log("výsledky: ", result);
      setFoundPlace(result[0]); //do setFoundPlace se uloží první nalezené místo
      console.log("Found a place: ", result[0]);
    } catch (err) {
      console.error("err: ", err); //pokud se něco pokazí, konzole vypíš chybu
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
