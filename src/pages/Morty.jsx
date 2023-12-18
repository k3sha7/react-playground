import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Eye = ({ angle, axis }) => {
  const transform = `rotate(${angle}deg)`;

  return (
    <img
      className={"absolute text-6xl w-4 h-4 " + axis}
      style={{ transform }}
      src="./src/assets/morty/eye.png"
      alt="eye"
    />
  );
};

function getAngle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

const Morty = () => {
  const [angle, setAngle] = useState(0);
  console.log(angle);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById("anchor");
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const newAngle = getAngle(mouseX, mouseY, anchorX, anchorY);
      setAngle(90 + newAngle);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="font-mono bg-black h-screen text-lime-300 flex justify-center items-center flex-col">
      <h1 className="text-xl">
        Terrified Morty <span className="text-base">(move your mouse)</span>
      </h1>
      <div className="w-[425px] h-[425px] relative scale-100">
        <img
          className="h-[420px]"
          id="anchor"
          src="./src/assets/morty/morty.png"
          alt=":("
        />
        <Eye angle={angle} axis="top-[82px] left-[195px]" />
        <Eye angle={angle} axis="top-[76px] left-[232px]" />
      </div>
    </div>
  );
};

export default Morty;
