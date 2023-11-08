function Home() {
  return (
    <div className="Main-Panel">
      <h2>Interaktivní mapa sběrných míst</h2>
      <br />
      <p>
        Mapa sběrných míst vám pomůže nalézt nejbližší sběrný box, kam můžete
        odevzdat odpadní baterie. Zadejte lokalitu, která vás zajímá, a zobrazí
        se vám všechna sběrná místa v okolí.
      </p>
      <br />
      <div className="home-img-wrapper">
        <img src={require("../images/battery-recycling.png")} />
      </div>
    </div>
  );
}

export default Home;
