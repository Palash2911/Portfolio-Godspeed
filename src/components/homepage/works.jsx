import React from "react";
import { faBriefcase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import ribin from "../../assets/ribinimg.png"
import nuance from "../../assets/nuanceimg.jpg"
import zylu from "../../assets/zyluimg.jpeg"
import devcorps from "../../assets/devcorps.jpeg"
import cpmc from "../../assets/cpmcimg.jpeg"
import gdsc from "../../assets/gdscimg.png"
import draic from "../../assets/draicimg.png"

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={ribin}
								alt="ribin"
								className="work-image"
							/>
							<div className="work-title">CloserTech Private Limited</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">July 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src={nuance}
								alt="nuance"
								className="work-image"
							/>
							<div className="work-title">Nuance Communications (Now Microsoft)</div>
							<div className="work-subtitle">
								Software Developer Intern
							</div>
							<div className="work-duration">May 2023 - July 2023</div>
						</div>

						<div className="work">
							<img
								src={zylu}
								alt="zylu"
								className="work-image"
							/>
							<div className="work-title">Zylu Business Solutions Private Limited</div>
							<div className="work-subtitle">
								Flutter Developer Intern
							</div>
							<div className="work-duration">March 2023 - May 2023</div>
						</div>

						<div className="work">
							<img
								src={devcorps}
								alt="devcorps"
								className="work-image"
							/>
							<div className="work-title">DevCorps It Solutions and Services</div>
							<div className="work-subtitle">
								Web Developer Intern
							</div>
							<div className="work-duration">November 2021 - April 2022</div>
						</div>
					</div>
				}
			/>
			<br /><br />
			<Card
				icon={faLaptopCode}
				title="Technical Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={gdsc}
								alt="gdsc"
								className="work-image"
							/>
							<div className="work-title">Google Developer Students Club (GDSC)</div>
							<div className="work-subtitle">
								Android Specialist
							</div>
							<div className="work-duration">Aug 2022 - Jul 2023</div>
						</div>

						<div className="work">
							<img
								src={cpmc}
								alt="cpmc"
								className="work-image"
							/>
							<div className="work-title">Competitive Programming and Mentorship Club (CPMC)</div>
							<div className="work-subtitle">
								Co-Founder | Vice-Captain
							</div>
							<div className="work-duration">May 2022 - Jan 2023</div>
						</div>

						<div className="work">
							<img
								src={draic}
								alt="draic"
								className="work-image"
							/>
							<div className="work-title">D.Y. Patil Robotics & AI Club (DRAIC)</div>
							<div className="work-subtitle">
								Technical Team Member
							</div>
							<div className="work-duration">Sept 2021 - May 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
