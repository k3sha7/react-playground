import { useEffect, useState } from "react";

const random = (min, max, prev) => {
  let next = prev;
  while (prev === next) next = Math.floor(Math.random() * (max - min) + min);
  return next;
};

const shapeVariation = [
  [
    " left-[0%] top-[0%] h-[50%] w-[20%] ",
    " left-[20%] top-[0%] h-[50%] w-[30%] ",
    " left-[50%] top-[0%] h-[100%] w-[50%] ",
    " left-[0%] top-[50%] h-[50%] w-[30%] ",
    " left-[30%] top-[50%] h-[50%] w-[20%] ",
    " left-[70%] top-[50%] h-[50%] w-[30%] ",
    " left-[85%] top-[75%] h-[25%] w-[15%] ",
  ],
  [
    " left-[25%] top-[20%] h-[80%] w-[15%] ",
    " left-[40%] top-[20%] h-[50%] w-[10%] ",
    " left-[50%] top-[0%] h-[100%] w-[25%] ",
    " left-[0%] top-[0%] h-[50%] w-[10%] ",
    " left-[10%] top-[0%] h-[70%] w-[15%] ",
    " left-[75%] top-[10%] h-[80%] w-[15%] ",
    " left-[90%] top-[40%] h-[60%] w-[10%] ",
  ],
  [
    " left-[0%] top-[16.5%] h-[32%] w-[20%] ",
    " left-[20%] top-[2.7%] h-[55%] w-[34%] ",
    " left-[30%] top-[0%] h-[100%] w-[62%] ",
    " left-[0%] top-[47.3%] h-[55%] w-[34%] ",
    " left-[34%] top-[56.4%] h-[32%] w-[20%] ",
    " left-[66%] top-[45%] h-[55%] w-[34%] ",
    " left-[80%] top-[68%] h-[32%] w-[20%] ",
  ],
];

const roundnessVariation = [
  "rounded-[6rem]",
  "rounded-[0]",
  "rounded-[30rem]",
  [
    "rounded-bl-[10rem]",
    "rounded-[20rem]",
    "rounded-tr-[12rem]",
    "rounded-tr-[10rem] rounded-br-[10rem]",
    "rounded-bl-[10rem]",
    "rounded-tl-[10rem]",
  ],
];

const shapes = [
  " z-20 bg-[#B0BEC5] ",
  " z-20 bg-[#F5F5F5] ",
  " z-10 bg-[#9B5DE5] ",
  " z-20 bg-[#F15BB5] ",
  " z-20 bg-[#FEE440] ",
  " z-20 bg-[#00BBF9] ",
  " z-20 bg-[#00F5D4] ",
];

const combinations = [
  { shape: 0, roundness: 0 },
  { shape: 0, roundness: 1 },
  { shape: 0, roundness: 3 },
  { shape: 1, roundness: 1 },
  { shape: 1, roundness: 2 },
  { shape: 2, roundness: 2 },
];

export default function LiveShapes() {
  const [variation, setVariation] = useState(1);

  useEffect(() => {
    const live = setInterval(() => {
      setVariation((prev) => random(0, 6, prev));
    }, 2000);

    return () => clearInterval(live);
  }, []);

  return (
    <div className="grid place-items-center h-screen dark:bg-black">
      <div className="w-[60vmin] relative h-[60vmin]">
        {shapes.map((shape, i) => (
          <div
            key={shape}
            className={
              "absolute transition-all duration-1000" +
              shape +
              shapeVariation[combinations[variation].shape][i] +
              (combinations[variation].roundness == 3
                ? roundnessVariation[combinations[variation].roundness][i]
                : roundnessVariation[combinations[variation].roundness])
            }
          />
        ))}
      </div>
    </div>
  );
}
