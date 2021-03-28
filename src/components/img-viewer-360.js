import React from "react";
import { Pannellum } from "pannellum-react";

const ImgViewer = (props) => {
  return (
    <Pannellum
      width="100%"
      height="500px"
      image={props.img}
      pitch={10}
      yaw={0}
      hfov={110}
      autoRotate={-1}
      autoLoad
      onLoad={() => {
        console.log(`${props.img} has loaded`);
      }}
    ></Pannellum>
  );
};
export default ImgViewer;
