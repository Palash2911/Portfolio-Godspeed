import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Acheivement = (props) => {
  const { description } = props;

  const achievementStyle = {
    backgroundColor: "#f7f7f7",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#333",
  };

  return (
    <React.Fragment>
      <div className="achievement" style={achievementStyle}>
        <div className="achieve-desc" style={descriptionStyle}>
          {description}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Acheivement;
