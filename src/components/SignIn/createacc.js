import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { FaLinkedin, FaFacebook, FaGoogle } from 'react-icons/fa';
import './createacc.css';

const CreateAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = (e) => {
        e.preventDefault();

        if (firstName && lastName && email && password) {
            // Send the email using EmailJS
            sendEmail(firstName, lastName, email);

            // Reset form fields after submission
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
        } else {
            alert('Please fill in all fields.');
        }
    };

    const sendEmail = (firstName, lastName, toEmail) => {
        const serviceID = 'service_vhvxqkg';
        const templateID = 'template_4usc3vr';
        const userID = '9sJkEisVC2slNWTIq';

        const templateParams = {
            to_email: toEmail, 
            message: `Welcome ${firstName} ${lastName}! Thank you for creating an account at Keys to Pictures.`,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Account created successfully! A confirmation email has been sent.');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Failed to create account. Please try again later.');
            });
    };

    return (
        <div className="create-account-link">
            <div className="create-container">
                <h1>Create a new Account</h1>

                <form className="signin-form" onSubmit={handleCreateAccount}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        className='name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        className='name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="signin-button">
                        Create Account
                    </button>
                </form>

                <div className="divider">or sign in with</div>

                <div className="social-signin">
                    <button className="social-button linkedin">
                        <FaLinkedin />
                    </button>
                    <button className="social-button facebook">
                        <FaFacebook />
                    </button>
                    <button className="social-button google">
                        <FaGoogle />
                    </button>
                </div>

                <div className='space'></div>
                <a href="/signin" className="at">I already have an Account</a>
                <div className='space'></div>
                <div className='space'></div>
            </div>

            <footer className="footer">
                <p className="copyright">© Copyright Key to Pictures 2024</p>
            </footer>
        </div>
    );
};

export default CreateAccount;
