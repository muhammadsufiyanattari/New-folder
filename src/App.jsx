import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [mycolor, setMycolor] = useState("white");

  // const countHandlerPlus = () => {
  //   setCount(count + 1);
  //   console.log(count);
  // };

  // const countHandlerMinus = () => {
  //   if (count === 1) {
  //     setCount(count );
  //   } else {
  //     setCount(count - 1);
  //   }

  //   console.log(count);
  // };
  return (
    <>
      {/* <div className='bg-amber-600 font-bold text-4xl text-blue-50 p-5 rounded-2xl animate-ping'> Hellow World </div>
       */}

      {/* <div className="p-4 text-5xl font-bold"> {count}</div>

      <button className="m-2 p-3 text-9xlxl" onClick={() => countHandlerPlus()}>Plus</button>
      <button className="m-2 p-3 text-9xlxl" onClick={() => countHandlerMinus()}>Minus</button> */}

      <div className="flex flex-col justify-center items-center gap-2 h-screen bg-gray-600">
        <div
          style={{ backgroundColor: mycolor }}
          className="   h-[500px] w-[600px] rounded-2xl  text-white text-5xl font-bold flex justify-center items-center"
        >
          {" "}
          Hey Color Changer
        </div>
        <div className="flex justify-center items-center gap-2   w-[600px] ">
          <button className="     py-3 px-5 rounded-2xl  bg-red-500   text-white " onClick={() => setMycolor("red")}>Red</button>
          <button className="     py-3 px-5 rounded-2xl  bg-blue-500   text-white" onClick={() => setMycolor("blue")}>Blue</button>
          <button className="     py-3 px-5 rounded-2xl  bg-green-500   text-white" onClick={() => setMycolor("green")}>Green</button>
          <button className="     py-3 px-5 rounded-2xl  bg-pink-500   text-white" onClick={() => setMycolor("pink")}>Pink</button>
          <button className="     py-3 px-5 rounded-2xl  bg-yellow-500   text-white" onClick={() => setMycolor("yellowgreen")}>Yellow</button>
        </div>
      </div>
    </>
  );
}

export default App;
