import { OrBtn } from "@/utils/dummyData";
import { useNumberData } from "@/context/NumberContext";

export default function ButtonOp() {
  const {
    currentDisplay,
    setCurrentdisplay,
    prevDisplay,
    setPrevDisplay,
    todoOp,
    setTodoOp,
  } = useNumberData();

  function changeTodoOp(e) {
    setTodoOp(e);
    setPrevDisplay(currentDisplay);
    setCurrentdisplay("");
  }

  function equalHandler() {
    if (todoOp == "+") {
      const result = Number(prevDisplay) + Number(currentDisplay) + "";
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
    } else if (todoOp == "AC") {
      const result = changeTodoOp;
      setCurrentdisplay(result);
    } else if (todoOp == "%") {
      const result = Number(prevDisplay) / 100 + "";
      setCurrentdisplay(result);
    }
  }

  return (
    <div className="flex flex-col relative right-[27px]">
      {OrBtn.map((e) => {
        return (
          <button
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
