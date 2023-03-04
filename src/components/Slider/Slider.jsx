import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import image1 from "../../resources/images/blue.jpg";
import image2 from "../../resources/images/red.jpg";
import image3 from "../../resources/images/rose.jpg";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [image1, image2, image3];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className='slider'>
      <div
        className='container'
        style={{ transform: `translateX(-${currentSlide * 100}vW)` }}
      >
        <img
          src={data[0]}
          alt='A fashion product, showcasing our latest collection of trendy and stylish fashion pieces for men and women. Explore our carefully curated selection of clothing and accessories designed to elevate your wardrobe and suit any occasion and style. Shop now and upgrade your look with our high-quality products at affordable prices.'
        />
        <img
          src={data[1]}
          alt='A fashion product, showcasing our latest collection of trendy and stylish fashion pieces for men and women. Explore our carefully curated selection of clothing and accessories designed to elevate your wardrobe and suit any occasion and style. Shop now and upgrade your look with our high-quality products at affordable prices.'
        />
        <img
          src={data[2]}
          alt='A fashion product, showcasing our latest collection of trendy and stylish fashion pieces for men and women. Explore our carefully curated selection of clothing and accessories designed to elevate your wardrobe and suit any occasion and style. Shop now and upgrade your look with our high-quality products at affordable prices.'
        />
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
