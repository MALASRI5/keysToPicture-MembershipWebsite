import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Grid from './components/grid/Grid';
import Gridd from './components/gridd/Gridd';
import ImgGallery from './components/img gallery/img-gal';
import Gridthree from './components/GridT/gridT';
import SignIn from './components/SignIn/signin'; 
import ForgotPassword from './components/SignIn/forgotPassword'; 
import CreateAccount from './components/SignIn/createacc';
import AllCourses from './components/AllCourses/allCourse';
import './App.css';
import Logo from './components/image/logo.png';

function App() {
  return (
    <Router>
      <div className="App" id='AppJ'>
        <nav>
          <img src={Logo} alt='Logo' className='logo' />
          <ul>
            <Link to="/allCourse" className='at'><li>ALL COURSES</li></Link>
            <Link to="/signin" className='at'><li>SIGN IN</li></Link>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <>
              <div className='space'></div>
              <div className="banr">
                <div className="text-overlay">
                  <h1 className="headline">Master Your Camera</h1>
                  <p className="subheadline">
                    Grow your confidence with the camera without the frustration.
                  </p>
                </div>
              </div>
              <Grid />
              <ImgGallery />
              <div className='spacee'></div>
              <Gridd />
              
              <div className='spacee'></div>
              <p className="h-line1">Your Mentor</p>
              <Gridthree />
              <div className='spacee'></div>
              <div className="banner">
                <div className="text-overlay">
                  <h4 className="headline">What's the Investment? Are There Payment Plans or Scholarships?</h4>
                  <p className="sub-headline">
                    The investment for the Academy is $495. Yes, we do offer payment plans and hold a scholarship contest every year.
                  </p>
                  <button className="custom-button">Get started now</button>
                </div>
              </div>
              <div className="pri-con">
                <div className="pri-sec">
                  <div className="pri-desc">
                    <h3>Pricing options</h3>
                    <p>You can pay it all at once or split it into five payments. There’s no difference.</p>
                  </div>
                  <div className="pri-box">
                    <div className="price">
                      <h4>$37.00 / month</h4>
                      <p>Regular price</p>
                    </div>
                    <a href='#AppJ'><button className="get-started-button">Get started now</button> </a>
                  </div>
                </div>
                <div className="bonus-section">
                  <h3>BONUS!</h3>
                  <p>After you have taken the course, you will be automatically eligible for our affiliate program.</p>
                </div>
                <footer className="footer">
                  <p className="copyright">© Copyright Key to Pictures 2024</p>
                </footer>
              </div>
            </>
          } />
          <Route path="/allCourse" element={<AllCourses />} /> 
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
          <Route path="/create-account" element={<CreateAccount />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
