import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h3>About Us</h3>
        <p>
          Established in New York City over fifteen years ago, Sneakr
          revolutionized sneaker retail as the original consignment store for
          rare shoes. Carrying the rarest exclusives and collectible sneakers,
          Flight Club has evolved from a one-stop sneaker destination, to a
          cultural hub for sneaker enthusiasts and novices alike.
        </p>
        <p>With three brick-and-mortar locations in New York City, Los Angeles and Miami,
          Flight Club remains the premier source for authentic, rare sneakers.</p>
      </div>
      <div className="aboutImg-container">
        <img
          src="https://www.flightclub.com/static/staticPages/about-us.png"
          alt="store"
        />
      </div>
    </div>
  );
};

export default AboutUs;
