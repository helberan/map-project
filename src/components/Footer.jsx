function Footer() {
  return (
    <div className="Footer">
      <p>2023 &copy; Helena Beranová</p>
      <nav className="social">
        <a
          href="https://www.linkedin.com/in/helena-beranov%C3%A1-908611226/"
          target="_blank"
        >
          <img src={require("../images/linkedin.png")} />
        </a>
      </nav>
    </div>
  );
}

export default Footer;
