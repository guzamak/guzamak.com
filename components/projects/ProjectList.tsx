import { useEffect, useState } from "react";
import Filterbox from "./Filterbox";
import ProjectItem from "./ProjectItem";;
import { filterType, projectData } from "@/lib/datas";
import { Project, ProjectType } from "@/lib/types";

type FilterState =   {
  Website: boolean;
  Game: boolean;
  Other: boolean;
};

export default function ProjectList() {
  const [filter,setFilter] = useState<FilterState>({
    "Website" : true,
    "Game" : true,
    "Other" : true,
  });
  const [projects,setProjects] = useState<Array<Project>>(projectData);

  useEffect(() => {
    setProjects(projectData.filter((p)=>{
      return filter[p.type];
    }))
  },[filter])

  const handleFilterClick = (type: ProjectType) => {
    const newFilter = {
      ...filter,  
      [type]: !filter[type], 
    }
    if (Object.values(newFilter).filter(val => val == true).length > 0 ){
      setFilter(newFilter);
    }
  }

  return (
    <div className="container max-w-screen-2xl mx-auto px-4 flex flex-col items-center gap-y-14">
      <h1 className="text-white text-4xl font-Pixelify">- Project -</h1>
      <div className="flex gap-4 w-10/12 justify-center md:justify-start lg:justify-start">
        {filterType.map((type, i) => (
          <div onClick={() => handleFilterClick(type)} key={i}>
            <Filterbox title={type} isFilter={filter[type]} />
          </div>
        ))} 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 place-items-center gap-10">
        {projects.map((p, i) => (
          <ProjectItem
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
