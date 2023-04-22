import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState (randomColor);
  const [childrenColor, setChildrenColor] = useState ("#FFF");

  function handleChangeColor (newChildColor){
    const newRandomcolor = getRandomColor();
    setColor(newRandomcolor);
    setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
      <Child onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
