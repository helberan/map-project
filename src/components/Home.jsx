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
      <p>
        V Seznamu míst můžete jednoduše pomocí filtru vyhledat místo podle názvu
        ulice, obce nebo PSČ.
      </p>
      <br />
      <div className="home-img-wrapper">
        <img src={require("../images/transportbox.jpg")} />
      </div>
    </div>
  );
}

export default Home;
