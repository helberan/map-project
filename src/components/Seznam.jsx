import provozovny from "../MOCK_DATA.json";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Seznam({ setSelectedMarker, setFoundPlace }) {
  const navigate = useNavigate();

  const handleClick = (provozovna) => {
    setSelectedMarker(provozovna);
    setFoundPlace(provozovna);
    navigate("/misto");
  };

  return (
    <div className="Main-Panel">
      <h2>Seznam míst</h2>
      <div className="Main-Panel-Seznam">
        {provozovny.map((provozovna) => (
          <Card
            key={provozovna.id}
            onClick={() => handleClick(provozovna)}
            style={{ cursor: "pointer", border: "0" }}
          >
            <Card.Body>
              <Card.Title>{provozovna.nazev}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {provozovna.ulice}
                <br />
                {provozovna.obec} {provozovna.psc}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Seznam;
