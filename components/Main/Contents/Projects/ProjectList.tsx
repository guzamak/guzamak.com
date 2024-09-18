import { useState } from "react";
import Filterbox from "./Filterbox";
import Project from "./Project";
export default function ProjectList() {
  const [ProjectData, setProjectFData] = useState([
    {imagePath: "", title: "", description:"",type: ["",""]},
    {imagePath: "", title: "", description:"",type: ["",""]},
    {imagePath: "", title: "", description:"",type: ["",""]},
    {imagePath: "", title: "", description:"",type: ["",""]},
    {imagePath: "", title: "", description:"",type: ["",""]},
    {imagePath: "", title: "", description:"",type: ["",""]},
  ])
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-14">
      <h1 className="text-white text-4xl">
        - Project -
      </h1>
      <div className="flex gap-4 w-10/12 justify-center md:justify-start lg:justify-start">
                  <Filterbox />
                  <Filterbox />
                  <Filterbox />
                </div> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 place-items-center gap-10 ">
        {ProjectData.map((p,i) => (
          <Project key={i}/>
        ))}
      </div>
    </div>
  );
}
