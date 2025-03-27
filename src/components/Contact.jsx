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
                                <div className = "text-contact-container">
                                    <p>
                                        Get in touch with me by filling out the form below.
                                    </p>
                                </div>
                            </div>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Send Message</button>
                        </form>
                </div>  
            </section>
        </>    
    );
};  

export default Contact;