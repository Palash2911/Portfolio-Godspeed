import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./achieve.css";

const Acheivement = (props) => {
  const { description } = props;

  const achievementStyle = {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "11px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer"
  };

  return (
    <React.Fragment>
      <div className="achievement" style={achievementStyle}>
        <div className="achieve-desc">
          {description}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Acheivement;
