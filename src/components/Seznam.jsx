import provozovny from "../tisic_provozoven.json";
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
            style={{ width: "18rem", border: "0", cursor: "pointer" }}
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
