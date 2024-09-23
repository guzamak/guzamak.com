import { useState, useEffect, useRef, useLayoutEffect } from "react";
import DragableBox from "./DragableBox";
import Mainbox from "./Mainbox";
import { getDistance, getAngle, getMinResposiveSize } from "@/lib/canvasUlit";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Skeleton from "../Contents/Skeleton";
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
  const {innerWidth,innerHeight} = useWindowDimensions();
  const [boxBounding, setBoxBounding] = useState<any>({})
  const [isReady, setIsReady] = useState(false);
  const boxWidth = useRef(50);

  const getBoxBoundingClientRect = () => {
    const infoBox = personalInfoBoxRef.current?.getBoundingClientRect();
    const passionBox = passionBoxRef.current?.getBoundingClientRect();
    const cretiveBox = cretiveBoxRef.current?.getBoundingClientRect();
    const learningBox = learningBoxRef.current?.getBoundingClientRect();
    // use for refer to start position of hero when scroll and getDistanceOfBox run (abosolute of diff of y of screen and y of hero)
    const HeroBox = HeroRef.current?.getBoundingClientRect();

    setBoxBounding({ infoBox, passionBox, cretiveBox, learningBox, HeroBox });
    return { infoBox, passionBox, cretiveBox, learningBox, HeroBox };
  };
  const getDistanceOfBox = () => {
    const { infoBox, passionBox, cretiveBox, learningBox, HeroBox } = boxBounding;

    if (infoBox && passionBox && cretiveBox && learningBox && HeroBox) {
      let infoCenterPos;
      if (innerWidth < 768) {
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
    if (infoBox && passionBox && cretiveBox && learningBox && HeroBox && typeof innerWidth != undefined && typeof innerHeight != undefined ) {
      let scaleFactor = 1;
      switch ( getMinResposiveSize(innerWidth,innerHeight)  ) {
        case"sm" :
          scaleFactor = 1.5;
          break
        case"md" :
          scaleFactor = 1.75;
          break
      }
      const adjustedInfoWidth = infoBox.width * scaleFactor;
      const adjustedInfoHeight = infoBox.height * scaleFactor;
      if (innerWidth < 768) {
        // < md screen size;
        const startInfoPos = { x: HeroBox.width / 2 - adjustedInfoHeight /2 , y: (HeroBox.height / 2 - adjustedInfoWidth ) };
        const yPos = Math.abs(HeroBox.top) + HeroBox.bottom - ((HeroBox.height - (startInfoPos.y + infoBox.height)) / 2);
        
        // use flex-row justify space-around idea to calculate a position 
        const availableWidth = HeroBox.width - passionBox.width - cretiveBox.width - learningBox.width;
        const spacing = availableWidth / 4;
    
        const startPassionPos = { x: spacing, y: yPos };
        const startCretivePos = { x: spacing * 2 + passionBox.width, y: yPos };
        const startLearningPos = { x: spacing * 3 + passionBox.width + cretiveBox.width, y: yPos };
    
        setPositon(
          startInfoPos,
          startCretivePos,
          startPassionPos,
          startLearningPos
        );
      } else if (innerWidth < 1024) { 
        //  < lg

        const startinfoPos = { x: HeroBox.width / 4 - adjustedInfoWidth / 2 , y: HeroBox.height /2  - adjustedInfoHeight/2 }
        const xPos = HeroBox.right - ((HeroBox.width - (startinfoPos.x+adjustedInfoWidth))/3 )

        const availableHeight = HeroBox.height - passionBox.height - cretiveBox.height - learningBox.height;
        const spacing = availableHeight / 4;
    
        const startPassionPos = { x: xPos, y: spacing };
        const startCretivePos = { x: xPos , y: spacing * 2 + passionBox.height };
        const startLearningPos = { x: xPos, y: spacing * 3 + passionBox.height + cretiveBox.height };
        setPositon(
          startinfoPos,
          startPassionPos,
          startCretivePos,
          startLearningPos,
        );
      } else if (innerWidth < 1536) {
        //  < xl
        const startinfoPos = { x: HeroBox.width / 4.5 - adjustedInfoWidth / 2 , y: HeroBox.height /2  - adjustedInfoHeight/2 }
        const xPos = HeroBox.right - ((HeroBox.width - startinfoPos.x- adjustedInfoWidth)/4 )

        const availableHeight = HeroBox.height - passionBox.height - cretiveBox.height - learningBox.height;
        const spacing = availableHeight / 4;
    
        const startPassionPos = { x: xPos, y: spacing };
        const startCretivePos = { x: xPos , y: spacing * 2 + passionBox.height };
        const startLearningPos = { x: xPos, y: spacing * 3  + passionBox.height + cretiveBox.height };
        setPositon(
          startinfoPos,
          startPassionPos,
          startCretivePos,
          startLearningPos,
        );
      } else{
        const startinfoPos = { x: ((HeroBox.width-1536)/2) +(1536 / 5) - adjustedInfoWidth / 2 , y: (HeroBox.height /2  - adjustedInfoHeight/2) }
        const xPos = (HeroBox.right - (HeroBox.width-1536)/2) - Math.min((HeroBox.width - startinfoPos.x - adjustedInfoWidth) / 5 ,HeroBox.width -(HeroBox.width-1536) /2 - cretiveBox.width)

        const availableHeight = HeroBox.height - passionBox.height - cretiveBox.height - learningBox.height;
        const spacing = availableHeight / 4;
    
        const startPassionPos = { x: xPos, y: spacing };
        const startCretivePos = { x: xPos , y: spacing * 2 + passionBox.height };
        const startLearningPos = { x: xPos, y: spacing * 3  + passionBox.height + cretiveBox.height };
        setPositon(
          startinfoPos,
          startPassionPos,
          startCretivePos,
          startLearningPos,
        );
      }
    }
  };

  useEffect(() => {
    getStartPosition();
  }, [innerWidth, innerHeight]);

  useEffect(() => {
    getBoxBoundingClientRect()
  }, [passionPos, cretivePos, learningPos]);

  useEffect(() => {
    getDistanceOfBox();
    dashline();
    setIsReady(true);
  },[boxBounding])

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
      className="w-screen min-h-[300px] h-[60vh] max-h-[900px] overflow-hidden bg-black bg-opacity-25 relative"
      ref={HeroRef}
    >
      <div className={`${isReady ? "opacity-100" : "opacity-0" } w-full h-full relative duration-700`}>
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
      <div className="relative w-full h-full">
        <Mainbox ref={personalInfoBoxRef} boxPos={infoPos} />
        <DragableBox
          title="CRETIVE"
          setBoxPos={setCretivePos}
          boxPos={cretivePos}
          ref={cretiveBoxRef}
          Herobox={boxBounding.HeroBox}
          selfbox={boxBounding.cretiveBox}
        />
        <DragableBox
          title="PASSION"
          setBoxPos={setPassionPos}
          boxPos={passionPos}
          ref={passionBoxRef}
          Herobox={boxBounding.HeroBox}
          selfbox={boxBounding.passionBox}
        />
        <DragableBox
          title="LEARNING"
          setBoxPos={setLearningPos}
          boxPos={learningPos}
          ref={learningBoxRef}
          Herobox={boxBounding.HeroBox}
          selfbox={boxBounding.learningBox}
        />
      </div>
      </div>
      <div
        className={`${
          !isReady ? "opacity-100" : "opacity-0"
        } absolute top-0 w-full h-full duration-700 pointer-events-none`}
      >
      <Skeleton />
      </div>
    </div>
  );
}
