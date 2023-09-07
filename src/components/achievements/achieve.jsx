import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Acheivement = (props) => {
	const { description } = props;

	return (
		<React.Fragment>
			<div className="achievement">

				<div className="achieve-desc">{description}</div>
				{/* <Link to={link}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						<div className="article-link">
							Read Article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</Link> */}
			</div>
		</React.Fragment>
	);
};

export default Acheivement;
