import { useState } from "react";
import Filterbox from "./Filterbox";
import Project from "./Project";

const projectData = [
  {
    imagePath: ["/snyth-co-1.png"],
    title: "Synth-Co",
    description:
      "Website that help you learn basic synthesizer from solving problem. ",
    type: "Website",
    url: {
      devpost: "https://devpost.com/software/synth-co",
      github: "https://github.com/guzamak/synth_co",
      www: "https://synth-co.vercel.app/",
    },
  },
  {
    imagePath: ["/mouth-ctrl-1.png"],
    title: "Mouth-Ctrl",
    description:
      "Website that allow you to draw with mouth and post your art to other user. ",
    type: "Website",
    url: {
      devpost: "https://devpost.com/software/mouth-ctrl",
      github: "https://github.com/guzamak/mouth_ctrl",
      www: "https://mouth-ctrl.vercel.app/",
    },
  },
  {
    imagePath: ["/ninju-1.png"],
    title: "Ninju",
    description:
      "Application that make you can use naruto hand sign to open file. ",
    type: "Other",
    url: {
      devpost: "https://devpost.com/software/ninju",
      github: "https://github.com/guzamak/Ninju",
    },
  },
  {
    imagePath: ["/todone-1.png"],
    title: "Todone",
    description:
      "Website that help you manage work by use node and link it together. ",
    type: "Website",
    url: {
      devpost: "https://devpost.com/software/todone",
      github: "https://github.com/guzamak/Todone",
      www: "https://todone01.vercel.app/",
    },
  },
  {
    imagePath: ["/rife-guard-1.png"],
    title: "Rife Guard",
    description:
      "Website that will predict rice diseases and classify it.",
    type: "Website",
    url: {
      devpost: "https://devpost.com/software/rife-guard",
      github: "https://github.com/guzamak/rife_guard",
      www: "https://pokenoi-rife-guard.hf.space/",
    },
  },
  {
    imagePath: ["/popchamp-1.png"],
    title: "POPCHAMP",
    description:
      "Game Like Popcat but Fire! I guess you are my little Popchamp. ",
    type: "Game",
    url: {
      itch: "https://pronwattana.itch.io/popchamp",
      github: "https://github.com/guzamak/POPCHAMP",
    },
  },
  {
    imagePath: ["/rentarou-simulator-1.png"],
    title: "Rentarou Simulator",
    description:
      "Game simulate life as Rentarou by separate Soulmates'favorite gift. ",
    type: "Game",
    url: {
      itch: "https://pronwattana.itch.io/rentarou-simulator",
      github: "https://github.com/guzamak/Rentarou_Simulator",
    },
  },
];

const filterType = ["Website", "Game", "Other"];
export default function ProjectList() {
  const [filter,setFilter] = useState();

  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-14">
      <h1 className="text-white text-4xl">- Project -</h1>
      <div className="flex gap-4 w-10/12 justify-center md:justify-start lg:justify-start">
        {filterType.map((type, i) => (
          <Filterbox title={type} key={i}/>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 place-items-center gap-10 ">
        {projectData.map((p, i) => (
          <Project
            key={i}
            title={p.title}
            desc={p.description}
            imagePath={p.imagePath}
            type={p.type}
            url={p.url}
          />
        ))}
      </div>
    </div>
  );
}
