import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";
const skillMap = [
  FaHtml5,
  FaCss3Alt,
  RiTailwindCssFill,
  FaReact,
  RiNextjsFill,
  FaJs,
  FaPython,
];

export default function Skill() {
  const [skilldeg, setSkillsdeg] = useState(0);
  const [svgLength, setSvgLength] = useState(0);
  const textRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (textRef.current) {
      const boundingBox = textRef.current?.getBoundingClientRect();
      const textWidth = boundingBox.width;
      const len = Math.ceil(window.innerWidth / (textWidth  + textWidth+ 50));
      setSvgLength(len);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [textRef]);


  useEffect(() => {
    const interval = setInterval(() => {
      setSkillsdeg((prevskilldeg) => {
        if (prevskilldeg > 360) {
          clearInterval(interval);
          return prevskilldeg;
        }
        return prevskilldeg + 1;
      });
    }, 2);

    return () => clearInterval(interval);
  }, [skilldeg]);

  const getMaxHeight= () => {
    return Math.min(innerHeight,900)
  }
  const getlgResposive = () => {
    return Math.min(window.innerWidth,window.innerHeight) < 1000
  }

  return (
    <div className="w-screen max-h-[900px] h-screen relative flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col justify-between items-center ">
        {/* ref for text size in svg to calculate svgLength */}
        <div className="flex  opacity-5 absolute">
          <svg width={ window.innerWidth} height={getMaxHeight() / 7}>
            <text
              x={`0`}
              y={`25`}
              textAnchor="left "
              fontSize={`${ getlgResposive() ? "30": "40"}`}
              fill="white"
              fillOpacity={1}
              strokeWidth="1"
              stroke="white"
              fontFamily="sans-serif"
              ref={textRef}
              className="invisible"
            >
              Thank You
            </text>
          </svg>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex  opacity-10 ">
            {[...Array(3)].map((_, j) => (
              <svg
                width={window.innerWidth}
                height={getMaxHeight() / 7}
                key={j}
                className="animate-loop-scroll"
              >
                {[...Array(svgLength)].map((_, k) => (
                  <text
                    x={`${window.innerWidth * (k / svgLength)}`}
                    y={`${(window.innerHeight / 8) * 0.5} `}
                    textAnchor="left "
                    fontSize={`${ getlgResposive() ? "30": "40"}`}
                    fill="white"
                    fillOpacity={i % 2}
                    strokeWidth="0.25"
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
        <div
          className={`bg-red-200 flex justify-center items-center ${
            skilldeg >= 360 && "animate-loop-rotate"
          } absolute`}
        >
          {skillMap.map((Skill, index) => (
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                opacity: `${(100 * skilldeg) / 180 / 100}`,
                transform: `translate(-50%, -50%) translateX(${
                  (window.innerWidth < 1024 ? 175: 200) *
                  Math.cos(
                    (index * (skilldeg / skillMap.length)) * (Math.PI / 180)
                  )
                }px) translateY(${
                  (window.innerWidth < 1024 ? 175: 200) *
                  Math.sin(
                    (index * (skilldeg / skillMap.length)) * (Math.PI / 180)
                  )
                }px)`,
              }}
              key={index}
            >
              <div
                className={`w-20 h-20 ${
                  skilldeg >= 360 && "animate-hold-rotate"
                } rounded-full flex justify-center items-center`}
              >
                <Skill
                  size={ (getlgResposive() ? 35: 50)}
                  className=" text-grey-25 cursor-pointer hover:text-grey-40  duration-700"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center absolute bottom-0 gap-6 bg-grey-06 h-10 p-5 rounded-xl border-t-[1px] border-grey-12  ">
          <Link href="https://www.instagram.com/poke_skr27/" target="_blank">
            <FaInstagram className=" text-grey-15 cursor-pointer" size={20} />
          </Link>
          <Link href="https://github.com/guzamak" target="_blank">
            <FaGithub className=" text-grey-15 cursor-pointer" size={20} />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100052655073433" target="_blank">
            <FaFacebook className=" text-grey-15 cursor-pointer" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
