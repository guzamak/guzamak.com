import { useEffect, useRef, useState } from "react";

export default function Skill() {
  const [skills, setSkills] = useState([1, 1, 1, 1, 11, 11, 1, 1, 1,1,1,1,1,]);
  const [skilldeg, setSkillsdeg] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setSkillsdeg(prevskilldeg => {
        if (prevskilldeg >= 360) {
          clearInterval(interval); 
          return prevskilldeg;
        }
        return prevskilldeg + 10; 
      });
    }, 75);

    return () => clearInterval(interval);
  }, [skilldeg]);


  return (
    <div className="w-screen h-screen bg-white relative flex justify-center items-center">
      <div className="w-32 h-32 absolute  flex justify-center items-center animate-loop-rotate">
        <p className="animate-hold-rotate">skill</p>
        {skills.map((skill, index) => (
          <div
            className="absolute top-1/2 left-1/2 "
            style={{
              opacity: `${(100 * skilldeg/180) /100}`,
              transform: `translate(-50%, -50%) translateX(${
                200 * Math.cos(((index * skilldeg) / skills.length) * (Math.PI / 180) )
              }px) translateY(${
                200 * Math.sin(((index * skilldeg) / skills.length) * (Math.PI / 180) )
              }px)`,

            }}
            key={index}
          >
            <div className="w-10 h-10 bg-black animate-hold-rotate text-white">html</div>
          </div>
        ))}
      </div>
    </div>
  );
}
