import React, {useState} from "react";
import "./Contact.css"



const Contact = () => {
     // State for the contact form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Update state when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({ name: "", email: "", message: "" });
  };
    return (
        <>
            {/* <section className = "header-section">
                <div className="header-img-position"/>
            </section> */}
            <section className = "contact-wrapper">
                    <div className="contact-container">
                            <div className="text-contact-header">
                                <h1>Contact</h1>
                                <div
                                    className="header-bar waypoint animated slide-in-right"
                                    data-animation="slide-in-right"
                                    data-delay=".25s"
                                    style={{ animationDelay: "0.25s", opacity: 1 }}
                                ></div>
                                <div className = "text-contact-container">
                                    <p>
                                        Have a question or want to work together?
                                    </p>
                                </div>
                            </div>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            <label htmlFor="message"></label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button
                                className="button"
                                type="submit"
                                id="submit"
                                value="SUBMIT"
                                style={{
                                    "--ripple-x": "3.45001220703125px",
                                    "--ripple-y": "34.012481689453125px",
                                    "--ripple-scale": "2.244197134420428"
                                }}
                                >
                                <span>Send Message</span>
                            </button>

                        </form>
                </div>  
            </section>
        </>    
    );
};  

export default Contact;


