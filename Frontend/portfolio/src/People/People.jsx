import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpeg";
import img5 from "./img5.jpeg";
import img6 from "./img6.png";
import img7 from "./img7.jpeg";
import img8 from "./img8.jpeg";
import img9 from "./img9.png";
import { useState } from "react";

export function PeopleSay() {
  const [plus, setPlus] = useState(0);
  let arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const increser = () => {
    if (plus > 7) {
      setPlus(0);
      return;
    }
    setPlus((plus) => plus + 1);
  };

  const decreaser = () => {
    if (plus < 1) {
      setPlus(8);
      return;
    }
    setPlus((plus) => plus - 1);
  };

  let right = "<";
  let left = ">";

  return (
    <>
      <div className="h-auto w-full max-w-[800px] flex flex-col space-y-10 items-center px-4 sm:px-0">
        
        <h1 className="font-bold text-[30px] sm:text-[50px] underline text-center text-yellow-600">
          What People Say
        </h1>

       
        <div className="w-full h-[200px] sm:h-[250px] flex justify-center items-center bg-transparent">
          <img
            className="w-full h-full object-contain rounded-lg"
            src={arr[plus]}
            alt="People's Say"
          />
        </div>

        
        <div className="flex w-[80%] flex-row justify-center items-center space-x-6 sm:space-x-12 bg-slate-800 rounded-lg p-2 transition-transform duration-300 hover:scale-105">
          <p
            onClick={decreaser}
            className="text-[40px] font-bold sm:text-[50px] text-slate-300 hover:cursor-pointer"
          >
            {right}
          </p>
          <p className="text-[16px] font-bold sm:text-[25px] text-slate-300">{plus}/8</p>
          <p
            onClick={increser}
            className="text-[40px] font-bold sm:text-[50px] text-slate-300 hover:cursor-pointer"
          >
            {left}
          </p>
        </div>
      </div>
    </>
  );
}
