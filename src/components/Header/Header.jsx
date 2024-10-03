import React, { useState, useEffect } from 'react';
import './Header.css';

const images = [
    "https://content.jdmagicbox.com/comp/durg/t1/9999px788.x788.180817212745.d9t1/catalogue/bit-durg-raipur-naka-durg-colleges-eedkuoex44.jpg?clr=#38382e?w=3840&q=75",
    "https://www.static-contents.youth4work.com/university/Documents/Colleges/newsEvent/574869aa-5b2b-44f1-959e-2ee7950bfeed.jpg",
    "https://content.jdmagicbox.com/comp/durg/e5/9999px788.x788.170422003042.g4e5/catalogue/bitdurg-bhilai-house-durg-g9qt3om.jpg?w=3840&q=75"
];

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval); 
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className={`slider-image ${index === currentIndex ? 'active' : ''}`}
                />
            ))}
            <button className="slider-button left" onClick={prevSlide}>❮</button>
            <button className="slider-button right" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Header;
