import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import baterie from "../baterie_data.json";

function Sber() {
  const popover = (baterka) => (
    <Popover id={`popover-${baterka.id}`}>
      <Popover.Header as="h3">
        <strong>{baterka.categoryName}</strong>
      </Popover.Header>
      <Popover.Body>{baterka.description}</Popover.Body>
    </Popover>
  );

  return (
    <div className="Main-Panel">
      <h2>Co se sbírá</h2>
      <div className="img-wrapper">
        {baterie.map((baterka, index) => (
          <OverlayTrigger
            key={index}
            trigger="click"
            placement="bottom"
            overlay={popover(baterka)}
          >
            <img
              src={require(`../images/${baterka.fileName}`)}
              alt={baterka.categoryName}
            />
          </OverlayTrigger>
        ))}
      </div>
    </div>
  );
}

export default Sber;
