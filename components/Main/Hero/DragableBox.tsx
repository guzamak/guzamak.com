import {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  forwardRef,
} from "react";

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
  (
    { title = "", setBoxPos = () => {}, boxPos = { x: 0, y: 0 } }: Props,
    ref
  ) => {
    const [dragging, setDragging] = useState<boolean>(false);
    const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setDragging(true);
      console.log(e.pageX);
      setMousePos({ x: e.pageX, y: e.pageY });
    };
    const onMouseUp = () => {
      setDragging(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const deltaX = e.pageX - mousePos.x;
        const deltaY = e.pageY - mousePos.y;

        setBoxPos((prevPos) => ({
          x: prevPos.x + deltaX,
          y: prevPos.y + deltaY,
        }));

        setMousePos({ x: e.pageX, y: e.pageY });
      }
    };

    const onTouchDown = (e: React.TouchEvent<HTMLDivElement>) => {
      setDragging(true);
      const touch = e.touches[0];
      setMousePos({ x: touch.pageX, y: touch.pageY });
    };

    const onTouchMove = (e: TouchEvent) => {
      if (dragging) {
        e.preventDefault();
        const touch = e.touches[0];
        const deltaX = touch.pageX - mousePos.x;
        const deltaY = touch.pageY - mousePos.y;

        setBoxPos((prevPos) => ({
          x: prevPos.x + deltaX,
          y: prevPos.y + deltaY,
        }));

        setMousePos({ x: touch.pageX, y: touch.pageY });
      }
    };

    useEffect(() => {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchend", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: false });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("touchend", onMouseUp);
        window.removeEventListener("touchmove", onTouchMove);
      };
    }, [dragging, mousePos]);

    return (
      <div
        ref={ref}
        className="flex justify-center items-center w-28 h-10 shadow-[0px_5px_0_black] bg-gradient-to-bl from-grey-10 via-grey-06 via-60% to-grey-06 border-[1px] backdrop-blur-sm  border-grey-12  rounded-2xl text-absolute-white absolute hover:cursor-grab "
        style={{ left: `${boxPos.x}px`, top: `${boxPos.y}px` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchDown}
        draggable={false}
      >
        <div className="bg-grey-06 rounded-full h-4 w-4  border-[1px] border-grey-12 absolute left-0 -translate-x-2"></div>
        <div
          draggable={false}
          className="select-none pointer-events-none overflow-hidden relative"
        >
          <p draggable={false} className="text-xs ">
            {title}
          </p>
        </div>
      </div>
    );
  }
);

// Set displayName for the component
DraggableBox.displayName = "DraggableBox";

export default DraggableBox;
