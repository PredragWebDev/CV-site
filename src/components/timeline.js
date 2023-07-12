import React, { Component } from "react";
import { FaReact, FaGraduationCap, FaExternalLinkAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Timeline extends Component {
	constructor() {
		super();
		this.state = {
			work_list: [
				{
					role: "Senior Full-Stack Developer",
					company: "Vega IT Sourcing",
					time: "01/2019 to 06/2022",
					description: [
						"	Led architecture, design, and development of 30+ new features.",
						"	Presented and conveyed ideas and designs with 4+ technical teams and 12+ business partners.",
						"	Developed 40+ applications following Agile product development methodologies.",
						"	Oversaw the development and maintenance of new products, technical documentation and workflows.",
						"	Designed, built and automated data flows to save 10+ hours of tedious work per week.",
						"	Assisted in requirements analysis, High Level Design, Low Level Design, and complex code development for 20+ applications.",
					],

					icon: <MdWork />,
					iconBackgroundColor: "rgb(233, 30, 99)",
					iconColor: "#fff",
					// link:
					// 	"https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_2Ap99mtz77SRfiiC5_completion_certificate.pdf",
				},
				{
					role: "Full stack developer ",
					company: "Nordeus",
					time: "04/2017 to 01/2019",
					description: [
						"	Assisted in requirements analysis, High Level Design, Low Level Design, and complex code development for 20+ applications.",
						"	Communicated with line of business and managed the overall status and health of 20+ applications.",
						"	Wrote 200+ unit tests to ensure 100% of code within SDLC was without bugs.",
						"	Attended 100+ weekly standup meetings to receive weekly tasks and mentorship from senior developers.",
						"	Maintained 8+ systems and applications as Tier 2 support (break-fix and data changes)",
					],

					icon: <FaReact />,
					iconBackgroundColor: "#0078ff",
					iconColor: "#fff",
					// link: "/files/QDSPro_Intership_Certificate.pdf"
				},
				{
					role: "Junior Full-Stack Engineer",
					company: "Symphony",
					time: "06/2014 to 04/2017",
					description: [
						"	Collaborated with 3 engineering and design teams to integrate external APIs into web pages and applications.",
						"	Evaluated and improved existing data systems under mentor supervision.",
						"	Developed 30+ new software solutions by analyzing system performance standards.",
						"	Developed code following common security practices and development design patterns."
					],
					icon: <FaGraduationCap />,
					iconBackgroundColor: "rgb(16, 204, 82)",
					iconColor: "#fff",
				},
				{
					role: "Education",
					company: "ETF Beograde",
					time: "2010 - 2014",
					description: ["Bachelor of Science: Computer Science- 2013"],
					icon: <FaGraduationCap />,
					iconBackgroundColor: "rgb(16, 204, 82)",
					iconColor: "#fff",
				},
			],
		};
	}

	render() {
		return (
			<section id="timeline" className="timeline-section">
				<div className="container">
					<div className="title-box text-center">
						<h3 className="title-a-timeline">Work Experience & Education</h3>

						<div className="line-mf-timeline"></div>
					</div>

					<VerticalTimeline>
						{this.state.work_list.map((item, i) => (
							<VerticalTimelineElement
								key={i}
								className="vertical-timeline-element--work"
								date={item.time}
								icon={item.icon}
								iconStyle={{
									background: item.iconBackgroundColor,
									color: item.iconColor,
								}}
								contentStyle={{
									borderTop: `3px solid ${item.iconBackgroundColor}`,
								}}
							>
								<h3 className="vertical-timeline-element-title">
									{item.role}{" "}
								</h3>
								<h5 className="vertical-timeline-element-subtitle mt-2 ">
									{item.company}
									{item.link && (
										<a target="_blank" rel="noopener noreferrer" className="ml-2 timeline-link-icon" href={item.link}>
											<FaExternalLinkAlt />
										</a>
									)}
								</h5>
								<ul>
									{item.description.map((d, i) => (
										<li key={i} >{d} </li>
									))}
								</ul>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
				</div>
			</section>
		);
	}
}

export default Timeline;
