function Footer() {
  return (
    <div className="Footer">
      <p>
        2023 &copy;{" "}
        <a href="https://www.ecobat.cz/" target="_blank">
          ECOBAT s.r.o.
        </a>
      </p>
      <nav className="social">
        <a href="https://www.instagram.com/ecocheesecz/" target="_blank">
          <img src={require("../images/instagram2.png")} />
        </a>
        <a href="https://www.facebook.com/ecocheese" target="_blank">
          <img src={require("../images/facebook.png")} />
        </a>
        <a href="https://www.youtube.com/@ecobatsro8826" target="_blank">
          <img src={require("../images/youtube.png")} />
        </a>
      </nav>
    </div>
  );
}

export default Footer;
