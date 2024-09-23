import { getMinResposiveSize } from "@/lib/canvasUlit";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { forwardRef } from "react";
interface Position {
  x: number;
  y: number;
}
interface Props{
  boxPos: Position;
}
const Mainbox = forwardRef<HTMLDivElement,Props>(({boxPos= { x: 0, y: 0 } }:Props,ref) => {
  const {innerWidth,innerHeight} = useWindowDimensions();

  return <div 
  className={`w-40 h-48 shadow-[0px_5px_0_black] bg-gradient-to-bl from-grey-10 via-grey-06 via-60% to-grey-06 border-[1px]  border-grey-12  rounded-2xl absolute flex flex-col justify-center items-center gap-5
    ${getMinResposiveSize(innerWidth,innerHeight) == "sm" && "scale-50" } 
    ${getMinResposiveSize(innerWidth,innerHeight) == "md" && "scale-75" } 
    ${getMinResposiveSize(innerWidth,innerHeight) == "lg" && "scale-100" } 
   ` }
  style={{ left: `${boxPos.x}px`, top: `${boxPos.y}px` }}
  ref={ref}>
    <h1 className="text-4xl text-white opacity-75 font-Jacquarda_Bastarda">Me.</h1>
  </div>;
});
// Set displayName for the component
Mainbox.displayName = "Mainbox";
export default Mainbox;
