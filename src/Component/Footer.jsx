import React from 'react';
import './footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p className="quote">
                "A different language is a different vision of life." – Federico Fellini
            </p>
            <div className="contact-info">
                <h4>Contact Us</h4>
                <p>Email: info@educationcourse.com</p>
                <p>Phone: +977-9763458906 <br/>+977-9851030748</p>
                <p>Address: Kathmandu,Nepal</p>
            </div>
        </footer>
    );
};

export default Footer;