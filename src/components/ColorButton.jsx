import { useState } from "react";

export default function ColorButton() {
  const [color, state] = useState("yellow");

  function changeColor(){
      return (color === "yellow"? state("blue") : state("yellow"))
  }
  return (
    <div>
      <button type="button" onClick={() => changeColor()} style={{
          background: color,
          width: "100px",
          height: "50px",
          marginTop: "30px",
      }}/>
    </div>
  );
};