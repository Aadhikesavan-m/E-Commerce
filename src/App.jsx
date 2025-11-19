// import { useState, useEffect } from "react"
// import "./index.css"
// import "./calci.css"

// export function App() {
//   const [display, setDisplay] = useState("")

//   const handleClick = (value) => {
//     setDisplay(display + value)
//   }

//   const handleClear = () => {
//     setDisplay("")
//   }

//   const handleCalculate = () => {
//     try {
//       setDisplay(eval(display).toString())
//     } catch {
//       setDisplay("Error")
//     }
//   }

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       const { key } = event

//       if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
//         setDisplay((prev) => prev + key)
//       } else if (key === "Enter" || key === "=") {
//         handleCalculate()
//       } else if (key === "Backspace") {
//         setDisplay((prev) => prev.slice(0, -1))
//       } else if (key === "Escape" || key.toLowerCase() === "c") {
//         handleClear()
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown)

//     return () => window.removeEventListener("keydown", handleKeyDown)
//   }, [display])

//   return (
//     <div className="container">
//       <h1>Calculator</h1>
//       <div className="calculator">
//         <input type="text" className="display" value={display} readOnly />
//         <div className="buttons">
//           {["7","8","9","/","4","5","6","*","1","2","3","-","0","."].map((btn) => (
//             <button key={btn} onClick={() => handleClick(btn)}>
//               {btn}
//             </button>
//           ))}

//           <button onClick={() => handleClick("+")}>+</button>
//           <button className="equals" onClick={handleCalculate}>=</button>
//           <button className="clear" onClick={handleClear}>C</button>
//         </div>
//       </div>
//     </div>
//   )
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddtoCart from "./AddtoCart";
import CartPage from "./CartElement";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddtoCart cart={cart} setCart={setCart} />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
