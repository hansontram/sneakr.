import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return <div>{`Copyright © sneakr. ${year}`}</div>;
};

export default Footer;
