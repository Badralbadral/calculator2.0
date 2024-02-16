import { OrBtn } from "@/utils/dummyData";
import { useNumberData } from "@/context/NumberContext";
import { useState } from "react";

export default function ButtonOp() {
  const {
    currentDisplay,
    setCurrentdisplay,
    prevDisplay,
    setPrevDisplay,
    todoOp,
    setTodoOp,
    perce,
    setPerce,
    ofperce,
    setOfperce,
    storage,
    setStorage,
  } = useNumberData();

  function changeTodoOp(e) {
    if (currentDisplay === "") {
    } else {
      setTodoOp(e);
    }
    setPrevDisplay(currentDisplay);
    setCurrentdisplay("");
  }

  function equalHandler() {
    if (prevDisplay === "0") {
      const result = Number(perce) / 100 + "";
      setCurrentdisplay(result);
    } else {
      if (todoOp == "+") {
        const result =
          Number(prevDisplay) + (Number(ofperce) + Number(currentDisplay)) + "";
        setCurrentdisplay(result);
      } else if (todoOp == "-") {
        const result = Number(prevDisplay) - Number(currentDisplay) + "";
        setCurrentdisplay(result);
      } else if (todoOp == "×") {
        const result = Number(prevDisplay) * Number(currentDisplay) + "";
        setCurrentdisplay(result);
      } else if (todoOp == "÷") {
        const result = Number(prevDisplay) / Number(currentDisplay) + "";
        setCurrentdisplay(result);
      }
    }
    // (base * percentage) / 100;
  }

  console.log("prevDisplay:", prevDisplay);
  console.log("currentDisplay:", currentDisplay);
  console.log("perce:", perce);
  console.log("ofperce:", ofperce);
  console.log("🚀 ~ equalHandler ~ todoOp:", todoOp);

  return (
    <div className="flex flex-col relative right-[27px]">
      {OrBtn.map((e, index) => {
        return (
          <button
            key={index}
            className="bg-[#FF9F0A] flex justify-center items-center w-[58px] h-12 text-[#FFFFFF] text-[32px] border-[0.5px] border-[#464647] active:bg-white"
            onClick={() => changeTodoOp(e)}
          >
            <p>{e}</p>
          </button>
        );
      })}
      <button
        className="bg-[#FF9F0A] flex justify-center items-center w-[58px] h-12 text-[#FFFFFF] text-[32px] border-[0.5px] border-[#464647] active:bg-white"
        onClick={equalHandler}
      >
        <p> =</p>
      </button>
    </div>
  );
}
