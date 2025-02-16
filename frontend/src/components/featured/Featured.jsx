import { useState, useEffect } from "react";

const Featured = () => {
  const [position, setPosition] = useState(0);
  const slides = [
    {
      image:
        "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
      title: "Dublin",
      properties: "123 properties",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
      title: "Reno",
      properties: "533 properties",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
      title: "Austin",
      properties: "532 properties",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((prev) => (prev + 1) % 300); // Large number for continuous movement
    }, 50); // Smaller interval for smoother animation
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="featured" style={{ transform: `translateX(-${position}px)` }}>
      <div className="slider-track">
        {/* First set of slides */}
        {slides.map((slide, index) => (
          <div key={`set1-${index}`} className="featuredItem">
            <img src={slide.image} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>{slide.title}</h1>
              <h2>{slide.properties}</h2>
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {slides.map((slide, index) => (
          <div key={`set2-${index}`} className="featuredItem">
            <img src={slide.image} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>{slide.title}</h1>
              <h2>{slide.properties}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
