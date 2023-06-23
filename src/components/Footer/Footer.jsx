import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="main-content">
        <div className="footer-left">
          <span>LOGO</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>
        <div className="footer-right">
        <a href=""><InstagramIcon/></a>
          <a href=""><TwitterIcon/></a>
          <a href=""><FacebookIcon/></a>
          <a href=""><PinterestIcon/></a>
        </div>
      </div>
      <div className="credits">
        <p>{`© sneakr. ${year}`}</p>
        <p>
          Created with ❤️ by <a href="https://github.com/hansontram">Hanson</a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
