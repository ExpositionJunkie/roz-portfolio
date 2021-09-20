import React from "react";
import "../../Styles/Line.css";
import { useSpring, animated } from "react-spring";
import { rgb } from "@react-spring/shared";

function Line() {
  const rainbowFadeLine = useSpring({
    loop: true,
    config: {
      duration: 2000,
    },
    to: [
      { opacity: 1, backgroundColor: "rgb(255, 0, 0) " },
      { opacity: 1, backgroundColor: "rgb(255, 238, 0)" },
      { opacity: 1, backgroundColor: "rgb(255, 238, 0)" },
      { opacity: 1, backgroundColor: "rgb(21, 255, 0)" },
      { opacity: 1, backgroundColor: "rgb(0, 255, 208)" },
      { opacity: 1, backgroundColor: "rgb(0, 64, 255)" },
      { opacity: 1, backgroundColor: "rgb(128, 0, 255)" },
      { opacity: 1, backgroundColor: "rgb(255, 0, 140)" },
    ],
    from: { opacity: 1, backgroundColor: "rgb(255, 0, 140)" },
  });

  return (
    <div className="line">
      <animated.div
        style={{ width: 4000, height: 3, ...rainbowFadeLine }}
      ></animated.div>
    </div>
  );
}

export default Line;
