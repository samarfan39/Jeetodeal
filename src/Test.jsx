import { useEffect, useRef, useState } from "react";

export default function Test() {
  const images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250",
    "https://picsum.photos/id/1018/400/250",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const slideWidth = 400;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.box}>
        <div
          style={{
            ...styles.slider,
            transform: `translateX(-${currentIndex * slideWidth}px)`
          }}
        >
          {images.map((src, i) => (
            <img key={i} src={src} alt={`slide-${i}`} style={styles.img} />
          ))}
        </div>

        <button style={{ ...styles.btn, left: 0 }} onClick={prevSlide}>
          ◀
        </button>
        <button style={{ ...styles.btn, right: 0 }} onClick={nextSlide}>
          ▶
        </button>
      </div>
    </div>
  );
}

const styles = {
  body: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    border: "1px solid black",
    width: "400px",
    overflow: "hidden",
    position: "relative",
  },
  slider: {
    display: "flex",
    transition: "0.5s",
  },
  img: {
    width: "400px",
    height: "250px",
  },
  btn: {
    position: "absolute",
    top: "45%",
    border: 0,
    background: "#0008",
    color: "#fff",
    fontSize: "20px",
    cursor: "pointer",
  },
};
