import { useState, useEffect, useRef, useLayoutEffect } from "react";
import DragableBox from "./DragableBox";
import Mainbox from "./Mainbox";
import { getDistance, getAngle } from "@/lib/canvasUlit";
interface Position {
  x: number;
  y: number;
}

export default function Hero() {
  const personalInfoBoxRef = useRef<HTMLDivElement>(null);
  const cretiveBoxRef = useRef<HTMLDivElement>(null);
  const passionBoxRef = useRef<HTMLDivElement>(null);
  const learningBoxRef = useRef<HTMLDivElement>(null);
  const HeroRef = useRef<HTMLDivElement>(null);
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
  const boxWidth = useRef(50);

  const getBoxBoundingClientRect = () => {
    const infoBox = personalInfoBoxRef.current?.getBoundingClientRect();
    const passionBox = passionBoxRef.current?.getBoundingClientRect();
    const cretiveBox = cretiveBoxRef.current?.getBoundingClientRect();
    const learningBox = learningBoxRef.current?.getBoundingClientRect();
    const HeroBox = HeroRef.current?.getBoundingClientRect();

    return { infoBox, passionBox, cretiveBox, learningBox, HeroBox };
  };
  const getDistanceOfBox = () => {
    const { infoBox, passionBox, cretiveBox, learningBox, HeroBox } =
      getBoxBoundingClientRect();
    // use for refer to start position of hero when scroll and getDistanceOfBox run (abosolute of diff of y of screen and y of hero)

    if (infoBox && passionBox && cretiveBox && learningBox && HeroBox) {
      let infoCenterPos;
      if (window.innerWidth < 768) {
        // < md
        infoCenterPos = {
          x: infoBox.left + (infoBox.right - infoBox.left) / 2,
          y: Math.abs(HeroBox.top) + infoBox.bottom,
        };
      } else {
        infoCenterPos = {
          x: infoBox.right,
          y:
            Math.abs(HeroBox.top) +
            infoBox.top +
            (infoBox.bottom - infoBox.top) / 2,
        };
      }
      const passionCenterPos = {
        x: passionBox.left,
        y:
          Math.abs(HeroBox.top) +
          passionBox.top +
          (passionBox.bottom - passionBox.top) / 2,
      };
      const cretiveCenterPos = {
        x: cretiveBox.left,
        y:
          Math.abs(HeroBox.top) +
          cretiveBox.top +
          (cretiveBox.bottom - cretiveBox.top) / 2,
      };
      const learningCenterPos = {
        x: learningBox.left,
        y:
          Math.abs(HeroBox.top) +
          learningBox.top +
          (learningBox.bottom - learningBox.top) / 2,
      };
      setInfoCenterPos(infoCenterPos);
      setPassionBoxCenterPos(passionCenterPos);
      setCretiveBoxCenterPos(cretiveCenterPos);
      setLearningBoxCenterPos(learningCenterPos);
    }
  };
  const setPositon = (
    startInfoPos: Position,
    startCretivePos: Position,
    startPassionPos: Position,
    startLearningPos: Position
  ) => {
    setInfoPos(startInfoPos);
    setCretivePos(startCretivePos);
    setPassionPos(startPassionPos);
    setLearningPos(startLearningPos);
  };

  const getStartPosition = () => {
    const { infoBox, passionBox, cretiveBox, learningBox, HeroBox } = getBoxBoundingClientRect();
    if (infoBox && passionBox && cretiveBox && learningBox && HeroBox) {
      if (window.innerWidth < 768) {
        //  < md
        const gap = passionBox.width / 4
        const startinfoPos = { x: HeroBox.width / 2 - infoBox.width / 2 , y: (HeroBox.height / 2 - infoBox.height) }
        setPositon(
          startinfoPos,
          { x: startinfoPos.x - cretiveBox.width - gap, y:  startinfoPos.y + infoBox.height + (3*passionBox.height) },
          { x: startinfoPos.x, y:startinfoPos.y + infoBox.height + (3*passionBox.height) + gap  },
          { x: startinfoPos.x + learningBox.width + gap, y:  startinfoPos.y + infoBox.height + (3*passionBox.height) }
        );
      } else if (window.innerWidth < 1024) {
        //  < lg
        const gap = passionBox.width / 1.5
        const startinfoPos = { x: HeroBox.width / 4 - infoBox.width / 2 , y: (HeroBox.height /2  - infoBox.height/2) }
        setPositon(
          startinfoPos,
          { x: HeroBox.width -cretiveBox.width -gap , y: (HeroBox.height /2  - passionBox.height/2) - (3*cretiveBox.height) },
          { x: HeroBox.width - passionBox.width -(2 * gap) , y: (HeroBox.height /2  - passionBox.height/2) },
          { x: HeroBox.width - learningBox.width -gap , y: (HeroBox.height /2  - passionBox.height/2) + (3*learningBox.height) }
        );
      } else if (window.innerWidth <  1536) {
        //  > lg
        const gap = passionBox.width 
        const startinfoPos = { x: HeroBox.width / 4.5 - infoBox.width / 2 , y: (HeroBox.height /2  - infoBox.height/2) }
        setPositon(
          startinfoPos,
          { x: HeroBox.width/1.15 - cretiveBox.width -gap , y: (HeroBox.height /2  - passionBox.height/2) - (3*cretiveBox.height) },
          { x: HeroBox.width/1.15 - passionBox.width -(2 * gap) , y: (HeroBox.height /2  - passionBox.height/2) },
          { x: HeroBox.width/1.15 - learningBox.width -gap , y: (HeroBox.height /2  - passionBox.height/2) + (3*learningBox.height) }
        );
      } else{
        const gap = passionBox.width 
        const startinfoPos = { x: ((window.innerWidth - 1536)/2) + Math.min(HeroBox.width,1536) / 4.5 - infoBox.width / 2 , y: (HeroBox.height /2  - infoBox.height/2) }
        setPositon(
          startinfoPos,
          { x: ((window.innerWidth - 1536)/2) +  Math.min(HeroBox.width,1536)/1.15 - cretiveBox.width -gap , y: (HeroBox.height /2  - passionBox.height/2) - (3*cretiveBox.height) },
          { x: ((window.innerWidth - 1536)/2) + Math.min(HeroBox.width,1536)/1.15 - passionBox.width -(2 * gap) , y: (HeroBox.height /2  - passionBox.height/2) },
          { x: ((window.innerWidth - 1536)/2) + Math.min(HeroBox.width,1536)/1.15 - learningBox.width -gap , y: (HeroBox.height /2  - passionBox.height/2) + (3*learningBox.height) }
        );
      }
    }
  };

  const init = () => {
    getStartPosition();
    getDistanceOfBox();
    dashline();
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    getDistanceOfBox();
    window.addEventListener("resize", init);
    return () => {
      window.removeEventListener("resize", init);
    };
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
    const gap = 100;
    const numBoxes = Math.floor(containerWidth / (boxWidth.current + gap));
    setNumsBox(numBoxes);
  };

  return (
    <div
      className="w-screen h-[60vh] relative overflow-hidden bg-black bg-opacity-25 "
      ref={HeroRef}
    >
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#40404012_1px,transparent_1px),linear-gradient(to_bottom,#40404012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {[passionBoxCenterPos, learningBoxCenterPos, cretiveBoxCenterPos].map(
        (pos, i) => (
          <div
            key={i}
            className="absolute h-[0.4rem] overflow-hidden"
            style={createLineStyle(infoBoxCenterPos, pos)}
          >
            <div className="flex w-[150vw] h-full">
              {[...Array(2)].map((_, j) => (
                <div className="flex animate-loop-scroll " key={j}>
                  {[...Array(numsbox)].map((_, k) => (
                    <div
                      className="h-full border-grey-25 border-[1px] rounded opacity-50 "
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
        )
      )}
      <div className="relative">
        <Mainbox ref={personalInfoBoxRef} boxPos={infoPos} />
        <DragableBox
          title="CRETIVE"
          setBoxPos={setCretivePos}
          boxPos={cretivePos}
          ref={cretiveBoxRef}
        />
        <DragableBox
          title="PASSION"
          setBoxPos={setPassionPos}
          boxPos={passionPos}
          ref={passionBoxRef}
        />
        <DragableBox
          title="LEARNING"
          setBoxPos={setLearningPos}
          boxPos={learningPos}
          ref={learningBoxRef}
        />
      </div>
    </div>
  );
}
