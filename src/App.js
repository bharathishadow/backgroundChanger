import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    color: "",
    border: ""
  });
  // const [round,setRound] = useState("")

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  }
  // function handleChange(event){
  //   setData(event.target.value)
  // }

  const sty = {
    background: data.color,
    width: data ? `${data.border}px` : ""
  };
  const gard = {
    background: "linear-gradient(65deg, #e66465, #9198e5)"
  };

  return (
    <div className="App">
      <h1 style={sty} className="sd">
        Hello CodeSandbox
      </h1>
      <form>
        <input
          placeholder="color"
          name="color"
          onChange={handleChange}
          value={data.color}
        />

        <input
          placeholder="resizing"
          name="border"
          onChange={handleChange}
          value={data.border}
        />
      </form>
      <button onClick={() => setData((prevData) => !prevData)}>reset</button>
      <h2 style={gard}>Start editing to see some magic happen!</h2>
    </div>
  );
}
