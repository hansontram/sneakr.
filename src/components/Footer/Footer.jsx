import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className="footer-container">{`Copyright © sneakr. ${year}`}</div>;
};

export default Footer;
