import { topBtn } from "@/utils/dummyData";
import { useNumberData } from "@/context/NumberContext";

export default function TopBtn() {
  const { currentDisplay, setCurrentdisplay, setTodoOp, setPrevDisplay } =
    useNumberData();

  function changeTodoOp(e) {
    setTodoOp(e);
    setPrevDisplay(currentDisplay);
    setCurrentdisplay(currentDisplay + "%");
  }

  function aAndM(e) {
    setTodoOp(e);
    setCurrentdisplay(currentDisplay > 0 ? -+currentDisplay : "-");
  }
  return (
    <div className="">
      <button
        className="w-[58px] h-12 bg-[#585859] text-[#FFFFFF] text-lg font-normal border-[0.5px] border-[#464647] active:bg-white"
        onClick={() => setCurrentdisplay("")}
      >
        <p>AC</p>
      </button>
      <button
        className="w-[58px] h-12 bg-[#585859] text-[#FFFFFF] text-lg font-normal border-[0.5px] border-[#464647] active:bg-white"
        onClick={() => aAndM("+/-")}
      >
        <p>+/-</p>
      </button>
      <button
        className="w-[58px] h-12 bg-[#585859] text-[#FFFFFF] text-lg font-normal border-[0.5px] border-[#464647] active:bg-white"
        onClick={() => changeTodoOp("%")}
      >
        <p>%</p>
      </button>
    </div>
  );
}
