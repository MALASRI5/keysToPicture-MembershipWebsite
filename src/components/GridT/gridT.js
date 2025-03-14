import React from "react";
import './gridT.css';
import cameraImage from './girl image (6).png'
const GridT = () => {
    return (
        <div className="grid">
            <section className="content">
                <div className="img-sec">
                    <img src={cameraImage} alt="Person holding a camera" className="imgg" />
                </div>
                <div className="text-sec">
                    <p className="des">Photography Instructor</p>
                    <p className="tit">Katie Evans</p>
                    <p className="des">
                        Katie Evans has been a professional photographer for
                        the past 8 years. She has written 3 sought after photography
                        books as well as owns and operates Key to Pictures.
                        Katie has been teaching photography online and in person to 
                        students worldwide. She adores her students and is committed to
                        helping them succeed.
                    </p>
                </div>
            </section>
        </div>

    );
};

export default GridT;
