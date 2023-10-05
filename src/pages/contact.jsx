import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import emailjs from '@emailjs/browser';
import "./styles/contact.css";

const Contact = () => {

	const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
	const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
	const userId = process.env.REACT_APP_EMAILJS_API_KEY;
	
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		contact: '',
		message: ''
	  });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const handleChange = (e) => {
		console.log(serviceId);
		const { name, value } = e.target;
    	setFormData({ ...formData, [name]: value });
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceId, templateId, e.target, userId).then((result) => {
			console.log(result.text);
			setFormData({
				name: "",
				email: "",
				contact: "",
				message: "",
			  })
			alert("Form Submitted!");
		}, (error) => {
			console.log(error.text);
		});
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							<strong>Let's Get in Touch</strong>
						</div>

						<div className="inner-contact-container">
							<div className="form-container">
								<form onSubmit={handleSubmit} className="contact-form">
									<div className="form-group">
										<label htmlFor="name">Name:</label>
										<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="form-input"
										/>
									</div>
									<div>
										<label htmlFor="email">Email:</label>
										<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="form-input"
										/>
									</div>
									<div>
										<label htmlFor="contact">Contact:</label>
										<input
										type="text"
										id="contact"
										name="contact"
										value={formData.contact}
										onChange={handleChange}
										required
										className="form-input"
										/>
									</div>
									<div>
										<label htmlFor="message">Message:</label>
										<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										className="form-input"
										/>
									</div>
									{/* <button type="submit" className="submit-button">SUBMIT</button> */}
									<button class="btn">
										<i class='bx bx-send'></i>
										<span class="text">
											Send Message
										</span>
										<span class="loading-animate"></span>
									</button>
								</form>
							</div>
							
							<div className="socials-container">
								<div className="contact-socials">
									<Socials />
								</div>
							</div>

						</div>
						
					</div>
				</div>
			</div>
			<Footer></Footer>
		</React.Fragment>
	);
};

export default Contact;
