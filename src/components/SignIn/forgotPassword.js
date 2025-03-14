import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './forgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const sendResetEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            to_email: email,
            subject: 'Password Reset Request',
            message: 'Click the link below to reset your password.'
        };

        emailjs.send(
            'your_service_id',
            'your_template_id',
            templateParams,
            'your_user_id'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatusMessage('Reset instructions sent to your email.');
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatusMessage('Something went wrong. Please try again later.');
            });
    };

    return (
        <div className="forgot">
            <div className="signin-container">
                <h1>Forgot your Password?</h1>
                <p>Enter the email you signed up with, and we will send you reset instructions.</p>

                <form className="signin-form" onSubmit={sendResetEmail}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="signin-button">Submit</button>
                </form>

                {statusMessage && <p className="status-message">{statusMessage}</p>}  
            </div>
            <footer className="footer">
                <p className="copyright">© Copyright Key to Pictures 2024</p>
            </footer>
        </div>
    );
};

export default ForgotPassword;
