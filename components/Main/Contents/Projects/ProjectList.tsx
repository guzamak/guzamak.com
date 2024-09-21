import { useState } from "react";
import Filterbox from "./Filterbox";
import Project from "./Project";

const projectData = [
  {
    imagePath: [""],
    title: "Synth-Co",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quosin",
    type: "Website",
    url: {
      devpost: "https://devpost.com/software/synth-co",
      github: "https://github.com/guzamak/synth_co",
      www: "https://synth-co.vercel.app/",
    },
  },
  {
    imagePath: [""],
    title: "Mouth-Ctrl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quosin",
    type: "Website",
    url: {
      devpost: "https://devpost.com/software/mouth-ctrl",
      github: "https://github.com/guzamak/mouth_ctrl",
      www: "https://mouth-ctrl.vercel.app/",
    },
  },
  {
    imagePath: [""],
    title: "Ninju",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quosin",
    type: "Other",
    url: {
      devpost: "https://devpost.com/software/ninju",
      github: "https://github.com/guzamak/Ninju",
    },
  },
  {
    imagePath: [""],
    title: "Todone",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quosin",
    type: "Website",
    url: {
      devpost: "https://devpost.com/software/todone",
      github: "https://github.com/guzamak/Todone",
      www: "https://todone01.vercel.app/",
    },
  },
  {
    imagePath: [""],
    title: "Rife Guard",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quosDFin",
    type: "Website",
    url: {
      devpost: "https://devpost.com/software/rife-guard",
      github: "https://github.com/guzamak/rife_guard",
      www: "https://pokenoi-rife-guard.hf.space/",
    },
  },
  {
    imagePath: [""],
    title: "POPCHAMP",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quosin",
    type: "Game",
    url: {
      itch: "https://pronwattana.itch.io/popchamp",
      github: "https://github.com/guzamak/POPCHAMP",
    },
  },
  {
    imagePath: [""],
    title: "Rentarou Simulator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quosin",
    type: "Game",
    url: {
      itch: "https://pronwattana.itch.io/rentarou-simulator",
      github: "https://github.com/guzamak/Rentarou_Simulator",
    },
  },
];

const filterType = ["Website", "Game", "Other"];
export default function ProjectList() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-14">
      <h1 className="text-white text-4xl">- Project -</h1>
      <div className="flex gap-4 w-10/12 justify-center md:justify-start lg:justify-start">
        {filterType.map((type, index) => (
          <Filterbox title={type} />
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
