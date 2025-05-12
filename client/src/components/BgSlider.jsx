import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Remove background with high <br /> Quality and accuracy
      </h1>

      {/* Image slider section */}
      <div className="relative mt-10 w-full max-w-3xl m-auto rounded-xl overflow-hidden">
        {/* Background Image (original with BG) */}
        <img
          src={assets.image_w_bg}
          alt="With Background"
          className="w-full h-auto object-cover"
        />

        {/* Foreground Image (no BG) */}
        <img
          src={assets.image_wo_bg}
          alt="Without Background"
          className="w-full h-auto object-cover absolute top-0 left-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            zIndex: 10,
          }}
        />
      </div>

      {/* Slider */}
      <div className="max-w-3xl m-auto mt-6">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="w-full slider"
        />
      </div>
    </div>
  );
};

export default BgSlider;
