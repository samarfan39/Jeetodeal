import React from 'react'
import { useState, useRef, useEffect } from "react"

export default function ImgSlider() {
    const images = [
        "/Images/1.jpg",
        "Images/2.jpg",
        "Images/3.jpg",
        "Images/4.jpg",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    const slidewidth = 400;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }
    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 3000);
        return () => clearInterval(intervalRef.current)
    }, []);
    return (
        <div style={{ width: "400px", height: "100%", overflow: "hidden" }}>
            <div className="slidepic" style={{ ...styles.slidepic, transform: `translateX(-${currentIndex * slidewidth}px)` }}>
                {images.map((src, i) => (<img src={src} key={i} style={{height:"250px",width:"400px"}}/>))}
            </div>
        </div>
    );
}
const styles = {
    box1: {
        width: "100vw",
    },
    slidepic: {
        display: "flex"
    }
};