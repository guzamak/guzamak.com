import { useState, useEffect, useRef, useLayoutEffect } from "react";
import DragableBox from "./DragableBox";
import Mainbox from "./Mainbox";
import { getDistance, getAngle } from "@/utils/canvasUlit";
interface Position {
  x: number;
  y: number;
}

export default function Hero() {
  const personalInfoBoxRef = useRef<HTMLDivElement>(null);
  const cretiveBoxRef = useRef<HTMLDivElement>(null);
  const passionBoxRef = useRef<HTMLDivElement>(null);
  const learningBoxRef = useRef<HTMLDivElement>(null);
  const [infoBoxCenterPos, setInfoCenterPos] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [cretiveBoxCenterPos, setCretiveBoxCenterPos] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [passionBoxCenterPos, setPassionBoxCenterPos] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [learningBoxCenterPos, setLearningBoxCenterPos] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [passionPos, setPassionPos] = useState<Position>({ x: 0, y: 0 });
  const [cretivePos, setCretivePos] = useState<Position>({ x: 0, y: 0 });
  const [learningPos, setLearningPos] = useState<Position>({ x: 0, y: 0 });
  const [infoPos, setInfoPos] = useState<Position>({ x: 0, y: 0 });
  const [numsbox, setNumsBox] = useState<number>();
  const boxWidth = useRef(50)

  useEffect(() => {
    const infoBox = personalInfoBoxRef.current?.getBoundingClientRect();
    const passionBox = passionBoxRef.current?.getBoundingClientRect();
    const cretiveBox = cretiveBoxRef.current?.getBoundingClientRect();
    const learningBox = learningBoxRef.current?.getBoundingClientRect();

    if (infoBox && passionBox && cretiveBox && learningBox) {
      const infoCenterPos = {
        x: infoBox.right,
        y: infoBox.top + (infoBox.bottom - infoBox.top) / 2,
      };
      const passionCenterPos = {
        x: passionBox.left,
        y: passionBox.top + (passionBox.bottom - passionBox.top) / 2,
      };
      const cretiveCenterPos = {
        x: cretiveBox.left,
        y: cretiveBox.top + (cretiveBox.bottom - cretiveBox.top) / 2,
      };
      const learningCenterPos = {
        x: learningBox.left,
        y: learningBox.top + (learningBox.bottom - learningBox.top) / 2,
      };
      setInfoCenterPos(infoCenterPos);
      setPassionBoxCenterPos(passionCenterPos);
      setCretiveBoxCenterPos(cretiveCenterPos);
      setLearningBoxCenterPos(learningCenterPos);
      dashline();
    }
  }, [passionPos, cretivePos, learningPos]);

  const createLineStyle = (start: Position, end: Position) => {
    const distance = getDistance(start.x, start.y, end.x, end.y);
    const angle = getAngle(start.x, start.y, end.x, end.y);

    return {
      width: `${distance}px`,
      transform: `rotate(${angle}deg)`,
      transformOrigin: "left center",
      left: `${start.x}px`,
      top: `${start.y}px`,
    };
  };
  const dashline = () => {
    const containerWidth = (150 * window.innerWidth) / 100;
    const distance = 100;
    const numBoxes = Math.floor(containerWidth / (boxWidth.current + distance));
    setNumsBox(numBoxes);
  };

  return (
    <div className="w-screen h-screen bg-black relative">
    {[passionBoxCenterPos,learningBoxCenterPos,cretiveBoxCenterPos].map((pos,i)=>(
            <div
            key={i}
            className="absolute h-[0.4rem] overflow-hidden"
            style={createLineStyle(infoBoxCenterPos, pos)}
          >
                  <div className="flex w-[150vw] h-full bg-black">
          {[...Array(2)].map((_, j) => (
            <div className="flex animate-loop-scroll " key={j}>
              {[...Array(numsbox)].map((_, k) => (
                <div
                className="h-full bg-white"
                style={{
                  width: `${boxWidth.current}px`,
                  marginRight: `${boxWidth.current}px`,
                }}
                  key={k}
                ></div>
              ))}
            </div>
          ))}
          </div>
      </div>
    ))}
      <div className="relative">
        <Mainbox ref={personalInfoBoxRef} />
        <DragableBox
          title="cretive"
          setBoxPos={setCretivePos}
          boxPos={cretivePos}
          ref={cretiveBoxRef}
        />
        <DragableBox
          title="passion"
          setBoxPos={setPassionPos}
          boxPos={passionPos}
          ref={passionBoxRef}
        />
        <DragableBox
          title="learning"
          setBoxPos={setLearningPos}
          boxPos={learningPos}
          ref={learningBoxRef}
        />
      </div>
    </div>
  );
}
