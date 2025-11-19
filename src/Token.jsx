import React from "react";
import { useState, useEffect } from "react";

function Token() {
  const [age, setTemp] = useState(0);
  const [result, setResult] = useState("");

  const[speed,setSpeed] = useState(0)
  const[resultSpeed,setResultSpeed] = useState("")


  useEffect(() => {
    if (age <13) {
      setResult(" Child");
    } else if (age >= 13 && age <=19) {
      setResult("Teenager");
    } else {
      setResult("Adult");
    }
  }, [age]);

  useEffect(()=>{
    if(speed>=80){
        setResultSpeed("Over Speeding")
    }else if(speed>=40 && speed<=80){
        setResultSpeed("Normal Speed")
    }else{
        setResultSpeed("Too Slow")
    }
  },[speed])

  return (
    <>
      <input
        value={age}
        onChange={(e) => {
          setTemp(e.target.value);
        }}
      ></input>

      {result}


      <br/>

      <br/>

      <input
        value={speed}
        onChange={(e) => {
          setSpeed(e.target.value);
        }}
      ></input>

      {resultSpeed}
    </>
  );
}

export default Token;
