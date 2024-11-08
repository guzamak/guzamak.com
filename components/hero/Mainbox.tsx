import { getMinResposiveSize } from "@/lib/uilts";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { forwardRef } from "react";
import { Position } from "@/lib/types";

interface Props {
  boxPos: Position;
}
const Mainbox = forwardRef<HTMLDivElement, Props>(({ boxPos }: Props, ref) => {
  const { innerWidth, innerHeight } = useWindowDimensions();

  return (
    // fix some weird center bug  with origin-top-left may be because origin is center ? wtf btw i think basic div should have origin in topleft auto but this div is not i dont know why?
    <div
      className={`w-40 h-48 shadow-[0px_5px_0_black] bg-gradient-to-bl from-grey-10 via-grey-06 via-60% to-grey-06 border-[1px]  border-grey-12  rounded-2xl absolute flex flex-col justify-center items-center gap-5 pointer-events-none
       origin-top-left
    ${getMinResposiveSize(innerWidth, innerHeight) == "sm" && "scale-50"} 
    ${getMinResposiveSize(innerWidth, innerHeight) == "md" && "scale-75"} 
    ${getMinResposiveSize(innerWidth, innerHeight) == "lg" && "scale-100"} 
   `}
      draggable={false}
      style={{ left: `${boxPos.x}px`, top: `${boxPos.y}px` }}
      ref={ref}
    >
      <h1 className="text-4xl text-white opacity-75 font-Jacquarda_Bastarda">
        Me.
      </h1>
    </div>
  );
});
// Set displayName for the component
Mainbox.displayName = "Mainbox";
export default Mainbox;
