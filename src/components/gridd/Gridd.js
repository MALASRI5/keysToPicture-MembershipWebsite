import React from "react";
import cameraImage from './girl camera (2).png'; 
import './Gridd.css';

const Grid = () => {
    return (
        <div className="grid">
            <section className="content">
                <div className="img-sec">
                    <img src={cameraImage} alt="Person holding a camera" className="img" />
                </div>
                <div className="text-sec">
                    <p className="tit">How Does The Academy Work?</p>
                    <p className="des">
                        The Academy videos are released weekly and are easy-to-follow videos .
                        All of the training is online and let you learn at your own peace.
                    </p>
                    <p className="des">
                        The Academy also includes Katie answering questions and offers critique advice 
                        to ensure that studentsget consistent ideas and receive the highest value from their investment.
                    </p>
                    <p className="des">You're a student as long as you need to be.</p>
                </div>
            </section>
        </div>

    );
};

export default Grid;
