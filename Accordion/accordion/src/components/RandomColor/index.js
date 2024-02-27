import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeofColor, setTypeofColor] = useState("hex");
  const [Color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreaterandomHexColor() {
    //#876590
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    // console.log(hexColor)
    setColor(hexColor);
  }
  function handleCreaterandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() =>{
    if(typeofColor ==='rgb'){
        handleCreaterandomRgbColor()
    }else{
        handleCreaterandomHexColor()
    }
  },[typeofColor])
  return (
    <div style={{ width: "100vw", height: "100vh", background: Color }}>
      <button onClick={() => setTypeofColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeofColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeofColor === "hex"
            ? handleCreaterandomHexColor
            : handleCreaterandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "50px",
          marginTop: " 50px",
          flexDirection: "column",
        }}
      >
        <h2>{typeofColor === "rgb" ? "RGB Color" : "HEX Color"}</h2>
        <h3>{Color}</h3>
      </div>
    </div>
  );
}
