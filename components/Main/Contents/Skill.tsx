import { useEffect, useRef, useState } from "react";

export default function Skill() {
  const [skills, setSkills] = useState([
    "html",
    "css",
    "tailwind",
    "react",
    "next",
    "node",
    "python",
  ]);
  const [skilldeg, setSkillsdeg] = useState(0);

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
    <div className="w-screen h-screen relative flex flex-col  gap-16 justify-center items-center">
      {[...Array(3)].map((_, i)=>(
        <div key={i} className="w-full">
            <h1 className="text-white text-9xl">Thank YOu</h1>
        </div>
      ))}
      <div className="absolute bg-blue-100 w-[500px] h-[500px] flex justify-center items-center">
        <div></div>
        <div className="w-32 h-32 flex justify-center items-center animate-loop-rotate">
          <p className="animate-hold-rotate text-4xl text-white">- Skill -</p>
          {skills.map((skill, index) => (
            <div
              className="absolute top-1/2 left-1/2 "
              style={{
                opacity: `${(100 * skilldeg) / 180 / 100}`,
                transform: `translate(-50%, -50%) translateX(${
                  200 *
                  Math.cos(
                    ((index * skilldeg) / skills.length) * (Math.PI / 180)
                  )
                }px) translateY(${
                  200 *
                  Math.sin(
                    ((index * skilldeg) / skills.length) * (Math.PI / 180)
                  )
                }px)`,
              }}
              key={index}
            >
              <div className="w-10 h-10 bg-black animate-hold-rotate text-white">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
