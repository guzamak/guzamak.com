import { useState, useEffect, useRef, Dispatch, SetStateAction, forwardRef } from "react";

interface Position {
  x: number;
  y: number;
}
interface Size {
    w: number;
    h: number;
  }
interface Props {
  title: string;
  setBoxPos: Dispatch<SetStateAction<Position>>;
  boxPos: Position;

}
const DraggableBox = forwardRef<HTMLDivElement, Props>(
  ({ title = "", setBoxPos = () => {}, boxPos = { x: 0, y: 0 } }: Props, ref) => {
    const [dragging, setDragging] = useState<boolean>(false);
    const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setDragging(true);
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const onMouseUp = () => {
      setDragging(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const deltaX = e.clientX - mousePos.x;
        const deltaY = e.clientY - mousePos.y;

        setBoxPos((prevPos) => ({
          x: prevPos.x + deltaX,
          y: prevPos.y + deltaY,
        }));

        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    useEffect(() => {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };
    }, [dragging, mousePos]);

    return (
      <div
        ref={ref}
        className={`w-12 h-9 bg-white absolute`}
        style={{ left: `${boxPos.x}px`, top: `${boxPos.y}px` }}
        onMouseDown={onMouseDown}
        draggable={false}
      >
        <p draggable={false} className="select-none pointer-events-none ">{title}</p>
      </div>
    );
  }
);

// Set displayName for the component 
DraggableBox.displayName = "DraggableBox";

export default DraggableBox;
