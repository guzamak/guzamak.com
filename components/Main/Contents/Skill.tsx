import { useEffect, useRef, useState } from "react";

const skillImgPos = [
  "html",
  "css",
  "tailwind",
  "react",
  "next",
  "node",
  "python",
];

export default function Skill() {
  const [skilldeg, setSkillsdeg] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0)
  const [svgLength, setSvgLength] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (innerWidth) {
      // width / textwidth + gap
      const len = Math.ceil(innerWidth / (textWidth + textWidth) ) ;
      setSvgLength(len);
    }
  }, [innerWidth,textWidth]);

  useEffect(() => {
    if (textRef.current) {
      const boundingBox = textRef.current?.getBoundingClientRect();
      setTextWidth(boundingBox.width); 
    }
  }, [innerWidth,innerHeight]);


  useEffect(() => {
    const interval = setInterval(() => {
      setSkillsdeg((prevskilldeg) => {
        if (prevskilldeg >= 360) {
          clearInterval(interval);
          return prevskilldeg;
        }
        return prevskilldeg + 1;
      });
    }, 2);

    return () => clearInterval(interval);
  }, [skilldeg]);


  return (
    <div className="w-screen max-h-[900px] h-screen relative flex flex-col justify-center items-center ">
      <div className="w-full flex flex-col justify-between items-center ">

        {/* ref for text size in svg to calculate svgLength */}
        <div className="flex  opacity-10 absolute" >
          <svg width={innerWidth} height={(innerHeight/8)}>
            <text x={`0`}
                  y={`25`}
                  textAnchor="left "
                  fontSize="40"
                  fill="white"
                  fillOpacity={1}
                  strokeWidth="1"
                  stroke="white"
                  fontFamily="sans-serif"
                  ref={textRef} 
                  className="invisible">
              Thank You
            </text>
          </svg>
        </div>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex  opacity-10 "
          >
            {[...Array(3)].map((_, j)=>(
            <svg width={innerWidth} height={(innerHeight/7)} key={j} className="animate-loop-scroll" >
              {[...Array(svgLength)].map((_, k) => (
                <text
                  x={`${((innerWidth)) * (k/ svgLength) }`}
                  y={`${innerHeight/8 * 0.5} `}
                  textAnchor="left "
                  fontSize="40"
                  fill="white"
                  fillOpacity={i % 2}
                  strokeWidth="0.7"
                  stroke="white"
                  fontFamily="sans-serif"
                  key={k}
                >
                  Thank You
                </text>
              ))}
            </svg>

            ))}
          
          </div>
        ))}
      </div>
      <div className="w-1/2 min-w-[600px] max-w-[1000px] h-1/2 absolute border-[1px]  border-grey-12  rounded-2xl  bg-grey-06 h-11/12 overflow-hidden pt-16  flex justify-center ">
        <p className="text-4xl text-white absolute">- Skill -</p>
        <div className="bg-red-200 flex justify-center items-center animate-loop-rotate absolute">
          {skillImgPos.map((skill, index) => (
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                opacity: `${(100 * skilldeg) / 180 / 100}`,
                transform: `translate(-50%, -50%) translateX(${
                  200 *
                  Math.cos(
                    ((index * skilldeg) / skillImgPos.length) * (Math.PI / 180)
                  )
                }px) translateY(${
                  200 *
                  Math.sin(
                    ((index * skilldeg) / skillImgPos.length) * (Math.PI / 180)
                  )
                }px)`,
              }}
              key={index}
            >
              <div className="w-20 h-20  animate-hold-rotate  rounded-full flex justify-center items-center">
                {/* {skill} */}
              </div>
            </div>
          ))}
        </div>
        <div className="flex absolute bottom-5">
          {/* <div>Dis icon</div>
          <div>github icon</div>
          <div>ig icon</div> */}
        </div>
      </div>
    </div>
  );
}
