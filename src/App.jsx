import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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

      <div>
        <div className="  bg-amber-100 h-[500px] w-[600px] rounded-2xl  text-black"> hellow</div>
        <div className="flex justify-center items-center gap-2   w-[600px] ">
          <button onClick={()=>{}}>Red</button>
          <button onClick={()=>{}}>Blue</button>
          <button onClick={()=>{}}>Green</button>
          <button onClick={()=>{}}>Pink</button>
          <button onClick={()=>{}}>Yellow</button>
        </div>
      </div>
    </>
  );
}

export default App;
