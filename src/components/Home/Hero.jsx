import { Link } from "react-router-dom"
import "./Hero.css";
import heroImg from '../../assets/Home/ts-wmns.jpeg'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="img-wrapper">
        <img data-qa="HeroImageMobile" data-testid="heroImageMobile" src="https://cms-cdn.flightclub.com/750/676e8edc8678-c599-de11-b34e-0ed17622.jpg" alt="TRAVIS SCOTT X WMNS AIR JORDAN 1 RETRO LOW OG 'OLIVE' Hero Picture Mobile" sizes="100vw" class="sc-htpNat jFpDl sc-WKhSL ijZGpf sc-cmnYtw kcJVfV" srcset="https://cms-cdn.flightclub.com/75/676e8edc8678-c599-de11-b34e-0ed17622.jpg 75w, https://cms-cdn.flightclub.com/120/676e8edc8678-c599-de11-b34e-0ed17622.jpg 120w, https://cms-cdn.flightclub.com/150/676e8edc8678-c599-de11-b34e-0ed17622.jpg 150w, https://cms-cdn.flightclub.com/240/676e8edc8678-c599-de11-b34e-0ed17622.jpg 240w, https://cms-cdn.flightclub.com/375/676e8edc8678-c599-de11-b34e-0ed17622.jpg 375w, https://cms-cdn.flightclub.com/500/676e8edc8678-c599-de11-b34e-0ed17622.jpg 500w, https://cms-cdn.flightclub.com/750/676e8edc8678-c599-de11-b34e-0ed17622.jpg 750w, https://cms-cdn.flightclub.com/1000/676e8edc8678-c599-de11-b34e-0ed17622.jpg 1000w, https://cms-cdn.flightclub.com/1250/676e8edc8678-c599-de11-b34e-0ed17622.jpg 1250w, https://cms-cdn.flightclub.com/1500/676e8edc8678-c599-de11-b34e-0ed17622.jpg 1500w, https://cms-cdn.flightclub.com/1800/676e8edc8678-c599-de11-b34e-0ed17622.jpg 1800w, https://cms-cdn.flightclub.com/2200/676e8edc8678-c599-de11-b34e-0ed17622.jpg 2200w, https://cms-cdn.flightclub.com/2600/676e8edc8678-c599-de11-b34e-0ed17622.jpg 2600w, https://cms-cdn.flightclub.com/3000/676e8edc8678-c599-de11-b34e-0ed17622.jpg 3000w, https://cms-cdn.flightclub.com/3500/676e8edc8678-c599-de11-b34e-0ed17622.jpg 3500w"/>
        {/* <img src={heroImg}/> */}
        </div>
        <h2>TRAVIS SCOTT X WMNS AIR JORDAN 1 RETRO LOW OG 'OLIVE'</h2>
        <Link className="link" to="/">
            Shop Now
          </Link>
    </section>
  )
}

export default Hero
