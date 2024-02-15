import { useNumberData } from "@/context/NumberContext";

export default function Display() {
  const { currentDisplay } = useNumberData();
  return (
    <div className="bg-[#464647] w-[232px] h-[81px] text-white text-[44px] flex justify-end items-center pr-4">
      <p className="relative top-2">{currentDisplay}</p>
    </div>
  );
}
