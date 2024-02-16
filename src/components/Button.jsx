import { nums } from "@/utils/dummyData";
import { useNumberData } from "@/context/NumberContext";

export default function Button() {
  const { currentDisplay, setCurrentdisplay } = useNumberData();

  function changeScreenVal(e) {
    setCurrentdisplay(currentDisplay + e);
  }

  return (
    <div className="w-[200px] flex flex-wrap">
      {nums.map((e, index) => {
        return (
          <button
            key={index}
            className="w-[58px] h-12 bg-[#777677] text-[#FFFFFF] text-lg font-normal border-[0.5px] border-[#464647] active:bg-white"
            onClick={() => changeScreenVal(e)}
          >
            <p>{e}</p>
          </button>
        );
      })}
      <button
        className="w-[116px] h-12 bg-[#777677] text-[#FFFFFF] text-lg font-normal border-[0.5px] border-[#464647] active:bg-white"
        onClick={() => changeScreenVal("0")}
      >
        <p>0</p>
      </button>
      <button
        className="w-[58px] h-12 bg-[#585859] text-[#FFFFFF] text-lg font-normal border-[0.5px] border-[#464647] active:bg-white"
        onClick={() => changeScreenVal(".")}
      >
        <p>.</p>
      </button>
    </div>
  );
}
