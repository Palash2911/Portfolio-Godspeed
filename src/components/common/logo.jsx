import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";

const Logo = ({ width, link = true, darkMode = false }) => {
  const src = darkMode ? INFO.main.logoDark : INFO.main.logo;

  const imageElement = (
    <img
      src={src}
      alt="logo"
      width={width}
      style={{
        width: width,
        maxWidth: "100%",
        height: "auto",
        display: "block",
      }}
    />
  );

  return (
    <React.Fragment>
      {link ? <Link to="/">{imageElement}</Link> : imageElement}
    </React.Fragment>
  );
};

export default Logo;
