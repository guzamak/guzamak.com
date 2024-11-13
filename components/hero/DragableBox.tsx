import {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
  forwardRef,
} from "react";
import { Position } from "@/lib/types";

interface Props {
  title: string;
  setBoxPos: Dispatch<SetStateAction<Position>>;
  boxPos: Position;
  Herobox: DOMRect | undefined;
  selfbox: DOMRect | undefined;
}
const DragableBox = forwardRef<HTMLDivElement, Props>(
  ({ title, setBoxPos, boxPos, Herobox, selfbox }: Props, ref) => {
    const [dragging, setDragging] = useState<boolean>(false);
    const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setDragging(true);
      setMousePos({ x: e.pageX, y: e.pageY });
    };
    const onMouseUp = () => {
      setDragging(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const deltaX = e.pageX - mousePos.x;
        const deltaY = e.pageY - mousePos.y;

        if (Herobox && selfbox) {
          const newX = boxPos.x + deltaX;
          const newY = boxPos.y + deltaY;
          if (
            Herobox.height - 10 > newY + selfbox.height &&
            newY > 10 &&
            newX > 10 &&
            Herobox.right - 10 > newX + selfbox.width
          ) {
            setBoxPos({ x: newX, y: newY });
          }
        }
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

        if (Herobox && selfbox) {
          const newX = boxPos.x + deltaX;
          const newY = boxPos.y + deltaY;
          if (
            Herobox.height - 10 > newY + selfbox.height &&
            newY > 10 &&
            newX > 10 &&
            Herobox.right - 10 > newX + selfbox.width
          ) {
            setBoxPos({ x: newX, y: newY });
          }
        }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dragging, mousePos]);

    return (
      <div
        ref={ref}
        className="flex justify-center items-center w-28 h-10 shadow-[0px_5px_0_black] bg-gradient-to-bl from-grey-10 via-grey-06 via-60% to-grey-06 border-[1px] border-grey-12  
        rounded-2xl  absolute hover:cursor-grab scale-75 md:scale-100 "
        style={{ left: `${boxPos.x}px`, top: `${boxPos.y}px` }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchDown}
        draggable={false}
        data-notscroll={true}
      >
        <div className="bg-grey-06 rounded-full h-4 w-4  border-[1px] border-grey-12 absolute left-0 -translate-x-2"></div>
        <div
          draggable={false}
          className="select-none pointer-events-none overflow-hidden relative"
        >
          <p draggable={false} className="text-xs text-white font-Pixelify">
            {title}
          </p>
        </div>
      </div>
    );
  }
);

// Set displayName for the component
DragableBox.displayName = "DraggableBox";

export default DragableBox;
