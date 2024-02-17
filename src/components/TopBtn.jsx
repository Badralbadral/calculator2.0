import { topBtn } from "@/utils/dummyData";
import { useNumberData } from "@/context/NumberContext";

export default function TopBtn() {
  const {
    currentDisplay,
    setCurrentdisplay,
    setTodoOp,
    prevDisplay,
    setPrevDisplay,
    plusMinus,
    setPlusMinus,
    perce,
    setPerce,
    ofperce,
    setOfperce,
    storage,
    setStorage,
    befPerce,
    setBefPerce,
  } = useNumberData();

  function changeTodoOp() {
    if (currentDisplay > "") {
      setBefPerce("%%");
      setStorage("%");
      setOfperce((prevDisplay * currentDisplay) / 100);
      setCurrentdisplay(currentDisplay + "%");
      setPerce(currentDisplay);
    }
  }

  function aAndM() {
    setPlusMinus(currentDisplay);
    if (currentDisplay > "") {
      setCurrentdisplay(
        currentDisplay < 0
          ? (currentDisplay / currentDisplay) * plusMinus
          : `-${currentDisplay}`
      );
    }
  }

  function clear() {
    setCurrentdisplay("");
    setPrevDisplay("0");
    setPerce("");
    setTodoOp("");
    setOfperce("");
    setStorage("");
  }

  return (
    <div className="">
      <button
        className="w-[58px] h-12 bg-[#585859] text-[#FFFFFF] text-lg font-normal border-[0.5px] border-[#464647] active:bg-white"
        onClick={() => clear()}
      >
        <p>AC</p>
      </button>
      <button
        className="w-[58px] h-12 bg-[#585859] text-[#FFFFFF] text-lg font-normal border-[0.5px] border-[#464647] active:bg-white"
        onClick={() => aAndM()}
      >
        <p>+/-</p>
      </button>
      <button
        className="w-[58px] h-12 bg-[#585859] text-[#FFFFFF] text-lg font-normal border-[0.5px] border-[#464647] active:bg-white"
        onClick={() => changeTodoOp()}
      >
        <p>%</p>
      </button>
    </div>
  );
}
