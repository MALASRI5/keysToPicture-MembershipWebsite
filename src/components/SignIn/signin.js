import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import { useNavigate } from 'react-router-dom'; 
import './signin.css';
import { FaLinkedin, FaFacebook, FaGoogle } from 'react-icons/fa'; 

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSignIn = (e) => {
        e.preventDefault();
        if (email && password) {
            sendEmail(email);
            alert(`Welcome Back, ${email}! You have successfully signed in. Have a great learning here.`);
            navigate('/');
        } else {
            alert('Please enter both email and password.');
        }
    };

    const sendEmail = (toEmail) => {
        const serviceID = 'service_vhvxqkg';
        const templateID = 'template_4usc3vr';
        const userID = '9sJkEisVC2slNWTIq';

        const templateParams = {
            to_email: toEmail, 
            message: 'Thank you for signing in to Keys to Pictures! Enjoy your learning journey.',
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };

    return (
        <div id="sign">
            <div className="signin-container">
                <h1>Welcome Back!</h1>
                <form className="signin-form" onSubmit={handleSignIn}>
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
                    <div className="form-options">
                        <div className="rem">
                            <label htmlFor="remember">
                                Remember me
                            </label>
                        </div>
                        <a href="/forgot-password" target="_self">Forgot Password?</a>
                    </div>
                    <button type="submit" className="signin-button">
                        Sign in
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
                <a href="/create-account" className="create-account-link">Create a new account</a>
                <div className='space'></div>
            </div>
            <footer className="footer">
                <p className="copyright">© Copyright Key to Pictures 2024</p>
            </footer>
        </div>
    );
};

export default SignIn;
