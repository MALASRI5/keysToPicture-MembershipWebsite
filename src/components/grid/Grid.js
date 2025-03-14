import React from "react";
import cameraImage from './girl camera (5).png'; 
import './Grid.css';

const Grid = () => {
    return (
        <div className="grid">
            <section className="content">
                <div className="text-sec">
                    <p className="tit">What is the Academy?</p>
                    <p className="sub-tit">The Advanced Class</p>
                    <p className="des">
                        The Academy is an interactive video-based training program that teaches easy to understand, 
                        digestible ways of professional style photography to DSLR owners who want better pictures and 
                        more confidence with their camera.
                    </p>
                    <p className="des">
                        For those who have at least a basic knowledge of their camera and help take their pictures to
                         the next level.
                    </p>
                </div>
                <div className="img-sec">
                    <img src={cameraImage} alt="Person holding a camera" className="img" />
                </div>
            </section>
        </div>
    );
};

export default Grid;
