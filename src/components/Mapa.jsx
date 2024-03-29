import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon } from "leaflet";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import provozovny from "../MOCK_DATA.json";

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
  const openStreetMapUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const navigate = useNavigate();

  // marker icon
  const markerIcon = new Icon({
    iconUrl: require("../images/marker.png"), //source
    iconSize: [34, 34], // size
  });

  // found place marker
  const icon = new Icon({
    iconUrl: require("../images/pin.png"), //source
    iconSize: [43, 43], // size
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
            icon={markerIcon}
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
