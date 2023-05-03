import { Link } from "react-router-dom";
import "./Hero.css";
import heroImg from "../../../assets/Home/ts-wmns.jpeg"

const Hero = () => {
  return (
    <section className="hero-container">
      <div>
        <img className="hero-img" src={heroImg} />
      </div>
      <div className="hero-text">
        <h2>TRAVIS SCOTT X WMNS AIR JORDAN 1 RETRO LOW OG 'OLIVE'</h2>
        <Link className="link" to="/">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
