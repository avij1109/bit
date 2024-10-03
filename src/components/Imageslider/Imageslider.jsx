
import React, { useState } from 'react';
import './ImageSlider.css'; 

const ImageSlider = () => {
    const images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <div className="slider">
                <button className="prev" onClick={prevSlide}>❮</button>
                <img src={images[currentIndex]} alt="Slider" className="slider-image" />
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default ImageSlider;
