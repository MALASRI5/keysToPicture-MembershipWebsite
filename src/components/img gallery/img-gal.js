import React from "react";
import "./img-gal.css";
import Image1 from './images/image1.png';
import Image2 from './images/image2.png';
import Image3 from './images/image3.png';

const ImgGallery = () => {
  const images = [
    {
      src: Image1, 
      alt: "Mother kissing child",
      className: "image-large"
    },
    {
      src: Image2,
      alt: "Child close-up",
      className: "image-medium"
    },
    {
      src: Image3,
      alt: "Child looking through window",
      className: "image-large"
    }
  ];

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} className={image.className} />
      ))}
    </div>
  );
};

export default ImgGallery;
