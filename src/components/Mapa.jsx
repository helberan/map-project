import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L, { Icon } from "leaflet";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import provozovny from "../tisic_provozoven.json";

function ResetCenterView({ foundPlace }) {
  const map = useMap();

  useEffect(() => {
    if (foundPlace && foundPlace.lat && foundPlace.lon) {
      map.setView(
        [parseFloat(foundPlace.lat), parseFloat(foundPlace.lon)],
        13,
        {
          animate: true,
        }
      );
    }
  }, [foundPlace, map]);

  return null;
}

function Mapa({ setSelectedMarker, foundPlace }) {
  //const mapTileUrl = "https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=rtm15iGTxIh31aG3lI6g";
  const openStreetMapUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const navigate = useNavigate();

  // ikonka - ecobat sběrné místo
  const ecobatIcon = new Icon({
    iconUrl: require("../images/ecobat_marker.png"), //zdroj
    iconSize: [34, 38], // velikost
  });

  // ikonka - hledání místa
  const icon = new Icon({
    iconUrl: require("../images/pin.png"), //zdroj
    iconSize: [43, 43], // velikost
  });

  let foundPlaceCoordinates = [50.0835494, 14.4341414];

  if (foundPlace && foundPlace.lat && foundPlace.lon) {
    foundPlaceCoordinates = [
      parseFloat(foundPlace.lat),
      parseFloat(foundPlace.lon),
    ];
  }

  return (
    <MapContainer
      center={
        foundPlace && foundPlace.lat && foundPlace.lon
          ? [parseFloat(foundPlace.lat), parseFloat(foundPlace.lon)]
          : [49.8882525, 15.531435]
      }
      zoom={8}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={openStreetMapUrl}
      />

      {foundPlaceCoordinates.length ? (
        <Marker position={foundPlaceCoordinates} icon={icon}></Marker>
      ) : null}

      <MarkerClusterGroup>
        {provozovny.map((provozovna) => (
          <Marker
            position={[parseFloat(provozovna.lat), parseFloat(provozovna.lon)]}
            icon={ecobatIcon}
            key={provozovna.kod}
            eventHandlers={{
              click: () => {
                setSelectedMarker(provozovna);
                navigate("/misto");
              },
            }}
          ></Marker>
        ))}
      </MarkerClusterGroup>
      <ResetCenterView foundPlace={foundPlace} />
    </MapContainer>
  );
}

export default Mapa;
