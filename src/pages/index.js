import Button from "@/components/Button";
import ButtonOp from "@/components/ButtonOp";
import Display from "@/components/Display";
import TopBtn from "@/components/TopBtn";

export default function Home() {
  return (
    <div className="w-[232px] h-[326px] rounded-md m-3 overflow-hidden">
      <Display />
      <div className="flex border-[1px] border-[#464647] rounded-e-md">
        <div>
          <TopBtn />
          <Button />
        </div>
        <ButtonOp />
      </div>
    </div>
  );
}
